import React, {useEffect} from "react"
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


class FormSettings extends React.Component {
    state = {
        data: null,
        settingsData: null
    }
    componentDidMount() {
        // this.setState({ site_id: getUrlParams('siteSettings', this.props.pathname).siteId }, () => {
        //     this.apiRequestFormSettings()
        // })

        this.setState({ site_id: this.props.siteId }, () => {
            this.apiRequestFormSettings()
        })
    }

    componentDidUpdate(prevProps) {
        
        if( prevProps.siteId !== this.props.siteId ){
            this.formSettingForm.reset();
            this.setState({ site_id: this.props.siteId }, () => {
                this.apiRequestFormSettings()
            })
        }
        
    } 
    
    apiRequestFormSettings = async () => {
        console.log('fired');
        let { dispatch } = this.props
        const { site_id } = this.state
        if (!site_id) {
            return
        }
        dispatch(showLoader())
        const apiRequest = await Request.getFormSettings(site_id)
        dispatch(hideLoader())
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            if (!apiRequest.message.includes('Form settings not found')) {
                showToast({ type: 'error', message: apiRequest.message || 'Unable to fetch data, Try Relogging' })
            }
            return
        }
        this.setState({ settingsData: apiRequest.form_settings, submitCount: apiRequest.form_settings && !!parseInt(apiRequest.form_settings.form_submission_count) })
        this.setFormFields(apiRequest.form_settings, this.formSettingForm)
    }
    goto = (key, params = {}) => {   // push to the specifies location/key
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key, params))
    }
    set = (key, value) => {
        this.setState({ [key]: value })
    }
    setFormFields = (changes, form) => {
        // const { form } = this
        _.each(changes, (val, key) => {
            if (!form.elements[key] || val == 'null') {
                return
            }
            if (form.elements[key].type == 'checkbox') {
                form.elements[key].checked = !!parseInt(val)
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
    handleFormSettingSubmit = async () => {
        const { dispatch } = this.props
        const { faviconPic, settingsData, site_id } = this.state
        let form = this.formSettingForm
        let formData = this.getFormData(form)
        if (formData.form_name.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Site Name' })
            return
        }
        if (formData.submition_to_address.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter subsubmission to address' })
            return
        }
        if (formData.subject_line.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Subject Line' })
            return
        }
        if (formData.reply_address.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Reply Email Address' })
            return
        }
        let data = {
            // ...settingsData,
            // [key]: value,
            ...formData,
            site_id: site_id,
            'form_submission_count': this.state.submitCount ? 1 : 0
        }
        dispatch(showLoader())
        const apiRequest = await Request.setFormSettings(data)
        dispatch(hideLoader())
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to save, try again' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message || 'Profile updated Successfully' })
        this.apiRequestFormSettings()
    }
    render() {
        const { dispatch, currentUser } = this.props
        const { } = this.state
        return (
            <>
                <div className="tab-pane fade" id="ds-forms" role="tabpanel" aria-labelledby="nav-forms-tab">
                    <div className="dash-set-tab-content main-forms-tab">
                        <div className="dash-set-tab-content-inner">


                            <div className="row">
                                <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                    <h1 className="osb-22 black">Forms</h1>
                                    <div className="dash-set-data">
                                        <div className=" p-data-cmn dash-set-data-row1">
                                            <p className="osb-22 black">Form Notification Preferences</p>
                                            <p className="osr-13 darkgrey">Fill in the details below to adjust the settings for the forms included on this website.</p>
                                            {/* <div className="s-branding">
                                                <div className="s-branding-inner">
                                                    <span className="icon-Information yellow"></span>
                                                    <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <a className="yellow oss-13" href="">upgrage your account to Pro.</a> </p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                    <div className="dash-set-data-colr1">
                                        {/* <!--<p className="osr-13 darkgrey gs-border"><span className="oss-13 turq">What is a robots.txt file?</span> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a className="osb-13 turq" href=""> www.robotstxt.org </a> Duis tristique ante quis tellus ultricies semper. Sed placerat et augue vel. <a className="osb-13 turq" href="">Learn more.</a></p>
												<div className="dash-set-data-colr1-inner"></div>--> */}

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                    <div className="dash-set-data">
                                        <div className=" p-data-cmn dash-set-data-row1">
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <p className="osb-22 black">Form Notification</p>
                                                <button type="button" className="btn btn-outline-primary oss-13 turq" onClick={() => {
                                                    this.handleFormSettingSubmit()
                                                }}>Save</button>
                                            </div>
                                            <div className="form-notification">
                                                <form ref={(form) => this.formSettingForm = form}>

                                                    <div className="">
                                                        <label for="notifi-fname" className="form-label oss-16 black">Form Name:</label>
                                                        <input type="text" className="form-control osr-13 darkgrey" id="notifi-fname" placeholder="SiteSeed Forms" name={'form_name'} onChange={(e) => {
                                                            // this.handleFormSettingSubmit(this.formSettingForm)
                                                        }} />
                                                    </div>

                                                    <div className="">
                                                        <label for="notifi-submi" className="form-label oss-16 black">Send form submissions to:</label>
                                                        <input type="text" className="form-control osr-13 darkgrey" id="notifi-submi" placeholder="example@gmail.com" name={'submition_to_address'} onChange={(e) => {
                                                            // this.handleFormSettingSubmit(this.formSettingForm)
                                                        }} />
                                                    </div>

                                                    <div className="">
                                                        <label for="notifi-sline" className="form-label oss-16 black">Subject Line:</label>
                                                        <input type="text" className="form-control osr-13 darkgrey" id="notifi-sline" placeholder="New form submission on SiteSeed for {{siteSeed}}" name={'subject_line'} onChange={(e) => {
                                                            // this.handleFormSettingSubmit(this.formSettingForm)
                                                        }} />
                                                    </div>

                                                    <div className="data-set-rta">
                                                        <label for="notifi-add" className="form-label oss-16 black">Reply to address:</label>
                                                        <input type="text" className="form-control osr-13 darkgrey" id="notifi-add" placeholder="no-reply@webforms.io" name={'reply_address'} onChange={(e) => {
                                                            // this.handleFormSettingSubmit(this.formSettingForm)
                                                        }} />
                                                    </div>

                                                    <div className="dash-set-toggle">
                                                        <p className="oss-16 black">Form submission count:</p>
                                                        <label className="switch">
                                                            <input id="form-fsc" type="checkbox" name={'form_submission_count'} onChange={(e) => {
                                                                this.set('submitCount', e.target.checked)
                                                                // this.handleFormSettingSubmit(this.formSettingForm)
                                                            }} />
                                                            <span className={`slider round ${this.state.submitCount ? 'active' : ''}`}></span>
                                                        </label>
                                                        <p className={`site-badge osr-13 darkgrey ${this.state.submitCount ? 'clr-change' : ''}`}>Submission count is included in the form notification email</p>
                                                    </div>

                                                </form>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                    <div className="dash-set-data-colr1" style={{ paddingTop: '116px' }}><p className="osr-13 darkgrey gs-border">Give your form a name that will help you easily identify what it’s used for.</p></div>
                                    <div className="dash-set-data-colr2" style={{ paddingTop: '50px' }}><p className="osr-13 darkgrey gs-border">Send email notifications upon form submission.  You can include multiple emails for notifications, just separate each with a comma.</p></div>
                                    <div className="dash-set-data-colr3" style={{ paddingTop: '50px' }}><p className="osr-13 darkgrey gs-border">Include the information you would like to see in the subject line of form notification emails.</p></div>
                                    <div className="dash-set-data-colr4" style={{ paddingTop: '76px' }}><p className="osr-13 darkgrey gs-border">Enter the email address that you want replies to your form emails to be sent to.</p></div>
                                    <div className="dash-set-data-colr4" style={{ paddingTop: '60px' }}><p className="osr-13 darkgrey gs-border">Include submission count in the form notification email</p></div>
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
        tokenInfo: global.tokenInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSettings)
