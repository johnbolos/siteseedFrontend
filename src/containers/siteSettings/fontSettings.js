import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"
import { setTokenInfo, setUser } from "../../reducers/actions/userActions"
import { getPushPathWrapper, getUrlParams } from "../../routes"
import { apiUrl } from "../../settings"
import { hideLoader, showLoader } from "../../reducers/actions"
import _s3 from "../../components/utils/s3"

import './index.scss'

class FontSettings extends React.Component {
    state = {
        data: null,
        settingsData: {}
    }
    componentDidMount() {
        
        // this.setState({ site_id: getUrlParams('siteSettings', this.props.pathname).siteId }, () => {
        //     this.apiRequestFontSettings()
        // })
        this.addImageDragDropListner()
        this.setState({ site_id: this.props.siteId }, () => {
            this.apiRequestFontSettings()
        })
    }

    componentDidUpdate(prevProps) {
        
        if( prevProps.siteId !== this.props.siteId ){
            this.fontSettingForm.reset();
            this.addImageDragDropListner()

            this.setState({ site_id: this.props.siteId }, () => {
                this.apiRequestFontSettings()
            })
        }
        
    } 

    apiRequestFontSettings = async () => {
        let { dispatch } = this.props
        const { site_id } = this.state
        if (!site_id) {
            return
        }
        dispatch(showLoader())
        const apiRequest = await Request.getFontSettings(site_id)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            if (!apiRequest.message.includes('Font settings not found')) {
                showToast({ type: 'error', message: apiRequest.message || 'Unable to fetch data, Try Relogging' })
            }
            return
        }
        this.setState({ settingsData: apiRequest.font_settings })
        this.setFormFields(apiRequest.font_settings, this.fontSettingForm)
    }
    addImageDragDropListner = () => {
        let dropArea = document.querySelector('.img-drop-area');

        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, (e) => { dropArea.classList.add('adding-image-highlight') }, false)
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, (e) => { dropArea.classList.remove('adding-image-highlight') }, false)
        });
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, (e) => { e.preventDefault(); e.stopPropagation() }, false)
        });

        dropArea.addEventListener('drop', (e) => { this.handleFontsUpload(e, true) }, false)
    }
    goto = (key, params = {}) => {   // push to the specifies location/key
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key, params))
    }
    set = (key, value) => {
        this.setState({ [key]: value })
    }
    setFormFields = (changes, form) => {
        _.each(changes, (val, key) => {
            if (!form.elements[key] || val == 'null') {
                return
            }
            if (form.elements[key].type == 'checkbox') {
                form.elements[key].checked = !!val
                return
            }
            form.elements[key].value = val
        })
    }
    validateForm = (e) => {
        switch (e.target.name) {
            case 'email':
                if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)) {
                    e.target.setCustomValidity('Please enter a valid Email!')
                } else {
                    e.target.setCustomValidity('')
                }
                break;
            case 'password':
                break;
        }
    }
    getFormData = (form) => {
        const formEntries = new FormData(form).entries();
        return Object.assign(...Array.from(formEntries, ([name, value]) => ({ [name]: value })));
    }
    handleFontSettingSubmit = async () => {
        const { dispatch } = this.props
        const { faviconPic, settingsData, site_id } = this.state
        const form = this.fontSettingForm
        const formData = this.getFormData(form)
        if (!formData.adobe_fonts_key || formData.adobe_fonts_key.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Adobe Id' })
            return
        }
        let data = {
            // ...settingsData,
            ...formData,
            site_id: site_id
        }
        dispatch(showLoader())
        const apiRequest = await Request.setFontSettings(data)
        dispatch(hideLoader())
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to save, try again' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message || 'Settings updated Successfully' })
        this.apiRequestFontSettings()
    }
    handleFontsUpload = (e, mouseDrop) => {
        let { dispatch, assets, userS3Dir } = this.props
        let { site_id } = this.state
        let files = []
        if (mouseDrop) {
            // e.preventDefault()
            // e.stopPropagation()
            files = e.dataTransfer ? e.dataTransfer.files : []
        } else {
            files = e.target.files
        }
        if (files.length == 0) {
            return
        }
        if (files[0].size > 2000000) {
            showToast({ type: 'warning', message: 'Please upload a file smaller than 2MB' })
            // toast("please upload a file smaller than 2MB")
            return
        }
        // handle multiple files upload instead of one
        _.each(files, (file, index) => {
            if (!['woff', 'woff2', 'ttf'].includes(/(?:\.([^.]+))?$/.exec(file.name)[1])) {
                showToast({ type: 'warning', message: 'Invalid File format (preferred formats: woff/woff2/ttf)' })
                return
            }
            dispatch(showLoader())
            _s3.uploadFile(file, userS3Dir + `/sites/${site_id}/fonts`, (resp) => {
                if (index == files.length - 1) {
                    dispatch(hideLoader())
                }
                if (resp.error) {
                    if (resp.message) {
                        console.error(resp.message)
                        showToast({ type: 'error', message: resp.message })
                    }
                    return
                }
                showToast({ type: 'success', message: 'Uploaded Successfully' })
            })
        })
    }
    render() {
        const { dispatch, currentUser } = this.props
        const { } = this.state
        return (
            <>
                <div className="tab-pane fade" id="ds-font" role="tabpanel" aria-labelledby="nav-font-tab">
                    <div className="dash-set-tab-content main-font-tab">
                        <div className="dash-set-tab-content-inner">

                            <div className="row">
                                <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                    <h1 className="osb-22 black">Font</h1>
                                    <div className="dash-set-data">
                                        <div className=" p-data-cmn dash-set-data-row1">
                                            <p className="osb-22 black">Adobe Fonts</p>
                                            <p className="osr-13 darkgrey">You can add a token to use on all of your projects on the <a className="oss-13 turq">integrations tab</a> in Account Settings.</p>
                                            <p className="osr-13 darkgrey">Adobe Fonts API token for this project:</p>
                                            <div className="main-token">
                                                <div className="">
                                                    <form ref={(form) => this.fontSettingForm = form}>
                                                        <label for="ad-token" className="form-label oss-16 black">Adobe Fonts API token for this project:</label>
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>

                                                            <input type="text" className="form-control osr-13 darkgrey" id="ad-token" name={'adobe_fonts_key'} onChange={(e) => {
                                                                // this.handleFontSettingSubmit('adobe_fonts_key', e.target.value.trim() == '' ? null : e.target.value)
                                                            }} />
                                                            <button type="button" className="btn btn-outline-primary oss-13 turq" style={{ height: '49px' }} onClick={() => {
                                                                this.handleFontSettingSubmit()
                                                            }}>Save</button>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" p-data-cmn dash-set-data-row2 custom-font">
                                            <div className="col-md-1 col-lg-1 col-sm-12 col"><span className="icon-Upload darkgrey"></span></div>
                                            <div className="col-md-10 col-lg-10 col-sm-12 col">
                                                <p className="oss-16 black">Custom Fonts</p>
                                                <p className="osr-11 darkgrey">Upload custom font file(s):</p>
                                                <p className="osr-11 darkgrey">For maximum browser support, upload TTF, OTF, EOT and WOFF.</p>
                                                <p className="osr-11 darkgrey">Learn more about <span className="turq oss-11">uploading custom fonts.</span></p>
                                                <div className="custom-upload-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div className={'img-drop-area'} style={{ height: '90px', width: '374px', background: '#F2F2F2', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <div style={{ border: '2px dashed #E9E9E9', borderRadius: '3px', background: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px 99px' }}>
                                                            Drag {'&'} Drop Files Here...
                                                                <input
                                                                type={'file'}
                                                                style={{ display: 'none' }}
                                                                onChange={this.handleFontsUpload}
                                                                accept=".woff, .woff2, .ttf"
                                                                multiple
                                                            />
                                                        </div>
                                                    </div>
                                                    <div style={{ fontSize: '13px', lineHeight: '24px', fontWeight: '400', color: '#67737D' }}>OR</div>
                                                    <div className={'font-upload-btn'}>
                                                        <button type="button" className="btn btn-primary oss-13 white green-btn" onClick={() => {
                                                            document.querySelector("#upload-fonts-btn").click()
                                                        }}>
                                                            Upload...
                                                                <input
                                                                type={'file'}
                                                                id="upload-fonts-btn"
                                                                style={{ display: 'none' }}
                                                                onChange={this.handleFontsUpload}
                                                                accept=".woff, .woff2, .ttf"
                                                                multiple
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-sm-12 col"></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                    <div className="dash-set-data-colr1" style={{ paddingTop: '140px' }}>
                                        <p className="osr-13 darkgrey gs-border" style={{ paddingBottom: '13px' }}>You can create and retrieve Adobe Fonts API tokens on your <a className="turq oss-13">Adobe Fonts account page.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
        userS3Dir: global.userS3Dir,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FontSettings)
