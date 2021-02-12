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


class SearchDomain extends React.Component {
    state = {
        data: null,
        dashboardData: null,
        settingsData: null,
        availableDomainsElem: null,
        availableDomains: [
            {
                domain: 'example.com',
                actualCost: '$20.00',
                reducedCost: '$15.00'
            },
            {
                domain: 'example.com',
                actualCost: '$20.00',
                reducedCost: '$15.00'
            },
            {
                domain: 'example.com',
                actualCost: '$20.00',
                reducedCost: '$15.00'
            },
            {
                domain: 'example.com',
                actualCost: '$20.00',
                reducedCost: '$15.00'
            }
        ]
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
        this.createAvailableDomainsElem()
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
    createAvailableDomainsElem = () => {
        const { availableDomains } = this.state
        let resp = (
            <div className="available-domain">
                <p className="osr-16 black">Yes! Your domain is available. And guess what? It's free.</p>
                <ul>
                    {
                        availableDomains.map(domain => (
                            <li>
                                <div className="left">
                                    <p className="ex-left oss-13 black">{domain.domain}</p>
                                    <p className="pr-right">
                                        <span className="p-price osr-13 darkgrey">{domain.actualCost}</span>
                                        <span className="c-price oss-13 turq">{domain.reducedCost}*</span>
                                    </p>
                                </div>
                                <div className="right">
                                    <button type="button" className="btn btn-primary turq-bg oss-13 white">Select {'&'} Continue</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
        this.setState({ availableDomainsElem: resp })
    }
    render() {
        const { dispatch, currentUser } = this.props
        const { dashboardData } = this.state
        return (
            <>
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
                                                    <a className="navbar-brand"><img src="./assets/website/images/Logo.svg" className="img-fluid" alt="Responsive image" /></a>
                                                    {/* <!--<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                          <span className="navbar-toggler-icon"></span>
                                          </button>
                                          <div className="collapse navbar-collapse" id="navbarSupportedContent" style="display:none;">
                                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                          <li className="nav-item">
                                           <a className="nav-link active" aria-current="page">Home</a>
                                          </li>
                                          <li className="nav-item">
                                           <a className="nav-link">Link</a>
                                          </li>
                                          <li className="nav-item dropdown">
                                           <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                          Dropdown
                                           </a>
                                           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                          <li><a className="dropdown-item">Action</a></li>
                                          <li><a className="dropdown-item">Another action</a></li>
                                          <li><hr className="dropdown-divider"></li>
                                          <li><a className="dropdown-item">Something else here</a></li>
                                           </ul>
                                          </li>
                                          <li className="nav-item">
                                           <a className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
                                          </li>
                                          </ul>
                                          </div>--> */}
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
                        {/* <!---------------------------------- Free-domain-panel---------------------------------->	 */}
                        <section className="free-domain-main">
                            <div className="free-domain-main-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-md-2 col-lg-2 col-sm-12"></div>
                                        <div className="col col-md-8 col-lg-8 col-sm-12 free-domain">
                                            <div className=" col-inner align-middle">
                                                <div className="free-domain-col">
                                                    <h1 className="osb-32 black">Good news! You get a free domain <br /> with this order.</h1>
                                                </div>
                                                <form action="">
                                                    <div className="input-group mb-4">
                                                        <input type="search" placeholder="Type the one you want here!" aria-describedby="button-addon5" className="form-control oss-13 darkgrey" />
                                                        <div className="input-group-append">
                                                            <button id="button-addon5" type="submit" className="btn btn-primary turq-bg oss-16 white">Search</button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <p className="osr-13 darkgrey"><a className="osr-13 darkgrey">No thanks. I”ll pass on the freebie.</a></p>
                                                {
                                                    this.state.availableDomainsElem
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
        tokenInfo: global.tokenInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDomain)
