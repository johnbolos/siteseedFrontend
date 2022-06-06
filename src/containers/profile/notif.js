import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"
import { hideLoader, showLoader } from "../../reducers/actions"

class ProfileNotifSettings extends React.Component {
    state = {
        notifHTMLData: null
    }
    componentDidMount() {
        this.apiRequestNotifSettings()
    }
    // Notif tab functions
    apiRequestNotifSettings = async () => {
        let { dispatch } = this.props
        dispatch(showLoader())
        const apiRequest = await Request.getNotifSettings()
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to fetch data, Try Relogging' })
            return
        }
        this.setState({ notifData: apiRequest.user_notifications }, () => {
            this.createnotifHTMLData()
        })
    }
    createnotifHTMLData = () => {
        const { notifData } = this.state
        console.log(notifData, 'sss.p creating')
        let resp = notifData.map((notifItem, key) => {
            return (
                <li>
                    <label className="switch">
                        <input id="pmt-plan-toggle" type="checkbox" checked={notifItem.value} onChange={(e) => { this.notifDataChange(e.target.checked, key) }} />
                        <span className="slider round"></span>
                    </label>
                    <p className="oss-13 black">{_.startCase(notifItem.name)}</p>
                </li>
            )
        })
        this.setState({ notifHTMLData: resp })
    }
    notifDataChange = async (value, key) => {
        const { dispatch } = this.props
        let { notifData } = this.state
        notifData[key] = {
            ...notifData[key],
            value
        }
        dispatch(showLoader())
        const apiRequest = await Request.setNotifSettings({ user_notifications: notifData })
        dispatch(hideLoader())
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to save, try again' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message })
        this.apiRequestNotifSettings()
    }
    render() {
        const { dispatch, currentUser } = this.props
        const { notifHTMLData } = this.state
        return (
            <>
                <div className="notify-tab-content">
                    <div className="notify-tab-content-inner">
                        <div className="row">
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <h1 className="osb-22 black">Notifications Setting</h1>
                                <div className="notify-data">
                                    <div className=" p-data-cmn notify-data-row1">
                                        <p className="osb-22 black">Email Notifications</p>
                                        <p className="osr-13 darkgrey">Select the items below that you would like to receive an email notification for.  <br /> You can change these settings at any time.</p>
                                        {/* <form ref={(form) => this.notifForm = form}> */}
                                        <ul>
                                            {
                                                notifHTMLData && (
                                                    notifHTMLData
                                                )
                                            }
                                            {/* <li>
                                                    <label className="switch">
                                                        <input id="pmt-plan-toggle" type="checkbox" name={'notif'} defaultChecked />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <p className="oss-13 black">Announcements</p>
                                                </li>

                                                <li>
                                                    <label className="switch">
                                                        <input id="pmt-plan-toggle" type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <p className="oss-13 black">Onboarding</p>
                                                </li>

                                                <li>
                                                    <label className="switch">
                                                        <input id="pmt-plan-toggle" type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <p className="oss-13 black">Blog Newsletter</p>
                                                </li>

                                                <li>
                                                    <label className="switch">
                                                        <input id="pmt-plan-toggle" type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <p className="oss-13 black">Billing and account</p>
                                                </li>

                                                <li>
                                                    <label className="switch">
                                                        <input id="pmt-plan-toggle" type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <p className="oss-13 black">Activity</p>
                                                </li>

                                                <li>
                                                    <label className="switch">
                                                        <input id="pmt-plan-toggle" type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <p className="oss-13 black">Events</p>
                                                </li> */}
                                        </ul>
                                        {/* </form> */}
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 notify-tab-colr"></div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNotifSettings)
