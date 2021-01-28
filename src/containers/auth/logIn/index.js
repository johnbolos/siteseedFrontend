import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"

class LogIn extends React.Component {
    state = {
        loading: false
    }

    componentDidMount() {
        this.insertGAPIScript()
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
                        this.setState({ loading: false })
                        console.log('logged in sss.p', resp)
                    }
                }
                window.gapi.signin2.render('loginButton', params)
            })
        })
    }
    googleSignOut = () => {
        window.gapi.load('auth2', () => {
            var auth2 = window.gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                console.log('User signed out. sss.p');
            });
        })
    }
    render() {
        const { loading } = this.state
        const { dispatch } = this.props
        return (
            <div>
                <h1>Log into My Account </h1>
                <br />
                {loading && <h3>Loading...</h3>}
                <br />
                <div id="loginButton">Login with Google</div>
                <br /><br />
                <button onClick={this.googleSignOut}>Logout</button>
                <br /><br />
                Or
                <br /><br />

                <label>Email</label>
                <br />
                <input type={'text'} />
                <br /><br />

                <label>Password</label>
                <br />
                <input type={'password'} />
                <br /><br />

                <button type="submit">Log In</button>
                <br /><br />

                <a>Forgot Password</a>
                <br />
                <a>Create Account</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
