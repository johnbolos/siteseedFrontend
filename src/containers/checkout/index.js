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
import FormSettings from "../siteSettings/formSettings.js"
import FontSettings from "../siteSettings/fontSettings.js"
import CollabSettings from "../siteSettings/collabSettings.js"


class Checkout extends React.Component {
    state = {
        data: null,
        dashboardData: null,
        settingsData: null,
        chooseMonthSelect: 'Select in months',
        chooseCountrySelect: 'Afghanistan',
        selectedCountryCode: '91'
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
        //     src: './assets/website/js/zangdar.min.js'
        // },
        {
            innerHTML: `
            function buildStepsBreadcrumb (wizard, element, steps) {
             const $steps = document.getElementById(element)
             $steps.innerHTML = ''
             for (let label in steps) {
               if (steps.hasOwnProperty(label)) {
                 const $li = document.createElement('li')
                 const $a = document.createElement('a')
                 $li.classList.add('nav-item')
                 $a.classList.add('nav-link')
                 if (steps[label].active) {
                   $a.classList.add('active')
                 }
                 $a.setAttribute('href', '#')
                 $a.innerText = label
                 $a.addEventListener('click', e => {
                   e.preventDefault()
                   wizard.revealStep(label)
                 })
                 $li.appendChild($a)
                 $steps.appendChild($li)
               }
             }
            }
            
            function onStepChange(wizard, selector) {
               const steps = wizard.getBreadcrumb()
               buildStepsBreadcrumb(wizard, selector, steps)
            }
            
            const wizard = new window.Zangdar('#wizard', {
             onStepChange: () => {
               onStepChange(wizard, 'steps-native')
             },
             onSubmit(e) {
               e.preventDefault()
               console.log(e.target.elements)
               return false
             }
            })
            
            onStepChange(wizard, 'steps-native')`
        },
        {
            innerHTML: `
            $(document).ready(function() {
            $('select').niceSelect();
            });
            `
        },
        {
            innerHTML: `
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
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
            href: "./assets/website/css/nice-select.css"
        },
        {
            rel: "stylesheet",
            href: "./assets/website/css/style.css"
        },
    ]
    componentDidMount() {
        this.loadScriptNStyle()
        this.apiRequestDashboard()
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
    apiRequestCheckout = async () => {
        let { dispatch } = this.props
        this.setState({ loading: true })
        let data = {}
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
        this.setState({ settingsData: apiRequest.general_settings })
        // this.setFormFields(apiRequest.general_settings, this.generalSettingForm)
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
    handleChecoutSubmit = async (form) => {
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
        this.apiRequestCheckout()
    }
    render() {
        const { dispatch, currentUser } = this.props
        const { dashboardData } = this.state
        const pinCodeObj = [
            {
                value: '91',
                option: 'India (+91)'
            },
            {
                value: '44',
                option: 'Norway (+47)'
            },
            {
                value: '1',
                option: 'UK (+44)'
            },
            {
                value: '213',
                option: 'Algeria (+213)'
            },
            {
                value: '376',
                option: 'Andorra (+376)'
            },
            {
                value: '244',
                option: 'Angola (+244)'
            },
            {
                value: '1264',
                option: 'Anguilla (+1264)'
            },
            {
                value: '1268',
                option: 'Antigua &amp; Barbuda (+1268)'
            },
            {
                value: '54',
                option: 'Argentina (+54)'
            },
            {
                value: '374',
                option: 'Armenia (+374)'
            },
            {
                value: '297',
                option: 'Aruba (+297)'
            },
            {
                value: '61',
                option: 'Australia (+61)'
            },
            {
                value: '43',
                option: 'Austria (+43)'
            },
            {
                value: '994',
                option: 'Azerbaijan (+994)'
            },
            {
                value: '1242',
                option: 'Bahamas (+1242)'
            },
            {
                value: '973',
                option: 'Bahrain (+973)'
            },
            {
                value: '880',
                option: 'Bangladesh (+880)'
            },
            {
                value: '1246',
                option: 'Barbados (+1246)'
            },
            {
                value: '375',
                option: 'Belarus (+375)'
            },
            {
                value: '32',
                option: 'Belgium (+32)'
            },
            {
                value: '501',
                option: 'Belize (+501)'
            },
            {
                value: '229',
                option: 'Benin (+229)'
            },
            {
                value: '1441',
                option: 'Bermuda (+1441)'
            },
            {
                value: '975',
                option: 'Bhutan (+975)'
            },
            {
                value: '591',
                option: 'Bolivia (+591)'
            },
            {
                value: '387',
                option: 'Bosnia Herzegovina (+387)'
            },
            {
                value: '267',
                option: 'Botswana (+267)'
            },
            {
                value: '55',
                option: 'Brazil (+55)'
            },
            {
                value: '673',
                option: 'Brunei (+673)'
            },
            {
                value: '359',
                option: 'Bulgaria (+359)'
            },
            {
                value: '226',
                option: 'Burkina Faso (+226)'
            },
            {
                value: '257',
                option: 'Burundi (+257)'
            },
            {
                value: '855',
                option: 'Cambodia (+855)'
            },
            {
                value: '237',
                option: 'Cameroon (+237)'
            },
            {
                value: '1',
                option: 'Canada (+1)'
            },
            {
                value: '238',
                option: 'Cape Verde Islands (+238)'
            },
            {
                value: '1345',
                option: 'Cayman Islands (+1345)'
            },
            {
                value: '56',
                option: 'Chile (+56)'
            },
            {
                value: '86',
                option: 'China (+86)'
            },
            {
                value: '57',
                option: 'Colombia (+57)'
            },
            {
                value: '269',
                option: 'Comoros (+269)'
            },
            {
                value: '242',
                option: 'Congo (+242)'
            },
            {
                value: '682',
                option: 'Cook Islands (+682)'
            },
            {
                value: '506',
                option: 'Costa Rica (+506)'
            },
            {
                value: '385',
                option: 'Croatia (+385)'
            },
            {
                value: '53',
                option: 'Cuba (+53)'
            },
            {
                value: '90392',
                option: 'Cyprus North (+90392)'
            },
            {
                value: '357',
                option: 'Cyprus South (+357)'
            },
            {
                value: '42',
                option: 'Czech Republic (+42)'
            },
            {
                value: '45',
                option: 'Denmark (+45)'
            },
            {
                value: '253',
                option: 'Djibouti (+253)'
            },
            {
                value: '1809',
                option: 'Dominica (+1809)'
            },
            {
                value: '1809',
                option: 'Dominican Republic (+1809)'
            },
            {
                value: '593',
                option: 'Ecuador (+593)'
            },
            {
                value: '20',
                option: 'Egypt (+20)'
            },
            {
                value: '503',
                option: 'El Salvador (+503)'
            },
            {
                value: '240',
                option: 'Equatorial Guinea (+240)'
            },
            {
                value: '291',
                option: 'Eritrea (+291)'
            },
            {
                value: '372',
                option: 'Estonia (+372)'
            },
            {
                value: '251',
                option: 'Ethiopia (+251)'
            },
            {
                value: '500',
                option: 'Falkland Islands (+500)'
            },
            {
                value: '298',
                option: 'Faroe Islands (+298)'
            },
            {
                value: '679',
                option: 'Fiji (+679)'
            },
            {
                value: '358',
                option: 'Finland (+358)'
            },
            {
                value: '33',
                option: 'France (+33)'
            },
            {
                value: '594',
                option: 'French Guiana (+594)'
            },
            {
                value: '689',
                option: 'French Polynesia (+689)'
            },
            {
                value: '241',
                option: 'Gabon (+241)'
            },
            {
                value: '220',
                option: 'Gambia (+220)'
            },
            {
                value: '7880',
                option: 'Georgia (+7880)'
            },
            {
                value: '49',
                option: 'Germany (+49)'
            },
            {
                value: '233',
                option: 'Ghana (+233)'
            },
            {
                value: '350',
                option: 'Gibraltar (+350)'
            },
            {
                value: '30',
                option: 'Greece (+30)'
            },
            {
                value: '299',
                option: 'Greenland (+299)'
            },
            {
                value: '1473',
                option: 'Grenada (+1473)'
            },
            {
                value: '590',
                option: 'Guadeloupe (+590)'
            },
            {
                value: '671',
                option: 'Guam (+671)'
            },
            {
                value: '502',
                option: 'Guatemala (+502)'
            },
            {
                value: '224',
                option: 'Guinea (+224)'
            },
            {
                value: '245',
                option: 'Guinea - Bissau (+245)'
            },
            {
                value: '592',
                option: 'Guyana (+592)'
            },
            {
                value: '509',
                option: 'Haiti (+509)'
            },
            {
                value: '504',
                option: 'Honduras (+504)'
            },
            {
                value: '852',
                option: 'Hong Kong (+852)'
            },
            {
                value: '36',
                option: 'Hungary (+36)'
            },
            {
                value: '354',
                option: 'Iceland (+354)'
            },
            {
                value: '62',
                option: 'Indonesia (+62)'
            },
            {
                value: '98',
                option: 'Iran (+98)'
            },
            {
                value: '964',
                option: 'Iraq (+964)'
            },
            {
                value: '353',
                option: 'Ireland (+353)'
            },
            {
                value: '972',
                option: 'Israel (+972)'
            },
            {
                value: '39',
                option: 'Italy (+39)'
            },
            {
                value: '1876',
                option: 'Jamaica (+1876)'
            },
            {
                value: '81',
                option: 'Japan (+81)'
            },
            {
                value: '962',
                option: 'Jordan (+962)'
            },
            {
                value: '7',
                option: 'Kazakhstan (+7)'
            },
            {
                value: '254',
                option: 'Kenya (+254)'
            },
            {
                value: '686',
                option: 'Kiribati (+686)'
            },
            {
                value: '850',
                option: 'Korea North (+850)'
            },
            {
                value: '82',
                option: 'Korea South (+82)'
            },
            {
                value: '965',
                option: 'Kuwait (+965)'
            },
            {
                value: '996',
                option: 'Kyrgyzstan (+996)'
            },
            {
                value: '856',
                option: 'Laos (+856)'
            },
            {
                value: '371',
                option: 'Latvia (+371)'
            },
            {
                value: '961',
                option: 'Lebanon (+961)'
            },
            {
                value: '266',
                option: 'Lesotho (+266)'
            },
            {
                value: '231',
                option: 'Liberia (+231)'
            },
            {
                value: '218',
                option: 'Libya (+218)'
            },
            {
                value: '417',
                option: 'Liechtenstein (+417)'
            },
            {
                value: '370',
                option: 'Lithuania (+370)'
            },
            {
                value: '352',
                option: 'Luxembourg (+352)'
            },
            {
                value: '853',
                option: 'Macao (+853)'
            },
            {
                value: '389',
                option: 'Macedonia (+389)'
            },
            {
                value: '261',
                option: 'Madagascar (+261)'
            },
            {
                value: '265',
                option: 'Malawi (+265)'
            },
            {
                value: '60',
                option: 'Malaysia (+60)'
            },
            {
                value: '960',
                option: 'Maldives (+960)'
            },
            {
                value: '223',
                option: 'Mali (+223)'
            },
            {
                value: '356',
                option: 'Malta (+356)'
            },
            {
                value: '692',
                option: 'Marshall Islands (+692)'
            },
            {
                value: '596',
                option: 'Martinique (+596)'
            },
            {
                value: '222',
                option: 'Mauritania (+222)'
            },
            {
                value: '269',
                option: 'Mayotte (+269)'
            },
            {
                value: '52',
                option: 'Mexico (+52)'
            },
            {
                value: '691',
                option: 'Micronesia (+691)'
            },
            {
                value: '373',
                option: 'Moldova (+373)'
            },
            {
                value: '377',
                option: 'Monaco (+377)'
            },
            {
                value: '976',
                option: 'Mongolia (+976)'
            },
            {
                value: '1664',
                option: 'Montserrat (+1664)'
            },
            {
                value: '212',
                option: 'Morocco (+212)'
            },
            {
                value: '258',
                option: 'Mozambique (+258)'
            },
            {
                value: '95',
                option: 'Myanmar (+95)'
            },
            {
                value: '264',
                option: 'Namibia (+264)'
            },
            {
                value: '674',
                option: 'Nauru (+674)'
            },
            {
                value: '977',
                option: 'Nepal (+977)'
            },
            {
                value: '31',
                option: 'Netherlands (+31)'
            },
            {
                value: '687',
                option: 'New Caledonia (+687)'
            },
            {
                value: '64',
                option: 'New Zealand (+64)'
            },
            {
                value: '505',
                option: 'Nicaragua (+505)'
            },
            {
                value: '227',
                option: 'Niger (+227)'
            },
            {
                value: '234',
                option: 'Nigeria (+234)'
            },
            {
                value: '683',
                option: 'Niue (+683)'
            },
            {
                value: '672',
                option: 'Norfolk Islands (+672)'
            },
            {
                value: '670',
                option: 'Northern Marianas (+670)'
            },
            {
                value: '47',
                option: 'Norway (+47)'
            },
            {
                value: '968',
                option: 'Oman (+968)'
            },
            {
                value: '680',
                option: 'Palau (+680)'
            },
            {
                value: '507',
                option: 'Panama (+507)'
            },
            {
                value: '675',
                option: 'Papua New Guinea (+675)'
            },
            {
                value: '595',
                option: 'Paraguay (+595)'
            },
            {
                value: '51',
                option: 'Peru (+51)'
            },
            {
                value: '63',
                option: 'Philippines (+63)'
            },
            {
                value: '48',
                option: 'Poland (+48)'
            },
            {
                value: '351',
                option: 'Portugal (+351)'
            },
            {
                value: '1787',
                option: 'Puerto Rico (+1787)'
            },
            {
                value: '974',
                option: 'Qatar (+974)'
            },
            {
                value: '262',
                option: 'Reunion (+262)'
            },
            {
                value: '40',
                option: 'Romania (+40)'
            },
            {
                value: '7',
                option: 'Russia (+7)'
            },
            {
                value: '250',
                option: 'Rwanda (+250)'
            },
            {
                value: '378',
                option: 'San Marino (+378)'
            },
            {
                value: '966',
                option: 'Saudi Arabia (+966)'
            },
            {
                value: '221',
                option: 'Senegal (+221)'
            },
            {
                value: '381',
                option: 'Serbia (+381)'
            },
            {
                value: '248',
                option: 'Seychelles (+248)'
            },
            {
                value: '232',
                option: 'Sierra Leone (+232)'
            },
            {
                value: '65',
                option: 'Singapore (+65)'
            },
            {
                value: '421',
                option: 'Slovak Republic (+421)'
            },
            {
                value: '386',
                option: 'Slovenia (+386)'
            },
            {
                value: '677',
                option: 'Solomon Islands (+677)'
            },
            {
                value: '252',
                option: 'Somalia (+252)'
            },
            {
                value: '27',
                option: 'South Africa (+27)'
            },
            {
                value: '34',
                option: 'Spain (+34)'
            },
            {
                value: '94',
                option: 'Sri Lanka (+94)'
            },
            {
                value: '290',
                option: 'St. Helena (+290)'
            },
            {
                value: '1869',
                option: 'St. Kitts (+1869)'
            },
            {
                value: '1758',
                option: 'St. Lucia (+1758)'
            },
            {
                value: '249',
                option: 'Sudan (+249)'
            },
            {
                value: '597',
                option: 'Suriname (+597)'
            },
            {
                value: '268',
                option: 'Swaziland (+268)'
            },
            {
                value: '46',
                option: 'Sweden (+46)'
            },
            {
                value: '41',
                option: 'Switzerland (+41)'
            },
            {
                value: '963',
                option: 'Syria (+963)'
            },
            {
                value: '886',
                option: 'Taiwan (+886)'
            },
            {
                value: '7',
                option: 'Tajikstan (+7)'
            },
            {
                value: '66',
                option: 'Thailand (+66)'
            },
            {
                value: '228',
                option: 'Togo (+228)'
            },
            {
                value: '676',
                option: 'Tonga (+676)'
            },
            {
                value: '216',
                option: 'Tunisia (+216)'
            },
            {
                value: '90',
                option: 'Turkey (+90)'
            },
            {
                value: '7',
                option: 'Turkmenistan (+7)'
            },
            {
                value: '993',
                option: 'Turkmenistan (+993)'
            },
            {
                value: '688',
                option: 'Tuvalu (+688)'
            },
            {
                value: '256',
                option: 'Uganda (+256)'
            },
            {
                value: '380',
                option: 'Ukraine (+380)'
            },
            {
                value: '598',
                option: 'Uruguay (+598)'
            },
            {
                value: '7',
                option: 'Uzbekistan (+7)'
            },
            {
                value: '678',
                option: 'Vanuatu (+678)'
            },
            {
                value: '379',
                option: 'Vatican City (+379)'
            },
            {
                value: '58',
                option: 'Venezuela (+58)'
            },
            {
                value: '84',
                option: 'Vietnam (+84)'
            },
            {
                value: '84',
                option: 'Virgin Islands - US (+1340)'
            },
            {
                value: '681',
                option: 'Wallis &amp; Futuna (+681)'
            },
            {
                value: '969',
                option: 'Yemen (North)(+969)'
            },
            {
                value: '967',
                option: 'Yemen (South)(+967)'
            },
            {
                value: '260',
                option: 'Zambia (+260)'
            },
            {
                value: '263',
                option: 'Zimbabwe (+263)'
            },
        ]
        return (
            <>

                <div className="admin-main-panel login-main">
                    <div className="admin-main-panel-inner">
                        {/* <!----------------------------------Top-Bar----------------------------------> */}
                        <section className="topbar-main">
                            <div className="topbar-main-inner main-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 ">
                                            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                                                <div className="container-fluid">
                                                    <a className="navbar-brand" href="http://159.65.145.117:8090/SiteSeed/Siteseed-client-panel/Admin-SiteSeed/Admin-Control/Siteseed-admin.html"><img src="./assets/website/images/Logo.svg" className="img-fluid" alt="Responsive image" /></a>
                                                    {/* <!--<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ display:'none' }}>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                     <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                     <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                     </a>
                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                     </ul>
                                    </li>
                                    <li className="nav-item">
                                     <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                    </ul>
                                    </div>--> */}
                                                    <ul className="nav cs-topright">
                                                        <li className="nav-item cs-topright-left">
                                                            <a className="nav-link left-top darkgrey osr-13" href="#">Need Support?</a>
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
                                                            <a className="nav-link dropdown-toggle right-top black osr-13" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        {/* <!---------------------------------- checkout-account-panel---------------------------------->	 */}
                        <section className="checkout-pro-main">
                            <div className="checkout-pro-main-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className=" col col-md-12 col-lg-12 col-sm-12 checkout-pro">
                                            <div className="checkout-pro-inner">
                                                <ul id="steps-native" className="nav nav-pills"></ul>
                                                <div className="checkoutform-outer">
                                                    <form id="wizard" className="my-2 py-2">
                                                        <section className="order-summ" data-step="Order Summary">
                                                            <div className="row os-1">
                                                                <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                                    <h1 className="osb-22 black">Order Summary</h1>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-6 colr">
                                                                    <a href="" className="osr-16 darkgrey">+ Add promo code</a>
                                                                </div>
                                                            </div>
                                                            <div className="row os-2">
                                                                <div className="row-inner">
                                                                    <div className="col col-lg-8 col-md-8 col-sm-12 coll">
                                                                        <div className="left">
                                                                            <img id="myImg" src="./assets/website/images/SpaWellness.jpg" alt="your image" />
                                                                        </div>
                                                                        <div className="right">
                                                                            <h2 className="oss-16 black">Template : Spa &amp; Wellness</h2>
                                                                            <p className="osr-13 darkgrey">Single-use license</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className=" col col-lg-4 col-md-4 col-sm-12 colr">
                                                                        <p className="osb-16 black">$49.00</p>
                                                                        <p className="osr-13 darkgrey"><a>Delete</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row os-3">
                                                                <div className="row-inner">
                                                                    <div className="col col-lg-8 col-md-8 col-sm-12 coll">
                                                                        <h2 className="oss-16 black">Economy (Unlimited)</h2>
                                                                        <div className="selectwrap">
                                                                            <select id="months-count" className="osr-13 darkgrey" style={{ display: 'none' }}>
                                                                                <option data-display="Select in months">Nothing</option>
                                                                                <option>36 Months</option>
                                                                                <option>24 Months</option>
                                                                                <option>12 Months</option>
                                                                                <option>48 Months</option>
                                                                            </select>
                                                                            <div className="nice-select osr-13 darkgrey" tabindex="0" ref={(ref) => this.selectMonthElem = ref} onClick={(e) => {
                                                                                if (!e.target.classList.contains('option')) {
                                                                                    this.selectMonthElem.classList.toggle('open')
                                                                                }
                                                                            }} onBlur={() => {
                                                                                this.selectMonthElem.classList.remove('open')
                                                                            }}>
                                                                                <span className="current">{this.state.chooseMonthSelect}</span>
                                                                                <ul className="list">
                                                                                    <li data-value="Nothing" data-display="Select in months" className={`option ${this.state.chooseMonthSelect == 'Select in months' ? 'selected focus' : ''}`} onClick={() => {
                                                                                        this.selectMonthElem.classList.remove('open')
                                                                                        this.set('chooseMonthSelect', 'Select in months')
                                                                                    }}>Nothing</li>
                                                                                    <li data-value="36 Months" className={`option ${this.state.chooseMonthSelect == '36 Months' ? 'selected focus' : ''}`} onClick={() => {
                                                                                        this.selectMonthElem.classList.remove('open')
                                                                                        this.set('chooseMonthSelect', '36 Months')
                                                                                    }}>
                                                                                        36 Months
                                                                                    </li>
                                                                                    <li data-value="24 Months" className={`option ${this.state.chooseMonthSelect == '24 Months' ? 'selected focus' : ''}`} onClick={() => {
                                                                                        this.selectMonthElem.classList.remove('open')
                                                                                        this.set('chooseMonthSelect', '24 Months')
                                                                                    }}>
                                                                                        24 Months
                                                                                    </li>
                                                                                    <li data-value="12 Months" className={`option ${this.state.chooseMonthSelect == '12 Months' ? 'selected focus' : ''}`} onClick={() => {
                                                                                        this.selectMonthElem.classList.remove('open')
                                                                                        this.set('chooseMonthSelect', '12 Months')
                                                                                    }}>
                                                                                        12 Months
                                                                                    </li>
                                                                                    <li data-value="48 Months" className={`option ${this.state.chooseMonthSelect == '48 Months' ? 'selected focus' : ''}`} onClick={() => {
                                                                                        this.selectMonthElem.classList.remove('open')
                                                                                        this.set('chooseMonthSelect', '48 Months')
                                                                                    }}>
                                                                                        48 Months
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col col-lg-4 col-md-4 col-sm-12 colr">
                                                                        <p className="osb-16 black">$49.00</p>
                                                                        <p className="osr-13 darkgrey"><a>Delete</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row os-4">
                                                                <div className="row-inner">
                                                                    <div className="col col-lg-8 col-md-8 col-sm-12 coll">
                                                                        <p className="oss-22 black">Subtotal (USD)</p>
                                                                        <p className="osr-13 darkgrey">Subtotal does not include applicable taxes</p>
                                                                    </div>
                                                                    <div className="col col-lg-4 col-md-4 col-sm-12 colr">
                                                                        <p className="oss-22 turq">$85.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row os-5">
                                                                <div className="row-inner">
                                                                    <div className="col col-lg-12 col-md-12 col-sm-12 colc">
                                                                        <p className="osr-11 darkgrey licen-gui">This licensing guide breaks down when and how you can use
                                                   <a className="osb-11 turq" href=""> SiteSeed </a> templates to design sites. <a className="osb-11 turq" href=""> Note: </a> You will also need an account plan to export the code.
                                                </p>
                                                                        <button type="button" className="btn btn-primary oss-13 white green-btn data-next" data-next>Continue</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="bill-info" data-step="Billing Information">
                                                            <div className="row bi-1">
                                                                <div className="col col-lg-6 col-md-6 col-sm-6 coll">
                                                                    <h1 className="osb-22 black">Billing Information</h1>
                                                                </div>
                                                                <div className="col col-lg-6 col-md-6 col-sm-6 colr">
                                                                </div>
                                                            </div>
                                                            <div className="row bi-2">
                                                                <div className="col col-lg-12 col-md-12 col-sm-12 colc country">
                                                                    <label className="oss-16 black" htmlFor="country">Country / Region<span className="icon-Question-Mark darkgrey"></span></label>
                                                                    <select id="country" name="country" className="form-control oss-13 darkgrey" required style={{ display: 'none' }}>
                                                                        <option value="Afghanistan">Afghanistan</option>
                                                                        <option value="Åland Islands">Åland Islands</option>
                                                                        <option value="Albania">Albania</option>
                                                                        <option value="Algeria">Algeria</option>
                                                                        <option value="American Samoa">American Samoa</option>
                                                                        <option value="Andorra">Andorra</option>
                                                                        <option value="Angola">Angola</option>
                                                                        <option value="Anguilla">Anguilla</option>
                                                                        <option value="Antarctica">Antarctica</option>
                                                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                        <option value="Argentina">Argentina</option>
                                                                        <option value="Armenia">Armenia</option>
                                                                        <option value="Aruba">Aruba</option>
                                                                        <option value="Australia">Australia</option>
                                                                        <option value="Austria">Austria</option>
                                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                                        <option value="Bahamas">Bahamas</option>
                                                                        <option value="Bahrain">Bahrain</option>
                                                                        <option value="Bangladesh">Bangladesh</option>
                                                                        <option value="Barbados">Barbados</option>
                                                                        <option value="Belarus">Belarus</option>
                                                                        <option value="Belgium">Belgium</option>
                                                                        <option value="Belize">Belize</option>
                                                                        <option value="Benin">Benin</option>
                                                                        <option value="Bermuda">Bermuda</option>
                                                                        <option value="Bhutan">Bhutan</option>
                                                                        <option value="Bolivia">Bolivia</option>
                                                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                        <option value="Botswana">Botswana</option>
                                                                        <option value="Bouvet Island">Bouvet Island</option>
                                                                        <option value="Brazil">Brazil</option>
                                                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                        <option value="Bulgaria">Bulgaria</option>
                                                                        <option value="Burkina Faso">Burkina Faso</option>
                                                                        <option value="Burundi">Burundi</option>
                                                                        <option value="Cambodia">Cambodia</option>
                                                                        <option value="Cameroon">Cameroon</option>
                                                                        <option value="Canada">Canada</option>
                                                                        <option value="Cape Verde">Cape Verde</option>
                                                                        <option value="Cayman Islands">Cayman Islands</option>
                                                                        <option value="Central African Republic">Central African Republic</option>
                                                                        <option value="Chad">Chad</option>
                                                                        <option value="Chile">Chile</option>
                                                                        <option value="China">China</option>
                                                                        <option value="Christmas Island">Christmas Island</option>
                                                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                                        <option value="Colombia">Colombia</option>
                                                                        <option value="Comoros">Comoros</option>
                                                                        <option value="Congo">Congo</option>
                                                                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                                                        <option value="Cook Islands">Cook Islands</option>
                                                                        <option value="Costa Rica">Costa Rica</option>
                                                                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                                        <option value="Croatia">Croatia</option>
                                                                        <option value="Cuba">Cuba</option>
                                                                        <option value="Cyprus">Cyprus</option>
                                                                        <option value="Czech Republic">Czech Republic</option>
                                                                        <option value="Denmark">Denmark</option>
                                                                        <option value="Djibouti">Djibouti</option>
                                                                        <option value="Dominica">Dominica</option>
                                                                        <option value="Dominican Republic">Dominican Republic</option>
                                                                        <option value="Ecuador">Ecuador</option>
                                                                        <option value="Egypt">Egypt</option>
                                                                        <option value="El Salvador">El Salvador</option>
                                                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                        <option value="Eritrea">Eritrea</option>
                                                                        <option value="Estonia">Estonia</option>
                                                                        <option value="Ethiopia">Ethiopia</option>
                                                                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                                                        <option value="Faroe Islands">Faroe Islands</option>
                                                                        <option value="Fiji">Fiji</option>
                                                                        <option value="Finland">Finland</option>
                                                                        <option value="France">France</option>
                                                                        <option value="French Guiana">French Guiana</option>
                                                                        <option value="French Polynesia">French Polynesia</option>
                                                                        <option value="French Southern Territories">French Southern Territories</option>
                                                                        <option value="Gabon">Gabon</option>
                                                                        <option value="Gambia">Gambia</option>
                                                                        <option value="Georgia">Georgia</option>
                                                                        <option value="Germany">Germany</option>
                                                                        <option value="Ghana">Ghana</option>
                                                                        <option value="Gibraltar">Gibraltar</option>
                                                                        <option value="Greece">Greece</option>
                                                                        <option value="Greenland">Greenland</option>
                                                                        <option value="Grenada">Grenada</option>
                                                                        <option value="Guadeloupe">Guadeloupe</option>
                                                                        <option value="Guam">Guam</option>
                                                                        <option value="Guatemala">Guatemala</option>
                                                                        <option value="Guernsey">Guernsey</option>
                                                                        <option value="Guinea">Guinea</option>
                                                                        <option value="Guinea-bissau">Guinea-bissau</option>
                                                                        <option value="Guyana">Guyana</option>
                                                                        <option value="Haiti">Haiti</option>
                                                                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                                                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                                                        <option value="Honduras">Honduras</option>
                                                                        <option value="Hong Kong">Hong Kong</option>
                                                                        <option value="Hungary">Hungary</option>
                                                                        <option value="Iceland">Iceland</option>
                                                                        <option value="India">India</option>
                                                                        <option value="Indonesia">Indonesia</option>
                                                                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                                                        <option value="Iraq">Iraq</option>
                                                                        <option value="Ireland">Ireland</option>
                                                                        <option value="Isle of Man">Isle of Man</option>
                                                                        <option value="Israel">Israel</option>
                                                                        <option value="Italy">Italy</option>
                                                                        <option value="Jamaica">Jamaica</option>
                                                                        <option value="Japan">Japan</option>
                                                                        <option value="Jersey">Jersey</option>
                                                                        <option value="Jordan">Jordan</option>
                                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                                        <option value="Kenya">Kenya</option>
                                                                        <option value="Kiribati">Kiribati</option>
                                                                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                                                        <option value="Korea, Republic of">Korea, Republic of</option>
                                                                        <option value="Kuwait">Kuwait</option>
                                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                                                        <option value="Latvia">Latvia</option>
                                                                        <option value="Lebanon">Lebanon</option>
                                                                        <option value="Lesotho">Lesotho</option>
                                                                        <option value="Liberia">Liberia</option>
                                                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                                        <option value="Lithuania">Lithuania</option>
                                                                        <option value="Luxembourg">Luxembourg</option>
                                                                        <option value="Macao">Macao</option>
                                                                        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                                                        <option value="Madagascar">Madagascar</option>
                                                                        <option value="Malawi">Malawi</option>
                                                                        <option value="Malaysia">Malaysia</option>
                                                                        <option value="Maldives">Maldives</option>
                                                                        <option value="Mali">Mali</option>
                                                                        <option value="Malta">Malta</option>
                                                                        <option value="Marshall Islands">Marshall Islands</option>
                                                                        <option value="Martinique">Martinique</option>
                                                                        <option value="Mauritania">Mauritania</option>
                                                                        <option value="Mauritius">Mauritius</option>
                                                                        <option value="Mayotte">Mayotte</option>
                                                                        <option value="Mexico">Mexico</option>
                                                                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                                                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                                        <option value="Monaco">Monaco</option>
                                                                        <option value="Mongolia">Mongolia</option>
                                                                        <option value="Montenegro">Montenegro</option>
                                                                        <option value="Montserrat">Montserrat</option>
                                                                        <option value="Morocco">Morocco</option>
                                                                        <option value="Mozambique">Mozambique</option>
                                                                        <option value="Myanmar">Myanmar</option>
                                                                        <option value="Namibia">Namibia</option>
                                                                        <option value="Nauru">Nauru</option>
                                                                        <option value="Nepal">Nepal</option>
                                                                        <option value="Netherlands">Netherlands</option>
                                                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                                        <option value="New Caledonia">New Caledonia</option>
                                                                        <option value="New Zealand">New Zealand</option>
                                                                        <option value="Nicaragua">Nicaragua</option>
                                                                        <option value="Niger">Niger</option>
                                                                        <option value="Nigeria">Nigeria</option>
                                                                        <option value="Niue">Niue</option>
                                                                        <option value="Norfolk Island">Norfolk Island</option>
                                                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                                        <option value="Norway">Norway</option>
                                                                        <option value="Oman">Oman</option>
                                                                        <option value="Pakistan">Pakistan</option>
                                                                        <option value="Palau">Palau</option>
                                                                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                                                        <option value="Panama">Panama</option>
                                                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                                                        <option value="Paraguay">Paraguay</option>
                                                                        <option value="Peru">Peru</option>
                                                                        <option value="Philippines">Philippines</option>
                                                                        <option value="Pitcairn">Pitcairn</option>
                                                                        <option value="Poland">Poland</option>
                                                                        <option value="Portugal">Portugal</option>
                                                                        <option value="Puerto Rico">Puerto Rico</option>
                                                                        <option value="Qatar">Qatar</option>
                                                                        <option value="Reunion">Reunion</option>
                                                                        <option value="Romania">Romania</option>
                                                                        <option value="Russian Federation">Russian Federation</option>
                                                                        <option value="Rwanda">Rwanda</option>
                                                                        <option value="Saint Helena">Saint Helena</option>
                                                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                                        <option value="Saint Lucia">Saint Lucia</option>
                                                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                                                        <option value="Samoa">Samoa</option>
                                                                        <option value="San Marino">San Marino</option>
                                                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                                                        <option value="Senegal">Senegal</option>
                                                                        <option value="Serbia">Serbia</option>
                                                                        <option value="Seychelles">Seychelles</option>
                                                                        <option value="Sierra Leone">Sierra Leone</option>
                                                                        <option value="Singapore">Singapore</option>
                                                                        <option value="Slovakia">Slovakia</option>
                                                                        <option value="Slovenia">Slovenia</option>
                                                                        <option value="Solomon Islands">Solomon Islands</option>
                                                                        <option value="Somalia">Somalia</option>
                                                                        <option value="South Africa">South Africa</option>
                                                                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                                                        <option value="Spain">Spain</option>
                                                                        <option value="Sri Lanka">Sri Lanka</option>
                                                                        <option value="Sudan">Sudan</option>
                                                                        <option value="Suriname">Suriname</option>
                                                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                                        <option value="Swaziland">Swaziland</option>
                                                                        <option value="Sweden">Sweden</option>
                                                                        <option value="Switzerland">Switzerland</option>
                                                                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                                        <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                                                        <option value="Tajikistan">Tajikistan</option>
                                                                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                                                        <option value="Thailand">Thailand</option>
                                                                        <option value="Timor-leste">Timor-leste</option>
                                                                        <option value="Togo">Togo</option>
                                                                        <option value="Tokelau">Tokelau</option>
                                                                        <option value="Tonga">Tonga</option>
                                                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                                        <option value="Tunisia">Tunisia</option>
                                                                        <option value="Turkey">Turkey</option>
                                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                                        <option value="Tuvalu">Tuvalu</option>
                                                                        <option value="Uganda">Uganda</option>
                                                                        <option value="Ukraine">Ukraine</option>
                                                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                                                        <option value="United Kingdom">United Kingdom</option>
                                                                        <option value="United States">United States</option>
                                                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                                        <option value="Uruguay">Uruguay</option>
                                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                                        <option value="Vanuatu">Vanuatu</option>
                                                                        <option value="Venezuela">Venezuela</option>
                                                                        <option value="Viet Nam">Viet Nam</option>
                                                                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                                        <option value="Western Sahara">Western Sahara</option>
                                                                        <option value="Yemen">Yemen</option>
                                                                        <option value="Zambia">Zambia</option>
                                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                                    </select>
                                                                    <div className="nice-select form-control oss-13 darkgrey" tabindex="0" ref={(ref) => this.selectCountryElem = ref} onClick={(e) => {
                                                                        if (!e.target.classList.contains('option')) {
                                                                            this.selectCountryElem.classList.toggle('open')
                                                                        }
                                                                    }} onBlur={() => {
                                                                        this.selectCountryElem.classList.remove('open')
                                                                    }} >
                                                                        <span className="current">{this.state.chooseCountrySelect}</span>
                                                                        <ul className="list" style={{
                                                                            height: '400px',
                                                                            overflowY: 'auto'
                                                                        }}>
                                                                            <li data-value="Afghanistan" className={`option ${this.state.chooseCountrySelect == 'Afghanistan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Afghanistan')
                                                                            }}>Afghanistan</li>
                                                                            <li data-value="Åland Islands" className={`option ${this.state.chooseCountrySelect == 'Åland Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Åland Islands')
                                                                            }}>Åland Islands</li>
                                                                            <li data-value="Albania" className={`option ${this.state.chooseCountrySelect == 'Albania' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Albania')
                                                                            }}>Albania</li>
                                                                            <li data-value="Algeria" className={`option ${this.state.chooseCountrySelect == 'Algeria' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Algeria')
                                                                            }}>Algeria</li>
                                                                            <li data-value="American Samoa" className={`option ${this.state.chooseCountrySelect == 'American Samoa' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'American Samoa')
                                                                            }}>American Samoa</li>
                                                                            <li data-value="Andorra" className={`option ${this.state.chooseCountrySelect == 'Andorra' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Andorra')
                                                                            }}>Andorra</li>
                                                                            <li data-value="Angola" className={`option ${this.state.chooseCountrySelect == 'Angola' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Angola')
                                                                            }}>Angola</li>
                                                                            <li data-value="Anguilla" className={`option ${this.state.chooseCountrySelect == 'Anguilla' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Anguilla')
                                                                            }}>Anguilla</li>
                                                                            <li data-value="Antarctica" className={`option ${this.state.chooseCountrySelect == 'Antarctica' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Antarctica')
                                                                            }}>Antarctica</li>
                                                                            <li data-value="Antigua and Barbuda" className={`option ${this.state.chooseCountrySelect == 'Antigua and Barbuda' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Antigua and Barbuda')
                                                                            }}>Antigua and Barbuda</li>
                                                                            <li data-value="Armenia" className={`option ${this.state.chooseCountrySelect == 'Armenia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Armenia')
                                                                            }}>Armenia</li>
                                                                            <li data-value="Aruba" className={`option ${this.state.chooseCountrySelect == 'Aruba' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Aruba')
                                                                            }}>Aruba</li>
                                                                            <li data-value="Australia" className={`option ${this.state.chooseCountrySelect == 'Australia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Australia')
                                                                            }}>Australia</li>
                                                                            <li data-value="Austria" className={`option ${this.state.chooseCountrySelect == 'Austria' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Austria')
                                                                            }}>Austria</li>
                                                                            <li data-value="Azerbaijan" className={`option ${this.state.chooseCountrySelect == 'Azerbaijan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Azerbaijan')
                                                                            }}>Azerbaijan</li>
                                                                            <li data-value="Bahamas" className={`option ${this.state.chooseCountrySelect == 'Bahamas' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Bahamas')
                                                                            }}>Bahamas</li>
                                                                            <li data-value="Bahrain" className={`option ${this.state.chooseCountrySelect == 'Bahrain' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Bahrain')
                                                                            }}>Bahrain</li>
                                                                            <li data-value="Bangladesh" className={`option ${this.state.chooseCountrySelect == 'Bangladesh' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Bangladesh')
                                                                            }}>Bangladesh</li>
                                                                            <li data-value="Barbados" className={`option ${this.state.chooseCountrySelect == 'Barbados' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Barbados')
                                                                            }}>Barbados</li>
                                                                            <li data-value="Belarus" className={`option ${this.state.chooseCountrySelect == 'Belarus' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Belarus')
                                                                            }}>Belarus</li>
                                                                            <li data-value="Belgium" className={`option ${this.state.chooseCountrySelect == 'Belgium' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Belgium')
                                                                            }}>Belgium</li>
                                                                            <li data-value="Belize" className={`option ${this.state.chooseCountrySelect == 'Belize' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Belize')
                                                                            }}>Belize</li>
                                                                            <li data-value="Benin" className={`option ${this.state.chooseCountrySelect == 'Benin' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Benin')
                                                                            }}>Benin</li>
                                                                            <li data-value="Bermuda" className={`option ${this.state.chooseCountrySelect == 'Bermuda' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Bermuda')
                                                                            }}>Bermuda</li>
                                                                            <li data-value="Bhutan" className={`option ${this.state.chooseCountrySelect == 'Bhutan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Bhutan')
                                                                            }}>Bhutan</li>
                                                                            <li data-value="Bolivia" className={`option ${this.state.chooseCountrySelect == 'Bolivia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Bolivia')
                                                                            }}>Bolivia</li>
                                                                            <li data-value="Bosnia and Herzegovina" className={`option ${this.state.chooseCountrySelect == 'Bosnia and Herzegovina' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Bosnia and Herzegovina')
                                                                            }}>Bosnia and Herzegovina</li>
                                                                            <li data-value="Botswana" className={`option ${this.state.chooseCountrySelect == 'Botswana' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Botswana')
                                                                            }}>Botswana</li>
                                                                            <li data-value="Bouvet Island" className={`option ${this.state.chooseCountrySelect == 'Bouvet Island' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Bouvet Island')
                                                                            }}>Bouvet Island</li>
                                                                            <li data-value="Brazil" className={`option ${this.state.chooseCountrySelect == 'Brazil' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Brazil')
                                                                            }}>Brazil</li>
                                                                            <li data-value="British Indian Ocean Territory" className={`option ${this.state.chooseCountrySelect == 'British Indian Ocean Territory' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'British Indian Ocean Territory')
                                                                            }}>British Indian Ocean Territory</li>
                                                                            <li data-value="Brunei Darussalam" className={`option ${this.state.chooseCountrySelect == 'Brunei Darussalam' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Brunei Darussalam')
                                                                            }}>Brunei Darussalam</li>
                                                                            <li data-value="Bulgaria" className={`option ${this.state.chooseCountrySelect == 'Bulgaria' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Bulgaria')
                                                                            }}>Bulgaria</li>
                                                                            <li data-value="Burkina Faso" className={`option ${this.state.chooseCountrySelect == 'Burkina Faso' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Burkina Faso')
                                                                            }}>Burkina Faso</li>
                                                                            <li data-value="Burundi" className={`option ${this.state.chooseCountrySelect == 'Burundi' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Burundi')
                                                                            }}>Burundi</li>
                                                                            <li data-value="Cambodia" className={`option ${this.state.chooseCountrySelect == 'Cambodia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Cambodia')
                                                                            }}>Cambodia</li>
                                                                            <li data-value="Cameroon" className={`option ${this.state.chooseCountrySelect == 'Cameroon' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Cameroon')
                                                                            }}>Cameroon</li>
                                                                            <li data-value="Canada" className={`option ${this.state.chooseCountrySelect == 'Canada' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Canada')
                                                                            }}>Canada</li>
                                                                            <li data-value="Cape Verde" className={`option ${this.state.chooseCountrySelect == 'Cape Verde' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Cape Verde')
                                                                            }}>Cape Verde</li>
                                                                            <li data-value="Cayman Islands" className={`option ${this.state.chooseCountrySelect == 'Cayman Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Cayman Islands')
                                                                            }}>Cayman Islands</li>
                                                                            <li data-value="Central African Republic" className={`option ${this.state.chooseCountrySelect == 'Central African Republic' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Central African Republic')
                                                                            }}>Central African Republic</li>
                                                                            <li data-value="Chad" className={`option ${this.state.chooseCountrySelect == 'Chad' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Chad')
                                                                            }}>Chad</li>
                                                                            <li data-value="Chile" className={`option ${this.state.chooseCountrySelect == 'Chile' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Chile')
                                                                            }}>Chile</li>
                                                                            <li data-value="China" className={`option ${this.state.chooseCountrySelect == 'China' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'China')
                                                                            }}>China</li>
                                                                            <li data-value="Christmas Island" className={`option ${this.state.chooseCountrySelect == 'Christmas Island' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Christmas Island')
                                                                            }}>Christmas Island</li>
                                                                            <li data-value="Cocos (Keeling) Islands" className={`option ${this.state.chooseCountrySelect == 'Cocos (Keeling) Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Cocos (Keeling) Islands')
                                                                            }}>Cocos (Keeling) Islands</li>
                                                                            <li data-value="Colombia" className={`option ${this.state.chooseCountrySelect == 'Colombia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Colombia')
                                                                            }}>Colombia</li>
                                                                            <li data-value="Comoros" className={`option ${this.state.chooseCountrySelect == 'Comoros' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Comoros')
                                                                            }}>Comoros</li>
                                                                            <li data-value="Congo" className={`option ${this.state.chooseCountrySelect == 'Congo' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Congo')
                                                                            }}>Congo</li>
                                                                            <li data-value="Congo, The Democratic Republic of The" className={`option ${this.state.chooseCountrySelect == 'Congo, The Democratic Republic of The' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Congo, The Democratic Republic of The')
                                                                            }}>Congo, The Democratic Republic of The</li>
                                                                            <li data-value="Cook Islands" className={`option ${this.state.chooseCountrySelect == 'Cook Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Cook Islands')
                                                                            }}>Cook Islands</li>
                                                                            <li data-value="Costa Rica" className={`option ${this.state.chooseCountrySelect == 'Costa Rica' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Costa Rica')
                                                                            }}>Costa Rica</li>
                                                                            <li data-value="Cote D'ivoire" className={`option ${this.state.chooseCountrySelect == 'Cote D\'ivoire' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Cote D\'ivoire')
                                                                            }}>Cote D'ivoire</li>
                                                                            <li data-value="Croatia" className={`option ${this.state.chooseCountrySelect == 'Croatia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Croatia')
                                                                            }}>Croatia</li>
                                                                            <li data-value="Cuba" className={`option ${this.state.chooseCountrySelect == 'Cuba' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Cuba')
                                                                            }}>Cuba</li>
                                                                            <li data-value="Cyprus" className={`option ${this.state.chooseCountrySelect == 'Cyprus' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Cyprus')
                                                                            }}>Cyprus</li>
                                                                            <li data-value="Czech Republic" className={`option ${this.state.chooseCountrySelect == 'Czech Republic' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Czech Republic')
                                                                            }}>Czech Republic</li>
                                                                            <li data-value="Denmark" className={`option ${this.state.chooseCountrySelect == 'Denmark' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Denmark')
                                                                            }}>Denmark</li>
                                                                            <li data-value="Djibouti" className={`option ${this.state.chooseCountrySelect == 'Djibouti' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Djibouti')
                                                                            }}>Djibouti</li>
                                                                            <li data-value="Dominica" className={`option ${this.state.chooseCountrySelect == 'Dominica' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Dominica')
                                                                            }}>Dominica</li>
                                                                            <li data-value="Dominican Republic" className={`option ${this.state.chooseCountrySelect == 'Dominican Republic' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Dominican Republic')
                                                                            }}>Dominican Republic</li>
                                                                            <li data-value="Ecuador" className={`option ${this.state.chooseCountrySelect == 'Ecuador' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Ecuador')
                                                                            }}>Ecuador</li>
                                                                            <li data-value="Egypt" className={`option ${this.state.chooseCountrySelect == 'Egypt' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Egypt')
                                                                            }}>Egypt</li>
                                                                            <li data-value="El Salvador" className={`option ${this.state.chooseCountrySelect == 'El Salvador' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'El Salvador')
                                                                            }}>El Salvador</li>
                                                                            <li data-value="Equatorial Guinea" className={`option ${this.state.chooseCountrySelect == 'Equatorial Guinea' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Equatorial Guinea')
                                                                            }}>Equatorial Guinea</li>
                                                                            <li data-value="Eritrea" className={`option ${this.state.chooseCountrySelect == 'Eritrea' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Eritrea')
                                                                            }}>Eritrea</li>
                                                                            <li data-value="Estonia" className={`option ${this.state.chooseCountrySelect == 'Estonia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Estonia')
                                                                            }}>Estonia</li>
                                                                            <li data-value="Ethiopia" className={`option ${this.state.chooseCountrySelect == 'Ethiopia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Ethiopia')
                                                                            }}>Ethiopia</li>
                                                                            <li data-value="Falkland Islands (Malvinas)" className={`option ${this.state.chooseCountrySelect == 'Falkland Islands (Malvinas)' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Falkland Islands (Malvinas)')
                                                                            }}>Falkland Islands (Malvinas)</li>
                                                                            <li data-value="Faroe Islands" className={`option ${this.state.chooseCountrySelect == 'Faroe Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Faroe Islands')
                                                                            }}>Faroe Islands</li>
                                                                            <li data-value="Fiji" className={`option ${this.state.chooseCountrySelect == 'Fiji' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Fiji')
                                                                            }}>Fiji</li>
                                                                            <li data-value="Finland" className={`option ${this.state.chooseCountrySelect == 'Finland' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Finland')
                                                                            }}>Finland</li>
                                                                            <li data-value="France" className={`option ${this.state.chooseCountrySelect == 'France' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'France')
                                                                            }}>France</li>
                                                                            <li data-value="French Guiana" className={`option ${this.state.chooseCountrySelect == 'French Guiana' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'French Guiana')
                                                                            }}>French Guiana</li>
                                                                            <li data-value="French Polynesia" className={`option ${this.state.chooseCountrySelect == 'French Polynesia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'French Polynesia')
                                                                            }}>French Polynesia</li>
                                                                            <li data-value="French Southern Territories" className={`option ${this.state.chooseCountrySelect == 'French Southern Territories' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'French Southern Territories')
                                                                            }}>French Southern Territories</li>
                                                                            <li data-value="Gabon" className={`option ${this.state.chooseCountrySelect == 'Gabon' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Gabon')
                                                                            }}>Gabon</li>
                                                                            <li data-value="Gambia" className={`option ${this.state.chooseCountrySelect == 'Gambia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Gambia')
                                                                            }}>Gambia</li>
                                                                            <li data-value="Georgia" className={`option ${this.state.chooseCountrySelect == 'Georgia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Georgia')
                                                                            }}>Georgia</li>
                                                                            <li data-value="Germany" className={`option ${this.state.chooseCountrySelect == 'Germany' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Germany')
                                                                            }}>Germany</li>
                                                                            <li data-value="Ghana" className={`option ${this.state.chooseCountrySelect == 'Ghana' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Ghana')
                                                                            }}>Ghana</li>
                                                                            <li data-value="Gibraltar" className={`option ${this.state.chooseCountrySelect == 'Gibraltar' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Gibraltar')
                                                                            }}>Gibraltar</li>
                                                                            <li data-value="Greece" className={`option ${this.state.chooseCountrySelect == 'Greece' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Greece')
                                                                            }}>Greece</li>
                                                                            <li data-value="Greenland" className={`option ${this.state.chooseCountrySelect == 'Greenland' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Greenland')
                                                                            }}>Greenland</li>
                                                                            <li data-value="Grenada" className={`option ${this.state.chooseCountrySelect == 'Grenada' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Grenada')
                                                                            }}>Grenada</li>
                                                                            <li data-value="Guadeloupe" className={`option ${this.state.chooseCountrySelect == 'Guadeloupe' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Guadeloupe')
                                                                            }}>Guadeloupe</li>
                                                                            <li data-value="Guam" className={`option ${this.state.chooseCountrySelect == 'Guam' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Guam')
                                                                            }}>Guam</li>
                                                                            <li data-value="Guatemala" className={`option ${this.state.chooseCountrySelect == 'Guatemala' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Guatemala')
                                                                            }}>Guatemala</li>
                                                                            <li data-value="Guernsey" className={`option ${this.state.chooseCountrySelect == 'Guernsey' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Guernsey')
                                                                            }}>Guernsey</li>
                                                                            <li data-value="Guinea" className={`option ${this.state.chooseCountrySelect == 'Guinea' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Guinea')
                                                                            }}>Guinea</li>
                                                                            <li data-value="Guinea-bissau" className={`option ${this.state.chooseCountrySelect == 'Guinea-bissau' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Guinea-bissau')
                                                                            }}>Guinea-bissau</li>
                                                                            <li data-value="Guyana" className={`option ${this.state.chooseCountrySelect == 'Guyana' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Guyana')
                                                                            }}>Guyana</li>
                                                                            <li data-value="Haiti" className={`option ${this.state.chooseCountrySelect == 'Haiti' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Haiti')
                                                                            }}>Haiti</li>
                                                                            <li data-value="Heard Island and Mcdonald Islands" className={`option ${this.state.chooseCountrySelect == 'Heard Island and Mcdonald Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Heard Island and Mcdonald Islands')
                                                                            }}>Heard Island and Mcdonald Islands</li>
                                                                            <li data-value="Holy See (Vatican City State)" className={`option ${this.state.chooseCountrySelect == 'Holy See (Vatican City State)' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Holy See (Vatican City State)')
                                                                            }}>Holy See (Vatican City State)</li>
                                                                            <li data-value="Honduras" className={`option ${this.state.chooseCountrySelect == 'Honduras' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Honduras')
                                                                            }}>Honduras</li>
                                                                            <li data-value="Hong Kong" className={`option ${this.state.chooseCountrySelect == 'Hong Kong' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Hong Kong')
                                                                            }}>Hong Kong</li>
                                                                            <li data-value="Hungary" className={`option ${this.state.chooseCountrySelect == 'Hungary' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Hungary')
                                                                            }}>Hungary</li>
                                                                            <li data-value="Iceland" className={`option ${this.state.chooseCountrySelect == 'Iceland' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Iceland')
                                                                            }}>Iceland</li>
                                                                            <li data-value="India" className={`option ${this.state.chooseCountrySelect == 'India' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'India')
                                                                            }}>India</li>
                                                                            <li data-value="Indonesia" className={`option ${this.state.chooseCountrySelect == 'Indonesia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Indonesia')
                                                                            }}>Indonesia</li>
                                                                            <li data-value="Iran, Islamic Republic of" className={`option ${this.state.chooseCountrySelect == 'Iran, Islamic Republic of' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Iran, Islamic Republic of')
                                                                            }}>Iran, Islamic Republic of</li>
                                                                            <li data-value="Iraq" className={`option ${this.state.chooseCountrySelect == 'Iraq' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Iraq')
                                                                            }}>Iraq</li>
                                                                            <li data-value="Ireland" className={`option ${this.state.chooseCountrySelect == 'Ireland' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Ireland')
                                                                            }}>Ireland</li>
                                                                            <li data-value="Isle of Man" className={`option ${this.state.chooseCountrySelect == 'Isle of Man' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Isle of Man')
                                                                            }}>Isle of Man</li>
                                                                            <li data-value="Israel" className={`option ${this.state.chooseCountrySelect == 'Israel' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Israel')
                                                                            }}>Israel</li>
                                                                            <li data-value="Italy" className={`option ${this.state.chooseCountrySelect == 'Italy' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Italy')
                                                                            }}>Italy</li>
                                                                            <li data-value="Jamaica" className={`option ${this.state.chooseCountrySelect == 'Jamaica' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Jamaica')
                                                                            }}>Jamaica</li>
                                                                            <li data-value="Japan" className={`option ${this.state.chooseCountrySelect == 'Japan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Japan')
                                                                            }}>Japan</li>
                                                                            <li data-value="Jersey" className={`option ${this.state.chooseCountrySelect == 'Jersey' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Jersey')
                                                                            }}>Jersey</li>
                                                                            <li data-value="Jordan" className={`option ${this.state.chooseCountrySelect == 'Jordan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Jordan')
                                                                            }}>Jordan</li>
                                                                            <li data-value="Kazakhstan" className={`option ${this.state.chooseCountrySelect == 'Kazakhstan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Kazakhstan')
                                                                            }}>Kazakhstan</li>
                                                                            <li data-value="Kenya" className={`option ${this.state.chooseCountrySelect == 'Kenya' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Kenya')
                                                                            }}>Kenya</li>
                                                                            <li data-value="Kiribati" className={`option ${this.state.chooseCountrySelect == 'Kiribati' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Kiribati')
                                                                            }}>Kiribati</li>
                                                                            <li data-value="Korea, Democratic People's Republic of" className={`option ${this.state.chooseCountrySelect == 'Korea, Democratic People\'s Republic of' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Korea, Democratic People\'s Republic of')
                                                                            }}>Korea, Democratic People's Republic of</li>
                                                                            <li data-value="Korea, Republic of" className={`option ${this.state.chooseCountrySelect == 'Korea, Republic of' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Korea, Republic of')
                                                                            }}>Korea, Republic of</li>
                                                                            <li data-value="Kuwait" className={`option ${this.state.chooseCountrySelect == 'Kuwait' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Kuwait')
                                                                            }}>Kuwait</li>
                                                                            <li data-value="Kyrgyzstan" className={`option ${this.state.chooseCountrySelect == 'Kyrgyzstan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Kyrgyzstan')
                                                                            }}>Kyrgyzstan</li>
                                                                            <li data-value="Lao People's Democratic Republic" className={`option ${this.state.chooseCountrySelect == 'Lao People\'s Democratic Republic' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Lao People\'s Democratic Republic')
                                                                            }}>Lao People's Democratic Republic</li>
                                                                            <li data-value="Latvia" className={`option ${this.state.chooseCountrySelect == 'Latvia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Latvia')
                                                                            }}>Latvia</li>
                                                                            <li data-value="Lebanon" className={`option ${this.state.chooseCountrySelect == 'Lebanon' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Lebanon')
                                                                            }}>Lebanon</li>
                                                                            <li data-value="Lesotho" className={`option ${this.state.chooseCountrySelect == 'Lesotho' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Lesotho')
                                                                            }}>Lesotho</li>
                                                                            <li data-value="Liberia" className={`option ${this.state.chooseCountrySelect == 'Liberia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Liberia')
                                                                            }}>Liberia</li>
                                                                            <li data-value="Libyan Arab Jamahiriya" className={`option ${this.state.chooseCountrySelect == 'Libyan Arab Jamahiriya' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Libyan Arab Jamahiriya')
                                                                            }}>Libyan Arab Jamahiriya</li>
                                                                            <li data-value="Liechtenstein" className={`option ${this.state.chooseCountrySelect == 'Liechtenstein' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Liechtenstein')
                                                                            }}>Liechtenstein</li>
                                                                            <li data-value="Lithuania" className={`option ${this.state.chooseCountrySelect == 'Lithuania' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Lithuania')
                                                                            }}>Lithuania</li>
                                                                            <li data-value="Luxembourg" className={`option ${this.state.chooseCountrySelect == 'Luxembourg' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Luxembourg')
                                                                            }}>Luxembourg</li>
                                                                            <li data-value="Macao" className={`option ${this.state.chooseCountrySelect == 'Macao' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Macao')
                                                                            }}>Macao</li>
                                                                            <li data-value="Macedonia, The Former Yugoslav Republic of" className={`option ${this.state.chooseCountrySelect == 'Macedonia, The Former Yugoslav Republic of' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Macedonia, The Former Yugoslav Republic of')
                                                                            }}>Macedonia, The Former Yugoslav Republic of</li>
                                                                            <li data-value="Madagascar" className={`option ${this.state.chooseCountrySelect == 'Madagascar' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Madagascar')
                                                                            }}>Madagascar</li>
                                                                            <li data-value="Malawi" className={`option ${this.state.chooseCountrySelect == 'Malawi' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Malawi')
                                                                            }}>Malawi</li>
                                                                            <li data-value="Malaysia" className={`option ${this.state.chooseCountrySelect == 'Malaysia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Malaysia')
                                                                            }}>Malaysia</li>
                                                                            <li data-value="Maldives" className={`option ${this.state.chooseCountrySelect == 'Maldives' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Maldives')
                                                                            }}>Maldives</li>
                                                                            <li data-value="Mali" className={`option ${this.state.chooseCountrySelect == 'Mali' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Mali')
                                                                            }}>Mali</li>
                                                                            <li data-value="Malta" className={`option ${this.state.chooseCountrySelect == 'Malta' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Malta')
                                                                            }}>Malta</li>
                                                                            <li data-value="Marshall Islands" className={`option ${this.state.chooseCountrySelect == 'Marshall Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Marshall Islands')
                                                                            }}>Marshall Islands</li>
                                                                            <li data-value="Martinique" className={`option ${this.state.chooseCountrySelect == 'Martinique' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Martinique')
                                                                            }}>Martinique</li>
                                                                            <li data-value="Mauritania" className={`option ${this.state.chooseCountrySelect == 'Mauritania' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Mauritania')
                                                                            }}>Mauritania</li>
                                                                            <li data-value="Mauritius" className={`option ${this.state.chooseCountrySelect == 'Mauritius' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Mauritius')
                                                                            }}>Mauritius</li>
                                                                            <li data-value="Mayotte" className={`option ${this.state.chooseCountrySelect == 'Mayotte' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Mayotte')
                                                                            }}>Mayotte</li>
                                                                            <li data-value="Mexico" className={`option ${this.state.chooseCountrySelect == 'Mexico' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Mexico')
                                                                            }}>Mexico</li>
                                                                            <li data-value="Micronesia, Federated States of" className={`option ${this.state.chooseCountrySelect == 'Micronesia, Federated States of' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Micronesia, Federated States of')
                                                                            }}>Micronesia, Federated States of</li>
                                                                            <li data-value="Moldova, Republic of" className={`option ${this.state.chooseCountrySelect == 'Moldova, Republic of' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Moldova, Republic of')
                                                                            }}>Moldova, Republic of</li>
                                                                            <li data-value="Monaco" className={`option ${this.state.chooseCountrySelect == 'Monaco' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Monaco')
                                                                            }}>Monaco</li>
                                                                            <li data-value="Mongolia" className={`option ${this.state.chooseCountrySelect == 'Mongolia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Mongolia')
                                                                            }}>Mongolia</li>
                                                                            <li data-value="Montenegro" className={`option ${this.state.chooseCountrySelect == 'Montenegro' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Montenegro')
                                                                            }}>Montenegro</li>
                                                                            <li data-value="Montserrat" className={`option ${this.state.chooseCountrySelect == 'Montserrat' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Montserrat')
                                                                            }}>Montserrat</li>
                                                                            <li data-value="Morocco" className={`option ${this.state.chooseCountrySelect == 'Morocco' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Morocco')
                                                                            }}>Morocco</li>
                                                                            <li data-value="Mozambique" className={`option ${this.state.chooseCountrySelect == 'Mozambique' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Mozambique')
                                                                            }}>Mozambique</li>
                                                                            <li data-value="Myanmar" className={`option ${this.state.chooseCountrySelect == 'Myanmar' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Myanmar')
                                                                            }}>Myanmar</li>
                                                                            <li data-value="Namibia" className={`option ${this.state.chooseCountrySelect == 'Namibia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Namibia')
                                                                            }}>Namibia</li>
                                                                            <li data-value="Nauru" className={`option ${this.state.chooseCountrySelect == 'Nauru' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Nauru')
                                                                            }}>Nauru</li>
                                                                            <li data-value="Nepal" className={`option ${this.state.chooseCountrySelect == 'Nepal' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Nepal')
                                                                            }}>Nepal</li>
                                                                            <li data-value="Netherlands" className={`option ${this.state.chooseCountrySelect == 'Netherlands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Netherlands')
                                                                            }}>Netherlands</li>
                                                                            <li data-value="Netherlands Antilles" className={`option ${this.state.chooseCountrySelect == 'Netherlands Antilles' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Netherlands Antilles')
                                                                            }}>Netherlands Antilles</li>
                                                                            <li data-value="New Caledonia" className={`option ${this.state.chooseCountrySelect == 'New Caledonia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'New Caledonia')
                                                                            }}>New Caledonia</li>
                                                                            <li data-value="New Zealand" className={`option ${this.state.chooseCountrySelect == 'New Zealand' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'New Zealand')
                                                                            }}>New Zealand</li>
                                                                            <li data-value="Nicaragua" className={`option ${this.state.chooseCountrySelect == 'Nicaragua' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Nicaragua')
                                                                            }}>Nicaragua</li>
                                                                            <li data-value="Niger" className={`option ${this.state.chooseCountrySelect == 'Niger' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Niger')
                                                                            }}>Niger</li>
                                                                            <li data-value="Nigeria" className={`option ${this.state.chooseCountrySelect == 'Nigeria' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Nigeria')
                                                                            }}>Nigeria</li>
                                                                            <li data-value="Niue" className={`option ${this.state.chooseCountrySelect == 'Niue' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Niue')
                                                                            }}>Niue</li>
                                                                            <li data-value="Norfolk Island" className={`option ${this.state.chooseCountrySelect == 'Norfolk Island' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Norfolk Island')
                                                                            }}>Norfolk Island</li>
                                                                            <li data-value="Northern Mariana Islands" className={`option ${this.state.chooseCountrySelect == 'Northern Mariana Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Northern Mariana Islands')
                                                                            }}>Northern Mariana Islands</li>
                                                                            <li data-value="Norway" className={`option ${this.state.chooseCountrySelect == 'Norway' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Norway')
                                                                            }}>Norway</li>
                                                                            <li data-value="Oman" className={`option ${this.state.chooseCountrySelect == 'Oman' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Oman')
                                                                            }}>Oman</li>
                                                                            <li data-value="Pakistan" className={`option ${this.state.chooseCountrySelect == 'Pakistan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Pakistan')
                                                                            }}>Pakistan</li>
                                                                            <li data-value="Palau" className={`option ${this.state.chooseCountrySelect == 'Palau' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Palau')
                                                                            }}>Palau</li>
                                                                            <li data-value="Palestinian Territory, Occupied" className={`option ${this.state.chooseCountrySelect == 'Palestinian Territory, Occupied' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Palestinian Territory, Occupied')
                                                                            }}>Palestinian Territory, Occupied</li>
                                                                            <li data-value="Panama" className={`option ${this.state.chooseCountrySelect == 'Panama' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Panama')
                                                                            }}>Panama</li>
                                                                            <li data-value="Papua New Guinea" className={`option ${this.state.chooseCountrySelect == 'Papua New Guinea' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Papua New Guinea')
                                                                            }}>Papua New Guinea</li>
                                                                            <li data-value="Paraguay" className={`option ${this.state.chooseCountrySelect == 'Paraguay' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Paraguay')
                                                                            }}>Paraguay</li>
                                                                            <li data-value="Peru" className={`option ${this.state.chooseCountrySelect == 'Peru' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Peru')
                                                                            }}>Peru</li>
                                                                            <li data-value="Philippines" className={`option ${this.state.chooseCountrySelect == 'Philippines' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Philippines')
                                                                            }}>Philippines</li>
                                                                            <li data-value="Pitcairn" className={`option ${this.state.chooseCountrySelect == 'Pitcairn' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Pitcairn')
                                                                            }}>Pitcairn</li>
                                                                            <li data-value="Poland" className={`option ${this.state.chooseCountrySelect == 'Poland' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Poland')
                                                                            }}>Poland</li>
                                                                            <li data-value="Portugal" className={`option ${this.state.chooseCountrySelect == 'Portugal' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Portugal')
                                                                            }}>Portugal</li>
                                                                            <li data-value="Puerto Rico" className={`option ${this.state.chooseCountrySelect == 'Puerto Rico' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Puerto Rico')
                                                                            }}>Puerto Rico</li>
                                                                            <li data-value="Qatar" className={`option ${this.state.chooseCountrySelect == 'Qatar' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Qatar')
                                                                            }}>Qatar</li>
                                                                            <li data-value="Reunion" className={`option ${this.state.chooseCountrySelect == 'Reunion' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Reunion')
                                                                            }}>Reunion</li>
                                                                            <li data-value="Romania" className={`option ${this.state.chooseCountrySelect == 'Romania' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Romania')
                                                                            }}>Romania</li>
                                                                            <li data-value="Russian Federation" className={`option ${this.state.chooseCountrySelect == 'Russian Federation' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Russian Federation')
                                                                            }}>Russian Federation</li>
                                                                            <li data-value="Rwanda" className={`option ${this.state.chooseCountrySelect == 'Rwanda' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Rwanda')
                                                                            }}>Rwanda</li>
                                                                            <li data-value="Saint Helena" className={`option ${this.state.chooseCountrySelect == 'Saint Helena' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Saint Helena')
                                                                            }}>Saint Helena</li>
                                                                            <li data-value="Saint Kitts and Nevis" className={`option ${this.state.chooseCountrySelect == 'Saint Kitts and Nevis' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Saint Kitts and Nevis')
                                                                            }}>Saint Kitts and Nevis</li>
                                                                            <li data-value="Saint Lucia" className={`option ${this.state.chooseCountrySelect == 'Saint Lucia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Saint Lucia')
                                                                            }}>Saint Lucia</li>
                                                                            <li data-value="Saint Pierre and Miquelon" className={`option ${this.state.chooseCountrySelect == 'Saint Pierre and Miquelon' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Saint Pierre and Miquelon')
                                                                            }}>Saint Pierre and Miquelon</li>
                                                                            <li data-value="Saint Vincent and The Grenadines" className={`option ${this.state.chooseCountrySelect == 'Saint Vincent and The Grenadines' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Saint Vincent and The Grenadines')
                                                                            }}>Saint Vincent and The Grenadines</li>
                                                                            <li data-value="Samoa" className={`option ${this.state.chooseCountrySelect == 'Samoa' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Samoa')
                                                                            }}>Samoa</li>
                                                                            <li data-value="San Marino" className={`option ${this.state.chooseCountrySelect == 'San Marino' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'San Marino')
                                                                            }}>San Marino</li>
                                                                            <li data-value="Sao Tome and Principe" className={`option ${this.state.chooseCountrySelect == 'Sao Tome and Principe' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Sao Tome and Principe')
                                                                            }}>Sao Tome and Principe</li>
                                                                            <li data-value="Saudi Arabia" className={`option ${this.state.chooseCountrySelect == 'Saudi Arabia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Saudi Arabia')
                                                                            }}>Saudi Arabia</li>
                                                                            <li data-value="Senegal" className={`option ${this.state.chooseCountrySelect == 'Senegal' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Senegal')
                                                                            }}>Senegal</li>
                                                                            <li data-value="Serbia" className={`option ${this.state.chooseCountrySelect == 'Serbia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Serbia')
                                                                            }}>Serbia</li>
                                                                            <li data-value="Seychelles" className={`option ${this.state.chooseCountrySelect == 'Seychelles' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Seychelles')
                                                                            }}>Seychelles</li>
                                                                            <li data-value="Sierra Leone" className={`option ${this.state.chooseCountrySelect == 'Sierra Leone' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Sierra Leone')
                                                                            }}>Sierra Leone</li>
                                                                            <li data-value="Singapore" className={`option ${this.state.chooseCountrySelect == 'Singapore' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Singapore')
                                                                            }}>Singapore</li>
                                                                            <li data-value="Slovakia" className={`option ${this.state.chooseCountrySelect == 'Slovakia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Slovakia')
                                                                            }}>Slovakia</li>
                                                                            <li data-value="Slovenia" className={`option ${this.state.chooseCountrySelect == 'Slovenia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Slovenia')
                                                                            }}>Slovenia</li>
                                                                            <li data-value="Solomon Islands" className={`option ${this.state.chooseCountrySelect == 'Solomon Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Solomon Islands')
                                                                            }}>Solomon Islands</li>
                                                                            <li data-value="Somalia" className={`option ${this.state.chooseCountrySelect == 'Somalia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Somalia')
                                                                            }}>Somalia</li>
                                                                            <li data-value="South Africa" className={`option ${this.state.chooseCountrySelect == 'South Africa' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'South Africa')
                                                                            }}>South Africa</li>
                                                                            <li data-value="South Georgia and The South Sandwich Islands" className={`option ${this.state.chooseCountrySelect == 'South Georgia and The South Sandwich Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'South Georgia and The South Sandwich Islands')
                                                                            }}>South Georgia and The South Sandwich Islands</li>
                                                                            <li data-value="Spain" className={`option ${this.state.chooseCountrySelect == 'Spain' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Spain')
                                                                            }}>Spain</li>
                                                                            <li data-value="Sri Lanka" className={`option ${this.state.chooseCountrySelect == 'Sri Lanka' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Sri Lanka')
                                                                            }}>Sri Lanka</li>
                                                                            <li data-value="Sudan" className={`option ${this.state.chooseCountrySelect == 'Sudan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Sudan')
                                                                            }}>Sudan</li>
                                                                            <li data-value="Suriname" className={`option ${this.state.chooseCountrySelect == 'Suriname' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Suriname')
                                                                            }}>Suriname</li>
                                                                            <li data-value="Svalbard and Jan Mayen" className={`option ${this.state.chooseCountrySelect == 'Svalbard and Jan Mayen' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Svalbard and Jan Mayen')
                                                                            }}>Svalbard and Jan Mayen</li>
                                                                            <li data-value="Swaziland" className={`option ${this.state.chooseCountrySelect == 'Swaziland' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Swaziland')
                                                                            }}>Swaziland</li>
                                                                            <li data-value="Sweden" className={`option ${this.state.chooseCountrySelect == 'Sweden' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Sweden')
                                                                            }}>Sweden</li>
                                                                            <li data-value="Switzerland" className={`option ${this.state.chooseCountrySelect == 'Switzerland' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Switzerland')
                                                                            }}>Switzerland</li>
                                                                            <li data-value="Syrian Arab Republic" className={`option ${this.state.chooseCountrySelect == 'Syrian Arab Republic' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Syrian Arab Republic')
                                                                            }}>Syrian Arab Republic</li>
                                                                            <li data-value="Taiwan, Province of China" className={`option ${this.state.chooseCountrySelect == 'Taiwan, Province of China' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Taiwan, Province of China')
                                                                            }}>Taiwan, Province of China</li>
                                                                            <li data-value="Tajikistan" className={`option ${this.state.chooseCountrySelect == 'Tajikistan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Tajikistan')
                                                                            }}>Tajikistan</li>
                                                                            <li data-value="Tanzania, United Republic of" className={`option ${this.state.chooseCountrySelect == 'Tanzania, United Republic of' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Tanzania, United Republic of')
                                                                            }}>Tanzania, United Republic of</li>
                                                                            <li data-value="Thailand" className={`option ${this.state.chooseCountrySelect == 'Thailand' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Thailand')
                                                                            }}>Thailand</li>
                                                                            <li data-value="Timor-leste" className={`option ${this.state.chooseCountrySelect == 'Timor-leste' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Timor-leste')
                                                                            }}>Timor-leste</li>
                                                                            <li data-value="Togo" className={`option ${this.state.chooseCountrySelect == 'Togo' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Togo')
                                                                            }}>Togo</li>
                                                                            <li data-value="Tokelau" className={`option ${this.state.chooseCountrySelect == 'Tokelau' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Tokelau')
                                                                            }}>Tokelau</li>
                                                                            <li data-value="Tonga" className={`option ${this.state.chooseCountrySelect == 'Tonga' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Tonga')
                                                                            }}>Tonga</li>
                                                                            <li data-value="Trinidad and Tobago" className={`option ${this.state.chooseCountrySelect == 'Trinidad and Tobago' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Trinidad and Tobago')
                                                                            }}>Trinidad and Tobago</li>
                                                                            <li data-value="Tunisia" className={`option ${this.state.chooseCountrySelect == 'Tunisia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Tunisia')
                                                                            }}>Tunisia</li>
                                                                            <li data-value="Turkey" className={`option ${this.state.chooseCountrySelect == 'Turkey' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Turkey')
                                                                            }}>Turkey</li>
                                                                            <li data-value="Turkmenistan" className={`option ${this.state.chooseCountrySelect == 'Turkmenistan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Turkmenistan')
                                                                            }}>Turkmenistan</li>
                                                                            <li data-value="Turks and Caicos Islands" className={`option ${this.state.chooseCountrySelect == 'Turks and Caicos Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Turks and Caicos Islands')
                                                                            }}>Turks and Caicos Islands</li>
                                                                            <li data-value="Tuvalu" className={`option ${this.state.chooseCountrySelect == 'Tuvalu' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Tuvalu')
                                                                            }}>Tuvalu</li>
                                                                            <li data-value="Uganda" className={`option ${this.state.chooseCountrySelect == 'Uganda' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Uganda')
                                                                            }}>Uganda</li>
                                                                            <li data-value="Ukraine" className={`option ${this.state.chooseCountrySelect == 'Ukraine' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Ukraine')
                                                                            }}>Ukraine</li>
                                                                            <li data-value="United Arab Emirates" className={`option ${this.state.chooseCountrySelect == 'United Arab Emirates' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'United Arab Emirates')
                                                                            }}>United Arab Emirates</li>
                                                                            <li data-value="United Kingdom" className={`option ${this.state.chooseCountrySelect == 'United Kingdom' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'United Kingdom')
                                                                            }}>United Kingdom</li>
                                                                            <li data-value="United States" className={`option ${this.state.chooseCountrySelect == 'United States' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'United States')
                                                                            }}>United States</li>
                                                                            <li data-value="United States Minor Outlying Islands" className={`option ${this.state.chooseCountrySelect == 'United States Minor Outlying Islands' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'United States Minor Outlying Islands')
                                                                            }}>United States Minor Outlying Islands</li>
                                                                            <li data-value="Uruguay" className={`option ${this.state.chooseCountrySelect == 'Uruguay' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Uruguay')
                                                                            }}>Uruguay</li>
                                                                            <li data-value="Uzbekistan" className={`option ${this.state.chooseCountrySelect == 'Uzbekistan' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Uzbekistan')
                                                                            }}>Uzbekistan</li>
                                                                            <li data-value="Vanuatu" className={`option ${this.state.chooseCountrySelect == 'Vanuatu' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Vanuatu')
                                                                            }}>Vanuatu</li>
                                                                            <li data-value="Venezuela" className={`option ${this.state.chooseCountrySelect == 'Venezuela' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Venezuela')
                                                                            }}>Venezuela</li>
                                                                            <li data-value="Viet Nam" className={`option ${this.state.chooseCountrySelect == 'Viet Nam' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Viet Nam')
                                                                            }}>Viet Nam</li>
                                                                            <li data-value="Virgin Islands, British" className={`option ${this.state.chooseCountrySelect == 'Virgin Islands, British' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Virgin Islands, British')
                                                                            }}>Virgin Islands, British</li>
                                                                            <li data-value="Virgin Islands, U.S." className={`option ${this.state.chooseCountrySelect == 'Virgin Islands, U.S.' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Virgin Islands, U.S.')
                                                                            }}>Virgin Islands, U.S.</li>
                                                                            <li data-value="Wallis and Futuna" className={`option ${this.state.chooseCountrySelect == 'Wallis and Futuna' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Wallis and Futuna')
                                                                            }}>Wallis and Futuna</li>
                                                                            <li data-value="Western Sahara" className={`option ${this.state.chooseCountrySelect == 'Western Sahara' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Western Sahara')
                                                                            }}>Western Sahara</li>
                                                                            <li data-value="Yemen" className={`option ${this.state.chooseCountrySelect == 'Yemen' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Yemen')
                                                                            }}>Yemen</li>
                                                                            <li data-value="Zambia" className={`option ${this.state.chooseCountrySelect == 'Zambia' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Zambia')
                                                                            }}>Zambia</li>
                                                                            <li data-value="Zimbabwe" className={`option ${this.state.chooseCountrySelect == 'Zimbabwe' ? 'selected focus' : ''}`} onClick={() => {
                                                                                this.selectCountryElem.classList.remove('open')
                                                                                this.set('chooseCountrySelect', 'Zimbabwe')
                                                                            }}>Zimbabwe</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className=" col col-lg-12 col-md-12 col-sm-12 colc flname">
                                                                    <ul>
                                                                        <li className="left">
                                                                            <div className="">
                                                                                <label htmlFor="bi-f-name" className="form-label oss-16 black">First Name<sup><span className="redish">*</span></sup></label>
                                                                                <input type="text" className="form-control oss-13 darkgrey" id="bi-f-name" required />
                                                                            </div>
                                                                        </li>
                                                                        <li className="right">
                                                                            <div className="">
                                                                                <label htmlFor="bi-l-name" className="form-label oss-16 black">Last Name<sup><span className="redish">*</span></sup></label>
                                                                                <input type="text" className="form-control oss-13 darkgrey" id="bi-l-name" required />
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className=" col col-lg-12 col-md-12 col-sm-12 colc phn">
                                                                    <div className="">
                                                                        <label htmlFor="bi-phone" className="form-label oss-16 black">Phone Number<sup><span className="redish">*</span></sup></label>
                                                                        <select name="countryCode" id="bi-phone" defaultValue={'91'} style={{ display: 'none' }}>
                                                                            <option data-countryCode="IN" value="91">India (+91)</option>
                                                                            <optgroup label="Other countries">
                                                                                <option data-countryCode="GB" value="44">Norway (+47)</option>
                                                                                <option data-countryCode="US" value="1">UK (+44)</option>
                                                                                <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                                                                <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                                                                <option data-countryCode="AO" value="244">Angola (+244)</option>
                                                                                <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                                                                <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                                                                <option data-countryCode="AR" value="54">Argentina (+54)</option>
                                                                                <option data-countryCode="AM" value="374">Armenia (+374)</option>
                                                                                <option data-countryCode="AW" value="297">Aruba (+297)</option>
                                                                                <option data-countryCode="AU" value="61">Australia (+61)</option>
                                                                                <option data-countryCode="AT" value="43">Austria (+43)</option>
                                                                                <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                                                                                <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                                                                                <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                                                                                <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                                                                                <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                                                                                <option data-countryCode="BY" value="375">Belarus (+375)</option>
                                                                                <option data-countryCode="BE" value="32">Belgium (+32)</option>
                                                                                <option data-countryCode="BZ" value="501">Belize (+501)</option>
                                                                                <option data-countryCode="BJ" value="229">Benin (+229)</option>
                                                                                <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                                                                                <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                                                                                <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                                                                                <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                                                                <option data-countryCode="BW" value="267">Botswana (+267)</option>
                                                                                <option data-countryCode="BR" value="55">Brazil (+55)</option>
                                                                                <option data-countryCode="BN" value="673">Brunei (+673)</option>
                                                                                <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                                                                                <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                                                                                <option data-countryCode="BI" value="257">Burundi (+257)</option>
                                                                                <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                                                                                <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                                                                                <option data-countryCode="CA" value="1">Canada (+1)</option>
                                                                                <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                                                                                <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                                                                                <option data-countryCode="CL" value="56">Chile (+56)</option>
                                                                                <option data-countryCode="CN" value="86">China (+86)</option>
                                                                                <option data-countryCode="CO" value="57">Colombia (+57)</option>
                                                                                <option data-countryCode="KM" value="269">Comoros (+269)</option>
                                                                                <option data-countryCode="CG" value="242">Congo (+242)</option>
                                                                                <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                                                                                <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                                                                                <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                                                                <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                                                                <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                                                                                <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                                                                <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                                                                <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                                                                <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                                                                <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                                                                <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                                                                                <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                                                                <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                                                                <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                                                                <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                                                                                <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                                                                <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                                                                <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                                                                <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                                                                                <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                                                                <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                                                                <option data-countryCode="FI" value="358">Finland (+358)</option>
                                                                                <option data-countryCode="FR" value="33">France (+33)</option>
                                                                                <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                                                                <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                                                                                <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                                                                <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                                                                <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                                                                <option data-countryCode="DE" value="49">Germany (+49)</option>
                                                                                <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                                                                <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                                                                <option data-countryCode="GR" value="30">Greece (+30)</option>
                                                                                <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                                                                <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                                                                <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                                                                <option data-countryCode="GU" value="671">Guam (+671)</option>
                                                                                <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                                                                <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                                                                <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                                                                <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                                                                <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                                                                <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                                                                <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                                                                <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                                                                <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                                                                <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                                                                <option data-countryCode="IR" value="98">Iran (+98)</option>
                                                                                <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                                                                <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                                                                <option data-countryCode="IL" value="972">Israel (+972)</option>
                                                                                <option data-countryCode="IT" value="39">Italy (+39)</option>
                                                                                <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                                                                <option data-countryCode="JP" value="81">Japan (+81)</option>
                                                                                <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                                                                <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                                                                                <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                                                                <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                                                                <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                                                                <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                                                                <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                                                                <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                                                                <option data-countryCode="LA" value="856">Laos (+856)</option>
                                                                                <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                                                                <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                                                                <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                                                                <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                                                                <option data-countryCode="LY" value="218">Libya (+218)</option>
                                                                                <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                                                                <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                                                                <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                                                                <option data-countryCode="MO" value="853">Macao (+853)</option>
                                                                                <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                                                                <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                                                                <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                                                                <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                                                                <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                                                                <option data-countryCode="ML" value="223">Mali (+223)</option>
                                                                                <option data-countryCode="MT" value="356">Malta (+356)</option>
                                                                                <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                                                                <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                                                                <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                                                                <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                                                                <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                                                                <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                                                                <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                                                                <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                                                                <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                                                                <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                                                                <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                                                                <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                                                                <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                                                                <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                                                                <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                                                                <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                                                                <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                                                                <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                                                                <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                                                                <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                                                                <option data-countryCode="NE" value="227">Niger (+227)</option>
                                                                                <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                                                                <option data-countryCode="NU" value="683">Niue (+683)</option>
                                                                                <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                                                                <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                                                                                <option data-countryCode="NO" value="47">Norway (+47)</option>
                                                                                <option data-countryCode="OM" value="968">Oman (+968)</option>
                                                                                <option data-countryCode="PW" value="680">Palau (+680)</option>
                                                                                <option data-countryCode="PA" value="507">Panama (+507)</option>
                                                                                <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                                                                                <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                                                                                <option data-countryCode="PE" value="51">Peru (+51)</option>
                                                                                <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                                                                <option data-countryCode="PL" value="48">Poland (+48)</option>
                                                                                <option data-countryCode="PT" value="351">Portugal (+351)</option>
                                                                                <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                                                                                <option data-countryCode="QA" value="974">Qatar (+974)</option>
                                                                                <option data-countryCode="RE" value="262">Reunion (+262)</option>
                                                                                <option data-countryCode="RO" value="40">Romania (+40)</option>
                                                                                <option data-countryCode="RU" value="7">Russia (+7)</option>
                                                                                <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                                                                                <option data-countryCode="SM" value="378">San Marino (+378)</option>
                                                                                <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                                                                                <option data-countryCode="SN" value="221">Senegal (+221)</option>
                                                                                <option data-countryCode="CS" value="381">Serbia (+381)</option>
                                                                                <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                                                                                <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                                                                                <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                                                                <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                                                                                <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                                                                                <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                                                                                <option data-countryCode="SO" value="252">Somalia (+252)</option>
                                                                                <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                                                                                <option data-countryCode="ES" value="34">Spain (+34)</option>
                                                                                <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                                                                                <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                                                                                <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                                                                                <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                                                                                <option data-countryCode="SD" value="249">Sudan (+249)</option>
                                                                                <option data-countryCode="SR" value="597">Suriname (+597)</option>
                                                                                <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                                                                                <option data-countryCode="SE" value="46">Sweden (+46)</option>
                                                                                <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                                                                                <option data-countryCode="SI" value="963">Syria (+963)</option>
                                                                                <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                                                                                <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                                                                                <option data-countryCode="TH" value="66">Thailand (+66)</option>
                                                                                <option data-countryCode="TG" value="228">Togo (+228)</option>
                                                                                <option data-countryCode="TO" value="676">Tonga (+676)</option>
                                                                                <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                                                                                <option data-countryCode="TR" value="90">Turkey (+90)</option>
                                                                                <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                                                                                <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                                                                                <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                                                                                <option data-countryCode="UG" value="256">Uganda (+256)</option>
                                                                                {/* <!-- <option data-countryCode="GB" value="44">UK (+44)</option> --> */}
                                                                                <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                                                                                <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                                                                                {/* <!-- <option data-countryCode="US" value="1">USA (+1)</option> --> */}
                                                                                <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                                                                                <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                                                                                <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                                                                                <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                                                                                <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                                                                                <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
                                                                                <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                                                                <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                                                                                <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                                                                                <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                                                                                <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                                                                            </optgroup>
                                                                        </select>
                                                                        <div class="nice-select" tabindex="0" ref={(ref) => this.selectContryCodeElem = ref} onClick={(e) => {
                                                                            if (!e.target.classList.contains('option')) {
                                                                                this.selectContryCodeElem.classList.toggle('open')
                                                                            }
                                                                        }} onBlur={() => {
                                                                            this.selectContryCodeElem.classList.remove('open')
                                                                        }}>
                                                                            <span class="current">{(pinCodeObj.find(ob => ob.value == this.state.selectedCountryCode)).option}</span>
                                                                            <ul class="list" style={{
                                                                                height: '400px',
                                                                                overflowY: 'auto'
                                                                            }}>
                                                                                {
                                                                                    pinCodeObj.map(obj => (
                                                                                        <li data-value={obj.value} className={`option ${this.state.selectedCountryCode == obj.value ? 'selected focus' : ''}`} onClick={() => {
                                                                                            this.selectContryCodeElem.classList.remove('open')
                                                                                            this.set('selectedCountryCode', obj.value)
                                                                                        }}>{obj.option}</li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                        <input type="" className="form-control oss-13 darkgrey" id="bi-phone" />
                                                                    </div>
                                                                </div>
                                                                <div className=" col col-lg-12 col-md-12 col-sm-12 colc addre">
                                                                    <div className="">
                                                                        <label htmlFor="bi-addr" className="form-label oss-16 black">Address<sup><span className="redish">*</span></sup></label>
                                                                        <input type="text" className="form-control oss-13 darkgrey" id="bi-addr" required />
                                                                    </div>
                                                                </div>
                                                                <div className=" col col-lg-12 col-md-12 col-sm-12 colc pstate">
                                                                    <ul>
                                                                        <li className="left">
                                                                            <div className="">
                                                                                <label htmlFor="bi-p-code" className="form-label oss-16 black">Postal Code<sup><span className="redish">*</span></sup></label>
                                                                                <input type="text" className="form-control oss-13 darkgrey" id="bi-p-code" required />
                                                                            </div>
                                                                        </li>
                                                                        <li className="right">
                                                                            <div className="">
                                                                                <label htmlFor="bi-state" className="form-label oss-16 black">State<sup><span className="redish">*</span></sup></label>
                                                                                <input type="" className="form-control oss-13 darkgrey" id="bi-state" required />
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className=" col col-lg-12 col-md-12 col-sm-12 colc cityo">
                                                                    <ul>
                                                                        <li className="left">
                                                                            <div className="">
                                                                                <label htmlFor="bi-city" className="form-label oss-16 black">City<sup><span className="redish">*</span></sup></label>
                                                                                <input type="text" className="form-control oss-13 darkgrey" id="bi-city" required />
                                                                            </div>
                                                                        </li>
                                                                        <li className="right">
                                                                            <div className="">
                                                                                <label htmlFor="bi-org" className="form-label oss-16 black">Organization</label>
                                                                                <input type="" className="form-control oss-13 darkgrey" id="bi-org" required />
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="row bi-3">
                                                                <div className="col-12 text-right">
                                                                    <button className="btn btn-primary turq-btn oss-13 white" data-next>Save {'&'} Continue</button>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="pay-meth" data-step="Payment Method">
                                                            <div className="row pay-m-1">
                                                                <div className="col col-lg-6 col-md-6 col-sm-6 coll">
                                                                    <h1 className="osb-22 black">Payment Method</h1>
                                                                </div>
                                                                <div className="col col-lg-6 col-md-6 col-sm-6 colr">
                                                                </div>
                                                            </div>
                                                            <div className="row pay-m-2">
                                                                <div className="col col-lg-12 col-md-12 col-sm-12 colc country">
                                                                    <label className="oss-16 black" htmlFor="country">Country / Region<span className="icon-Question-Mark darkgrey"></span></label>
                                                                    <select id="country" name="country" className="form-control oss-13 darkgrey" required>
                                                                        <option value="Afghanistan">Afghanistan</option>
                                                                        <option value="Åland Islands">Åland Islands</option>
                                                                        <option value="Albania">Albania</option>
                                                                        <option value="Algeria">Algeria</option>
                                                                        <option value="American Samoa">American Samoa</option>
                                                                        <option value="Andorra">Andorra</option>
                                                                        <option value="Angola">Angola</option>
                                                                        <option value="Anguilla">Anguilla</option>
                                                                        <option value="Antarctica">Antarctica</option>
                                                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                        <option value="Argentina">Argentina</option>
                                                                        <option value="Armenia">Armenia</option>
                                                                        <option value="Aruba">Aruba</option>
                                                                        <option value="Australia">Australia</option>
                                                                        <option value="Austria">Austria</option>
                                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                                        <option value="Bahamas">Bahamas</option>
                                                                        <option value="Bahrain">Bahrain</option>
                                                                        <option value="Bangladesh">Bangladesh</option>
                                                                        <option value="Barbados">Barbados</option>
                                                                        <option value="Belarus">Belarus</option>
                                                                        <option value="Belgium">Belgium</option>
                                                                        <option value="Belize">Belize</option>
                                                                        <option value="Benin">Benin</option>
                                                                        <option value="Bermuda">Bermuda</option>
                                                                        <option value="Bhutan">Bhutan</option>
                                                                        <option value="Bolivia">Bolivia</option>
                                                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                        <option value="Botswana">Botswana</option>
                                                                        <option value="Bouvet Island">Bouvet Island</option>
                                                                        <option value="Brazil">Brazil</option>
                                                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                        <option value="Bulgaria">Bulgaria</option>
                                                                        <option value="Burkina Faso">Burkina Faso</option>
                                                                        <option value="Burundi">Burundi</option>
                                                                        <option value="Cambodia">Cambodia</option>
                                                                        <option value="Cameroon">Cameroon</option>
                                                                        <option value="Canada">Canada</option>
                                                                        <option value="Cape Verde">Cape Verde</option>
                                                                        <option value="Cayman Islands">Cayman Islands</option>
                                                                        <option value="Central African Republic">Central African Republic</option>
                                                                        <option value="Chad">Chad</option>
                                                                        <option value="Chile">Chile</option>
                                                                        <option value="China">China</option>
                                                                        <option value="Christmas Island">Christmas Island</option>
                                                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                                        <option value="Colombia">Colombia</option>
                                                                        <option value="Comoros">Comoros</option>
                                                                        <option value="Congo">Congo</option>
                                                                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                                                        <option value="Cook Islands">Cook Islands</option>
                                                                        <option value="Costa Rica">Costa Rica</option>
                                                                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                                        <option value="Croatia">Croatia</option>
                                                                        <option value="Cuba">Cuba</option>
                                                                        <option value="Cyprus">Cyprus</option>
                                                                        <option value="Czech Republic">Czech Republic</option>
                                                                        <option value="Denmark">Denmark</option>
                                                                        <option value="Djibouti">Djibouti</option>
                                                                        <option value="Dominica">Dominica</option>
                                                                        <option value="Dominican Republic">Dominican Republic</option>
                                                                        <option value="Ecuador">Ecuador</option>
                                                                        <option value="Egypt">Egypt</option>
                                                                        <option value="El Salvador">El Salvador</option>
                                                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                        <option value="Eritrea">Eritrea</option>
                                                                        <option value="Estonia">Estonia</option>
                                                                        <option value="Ethiopia">Ethiopia</option>
                                                                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                                                        <option value="Faroe Islands">Faroe Islands</option>
                                                                        <option value="Fiji">Fiji</option>
                                                                        <option value="Finland">Finland</option>
                                                                        <option value="France">France</option>
                                                                        <option value="French Guiana">French Guiana</option>
                                                                        <option value="French Polynesia">French Polynesia</option>
                                                                        <option value="French Southern Territories">French Southern Territories</option>
                                                                        <option value="Gabon">Gabon</option>
                                                                        <option value="Gambia">Gambia</option>
                                                                        <option value="Georgia">Georgia</option>
                                                                        <option value="Germany">Germany</option>
                                                                        <option value="Ghana">Ghana</option>
                                                                        <option value="Gibraltar">Gibraltar</option>
                                                                        <option value="Greece">Greece</option>
                                                                        <option value="Greenland">Greenland</option>
                                                                        <option value="Grenada">Grenada</option>
                                                                        <option value="Guadeloupe">Guadeloupe</option>
                                                                        <option value="Guam">Guam</option>
                                                                        <option value="Guatemala">Guatemala</option>
                                                                        <option value="Guernsey">Guernsey</option>
                                                                        <option value="Guinea">Guinea</option>
                                                                        <option value="Guinea-bissau">Guinea-bissau</option>
                                                                        <option value="Guyana">Guyana</option>
                                                                        <option value="Haiti">Haiti</option>
                                                                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                                                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                                                        <option value="Honduras">Honduras</option>
                                                                        <option value="Hong Kong">Hong Kong</option>
                                                                        <option value="Hungary">Hungary</option>
                                                                        <option value="Iceland">Iceland</option>
                                                                        <option value="India">India</option>
                                                                        <option value="Indonesia">Indonesia</option>
                                                                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                                                        <option value="Iraq">Iraq</option>
                                                                        <option value="Ireland">Ireland</option>
                                                                        <option value="Isle of Man">Isle of Man</option>
                                                                        <option value="Israel">Israel</option>
                                                                        <option value="Italy">Italy</option>
                                                                        <option value="Jamaica">Jamaica</option>
                                                                        <option value="Japan">Japan</option>
                                                                        <option value="Jersey">Jersey</option>
                                                                        <option value="Jordan">Jordan</option>
                                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                                        <option value="Kenya">Kenya</option>
                                                                        <option value="Kiribati">Kiribati</option>
                                                                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                                                        <option value="Korea, Republic of">Korea, Republic of</option>
                                                                        <option value="Kuwait">Kuwait</option>
                                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                                                        <option value="Latvia">Latvia</option>
                                                                        <option value="Lebanon">Lebanon</option>
                                                                        <option value="Lesotho">Lesotho</option>
                                                                        <option value="Liberia">Liberia</option>
                                                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                                        <option value="Lithuania">Lithuania</option>
                                                                        <option value="Luxembourg">Luxembourg</option>
                                                                        <option value="Macao">Macao</option>
                                                                        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                                                        <option value="Madagascar">Madagascar</option>
                                                                        <option value="Malawi">Malawi</option>
                                                                        <option value="Malaysia">Malaysia</option>
                                                                        <option value="Maldives">Maldives</option>
                                                                        <option value="Mali">Mali</option>
                                                                        <option value="Malta">Malta</option>
                                                                        <option value="Marshall Islands">Marshall Islands</option>
                                                                        <option value="Martinique">Martinique</option>
                                                                        <option value="Mauritania">Mauritania</option>
                                                                        <option value="Mauritius">Mauritius</option>
                                                                        <option value="Mayotte">Mayotte</option>
                                                                        <option value="Mexico">Mexico</option>
                                                                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                                                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                                        <option value="Monaco">Monaco</option>
                                                                        <option value="Mongolia">Mongolia</option>
                                                                        <option value="Montenegro">Montenegro</option>
                                                                        <option value="Montserrat">Montserrat</option>
                                                                        <option value="Morocco">Morocco</option>
                                                                        <option value="Mozambique">Mozambique</option>
                                                                        <option value="Myanmar">Myanmar</option>
                                                                        <option value="Namibia">Namibia</option>
                                                                        <option value="Nauru">Nauru</option>
                                                                        <option value="Nepal">Nepal</option>
                                                                        <option value="Netherlands">Netherlands</option>
                                                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                                        <option value="New Caledonia">New Caledonia</option>
                                                                        <option value="New Zealand">New Zealand</option>
                                                                        <option value="Nicaragua">Nicaragua</option>
                                                                        <option value="Niger">Niger</option>
                                                                        <option value="Nigeria">Nigeria</option>
                                                                        <option value="Niue">Niue</option>
                                                                        <option value="Norfolk Island">Norfolk Island</option>
                                                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                                        <option value="Norway">Norway</option>
                                                                        <option value="Oman">Oman</option>
                                                                        <option value="Pakistan">Pakistan</option>
                                                                        <option value="Palau">Palau</option>
                                                                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                                                        <option value="Panama">Panama</option>
                                                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                                                        <option value="Paraguay">Paraguay</option>
                                                                        <option value="Peru">Peru</option>
                                                                        <option value="Philippines">Philippines</option>
                                                                        <option value="Pitcairn">Pitcairn</option>
                                                                        <option value="Poland">Poland</option>
                                                                        <option value="Portugal">Portugal</option>
                                                                        <option value="Puerto Rico">Puerto Rico</option>
                                                                        <option value="Qatar">Qatar</option>
                                                                        <option value="Reunion">Reunion</option>
                                                                        <option value="Romania">Romania</option>
                                                                        <option value="Russian Federation">Russian Federation</option>
                                                                        <option value="Rwanda">Rwanda</option>
                                                                        <option value="Saint Helena">Saint Helena</option>
                                                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                                        <option value="Saint Lucia">Saint Lucia</option>
                                                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                                                        <option value="Samoa">Samoa</option>
                                                                        <option value="San Marino">San Marino</option>
                                                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                                                        <option value="Senegal">Senegal</option>
                                                                        <option value="Serbia">Serbia</option>
                                                                        <option value="Seychelles">Seychelles</option>
                                                                        <option value="Sierra Leone">Sierra Leone</option>
                                                                        <option value="Singapore">Singapore</option>
                                                                        <option value="Slovakia">Slovakia</option>
                                                                        <option value="Slovenia">Slovenia</option>
                                                                        <option value="Solomon Islands">Solomon Islands</option>
                                                                        <option value="Somalia">Somalia</option>
                                                                        <option value="South Africa">South Africa</option>
                                                                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                                                        <option value="Spain">Spain</option>
                                                                        <option value="Sri Lanka">Sri Lanka</option>
                                                                        <option value="Sudan">Sudan</option>
                                                                        <option value="Suriname">Suriname</option>
                                                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                                        <option value="Swaziland">Swaziland</option>
                                                                        <option value="Sweden">Sweden</option>
                                                                        <option value="Switzerland">Switzerland</option>
                                                                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                                        <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                                                        <option value="Tajikistan">Tajikistan</option>
                                                                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                                                        <option value="Thailand">Thailand</option>
                                                                        <option value="Timor-leste">Timor-leste</option>
                                                                        <option value="Togo">Togo</option>
                                                                        <option value="Tokelau">Tokelau</option>
                                                                        <option value="Tonga">Tonga</option>
                                                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                                        <option value="Tunisia">Tunisia</option>
                                                                        <option value="Turkey">Turkey</option>
                                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                                        <option value="Tuvalu">Tuvalu</option>
                                                                        <option value="Uganda">Uganda</option>
                                                                        <option value="Ukraine">Ukraine</option>
                                                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                                                        <option value="United Kingdom">United Kingdom</option>
                                                                        <option value="United States">United States</option>
                                                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                                        <option value="Uruguay">Uruguay</option>
                                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                                        <option value="Vanuatu">Vanuatu</option>
                                                                        <option value="Venezuela">Venezuela</option>
                                                                        <option value="Viet Nam">Viet Nam</option>
                                                                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                                        <option value="Western Sahara">Western Sahara</option>
                                                                        <option value="Yemen">Yemen</option>
                                                                        <option value="Zambia">Zambia</option>
                                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col col-lg-12 col-md-12 col-sm-12 colc pm-fn">
                                                                    <div className="">
                                                                        <p className="form-label oss-16 black">First Name<sup><span className="redish">*</span></sup></p>
                                                                        <label className="container" htmlFor="flexRadioDefault1"><img src="./assets/website/images/cards.png" className="img-fluid" alt="Responsive image" />
                                                                            <input type="radio" defaultChecked="checked" name="radio" id="flexRadioDefault1" />
                                                                            <span className="checkmark"></span>
                                                                        </label>
                                                                        <label className="container" htmlFor="flexRadioDefault2"><img src="./assets/website/images/paypal.png" className="img-fluid" alt="Responsive image" />
                                                                            <input type="radio" name="radio" id="flexRadioDefault2" />
                                                                            <span className="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col col-lg-12 col-md-12 col-sm-12 colc card-main">
                                                                    <div className="">
                                                                        <label htmlFor="cardholdername" className="form-label oss-16 black">Carholder’s Name<sup><span className="redish">*</span></sup></label>
                                                                        <input type="text" className="form-control oss-13 darkgrey" id="cardholdername" />
                                                                    </div>
                                                                    <div className="">
                                                                        <label htmlFor="cardholdenumber" className="form-label oss-16 black">Card Number<sup><span className="redish">*</span></sup></label>
                                                                        <input type="text" className="form-control oss-13 darkgrey" id="cardholdenumber" />
                                                                    </div>
                                                                </div>
                                                                <div className="col col-lg-12 col-md-12 col-sm-12 colc ex-secure">
                                                                    <ul>
                                                                        <li className="left">
                                                                            <div className="">
                                                                                <label htmlFor="ex-date" className="form-label oss-16 black">Expiry Date<sup><span className="redish">*</span></sup></label>
                                                                                <input type="text" className="form-control oss-13 darkgrey" id="ex-date" required />
                                                                            </div>
                                                                        </li>
                                                                        <li className="right">
                                                                            <div className="">
                                                                                <label htmlFor="secure-code" className="form-label oss-16 black">Security Code<sup><span className="redish">*</span></sup><span className="icon-Question-Mark darkgrey" data-toggle="tooltip" data-placement="top" title="CVV is the last three digit on
the back of your credit card."></span></label>
                                                                                <input type="" className="form-control oss-13 darkgrey" id="secure-code" required />
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="row pay-m-3">
                                                                <div className="col-12 ">
                                                                    <div className="use-bkup">
                                                                        <input type="checkbox" className="" id="use-bkup" autoComplete="off" />
                                                                        <label htmlFor="use-bkup" className="osr-11 darkgrey">Use as backup payment method for this account</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="use-bkup-btn">
                                                                        <button className="btn btn-primary turq-btn oss-13 white zandgar__next" data-next>Continue</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="confr" data-step="Confirmation">
                                                            <div className="row confr-m-1">
                                                                <div className="col col-lg-6 col-md-6 col-sm-6 coll">
                                                                    <h1 className="osb-22 black">Payment Method</h1>
                                                                </div>
                                                                <div className="col col-lg-6 col-md-6 col-sm-6 colr"></div>
                                                            </div>
                                                            <div className="row confr-m-2">
                                                                <div className="col col-lg-12 col-md-12 col-sm-12 coll">
                                                                    <p><span className="card-img"><img src="./assets/website/images/MasterCard.png" className="img-fluid" alt="Responsive image" /></span>
                                                                        <span className="card-text oss-16 black">Ending with 0467</span></p>
                                                                </div>

                                                                <div className="col col-lg-6 col-md-6 col-sm-6 coll">
                                                                    <div className="">
                                                                        <label htmlFor="secure-code" className="form-label oss-16 black">Security Code<sup><span className="redish">*</span></sup><span className="icon-Question-Mark darkgrey " style={{ marginLeft: '10px' }} data-toggle="tooltip" data-placement="top" title="CVV is the last three digit on
													the back of your credit card."></span></label>
                                                                        <input type="" className="form-control oss-13 darkgrey" id="secure-step" required />
                                                                    </div>

                                                                </div>

                                                                <div className="col col-lg-6 col-md-6 col-sm-6 coll">

                                                                </div>
                                                                <div className="col col-lg-12 col-md-12 col-sm-12 colc add-pay">
                                                                    <button className="btn btn-primary oss-16 black">+ Add Payment</button>
                                                                </div>
                                                            </div>
                                                            <div className="row confr-m-3">
                                                                <div className="use-submit-btn">
                                                                    <button className="btn btn-primary turq-btn oss-13 white">Submit</button>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /checkout-account-panel---------------------------------->	 */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
