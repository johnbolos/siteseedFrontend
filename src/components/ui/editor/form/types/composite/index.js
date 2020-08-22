
import React from "react"
import _, { isArray } from 'lodash'
import $ from 'jquery'

import Icons from '../../../../../../assets/Icons'
import Integer from "../integer";

class Composite extends React.Component {
    constructor(props) {
        super(props);
        this.sliderRef = React.createRef()
    }
    state = {
        valArr: [],
        value: this.props.meta.value
    }
    componentDidMount() {
        // this.initValue(this.props.meta.value)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.meta.value != this.props.meta.value) {
            this.initValue(this.props.meta.value)
        }
    }
    initValue = (value) => {
        this.setState({ value: value })
    }
    onChange = (val, key, action = '') => {
        const { meta, globalOnChange } = this.props
        let { children, times } = meta
        let { value, valArr } = this.state
        let array = valArr

        // value = value.split(/,(?![^(]*\))/) // convertign to property array
        // if (children) {
        //     for (let i = 0; i < times; i++) {
        //         if (value[i] == undefined) {
        //             value[i] = 'none'
        //         } else if (value[i].trim() == '') {
        //             continue;
        //         }
        //         array.push(value[i])
        //     }
        // }



        array[key] = val

        if (action == 'delete' && val != 'none') {
            // delete element at key index
            array.splice(key, 1)
        }
        this.setState({valArr: array})
        console.log(array, key, 'composite onchnge')
        let resp = ''
        _.each(array, (data) => {
            if (data) {
                if (data == 'none') {
                    if (action == 'delete' && val != 'none') {
                        resp += '0px 0px 0px 0px #000000' + ','
                    } else {
                        resp += 'none,'
                    }
                } else {
                    resp += data + ','
                }
            }
        })
        resp = resp.substring(0, resp.length - 1)
        globalOnChange && globalOnChange(resp)
    }
    render() {
        let {
            meta: {
                // value,
                children,
                times,
                onChange, //form item specific change
                // rules,
                // multiple,
            },
            globalOnChange //complete form specific change
        } = this.props
        let { valArr, value } = this.state
        let childrens = []
        if (value && typeof (value) == 'string') {
            value = value.split(/,(?![^(]*\))/) // convertign to property array
            if (children) {
                for (let i = 0; i < times; i++) {
                    if (value[i] == undefined) {
                        value[i] = 'none'
                    } else if (value[i].trim() == '') {
                        continue;
                    }
                    childrens.push(<div className={'composite-elements'}>
                        {children(value[i] != 'none' ? value[i] : null, i, this.onChange)}
                    </div>)
                }
            }
        } else if (value && isArray(value)) {
            if (children) {
                for (let i = 0; i < times; i++) {
                    childrens.push(<div className={'composite-elements'}>
                        {children(value[i], i, onChange || this.onChange)}
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
