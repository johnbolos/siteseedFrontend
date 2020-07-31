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
        this.props.getFormData(this.getFormData.bind(this))
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
    onChange = (item) => {  //item = { key: '', value: '' }
        const { globalOnChange } = this.props
        let { formData } = this.state
        formData[item.key] = item.value
        this.setState({ formData }, () => {
            globalOnChange && globalOnChange(item, formData)
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
                        return <FormItem meta={item} key={key} globalOnChange={this.onChange} onUmmount={this.unMount} />
                    })
                }
            </div>
        )
    }
}

export default CreateForm