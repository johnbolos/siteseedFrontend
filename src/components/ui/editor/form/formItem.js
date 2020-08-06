import React from "react"

import RadioBtn from './types/radioBtn'
import Select from './types/select'
import Integer from './types/integer'

class FormItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }
    state = {
        type: null,
        label: null
    }
    componentDidMount() {
        const { meta } = this.props
        const { label } = meta

        if (typeof (label) === 'function') {
            this.setState({ label: label() })
        } else {
            this.setState({ label: label })
        }
        switch (meta.type) {
            case 'radioBtn':
                this.setState({ type: <RadioBtn meta={meta} globalOnChange={this.onChange} /> })
                break;
            case 'select':
                this.setState({ type: <Select meta={meta} globalOnChange={this.onChange} /> })
                break;
            case 'integer':
                this.setState({ type: <Integer meta={meta} globalOnChange={this.onChange} /> })
                break;
            case 'password':
                this.setState({ type: null })
                break;
            default:
                this.setState({ type: null })
        }
    }
    componentDidUpdate(prevProps) {
        const { meta } = this.props
        if (prevProps.meta != this.props.meta) {
            switch (meta.type) {
                case 'radioBtn':
                    this.setState({ type: <RadioBtn meta={meta} globalOnChange={this.onChange} /> })
                    break;
                case 'select':
                    this.setState({ type: <Select meta={meta} globalOnChange={this.onChange} /> })
                    break;
                case 'integer':
                    this.setState({ type: <Integer meta={meta} globalOnChange={this.onChange} /> })
                    break;
                case 'password':
                    this.setState({ type: null })
                    break;
                default:
                    this.setState({ type: null })
            }
        }
    }
    componentWillUnmount() {
        // this.props.onUmmount(this.props.meta.key)
    }
    onChange = (value, option = null) => {
        const { meta, globalOnChange } = this.props
        // console.log('globalOnChange called in formItem')
        globalOnChange({ key: meta.key, value }, option)
    }
    render() {
        const {
            meta,
            // key, //added to prevent map error
            onUmmount,
            globalOnChange, //complete form specific change
        } = this.props
        const { type, label } = this.state
        return (
            <div
                className={`${'container-class ' + (meta.containerClass ? meta.containerClass : '')}`}
                style={
                    meta.containerStyle
                        || meta.inline ?
                        { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: meta.width ? meta.width : 'auto' }
                        :
                        { width: meta.width ? meta.width : 'auto' }
                }
            >
                {
                    meta.label &&
                    <div className={`${'label-class ' + (meta.labelClass ? meta.labelClass : '')}`} style={meta.labelStyle || {}}>
                        {label}
                    </div>
                }
                {
                    meta.render ? (
                        meta.render(meta.value, this.onChange)
                    ) : (
                            <div
                                className={`${'field-class ' + (meta.fieldClass ? meta.fieldClass : '')}`}
                                style={meta.fieldStyle || meta.inline ? { width: '50%' } : {}}>
                                {type}
                            </div>
                        )
                }
            </div>
        )
    }
}


export default FormItem