import React from 'react'
import Modal from 'react-bootstrap/Modal'

const DeleteConfirmation = ({ show, onHide, deleteSite, siteName, site_id }) => {
    return (
        <Modal className="custom-modal deleteConfirmation" show={show} onHide={() => onHide(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="col-12">
                        <h2>Are you sure you want to delete <span>{ siteName }</span>?</h2>
                        <p>After you click delete below, you will not be able to undo this action, nor get this site back on your dashboard. It becomes unpublished, and we are unable to retrieve it.</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="delete-btn" onClick={() => {deleteSite(site_id); onHide(false); }}>Delete Forever</button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteConfirmation;