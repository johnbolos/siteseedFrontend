import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"
import { getPushPathWrapper } from "../../../routes"
import request from "../../../request"
import { showToast } from "../../../components/utils"

class RestPassword extends React.Component {
    state = {
        loading: false
    }

    componentDidMount() {
        let { currentUser, dispatch } = this.props
    }
    validateForm = (e) => {
        switch (e.target.name) {
            case 'email':
                if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)) {
                    e.target.setCustomValidity('Please enter a valid Email!')
                } else {
                    e.target.setCustomValidity('')
                }
                break;
            case 'password':
                break;
        }
    }
    getFormData = (form) => {
        const formEntries = new FormData(form).entries();
        return Object.assign(...Array.from(formEntries, ([name, value]) => ({ [name]: value })));
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let data = this.getFormData(e.target)
        if (!data.email.trim()) {
            showToast({ type: 'error', message: 'Invalid email' })
            return
        }
        this.setState({ loading: true })
        const apiRequest = await request.forgotPassword(data)
        console.log(apiRequest, 'sss.p')
        if (apiRequest.messageType == 'error') {
            this.setState({ loading: false })
            showToast({ type: 'error', message: 'Invalid email account' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message }, () => {
            this.setState({ loading: false })
            this.goto('resetPassword.verifyCode', { email: data.email })
        })
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
                <br /><br />
                <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form}>
                    <label>Email</label>
                    <br />
                    <input type={'text'} name={'email'} required onInput={this.validateForm} disabled={loading}/>
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ global, layout, templates, }) => {
    return {
        loading: global.loading,
        theme: layout.theme,
        templates,
        currentUser: global.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestPassword)
