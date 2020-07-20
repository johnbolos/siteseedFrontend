import React from "react"
import { connect } from "react-redux"
import { Debounce } from 'lodash-decorators/debounce'

import "./index.scss"
import { showLoader, hideLoader } from "../../reducers/actions"
import _grapesEditor from "../../components/utils/grapesEditor"
import { closestElement } from '../../components/utils/index'
import { template1Html, template1Style, layerData } from "./dummie"
import { landingHtml, landingStyle } from "./templates/landing"
import { landing2Html, landing2Style } from "./templates/landing2"
// import {
//     logo,
//     addElem,
//     components,
//     layers,
// } from "../designerStudio/panels/icons"
// import SlideDrawer from "./slideDrawer/slideDrawer"
// import Backdrop from "./slideDrawer/backdrop"

class DesignerStudio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "blue",
            clientCode: null,
            drawerOpen: false,
        }
    }

    html = () => {
        return `<div style="background-color: red;">
        <br></br><a id='h1qert' href="http://google.com">Link13</a>
        {/* <span data-gjs-stylable="false">Link13</span> */}
        <h1 class='fo'>Link13</h1>
    </div>`
    }

    componentDidMount() {
        // this.StartEditor()
        setTimeout(() => {
            this.temp()
        }, 5000)
    }

    StartEditor = () => {
        const { html } = this.state
        const { templateName } = this.props.templates
        let tempHtml, tempStyle
        switch (templateName) {
            case "template1":
                tempHtml = template1Html
                tempStyle = template1Style
                break
            case "template2":
                tempHtml = landing2Html
                tempStyle = landing2Style
                break
            case "template3":
                tempHtml = landingHtml
                tempStyle = landingStyle
                break
            default:
                break
        }

        _grapesEditor.init()
    }
    @Debounce(500)
    fun(mouse) {
        console.log('mouse moved', mouse.pageX, mouse.pageY)
        const el = closestElement({ x: mouse.pageX, y: mouse.pageY }, 'draggable')
        console.log(el, 'is closest to mouse')
    }
    temp = () => {
        console.log('temporary function')
        const { editor } = _grapesEditor
        let wrapper = document.getElementsByClassName("body-container")

        window.addEventListener('mousemove', mouse => {
            this.fun(mouse)
        });
        //============Change Css dynamically =================================
        // const collection = editor.getComponents();
        // let styles = []
        // let totalNodes = []
        // const frame = document.getElementsByClassName("gjs-frame")
        // const wrapper = frame[0].contentWindow.document.getElementById("wrapper").children
        // console.log(wrapper[0])
        // for (let i = 0; i < wrapper.length; i++) {
        //         totalNodes.push(wrapper[i].tagName)
        //         styles.push(this.cssObjects(wrapper[i]))
        //   }
        // HTMLCollection.prototype.forEach = Array.prototype.forEach
        // wrapper.forEach(node => {
        //     totalNodes.push(node.tagName)
        //     styles.push(this.cssObjects(node))
        // })
        // console.log(totalNodes, styles, 'extracedddd')

    }

    render() {
        const {
            loading,
        } = this.props
        return (
            <div
                style={{
                    // display: "flex",
                    // justifyContent: "center",
                    // flexDirection: "row",
                    height: "100%",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: "100%" /* backgroundColor: "red"  */,
                    }}
                >
                    <div className="body-container"
                        style={{
                            height: "100%",
                            width: "100%" /* backgroundColor: "red"  */,
                        }}
                    >
                        {/* <div id="grapesEditor"></div> */}
                        <div id={'draggable'}>
                            {
                                layerData.map((item, key) => {
                                    if (item.children) {
                                        return <>
                                            <div key={key} id={key} style={{ backgroundColor: 'yellow', border: '1px solid' }}>{`${item.id}`}</div>
                                            {item.children.map((elem, index) => {
                                                return <div key={key + '-' + index} id={key + '-' + index} style={{ marginLeft: '5px', backgroundColor: 'blue', border: '0.5px solid' }}>{`${elem.id}`}</div>
                                            })}
                                        </>
                                    }
                                    return <div key={key} id={key}>{item.id}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ global, layout, templates }) => {
    return { loading: global.loading, templates }
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignerStudio)
