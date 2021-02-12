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


class CollabSettings extends React.Component {
    state = {
        data: null,
        settingsData: null
    }
    componentDidMount() {
        this.setState({ site_id: getUrlParams('siteSettings', this.props.pathname).siteId }, () => {
            this.apiRequestCollabSettings()
        })
    }
    apiRequestCollabSettings = async () => {
        let { dispatch } = this.props
        const { site_id } = this.state
        if (!site_id) {
            return
        }
        this.setState({ loading: true })
        const apiRequest = await Request.getProfile()
        console.log(apiRequest, 'sss.p collab settings')
        this.setState({ loading: false })
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to fetch data, Try Relogging' })
            return
        }
        const siteCollaborators = apiRequest.contributors.filter((collab, key) => collab.site_id == site_id)
        console.log(siteCollaborators, 'sss.p collab list')
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
                        <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Edit"></span>Change Role</a></li>
                            <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Redo"></span>Resend Invite</a></li>
                            <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Remove-User"></span>Remove</a></li>
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
            console.log('sss.p set form fiels', form.elements[key], val, key)
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
    handleCollabSettingSubmit = async (key, value) => {
        const { dispatch } = this.props
        const { faviconPic, settingsData, site_id } = this.state
        // if (data.site_name.trim() == '') {
        //     showToast({ type: 'error', message: 'Please Enter Site Name' })
        //     return
        // }
        // if (data.sub_domain.trim() == '') {
        //     showToast({ type: 'error', message: 'Please Enter sub-domain Name' })
        //     return
        // }
        let data = {
            ...settingsData,
            [key]: value,
            site_id: site_id
        }
        console.log(data, 'sss.p data,..')
        // let formData = new FormData()
        // _.each(data, (val, key) => {
        //     formData.append(key, val)
        // })
        this.setState({ loading: true })
        const apiRequest = await Request.setCollabSettings(data)
        console.log(apiRequest, 'sss.p submit')
        this.setState({ loading: false })
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to save, try again' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message || 'Profile updated Successfully' })
        this.apiRequestCollabSettings()
    }
    render() {
        const { dispatch, currentUser } = this.props
        const { } = this.state
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
                                                <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum velit a arcu accumsan suscipit. Maecenas rhoncus finibus ligula. Fusce rutrum leo pulvinar mauris mattis. <a className="oss-13 turq">Learn more</a></p>
                                            </div>
                                            <div className="dash-set-data-row1-right">
                                                <button id="invite-people" type="button" className="oss-13 turq" data-bs-toggle="modal" data-bs-target="#invite-contributor1">+ Invite People</button>
                                            </div>
                                        </div>
                                        <div className=" p-data-cmn dash-set-data-row2">
                                            <div className="table-responsive">
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
                                                            this.state.collabElemts
                                                        }
                                                        <tr>
                                                            <td scope="row" style={{ textAlign: 'center' }} className="osb-16 white lhead"><span className="name-pre">Gj</span></td>
                                                            <td className="oss-13 black">Greg Jacoby <br /> <span className="osr-11 darkgrey">gregjacoby@example.com</span></td>
                                                            <td className="oss-13 black">Admin</td>
                                                            <td className="oss-13 black">Jan, 1st 2021</td>
                                                            <td className="csd-down">
                                                                <a className="nav-link dropdown-toggle right-top black osr-13" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span className="icon-Ellipsis"></span>
                                                                </a>
                                                                <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                                    <li><a className="dropdown-item osr-13 darkgrey" href="#chnagerole"><span className="icon-Edit"></span>Change Role</a></li>
                                                                    <li><a className="dropdown-item osr-13 darkgrey" href="#resendinvite"><span className="icon-Redo"></span>Resend Invite</a></li>
                                                                    <li><a className="dropdown-item osr-13 darkgrey" href="#remove"><span className="icon-Remove-User"></span>Remove</a></li>

                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row" style={{ textAlign: 'center' }} className="osb-16 white lhead"><span className="name-pre">Gj</span></td>
                                                            <td className="oss-13 black">Greg Jacoby <br /> <span className="osr-11 darkgrey">gregjacoby@example.com</span></td>
                                                            <td className="oss-13 black">Admin</td>
                                                            <td className="oss-13 black">Jan, 1st 2021</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row" style={{ textAlign: 'center' }} className="osb-16 white lhead"><span className="name-pre">Gj</span></td>
                                                            <td className="oss-13 black">Greg Jacoby <br /> <span className="osr-11 darkgrey">gregjacoby@example.com</span></td>
                                                            <td className="oss-13 black">Admin</td>
                                                            <td className="oss-13 black">Jan, 1st 2021</td>
                                                            <td></td>
                                                        </tr>
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
                                <div class="modal fade invite-contributor" id="invite-contributor1" tabindex="-1" role="dialog" aria-labelledby="invite-contributor1" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <div class="row">
                                                    <div class="col-lg-8 col-md-8 col-sm-12 coll">
                                                        <h1 class="osb-22 black" style={{ background: '#ffffff', borderColor: '#ffffff' }}>Invite People to This Site</h1>
                                                    </div>
                                                    <div class="col-lg-4 col-md-4 col-sm-12 colr">
                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span class="icon-Close darkgrey"></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                                        <p class="osr-13 darkgrey">Give people access to this site and assign them roles. <span><a class="turq" href="">Learn more</a></span></p>
                                                        <div class="ic-cont">
                                                            <input type="email" class="form-control osr-13 darkgrey" id="contributor" aria-describedby="emailHelp" placeholder="Enter an email address" />
                                                            <button type="submit" class="btn btn-primary green-btn oss-13 white">Send</button>
                                                        </div>
                                                        <div class="general-roles">
                                                            <h2 class="osb-16 black">General Roles <span class="sup turq">*</span></h2>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum massa justo, eget lobortis neque hendrerit non.</p>
                                                            <ul>
                                                                <li>
                                                                    <div class="left"><input type="checkbox" class="" id="admin-co" autocomplete="off" /></div>
                                                                    <div class="right">
                                                                        <h3 class="oss-13 black">Admin (Co-Owner)</h3>
                                                                        <p class="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum <br />massa justo, eget lobortis neque hendrerit non.</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="left"><input type="checkbox" class="" id="view-on" autocomplete="off" /></div>
                                                                    <div class="right">
                                                                        <h3 class="oss-13 black">View Only</h3>
                                                                        <p class="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum <br />massa justo, eget lobortis neque hendrerit non.</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="left"><input type="checkbox" class="" id="edit-web" autocomplete="off" /></div>
                                                                    <div class="right">
                                                                        <h3 class="oss-13 black">Edit Website</h3>
                                                                        <p class="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum <br />massa justo, eget lobortis neque hendrerit non.</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                                        <h2 class="oss-16 black"> Your Project invite link</h2>
                                                        <div class="ic-cont-btm">
                                                            <input type="text" class="form-control osr-13 darkgrey" id="invite-link" aria-describedby="emailHelp" placeholder="https://preview.siteseed.io/preview/naveens-initial-project-2-9e7c" />
                                                            <button type="submit" class="btn btn-primary green-btn oss-13 white">Copy</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!---------------------------------- /Invite Contributor----------------------------------> */}
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
        tokenInfo: global.tokenInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollabSettings)
