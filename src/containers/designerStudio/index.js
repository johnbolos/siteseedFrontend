import React from "react"
import { connect } from "react-redux"

import "./index.scss"
import { showLoader, hideLoader } from "../../reducers/actions"
import _grapesEditor from "../../components/utils/grapesEditor"

import { template1Html, template1Style } from "./dummie"
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
        this.StartEditor()
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

    temp = () => {
        console.log('temporary function')
        // const { editor } = _grapesEditor
        //============Change Css dynamically =================================
        const frame = document.getElementsByClassName("gjs-frame")
        const element = frame[0].contentWindow.document.getElementsByClassName("logo")
        console.log(element)
        element[0].style.backgroundColor = 'red'
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
                        <div id="grapesEditor"></div>
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
