import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'

import "./styles.scss"
import Icons from '../../../assets/Icons'


class Select extends React.Component {
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
            <div ref={this.listRef} className={'list-container' || this.props.className} style={{ width: `${document.querySelector(".style-panel-container .classes-container .heading").clientWidth - 20}px` }}>
                {items.map((item, key) => {
                    return <div
                        key={key}
                        className={(item.value == selected || item == selected) ? 'listItemSelected' : 'listItem'}
                        onClick={() => { this.select(item) }}
                    >
                        {
                            (item.value == selected || item == selected) &&
                            <Icons.Tick className={'tick'} style={{ width: '12px', height: '122px' }} />
                        }
                        {item.label ? item.label : item}
                    </div>
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ global, layout, templates, editorHistory }) => {
    return {
        loading: global.loading,
        templates,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Select)
