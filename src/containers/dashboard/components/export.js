import React, {useState, useEffect, useRef} from 'react'
import _ from 'lodash'
import { connect, useDispatch, useSelector } from "react-redux"
import { setNewSiteDetails, setGeneralData } from "../../../reducers/actions/userActions"
import { hideLoader, showLoader } from "../../../reducers/actions"
import Modal from 'react-bootstrap/Modal'
import Dropdown from 'react-bootstrap/Dropdown'
import Request from '../../../request'
import { showToast } from "../../../components/utils"
import ExportSite from "../exportSite/index"
import { apiUrl, assetsUrl } from "../../../settings"

const ExportTheSite = ({ show, setShow, site_id, siteData, templateData }) => {
    const exportSite = useRef(null)
    const exportSite2 = useRef(null)
    const dispatch = useDispatch();
    const [choosePlatformSelect, setChoosePlatformSelect] = useState('Choose Platform')
    const [showLoading, setShowLoading] = useState(false)
    const [ready, setReady] = useState(false)
    const [siteId, setSiteId] = useState( site_id )
    const [site_name, setSiteName] = useState(siteData.site_name)
    const [refetch, setRefetch] = useState(false)
    const { generalData } = useSelector(
		(state) => ({
			generalData: state.global.generalData,
		})
	)

    const [allState, setAllState] = useState({ site_name: '',  selectSiteForExport: '', choosePlatformSelect: '', templatesData: null, data: null })

    const [selectSiteForExport, setSelectSiteForExport] = useState( site_id )

    const Export = async () => {
        setShowLoading(true)

        const platform = choosePlatformSelect
        const site_id = siteId

        let data = { site_id, platform }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })

        const apiRequest = await Request.exportSite( formData )

        if ( ( apiRequest.messageType && apiRequest.messageType == 'error' ) ) {
            return
        }

        ExportSave(platform, site_id)
    }

    const ExportSave = async () => {
        const platform = choosePlatformSelect
        const site_id = siteId
        const s3_folder_path = 'exportFolder-' + site_id

        let data = { site_id, platform, s3_folder_path }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })

        const apiRequest = await Request.saveSiteFiles( formData )

        if ( ( apiRequest.messageType && apiRequest.messageType == 'error' ) ) {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to export site, try again' })
            return
        }

        setTimeout(function(){
            setShowLoading(false)
            setReady(true)
            setRefetch(true)
        }, 1000)
    }

    const prepareNDownloadExportZip = () => {
        if (choosePlatformSelect == 'Choose Platform') {
            showToast({ type: 'error', message: 'Please choose a platform to export to!' })
            return
        }
        dispatch(showLoader())
        setTimeout(async () => {
            // document.querySelector('#trigger-download-modal').click()
            let data = {
                site_id: siteId,
                platform: choosePlatformSelect
            }
            let formData = new FormData()
            _.each(data, (val, key) => {
                formData.append(key, val)
            })
            const apiRequest = await Request.updateExportCredits(formData)
            if (apiRequest.error) {
                showToast({ type: 'error', message: 'Unable to Export Site, Try again in a moment!' })
                dispatch(hideLoader())
                return
            }

            setSelectSiteForExport( siteId)
            setAllState({ site_name: site_name, selectSiteForExport: siteData, choosePlatformSelect: choosePlatformSelect, templatesData: templateData, data: generalData })
            exportSite.current.downloadFile()
            dispatch(hideLoader())
            setRefetch(true)
        }, 1000)
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
            <ExportSite onRef={() => exportSite} ref={exportSite} { ...allState }/>

            <Modal className="custom-modal exportsite" show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Export Site</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-left">
                    <div className="d-flex">
                        <div className="col-8">
                            <div className="d-flex">
                                <div className="col-4 export-site-image">
                                    <img id="myImg" style={{ width: '100%' }} src={templateData ? apiUrl + templateData.thumbnail : './assets/website/images/mysite-img1.jpg' } alt="your image" />
                                </div>
                                <div className="col-8">
                                    <h3>Template : {site_name ? site_name : 'Another Sample'}</h3>
                                    <p>Regular License</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 text-right">
                            <Dropdown>
                                <Dropdown.Toggle variant="success">{choosePlatformSelect}</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setChoosePlatformSelect('Choose Platform')}>Nothing</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setChoosePlatformSelect('Wordpress')}>Wordpress</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setChoosePlatformSelect('Shopify')}>Shopify</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setChoosePlatformSelect('Html/CSS')}>Html/CSS</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    { !showLoading ? !ready ? <button onClick={prepareNDownloadExportZip} type="button" className="btn btn-primary" >Prepare .zip File</button> : <button type="button" className="btn btn-primary" >Download .zip File</button> : <span className="loading-wrapper"><div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></span> }
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
        tokenInfo: global.tokenInfo,
        generalData: global.generalData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ExportTheSite);