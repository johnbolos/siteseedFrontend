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

    componentDidMount() {
        let { currentUser, dispatch } = this.props
        this.setState({ email: getUrlParams('resetPassword.setPassword', this.props.pathname).email })
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
        }else if (!data.confirm_password.trim()) {
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
            <div>
                <h1>Rest your Password</h1>
                <br />

                <label>New Password</label>
                <br />
                <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form}>
                    <input type={'password'} name={'new_password'} required disabled={loading} />
                    <br /><br />

                    <label>Confirm Password</label>
                    <br />
                    <input type={'password'} name={'confirm_password'} required disabled={loading} />
                    <br /><br />

                    <button type="submit">Reset</button>
                </form>
                <br /><br />
                <a>try Logging in</a>
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
