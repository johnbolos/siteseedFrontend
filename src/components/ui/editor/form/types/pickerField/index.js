import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import convert from 'color-convert'
import { ChromePicker } from 'react-color'

import Icons from '../../../../../../assets/Icons'
import Integer from "../integer";

class PickerField extends React.Component {
    constructor(props) {
        super(props);
        this.PickerRef = React.createRef()
        this.unitRef = React.createRef()
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this)
    }
    state = {
        value: '#006CFF',
        alphaValue: '',
        openPicker: false,
        rgb: {
            r: '255',
            g: '255',
            b: '255',
            a: '1',
        },
        unitWidth: 0
    }
    componentDidMount() {
        this.initValue(this.props.meta.value)
        this.setState({ unitWidth: document.querySelector('.unit-select > select') && document.querySelector('.unit-select > select').clientWidth })
        window.addEventListener('mousedown', this.onClickOutsideHandler);
    }
    onClickOutsideHandler(event) {
        if (!(this.PickerRef.current && this.PickerRef.current.contains(event.target))) {
            this.setState({ openPicker: false })
        }
    }
    componentDidUpdate(prevProps) {
        if ((prevProps.meta.value != this.props.meta.value)) {
            console.log(this.props.meta.value, 'valueu')
            this.setState({ unitWidth: document.querySelector('.unit-select > select') && document.querySelector('.unit-select > select').clientWidth })
            this.initValue(this.props.meta.value)
        }
    }
    initValue = (value) => {
        let { alphaValue } = this.state
        if (value == null) {
            return
        }
        let regex = new RegExp(/rgb\(|rgba\(|\)| /gi)
        value = value.replace(regex, '')
        value = value.split(',')
        if (value.length == 3) {
            value = '#' + convert.rgb.hex(value)
            alphaValue = 100
        }
        if (value.length == 4) {
            alphaValue = parseFloat(value[3]) * 100
            value.pop()
            value = '#' + convert.rgb.hex(value)
        }
        if (value[0].includes('#')) {
            if (value[0].length == 9)
                alphaValue = value[0].substring(7, 9) || 0
        }
        let rgb = [...convert.hex.rgb(value), alphaValue / 100]
        this.setState({ value, alphaValue, rgb: { r: rgb[0], g: rgb[1], b: rgb[2], a: alphaValue / 100 } })
    }
    onChange = (val, key) => {
        const { meta: { onChange }, globalOnChange } = this.props
        const { value, alphaValue } = this.state
        this.setState({ [key]: val }, () => {
            let rgb = convert.hex.rgb(this.state.value)
            let updatedVal = `rgba(${rgb.join(',')}, ${alphaValue / 100})`
            onchange && onChange(updatedVal)
            globalOnChange && globalOnChange(updatedVal)
        })
    }
    handlePickerChange = (color) => {
        this.setState({ alphaValue: color.rgb.a * 100, rgb: color.rgb }, () => {
            this.onChange(color.hex, 'value')
        })
    }
    handleFocus = (event) => event.target.select();
    render() {
        const {
            meta: {
                // value,
                onChange, //form item specific change
                // rules,
                // multiple,
            },
            globalOnChange //complete form specific change
        } = this.props
        const { value, alphaValue, openPicker } = this.state
        return (
            <div ref={this.PickerRef} className={'picker-field-container'}>
                <div className={'preview-color'} onClick={() => { this.setState({ openPicker: true }) }} style={{ background: value }}></div>
                {
                    openPicker && <div onBlur={() => {
                    }}>
                        <ChromePicker
                            color={this.state.rgb}
                            onChangeComplete={this.handlePickerChange}

                        />
                    </div>
                }
                <input type={'text'} className={'value'}
                    onFocus={this.handleFocus}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            this.onChange(e.target.value, 'value')
                        }
                    }}
                    onBlur={(e) => {
                        if (e.target.value != this.state.value) {
                            this.onChange(e.target.value, 'value')
                        }
                    }}
                    // onChange={(e) => { this.setState({ value: e.target.value }) }}
                    value={(value == '') ? '#006CFF' : value}

                />
                <input type="number" className={'alpha'} name="int"
                    onFocus={this.handleFocus}
                    value={(alphaValue === '') ? '100' : parseFloat(alphaValue).toFixed(0)}

                    style={{ textAlign: 'end', paddingRight: this.state.unitWidth + 7 }}
                    // onChange={(e) => {
                    //     let val = e.target.value
                    //     if (e.target.value == '') val = 0
                    //     this.onChange(val, 'alphaValue')
                    // }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            this.onChange(e.target.value, 'alphaValue')
                        }
                    }}
                    onBlur={(e) => {
                        this.onChange(e.target.value, 'alphaValue')
                    }}
                    onChange={(e) => { this.setState({ alphaValue: e.target.value }) }}
                />
                {
                    <div className={'unit-select'} ref={this.unitRef}>
                        <select type={'select'} value={'%'} >
                            {
                                <option value={'%'}> {'%'} </option>
                            }
                        </select>
                    </div>
                }
            </div>
        )
    }
}


export default PickerField