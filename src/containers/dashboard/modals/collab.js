import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import { connect, useDispatch, useSelector } from "react-redux"
import { hideLoader, showLoader } from "../../../reducers/actions"
import { assetsUrl } from "../../../settings"
import { showToast } from "../../../components/utils"
import Request from '../../../request'
import _ from 'lodash'

const Collab = ({ show, onHide, site_id }) => {
    const dispatch = useDispatch()
    const [inviteRole, setInviteRole] = useState(1)
    const { userS3Dir } = useSelector(
		(state) => ({
            userS3Dir: state.global.userS3Dir
		})
	)


    const inviteContributor = async () => {
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

        onHide(false);
    }

    return (
        <Modal className="custom-modal inviteCollab" show={show} onHide={() => onHide(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Invite People to This Site</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-left">
                <div className="d-flex">
                    <div className="col-12">
                        <p className="osr-13 darkgrey">Submit an email below to give people access to this site and assign them roles.</p>
                        <div className="ic-cont" style={{ 'marginBottom': '10px'}}>
                            <input type="text" class="form-control osr-13 darkgrey" id="contributor-name" aria-describedby="emailHelp" placeholder="Contributor Name" style={{ 'width': '100%' }}/>
                        </div>
                        <div className="ic-cont">
                            <input type="email" className="form-control osr-13 darkgrey" id="contributor" aria-describedby="emailHelp" placeholder="Enter an email address" />
                            <button type="submit" className="btn btn-primary green-btn oss-13 white" style={{ 'marginTop': '0' }} onClick={inviteContributor}>Send</button>
                        </div>
                        <div className="general-roles">
                            <h2 className="osb-16 black">General Roles <span className="sup turq">*</span></h2>
                            <p>Assign roles to control what permissions are given to each person you invite.</p>
                            <ul>
                                <li>
                                    <div className="left"><input type="checkbox" className="" id="admin-co" autoComplete="off" onClick={() => setInviteRole(3)} checked={ inviteRole == 3 }/></div>
                                    <div className="right">
                                        <h3 className="oss-13 black">Admin (Co-Owner)</h3>
                                        <p className="osr-13 darkgrey">Admins can view and manage settings, account and billing info, domains, invite more people, delete a site, and transfer a site.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="left"><input type="checkbox" className="" id="edit-web" autoComplete="off" onClick={() => setInviteRole(2)} checked={ inviteRole == 2 }/></div>
                                    <div className="right">
                                        <h3 className="oss-13 black">Editor</h3>
                                        <p className="osr-13 darkgrey">Editors can make changes to the site, but not account settings. They can view your dashboard, but will only see the sites they have been invited to.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="left"><input type="checkbox" className="" id="view-on" autoComplete="off" onClick={() => setInviteRole(1)} checked={ inviteRole == 1 }/></div>
                                    <div className="right">
                                        <h3 className="oss-13 black">View Only</h3>
                                        <p className="osr-13 darkgrey">View Only access invites people to see the site. They will be unable to make any changes to the site or your account.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="d-flex">
                    <div className="col-12">
                        <h2 className="oss-16 black"> Your Project invite link</h2>
                        <p>Invite people to preview your site by sending them the link below.</p>
                        <div className="ic-cont-btm">
                            <input type="text" className="form-control osr-13 darkgrey" id="invite-link" aria-describedby="emailHelp" value={`${assetsUrl}/${userS3Dir}/sites/${site_id}/preview/index.html`} />
                            <button type="submit" className="btn btn-primary green-btn oss-13 white inviteCollab-btn" style={{ 'margin': '0', 'padding': '15.5px 0', 'height': 'auto' }} onClick={(e) => { navigator.clipboard.writeText(`${assetsUrl}/${userS3Dir}/sites/${site_id}/preview/index.html`); showToast({ type: 'success', message: 'Copied to clipboard' }) }}>Copy</button>
                        </div>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
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
        userS3Dir: global.userS3Dir
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Collab);