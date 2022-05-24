import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"
import { showToast } from "../../../components/utils"
import { setOTP } from "../../../reducers/actions/userActions"
import { getPushPathWrapper, getUrlParams } from "../../../routes"
import request from "../../../request"

class NewPassword extends React.Component {
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
        this.setState({ email: getUrlParams('resetPassword.setPassword', this.props.pathname).email })
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
        const { dispatch, otp } = this.props
        const { email } = this.state
        e.preventDefault()
        let data = this.getFormData(e.target)
        if (!email.trim()) {
            showToast({ type: 'error', message: 'Invalid email' })
            return
        } else if (!data.new_password || !data.confirm_password) {
            showToast({ type: 'error', message: 'Invalid password' })
            return
        } else if (!data.confirm_password.trim()) {
            showToast({ type: 'error', message: 'Invalid password' })
            return
        } else if (!otp.trim()) {
            showToast({ type: 'error', message: 'Invalid otp' })
            return
        }
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            showToast({ type: 'error', message: 'Invalid email' })
            return
        }
        if (data.new_password != data.confirm_password) {
            showToast({ type: 'error', message: 'Password mismatch' })
            return
        }
        data = {
            new_password: data.new_password,
            email,
            otp
        }
        this.setState({ loading: true })
        const apiRequest = await request.resetPassword(data)
        console.log(apiRequest, 'sss.p')
        if (apiRequest.messageType == 'success') {
            showToast({ type: 'success', message: apiRequest.message + ' Redirecting...' }, () => {
                this.setState({ loading: false })
                this.goto('loginPage')
            })
            return
        }
        this.setState({ loading: false })
        showToast({ type: 'error', message: apiRequest.message })
    }
    goto = (key, params) => {   // push to the specifies location/key
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key, params))
    }
    render() {
        const { loading } = this.state
        const { dispatch } = this.props
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#eff1f2' }} id={'login-container'}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px', width: '560px', background: '#ffffff', filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.1))' }}>
                    <img src="./assets/website/images/Logo.svg" className="img-fluid" alt="Responsive image" style={{ width: '70px' }} />
                    <h1 className="osb-22 black" style={{ marginTop: '.5em' }}>Rest your Password </h1>
                    <br />
                    <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form} style={{ width: '100%' }}>
                        <label className="form-label oss-16 black">New Password</label>
                        <br />
                        <input type="password" className="form-control osr-13 darkgrey" placeholder="********" name={'new_password'} disabled={loading} required></input>
                        <br />

                        <label className="form-label oss-16 black">Confirm Password</label>
                        <br />
                        <input className="form-control osr-13 darkgrey" type={'password'} name={'confirm_password'} placeholder="********" disabled={loading} required />
                        <br />

                        <button type="submit" className="btn btn-primary oss-13 white green-btn" style={{ width: '100%' }}>Reset</button>
                    </form>
                    <br />
                    <a onClick={() => this.goto('loginPage')}>Try Logging in ?</a>
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
        currentUser: global.currentUser,
        pathname: router.location.pathname,
        otp: global.otp
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword)
