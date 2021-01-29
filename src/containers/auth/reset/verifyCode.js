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

    componentDidMount() {
        let { currentUser, dispatch } = this.props
        this.setState({ email: getUrlParams('resetPassword.verifyCode', this.props.pathname).email })
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
            <div>
                <h1>Check your Email</h1>
                <br />
                <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form}>
                    <label>***_***</label>
                    <br />
                    <input type={'text'} name={'otp'} required />
                    <br /><br />
                    <button type="submit">Verify</button>
                </form>
                <br />
                <p>I didn't recive the email?</p>
                <br />
                <a onClick={() => this.goto('loginPage')}>Login Page</a>
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
