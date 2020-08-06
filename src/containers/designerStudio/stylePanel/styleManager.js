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
        console.log(shortid.generate())
    }
    componentDidUpdate(prevProps) {
        console.log(this.props.selected, 'selected chane did')
        // if (prevProps.selected != this.props.selected) {
        //     this.forceUpdate()
        // }
    }
    globalOnChange = (item, formData) => {
        const { selected, editorNode, pseudoClass, styleObj, dispatch } = this.props
        console.log(item, formData, 'globalOnchange')
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
        // console.log(str, data.customCode, styleObj[uniqueClassIndex], uniqueClassIndex, 'final to be saved in redux')

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
                value: (selected.styleInfo.styles && selected.styleInfo.styles.display) || selected.node && getComputedStyle(selected.node, 'active').display,
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles.position) || selected.node && getComputedStyle(selected.node, 'active').position,
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles.top) || selected.node && getComputedStyle(selected.node, 'active').top,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Right X',
                key: 'right',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.right) || selected.node && getComputedStyle(selected.node, 'active').right,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Left X',
                key: 'left',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.left) || selected.node && getComputedStyle(selected.node, 'active').left,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Bottom X',
                key: 'bottom',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.bottom) || selected.node && getComputedStyle(selected.node, 'active').bottom,
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles.width) || selected.node && getComputedStyle(selected.node, 'active').width,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Heigth',
                key: 'height',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.height) || selected.node && getComputedStyle(selected.node, 'active').height,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Max Width',
                key: 'max-width',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.maxWidth) || selected.node && getComputedStyle(selected.node, 'active').maxWidth,
                defaultUnit: 'px',
                unit: ['px', '%'],
                width: '48%',
            },
            {
                label: 'Max Height',
                key: 'max-height',
                type: 'integer',
                value: (selected.styleInfo.styles && selected.styleInfo.styles.maxHeight) || selected.node && getComputedStyle(selected.node, 'active').maxHeight,
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
                value: (selected.styleInfo.styles && selected.styleInfo.styles['font-family']) || selected.node && getComputedStyle(selected.node, 'active')['font-family'],
                width: '100%',
                labelClass: 'custom-label',
                onChange: (value, item, pastValue) => {
                    console.log('custom onchange', item)
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
                    this.getFormDataDimension = fn
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
