import React from 'react'
import Modal from 'react-bootstrap/Modal'

const DuplicateSite = ({ show, onHide, duplicate, siteName }) => {
    return (
        <Modal className="custom-modal duplicateSite" show={show} onHide={() => onHide(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Duplicate Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="col-12">
                        <h2>Are you sure you want to duplicate <span>{ siteName }</span>?</h2>
                        <p>Your data, styles, pages, and images will be copied to a new site. You can edit the subdomain and the name of your site after it has been created.</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="delete-btn" onClick={() => {duplicate( null ); onHide(false); }}>Duplicate Site '{ siteName }'</button>
            </Modal.Footer>
        </Modal>
    )
}

export default DuplicateSite;