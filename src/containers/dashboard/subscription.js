import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"
import StripeForm from "../../components/ui/stripe"
import { ReactComponent as VisaTextIcon } from "../../assets/website/icons/visaCardText.svg";
import visaTextImgUrl from "./VisaTextImg"
import { hideLoader, showLoader } from "../../reducers/actions"

class Subscriptions extends React.Component {
    state = {
        subscriptionInfo: null,
        subscriptionsElem: null,
        selectedSubscriptionId: null,
        viewDetailedCurrentPlan: false,
        createCurrentSubscriptionElem: null,
        planType: 'Monthly'
    }
    componentDidMount() {
        this.apiRequestSubscription()
    }
    apiRequestSubscription = async () => {
        const { dispatch } = this.props
        dispatch(showLoader())
        const apiRequest = await Request.getSubscriptionInfo()
        dispatch(hideLoader())
        
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to fetch data, Try Relogging' })
            return
        }
        

        
        this.setState({ subscriptionInfo: apiRequest.data }, () => {
            this.createCurrentSubscriptionElem()
            this.createSubscriptionsElem()
        })
    }
    createCurrentSubscriptionElem = () => {
        const { subscriptionInfo: { active_user_plan }, viewDetailedCurrentPlan } = this.state
        let resp = null
        resp = (
            <div>
                <div className="subscription-data-row1-inner subscription-elem-container"
                    // style={paymentMethod.is_default ? { margin: '15px 0px', padding: '0px' } : { padding: '0px', display: 'flex' }}
                    style={{ padding: '0px', display: 'flex', margin: '1px' }}
                    // style={{ padding: '0px', display: 'flex', margin: '1px', cursor: 'pointer' }}
                    onClick={() => {
                        // this.setState({ viewDetailedCurrentPlan: !viewDetailedCurrentPlan }, this.createCurrentSubscriptionElem)
                    }}
                >
                    <div className="col-lg-3 col-md-3 col-sm-12 coll" style={{ padding: '16px 20px' }}>
                        <span className="oss-16" style={{ color: '#31CDB9' }}>{active_user_plan.name}</span>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 colr" style={{ padding: '16px 20px' }}>
                        <span className="oss-16 darkgrey">{(active_user_plan.end_date == '') ? '-' : active_user_plan.end_date}</span>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 colr" style={{ display: 'flex', padding: '16px 20px' }}>
                        <span className="oss-16 darkgrey">{active_user_plan.validity}</span>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 colr" style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px' }}>
                        <div className={'left'}>
                            <span className="oss-16" style={{ color: '#31CDB9' }}>Active</span>
                        </div>
                        {/* <div className={'right'}>
                            <i className="fa fa-chevron-down" aria-hidden="true" style={{ transition: '1s', transform: (viewDetailedCurrentPlan) ? 'rotateZ(180deg)' : 'rotateZ(0deg)' }}></i>
                        </div> */}
                    </div>
                </div>
                {
                    <div style={{ width: '100%', display: 'flex', overflow: 'hidden', transition: '1s', height: (viewDetailedCurrentPlan) ? "170px" : '0px' }}>
                        <div style={{ width: '75%', color: '#011627', padding: '16px 20px' }}>
                            <div style={{ width: '100%', display: 'flex', padding: '5px 0px', color: '#67737D' }}>
                                <span className={"oss-16 light-weight"} style={{ width: '35%' }}>Last Payment:</span>
                                <span className={"oss-16 light-weight"} style={{ display: 'flex', alignItems: 'center' }}>{active_user_plan.billing_period_start}</span>
                            </div>
                            <div style={{ width: '100%', display: 'flex', padding: '5px 0px', color: '#67737D' }}>
                                <span className={"oss-16 light-weight"} style={{ width: '35%' }}>Renewal:</span>
                                <span className={"oss-16 light-weight"} style={{ display: 'flex', alignItems: 'center' }}>
                                    {active_user_plan.end_date == '' ?
                                        ("-") : (
                                            <>
                                                {active_user_plan.end_date}
                                                {/* {active_user_plan.end_date + ' | '}<p style={{ margin: 0, color: '#31CDB9', cursor: 'pointer' }}>Payment Details</p> */}
                                            </>
                                        )}</span>
                            </div>
                            <div style={{ width: '100%', display: 'flex', padding: '5px 0px', color: '#67737D' }}>
                                <span className={"oss-16 light-weight"} style={{ width: '35%' }}>Expiration Date:</span>
                                <span className={"oss-16 light-weight"} style={{ display: 'flex', alignItems: 'center' }}>{(active_user_plan.end_date == '') ? '-' : active_user_plan.end_date}</span>
                            </div>
                            <div style={{ width: '100%', display: 'flex', padding: '5px 0px', color: '#67737D' }}>
                                <span className={"oss-16 light-weight"} style={{ width: '35%' }}>Payment Method:</span>
                                <span className={"oss-16 light-weight"} style={{ display: 'flex', alignItems: 'center' }}>
                                    {
                                        active_user_plan.brand == 'Visa' ? <img src={visaTextImgUrl} height={'9px'} width={'28px'} style={{ margin: '3px 5px 0px 0px' }} /> : active_user_plan.brand
                                    }
                                    {' ending in '}
                                    {
                                        active_user_plan.card && active_user_plan.card
                                    }
                                    {/* {' ending in 4615 |'}
                                    <p style={{ margin: 0, color: '#31CDB9', cursor: 'pointer' }}>Update Payment Method</p> */}
                                </span>
                            </div>
                            <div style={{ width: '100%', display: 'flex', padding: '5px 0px', color: '#67737D' }}>
                                <span className={"oss-16 light-weight"} style={{ width: '35%' }}>Status:</span>
                                <span className={"oss-16 light-weight"} style={{ display: 'flex', alignItems: 'center' }}>
                                    Active
                                    {/* {"Active | "}<p style={{ margin: 0, color: '#31CDB9', cursor: 'pointer' }}>Cancel Plan</p> */}
                                </span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
        this.setState({ currentSubscriptionElem: resp })
    }
    createSubscriptionsElem = () => {
        const { subscriptionInfo, planType } = this.state
        if (!subscriptionInfo.other_plans) { return }
        let resp = subscriptionInfo.other_plans.map((plan, key) => {
            let validityPeriod = null
            switch (planType) {
                case 'lifetime':
                    break;
                case 'Monthly':
                    validityPeriod = '/mo'
                    break;
                case 'Yearly':
                    validityPeriod = '/yr'
                    break;
            }
            let features = plan.features.split('<br/>')
            return (
                <li key={key}>
                    <h1 className="osb-22 black">{plan.name}</h1>
                    <p className="dm-text osr-13 darkgrey">{plan.description}</p>
                    <p className="prize-month osb-32 turq">${planType == 'Monthly' ? plan.price_monthly : plan.price_yearly} {validityPeriod && <sub className="osr-13 darkgrey"> {validityPeriod} </sub>}</p>
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
                        {features.map((val, key) => <li key={key}><span className="icon-Tick turq" style={{ marginRight: '10px' }}></span><span>{val}</span></li>)}
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
    handleChangeSubscription = async (id) => {
        const { dispatch } = this.props
        dispatch(showLoader())
        let data = {
            subscription_plan_id: id,
            plan_type: _.lowerCase(this.state.planType)
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
        this.props.getDashboardData()
        this.apiRequestSubscription()
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
        const { dispatch, currentUser } = this.props
        const { subscriptionsElem, selectedSubscriptionId, currentSubscriptionElem, planType } = this.state
        return (
            <>
                <div className={'subscription-tab-content'}>
                    <h1 className="osb-22 black" style={{ margin: '50px 0px 20px 0px' }}>Subscriptions</h1>
                    <div className={'row'}>
                        <div className={'col-md-8 col-lg-8 col-sm-12 subscription-tab-coll'}>
                            <h1 className="osb-22 black" style={{ background: 'transparent', border: 'none' }}>Manage your Subscriptions</h1>
                            <span className="darkgrey" style={{ background: 'transparent', border: 'none' }}>
                                View, manage or cancel your Premium subscriptions and paid services.
                            </span>
                            <div className="subscription-data-row1-inner" style={{ padding: '0px', display: 'flex', margin: '50px 0px 6px 0px', background: 'transparent' }}>
                                <div className="col-lg-3 col-md-3 col-sm-12 coll" style={{ padding: '0px' }}>
                                    <span className="oss-16 black">Subscription</span>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 colr" style={{ padding: '0px 0px 0px 20px' }}>
                                    <span className="oss-16 black">Renewal</span>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 coll" style={{ padding: '0px 0px 0px 20px' }}>
                                    <span className="oss-16 black">Billing Cycle</span>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 colr" style={{ padding: '0px 0px 0px 20px' }}>
                                    <span className="oss-16 black">Status</span>
                                </div>
                            </div>
                            <div className={'subscription-container'} style={{ marginBottom: '50px' }}>
                                {currentSubscriptionElem}
                            </div>
                            <hr style={{ margin: '0px -30px' }} />
                            <div className={'change-plan-heading'}>
                                <h1 className="osb-22 black" style={{ background: 'transparent', border: 'none' }}>Account Plans</h1>
                                <div className="notify-data-row1" style={{ borderBottom: 'none' }}>
                                    <label className="form-label oss-16 black">Monthly</label>
                                    <label className="switch">
                                        <div className="">
                                            <input id="default-toggle" type="checkbox" checked={planType != 'Monthly'} onChange={() => {
                                                this.setState({ planType: planType != 'Monthly' ? 'Monthly' : 'Yearly' }, () => { this.createSubscriptionsElem() })
                                            }} />
                                            <span className="slider round" for="default-toggle"></span>
                                        </div>
                                    </label>
                                    <label className="form-label oss-16 black">Yearly</label>
                                </div>
                            </div>
                            <span className="darkgrey" style={{ background: 'transparent', border: 'none', width: '75%', marginBottom: '30px' }}>
                                Downgrade to a lower-priced plan with less features. Pay only for what you need. You can always come back to upgrade later.
                            </span>
                            <ul className="change-plan">
                                {
                                    subscriptionsElem
                                }
                            </ul>
                        </div>
                        <div className={'col-md-4 col-lg-4 col-sm-12 subscription-tab-colr'}>

                        </div>
                    </div>
                </div>
                {/* <!---------------------------------- Downgrade Subscription Plan---------------------------------->			 */}
                <div className="modal fade downgrade-plan" id="downgrade-plan1" tabIndex="-1" role="dialog" aria-labelledby="downgrade-plan" aria-hidden="true">
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
                </div>
                {/* <!---------------------------------- /Downgrade Subscription Plan----------------------------------> */}
                {/* <!---------------------------------- Confirm-Subscription-Plan-Change---------------------------------->			 */}
                {/* <!-- Modal HTML --> */}
                <div id="pop-confirm-modal-subscription" className="modal fade">
                    <div className="modal-dialog modal-confirm">
                        <div className="modal-content">
                            <div className="modal-header flex-column">
                                <div className="icon-box">
                                    <i class="fa fa-question" aria-hidden="true"></i>
                                </div>
                                <h4 className="modal-title w-100">Are you sure?</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            {/* <div className="modal-body">
                                <p>Do you really want to change your subscription?</p>
                            </div> */}
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
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions)
