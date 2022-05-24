import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"
import { setTokenInfo, setUser } from "../../reducers/actions/userActions"
import { getPushPathWrapper, getPushPathWrapperWithObj, getUrlParams } from "../../routes"
import { apiUrl } from "../../settings"
import FormSettings from "../siteSettings/formSettings.js"
import FontSettings from "../siteSettings/fontSettings.js"
import CollabSettings from "../siteSettings/collabSettings.js"
import Icons from "../../assets/Icons"
import { hideLoader, showLoader } from "../../reducers/actions"
import './index.scss'


class BetaCodeGenerator extends React.Component {
    state = {
        data: null,
        settingsData: null,
        availableBetaUsersElem: null,
        security_code: 'Code',
        emailQuery: '',
        availableBetaUsersTemp: [
            {
                email: 'example1.com',
                code: 'qwerty'
            },
            {
                email: 'example2.com',
                code: 'qwertyu'
            },
            {
                email: 'example3.com',
                code: 'qwertyui'
            },
        ],
        availableBetaUsers: []
    }
    scriptArray = [
        // {
        //     src: "./assets/website/js/jquery.min.js"
        // },
        // {
        //     src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js",
        //     // integrity: "sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU",
        //     crossorigin: "anonymous"
        // },
        // {
        //     src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js",
        //     // integrity: "sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj",
        //     crossorigin: "anonymous"
        // },
        // {
        //     src: './assets/website/js/zangdar.min.js'
        // },
        {
            innerHTML: `
            $(document).ready(function() {
            $('select').niceSelect();
            });
            `
        },
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
    ]
    componentDidMount() {
        this.loadScriptNStyle()
        // this.apiRequestGetBetaUsers()
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
    logout = () => {
        const { dispatch } = this.props
        Request.logout().then((apiRequest) => {
            localStorage.removeItem('access_token')
            dispatch(setUser(null))
            dispatch(setTokenInfo({}))
            this.goto('loginPage')
        })
    }
    goto = (key, params = {}) => {   // push to the specifies location/key
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key, params))
    }
    componentWillUnmount() {
        document.querySelectorAll('#ss-script-load').forEach(e => e.remove())
        document.querySelectorAll('#ss-styles-load').forEach(e => e.remove())
    }
    set = (key, value) => {
        this.setState({ [key]: value })
    }
    apiRequestGenerateCode = async () => {
        const { dispatch } = this.props
        const { emailQuery } = this.state
        if ((emailQuery && emailQuery.trim() == '') || !(/^[^\s@]+@[^\s@]+$/.test(emailQuery))) {
            showToast({ type: 'error', message: 'Please enter a valid email!' })
            return
        }
        let data = {
            'email': emailQuery
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        dispatch(showLoader())
        const apiRequest = await Request.generateCode(formData)
        dispatch(hideLoader())
        if (apiRequest.error || !apiRequest.security_code) {
            showToast({ type: 'error', message: 'Unable to fetch data, Try Relogging' })
            return
        }
        if (apiRequest.security_code == 'This user already have a security code.') {
            showToast({ type: 'error', message: apiRequest.security_code })
            return
        }
        this.setState({ security_code: apiRequest.security_code }, () => {
            // this.apiRequestGetBetaUsers()
        })
    }
    apiRequestGetBetaUsers = () => {

        this.createAvailableBetaUsersElem()
    }
    createAvailableBetaUsersElem = () => {
        const { availableBetaUsers, availableBetaUsersTemp } = this.state
        let resp = (
            <div className="available-domain" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ul>
                    {
                        availableBetaUsersTemp.map(user => {
                            return (<li>
                                <div className="left">
                                    <p className="ex-left oss-13 black">{user.email}</p>
                                </div>
                                <div className="right">
                                    <button type="button" className="btn btn-primary turq-bg oss-13 white" onClick={() => {
                                        navigator.clipboard.writeText(user.code)
                                        showToast({ type: 'success', message: 'Copied to clipboard' })
                                    }}>
                                        {user.code}
                                    </button>
                                </div>
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
        this.setState({ availableBetaUsersElem: resp })
    }
    render() {
        const { dispatch, currentUser, loading } = this.props
        const { security_code } = this.state
        return (
            <>
                {
                    loading && <div className={'backdrop-loading'}>
                        <Icons.Loading style={{ width: '70px', height: '70px' }} className={'searchLoading'} />
                    </div>
                }
                <div className="admin-main-panel login-main">
                    <div className="admin-main-panel-inner">
                        {/* <!----------------------------------Top-Bar----------------------------------> */}
                        <section className="topbar-main">
                            <div className="topbar-main-inner main-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 ">
                                            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                                                <div className="container-fluid">
                                                    <a className="navbar-brand" onClick={() => { this.goto('dashboard') }}><img src="./assets/website/images/Logo.svg" className="img-fluid" alt="Responsive image" /></a>
                                                    <ul className="nav cs-topright">
                                                        <li className="nav-item cs-topright-left">
                                                            <a className="nav-link left-top darkgrey osr-13">Need Support?</a>
                                                        </li>
                                                        <li className="nav-item cs-topright-right">
                                                            {/* <img src="./assets/website/images/Greg-jacoby.png" className="img-fluid" alt="Responsive image" /> */}
                                                            {
                                                                currentUser.profile_picture ? (
                                                                    <img src={currentUser.profile_picture} className="img-fluid" alt="Responsive image"
                                                                        style={{
                                                                            float: 'left',
                                                                            height: '35px',
                                                                            width: '35px',
                                                                            marginRight: '10px',
                                                                            color: '#31cdb9',
                                                                            borderRadius: '50%'
                                                                        }}
                                                                    />
                                                                ) : (
                                                                    <i
                                                                        className="fa fa-user-circle-o"
                                                                        aria-hidden="true"
                                                                        style={{
                                                                            float: 'left',
                                                                            fontSize: '35px',
                                                                            marginRight: '10px',
                                                                            color: '#31cdb9',
                                                                        }}
                                                                    ></i>
                                                                )
                                                            }
                                                            <a className="nav-link dropdown-toggle right-top black osr-13" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                {currentUser.display_name || currentUser.first_name}
                                                                {/* Greg Jacoby */}
                                                            </a>
                                                            <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                                <li><a className="dropdown-item osr-13 darkgrey" onClick={() => { this.goto('profile', { activeTab: 'details' }) }}>Profile</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey" onClick={() => { this.goto('profile', { activeTab: 'account' }) }}>Account {'&'} Security</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey" onClick={() => { this.goto('profile', { activeTab: 'notification' }) }}>Notifications</a></li>
                                                                {/* <li><a className="dropdown-item osr-13 darkgrey" data-bs-toggle="modal" data-bs-target="#choose-lang1">Language</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey" >Help Center</a></li> */}
                                                                <li><a className="dropdown-item osr-13 darkgrey" onClick={this.logout}>Log Out</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Top-Bar----------------------------------> */}
                        {/* <!---------------------------------- Free-domain-panel---------------------------------->	 */}
                        <section className="free-domain-main">
                            <div className="free-domain-main-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-md-2 col-lg-2 col-sm-12"></div>
                                        <div className="col col-md-8 col-lg-8 col-sm-12 free-domain">
                                            <div className=" col-inner align-middle">
                                                <div className="free-domain-col">
                                                    <h1 className="osb-32 black">Beta Code Generator</h1>
                                                </div>
                                                <form action={'#'} onSubmit={(e) => {
                                                    e.preventDefault()
                                                    return false
                                                }}>
                                                    <div className="input-group mb-4">
                                                        <input type="search" placeholder="Enter Email" onChange={(e) => { this.setState({ emailQuery: e.target.value }) }} aria-describedby="button-addon5" className="form-control oss-13 darkgrey" />
                                                        <div className="input-group-append">
                                                            <button id="button-addon5" type="submit" className="btn btn-primary turq-bg oss-16 white" onClick={this.apiRequestGenerateCode}>Generate</button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className={'generated-beta-code'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <h1 onClick={() => {
                                                        if (security_code == 'Code' || !security_code || security_code == '') {
                                                            return
                                                        }
                                                        navigator.clipboard.writeText(security_code)
                                                        showToast({ type: 'success', message: 'Copied to clipboard' })
                                                    }}>{security_code}</h1>
                                                </div>
                                                {
                                                    this.state.availableBetaUsersElem
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-lg-2 col-sm-12"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Free-domain-panel---------------------------------->															 */}
                    </div>
                </div>
            </>
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
        tokenInfo: global.tokenInfo,
        location: router.location,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BetaCodeGenerator)
