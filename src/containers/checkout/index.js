import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"
import { confetti } from 'dom-confetti'

import './index.scss'
import Request from '../../request'
import { openTemplateInEditor, showToast, uploadSiteJSONObj, staticJSONContent, uploadStaticTemplateForPreview } from "../../components/utils"
import moment from "moment"
import { setTokenInfo, setUser } from "../../reducers/actions/userActions"
import { getPushPathWrapper, getUrlParams } from "../../routes"
import { apiUrl } from "../../settings"
import BillingInfo from "./billingInformation"
import { ReactComponent as CircleTick } from "../../assets/website/icons/circleTick.svg";
import { ReactComponent as Domain } from "../../assets/website/icons/domain.svg";
import { hideLoader, showLoader } from "../../reducers/actions"
import Icons from "../../assets/Icons"


class CheckoutDomains extends React.Component {
    state = {
        data: null,
        settingsData: null,
        chooseMonthSelect: 'Select in months',
        chooseCountrySelect: 'Afghanistan',
        selectedCountryCode: '91',
        orderData: null,
        orderType: 'template',
        formWidth: '945px',
        promoLoading: false,
        promoApplied: false,
        discount: 0
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
            function buildStepsBreadcrumb (wizard, element, steps) {
             const $steps = document.getElementById(element)
             $steps.innerHTML = ''
             for (let label in steps) {
               if (steps.hasOwnProperty(label)) {
                 const $li = document.createElement('li')
                 const $a = document.createElement('a')
                 $li.classList.add('nav-item')
                 $a.classList.add('nav-link')
                 if (steps[label].active) {
                   $a.classList.add('active')
                 }
                 $a.setAttribute('href', '#')
                 $a.innerText = label
                 $a.addEventListener('click', e => {
                   e.preventDefault()
                //    const currentIndex = wizard.currentIndex
                //    let destinationStep = wizard.steps.find(stp => stp.label == e.target.textContent)
                //    if (destinationStep.index < currentIndex) {
                //         wizard.revealStep(label)
                //    }
                 })
                 $li.appendChild($a)
                 $steps.appendChild($li)
               }
             }
            }
            
            function onStepChange(wizard, selector) {
               const steps = wizard.getBreadcrumb()
               buildStepsBreadcrumb(wizard, selector, steps)
            }
            
            setTimeout(() => {
                const wizard = new window.Zangdar('#wizard', {
                    onStepChange: () => {
                        onStepChange(wizard, 'steps-native')
                    },
                    onSubmit(e) {
                        e.preventDefault()
                        console.log(e.target.elements)
                        return false
                    }
                })
                onStepChange(wizard, 'steps-native')
                document.querySelector('.backdrop-loading.dom-trigger.show').classList.remove('show')
            }, 2000)
            
            `
        },
        {
            innerHTML: `
            $(document).ready(function() {
            $('select').niceSelect();
            });
            `
        },
        {
            innerHTML: `
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
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
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        },
    ]
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
    componentDidMount() {
        this.loadScriptNStyle()
        if (!this.props.location.state) {
            this.goto('dashboard')
        }
        this.setState({ orderData: this.props.location.state }, () => {
            this.setState({ orderPrice: this.state.orderData.price, orderType: this.state.orderData.type && this.state.orderData.type == 'domain' ? "domain" : "template" })
        })
    }
    componentWillUnmount() {
        document.querySelectorAll('#ss-script-load').forEach(e => e.remove())
        document.querySelectorAll('#ss-styles-load').forEach(e => e.remove())
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
    goto = (key, params = {}) => {
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key, params))
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
    handlePromoCodeSubmit = async (value) => {
        let { orderData, orderPrice } = this.state
        this.setState({ promoLoading: true })
        let data = {
            code: value
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.checkPromoCode(formData)
        this.setState({ promoLoading: false })
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message })
            return
        }
        orderPrice = (orderPrice).toFixed(2) - (apiRequest.data.discount).toFixed(2)
        if (orderPrice < 0) {
            orderPrice = 0
        }
        // confetti(document.querySelector('.Toastify'), {
        //     angle: 90,
        //     spread: 360,
        //     startVelocity: 40,
        //     elementCount: 70,
        //     dragFriction: 0.12,
        //     duration: "9050",
        //     stagger: "8",
        //     width: "10px",
        //     height: "10px",
        //     perspective: "500px",
        //     colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        //   })
        this.setState({ orderPrice, promoApplied: true, discount: apiRequest.data.discount }, () => {
            showToast({ type: 'success', message: 'Promo Applied' })
        })
    }
    purchaseTemplate = (card) => {
        return new Promise(async (resolve) => {
            const { dispatch } = this.props
            const { orderData, orderPrice, discount } = this.state
            dispatch(showLoader())
            let data = {
                site_id: `${orderData.site_id}`,
                template_id: `${orderData.template_id}`,
                template_name: orderData.name,
                card_id: `${card.id}`,
                subtotal: (orderData.price).toFixed(2),
                promo_code: document.getElementById('promo-code-input').value,
                total: (orderPrice).toFixed(2),
                discount: discount
            }
            let formData = new FormData()
            _.each(data, (val, key) => {
                formData.append(key, val)
            })
            dispatch(hideLoader())

            const apiRequest = await Request.purchaseTemplate(formData)
            dispatch(hideLoader())
            if (apiRequest.messageType && apiRequest.messageType == 'error') {
                showToast({ type: 'error', message: 'An Error occured in processing, please try again!' })
                return resolve({ error: true })
            }
            return resolve({ error: false })
        })
    }
    purchaseDomain = (card) => {
        return new Promise(async (resolve) => {
            const { dispatch } = this.props
            const { orderData, orderPrice, discount } = this.state
            dispatch(showLoader())
            let data = {
                domain: orderData.domain,
                cardID: card.id
            }
            let formData = new FormData()
            _.each(data, (val, key) => {
                formData.append(key, val)
            })
            const apiRequest = await Request.purchaseDomain(formData)
            dispatch(hideLoader())
            if (apiRequest.messageType && apiRequest.messageType == 'error') {
                showToast({ type: 'error', message: (apiRequest.data && apiRequest.data.message) || 'An Error occured in processing, please try again!' })
                return resolve({ error: true })
            }
            showToast({ type: 'success', message: apiRequest.description && apiRequest.description })
            return resolve({ error: false })
        })
    }
    handlePurchase = async (data) => {
        const { orderType } = this.state
        if (orderType == 'domain') {
            return await this.purchaseDomain(data)
        } else {
            return await this.purchaseTemplate(data)
        }
    }
    openTemplate = async () => {
        const { orderData: meta } = this.state
        const { dispatch, s3Dir, pagesStore, currentUser } = this.props
        const staticJSON = staticJSONContent(meta.name)
        const upload = await uploadSiteJSONObj({ ...staticJSON, headerJSON: '', socialJSON: '', footerJSON: '', 'index.html': '', css: { 'index.css': '' }, pageManager: [] }, meta.site_id)
        if (upload.error) {
            showToast({ type: 'error', message: 'Unable to initiate cloud storage, try again later' })
            return
        }
        // Upload static template content to s3 for preview
        uploadStaticTemplateForPreview({ projectType: meta.name, s3Dir, dispatch, pagesStore, currentUser, projectId: meta.site_id })

        meta.content_path = upload.path
        openTemplateInEditor(meta, dispatch)
    }
    render() {
        const { dispatch, currentUser, loading } = this.props
        const { orderData, orderPrice, promoLoading, promoApplied, discount, orderType } = this.state
        if (!orderData) {
            return null
        }
        return (
            <>
                {
                    loading && <div className={'backdrop-loading'}>
                        <Icons.Loading style={{ width: '70px', height: '70px' }} className={'searchLoading'} />
                    </div>
                }
                <div className={'backdrop-loading dom-trigger show'}>
                    <Icons.Loading style={{ width: '70px', height: '70px' }} className={'searchLoading'} />
                </div>
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
                        {/* <!---------------------------------- checkout-account-panel---------------------------------->	 */}
                        <section className="checkout-pro-main">
                            <div className="checkout-pro-main-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className=" col col-md-12 col-lg-12 col-sm-12 checkout-pro">
                                            <div className="checkout-pro-inner">
                                                <ul id="steps-native" class="nav nav-pills"></ul>
                                                <div className="checkoutform-outer">
                                                    <form id="wizard" className="my-2 py-2" style={{ maxWidth: this.state.formWidth }}>
                                                        <section className="order-summ" data-step="Order Summary">
                                                            <div className="row os-1" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                                <div style={{ width: '50%' }}>
                                                                    <h1 className="osb-22 black">Order Summary</h1>
                                                                </div>
                                                                {orderType == 'domain' || (<div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', padding: 0, width: '25%' }}>
                                                                    <div style={{ transition: 'all ease 0.5s', marginLeft: '30%' }}>
                                                                        <a className="osr-16 darkgrey" style={{ whiteSpace: 'nowrap' }}
                                                                            onClick={(e) => {
                                                                                e.target.parentElement.style.marginLeft = '-100%'
                                                                            }}>
                                                                            + Add promo code
                                                                        </a>
                                                                    </div>
                                                                    <input type="text" className={`form-control osr-13 darkgrey `}
                                                                        id={'promo-code-input'}
                                                                        required
                                                                        style={{ marginLeft: '33%', width: '80%' }}
                                                                        placeholder={'Enter Promo Code'}
                                                                        disabled={promoLoading || promoApplied}
                                                                        onChange={(e) => {
                                                                            // this.hendlePromoCode
                                                                        }} />
                                                                    <span className="searchbar-icon" style={{ position: 'static' }}
                                                                        onClick={() => {
                                                                            if (promoApplied || promoLoading) {
                                                                                return
                                                                            }
                                                                            this.handlePromoCodeSubmit(document.getElementById('promo-code-input').value)
                                                                        }}
                                                                    >
                                                                        {promoLoading ? (
                                                                            <Icons.Loading style={{ width: '25px', height: '25px' }} className={'promoLoading'} />
                                                                        ) : (
                                                                            promoApplied ? <i class="fa fa-times" aria-hidden="true" onClick={() => {
                                                                                document.getElementById('promo-code-input').value = ''
                                                                                this.setState({ promoApplied: false, orderPrice: orderData.price, discount: 0 })
                                                                            }}></i> : <i class="fa fa-check" aria-hidden="true"></i>
                                                                        )}
                                                                    </span>
                                                                </div>)}
                                                            </div>
                                                            <div className="row os-2">
                                                                <div className="row-inner">
                                                                    <div className="col col-lg-8 col-md-8 col-sm-12 coll">
                                                                        <div className="left" style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                                                                            {/* <img id="myImg" src="./assets/website/images/SpaWellness.jpg" alt="your image" /> */}
                                                                            {
                                                                                orderType == 'domain' ?
                                                                                    (<Domain style={{ width: '70%', height: '70%' }} />)
                                                                                    :
                                                                                    (<img id="myImg" src={apiUrl + orderData.thumbnail} alt="your image" style={{ width: '100%', boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 2px 0px, rgb(0 0 0 / 19%) 0px 6px 10px 0px' }} />)
                                                                            }
                                                                        </div>
                                                                        <div className="right" style={{ width: 'auto' }}>
                                                                            <h2 className="oss-16 black">{orderType == 'domain' ? 'Domain' : 'Template'} : {orderData.name}</h2>
                                                                            <p className="osr-13 darkgrey">Single-use license</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className=" col col-lg-4 col-md-4 col-sm-12 colr">
                                                                        <p className="osb-16 black">${orderData.price}</p>
                                                                        <p
                                                                            className="osr-13 darkgrey"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#pop-confirm-modal-delete"
                                                                        >
                                                                            <a>Remove</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row os-4">
                                                                <div className="row-inner">
                                                                    <div className="col col-lg-8 col-md-8 col-sm-12 coll">
                                                                        <p className="oss-22 black">Subtotal (USD)</p>
                                                                        {/* <p className="osr-13 darkgrey">Subtotal does not include applicable taxes</p> */}
                                                                    </div>
                                                                    <div className="col col-lg-4 col-md-4 col-sm-12 colr">
                                                                        <p className="oss-22 turq">${orderData.price}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row-inner">
                                                                    <div className="col col-lg-8 col-md-8 col-sm-12 coll">
                                                                        <p className="oss-22 black">Tax</p>
                                                                    </div>
                                                                    <div className="col col-lg-4 col-md-4 col-sm-12 colr">
                                                                        <p className="oss-22 turq">$0</p>
                                                                    </div>
                                                                </div>
                                                                {orderType == 'domain' || (<div className="row-inner bottom-border" style={{ borderBottom: '1px solid #f2f2f2', paddingBottom: '10px' }}>
                                                                    <div className="col col-lg-8 col-md-8 col-sm-12 coll">
                                                                        <p className="oss-22 black">Coupon Discount</p>
                                                                    </div>
                                                                    <div className="col col-lg-4 col-md-4 col-sm-12 colr">
                                                                        <p className="oss-22 turq" style={{ color: '#d32f2f' }}>{(discount && `-$${discount}`) || '$0'}</p>
                                                                    </div>
                                                                </div>)}
                                                                <div className="row-inner">
                                                                    <div className="col col-lg-8 col-md-8 col-sm-12 coll">
                                                                        <p className="oss-22 black" style={{ fontSize: '22px', margin: '10px 0px' }}>Total</p>
                                                                    </div>
                                                                    <div className="col col-lg-4 col-md-4 col-sm-12 colr">
                                                                        <p className="oss-22 turq" style={{ fontSize: '22px', margin: '10px 0px' }}>${orderPrice}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row os-5">
                                                                <div className="row-inner">
                                                                    <div className="col col-lg-12 col-md-12 col-sm-12 colc">
                                                                        <p className="osr-11 darkgrey licen-gui">This licensing guide breaks down when and how you can use
                                                   <a className="osb-11 turq" href=""> SiteSeed </a> templates to design sites. <a className="osb-11 turq" href=""> Note: </a> You will also need an account plan to export the code.
                                                </p>
                                                                        <button type="button" className="btn btn-primary oss-13 white green-btn data-next" data-next>Continue</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>

                                                        <BillingInfo set={this.set} purchase={this.handlePurchase} />

                                                        <section className="confr" data-step="Confirmation">
                                                            <div className="row confr-m-2" style={{ padding: '30px' }}>
                                                                <div className="col col-lg-12 col-md-12 col-sm-12 coll" style={{ padding: '0px' }}>
                                                                    <CircleTick />
                                                                    <h1 style={{ marginTop: '10px', marginBottom: '2px' }}>You’re all set!</h1>
                                                                    <span>Thanks for being awesome, we hope you enjoy your purchase!</span>
                                                                </div>
                                                                <div className="col col-lg-12 col-md-12 col-sm-12 coll" style={{ padding: '0px', margin: '30px 0px' }}>
                                                                    {orderType == 'domain' || (<img id="confirmationImg" src={apiUrl + orderData.thumbnail} alt="your image" style={{ width: '100%' }} />)}
                                                                </div>
                                                                <div className="col col-lg-12 col-md-12 col-sm-12 colc add-pay">
                                                                    <span style={{ width: '390px' }}>An email confirmation is coming your way. The item will be available on your dashboard.</span>
                                                                </div>
                                                            </div>
                                                            <div className="row confr-m-3" style={{ padding: '30px !important' }}>
                                                                <div className="use-submit-btn" style={{ padding: '0px' }}>
                                                                    {orderType == 'domain' ? (
                                                                        <button className="btn btn-primary turq-btn oss-13 white" style={{ height: '50px', width: '175px' }} onClick={() => { this.goto('dashboard') }}>Go to Dashboard</button>
                                                                        ) : (
                                                                            <button className="btn btn-primary turq-btn oss-13 white" style={{ height: '50px', width: '175px' }} onClick={() => { this.openTemplate() }}>Use in Editor</button>
                                                                        )}
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /checkout-account-panel---------------------------------->	 */}
                        {/* <!---------------------------------- Confirm-delete---------------------------------->			 */}
                        {/* <!-- Modal HTML --> */}
                        <div id="pop-confirm-modal-delete" className="modal fade">
                            <div className="modal-dialog modal-confirm">
                                <div className="modal-content">
                                    <div className="modal-header flex-column">
                                        <div className="icon-box">
                                            <i className="material-icons">close</i>
                                        </div>
                                        <h4 className="modal-title w-100">Are you sure?</h4>
                                        <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Do you really want to cancel this order? We'll take you back to choosing {orderType == 'domain' ? 'domain' : 'templates'}.</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => {
                                            if (orderType == 'domain') {
                                                dispatch(getPushPathWrapper('searchDomain'))
                                                return
                                            }
                                            dispatch(getPushPathWrapper('buyTemplate', { siteId: orderData.site_id }))
                                        }}>
                                            Remove
                                </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Confirm-delete---------------------------------->			 */}
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
        location: router.location,
        pagesStore: pageReducer,
        s3Dir: global.userS3Dir,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutDomains)
