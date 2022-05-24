import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'
import $ from 'jquery'
import convert from 'color-convert'
import { ChromePicker } from 'react-color'
import html2canvas from 'html2canvas'

import Icons from '../../../../../../assets/Icons'
import Integer from "../integer";
import Select from "../select"
import { appendColor } from "../../../../../../reducers/actions/editor"

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
        unitWidth: 0,
        pickerInputType: 'Hex',
        pastColors: null,
        didEdited: false,
    }
    componentDidMount() {
        this.initValue(this.props.meta.value)
        this.setState({ unitWidth: document.querySelector('.unit-select > select') && document.querySelector('.unit-select > select').clientWidth })
        window.addEventListener('mousedown', this.onClickOutsideHandler);
    }
    onClickOutsideHandler(event) {
        if (!(this.PickerRef.current && this.PickerRef.current.contains(event.target))) {
            this.setState({ openPicker: false }, () => {
                let { recentColors, dispatch } = this.props
                // add color if changes to recent
                if (_.lowerCase(this.state.value) != _.lowerCase(recentColors[0]) && this.state.didEdited) {
                    this.setState({ didEdited: false })
                    // add this color
                    dispatch(appendColor(this.state.value))
                }
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.meta.value != this.props.meta.value)) {
            this.setState({ unitWidth: document.querySelector('.unit-select > select') && document.querySelector('.unit-select > select').clientWidth })
            if (!this.state.openPicker) {   // only update value if picker is closed
                this.initValue(this.props.meta.value)
            }
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

    makePastColorsHtml = (colors) => {
        return colors.map((color) => {
            return (
                <div
                    className={"color-thumbs"}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                        this.onChange(color, 'value')
                    }}
                ></div>
            )
        })
    }

    onChange = (val, key) => {
        const { meta: { onChange }, globalOnChange } = this.props
        const { value, alphaValue } = this.state
        this.setState({ [key]: val }, () => {
            if (key == 'value') { this.setState({ didEdited: true }) }
            let rgb = convert.hex.rgb(this.state.value)
            let updatedVal = `rgba(${rgb.join(',')}, ${this.state.alphaValue / 100})`
            onchange && onChange(updatedVal)
            globalOnChange && globalOnChange(updatedVal)
        })
    }
    handlePickerChange = (color) => {
        this.setState({ alphaValue: color.rgb.a * 100, rgb: color.rgb }, () => {
            this.onChange(color.hex, 'value')
        })
    }
    calcFinalValue = () => {
        const { alphaValue } = this.state
        let rgb = convert.hex.rgb(this.state.value)
        let updatedVal = `rgba(${rgb.join(',')}, ${((alphaValue === '') ? '100' : parseFloat(alphaValue).toFixed(0)) / 100})`
        return updatedVal
    }
    handleFocus = (event) => event.target.select();
    render() {
        const {
            meta: {
                value: metaVal,
                onChange, //form item specific change
                // rules,
                // multiple,
            },
            globalOnChange, //complete form specific change,
            recentColors,
        } = this.props
        const { value, alphaValue, openPicker } = this.state
        const isInvalid = (e) => {
            let isInvalid = (e.target.min < e.target.value && e.target.value < e.target.max)
            if (isInvalid) {
                e.target.setCustomValidity(`Please Enter a value between ${e.target.min} and ${e.target.max}`)
            } else {
                e.target.setCustomValidity('')
            }
        }
        return (
            <div ref={this.PickerRef} className={'picker-field-container'}>
                <div className={'preview-color'} style={{
                    position: "absolute",
                    left: '5px',
                    zIndex: 0,
                    height: '20px',
                    width: '20x',
                    borderRadius: '6px',
                    backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)'
                }}></div>
                <div className={'preview-color'} onClick={() => { this.setState({ openPicker: !openPicker }) }} style={{ backgroundColor: this.calcFinalValue(value), zIndex: 1 }}></div>
                {
                    openPicker && <div onBlur={() => { }}>
                        <ChromePicker
                            color={this.state.rgb}
                            onChangeComplete={this.handlePickerChange}
                        />
                        {/* render color picker => not possible*/}
                        {/* render color inputs */}
                        <div className="pickerTool-inputs">
                            <Select meta={{
                                options: ['Hex', 'RGB'],
                                value: this.state.pickerInputType,
                                onChange: (val) => { this.setState({ pickerInputType: val }) }
                            }} />
                            {
                                this.state.pickerInputType == 'Hex' && (<div className="hex-input-container">
                                    <input type={'text'}
                                        onFocus={this.handleFocus}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                let value = e.target.value
                                                if (value.length > 7) {
                                                    value = value.splice(0, 8)
                                                }
                                                if (value.length < 7) {
                                                    value = value + '0'.repeat(7 - value.length)
                                                }
                                                this.onChange(value, 'value')
                                            }
                                        }}
                                        onBlur={(e) => {
                                            let value = e.target.value
                                            if (value.length > 7) {
                                                value = value.splice(0, 8)
                                            }
                                            if (value.length < 7) {
                                                value = value + '0'.repeat(7 - value.length)
                                            }
                                            this.onChange(value, 'value')
                                        }}
                                        onChange={(e) => { this.setState({ value: e.target.value }) }}
                                        value={(metaVal && (metaVal == '')) ? '#006CFF' : (value.includes('#')) ? value : `#${value}`}
                                    />
                                    <input type="number"
                                        onFocus={this.handleFocus}
                                        value={_.round(this.state.rgb.a * 100, 0)}
                                        style={{ textAlign: 'end', paddingRight: this.state.unitWidth + 6, borderLeft: '1px solid white' }}
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
                                        onChange={(e) => {
                                            let { rgb } = this.state
                                            rgb.a = e.target.value / 100
                                            this.setState({ rgb })
                                            // this.onChange(e.target.value, 'alphaValue')
                                        }}
                                    />
                                    <div className={'unit-select'} ref={this.unitRef}>
                                        <select type={'select'} value={'%'} >
                                            {
                                                <option value={'%'}> {'%'} </option>
                                            }
                                        </select>
                                    </div>
                                </div>)
                            }
                            {
                                this.state.pickerInputType == 'RGB' && (<div className="rgba-input-container">
                                    <input type="number" min={0} max={255} value={this.state.rgb.r} onChange={(e) => {
                                        if (!(e.target.min < e.target.value && e.target.value < e.target.max)) { return }
                                        let { rgb } = this.state
                                        rgb.r = e.target.value
                                        let value = [rgb.r, rgb.g, rgb.b]
                                        value = convert.rgb.hex(value)
                                        this.onChange(value, 'value')
                                        // this.setState({ rgb })
                                    }} />
                                    <input type="number" min={0} max={255} value={this.state.rgb.g} onChange={(e) => {
                                        if (!(e.target.min < e.target.value && e.target.value < e.target.max)) { return }
                                        let { rgb } = this.state
                                        rgb.g = e.target.value
                                        let value = [rgb.r, rgb.g, rgb.b]
                                        value = convert.rgb.hex(value)
                                        this.onChange(value, 'value')
                                        // this.setState({ rgb })
                                    }} />
                                    <input type="number" min={0} max={255} value={this.state.rgb.b} onChange={(e) => {
                                        if (!(e.target.min < e.target.value && e.target.value < e.target.max)) { return }
                                        let { rgb } = this.state
                                        rgb.b = e.target.value
                                        let value = [rgb.r, rgb.g, rgb.b]
                                        value = convert.rgb.hex(value)
                                        this.onChange(value, 'value')
                                        // this.setState({ rgb })
                                    }} />
                                    {/* <input type="number" min={0} max={1} value={this.state.rgb.a} onChange={(e) => {
                                        if (!(e.target.min < e.target.value && e.target.value < e.target.max)) { return }
                                        let value = e.target.value
                                        if (`${e.target.value}` == '' || `${e.target.value}` == '0.') {
                                            value = 0
                                        }
                                        // let { rgb } = this.state
                                        // rgb.a = e.target.value
                                        this.onChange(value * 100, 'alphaValue')
                                        // this.setState({ rgb })
                                    }} /> */}
                                </div>)
                            }
                        </div>
                        <div className={'recent-colors-container'}>
                            {/* render recent colors */}
                            <div className="divider"></div>
                            <div className={'recent-colors-title'}>Recent Colors</div>
                            <div className={'colors-pallet'}>
                                {
                                    this.makePastColorsHtml(this.props.recentColors)
                                }
                            </div>
                        </div>
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
                        this.onChange(e.target.value, 'value')
                    }}
                    onChange={(e) => { this.setState({ value: e.target.value }) }}
                    value={(metaVal && (metaVal == '')) ? '#006CFF' : value}

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
                    onChange={(e) => {
                        let value = e.target.value
                        if (e.target.value == '') {
                            value = 0
                        }
                        this.setState({ alphaValue: value })
                    }}
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

const mapStateToProps = ({ global, layout, templates, editor, editorHistory }) => {
    return {
        recentColors: global.recentColors
    }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickerField)
