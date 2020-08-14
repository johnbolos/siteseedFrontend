import React from "react"

import "./styles.scss";
import FormItem from './formItem'

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        formData: {}
    }
    componentDidMount() {
        this.props.getFormData && this.props.getFormData(this.getFormData.bind(this))
    }
    getFormData = () => {
        return this.state.formData
    }
    componentDidUpdate(prevProps) {
        // console.log('selected chane createForm did')
    }
    unMount = (key) => {
        let { formData } = this.state
        delete formData[key]
        this.setState({ formData })
    }
    onChange = (item, option) => {  //item = { key: '', value: '' }
        const { globalOnChange } = this.props
        let { formData } = this.state
        formData[item.key] = item.value
        this.setState({ formData }, () => {
            globalOnChange && globalOnChange(item, formData, option)
        })

    }
    render() {
        const {
            fields,
            globalOnChange,
            className
        } = this.props
        const { } = this.state
        return (
            <div className={className || 'form-container'}>
                {
                    fields.map((item, key) => {
                        if (item.hidden) {
                            return null
                        }
                        if (item.type == 'divider') {
                            return <div style={{ width: '100%', height: '0px', borderBottom: '1px solid #444444', marginTop: '14px', marginBottom: '16px' }}></div>
                        }
                        return <FormItem meta={item} key={key} globalOnChange={this.onChange} onUmmount={this.unMount} />
                    })
                }
            </div>
        )
    }
}

export default CreateForm