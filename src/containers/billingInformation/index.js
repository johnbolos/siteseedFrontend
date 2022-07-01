import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import { connect, useDispatch } from "react-redux"
import _ from 'lodash'
import Request from '../../request'
import StripeForm from "../../components/ui/stripe"
import LoggedinHeader from '../../layout/loggedinLayouts/header'
import { hideLoader, showLoader } from "../../reducers/actions"
import { showToast } from "../../components/utils"
import { ReactComponent as VisaTextIcon } from "../../assets/website/icons/visaCardText.svg";
import { ReactComponent as Empty } from "../../assets/website/icons/empty.svg";
import jsPDF from 'jspdf';
import { invoiceLogoImage } from "../dashboard/images"
import Icons from "../../assets/Icons"

import './index.scss'

import { useSelector } from "react-redux";

const BillingInformation = () => {
    const [deleteCardModal, setDeleteCardModal] = useState(false)
    const [billing, setBilling] = useState([])
    const [billsFilter, setBillsFilter] = useState([])
    const [showCard, setShowCard] = useState(false)
    const [pagination, setPagination] = useState(1)
    const [viewingOrder, setViewingOrder] = useState(null)
    const dispatch = useDispatch()
    const { tokenInfo, loading } = useSelector(
		(state) => ({
			tokenInfo: state.global.tokenInfo,
            loading: state.global.loading
		})
	)
    const [addCards, setAddCards] = useState(false)
    const [deleteCards, setDeleteCards] = useState(false)
    const [selectedMethod, setSelectedMethod] = useState(null)
    const [subscriptionsElem, setSubscriptionsElem] = useState('')
    const [selectedSubscriptionId, setSelectedSubscriptionId] = useState(null)

    useEffect(() => {
        apiRequestBilling()

    }, [tokenInfo])

    const apiRequestBilling = async () => {
        dispatch(showLoader())
        const apiRequest = await Request.getBillingInfo()
        dispatch(hideLoader())

        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to fetch billing data, Try Relogging' })
            return
        }

        let filteredBills = []
        if (apiRequest.data.billing_history && apiRequest.data.billing_history.length) {
            filteredBills = apiRequest.data.billing_history.reverse()
        }

        setBilling( apiRequest.data )
        setBillsFilter( filteredBills )
        createSubscriptionsElem()
    }

    const createSubscriptionsElem = () => {
        if (!billing.other_plans) { return }
        let resp = billing.other_plans.map((plan, key) => {
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
                        onClick={() => { setSelectedSubscriptionId(plan.plan_id) }}
                    >
                        Change
                    </button>
                    <ul>
                        {features.map((val, key) => <li key={key}><span className="icon-Tick turq"></span>{val}</li>)}
                    </ul>
                </li>
            )
        })
        setSubscriptionsElem(resp)
    }

    const closeNResetCard = () => {
        setSelectedMethod(null)
        setShowCard(false)
    }

    const handleAddCard = async (token, extraDetails = {}) => {
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

        closeNResetCard()
        apiRequestBilling()
    }
    const handleUpdateCard = async (update, extraDetails = {}) => {
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
        closeNResetCard()
        apiRequestBilling()
    }

    const filterBills = ( value ) => {
        let array = billing.billing_history || []
        array = array.filter(obj => {
            let resp = false
            _.forEach(obj, (val) => {
                resp = `${_.lowerCase(val)}`.includes(_.lowerCase(value))
                if (resp) {
                    return false
                }
            })
            return resp
        })
        setBillsFilter( array )
    }

    const createPdf = (data) => {
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
            <div className='head'>
                <div>
                    <div style='display: flex; align-items: center;'>
                        <img src='${invoiceLogoImage}' className='logo'/>
                        <h1>SiteSeed</h1>
                    </div>
                </div>
                <div style=''>
                    <h1>Invoice</h1>
                </div>
            </div>
            <div className='head'>
                <div style='opacity: 0'>
                    <h1>Invoice</h1>
                </div>
                <div style=''>
                    <h6>Invoice: ${data.orderID}</h6>
                    <h6>${data.billing_date}</h6>
                </div>
            </div>
            <div className='head'>
                <div>
                    <h6 style='width: 200px; border-bottom: 1px solid #dddddd; padding-bottom: 2px;'>BILL TO</h6>
                    <h6>Client Name: ${billing.user_details.first_name + " " + billing.user_details.last_name}</h6>
                    <h6>Phone No. : ${(billing.user_details.phone && billing.user_details.phone != '') ? billing.user_details.phone : '-'}</h6>
                    <h6>Email : ${(billing.user_details.email && billing.user_details.email != '') ? billing.user_details.email : '-'}</h6>
                </div>
                <div style=''>
                    <h6 style='width: 200px; border-bottom: 1px solid #dddddd; padding-bottom: 2px;'>SITE&nbspADDRESS</h6>
                    <h6>http://dev.siteseed.io</h6>
                </div>
            </div>
            <div>
                <table>
                    <tr className='heading'>
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
                        <div className='summary'>
                            <p>SUBTOTAL ($)</p>
                            <p>${data.subtotal}</p>
                        </div>
                        <div className='summary'>
                            <p>TAX ($)</p>
                            <p>${data.tax}</p>
                        </div>
                        <div className='summary' style='border-top: 1px solid #dddddd'>
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

    const createBillsFiltered = () => {
        let array = billsFilter.slice((pagination - 1) * 10, (10 * pagination))

        setBillsFilter( array )
    }

    const handleDeleteCard = async (id) => {
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
        
        closeNResetCard()
        apiRequestBilling()
    }

    return(
        <>
            {
                loading && <div className={'backdrop-loading'}>
                    <Icons.Loading style={{ width: '70px', height: '70px' }} className={'searchLoading'} />
                </div>
            }
            <LoggedinHeader />
            <Modal className="addedit-card" show={showCard} onHide={() => setShowCard(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{addCards ? 'Add Card' : 'Update Card Details'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <div className="col-12">
                            <StripeForm
                                addCard={addCards}
                                deleteCard={deleteCards}
                                billingDetailsProp={selectedMethod}
                                addCardRequest={handleAddCard}
                                updateCardRequest={handleUpdateCard}
                                loading={loading}
                            />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal id="pop-confirm-modal-delete" className="deleteCard-confirm" show={deleteCardModal} onHide={() => setDeleteCardModal(false)} centered>
                <div className="modal-header d-flex flex-column">
                    <div className="icon-box">
                        <i className="material-icons">close</i>
                    </div>
                    <h4 className="modal-title w-100">Are you sure?</h4>
                    <button type="button" className="close" onClick={() => setDeleteCardModal(false)} aria-hidden="true">&times;</button>
                </div>
                <Modal.Body>
                    <p>Do you really want to delete this card? This process cannot be undone.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setDeleteCardModal(false)}>Cancel</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { handleDeleteCard(selectedMethod.id); setDeleteCardModal(false); }}>
                        Delete
                    </button>
                </div>
            </Modal>

            <div className="loggedin-content-container">
                <div className="container flex-column">
                    <h1>Billing Information</h1>

                    <div className="d-flex">
                        <div className="col-12 billing-container">
                            <div className="d-flex flex-wrap">
                                <div className="col-6">
                                    <h2>Active Card</h2>
                                </div>
                                <div className="col-6 text-right">
                                    <button className="add-card-btn" onClick={() => { setShowCard(true); setAddCards(true) } }><span>+</span> Add Card</button>
                                </div>
                                <div className="col-12">
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
                                    { billing && billing.length == 0 ? 
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
                                        <span className="oss-16 darkgrey">No Data</span>
                                    </div> : 
                                    billing?.payment_methods.map((paymentMethod, index) => ( 
                                        <div key={index} className="billing-data-row1-inner" style={{ padding: '0px', display: 'flex', margin: '1px' }}>
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
                                            <div className="col-lg-2 col-md-2 col-sm-12 colr" style={{ display: 'flex', justifyContent: 'flex-end', padding: '0' }}>
                                                {!paymentMethod.is_default && (
                                                    <button
                                                        className="btn btn-primary turq-btn oss-13 white"
                                                        style={{ backgroundColor: '#67737D', width: '100%', height: '100%', marginTop: '0' }}
                                                        onClick={() => { setDeleteCardModal(true); setSelectedMethod(paymentMethod); }}
                                                    >
                                                        Delete Card
                                                    </button>
                                                )}
                                                <button
                                                    className="btn btn-primary turq-btn oss-13 white "
                                                    style={{ width: '100%', height: '100%', marginTop: '0' }}
                                                    onClick={() => { setShowCard(true); setAddCards(false); setDeleteCards(false); setSelectedMethod(paymentMethod); }}>Update Card</button>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                                <div className="col-6 billing-details-left">
                                    <h2>Billing History</h2>
                                    <p>View invoices and credit notes for your Premium subscriptions and paid services.</p>
                                </div>
                                <div className="col-6 text-right billing-search pos-relative">
                                    <input id="searchBar" type="search" placeholder="Search something..." name="search" className="searchbar-input"
                                                        required style={{ background: 'transparent' }} onChange={(e) => { filterBills( e.target.value ) }} />
                                    <span className="searchbar-icon" style={{ background: 'transparent', color: '#67737D' }}>
                                        <span className="icon-Search"></span>
                                    </span>
                                </div>
                                <div className="col-12">
                                    <div className="billing-data-row1-inner billing-table" style={{ padding: '0px', display: 'flex', margin: '6px 0px', background: 'transparent' }}>
                                        <div className="col-lg-2 col-md-2 col-sm-12 coll" style={{ padding: '0px' }}>
                                            <span className="oss-16 black">Invoice</span>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12 colr" style={{ padding: '0px 0px 0px 0px' }}>
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
                                    { billsFilter && billsFilter.length == 0 ? (
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
                                            <span className="oss-16 darkgrey">No Data</span>
                                        </div>
                                    ) : <div>
                                            <div className="bills-container">
                                            { billsFilter.map((bill, index) => (
                                                <div key={index}>
                                                    <div className="billing-data-row1-inner bills-elem-container" style={{ padding: '0px', display: 'flex', margin: '1px', cursor: 'pointer' }} onClick={() => { viewingOrder == bill.orderID ? setViewingOrder( null ) : setViewingOrder( bill.orderID ) }}>
                                                        <div className="col-lg-2 col-md-2 col-sm-12 coll" style={{ padding: '16px 20px' }}>
                                                            <div className="order-invoice">
                                                                <span className="oss-16" style={{ display: 'flex', width: 'max-content' }} onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    createPdf(bill)
                                                                }}>
                                                                    {bill.orderID}&nbsp;
                                                                    <span className="material-icons">download</span>
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
                                                </div>
                                            ))}
                                            </div>
                                            { Math.ceil(billsFilter.length / 10) > 1 &&
                                            <div className={'pagination'} style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                                                <button
                                                    className="btn btn-primary turq-btn oss-13 white "
                                                    disabled={pagination == 1}
                                                    onClick={() => { setPagination( pagination - 1 ); createBillsFiltered(); }}
                                                >
                                                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                                </button>
                                                {
                                                    `${pagination} of ${Math.ceil(billsFilter.length / 10)}`
                                                }
                                                <button
                                                    className="btn btn-primary turq-btn oss-13 white "
                                                    disabled={pagination == Math.ceil(billsFilter.length / 10)}
                                                    onClick={() => { setPagination(pagination + 1); createBillsFiltered(); }}
                                                >
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = ({ global, layout, templates, }) => {
    return {
        loading: global.loading,
        theme: layout.theme,
        templates,
        currentUser: global.currentUser,
        tokenInfo: global.tokenInfo,
        generalData: global.generalData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingInformation);