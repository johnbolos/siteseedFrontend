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
import StripeForm from "../../components/ui/stripe"
import { hideLoader, showLoader } from "../../reducers/actions"


class BillingInfo extends React.Component {
    state = {
        billingInfo: null,
        addCard: true,
        cardsElems: null,
        selectedMethod: null,
    }
    componentDidMount() {
        this.apiRequestBilling()
        this.setState({ templateData: this.props.location.state })
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

        this.setState({ billingInfo: apiRequest.data }, () => {
            this.createcardElem()
        })
    }
    createcardElem = () => {
        const { billingInfo, selectedMethod } = this.state
        billingInfo.payment_methods.sort(function (a, b) { return b.is_default - a.is_default });
        const resp = billingInfo.payment_methods.map((paymentMethod) => {
            let extraDetails = paymentMethod.billing_info
            return <div className="billing-data-row1-inner" style={paymentMethod.is_default ? { margin: '15px 0px', cursor: 'pointer' } : { cursor: 'pointer' }}
                onClick={() => {
                    this.setState({ selectedMethod: paymentMethod }, () => {
                        this.createcardElem()
                    })
                }}>
                {/* {!!paymentMethod.is_default && (
                    <div className="default">Default</div>
                )} */}
                <div className="col-lg-5 col-md-5 col-sm-12 coll">
                    <div className="card-number" style={{ display: 'flex' }}>
                        <img src="./assets/website/images/CREDTCARD1.png" className="img-fluid" alt="Responsive image" /><div><span className="oss-13 darkgrey"></span><br /><span className="oss-16 darkgrey">xxxx-xxxx-xxxx-{paymentMethod.last4}</span></div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 colr">
                    <div className="left"><span className="oss-13 darkgrey">Expires</span><br /><span className="oss-16 darkgrey">{paymentMethod.exp_month} / {paymentMethod.exp_year}</span></div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 colr">
                    <div className="left"><span className="oss-13 darkgrey">Address Line 1</span><br /><span className="oss-16 darkgrey">{(extraDetails && extraDetails.address_line_1) ? extraDetails.address_line_1 : '-'}</span></div>
                    <div className="right">
                        {/* {!paymentMethod.is_default && (
                            <button
                                className="btn btn-primary turq-btn oss-13 white "
                                data-bs-toggle="modal"
                                data-bs-target="#pop-confirm-modal-delete"
                                style={{ marginRight: '5px', backgroundColor: '#67737D' }}
                                onClick={() => { this.set({ selectedMethod: paymentMethod }) }}>
                                Delete Card
                            </button>
                        )} */}

                        <button
                            class="btn btn-primary turq-btn oss-13 white"
                            style={{ backgroundColor: 'rgb(255 255 255)', width: '40px', minWidth: 'auto', borderRadius: '50%', border: '1px solid #31cdb9', padding: '5px' }}
                        >
                            <div style={(selectedMethod && selectedMethod.id == paymentMethod.id) ? {
                                height: '100%',
                                width: '100%',
                                borderRadius: '50%',
                                background: '#31cdb9',
                            } : {
                                height: '100%',
                                width: '100%',
                                borderRadius: '50%',
                                background: 'transparent',
                            }}>
                            </div>
                        </button>
                    </div>
                </div>
            </div >
        })
        this.setState({ cardsElems: resp })
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
    handleAddCard = async (token, extraDetails) => {
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
            phone: extraDetails.phone,
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
    validateNNext = async () => {
        const { templateData, templatePrice } = this.props
        const { selectedMethod } = this.state
        if (!selectedMethod || !selectedMethod.id) {
            showToast({ type: 'error', message: 'Please select a card first!' })
            return
        }
        const resp = await this.props.purchase(selectedMethod)
        if (resp.error) {
            return
        }
        this.props.set('formWidth', '645px')
        document.querySelector('#billing-info-next').click()
    }
    render() {
        const { dispatch, currentUser, templateData, loading } = this.props
        const { addCard, billingInfo, cardsElems, selectedMethod } = this.state
        return (
            <section className="bill-info" data-step="Billing Information">
                <div className="row bi-1">
                    <div className="col col-lg-8 col-md-6 col-sm-6 coll">
                        <h1 className="osb-22 black">Add/Select Billing Information</h1>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-6 colr">
                    </div>
                </div>
                <div className="row bi-2">
                    <div className=" p-data-cmn billing-data-row1" style={{ padding: '0px' }}>
                        <div className={'right'}>
                            <button className="btn btn-primary turq-btn oss-13 white " data-bs-toggle="modal" data-bs-target="#update-card1"
                                onClick={() => { this.set({ addCard: true, selectedMethod: null }) }}
                                style={{
                                    color: '#31cdb9',
                                    background: 'transparent',
                                    border: '1px solid #31cdb9',
                                    maxWidth: 'fit-content',
                                    minWidth: 'fit-content',
                                }}
                            >
                                Add Billing Info
                            </button>
                        </div>
                        {cardsElems}
                    </div>
                </div>
                <div className="row bi-3">
                    <div className="col-12 text-right">
                        <button id={'billing-info-next'} data-next style={{ display: 'none' }}>Next</button>
                        <button className="btn btn-primary turq-btn oss-13 white"
                            data-bs-toggle="modal"
                            data-bs-target="#pop-confirm-modal">Continue</button>
                    </div>
                </div>
                {/* <!---------------------------------- Update-card-detail---------------------------------->			 */}
                <div className="modal fade update-card" id="update-card1" tabIndex="-1" role="dialog" aria-labelledby="update-card1" aria-hidden="true" onClick={this.closeNResetCard}>
                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                        <div className="modal-content" onClick={(e) => { e.stopPropagation() }}>
                            <div className="modal-header">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                        <h1 className="osb-22 black">{'Add Billing Info'}</h1>
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
                                            submitTxt={'Save & Continue'}
                                            addCard={addCard}
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
                {/* <!---------------------------------- Confirm-popup---------------------------------->			 */}
                {/* <!-- Modal HTML --> */}
                <div id="pop-confirm-modal" className="modal fade">
                    <div className="modal-dialog modal-confirm">
                        <div className="modal-content">
                            <div className="modal-header flex-column">
                                <div className="icon-box">
                                    <i class="fa fa-question" aria-hidden="true"></i>
                                </div>
                                <h4 className="modal-title w-100">Confirm Order?</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                                    this.validateNNext()
                                }}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!---------------------------------- /Confirm-popup---------------------------------->			 */}
            </section >
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
        location: router.location
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingInfo)
