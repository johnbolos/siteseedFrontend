import React from "react"
import _ from 'lodash'
import $ from 'jquery'

import Icons from '../../../../../../assets/Icons'
import Integer from "../integer";

class Composite extends React.Component {
    constructor(props) {
        super(props);
        this.sliderRef = React.createRef()
    }
    state = {
        valArr: []
    }
    componentDidMount() {
        // this.initValue(this.props.meta.value)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.meta.value != this.props.meta.value) {
            // this.initValue(this.props.meta.value)
        }
    }
    initValue = (value) => {
        // const { meta } = this.props
        // const { defaultUnit } = meta
    }
    onChange = (val, key, action = '') => {
        console.log('onChange running')
        const { meta, globalOnChange } = this.props
        let { value, children, times } = meta
        let array = []

        value = value.split(/,(?![^(]*\))/) // convertign to property array
        if (children) {
            for (let i = 0; i < times; i++) {
                if (value[i] == undefined) {
                    value[i] = 'none'
                } else if (value[i].trim() == '') {
                    continue;
                }
                array.push(value[i])
            }
        }

        array[key] = val

        if (action == 'delete') {
            // delete element at key index
            array.splice(key, 1)
        }
        let resp = ''
        _.each(array, (data) => {
            if (data) {
                if (data == 'none') {
                    resp += '0px 0px 0px 0px #000000' + ','
                } else {
                    resp += data + ','
                }
            }
        })
        resp = resp.substring(0, resp.length - 1)
        console.log(resp, 'onchangeeeee')
        globalOnChange && globalOnChange(resp)
    }
    render() {
        let {
            meta: {
                value,
                children,
                times,
                onChange, //form item specific change
                // rules,
                // multiple,
            },
            globalOnChange //complete form specific change
        } = this.props
        const { valArr } = this.state
        let childrens = []
        console.log(this.props.meta, children, 'ggggggggggggggggg')
        if (value) {
            value = value.split(/,(?![^(]*\))/) // convertign to property array
            console.log(value, times, 'assasassasasasasas')
            if (children) {
                for (let i = 0; i < times; i++) {
                    if (value[i] == undefined) {
                        value[i] = 'none'
                    } else if (value[i].trim() == '') {
                        continue;
                    }
                    console.log(value, 'assasassasasasasass')
                    childrens.push(<div className={'composite-elements'}>
                        {children(value[i] != 'none' ? value[i] : null, i, this.onChange)}
                    </div>)
                }
            }
        }
        return (
            <div className={childrens.length == 0 ? 'composite-container-hidden' : 'composite-container'}>
                {childrens}
            </div>
        )
    }
}


export default Composite