import React from "react"
import _ from 'lodash'

import Icons from '../../../../../assets/Icons'

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef()
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this)
        this._onBlur = this._onBlur.bind(this)
    }
    state = {
        value: this.props.meta.value,
        open: false
    }
    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }
    componentDidUpdate(prevProps) {
        console.log('did', this.props.meta.value)
        if (prevProps.meta.value != this.props.meta.value ) {
            this.setState({ value: this.props.meta.value })
        }
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }
    onClickOutsideHandler(event) {
        if ((this.listRef.current && !this.listRef.current.contains(event.target)) && this.state.open == true) {
            this._onBlur()
        }
    }
    select = (item, key) => {
        this.setState({ value: item.value ? item.value : item, optionKey: key }, () => {
        })
    }
    _onBlur = (e) => { this.setState({ open: false }) }
    showLabel = (value) => {
        const { meta: { options } } = this.props
        const match = _.find(options, (item) => {
        
            return item == value || item.value == value
        })
        console.log(match, 'diddd')
        if (match) {
            if (typeof (match.label) == 'function') {
                return match.label()
            }
            return match.label
        }
        return value
    }
    render() {
        const {
            meta: {
                // value,
                options,
                onChange, //form item specific change
                // rules,
                // multiple,
            },
            // globalOnChange //complete form specific change
        } = this.props
        const { value, open, optionKey } = this.state
        return (
            <div ref={this.listRef} className={'select-container'}>
                <div className={'input'} onClick={() => { this.setState({ open: !this.state.open }) }}>
                    <div>{this.showLabel(value)}</div>
                    <Icons.Dropdown className={'down-arrow'} style={{ width: '6.75px', height: '3.38px' }} />
                </div>
                {
                    open &&
                    <div
                        className={'list-container'}
                        style={{ width: `${document.querySelector('.style-panel-container .select-container > .input').clientWidth}px` }}
                    >
                        {options.map((item, key) => {
                            let child = null
                            if (typeof (item) === 'string') {
                                child = <>{
                                    (item.value == value || item == value) &&
                                    <Icons.Tick className={'tick'} style={{ width: '9px', height: '6.92px' }} />
                                }
                                    <div className={'item-label'}>{item}</div>
                                </>
                            } else {
                                if (typeof (item.label) === 'function') {
                                    child = <>{
                                        (item.value == value || item == value) &&
                                        <Icons.Tick className={'tick'} style={{ width: '9px', height: '6.92px' }} />
                                    }
                                        <div className={'item-label'}>{item.label()}</div>
                                    </>
                                } else {
                                    child = <>{
                                        (item.value == value || item == value) &&
                                        <Icons.Tick className={'tick'} style={{ width: '9px', height: '6.92px' }} />
                                    }
                                        <div className={'item-label'}>{item.label}</div>
                                    </>
                                }
                            }

                            return <div
                                key={key}
                                className={(item.value == value || item == value) ? 'list-item-selected' : 'list-item'}
                                onClick={() => { this.select(item, key) }}
                            >
                                {child}
                            </div>
                        })}
                    </div>
                }
            </div>
        )
    }
}


export default Select