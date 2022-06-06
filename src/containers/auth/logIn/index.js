import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"
import Request from "../../../request"
import { showToast } from "../../../components/utils"
import { setS3Dir, setTokenInfo, setUser } from "../../../reducers/actions/userActions"
import { getPushPathWrapper } from "../../../routes"
import { apiUrl } from "../../../settings"

class LogIn extends React.Component {
    state = {
        loading: false,
        loggedIn: false
    }
    scriptArray = [
    ]
    styleArray = [
        // {
        //     href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
        //     rel: "stylesheet",
        //     // integrity: "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",
        //     crossorigin: "anonymous",
        // },
        // {
        //     rel: "stylesheet",
        //     href: "./assets/website/css/jquery-ui.css"
        // },
        // {
        //     rel: "stylesheet",
        //     href: "./assets/website/css/nice-select.css"
        // },
        // {
        //     rel: "stylesheet",
        //     href: "./assets/website/css/style.css"
        // },
        // {
        //     rel: "stylesheet",
        //     href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        // },
    ]

    componentDidMount() {
        // this.insertGAPIScript()
        this.loadScriptNStyle()
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
            if (data.userinfo.profile_picture) { data.userinfo.profile_picture = apiUrl + data.userinfo.profile_picture }
            console.log(data, 'sss.p login')
            dispatch(setUser(data.userinfo))
            dispatch(setS3Dir(data.userinfo.custID))
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
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#eff1f2' }} id={'login-container'}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px', width: '560px', background: '#ffffff', filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.1))' }}>
                    <img src="./assets/website/images/Logo.svg" className="img-fluid" alt="Responsive image" style={{ width: '70px' }} />
                    <h1 className="osb-22 black" style={{ marginTop: '.5em' }}>Log into My Account </h1>
                    {/* {loading && <h3>Loading...</h3>} */}
                    {/* <br />
                    <div id="loginButton">Login with Google</div>
                    <br />
                    {loggedIn && <>
                        <button
                            onClick={this.googleSignOut}
                        >
                            Logout
                    </button>
                        <br />
                    </>}
                    <p style={{ background: '#fff', zIndex: 1 }}>Or</p>
                    <hr style={{ width: '100%', marginTop: '-22px' }} /> */}
                    <br />
                    <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form} style={{ width: '100%' }}>
                        <label className="form-label oss-16 black">Email</label>
                        <br />
                        <input type="text" className="form-control osr-13 darkgrey" placeholder="Email Address" name={'email'} required onInput={this.validateForm}></input>
                        <br />

                        <label className="form-label oss-16 black">Password</label>
                        <br />
                        <input className="form-control osr-13 darkgrey" type={'password'} name={'password'} placeholder="********" required />
                        <br />

                        <button type="submit" className="btn btn-primary oss-13 white green-btn" style={{ width: '100%' }}>Log In</button>
                    </form>
                    <br />

                    <a onClick={() => this.goto('resetPassword.enterEmail')}>Forgot Password ?</a>
                    <p style={{ margin: '10px 0px' }}></p>
                    <a onClick={() => this.goto('createAccount')} style={{ color: '#31CDB9' }}>Create Account</a>
                </div>
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
