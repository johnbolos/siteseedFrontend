import React, { useState } from "react"
import _, { isNull } from 'lodash'
import { connect } from "react-redux"

import "./motionEffectsForm.scss"
import { CreateForm } from "../../../components/ui/editor"
import Icons from "../../../assets/Icons"
import _grapesEditor from "../../../components/utils/grapesEditor"

class MtnEffects extends React.Component {
    state = {
        showScrollEffect: false,
        scrollAnimTypes: [],
        currentScrollEditKey: '',
        scrollAnimDir: 'Please Select a Scroll Effect',
        scrollAnimDirOptns: [
            {
                label: 'Positive',
                value: 'positive'
            },
            {
                label: 'Negative',
                value: 'negatie'
            },
        ],
        scrollAnimSpeed: 50,
        scrollAnimVpBottom: 0,
        scrollAnimVpTop: 100,

        showMouseEffect: false,
        mouseFormFields: [],
        mouseAnimType: 'Select Mouse Effects',
        mouseAnimDir: 'Please Select a Mouse Effect',
        mouseAnimSpeed: 50,

        enteranceAnim: 'none',
    }
    defaults = [
        {
            type: 'vertical',
            direction: 'top',
            speed: 50,
            vpBottom: 0,
            vpTop: 100
        },
        {
            type: 'horizontal',
            direction: 'left',
            speed: 50,
            vpBottom: 0,
            vpTop: 100
        },
        {
            type: 'transparent',
            direction: 'direct',
            speed: 50,
            vpBottom: 0,
            vpTop: 100
        },
        {
            type: 'blur',
            direction: 'direct',
            speed: 50,
            vpBottom: 0,
            vpTop: 100
        },
        {
            type: 'rotation',
            direction: 'anticlockwise',
            speed: 50,
            vpBottom: 0,
            vpTop: 100
        },
        {
            type: 'scale',
            direction: 'grow',
            speed: 50,
            vpBottom: 0,
            vpTop: 100
        },
    ]

    componentDidMount() {
        if (this.props.selected && this.props.selected.node) {
            this.createScrollAnimTypesValue()
            this.createscrollValues()
            this.createMouseValues()
            this.createEnteranceValue()
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selected != this.props.selected) {
            this.createScrollAnimTypesValue()
            this.createMouseValues()
            this.createEnteranceValue()
            this.setState({ showScrollEffect: false, showMouseEffect: false })
        }
        if (prevState.showScrollEffect != this.state.showScrollEffect && this.state.showScrollEffect) {
            const { selected } = this.props
            if (selected && selected.node && !selected.node.getAttributeNode("data-ss-scroll-effect")) {
                this.setState({ showMouseEffect: false })
                this.globalScrollOnChange(['vertical'], 'scroll-type')
                this.createEnteranceValue()
            }
        }
        if (prevState.showMouseEffect != this.state.showMouseEffect && this.state.showMouseEffect) {
            const { selected } = this.props
            if (selected && selected.node && !selected.node.getAttributeNode("data-ss-mouse-effect")) {
                this.setState({ showScrollEffect: false })
                this.globalMouseOnChange('track', 'mouse-effect-type')
                this.createEnteranceValue()
            }
        }
        // if (prevState.showScrollEffect != this.state.showScrollEffect && this.state.showScrollEffect == false) {
        //     const { selected } = this.props
        //     if (selected && selected.node && selected.node.getAttributeNode("data-ss-scroll-effect")) {
        //         this.globalScrollOnChange(null, 'remove')
        //     }
        // }
        // if (prevState.showMouseEffect != this.state.showMouseEffect && this.state.showMouseEffect == false) {
        //     const { selected } = this.props
        //     if (selected && selected.node && selected.node.getAttributeNode("data-ss-mouse-effect")) {
        //         this.globalMouseOnChange(null, 'remove')
        //     }
        // }
        if (prevState.currentScrollEditKey != this.state.currentScrollEditKey && this.state.currentScrollEditKey != '') {
            this.createscrollValues()
        }
    }
    createScrollAnimTypesValue = (setCurrentAnimValue = true) => {
        const { selected } = this.props
        if (!selected.node || !selected.node.getAttributeNode("data-ss-scroll-effect")) {
            this.setState({ scrollAnimTypes: [], currentScrollEditKey: '' })
            return
        }
        let valArr = selected.node.getAttributeNode("data-ss-scroll-effect").value.split(', ')
        const scrollAnimTypes = valArr.map(val => val.trim().split(' ')[0].trim())
        this.setState({ scrollAnimTypes })
        if (setCurrentAnimValue) {
            this.setState({ currentScrollEditKey: scrollAnimTypes[0] })
        }
    }
    createscrollValues = () => {
        const { currentScrollEditKey } = this.state
        const { selected } = this.props
        if ((!selected.node || !selected.node.getAttributeNode("data-ss-scroll-effect"))) {
            this.setState({ scrollAnimDir: 'Please Select a Scroll Effect', scrollAnimSpeed: 50, scrollAnimVpBottom: 0, scrollAnimVpTop: 100 })
            this.getDirOptions()
            return
        }
        if (currentScrollEditKey == '') {
            this.setState({ scrollAnimDir: 'Please Select a Scroll Effect', scrollAnimSpeed: 50, scrollAnimVpBottom: 0, scrollAnimVpTop: 100 })
            this.getDirOptions()
            return
        }
        let valArr = selected.node.getAttributeNode("data-ss-scroll-effect").value.split(', ')
        console.log('sss.p val', valArr, currentScrollEditKey)
        // if (!valArr.length || valArr[0] == '') {
        //     this.setState({ scrollAnimDir: 'Please Select a Scroll Effect', scrollAnimSpeed: 50, scrollAnimVpBottom: 0, scrollAnimVpTop: 100 })
        //     this.getDirOptions()
        //     return
        // }
        // if (valArr.length && !valArr.find(animStr => animStr.includes(currentScrollEditKey))) {

        // } else {

        // }
        let currentAnimValue = ''
        if (valArr.length == 1) {
            currentAnimValue = valArr[0].trim().split(' ')
        } else {
            currentAnimValue = valArr.find(animStr => animStr.includes(currentScrollEditKey))
            if (!currentAnimValue) {
                return
            }
            currentAnimValue = currentAnimValue.trim().split(' ')
        }

        const scrollAnimDir = currentAnimValue[1].trim()
        this.getDirOptions()
        const scrollAnimSpeed = currentAnimValue[2].trim()
        const scrollAnimVpBottom = currentAnimValue[3].trim()
        const scrollAnimVpTop = currentAnimValue[4].trim()
        this.setState({ scrollAnimDir, scrollAnimSpeed, scrollAnimVpBottom, scrollAnimVpTop })
    }
    getDirOptions = () => {
        const data = this.state.currentScrollEditKey
        let resp = [
            {
                label: 'Positive',
                value: 'positive'
            },
            {
                label: 'Negative',
                value: 'negatie'
            },
        ]
        switch (data) {
            case 'vertical':
                resp = [
                    {
                        label: 'Top',
                        value: 'top'
                    },
                    {
                        label: 'Bottom',
                        value: 'bottom'
                    },
                ]
                break;
            case 'horizontal':
                resp = [
                    {
                        label: 'Left',
                        value: 'left'
                    },
                    {
                        label: 'Right',
                        value: 'right'
                    },
                ]
                break;
            case 'transparent':
                resp = [
                    {
                        label: 'Positive',
                        value: 'positive'
                    },
                    {
                        label: 'Negative',
                        value: 'negatie'
                    },
                ]
                break;
            case 'blur':
                resp = [
                    {
                        label: 'Positive',
                        value: 'positive'
                    },
                    {
                        label: 'Negative',
                        value: 'negatie'
                    },
                ]
                break;
            case 'rotation':
                resp = [
                    {
                        label: 'Anticlockwise',
                        value: 'anticlockwise'
                    },
                    {
                        label: 'Clockwise',
                        value: 'clockwise'
                    },
                ]
                break;
            case 'scale':
                resp = [
                    {
                        label: 'Shrink',
                        value: 'shrink'
                    },
                    {
                        label: 'Grow',
                        value: 'grow'
                    },
                ]
                break;
        }
        this.setState({ scrollAnimDirOptns: resp })
    }
    globalScrollOnChange = (value, key) => {
        const { selected } = this.props
        const { currentScrollEditKey } = this.state
        let scrollResp = ''
        let setCurrentAnimValue = false
        if (!selected.node) {
            return
        }
        let obj = {}
        if (selected.node.getAttributeNode("data-aos") && selected.node.getAttributeNode("data-aos").value) {
            obj['data-aos'] = selected.node.getAttributeNode("data-aos").value
        }
        if (key == 'remove') {
            let selectedComponent = _grapesEditor.editor.getSelected()
            let attributes = {}
            if (selectedComponent.attributes.attributes) {
                attributes = selectedComponent.attributes.attributes
                delete attributes['data-ss-scroll-effect']
                delete attributes['data-ss-mouse-effect']
                delete attributes['data-aos']
            }
            selectedComponent.setAttributes({ 'data-ss-scroll-effect': null, ...attributes })
            // reset animation
            _grapesEditor.styleManager.resetAnim()
            return
        }
        let valArr = []
        if (selected.node.getAttributeNode("data-ss-scroll-effect")) {
            valArr = selected.node.getAttributeNode("data-ss-scroll-effect").value.split(', ')
        }
        if (key == 'scroll-type') {
            setCurrentAnimValue = true
            _.forEach(value, (val, index) => {
                let find = valArr.find(str => str.includes(val))
                if (scrollResp != '') {
                    scrollResp += ', '
                }
                if (!find) {
                    let defaultVal = this.defaults.find(item => item.type == val)
                    scrollResp += `${defaultVal.type} ${defaultVal.direction} ${defaultVal.speed} ${defaultVal.vpBottom} ${defaultVal.vpTop}`
                    return;
                }
                scrollResp += find
            })
        } else if (key == 'direction') {
            let index = valArr.findIndex(str => str.includes(currentScrollEditKey))
            let currentAnimPrevVal = valArr[index].split(' ')
            currentAnimPrevVal[1] = value
            valArr[index] = currentAnimPrevVal.join(' ')
            scrollResp = valArr.join(', ')
        } else if (key == 'speed') {
            let index = valArr.findIndex(str => str.includes(currentScrollEditKey))
            let currentAnimPrevVal = valArr[index].split(' ')
            currentAnimPrevVal[2] = value
            valArr[index] = currentAnimPrevVal.join(' ')
            scrollResp = valArr.join(', ')
        } else if (key == 'vpBottom') {
            let index = valArr.findIndex(str => str.includes(currentScrollEditKey))
            let currentAnimPrevVal = valArr[index].split(' ')
            currentAnimPrevVal[3] = value
            valArr[index] = currentAnimPrevVal.join(' ')
            scrollResp = valArr.join(', ')
        } else if (key == 'vpTop') {
            let index = valArr.findIndex(str => str.includes(currentScrollEditKey))
            let currentAnimPrevVal = valArr[index].split(' ')
            currentAnimPrevVal[4] = value
            valArr[index] = currentAnimPrevVal.join(' ')
            scrollResp = valArr.join(', ')
        }
        // set selected scroll attribute = resp
        let selectedComponent = _grapesEditor.editor.getSelected()
        let attributes = {}
        if (selectedComponent.attributes.attributes) {
            attributes = selectedComponent.attributes.attributes
            delete attributes['data-ss-scroll-effect']
            delete attributes['data-ss-mouse-effect']
            delete attributes['data-aos']
        }
        selectedComponent.setAttributes({ 'data-ss-scroll-effect': scrollResp, ...attributes })
        // reset animation
        _grapesEditor.styleManager.resetAnim()
        this.createScrollAnimTypesValue(setCurrentAnimValue)
        this.createscrollValues()
    }
    createMouseValues = () => {
        const { selected } = this.props
        if (!selected.node || !selected.node.getAttributeNode("data-ss-mouse-effect")) {
            this.setState({ mouseAnimType: 'Select Mouse Effects', mouseAnimDir: 'direct', mouseAnimSpeed: 50 })
            return
        }
        let valArr = selected.node.getAttributeNode("data-ss-mouse-effect").value.split(' ')
        const mouseAnimType = valArr[0]
        const mouseAnimDir = valArr[1]
        const mouseAnimSpeed = valArr[2]
        this.setState({ mouseAnimType, mouseAnimDir, mouseAnimSpeed })
    }
    globalMouseOnChange = (value, key) => {
        const { selected } = this.props
        let mouseResp = ''
        if (!selected.node) {
            return
        }
        let obj = {}
        if (selected.node.getAttributeNode("data-aos") && selected.node.getAttributeNode("data-aos").value) {
            obj['data-aos'] = selected.node.getAttributeNode("data-aos").value
        }
        if (key == 'remove') {
            let selectedComponent = _grapesEditor.editor.getSelected()
            let attributes = {}
            if (selectedComponent.attributes.attributes) {
                attributes = selectedComponent.attributes.attributes
                delete attributes['data-ss-scroll-effect']
                delete attributes['data-ss-mouse-effect']
                delete attributes['data-aos']
            }
            selectedComponent.setAttributes({ 'data-ss-mouse-effect': null,...attributes })
            // reset animation
            _grapesEditor.styleManager.resetAnim()
            return
        }
        let valArr = ['track', 'direct', '50']
        if (selected.node.getAttributeNode("data-ss-mouse-effect")) {
            valArr = selected.node.getAttributeNode("data-ss-mouse-effect").value.split(' ')
        }
        if (key == 'mouse-effect-type') {
            valArr[0] = value
            mouseResp = valArr.join(' ')
        } else if (key == 'mouse-effect-direction') {
            valArr[1] = value
            mouseResp = valArr.join(' ')
        } else if (key = 'mouse-effect-speed') {
            valArr[2] = value
            mouseResp = valArr.join(' ')
        }
        let selectedComponent = _grapesEditor.editor.getSelected()
        let attributes = {}
        if (selectedComponent.attributes.attributes) {
            attributes = selectedComponent.attributes.attributes
            delete attributes['data-ss-scroll-effect']
            delete attributes['data-ss-mouse-effect']
            delete attributes['data-aos']
        }
        selectedComponent.setAttributes({ 'data-ss-mouse-effect': mouseResp, ...attributes })
        // reset animation
        _grapesEditor.styleManager.resetAnim()
        this.createMouseValues()
    }
    createEnteranceValue = () => {
        const { selected } = this.props
        if (selected.node && !selected.node.getAttributeNode("data-aos")) {
            this.setState({ enteranceAnim: 'none' })
            return
        }
        const enteranceAnim = selected.node.getAttributeNode("data-aos").value
        this.setState({ enteranceAnim })
    }
    globalEnteranceOnChange = (value, key) => {
        const { selected } = this.props
        let resp = value
        if (!selected.node) {
            return
        }
        let obj = {}
        if (selected.node.getAttributeNode("data-ss-scroll-effect") && selected.node.getAttributeNode("data-ss-scroll-effect").value) {
            obj['data-ss-scroll-effect'] = selected.node.getAttributeNode("data-ss-scroll-effect").value
        }
        if (selected.node.getAttributeNode("data-ss-mouse-effect") && selected.node.getAttributeNode("data-ss-mouse-effect").value) {
            obj['data-ss-mouse-effect'] = selected.node.getAttributeNode("data-ss-mouse-effect").value
        }
        if (isNull(value)) {
            let selectedComponent = _grapesEditor.editor.getSelected()
            let attributes = {}
            if (selectedComponent.attributes.attributes) {
                attributes = selectedComponent.attributes.attributes
                delete attributes['data-ss-scroll-effect']
                delete attributes['data-ss-mouse-effect']
                delete attributes['data-aos']
            }
            selectedComponent.setAttributes({ 'data-aos': 'none', ...attributes })
            // reset animation
            _grapesEditor.styleManager.resetAnim()
            return
        }
        let selectedComponent = _grapesEditor.editor.getSelected()
        let attributes = {}
        if (selectedComponent.attributes.attributes) {
            attributes = selectedComponent.attributes.attributes
            delete attributes['data-ss-scroll-effect']
            delete attributes['data-ss-mouse-effect']
            delete attributes['data-aos']
        }
        selectedComponent.setAttributes({ 'data-aos': resp, ...attributes })
        // reset animation
        _grapesEditor.styleManager.resetAnim()
        this.createEnteranceValue()
    }
    render() {
        const {
            showScrollEffect, currentScrollEditKey, scrollAnimTypes, scrollAnimSpeed, scrollAnimDir, scrollAnimDirOptns, scrollAnimVpBottom, scrollAnimVpTop,
            showMouseEffect, mouseAnimType, mouseAnimDir, mouseAnimSpeed,
            enteranceAnim
        } = this.state
        const { selected } = this.props
        const scrollFormFields = [
            {
                // label: 'Entrance Animation',
                key: 'scroll-type',
                type: 'select', //required
                value: scrollAnimTypes,
                multiple: true,
                containerClass: 'scroll-effect-type-select',
                // width: '48%',
                onChange: (value, key) => {
                    if (!value.length || !value[0]) {
                        this.setState({ currentScrollEditKey: '' })
                        this.globalScrollOnChange(null, 'remove')
                        return
                    }
                    this.globalScrollOnChange(value, key)
                },
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: (<>
                            <div>Vertical Scroll</div>
                            <div class={`scroll-types-edit-icon ${currentScrollEditKey == 'vertical' ? 'selected' : ''}`}>
                                <Icons.Edit onClick={(e) => {
                                    const value = 'vertical', key = 'scroll-type'
                                    e.stopPropagation()
                                    if (!this.state.scrollAnimTypes.includes(value)) {
                                        this.globalScrollOnChange([...this.state.scrollAnimTypes, value], key)
                                    }
                                    this.setState({ currentScrollEditKey: value })
                                }} style={{ width: '16px', height: '16px' }} />
                            </div>
                        </>),
                        value: 'vertical'
                    },
                    {
                        label: (<>
                            <div>Horizontal Scroll</div>
                            <div class={`scroll-types-edit-icon ${currentScrollEditKey == 'horizontal' ? 'selected' : ''}`}>
                                <Icons.Edit onClick={(e) => {
                                    const value = 'horizontal', key = 'scroll-type'
                                    e.stopPropagation()
                                    if (!this.state.scrollAnimTypes.includes(value)) {
                                        this.globalScrollOnChange([...this.state.scrollAnimTypes, value], key)
                                    }
                                    this.setState({ currentScrollEditKey: value })
                                }} style={{ width: '16px', height: '16px' }} />
                            </div>
                        </>),
                        value: 'horizontal'
                    },
                    {
                        label: (<>
                            <div>Transparency</div>
                            <div class={`scroll-types-edit-icon ${currentScrollEditKey == 'transparent' ? 'selected' : ''}`}>
                                <Icons.Edit onClick={(e) => {
                                    const value = 'transparent', key = 'scroll-type'
                                    e.stopPropagation()
                                    if (!this.state.scrollAnimTypes.includes(value)) {
                                        this.globalScrollOnChange([...this.state.scrollAnimTypes, value], key)
                                    }
                                    this.setState({ currentScrollEditKey: value })
                                }} style={{ width: '16px', height: '16px' }} />
                            </div>
                        </>),
                        value: 'transparent'
                    },
                    {
                        label: (<>
                            <div>Blur</div>
                            <div class={`scroll-types-edit-icon ${currentScrollEditKey == 'blur' ? 'selected' : ''}`}>
                                <Icons.Edit onClick={(e) => {
                                    const value = 'blur', key = 'scroll-type'
                                    e.stopPropagation()
                                    if (!this.state.scrollAnimTypes.includes(value)) {
                                        this.globalScrollOnChange([...this.state.scrollAnimTypes, value], key)
                                    }
                                    this.setState({ currentScrollEditKey: value })
                                }} style={{ width: '16px', height: '16px' }} />
                            </div>
                        </>),
                        value: 'blur'
                    },
                    {
                        label: (<>
                            <div>Rotate</div>
                            <div class={`scroll-types-edit-icon ${currentScrollEditKey == 'rotation' ? 'selected' : ''}`}>
                                <Icons.Edit onClick={(e) => {
                                    const value = 'rotation', key = 'scroll-type'
                                    e.stopPropagation()
                                    if (!this.state.scrollAnimTypes.includes(value)) {
                                        console.log('sss.p rotation')
                                        this.globalScrollOnChange([...this.state.scrollAnimTypes, value], key)
                                    }
                                    this.setState({ currentScrollEditKey: value })
                                }} style={{ width: '16px', height: '16px' }} />
                            </div>
                        </>),
                        value: 'rotation'
                    },
                    {
                        label: (<>
                            <div>Scale</div>
                            <div class={`scroll-types-edit-icon ${currentScrollEditKey == 'scale' ? 'selected' : ''}`}>
                                <Icons.Edit onClick={(e) => {
                                    const value = 'scale', key = 'scroll-type'
                                    e.stopPropagation()
                                    if (!this.state.scrollAnimTypes.includes(value)) {
                                        this.globalScrollOnChange([...this.state.scrollAnimTypes, value], key)
                                    }
                                    this.setState({ currentScrollEditKey: value })
                                }} style={{ width: '16px', height: '16px' }} />
                            </div>
                        </>),
                        value: 'scale'
                    },
                ],
            },
            {
                label: 'Direction',
                key: 'direction',
                type: 'select', //required
                value: scrollAnimDir,
                hidden: ['transparent', 'blur'].includes(currentScrollEditKey),
                // width: '48%',
                onChange: (value, item, pastValue) => {
                    this.globalScrollOnChange(value, 'direction')
                },
                options: scrollAnimDirOptns,
            },
            {
                label: 'Speed',
                labelClass: 'custom-label',
                labelStyle: {
                    'marginRight': '10px',
                    'paddingTop': '0px'
                },
                key: 'speed',
                type: 'slider',
                containerClass: 'scroll-effect-speed',
                value: scrollAnimSpeed,
                defaultUnit: '%',
                // pointerCenter: true,
                integerEdit: false,
                inline: true,
                min: 0,
                max: 100,
                onChange: (value) => {
                    this.globalScrollOnChange(parseInt(value), 'speed')
                }
            },
            {
                label: 'Viewport B',
                labelClass: 'custom-label',
                labelStyle: {
                    'marginRight': '10px',
                    'paddingTop': '0px'
                },
                style: {
                    sliderWidth: '70%'
                },
                dividerposPercent: `${(scrollAnimVpTop / 100) * 70}%`,
                key: 'vpBottom',
                type: 'slider',
                containerClass: 'scroll-effect-vpBottom',
                value: scrollAnimVpBottom,
                defaultUnit: '%',
                // pointerCenter: true,
                integerEdit: false,
                inline: true,
                min: 0,
                max: 100,
                maxLimit: scrollAnimVpTop,
                onChange: (value) => {
                    this.globalScrollOnChange(parseInt(value), 'vpBottom')
                }
            },
            {
                label: 'Viewport T',
                labelClass: 'custom-label',
                labelStyle: {
                    'marginRight': '10px',
                    'paddingTop': '0px'
                },
                style: {
                    sliderWidth: '70%'
                },
                dividerposPercent: `${(scrollAnimVpBottom / 100) * 70}%`,
                key: 'vpTop',
                type: 'slider',
                containerClass: 'scroll-effect-vpTop',
                value: scrollAnimVpTop,
                defaultUnit: '%',
                // pointerCenter: true,
                integerEdit: false,
                inline: true,
                min: 0,
                minLimit: scrollAnimVpBottom,
                max: 100,
                onChange: (value) => {
                    this.globalScrollOnChange(parseInt(value), 'vpTop')
                }
            },
            {
                type: 'divider'
            },
        ]
        const mouseFormFields = [
            {
                key: 'mouse-effect-type',
                type: 'select', //required
                value: mouseAnimType,
                // width: '48%',
                onChange: (value, item, pastValue) => {
                    this.globalMouseOnChange(value, 'mouse-effect-type')
                },
                options: [
                    {
                        label: 'Mouse Track',
                        value: 'track'
                    },
                    {
                        label: '3D Tilt',
                        value: 'tilt'
                    },
                ],
            },
            {
                label: 'Direction',
                key: 'mouse-effect-direction',
                type: 'select', //required
                value: mouseAnimDir,
                // width: '48%',
                onChange: (value, item, pastValue) => {
                    this.globalMouseOnChange(value, 'mouse-effect-direction')
                },
                options: [
                    {
                        label: 'Direct',
                        value: 'direct'
                    },
                    {
                        label: 'Opposite',
                        value: 'opposite'
                    },
                ],
            },
            {
                label: 'Speed',
                labelClass: 'custom-label',
                labelStyle: {
                    'marginRight': '10px',
                    'paddingTop': '0px'
                },
                key: 'mouse-effect-speed',
                type: 'slider',
                containerClass: 'mouse-effect-speed',
                value: mouseAnimSpeed,
                defaultUnit: '%',
                // pointerCenter: true,
                integerEdit: false,
                inline: true,
                min: 0,
                max: 100,
                onChange: (value) => {
                    this.globalMouseOnChange(parseInt(value), 'mouse-effect-speed')
                }
            },
            {
                type: 'divider'
            },
        ]
        const enteranceAnimFormField = [
            {
                label: 'Entrance Animation',
                key: 'enterance-anim',
                type: 'select', //required
                value: enteranceAnim,
                containerClass: 'enterance-anim-select',
                // width: '48%',
                onChange: (value) => {
                    this.globalEnteranceOnChange(value, 'enterance-anim')
                },
                options: [  //optional type: Array of string, Array of objects
                    {
                        label: 'None',
                        value: 'none'
                    },
                    {
                        label: 'Fade Up',
                        value: 'fade-up'
                    },
                    {
                        label: 'Fade Down',
                        value: 'fade-down'
                    },
                    {
                        label: 'Fade Right',
                        value: 'fade-right'
                    },
                    {
                        label: 'Fade Left',
                        value: 'fade-left'
                    },
                    {
                        label: 'Fade Up Right',
                        value: 'fade-up-right'
                    },
                    {
                        label: 'Fade Up Left',
                        value: 'fade-up-left'
                    },
                    {
                        label: 'Fade Down Right',
                        value: 'fade-down-right'
                    },
                    {
                        label: 'Fade Down Left',
                        value: 'fade-down-left'
                    },
                    {
                        label: 'Flip Left',
                        value: 'flip-left'
                    },
                    {
                        label: 'Flip Right',
                        value: 'flip-right'
                    },
                    {
                        label: 'Flip Up',
                        value: 'flip-up'
                    },
                    {
                        label: 'Flip Down',
                        value: 'flip-down'
                    },
                    {
                        label: 'Zoom In',
                        value: 'zoom-in'
                    },
                    {
                        label: 'Zoom In Up',
                        value: 'zoom-in-up'
                    },
                    {
                        label: 'Zoom In Down',
                        value: 'zoom-in-down'
                    },
                    {
                        label: 'Zoom In Left',
                        value: 'zoom-in-left'
                    },
                    {
                        label: 'Zoom In Right',
                        value: 'zoom-in-right'
                    },
                    {
                        label: 'Zoom Out Up',
                        value: 'zoom-out-up'
                    },
                    {
                        label: 'Zoom Out Down',
                        value: 'zoom-out-down'
                    },
                    {
                        label: 'Zoom Out Right',
                        value: 'zoom-out-Left'
                    },
                    {
                        label: 'Zoom Out Left',
                        value: 'zoom-out-left'
                    },
                ],
            }
        ]
        return (
            <>
                <div className={'composite-label custom-label scroll-effects-composite-label'}>
                    Scrolling Effects
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {showScrollEffect ? (
                            <Icons.Minus title={'Remove'} onClick={() => {
                                this.setState({ showScrollEffect: false })
                                if (selected && selected.node && selected.node.getAttributeNode("data-ss-scroll-effect")) {
                                    this.globalScrollOnChange(null, 'remove')
                                }
                            }} style={{ width: '12px', height: '12px', paddingBottom: '2px' }} />
                        ) : (
                                <Icons.PlusBold onClick={() => {
                                    this.setState({ showScrollEffect: true })
                                }} style={{ width: '12px', height: '12px', paddingBottom: '2px' }} />
                            )}
                    </div>
                </div>
                <CreateForm
                    fields={showScrollEffect ? scrollFormFields : []}
                    getFormData={(fn) => {
                        this.getFormDataAnimate = fn
                    }} />
                <div className={'composite-label custom-label mouse-effects-composite-label'}>
                    Mouse Effects
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {showMouseEffect ? (
                            <Icons.Minus title={'Remove'} onClick={() => {
                                this.setState({ showMouseEffect: false })
                                if (selected && selected.node && selected.node.getAttributeNode("data-ss-mouse-effect")) {
                                    this.globalMouseOnChange(null, 'remove')
                                }
                            }} style={{ width: '12px', height: '12px', paddingBottom: '2px' }} />
                        ) : (
                                <Icons.PlusBold onClick={() => {
                                    this.setState({ showMouseEffect: true })
                                }} style={{ width: '12px', height: '12px', paddingBottom: '2px' }} />
                            )}
                    </div>
                </div>
                <CreateForm
                    fields={showMouseEffect ? mouseFormFields : []}
                    getFormData={(fn) => {
                        this.getFormDataAnimate = fn
                    }} />
                <CreateForm
                    fields={enteranceAnimFormField}
                    getFormData={(fn) => {
                        this.getFormDataAnimate = fn
                    }} />
            </>
        )
    }
}

// const mapStateToProps = ({ global, layout, templates, }) => {
//     return {
//         loading: global.loading,
//         theme: layout.theme,
//         templates,
//         currentUser: global.currentUser
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch,
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MtnEffects)
export default MtnEffects
