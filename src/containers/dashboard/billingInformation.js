import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"
import StripeForm from "../../components/ui/stripe"
import { ReactComponent as VisaTextIcon } from "../../assets/website/icons/visaCardText.svg";
import { ReactComponent as Empty } from "../../assets/website/icons/empty.svg";
import jsPDF from 'jspdf';
import { invoiceBackgorundImage, invoiceLogoImage } from "./images"
import { hideLoader, showLoader } from "../../reducers/actions"

class BillingInformation extends React.Component {
    state = {
        billingInfo: null,
        addCard: false,
        deleteCard: false,
        cardsElems: null,
        selectedMethod: null,
        subscriptionsElem: null,
        selectedSubscriptionId: null,
        billsElems: null,
        viewingOrder: null,
        searchBillQuery: '',
        billsFilterArray: [],
        pagination: 1,
    }
    componentDidMount() {
        this.apiRequestBilling()
    }
    apiRequestBilling = async () => {
        const { dispatch } = this.props
        dispatch(showLoader())
        const apiRequest = await Request.getBillingInfo()
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to fetch data, Try Relogging' })
            return
        }
        let filteredBills = []
        if (apiRequest.data.billing_history && apiRequest.data.billing_history.length) {
            // filteredBills = apiRequest.data.billing_history.sort((a, b) => new Date(b.billing_date) - new Date(a.billing_date))
            // apiRequest.data.billing_history = filteredBills
            filteredBills = apiRequest.data.billing_history.reverse()
        }
        this.setState({ billingInfo: apiRequest.data, billsFilterArray: filteredBills }, () => {
            this.createcardElem()
            this.createBillsElem()
            this.createSubscriptionsElem()
        })
    }
    createcardElem = () => {
        const { billingInfo } = this.state
        billingInfo.payment_methods.sort(function (a, b) { return b.is_default - a.is_default });
        const resp = billingInfo.payment_methods.map((paymentMethod) => {
            return <div className="billing-data-row1-inner"
                // style={paymentMethod.is_default ? { margin: '15px 0px', padding: '0px' } : { padding: '0px', display: 'flex' }}
                style={{ padding: '0px', display: 'flex', margin: '1px' }}
            >
                {!!paymentMethod.is_default && (
                    <div className="default">Default</div>
                )}
                <div className="col-lg-5 col-md-5 col-sm-12 coll" style={{ padding: '16px 20px' }}>
                    <div className="card-number">
                        <img src="./assets/website/images/CREDTCARD1.png" className="img-fluid" alt="Responsive image" /><span className="oss-16 darkgrey">xxxx-xxxx-xxxx-{paymentMethod.last4}</span>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 colr" style={{ padding: '16px 20px', borderLeft: '1px solid white' }}>
                    <div className="left"><span className="oss-13 darkgrey">Expires</span><br /><span className="oss-16 darkgrey">{paymentMethod.exp_month} / {paymentMethod.exp_year}</span></div>
                    <div className="right">
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 colr" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {!paymentMethod.is_default && (
                        <button
                            className="btn btn-primary turq-btn oss-13 white "
                            data-bs-toggle="modal"
                            data-bs-target="#pop-confirm-modal-delete"
                            style={{ backgroundColor: '#67737D', width: '50%', height: '100%' }}
                            onClick={() => { this.set({ selectedMethod: paymentMethod, deleteCard: true }) }}
                        >
                            Delete Card
                        </button>
                    )}
                    <button
                        className="btn btn-primary turq-btn oss-13 white "
                        data-bs-toggle="modal" data-bs-target="#update-card1"
                        style={{ width: '50%', height: '100%' }}
                        onClick={() => {
                            this.set({ addCard: false, selectedMethod: paymentMethod, deleteCard: false })
                        }}>Update Card</button>
                </div>
            </div>
        })
        this.setState({ cardsElems: resp || null })
    }
    createBillsElem = () => {
        const { billsFilterArray, viewingOrder, pagination } = this.state
        let resp = null
        let array = billsFilterArray.slice((pagination - 1) * 10, (10 * pagination))
        resp = array.map(bill => (
            <div>
                <div className="billing-data-row1-inner bills-elem-container"
                    // style={paymentMethod.is_default ? { margin: '15px 0px', padding: '0px' } : { padding: '0px', display: 'flex' }}
                    style={{ padding: '0px', display: 'flex', margin: '1px', cursor: 'pointer' }}
                    onClick={() => {
                        let resp = null
                        if (viewingOrder != bill.orderID) {
                            resp = bill.orderID
                        }
                        this.setState({ viewingOrder: resp }, this.createBillsElem)
                    }}
                >
                    <div className="col-lg-2 col-md-2 col-sm-12 coll" style={{ padding: '16px 20px' }}>
                        <div className="order-invoice">
                            <span className="oss-16" style={{ display: 'flex', width: 'max-content' }} onClick={(e) => {
                                e.stopPropagation()
                                this.createPdf(bill)
                            }}>
                                {bill.orderID}&nbsp;
                                {/* <i class="fa fa-download" aria-hidden="true"></i> */}
                                <span class="material-icons">download</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 colr" style={{ padding: '16px 20px' }}>
                        <span className="oss-16 darkgrey">{bill.billing_date}</span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 colr" style={{ display: 'flex' }}>
                        <span className="oss-16 darkgrey">{bill.description}</span>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 colr" style={{ display: 'flex' }}>
                        <div className={'left'}>
                            <VisaTextIcon />
                        </div>
                        <div className={'right'} style={{ marginLeft: '10px' }}>
                            <span className="oss-16 darkgrey">ending in {bill.card}</span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 colr" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className={'left'}>
                            <span className="oss-16 darkgrey">${bill.total}</span>
                        </div>
                        <div className={'right'}>
                            <i className="fa fa-chevron-down" aria-hidden="true" style={{ transition: '1s', transform: (bill.orderID == viewingOrder) ? 'rotateZ(180deg)' : 'rotateZ(0deg)' }}></i>
                        </div>
                    </div>
                </div>
                {
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', overflow: 'hidden', transition: '1s', height: (bill.orderID == viewingOrder) ? "130px" : '0px' }}>
                        <div style={{ width: '33%', color: '#011627', padding: '16px 20px' }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '5px 0px', color: '#67737D' }}>
                                <span className={"oss-16"}>Subtotal</span>
                                <span className={"oss-16"}>${bill.subtotal}</span>
                            </div>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '5px 0px', color: '#67737D' }}>
                                <span className={"oss-16"}>Taxes</span>
                                <span className={"oss-16"}>${bill.tax}</span>
                            </div>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '5px 0px' }}>
                                <span className={"oss-16"}>Total (US)</span>
                                <span className={"oss-16"}>${bill.subtotal}</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        ))
        resp = (
            <div>
                <div className={'bills-container'}>
                    {
                        resp
                    }
                </div>
                <div className={'pagination'} style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                    <button
                        class="btn btn-primary turq-btn oss-13 white "
                        style={{ background: 'transparent', color: '#31cdb9', border: '1px solid #31cdb9' }}
                        disabled={pagination == 1}
                        onClick={() => { this.setState({ pagination: pagination - 1 }, () => { this.createBillsElem() }) }}
                    >
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    {
                        `${pagination} of ${Math.ceil(billsFilterArray.length / 10)}`
                    }
                    <button
                        class="btn btn-primary turq-btn oss-13 white "
                        style={{ background: 'transparent', color: '#31cdb9', border: '1px solid #31cdb9' }}
                        disabled={pagination == Math.ceil(billsFilterArray.length / 10)}
                        onClick={() => { this.setState({ pagination: pagination + 1 }, () => { this.createBillsElem() }) }}
                    >
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        )
        this.setState({ billsElems: resp })
    }

    createPdf = (data) => {
        const { billingInfo: { user_details } } = this.state
        const { dispatch } = this.props
        dispatch(showLoader())
        const doc = new jsPDF({
            unit: 'px'
        });
        let resp = `
        <div style='color: #67737D; font-size: 8px; line-height: 12px; font-weight: 400; width: 450px; padding: 20px 20px 0px 20px; '>
            <style>
            .head {
                display: flex;
                justify-content: space-between;
                height: auto;
            }
            .head h1 {
                margin-left: 5px;
            }
            .logo {
                height: 30px;
                width: 38px;
                border: none;
            }
            table {
              font-family: arial, sans-serif;
              border-collapse: collapse;
              width: 100%;
            }
            tr.heading {
                background-color: #31cdb9;
                color: #ffffff;
            }
            td, th {
              text-align: left;
              padding: 8px;
            }
            
            tr:nth-child(even) {
                background-color: #dddddd;
            }
            .summary {
                display: flex;
                justify-content: space-between;
                font-size: 10px;
            }
            </style>
            <div class='head'>
                <div>
                    <div style='display: flex; align-items: center;'>
                        <img src='${invoiceLogoImage}' class='logo'/>
                        <h1>SiteSeed</h1>
                    </div>
                </div>
                <div style=''>
                    <h1>Invoice</h1>
                </div>
            </div>
            <div class='head'>
                <div style='opacity: 0'>
                    <h1>Invoice</h1>
                </div>
                <div style=''>
                    <h6>Invoice: ${data.orderID}</h6>
                    <h6>${data.billing_date}</h6>
                </div>
            </div>
            <div class='head'>
                <div>
                    <h6 style='width: 200px; border-bottom: 1px solid #dddddd; padding-bottom: 2px;'>BILL TO</h6>
                    <h6>Client Name: ${user_details.first_name + " " + user_details.last_name}</h6>
                    <h6>Phone No. : ${(user_details.phone && user_details.phone != '') ? user_details.phone : '-'}</h6>
                    <h6>Email : ${(user_details.email && user_details.email != '') ? user_details.email : '-'}</h6>
                </div>
                <div style=''>
                    <h6 style='width: 200px; border-bottom: 1px solid #dddddd; padding-bottom: 2px;'>SITE&nbspADDRESS</h6>
                    <h6>http://dev.siteseed.io</h6>
                </div>
            </div>
            <div>
                <table>
                    <tr class='heading'>
                      <th>No.</th>
                      <th>Description</th>
                      <th>Payment Method</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>${data.description}</td>
                      <td>${data.brand + ' Ending in ' + data.card}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                      <div>
                        <div class='summary'>
                            <p>SUBTOTAL ($)</p>
                            <p>${data.subtotal}</p>
                        </div>
                        <div class='summary'>
                            <p>TAX ($)</p>
                            <p>${data.tax}</p>
                        </div>
                        <div class='summary' style='border-top: 1px solid #dddddd'>
                            <h6>TOTAL ($)</h6>
                            <h6>${data.total}</h6>
                        </div>
                      </div>
                      </td>
                    </tr>
                </table>
            </div>
        </div>
        `
        doc.html(resp, {
            callback: function (doc) {
                dispatch(hideLoader())
                doc.save(`Invoice_${data.orderID}.pdf`);
            },
            x: 0,
            y: 0
        })
    }
    filterBills = () => {
        const { searchBillQuery, billingInfo } = this.state
        let array = billingInfo.billing_history || []
        array = array.filter(obj => {
            let resp = false
            _.forEach(obj, (val) => {
                resp = `${_.lowerCase(val)}`.includes(_.lowerCase(searchBillQuery))
                if (resp) {
                    return false
                }
            })
            return resp
        })
        this.setState({ billsFilterArray: array }, () => {
            this.createBillsElem()
        })
    }
    createSubscriptionsElem = () => {
        const { billingInfo } = this.state
        if (!billingInfo.other_plans) { return }
        let resp = billingInfo.other_plans.map((plan, key) => {
            let validityPeriod = null
            switch (plan.validity) {
                case 'lifetime':
                    break;
                case 'monthly':
                    validityPeriod = '/mo'
                    break;
                case 'yearly':
                    validityPeriod = '/yr'
                    break;
            }
            let features = plan.features.split('<br/>')
            return (
                <li key={key}>
                    <h1 className="osb-22 black">{plan.name}</h1>
                    <p className="dm-text osr-13 darkgrey">{plan.description}</p>
                    <p className="prize-month osb-32 turq">${plan.price} {validityPeriod && <sub className="osr-13 darkgrey"> {validityPeriod} </sub>}</p>
                    <p className="sale-save osr-13 darkgrey">On sale - Save 50%</p>
                    <button
                        type="button"
                        data-bs-dismiss="modal"
                        data-bs-toggle="modal"
                        data-bs-target="#pop-confirm-modal-subscription"
                        className="oss-13 turq down"
                        onClick={() => { this.set({ selectedSubscriptionId: plan.plan_id }) }}
                    >
                        Change
                    </button>
                    <ul>
                        {features.map((val, key) => <li key={key}><span className="icon-Tick turq"></span>{val}</li>)}
                    </ul>
                </li>
            )
        })
        this.setState({ subscriptionsElem: resp })
    }
    set = (obj) => {
        _.forEach(obj, (value, key) => {
            this.setState({ [key]: value })
        })
    }
    getFormData = (form) => {
        const formEntries = new FormData(form).entries();
        return Object.assign(...Array.from(formEntries, ([name, value]) => ({ [name]: value })));
    }
    closeNResetCard = () => {
        this.set({ selectedMethod: null })
        $('.update-card .close[data-bs-dismiss="modal"]').trigger('click')
    }
    handleAddCard = async (token, extraDetails = {}) => {
        const { dispatch } = this.props
        dispatch(showLoader())
        let data = {
            source_token: token,
            address_line_1: extraDetails.address1,
            address_line_2: extraDetails.address2,
            city: extraDetails.city,
            state: extraDetails.state,
            zipcode: extraDetails.zip_code,
            country: extraDetails.country,
            phone: extraDetails.phone
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.addBillingCard(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to add card, Try again after some time' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message })
        this.closeNResetCard()
        this.apiRequestBilling()
    }
    handleUpdateCard = async (update, extraDetails = {}) => {
        const { dispatch } = this.props
        const { selectedMethod } = this.state
        dispatch(showLoader())
        let data = {
            ...update,
            card_id: selectedMethod.id,
            address_line_1: extraDetails.address1,
            address_line_2: extraDetails.address2,
            city: extraDetails.city,
            state: extraDetails.state,
            zipcode: extraDetails.zip_code,
            country: extraDetails.country,
            phone: extraDetails.phone
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.updateBillingCard(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to add card, Try again after some time' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message })
        this.closeNResetCard()
        this.apiRequestBilling()
    }
    handleDeleteCard = async (id) => {
        const { dispatch } = this.props
        dispatch(showLoader())
        let data = {
            card_id: id
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.deleteBillingCard(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to delete card, Try again after some time' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message })
        this.closeNResetCard()
        this.apiRequestBilling()
    }
    handleChangeSubscription = async (id) => {
        const { dispatch } = this.props
        dispatch(showLoader())
        let data = {
            subscription_plan_id: id
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.updateSubscriptionPlan(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to update plan, Try again after some time' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message })
        this.apiRequestBilling()
    }
    getPlanName = (activePlan) => {
        if (!activePlan) { return '-' }
        let validityPeriod = ''
        switch (activePlan.validity) {
            case 'lifetime':
                break;
            case 'monthly':
                validityPeriod = ` ($${activePlan.price}/mo)`
                break;
            case 'yearly':
                validityPeriod = ` ($${activePlan.price}/yr)`
                break;
        }
        return activePlan.name + (validityPeriod)
    }

    render() {
        const { dispatch, currentUser, loading } = this.props
        const { addCard, cardsElems, selectedMethod, deleteCard, subscriptionsElem, selectedSubscriptionId, billsElems, searchBillQuery, billingInfo, billsFilterArray } = this.state
        return (
            <>
                <div className="billing-tab-content">
                    <div className="billing-tab-content-inner">
                        <div className="row">
                            <div className="col-md-8 col-lg-8 col-sm-12 billing-tab-coll" style={{ width: '100%' }}>
                                <h1 className="osb-22 black">Billing Information</h1>
                                <div className="billing-data">
                                    <div className=" p-data-cmn billing-data-row1">
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <h1 className="osb-22 black" style={{ background: 'transparent', border: 'none' }}>Active Card</h1>
                                            <div className={'right'}>
                                                <button
                                                    className="btn btn-primary turq-btn oss-13 white "
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#update-card1"
                                                    onClick={() => { this.set({ addCard: true, selectedMethod: null }) }}
                                                    style={{ background: 'transparent', color: '#31cdb9', border: '1px solid #31cdb9' }}
                                                >
                                                    <span>+</span> Add Card
                                            </button>
                                            </div>
                                        </div>
                                        <div className="billing-data-row1-inner" style={{ padding: '0px', display: 'flex', margin: '6px 0px', background: 'transparent' }} >
                                            <div className="col-lg-5 col-md-5 col-sm-12 coll" style={{ padding: '0px' }}>
                                                <div className="">
                                                    <span className="oss-16 black">Payment Method</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-7 col-sm-12 colr" style={{ padding: '0px 0px 0px 21px' }}>
                                                <div className="left"><span className="oss-13 black">Details</span></div>
                                            </div>
                                        </div>
                                        {billingInfo && billingInfo.payment_methods.length == 0 ? (
                                            <div className={'billing-data-row1-inner'}
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    background: '#f2f2f2',
                                                    padding: '25px 20px',
                                                    width: '100%',
                                                }}
                                            >
                                                <Empty height={'auto'} width={'70px'} style={{ fill: '#67737D' }} />
                                                <span class="oss-16 darkgrey">No Data</span>
                                            </div>
                                        ) : cardsElems}
                                    </div>
                                    <div className=" p-data-cmn billing-data-row2">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
                                            <div className={'left'}>
                                                <h1 className="osb-22 black" style={{ background: 'transparent', border: 'none' }}>Billing History</h1>
                                                <span className="darkgrey" style={{ background: 'transparent', border: 'none' }}>
                                                    View invoices and credit notes for your Premium subscriptions and paid services.
                                                </span>
                                            </div>
                                            <div className={'right'} style={{ width: '40%' }}>
                                                <div className="searchbar searchbar-open" style={{ background: '#F2F2F2', borderRadius: '5px' }}>
                                                    <input id="searchBar" type="search" placeholder="Search something..." name="search" className="searchbar-input"
                                                        required style={{ background: 'transparent' }} onChange={(e) => {
                                                            let val = e.target.value
                                                            this.setState({ searchBillQuery: val }, () => {
                                                                this.filterBills()
                                                            })
                                                        }} />
                                                    <span className="searchbar-icon" style={{ background: 'transparent', color: '#67737D' }} onClick={() => {
                                                        // this.filterBills()
                                                    }}>
                                                        {
                                                            <span className="icon-Search"></span>
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="billing-data-row1-inner" style={{ padding: '0px', display: 'flex', margin: '6px 0px', background: 'transparent' }}>
                                            <div className="col-lg-2 col-md-2 col-sm-12 coll" style={{ padding: '0px' }}>
                                                <span className="oss-16 black">Invoice</span>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-12 colr" style={{ padding: '0px 0px 0px 20px' }}>
                                                <span className="oss-16 black">Billing Date</span>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 coll" style={{ padding: '0px 0px 0px 20px' }}>
                                                <span className="oss-16 black">Description</span>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-12 colr" style={{ padding: '0px 0px 0px 20px' }}>
                                                <span className="oss-16 black">Payment Method</span>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-12 coll" style={{ padding: '0px 0px 0px 20px' }}>
                                                <span className="oss-16 black">Total</span>
                                            </div>
                                        </div>
                                        {billsFilterArray && billsFilterArray.length == 0 ? (
                                            <div className={'billing-data-row1-inner'}
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    background: '#f2f2f2',
                                                    padding: '25px 20px',
                                                    width: '100%',
                                                    marginTop: '10px'
                                                }}
                                            >
                                                <Empty height={'auto'} width={'70px'} style={{ fill: '#67737D' }} />
                                                <span class="oss-16 darkgrey">No Data</span>
                                            </div>
                                        ) : billsElems}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!---------------------------------- Update-card-detail---------------------------------->			 */}
                <div className="modal fade update-card" id="update-card1" tabIndex="-1" role="dialog" aria-labelledby="update-card1" aria-hidden="true" onClick={this.closeNResetCard}>
                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                        <div className="modal-content" onClick={(e) => { e.stopPropagation() }}>
                            <div className="modal-header">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                        <h1 className="osb-22 black">{addCard ? 'Add Card' : 'Update Card Details'}</h1>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 colr">
                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey" onClick={this.closeNResetCard}></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <StripeForm
                                            addCard={addCard}
                                            deleteCard={deleteCard}
                                            billingDetailsProp={selectedMethod}
                                            addCardRequest={this.handleAddCard}
                                            updateCardRequest={this.handleUpdateCard}
                                            loading={loading}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!---------------------------------- /Update-card-detail----------------------------------> */}
                {/* <!---------------------------------- Confirm-card-delete---------------------------------->			 */}
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
                                <p>Do you really want to delete this card? This process cannot be undone.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => {
                                    this.handleDeleteCard(selectedMethod.id)
                                }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!---------------------------------- /Confirm-card-delete---------------------------------->			 */}

                {/* <!---------------------------------- Downgrade Subscription Plan---------------------------------->			 */}
                {/* <div className="modal fade downgrade-plan" id="downgrade-plan1" tabIndex="-1" role="dialog" aria-labelledby="downgrade-plan" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-12 coll">
                                        <h1 className="osb-22 black">Change Subscription Plan</h1>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 colr">
                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus eleifend arcu a pellentesque. Curabitur tempus <br /> turpis ac enim scelerisque varius. Morbi augue neque, accumsan et pharetra et, posuere ut libero. </p>
                                        <ul className="downgrade-plan">
                                            {
                                                subscriptionsElem
                                            }
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <!---------------------------------- /Downgrade Subscription Plan----------------------------------> */}


                {/* <!---------------------------------- Confirm-Subscription-Plan-Change---------------------------------->			 */}
                {/* <!-- Modal HTML --> */}
                {/* <div id="pop-confirm-modal-subscription" className="modal fade">
                    <div className="modal-dialog modal-confirm">
                        <div className="modal-content">
                            <div className="modal-header flex-column">
                                <div className="icon-box">
                                    <i class="fa fa-question" aria-hidden="true"></i>
                                </div>
                                <h4 className="modal-title w-100">Are you sure?</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                                    this.handleChangeSubscription(selectedSubscriptionId)
                                }}>
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <!---------------------------------- /Confirm-Subscription-Plan-Change---------------------------------->			 */}
            </>
        )
    }
}

const mapStateToProps = ({ global, layout, templates, }) => {
    return {
        loading: global.loading,
        theme: layout.theme,
        templates,
        currentUser: global.currentUser,
        tokenInfo: global.tokenInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingInformation)
