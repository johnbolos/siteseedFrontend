import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'

import "./index.scss"
import _grapesEditor from "../../../components/utils/grapesEditor"
import Icons from '../../../assets/Icons'

class StyleManager extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {

    }
    createCategories = (data) => {
        const { opened } = this.state
        const toggleOpen = (key) => {
            if (opened == key) {
                this.setState({ opened: -1 }, console.log(opened, 'dsad'))
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
            return (<div>
                <div onClick={() => { toggleOpen(key) }}>{item.render ? item.render() : label(item, key)}</div>
                {opened == key && <div className={item.childerClass || 'children-container'}>{item.children}</div>}
            </div>)
        })
    }
    render() {
        const { } = this.state
        const { selected, editorNode } = this.props
        const generalFormFields = [
            {
                label: () => { return <div>Alignment</div> }, //optional; Type: String || () => {}
                // inline: true,
                key: '',
                type: 'select', //required
                // multiple: true
                defaultValue: '',
                options: [{     //optional type: Array of string, Array of objects
                    label: '',
                    value: '',
                    render: (item) => { }
                }],
                // labelWidth: '',
                // fieldWidth: '',
                // labelClass: '',
                // fieldClass: '',
                // render: (default, onChange) => {

                // }
                // onChange: (val) => {}, // optional instead have global
            }
        ]
        const categories = [
            {
                label: 'Ganeral',
                children: (<div>childer</div>),
                // render: () => {
                //     return <div className={'category-label'}>General Custom</div>
                // }
            },
            {
                label: 'Dimension',
                children: (<CreateForm fields={generalFormFields} onChange={(item, data) => { }} getFormFields={(data) => { }} />),
            },
            {
                label: 'Typography',
                children: (<div>Child</div>),
            },
        ]
        const formFields = [

        ]
        return (
            <div className={'style-manager-container'}>
                {this.createCategories(categories)}
            </div>
        )
    }
}

const mapStateToProps = ({ global, layout, templates, editorHistory }) => {
    return {
        loading: global.loading,
        templates,
        styleObj: editorHistory.present.styleObj
    }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(StyleManager)
