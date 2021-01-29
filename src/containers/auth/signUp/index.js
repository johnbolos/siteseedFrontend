import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"
import { getPushPathWrapper } from "../../../routes"
import request from "../../../request"
import { showToast } from "../../../components/utils"

class CreateAccount extends React.Component {
    state = {
        loading: false
    }

    componentDidMount() {
        let { currentUser, dispatch } = this.props
    }
    setFormFields = (changes) => {
        const { form } = this
        _.each(changes, (val, key) => {
            form.elements[key].value = val
        })
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
        if (!data.first_name.trim() || !data.email.trim() || !data.password.trim()) {
            showToast({ type: 'error', message: 'Invalid name/email/password' })
            return
        }
        this.setState({ loading: true })
        const apiRequest = await request.signup(data)
        this.setState({ loading: false })
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message })
            return
        }
        this.goto('loginPage')
    }
    goto = (key) => {   // push to the specifies location/key
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key))
    }
    render() {
        const { } = this.state
        const { dispatch } = this.props
        return (
            <div>
                <h1>Create You Account</h1>
                <br /><br />
                <a>Sign in with Google</a>
                <br /><br />
                Or
                <br /><br />

                <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form}>
                    <label>First Name</label>
                    <br />
                    <input type={'text'} name={'first_name'} required />
                    <br /><br />

                    <label>Last Name</label>
                    <br />
                    <input type={'text'} name={'last_name'} />
                    <br /><br />

                    <label>Email</label>
                    <br />
                    <input type={'text'} name={'email'} required onInput={this.validateForm} />
                    <br /><br />

                    <label>Password</label>
                    <br />
                    <input type={'password'} name={'password'} required />
                    <br /><br />

                    <button type="submit">Create Account</button>
                </form>
                <br /><br />

                <a onClick={() => this.goto('loginPage')}>Sign In</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
