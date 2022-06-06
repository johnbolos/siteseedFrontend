import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from '../../../reducers/actions'
import { toggleSitePublish } from '../../../reducers/actions/userActions'
import Request from '../../../request'
import store from '../../../store'

const PublishModal = ({ show, onHide, site_id, isPublished, siteData }) => {

    const dispatch = useDispatch()
    const title = isPublished ? "Unpublish" : "Publish"
    const togglePublish = isPublished ? 0 : 1;

    const publishSite = () => {
        // TODO: Show loader
    }

    return (
        <Modal className="custom-modal unpublishConfirmation" show={show} onHide={() => onHide(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title} Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="col-12">
                        <h2>Do you want to {title} this <span>{siteData.site_name}</span> site?</h2>
                        <p>After you click {title.toUpperCase()} below, your site will be {title.toLowerCase()}.</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="delete-btn" onClick={() => { publishSite() }}>{title.toUpperCase()}</button>
            </Modal.Footer>
        </Modal>
    )
}

export default PublishModal;