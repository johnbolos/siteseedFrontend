import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"
import { setTokenInfo, setUser } from "../../reducers/actions/userActions"
import { getPushPathWrapper, getUrlParams } from "../../routes"
import { apiUrl, assetsUrl } from "../../settings"
import { hideLoader, showLoader } from "../../reducers/actions"
import _s3 from "../../components/utils/s3"
import Icons from "../../assets/Icons"
import { ReactComponent as Empty } from "../../assets/website/icons/empty.svg";

import './index.scss'

class BackupSettings extends React.Component {
    state = {
        backups: null,
        createBackupLoader: false,
        selectedBackupPrefix: null,
        backupsElems: [],
        originalBackupsElems: null
    }
    componentDidMount() {
        this.setState({ site_id: getUrlParams('siteSettings', this.props.pathname).siteId }, () => {
            this.getBackupsList()
        })
    }
    addBackup = () => {
        const { s3Dir } = this.props
        const { site_id } = this.state
        let newPrefix = `${s3Dir}/sites/${site_id}/backups/${Date.now()}-${'manual'}`
        this.setState({ createBackupLoader: true })
        _s3.listFiles({ Prefix: `${s3Dir}/sites/${site_id}/backups/`, Delimiter: '/' }, async (apiRequest) => {
            if (apiRequest.error || !apiRequest.data || !apiRequest.data.CommonPrefixes) {
                showToast({ type: 'error', message: 'Unable to fetch data, Try Relogging' })
                this.setState({ createBackupLoader: false })
                return
            }
            if (apiRequest.data.CommonPrefixes.length == 0) {
                newPrefix += '-original'
            }
            await _s3.copyFiles({
                oldPrefix: `${s3Dir}/sites/${site_id}`,
                newPrefix,
                blockList: ['publish/', 'backups/']
            })
            this.setState({ createBackupLoader: false })
            this.getBackupsList()
            showToast({ type: 'success', message: 'Backup Created Successfuly' })
        })
    }
    restoreBackup = async () => {
        const { s3Dir, dispatch } = this.props
        let { site_id, selectedBackupPrefix: prefix } = this.state
        prefix = prefix.slice(0, -1)
        dispatch(showLoader())
        await _s3.copyFiles({
            oldPrefix: prefix,
            newPrefix: `${s3Dir}/sites/${site_id}`,
        })
        dispatch(hideLoader())
        this.setState({ selectedBackupPrefix: null })
        showToast({ type: 'success', message: 'Backup Restored Successfuly' })
        // this.getBackupsList()
    }
    getBackupsList = () => {
        const { s3Dir } = this.props
        const { site_id } = this.state
        _s3.listFiles({ Prefix: `${s3Dir}/sites/${site_id}/backups/`, Delimiter: '/' }, (apiRequest) => {
            if (apiRequest.error) {
                showToast({ type: 'error', message: 'Unable to fetch data, Try Relogging' })
                return
            }
            let backups = apiRequest.data.CommonPrefixes && apiRequest.data.CommonPrefixes.sort((a, b) => {
                let labelA = a.Prefix.split('/')
                labelA.pop()
                labelA = labelA.pop().split('-')
                const dateA = labelA[0]

                let labelB = b.Prefix.split('/')
                labelB.pop()
                labelB = labelB.pop().split('-')
                const dateB = labelB[0]

                return parseInt(dateB) - parseInt(dateA)
            })
            this.setState({ backups }, () => {
                this.createBackupElem()
            })
        })
    }
    createBackupElem = () => {
        const { backups } = this.state
        let originalBackupsElems = null
        let resp = null
        resp = backups.map((item, key) => {
            let label = item.Prefix.split('/')
            label.pop()
            label = label.pop().split('-')
            const date = label[0]
            const type = _.startCase(label[1])
            const isOriginal = label[2]
            if (isOriginal) {
                originalBackupsElems = (
                    <div className=" org-data">
                        <div className=" org-data-inner row">
                            <div className="col col-md-9 col-lg-9 col-sm-12">
                                <div className="mon-ago" style={{ height: '100%' }}>
                                    <div className="mon-ago-left">
                                        <span className="icon-File black"></span>
                                    </div>
                                    <div className="mon-ago-right">
                                        <p className="oss-11 black">{moment(parseInt(date)).fromNow()}</p>
                                        <span className="osr-11 darkgrey">{moment(parseInt(date)).format('MMMM Do YYYY, h:mm:ss A')}</span>
                                    </div>
                                </div>
                                <div className="auto-bkup" style={{ height: '100%' }}>
                                    <div className="auto-bkup-left">
                                        <span className="icon-File black"></span>
                                    </div>
                                    <div className="auto-bkup-right" style={{ display: 'flex', alignItems: 'center' }}>
                                        <p className="oss-11 black">{type}</p>
                                        <span className="osr-11 darkgrey">
                                            {/* <span className="abr-pages">Automatic backup are created every time you publish to preserve your previous past works</span> */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-3 col-lg-3 col-sm-12">
                                <button id="ov-preview" type="button" className="osr-13 darkgrey-bg white" onClick={() => {
                                    window.open(`${assetsUrl}/${item.Prefix}preview/index.html`, '_blank')
                                }}>
                                    <span className="icon-Eye"></span>
                                    Preview
                                </button>
                                <button id="ov-restore" type="button" className="osr-13 turq-bg white" data-bs-toggle="modal" data-bs-target="#pop-confirm-modal-restore" onClick={() => {
                                    this.setState({ selectedBackupPrefix: item.Prefix })
                                }}>
                                    <span className="icon-Refesh"></span>
                                    Restore
                                </button>
                            </div>
                        </div>
                    </div>
                )
                return
            }
            return (
                <div className=" org-data">
                    <div className=" org-data-inner row">
                        <div className="col col-md-9 col-lg-9 col-sm-12">
                            <div className="mon-ago" style={{ height: '100%' }}>
                                <div className="mon-ago-left">
                                    <span className="icon-File black"></span>
                                </div>
                                <div className="mon-ago-right">
                                    <p className="oss-11 black">{moment(parseInt(date)).fromNow()}</p>
                                    <span className="osr-11 darkgrey">{moment(parseInt(date)).format('MMMM Do YYYY, h:mm:ss A')}</span>
                                </div>


                            </div>
                            <div className="auto-bkup" style={{ height: '100%' }}>
                                <div className="auto-bkup-left">
                                    <span className="icon-File black"></span>
                                </div>
                                <div className="auto-bkup-right" style={{ display: 'flex', alignItems: 'center' }}>
                                    <p className="oss-11 black">{type}</p>
                                    {/* <span className="osr-11 darkgrey"><span className="abr-pages">Pages : 2</span><span className="abr-style">Styles : 47</span><span className="abr-elmnt">Elements : 25</span></span> */}
                                </div>


                            </div>


                        </div>
                        <div className="col col-md-3 col-lg-3 col-sm-12">
                            <button id="ov-preview" type="button" className="osr-13 darkgrey-bg white" onClick={() => {
                                window.open(`${assetsUrl}/${item.Prefix}preview/index.html`, '_blank')
                            }}>
                                <span className="icon-Eye"></span>
                                Preview
                            </button>
                            <button id="ov-restore" type="button" className="osr-13 turq-bg white" data-bs-toggle="modal" data-bs-target="#pop-confirm-modal-restore" onClick={() => {
                                this.setState({ selectedBackupPrefix: item.Prefix })
                            }}>
                                <span className="icon-Refesh"></span>
                                Restore
                            </button>

                        </div>
                    </div>
                </div>
            )
        })
        resp = resp.filter(x => x)
        this.setState({ backupsElems: resp, originalBackupsElems })
    }
    render() {
        const { dispatch, currentUser } = this.props
        const { createBackupLoader, backups, backupsElems, originalBackupsElems } = this.state
        return (
            <>
                <div className="tab-pane fade" id="ds-backup" role="tabpanel" aria-labelledby="nav-backup-tab">
                    <div className="dash-set-tab-content main-backup-tab">
                        <div className="dash-set-tab-content-inner">


                            <div className="row">
                                <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                    <h1 className="osb-22 black">Backups</h1>
                                    <div className="dash-set-data">
                                        <div className=" p-data-cmn dash-set-data-row1">
                                            <p className="osb-22 black">Backups</p>
                                            <p className="osr-13 darkgrey">Your sites are automatically backed up.  You can view your backup history below.  You can preview or restore to the original version or any backed up version of your site. Auto backup happens everytime you publish your site</p>
                                        </div>
                                    </div>

                                    <div className="dash-set-data">
                                        <div className=" p-data-cmn dash-set-data-row2">
                                            <p className="oss-16 black">Original Version</p>
                                            <p className="osr-13 darkgrey">The original version of this project is always available to restore.</p>
                                            {
                                                (originalBackupsElems) ? originalBackupsElems : (<div className={'billing-data-row1-inner'}
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        background: '#f2f2f2',
                                                        padding: '25px 20px',
                                                        width: '100%',
                                                    }}
                                                >
                                                    <Empty height={'auto'} width={'70px'} style={{ fill: '#67737D' }} />
                                                    <span class="oss-16 darkgrey">No Data</span>
                                                </div>)
                                            }
                                        </div>
                                    </div>

                                    <div className="dash-set-data">
                                        <div className=" p-data-cmn dash-set-data-row3">
                                            <div className=" org-data-inner row">
                                                <div className="col col-md-9 col-lg-9 col-sm-12">
                                                    <p className="oss-16 black">Latest Version</p>
                                                    <p className="osr-13 black">Preview or restore to any backed up version of your site.</p>
                                                </div>
                                                <div className="col col-md-3 col-lg-3 col-sm-12">
                                                    <button type="button" onClick={this.addBackup} className="btn btn-outline-primary oss-13 turq" style={{ width: 'auto', float: 'right', border: '1px solid #31CDB9', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                        {createBackupLoader ? (<Icons.Loading style={{ width: '15px', height: '18px' }} className={'backupsLoading'} />) : '+ '}
                                                    &nbsp;Create a New Backup
                                                    </button>
                                                </div>
                                            </div>
                                            {
                                                backupsElems.length ? backupsElems : (<div className={'billing-data-row1-inner'}
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        background: '#f2f2f2',
                                                        padding: '25px 20px',
                                                        width: '100%',
                                                    }}
                                                >
                                                    <Empty height={'auto'} width={'70px'} style={{ fill: '#67737D' }} />
                                                    <span class="oss-16 darkgrey">No Data</span>
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                    <div className="dash-set-data-colr1">
                                        {/* <!--<p className="osr-13 darkgrey gs-border">You can create and retrieve Adobe Fonts API tokens on your <a className="turq oss-13">Adobe Fonts account page.</a></p>-->												 												 */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!---------------------------------- Confirm-delete---------------------------------->			 */}
                {/* <!-- Modal HTML --> */}
                <div id="pop-confirm-modal-restore" className="modal fade">
                    <div className="modal-dialog modal-confirm">
                        <div className="modal-content">
                            <div className="modal-header flex-column">
                                <div className="icon-box">
                                    <span className="icon-Refesh"></span>
                                </div>
                                <h4 className="modal-title w-100">Are you sure?</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>Do you really want to restore to this version? if you dont have the backup for current version you wont be able to undo this action!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                                    this.restoreBackup()
                                }}>
                                    Restore
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!---------------------------------- /Confirm-delete---------------------------------->			 */}
            </>
        )
    }
}

const mapStateToProps = ({ global, layout, templates, router }) => {
    return {
        loading: global.loading,
        theme: layout.theme,
        templates,
        currentUser: global.currentUser,
        pathname: router.location.pathname,
        tokenInfo: global.tokenInfo,
        s3Dir: global.userS3Dir,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackupSettings)
