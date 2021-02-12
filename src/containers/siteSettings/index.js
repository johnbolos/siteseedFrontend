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
import FormSettings from "./formSettings.js"
import FontSettings from "./fontSettings.js"
import CollabSettings from "./collabSettings.js"


class SiteSettings extends React.Component {
    state = {
        data: null,
        dashboardData: null,
        faviconPic: null,
        faviconPicSrc: null,
        settingsData: null
    }
    scriptArray = [
        // {
        //     src: "./assets/website/js/jquery.min.js"
        // },
        // {
        //     src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js",
        //     // integrity: "sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU",
        //     crossorigin: "anonymous"
        // },
        // {
        //     src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js",
        //     // integrity: "sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj",
        //     crossorigin: "anonymous"
        // },
        // {
        //     src: './assets/website/js/jquery-ui.js'
        // },
        {
            innerHTML: `
            var acc = document.getElementsByClassName("accordion");
            var i;
            
            for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                  panel.style.maxHeight = null;
                } else {
                  panel.style.maxHeight = panel.scrollHeight + "px";
                } 
              });
            }	  			
                $(document).ready(function(){
             var submitIcon = $('.searchbar-icon');
             var inputBox = $('.searchbar-input');
             var searchbar = $('.searchbar');
             var isOpen = false;
             submitIcon.click(function(){
             if(isOpen == false){
             searchbar.addClass('searchbar-open');
             inputBox.focus();
             isOpen = true;
             } else {
             searchbar.removeClass('searchbar-open');
             inputBox.focusout();
             isOpen = false;
             }
             });
             submitIcon.mouseup(function(){
             return false;
             });
             searchbar.mouseup(function(){
             return false;
             });
             $(document).mouseup(function(){
             if(isOpen == true){
             $('.searchbar-icon').css('display','block');
             submitIcon.click();
             }
             });
             });
             function buttonUp(){
             var inputVal = $('.searchbar-input').val();
             inputVal = $.trim(inputVal).length;
             if( inputVal !== 0){
             $('.searchbar-icon').css('display','none');
             } else {
             $('.searchbar-input').val('');
             $('.searchbar-icon').css('display','block');
             }
             }
              $( function() {
                var availableTags = [
                  "ActionScript",
                  "AppleScript",
                  "Asp",
                  "BASIC",
                  "C",
                  "C++",
                  "Clojure",
                  "COBOL",
                  "ColdFusion",
                  "Erlang",
                  "Fortran",
                  "Groovy",
                  "Haskell",
                  "Java",
                  "JavaScript",
                  "Lisp",
                  "Perl",
                  "PHP",
                  "Python",
                  "Ruby",
                  "Scala",
                  "Scheme"
                ];
                $( "#tags" ).autocomplete({
                  source: availableTags
                });
              } );
            `
        },
        {
            innerHTML: `
            var app;
      
      (function() {
        'use strict';
        
        app = {
          monthAndSlashRegex: /^\\d\\d \\/ $/, // regex to match "MM / "
          monthRegex: /^\\d\\d$/, // regex to match "MM"
          
          el_cardNumber: '.ccFormatMonitor',
          el_expDate: '#inputExpDate',
          el_cvv: '.cvv',
          el_ccUnknown: 'cc_type_unknown',
          el_ccTypePrefix: 'cc_type_',
          el_monthSelect: '#monthSelect',
          el_yearSelect: '#yearSelect',
          
          cardTypes: {
            'American Express': {
              name: 'American Express',
              code: 'ax',
              security: 4,
              pattern: /^3[47]/,
              valid_length: [15],
              formats: {
                length: 15,
                format: 'xxxx xxxxxxx xxxx'
              }
            },
            'Visa': {
                      name: 'Visa',
                      code: 'vs',
              security: 3,
                      pattern: /^4/,
                      valid_length: [16],
                      formats: {
                              length: 16,
                              format: 'xxxx xxxx xxxx xxxx'
                          }
                  },
            'Maestro': {
                      name: 'Maestro',
                      code: 'ma',
              security: 3,
                      pattern: /^(50(18|20|38)|5612|5893|63(04|90)|67(59|6[1-3])|0604)/,
                      valid_length: [16],
                      formats: {
                              length: 16,
                              format: 'xxxx xxxx xxxx xxxx'
                          }
                  },
            'Mastercard': {
                      name: 'Mastercard',
                      code: 'mc',
              security: 3,
                      pattern: /^5[1-5]/,
                      valid_length: [16],
                      formats: {
                              length: 16,
                              format: 'xxxx xxxx xxxx xxxx'
                          }
                  } 
          }
        };
        
        app.addListeners = function() {
            $(app.el_expDate).on('keydown', function(e) {
              app.removeSlash(e);
            });
      
            $(app.el_expDate).on('keyup', function(e) {
              app.addSlash(e);
            });
      
            $(app.el_expDate).on('blur', function(e) {
              app.populateDate(e);
            });
      
            $(app.el_cvv +', '+ app.el_expDate).on('keypress', function(e) {
              return e.charCode >= 48 && e.charCode <= 57;
            });  
        };
        
        app.addSlash = function (e) {
          var isMonthEntered = app.monthRegex.exec(e.target.value);
          if (e.key >= 0 && e.key <= 9 && isMonthEntered) {
            e.target.value = e.target.value + " / ";
          }
        };
        
        app.removeSlash = function(e) {
          var isMonthAndSlashEntered = app.monthAndSlashRegex.exec(e.target.value);
          if (isMonthAndSlashEntered && e.key === 'Backspace') {
            e.target.value = e.target.value.slice(0, -3);
          }
        };
        
        app.populateDate = function(e) {
          var month, year;
          
          if (e.target.value.length == 7) {
            month = parseInt(e.target.value.slice(0, -5));
            year = "20" + e.target.value.slice(5);
            
            if (app.checkMonth(month)) {
              $(app.el_monthSelect).val(month);
            } else {
              $(app.el_monthSelect).val(0);
            }
            
            if (app.checkYear(year)) {
              $(app.el_yearSelect).val(year);
            } else {
              $(app.el_yearSelect).val(0);
            }
            
          }
        };
        
        app.checkMonth = function(month) {
          if (month <= 12) {
            var monthSelectOptions = app.getSelectOptions($(app.el_monthSelect));
            month = month.toString();
            if (monthSelectOptions.includes(month)) {
              return true; 
            }
          }
        };
        
        app.checkYear = function(year) {
          var yearSelectOptions = app.getSelectOptions($(app.el_yearSelect));
          if (yearSelectOptions.includes(year)) {
            return true; 
          }
        };
                
        app.getSelectOptions = function(select) {
          var options = select.find('option');
          var optionValues = [];
          for (var i = 0; i < options.length; i++) {
            optionValues[i] = options[i].value;
          }
          return optionValues;
        };
        
        app.setMaxLength = function ($elem, length) {
          if($elem.length && app.isInteger(length)) {
            $elem.attr('maxlength', length);
          }else if($elem.length){
            $elem.attr('maxlength', '');
          }
        };
        
        app.isInteger = function(x) {
          return (typeof x === 'number') && (x % 1 === 0);
        };
      
        app.createExpDateField = function() {
          $(app.el_monthSelect +', '+ app.el_yearSelect).hide();
          $(app.el_monthSelect).parent().prepend('<input type="text" className="ccFormatMonitor">');
        };
        
        
        app.isValidLength = function(cc_num, card_type) {
          for(var i in card_type.valid_length) {
            if (cc_num.length <= card_type.valid_length[i]) {
              return true;
            }
          }
          return false;
        };
      
        app.getCardType = function(cc_num) {
          for(var i in app.cardTypes) {
            var card_type = app.cardTypes[i];
            if (cc_num.match(card_type.pattern) && app.isValidLength(cc_num, card_type)) {
              return card_type;
            }
          }
        };
      
        app.getCardFormatString = function(cc_num, card_type) {
          for(var i in card_type.formats) {
            var format = card_type.formats[i];
            if (cc_num.length <= format.length) {
              return format;
            }
          }
        };
      
        app.formatCardNumber = function(cc_num, card_type) {
          var numAppendedChars = 0;
          var formattedNumber = '';
          var cardFormatIndex = '';
      
          if (!card_type) {
            return cc_num;
          }
      
          var cardFormatString = app.getCardFormatString(cc_num, card_type);
          for(var i = 0; i < cc_num.length; i++) {
            cardFormatIndex = i + numAppendedChars;
            if (!cardFormatString || cardFormatIndex >= cardFormatString.length) {
              return cc_num;
            }
      
            if (cardFormatString.charAt(cardFormatIndex) !== 'x') {
              numAppendedChars++;
              formattedNumber += cardFormatString.charAt(cardFormatIndex) + cc_num.charAt(i);
            } else {
              formattedNumber += cc_num.charAt(i);
            }
          }
      
          return formattedNumber;
        };
      
        app.monitorCcFormat = function($elem) {
          var cc_num = $elem.val().replace(/\D/g,'');
          var card_type = app.getCardType(cc_num);
          $elem.val(app.formatCardNumber(cc_num, card_type));
          app.addCardClassIdentifier($elem, card_type);
        };
      
        app.addCardClassIdentifier = function($elem, card_type) {
          var classIdentifier = app.el_ccUnknown;
          if (card_type) {
            classIdentifier = app.el_ccTypePrefix + card_type.code;
            app.setMaxLength($(app.el_cvv), card_type.security);
          } else {
            app.setMaxLength($(app.el_cvv));
          }
      
          if (!$elem.hasClass(classIdentifier)) {
            var classes = '';
            for(var i in app.cardTypes) {
              classes += app.el_ccTypePrefix + app.cardTypes[i].code + ' ';
            }
            $elem.removeClass(classes + app.el_ccUnknown);
            $elem.addClass(classIdentifier);
          }
        };
      
        
        app.init = function() {
      
          $(document).find(app.el_cardNumber).each(function() {
            var $elem = $(this);
            if ($elem.is('input')) {
              $elem.on('input', function() {
                app.monitorCcFormat($elem);
              });
            }
          });
          
          app.addListeners();
          
        }();
        
      })();
            `
        },
        {
            innerHTML: `
            $('#pmt-plan-toggle').change(function(){
                if($(this).is(":checked")) {
                    $('.site-badge').addClass('clr-change');
                } else {
                    $('.site-badge').removeClass('clr-change');
                }
            });
            
            $('#form-fsc').change(function(){
                if($(this).is(":checked")) {
                    $('.site-badge').addClass('clr-change');
                } else {
                    $('.site-badge').removeClass('clr-change');
                }
            });
            `
        },
    ]
    styleArray = [
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
            rel: "stylesheet",
            // integrity: "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",
            crossorigin: "anonymous",
        },
        {
            rel: "stylesheet",
            href: "./assets/website/css/jquery-ui.css"
        },
        {
            rel: "stylesheet",
            href: "./assets/website/css/style.css"
        },
    ]
    componentDidMount() {
        this.loadScriptNStyle()
        this.setState({ site_id: getUrlParams('siteSettings', this.props.pathname).siteId }, () => {
            this.apiRequestDashboard()
            this.apiRequestGeneralSettings()
        })
    }
    loadScriptNStyle = () => {
        const { scriptArray, styleArray } = this
        styleArray.forEach(styleData => {
            let elem = document.createElement("link")
            _.each(styleData, (val, key) => {
                elem[key] = val
            })
            elem.id = 'ss-styles-load'
            document.head.appendChild(elem)
        })

        scriptArray.forEach(scriptData => {
            let elem = document.createElement("script")
            _.each(scriptData, (val, key) => {
                elem[key] = val
            })
            elem.id = 'ss-script-load'
            document.body.appendChild(elem)
        })
    }
    apiRequestDashboard = async () => {
        let { tokenInfo } = this.props
        if (!tokenInfo.access_token) {
            return
        }
        this.setState({ loading: true })
        const apiRequest = await Request.dashboard()
        this.setState({ loading: false })
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to fetch data, Try Relogging' })
            return
        }
        this.setState({ dashboardData: apiRequest.data })
    }
    apiRequestGeneralSettings = async () => {
        let { dispatch } = this.props
        let { site_id } = this.state
        if (!site_id) {
            return
        }
        this.setState({ loading: true })
        let data = {
            site_id: site_id,
            action: 'fetch'
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        const apiRequest = await Request.getGeneralSettings(formData)
        this.setState({ loading: false })
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.message || 'Unable to fetch data, Try Relogging' })
            return
        }
        this.setState({ settingsData: apiRequest.general_settings, faviconPicSrc: apiUrl + apiRequest.general_settings.favicon })
        this.setFormFields(apiRequest.general_settings, this.generalSettingForm)
    }
    logout = () => {
        const { dispatch } = this.props
        Request.logout().then((apiRequest) => {
            localStorage.removeItem('access_token')
            dispatch(setUser(null))
            dispatch(setTokenInfo({}))
            this.goto('loginPage')
        })
    }
    goto = (key, params = {}) => {   // push to the specifies location/key
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key, params))
    }
    componentWillUnmount() {
        document.querySelectorAll('#ss-script-load').forEach(e => e.remove())
        document.querySelectorAll('#ss-styles-load').forEach(e => e.remove())
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
    handleGeneralSettingSubmit = async (form) => {
        const { dispatch } = this.props
        const { faviconPic, settingsData, branding } = this.state
        // e.preventDefault()
        let data = this.getFormData(form)
        if (data.site_name.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Site Name' })
            return
        }
        if (data.sub_domain.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter sub-domain Name' })
            return
        }
        if (faviconPic) {
            data.favicon = faviconPic
        } else {
            data.favicon = settingsData && settingsData.favicon
        }
        data.branding = branding ? 1 : 0
        data.site_id = this.state.site_id
        data.action = 'save'
        data.custom_domain = settingsData && settingsData.custom_domain
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        this.setState({ loading: true })
        const apiRequest = await Request.setGeneralSettings(formData)
        this.setState({ loading: false })
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to save, try again' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message || 'Profile updated Successfully' })
        this.apiRequestGeneralSettings()
    }
    handleFaviconPicChange = (e) => {
        if (e.target.files.length == 0) {
            return
        }
        let mainInput = e.target
        let img = new Image();
        img.onload = (e1) => {
            let image = e1.target
            if (image.height > 32 || image.width > 32) {
                showToast({ type: 'error', message: 'Invalid Image Dimensions' })
                // clear image
                mainInput.value = null
                return
            }
            let file = mainInput.files[0]
            this.setState({ faviconPic: file, faviconPicSrc: image.src, imgAdded: true }, () => {
                this.handleGeneralSettingSubmit(this.generalSettingForm)
            })

            // document.querySelector('input[type="file"]').addEventListener('change', function() {
            //     if (this.files && this.files[0]) {
            //         var img = document.getElementById('dash-set-myImg');  // $('img')[0]
            //         img.src = URL.createObjectURL(this.files[0]); // set src to blob url  
            //         document.getElementById('dash-set-fav-img').classList.add("dash-img-added");				   
            //     }

            // });
            // document.getElementById('dash-set-remove-img').addEventListener('click', function() {
            //          var img = document.getElementById('dash-set-myImg'); // $('img')[0]
            //          img.src =  './assets/website/images/dash-set-favbg.png'; // set src to blob url
            //          document.getElementById('dash-set-fav-img').classList.remove("dash-img-added");	

            //      });
        }
        img.src = window.URL.createObjectURL(e.target.files[0]);
    }
    removeImage = () => {
        this.setState({ faviconPic: null, faviconPicSrc: apiUrl + this.state.settingsData.favicon, imgAdded: false })
    }
    render() {
        const { dispatch, currentUser } = this.props
        const { dashboardData, imgAdded, faviconPicSrc } = this.state
        return (
            <>
                <div className="admin-main-panel">
                    <div className="admin-main-panel-inner">
                        {/* <!----------------------------------Top-Bar----------------------------------> */}
                        <section className="topbar-main">
                            <div className="topbar-main-inner main-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 ">
                                            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                                                <div className="container-fluid">
                                                    <a className="navbar-brand"><img src="./assets/website/images/Logo.svg" className="img-fluid" alt="Responsive image" /></a>
                                                    {/* <!--<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display: 'none'}}>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                     <a className="nav-link active" aria-current="page">Home</a>
                                    </li>
                                    <li className="nav-item">
                                     <a className="nav-link">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                     <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                     </a>
                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item">Action</a></li>
                                    <li><a className="dropdown-item">Another action</a></li>
                                    <li><hr className="dropdown-divider"></li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                     </ul>
                                    </li>
                                    <li className="nav-item">
                                     <a className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                    </ul>
                                    </div>--> */}
                                                    <ul className="nav cs-topright">
                                                        <li className="nav-item cs-topright-left">
                                                            <a className="nav-link left-top darkgrey osr-13">Need Support?</a>
                                                        </li>
                                                        <li className="nav-item cs-topright-right">
                                                            {/* <img src="./assets/website/images/Greg-jacoby.png" className="img-fluid" alt="Responsive image" /> */}
                                                            {
                                                                currentUser.profile_picture ? (
                                                                    <img src={currentUser.profile_picture} className="img-fluid" alt="Responsive image"
                                                                        style={{
                                                                            float: 'left',
                                                                            height: '35px',
                                                                            width: '35px',
                                                                            marginRight: '10px',
                                                                            color: '#31cdb9',
                                                                            borderRadius: '50%'
                                                                        }}
                                                                    />
                                                                ) : (
                                                                        <i
                                                                            className="fa fa-user-circle-o"
                                                                            aria-hidden="true"
                                                                            style={{
                                                                                float: 'left',
                                                                                fontSize: '35px',
                                                                                marginRight: '10px',
                                                                                color: '#31cdb9',
                                                                            }}
                                                                        ></i>
                                                                    )
                                                            }
                                                            <a className="nav-link dropdown-toggle right-top black osr-13" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                {currentUser.display_name || currentUser.first_name}
                                                                {/* Greg Jacoby */}
                                                            </a>
                                                            <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                                <li><a className="dropdown-item osr-13 darkgrey" onClick={() => { this.goto('profile', { activeTab: 'details' }) }}>Profile</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey" onClick={() => { this.goto('profile', { activeTab: 'account' }) }}>Account {'&'} Security</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey" onClick={() => { this.goto('profile', { activeTab: 'notification' }) }}>Notifications</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey" data-bs-toggle="modal" data-bs-target="#choose-lang1">Language</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey" >Help Center</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey" onClick={this.logout}>Log Out</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Top-Bar----------------------------------> */}


                        {/* <!---------------------------------- Dashboard-Export----------------------------------> */}
                        <section className="dashboard-main">
                            <div className="dashboard-main-inner main-inner">
                                <div className="container">
                                    <div className="row cs-dashboard1">
                                        <div className="col-sm-12 col-md-8 col-lg-8 col1"></div>
                                        <div className=" col-sm-12 col-md-4 col-lg-4 col2">
                                            <ul>
                                                <li className="tw-main"><span className="tw-main-inner"><span className="tw-t oss-13 turq"><span className="num-chng">{dashboardData && (dashboardData.total_user_sites || 0)}</span>/<span className="total-num">{dashboardData && (dashboardData.total_sites || 0)}</span> left</span> <br /> <span className="tw-b osr-11 darkgrey">Total Website</span></span></li>
                                                <li className="ec-main"><span className="ec-main-inner"><span className="ec-t oss-13 turq"><span className="num-chng">{dashboardData && (dashboardData.total_user_exports || 0)}</span><span className="total-num">/{dashboardData && (dashboardData.export_credits || 0)}</span> left</span> <br /> <span className="ec-b osr-11 darkgrey">Export Credits</span></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Dashboard-Export----------------------------------> */}


                        {/* <!---------------------------------- Dashboard-setting-panel----------------------------------> */}
                        <section className="dash-set-main">
                            <div className="dash-set-main-inner main-inner">
                                <div className="container">
                                    <div className="row dash-set-row1">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col1">


                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <a className="nav-link  darkgrey osr-16" id="" onClick={() => { this.goto('dashboard') }} >Dashboard</a>
                                                    <a className="nav-link active  darkgrey osr-16" id="nav-general-tab" data-bs-toggle="tab" href="#ds-general" role="tab" aria-controls="nav-general" aria-selected="false">General</a>
                                                    {/* <!--<a className="nav-link darkgrey osr-16" id="nav-billing-tab" data-bs-toggle="tab" href="#ds-billing" role="tab" aria-controls="nav-billing" aria-selected="false">Billing</a>--> */}
                                                    <a className="nav-link darkgrey osr-16" id="nav-seo-tab" data-bs-toggle="tab" href="#ds-seo" role="tab" aria-controls="nav-seo" aria-selected="false">SEO</a>
                                                    <a className="nav-link darkgrey osr-16" id="nav-forms-tab" data-bs-toggle="tab" href="#ds-forms" role="tab" aria-controls="nav-forms" aria-selected="false">Forms</a>
                                                    <a className="nav-link darkgrey osr-16" id="nav-font-tab" data-bs-toggle="tab" href="#ds-font" role="tab" aria-controls="nav-font" aria-selected="false">Font</a>
                                                    <a className="nav-link darkgrey osr-16" id="nav-backup-tab" data-bs-toggle="tab" href="#ds-backup" role="tab" aria-controls="nav-backup" aria-selected="false">Backups</a>
                                                    <a className="nav-link darkgrey osr-16" id="nav-contributor-tab" data-bs-toggle="tab" href="#ds-contributor" role="tab" aria-controls="nav-contributor" aria-selected="false">Contributor</a>
                                                </div>
                                            </nav>


                                            <div className="tab-content" id="nav-tabContent">


                                                <div className="tab-pane fade  " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"></div>


                                                <div className="tab-pane fade show active" id="ds-general" role="tabpanel" aria-labelledby="nav-general-tab">
                                                    <div className="dash-set-tab-content">
                                                        <div className="dash-set-tab-content-inner">
                                                            <form
                                                                // onSubmit={this.handleGeneralSettingSubmit.bind(this)}
                                                                ref={(form) => this.generalSettingForm = form}>
                                                                <div className="row">
                                                                    <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                                                        <h1 className="osb-22 black">General</h1>
                                                                        <div className="dash-set-data">
                                                                            <div className=" p-data-cmn dash-set-data-row2">
                                                                                <p className="osb-22 black">General Setting</p>
                                                                                <div className="dash-set-name">
                                                                                    <label for="ep-name" className="form-label oss-16 black">Name</label>
                                                                                    <input type="d-name" className="form-control osr-13 darkgrey" id="ep-name" placeholder="Enter Project Name" name={'site_name'} onChange={() => { this.handleGeneralSettingSubmit(this.generalSettingForm) }} />
                                                                                </div>
                                                                                <div className="dash-set-subdo">
                                                                                    <label for="gs-subdomain" className="form-label oss-16 black">Subdomain</label>
                                                                                    <input type="text" className="osr-13 darkgrey" placeholder="test-inital-project-2d5e53" id="gs-subdomain" name={'sub_domain'} onChange={() => { this.handleGeneralSettingSubmit(this.generalSettingForm) }} />
                                                                                    <input type="text" className="oss-13 turq" id="gs-subdomaintwo" value=".siteseed.com" disabled="" /><span className="icon-Tick-Outline turq" ></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                                                        <div className="dash-set-data-colr1">
                                                                            <p className="osr-13 darkgrey gs-border">This is the project title within SiteSeed. You can update what visitors see in search result in each page’s settings in the Designer.</p>
                                                                            <p className="osr-13 darkgrey gs-border">This is the project title within SiteSeed. You can update what visitors see in search result in each page’s settings in the Designer.</p>
                                                                            <div className="dash-set-data-colr1-inner"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>





                                                                <div className="row">
                                                                    <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                                                        <div className="dash-set-data">
                                                                            <div className=" p-data-cmn dash-set-data-row1">
                                                                                <p className="osb-22 black">Icons</p>
                                                                                <div id="dash-set-fav-img" className={`img-upload ${imgAdded && 'dash-img-added'}`} >
                                                                                    <p className="oss-16 black">Favicon icon</p>
                                                                                    <div className="img-upload-left">
                                                                                        {/* <img id="dash-set-myImg" src="./assets/website/images/dash-set-favbg.png" alt="your image" height='100px' width='100px' /> */}
                                                                                        {
                                                                                            faviconPicSrc ? (
                                                                                                <img src={faviconPicSrc} id="dash-set-myImg" alt="your image" height='100px' width='100px' />
                                                                                            ) : (
                                                                                                    <img id="dash-set-myImg" src={'./assets/website/images/dash-set-favbg.png'} alt="your image" height='100px' width='100px' />
                                                                                                )
                                                                                        }
                                                                                        <button id="dash-set-remove-img" type="button" style={{ display: 'none' }} onClick={this.removeImage}><span className="icon-Delete"></span></button>
                                                                                    </div>
                                                                                    <div className="img-upload-right">
                                                                                        <input type='file' className="cs-get-file oss-13 white" onChange={this.handleFaviconPicChange} /><span className="oss-13 white">upload</span>
                                                                                        <p className="osr-13 darkgrey">Upload a 32x32 pixel Icon, PNG, Gif, or JPG to <br /> display in brower tabs</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                                                        <div className="dash-set-data-colr2">
                                                                            <p className="osr-13 darkgrey gs-border">This is the project title within SiteSeed. You can update what visitors see in search result in each page’s settings in the Designer.</p>
                                                                            <div className="dash-set-data-colr2-inner"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>




                                                                <div className="row">
                                                                    <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                                                        <div className="dash-set-data">
                                                                            <div className=" p-data-cmn dash-set-data-row3">
                                                                                <p className="osb-22 black">Sitesite Branding</p>
                                                                                <div className="s-branding">
                                                                                    <div className="s-branding-inner">
                                                                                        <span className="icon-Information yellow"></span>
                                                                                        <p className="osr-13 darkgrey">To hide SiteSeed Brand from the published site <a className="yellow oss-13" href="">upgrage your account to Pro.</a></p></div>
                                                                                </div>
                                                                                <div className="s-branding1">

                                                                                    <div className="s-branding-inner1">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <label className="switch">
                                                                                                    <input id="pmt-plan-toggle" type="checkbox" name={'branding'} onChange={(e) => {
                                                                                                        this.setState({ branding: e.target.checked }, () => {
                                                                                                            this.handleGeneralSettingSubmit(this.generalSettingForm)
                                                                                                        })
                                                                                                    }} />
                                                                                                    <span className="slider round"></span>
                                                                                                </label>
                                                                                                <p className="site-badge oss-13 darkgrey ">Display “Made in Siteseed” badge</p>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                                                        <div className="dash-set-data-colr3">
                                                                            <p className="osr-13 darkgrey gs-border">This is the project title within SiteSeed. You can update what visitors see in search result in each page’s settings in the Designer.</p>
                                                                            <div className="dash-set-data-colr3-inner"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>




                                                                <div className="row">
                                                                    <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                                                        <div className="dash-set-data">
                                                                            <div className=" p-data-cmn dash-set-data-row4">
                                                                                <p className="osb-22 black">Custom Domains</p>
                                                                                <div className="c-domains">
                                                                                    <div className="c-domains-inner">
                                                                                        <span className="icon-Information yellow"></span>
                                                                                        <p className="osr-13 darkgrey">Upgrade to a paid site plan to add or purchase custom domain(s). <a className="yellow oss-13" href=""> upgrage your account to Pro. </a></p>
                                                                                        {/* <label for="custom-name-name" className="form-label oss-16 black">Name</label> */}
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="dash-set-name"
                                                                                    style={{ display: 'none' }}
                                                                                >
                                                                                    <input type="text" className="form-control osr-13 darkgrey" id="custom-name" placeholder="Enter Custom Domain" name={'custom-domain'} onChange={() => { this.handleGeneralSettingSubmit(this.generalSettingForm) }} />
                                                                                </div>
                                                                                <div className="c-domains1">
                                                                                    <div className="c-domains-inner1">
                                                                                        <span className="icon-Information redish"></span>
                                                                                        <p className="osr-13 darkgrey">Note: Some DNS providers don’t support using SSL on the root domain (the version without www). Learn more about <a className="redish oss-13" href="">setting up SSL on your root domain.</a></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                                                        <div className="dash-set-data-colr4">
                                                                            <p className="osr-13 darkgrey gs-border">This is the project title within SiteSeed. You can update what visitors see in search result in each Need help? <span className="oss-13 turq">Learn how to set up custom domain hosting.</span></p>
                                                                            <div className="dash-set-data-colr4-inner"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>


                                                {/* <!--<div className="tab-pane fade" id="ds-billing" role="tabpanel" aria-labelledby="nav-billing-tab">
								<div className="dash-set-tab-content main-billing-tab">
                                    <div className="dash-set-tab-content-inner">									   								   
									   <div className="row">
                                          <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
										  <h1 className="osb-22 black">Billing</h1>
                                          </div>
                                          <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">											
											<h1 className="osb-22 black">Billing</h1>																					  										  
										  </div>
                                       </div> 									   									   									   									   									   									   									   									   
                                    </div>
                                 </div>							                                  
                              </div> -->  */}


                                                <div className="tab-pane fade" id="ds-seo" role="tabpanel" aria-labelledby="nav-seo-tab">
                                                    <div className="dash-set-tab-content main-seo-tab">
                                                        <div className="dash-set-tab-content-inner">


                                                            <div className="row">
                                                                <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                                                    <h1 className="osb-22 black">Search Engine Optimization</h1>
                                                                    <div className="dash-set-data">
                                                                        <div className=" p-data-cmn dash-set-data-row1">
                                                                            <p className="osb-22 black">Sitesite Branding</p>
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
                                                                        <p className="osr-13 darkgrey gs-border"><span className="oss-13 turq">What is a robots.txt file?</span> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a className="osb-13 turq" href=""> www.robotstxt.org </a> Duis tristique ante quis tellus ultricies semper. Sed placerat et augue vel. <a className="osb-13 turq" href="">Learn more.</a></p>
                                                                        <div className="dash-set-data-colr3-inner"></div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                                                    <div className="dash-set-data">
                                                                        <div className=" p-data-cmn dash-set-data-row1">
                                                                            <p className="osb-22 black">Sitemap</p>
                                                                            <p className="oss-16 black">Auto-generate Sitemap</p>
                                                                            <div className="s-branding">
                                                                                <div className="s-branding-inner">
                                                                                    <span className="icon-Information yellow"></span>
                                                                                    <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <a className="yellow oss-13" href="">upgrage your account to Pro.</a> </p></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                                                    <div className="dash-set-data-colr2">
                                                                        <p className="osr-13 darkgrey gs-border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique ante quis tellus ultricies semper. Sed placerat et augue vel.</p>
                                                                        <div className="dash-set-data-colr3-inner"></div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="row">
                                                                <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                                                    <div className="dash-set-data">
                                                                        <div className=" p-data-cmn dash-set-data-row1">
                                                                            <p className="osb-22 black">Custom sitemap.xml</p>
                                                                            <p className="oss-16 black">Auto-generate Sitemap</p>
                                                                            <div className="s-branding">
                                                                                <div className="s-branding-inner">
                                                                                    <span className="icon-Information yellow"></span>
                                                                                    <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <a className="yellow oss-13" href="">upgrage your account to Pro.</a> </p></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                                                    <div className="dash-set-data-colr3">
                                                                        <p className="osr-13 darkgrey gs-border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique ante quis tellus ultricies semper. Sed placerat et augue vel.</p>
                                                                        <div className="dash-set-data-colr3-inner"></div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row seo-row3">
                                                                <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                                                    <div className="dash-set-data">
                                                                        <div className=" p-data-cmn dash-set-data-row1">
                                                                            <p className="osb-22 black">Google Site Verification</p>
                                                                            <div className="dash-set-name">
                                                                                <label for="verfy-id" className="form-label oss-16 black">Verification ID</label>
                                                                                <input type="text" className="form-control osr-13 darkgrey" id="verfy-id" placeholder="New form submission on SiteSeed for {{siteName}}" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-lg-4 col-sm-12 dash-set-tab-colr">
                                                                    <div className="dash-set-data-colr3">
                                                                        <p className="osr-13 darkgrey gs-border">Visit <a className="oss-13 turq">Google Search Console</a> to add and verify your site. <a className="oss-13 turq">Learn more about verifying your site</a></p>
                                                                        <div className="dash-set-data-colr3-inner"></div>
                                                                    </div>
                                                                </div>
                                                            </div>





                                                        </div>
                                                    </div>


                                                </div>

                                                <FormSettings />

                                                <FontSettings />

                                                <div className="tab-pane fade" id="ds-backup" role="tabpanel" aria-labelledby="nav-backup-tab">
                                                    <div className="dash-set-tab-content main-backup-tab">
                                                        <div className="dash-set-tab-content-inner">


                                                            <div className="row">
                                                                <div className="col-md-8 col-lg-8 col-sm-12 dash-set-tab-coll">
                                                                    <h1 className="osb-22 black">Forms</h1>
                                                                    <div className="dash-set-data">
                                                                        <div className=" p-data-cmn dash-set-data-row1">
                                                                            <p className="osb-22 black">Backups</p>
                                                                            <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum velit a arcu accumsan suscipit. Maecenas rhoncus finibus ligula. Fusce rutrum leo pulvinar mauris mattis.</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="dash-set-data">
                                                                        <div className=" p-data-cmn dash-set-data-row2">
                                                                            <p className="oss-16 black">Original Version</p>
                                                                            <p className="osr-13 darkgrey">The original version of this project is always available to restore.</p>
                                                                            <div className=" org-data">
                                                                                <div className=" org-data-inner row">
                                                                                    <div className="col col-md-9 col-lg-9 col-sm-12">
                                                                                        <div className="mon-ago">
                                                                                            <div className="mon-ago-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="mon-ago-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey">October 27th 2020, 12:30:04 PM</span>
                                                                                            </div>


                                                                                        </div>
                                                                                        <div className="auto-bkup">
                                                                                            <div className="auto-bkup-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="auto-bkup-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey"><span className="abr-pages">Pages : 2</span><span className="abr-style">Styles : 47</span><span className="abr-elmnt">Elements : 25</span></span>
                                                                                            </div>


                                                                                        </div>


                                                                                    </div>
                                                                                    <div className="col col-md-3 col-lg-3 col-sm-12">
                                                                                        <button id="ov-preview" type="button" className="osr-13 darkgrey-bg white"><span className="icon-Eye"></span>Preview</button>
                                                                                        <button id="ov-restore" type="button" className="osr-13 turq-bg white"><span className="icon-Refesh"></span>Restore</button>

                                                                                    </div>
                                                                                </div>



                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dash-set-data">
                                                                        <div className=" p-data-cmn dash-set-data-row3">
                                                                            <p className="oss-16 black">Latest Version</p>
                                                                            <p className="osr-13 black">The original version of this project is always available to restore.</p>
                                                                            <div className=" org-data">
                                                                                <div className=" org-data-inner row">
                                                                                    <div className="col col-md-9 col-lg-9 col-sm-12">
                                                                                        <div className="mon-ago">
                                                                                            <div className="mon-ago-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="mon-ago-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey">October 27th 2020, 12:30:04 PM</span>
                                                                                            </div>


                                                                                        </div>
                                                                                        <div className="auto-bkup">
                                                                                            <div className="auto-bkup-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="auto-bkup-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey"><span className="abr-pages">Pages : 2</span><span className="abr-style">Styles : 47</span><span className="abr-elmnt">Elements : 25</span></span>
                                                                                            </div>


                                                                                        </div>


                                                                                    </div>
                                                                                    <div className="col col-md-3 col-lg-3 col-sm-12">
                                                                                        <button id="ov-preview" type="button" className="osr-13 darkgrey-bg white"><span className="icon-Eye"></span>Preview</button>
                                                                                        <button id="ov-restore" type="button" className="osr-13 turq-bg white"><span className="icon-Refesh"></span>Restore</button>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className=" org-data">
                                                                                <div className=" org-data-inner row">
                                                                                    <div className="col col-md-9 col-lg-9 col-sm-12">
                                                                                        <div className="mon-ago">
                                                                                            <div className="mon-ago-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="mon-ago-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey">October 27th 2020, 12:30:04 PM</span>
                                                                                            </div>


                                                                                        </div>
                                                                                        <div className="auto-bkup">
                                                                                            <div className="auto-bkup-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="auto-bkup-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey"><span className="abr-pages">Pages : 2</span><span className="abr-style">Styles : 47</span><span className="abr-elmnt">Elements : 25</span></span>
                                                                                            </div>


                                                                                        </div>


                                                                                    </div>
                                                                                    <div className="col col-md-3 col-lg-3 col-sm-12">
                                                                                        <button id="ov-preview" type="button" className="osr-13 darkgrey-bg white"><span className="icon-Eye"></span>Preview</button>
                                                                                        <button id="ov-restore" type="button" className="osr-13 turq-bg white"><span className="icon-Refesh"></span>Restore</button>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className=" org-data">
                                                                                <div className=" org-data-inner row">
                                                                                    <div className="col col-md-9 col-lg-9 col-sm-12">
                                                                                        <div className="mon-ago">
                                                                                            <div className="mon-ago-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="mon-ago-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey">October 27th 2020, 12:30:04 PM</span>
                                                                                            </div>


                                                                                        </div>
                                                                                        <div className="auto-bkup">
                                                                                            <div className="auto-bkup-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="auto-bkup-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey"><span className="abr-pages">Pages : 2</span><span className="abr-style">Styles : 47</span><span className="abr-elmnt">Elements : 25</span></span>
                                                                                            </div>


                                                                                        </div>


                                                                                    </div>
                                                                                    <div className="col col-md-3 col-lg-3 col-sm-12">
                                                                                        <button id="ov-preview" type="button" className="osr-13 darkgrey-bg white"><span className="icon-Eye"></span>Preview</button>
                                                                                        <button id="ov-restore" type="button" className="osr-13 turq-bg white"><span className="icon-Refesh"></span>Restore</button>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className=" org-data">
                                                                                <div className=" org-data-inner row">
                                                                                    <div className="col col-md-9 col-lg-9 col-sm-12">
                                                                                        <div className="mon-ago">
                                                                                            <div className="mon-ago-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="mon-ago-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey">October 27th 2020, 12:30:04 PM</span>
                                                                                            </div>


                                                                                        </div>
                                                                                        <div className="auto-bkup">
                                                                                            <div className="auto-bkup-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="auto-bkup-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey"><span className="abr-pages">Pages : 2</span><span className="abr-style">Styles : 47</span><span className="abr-elmnt">Elements : 25</span></span>
                                                                                            </div>


                                                                                        </div>


                                                                                    </div>
                                                                                    <div className="col col-md-3 col-lg-3 col-sm-12">
                                                                                        <button id="ov-preview" type="button" className="osr-13 darkgrey-bg white"><span className="icon-Eye"></span>Preview</button>
                                                                                        <button id="ov-restore" type="button" className="osr-13 turq-bg white"><span className="icon-Refesh"></span>Restore</button>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className=" org-data">
                                                                                <div className=" org-data-inner row">
                                                                                    <div className="col col-md-9 col-lg-9 col-sm-12">
                                                                                        <div className="mon-ago">
                                                                                            <div className="mon-ago-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="mon-ago-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey">October 27th 2020, 12:30:04 PM</span>
                                                                                            </div>


                                                                                        </div>
                                                                                        <div className="auto-bkup">
                                                                                            <div className="auto-bkup-left">
                                                                                                <span className="icon-File black"></span>
                                                                                            </div>
                                                                                            <div className="auto-bkup-right">
                                                                                                <p className="oss-11 black">A month ago</p>
                                                                                                <span className="osr-11 darkgrey"><span className="abr-pages">Pages : 2</span><span className="abr-style">Styles : 47</span><span className="abr-elmnt">Elements : 25</span></span>
                                                                                            </div>


                                                                                        </div>


                                                                                    </div>
                                                                                    <div className="col col-md-3 col-lg-3 col-sm-12">
                                                                                        <button id="ov-preview" type="button" className="osr-13 darkgrey-bg white"><span className="icon-Eye"></span>Preview</button>
                                                                                        <button id="ov-restore" type="button" className="osr-13 turq-bg white"><span className="icon-Refesh"></span>Restore</button>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
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

                                                <CollabSettings />

                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Dashboard-setting-panel----------------------------------> */}


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

export default connect(mapStateToProps, mapDispatchToProps)(SiteSettings)
