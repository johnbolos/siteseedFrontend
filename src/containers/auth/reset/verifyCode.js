import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"
import { getPushPathWrapper, getUrlParams } from "../../../routes"
import { setOTP } from "../../../reducers/actions/userActions"
import { showToast } from "../../../components/utils"

class VerifyCode extends React.Component {
    state = {
        loading: false,
        email: null
    }
    scriptArray = [
    ]
    styleArray = [
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
            rel: "stylesheet",
            // integrity: "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",
            crossorigin: "anonymous",
        },
        {
            rel: "stylesheet",
            href: "./assets/website/css/jquery-ui.css"
        },
        {
            rel: "stylesheet",
            href: "./assets/website/css/nice-select.css"
        },
        {
            rel: "stylesheet",
            href: "./assets/website/css/style.css"
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        },
    ]

    componentDidMount() {
        let { currentUser, dispatch } = this.props
        this.loadScriptNStyle()
        this.setState({ email: getUrlParams('resetPassword.verifyCode', this.props.pathname).email })
    }
    loadScriptNStyle = () => {
        const { scriptArray, styleArray } = this
        styleArray.forEach(styleData => {
            let elem = document.createElement("link")
            _.each(styleData, (val, key) => {
                elem[key] = val
            })
            elem.id = 'ss-styles-load'
            document.head.appendChild(elem)
        })

        scriptArray.forEach(scriptData => {
            let elem = document.createElement("script")
            _.each(scriptData, (val, key) => {
                elem[key] = val
            })
            elem.id = 'ss-script-load'
            document.body.appendChild(elem)
        })
    }
    getFormData = (form) => {
        const formEntries = new FormData(form).entries();
        return Object.assign(...Array.from(formEntries, ([name, value]) => ({ [name]: value })));
    }
    handleSubmit = async (e) => {
        const { dispatch } = this.props
        const { email } = this.state
        e.preventDefault()
        let data = this.getFormData(e.target)
        if (!data.otp.trim()) {
            showToast({ type: 'error', message: 'Invalid OTP' })
            return
        }
        console.log(data, 'sss.p')
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            showToast({ type: 'error', message: 'Invalid email' })
            return
        }
        dispatch(setOTP(data.otp))
        this.goto('resetPassword.setPassword', { email: email })
    }
    goto = (key, params) => {   // push to the specifies location/key
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key, params))
    }
    render() {
        const { } = this.state
        const { dispatch } = this.props
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#eff1f2' }} id={'login-container'}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px', width: '560px', background: '#ffffff', filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.1))' }}>
                    <img src="./assets/website/images/Logo.svg" className="img-fluid" alt="Responsive image" style={{ width: '70px' }} />
                    <h1 className="osb-22 black" style={{ marginTop: '.5em' }}>Check your Email </h1>
                    <br />
                    <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form} style={{ width: '100%' }}>
                        <label className="form-label oss-16 black">***_***</label>
                        <br />
                        <input type="text" className="form-control osr-13 darkgrey" placeholder="OTP" name={'otp'} required></input>
                        <br />

                        <button type="submit" className="btn btn-primary oss-13 white green-btn" style={{ width: '100%' }}>Verify</button>
                    </form>
                    <br />

                    <a onClick={() => { this.goto('resetPassword.enterEmail') }}>I didn't recive the email?</a>
                    <p style={{ margin: '10px 0px' }}></p>
                    <a onClick={() => this.goto('loginPage')} style={{ color: '#31CDB9' }}>Log-In</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ global, layout, templates, router }) => {
    return {
        loading: global.loading,
        theme: layout.theme,
        templates,
        pathname: router.location.pathname,
        currentUser: global.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyCode)
