
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
        valArr: this.props.meta.value && isArray(this.props.meta.value) ? this.props.meta.value : [],
        value: this.props.meta.value,
        defaults: {
            image: {
                position: '50% 50%',
                size: 'cover',
                attachment: 'scroll',
                repeat: 'no-repeat',
                blendMode: 'normal'
            },
            gradient: {
                position: '50% 50%',
                size: 'cover',
                attachment: 'scroll',
                repeat: 'no-repeat',
            }
        }
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
        if (value && isArray(value)) {
            this.setState({ valArr: value })
        }
        this.setState({ value: value })
    }
    onChange = (val, key, action = '') => {
        const { meta, globalOnChange, onChange } = this.props
        let { children, times } = meta
        let { value, valArr } = this.state
        let array = valArr

        if (action === 'setArray') {
            array[key] = val
            this.setState({ valArr: array })
            return
        }
        array[key] = val

        if (action == 'delete' && val != 'none') {
            // delete element at key index
            array.splice(key, 1)
        }
        this.setState({ valArr: array })
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
    onBackgroundChange = (val, key, action = '') => {
        const { onChange } = this.props.meta
        let { valArr } = this.state

        if (['background', 'backgroundRemove'].includes(action)) {
            let item = val
            // if background => evaluate which value to change and update
            if (action === 'background') {
                // if item.key
                switch (item.key) {
                    // == color => update
                    case 'color':
                        valArr[key].color = item.value
                        valArr[key].type = 'color'
                        break
                    // == image => update, multi update
                    case 'image':
                        valArr[key].image = item.value
                        if (item.switcher) {
                            valArr[key] = {
                                ...valArr[key],
                                ...this.state.defaults.image,
                            }
                        }
                        valArr[key].type = 'image'
                        break
                    case 'repeat':
                        valArr[key].repeat = item.value
                        valArr[key].type = 'image'
                        break
                    case 'position':
                        valArr[key].position = item.value
                        valArr[key].type = 'image'
                        break
                    case 'attachment':
                        valArr[key].attachment = item.value
                        valArr[key].type = 'image'
                        break
                    case 'size':
                        valArr[key].size = item.value
                        valArr[key].type = 'image'
                        break
                    // == gradient => update, multi update
                    case 'gradient':
                        valArr[key].image = item.value
                        valArr[key] = {
                            ...valArr[key],
                            ...this.state.defaults.gradient,
                        }
                        if (item.switcher) {
                            valArr[key].blendMode = 'normal'
                        }
                        valArr[key].type = 'gradient'
                        break
                    case 'blendMode':
                        valArr[key].blendMode = item.value
                        valArr[key].type = 'gradient'
                        break
                    default:
                        break
                }
                this.setState({ valArr: valArr })
                onChange && onChange(valArr)
            }
            if (action === 'backgroundRemove') {
                valArr = valArr.filter((value, index) => index != key)
                this.setState({ valArr, value: valArr }, () => {
                    onChange && onChange(valArr)
                })
            }
            // if backgroundRemove => remove this key and update
            return
        }
    }
    render() {
        let {
            meta: {
                children,
                times,
                onChange, //form item specific change
                hiddenField,
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
                        <div style={{ width: '240px', height: '0px', borderBottom: '1px solid #444444', marginTop: '4px', marginBottom: '10px', marginRight: '-20px', marginLeft: '-20px' }}></div>
                        {children(value[i] != 'none' ? value[i] : null, i, this.onChange)}
                    </div>)
                }
            }
        } else if (value && isArray(value)) {
            if (children) {
                for (let i = 0; i < times; i++) {
                    childrens.push(<div className={'composite-elements'}>
                        <div style={{ width: '240px', height: '0px', borderBottom: '1px solid #444444', marginTop: '4px', marginBottom: '10px', marginRight: '-20px', marginLeft: '-20px' }}></div>
                        {children(value[i], i, this.onBackgroundChange)}
                    </div>)
                }
            }
        }
        return (
            <div className={childrens.length == 0 ? 'composite-container-hidden' : 'composite-container'}>
                {
                    hiddenField || <>

                        {childrens}
                    </>
                }
            </div>
        )
    }
}


export default Composite
