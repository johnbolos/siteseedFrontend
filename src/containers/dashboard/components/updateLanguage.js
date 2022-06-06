import React from 'react'
import Modal from 'react-bootstrap/Modal'


const UpdateLanguage = ({ show, setShow, language, setLanguage }) => {
    return (
        <>
            <Modal className="choose-lang" show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Language</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <div className="col-12">
                            <ul>
                                <li className={`${language === 'English' ? 'active' : ''}`}><a onClick={() => setLanguage('English')}>English</a></li>
                                <li className={`${language === 'Espanol' ? 'active' : ''}`}><a onClick={() => setLanguage('Espanol')}>Espanol</a></li>
                                <li className={`${language === 'Francais' ? 'active' : ''}`}><a onClick={() => setLanguage('Francais')}>Francais</a></li>
                                <li className={`${language === 'Deutsch' ? 'active' : ''}`}><a onClick={() => setLanguage('Deutsch')}>Deutsch</a></li>
                                <li className={`${language === 'Portugues' || language === 'Brasil' ? 'active' : ''}`}><a onClick={() => setLanguage('Portugues')}>Portugues (Brasil)</a></li>
                                <li className={`${language === 'Italiano' ? 'active' : ''}`}><a onClick={() => setLanguage('Italiano')}>Italiano</a></li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <p className="osr-11 darkgrey">Choose your preffed language for SiteSeed setting and panels.</p>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateLanguage;