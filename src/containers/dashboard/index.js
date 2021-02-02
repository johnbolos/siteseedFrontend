import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import "./index.scss"
import Request from '../../request'
import { showToast } from "../../components/utils"
import moment from "moment"
import { setTokenInfo, setUser } from "../../reducers/actions/userActions"
import { getPushPathWrapper } from "../../routes"

class Dashboard extends React.Component {
    state = {
        data: null,
        updatesFilter: 'all'
    }
    scriptArray = [
        {
            src: "./assets/website/dashboard/js/jquery.min.js"
        },
        {
            src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js",
            // integrity: "sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU",
            crossorigin: "anonymous"
        },
        {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js",
            // integrity: "sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj",
            crossorigin: "anonymous"
        },
        {
            src: './assets/website/dashboard/js/jquery-ui.js'
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
              } );`
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
            href: "./assets/website/dashboard/css/jquery-ui.css"
        },
        {
            rel: "stylesheet",
            href: "./assets/website/dashboard/css/style.css"
        },
    ]
    componentDidMount() {
        this.loadScriptNStyle()
        this.apiRequest()
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
    apiRequest = async () => {
        let { currentUser, tokenInfo } = this.props
        if (!localStorage.getItem('access_token')) {
            return
        }
        this.setState({ loading: true })
        const apiRequest = await Request.dashboard()
        console.log(apiRequest, 'sss.p')
        this.setState({ loading: false })
        if (apiRequest.messageType && apiRequest.messageType == 'error') {
            showToast({ type: 'error', message: 'Unable to fetch data, Try Relogging' })
            return
        }
        this.setState({ data: apiRequest.data }, () => {
            this.createUpdatesContent()
        })
    }

    logout = () => {
        const {dispatch} = this.props
        dispatch(setUser(null))
        dispatch(setTokenInfo({}))
        localStorage.removeItem('access_token')
        // go to dashboard
        this.goto('loginPage')
    }
    goto = (key) => {   // push to the specifies location/key
        const { dispatch } = this.props
        dispatch(getPushPathWrapper(key))
    }
    componentWillUnmount() {
        $('#ss-styles-load').remove()
        $('#ss-script-load').remove()
    }

    renderUserSites = (sites) => {
        if (!sites || _.isEmpty(sites)) {
            return (<>
                <div className="col-sm-12 col-md-3 col-lg-3 col1">
                    <div className="col1-inner">
                        <div className="restro-bg"><img src="./assets/website/dashboard/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                            <div className="shadow-up">
                                <a className="nav-link dropdown-toggle right-top white osr-13 cs-shadow-anchor" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item osr-13 darkgrey active"><span className="icon-Edit darkgrey"></span>Edit Site</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Eye darkgrey"></span>View Live Site</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey" data-bs-toggle="modal" data-bs-target="#duplicate1"><span className="icon-Duplicate darkgrey"></span>Duplicate Site</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Add-User darkgrey"></span>Invite Contributor</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Setting darkgrey"></span>Setting</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Delete darkgrey"></span>Delete</a></li>
                                </ul>
                                <span className="oss-16 white"><a>Edit Now</a></span>
                            </div>


                        </div>
                        <div className="col1-content">
                            <h3 className="oss-13 black">Digital Conference Landing Page</h3>
                            <ul>
                                <li className="osr-11 darkgrey li-left">Domain: Not connected</li>
                                <li className="li-right"><a className="oss-9 turq-bg white">Published</a></li>
                            </ul>
                            <p><a className="darkgrey osr-11">Connect Domain</a></p>
                            <span className="darkgrey osr-11">Export Site</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-3 col-lg-3 col1">
                    <div className="col1-inner">
                        <div className="restro-bg"><img src="./assets/website/dashboard/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                            <div className="shadow-up">
                                <a className="nav-link dropdown-toggle right-top white osr-13 cs-shadow-anchor" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item osr-13 darkgrey active"><span className="icon-Edit darkgrey"></span>Edit Site</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Eye darkgrey"></span>View Live Site</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey" data-bs-toggle="modal" data-bs-target="#duplicate1"><span className="icon-Duplicate darkgrey"></span>Duplicate Site</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Add-User darkgrey"></span>Invite Contributor</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Setting darkgrey"></span>Setting</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Delete darkgrey"></span>Delete</a></li>
                                </ul>
                                <span className="oss-16 white"><a>Edit Now</a></span>
                            </div>


                        </div>
                        <div className="col1-content">
                            <h3 className="oss-13 black">Digital Conference Landing Page</h3>
                            <ul>
                                <li className="osr-11 darkgrey li-left">Domain: Not connected</li>
                                <li className="li-right"><a className="oss-9 redish-btn-bg white">Not Published</a></li>
                            </ul>
                            <p><a className="darkgrey osr-11">Connect Domain</a></p>
                            <span className="darkgrey osr-11">Export Site</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-3 col-lg-3 col1">
                    <div className="col1-inner">
                        <div className="restro-bg"><img src="./assets/website/dashboard/images/mysite-img1.jpg" className="img-fluid " alt="Responsive image" />
                            <div className="shadow-up">
                                <a className="nav-link dropdown-toggle right-top white osr-13 cs-shadow-anchor" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item osr-13 darkgrey active"><span className="icon-Edit darkgrey"></span>Edit Site</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Eye darkgrey"></span>View Live Site</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey" data-bs-toggle="modal" data-bs-target="#duplicate1"><span className="icon-Duplicate darkgrey"></span>Duplicate Site</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Add-User darkgrey"></span>Invite Contributor</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Setting darkgrey"></span>Setting</a></li>
                                    <li><a className="dropdown-item osr-13 darkgrey"><span className="icon-Delete darkgrey"></span>Delete</a></li>
                                </ul>
                                <span className="oss-16 white"><a>Edit Now</a></span>
                            </div>


                        </div>
                        <div className="col1-content">
                            <h3 className="oss-13 black">Digital Conference Landing Page</h3>
                            <ul>
                                <li className="osr-11 darkgrey li-left">Domain: Not connected</li>
                                <li className="li-right"><a className="oss-9 redish-btn-bg white">Not Published</a></li>
                            </ul>
                            <p><a className="darkgrey osr-11">Connect Domain</a></p>
                            <span className="darkgrey osr-11">Export Site</span>
                        </div>
                    </div>
                </div>
            </>)
        }
    }
    createUpdatesContent = () => {
        const { data, filter } = this.state
        if (!data) {
            return
        }
        const { future_updates } = data
        let resp = null
        if (future_updates) {
            resp = (
                <li>
                    <h3 className="oss-13 black">{future_updates.title}</h3>
                    <p className="osr-11 darkgrey">{future_updates.description}</p>
                    <p className="osr-9 black"><span className="cmnt-date">{moment(future_updates.release_date, 'yyyy-mm-dd').format("MMM DD, YYYY")}</span> | <span className="cmnt-feat"><a href="" className="black">{future_updates.update_type}</a></span></p>
                </li>
            )
        }
        this.setState({ updatesContent: resp })
    }
    set = (key, value) => {
        this.setState({ [key]: value })
    }
    render() {
        const { dispatch, currentUser } = this.props
        const { data, updatesContent, updatesFilter } = this.state
        let active_user_plan = null
        if (data) {
            active_user_plan = data.active_user_plan
        }
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
                                                    <a className="navbar-brand"><img src="./assets/website/dashboard/images/Logo.svg" className="img-fluid" alt="Responsive image" /></a>
                                                    {/* <!--<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                  <span className="navbar-toggler-icon"></span>
                                                </button>
                                                <div className="collapse navbar-collapse" id="navbarSupportedContent" style="display:none;">
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
                                                            {/* <img src="./assets/website/dashboard/images/Greg-jacoby.png" className="img-fluid" alt="Responsive image" /> */}
                                                            {
                                                                currentUser.profilePic ? (
                                                                    <img src={currentUser.profilePic} className="img-fluid" alt="Responsive image" />
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
                                                                {currentUser.firstName} {currentUser.lastName && currentUser.lastName}
                                                                {/* Greg Jacoby */}
                                                            </a>
                                                            <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                                <li><a className="dropdown-item osr-13 darkgrey" href="http://159.65.145.117:8090/SiteSeed/Siteseed-client-panel/Admin-SiteSeed/Admin-Control/profile.html">Profile</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey">Account {'&'} Security</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey">Notifications</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey">Language</a></li>
                                                                <li><a className="dropdown-item osr-13 darkgrey">Help Center</a></li>
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
                                        <div className="col-md-6 col-lg-6 col1">
                                            <ul>
                                                <li><a className="osb-16 turq">Dashboard</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col2">
                                            <ul>
                                                <li className="tw-main"><span className="tw-main-inner"><span className="tw-t oss-13 turq"><span className="num-chng">{data && (data.total_user_sites || 0)}</span>/<span className="total-num">{data && (data.total_sites || 0)}</span> left</span> <br /> <span className="tw-b osr-11 darkgrey">Total Website</span></span></li>
                                                <li className="ec-main"><span className="ec-main-inner"><span className="ec-t oss-13 turq"><span className="num-chng">{data && (data.total_user_exports || 0)}</span><span className="total-num">/{data && (data.export_credits || 0)}</span> left</span> <br /> <span className="ec-b osr-11 darkgrey">Export Credits</span></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Dashboard-Export----------------------------------> */}


                        {/* <!---------------------------------- Dashboard-Data----------------------------------> */}
                        <section className="dashboard-data">
                            <div className="dashboard-data-inner main-inner">
                                <div className="container">
                                    <div className="row cs-dashdata1">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col1">
                                            <h1 className="osb-22 black">
                                                Hey there, <span>{currentUser.firstName}</span>!
                                                {/* Hey there, <span>Greg</span>! */}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="row cs-dashdata2 black-bg">
                                        <div className="col-sm-12 col-md-7 col-lg-7 col1">
                                            <h2 className="oss-22 white">
                                                {/* <!--<img src="./assets/website/dashboard/images/wifi-sign.png" className="img-fluid" alt="Responsive image" />--> */}
                                                <span className="icon-Signal turq"></span><span className="how">How can we help you today?</span>
                                            </h2>
                                            <div className="our-team">
                                                <p className="white osr-16"><span className="osb-16">Our team can help</span>. We offer everything to help you customize an <br /> advanced site, get more leads, and promote your business.</p>
                                                <div className="main-btn"><button type="button" className="btn btn-outline-primary oss-13 white">Learn more</button></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-5 col-lg-5 col2">
                                            <div className="container">
                                                <form className="searchbar">
                                                    <input id="tags" type="search" placeholder="Search something..." name="search" className="searchbar-input"
                                                        required /> <input type="submit" className="searchbar-submit" value="GO" />
                                                    <span className="searchbar-icon"><span className="icon-Search"></span></span>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Dashboard-Data----------------------------------> */}


                        {/* <!---------------------------------- My-sites----------------------------------> */}
                        <section className="my-sites">
                            <div className="my-sites-inner main-inner">
                                <div className="container">
                                    <div className="row cs-my-sites1 white-bg">
                                        <div className="col-sm-12 col-md-7 col-lg-7 col1">
                                            <h2>
                                                <span className="icon-Layout orange g-lay"></span><span className="my oss-16 black">My Sites</span>
                                            </h2>
                                            <p className="osr-11 darkgrey">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed vel.</p>
                                        </div>
                                        <div className="col-sm-12 col-md-5 col-lg-5 col2">
                                            <div className="c-new-btn"><button type="button" className="btn btn-outline-primary oss-13 turq"> + Create a New Site</button></div>
                                        </div>
                                    </div>
                                    <div className="row cs-my-sites2 white-bg">
                                        {
                                            data && this.renderUserSites(data.user_sites)
                                        }
                                        {
                                            data && data.latest_offer && (
                                                <div className="col-sm-12 col-md-3 col-lg-3 col1 col4">
                                                    <div className="col1-inner light-orange-bg">
                                                        <img src="./assets/website/dashboard/images/hot-sale.png" className="img-fluid" alt="Responsive image" />
                                                        <div className="col1-content">
                                                            <h2 className="oss-16 white">Latest Offer</h2>
                                                            <div className="fify-main">
                                                                <p className="osb-42 white fifty">{data.latest_offer.title}</p>
                                                                <p className="osb-42 white fifty">{data.latest_offer.description}</p>
                                                                {/* <p className="osr-13 white">Export Credits Just <span className="oss-16">$7</span> <br /> for each export</p> */}
                                                                <p className="osr-13 white">{data.latest_offer.short_description}</p>
                                                            </div>
                                                            <p className="oss-13 fifty-buy"><a className="oss-13 white">Buy now <span className="icon-right-arrow-6-1 white"></span></a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /My-sites----------------------------------> */}


                        {/* <!---------------------------------- update-account----------------------------------> */}
                        <section className="update-account">
                            <div className="update-account-inner main-inner">
                                <div className="container">
                                    <div className="row cs-update-account1 ">
                                        <div className="col-sm-12 col-md-6 col-lg-6 col1 white-bg">
                                            <h2>
                                                <span className="icon-Signal yellow y-lay"></span><span className="my oss-16 black">Updates {'&'} Releases (Roadmap)</span>
                                                <a className="expnd" href=""><span className="icon-Expand darkgrey"></span></a>
                                            </h2>
                                            <p className="osr-11 darkgrey">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed vel.</p>
                                            <ul>
                                                <li className="update oss-13 black">All Updates</li>
                                                <li className="featured oss-13 darkgrey">Filtered by:
                                                    <a className="nav-link dropdown-toggle right-top black osr-13" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-target="li.featured ul" aria-expanded="false">
                                                        {_.startCase(updatesFilter)}
                                                    </a>
                                                    <ul className="dropdown-menu animate slideIn" id={'filter'} aria-labelledby="navbarDropdown">
                                                        <li><a className={`dropdown-item osr-13 darkgrey ${updatesFilter == 'all' && 'active'}`} onClick={() => { this.set('updatesFilter', 'all') }}>All</a></li>
                                                        <li><a className={`dropdown-item osr-13 darkgrey ${updatesFilter == 'date' && 'active'}`} onClick={() => { this.set('updatesFilter', 'date') }}>Date</a></li>
                                                        <li><a className={`dropdown-item osr-13 darkgrey ${updatesFilter == 'month' && 'active'}`} onClick={() => { this.set('updatesFilter', 'month') }}>Month</a></li>
                                                    </ul>
                                                </li>
                                            </ul>

                                            <ul className="cs-update-account-data">
                                                {
                                                    data && updatesContent
                                                }
                                                {/* <li>
                                                    <h3 className="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p className="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p className="osr-9 black"><span className="cmnt-date">Jan 5, 2021</span> | <span className="cmnt-feat"><a href="" className="black">New Features</a></span></p>
                                                </li>
                                                <li>
                                                    <h3 className="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p className="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p className="osr-9 black"><span className="cmnt-date">Jan 5, 2021</span> | <span className="cmnt-feat"><a href="" className="black">New Features</a></span></p>
                                                </li>
                                                <li>
                                                    <h3 className="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p className="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p className="osr-9 black"><span className="cmnt-date">Jan 5, 2021</span> | <span className="cmnt-feat"><a href="" className="black">New Features</a></span></p>
                                                </li>
                                                <li>
                                                    <h3 className="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p className="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p className="osr-9 black"><span className="cmnt-date">Jan 5, 2021</span> | <span className="cmnt-feat"><a href="" className="black">New Features</a></span></p>
                                                </li>
                                                <li>
                                                    <h3 className="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p className="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p className="osr-9 black"><span className="cmnt-date">Jan 5, 2021</span> | <span className="cmnt-feat"><a href="" className="black">New Features</a></span></p>
                                                </li>
                                                <li>
                                                    <h3 className="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p className="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p className="osr-9 black"><span className="cmnt-date">Jan 5, 2021</span> | <span className="cmnt-feat"><a href="" className="black">New Features</a></span></p>
                                                </li> */}


                                            </ul>

                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col1 col2 white-bg">
                                            <h2>
                                                <span className="icon-Bot light-orange y-lay"></span><span className="my oss-16 black">Account Plan {'&'} Subscription</span>
                                            </h2>
                                            <p className="osr-11 darkgrey">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed vel.</p>

                                            <div className="plans-data">
                                                {
                                                    data && !_.isEmpty(data.upgrade_plan) && (<>
                                                        <button className="accordion"><h3 className="oss-13 black">Upgrade your plan</h3></button>
                                                        <div className="panel">
                                                            <div className="row">
                                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                                    <h2 className="oss-16 black">Enjoy All of Our <br /> Incredible Benefits</h2>
                                                                    <p className="osr-11 darkgrey change">You can change or cancel your plan at any <br /> time in your account setting.</p>
                                                                    <p className="oss-13 upgrade"><a className="oss-13 turq">Upgrade your plan <span className="icon-right-arrow-6-1 turq"></span></a></p>
                                                                </div>
                                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                                    <h2 className="oss-13 black">What's included?</h2>
                                                                    <ul className="tik-div">
                                                                        <li className="osr-11 darkgrey"><span className=""></span>All functionality</li>
                                                                        <li className="osr-11 darkgrey"><span className=""></span>All free templates</li>
                                                                        <li className="osr-11 darkgrey"><span className=""></span>Export up to 5 sites per <br /> month (WordPress themes - <br /> no Shopify)  </li>
                                                                        <li className="osr-11 darkgrey"><span className=""></span>1 hostable site and 1 free domain </li>
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </>)
                                                }
                                                <button className="accordion"><h3 className="oss-13 black">Your current plan</h3></button>
                                                <div className="panel">
                                                    <div className="row current-data-main">
                                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                                            {
                                                                data && (
                                                                    <ul className="current-data">
                                                                        <li className="">
                                                                            <div className="left osr-11 black ">Plan Name</div>
                                                                            <div className="right oss-11 turq">{_.isEmpty(active_user_plan) ? 'Free' : active_user_plan.name}</div>
                                                                        </li>
                                                                        <li className="">
                                                                            <div className="left osr-11 black ">Status</div>
                                                                            <div className="right oss-11 turq">Active</div>
                                                                        </li>
                                                                        <li className="">
                                                                            <div className="left osr-11 black ">Price</div>
                                                                            <div className="right oss-11 turq">${_.isEmpty(active_user_plan) ? '0' : active_user_plan.price}</div>
                                                                        </li>
                                                                        <li className="">
                                                                            <div className="left osr-11 black ">Billing Period</div>
                                                                            <div className="right oss-11 turq">
                                                                                {
                                                                                    _.isEmpty(active_user_plan) ?
                                                                                        '-'
                                                                                        :
                                                                                        (
                                                                                            moment(active_user_plan.billing_period, 'yyyy-mm-dd').isValid() ?
                                                                                                moment(active_user_plan.billing_period, 'yyyy-mm-dd').format("MMM DD, YYYY")
                                                                                                :
                                                                                                (active_user_plan.billing_period.trim() == '') ?
                                                                                                    '-'
                                                                                                    :
                                                                                                    active_user_plan.billing_period
                                                                                        )
                                                                                }
                                                                            </div>
                                                                        </li>
                                                                        <li className="">
                                                                            <div className="left osr-11 black ">Expired on</div>
                                                                            <div className="right oss-11 turq">{_.isEmpty(active_user_plan) ? 'Never' : (moment(active_user_plan.expires_on, 'yyyy-mm-dd').isValid() ? moment(active_user_plan.expires_on, 'yyyy-mm-dd').format("MMM DD, YYYY") : active_user_plan.expires_on)}</div>
                                                                        </li>
                                                                    </ul>
                                                                )
                                                            }
                                                            <p className="oss-13 see-detail"><a className="oss-13 turq">See more Details <span className="icon-right-arrow-6-1 turq"></span></a></p>
                                                        </div>
                                                    </div>

                                                </div>



                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /update-account----------------------------------> */}



                        {/* <!---------------------------------- temporary-popup code----------------------------------> */}
                        <ul className="temporary">
                            <li><a data-bs-toggle="modal" data-bs-target="#duplicate1">duplicate</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#rename1" >rename</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#export-zip">export-prepare</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#export-download">export-download</a></li>
                        </ul>
                        {/* <!---------------------------------- /temporary-popup code----------------------------------> */}




                        {/* <!----------------------------------------------------popup---------------------------------------------------->  */}



                        {/* <!---------------------------------- Duplicate Site---------------------------------->			 */}
                        <div className="modal fade duplicate" id="duplicate1" tabIndex="-1" role="dialog" aria-labelledby="duplicate1" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 className="osb-22 black">Duplicate Site</h1>
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
                                                                <label htmlFor="s-name" className="form-label oss-16 black">Site Name</label>
                                                                <input type="text" className="form-control osr-13 darkgrey" id="s-name" placeholder="Mysite Copy" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </form>
                                                <p className="osr-13 darkgrey cs-ur-data">Your data, styles, pages, and images will be copied to a new site. You can edit the subdomain and the name of your site after it has been created.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary oss-13 white green-btn">Duplicate Site</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Duplicate Site----------------------------------> */}


                        {/* <!---------------------------------- Rename Site---------------------------------->			  */}
                        <div className="modal fade rename" id="rename1" tabIndex="-1" role="dialog" aria-labelledby="rename1" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 className="osb-22 black">Rename Site</h1>
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
                                                                <label htmlFor="re-name" className="form-label oss-16 black">Site Name</label>
                                                                <input type="text" className="form-control osr-13 darkgrey" id="re-name" placeholder="Mysite Copy" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </form>
                                                <p className="osr-13 darkgrey cs-ur-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus, velit ac congue interdum, augue neque gravida sem, sed fermentum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary oss-13 white green-btn">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Rename Site----------------------------------> */}


                        {/* <!---------------------------------- Export-prepare-zip---------------------------------->			  */}
                        <div className="modal fade export" id="export-zip" tabIndex="-1" role="dialog" aria-labelledby="export-zip" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 className="osb-22 black">Export theme</h1>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="row-inner">
                                                <div className="col-lg-8 col-md-8 col-sm-12 coll">
                                                    <div className="left">
                                                        <img id="myImg" src="./assets/website/dashboard/images/SpaWellness.jpg" alt="your image" />
                                                    </div>
                                                    <div className="right">
                                                        <h2 className="oss-16 black">Template : Spa {'&'} Wellness</h2>
                                                        <p className="osr-13 darkgrey">Regular License</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12 colr">

                                                    <a className="nav-link dropdown-toggle right-top darkgrey osr-13" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Choose Platform
                                                                </a>
                                                    <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                        <li><a className="dropdown-item osr-13 darkgrey active">Wordpress</a></li>
                                                        <li><a className="dropdown-item osr-13 darkgrey">Shopify</a></li>
                                                        <li><a className="dropdown-item osr-13 darkgrey">Html{'&'}Css </a></li>
                                                        <li><a className="dropdown-item osr-13 darkgrey">Wordpress</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary oss-13 white green-btn">Prepare .Zip File</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Export-prepare-zip----------------------------------> */}


                        {/* <!---------------------------------- Export-download-zip---------------------------------->			  */}
                        <div className="modal fade export export-download" id="export-download" tabIndex="-1" role="dialog" aria-labelledby="export-download" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 className="osb-22 black">Export theme</h1>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="row-inner">
                                                <div className="col-lg-8 col-md-8 col-sm-12 coll">
                                                    <div className="left">
                                                        <img id="myImg" src="./assets/website/dashboard/images/SpaWellness.jpg" alt="your image" />
                                                    </div>
                                                    <div className="right">
                                                        <h2 className="oss-16 black">Template : Spa {'&'} Wellness</h2>
                                                        <p className="osr-13 darkgrey">Regular License</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12 colr">

                                                    <a className="nav-link dropdown-toggle right-top darkgrey osr-13 disabled " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Choose Platform
                                                    </a>
                                                    <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                        <li><a className="dropdown-item osr-13 darkgrey active">Wordpress</a></li>
                                                        <li><a className="dropdown-item osr-13 darkgrey">Shopify</a></li>
                                                        <li><a className="dropdown-item osr-13 darkgrey">Html{'&'}Css </a></li>
                                                        <li><a className="dropdown-item osr-13 darkgrey">Wordpress</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary oss-13 white green-btn">Download Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Export-download-zip----------------------------------> */}



                        {/* <!---------------------------------------------------- /popup----------------------------------------------------> */}

                    </div>
                </div>

                {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script> */}

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
