import React from "react"
import _ from 'lodash'
import $ from 'jquery'

import Icons from '../../../../../assets/Icons'

class Integer extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }
    state = {
        value: '',
        unitValue: this.props.meta.defaultUnit || ''
    }
    componentDidMount() {
        if (this.props.meta.stopScrollValue) {
            $('.no-scroll').on('mousewheel', function (e) { $(this).blur() })
            $('.no-scroll').on('keydown', function (e) {
                if (e.which === 38 || e.which === 40) {
                    e.preventDefault();
                }
            })
        }
        this.initValue()
        this.setState({ unitValue: this.props.meta.defaultUnit || '' })
    }
    initValue = () => {
        let { meta: { value, unit } } = this.props
        let defaultUnit = ''
        if (!unit || unit.length == 0 || value == '' || value == null) {
            this.setState({ value: isNaN(parseInt(this.props.meta.value)) ? '' : parseInt(this.props.meta.value) })
            return
        }
        unit.forEach((item) => {
            if (value && value.includes(item)) {
                defaultUnit = item
                this.setState({ unitValue: item }, () => {
                    this.setState({ unitValue: item })
                })
            }
        })
        this.setState({ value: value.replace(defaultUnit, '') }, () => {

        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.meta.value != this.props.meta.value) {
            this.initValue()
        }
    }
    // componentDidUpdate(prevProps) {
    //     if (prevProps.meta.value != this.props.meta.value ) {
    //         this.setState({ value: this.props.meta.value })
    //     }
    // }
    onChange = (value) => {
        const { meta: { onChange }, globalOnChange } = this.props
        this.setState({ value: value }, () => {
            let resp = `${this.state.value}${this.state.unitValue}`
            if (resp.includes('none')) {
                resp = 'none'
            }
            onChange && onChange(resp)
            globalOnChange && globalOnChange(resp)
        })
    }
    handleFocus = (event) => event.target.select();
    render() {
        const {
            meta: {
                // value,
                defaultUnit,
                unit,
                step,
                disabled,
                stopScrollValue,
                min,
                max,
                onChange, //form item specific change
                // rules,
                // multiple,
            },
            globalOnChange //complete form specific change
        } = this.props
        const { value, unitValue } = this.state
        return (
            <div className={'integer-container'} style={disabled ? { pointerEvents: 'none' } : {}}>
                <input type="number" name="int"
                    ref={this.inputRef}
                    value={disabled ? '' : value}
                    onFocus={this.handleFocus}
                    disabled={disabled}
                    className={stopScrollValue ? 'no-scroll' : ''}
                    placeholder={(value == '' || disabled) ? 'Auto' : (isNaN(value) ? _.startCase(value) : '')}
                    onChange={(e) => {
                        let value = e.target.value
                        if (!isNaN(parseInt(min)) && parseInt(value) < min) {
                            value = min
                        }
                        if (!isNaN(parseInt(max)) && value > max) {
                            value = max
                        }
                        if (value == '' && (this.props.meta.key == 'max-height' || this.props.meta.key == 'max-width')) {
                            console.log('sss.p sending none')
                            value = 'none'
                        } else if (value == '') {
                            value = 0
                        }
                        this.onChange(value)
                    }}
                    style={disabled ? { background: 'rgba(59, 59, 59, 0.3)', paddingRight: unit || defaultUnit ? '30px' : '15px' } : { paddingRight: unit || defaultUnit ? '30px' : '15px' }}
                />
                {
                    unit &&
                    <div className={'unit-select'}>
                        <select type={'select'} value={unitValue} onChange={(e) => { this.setState({ unitValue: e.target.value }, () => { this.onChange(this.state.value) }) }} >
                            {
                                unit.map(val => (
                                    <option value={val}> {val} </option>
                                ))
                            }
                        </select>
                    </div>
                }
                {
                    (!unit && defaultUnit) &&
                    <div className={'unit-select'}>
                        <select type={'select'} value={unitValue} >
                            {
                                <option value={defaultUnit}> {defaultUnit} </option>
                            }
                        </select>
                    </div>
                }
                <div className={'step'}>
                    <Icons.Up className={'set-down'} style={{ width: '6.75px', height: '3.38px', marginBottom: '5.28px' }} onClick={() => { this.onChange((isNaN(parseInt(value)) ? 0 : parseInt(value)) + (step || 1)) }} />
                    <Icons.Dropdown className={'set-up'} style={{ width: '6.75px', height: '3.38px' }} onClick={() => { this.onChange((isNaN(parseInt(value)) ? 0 : parseInt(value)) - (step || 1)) }} />
                </div>
            </div>
        )
    }
}


export default Integer