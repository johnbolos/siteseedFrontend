import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"

class CodePreserve extends React.Component {
    state = {
        billingInfo: null,
        addCard: false,
        deleteCard: false,
        cardsElems: null,
        selectedMethod: null,
        subscriptionsElem: null,
        selectedSubscriptionId: null
    }
    componentDidMount() {
        this.apiRequestBilling()
    }
    apiRequestBilling = async () => {
        this.setState({ loading: true })
        const apiRequest = await Request.getBillingInfo()
        this.setState({ loading: false })
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to fetch data, Try Relogging' })
            return
        }

        this.setState({ billingInfo: apiRequest.data }, () => {
            this.createSubscriptionsElem()
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

    handleChangeSubscription = async (id) => {
        this.setState({ loading: true })
        let data = {
            subscription_plan_id: id
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.updateSubscriptionPlan(formData)
        this.setState({ loading: false })
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
        const { dispatch, currentUser } = this.props
        const { billingInfo, subscriptionsElem, selectedSubscriptionId } = this.state
        return (
            <>
                <div className="billing-tab-content">
                    <div className="billing-tab-content-inner">
                        <div className="row">
                            <div className="col-md-8 col-lg-8 col-sm-12 billing-tab-coll">
                                <h1 className="osb-22 black">Code Preserve</h1>
                                <div className="billing-data">
                                    {/* <div className=" p-data-cmn billing-data-row1">
                                        <div className={'right'}>
                                            <button className="btn btn-primary turq-btn oss-13 white " data-bs-toggle="modal" data-bs-target="#update-card1" onClick={() => { this.set({ addCard: true, selectedMethod: null }) }}>Add Card</button>
                                        </div>
                                        {cardsElems}
                                    </div> */}
                                    <div className=" p-data-cmn billing-data-row2">
                                        <p className="osb-22 black">Account Plan {'&'} Subscription</p>
                                        <ul>
                                            <li>
                                                <div className="left plan-heading oss-13 darkgrey">Plan Name</div>
                                                <div className="right p-name-ex oss-13 turq">{this.getPlanName(billingInfo && billingInfo.active_user_plan)}</div>
                                            </li>
                                            <li>

                                                <div className="left subscri-heading oss-13 darkgrey">Subscription Status</div>
                                                <div className="right subs-status oss-13 turq">{(billingInfo && billingInfo.active_user_plan) ? ((billingInfo.active_user_plan.end_date != "") ? billingInfo.active_user_plan.end_date : "Lifetime") : ('-')}</div>
                                            </li>
                                            <li>
                                                <div className="left period-start oss-13 darkgrey">Billing Period Start</div>
                                                <div className="right period-date oss-13 turq">{(billingInfo && billingInfo.active_user_plan) ? billingInfo.active_user_plan.billing_period_start : ('-')}</div>
                                            </li>
                                        </ul>
                                        <button type="button" className="btn btn-primary green-btn oss-13 white turq-bg" data-bs-toggle="modal" data-bs-target="#downgrade-plan1" >Change Subscription Plan</button>
                                    </div>
                                    <div className=" p-data-cmn billing-data-row3">
                                        <p className="osb-22 black">Domains</p>
                                        <ul>
                                            <li>
                                                <div className="left domain-heading oss-13 turq"><span className="icon-Globe"></span>mydomain.com</div>
                                                <div className="right domain-things">
                                                    <span className="domain-regis oss-13 darkgrey">Private Registration</span>
                                                    <span className="expiry domain-expiry oss-13 darkgrey redish-dark">Expired on 11/28/2021</span>
                                                    <span className="domain-renew oss-13 darkgrey" style={{ display: 'none' }}>Renews On 01/12/2021</span>
                                                    <span className="domain-action osb-13 turq"><a className="osb-13 turq">Renew Now</a></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="left domain-heading oss-13 turq"><span className="icon-Globe"></span>mydomain.com</div>
                                                <div className="right domain-things">
                                                    <span className="domain-regis oss-13 darkgrey">Private Registration</span>
                                                    <span className="expiry domain-expiry oss-13 darkgrey redish-dark" style={{ display: 'none' }}>Expired on 11/28/2021</span>
                                                    <span className="domain-renew oss-13 darkgrey">Renews On 01/12/2021</span>
                                                    <span className="domain-action osb-13 turq"><a className="osb-13 turq">Cancel Renewal</a></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=" p-data-cmn billing-data-row4">
                                        <p className="osb-22 black">Purchased Templates</p>
                                        <div className="table-responsive1">
                                            <table className="table table-bordered align-middle">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="oss-16 black">Categories</th>
                                                        <th scope="col" className="oss-16 black">Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="oss-13 black">Beauty {'&'} Wellness</td>
                                                        <td className="oss-13 turq">SiteSeed Beauty {'&'} Wellness Template</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="oss-13 black">Beauty {'&'} Wellness</td>
                                                        <td className="oss-13 turq">SiteSeed Beauty {'&'} Wellness Template</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="oss-13 black">Beauty {'&'} Wellness</td>
                                                        <td className="oss-13 turq">SiteSeed Beauty {'&'} Wellness Template</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="oss-13 black">Beauty {'&'} Wellness</td>
                                                        <td className="oss-13 turq">SiteSeed Beauty {'&'} Wellness Template</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="oss-13 black">Beauty {'&'} Wellness</td>
                                                        <td className="oss-13 turq">SiteSeed Beauty {'&'} Wellness Template</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 billing-tab-colr">
                                <p className="osr-13 darkgrey gs-border billing-data-row1r">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum eu dui vel tempor. Duis a tortor dignissim ante interdum.</p>
                                <p className="osr-13 darkgrey gs-border billing-data-row2r">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum eu dui vel tempor. Duis a tortor dignissim ante interdum.</p>
                                <p className="osr-13 darkgrey gs-border billing-data-row3r">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum eu dui vel tempor. Duis a tortor dignissim ante interdum.</p>
                                <p className="osr-13 darkgrey gs-border billing-data-row4r">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum eu dui vel tempor. Duis a tortor dignissim ante interdum.</p>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CodePreserve)
