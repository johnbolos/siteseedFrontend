import React from "react"
import _ from 'lodash'
import $ from 'jquery'

import Icons from '../../../../../../assets/Icons'
import Integer from "../integer";
import './slidebar.scss'

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
        const { meta: { min = 0, max = 100, pointerCenter } } = this.props
        let total = max - min
        let length = value - min
        let percent = (length / total) * 100
        if (pointerCenter) {
            if (percent <= 50) {
                this.sliderRef.current.style.background = `linear-gradient(to right, #272727 ${percent}%, #006CFF 1%, #006CFF 50%, #272727 1%)`
                return
            }
            this.sliderRef.current.style.background = `linear-gradient(to right, #272727 50%, #006CFF 1%, #006CFF ${percent}%, #272727 1%)`
            return
        }
        this.sliderRef.current.style.background = `linear-gradient(to right, #006CFF ${percent}%, #272727 1%, #272727)`

        // $('.slider').css('background', `linear-gradient(to right, #006CFF ${percent}%, #272727 1%, #272727)`)
    }
    render() {
        const {
            meta: {
                // value,
                defaultUnit,
                integerEdit,
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
                <input type="range" ref={this.sliderRef} className={'slider'} min={min ? `${min}` : "0"} max={max ? `${max}` : "100"} value={value} onChange={(e) => { this.onChange(e.target.value) }} />
                <div className={'value'}>
                    {
                        integerEdit && <Integer meta={{ defaultUnit: defaultUnit, value: `${value}`, onChange: (value) => { this.onChange(value) } }} />
                    }
                    {
                        !integerEdit && <div>{value + ' ' + unitValue}</div>
                    }
                </div>

            </div>
        )
    }
}


export default Slider