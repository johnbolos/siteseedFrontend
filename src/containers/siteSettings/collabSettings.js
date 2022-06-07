import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"
import { setTokenInfo, setUser } from "../../reducers/actions/userActions"
import { getPushPathWrapper, getUrlParams } from "../../routes"
import { apiUrl, assetsUrl } from "../../settings"
import { hideLoader, showLoader } from "../../reducers/actions"
import { ReactComponent as Empty } from "../../assets/website/icons/empty.svg";


class CollabSettings extends React.Component {
    state = {
        data: null,
        settingsData: null,
        collabElemts: [],
        inviteRole: 1,
    }
    componentDidMount() {
        this.setState({ site_id: this.props.siteId }, () => {
            this.apiRequestCollabSettings()
        })
        // this.setState({ site_id: getUrlParams('siteSettings', this.props.pathname).siteId }, () => {
        //     this.apiRequestCollabSettings()
        // })
    }
    componentDidUpdate(prevProps) {
        
        if( prevProps.siteId !== this.props.siteId ){
            this.setState({ site_id: this.props.siteId }, () => {
                this.apiRequestCollabSettings()
            })
        }
        
    } 
    apiRequestCollabSettings = async () => {
        let { dispatch } = this.props
        const { site_id } = this.state
        if (!site_id) {
            return
        }
        dispatch(showLoader())
        const apiRequest = await Request.getProfile()
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to fetch data, Try Relogging' })
            return
        }
        const siteCollaborators = apiRequest.contributors.filter((collab, key) => collab.site_id == site_id)
        this.setState({ settingsData: siteCollaborators })
        this.createCollabListElem()
        // this.setFormFields(apiRequest.form_settings, this.formSettingForm)
    }
    createCollabListElem = () => {
        const { settingsData: collaborators } = this.state
        const collabElemts = collaborators.map((collab) => {
            const getInitials = (name) => {
                if (name.includes(' ')) {
                    return name.split(" ").map((n) => n[0].toUpperCase()).join("")
                } else {
                    return `${_.upperCase(name[0]) + name[1]}`
                }
            }
            let inviteRole = 1
            switch (collab.role) {
                case 'Preview Only':
                    inviteRole = 1
                    break;
                case 'Editor':
                    inviteRole = 2
                    break;
                case 'Admin':
                    inviteRole = 3
                    break;
            }
            return (
                <tr>
                    <td scope="row" style={{ textAlign: 'center' }} className="osb-16 white lhead"><span className="name-pre">{getInitials(collab.name)}</span></td>
                    <td className="oss-13 black">{collab.name} <br /> <span className="osr-11 darkgrey">{collab.email}</span></td>
                    <td className="oss-13 black">{collab.role}</td>
                    <td className="oss-13 black">{moment(collab.added_on, 'yyyy-mm-dd').format("MMM DD, YYYY")}</td>
                    <td className="csd-down">
                        <a className="nav-link dropdown-toggle right-top black osr-13" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="icon-Ellipsis"></span>
                        </a>
                        <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown" style={{ height: 'fit-content' }}>
                            <li
                                data-bs-toggle="modal" data-bs-target="#change-role-contributor1"
                                onClick={() => {
                                    this.setState({ selectedCollab: collab.contributor_id, inviteRole })
                                }}>
                                <a className="dropdown-item osr-13 darkgrey"><span className="icon-Edit"></span>Change Role</a>
                            </li>
                            <li>
                                <a className="dropdown-item osr-13 darkgrey"><span className="icon-Redo"></span>Resend Invite</a>
                            </li>
                            <li data-bs-toggle="modal" data-bs-target="#delete-confirm1" onClick={() => {
                                this.setState({ selectedCollab: collab.contributor_id })
                            }}>
                                <a className="dropdown-item osr-13 darkgrey"><span className="icon-Remove-User"></span>Remove</a>
                            </li>
                        </ul>
                    </td>
                </tr>
            )
        })
        this.setState({ collabElemts })
    }
    goto = (key, params = {}) => {   // push to the specifies location/key
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
    inviteContributor = async () => {
        const { dispatch } = this.props
        const { site_id, inviteRole } = this.state
        let contribName = document.querySelector('#contributor-name').value,
            contribEmail = document.querySelector('#contributor').value;
        if (contribEmail.trim() == '' || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(contribEmail)) {
            showToast({ type: 'error', message: 'Please Enter valid Contributor Email' })
            return
        }
        if (contribName.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Contributor Name' })
            return
        }
        let data = {
            site_id: site_id,
            name: contribName,
            email: contribEmail,
            role: inviteRole
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        dispatch(showLoader())
        const apiRequest = await Request.inviteContributor(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to Invite Contributor, try again' })
            return
        }
        showToast({ type: 'success', message: 'Contributor added successfully' })
        document.querySelector('#invite-contributor1 .close').click()
        this.apiRequestCollabSettings()
    }
    handleChangeRole = async () => {
        const { dispatch } = this.props
        const { inviteRole, selectedCollab, site_id } = this.state
        let data = {
            contributor_id: `${selectedCollab}`,
            site_id: `${site_id}`,
            role: `${inviteRole}`
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        dispatch(showLoader())
        const apiRequest = await Request.editCollabRole(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to Edit Role, try again later' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message || 'Role updated Successfully' })
        this.apiRequestCollabSettings()
    }
    handleRemoveContributor = async () => {
        const { dispatch } = this.props
        const { selectedCollab, site_id } = this.state
        let data = {
            contributor_id: `${selectedCollab}`,
            site_id: `${site_id}`,
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        dispatch(showLoader())
        const apiRequest = await Request.removeCollab(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to remove Contributor, try again later' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message || 'Contributor removed Successfully' })
        this.apiRequestCollabSettings()
    }
    render() {
        const { dispatch, currentUser, userS3Dir } = this.props
        const { inviteRole, site_id } = this.state
        return (
            <>
                <div className="tab-pane fade" id="ds-contributor" role="tabpanel" aria-labelledby="nav-contributor-tab">
                    <div className="dash-set-tab-content main-contributor-tab">
                        <div className="dash-set-tab-content-inner">
                            <div className="row">
                                <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                    <h1 className="osb-22 black">Contributor</h1>
                                    <div className="dash-set-data">
                                        <div className=" p-data-cmn dash-set-data-row1">
                                            <p className="osb-22 black">Roles {'&'} Permissions</p>
                                            <div className="dash-set-data-row1-left">
                                                <p className="osr-13 darkgrey">View and modify who has access to your site, their role, and when they were added. <a className="oss-13 turq">Learn more</a></p>
                                            </div>
                                            <div className="dash-set-data-row1-right">
                                                <button id="invite-people" type="button" className="oss-13 turq" data-bs-toggle="modal" data-bs-target="#invite-contributor1">+ Invite People</button>
                                            </div>
                                        </div>
                                        <div className=" p-data-cmn dash-set-data-row2">
                                            <div className="table-responsive" style={{ paddingBottom: '35px' }}>
                                                <table className="table table-bordered align-middle">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col"></th>
                                                            <th scope="col" className="oss-13 black">Name</th>
                                                            <th scope="col" className="oss-13 black">Role</th>
                                                            <th scope="col" className="oss-13 black">Joined On</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.state.collabElemts.length ? this.state.collabElemts : (
                                                                <tr>
                                                                    <td scope="row" className="osb-16 white lhead" style={{ border: '0px' }}></td>
                                                                    <td className="oss-13 black" style={{ border: '0px' }}></td>
                                                                    <td className="oss-13 black" style={{ border: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                        <Empty height={'auto'} width={'70px'} style={{ fill: '#67737D' }} />
                                                                        <span className="oss-16 darkgrey">No contributors added to this site yet!</span>
                                                                    </td>
                                                                    <td className="oss-13 black" style={{ border: '0px' }}></td>
                                                                    <td className="csd-down" style={{ border: '0px' }}></td>
                                                                </tr>
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                    <div className="dash-set-data-colr1">
                                        {/* <!--<p className="osr-13 darkgrey gs-border">You can create and retrieve Adobe Fonts API tokens on your <a className="turq oss-13">Adobe Fonts account page.</a></p>-->												 												 */}
                                    </div>
                                </div>

                                {/* <!---------------------------------- Invite Contributor---------------------------------->			 */}
                                <div className="modal fade invite-contributor" id="invite-contributor1" tabIndex="-1" role="dialog" aria-labelledby="invite-contributor1" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <div className="row">
                                                    <div className="col-lg-8 col-md-8 col-sm-12 coll">
                                                        <h1 className="osb-22 black" style={{ background: 'transparent', border: 'none' }}>Invite People to This Site</h1>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-12 colr">
                                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <p className="osr-13 darkgrey">
                                                            Submit an email below to give people access to this site and assign them roles.
                                                    {/* <span><a className="turq" href="">Learn more</a></span> */}
                                                        </p>
                                                        <div className="ic-cont" style={{ marginBottom: '10px' }}>
                                                            {/* <label>Name</label> */}
                                                            <input type="email" style={{ float: 'none', width: '100%' }} className="form-control osr-13 darkgrey" id="contributor-name" aria-describedby="emailHelp" placeholder="Contributor Name" />
                                                            {/* <button type="submit" className="btn btn-primary green-btn oss-13 white">Send</button> */}
                                                        </div>
                                                        <div className="ic-cont">
                                                            <input type="email" className="form-control osr-13 darkgrey" id="contributor" aria-describedby="emailHelp" placeholder="Enter an email address" />
                                                            <button type="submit" className="btn btn-primary green-btn oss-13 white" onClick={() => {
                                                                this.inviteContributor()
                                                            }}>Send</button>
                                                        </div>
                                                        <div className="general-roles">
                                                            <h2 className="osb-16 black">General Roles <span className="sup turq">*</span></h2>
                                                            <p>Assign roles to control what permissions are given to each person you invite.</p>
                                                            <ul>
                                                                <li>
                                                                    <div className="left"><input type="checkbox" checked={inviteRole == 3} className="" id="admin-co" autoComplete="off" onClick={() => {
                                                                        this.setState({ inviteRole: 3 })
                                                                    }} /></div>
                                                                    <div className="right">
                                                                        <h3 className="oss-13 black">Admin (Co-Owner)</h3>
                                                                        <p className="osr-13 darkgrey">Admins can view and manage settings, account and billing info, domains, invite more people, delete a site, and transfer a site.</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="left"><input type="checkbox" checked={inviteRole == 2} className="" id="edit-web" autoComplete="off" onClick={() => {
                                                                        this.setState({ inviteRole: 2 })
                                                                    }} /></div>
                                                                    <div className="right">
                                                                        <h3 className="oss-13 black">Editor</h3>
                                                                        <p className="osr-13 darkgrey">Editors can make changes to the site, but not account settings.  They can view your dashboard, but will only see the sites they have been invited to.</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="left"><input type="checkbox" checked={inviteRole == 1} className="" id="view-on" autoComplete="off" onClick={() => {
                                                                        this.setState({ inviteRole: 1 })
                                                                    }} /></div>
                                                                    <div className="right">
                                                                        <h3 className="oss-13 black">View Only</h3>
                                                                        <p className="osr-13 darkgrey">View Only access invites people to see the site. They will be unable to make any changes to the site or your account.</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <h2 className="oss-16 black"> Your Project invite link</h2>
                                                        <p>Invite people to preview your site by sending them the link below.</p>
                                                        <div className="ic-cont-btm">
                                                            <input type="text" className="form-control osr-13 darkgrey" id="invite-link" value={`${assetsUrl}/${userS3Dir}/sites/${site_id}/preview/index.html`} aria-describedby="emailHelp" placeholder="https://preview.siteseed.io/preview/naveens-initial-project-2-9e7c" />
                                                            <button type="submit" className="btn btn-primary green-btn oss-13 white" onClick={(e) => {
                                                                navigator.clipboard.writeText(`${assetsUrl}/${userS3Dir}/sites/${site_id}/preview/index.html`)
                                                                showToast({ type: 'success', message: 'Copied to clipboard' })
                                                            }}>Copy</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!---------------------------------- /Invite Contributor----------------------------------> */}


                                {/* <!---------------------------------- Change Role Contributor---------------------------------->			 */}
                                <div className="modal fade invite-contributor" id="change-role-contributor1" tabIndex="-1" role="dialog" aria-labelledby="invite-contributor1" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                        <div className="modal-content" style={{ paddingBottom: '10px' }}>
                                            <div className="modal-body" style={{ marginBottom: '0px' }}>
                                                <div className="row">
                                                    <div className="col-lg-11 col-md-11 col-sm-12 coll">
                                                        <h2 className="osb-16 black">General Roles <span className="sup turq">*</span></h2>
                                                        <p>Assign roles to control what permissions are given to each person you invite.</p>
                                                    </div>
                                                    <div className="col-lg-1 col-md-1 col-sm-12 colr">
                                                        <button style={{ background: 'transparent' }} type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="general-roles">
                                                            <ul>
                                                                <li>
                                                                    <div className="left"><input type="checkbox" checked={inviteRole == 3} className="" id="admin-co" autoComplete="off" onClick={() => {
                                                                        this.setState({ inviteRole: 3 })
                                                                    }} /></div>
                                                                    <div className="right">
                                                                        <h3 className="oss-13 black">Admin (Co-Owner)</h3>
                                                                        <p className="osr-13 darkgrey">Admins can view and manage settings, account and billing info, domains, invite more people, delete a site, and transfer a site.</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="left"><input type="checkbox" checked={inviteRole == 2} className="" id="edit-web" autoComplete="off" onClick={() => {
                                                                        this.setState({ inviteRole: 2 })
                                                                    }} /></div>
                                                                    <div className="right">
                                                                        <h3 className="oss-13 black">Editor</h3>
                                                                        <p className="osr-13 darkgrey">Editors can make changes to the site, but not account settings.  They can view your dashboard, but will only see the sites they have been invited to.</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="left"><input type="checkbox" checked={inviteRole == 1} className="" id="view-on" autoComplete="off" onClick={() => {
                                                                        this.setState({ inviteRole: 1 })
                                                                    }} /></div>
                                                                    <div className="right">
                                                                        <h3 className="oss-13 black">View Only</h3>
                                                                        <p className="osr-13 darkgrey">View Only access invites people to see the site. They will be unable to make any changes to the site or your account.</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div className="ic-cont" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                                <button type="submit" className="btn btn-primary green-btn oss-13 white" data-bs-dismiss="modal" onClick={() => {
                                                                    this.handleChangeRole()
                                                                }}>Change</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!---------------------------------- /Change Role Contributor----------------------------------> */}
                                {/* <!---------------------------------- Delete Confirmation---------------------------------->			 */}
                                <div className="modal fade delete-confirm" id="delete-confirm1" tabIndex="-1" role="dialog" aria-labelledby="delete-confirm1" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                        <h1 className="osb-22 black">Confirmation</h1>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 colr">
                                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <h2 className="oss-16 black">Sure you want to remove this contributor ? </h2>
                                                        <p className="osr-13 darkgrey ">You will not be able to undo this action.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary oss-13 white green-btn" data-bs-dismiss="modal" onClick={this.handleRemoveContributor}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!---------------------------------- /Delete Confirmation---------------------------------->					 */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
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
        userS3Dir: global.userS3Dir,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollabSettings)
