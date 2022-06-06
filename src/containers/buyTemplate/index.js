import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import Request from '../../request'
import { openTemplateInEditor, showToast, staticJSONContent, uploadSiteJSONObj, uploadStaticTemplateForPreview } from "../../components/utils"
import moment from "moment"
import { setTokenInfo, setUser } from "../../reducers/actions/userActions"
import { getPushPathWrapper, getPushPathWrapperWithObj, getUrlParams } from "../../routes"
import { apiUrl } from "../../settings"
import './index.scss'
import { selectTemplate, setCurrentTemplate } from "../../reducers/actions/templateActions"
import { hideLoader, showLoader } from "../../reducers/actions"

import LoggedinHeader from '../../layout/loggedinLayouts/header'

class BuyTemplate extends React.Component {
    state = {
        data: null,
        dashboardData: null,
        settingsData: null,
        availableDomainsElem: null,
        site_id: null
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
        // {
        //     innerHTML: `
        //     $(document).ready(function() {
        //     $('select').niceSelect();
        //     });
        //     `
        // },
    ]
    styleArray = [
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
            rel: "stylesheet",
            // integrity: "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",
            crossorigin: "anonymous",
        },
        {
            href: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css',
            rel: "stylesheet"
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
        this.setState({ site_id: getUrlParams('buyTemplate', this.props.pathname).siteId }, () => {
            if (!this.state.site_id) {
                this.goto('dashboard')
            }
            this.apiRequestDashboard()
            this.getTemplatesData()
        })
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
    getTemplatesData = async () => {
        
        const { dispatch } = this.props
        dispatch(showLoader())
        const apiRequest = await Request.getTemplates()
        dispatch(hideLoader())

        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to get Templates, try again later' })
            return
        }
        this.setState({ templatesData: apiRequest.templates }, () => {
            this.createTemplates()
        })
    }
    createTemplates = () => {
        const { templatesData } = this.state
        let resp = null
        let purchasedTemplates = templatesData.filter(t => t.is_purchased == 'Yes')
        let freeTemplates = templatesData.filter(t => (t.template_type == 'Free' && t.is_purchased == 'No'))
        let paidTemplates = templatesData.filter(t => (t.template_type == 'Paid' && t.is_purchased == 'No'))
        purchasedTemplates = purchasedTemplates.map((template, key) => {
            return (<div className="col-sm-12 col-md-3 col-lg-3 col1" key={key}>
                <div className="col1-inner" style={{ height: '100%' }}>
                    <div className="restro-bg" style={{ height: '80%' }}>
                        {/* <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" /> */}
                        <img src={`${apiUrl + template.thumbnail}`} className="img-fluid " alt="Responsive image" style={{ boxShadow: '0 2px 6px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)', height: '100%' }} />
                        <div className="shadow-up">
                            <div className="shadow-up-inner">
                                <span className="osr-13 black white-bg" onClick={() => { window.open(template.path, '_blank') }}><a className="black">Live preview</a></span>
                                <span className="osr-13 white turq-bg" onClick={() => { this.linkTemplateNOpemTemplate(template) }}>
                                    <a className="white">
                                        Use in Editor
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col1-content">
                        <ul>
                            <li className="li-left oss-16 black">Template : <span>{template.name}</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                            <li className="li-right"><span className="oss-13 turq">${template.price}</span></li>
                        </ul>
                    </div>
                </div>
            </div>)
        })
        freeTemplates = freeTemplates.map((template, key) => {
            return (<div className="col-sm-12 col-md-3 col-lg-3 col1" key={key}>
                <div className="col1-inner" style={{ height: '100%' }}>
                    <div className="restro-bg" style={{ height: '80%' }}>
                        {/* <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" /> */}
                        <img src={`${apiUrl + template.thumbnail}`} className="img-fluid " alt="Responsive image" style={{ boxShadow: '0 2px 6px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)', height: '100%' }} />
                        <div className="shadow-up">
                            <div className="shadow-up-inner">
                                <span className="osr-13 black white-bg" onClick={() => { window.open(template.path, '_blank') }}><a className="black">Live preview</a></span>
                                <span className="osr-13 white turq-bg" onClick={() => { this.linkTemplateNOpemTemplate(template) }}>
                                    <a className="white">
                                        Use in Editor
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col1-content">
                        <ul>
                            <li className="li-left oss-16 black">Template : <span>{template.name}</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                            <li className="li-right"><span className="oss-13 turq">${template.price}</span></li>
                        </ul>
                    </div>
                </div>
            </div>)
        })
        paidTemplates = paidTemplates.map((template, key) => {
            return (<div className="col-sm-12 col-md-3 col-lg-3 col1" key={key}>
                <div className="col1-inner" style={{ height: '100%' }}>
                    <div className="restro-bg" style={{ height: '80%' }}>
                        {/* <img src="./assets/website/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" /> */}
                        <img src={`${apiUrl + template.thumbnail}`} className="img-fluid " alt="Responsive image" style={{ boxShadow: '0 2px 6px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)', height: '100%' }}/>
                        <div className="shadow-up">
                            <div className="shadow-up-inner">
                                <span className="osr-13 black white-bg" onClick={() => { window.open(template.path, '_blank') }}><a className="black">Live preview</a></span>
                                <span className="osr-13 white turq-bg" onClick={() => { this.buyTemplate(template) }}><a className="white">Buy for ${template.price}</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col1-content">
                        <ul>
                            <li className="li-left oss-16 black">Template : <span>{template.name}</span> <br /> <span className="template-prize darkgrey osr-11">Regular License</span></li>
                            <li className="li-right"><span className="oss-13 turq">${template.price}</span></li>
                        </ul>
                    </div>
                </div>
            </div>)
        })
        this.setState({ freeTemplatesElem: freeTemplates, paidTemplatesElem: paidTemplates, purchasedTemplatesElem: purchasedTemplates })
    }
    buyTemplate = (templateData) => {
        const { dispatch } = this.props
        const { site_id } = this.state
        dispatch(getPushPathWrapperWithObj('checkout', { ...templateData, site_id }))
    }
    linkTemplateNOpemTemplate = async (template) => {
        const { site_id } = this.state
        const { dispatch } = this.props
        dispatch(showLoader())
        let data = {
            site_id,
            template_id: template.template_id
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.linkTemplateToSite(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to link Template, try again later' })
            return
        }
        this.openTemplate(template)
    }
    openTemplate = async (meta) => {
        const { site_id } = this.state
        const { dispatch, s3Dir, pagesStore, currentUser } = this.props
        const staticJSON = staticJSONContent(meta.name)
        const upload = await uploadSiteJSONObj({ ...staticJSON, headerJSON: '', socialJSON: '', footerJSON: '', 'index.html': '', css: { 'index.css': '' }, pageManager: [] }, site_id)
        if (upload.error) {
            showToast({ type: 'error', message: 'Unable to initiate cloud storage, try again later' })
            return
        }
        // Upload static template content to s3 for preview
        uploadStaticTemplateForPreview({ projectType: meta.name, s3Dir, dispatch, pagesStore, currentUser, projectId: site_id })

        meta.site_id = site_id
        meta.content_path = upload.path
        openTemplateInEditor(meta, dispatch)
    }
    render() {
        const { dispatch, currentUser, loading } = this.props
        const { dashboardData, paidTemplatesElem, freeTemplatesElem, purchasedTemplatesElem } = this.state
        return (
            <>
                <div className="admin-main-panel">
                    <div className="admin-main-panel-inner">
                        <LoggedinHeader />
                        {/* <!---------------------------------- /Dashboard-Export----------------------------------> */}
                        {/* <!---------------------------------- My-sites----------------------------------> */}
                        <section className="my-sites my-sites-templates">
                            <div className="my-sites-inner main-inner">
                                <div className="container">
                                    {(purchasedTemplatesElem && purchasedTemplatesElem.length) ? <>
                                        <div className="row cs-my-sites-templates1">
                                            <div className="col-sm-12 col-md-7 col-lg-7 col1">
                                                <h1 className="my osb-22 black">Purchased templates</h1>
                                            </div>
                                            {/* <div className="col-sm-12 col-md-5 col-lg-5 col2">
                                                <div className="c-new-btn"><button type="button" className="btn btn-outline-primary oss-13 turq"> + View all</button></div>
                                            </div> */}
                                        </div>
                                        <div className={`row cs-my-sites2 white-bg ${loading ? 'loading' : ''}`}>
                                            {
                                                purchasedTemplatesElem
                                            }
                                        </div>
                                    </> : null}
                                    {(freeTemplatesElem && freeTemplatesElem.length) ? <>
                                        <div className="row cs-my-sites-templates1">
                                            <div className="col-sm-12 col-md-7 col-lg-7 col1">
                                                <h1 className="my osb-22 black">Free templates</h1>
                                            </div>
                                            {/* <div className="col-sm-12 col-md-5 col-lg-5 col2">
                                                <div className="c-new-btn"><button type="button" className="btn btn-outline-primary oss-13 turq"> + View all</button></div>
                                            </div> */}
                                        </div>
                                        <div className={`row cs-my-sites2 white-bg ${loading ? 'loading' : ''}`}>
                                            {
                                                freeTemplatesElem
                                            }
                                        </div>
                                    </> : null}
                                    {(paidTemplatesElem && paidTemplatesElem.length) ? <>
                                        <div className="row cs-my-sites-templates1 cs-my-sites-templates1-2">
                                            <div className="col-sm-12 col-md-7 col-lg-7 col1">
                                                <h1 className="my osb-22 black">Paid templates</h1>
                                            </div>
                                            {/* <div className="col-sm-12 col-md-5 col-lg-5 col2">
                                                <div className="c-new-btn"><button type="button" className="btn btn-outline-primary oss-13 turq"> + View all</button></div>
                                            </div> */}
                                        </div>
                                        <div className={`row cs-my-sites2 white-bg ${loading ? 'loading' : ''}`}>
                                            {
                                                paidTemplatesElem
                                            }
                                        </div>
                                    </> : null}
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

const mapStateToProps = ({ global, layout, templates, router, pageReducer }) => {
    return {
        loading: global.loading,
        theme: layout.theme,
        templates,
        currentUser: global.currentUser,
        pathname: router.location.pathname,
        tokenInfo: global.tokenInfo,
		pagesStore: pageReducer,
		s3Dir: global.userS3Dir,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyTemplate)
