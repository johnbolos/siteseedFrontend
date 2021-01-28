import React from "react"
import _ from 'lodash'
import $ from 'jquery'
import { connect } from "react-redux"

import "./index.scss"
import Request from '../../request'

class Dashboard extends React.Component {
    state = {}
    scriptArray = [
        {
            src: "./assets/website/js/jquery.min.js"
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
            src: './assets/website/js/jquery-ui.js'
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
            href: "./assets/website/css/jquery-ui.css"
        },
        {
            rel: "stylesheet",
            href: "./assets/website/css/style.css"
        },
    ]
    componentDidMount() {
        let { currentUser, dispatch } = this.props
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
    componentWillUnmount() {
        $('#ss-styles-load').remove()
        $('#ss-script-load').remove()
    }
    render() {
        const { dispatch } = this.props
        return (
            <>
                <div class="admin-main-panel">
                    <div class="admin-main-panel-inner">

                        {/* <!----------------------------------Top-Bar----------------------------------> */}
                        <section class="topbar-main">
                            <div class="topbar-main-inner main-inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12 ">
                                            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                                                <div class="container-fluid">
                                                    <a class="navbar-brand" href="#"><img src="./assets/website/images/Logo.svg" class="img-fluid" alt="Responsive image" /></a>
                                                    {/* <!--<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                  <span class="navbar-toggler-icon"></span>
                                                </button>
                                                <div class="collapse navbar-collapse" id="navbarSupportedContent" style="display:none;">
                                                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                    <li class="nav-item">
                                                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                                                    </li>
                                                    <li class="nav-item">
                                                      <a class="nav-link" href="#">Link</a>
                                                    </li>
                                                    <li class="nav-item dropdown">
                                                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Dropdown
                                                      </a>
                                                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                                        <li><hr class="dropdown-divider"></li>
                                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                      </ul>
                                                    </li>
                                                    <li class="nav-item">
                                                      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                                    </li>
                                                  </ul>
                                                </div>--> */}
                                                    <ul class="nav cs-topright">
                                                        <li class="nav-item cs-topright-left">
                                                            <a class="nav-link left-top darkgrey osr-13" href="#">Need Support?</a>
                                                        </li>
                                                        <li class="nav-item cs-topright-right">
                                                            <img src="./assets/website/images/Greg-jacoby.png" class="img-fluid" alt="Responsive image" />
                                                            <a class="nav-link dropdown-toggle right-top black osr-13" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Greg Jacoby
                                                            </a>
                                                            <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                                <li><a class="dropdown-item osr-13 darkgrey active" href="http://159.65.145.117:8090/SiteSeed/Siteseed-client-panel/Admin-SiteSeed/Admin-Control/profile.html">Profile</a></li>
                                                                <li><a class="dropdown-item osr-13 darkgrey" href="#">Account {'&'} Security</a></li>
                                                                <li><a class="dropdown-item osr-13 darkgrey" href="#">Notifications</a></li>
                                                                <li><a class="dropdown-item osr-13 darkgrey" href="#">Language</a></li>
                                                                <li><a class="dropdown-item osr-13 darkgrey" href="#">Help Center</a></li>
                                                                <li><a class="dropdown-item osr-13 darkgrey" href="#">Log Out</a></li>
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
                        <section class="dashboard-main">
                            <div class="dashboard-main-inner main-inner">
                                <div class="container">
                                    <div class="row cs-dashboard1">
                                        <div class="col-md-6 col-lg-6 col1">
                                            <ul>
                                                <li><a class="osb-16 turq">Dashboard</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col2">
                                            <ul>
                                                <li class="tw-main"><span class="tw-main-inner"><span class="tw-t oss-13 turq"><span class="num-chng">1</span>/<span class="total-num">5</span> left</span> <br /> <span class="tw-b osr-11 darkgrey">Total Website</span></span></li>
                                                <li class="ec-main"><span class="ec-main-inner"><span class="ec-t oss-13 turq"><span class="num-chng">1</span><span class="total-num">/5</span> left</span> <br /> <span class="ec-b osr-11 darkgrey">Export Credits</span></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Dashboard-Export----------------------------------> */}


                        {/* <!---------------------------------- Dashboard-Data----------------------------------> */}
                        <section class="dashboard-data">
                            <div class="dashboard-data-inner main-inner">
                                <div class="container">
                                    <div class="row cs-dashdata1">
                                        <div class="col-sm-12 col-md-12 col-lg-12 col1">
                                            <h1 class="osb-22 black">
                                                Hey there, <span>Greg</span>!
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="row cs-dashdata2 black-bg">
                                        <div class="col-sm-12 col-md-7 col-lg-7 col1">
                                            <h2 class="oss-22 white">
                                                {/* <!--<img src="./assets/website/images/wifi-sign.png" class="img-fluid" alt="Responsive image" />--> */}
                                                <span class="icon-Signal turq"></span><span class="how">How can we help you today?</span>
                                            </h2>
                                            <div class="our-team">
                                                <p class="white osr-16"><span class="osb-16">Our team can help</span>. We offer everything to help you customize an <br /> advanced site, get more leads, and promote your business.</p>
                                                <div class="main-btn"><button type="button" class="btn btn-outline-primary oss-13 white">Learn more</button></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-5 col-lg-5 col2">
                                            <div class="container">
                                                <form class="searchbar">
                                                    <input id="tags" type="search" placeholder="Search something..." name="search" class="searchbar-input"
                                                        required /> <input type="submit" class="searchbar-submit" value="GO" />
                                                    <span class="searchbar-icon"><span class="icon-Search"></span></span>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /Dashboard-Data----------------------------------> */}


                        {/* <!---------------------------------- My-sites----------------------------------> */}
                        <section class="my-sites">
                            <div class="my-sites-inner main-inner">
                                <div class="container">
                                    <div class="row cs-my-sites1 white-bg">
                                        <div class="col-sm-12 col-md-7 col-lg-7 col1">
                                            <h2>
                                                <span class="icon-Layout orange g-lay"></span><span class="my oss-16 black">My Sites</span>
                                            </h2>
                                            <p class="osr-11 darkgrey">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed vel.</p>
                                        </div>
                                        <div class="col-sm-12 col-md-5 col-lg-5 col2">
                                            <div class="c-new-btn"><button type="button" class="btn btn-outline-primary oss-13 turq"> + Create a New Site</button></div>
                                        </div>
                                    </div>
                                    <div class="row cs-my-sites2 white-bg">
                                        <div class="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div class="col1-inner">
                                                <div class="restro-bg"><img src="./assets/website/images/mysite-img1.jpg" class="img-fluid " alt="Responsive image" />
                                                    <div class="shadow-up">
                                                        <a class="nav-link dropdown-toggle right-top white osr-13 cs-shadow-anchor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                                        <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                            <li><a class="dropdown-item osr-13 darkgrey active" href="#"><span class="icon-Edit darkgrey"></span>Edit Site</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Eye darkgrey"></span>View Live Site</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" data-bs-toggle="modal" data-bs-target="#duplicate1"><span class="icon-Duplicate darkgrey"></span>Duplicate Site</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Add-User darkgrey"></span>Invite Contributor</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Setting darkgrey"></span>Setting</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Delete darkgrey"></span>Delete</a></li>
                                                        </ul>
                                                        <span class="oss-16 white"><a href="#">Edit Now</a></span>
                                                    </div>


                                                </div>
                                                <div class="col1-content">
                                                    <h3 class="oss-13 black">Digital Conference Landing Page</h3>
                                                    <ul>
                                                        <li class="osr-11 darkgrey li-left">Domain: Not connected</li>
                                                        <li class="li-right"><a href="#" class="oss-9 turq-bg white">Published</a></li>
                                                    </ul>
                                                    <p><a href="#" class="darkgrey osr-11">Connect Domain</a></p>
                                                    <span class="darkgrey osr-11">Export Site</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div class="col1-inner">
                                                <div class="restro-bg"><img src="./assets/website/images/mysite-img1.jpg" class="img-fluid " alt="Responsive image" />
                                                    <div class="shadow-up">
                                                        <a class="nav-link dropdown-toggle right-top white osr-13 cs-shadow-anchor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                                        <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                            <li><a class="dropdown-item osr-13 darkgrey active" href="#"><span class="icon-Edit darkgrey"></span>Edit Site</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Eye darkgrey"></span>View Live Site</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" data-bs-toggle="modal" data-bs-target="#duplicate1" href="#"><span class="icon-Duplicate darkgrey"></span>Duplicate Site</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Add-User darkgrey"></span>Invite Contributor</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Setting darkgrey"></span>Setting</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Delete darkgrey"></span>Delete</a></li>
                                                        </ul>
                                                        <span class="oss-16 white"><a href="#">Edit Now</a></span>
                                                    </div>


                                                </div>
                                                <div class="col1-content">
                                                    <h3 class="oss-13 black">Digital Conference Landing Page</h3>
                                                    <ul>
                                                        <li class="osr-11 darkgrey li-left">Domain: Not connected</li>
                                                        <li class="li-right"><a href="#" class="oss-9 redish-btn-bg white">Not Published</a></li>
                                                    </ul>
                                                    <p><a href="#" class="darkgrey osr-11">Connect Domain</a></p>
                                                    <span class="darkgrey osr-11">Export Site</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-3 col-lg-3 col1">
                                            <div class="col1-inner">
                                                <div class="restro-bg"><img src="./assets/website/images/mysite-img1.jpg" class="img-fluid " alt="Responsive image" />
                                                    <div class="shadow-up">
                                                        <a class="nav-link dropdown-toggle right-top white osr-13 cs-shadow-anchor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                                        <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                            <li><a class="dropdown-item osr-13 darkgrey active" href="#"><span class="icon-Edit darkgrey"></span>Edit Site</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Eye darkgrey"></span>View Live Site</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" data-bs-toggle="modal" data-bs-target="#duplicate1" href="#"><span class="icon-Duplicate darkgrey"></span>Duplicate Site</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Add-User darkgrey"></span>Invite Contributor</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Setting darkgrey"></span>Setting</a></li>
                                                            <li><a class="dropdown-item osr-13 darkgrey" href="#"><span class="icon-Delete darkgrey"></span>Delete</a></li>
                                                        </ul>
                                                        <span class="oss-16 white"><a href="#">Edit Now</a></span>
                                                    </div>


                                                </div>
                                                <div class="col1-content">
                                                    <h3 class="oss-13 black">Digital Conference Landing Page</h3>
                                                    <ul>
                                                        <li class="osr-11 darkgrey li-left">Domain: Not connected</li>
                                                        <li class="li-right"><a href="#" class="oss-9 redish-btn-bg white">Not Published</a></li>
                                                    </ul>
                                                    <p><a href="#" class="darkgrey osr-11">Connect Domain</a></p>
                                                    <span class="darkgrey osr-11">Export Site</span>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="col-sm-12 col-md-3 col-lg-3 col1 col4">
                                            <div class="col1-inner light-orange-bg">
                                                <img src="./assets/website/images/hot-sale.png" class="img-fluid" alt="Responsive image" />
                                                <div class="col1-content">
                                                    <h2 class="oss-16 white">Latest Offer</h2>
                                                    <div class="fify-main">
                                                        <p class="osb-42 white fifty">50% OFF</p>
                                                        <p class="osr-13 white">Export Credits Just <span class="oss-16">$7</span> <br /> for each export</p>
                                                    </div>
                                                    <p class="oss-13 fifty-buy"><a href="#" class="oss-13 white">Buy now <span class="icon-right-arrow-6-1 white"></span></a></p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!---------------------------------- /My-sites----------------------------------> */}


                        {/* <!---------------------------------- update-account----------------------------------> */}
                        <section class="update-account">
                            <div class="update-account-inner main-inner">
                                <div class="container">
                                    <div class="row cs-update-account1 ">
                                        <div class="col-sm-12 col-md-6 col-lg-6 col1 white-bg">
                                            <h2>
                                                <span class="icon-Signal yellow y-lay"></span><span class="my oss-16 black">Updates {'&'} Releases (Roadmap)</span>
                                                <a class="expnd" href=""><span class="icon-Expand darkgrey"></span></a>
                                            </h2>
                                            <p class="osr-11 darkgrey">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed vel.</p>
                                            <ul>
                                                <li class="update oss-13 black">All Updates</li>
                                                <li class="featured oss-13 darkgrey">Filtered by:
                                                    <a class="nav-link dropdown-toggle right-top black osr-13" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        All
                                                            </a>
                                                    <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                        <li><a class="dropdown-item osr-13 darkgrey active" href="#">All</a></li>
                                                        <li><a class="dropdown-item osr-13 darkgrey" href="#">Date</a></li>
                                                        <li><a class="dropdown-item osr-13 darkgrey" href="#">Month</a></li>
                                                    </ul>
                                                </li>
                                            </ul>

                                            <ul class="cs-update-account-data">
                                                <li>
                                                    <h3 class="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p class="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p class="osr-9 black"><span class="cmnt-date">Jan 5, 2021</span> | <span class="cmnt-feat"><a href="" class="black">New Features</a></span></p>
                                                </li>
                                                <li>
                                                    <h3 class="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p class="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p class="osr-9 black"><span class="cmnt-date">Jan 5, 2021</span> | <span class="cmnt-feat"><a href="" class="black">New Features</a></span></p>
                                                </li>
                                                <li>
                                                    <h3 class="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p class="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p class="osr-9 black"><span class="cmnt-date">Jan 5, 2021</span> | <span class="cmnt-feat"><a href="" class="black">New Features</a></span></p>
                                                </li>
                                                <li>
                                                    <h3 class="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p class="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p class="osr-9 black"><span class="cmnt-date">Jan 5, 2021</span> | <span class="cmnt-feat"><a href="" class="black">New Features</a></span></p>
                                                </li>
                                                <li>
                                                    <h3 class="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p class="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p class="osr-9 black"><span class="cmnt-date">Jan 5, 2021</span> | <span class="cmnt-feat"><a href="" class="black">New Features</a></span></p>
                                                </li>
                                                <li>
                                                    <h3 class="oss-13 black">Increment Inventory with New Wix Stores API</h3>
                                                    <p class="osr-11 darkgrey">With the new Wix Stores incrementInventory() API, you can increment a product variant's stock in your store's inventory. Learn more</p>
                                                    <p class="osr-9 black"><span class="cmnt-date">Jan 5, 2021</span> | <span class="cmnt-feat"><a href="" class="black">New Features</a></span></p>
                                                </li>


                                            </ul>

                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6 col1 col2 white-bg">
                                            <h2>
                                                <span class="icon-Bot light-orange y-lay"></span><span class="my oss-16 black">Account Plan {'&'} Subscription</span>
                                            </h2>
                                            <p class="osr-11 darkgrey">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed vel.</p>

                                            <div class="plans-data">
                                                <button class="accordion"><h3 class="oss-13 black">Upgrade your plan</h3></button>
                                                <div class="panel">
                                                    <div class="row">
                                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                                            <h2 class="oss-16 black">Enjoy All of Our <br /> Incredible Benefits</h2>
                                                            <p class="osr-11 darkgrey change">You can change or cancel your plan at any <br /> time in your account setting.</p>
                                                            <p class="oss-13 upgrade"><a class="oss-13 turq">Upgrade your plan <span class="icon-right-arrow-6-1 turq"></span></a></p>
                                                        </div>
                                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                                            <h2 class="oss-13 black">What's included?</h2>
                                                            <ul class="tik-div">
                                                                <li class="osr-11 darkgrey"><span class=""></span>All functionality</li>
                                                                <li class="osr-11 darkgrey"><span class=""></span>All free templates</li>
                                                                <li class="osr-11 darkgrey"><span class=""></span>Export up to 5 sites per <br /> month (WordPress themes - <br /> no Shopify)  </li>
                                                                <li class="osr-11 darkgrey"><span class=""></span>1 hostable site and 1 free domain </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                                <button class="accordion"><h3 class="oss-13 black">Your current plan</h3></button>
                                                <div class="panel">
                                                    <div class="row current-data-main">
                                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                                            <ul class="current-data">
                                                                <li class="">
                                                                    <div class="left osr-11 black ">Plan Name</div>
                                                                    <div class="right oss-11 turq">Plan B $25/mo</div>
                                                                </li>
                                                                <li class="">
                                                                    <div class="left osr-11 black ">Status</div>
                                                                    <div class="right oss-11 turq">Active</div>
                                                                </li>
                                                                <li class="">
                                                                    <div class="left osr-11 black ">Price</div>
                                                                    <div class="right oss-11 turq">$12.00</div>
                                                                </li>
                                                                <li class="">
                                                                    <div class="left osr-11 black ">Billing Period</div>
                                                                    <div class="right oss-11 turq">Jan, 9th 2021</div>
                                                                </li>
                                                                <li class="">
                                                                    <div class="left osr-11 black ">Expired on</div>
                                                                    <div class="right oss-11 turq">Nov, 28th 2021</div>
                                                                </li>
                                                            </ul>
                                                            <p class="oss-13 see-detail"><a class="oss-13 turq">See more Details <span class="icon-right-arrow-6-1 turq"></span></a></p>
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
                        <ul class="temporary">
                            <li><a data-bs-toggle="modal" data-bs-target="#duplicate1">duplicate</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#rename1" >rename</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#export-zip">export-prepare</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#export-download">export-download</a></li>
                        </ul>
                        {/* <!---------------------------------- /temporary-popup code----------------------------------> */}




                        {/* <!----------------------------------------------------popup---------------------------------------------------->  */}



                        {/* <!---------------------------------- Duplicate Site---------------------------------->			 */}
                        <div class="modal fade duplicate" id="duplicate1" tabindex="-1" role="dialog" aria-labelledby="duplicate1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 class="osb-22 black">Duplicate Site</h1>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span class="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <form>
                                                    <ul>
                                                        <li class="center">
                                                            <div class="">
                                                                <label for="s-name" class="form-label oss-16 black">Site Name</label>
                                                                <input type="text" class="form-control osr-13 darkgrey" id="s-name" placeholder="Mysite Copy" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </form>
                                                <p class="osr-13 darkgrey cs-ur-data">Your data, styles, pages, and images will be copied to a new site. You can edit the subdomain and the name of your site after it has been created.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary oss-13 white green-btn">Duplicate Site</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Duplicate Site----------------------------------> */}


                        {/* <!---------------------------------- Rename Site---------------------------------->			  */}
                        <div class="modal fade rename" id="rename1" tabindex="-1" role="dialog" aria-labelledby="rename1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 class="osb-22 black">Rename Site</h1>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span class="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <form>
                                                    <ul>
                                                        <li class="center">
                                                            <div class="">
                                                                <label for="re-name" class="form-label oss-16 black">Site Name</label>
                                                                <input type="text" class="form-control osr-13 darkgrey" id="re-name" placeholder="Mysite Copy" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </form>
                                                <p class="osr-13 darkgrey cs-ur-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus, velit ac congue interdum, augue neque gravida sem, sed fermentum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary oss-13 white green-btn">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Rename Site----------------------------------> */}


                        {/* <!---------------------------------- Export-prepare-zip---------------------------------->			  */}
                        <div class="modal fade export" id="export-zip" tabindex="-1" role="dialog" aria-labelledby="export-zip" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 class="osb-22 black">Export theme</h1>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span class="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="row-inner">
                                                <div class="col-lg-8 col-md-8 col-sm-12 coll">
                                                    <div class="left">
                                                        <img id="myImg" src="./assets/website/images/SpaWellness.jpg" alt="your image" />
                                                    </div>
                                                    <div class="right">
                                                        <h2 class="oss-16 black">Template : Spa {'&'} Wellness</h2>
                                                        <p class="osr-13 darkgrey">Regular License</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 colr">

                                                    <a class="nav-link dropdown-toggle right-top darkgrey osr-13" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Choose Platform
                                                                </a>
                                                    <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                        <li><a class="dropdown-item osr-13 darkgrey active" href="#">Wordpress</a></li>
                                                        <li><a class="dropdown-item osr-13 darkgrey" href="#">Shopify</a></li>
                                                        <li><a class="dropdown-item osr-13 darkgrey" href="#">Html{'&'}Css </a></li>
                                                        <li><a class="dropdown-item osr-13 darkgrey" href="#">Wordpress</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary oss-13 white green-btn">Prepare .Zip File</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------------------------- /Export-prepare-zip----------------------------------> */}


                        {/* <!---------------------------------- Export-download-zip---------------------------------->			  */}
                        <div class="modal fade export export-download" id="export-download" tabindex="-1" role="dialog" aria-labelledby="export-download" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 coll">
                                                <h1 class="osb-22 black">Export theme</h1>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 colr">
                                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span class="icon-Close darkgrey"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="row-inner">
                                                <div class="col-lg-8 col-md-8 col-sm-12 coll">
                                                    <div class="left">
                                                        <img id="myImg" src="./assets/website/images/SpaWellness.jpg" alt="your image" />
                                                    </div>
                                                    <div class="right">
                                                        <h2 class="oss-16 black">Template : Spa {'&'} Wellness</h2>
                                                        <p class="osr-13 darkgrey">Regular License</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 colr">

                                                    <a class="nav-link dropdown-toggle right-top darkgrey osr-13 disabled " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Choose Platform
                                                    </a>
                                                    <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                                        <li><a class="dropdown-item osr-13 darkgrey active" href="#">Wordpress</a></li>
                                                        <li><a class="dropdown-item osr-13 darkgrey" href="#">Shopify</a></li>
                                                        <li><a class="dropdown-item osr-13 darkgrey" href="#">Html{'&'}Css </a></li>
                                                        <li><a class="dropdown-item osr-13 darkgrey" href="#">Wordpress</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary oss-13 white green-btn">Download Now</button>
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
        currentUser: global.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
