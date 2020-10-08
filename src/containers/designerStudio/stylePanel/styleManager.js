import React, { useState, useEffect } from "react"
import { connect, useSelector, useDispatch } from "react-redux"
import _ from 'lodash'
import Async from 'async'
import shortid from 'shortid'

import "./index.scss"
import Request from '../../../request'
import { setEditorStyleData, setStyleStr } from "../../../reducers/actions/editorHistoryActions";
import { openAssets } from "../../../reducers/actions/editor"
import _grapesEditor from "../../../components/utils/grapesEditor"
import { customEvents } from '../../../components/utils/grapesEditor/styleManager'
import Icons from '../../../assets/Icons'
import { CreateForm } from '../../../components/ui/editor'
import Integer from "../../../components/ui/editor/form/types/integer"

class StyleManager extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        transformKey: 'rotate',
        transformValue: {
            rotateX: '0deg',
            rotateY: '0deg',
            rotateZ: '0deg',
            scaleX: '1',
            scaleY: '1'
        },
        fontOptions: [],
        integratedBorderRadius: true,
        boxShadowRep: 0,
        boxShadowValue: this.props.selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'box-shadow'),
        textShadowValue: this.props.selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'text-shadow'),
        textShadowRep: 0,
        backgroundRep: 0,
        // backgroundValue: [],
        // showBackgroundComposite: false,
        // showBoxShadowComposite: false,
        // showTextShadowComposite: false
    }
    componentDidMount() {
        this.getFonts()
    }
    componentDidUpdate(prevProps, prevState) {
        const { selected, pseudoClass } = this.props
        if (prevProps.assetsManager != this.props.assetsManager) {
            this.getFonts()
        }
        // this.setcompositeHidden(prevState)
        if (prevProps.selected != this.props.selected) {
            this.forceUpdate()
            this.extractTransform()
        }
        if (this.props.selected && (prevProps.selected.node != this.props.selected.node)) {
            this.setState({
                boxShadowValue: selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'box-shadow'),
                textShadowValue: selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'text-shadow'),
                backgroundValue: this.extractBackgroundProperty()
            }, () => {
                this.setCompositeRep()

            })
        }
    }
    setcompositeHidden = (prevState) => {
        if (prevState.showBackgroundComposite != this.state.showBackgroundComposite) {
            document.querySelector('.background-composite-label .composite-open').style.display = this.state.showBackgroundComposite ? 'flex' : 'none'
            document.querySelector('.background-composite-label .composite-closed').style.display = !this.state.showBackgroundComposite ? 'flex' : 'none'
        }
        if (prevState.showBoxShadowComposite != this.state.showBoxShadowComposite) {
            document.querySelector('.box-shadow-composite-label .composite-open').style.display = this.state.showBoxShadowComposite ? 'flex' : 'none'
            document.querySelector('.box-shadow-composite-label .composite-closed').style.display = !this.state.showBoxShadowComposite ? 'flex' : 'none'
        }
        if (prevState.showTextShadowComposite != this.state.showTextShadowComposite) {
            document.querySelector('.text-shadow-composite-label .composite-open').style.display = this.state.showTextShadowComposite ? 'flex' : 'none'
            document.querySelector('.text-shadow-composite-label .composite-closed').style.display = !this.state.showTextShadowComposite ? 'flex' : 'none'
        }
    }
    setCompositeRep = () => {
        const { selected, pseudoClass } = this.props
        const { boxShadowRep, textShadowRep, backgroundRep } = this.state

        let value = null

        value = this.extractBackgroundProperty()
        this.handlechange('backgroundRep', ((value[0] && value[0].color !== 'rgba(0, 0, 0, 0)') || value.length > 1) ? value.length : 0)

        value = (selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'box-shadow') || 'none').split(/,(?![^(]*\))/)
        this.handlechange('boxShadowRep', (value[0] !== 'none') ? value.length : 0)

        value = (selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'text-shadow') || 'none').split(/,(?![^(]*\))/)
        this.handlechange('textShadowRep', (value[0] !== 'none') ? value.length : 0)
    }
    globalOnChange = async (obj, formData) => {
        const { selected, editorNode, pseudoClass, styleObj, dispatch } = this.props
        const { transformValue } = this.state
        let item = _.clone(obj)
        let status = 'style'
        if (item.key.includes('background')) {
            status = 'style-background'
        }
        // if (item.key.includes('transform')) {
        //     status = 'style'
        // }
        if (new RegExp(/X|Y|Z/).test(item.key)) {
            transformValue[`${this.state.transformKey}${item.key}`] = item.value
            item.key = 'transform'
            this.setState({ transformValue })
            item.value = ''
            _.each(transformValue, (val, key) => {
                item.value += `${key}(${val}) `
            })
            item.value = item.value.trim()
        }
        if (item.key == 'opacity') {
            // if (item.value.includes('px')) {
            //     item.value = `${parseInt(item.value.replace('px', '')) / 100}px`
            // }

            if (item.value.includes('%')) {
                item.value = parseFloat(item.value.replace('%', '')) / 100
            } else {
                item.value = parseFloat(item.value) / 100
            }
        }
        if (item.key == 'font-family') {
            item.value = item.value.trim()
            item.value = item.value.replace(/\+/gi, ' ')
        }
        if (!selected.node) {
            return
        }
        let className = selected.node.className.split(' ')
        let uniqueClass = _.find(className, (item) => {
            return item.includes('ss-')
        })
        if (!uniqueClass) {
            // do something
            uniqueClass = `ss-${shortid.generate()}`
            let editor = _grapesEditor.editor
            let componentModel = editor.getSelected()
            componentModel && componentModel.addClass(uniqueClass)
        }
        let uniqueClassIndex = styleObj.length
        selected.styleInfo.index.forEach(val => {
            if (pseudoClass == 'normal' && styleObj[val].selector.includes(':')) {
                return
            }
            if (styleObj[val].selector == (pseudoClass == 'normal' ? '.' + uniqueClass : `.${uniqueClass}:${pseudoClass}`)) {
                uniqueClassIndex = val
            }
        })

        let requiredStyleObj = _.cloneDeep(styleObj[uniqueClassIndex]) || {}
        requiredStyleObj.selector = (pseudoClass == 'normal' ? '.' + uniqueClass : `.${uniqueClass}:${pseudoClass}`)  // if selector not there
        if (requiredStyleObj.styles) {
            requiredStyleObj.styles = {
                ...requiredStyleObj.styles,
                [item.key]: item.value
            }
        } else {
            requiredStyleObj.styles = {
                [item.key]: item.value
            }
        }
        // if item.key == shapeDivider, etc then do something else

        //========================================================
        let cssString = ''
        _.forEach(requiredStyleObj.styles, (val, key) => {
            cssString += `
            ${key}:${val};`
        })
        cssString = `
        ${requiredStyleObj.selector} {${cssString}
        }`
        //get style string from redux
        let str = _.clone(this.props.styleStr)
        let data = _grapesEditor.styleManager.extractBlock(`${requiredStyleObj.selector} {`, str)
        if (data.customCode != '') {
            str = data.str
        }
        str = str.replace('</style>', `${cssString} </style>`)
        styleObj[uniqueClassIndex] = requiredStyleObj
        // update style tag and redux history
        dispatch(setEditorStyleData(styleObj, { status }))
        let response = await dispatch(setStyleStr(str, { update: true, status }))
        let {editor} = _grapesEditor
        if(response) {
            // editor.setStyle(str);
            // let frame = document.getElementsByClassName("gjs-frame");
            // const grapesDocument = frame[0].contentWindow.document;
            // let SSStyle = grapesDocument.getElementsByClassName("ss-style")
            // if(SSStyle) {
            //     SSStyle.innerHTML = str;
            // }
        }

        //set selected
        if (pseudoClass == 'normal') {
            customEvents.saveStyleInfo({ elem: selected.node, node: editorNode })
            return
        }
        customEvents.saveStyleInfo({ elem: selected.node, node: editorNode }, { pseudoClass: pseudoClass }, () => {
            // this.setCompositeRep()
            if (item.key === 'text-shadow') {
                this.setState({ textShadowValue: selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'text-shadow') })
            } else if (item.key === 'box-shadow') {
                this.setState({ boxShadowValue: selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'box-shadow') })
            } else if (item.key.includes('background')) {
                this.setState({ backgroundValue: this.extractBackgroundProperty() })
            }
            this.state.globalOnchangeCallBack && this.state.globalOnchangeCallBack()
        })

    }
    createCategories = (data) => {
        const { opened } = this.state
        const toggleOpen = (key) => {
            if (opened == key) {
                this.setState({ opened: -1 })
                return
            }
            this.setState({ opened: key })

        }
        const label = (item, key) => (
            <div className={'category-label'}>
                {item.label}
                {opened == key ? (
                    <Icons.Dropdown className={'dropdown'} style={{ width: '9px', height: '9px' }} />
                ) : (
                        <Icons.RightArrow className={'rightArrow'} style={{ width: '4.5px', height: '9px', marginRight: '3px' }} />
                    )}

            </div>)
        return data.map((item, key) => {
            return (<div key={key}>
                <div onClick={() => { toggleOpen(key) }}>{item.render ? item.render() : label(item, key)}</div>
                {opened == key && <div className={item.childerClass || 'category-children'}>{item.children}</div>}
            </div>)
        })
    }
    extractTransform = () => {
        const { selected } = this.props
        let resp = this.state.transformValue
        let transform = selected.styleInfo.styles && selected.styleInfo.styles[['transform']] || ''
        // transform = 'rotateX(45deg) rotateY(50deg)'      //deleteme
        if (transform != '') {
            transform = transform.split(' ')
            _.each(transform, (val) => {
                _.each(resp, (value, key) => {
                    if (val.includes(key)) {
                        resp[key] = val.substring(val.lastIndexOf("(") + 1, val.lastIndexOf(")"))
                    }
                })
            })
            this.setState({ transformValue: resp })
        }
    }
    extractBackgroundProperty = () => {
        const { selected, pseudoClass } = this.props
        const { } = this.state
        let value = []
        let backgroundImage = (selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'background-image')) || 'none',
            backgroundColor = (selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'background-color')) || null,
            backgroundBlendMode = (selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'background-blend-mode')) || 'normal',
            backgroundRepeat = (selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'background-repeat')) || 'repeat',
            backgroundPosition = (selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'background-position')) || '0% 0%',
            backgroundAttachment = (selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'background-attachment')) || 'scroll',
            backgroundSize = (selected.node && _grapesEditor.styleManager.getStyles(this.props.selected, this.props.pseudoClass, 'background-size')) || 'auto'
        let split = (string) => {
            let extracted = []
            if (string.includes('radial')) {
                const getIndicesOf = (searchStr, str, caseSensitive) => {
                    var searchStrLen = searchStr.length;
                    if (searchStrLen == 0) {
                        return [];
                    }
                    var startIndex = 0, index, indices = [];
                    if (!caseSensitive) {
                        str = str.toLowerCase();
                        searchStr = searchStr.toLowerCase();
                    }
                    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
                        indices.push(index);
                        startIndex = index + searchStrLen;
                    }
                    return indices;
                }
                let start = getIndicesOf('radial-gradient', string, false)
                let end = []
                _.each(start, (first, index) => {
                    for (let i = first; i < string.length; i++) {
                        if (string[i] == '%') {
                            extracted.push(i)
                        } else if (string[i] == ',') {
                            break;
                        }
                    }
                })
                _.each(extracted, (val, index) => {
                    string = string.substr(0, val) + '>' + string.substr(val + 1)
                })
            }
            var token = /((?:[^"']|".*?"|'.*?')*?)([(,)]|$)/g;
            function recurse() {
                for (var array = []; ;) {
                    var result = token.exec(string);
                    if (result[2] == '(') {
                        array.push(result[1].trim() + '(' + recurse().join(',') + ')');
                        result = token.exec(string);
                    } else array.push(result[1].trim());
                    if (result[2] != ',') {
                        if (result[2] == ')' && result[1][result[1].length - 1] == '%') {
                            array[array.length - 1] += result[1];
                        }
                        return array
                    }
                    else if (result[2] == ',' && result[1][result[1].length - 1] == '%') {
                        array[array.length - 1] += result[1];
                    }
                }
            }
            let resp = recurse()
            resp.forEach((item, index) => {
                resp[index] = item.replace(/>/gi, '%')
            })
            return resp
        }
        if (backgroundColor) {
            if (!(backgroundColor === 'rgba(0, 0, 0, 0)')) {
                value.push({ type: 'color', color: backgroundColor })
            }
        }
        backgroundImage = split(backgroundImage)
        backgroundRepeat = backgroundRepeat.split(',')
        backgroundBlendMode = backgroundBlendMode.split(',')
        backgroundPosition = backgroundPosition.split(',')
        backgroundAttachment = backgroundAttachment.split(',')
        backgroundSize = backgroundSize.split(',')

        _.each(backgroundImage, (image, key) => {
            if (image != 'none') {
                let imageDetails = {
                    image: image.trim(),
                    blendMode: backgroundBlendMode[key] ? backgroundBlendMode[key].trim() : backgroundBlendMode[0].trim(),
                    repeat: backgroundRepeat[key] ? backgroundRepeat[key].trim() : backgroundRepeat[0].trim(),
                    position: backgroundPosition[key] ? backgroundPosition[key].trim() : backgroundPosition[0].trim(),
                    attachment: backgroundAttachment[key] ? backgroundAttachment[key].trim() : backgroundAttachment[0].trim(),
                    size: backgroundSize[key] ? backgroundSize[key].trim() : backgroundSize[0].trim(),
                    type: image.trim().includes('url') ? 'image' : 'gradient'
                }
                value.push(imageDetails)
            }
        })
        return value
    }
    updateBackgroundProperty = (valArr, cb = () => { }) => {
        // evaluate and update specific property using this array
        let css = {
            'background-color': ['rgba(0, 0, 0, 0)'],
            'background-image': [],
            'background-position': [],
            'background-size': [],
            'background-attachment': [],
            'background-blend-mode': [],
            'background-repeat': []
        }
        let count = _.countBy(valArr, (item) => {
            return item.type
        })
        if (count.color > 1) {
            let lastIndex = _.findLastIndex(valArr, function (o) { return o.type == 'color' })
            valArr.splice(lastIndex, 1)
            this.setState({ backgroundRep: valArr.length })
        }
        valArr.forEach(item => {
            if (item.type === 'color') {
                css['background-color'] = [item.color]
                return
            }
            css['background-image'].push(item.image)
            css['background-position'].push(item.position)
            css['background-size'].push(item.size)
            css['background-attachment'].push(item.attachment)
            css['background-blend-mode'].push(item.blendMode)
            css['background-repeat'].push(item.repeat)
        })
        //loop css and up date  color->image->position->size->attachment->repeat->blendMode
        Async.eachOf(css, (value, key, next) => {
            setTimeout(() => {
                if (key == 'background-image' && value.join(', ').trim() == '') {
                    this.globalOnChange({ key, value: 'none' })
                } else {
                    this.globalOnChange({ key, value: value.join(', ') })
                }
                next()
            }, 10)
        }, () => {
            cb()
        })
    }
    backgroundCompositeField({ value, position: key, backgroundRep, updateRep, onChange, globalOnChange }) {
        // const { backgroundKey } = this.state
        const [state, setState] = useState({ backgroundKey: 'image', selecting: -1 })
        let { backgroundKey } = state
        const { backgroundImage, assetsManager } = useSelector(
            ({ editor }) => ({
                backgroundImage: editor.backgroundImage,
                assetsManager: editor.assetsManager
            })
        )
        const dispatch = useDispatch()
        useEffect(() => {
            if (value && backgroundImage && state.selecting == key) {
                let valueStr = value.image
                valueStr = valueStr.replace(/url\(|"|'|\)/gi, '')
                if (valueStr != backgroundImage) {
                    handleOnChange({ key: 'image', value: `url(${backgroundImage})` })
                }
            }
        }, [backgroundImage])
        useEffect(() => {
            if (!!!assetsManager) {
                setState({ ...state, selecting: -1 })
            }
        }, [assetsManager])
        useEffect(() => {
            if (value) {
                setState({ ...state, backgroundKey: value.type, position: value.position })
            }
        }, [value])
        let handleOnChange = (item, action = '') => {
            if (action === 'backgroundRemove') {
                onChange(item, key, 'backgroundRemove')
                return
            }
            onChange(item, key, 'background')
        }
        const extractValue = (data) => {
            let unit = data.replace(/[0-9]|\./gi, '')
            return data.replace(unit, '')
        }
        const extractPropertyValue = (val) => {
            if (!val || val.length == 0) {
                return 'center center'
            }
            val = val.trim()
            val = val.split(' ')
            let resp = val
            val.forEach((x, index) => {
                x = parseInt(x)
                switch (x) {
                    case 0:
                        resp[index] = index == 0 ? 'left' : 'top'
                        break;
                    case 50:
                        resp[index] = 'center'
                        break;
                    case 100:
                        resp[index] = index == 0 ? 'right' : 'bottom'
                        break;
                    default:
                        break;
                }
            })
            return resp.join(' ')
        }
        let switcher = [
            {
                type: 'custom',
                inline: true,
                render: (value) => {
                    return <div className={'background-type-shift-btn'}>
                        <div className={backgroundKey == 'image' ? 'selected' : 'inactive'} style={{ borderRadius: backgroundKey == 'image' ? '4px 0px 0px 4px' : '0px' }}
                            onClick={() => {
                                if (backgroundKey == 'image') return
                                handleOnChange({ key: 'image', value: 'url("http://grapesjs.com/img/work-desk.jpg")', switcher: true })
                                setState({ ...state, backgroundKey: 'image' })
                            }}
                        >
                            <Icons.BackgroundImage style={{ width: '20px', height: '20px' }} />
                        </div>
                        <div className={backgroundKey == 'color' ? 'selected' : 'inactive'}
                            onClick={() => {
                                if (backgroundKey == 'color') return
                                handleOnChange({ key: 'color', value: '#FFFFFF00' })
                                setState({ ...state, backgroundKey: 'color' })
                            }}
                        >
                            <Icons.BackgroundColor style={{ width: '12px', height: '12px' }} />
                        </div>
                        <div className={backgroundKey == 'gradient' ? 'selected' : 'inactive'} style={{ borderRadius: backgroundKey == 'gradient' ? '0px 4px 4px 0px' : '0px' }}
                            onClick={() => {
                                if (backgroundKey == 'gradient') return
                                handleOnChange({ key: 'gradient', value: 'linear-gradient(90deg, rgba(2,0,36,1) 6%, rgba(1,87,126,1) 94%)', switcher: true })
                                setState({ ...state, backgroundKey: 'gradient' })
                            }}
                        >
                            <Icons.BackgroundGradient style={{ width: '12px', height: '12px' }} />
                        </div>
                    </div>
                }
            }
        ]
        let blendMode = {
            label: 'Blend Mode',
            key: 'blendMode',
            type: 'select', //required
            value: value && value.blendMode,
            // width: '48%',
            options: [  //optional type: Array of string, Array of objects
                {
                    label: 'Normal',
                    value: 'normal'
                },
                {
                    type: 'divider'
                },
                {
                    label: 'Lighten',
                    value: 'lighten'
                },
                {
                    label: 'Darken',
                    value: 'darken'
                },
                {
                    label: 'Multiply',
                    value: 'multiple'
                },
                {
                    label: 'Color Burn',
                    value: 'color-burn'
                },
                {
                    label: 'Linear Dodge',
                    value: 'color-dodge'
                },
                {
                    type: 'divider'
                },
                {
                    label: 'Overlay',
                    value: 'overlay'
                },
                {
                    label: 'Soft Light',
                    value: 'soft-light'
                },
                {
                    label: 'Hard Light',
                    value: 'hard-light'
                },
                {
                    type: 'divider'
                },
                {
                    label: 'Difference',
                    value: 'difference'
                },
                {
                    label: 'Exclusion',
                    value: 'exclusion'
                },
                {
                    type: 'divider'
                },
                {
                    label: 'Hue',
                    value: 'hue'
                },
                {
                    label: 'Saturation',
                    value: 'saturation'
                },
                {
                    label: 'Color',
                    value: 'color'
                },
                {
                    label: 'Luminosity',
                    value: 'luminosity'
                },
                {
                    label: 'Screen',
                    value: 'screen'
                },
            ],
        }
        let imageFields = [
            {
                // label: 'Border Radius',
                key: 'image',
                value: value && value.image,
                type: 'custom',
                inline: true,
                render: (value, globalOnChange) => {
                    return <div className={'choose-image-btn'} onClick={() => {
                        setState({ ...state, selecting: key })
                        value = value.replace(/url\(|"|'|\)/gi, '')
                        dispatch(openAssets({ type: 'imageBackground', backgroundImage: value }))
                    }}>
                        Choose image
                    </div>
                }
            },
            { ...blendMode },
            {
                label: 'Repeat',
                key: 'repeat',
                type: 'select', //required
                value: value && value.repeat,
                width: '48%',
                containerClass: 'background-repeat-list',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: 'No Repeat',
                        value: 'no-repeat'
                    },
                    {
                        label: 'Repeat',
                        value: 'repeat'
                    },
                    {
                        label: 'Repeat X',
                        value: 'repeat-x'
                    },
                    {
                        label: 'Repeat Y',
                        value: 'repeat-y'
                    },
                    {
                        label: 'Space',
                        value: 'space'
                    },
                    {
                        label: 'Round',
                        value: 'round'
                    },
                ],
            },
            {
                label: 'Position (X Y)',
                key: 'position',
                type: 'select', //required
                value: value ? extractPropertyValue(state.position) : 'center center',
                width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: 'Left Top',
                        value: 'left top'
                    },
                    {
                        label: 'Left Center',
                        value: 'left center'
                    },
                    {
                        label: 'Left Bottom',
                        value: 'left bottom'
                    },
                    {
                        label: 'Center Top',
                        value: 'center top'
                    },
                    {
                        label: 'Center Center',
                        value: 'center center'
                    },
                    {
                        label: 'Center Bottom',
                        value: 'center bottom'
                    },
                    {
                        label: 'Right Top',
                        value: 'right top'
                    },
                    {
                        label: 'Right Center',
                        value: 'right center'
                    },
                    {
                        label: 'Right Bottom',
                        value: 'right bottom'
                    },
                ],
            },
            {
                label: 'Attachment',
                key: 'attachment',
                type: 'select', //required
                value: value && value.attachment,
                width: '48%',
                containerClass: 'background-attachment-list',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: 'Scroll',
                        value: 'scroll'
                    },
                    {
                        label: 'Fixed',
                        value: 'fixed'
                    },
                    {
                        label: 'Local',
                        value: 'local'
                    },
                ],
            },
            {
                label: 'Size',
                key: 'size',
                type: 'select', //required
                value: ['contain', 'cover', 'auto', 'initial'].includes(value && value.size) ? value.size : 'initial',
                width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: 'Auto',
                        value: 'auto'
                    },
                    {
                        label: 'Contain',
                        value: 'contain'
                    },
                    {
                        label: 'Cover',
                        value: 'cover'
                    },
                    {
                        label: 'Initial',
                        value: 'initial'
                    },
                ],
            },
        ]
        let colorFields = [
            {
                key: 'color',
                type: 'picker',
                value: value && value.color
            },
        ]
        let gradientFields = [
            {
                key: 'gradient',
                type: 'gradient',
                value: value && value.image
            },
            {
                ...blendMode,
                containerClass: 'gradient-blend-select'
            },
        ]
        let fields = []
        switch (backgroundKey) {
            case 'image':
                fields = [...switcher, ...imageFields]
                break;
            case 'color':
                fields = [...switcher, ...colorFields]
                break;
            case 'gradient':
                fields = [...switcher, ...gradientFields]
                break;
            default:
                break;
        }
        return (<div className={'background-composite-field'}>
            {/* {`${hOffset} ${vOffset} ${blur} ${spread} ${color} ${type}`} */}
            <div className={'composite-cross'}>
                <Icons.Plus onClick={() => {
                    handleOnChange({}, 'backgroundRemove')
                    updateRep('backgroundRep', backgroundRep - 1)
                    // this.setState({ backgroundRep: this.state.backgroundRep - 1 })
                }} style={{ width: '12px', height: '12px', transform: 'rotateZ(45deg)' }} />
            </div>
            <CreateForm fields={fields} globalOnChange={handleOnChange} />
        </div>)
    }
    textShadowCompositeField({ value, position: key, onChange, textShadowRep, updateRep, globalOnChange }) {
        const [state, setState] = useState({
            hOffset: '0px',
            vOffset: '0px',
            blur: '0px',
            color: '#FFFFFF00',
        })
        let { hOffset, vOffset, blur, color } = state
        useEffect(() => {
            if (value != null) {
                // meane value was 'none'
                // remove inset if present
                let newValue = value
                newValue = newValue.trim().split(/ (?![^(]*\))/)
                setState({
                    ...state,
                    color: newValue[0],
                    hOffset: newValue[1],
                    vOffset: newValue[2],
                    blur: newValue[3]
                })
                let resp = `${extractValue(newValue[1])}px ${extractValue(newValue[2])}px ${extractValue(newValue[3])}px ${newValue[0]}`
                onChange(resp, key, 'setArray')
            }
        }, [])

        useEffect(() => {
            if (value != null) {
                // meane value was 'none'
                // remove inset if present
                let newValue = value
                newValue = newValue.trim().split(/ (?![^(]*\))/)
                setState({
                    ...state,
                    color: newValue[0],
                    hOffset: newValue[1],
                    vOffset: newValue[2],
                    blur: newValue[3],
                })
                let resp = `${extractValue(newValue[1])}px ${extractValue(newValue[2])}px ${extractValue(newValue[3])}px ${newValue[0]}`
                onChange(resp, key, 'setArray')
            }
        }, [value])
        let handleOnChange = (item, action = '') => {
            if (action === 'delete' && item === 'none') {
                onChange('none', key, action)
                return
            }
            let val = null
            switch (item.key) {
                case 'hOffset':
                    if (item.value === '' || item.value === '-') {
                        return
                    }
                    val = extractValue(item.value)
                    // setState({ ...state, [item.key]: extractValue(item.value) })
                    // hOffset = extractValue(item.value)
                    break;
                case 'vOffset':
                    if (item.value === '' || item.value === '-') {
                        return
                    }
                    val = extractValue(item.value)
                    // setState({ ...state, [item.key]: extractValue(item.value) })
                    // vOffset = extractValue(item.value)
                    break;
                case 'blur':
                    if (item.value === '' || item.value === '-') {
                        return
                    }
                    val = extractValue(item.value)
                    // setState({ ...state, [item.key]: extractValue(item.value) })
                    // blur = extractValue(item.value)
                    break;
                case 'color':
                    if (item.value === '' || item.value === '-') {
                        return
                    }
                    val = item.value
                    // setState({ ...state, [item.key]: item.value })
                    // color = item.value
                    break;
                default:
                    break;
            }
            if (val || action === 'delete') {
                setState({ ...state, [item.key]: val })
                let resp = `${extractValue(item.key == 'hOffset' ? val : hOffset)}px ${extractValue(item.key == 'vOffset' ? val : vOffset)}px ${extractValue(item.key == 'blur' ? val : blur)}px ${item.key == 'color' ? val : color}`
                onChange(resp, key, action)
            }
        }
        const extractValue = (data) => {
            let unit = data.replace(/[0-9]|\.|-/gi, '')
            return data.replace(unit, '')
        }
        const fields = [
            {
                label: 'Blur',
                key: 'blur',
                type: 'integer',
                value: extractValue(blur),
                width: '30.3%',
            },
            {
                label: 'X',
                key: 'hOffset',
                type: 'integer',
                value: extractValue(hOffset),
                width: '30.3%',
            },
            {
                label: 'Y',
                key: 'vOffset',
                type: 'integer',
                value: extractValue(vOffset),
                width: '30.3%',
            },
            {
                key: 'color',
                type: 'picker',
                value: color,
            },
        ]
        return <div>
            {/* {`${hOffset} ${vOffset} ${blur} ${spread} ${color} ${type}`} */}
            <div className={'composite-cross'}>
                <Icons.Plus onClick={() => {
                    if (textShadowRep - 1 == 0) {
                        handleOnChange('none', 'delete')
                    } else {
                        handleOnChange({}, 'delete')
                    }
                    updateRep('globalOnchangeCallBack', () => {
                        updateRep('textShadowRep', textShadowRep - 1)
                        updateRep('globalOnchangeCallBack', null)
                    })
                }} style={{ width: '12px', height: '12px', transform: 'rotateZ(45deg)' }} />
            </div>
            <CreateForm fields={fields} globalOnChange={handleOnChange} />
        </div>
    }
    boxShadowCompositeField({ value, position: key, onChange, boxShadowRep, updateRep, globalOnChange }) {
        const [state, setState] = useState({
            hOffset: '0px',
            vOffset: '0px',
            blur: '0px',
            spread: '0px',
            color: '#00000000',
            type: ' '
        })
        let { hOffset, vOffset, blur, spread, color, type } = state
        useEffect(() => {
            if (value != null) {
                // meane value was 'none'
                // remove inset if present
                let newValue = value
                let inside = false
                if (newValue.includes('inset')) {
                    setState({
                        ...state,
                        type: 'inset'
                    })
                    newValue = newValue.replace('inset', '')
                    inside = true
                }
                newValue = newValue.trim().split(/ (?![^(]*\))/)
                setState({
                    ...state,
                    color: newValue[0],
                    hOffset: newValue[1],
                    vOffset: newValue[2],
                    blur: newValue[3],
                    spread: newValue[4]
                })
                let resp = `${extractValue(newValue[1])}px ${extractValue(newValue[2])}px ${extractValue(newValue[3])}px  ${extractValue(newValue[4])}px ${newValue[0]} ${inside ? 'inset' : ' '}`
                onChange(resp, key, 'setArray')
            }
        }, [])

        useEffect(() => {
            if (value != null) {
                // meane value was 'none'
                // remove inset if present
                let newValue = value
                let inside = false
                if (newValue.includes('inset')) {
                    setState({
                        ...state,
                        type: 'inset'
                    })
                    newValue = newValue.replace('inset', '')
                    inside = true
                }
                newValue = newValue.trim().split(/ (?![^(]*\))/)
                setState({
                    ...state,
                    color: newValue[0],
                    hOffset: newValue[1],
                    vOffset: newValue[2],
                    blur: newValue[3],
                    spread: newValue[4]
                })
                let resp = `${extractValue(newValue[1])}px ${extractValue(newValue[2])}px ${extractValue(newValue[3])}px  ${extractValue(newValue[4])}px ${newValue[0]} ${inside ? 'inset' : ' '}`
                onChange(resp, key, 'setArray')
            }
        }, [value])
        let handleOnChange = (item, action = '') => {
            if (action === 'delete' && item === 'none') {
                onChange('none', key, action)
                return
            }
            let val = null
            switch (item.key) {
                case 'hOffset':
                    if (item.value === '' || item.value === '-') {
                        return
                    }
                    val = extractValue(item.value)
                    // setState({ ...state, [item.key]: extractValue(item.value) })
                    // hOffset = extractValue(item.value)
                    break;
                case 'vOffset':
                    if (item.value === '' || item.value === '-') {
                        return
                    }
                    val = extractValue(item.value)
                    // setState({ ...state, [item.key]: extractValue(item.value) })
                    // vOffset = extractValue(item.value)
                    break;
                case 'blur':
                    if (item.value === '' || item.value === '-') {
                        return
                    }
                    val = extractValue(item.value)
                    // setState({ ...state, [item.key]: extractValue(item.value) })
                    // blur = extractValue(item.value)
                    break;
                case 'spread':
                    if (item.value === '' || item.value === '-') {
                        return
                    }
                    val = extractValue(item.value)
                    // setState({ ...state, [item.key]: extractValue(item.value) })
                    // spread = extractValue(item.value)
                    break;
                case 'color':
                    if (item.value === '' || item.value === '-') {
                        return
                    }
                    val = item.value
                    // setState({ ...state, [item.key]: item.value })
                    // color = item.value
                    break;
                case 'type':
                    val = item.value
                    // setState({ ...state, [item.key]: item.value })
                    // type = item.value
                    break;
                default:
                    break;
            }
            if (val || action === 'delete') {
                setState({ ...state, [item.key]: val })
                let resp = `${extractValue(item.key == 'hOffset' ? val : hOffset)}px ${extractValue(item.key == 'vOffset' ? val : vOffset)}px ${extractValue(item.key == 'blur' ? val : blur)}px ${extractValue(item.key == 'spread' ? val : spread)}px ${item.key == 'color' ? val : color} ${item.key == 'type' ? val : type}`
                onChange(resp, key, action)
            }
        }
        const extractValue = (data) => {
            let unit = data.replace(/[0-9]|\.|-/gi, '')
            return data.replace(unit, '')
        }
        const fields = [
            {
                label: 'Blur',
                key: 'blur',
                type: 'integer',
                value: extractValue(blur),
                width: '30.3%',
            },
            {
                label: 'X',
                key: 'hOffset',
                type: 'integer',
                value: extractValue(hOffset),
                width: '30.3%',
            },
            {
                label: 'Y',
                key: 'vOffset',
                type: 'integer',
                value: extractValue(vOffset),
                width: '30.3%',
            },
            {
                label: 'Spread',
                key: 'spread',
                type: 'integer',
                value: extractValue(spread),
                width: '48%',
            },
            {
                label: 'Shadow Type',
                key: 'type',
                type: 'select', //required
                value: type || 'Outside',
                width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: 'Outside',
                        value: ' '
                    },
                    {
                        label: 'Inside',
                        value: 'inset'
                    },
                ],
            },
            {
                key: 'color',
                type: 'picker',
                value: color,
            },
        ]
        return <div>
            {/* {`${hOffset} ${vOffset} ${blur} ${spread} ${color} ${type}`} */}
            <div className={'composite-cross'}>
                <Icons.Plus onClick={() => {
                    if (boxShadowRep - 1 == 0) {
                        handleOnChange('none', 'delete')
                    } else {
                        handleOnChange({}, 'delete')
                    }
                    updateRep('globalOnchangeCallBack', () => {
                        updateRep('boxShadowRep', boxShadowRep - 1)
                        updateRep('globalOnchangeCallBack', null)
                    })

                    // updateRep('boxShadowRep', boxShadowRep - 1)
                    // this.setState({ boxShadowRep: this.state.boxShadowRep - 1, globalOnchangeCallBack: null })
                }} style={{ width: '12px', height: '12px', transform: 'rotateZ(45deg)' }} />
            </div>
            <CreateForm fields={fields} globalOnChange={handleOnChange} />
        </div>
    }
    getFonts = () => {
        const { assets, dispatch } = this.props
        let { fonts } = assets
        let defaultFonts = [
            {
                type: 'custom',
                render: () => {
                    return (
                        <div className={'typography-fonts-googlefonts'}>
                            Google Fonts
                            <Icons.OpenLink style={{ width: '10px', height: '10px', marginLeft: '6px' }} />
                        </div>
                    )
                }
            },
            {
                type: 'custom',
                render: () => {
                    return <div class="typography-list-divider"></div>
                }
            },
            {
                label: 'Abel',
                value: 'Abel',
            },
            {
                label: 'Allerta',
                value: 'Allerta',
            },
            {
                label: 'Amarnth',
                value: 'Amarnth',
            },
            {
                label: 'Amatic SC',
                value: 'Amatic+SC',
            },
            {
                label: 'Anton',
                value: 'Anton',
            },
            // {    //not found
            //     label: 'Arial',
            //     value: 'Arial',
            // },
            {
                label: 'Arimo',
                value: 'Arimo',
            },
            {
                label: 'Arvo',
                value: 'Arvo',
            },
            {
                label: 'Asap',
                value: 'Asap',
            },
            // {    //not found
            //     label: 'Bahnschrift',
            //     value: 'Bahnschrift',
            // },
            {
                label: 'Bitter',
                value: 'Bitter',
            },
            {
                label: 'Black Ops One',
                value: 'Black+Ops+One',
            },
            {
                label: 'Bree Serif',
                value: 'Bree+Serif',
            },
            {
                label: 'Cabin',
                value: 'Cabin',
            },
            {
                label: 'Cabin Condensed',
                value: 'Cabin+Condensed',
            },
            // {    //not found
            //     label: 'Calibri',
            //     value: 'Calibri',
            // },
            {
                label: 'Calligraffitti',
                value: 'Calligraffitti',
            },
            // {    //not found
            //     label: 'Cambria',
            //     value: 'Cambria',
            // },
            // {    //not found
            //     label: 'Candara',
            //     value: 'Candara',
            // },
            {
                label: 'Cantarell',
                value: 'Cantarell',
            },
            {
                label: 'Cardo',
                value: 'Cardo',
            },
            {
                label: 'Changa One',
                value: 'Changa+One',
            },
        ]
        let resp = fonts.map((item) => {
            return {
                label: item,
                value: item.replace(/ /gi, '+')
            }
        })
        resp = [
            {
                type: 'custom',
                render: () => {
                    return (
                        <div className={'typography-fonts-googlefonts'} onClick={() => { dispatch(openAssets({ type: 'font' })) }}>
                            Google Fonts
                            <Icons.OpenLink style={{ width: '10px', height: '10px', marginLeft: '6px' }} />
                        </div>
                    )
                }
            },
            {
                type: 'custom',
                render: () => {
                    return <div class="typography-list-divider"></div>
                }
            },
            ...resp
        ]
        this.setState({ fontOptions: resp })
    }
    handlechange = (key, value) => {
        this.setState({ [key]: value }, () => {
        })
    }
    render() {
        const { transformKey } = this.state
        const { selected, editorNode, pseudoClass } = this.props
        const generalFormFields = [
            {
                label: () => { return <div>Alignment</div> }, //optional; Type: String || () => {}
                key: 'float',
                type: 'radioBtn', //required
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'float'),
                // width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: <Icons.Cross className={'rightArrow'} style={{ width: '8.25px', height: '8.25px' }} />,
                        value: 'none'
                    },
                    {
                        label: <Icons.AlignLeft className={'rightArrow'} style={{ width: '13.33px', height: '7.5px' }} />,
                        value: 'left'
                    },
                    {
                        label: <Icons.AlignRight className={'rightArrow'} style={{ width: '11.67px', height: '7.5px' }} />,
                        value: 'right'
                    },
                ],
                // render: (value, globalOnChange) => {
                //     return <div>{value}</div>
                // }
                // inline: true,
                // rules: '', // optional {rules like required, nullable etc}
                // multiple: true
                // containerStyle: {},
                // containerClass: '',
                labelClass: 'custom-label',
                // labelStyle: {
                //     'fontStyle': 'normal',
                //     'fontWeight': 'normal',
                //     'fontSize': '13px',
                //     'lineHeight': '16px',
                //     'color': '#FFFFFF'
                // },
                // fieldStyle: {},
                // fieldClass: '',
                // onChange: (val) => {}, // optional instead have global
            },
            {
                label: 'Display',
                key: 'display',
                type: 'select',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'display') || 'Auto',
                width: '48%',
                containerClass: 'display-list',
                options: [
                    {
                        label: 'Block',
                        value: 'block'
                    },
                    {
                        label: 'Inline',
                        value: 'inline'
                    },
                    {
                        label: 'Inline Block',
                        value: 'inline-block'
                    },
                    {
                        label: 'Flex',
                        value: 'flex'
                    },
                    {
                        label: 'None',
                        value: 'none'
                    },
                ],
            },
            {
                label: 'Position',
                key: 'position',
                type: 'select',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'position') || 'Auto',
                width: '48%',
                options: [
                    {
                        label: 'Absolute',
                        value: 'absolute'
                    },
                    {
                        label: 'Fixed',
                        value: 'fixed'
                    },
                    {
                        label: 'Inherit',
                        value: 'inherit'
                    },
                    {
                        label: 'Initial',
                        value: 'initial'
                    },
                    {
                        label: 'Relative',
                        value: 'relative'
                    },
                    {
                        label: 'Revert',
                        value: 'revert'
                    },
                    {
                        label: 'Static',
                        value: 'static'
                    },
                    {
                        label: 'Sticky',
                        value: 'sticky'
                    },
                    {
                        label: 'Unset',
                        value: 'unset'
                    },
                ],
            },
            {
                label: 'Top X',
                key: 'top',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'top'),
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Right X',
                key: 'right',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'right'),
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Left X',
                key: 'left',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'left'),
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Bottom X',
                key: 'bottom',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'bottom'),
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                type: 'divider'
            },
        ]
        const dimensionFormFields = [
            {
                label: 'Width',
                key: 'width',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'width'),
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Heigth',
                key: 'height',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'height'),
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Max Width',
                key: 'max-width',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'maxWidth'),
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Max Height',
                key: 'max-height',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'maxHeight'),
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Spacing',
                type: 'custom',
                labelClass: 'custom-label',
                render: (value, globalOnChange) => {
                    let margin = {
                        top: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'marginTop'),
                        right: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'marginRight'),
                        bottom: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'marginBottom'),
                        left: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'marginLeft'),
                    }
                    let padding = {
                        top: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'paddingTop'),
                        right: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'paddingRight'),
                        bottom: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'paddingBottom'),
                        left: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'paddingLeft'),
                    }
                    let handleOnChange = (val, key) => {    //val: 20px, key: 'margin.top'
                        key = key.split('.')
                        let evaluatedValue = key[0] == 'margin' ? _.clone(margin) : _.clone(padding)
                        evaluatedValue[key[1]] = val
                        this.globalOnChange({
                            key: key[0],
                            value: `${evaluatedValue.top} ${evaluatedValue.right} ${evaluatedValue.bottom} ${evaluatedValue.left}`
                        })
                    }
                    let inputFunc = (val, key) => {
                        let unit = 'px'
                        if (val) {
                            unit = val.replace(/[0-9]|\./gi, '')
                            val = val.replace(unit, '')
                        }
                        let handleFocus = (event) => event.target.select()
                        return <input onFocus={handleFocus} type={'number'} value={val || 0} onChange={(e) => { handleOnChange(`${e.target.value}${unit}`, key) }} />
                    }
                    // extract margin and padding values
                    return <div className={'margin-padding'}>
                        <div className={'label'}>Margin</div>
                        <div className={'margin-left-div'}>
                            {inputFunc(margin.left, 'margin.left')}
                        </div>
                        <div className={'margin-center-div'}>
                            <div className={'margin-top-div'}>
                                {inputFunc(margin.top, 'margin.top')}
                            </div>
                            <div className={'margin-middle-div'}>
                                <div className={'label'}>Padding</div>
                                <div className={'padding-left-div'}>
                                    {inputFunc(padding.left, 'padding.left')}
                                </div>
                                <div className={'padding-center-div'}>
                                    <div className={'padding-top-div'}>
                                        {inputFunc(padding.top, 'padding.top')}
                                    </div>
                                    <div className={'padding-middle-div'}></div>
                                    <div className={'padding-bottom-div'}>
                                        {inputFunc(padding.bottom, 'padding.bottom')}
                                    </div>
                                </div>
                                <div className={'padding-right-div'}>
                                    {inputFunc(padding.right, 'padding.right')}
                                </div>
                            </div>
                            <div className={'margin-bottom-div'}>
                                {inputFunc(margin.bottom, 'margin.bottom')}
                            </div>
                        </div>
                        <div className={'margin-right-div'}>
                            {inputFunc(margin.right, 'margin.right')}
                        </div>
                    </div>
                }
            },
            {
                type: 'divider'
            },
        ]
        const typographyFormFields = [
            {
                label: 'Font', //optional; Type: String || () => {}
                key: 'font-family',
                type: 'select',
                value: (selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'font-family')) || 'Auto',
                // width: '100%',
                // labelClass: 'custom-label',
                onChange: (value, item, pastValue) => {
                    if (!item.url) {
                        _grapesEditor.styleManager.removeFontsBlock(pastValue)
                        _grapesEditor.styleManager.importFontsBlock(value)
                    }
                },
                options: this.state.fontOptions,
            },
            {
                label: 'Style', //optional; Type: String || () => {}
                key: 'font-weight',
                type: 'select',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'font-weight') || 'Auto',
                width: '68%',
                // labelClass: 'custom-label',
                options: [
                    {
                        label: 'Thin',
                        value: '100',
                    },
                    {
                        label: 'Extra Light',
                        value: '200',
                    },
                    {
                        label: 'Light',
                        value: '300',
                    },
                    {
                        label: 'Regular',
                        value: '400',
                    },
                    {
                        label: 'Medium',
                        value: '500',
                    },
                    {
                        label: 'Semi Bold',
                        value: '600',
                    },
                    {
                        label: 'Bold',
                        value: '700',
                    },
                    {
                        label: 'Extra Bold',
                        value: '800',
                    },
                    {
                        label: 'Black',
                        value: '900',
                    },
                ],
            },
            {
                label: 'Size', //optional; Type: String || () => {}
                key: 'font-size',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'font-size') || '0px',
                defaultUnit: 'px',
                unit: ['px'],
                width: '28%',
            },
            {
                // label: '',
                key: 'color',
                type: 'picker',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'color'),
            },
            {
                type: 'custom',
                key: 'line-height',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'line-height'),
                inline: true,
                width: '24%',
                render: (value, globalOnChange) => {
                    let unit = 'px'
                    if (value) {
                        unit = value.replace(/[0-9]|./gi, '')
                        if (unit == 'normal') unit = 'px'
                    }
                    let handleFocus = (event) => event.target.select()
                    return <div className={'line-height'}>
                        <Icons.LineHeight style={{ width: '12px', height: '12px' }} />
                        <input onFocus={handleFocus} type={'number'} value={isNaN(parseInt(value)) ? '' : parseInt(value)} onChange={(e) => {
                            value && globalOnChange(`${e.target.value}px`)
                        }} />
                    </div>
                }
            },
            {
                type: 'custom',
                key: 'letter-spacing',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'letter-spacing'),
                inline: true,
                width: '24%',
                render: (value, globalOnChange) => {
                    let unit = 'px'
                    if (value) {
                        unit = value.replace(/[0-9]|\./gi, '')
                        if (unit == 'normal') {
                            unit = 'px'
                            value = 0
                        }
                    }
                    let handleFocus = (event) => event.target.select()
                    return <div className={'letter-spacing'}>
                        <Icons.LetterSpacing style={{ width: '18px', height: '18px' }} />
                        <input onFocus={handleFocus} type={'number'} value={isNaN(parseInt(value)) ? '' : parseInt(value)} onChange={(e) => {
                            (value != '' || value != null) && globalOnChange(`${e.target.value}px`)
                        }} />
                    </div>
                }
            },
            {
                // label: '', //optional; Type: String || () => {}
                key: 'text-decoration',
                type: 'radioBtn', //required
                value: selected.node && (_grapesEditor.styleManager.getStyles(selected, pseudoClass, 'text-decoration').split(' ')[0]),
                width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: <Icons.Cross className={'text-decoration-none'} style={{ width: '8.25px', height: '8.25px' }} />,
                        value: 'none'
                    },
                    {
                        label: <Icons.Underline className={'text-decoration-underline'} style={{ width: '12px', height: '12px' }} />,
                        value: 'underline'
                    },
                    {
                        label: <Icons.Strikethru className={'text-decoration-linethru'} style={{ width: '12px', height: '12px' }} />,
                        value: 'line-through'
                    },
                ],
            },
            {
                // label: '', //optional; Type: String || () => {}
                key: 'text-align',
                type: 'radioBtn', //required
                value: selected.node && (_grapesEditor.styleManager.getStyles(selected, pseudoClass, 'text-align')),
                // width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: <Icons.AlignLeft className={'text-align-left'} style={{ width: '13.33px', height: '7.5px' }} />,
                        value: 'left'
                    },
                    {
                        label: <Icons.AlignCenter className={'text-align-center'} style={{ width: '11.67px', height: '7.5px' }} />,
                        value: 'center'
                    },
                    {
                        label: <Icons.AlignRight className={'text-align-right'} style={{ width: '11.67px', height: '7.5px' }} />,
                        value: 'right'
                    },
                    {
                        label: <Icons.AlignJustified className={'text-align-justified'} style={{ width: '11.67px', height: '7.5px' }} />,
                        value: 'justify'
                    },
                ],
            },
            {
                label: () => {
                    return (
                        <div className={'composite-label custom-label text-shadow-composite-label'}>
                            Text Shadow
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <div className={'composite-open'} style={{ display: 'none' }}><Icons.Dropdown style={{ width: '10px', height: '10px', marginRight: '10px' }} onClick={() => { this.setState({ showTextShadowComposite: false }) }} /></div>
                                <div className={'composite-closed'} style={{ display: 'flex' }}><Icons.RightArrow style={{ width: '10px', height: '10px', marginRight: '10px' }} onClick={() => { this.setState({ showTextShadowComposite: true }) }} /></div> */}
                                <Icons.Plus onClick={() => {
                                    this.setState({ textShadowRep: this.state.textShadowRep + 1 })
                                }} style={{ width: '12px', height: '12px' }} />
                            </div>
                        </div>
                    )
                },
                key: 'text-shadow',
                type: 'composite',
                times: this.state.textShadowRep,
                // hiddenField: !this.state.showTextShadowComposite,
                value: this.state.textShadowValue,
                children: (value, key, onChange) => {
                    return <this.textShadowCompositeField {...{ value, position: key, onChange, global: this.globalOnChange, textShadowRep: this.state.textShadowRep, updateRep: this.handlechange }} />
                }
            },
            {
                type: 'divider'
            },
        ]
        const decorationsFormFields = [
            {
                label: 'Opacity',
                key: 'opacity',
                labelClass: 'custom-label',
                containerClass: 'opacity-container',
                type: 'slider',
                value: (((selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'opacity')) || 0) * 100),
                defaultUnit: '%',
                integerEdit: true,
                // width: '48%',
            },
            {
                type: 'divider'
            },
            {
                label: 'Border Radius',
                key: 'border-radius',
                labelClass: 'custom-label',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'border-radius'),
                type: 'custom',
                inline: true,
                render: (value, globalOnChange) => {
                    const { integratedBorderRadius } = this.state
                    let unit = '%'
                    if (value) {
                        if (value.split(' ').length > 1) {
                            //multiple disable this field to be done =======================
                            integratedBorderRadius && this.setState({ integratedBorderRadius: false })
                        } else {
                            //single
                            // !integratedBorderRadius && this.setState({ integratedBorderRadius: true })
                            unit = value.replace(/[0-9]|\./gi, '')
                            value = value.replace(unit, '')
                        }
                    }

                    return <>
                        <div className={'border-radius-integer'}>
                            <Integer meta={{ defaultUnit: '%', value: value, disabled: !integratedBorderRadius }} globalOnChange={(val) => {
                                globalOnChange(`${val}`)
                            }} />
                            <div className={integratedBorderRadius ? 'independent-border-radius-btn' : 'independent-border-radius-btn-selected'} onClick={() => { this.setState({ integratedBorderRadius: !integratedBorderRadius }) }}>
                                <Icons.BorderRadius style={{ width: '12px', height: '12px' }} />
                            </div>
                        </div>
                    </>
                }
            },
            {
                // label: 'Border Radius',
                key: 'border-radius',
                hidden: this.state.integratedBorderRadius,
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'border-radius'),
                type: 'custom',
                inline: true,
                render: (value, globalOnChange) => {
                    const { integratedBorderRadius } = this.state
                    let unit = {
                        topL: 'px',
                        topR: 'px',
                        bottomR: 'px',
                        bottomL: 'px',
                    }
                    let border = {
                        topL: '',
                        topR: '',
                        bottomR: '',
                        bottomL: '',
                    }
                    if (value) {
                        if (value.split(' ').length > 1) {
                            value = value.split(' ')
                            border = {
                                topL: value[0],
                                topR: value[1],
                                bottomR: value[2],
                                bottomL: value[3],
                            }
                        } else {
                            border = {
                                topL: value,
                                topR: value,
                                bottomL: value,
                                bottomR: value,
                            }
                        }
                    }
                    let handleOnChange = (val, key) => {
                        border[key] = val
                        if (border.topL == border.topR &&
                            border.topL == border.bottomR &&
                            border.topL == border.bottomL) {
                            this.globalOnChange({
                                key: 'border-radius',
                                value: `${border.topL}`
                            })
                        } else {
                            this.globalOnChange({
                                key: 'border-radius',
                                value: `${border.topL} ${border.topR} ${border.bottomR} ${border.bottomL}`
                            })
                        }
                    }
                    let inputFunc = (val, key) => {
                        let unit = 'px'
                        if (val) {
                            unit = val.replace(/[0-9]|\./gi, '')
                            val = val.replace(unit, '')
                        }
                        let handleFocus = (event) => event.target.select()
                        return <input onFocus={handleFocus} style={key == 'topL' ? {} : { borderLeft: '1px solid #444444' }} className={'border-radius-input'} type={'number'} value={val || 0} onChange={(e) => { handleOnChange(`${e.target.value}${unit}`, key) }} />
                    }
                    return <div className={'border-radius-independent-container'}>
                        {inputFunc(border.topL, 'topL')}
                        {inputFunc(border.topR, 'topR')}
                        {inputFunc(border.bottomR, 'bottomR')}
                        {inputFunc(border.bottomL, 'bottomL')}
                    </div>
                }
            },
            {
                type: 'divider'
            },
            {
                label: 'Border',
                labelClass: 'custom-label',
                inline: true,
                containerClass: 'custom-spacing',
            },
            {
                label: 'Width',
                key: 'border-width',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'border-width'),
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Style',
                key: 'border-style',
                type: 'select', //required
                value: selected.node && (_grapesEditor.styleManager.getStyles(selected, pseudoClass, 'border-style')) || 'solid',
                width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: <Icons.SolidLine style={{ width: '30px', height: '2px' }} />,
                        value: 'solid'
                    },
                    {
                        label: <Icons.DashedLine style={{ width: '30px', height: '2px' }} />,
                        value: 'dashed'
                    },
                    {
                        label: <Icons.DottedLine style={{ width: '30px', height: '2px' }} />,
                        value: 'dotted'
                    },
                ],
            },
            {
                // label: '',
                key: 'border-color',
                type: 'picker',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'border-color'),
            },
            {
                label: () => {
                    return (
                        <div className={'composite-label custom-label box-shadow-composite-label'}>
                            Box Shadow
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Icons.Plus onClick={() => {
                                    this.setState({ boxShadowRep: this.state.boxShadowRep + 1 })
                                }} style={{ width: '12px', height: '12px' }} />
                                {/* <div className={'composite-open'} style={{ display: 'none' }}><Icons.Dropdown style={{ width: '10px', height: '10px', marginLeft: '10px' }} onClick={() => { this.setState({ showBoxShadowComposite: false }) }} /></div>
                                <div className={'composite-closed'} style={{ display: 'flex' }}><Icons.RightArrow style={{ width: '10px', height: '10px', marginLeft: '10px' }} onClick={() => { this.setState({ showBoxShadowComposite: true }) }} /></div> */}
                            </div>
                        </div>
                    )
                },
                key: 'box-shadow',
                type: 'composite',
                times: this.state.boxShadowRep,
                // hiddenField: !this.state.showBoxShadowComposite,
                value: this.state.boxShadowValue,
                children: (value, key, onChange) => {
                    return <this.boxShadowCompositeField {...{ value, position: key, onChange, global: this.globalOnChange, boxShadowRep: this.state.boxShadowRep, updateRep: this.handlechange }} />
                }
            },
            {
                label: () => {
                    return (
                        <div className={'composite-label custom-label background-composite-label'}>
                            Background
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Icons.Plus onClick={() => {
                                    let backgroundArr = this.extractBackgroundProperty()
                                    backgroundArr.push({
                                        image: 'url("http://grapesjs.com/img/work-desk.jpg")',
                                        type: 'image',
                                        position: '50% 50%',
                                        size: 'cover',
                                        attachment: 'scroll',
                                        repeat: 'no-repeat',
                                        blendMode: 'normal'
                                    })
                                    this.updateBackgroundProperty(backgroundArr, () => {
                                        // this.setState({ backgroundValue: this.extractBackgroundProperty() })
                                    })
                                    this.setState({ backgroundRep: this.state.backgroundRep + 1, backgroundValue: backgroundArr })
                                }} style={{ width: '12px', height: '12px' }} />
                                {/* <div className={'composite-open'} style={{ display: 'none' }}><Icons.Dropdown style={{ width: '10px', height: '10px', marginLeft: '10px' }} onClick={() => { this.setState({ showBackgroundComposite: false }) }} /></div>
                                <div className={'composite-closed'} style={{ display: 'flex' }}><Icons.RightArrow style={{ width: '10px', height: '10px', marginLeft: '10px' }} onClick={() => { this.setState({ showBackgroundComposite: true }) }} /></div> */}
                            </div>
                        </div>
                    )
                },
                key: 'background',
                type: 'composite',
                times: this.state.backgroundRep,
                // hiddenField: !this.state.showBackgroundComposite,
                value: this.state.backgroundValue,
                children: (value, key, onChange) => {
                    return <this.backgroundCompositeField {...{ value, position: key, backgroundRep: this.state.backgroundRep, updateRep: this.handlechange, onChange, globalOnChange: this.globalOnChange }} />
                },
                onChange: (valArr) => {
                    this.updateBackgroundProperty(valArr)
                }
            },
            {
                type: 'divider'
            },
        ]
        const extraFormFields = [
            {
                label: 'Transition',
                // key: 'border-radius',
                labelClass: 'custom-label',
                inline: true,
                // width: '68%',
            },
            {
                label: 'Property',
                key: 'transition-property',
                type: 'select', //required
                value: selected.node && (_grapesEditor.styleManager.getStyles(selected, pseudoClass, 'transition-property')) || 'Auto',
                containerClass: 'transition-property-list',
                width: '58%',
                options: [
                    {
                        label: 'All',
                        value: 'all'
                    },
                    {
                        label: 'Width',
                        value: 'width'
                    },
                    {
                        label: 'Height',
                        value: 'height'
                    },
                    {
                        label: 'Bg-Color',
                        value: 'background-color'
                    },
                    {
                        label: 'Transform',
                        value: 'transform'
                    },
                    {
                        label: 'Box-Shadow',
                        value: 'box-shadow'
                    },
                    {
                        label: 'Opacity',
                        value: 'opacity'
                    },
                ],
            },
            {
                label: 'Duration',
                key: 'transition-duration',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'transition-duration'),
                defaultUnit: 'ms',
                unit: ['s', 'ms'],
                width: '38%',
            },
            {
                label: 'Easing',
                key: 'transition-timing-function',
                type: 'select',
                value: (selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'transition-timing-function')) || 'Auto',
                containerClass: 'transition-timing-list',
                options: [
                    {
                        label: 'Linear',
                        value: 'linear'
                    },
                    {
                        label: 'Ease',
                        value: 'ease'
                    },
                    {
                        label: 'Ease-In',
                        value: 'ease-in'
                    },
                    {
                        label: 'Ease-Out',
                        value: 'ease-out'
                    },
                    {
                        label: 'Ease-In-Out',
                        value: 'ease-in-out'
                    }
                ],
                width: '48%',
            },
            {
                label: 'Perspective',
                key: 'perspective',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'perspective'),
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Transform',
                // key: 'border-radius',
                labelClass: 'custom-label',
                inline: true,
                // width: '68%',
            },
            {
                type: 'custom',
                inline: true,
                render: (value, globalOnChange) => {
                    const { transformKey } = this.state
                    return <div className={'rotate-scale-shift-btn'}>
                        <div className={transformKey == 'rotate' ? 'selected' : 'inactive'} onClick={() => { this.handlechange('transformKey', 'rotate') }}>Rotate</div>
                        <div className={transformKey == 'scale' ? 'selected' : 'inactive'} onClick={() => { this.handlechange('transformKey', 'scale') }}>Scale</div>
                    </div>
                }
            },
            {
                label: 'X',
                labelClass: 'custom-label',
                labelStyle: {
                    'marginRight': '10px',
                    'paddingTop': '0px'
                },
                key: 'X',
                type: 'slider',
                value: (this.state.transformValue)[`${this.state.transformKey}X`],
                defaultUnit: this.state.transformKey == 'rotate' ? 'deg' : '',
                pointerCenter: true,
                integerEdit: false,
                inline: true,
                min: this.state.transformKey == 'rotate' ? -180 : -10,
                max: this.state.transformKey == 'rotate' ? 180 : 10,
            },
            {
                label: 'Y',
                labelClass: 'custom-label',
                labelStyle: {
                    'marginRight': '10px',
                    'paddingTop': '0px'
                },
                key: 'Y',
                type: 'slider',
                value: (this.state.transformValue)[`${this.state.transformKey}Y`],
                defaultUnit: this.state.transformKey == 'rotate' ? 'deg' : '',
                pointerCenter: true,
                integerEdit: false,
                inline: true,
                min: this.state.transformKey == 'rotate' ? -180 : -10,
                max: this.state.transformKey == 'rotate' ? 180 : 10,
            },
        ]
        const flexFormFields = [
            {
                label: 'Container',
                key: 'display',
                type: 'select',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'display') || 'Auto',
                containerClass: 'flex-container-list',
                options: [
                    {
                        label: 'Disable',
                        value: 'block'
                    },
                    {
                        label: 'Enable',
                        value: 'flex'
                    },
                ],
                width: '48%',
            },
            {
                label: 'Order',
                key: 'order',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'order'),
                // defaultUnit: 'px',
                // unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Direction',
                key: 'flex-direction',
                type: 'radioBtn', //required
                value: selected.node && (_grapesEditor.styleManager.getStyles(selected, pseudoClass, 'flex-direction')),
                // width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: <Icons.FDirRow style={{ width: '20px', height: '20px' }} />,
                        value: 'row'
                    },
                    {
                        label: <Icons.FDirRowRev style={{ width: '20px', height: '20px' }} />,
                        value: 'row-reverse'
                    },
                    {
                        label: <Icons.FDirCol style={{ width: '20px', height: '20px' }} />,
                        value: 'column'
                    },
                    {
                        label: <Icons.FDirColRev style={{ width: '20px', height: '20px' }} />,
                        value: 'column-reverse'
                    },
                ],
            },
            {
                label: 'Justify',
                key: 'justify-content',
                type: 'radioBtn', //required
                value: selected.node && (_grapesEditor.styleManager.getStyles(selected, pseudoClass, 'justify-content')),
                // width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: <Icons.JustifyStart style={{ width: '6.45px', height: '15px' }} />,
                        value: 'start'
                    },
                    {
                        label: <Icons.JustifyEnd style={{ width: '6.45px', height: '15px' }} />,
                        value: 'end'
                    },
                    {
                        label: <Icons.JustifySpcBtw style={{ width: '12.86px', height: '15px' }} />,
                        value: 'space-between'
                    },
                    {
                        label: <Icons.JustifySpcArnd style={{ width: '15px', height: '15px' }} />,
                        value: 'space-around'
                    },
                    {
                        label: <Icons.JustifyCenter style={{ width: '15px', height: '15px' }} />,
                        value: 'center'
                    },
                ],
            },
            {
                label: 'Align',
                key: 'align-items',
                type: 'radioBtn', //required
                value: selected.node && (_grapesEditor.styleManager.getStyles(selected, pseudoClass, 'align-items')),
                // width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: <Icons.FAlignStart style={{ width: '15px', height: '15px' }} />,
                        value: 'start'
                    },
                    {
                        label: <Icons.FAlignEnd style={{ width: '15px', height: '15px' }} />,
                        value: 'end'
                    },
                    {
                        label: <Icons.FAlignStretch style={{ width: '15px', height: '15px' }} />,
                        value: 'stretch'
                    },
                    {
                        label: <Icons.FAlignCenter style={{ width: '15px', height: '15px' }} />,
                        value: 'center'
                    },
                ],
            },
            {
                label: 'Flex',
                // key: 'border-radius',
                labelClass: 'custom-label',
                inline: true,
                // width: '68%',
            },
            {
                label: 'Grow', //optional; Type: String || () => {}
                key: 'flex-grow',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'flex-grow'),
                // defaultUnit: 'px',
                // unit: ['px'],
                width: '48%',
            },
            {
                label: 'Shrink', //optional; Type: String || () => {}
                key: 'flex-shrink',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'flex-shrink'),
                // defaultUnit: 'px',
                // unit: ['px'],
                width: '48%',
            },
            {
                label: 'Basis', //optional; Type: String || () => {}
                key: 'flex-basis',
                type: 'integer',
                value: selected.node && _grapesEditor.styleManager.getStyles(selected, pseudoClass, 'flex-basis'),
                defaultUnit: 'px',
                unit: ['px'],
                width: '48%',
            },
            {
                type: 'divider'
            },
        ]
        const extraFieldRotate = [
            ...extraFormFields,
            {
                label: 'Z',
                labelClass: 'custom-label',
                labelStyle: {
                    'marginRight': '10px',
                    'paddingTop': '0px'
                },
                key: 'Z',
                type: 'slider',
                value: (this.state.transformValue)[`${this.state.transformKey}Z`],
                defaultUnit: this.state.transformKey == 'rotate' ? 'deg' : '',
                pointerCenter: true,
                integerEdit: false,
                inline: true,
                min: this.state.transformKey == 'rotate' ? -180 : -10,
                max: this.state.transformKey == 'rotate' ? 180 : 10,
            },
            {
                type: 'divider'
            }]
        const extraFieldScale = [
            ...extraFormFields,
            {
                type: 'divider'
            }]

        const categories = [
            {
                label: 'General',
                children: (<CreateForm fields={generalFormFields} globalOnChange={this.globalOnChange} getFormData={(fn) => {
                    this.getFormDataGeneral = fn
                }} />),
                // render: () => {
                //     return <div className={'category-label'}>General Custom</div>
                // }
            },
            {
                label: 'Dimension',
                children: (<CreateForm fields={dimensionFormFields} globalOnChange={this.globalOnChange} getFormData={(fn) => {
                    this.getFormDataDimension = fn
                }} />),
            },
            {
                label: 'Typography',
                children: (<CreateForm fields={typographyFormFields} globalOnChange={this.globalOnChange} getFormData={(fn) => {
                    this.getFormDataTypography = fn
                }} />),
            },
            {
                label: 'Decorations',
                children: (<CreateForm fields={decorationsFormFields} globalOnChange={this.globalOnChange} getFormData={(fn) => {
                    this.getFormDataDecorations = fn
                }} />),
            },
            {
                label: 'Extra',
                children: (<CreateForm fields={transformKey == 'rotate' ? extraFieldRotate : extraFieldScale} globalOnChange={this.globalOnChange} getFormData={(fn) => {
                    this.getFormDataExtra = fn
                }} />),
            },
            {
                label: 'Flex',
                children: (<CreateForm fields={flexFormFields} globalOnChange={this.globalOnChange} getFormData={(fn) => {
                    this.getFormDataFlex = fn
                }} />),
            },
        ]
        return (
            <div className={'style-manager-container'}>
                {this.createCategories(categories)}
            </div>
        )
    }
}

const mapStateToProps = ({ global, layout, editor, templates, editorHistory }) => {
    return {
        loading: global.loading,
        templates,
		styleObj: JSON.parse(editorHistory.present.styleObj),
        styleStr: editorHistory.present.style,
        pseudoClass: editor.pseudoClass,
        assets: global.assets,
        assetsManager: editor.assetsManager
    }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(StyleManager)