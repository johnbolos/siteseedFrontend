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

class StyleManager extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {

    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps) {
        // if (prevProps.selected != this.props.selected) {
        //     this.forceUpdate()
        // }
    }
    globalOnChange = (obj, formData) => {
        const { selected, editorNode, pseudoClass, styleObj, dispatch } = this.props
        let item = _.clone(obj)
        if (item.key == 'opacity') {
            // if (item.value.includes('px')) {
            //     item.value = `${parseInt(item.value.replace('px', '')) / 100}px`
            // }

            if (item.value.includes('%')) {
                item.value = parseInt(item.value.replace('%', '')) / 100
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
    render() {
        const { } = this.state
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
        ]
        const decorationFormFields = [
            {
                label: 'Opacity',
                key: 'opacity',
                type: 'integer',
                value: (((selected.styleInfo.styles && selected.styleInfo.styles.opacity) || selected.node && getComputedStyle(selected.node, pseudoClass).opacity) * 100),
                defaultUnit: '%',
                // width: '48%',
            },
            {
                label: 'Border Radius',
                key: 'border-radius',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles['border-radius']) || selected.node && getComputedStyle(selected.node, pseudoClass)['border-radius'],
                defaultUnit: 'px',
                unit: ['px', '%'],
                inline: true,
                width: '100%',
            },
            {
                label: 'Border',
                // key: 'border-radius',
                labelClass: 'custom-label',
                inline: true,
                // width: '68%',
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
                width: '48%',
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
                width: '48%',
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
                        label: <Icons.AlignLeft className={'text-decoration-none'} style={{ width: '8.25px', height: '8.25px' }} />,
                        value: 'row'
                    },
                    {
                        label: <Icons.AlignCenter className={'text-decoration-underline'} style={{ width: '12px', height: '12px' }} />,
                        value: 'row-reverse'
                    },
                    {
                        label: <Icons.AlignRight className={'text-decoration-linethru'} style={{ width: '12px', height: '12px' }} />,
                        value: 'column'
                    },
                    {
                        label: <Icons.AlignJustified className={'text-decoration-linethru'} style={{ width: '12px', height: '12px' }} />,
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
                children: (<CreateForm fields={extraFormFields} globalOnChange={this.globalOnChange} getFormData={(fn) => {
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
