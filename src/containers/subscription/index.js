import React, {useState, useEffect} from 'react'
import _ from 'lodash'
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch, connect } from 'react-redux'
import { showToast } from "../../components/utils"
import Request from '../../request'
import LoggedinHeader from '../../layout/loggedinLayouts/header'
import { setGeneralData } from "../../reducers/actions/userActions"
import { hideLoader, showLoader } from "../../reducers/actions"
import Modal from 'react-bootstrap/Modal'
import { apiUrl } from "../../settings"
import Icons from "../../assets/Icons"

import SubscriptionFeature from './subscription_features'

import './index.scss'

const Subscription = () => {
    const dispatch = useDispatch();
    const [subscription, setSubscription] = useState([])
    const [priceYearly, setPriceYearly] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const [show, setShow] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState([])
    const { currentUser, tokenInfo, generalData, loading } = useSelector(
		(state) => ({
            loading: state.global.loading,
			currentUser: state.global.currentUser,
			tokenInfo: state.global.tokenInfo,
            generalData: state.global.generalData
		})
	)

    async function apiRequestSubscription(){
        dispatch(showLoader())
        const apiRequest = await Request.getSubscriptionInfo()
        dispatch(hideLoader())

        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to fetch subscription data, Try Relogging' })
            return
        }

        setSubscription( apiRequest.data )
    }

    const yearToggle = () => {
        setPriceYearly(!priceYearly)
    }

    async function updateSubscription( planData ){
        dispatch(showLoader())

        let planType = !priceYearly ? 'monthly' : 'yearly';

        let data = {
            subscription_plan_id: planData.plan_id,
            plan_type: _.lowerCase( planType )
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

        setRefetch(true)
    }

    useEffect(() => {
        async function dataRefetch(){
            const apiRequest = await Request.dashboard()
            dispatch( setGeneralData( apiRequest.data ) )

            apiRequestSubscription()

            setRefetch(false)
        }

        if( refetch ){
            dataRefetch()
        }
    }, [refetch])


    useEffect(() => {
        apiRequestSubscription()
    }, [])

    useEffect(() => {
        
    }, [priceYearly])

    return(
        <>
            {
                loading && <div className={'backdrop-loading'}>
                    <Icons.Loading style={{ width: '70px', height: '70px' }} className={'searchLoading'} />
                </div>
            }

            <Modal className="custom-modal changePlanConfirmation" show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Subscription</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <div className="col-12">
                            <div className="icon-box">
                                <i class="fa fa-question" aria-hidden="true"></i>
                            </div>
                            <h2>Are you sure?</h2>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="delete-btn" onClick={() => { updateSubscription( selectedPlan ); setShow(false); }}>Change</button>
                </Modal.Footer>
            </Modal>

            <LoggedinHeader />
            <div className="loggedin-content-container">
                <div className="container flex-column">
                    <h1>Subscriptions</h1>

                    <div className="d-flex flex-wrap">
                        <div className="col-12 subscription-settings">
                            <div className="d-flex flex-wrap">
                                <div className="col-12">
                                    <h2>Manage your Subscriptions</h2>
                                    <p>View, manage or cancel your Premium subscriptions and paid services.</p>
                                </div>
                                <div className="col-12">
                                    <Table responsive className="subscription-table">
                                        <thead>
                                            <tr>
                                                <th>Subscription</th>
                                                <th>Renewal</th>
                                                <th>Billing Cycle</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { subscription.length === 0 ?
                                            <tr>
                                                <td colSpan="4" className="text-center no-subscription">
                                                    <svg viewBox="0 0 210 297" >
                                                        <path d="m16.9 279.4c-3.2-0.7-5.4-2.2-6.5-4.5-0.5-1-0.5-2.2-0.6-100.2l-0.1-99.2 0.5-1.5c0.7-1.8 2.2-3.5 4.2-4.4l1.5-0.7 21.3-0.1 21.3-0.1 0.1-21.5 0.1-21.5 0.6-1.1c0.9-1.8 2.1-2.9 3.7-3.7l1.5-0.7h66.9 66.9l1.5 0.7c1.6 0.8 2.8 2 3.7 3.7l0.6 1.1v99.8 99.8l-0.7 1.4c-0.4 0.7-1.3 1.8-1.9 2.4-2.3 2-1.2 1.9-24.7 1.9h-21l0 20.1c0 12.5-0.1 20.7-0.3 21.8-0.4 2.7-1.7 4.8-3.8 6.2l-1.1 0.7-66 0c-55 0-66.3-0.1-67.7-0.4zm121.6-16.5 0.8-0.8v-15.5-15.5l-9 0.1-9 0.1-1.7-0.8c-1.5-0.8-4.3-3.5-30.7-30.1C68.1 179.2 59.7 170.5 59.2 169.6L58.6 168.4 58.4 126.8 58.3 85.1H43c-14.2 0-15.3 0-16 0.5-0.4 0.3-0.8 0.8-1 1.1-0.2 0.4-0.2 33-0.2 87.8 0 93.7-0.1 87.9 1.3 88.7 0.5 0.3 10.5 0.4 55.6 0.4l55 0zm47.8-48.1c1.9-0.8 1.7 7.5 1.7-89.3V38.1L187.3 37.2 186.5 36.4H131.3 76.1l-0.8 0.9-0.8 0.9v64 64l29.4 0.1 29.4 0.1 1.3 0.7c1.7 0.9 3.1 2.4 3.9 4.1l0.6 1.3 0.1 21.4 0.1 21.4h23.1c19.3 0 23.2-0.1 24-0.4zm-57.1-65.1c-3.6-1.2-5.9-4.3-5.9-7.9 0-3 1.7-5.8 4.4-7.2 1.2-0.6 1.7-0.7 3.6-0.7 1.9 0 2.4 0.1 3.6 0.7 7.3 3.8 5 14.8-3.2 15.2-1 0-2.2 0-2.5-0.1zm0.4-32.1c-2.5-0.7-4.3-2.1-5.5-4.5l-0.9-1.8V85.5c0-29.1-0.1-27.4 2-29.8 1.6-1.8 3.6-2.7 6.1-2.7 4.3 0 7.3 2.7 8 7.1 0.2 1 0.2 11.3 0.2 26.4l-0.1 24.8-0.7 1.5c-0.9 2-2.1 3.3-3.8 4.1-1.5 0.7-4 1-5.3 0.7zm-6.9 66.2c-0.8-1.6-0.5-1.6-16.9-1.5l-15 0.1 16.1 16.3 16.1 16.3 0.1-15.2c0.1-13.2 0-15.3-0.3-15.9z" strokeWidth="0.3"></path>
                                                    </svg>
                                                    <span>No Subscription!</span>
                                                </td>
                                            </tr>
                                            :
                                            <tr>
                                                <td>{ subscription?.active_user_plan.name }</td>
                                                <td>{ subscription?.active_user_plan.validity !== 'lifetime' ? subscription?.active_user_plan.end_date : '-' }</td>
                                                <td>{ subscription?.active_user_plan.validity }</td>
                                                <td>{ subscription?.active_user_plan.length !== 0 ? 'Active' : '-' }</td>
                                            </tr>
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>

                        { subscription?.other_plans?.length !== 0 &&
                        <div className="col-12 subcription-other-plans">
                            <div className="d-flex justify-space-between other-plan-header">
                                <div className="col-6">
                                    <h2>Account Plans</h2>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex justify-space-end  align-center">
                                        <h3>Monthly</h3>
                                        <div className={`pricing-toggle-wrapper ${ priceYearly ? 'annual' : '' }`} onClick={yearToggle}><span></span></div>
                                        <h3>Yearly</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap other-plan-items">
                                <div className="col-12 py-3">
                                    <p>Downgrade to a lower-priced plan with less features. Pay only for what you need. You can always come back to upgrade later.</p>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex flex-wrap">
                                    { subscription?.other_plans?.map((item, index) => (
                                        <div className="col-4" key={index}>
                                            <div className="other-plan-wrapper">
                                                <h3>{ item.name }</h3>
                                                <p>{ item.description }</p>
                                                <h2 className={`${ item.name === 'Free' ? 'freePlan' : '' }`}>${ priceYearly ? item.price_yearly : item.price_monthly }<sub>/{ priceYearly ? 'Year' : 'Month' }</sub></h2>
                                                {/* <p className="mb-1 price-per-label">Per { priceYearly ? 'Year' : 'Month' }</p> */}
                                                <button className="btn-primary" onClick={() => { setSelectedPlan(item); setShow(true) }}>Change</button>
                                                { item.features && 
                                                    <SubscriptionFeature features={item.features} />
                                                }
                                            </div>
                                        </div>
                                    )) }
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
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
        generalData: global.generalData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Subscription);