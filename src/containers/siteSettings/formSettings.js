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


class FormSettings extends React.Component {
    state = {
        data: null,
        settingsData: null
    }
    componentDidMount() {
        this.setState({ site_id: getUrlParams('siteSettings', this.props.pathname).siteId }, () => {
            this.apiRequestFormSettings()
        })
    }
    apiRequestFormSettings = async () => {
        let { dispatch } = this.props
        const { site_id } = this.state
        if (!site_id) {
            return
        }
        this.setState({ loading: true })
        const apiRequest = await Request.getFormSettings(site_id)
        this.setState({ loading: false })
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            if (!apiRequest.message.includes('Form settings not found')) {
                showToast({ type: 'error', message: apiRequest.message || 'Unable to fetch data, Try Relogging' })
            }
            return
        }
        this.setState({ settingsData: apiRequest.form_settings, submitCount: apiRequest.form_settings && !!parseInt(apiRequest.form_settings.form_submission_count)  })
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
    handleFormSettingSubmit = async (key, value) => {
        const { dispatch } = this.props
        const { faviconPic, settingsData, site_id } = this.state
        if (data.form_name.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Site Name' })
            return
        }
        if (data.submition_to_address.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter subsubmission to address' })
            return
        }
        if (data.subject_line.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Subject Line' })
            return
        }
        if (data.reply_address.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Reply Email Address' })
            return
        }
        let data = {
            ...settingsData,
            [key]: value,
            site_id: site_id
        }
        this.setState({ loading: true })
        const apiRequest = await Request.setFormSettings(data)
        this.setState({ loading: false })
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
                                            <p className="osb-22 black">Form Notification</p>
                                            <p className="osr-13 darkgrey">When a form is submitted on your published website, Webflow automatically collects the submission <br /> and displays it here. Email notifications can optionally be enabled and will come from the branded <br />email no-reply@webflow.com.</p>
                                            <div className="s-branding">
                                                <div className="s-branding-inner">
                                                    <span className="icon-Information yellow"></span>
                                                    <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <a className="yellow oss-13" href="">upgrage your account to Pro.</a> </p></div>
                                            </div>
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
                                            <p className="osb-22 black">Form Notification</p>
                                            <div className="form-notification">
                                                <form ref={(form) => this.formSettingForm = form}>

                                                    <div className="">
                                                        <label for="notifi-fname" className="form-label oss-16 black">Form Name:</label>
                                                        <input type="text" className="form-control osr-13 darkgrey" id="notifi-fname" placeholder="SiteSeed Forms" name={'form_name'} onChange={(e) => {
                                                            this.handleFormSettingSubmit('form_name', e.target.value)
                                                        }} />
                                                    </div>

                                                    <div className="">
                                                        <label for="notifi-submi" className="form-label oss-16 black">Send form submissions to:</label>
                                                        <input type="text" className="form-control osr-13 darkgrey" id="notifi-submi" placeholder="example@gmail.com" name={'submition_to_address'} onChange={(e) => {
                                                            this.handleFormSettingSubmit('submition_to_address', e.target.value)
                                                        }} />
                                                    </div>

                                                    <div className="">
                                                        <label for="notifi-sline" className="form-label oss-16 black">Subject Line:</label>
                                                        <input type="text" className="form-control osr-13 darkgrey" id="notifi-sline" placeholder="New form submission on SiteSeed for {{siteSeed}}" name={'subject_line'} onChange={(e) => {
                                                            this.handleFormSettingSubmit('subject_line', e.target.value)
                                                        }}/>
                                                    </div>

                                                    <div className="data-set-rta">
                                                        <label for="notifi-add" className="form-label oss-16 black">Reply to address:</label>
                                                        <input type="text" className="form-control osr-13 darkgrey" id="notifi-add" placeholder="no-reply@webforms.io" name={'reply_address'} onChange={(e) => {
                                                            this.handleFormSettingSubmit('reply_address', e.target.value)
                                                        }} />
                                                    </div>

                                                    <div className="dash-set-toggle">
                                                        <p className="oss-16 black">Form submission count:</p>
                                                        <label className="switch">
                                                            <input id="form-fsc" type="checkbox" name={'form_submission_count'} onChange={(e) => {
                                                                this.set('submitCount', e.target.checked)
                                                                this.handleFormSettingSubmit('form_submission_count', e.target.checked)
                                                            }} />
                                                            <span className="slider round"></span>
                                                        </label>
                                                        <p className={`site-badge osr-13 darkgrey ${this.state.submitCount ? 'clr-change' : ''}`}>Submission count is included in the form notification email</p>
                                                    </div>

                                                </form>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                    <div className="dash-set-data-colr1"><p className="osr-13 darkgrey gs-border">Set the label of the sender of the email. Cannot contain any ":" and other special characters. Note: the sender email address is: 'no-reply@SiteSeed.com'. <a className="turq oss-13">Learn more</a></p></div>
                                    <div className="dash-set-data-colr2"><p className="osr-13 darkgrey gs-border">A comma separated list of emails to send form submissions to. Leave empty if you don't want emails to be sent.</p></div>
                                    <div className="dash-set-data-colr3"><p className="osr-13 darkgrey gs-border">Form notification emails will have a subject line that starts with[SiteSeed Forms]. Upgrade to a paid plan to remove SiteSeed branding.</p><span className="osr-13 darkgrey gs-span-border">Available variables are: siteName, formName.</span></div>
                                    <div className="dash-set-data-colr4"><p className="osr-13 darkgrey gs-border">Enter the email address that you want replies to your form emails to go to. You can use your form field names as variables here, e.g., enter Name  Email  to use the input from your form's "Email" field. Only ASCII characters are supported in this field.</p></div>
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
