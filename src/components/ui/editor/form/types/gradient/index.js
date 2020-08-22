import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import convert from 'color-convert'
import Icons from '../../../../../../assets/Icons'
import Integer from "../integer";

class Gradient extends React.Component {
    constructor(props) {
        super(props);
        this.gradRef = React.createRef()
    }
    state = {
        value: 'linear-gradient(90deg, rgba(2,0,36,1) 6%, rgba(1,87,126,1) 14%, rgba(1,56,94,1) 45%, rgba(0,141,182,1) 75%, rgba(0,212,255,1) 100%)',
        dragging: false,
        nodes: [{ left: 0 }, { left: 150 }],
        selectedNodeKey: -1,
        nodeWidth: 10,
        nodeBorderWidth: 1.5

    }
    componentDidMount() {
        this.initValue(this.props.meta.value)
        window.addEventListener('mousedown', this.onMouseDown)
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.dragging && !prevState.dragging) {
            document.addEventListener('mousemove', this.onMouseMove)
            document.addEventListener('mouseup', this.onMouseUp)
        } else if (!this.state.dragging && prevState.dragging) {
            document.removeEventListener('mousemove', this.onMouseMove)
            document.removeEventListener('mouseup', this.onMouseUp)
        }
        if ((prevProps.meta.value != this.props.meta.value)) {
            this.initValue(this.props.meta.value)
        }
    }
    getMouseRelPos = (event) => {
        let mouseX = event.pageX
        let trackCoords = this.getCoords(document.querySelector('.grad-track'))
        // return ((mouseX - trackCoords.left) / trackCoords.width) * 100
        return mouseX - trackCoords.left
    }
    getCoords = (elem) => { // crossbrowser version
        var box = elem.getBoundingClientRect();

        var body = document.body;
        var docEl = document.documentElement;

        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;

        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;

        return { top: top, left: left, width: elem.offsetWidth, height: elem.offsetHeight, right: left + elem.offsetWidth };
    }

    onMouseDown = (event) => {
        let { nodes, nodeWidth, nodeBorderWidth } = this.state
        if (this.gradRef.current && this.gradRef.current.contains(event.target)) {
            this.setState({ dragging: true })
            // find mouse position percent
            let mouseRelPos = this.getMouseRelPos(event)

            if (event.target.className.includes('grad-track')) {
                nodes.push({ left: mouseRelPos - ((nodeWidth / 2) + nodeBorderWidth) })
                this.setState({ nodes, selectedNodeKey: nodes.length }, () => {
                })
            } else if (event.target.className.includes('grad-node')) {
                this.setState({ selectedNodeKey: event.target.className.replace('grad-node-', '') }, () => {
                })
            }
        }
        event.stopPropagation()
        event.preventDefault()
    }
    onMouseUp = (e) => {
        this.setState({ dragging: false })
        e.stopPropagation()
        e.preventDefault()
    }
    onMouseMove = (e) => {
        if (!this.state.dragging) return
        let { nodes, selectedNodeKey, nodeWidth, nodeBorderWidth } = this.state
        if (nodes[selectedNodeKey]) {
            let mouseRelPos = this.getMouseRelPos(e)
            let trackCoords = this.getCoords(document.querySelector('.grad-track'))
            let position = mouseRelPos - ((nodeWidth / 2) + nodeBorderWidth)
            if (0 > position) {
                position = 0
            }
            if (position > (trackCoords.width - 10)) {
                position = trackCoords.width - 10
            }
            nodes[selectedNodeKey].left = position
            this.setState({ nodes }, () => {
            })
        }
        e.stopPropagation()
        e.preventDefault()
    }
    initValue = (value) => {
        value = 'linear-gradient(90deg, rgba(2,0,36,1) 6%, rgba(1,87,126,1) 14%, rgba(1,56,94,1), rgba(0,141,182,1) 75%, rgba(0,212,255,1) 100%)'

        const evaluateDirection = (dirStr) => {
            const switchFunc = (comp) => {
                switch (comp) {
                    case 'top':
                        return 0
                    case 'bottom':
                        return 180
                    case 'left':
                        return 270
                    case 'right':
                        return 90
                }
            }
            dirStr = dirStr.split(' ')
            if (dirStr.length == 1) {
                return parseInt(dirStr[0])
            } else if (dirStr.length == 2) {
                return switchFunc(_.lowerCase(dirStr[1]))
            } else if (dirStr.length == 3) {
                let firstAngle = switchFunc(_.lowerCase(dirStr[1]))
                let secondAngle = switchFunc(_.lowerCase(dirStr[2]))
                return 180 - Math.abs(secondAngle - firstAngle)
            }
        }
        if (!value.includes('gradient')) {
            return
        }
        let type = 'linear'
        let direction = 0
        if (value.includes('radial')) {
            type = 'radial'
        }
        value = value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'))
        value = value.split(/,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/)
        if (value[0].includes('to') || value[0].includes('deg')) {
            direction = evaluateDirection(value[0])
            value.shift()
        }
        let nodes = value.map((val, key) => {
            val = val.trim().split(/\ \s?(?![^\(]*\))/)
            if (val.length == 1) {
                // no position
                return {
                    color: val[0]
                }
            }
            return {
                color: val[0],
                left: parseFloat(val[1])
            }
        })
        const getClosestWithLeft = (nodes, currentKey, direction) => {
            if (nodes[currentKey] && nodes[currentKey].left) {
                return {node: nodes[currentKey], key: currentKey}
            }
            currentKey = currentKey + direction
            return getClosestWithLeft(nodes, currentKey, direction)
        }
        nodes.forEach((item, key) => {
            if (!item.left) {
                if (key == 0) {
                    item.left = 0
                } else if (key == nodes.length - 1) {
                    item.left = 100
                } else {
                    let lowerLimit = getClosestWithLeft(nodes, key, -1)
                    let upperLimit = getClosestWithLeft(nodes, key, 1)
                    item.left = (lowerLimit.node.left + (upperLimit.node.left - lowerLimit.node.left)/(upperLimit.key - lowerLimit.key))
                }
            }
        })
        this.setState({ value })
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
        const { value, nodes, nodeWidth, nodeBorderWidth } = this.state
        return (
            <div>
                Gradient
                <div className={'nodes-container'} ref={this.gradRef} style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
                    <div className={'grad-track'} style={{ border: '1px solid white', width: '100%', height: '20px', marginTop: '0.5px', marginBottom: '1.5px', backgroundImage: value }}>
                    </div>

                    {/* <div className={'grad-node'} style={{ border: `${nodeBorderWidth}px solid white`, borderRadius: '20%', width: `${nodeWidth}px`, height: '100%', position: 'absolute', top: 0, left: 0 }}>

                    </div>
                    <div className={'grad-node'} style={{ border: `${nodeBorderWidth}px solid white`, borderRadius: '20%', width: `${nodeWidth}px`, height: '100%', position: 'absolute', top: 0, right: 0 }}>

                    </div> */}
                    {
                        nodes.map((item, key) => {
                            return <div className={'grad-node-' + key} style={{ border: `${nodeBorderWidth}px solid white`, borderRadius: '20%', width: `${nodeWidth}px`, height: '100%', position: 'absolute', top: 0, left: item.left + 'px' }}>

                            </div>
                        })
                    }
                </div>
                {JSON.stringify(value)}
            </div>
        )
    }
}


export default Gradient