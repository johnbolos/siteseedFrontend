import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import convert from 'color-convert'
import Icons from '../../../../../../assets/Icons'
import Integer from "../integer";
import { Debounce } from "lodash-decorators/debounce";
import CreateForm from "../../index"

class Gradient extends React.Component {
    constructor(props) {
        super(props);
        this.gradRef = React.createRef()
    }
    state = {
        value: 'linear-gradient(90deg, rgba(2,0,36,1) 6%, rgba(1,87,126,1) 94%)',
        dragging: false,
        nodes: [{ color: 'rgba(2,0,36,1)', left: 6, key: 0 }, { color: 'rgba(1,87,126,1)', left: 94, key: 1 }],
        selectedNodeKey: -1,
        currentPickerNode: 0,
        nodeWidth: 6,
        nodeBorderWidth: 1,
        direction: 0,
        position: 0,
        type: 'linear',
        nodesStr: 'rgba(2,0,36,1) 6%, rgba(1,87,126,1) 94%',
    }
    componentDidMount() {
        this.initValue(this.props.meta.value || this.state.value)
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
        if (this.props.meta.value && (prevState.value != this.props.meta.value) && (prevProps.meta.value != this.props.meta.value)) {
            console.log(this.props.meta.value, 'did update')
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
                let trackCoords = this.getCoords(document.querySelector('.grad-track'))
                let newNode = {
                    left: ((mouseRelPos - ((nodeWidth / 2) + nodeBorderWidth)) / trackCoords.width) * 100,
                    key: nodes.length,
                    color: nodes[nodes.length - 1].color
                }
                nodes.push(newNode)
                nodes = _.sortBy(nodes, (o) => o.left)
                let nodesStr = nodes.map(item => `${item.color} ${item.left}%`)
                nodesStr = nodesStr.join(', ')
                this.setState({ nodes, nodesStr, selectedNodeKey: newNode.key, currentPickerNode: newNode.key }, () => {
                })
            } else if (event.target.className.includes('grad-node')) {
                this.setState({ selectedNodeKey: event.target.className.replace('grad-node-', ''), currentPickerNode: event.target.className.replace('grad-node-', '') }, () => {
                })
            }
        }
        // event.stopPropagation()
        // event.preventDefault()
    }
    onMouseUp = (e) => {
        const { nodes } = this.state
        let resp = nodes.map(item => `${item.color} ${item.left}%`)
        resp = resp.join(', ')
        this.onChange(resp, 'nodesStr')
        this.setState({ dragging: false, selectedNodeKey: -1 })
        // e.stopPropagation()
        // e.preventDefault()
    }
    onMouseMove = (e) => {
        if (!this.state.dragging) return
        let { nodes, selectedNodeKey, nodeWidth, nodeBorderWidth } = this.state
        let currentNodeKey = _.findIndex(nodes, (item) => item.key == selectedNodeKey)
        if (nodes[currentNodeKey]) {
            let mouseRelPos = this.getMouseRelPos(e)
            let trackCoords = this.getCoords(document.querySelector('.grad-track'))
            let position = mouseRelPos - ((nodeWidth / 2) + nodeBorderWidth)
            if (0 > position) {
                position = 0
            }
            if (position > (trackCoords.width - 10)) {
                position = trackCoords.width - 10
            }
            nodes[currentNodeKey].left = (position / trackCoords.width) * 100
            this.setState({ nodes: _.sortBy(nodes, (o) => o.left) }, () => {
                // convert nodes array to gradient string
            })
        }
        // e.stopPropagation()
        // e.preventDefault()
    }
    initValue = (value) => {
        const { nodeBorderWidth, nodeWidth } = this.state
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
        let position = 0
        let trackCoords = this.getCoords(document.querySelector('.grad-track'))
        if (value.includes('radial')) {
            type = 'radial'
        }
        value = value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'))
        value = value.split(/,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/)
        if (value[0].includes('to') || value[0].includes('at') || value[0].includes('deg')) {
            if (value[0].includes('at')) {
                let pos = value[0].substr(value[0].search(/[0-9]|\./))
                position = isNaN(parseInt(pos)) ? 0 : parseInt(pos)
            } else {
                direction = evaluateDirection(value[0])
            }
            value.shift()
        }
        let nodes = value.map((val, key) => {
            val = val.trim().split(/\ \s?(?![^\(]*\))/)
            if (val.length == 1) {
                // no position
                return {
                    color: val[0],
                    key: key,
                }
            }
            if (parseInt(val[1]) == 100) {
                return {
                    color: val[0],
                    key: key,
                    left: parseFloat(val[1]) - ((((nodeWidth)) / trackCoords.width) * 100)
                }
            }
            return {
                color: val[0],
                key: key,
                left: parseFloat(val[1])
            }
        })
        const getClosest = (nodes, currentKey, direction) => {
            if (nodes[currentKey] && nodes[currentKey].left) {
                return { node: nodes[currentKey], key: currentKey }
            }
            currentKey = currentKey + direction
            return getClosest(nodes, currentKey, direction)
        }
        nodes.forEach((item, key) => {
            if (!item.left) {
                if (key == 0) {
                    item.left = 0
                } else if (key == nodes.length - 1) {
                    item.left = 100 - ((((nodeWidth / 2) + nodeBorderWidth) / trackCoords.width) * 100)
                } else {
                    let lowerLimit = getClosest(nodes, key, -1)
                    let upperLimit = getClosest(nodes, key, 1)
                    item.left = (lowerLimit.node.left + (upperLimit.node.left - lowerLimit.node.left) / (upperLimit.key - lowerLimit.key))
                }
            }
        })
        nodes = _.sortBy(nodes, (o) => o.left)
        let nodesStr = nodes.map(item => `${item.color} ${item.left}%`)
        nodesStr = nodesStr.join(', ')
        this.setState({ nodes, nodesStr, direction, type, position, currentPickerNode: 0 }, () => {

        })
    }

	// @Debounce(1000)
    onChange = (val, key) => {
        const { globalOnChange } = this.props
        // key = node || direction || type
        let { type, nodes, direction, position, nodesStr, currentPickerNode } = this.state
        let gradient = [
            `${type}-gradient(`,
            `${type === 'linear' ? this.extractValue(`${direction}`) + 'deg' : 'circle at ' + (this.extractValue(`${position}`) + '% ' + this.extractValue(`${position}`) + '%')}, `,
            nodesStr,
            ')'
        ]
        switch (key) {
            case 'colorPicker':
                let nodeIndex = _.findIndex(nodes, (item) => item.key == currentPickerNode)
                nodes[nodeIndex].color = val
                nodesStr = nodes.map(item => `${item.color} ${item.left}%`)
                nodesStr = nodesStr.join(', ')
                gradient[2] = nodesStr
                this.setState({ nodes, nodesStr })
                break;
            case 'nodesStr':
                gradient[2] = val
                break;
            case 'direction':
                gradient[1] = this.extractValue(`${val}`) + 'deg,'
                break;
            case 'position':
                gradient[1] = 'circle at ' + (this.extractValue(`${val}`) + '% ' + this.extractValue(`${val}`) + '%,')
                break;
            case 'type':
                gradient[0] = `${val}-gradient(`
                gradient[1] = 'circle at ' + (this.extractValue(`${position}`) + '% ' + this.extractValue(`${position}`) + '%,')
                break;
            default:
                break;
        }
        this.setState({ value: gradient.join(''), [key]: val }, () => {
            globalOnChange && globalOnChange(gradient.join(''))
        })
    }
    extractValue = (data) => {
        let unit = data.replace(/[0-9]|\.|-/gi, '')
        return data.replace(unit, '')
    }
    getCurrentNodeColor = () => {
        const { nodes, currentPickerNode } = this.state
        console.log(nodes, currentPickerNode)
        let nodeIndex = _.findIndex(nodes, (item) => item.key == currentPickerNode)
        if (nodeIndex == -1) return '#444444'
        return nodes[nodeIndex].color
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
        const { value, nodes, nodesStr, currentPickerNode, nodeWidth, nodeBorderWidth } = this.state
        const fields = [
            {
                key: 'colorPicker',
                type: 'picker',
                value: this.getCurrentNodeColor(),
            },
            {
                label: 'Direction',
                key: 'direction',
                hidden: !(this.state.type === 'linear'),
                type: 'integer',
                stopScrollValue: true,
                value: this.state.direction,
                defaultUnit: 'deg',
                width: '48%',
            },
            {
                label: 'Position',
                key: 'position',
                hidden: !!(this.state.type === 'linear'),
                type: 'integer',
                scrolstopScrollValuelValue: true,
                value: this.state.position,
                defaultUnit: '%',
                width: '48%',
            },
            {
                label: 'Type',
                key: 'type',
                type: 'select', //required
                value: this.state.type,
                width: '48%',
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: 'Linear',
                        value: 'linear'
                    },
                    {
                        label: 'Radial',
                        value: 'radial'
                    },
                ],
            }
        ]
        return (
            <div className={'gradient'}>
                <div className={'nodes-container'} ref={this.gradRef} style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
                    <div className={'grad-track'} style={{ border: '1px solid #444444', borderRadius: '2px', width: '100%', height: '10px', marginTop: '0.5px', marginBottom: '1.5px', backgroundImage: `linear-gradient(90deg,${nodesStr})` }}>
                    </div>

                    {/* <div className={'grad-node'} style={{ border: `${nodeBorderWidth}px solid white`, borderRadius: '20%', width: `${nodeWidth}px`, height: '100%', position: 'absolute', top: 0, left: 0 }}>

                    </div>
                    <div className={'grad-node'} style={{ border: `${nodeBorderWidth}px solid white`, borderRadius: '20%', width: `${nodeWidth}px`, height: '100%', position: 'absolute', top: 0, right: 0 }}>

                    </div> */}
                    {
                        nodes.map((item, key) => {
                            return <div className={'grad-node-' + item.key} style={{ border: `${nodeBorderWidth}px solid #FFFFFF`, borderRadius: '2px', width: `${nodeWidth}px`, height: '12px', position: 'absolute', top: 0, left: item.left + '%', backgroundColor: item.color, cursor: 'pointer' }}>

                            </div>
                        })
                    }
                </div>
                <CreateForm fields={fields} globalOnChange={(item, formData) => { this.onChange(item.value, item.key) }} />
                {/* {JSON.stringify(value)} */}
            </div>
        )
    }
}


export default Gradient