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
import ProfileNotifSettings from './notif'
import AccountNSecurity from "./accountNSecurity"


class Profile extends React.Component {
    state = {
        data: null,
        notifHTMLData: null,
        activeTab: 'details',
        imgAdded: false,
    }
    scriptArray = [
        // {
        //     src: "./assets/website/dashboard/js/jquery.min.js"
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
        //     src: './assets/website/dashboard/js/jquery-ui.js'
        // },
        {
            innerHTML: `
                        var app;

                  (function() {
                    'use strict';

                    app = {
                      monthAndSlashRegex: /^\\d\d \\/ $/, // regex to match "MM / "
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
                      var cc_num = $elem.val().replace(/\\D/g,'');
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
        this.apiRequestDashboard()
        this.apiRequestProfile()
        let activeTab = getUrlParams('profile', this.props.pathname).activeTab
        this.setState({ activeTab })
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
    apiRequestProfile = async () => {
        let { dispatch } = this.props
        this.setState({ loading: true })
        const apiRequest = await Request.getProfile()
        this.setState({ loading: false })
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: apiRequest.details || 'Unable to fetch data, Try Relogging' })
            return
        }

        let profileInfo = apiRequest.user_profile
        dispatch(setUser({
            ...profileInfo,
            // firstName: profileInfo.first_name,
            // lastName: profileInfo.last_name,
            // email: profileInfo.email,
            // displayName: profileInfo.display_name,
            // phone: profileInfo.phone,
            // bio: profileInfo.bio,
            profile_picture: apiUrl + profileInfo.profile_picture,
        }))
        this.setState({ profileData: apiRequest.user_profile, userSites: apiRequest.user_sites, contributors: apiRequest.contributors }, () => {
            if (this.state.profileData.profile_picture && this.state.profileData.profile_picture.trim() != '') {
                this.setState({ profilePicSrc: apiUrl + this.state.profileData.profile_picture }, () => {
                })
            }
            this.setFormFields(apiRequest.user_profile, this.profileForm)
        })
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
    handleProfileSubmit = async (e) => {
        const { dispatch } = this.props
        const { profilePic, profileData } = this.state
        e.preventDefault()
        let data = this.getFormData(e.target)
        if (data.first_name.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter First Name' })
            return
        }
        if (data.display_name.trim() == '') {
            showToast({ type: 'error', message: 'Please Enter Display Name' })
            return
        }
        if (profilePic) {
            data.profile_picture = profilePic
        } else {
            data.profile_picture = profileData.profile_picture
        }
        let formData = new FormData()
        _.each(data, (val, key) => {
            formData.append(key, val)
        })
        this.setState({ loading: true })
        const apiRequest = await Request.setProfile(formData)
        this.setState({ loading: false })
        if (apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to save, try again' })
            return
        }
        showToast({ type: 'success', message: apiRequest.message || 'Profile updated Successfully' })
        this.apiRequestProfile()
    }
    handleProfilePicChange = (e) => {
        if (e.target.files.length == 0) {
            return
        }
        let mainInput = e.target
        let img = new Image();
        img.onload = (e1) => {
            let image = e1.target
            if (image.height > 256 || image.width > 256) {
                showToast({ type: 'error', message: 'Invalid Image Dimensions' })
                // clear image
                mainInput.value = null
                return
            }
            let file = mainInput.files[0]
            this.setState({ profilePic: file, profilePicSrc: image.src, imgAdded: true })

            //     document.querySelector('input[type="file"]').addEventListener('change', function() {
            //         if (this.files && this.files[0]) {
            //              document.getElementById('profile-img').classList.add("prf_img_added");
            //         }

            //     });


            //   document.getElementById('remove-img').addEventListener('click', function() {
            //            var img = document.getElementById('myImg'); // $('img')[0]
            //            img.src =  './assets/website/images/profile-img.png'; // set src to blob url
            //            document.getElementById('profile-img').classList.remove("prf_img_added");	

            //        });
        }
        img.src = window.URL.createObjectURL(e.target.files[0]);
    }
    removeImage = () => {
        this.setState({ profilePic: null, profilePicSrc: apiUrl + this.state.profileData.profile_picture, imgAdded: false })
    }
    render() {
        const { dispatch, currentUser } = this.props
        const { dashboardData, profileData, profilePicSrc, activeTab,imgAdded } = this.state
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
                                                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:"none"}}>
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
                                                                <a className="nav-link disabled" tabIndex="-1" aria-disabled="true">Disabled</a>
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
                                                                            class="fa fa-user-circle-o"
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


                        {/* <!---------------------------------- Profile-setting----------------------------------> */}
                        <section className="profile-main">
                            <div className="profile-main-inner main-inner">
                                <div className="container">
                                    <div className="row profile-row1">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col1">
                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <a className="nav-link  darkgrey osr-16" id="" onClick={() => { this.goto('dashboard') }} >Dashboard</a>
                                                    <a className={`nav-link ${activeTab == 'details' ? 'active' : ''} darkgrey osr-16`} id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
                                                    <a className={`nav-link ${activeTab == 'account' ? 'active' : ''} darkgrey osr-16`} id="nav-account-tab" data-bs-toggle="tab" href="#account" role="tab" aria-controls="nav-account" aria-selected="false">Account {'&'} Security</a>
                                                    <a className={`nav-link ${activeTab == 'notification' ? 'active' : ''} darkgrey osr-16`} id="nav-contact-tab" data-bs-toggle="tab" href="#notification" role="tab" aria-controls="nav-contact" aria-selected="false">Notification</a>
                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"></div>


                                                <div className={`tab-pane fade ${activeTab == 'details' ? 'show active' : ''}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                    <div className="profile-tab-content">
                                                        <div className="profile-tab-content-inner">
                                                            <div className="row">
                                                                <div className="col-md-8 col-lg-8 col-sm-12 profile-tab-coll">
                                                                    <h1 className="osb-22 black">Profile Setting</h1>
                                                                    <div className="profile-data">
                                                                        <div className=" p-data-cmn profile-data-row1">
                                                                            <p className="osb-22 black">Profile Image</p>
                                                                            <div id="profile-img" className={`img-upload ${imgAdded ? 'prf_img_added' : ''}`}>
                                                                                <div className="img-upload-left">
                                                                                    {/* <img id="myImg" src="./assets/website/images/profile-img.png" alt="your image" height="93px" width="93px" /> */}
                                                                                    {/* <img src="./assets/website/images/Greg-jacoby.png" className="img-fluid" alt="Responsive image" /> */}
                                                                                    {
                                                                                        profilePicSrc ? (
                                                                                            <img src={profilePicSrc} id="myImg" alt="your image" height="93px" width="93px" />
                                                                                        ) : (
                                                                                                <i
                                                                                                    class="fa fa-user-circle-o"
                                                                                                    aria-hidden="true"
                                                                                                    style={{
                                                                                                        fontSize: '93px',
                                                                                                        margin: '2px',
                                                                                                        color: '#31cdb9',
                                                                                                    }}
                                                                                                ></i>
                                                                                            )
                                                                                    }
                                                                                    <button id="remove-img" type="button" style={{ display: "none" }} onClick={this.removeImage}><span className="icon-Delete"></span></button>
                                                                                </div>
                                                                                <div className="img-upload-right">
                                                                                    <input type='file' className="cs-get-file oss-13 white" accept="image/*" onChange={this.handleProfilePicChange} /><span className="oss-13 white">upload</span>
                                                                                    <p className="osr-13 darkgrey">You can upload images up to 256x256. Your avatar <br /> shows up in your public profile and your team <br /> notications.</p>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                        <div className=" p-data-cmn profile-data-row2">
                                                                            <p className="osb-22 black">Basic Information</p>
                                                                            <form onSubmit={this.handleProfileSubmit.bind(this)} ref={(form) => this.profileForm = form}>
                                                                                <ul>
                                                                                    <li className="left">
                                                                                        <div className="">
                                                                                            <label htmlFor="f-name" className="form-label oss-16 black">First Name</label>
                                                                                            <input type="f-name" className="form-control oss-13 darkgrey" id="f-name" name={'first_name'} required />
                                                                                        </div>
                                                                                    </li>
                                                                                    <li className="right">
                                                                                        <div className="">
                                                                                            <label htmlFor="l-name" className="form-label oss-16 black">Last Name</label>
                                                                                            <input type="l-name" className="form-control oss-13 darkgrey" id="l-name" name={'last_name'} />
                                                                                        </div>
                                                                                    </li>
                                                                                    <li className="left">
                                                                                        <div className="">
                                                                                            <label htmlFor="exampleInputEmail1" className="form-label oss-16 black">Email address</label>
                                                                                            <input type="email" className="form-control oss-13 darkgrey" id="exampleInputEmail1" aria-describedby="emailHelp" value={profileData && profileData.email} disabled />
                                                                                        </div>
                                                                                    </li>
                                                                                    <li className="right">
                                                                                        <div className="">
                                                                                            <label htmlFor="phone" className="form-label oss-16 black">Phone</label>
                                                                                            <input type="number" className="form-control osr-13 darkgrey" id="phone" name={'phone'} />
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                                <div className="">
                                                                                    <label htmlFor="d-name" className="form-label oss-16 black">Display Name</label>
                                                                                    <input type="d-name" className="form-control oss-13 darkgrey" id="d-name" name={'display_name'} required />
                                                                                </div>
                                                                                <div className="bio">
                                                                                    <label htmlFor="bio" className="form-label oss-16 black">Bio</label>
                                                                                    <textarea type="text" className="form-control oss-13 darkgrey" id="bio" placeholder="enter a short description about yourself" name={'bio'}></textarea>
                                                                                </div>
                                                                                <button type="submit" className="btn btn-primary green-btn oss-13 white">Save Changes</button>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-lg-4 col-sm-12 profile-tab-colr"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`tab-pane fade ${activeTab == 'account' ? 'show active' : ''}`} id="account" role="tabpanel" aria-labelledby="nav-account-tab">
                                                    <AccountNSecurity userSites={this.state.userSites} contributors={this.state.contributors}/>
                                                </div>
                                                <div className={`tab-pane fade ${activeTab == 'notification' ? 'show active' : ''}`} id="notification" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                    <ProfileNotifSettings />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Profile-setting----------------------------------> */}



                        {/* <!---------------------------------- temporary-popup-code----------------------------------> */}
                        <ul className="temporary">
                            <li><a data-bs-toggle="modal" data-bs-target="#update-card1">update-card</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#invite-contributor1">invite-contributor</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#downgrade-plan1">downgrade-plan</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#delete-confirm1">Delete Confirmation</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#confirm-downgrade1">Confirm Downgrade</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#your-subdomain1">your-subdomain</a></li>
                        </ul>
                        {/* <!---------------------------------- /temporary-popup code----------------------------------> */}



                        {/* <!---------------------------------- Pop-up----------------------------------> */}


                        {/* <!---------------------------------- Update-card-detail---------------------------------->			 */}
                        <div className="modal fade update-card" id="update-card1" tabIndex="-1" role="dialog" aria-labelledby="update-card1" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 className="osb-22 black">Update Card Details</h1>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <form>
                                                    <ul>
                                                        <li className="center">
                                                            <div className="">
                                                                <label htmlFor="noc" className="form-label oss-16 black">Name on card</label>
                                                                <input type="text" className="form-control osr-13 darkgrey" id="noc" />
                                                            </div>
                                                        </li>
                                                        <li className="center">
                                                            <div className="">
                                                                <label htmlFor="c-number" className="form-label oss-16 black">Card Number</label>
                                                                <input type="text" className="form-control osr-13 darkgrey" id="c-number" />
                                                            </div>
                                                        </li>
                                                        <div className="date-cvv">
                                                            <li className="center left">
                                                                <div className="">
                                                                    <label htmlFor="inputExpDate" className="form-label oss-16 black">Expiry Date</label>
                                                                    {/* <!--<input type="text" className="form-control osr-13 darkgrey" id="c-number" />--> */}
                                                                    <input className="form-control osr-13 darkgrey" type="text" id="inputExpDate" placeholder="MM / YY" maxLength='7' />
                                                                </div>
                                                            </li>

                                                            <li className="center right">
                                                                <div className="">
                                                                    <label htmlFor="cvv-number" className="form-label oss-16 black">CVV<span className="icon-Question-Mark darkgrey"></span></label>
                                                                    {/* <!--<input type="text" className="form-control osr-13 darkgrey" id="c-number" />--> */}
                                                                    <input id="cvv-number" type="password" className="cvv form-control osr-13 darkgrey" placeholder="CVV" />
                                                                </div>
                                                            </li>
                                                        </div>
                                                        <li className="center">
                                                            <div className="">
                                                                <label htmlFor="address-l1" className="form-label oss-16 black">Address Line 1</label>
                                                                <input type="text" className="form-control osr-13 darkgrey" id="address-l1" />
                                                            </div>
                                                        </li>

                                                        <li className="center">
                                                            <div className="">
                                                                <label htmlFor="address-l2" className="form-label oss-16 black">Address Line 2</label>
                                                                <input type="text" className="form-control osr-13 darkgrey" id="address-l2" />
                                                            </div>
                                                        </li>
                                                        <div className="cou-state">
                                                            <li className="center left">
                                                                <div className="">
                                                                    <label htmlFor="address-l2" className="form-label oss-16 black">Country</label>
                                                                    <select defaultValue={'Select a country'} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                                        {/* <option selected>Select a country</option> */}
                                                                        <option value="1">America</option>
                                                                        <option value="2">india</option>
                                                                        <option value="3">japan</option>
                                                                    </select>
                                                                </div>
                                                            </li>
                                                            <li className="center right">
                                                                <div className="">
                                                                    <label htmlFor="address-l2" className="form-label oss-16 black">State</label>
                                                                    <select defaultValue={'Choose'} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                                        {/* <option className="osr-13 darkgrey" selected>Choose</option> */}
                                                                        <option value="1">Nagpur</option>
                                                                        <option value="2">Delhi</option>
                                                                        <option value="3">kochi</option>
                                                                    </select>
                                                                </div>
                                                            </li>
                                                        </div>
                                                    </ul>
                                                    <button type="button" className="btn btn-primary oss-13 white green-btn update-changes">Save Changes</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Update-card-detail----------------------------------> */}



                        {/* <!---------------------------------- Invite Contributor---------------------------------->			 */}
                        <div className="modal fade invite-contributor" id="invite-contributor1" tabIndex="-1" role="dialog" aria-labelledby="invite-contributor1" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-12 coll">
                                                <h1 className="osb-22 black">Invite People to This Site</h1>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 colr">
                                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <p className="osr-13 darkgrey">Give people access to this site and assign them roles. <span className="turq">Learn more</span></p>
                                                <div className="ic-cont">
                                                    <input type="email" className="form-control osr-13 darkgrey" id="contributor" aria-describedby="emailHelp" placeholder="Enter an email address" />
                                                    <button type="submit" className="btn btn-primary green-btn oss-13 white">Send</button>
                                                </div>

                                                <div className="general-roles">
                                                    <h2 className="osb-16 black">General Roles <span className="sup turq">*</span></h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum massa <br /> justo, eget lobortis neque hendrerit non.</p>
                                                    <ul>
                                                        <li>
                                                            <div className="left"><input type="checkbox" className="" id="admin-co" autoComplete="off" /></div>
                                                            <div className="right">
                                                                <h3 className="oss-13 black">Admin (Co-Owner)</h3>
                                                                <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum <br />massa justo, eget lobortis neque hendrerit non.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="left"><input type="checkbox" className="" id="view-on" autoComplete="off" /></div>
                                                            <div className="right">
                                                                <h3 className="oss-13 black">View Only</h3>
                                                                <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum <br />massa justo, eget lobortis neque hendrerit non.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="left"><input type="checkbox" className="" id="edit-web" autoComplete="off" /></div>
                                                            <div className="right">
                                                                <h3 className="oss-13 black">Edit Website</h3>
                                                                <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum <br />massa justo, eget lobortis neque hendrerit non.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <h2 className="oss-16 black"> Your Project invite link</h2>
                                                <div className="ic-cont-btm">
                                                    <input type="text" className="form-control osr-13 darkgrey" id="invite-link" aria-describedby="emailHelp" placeholder="https://preview.siteseed.io/preview/naveens-initial-project-2-9e7c" />
                                                    <button type="submit" className="btn btn-primary green-btn oss-13 white">Copy</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Invite Contributor----------------------------------> */}



                        {/* <!---------------------------------- Downgrade Subscription Plan---------------------------------->			 */}
                        <div className="modal fade downgrade-plan" id="downgrade-plan1" tabIndex="-1" role="dialog" aria-labelledby="downgrade-plan" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-12 coll">
                                                <h1 className="osb-22 black">Downgrade Subscription Plan</h1>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 colr">
                                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <p className="osr-13 darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus eleifend arcu a pellentesque. Curabitur tempus <br /> turpis ac enim scelerisque varius. Morbi augue neque, accumsan et pharetra et, posuere ut libero. </p>
                                                <ul className="downgrade-plan">
                                                    <li>
                                                        <h1 className="osb-22 black">Plan A</h1>
                                                        <p className="dm-text osr-13 darkgrey">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. </p>
                                                        <p className="prize-month osb-32 turq">$12.00 <sub className="osr-13 darkgrey"> /mo </sub></p>
                                                        <p className="sale-save osr-13 darkgrey">On sale - Save 50%</p>
                                                        <button type="button" className="oss-13 turq down" >Downgrade</button>
                                                        <ul>
                                                            <li><span className="icon-Tick turq"></span>SiteSeed sub-domain</li>
                                                            <li><span className="icon-Tick turq"></span>All features (No e-Commerce)</li>
                                                            <li><span className="icon-Tick turq"></span>Access to all free templates</li>
                                                            <li><span className="icon-Tick turq"></span>No Exports</li>
                                                            <li><span className="icon-Tick turq"></span>Includes SiteSeed Branding</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h1 className="osb-22 black">Plan B</h1>
                                                        <p className="dm-text osr-13 darkgrey">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. </p>
                                                        <p className="prize-month osb-32 turq">$25.00 <sub className="osr-13 darkgrey"> /mo </sub></p>
                                                        <p className="sale-save osr-13 darkgrey">On sale - Save 50%</p>
                                                        <button type="button" className="oss-13 turq down" >Downgrade</button>
                                                        <ul>
                                                            <li><span className="icon-Tick turq"></span>SiteSeed sub-domain</li>
                                                            <li><span className="icon-Tick turq"></span>All features (No e-Commerce)</li>
                                                            <li><span className="icon-Tick turq"></span>Access to all free templates</li>
                                                            <li><span className="icon-Tick turq"></span>No Exports</li>
                                                            <li><span className="icon-Tick turq"></span>Includes SiteSeed Branding</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h1 className="osb-22 black">Plan C</h1>
                                                        <p className="dm-text osr-13 darkgrey">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. </p>
                                                        <p className="prize-month osb-32 turq">$128.00 <sub className="osr-13 darkgrey"> /mo </sub></p>
                                                        <p className="sale-save osr-13 darkgrey">On sale - Save 50%</p>
                                                        <button type="button" className="oss-13 turq down" >Downgrade</button>
                                                        <ul>
                                                            <li><span className="icon-Tick turq"></span>SiteSeed sub-domain</li>
                                                            <li><span className="icon-Tick turq"></span>All features (No e-Commerce)</li>
                                                            <li><span className="icon-Tick turq"></span>Access to all free templates</li>
                                                            <li><span className="icon-Tick turq"></span>No Exports</li>
                                                            <li><span className="icon-Tick turq"></span>Includes SiteSeed Branding</li>
                                                        </ul>
                                                    </li>

                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Downgrade Subscription Plan----------------------------------> */}



                        {/* <!---------------------------------- Delete Confirmation---------------------------------->			 */}
                        <div className="modal fade delete-confirm" id="delete-confirm1" tabIndex="-1" role="dialog" aria-labelledby="delete-confirm1" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 className="osb-22 black">Delete Confirmation</h1>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <h2 className="oss-16 black">Sure you want to delete <span className="turq"> Mysite </span> ? </h2>
                                                <p className="osr-13 darkgrey ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum massa justo, eget lobortis neque hendrerit non. Etiam fringilla cursus enim vitae euismod. Duis pellentesque justo a dolor posuere lobortis. Sed ultricies interdum purus. Maecenas et erat in velit posuere.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary oss-13 white green-btn">Delete Forever</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Delete Confirmation---------------------------------->			 */}



                        {/* <!---------------------------------- Confirm Downgrade---------------------------------->			 */}
                        <div className="modal fade confirm-downgrade" id="confirm-downgrade1" tabIndex="-1" role="dialog" aria-labelledby="confirm-downgrade1" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 className="osb-22 black">Confirm Downgrade</h1>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <h2 className="osb-16 black">Current Plan : <span className="plantype">Basic</span></h2>
                                                <p className="osr-13 darkgrey ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum massa <br /> justo, eget lobortis neque hendrerit non.</p>
                                                <p className="osb-16 turq downplan-prize">$128.00<span className="osr-13 black"><sub>/mo</sub></span></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <h2 className="osb-16 black">New Plan : <span className="plantype">Basic</span></h2>
                                                <p className="osr-13 darkgrey ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum massa <br /> justo, eget lobortis neque hendrerit non.</p>
                                                <p className="osb-16 turq downplan-prize">$25.00<span className="osr-13 black"><sub>/mo</sub></span></p>
                                                <p className="osr-13 dakgrey nc-date">You won’t be charged until<span className="osb-13 turq appx-date"> 04/08/20 </span></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary oss-13 white green-btn down-confirm"> Confirm </button>
                                        <button type="button" className="btn btn-primary oss-13 turq down-cancel"> Cancel </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Confirm Downgrade----------------------------------> */}



                        {/* <!---------------------------------- Choose your Subdomain----------------------------------> */}
                        <div className="modal fade your-subdomain" id="your-subdomain1" tabIndex="-1" role="dialog" aria-labelledby="your-subdomain1" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 className="osb-22 black">Choose your Subdomain</h1>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <h2 className="osb-16 black">Subdomain</h2>
                                                <input type="text" className="oss-13 darkgrey" placeholder="ExampleDomain" id="subdomain" />
                                                <input type="text" className="oss-13 turq" id="subdomaintwo" value=".siteseed.com" disabled /><span className="icon-Tick-Outline turq"></span>
                                                <button type="button" className="btn btn-primary oss-13 white green-btn"> Continue </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="upgra-pro">
                                            <div className="upgra-pro-left"><span className="icon-Information yellow"></span><p className="osr-13 darkgrey">T Publish your site without SiteSeed branding and receive a free domain with the <a className="yellow oss-13" href="">”upgrade your account to Pro.”</a></p></div>
                                            <div className="upgra-pro-right"><button type="button" className="btn btn-primary oss-13 green-btn turq">Upgrade Now<span className="icon-right-arrow-6-1 turq"></span></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Choose your Subdomain----------------------------------> */}


                        {/* <!---------------------------------- /Pop-up----------------------------------> */}


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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)