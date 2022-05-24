import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"
import { hideLoader, showLoader } from "../../reducers/actions"
import { getPushPathWrapper, getPushPathWrapperWithObj } from "../../routes"

class AccountNSecurity extends React.Component {
    state = {

    }
    componentDidMount() {
        // this.renderCollaborators()
    }
    getFormData = (form) => {
        const formEntries = new FormData(form).entries();
        return Object.assign(...Array.from(formEntries, ([name, value]) => ({ [name]: value })));
    }
    renderCollaborators = () => {
        let { contributors, userSites, dispatch } = this.props
        console.log(userSites, contributors, 'sss.p...account')
        if (!userSites || !contributors) {
            return null
        }

        return userSites.map((site, key) => {
            let currentSiteContributors = contributors.filter((item) => item.site_id == site.site_id)
            return <>
                <button className="accordion" onClick={(e) => {
                    let btn = document.querySelector(".sc-accordion").children[((key + 1) * 2) - 2]
                    if (btn.classList.contains('active')) {
                        btn.parentElement.children[((key + 1) * 2) - 1].style.maxHeight = '0px'
                        btn.classList.remove("active")
                    } else {
                        btn.parentElement.children[((key + 1) * 2) - 1].style.maxHeight = '186px'
                        btn.classList.add("active")
                    }
                }}><span className="icon-Globe"></span><h3 className="oss-13 turq">{site.site_name}</h3></button>
                <div className="panel">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <ul style={{ width: '100%' }}>
                                {currentSiteContributors.map(collab => (
                                    <li>
                                        <div className="left">
                                            <span className="synom-left osb-13 white">{collab.name.split(" ").map((n) => n[0].toUpperCase()).join("")}</span>
                                            <span className="synom-right-main" style={{ display: 'flex', paddingLeft: '10px', flexDirection: 'column' }}>
                                                <span className="synom-right-name oss-13 black">{collab.name}</span>
                                                <span className="synom-right-email osr-9 darkgrey">{collab.email}
                                                    <span className="synom-divider">|</span>
                                                    <span className="synom-role">{collab.role}</span></span>
                                            </span>

                                        </div>
                                        <div className="right">
                                            <a className="expnd" onClick={() => {
                                                dispatch(getPushPathWrapperWithObj('siteSettings', { tab: 'contributor' }, { siteId: '1' }))
                                                // dispatch(getPushPathWrapper('siteSettings', {siteId: '1'}))
                                                // dispatch(getPushPathWrapper('siteSettings', { siteId: 1 }))
                                            }}><span className="icon-Expand darkgrey"></span></a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        })
        // return contributors.map(item => {

        //     <>
        //         <button className="accordion"><span className="icon-Globe"></span><h3 className="oss-13 turq">{(userSites.find(site => site.site_id == item.site_id)).site_name}</h3></button>
        //         <div className="panel">
        //             <div className="row">
        //                 <div className="col-sm-12 col-md-12 col-lg-12">
        //                     <ul>
        //                         <li>
        //                             <div className="left">
        //                                 <span className="synom-left osb-13 white">{item.name.split(" ").map((n) => n[0].toUpperCase()).join("")}</span>
        //                                 <span className="synom-right-main">
        //                                     <span className="synom-right-name oss-13 black">{item.name}</span>
        //                                     <span className="synom-right-email osr-9 darkgrey">{item.email}
        //                                         <span className="synom-divider">|</span>
        //                                         <span className="synom-role">{item.role}</span></span>
        //                                 </span>

        //                             </div>
        //                             <div className="right">
        //                                 <a className="expnd" href=""><span className="icon-Expand darkgrey"></span></a>
        //                             </div>
        //                         </li>
        //                         <li>
        //                             <div className="left">
        //                                 <span className="synom-left osb-13 white">GJ</span>
        //                                 <span className="synom-right-main">
        //                                     <span className="synom-right-name oss-13 black">Greg Jacoby</span>
        //                                     <span className="synom-right-email osr-9 darkgrey">gregjacoby@example.com
        // 																					<span className="synom-divider">|</span>
        //                                         <span className="synom-role">Admin</span></span>
        //                                 </span>

        //                             </div>
        //                             <div className="right">
        //                                 <a className="expnd" href=""><span className="icon-Expand darkgrey"></span></a>
        //                             </div>
        //                         </li>
        //                         <li>
        //                             <div className="left">
        //                                 <span className="synom-left osb-13 white">GJ</span>
        //                                 <span className="synom-right-main">
        //                                     <span className="synom-right-name oss-13 black">Greg Jacoby</span>
        //                                     <span className="synom-right-email osr-9 darkgrey">gregjacoby@example.com
        // 																					<span className="synom-divider">|</span>
        //                                         <span className="synom-role">Admin</span></span>
        //                                 </span>

        //                             </div>
        //                             <div className="right">
        //                                 <a className="expnd" href=""><span className="icon-Expand darkgrey"></span></a>
        //                             </div>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </>
        // })
    }
    // Account Security tab
    handleSecuritySubmit = async (e) => {
        const { dispatch } = this.props
        const { profilePic } = this.state
        e.preventDefault()
        let data = this.getFormData(e.target)
        if (data.current_password.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Current Password' })
            return
        }
        if (data.new_password.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter New Password' })
            return
        }
        if (data.confirm_password.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Confirm Password' })
            return
        }
        if (data.new_password != data.confirm_password) {
            showToast({ type: 'error', message: 'New Password and Confirm Password do not match' })
            return
        }
        dispatch(showLoader())
        const apiRequest = await Request.updatePassword(data)
        dispatch(hideLoader())
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to save, try again' })
            return
        }
        if (apiRequest.message == 'Invalid password') {
            showToast({ type: 'error', message: 'Invalid Current Password' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message || 'Updated Successfully' })
        this.securityForm.reset()
    }

    render() {
        const { dispatch, currentUser } = this.props
        const { notifHTMLData } = this.state
        return (
            <>
                <div className="account-tab-content">
                    <div className="account-tab-content-inner">
                        <div className="row">
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <h1 className="osb-22 black">Account {'&'} Security</h1>
                                <div className="account-data">
                                    <div className=" p-data-cmn account-data-row1">
                                        <p className="osb-22 black">Change Password</p>
                                        <form onSubmit={this.handleSecuritySubmit.bind(this)} ref={(form) => this.securityForm = form}>
                                            <div className="">
                                                <label htmlFor="current-password" className="form-label oss-16 black">Current Password</label>
                                                <input type="password" className="form-control" id="current-password" required name={'current_password'} />
                                            </div>
                                            <div className="">
                                                <label htmlFor="new-password" className="form-label oss-16 black">New Password</label>
                                                <input type="password" className="form-control" id="new-password" required name={'new_password'} />
                                            </div>
                                            <div className="">
                                                <label htmlFor="confirm-password" className="form-label oss-16 black">Confirm Password</label>
                                                <input type="password" className="form-control" id="confirm-password" required name={'confirm_password'} />
                                            </div>
                                            <button type="submit" className="btn btn-primary green-btn oss-13 white">Save Changes</button>
                                        </form>
                                    </div>
                                    <div className=" p-data-cmn account-data-row2">
                                        <p className="osb-22 black">Two-Factor Authentication</p>
                                        <p className="osr-13 darkgrey">Enable Two-Factor Authentication to add an extra layer of security to your account.  If you enable this feature, <br /> we will ask for a unique authentication code each time you log in.</p>
                                        <button type="submit" className="btn btn-primary green-btn oss-13 white">Enable Two-Factor Authentication</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 account-tab-colr">
                                {/* <p className="oss-22 black gs-border">Start Collaborating.</p>
                                <div className="account-tab-colr-inner">
                                    <p className="osr-13 darkgrey">Invite friends, colleagues, clients, and anyone else you choose <br /> to provide feedback and notes on your websites and help improve your site.  </p>
                                    <div className="upgrade-plan">
                                        <p className="oss-13 black">Upgrade your plan now to get started!</p>
                                        <button type="submit" className="btn btn-primary green-btn oss-13 white">Upgrade your plan</button>
                                    </div>
                                    <div className="invite-people" style={{ display: 'none' }}>
                                        <p className="oss-13 black">This feature is included free with your plan!</p>
                                        <button type="submit" className="btn btn-primary green-btn oss-13 white">+ Invite People</button>
                                    </div>
                                </div> */}

                                <div className="account-tab-colr-inner1" style={{ padding: 0, border: 'none' }}>
                                    <p className="oss-22 black gs-border">Site Collaborators</p>
                                    <div className="account-tab-colr-inner1d">
                                        <p className="osr-13 darkgrey">Invite friends, colleagues, clients, or whoever you want to provide feedback and insights on your site.  </p>
                                        <div className="sc-accordion">
                                            {this.renderCollaborators()}
                                        </div>
                                    </div>
                                </div>
                            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(AccountNSecurity)
