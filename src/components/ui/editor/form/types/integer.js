import React from "react"
import _ from 'lodash'

import Icons from '../../../../../assets/Icons'

class Select extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        value: '',
    }
    componentDidMount() {
        this.initValue()
    }
    initValue = () => {
        let { meta: { value, unit } } = this.props
        let defaultUnit = ''
        if (!unit || unit.length == 0 || value == '' || value == null) {
            this.setState({ value: isNaN(parseInt(this.props.meta.value)) ? '' : parseInt(this.props.meta.value) })
            return
        }
        unit.forEach((item) => {
            if (value.includes(item)) {
                defaultUnit = item
            }
        })
        this.setState({ value: value.replace(defaultUnit, '') })
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
    showLabel = (value) => {
        const { meta: { options } } = this.props
        const match = _.find(options, (item) => {
            return item == value || item.value == value
        })
        if (match) {
            if (typeof (match.label) == 'function') {
                return match.label()
            }
            return match.label
        }
        return value
    }
    onChange = (e) => {
        const { meta: { onChange }, globalOnChange } = this.props
        this.setState({ value: e.target.value }, () => {
            onChange && onChange(this.state.value)
            globalOnChange(this.state.value)
        })
    }
    render() {
        const {
            meta: {
                // value,
                defaultUnit,
                unit,
                step,
                onChange, //form item specific change
                // rules,
                // multiple,
            },
            globalOnChange //complete form specific change
        } = this.props
        const { value, unitValue } = this.state
        return (
            <div className={'integer-container'}>
                <input type="number" name="int" value={value} placeholder={(value == '') ? 'auto' : (isNaN(value) ? value : '')} onChange={this.onChange} />
                {
                    unit &&
                    <div className={'unit-select'}>
                        <select type={'select'} value={unitValue} onChange={(e) => { console.log(e.target.value, 'sselect') }} >
                            {
                                unit.map(val => (
                                    <option value={val}> {val} </option>
                                ))
                            }
                        </select>
                    </div>
                }
                <div className={'step'}>
                    <Icons.Up className={'set-down'} style={{ width: '6.75px', height: '3.38px', marginBottom: '5.28px' }} onClick={() => { this.setState({ value: value + (step || 1) }) }} />
                    <Icons.Dropdown className={'set-up'} style={{ width: '6.75px', height: '3.38px' }} onClick={() => { this.setState({ value: value - (step || 1) }) }} />
                </div>
            </div>
        )
    }
}


export default Select