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
        if (prevProps.meta.value != this.props.meta.value) {
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
        const { meta: { onChange, multiple, key: fieldKey }, globalOnChange } = this.props
        if (multiple) {
            let val = item.value ? item.value : item
            let resp = []
            if (this.state.value.includes(val)) {
                resp = this.state.value.filter(e => e !== val)
            } else {
                resp = [...this.state.value, val]
            }
            this.setState({ value: resp, open: false }, () => {
                onChange && onChange(resp, fieldKey)
                globalOnChange && globalOnChange(this.state.value, item)
            })
            return
        }
        onChange && onChange(item.value ? item.value : item, item, this.state.value)
        this.setState({ value: item.value ? item.value : item, open: false }, () => {
            globalOnChange && globalOnChange(this.state.value, item)
        })
    }
    _onBlur = (e) => { this.setState({ open: false }) }
    showLabel = (value) => {
        const { meta: { options, multiple } } = this.props
        if (multiple) {
            const match = _.find(options, (item) => {
                return item.value == value[0]
            })
            let firstValue = 'Select Scroll Effects'
            if (match) {
                if (typeof (match.label) == 'function') {
                    firstValue = match.label()
                } else if (typeof (match.label) == 'string') {
                    firstValue = match.label
                } else {
                    firstValue = _.startCase(match.value)
                }
            }
            let length = value.length - 1
            if (length < 1) {
                return firstValue
            }
            return firstValue + ` & ${length} more`
        }
        const match = _.find(options, (item) => {
            return item.value == value
        })
        if (match) {
            if (typeof (match.label) == 'function') {
                return match.label()
            } else if (typeof (match.label) == 'string') {
                return match.label.replace(/\+|'|"/gi, ' ').trim()
            }
            return match.label
        }
        return value && value.replace(/\+|'|"/gi, ' ').trim()
    }
    render() {
        const {
            meta: {
                // value,
                options,
                onChange, //form item specific change
                // rules,
                multiple,
            },
            globalOnChange //complete form specific change
        } = this.props
        const { value, open } = this.state
        return (
            <div ref={this.listRef} className={'select-container'}>
                <div className={'input'} onClick={() => { this.setState({ open: !this.state.open }) }}>
                    <div style={{ display: 'flex' }}>{this.showLabel(value)}</div>
                    <Icons.Dropdown className={'down-arrow'} style={{ width: '6.75px', height: '3.38px' }} />
                </div>
                {
                    open &&
                    <div
                        className={'list-container'}
                        style={{
                            width: `${this.listRef.current.clientWidth}px`,
                            // maxHeight: `${(document.querySelector('.styles-container').clientHeight) / 4}px`,
                            top: (document.querySelector('.styles-container').clientHeight - (document.querySelector('.select-container').getBoundingClientRect().bottom) > (document.querySelector('.styles-container').clientHeight) / 4) ? '110%' : '',
                            bottom: (document.querySelector('.styles-container').clientHeight - (document.querySelector('.select-container').getBoundingClientRect().bottom) > (document.querySelector('.styles-container').clientHeight) / 4) ? '' : '110%'
                        }}
                    >
                        {options.map((item, key) => {
                            if (item.type == 'divider') {
                                return <div className={'list-divider'}></div>
                            }
                            if (item.type && item.type == 'custom') {
                                return <>{item.render()}</>
                            }
                            let child = null
                            if (typeof (item) === 'string') {
                                child = <>{
                                    (item.value == value || item == value) &&
                                    <Icons.Tick className={'tick'} style={{ width: '12px', height: '12px', paddingBottom: '2px' }} />
                                }
                                    <div className={'item-label'}>{item}</div>
                                </>
                            } else {
                                if (typeof (item.label) === 'function') {
                                    child = <>{
                                        (item.value == value || item == value) &&
                                        <Icons.Tick className={'tick'} style={{ width: '12px', height: '12px', paddingBottom: '2px' }} />
                                    }
                                        <div className={'item-label'}>{item.label()}</div>
                                    </>
                                } else if (multiple) {
                                    child = <>{
                                        (value.includes(item.value)) &&
                                        <Icons.Tick className={'tick'} style={{ width: '12px', height: '12px', paddingBottom: '2px' }} />
                                    }
                                        <div className={'item-label'}>{item.label}</div>
                                    </>

                                    return <div
                                        key={key}
                                        className={(value.includes(item.value)) ? 'list-item-selected' : 'list-item'}
                                        onClick={() => { this.select(item, key) }}
                                    >
                                        {child}
                                    </div>
                                } else {
                                    child = <>{
                                        (item.value == value || item == value) &&
                                        <Icons.Tick className={'tick'} style={{ width: '12px', height: '12px', paddingBottom: '2px' }} />
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