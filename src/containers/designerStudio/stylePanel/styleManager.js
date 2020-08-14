import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'
import shortid from 'shortid'

import "./index.scss"
import { setEditorStyleData, setStyleStr } from "../../../reducers/actions/editorHistoryActions";
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
        integratedBorderRadius: true,
        boxShadowRep: 0,
        textShadowRep: 0
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps) {
        const { selected, pseudoClass } = this.props
        if (prevProps.selected != this.props.selected) {
            // this.forceUpdate()
            this.extractTransform()
            console.log(this.props.selected.node && getComputedStyle(this.props.selected.node).marginLeft)
            this.handlechange('boxShadowRep', (selected.node && getComputedStyle(selected.node, pseudoClass)['box-shadow'] || 'none').split(/,(?![^(]*\))/).length)
            this.handlechange('textShadowRep', (selected.node && getComputedStyle(selected.node, pseudoClass)['text-shadow'] || 'none').split(/,(?![^(]*\))/).length)
        }
    }
    globalOnChange = (obj, formData) => {
        const { selected, editorNode, pseudoClass, styleObj, dispatch } = this.props
        const { transformValue } = this.state
        let item = _.clone(obj)
        console.log(item, 'globalOnChane')
        if (new RegExp(/X|Y|Z/).test(item.key)) {
            transformValue[`${this.state.transformKey}${item.key}`] = item.value
            console.log(transformValue, item, 'global change')
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
            componentModel.addClass(uniqueClass)
        }
        let uniqueClassIndex = styleObj.length
        selected.styleInfo.index.forEach(val => {
            if (styleObj[val].selector == (pseudoClass == 'active' ? uniqueClass : `${uniqueClass}:${pseudoClass}`)) {
                uniqueClassIndex = val
            }
        })

        let requiredStyleObj = _.cloneDeep(styleObj[uniqueClassIndex]) || {}
        requiredStyleObj.selector = (pseudoClass == 'active' ? uniqueClass : `${uniqueClass}:${pseudoClass}`)
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
        cssString = `.${requiredStyleObj.selector} {${cssString}
        }`
        //get style string from redux
        let str = _.clone(this.props.styleStr)
        let data = _grapesEditor.styleManager.extractBlock(`.${requiredStyleObj.selector}`, str)
        if (data.customCode != '') {
            str = data.str
        }
        str = str.replace('</style>', `${cssString} </style>`)
        styleObj[uniqueClassIndex] = requiredStyleObj
        // update style tag and redux history
        dispatch(setEditorStyleData(styleObj));
        dispatch(setStyleStr(str, { update: true }))

        //set selected
        if (pseudoClass == 'Active') {
            customEvents.saveStyleInfo({ elem: selected.node, node: editorNode })
            return
        }
        customEvents.saveStyleInfo({ elem: selected.node, node: editorNode }, { pseudoClass: pseudoClass })


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
                {opened == key && <div className={item.childerClass || 'category-children'} style={opened == key ? { borderBottom: '1px solid #444444', paddingBottom: '6px' } : {}}>{item.children}</div>}
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
    handlechange = (key, value) => {
        this.setState({ [key]: value })
    }
    render() {
        const { transformKey } = this.state
        const { selected, editorNode, pseudoClass } = this.props
        const generalFormFields = [
            {
                label: () => { return <div>Alignment</div> }, //optional; Type: String || () => {}
                key: 'float',
                type: 'radioBtn', //required
                value: (selected.styleInfo.styles && selected.styleInfo.styles.float) || selected.node && getComputedStyle(selected.node, pseudoClass).float,
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles.display) || selected.node && getComputedStyle(selected.node, pseudoClass).display,
                width: '48%',
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles.position) || selected.node && getComputedStyle(selected.node, pseudoClass).position,
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles.top) || selected.node && getComputedStyle(selected.node, pseudoClass).top,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Right X',
                key: 'right',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.right) || selected.node && getComputedStyle(selected.node, pseudoClass).right,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Left X',
                key: 'left',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.left) || selected.node && getComputedStyle(selected.node, pseudoClass).left,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Bottom X',
                key: 'bottom',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.bottom) || selected.node && getComputedStyle(selected.node, pseudoClass).bottom,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
        ]
        const dimensionFormFields = [
            {
                label: 'Width',
                key: 'width',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.width) || selected.node && getComputedStyle(selected.node, pseudoClass).width,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Heigth',
                key: 'height',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.height) || selected.node && getComputedStyle(selected.node, pseudoClass).height,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Max Width',
                key: 'max-width',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.maxWidth) || selected.node && getComputedStyle(selected.node, pseudoClass).maxWidth,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Max Height',
                key: 'max-height',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.maxHeight) || selected.node && getComputedStyle(selected.node, pseudoClass).maxHeight,
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
                        top: selected.node && getComputedStyle(selected.node, pseudoClass).marginTop,
                        right: selected.node && getComputedStyle(selected.node, pseudoClass).marginRight,
                        bottom: selected.node && getComputedStyle(selected.node, pseudoClass).marginBottom,
                        left: selected.node && getComputedStyle(selected.node, pseudoClass).marginLeft,
                    }
                    let padding = {
                        top: selected.node && getComputedStyle(selected.node, pseudoClass).paddingTop,
                        right: selected.node && getComputedStyle(selected.node, pseudoClass).paddingRight,
                        bottom: selected.node && getComputedStyle(selected.node, pseudoClass).paddingBottom,
                        left: selected.node && getComputedStyle(selected.node, pseudoClass).paddingLeft,
                    }
                    let handleOnChange = (val, key) => {    //val: 20px, key: 'margin.top'
                        key = key.split('.')
                        console.log(val, key, 'asasasasas')
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
                        return <input type={'number'} value={val || 0} onChange={(e) => { handleOnChange(`${e.target.value}${unit}`, key) }} />
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
                                {inputFunc(margin.bottom, 'margin-bottom')}
                            </div>
                        </div>
                        <div className={'margin-right-div'}>
                            {inputFunc(margin.right, 'margin-right')}
                        </div>
                    </div>
                }
            },
        ]
        const typographyFormFields = [
            {
                label: 'Font', //optional; Type: String || () => {}
                key: 'font-family',
                type: 'select',
                value: (selected.styleInfo.styles && selected.styleInfo.styles['font-family']) || selected.node && getComputedStyle(selected.node, pseudoClass)['font-family'],
                width: '100%',
                // labelClass: 'custom-label',
                onChange: (value, item, pastValue) => {
                    if (!item.url) {
                        _grapesEditor.styleManager.removeFontsBlock(pastValue)
                        _grapesEditor.styleManager.importFontsBlock(value)
                    }
                },
                options: [
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
                ],
            },
            {
                label: 'Weight', //optional; Type: String || () => {}
                key: 'font-weight',
                type: 'select',
                value: (selected.styleInfo.styles && selected.styleInfo.styles['font-weight']) || selected.node && getComputedStyle(selected.node, pseudoClass)['font-weight'],
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['font-size']) || selected.node && getComputedStyle(selected.node, pseudoClass)['font-size'],
                defaultUnit: 'px',
                unit: ['px'],
                width: '28%',
            },
            {
                // label: '',
                key: 'color',
                type: 'picker',
                value: (selected.styleInfo.styles && selected.styleInfo.styles['color']) || selected.node && getComputedStyle(selected.node, pseudoClass)['color'],
            },
            {
                type: 'custom',
                key: 'line-height',
                value: (selected.styleInfo.styles && selected.styleInfo.styles['line-height']) || selected.node && getComputedStyle(selected.node, pseudoClass)['line-height'],
                inline: true,
                width: '24%',
                render: (value, globalOnChange) => {
                    let unit = 'px'
                    if (value) {
                        unit = value.replace(/[0-9]|./gi, '')
                        if (unit == 'normal') unit = 'px'
                    }
                    return <div className={'line-height'}>
                        <Icons.LineHeight style={{ width: '12px', height: '12px' }} />
                        <input type={'number'} value={parseInt(value)} onChange={(e) => {
                            value && globalOnChange(`${e.target.value}px`)
                        }} />
                    </div>
                }
            },
            {
                type: 'custom',
                key: 'letter-spacing',
                value: (selected.styleInfo.styles && selected.styleInfo.styles['letter-spacing']) || selected.node && getComputedStyle(selected.node, pseudoClass)['letter-spacing'],
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
                    return <div className={'letter-spacing'}>
                        <Icons.LetterSpacing style={{ width: '18px', height: '18px' }} />
                        <input type={'number'} value={parseInt(value)} onChange={(e) => {
                            (value != '' || value != null) && globalOnChange(`${e.target.value}px`)
                        }} />
                    </div>
                }
            },
            {
                // label: '', //optional; Type: String || () => {}
                key: 'text-decoration',
                type: 'radioBtn', //required
                value: (selected.styleInfo.styles && selected.styleInfo.styles['text-decoration']) || selected.node && (getComputedStyle(selected.node, pseudoClass)['text-decoration'].split(' ')[0]),
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['text-align']) || selected.node && (getComputedStyle(selected.node, pseudoClass)['text-align']),
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
                        <div className={'composite-label custom-label'}>
                            Text Shadow
                            <Icons.Plus onClick={() => {
                                this.setState({ textShadowRep: this.state.textShadowRep + 1 }, () => {
                                    console.log(this.state.textShadowRep)
                                })
                            }} style={{ width: '12px', height: '12px' }} />
                        </div>
                    )
                },
                key: 'text-shadow',
                type: 'composite',
                times: this.state.textShadowRep,
                value: selected.node && getComputedStyle(selected.node, pseudoClass)['text-shadow'],
                children: (value, key, onChange) => {
                    let hOffset = '0px',
                        vOffset = '0px',
                        blur = '0px',
                        color = '#FFFFFF'
                    if (value != null) {
                        // meane value was 'none'

                        value = value.trim().split(/ (?![^(]*\))/)
                        color = value[0]
                        hOffset = value[1]
                        vOffset = value[2]
                        blur = value[3]
                    }
                    let handleOnChange = (item, action = '') => {
                        switch (item.key) {
                            case 'hOffset':
                                hOffset = extractValue(item.value)
                                break;
                            case 'vOffset':
                                vOffset = extractValue(item.value)
                                break;
                            case 'blur':
                                blur = extractValue(item.value)
                                break;
                            case 'color':
                                color = item.value
                                break;
                            default:
                                break;
                        }
                        let resp = `${extractValue(hOffset)}px ${extractValue(vOffset)}px ${extractValue(blur)}px ${color}`
                        onChange(resp, key, action)
                    }
                    const extractValue = (data) => {
                        let unit = data.replace(/[0-9]|\./gi, '')
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
                        <div className={'composite-cross'}>
                            <Icons.Plus onClick={() => {
                                handleOnChange({}, 'delete')
                                this.setState({ boxShadowRep: this.state.boxShadowRep - 1 })
                            }} style={{ width: '12px', height: '12px', transform: 'rotateZ(45deg)' }} />
                        </div>
                        <CreateForm fields={fields} globalOnChange={handleOnChange} />
                    </div>
                }
            }
        ]
        const decorationFormFields = [
            {
                label: 'Opacity',
                key: 'opacity',
                labelClass: 'custom-label',
                type: 'slider',
                value: (((selected.styleInfo.styles && selected.styleInfo.styles.opacity) || selected.node && getComputedStyle(selected.node, pseudoClass).opacity) * 100),
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['border-radius']) || selected.node && getComputedStyle(selected.node, pseudoClass)['border-radius'],
                type: 'custom',
                inline: true,
                render: (value, globalOnChange) => {
                    const { integratedBorderRadius } = this.state
                    let unit = 'px'
                    if (value) {
                        if (value.split(' ').length > 1) {
                            //multiple disable this field to be done =======================
                            integratedBorderRadius && this.setState({ integratedBorderRadius: false })
                            console.log('manytime')
                        } else {
                            //single
                            // !integratedBorderRadius && this.setState({ integratedBorderRadius: true })
                            unit = value.replace(/[0-9]|\./gi, '')
                            value = value.replace(unit, '')
                        }
                    }

                    return <>
                        <div className={'border-radius-integer'}>
                            <Integer meta={{ defaultUnit: 'px', value: value, disabled: !integratedBorderRadius }} globalOnChange={(val) => {
                                console.log(val, `${val} ${val} ${val} ${val}`)
                                globalOnChange(`${val} ${val} ${val} ${val}`)
                            }} />
                            <div className={'independent-border-radius-btn'} onClick={() => { this.setState({ integratedBorderRadius: !integratedBorderRadius }) }}>
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['border-radius']) || selected.node && getComputedStyle(selected.node, pseudoClass)['border-radius'],
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
                            console.log('manytime')
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
                        this.globalOnChange({
                            key: 'border-radius',
                            value: `${border.topL} ${border.topR} ${border.bottomR} ${border.bottomL}`
                        })
                    }
                    let inputFunc = (val, key) => {
                        let unit = 'px'
                        if (val) {
                            unit = val.replace(/[0-9]|\./gi, '')
                            val = val.replace(unit, '')
                        }
                        return <input style={key == 'topL' ? {} : { borderLeft: '1px solid #444444' }} className={'border-radius-input'} type={'number'} value={val || 0} onChange={(e) => { handleOnChange(`${e.target.value}${unit}`, key) }} />
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['border-width']) || selected.node && getComputedStyle(selected.node, pseudoClass)['border-width'],
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Style',
                key: 'border-style',
                type: 'select', //required
                value: (selected.styleInfo.styles && selected.styleInfo.styles['border-style']) || selected.node && (getComputedStyle(selected.node, pseudoClass)['border-style']),
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['border-color']) || selected.node && getComputedStyle(selected.node, pseudoClass)['border-color'],
            },
            {
                label: () => {
                    return (
                        <div className={'composite-label custom-label'}>
                            Box Shadow
                            <Icons.Plus onClick={() => {
                                this.setState({ boxShadowRep: this.state.boxShadowRep + 1 }, () => {
                                    console.log(this.state.boxShadowRep)
                                })
                            }} style={{ width: '12px', height: '12px' }} />
                        </div>
                    )
                },
                key: 'box-shadow',
                type: 'composite',
                times: this.state.boxShadowRep,
                value: selected.node && getComputedStyle(selected.node, pseudoClass)['box-shadow'],
                children: (value, key, onChange) => {
                    let hOffset = '0px',
                        vOffset = '0px',
                        blur = '0px',
                        spread = '0px',
                        color = '#000000',
                        type = ' '   // ' ' || 'inset' select
                    if (value != null) {
                        // meane value was 'none'

                        // remove inset if present
                        if (value.includes('inset')) {
                            type = 'inset'
                            value = value.replace('inset', '')
                        }

                        value = value.trim().split(/ (?![^(]*\))/)
                        color = value[0]
                        hOffset = value[1]
                        vOffset = value[2]
                        blur = value[3]
                        spread = value[4]
                    }
                    let handleOnChange = (item, action = '') => {
                        switch (item.key) {
                            case 'hOffset':
                                hOffset = extractValue(item.value)
                                break;
                            case 'vOffset':
                                vOffset = extractValue(item.value)
                                break;
                            case 'blur':
                                blur = extractValue(item.value)
                                break;
                            case 'spread':
                                spread = extractValue(item.value)
                                break;
                            case 'color':
                                color = item.value
                                break;
                            case 'type':
                                type = item.value
                                break;
                            default:
                                break;
                        }
                        let resp = `${extractValue(hOffset)}px ${extractValue(vOffset)}px ${extractValue(blur)}px ${extractValue(spread)}px ${color} ${type}`
                        onChange(resp, key, action)
                    }
                    const extractValue = (data) => {
                        let unit = data.replace(/[0-9]|\./gi, '')
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
                            value: type,
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
                                handleOnChange({}, 'delete')
                                this.setState({ boxShadowRep: this.state.boxShadowRep - 1 })
                            }} style={{ width: '12px', height: '12px', transform: 'rotateZ(45deg)' }} />
                        </div>
                        <CreateForm fields={fields} globalOnChange={handleOnChange} />
                    </div>
                }
            }
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['transition-property']) || selected.node && (getComputedStyle(selected.node, pseudoClass)['transition-property']),
                width: '63%',
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['transition-duration']) || selected.node && getComputedStyle(selected.node, pseudoClass)['transition-duration'],
                defaultUnit: 's',
                unit: ['s', 'ms'],
                width: '33%',
            },
            {
                label: 'Easing',
                key: 'transition-timing-function',
                type: 'select',
                value: (selected.styleInfo.styles && selected.styleInfo.styles['transition-timing-function']) || selected.node && getComputedStyle(selected.node, pseudoClass)['transition-timing-function'],
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['perspective']) || selected.node && getComputedStyle(selected.node, pseudoClass)['perspective'],
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
                integerEdit: true,
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
                integerEdit: true,
                inline: true,
                min: this.state.transformKey == 'rotate' ? -180 : -10,
                max: this.state.transformKey == 'rotate' ? 180 : 10,
            },
            // {
            //     label: 'Opacity',
            //     key: 'opacity',
            //     type: 'slider',
            //     value: (((selected.styleInfo.styles && selected.styleInfo.styles.opacity) || selected.node && getComputedStyle(selected.node, pseudoClass).opacity) * 100),
            //     defaultUnit: '%',
            //     integerEdit: true,
            //     // width: '48%',
            // },
            // {
            //     label: 'Opacity',
            //     key: 'opacity',
            //     type: 'slider',
            //     value: (((selected.styleInfo.styles && selected.styleInfo.styles.opacity) || selected.node && getComputedStyle(selected.node, pseudoClass).opacity) * 100),
            //     defaultUnit: '%',
            //     integerEdit: true,
            //     // width: '48%',
            // },
        ]
        const flexFormFields = [
            {
                label: 'Container',
                key: 'display',
                type: 'select',
                value: (selected.styleInfo.styles && selected.styleInfo.styles['display']) || selected.node && getComputedStyle(selected.node, pseudoClass)['display'],
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['order']) || selected.node && getComputedStyle(selected.node, pseudoClass)['orde'],
                // defaultUnit: 'px',
                // unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Direction',
                key: 'flex-direction',
                type: 'radioBtn', //required
                value: (selected.styleInfo.styles && selected.styleInfo.styles['flex-direction']) || selected.node && (getComputedStyle(selected.node, pseudoClass)['flex-direction']),
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['justify-content']) || selected.node && (getComputedStyle(selected.node, pseudoClass)['justify-content']),
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['align-items']) || selected.node && (getComputedStyle(selected.node, pseudoClass)['align-items']),
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['flex-grow']) || selected.node && getComputedStyle(selected.node, pseudoClass)['flex-grow'],
                // defaultUnit: 'px',
                // unit: ['px'],
                width: '48%',
            },
            {
                label: 'Shrink', //optional; Type: String || () => {}
                key: 'flex-shrink',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles['flex-shrink']) || selected.node && getComputedStyle(selected.node, pseudoClass)['flex-shrink'],
                // defaultUnit: 'px',
                // unit: ['px'],
                width: '48%',
            },
            {
                label: 'Basis', //optional; Type: String || () => {}
                key: 'flex-basis',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles['flex-basis']) || selected.node && getComputedStyle(selected.node, pseudoClass)['flex-basis'],
                defaultUnit: 'px',
                unit: ['px'],
                width: '48%',
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
                integerEdit: true,
                inline: true,
                min: this.state.transformKey == 'rotate' ? -180 : -10,
                max: this.state.transformKey == 'rotate' ? 180 : 10,
            }]
        const extraFieldScale = [...extraFormFields]

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
                label: 'Decoration',
                children: (<CreateForm fields={decorationFormFields} globalOnChange={this.globalOnChange} getFormData={(fn) => {
                    this.getFormDataDecoration = fn
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
        styleObj: editorHistory.present.styleObj,
        styleStr: editorHistory.present.style,
        pseudoClass: editor.pseudoClass
    }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(StyleManager)
