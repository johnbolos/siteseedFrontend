import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'

// import "./index.scss"
import _grapesEditor from "../../components/utils/grapesEditor"
import { undo, redo, setEditorStyleData } from "../../reducers/actions/editorHistoryActions"
import { customEvents } from '../../components/utils/grapesEditor/styleManager'
import Icons from '../../assets/Icons'
import { template1Html, template1Style } from "./dummie"

class StylePanel extends React.Component {
    constructor(props) {
        super(props);
        // Create a ref to store the textInput DOM element
        this.addClassInput = React.createRef();
    }
    state = {
        showTagInput: false
    }
    componentDidMount() {

    }
    getClass = (node) => node.className.split(' ')
    toggleAddClass = () => {
        this.setState({ showTagInput: !this.state.showTagInput }, () => {
            if (this.state.showTagInput) {
                this.addClassInput.current.focus();
            }
        })
    }
    toggleClass = (val, key) => {
        const { selected, parentNode } = this.props
        if (!val.includes('@hidden')) {
            val = `${val}@hidden`
        } else {
            val = val.replace('@hidden', '')
        }
        console.log(val)
        let arr = selected.node.className.split(' ')
        arr[key] = `${val}`
        selected.node.className = arr.join(' ')
        this.updateHtml()
        this.forceUpdate()
    }
    addClass = (e) => {
        const { selected } = this.props
        if (e.key != 'Enter') return;
        console.log(e.target.value)
        selected.node.className += ` ${e.target.value}`
        this.toggleAddClass()
        this.updateHtml()
        console.log(this.props.styleObj[selected.styleInfo.index])
    }
    deleteClass = (val, key) => {
        const { selected, parentNode } = this.props
        let arr = selected.node.className.split(' ')
        arr[key] = ''
        selected.node.className = arr.join(' ')
        this.updateHtml()
        this.forceUpdate()
    }
    updateHtml = () => {
        const { selected, parentNode } = this.props
        
    }
    render() {
        const { showTagInput } = this.state
        const { selected } = this.props
        return (
            <div className={'style-panel-container'}>
                {/* <pre className={'pre'} style={{ whiteSpace: 'break-spaces' }}>{JSON.stringify(selected.styleInfo)}</pre> */}
                {/* classes */}
                <div className={'classes-container'}>
                    <div className={'heading'}>Classes</div>
                    <div className={'input'}>
                        <div style={{ width: '90%', height: '100%', display: 'flex', alignItems: 'center' }}>
                            <div className={'addBtn'} onClick={!(selected && selected.node == null) && this.toggleAddClass}>
                                <Icons.Plus className={'add-class-icon'} style={{ width: '9px', height: '9px' }} />
                            </div>
                            {selected && selected.node == null ? (
                                <div className={'defaultTxt'}>Select a Class or Tag</div>
                            ) : (
                                    <div className={'tags-container'}>
                                        {this.getClass(selected.node).map((item, key) => {
                                            let hidden = item.includes('@hidden')
                                            if (item.includes('gjs') || item.trim() == '') {
                                                return null
                                            }
                                            return <div className={`tags ${hidden ? 'hidden' : null}`} key={key}>
                                                {hidden ? (
                                                    <Icons.CheckboxUnchecked className={'checkbox'} onClick={(e) => { this.toggleClass(item, key) }} style={{ width: '9px', height: '9px' }} />
                                                ) : (
                                                        <Icons.Checkbox className={'checkbox'} onClick={(e) => { this.toggleClass(item, key) }} style={{ width: '9px', height: '9px' }} />
                                                    )}
                                                <div className={'tagTxt'}>{hidden ? item.replace('@hidden', '') : item}</div>
                                                <Icons.Plus className={'cross'} onClick={(e) => { this.deleteClass(item, key) }} style={{ width: '9px', height: '9px', transform: 'rotate(-45deg)' }} />
                                            </div>
                                        })}
                                    </div>
                                )
                            }
                        </div>
                        <div className={'dropdownBtn'}>
                            <Icons.Dropdown className={'dropDown'} style={{ width: '9px', height: '9px' }} />
                        </div>
                        {
                            showTagInput &&
                            <div className={'tagInput-container'}>
                                <input type="text" ref={this.addClassInput} className={'add-class-input'} name={'tagInput'} onKeyDown={this.addClass} onBlur={this.toggleAddClass}></input>
                            </div>
                        }
                    </div>
                </div>
                {/* Settings */}

                {/* styles */}
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

export default connect(mapStateToProps, mapDispatchToProps)(StylePanel)
