import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'

// import "./index.scss"
import _grapesEditor from "../../../components/utils/grapesEditor"
// import { Select } from '../../../components/ui/editor'
import { undo, redo, setEditorStyleData } from "../../../reducers/actions/editorHistoryActions"
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
        console.log(document.querySelector(".style-panel-container .classes-container .input").clientWidth, 'immer width')
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }
    onClickOutsideHandler(event) {
        console.log('workenig')
        if (!this.listRef.current.contains(event.target) && this.state.open == true) {
            console.log(this.state.open)
            this._onBlur()
        } else {
            this.setState({ open: true })
        }
    }
    select = (item) => {
        this.setState({ selected: item.label ? item.value : item }, () => {
            console.log(this.state.selected)
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
                            <Icons.Tick className={'tick'} style={{ width: '9px', height: '6.92px' }} />
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
        pseudoClass: 'Active'
    }
    componentDidUpdate(prevProps) {
        if (prevProps.selected.node != this.props.selected.node) {
            console.log('node chage')
            this.setState({ pseudoClass: 'Active' })
        }
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
        const { selected, editorNode } = this.props
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
    }
    deleteClass = (val, key) => {
        const { selected } = this.props
        let arr = selected.node.className.split(' ')
        arr[key] = ''
        selected.node.className = arr.join(' ')
        this.updateHtml()
        this.forceUpdate()
    }
    updateHtml = () => {
        const { selected, editorNode } = this.props

    }
    pseudoClassChange = (val) => {
        const { selected, editorNode } = this.props
        this.setState({ pseudoClass: val, selectPseudoClass: false }, () => {
            if (selected && selected.node == null) return
            if (val == 'Active') {
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
                    <div className={'dropdownBtn'} onClick={() => { this.setState({ selectPseudoClass: true }) }}>
                        <Icons.Dropdown className={'dropDown'} style={{ width: '9px', height: '9px' }} />
                    </div>
                    {
                        showTagInput &&
                        <div className={'tagInput-container'}>
                            <input type="text" ref={this.addClassInput} className={'add-class-input'} name={'tagInput'} onKeyDown={this.addClass} onBlur={this.toggleAddClass}></input>
                        </div>
                    }
                </div>
                {
                    selectPseudoClass &&
                    <List
                        value={pseudoClass}
                        items={['Active', 'Hover', 'Click']}
                        onChange={this.pseudoClassChange}
                        onBlur={(e) => { this.setState({ selectPseudoClass: false }) }}
                        parentNode={this}
                    />

                }
                <div className={'selectorInfo'}>Selected: {selected.node && (selected.node.tagName + '#' + selected.node.id)}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClassManager)
