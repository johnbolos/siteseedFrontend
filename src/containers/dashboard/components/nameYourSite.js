import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Request from '../../../request'
import { connect, useDispatch } from "react-redux"
import _ from 'lodash'
import { getPushPathWrapper } from "../../../routes"
import { setNewSiteDetails, setGeneralData } from "../../../reducers/actions/userActions"

import { showToast } from "../../../components/utils"


const NameYourSite = ({ show, setShow }) => {
    const dispatch = useDispatch();
    const [site_name, setSiteName] = useState('')
    const [refetch, setRefetch] = useState(false)

    const createNewSite = async () => {
        if (!site_name || site_name.trim() == '') {
            showToast({ type: 'error', message: 'Please enter a valid name for your site' })
            return
        }

        let data = { site_name }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        
        const apiRequest = await Request.createNewSite(formData)

        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to create new site, try again' })
            return
        }
        dispatch(setNewSiteDetails({ site_name: site_name }))

        setShow(false)
        setRefetch(true)
        showToast({ type: 'success', message: 'Site "' + site_name + '" created.'  })
            
        setTimeout(function(){
            dispatch(getPushPathWrapper('buyTemplate', { siteId: apiRequest.site_info.site_id }))
            // dispatch(getPushPathWrapper('allTemplates'))
        }, 2000);
        
    }

    useEffect(() => {
        async function dataRefetch(){
            const apiRequest = await Request.dashboard()
            dispatch( setGeneralData( apiRequest.data ) )

            setRefetch(false)
        }

        if( refetch ){
            dataRefetch()
        }
    }, [refetch])

    return (
        <>
            <Modal className="custom-modal nameyoursite" show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Name your site</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <div className="col-12">
                            <form>
                                <ul>
                                    <li className="center">
                                        <div className="">
                                            <label htmlFor="re-name" className="form-label oss-16 black">Site Name</label>
                                            <input type="text" className="form-control osr-13 darkgrey" id="re-name" placeholder="Mysite Copy" onChange={(e) => { setSiteName(e.target.value) }} />
                                        </div>
                                    </li>
                                </ul>
                            </form>
                            <p className="osr-13 darkgrey cs-ur-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus, velit ac congue interdum, augue neque gravida sem, sed fermentum.</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary oss-13 white green-btn" onClick={() => { createNewSite() }}>Save</button>
                </Modal.Footer>
            </Modal>
        </>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(NameYourSite)