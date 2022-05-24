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

class DNSRecords extends React.Component {
    state = {
        AHostElems: [],
        cNameElem: [],
    }
    componentDidMount() {
        this.createAHostElem()
        this.createCNAMEElem()
    }
    apiRequestDomains = async () => {
        const { dispatch } = this.props
        dispatch(showLoader())
        const apiRequest = await Request.getDomainsInfo()
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to fetch data, Try Relogging' })
            return
        }
        this.setState({ AHostInfo: apiRequest.data })
    }
    createAHostElem = () => {
        const AHostInfo = [
            {
                hostName: '@',
                value: '185.230.63.171',
                ttl: 1,
            },
            {
                hostName: 'CNAME',
                value: '185.230.63.186',
                ttl: 1,
            },
            {
                hostName: 'SOA',
                value: '185.230.63.107',
                ttl: 1,
            },
            {
                hostName: '_domainconnect',
                value: '217.147.172.52',
                ttl: 1,
            },
        ]
        let resp = null
        resp = AHostInfo.map((item) => {
            return (
                <tr className={'domains-table-row dns-table-row'}>
                    <td scope="row" className="oss-13 black" style={{ borderRight: '1px solid #ffffff', width: '25%' }}>
                        {item.hostName}
                    </td>
                    <td className="oss-13 black" style={{ borderRight: '1px solid #ffffff', width: '25%' }}>
                        {item.hostName}
                    </td>
                    <td className="oss-13 black" style={{ borderRight: '1px solid #ffffff', width: '25%' }}>
                        {item.value}
                    </td>
                    <td className="oss-13 black" style={{ width: '25%' }}>
                        {item.ttl}
                    </td>
                    <td className="csd-down" style={{ width: '25%' }}>
                        <a className="nav-link dropdown-toggle right-top black osb-22" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </a>
                    </td>
                </tr>
            )
        })
        this.setState({ AHostElems: resp })
    }
    createCNAMEElem = () => {
        const cNameInfo = [
            {
                hostName: '@',
                value: '185.230.63.171',
                ttl: 1,
            },
            {
                hostName: 'CNAME',
                value: '185.230.63.186',
                ttl: 1,
            },
            {
                hostName: 'SOA',
                value: '185.230.63.107',
                ttl: 1,
            },
            {
                hostName: '_domainconnect',
                value: '217.147.172.52',
                ttl: 1,
            },
        ]
        let resp = null
        resp = cNameInfo.map((item) => {
            return (
                <tr className={'domains-table-row dns-table-row'}>
                    <td className="oss-13 black" style={{ borderRight: '1px solid #ffffff', width: '25%' }}>
                        {item.hostName}
                    </td>
                    <td className="oss-13 black" style={{ borderRight: '1px solid #ffffff', width: '35%' }}>
                        {item.value}
                    </td>
                    <td className="oss-13 black" style={{ width: '35%' }}>
                        {item.ttl}
                    </td>
                    <td className="csd-down" style={{ width: '5%' }}>
                        <a className="nav-link dropdown-toggle right-top black osb-22" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </a>
                    </td>
                </tr>
            )
        })
        this.setState({ cNameElem: resp })
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
        const { dispatch, currentUser, loading, domainInfo, showDomains } = this.props
        const { AHostElems, cNameElem } = this.state
        return (
            <>
                <div className={'domains-tab-content'}>
                    <h3 className="osb-22 domains-dns-back" style={{ margin: '50px 0px 20px 0px' }} onClick={showDomains}><i class="fa fa-angle-left" aria-hidden="true"></i> Back to domain</h3>
                    <div className={'row'}>
                        <div className={'col-md-8 col-lg-8 col-sm-12 domains-tab-coll'}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <h1 className="osb-22 black" style={{ background: 'transparent', border: 'none' }}>Manage DNS Records</h1>
                                    <span className="darkgrey" style={{ background: 'transparent', border: 'none' }}>
                                        View and edit the domain records for {domainInfo.name}
                                    </span>
                                    <h3 className="osb-22 dns-table-heading" style={{ margin: '30px 0px', color: '#000000' }}>A (Host)</h3>
                                </div>
                                {/* <div className={'right'}>
                                    <button
                                        className="btn btn-primary turq-btn oss-13 white "
                                        data-bs-toggle="modal"
                                        data-bs-target="#update-card1"
                                        onClick={() => { }}
                                        style={{ background: 'transparent', color: '#31cdb9', border: '1px solid #31cdb9', padding: '10px 20px' }}
                                    >
                                        <span>+</span> Buy a Domain
                                    </button>
                                </div> */}
                            </div>
                            <table className="table table-bordered align-middle">
                                <thead>
                                    <tr style={{ border: 'none' }}>
                                        <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 0px' }}>Host Name</th>
                                        <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 20px' }}>Host Name</th>
                                        <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 20px' }}>Value</th>
                                        <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 20px' }}>TTL</th>
                                    </tr>
                                </thead>
                                <tbody style={{ background: '#F2F2F2' }}>
                                    {
                                        AHostElems.length ? AHostElems : (
                                            <tr style={{ border: 'none' }}>
                                                <td scope="row" className="osb-16 white lhead" style={{ border: '0px' }}></td>
                                                <td className="oss-13 black" style={{ border: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <Empty height={'auto'} width={'70px'} style={{ fill: '#67737D' }} />
                                                    <span class="oss-16 darkgrey">No A Host Records Available</span>
                                                </td>
                                                <td className="oss-13 black" style={{ border: '0px' }}></td>
                                                <td className="oss-13 black" style={{ border: '0px' }}></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div style={{ color: '#31cdb9', fontWeight: 600, cursor: 'pointer' }}>
                                + Add Records
                            </div>



                            
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
                                <div>
                                    <h3 className="osb-22 dns-table-heading" style={{ margin: '30px 0px', color: '#000000' }}>CNAME (Aliases)</h3>
                                </div>
                                {/* <div className={'right'}>
                                    <button
                                        className="btn btn-primary turq-btn oss-13 white "
                                        data-bs-toggle="modal"
                                        data-bs-target="#update-card1"
                                        onClick={() => { }}
                                        style={{ background: 'transparent', color: '#31cdb9', border: '1px solid #31cdb9', padding: '10px 20px' }}
                                    >
                                        <span>+</span> Buy a Domain
                                    </button>
                                </div> */}
                            </div>
                            <table className="table table-bordered align-middle">
                                <thead>
                                    <tr style={{ border: 'none' }}>
                                        <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 0px' }}>Host Name</th>
                                        <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 20px' }}>Value</th>
                                        <th scope="col" className="oss-16 black" style={{ border: 'none', padding: '0px 0px 20px 20px' }}>TTL</th>
                                    </tr>
                                </thead>
                                <tbody style={{ background: '#F2F2F2' }}>
                                    {
                                        cNameElem.length ? cNameElem : (
                                            <tr style={{ border: 'none' }}>
                                                <td scope="row" className="osb-16 white lhead" style={{ border: '0px' }}></td>
                                                <td className="oss-13 black" style={{ border: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <Empty height={'auto'} width={'70px'} style={{ fill: '#67737D' }} />
                                                    <span class="oss-16 darkgrey">No CNAME Records Available</span>
                                                </td>
                                                <td className="oss-13 black" style={{ border: '0px' }}></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div style={{ color: '#31cdb9', fontWeight: 600, cursor: 'pointer' }}>
                                + Add Records
                            </div>
                        </div>
                        <div className={'col-md-4 col-lg-4 col-sm-12 domains-tab-colr'}></div>
                    </div>
                </div>
            </>
        )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(DNSRecords)
