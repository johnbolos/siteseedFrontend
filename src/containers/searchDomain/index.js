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
import LoggedinHeader from '../../layout/loggedinLayouts/header'


class SearchDomain extends React.Component {
    state = {
        data: null,
        dashboardData: null,
        settingsData: null,
        availableDomainsElem: null,
        isFree: false,
        searchQuery: '',
        availableDomainsTemp: [
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
        ],
        availableDomains: []
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
        this.setState({ isFree: this.props.location.state && this.props.location.state.isFree }, () => { })
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
        let { tokenInfo, dispatch } = this.props
        if (!tokenInfo.access_token) {
            return
        }
        dispatch(showLoader())
        const apiRequest = await Request.dashboard()
        dispatch(hideLoader())
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
    apiRequestDomains = async () => {
        const { dispatch } = this.props
        const { searchQuery } = this.state
        if (searchQuery && searchQuery.trim() == '') {
            return
        }
        let data = {
            'search_domain': searchQuery
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        dispatch(showLoader())
        const domains = await Request.getDomainsList(formData)
        dispatch(hideLoader())
        if (!domains.data || !domains.data.domains) {
            showToast({ type: 'error', message: 'Unable to fetch data, Try Relogging' })
            return
        }
        const sort = (arr, query) => {
            arr.sort((a, b) => {
                let matchingA = 0.0
                let matchingB = 0.0
                const queryArr = [...query]
                queryArr.forEach((c, key) => {
                    let include = a.domain.includes(query.substring(0, key + 1))
                    if (include) {
                        let ratio = ((key + 1) - 0) / a.domain.length
                        matchingA = (matchingA > ratio) ? matchingA : ratio
                    }

                    include = a.domain.includes(query.substring(key, query.length))
                    if (include) {
                        let ratio = (query.length - key) / a.domain.length
                        matchingA = (matchingA > ratio) ? matchingA : ratio
                    }

                    include = b.domain.includes(query.substring(0, key + 1))
                    if (include) {
                        let ratio = ((key + 1) - 0) / b.domain.length
                        matchingB = (matchingB > ratio) ? matchingB : ratio
                    }

                    include = b.domain.includes(query.substring(key, query.length))
                    if (include) {
                        let ratio = (query.length - key) / b.domain.length
                        matchingB = (matchingB > ratio) ? matchingB : ratio
                    }
                })
                return matchingB - matchingA
            })
            return arr
        }
        let availableDomains = sort(domains.data.domains, searchQuery)
        let find = availableDomains.findIndex((item) => item.domain == searchQuery)
        if (find != -1) {
            availableDomains.splice(0, 0, availableDomains[find])
            availableDomains.splice(find + 1, 1)
        }
        this.setState({ available: domains.availability_message, availableDomains: availableDomains }, () => {
            this.createAvailableDomainsElem()
        })
    }
    createAvailableDomainsElem = () => {
        const { availableDomains, isFree, available } = this.state
        let resp = (
            <div className="available-domain">
                <p className="osr-16 black">{available}</p>
                <ul>
                    {
                        availableDomains.map(domain => {
                            if (!domain.available) {
                                return null
                            }
                            return (<li>
                                <div className="left">
                                    <p className="ex-left oss-13 black">{domain.domain}</p>
                                    <p className="pr-right">
                                        {/* <span className="p-price osr-13 darkgrey">{domain.actualCost}</span> */}
                                        {/* <span className="c-price oss-13 turq">{domain.reducedCost}*</span> */}
                                        <span className="c-price oss-13 turq">{domain.currency == 'USD' ? "$" : '₹'}{domain.price}</span>
                                    </p>
                                </div>
                                <div className="right">
                                    <button type="button" className="btn btn-primary turq-bg oss-13 white" onClick={() => {
                                        this.buyDomain(domain)
                                    }}>Select {'&'} Continue</button>
                                </div>
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
        this.setState({ availableDomainsElem: resp })
    }
    buyDomain = (domainData) => {
        const { dispatch } = this.props
        dispatch(getPushPathWrapperWithObj('checkout', { ...domainData, name: domainData.domain, type: 'domain' }))
    }
    render() {
        const { dispatch, currentUser, loading } = this.props
        const { dashboardData, isFree } = this.state
        return (
            <>
                {
                    loading && <div className={'backdrop-loading'}>
                        <Icons.Loading style={{ width: '70px', height: '70px' }} className={'searchLoading'} />
                    </div>
                }
                <div className="admin-main-panel login-main">
                    <div className="admin-main-panel-inner">
                        <LoggedinHeader />
                        {/* <!---------------------------------- Free-domain-panel---------------------------------->	 */}
                        <section className="free-domain-main">
                            <div className="free-domain-main-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-md-2 col-lg-2 col-sm-12"></div>
                                        <div className="col col-md-8 col-lg-8 col-sm-12 free-domain">
                                            <div className=" col-inner align-middle">
                                                <div className="free-domain-col">
                                                    <h1 className="osb-32 black">{isFree ? <>Good news! You get a free domain <br /> with this order.</> : 'Search Domains'}</h1>
                                                </div>
                                                <form action={'#'} onSubmit={(e) => {
                                                    e.preventDefault()
                                                    return false
                                                }}>
                                                    <div className="input-group mb-4">
                                                        <input type="search" placeholder="Type the one you want here!" onChange={(e) => { this.setState({ searchQuery: e.target.value }) }} aria-describedby="button-addon5" className="form-control oss-13 darkgrey" />
                                                        <div className="input-group-append">
                                                            <button id="button-addon5" type="submit" className="btn btn-primary turq-bg oss-16 white" onClick={this.apiRequestDomains}>Search</button>
                                                        </div>
                                                    </div>
                                                </form>
                                                {
                                                    isFree ?
                                                        <>
                                                            <p className="osr-13 darkgrey"><a className="osr-13 darkgrey">No thanks. I”ll pass on the freebie.</a></p>
                                                        </>
                                                        :
                                                        null
                                                }
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
        tokenInfo: global.tokenInfo,
        location: router.location,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDomain)
