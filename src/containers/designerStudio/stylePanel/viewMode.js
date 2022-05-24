import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'

import "./index.scss"
import Icons from '../../../assets/Icons'
import RadioBtn from "../../../components/ui/editor/form/types/radioBtn"
import { setTheme } from "../../../reducers/actions"

class ViewMode extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        showModal: false
    }
    toogleModal = (e) => {
        if (e) {
            e.stopPropagation()
        }
        this.setState({ showModal: !this.state.showModal })
    }
    switchTheme = (value) => {
        const { theme, dispatch } = this.props
        // set classs name
        let themeElem = document.querySelector(`.theme-${theme}`)
        if (themeElem) {
            themeElem.setAttribute('class', `theme-${value}`)
            dispatch(setTheme(value))
            // this.toogleModal()
        }
    }
    render() {
        const { showModal } = this.state
        const { selected, editorNode } = this.props
        const radioMeta = {
            value: this.props.theme,
            options: [  //optional type: Array of string, Array of objects
                {
                    label: (
                        <div className={'button-label-container'}>
                            <Icons.ThemeLight style={{ width: '22px', height: '22px' }} />
                            <div className={'btn-label-txt'}>Light</div>
                        </div>
                    ),
                    value: 'light'
                },
                {
                    label: (
                        <div className={'button-label-container'}>
                            <Icons.ThemeDark style={{ width: '20px', height: '20px' }} />
                            <div className={'btn-label-txt'}>Dark</div>
                        </div>
                    ),
                    value: 'dark'
                },
            ]
        }
        return (
            <>
                <div className={'view-mode-container'} onClick={this.toogleModal}>
                    <Icons.Theme className={'theme-icon'} style={{ width: '15px', height: '15px' }} />
                    <div className={'heading'}>View Mode</div>
                </div>

                {
                    showModal && <div className={'view-mode-mask'} onClick={this.toogleModal}>
                        <div className={'view-mode-modal'} onClick={(e) => {e.stopPropagation()}}>
                            <div className={'view-mode-header'}>
                                <div className={'title'}>View Mode</div>
                                <Icons.Cross className={'close-icon'} onClick={this.toogleModal} style={{ width: '14px', height: '14px' }} />
                            </div>
                            <div className={'view-mode-content'}>
                                <div className={'content-property'}>Theme</div>
                                {/* <CreateForm fields={fields} globalOnChange={this.onChange} /> */}
                                <RadioBtn meta={radioMeta} globalOnChange={this.switchTheme} />
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = ({ global, layout, templates, editorHistory }) => {
    return {
        loading: global.loading,
        templates,
        theme: layout.theme,
        styleObj: JSON.parse(editorHistory.present.styleObj),
    }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMode)
