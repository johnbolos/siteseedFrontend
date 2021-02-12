import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"
import { setTokenInfo, setUser } from "../../reducers/actions/userActions"
import { getPushPathWrapper, getUrlParams } from "../../routes"
import { apiUrl } from "../../settings"
import FormSettings from "../siteSettings/formSettings.js"
import FontSettings from "../siteSettings/fontSettings.js"
import CollabSettings from "../siteSettings/collabSettings.js"


class BuyTemplate extends React.Component {
    state = {
        data: null,
        dashboardData: null,
        settingsData: null,
        availableDomainsElem: null
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
        this.apiRequestDashboard()
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
    apiRequestDashboard = async () => {
        let { tokenInfo } = this.props
        if (!tokenInfo.access_token) {
            return
        }
        this.setState({ loading: true })
        const apiRequest = await Request.dashboard()
        this.setState({ loading: false })
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to fetch data, Try Relogging' })
            return
        }
        this.setState({ dashboardData: apiRequest.data })
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
    setFormFields = (changes, form) => {
        // const { form } = this
        _.each(changes, (val, key) => {
            if (!form.elements[key] || val == 'null') {
                return
            }
            if (form.elements[key].type == 'checkbox') {
                form.elements[key].checked = !!val
                return
            }
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
    render() {
        const { dispatch, currentUser } = this.props
        const { dashboardData } = this.state
        return (
            <>
                <div className="admin-main-panel">
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
                                                            <a className="nav-link left-top darkgrey osr-13" >Need Support?</a>
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
                                                                <li><a className="dropdown-item osr-13 darkgrey" data-bs-toggle="modal" data-bs-target="#choose-lang1">Language</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey" >Help Center</a></li>
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
                        {/* <!---------------------------------- Dashboard-Export----------------------------------> */}
                        <section className="dashboard-main">
                            <div className="dashboard-main-inner main-inner">
                                <div className="container">
                                    <div className="row cs-dashboard1">
                                        <div className="col-md-6 col-lg-6 col1">
                                            <ul>
                                                <li><a className="osb-16 turq">Dashboard</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col2">
                                            <ul>
                                                <li className="tw-main"><span className="tw-main-inner"><span className="tw-t oss-13 turq"><span className="num-chng">{dashboardData && (dashboardData.total_user_sites || 0)}</span>/<span className="total-num">{dashboardData && (dashboardData.total_sites || 0)}</span> left</span> <br /> <span className="tw-b osr-11 darkgrey">Total Website</span></span></li>
                                                <li className="ec-main"><span className="ec-main-inner"><span className="ec-t oss-13 turq"><span className="num-chng">{dashboardData && (dashboardData.total_user_exports || 0)}</span><span className="total-num">/{dashboardData && (dashboardData.export_credits || 0)}</span> left</span> <br /> <span className="ec-b osr-11 darkgrey">Export Credits</span></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Dashboard-Export----------------------------------> */}
                        {/* <!---------------------------------- My-sites----------------------------------> */}
                        <section className="my-sites my-sites-templates">
                            <div className="my-sites-inner main-inner">
                                <div className="container">
                                    <div className="row cs-my-sites-templates1">
                                        <div className="col-sm-12 col-md-7 col-lg-7 col1">
                                            <h1 className="my osb-22 black">New template...</h1>
                                        </div>
                                        <div className="col-sm-12 col-md-5 col-lg-5 col2">
                                            <div className="c-new-btn"><button type="button" className="btn btn-outline-primary oss-13 turq"> + View all</button></div>
                                        </div>
                                    </div>
                                    <div className="row cs-my-sites2 white-bg">
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row cs-my-sites-templates1 cs-my-sites-templates1-2">
                                        <div className="col-sm-12 col-md-7 col-lg-7 col1">
                                            <h1 className="my osb-22 black">Free templates</h1>
                                        </div>
                                        <div className="col-sm-12 col-md-5 col-lg-5 col2">
                                            <div className="c-new-btn"><button type="button" className="btn btn-outline-primary oss-13 turq"> + View all</button></div>
                                        </div>
                                    </div>
                                    <div className="row cs-my-sites2 white-bg">
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row cs-my-sites-templates1 cs-my-sites-templates1-3">
                                        <div className="col-sm-12 col-md-7 col-lg-7 col1">
                                            <h1 className="my osb-22 black">Agency templates</h1>
                                        </div>
                                        <div className="col-sm-12 col-md-5 col-lg-5 col2">
                                            <div className="c-new-btn"><button type="button" className="btn btn-outline-primary oss-13 turq"> + View all</button></div>
                                        </div>
                                    </div>
                                    <div className="row cs-my-sites2 white-bg">
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div className="col1-inner">
                                                <div className="restro-bg">
                                                    <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                                                    <div className="shadow-up">
                                                        <div className="shadow-up-inner">
                                                            <span className="osr-13 black white-bg"><a className="black">Live preview</a></span>
                                                            <span className="osr-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#nameyoursite1" ><a className="white">Buy for $46</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col1-content">
                                                    <ul>
                                                        <li className="li-left oss-16 black">Template : <span>Spa {'&'} Wellness</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                                                        <li className="li-right"><span className="oss-13 turq">$46</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /My-sites----------------------------------> */}
                        {/* <!---------------------------------- Name Your Site---------------------------------->			  */}
                        <div className="modal fade nameyoursite" id="nameyoursite1" tabIndex="-1" role="dialog" aria-labelledby="nameyoursite1" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 className="osb-22 black">Name your site</h1>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <form>
                                                    <ul>
                                                        <li className="center">
                                                            <div className="">
                                                                <label htmlFor="re-name" className="form-label oss-16 black">Site Name</label>
                                                                <input type="text" className="form-control osr-13 darkgrey" id="re-name" placeholder="Mysite Copy" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </form>
                                                <p className="osr-13 darkgrey cs-ur-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus, velit ac congue interdum, augue neque gravida sem, sed fermentum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary oss-13 white green-btn">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Name Your Site----------------------------------> */}
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
        tokenInfo: global.tokenInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyTemplate)
