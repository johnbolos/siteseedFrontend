import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"
import { getPushPathWrapper } from "../../../routes"
import request from "../../../request"
import { showToast } from "../../../components/utils"
import Icons from "../../../assets/Icons"
import { hideLoader, showLoader } from "../../../reducers/actions"

class RestPassword extends React.Component {
    state = {
        loading: false
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
        const { dispatch } = this.props
        e.preventDefault()
        let data = this.getFormData(e.target)
        if (!data.email.trim()) {
            showToast({ type: 'error', message: 'Invalid email' })
            return
        }
        this.setState({ loading: true })
        dispatch(showLoader())
        const apiRequest = await request.forgotPassword(data)
        console.log(apiRequest, 'sss.p')
        if (apiRequest.messageType == 'error') {
            this.setState({ loading: false })
            dispatch(hideLoader())
            showToast({ type: 'error', message: 'Invalid email account' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message }, () => {
            this.setState({ loading: false })
            dispatch(hideLoader())
            this.goto('resetPassword.verifyCode', { email: data.email })
        })
    }
    goto = (key, params) => {   // push to the specifies location/key
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key, params))
    }
    render() {
        const { dispatch, loading } = this.props
        return (<>
            {
                loading && <div className={'backdrop-loading'}>
                    <Icons.Loading style={{ width: '70px', height: '70px' }} className={'searchLoading'} />
                </div>
            }
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#eff1f2' }} id={'login-container'}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px', width: '560px', background: '#ffffff', filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.1))' }}>
                    <img src="./assets/website/images/Logo.svg" className="img-fluid" alt="Responsive image" style={{ width: '70px' }} />
                    <h1 className="osb-22 black" style={{ marginTop: '.5em' }}>Rest your Password </h1>
                    <br />
                    <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form} style={{ width: '100%' }}>
                        <label className="form-label oss-16 black">Email</label>
                        <br />
                        <input type="text" className="form-control osr-13 darkgrey" placeholder="Email Address" name={'email'} required onInput={this.validateForm}></input>
                        <br />

                        <button type="submit" className="btn btn-primary oss-13 white green-btn" style={{ width: '100%' }}>Submit</button>
                    </form>
                    <br />
                </div>
            </div>
        </>
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
