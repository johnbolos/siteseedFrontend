import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'

// import "./index.scss"
import _grapesEditor from "../../../components/utils/grapesEditor"
// import { Select } from '../../../components/ui/editor'
import { undo, redo, setEditorStyleData } from "../../../reducers/actions/editorHistoryActions"
import { setPseudoClass } from "../../../reducers/actions/editor"
import { customEvents } from '../../../components/utils/grapesEditor/styleManager'
import Icons from '../../../assets/Icons'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef()
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this)
    }
    state = {
        selected: this.props.value,
        open: false
    }
    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }
    onClickOutsideHandler(event) {
        if (!this.listRef.current.contains(event.target) && this.state.open == true) {
            this._onBlur()
        } else {
            this.setState({ open: true })
        }
    }
    select = (item) => {
        this.setState({ selected: item.label ? item.value : item }, () => {
            setTimeout(() => {
                this.props.onChange && this.props.onChange(this.state.selected)
            }, 10);
        })
    }
    _onBlur = (e) => { this.props.onBlur(e) }
    render() {
        const { selected } = this.state
        const { items } = this.props
        return (
            <div ref={this.listRef} className={'list-container' || this.props.className} style={{ width: `${document.querySelector(".style-panel-container .classes-container .heading").clientWidth}px` }}>
                {items.map((item, key) => {
                    return <div
                        key={key}
                        className={(item.value == selected || item == selected) ? 'listItemSelected' : 'listItem'}
                        onClick={() => { this.select(item) }}
                    >
                        {
                            (item.value == selected || item == selected) &&
                            <Icons.Tick className={'tick'} style={{ width: '12px', height: '12px', paddingBottom: '2px' }} />
                        }
                        {item.label ? item.label : item}
                    </div>
                })}
            </div>
        )
    }
}

class ClassManager extends React.Component {
    constructor(props) {
        super(props);
        // Create a ref to store the textInput DOM element
        this.addClassInput = React.createRef();
    }
    state = {
        showTagInput: false,
        selectPseudoClass: false,
        pseudoClass: 'Normal'
    }
    componentDidUpdate(prevProps) {
        if (prevProps.selected.node != this.props.selected.node) {
            this.setState({ pseudoClass: 'Normal', selectPseudoClass: false }, () => {
                this.props.dispatch(setPseudoClass('normal'))
            })
        }
    }
    getClass = (node) => node.className.split(' ')
    toggleAddClass = () => {
        this.setState({ showTagInput: !this.state.showTagInput }, () => {
            if (this.state.showTagInput && this.state.showTagInput) {
                
                this.addClassInput.current.focus();
            }
        })
    }
    toggleClass = (val, key) => {
        const { selected, editorNode } = this.props
        let editor = _grapesEditor.editor
        let componentModel = editor.getSelected()
        componentModel.removeClass(val)
        if (!val.includes('_hidden')) {
            val = `${val}_hidden`
        } else {
            val = val.replace('_hidden', '')
        }
        // let arr = selected.node.className.split(' ')
        // arr[key] = `${val}`
        // selected.node.className = arr.join(' ')
        componentModel.addClass(val)
        this.updateHtml()
        this.forceUpdate()
    }
    addClass = (e) => {
        const { selected } = this.props
        if (e.key != 'Enter') return;
        // selected.node.className += ` ${e.target.value}`
        let editor = _grapesEditor.editor
        let componentModel = editor.getSelected()
        componentModel.addClass(e.target.value)
        this.toggleAddClass()
        this.updateHtml()
    }
    deleteClass = (val, key) => {
        const { selected } = this.props
        // let arr = selected.node.className.split(' ')
        // arr[key] = ''
        // selected.node.className = arr.join(' ')
        let editor = _grapesEditor.editor
        let componentModel = editor.getSelected()
        componentModel.removeClass(val)

        this.updateHtml()
        this.forceUpdate()
    }
    updateHtml = () => {
        const { selected, editorNode } = this.props

    }
    pseudoClassChange = (val) => {
        const { selected, editorNode, dispatch } = this.props
        this.setState({ pseudoClass: val, selectPseudoClass: false }, () => {
            dispatch(setPseudoClass(val.toLowerCase()))
            if (selected && selected.node == null) return
            if (val == 'Normal') {
                customEvents.saveStyleInfo({ elem: selected.node, node: editorNode })
                return
            }
            customEvents.saveStyleInfo({ elem: selected.node, node: editorNode }, { pseudoClass: val.toLowerCase() })
        })
    }
    render() {
        const { showTagInput, selectPseudoClass, pseudoClass } = this.state
        const { selected } = this.props
        return (
            <div className={'classes-container'}>
                <div className={'heading'}>Classes</div>
                <div className={'input'}>
                    {/* <div style={{ width: '90%', height: '100%', display: 'flex', alignItems: 'center' }}> */}
                    <div style={{ width: '90%', height: '100%', display: 'flex' }}>
                        <div className={'addBtn'} onClick={!(selected && selected.node == null) && this.toggleAddClass}>
                            <Icons.Plus className={'add-class-icon'} style={{ width: '9px', height: '9px' }} />
                        </div>
                        {selected && selected.node == null ? (
                            <div className={'defaultTxt'}>Select a Class or Tag</div>
                        ) : (
                                <div className={'tags-container'}>
                                    {this.getClass(selected.node).map((item, key) => {
                                        let hidden = item.includes('_hidden')
                                        if (item.includes('gjs') || item.trim() == '') {
                                            return null
                                        }
                                        return <div className={`tags ${hidden ? 'hidden' : null}`} key={key}>
                                            {hidden ? (
                                                <Icons.CheckboxUnchecked className={'checkbox'} onClick={(e) => { this.toggleClass(item, key) }} style={{ width: '9px', height: '9px' }} />
                                            ) : (
                                                    <Icons.Checkbox className={'checkbox'} onClick={(e) => { this.toggleClass(item, key) }} style={{ width: '9px', height: '9px' }} />
                                                )}
                                            <div className={'tagTxt'}>{hidden ? item.replace('_hidden', '') : item}</div>
                                            <Icons.Plus className={'cross'} onClick={(e) => { this.deleteClass(item, key) }} style={{ width: '9px', height: '9px', transform: 'rotate(-45deg)' }} />
                                        </div>
                                    })}
                                </div>
                            )
                        }
                    </div>
                    <div className={'dropdownBtn'} onClick={() => { this.setState({ selectPseudoClass: true }) }}>
                        <Icons.Dropdown className={'dropDown'} style={{ width: '9px', height: '9px' }} />
                    </div>
                    {
                        showTagInput &&
                        <div className={'tagInput-container'}>
                            <input type="text" ref={this.addClassInput} className={'add-class-input'} name={'tagInput'} onKeyDown={this.addClass} onBlur={!this.state.showTagInput && this.toggleAddClass}></input>
                        </div>
                    }
                </div>
                {
                    selectPseudoClass &&
                    <List
                        value={pseudoClass}
                        items={['Normal', 'Hover', 'Active']}
                        onChange={this.pseudoClassChange}
                        onBlur={(e) => { this.setState({ selectPseudoClass: false }) }}
                        parentNode={this}
                    />

                }
                <div className={'selectorInfo'}>{selected.node && ('Selected: ' + selected.node.tagName + '#' + selected.node.id)}</div>
            </div>
        )
    }
}
const mapStateToProps = ({ global, layout, templates, editorHistory }) => {
    return {
        loading: global.loading,
        templates,
		styleObj: JSON.parse(editorHistory.present.styleObj),
    }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassManager)
