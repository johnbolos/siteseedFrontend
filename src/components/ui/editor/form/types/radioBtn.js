import React from "react"

class RadioBtn extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        value: this.props.meta.value,
        height: 'auto'
    }
    componentDidMount() {
        this.setState({ height: `${document.querySelector('.radio-btn-container').clientHeight - 2}px` })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.meta.value != this.props.meta.value) {
            this.setState({ value: this.props.meta.value })
        }
    }
    handleClick = (item) => {
        const { meta: { onChange }, globalOnChange } = this.props
        if (typeof (item) === 'string') {
            this.setState({ value: item }, () => {
                onChange && onChange(item)
                globalOnChange(item)
            })
            return
        }
        this.setState({ value: item.value }, () => {
            onChange && onChange(item.value)
            globalOnChange(item.value)
        })
    }
    render() {
        const {
            meta: {
                // value,
                options,
                onChange, //form item specific change
                // rules,
                // multiple,
            },
            globalOnChange //complete form specific change
        } = this.props
        const { value, height } = this.state
        return (
            <div className={'radio-btn-container'}>
                {
                    options.map((item, index) => {
                        if (typeof (item) === 'string') {
                            return <div
                                className={value == item ? 'btn-active' : 'btn'}
                                style={value == item.value ? { borderRadius: `${index == 0 ? '4px 0px 0px 4px' : (index == options.length - 1 ? '0px 4px 4px 0px' : '0px')}` } : {}}
                                onClick={() => { this.handleClick(item) }}
                            >
                                {item}
                            </div>
                        }
                        if (typeof (item.label) === 'function') {
                            return <div
                                className={value == item.value ? 'btn-active' : 'btn'}
                                style={value == item.value ? { borderRadius: `${index == 0 ? '4px 0px 0px 4px' : (index == options.length - 1 ? '0px 4px 4px 0px' : '0px')}` } : {}}
                                onClick={() => { this.handleClick(item) }}
                            >
                                {item.label()}
                            </div>
                        }
                        return <div
                            className={value == item.value ? 'btn-active' : 'btn'}
                            style={value == item.value ? { borderRadius: `${index == 0 ? '4px 0px 0px 4px' : (index == options.length - 1 ? '0px 4px 4px 0px' : '0px')}`, height: '28px' } : { height: '28px' }}
                            onClick={() => { this.handleClick(item) }}
                        >
                            {item.label}
                        </div>
                    })
                }
            </div>
        )
    }
}


export default RadioBtn