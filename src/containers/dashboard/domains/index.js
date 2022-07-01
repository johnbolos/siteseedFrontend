import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import Request from '../../../request'
import { showToast } from "../../../components/utils"
import moment from "moment"
import { ReactComponent as Empty } from "../../../assets/website/icons/empty.svg";
import { hideLoader, showLoader } from "../../../reducers/actions"
import './index.scss'
import DNSRecords from "./dnsRecords"
import { getPushPathWrapper, getPushPathWrapperWithObj } from "../../../routes"
import { apiUrl } from "../../../settings"

class Domains extends React.Component {
    state = {
        domainsElems: [],
        unassignedSitesCards: [],
        selectedDomain: null,
        selectedDomainToRemove: null,
        selectedDomainToAssign: null,
        selectedDomainToUnassign: null,
        unassignedSites: [],
        selectedSiteCard: null,
        selected_site_id: (+this?.props?.router?.location?.query?.site_id || null),
        templateData: [],
    }
    componentDidMount() {
        this.apiRequestDomains()
        this.getTemplateData()
        // this.createDoaminsElem()
    }
    getTemplateData = async () => {
        const apiRequest = await Request.getTemplates()

        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to fetch roadmap data.' })
            return
        }

        this.setState({ templateData: apiRequest.templates })
    }
    getUnassignedSitesCardsImages = (item) => {

        const { templateData } = this.state
        const { generalData: {
            user_sites
        } } = this.props

        const site = user_sites?.find((siteData) => siteData.site_id === item?.site_id)
        const temp = templateData?.find((template) => template.template_id === site?.template_id)
        return (
            <>
                <div style={{ marginBottom: '15px', textAlign: "left"}}>
                    <span className="oss-16 darkgrey">{item.site_name}</span>
                </div>
                <img src={(temp ? apiUrl + temp.thumbnail : "./assets/website/images/mysite-img1.jpg")} className="img-fluid" alt="Responsive image" />
            </>
        )

    }
    apiRequestDomains = async () => {
        const { dispatch } = this.props
        dispatch(showLoader())
        const apiRequest = await Request.getDomainsInfo()
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to fetch data, Try Relogging' })
            return
        }
        this.setState({ domainsInfo: apiRequest.data, unassignedSites: apiRequest.unassigned_sites || [] }, () => {
            this.createDoaminsElem()
            this.createUnassignedSitesCards()
        })
    }
    createDoaminsElem = () => {
        const { domainsInfo, selected_site_id } = this.state
        const domainsInfoTemp = [
            {
                name: 'mystunningwebsite.com',
                registrationType: 'Private Registration',
                renewalDate: 'Aug 3, 2021',
                autoRenewal: false,
            },
            {
                name: 'anewstart.com',
                registrationType: 'Not assigned to a site',
                renewalDate: 'Aug 3, 2021',
                autoRenewal: false,
            },
            {
                name: 'continuous.com',
                registrationType: 'Not assigned to a site',
                renewalDate: 'Aug 3, 2021',
                autoRenewal: false,
            },
            {
                name: 'demo.com',
                registrationType: 'Not assigned to a site',
                renewalDate: 'Aug 3, 2021',
                autoRenewal: true,
            },
        ]
        let resp = null
        const isDomainAssign = domainsInfo.find((sites) => sites.assign_to_site.site_id === selected_site_id)
        resp = domainsInfo.map((item, index) => {
            return (
                <tr key={index} className={`domains-table-row ${isDomainAssign ? 'active' : ''}`} style={{ borderLeft: item.is_active ? '5px solid #31cdb9' : '5px solid red' }}>
                    <td scope="row" className="oss-13 black" style={{ borderRight: '1px solid #ffffff', width: '30%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {item.domain_name}
                            <span className={'description'} style={{ display: 'flex', flexDirection: 'row' }}>
                                {item.is_active ? (
                                    <>
                                        {item.assign_to_site == 'No' ? (
                                            <>
                                                Not assigned to a site
                                                <p className={'link'} onClick={() => { this.setState({ selectedDomainToAssign: item, selectedSiteCard: null }, () => { this.createUnassignedSitesCards() }) }} data-bs-toggle="modal" data-bs-target="#modal-assign-site">&nbsp;{'| Assign'}</p>
                                            </>
                                        ) : ('Assigned to a Site')}
                                    </>
                                ) : (
                                    null
                                )}
                            </span>
                        </div>
                    </td>
                    <td className="oss-13 black" style={{ width: '60%', borderRight: '1px solid #ffffff', width: '30%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', color: item.is_active ? 'inherit' : 'red' }}>
                            {item.is_active ? (
                                <>
                                    Renews on {moment(item.expiration_date, 'yyyy-mm-dd').format('MMM DD, YYYY')}
                                    <span className={'description'} style={{ display: 'flex', flexDirection: 'row' }}>{(item.autoRenewal) ? 'Auto Renew On' : 'Auto Renew Off'}<p className={'link'}>&nbsp;{' | Extend'}</p></span>
                                </>
                            ) : (
                                "This domain has been removed"
                            )}
                        </div>
                    </td>
                    {/* <td className="oss-13 black" style={{ width: '30%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', color: item.is_active ? 'inherit' : 'red' }}>
                            {item.is_active ? ('Yes') : ('No')}
                        </div>
                    </td> */}
                    <td className="csd-down" style={{ width: '10%', position: 'relative' }}>
                        <a className="nav-link dropdown-toggle right-top black osr-13" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ display: item.is_active ? 'inherit' : 'none' }}>
                            <span className="icon-Ellipsis"></span>
                        </a>
                        <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown" style={{ height: 'fit-content' }}>
                            <li onClick={() => {
                                this.setState({ selectedDomainToAssign: item, selectedSiteCard: null }, () => { this.createUnassignedSitesCards() })
                            }}
                                data-bs-toggle="modal" data-bs-target="#modal-assign-site"
                            >
                                <a className="dropdown-item osr-13 darkgrey">Assign to a Different Site</a>
                            </li>
                            {item.assign_to_site == 'No' || <li style={{ borderBottom: '1px solid #f2f2f2' }} onClick={() => {
                                this.set({ selectedDomainToUnassign: item })
                            }} data-bs-toggle="modal" data-bs-target="#modal-unassign-site">
                                <a className="dropdown-item osr-13 darkgrey">Unassign from This Site</a>
                            </li>}
                            <li onClick={() => { this.set({ selectedDomain: item }) }}>
                                <a className="dropdown-item osr-13 darkgrey">Manage DNS Records</a>
                            </li>
                            <li onClick={() => { this.setState({ selectedDomainToRemove: item }) }} data-bs-toggle="modal" data-bs-target="#pop-confirm-modal-delete">
                                <a className="dropdown-item osr-13 darkgrey">Remove Domain</a>
                            </li>
                        </ul>
                    </td>
                </tr >
            )
        })
        this.setState({ domainsElems: resp })
    }
    removeDomain = async () => {
        const { dispatch } = this.props
        const { selectedDomainToRemove: domain } = this.state
        dispatch(showLoader())
        const data = { domain_id: domain.id }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.removeDomain(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to fetch data, Try Relogging' })
            return
        }
        showToast({ type: 'success', message: apiRequest.description })
        this.setState({ selectedDomainToRemove: null })
        this.apiRequestDomains()
    }
    createUnassignedSitesCards = () => {
        const { unassignedSites, selectedSiteCard } = this.state
        let resp = null
        resp = unassignedSites.map((item, index) => {
            return (
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {/* <div className="left">
                            <span className="oss-13 darkgrey">Address Line 1</span><br /><span className="oss-16 darkgrey">{(extraDetails && extraDetails.address_line_1) ? extraDetails.address_line_1 : '-'}</span>
                        </div> */}
                        <div className="right">
                            <button
                                className="btn btn-primary turq-btn oss-13 white"
                                style={{ backgroundColor: 'rgb(255 255 255)', width: '40px', minWidth: 'auto', borderRadius: '50%', border: '1px solid #31cdb9', padding: '5px', height: "40px" }}
                                onClick={() => {
                                    this.setState({ selectedSiteCard: item }, () => {
                                        this.createUnassignedSitesCards()
                                    })
                                }}
                            >
                                <div style={(selectedSiteCard && (selectedSiteCard.site_id == item.site_id)) ? {
                                    height: '28px',
                                    width: '28px',
                                    borderRadius: '50%',
                                    background: '#31cdb9',
                                } : {
                                    height: '28px',
                                    width: '28px',
                                    borderRadius: '50%',
                                    background: 'transparent',
                                }}>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div key={index} className={"unassigned-site-card-row"} >
                        <div className="card-number" style={{width: "100%"}}>
                            {this.getUnassignedSitesCardsImages(item)}
                        </div>
                        {/* <div className="col-lg-2 col-md-2 col-sm-12 colr">
                        <div className="left"><span className="oss-13 darkgrey">Expires</span><br /><span className="oss-16 darkgrey">{paymentMethod.exp_month} / {paymentMethod.exp_year}</span></div>
                    </div> */}
                    </div>
                </div>
            )
        })
        this.setState({ unassignedSitesCards: resp })
    }
    assignDomain = async () => {
        const { selectedDomainToAssign: domain, selectedSiteCard } = this.state
        const { dispatch } = this.props
        if (!selectedSiteCard) {
            showToast({ type: 'error', message: 'Please select a site to a connect to!' })
            return
        }
        dispatch(showLoader())
        const data = {
            domain_id: domain.id,
            site_id: selectedSiteCard.site_id
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.assignDomainToSite(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to fetch data, Try Relogging' })
            return
        }
        showToast({ type: 'success', message: apiRequest.description })
        this.setState({ selectedDomainToAssign: null })
        this.apiRequestDomains()
        document.querySelector('#modal-assign-site .close').click()
    }
    unassignDomain = async () => {
        const { selectedDomainToUnassign: domain } = this.state
        const { dispatch } = this.props
        // if (!(domain && domain.assign_to_site && domain.assign_to_site.site_id)) {
        //     showToast({ type: 'error', message: 'Please select a site to a connect to!' })
        //     return
        // }
        dispatch(showLoader())
        const data = {
            domain_id: domain.id,
            site_id: domain.assign_to_site.site_id,
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.unassignDomainToSite(formData)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to fetch data, Try Relogging' })
            return
        }
        showToast({ type: 'success', message: apiRequest.description })
        this.setState({ selectedDomainToUnassign: null })
        this.apiRequestDomains()
        document.querySelector('#modal-unassign-site .close').click()
    }
    buyDomain = () => {
        const { dispatch } = this.props
        dispatch(getPushPathWrapperWithObj('searchDomain', {}))
    }
    set = (obj) => {
        _.forEach(obj, (value, key) => {
            this.setState({ [key]: value })
        })
    }
    getFormData = (form) => {
        const formEntries = new FormData(form).entries();
        return Object.assign(...Array.from(formEntries, ([name, value]) => ({ [name]: value })));
    }

    render() {
        const { dispatch, currentUser, loading } = this.props
        const { selectedDomain, unassignedSitesCards } = this.state
        if (selectedDomain) {
            return (
                <DNSRecords domainInfo={selectedDomain} showDomains={() => { this.set({ selectedDomain: null }) }} />
            )
        }
        return (
            <>
                <div className={'domains-tab-content'}>
                    <h1 className="osb-22 black" style={{ margin: '50px 0px 20px 0px' }}>Domains</h1>
                    <div className={'row'}>
                        <div className={'col-md-8 col-lg-8 col-sm-12 domains-tab-coll'}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <h1 className="osb-22 black" style={{ background: 'transparent', border: 'none' }}>Domain Settings</h1>
                                    <span className="darkgrey" style={{ background: 'transparent', border: 'none' }}>
                                        Manage all your domains right here.
                                    </span>
                                </div>
                                <div className={'right'}>
                                    <button
                                        className="btn btn-primary turq-btn oss-13 white "
                                        onClick={() => { this.buyDomain() }}
                                        style={{ background: 'transparent', color: '#31cdb9', border: '1px solid #31cdb9', padding: '10px 20px' }}
                                    >
                                        <span>+</span> Buy a Domain
                                    </button>
                                </div>
                            </div>
                            <table className="table table-bordered align-middle" style={{ marginTop: '30px' }}>
                                <thead>
                                    <tr style={{ border: 'none' }}>
                                        <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 0px' }}>Name</th>
                                        <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 20px' }}>Details</th>
                                        {/* <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 20px' }}>Active</th> */}
                                        <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 0px' }}></th>
                                    </tr>
                                </thead>
                                <tbody style={{ background: '#F2F2F2' }}>
                                    {
                                        this.state.domainsElems.length ? this.state.domainsElems : (
                                            <tr style={{ border: 'none' }}>
                                                <td scope="row" className="osb-16 white lhead" style={{ border: '0px' }}></td>
                                                <td className="oss-13 black" style={{ border: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <Empty height={'auto'} width={'70px'} style={{ fill: '#67737D' }} />
                                                    <span className="oss-16 darkgrey">No Domains added yet!</span>
                                                </td>
                                                <td className="oss-13 black" style={{ border: '0px' }}></td>
                                                <td className="oss-13 black" style={{ border: '0px' }}></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className={'col-md-4 col-lg-4 col-sm-12 domains-tab-colr'}></div>
                    </div>

                    {/* <!---------------------------------- Confirm-delete---------------------------------->			 */}
                    {/* <!-- Modal HTML --> */}
                    <div id="pop-confirm-modal-delete" className="modal fade">
                        <div className="modal-dialog modal-confirm">
                            <div className="modal-content">
                                <div className="modal-header flex-column">
                                    <div className="icon-box">
                                        <i className="material-icons">close</i>
                                    </div>
                                    <h4 className="modal-title w-100">Are you sure?</h4>
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <p>Do you really want to remove this domain?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => {
                                        this.removeDomain()
                                    }}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!---------------------------------- /Confirm-delete---------------------------------->			 */}
                    {/* <!---------------------------------- Assign-Site-Modal---------------------------------->			 */}
                    {/* <!-- Modal HTML --> */}
                    <div id="modal-assign-site" className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header flex-column">
                                    {/* <div className="icon-box">
                                    <i className="material-icons">close</i>
                                </div> */}
                                    <h4 className="modal-title w-100">Connect Domain to a Site</h4>
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className=" p-data-cmn" style={{ padding: '0px' }}>
                                        {unassignedSitesCards.length ? unassignedSitesCards : "No published domain is available!"}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-primary" onClick={() => {
                                        this.assignDomain()
                                    }}>
                                        Assign
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!---------------------------------- /Assign-Site-Modal---------------------------------->			 */}
                    {/* <!---------------------------------- Unassign-Site-Modal---------------------------------->			 */}
                    {/* <!-- Modal HTML --> */}
                    <div id="modal-unassign-site" className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header flex-column">
                                    <div className="icon-box">
                                        <i className="material-icons">close</i>
                                    </div>
                                    <h4 className="modal-title w-100">Are you sure ?</h4>
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <p>Do you really want to disconnect this domain?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-danger" onClick={() => {
                                        this.unassignDomain()
                                    }}>
                                        Unassign
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!---------------------------------- /Unassign-Site-Modal---------------------------------->			 */}
                </div>
            </>
        )
    }
}

const mapStateToProps = ({ global, layout, templates, router }) => {
    return {
        router,
        loading: global.loading,
        theme: layout.theme,
        templates,
        currentUser: global.currentUser,
        tokenInfo: global.tokenInfo,
        generalData: global.generalData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Domains)
