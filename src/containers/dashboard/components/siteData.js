import React, {useState, useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import { showToast, openTemplateInEditor } from "../../../components/utils"
import Request from '../../../request'
import _ from 'lodash'
import { getPushPathWrapper, getUrlPushWrapper } from "../../../routes"
import { connect, useDispatch, useSelector } from "react-redux"
import { setGeneralData } from "../../../reducers/actions/userActions"
import { apiUrl, assetsUrl } from "../../../settings"

import { setNewSiteDetails } from "../../../reducers/actions/userActions"


// components
import InviteCollab from '../modals/collab'
import DuplicateModal from '../modals/duplicate'
import DeleteModal from '../modals/deleteConfirmation'
import ExportSite from './export'
import PublishModal from '../modals/togglePublishConfirmation'

const SiteData = ({ siteData, templateData }) => {
    const dispatch = useDispatch()
    const [site_id, setSiteID] = useState( siteData.site_id )
    const [count, setCount] = useState(0)
    const [refetch, setRefetch] = useState(false)
    const [show, setShow] = useState(false)
    const [publishShow, setPublishShow] = useState(false)
    const [showDuplicate, setShowDuplicate] = useState(false)
    const [showCollab, setShowCollab] = useState(false)
    const [showExport, setShowExport] = useState(false)
    const { generalData, userS3Dir } = useSelector(
		(state) => ({
			generalData: state.global.generalData,
            userS3Dir: state.global.userS3Dir
		})
	)

    const [findTemplate, setFindTemplate] = useState([])
    
    const DeleteSite = async ( site_id ) => {
        let data = { site_id }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })

        const apiRequest = await Request.deleteSite( formData )

        if( apiRequest.messageType && apiRequest.messageType == 'error' ){
            showToast({ type: 'error', message: 'Unable to delete site with ID of '+ site_id + '.'  })
            return
        }

        setRefetch(true)
        showToast({ type: 'success', message: 'Successfully deleted site with ID of '+ site_id + '.' })
    }

    const goto = ( key, params = {} ) => {
        dispatch(getPushPathWrapper(key, params))
    }

    const gotoWithQueryString = (key, queryString = {}) => {
        dispatch(getUrlPushWrapper(key, queryString))
    }

    const DuplicateSiteHelper = async () => {
        let data = { site_name: siteData.site_name + '-' + count }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        
        if( count < generalData.total_sites - 1 ){
            const apiRequest = await Request.createNewSite(formData)
            DuplicateSite( apiRequest )
        }else{
            DuplicateSite({ "message": "Site Limit reach." })
        }
        
    }


    const openTemplate = (siteData) => {
        // find template name from id
        let meta = findTemplate
        meta = {
            ...meta,
            ...siteData
        }

        openTemplateInEditor(meta, dispatch)
    }

    const viewSite = (siteData) => {
        // if (is_published) {
        //     live_site_url && window.open(live_site_url, '_blank')
        //     return
        // }
        window.open(`${assetsUrl}/${userS3Dir}/sites/${site_id}/preview/index.html`, '_blank')
    }



    useEffect(() => {
        if( count ){
            DuplicateSiteHelper()
        }
        
    }, [ count ])


    useEffect(() => {
        setFindTemplate( templateData?.find((template) => template.template_id == siteData.template_id) )
    }, [siteData])

    const DuplicateSite = async ( apiRequest ) => {
        if( apiRequest === null ){
            setCount( count + 1 )
        }else{
            if( apiRequest.message === 'This site already exists.' ){
                setCount( count + 1 )
                return
            }
    
            if ( ( apiRequest.messageType && apiRequest.messageType == 'error' ) || apiRequest.message === 'Site Limit reach.' ) {
                showToast({ type: 'error', message: apiRequest.message || 'Unable to create new site, try again' })
                return
            }
    
            dispatch(setNewSiteDetails({ site_name: siteData.site_name + '-' + count }))
    
            setRefetch(true)
            showToast({ type: 'success', message: 'Successfully duplicated site.' })
        }
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

    const validateExport = () => {
        if( generalData?.total_user_exports >= generalData?.export_credits ){
            showToast({ type: 'error', message: 'Maximum Limit Reached! Please upgrade your plan.' })
            return
        }

        setShowExport(true)
    }


    return (
        <>
        {/* Invite Collab modal */}
        <InviteCollab show={showCollab} onHide={setShowCollab} site_id={site_id}/>

        <DuplicateModal show={showDuplicate} onHide={setShowDuplicate} duplicate={DuplicateSite} siteName={ siteData.site_name } />

        <DeleteModal show={show} onHide={setShow} deleteSite={DeleteSite} site_id={site_id} siteName={siteData.site_name} />

        {/* <PublishModal show={publishShow} onHide={setPublishShow} site_id={site_id} siteData={siteData} isPublished={siteData?.is_published} /> */}

        <ExportSite show={showExport} setShow={setShowExport} site_id={site_id} siteData={siteData} templateData={findTemplate}/>
    
        <div className="col-4">
            <div className="col-wrapper">
                <div className="siteData-image pos-relative">
                    <div className="pos-relative">
                        <img src={(findTemplate?.thumbnail && apiUrl + findTemplate?.thumbnail) || siteData.siteImg || "./assets/website/images/mysite-img1.jpg"} />
                    </div>
                    <div className="siteData-actions">
                        <SplitButton title="Manage site" href="#" align="start">
                            {findTemplate ? <>
                                <Dropdown.Item onClick={() => { openTemplate(siteData) }}><span className="icon-Edit darkgrey"></span> Edit Site</Dropdown.Item>
                                <Dropdown.Item onClick={() => { viewSite() }}><span className="icon-Eye darkgrey"></span> Preview Site</Dropdown.Item>
                                {/* <Dropdown.Item onClick={() => setShowDuplicate(true)}><span className="icon-Duplicate darkgrey"></span> Duplicate Site</Dropdown.Item> */}
                                <Dropdown.Item onClick={() => setShowCollab(true)}><span className="icon-Add-User darkgrey"></span> Invite Contributor</Dropdown.Item>
                                <Dropdown.Item onClick={() => goto('siteSettings', { siteId: site_id }) }><span className="icon-Setting darkgrey"></span> Setting</Dropdown.Item>
                                <Dropdown.Item onClick={() => setShow(true)}><span className="icon-Delete darkgrey"></span> Delete</Dropdown.Item>
                            </> : <>
                                <Dropdown.Item onClick={() => { goto("buyTemplate", { siteId: site_id }) }}><span class="material-icons">shopping_cart</span> Buy Template</Dropdown.Item>
                                <Dropdown.Item onClick={() => { setShow(true); setSiteID( siteData.site_id ); }}><span className="icon-Delete darkgrey"></span> Delete</Dropdown.Item>
                            </> }
                            
                        </SplitButton>
                    </div>
                </div>
                <div className="siteData-details">
                    <h3 className="sitedata-title">{ siteData?.site_name ? siteData?.site_name : 'Sample Site Name' }</h3>
                    <p className={`siteData-domain${ siteData?.is_domain_connected ? ' connected-domain' : ''}`}>Domain: {siteData?.is_domain_connected ? 'Connected' : 'Not Connected' }</p>
                    <div className="d-flex flex-wrap siteData-quickActions">
                        {/* {siteData?.is_published ? <span className="published" onClick={() => setPublishShow(true) }>Published</span> : <span onClick={() => setPublishShow(true) }>Not Published</span> } */}
                        {siteData?.is_published ? <span className="published">Published</span> : <span>Not Published</span> }
                        {siteData?.is_domain_connected ? <span className="connected-domain" onClick={() => gotoWithQueryString('domains', {site_id}) }>Connected</span> : <span onClick={() => goto('domains') }>Connect Domain</span> }
                        <span onClick={() => { validateExport() } }>Export Site</span>
                    </div>
                </div>
            </div>
        </div>
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
        generalData: global.generalData,
        userS3Dir: global.userS3Dir,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteData);