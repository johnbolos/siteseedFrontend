import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"
import Request from "../../../request"
import { showToast } from "../../../components/utils"
import { setTokenInfo, setUser } from "../../../reducers/actions/userActions"
import { getPushPathWrapper } from "../../../routes"

class LogIn extends React.Component {
    state = {
        loading: false,
        loggedIn: false
    }

    componentDidMount() {
        // this.insertGAPIScript()
    }
    insertGAPIScript = () => {
        let script = document.createElement('script')
        script.src = 'https://apis.google.com/js/platform.js'
        script.onload = () => {
            this.initialiseGoogleSignIn()
        }
        document.body.appendChild(script)
    }
    initialiseGoogleSignIn = () => {
        this.setState({ loading: true })
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '632446852201-sqagt52raofmiptsdgngh175oi7vtptq.apps.googleusercontent.com',
            })
            console.log('sss.p api initiated')
            window.gapi.load('signin2', () => {
                const params = {
                    onsuccess: (resp) => {
                        this.setState({ loggedIn: true })
                        console.log('logged in sss.p', resp)
                        // get User Data by email
                        // ===========????????? Backend API ??????????==========
                        // login user
                        // this.logInUser(resp, 'google')  // resp = { userInfo, tokenInfo }
                    },
                }
                window.gapi.signin2.render('loginButton', params)
                this.setState({ loading: false })
            })
        })
    }
    googleSignOut = () => {
        window.gapi.load('auth2', () => {
            var auth2 = window.gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                this.setState({ loggedIn: false })
                console.log('User signed out. sss.p');
            });
        })
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
        if (!data.email.trim() || !data.password.trim()) {
            showToast({ type: 'error', message: 'Invalid email or password' })
            return
        }
        this.setState({ loading: true })
        const apiRequest = await Request.login(data)
        this.setState({ loading: false })
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Invalid email or password' })
            return
        }
        this.logInUser(apiRequest, 'backend')
    }
    logInUser = (data, type) => {
        const { dispatch } = this.props
        if (type == 'google') {
            dispatch(setUser(data.userInfo))
            dispatch(setTokenInfo(data.tokenInfo))
        } else if (type == 'backend') {
            // save currentUser and token
            localStorage.setItem('access_token', data.token_information.access_token)
            dispatch(setUser(data.userinfo))
            dispatch(setTokenInfo(data['token_information']))
            // go to dashboard
            this.goto('dashboard')
        }
    }
    goto = (key) => {   // push to the specifies location/key
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key))
    }
    render() {
        const { loading, loggedIn } = this.state
        const { dispatch } = this.props
        return (
            <div>
                <h1>Log into My Account </h1>
                <br />
                {loading && <h3>Loading...</h3>}
                <br />
                <div id="loginButton">Login with Google</div>
                <br /><br />
                {loggedIn && <>
                    <button
                        onClick={this.googleSignOut}
                    >
                        Logout
                    </button>
                    <br /><br />
                </>}
                Or
                <br /><br />

                <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form}>
                    <label>Email</label>
                    <br />
                    <input type={'text'} name={'email'} required onInput={this.validateForm} />
                    <br /><br />

                    <label>Password</label>
                    <br />
                    <input type={'password'} name={'password'} required />
                    <br /><br />

                    <button type="submit">Log In</button>
                </form>
                <br /><br />

                <a onClick={() => this.goto('resetPassword.enterEmail')}>Forgot Password</a>
                <br /><br />
                <a onClick={() => this.goto('createAccount')}>Create Account</a>
            </div>
        )
    }
}

const mapStateToProps = ({ global, layout, templates }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
