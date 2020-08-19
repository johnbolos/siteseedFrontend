import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import convert from 'color-convert'
import Icons from '../../../../../../assets/Icons'
import Integer from "../integer";

class Gradient extends React.Component {
    constructor(props) {
        super(props);
        this.PickerRef = React.createRef()
    }
    state = {
        value: '',
    }
    componentDidMount() {
        this.initValue(this.props.meta.value)
    }
    componentDidUpdate(prevProps) {
        if ((prevProps.meta.value != this.props.meta.value)) {
            this.initValue(this.props.meta.value)
        }
    }
    initValue = (value) => {
        
    }
    onChange = (val, key) => {
        
    }
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
        const { value } = this.state
        return (
            <div>
                Gradient
                {value}
            </div>
        )
    }
}


export default Gradient