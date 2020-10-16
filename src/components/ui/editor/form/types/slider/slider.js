import React from "react"
import _ from 'lodash'
import $ from 'jquery'

import Icons from '../../../../../../assets/Icons'
import Integer from "../integer";
import './slidebar.scss'
import { connect } from "react-redux";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.sliderRef = React.createRef()
    }
    state = {
        value: '',
        unitValue: ''
    }
    componentDidMount() {
        this.initValue(this.props.meta.value)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.meta.value != this.props.meta.value) {
            this.changeSidebarStyles(this.props.meta.value)
            this.initValue(this.props.meta.value)
        }
        if (prevProps.theme != this.props.theme) {
            // fetch background prperty and update it
            let themeElem = document.getElementsByClassName(`slider-container`)
            if (!themeElem || themeElem.length == 0) {
                return
            }
            _.each(themeElem, (element) => {
                let bgVal = getComputedStyle(element.children[0])['background']
                let backgroundColor = '#5e5e5e'
                if (this.props.theme == 'light') {
                    backgroundColor = '#f6f6f6'
                }
                if (this.props.theme == 'dark') {
                    bgVal = bgVal.replaceAll('rgb(246, 246, 246)', backgroundColor)
                } else {
                    bgVal = bgVal.replaceAll('rgb(94, 94, 94)', backgroundColor)
                }
                element.children[0].style.background = bgVal
            })
        }
    }
    initValue = (value) => {
        const { meta } = this.props
        const { defaultUnit } = meta
        //unit
        if (defaultUnit || defaultUnit == '') {
            this.setState({ unitValue: defaultUnit })
        }
        if (meta.unit) {
            let val = _.find(meta.unit, (val) => value.includes(val))
            this.setState({ unitValue: val })
        }
        if (typeof (value) == 'string') {
            let unit = meta.unit || []
            defaultUnit && unit.push(defaultUnit)
            let regex = new RegExp(`${unit.join("|")}`)
            value = value.replace(regex, '')
        }
        this.changeSidebarStyles(value)
        this.setState({ value })
    }
    onChange = (value) => {
        const { meta, globalOnChange } = this.props
        const { unitValue } = this.state
        const { onChange, defaultUnit } = meta
        let unit = meta.unit || []
        defaultUnit && unit.push(defaultUnit)
        let regex = new RegExp(`${unit.join("|")}`)
        value = value.replace(regex, '')
        this.setState({ value: value }, () => {
            this.changeSidebarStyles(value)
            onChange && onChange(`${this.state.value}${this.state.unitValue}`)
            globalOnChange && globalOnChange(`${this.state.value}${this.state.unitValue}`)
        })
    }
    changeSidebarStyles = (value) => {
        const { meta: { min = 0, max = 100, pointerCenter }, theme } = this.props
        let total = max - min
        let length = value - min
        let percent = (length / total) * 100
        let backgroundColor = '#272727'
        if (theme == 'light') {
            backgroundColor = '#f6f6f6'
        }
        if (pointerCenter) {
            if (percent <= 50) {
                this.sliderRef.current.style.background = `linear-gradient(to right, ${backgroundColor} ${percent}%, #006CFF 1%, #006CFF 50%, ${backgroundColor} 1%)`
                return
            }
            this.sliderRef.current.style.background = `linear-gradient(to right, ${backgroundColor} 50%, #006CFF 1%, #006CFF ${percent}%, ${backgroundColor} 1%)`
            return
        }
        this.sliderRef.current.style.background = `linear-gradient(to right, #006CFF ${percent}%, ${backgroundColor} 1%, ${backgroundColor})`

        // $('.slider').css('background', `linear-gradient(to right, #006CFF ${percent}%, ${backgroundColor} 1%, ${backgroundColor})`)
    }
    render() {
        const {
            meta: {
                // value,
                defaultUnit,
                integerEdit,
                showDegSign,
                min,
                max,
                unit,   //optional
                step,   //optional
                onChange, //form item specific change
                // rules,
                // multiple,
            },
            globalOnChange //complete form specific change
        } = this.props
        const { value, unitValue } = this.state
        return (
            <div className={'slider-container'}>
                <div className={'slider-center-divider'}></div>
                <input type="range" ref={this.sliderRef} className={'slider'} min={min ? `${min}` : "0"} max={max ? `${max}` : "100"} value={value} onChange={(e) => { this.onChange(e.target.value) }} />
                <div className={'value'}>
                    {
                        integerEdit && <Integer meta={{ defaultUnit: defaultUnit, value: `${value}`, onChange: (value) => { this.onChange(value) } }} />
                    }
                    {
                        !integerEdit && <div>{value + ' ' + `${showDegSign ? (unitValue == 'deg' ? '°' : unitValue) : unitValue }`}</div>
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({
    layout,
}) => {
    return {
        theme: layout.theme,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);