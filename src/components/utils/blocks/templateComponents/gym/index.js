import { assetsUrl } from "../../../../../settings";
import { countdown } from "../../extras/icons";
import { header, gallery, popUp, faq, team, form, testimonials, footer, cta, pricing } from "./icons";

export const gym = (editor) => {

    editor.BlockManager.add("gym-header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header Banner</div>
        </div>`,
        category: "Template Components",
        content: `
        <div id="home" class="bg-img">
            <div class="container-fluid">
                <!-- header-nav -->
                <navbar>
                    <div class="navbar nav">
                        <div class="inner-nav">
                            <div class="v-flex">
                                <div class="navbar-body">
                                    <div class="navbar-start">
                                        <div class="hamburger-menu">
                                            <div class="ic_menu"> <span onclick="openNav()"><img src="${assetsUrl}/templates/gym/Images/Icon/SVG/Menu_White.svg" class="img-fluid"></span></div>
                                        </div>
                                        <div id="mySidenav" class="sidenav"><a href="javascript:void(0)" onclick="closeNav()" class="closebtn"><img src="${assetsUrl}/templates/gym/Images/Icon/SVG/close.svg"></a>
                                            <div class="menu-spc ss-nav-ul">
                                                <p class="menu">MENU</p><!-- header-ul --><a href="#one" class="ss-nav-item">HOME</a><a href="#two" class="ss-nav-item">ABOUT US</a><a href="#five" class="ss-nav-item">TRAINERS</a><a href="#six" class="ss-nav-item">GALLERY</a><a href="#seven" class="ss-nav-item">TESTIMONIAL</a><a href="#Eight" class="ss-nav-item">BLOG</a><a href="#Nine" class="ss-nav-item">CONTACT US</a><!-- End-header-ul -->
                                            </div>
                                            <div class="join-btn"> <a href="#join" id="i634g">JOIN NOW</a></div>
                                        </div><!-- web-header-logo --><a href="#" class="navbar-brand"><img src="${assetsUrl}/templates/gym/Images/Icon/SVG/Logo_White.svg" class="logo img-fluid"></a><!-- End-web-header-logo -->
                                    </div><!-- Show Announcement -->
                                    <div class="navbar-end">
                                        <div class="sl-nav">
                                            <ul>
                                                <li><b class="L-font">USA</b><i aria-hidden="true" class="fa fa-angle-down"></i>
                                                    <div class="triangle"></div>
                                                    <ul>
                                                        <li><span class="active">Deutsch</span></li>
                                                        <li><span>Englisch</span></li>
                                                        <li><span>Français</span></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div><!-- Show Topbar -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </navbar><!-- End-header-nav -->
            </div>
        </div>
        <div class="container">
            <div class="row top-text">
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col-lg-12 col-md-12 mb-12 Web-space p-0 aos-init aos-animate">
                    <h1 class="top-head">KEEP YOUR BODY <br>
                        <span-1 class="text left">FIT &amp; STRONG</span-1>
                    </h1>
                    <div class="col-lg-5 col-mb-6 mb-12 p-0">
                        <p class="top-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue.</p>
                    </div>
                    <div class="col-lg-12 col-mb-12 mb-12 p-0"><a href="#" class="book-btn"><button class="Join-button">JOIN NOW</button></a></div>
                </div>
            </div>
        </div>`
    })

    editor.BlockManager.add("gym-image-cta", {
        label: `<div class="inherit-color-svg">${cta}
            <div style="margin-top: 4.14px">Image CTA</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="container top-image">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_01.jpg" class="img-fluid">
                    <div class="move-1"><img src="${assetsUrl}/templates/gym/Images/move-img-white.png" class="rotate img-responsive"></div>
                </div>
            </div>
        </div>
        <section class="main-sec" id="one">
            <div class="row About-sec">
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" class="col-md-10 col-lg-10 mb-12 inner-about aos-init aos-animate">
                    <p class="sub-head line">About Us</p>
                    <p class="top-head-1">TIME TO TRANSFORM</p>
                    <p class="top-paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue. Vestibulum sed tortor eu enim sodales interdum vitae nec dolor. Nulla tincidunt eros eu ex convallis luctus. Etiam posuere ac mi a vulputate. Cras</p>
                    <div class="move-bit">
                        <p class="top-paragraph-1 border-d">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue. Vestibulum sed tortor eu enim sodales interdum vitae nec dolor. Nulla tincidunt eros eu ex convallis luctus. Etiam posuere ac mi a vulputate. Cras</p>
                        <div class="col-lg-12 col-md-12 mb-12 p-0"><a href="#" class="book-btn"><button class="Join-button-1 left-sp">JOIN NOW</button></a></div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("gym-big-image", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Big Image</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="two">
            <div class="col-md-12 second-sec">
                <div class="move-2">
                    <div id="circle"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
                            <defs>
                                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path>
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none"></circle>
                            <g>
                                <use xlink:href="#circlePath" fill="none"></use><text fill="#000">
                                    <textPath xlink:href="#circlePath" class="svg02">KEEP YOUR BODY KEEP YOUR BODY KEEP YOUR </textPath>
                                </text>
                            </g>
                        </svg></div>
                </div><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_02.jpg" class="img-fluid">
            </div>
        </section>`
    })

    editor.BlockManager.add("gym-service", {
        label: `<div class="inherit-color-svg">${form}
            <div style="margin-top: 4.14px">Services</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="three">
            <div class="row">
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col-lg-8 col-md-8 mb-12 thired-sec aos-init aos-animate">
                    <p class="sub-head line">Our Services</p>
                    <p class="top-head-1">TIME TO TRANSFORM</p>
                    <p class="top-paragraph-1 spx">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue.</p>
                </div>
                <div class="col-md-12 services">
                    <p class="S-1 pointer">
                        <span-1 class="left">FITNESS</span-1>
                    </p>
                    <p class="S-1 pointer">
                        <span-1 class="left">BODYBUILDING</span-1>
                    </p>
                    <p class="S-1 pointer">
                        <span-1 class="left">CROSSFIT</span-1>
                    </p>
                    <p class="S-1 pointer">
                        <span-1 class="left">STRENGTH ZONE</span-1>
                    </p>
                    <p class="S-1 pointer">
                        <span-1 class="left">CARDIO</span-1>
                    </p>
                    <p class="S-1 pointer">
                        <span-1 class="left">SPA &amp; SONA</span-1>
                    </p>
                    <p class="S-1 pointer">
                        <span-1 class="left">Nutrition</span-1>
                    </p>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("gym-video", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Video</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="four">
            <div class="fourt-sec">
                <div class="row text-center vedio-main">
                    <div class="col-lg-12 col-md-12 mb-12 img-vedio">
                        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" class="top-text-1 text-center aos-init aos-animate">
                            <div class="row">
                                <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 mb-12">
                                    <p class="V-subtitle">More than just a gym</p>
                                    <h1 class="top-heading V-text">WE TRAIN WITH <br>PASSSION</h1>
                                </div>
                            </div>
                        </div><a id="videoId" href="https://www.youtube.com/embed/pBFQdxA-apI" class="popup-youtube">
                            <div class="overlay"> <span id="hom"><img alt="#" src="${assetsUrl}/templates/gym/Images/Icon/SVG/Play_Green.svg" class="popup image_on"></span></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("gym-team", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">Team</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="five">
            <div class="row fifth-sec">
                <div class="col-lg-7 col-md-7 mb-12 Web-slid">
                    <div class="row">
                        <div class="col-lg-5 col-md-5 mb-12 F-1 l-spcc p-0"><img alt="#" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_05.jpg" class="img-fluid M-A box">
                            <div class="img-text">
                                <h5 class="Team-name">David Richards</h5>
                                <p class="Team-P">Aerobics Instructor</p>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 mb-12 F-2 p-0"><img alt="#" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_04.jpg" class="img-fluid M-B box">
                            <div class="img-text">
                                <h5 class="Team-name">Marion Miller</h5>
                                <p class="Team-P">Marion Miller</p>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 mb-12 F-3 l-spcc p-0"><img alt="#" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_06.jpg" class="img-fluid M-B box">
                            <div class="img-text">
                                <h5 class="Team-name">Marion Miller</h5>
                                <p class="Team-P">Diet Instructor</p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5 mb-12 F-4 p-0"><img alt="#" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_07.jpg" class="img-fluid M-A box">
                            <div class="img-text">
                                <h5 class="Team-name">David Richards</h5>
                                <p class="Team-P">Aerobics Instructor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-7 mb-12 mobile-slid">
                    <div class="row">
                        <div class="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events">
                            <div class="swiper-wrapper" id="swiper-wrapper-1eaee7c910327ab64" aria-live="polite" style="transition-duration: 0ms;">
                                <div class="swiper-slide"><img src="${assetsUrl}/templates/gym/Images/mobi-slider-1.jpg" class="img-fluid">
                                    <div class="img-text">
                                        <h5 class="Team-name">David Richards</h5>
                                        <p class="Team-P">Aerobics Instructor</p>
                                    </div>
                                </div>
                                <div class="swiper-slide"><img src="${assetsUrl}/templates/gym/Images/mobi-slider-2.jpg" class="img-fluid">
                                    <div class="img-text">
                                        <h5 class="Team-name">David Richards</h5>
                                        <p class="Team-P">Aerobics Instructor</p>
                                    </div>
                                </div>
                                <div class="swiper-slide"><img src="${assetsUrl}/templates/gym/Images/mobi-slider-3.jpg" class="img-fluid">
                                    <div class="img-text">
                                        <h5 class="Team-name">David Richards</h5>
                                        <p class="Team-P">Aerobics Instructor</p>
                                    </div>
                                </div>
                                <div class="swiper-slide"><img src="${assetsUrl}/templates/gym/Images/mobi-slider-4.jpg" class="img-fluid">
                                    <div class="img-text">
                                        <h5 class="Team-name">David Richards</h5>
                                        <p class="Team-P">Aerobics Instructor</p>
                                    </div>
                                </div>
                            </div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" class="col-lg-5 col-md-5 mb-12 text-sec aos-init aos-animate">
                    <p class="sub-head line">Our Trainers</p>
                    <p class="top-head-1">TEAM OF EXPERT COACHES</p>
                    <p class="top-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue.</p>
                    <div class="move-bit-1">
                        <p class="top-paragraph-2 border-d" id="ivgf6l">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue.</p>
                        <div class="col-lg-12 col-md-12 mb-12 p-0"><a href="#" class="book-btn"><button class="Join-button-1 left-sp">JOIN NOW</button></a></div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("gym-gallery", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Gallery</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="six">
            <div class="row sixth-sec">
                <div class="col-lg-5 col-md-5 mb-12 text-blk">
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="text-area aos-init aos-animate">
                        <p class="sub-head line">Gallery</p>
                        <p class="top-head-1">TIME TO
                            <br>TRANSFORM
                        </p>
                        <p class="top-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue.</p>
                    </div><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_09.jpg" class="img-fluid G-Spc"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_11.jpg" class="img-fluid G-Spc"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_13.jpg" class="img-fluid G-Spc">
                </div>
                <div class="col-lg-7 col-md-7 mb-12 G-spcs"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_08.jpg" class="img-fluid G-Spc"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_10.jpg" class="img-fluid G-Spc"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_12.jpg" class="img-fluid G-Spc"></div>
                <div class="move-3">
                    <div id="circle-2"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
                            <defs>
                                <path id="circlePath-2" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path>
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none"></circle>
                            <g>
                                <use xlink:href="#circlePath" fill="none"></use><text fill="#000">
                                    <textPath xlink:href="#circlePath" class="svg02">KEEP YOUR BODY KEEP YOUR BODY KEEP YOUR </textPath>
                                </text>
                            </g>
                        </svg></div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("gym-testimonial", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">Testimonials</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="seven">
            <div class="full-width seventh-sec">
                <div class="col-md-12 text-center p-0">
                    <div class="quotes"><img src="${assetsUrl}/templates/gym/Images/Icon/SVG/Quotes.svg" class="Q-img"></div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12 mb-12 p-0">
                        <div id="testimonial" class="owl-carousel owl-theme owl-loaded owl-drag">
                            <div class="owl-stage-outer">
                                <div class="owl-stage" style="transform: translate3d(-4179px, 0px, 0px); transition: all 0.25s ease 0s; width: 11144px;">
                                    <div class="owl-item cloned" style="width: 1393px;">
                                        <div class="item">
                                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                            <div class="test-details">
                                                <div class="text-center Avtar"><img src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg" class="img-fluid"></div>
                                                <p class="C-name">Marion Miller</p>
                                                <p class="C-profession">Diet Instructor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item cloned" style="width: 1393px;">
                                        <div class="item">
                                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                            <div class="test-details">
                                                <div class="text-center Avtar"><img src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg" class="img-fluid"></div>
                                                <p class="C-name">Marion Miller</p>
                                                <p class="C-profession">Diet Instructor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item" style="width: 1393px;">
                                        <div class="item">
                                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                            <div class="test-details">
                                                <div class="text-center Avtar"><img src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg" class="img-fluid"></div>
                                                <p class="C-name">Marion Miller</p>
                                                <p class="C-profession">Diet Instructor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item active" style="width: 1393px;">
                                        <div class="item">
                                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                            <div class="test-details">
                                                <div class="text-center Avtar"><img src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg" class="img-fluid"></div>
                                                <p class="C-name">Marion Miller</p>
                                                <p class="C-profession">Diet Instructor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item" style="width: 1393px;">
                                        <div class="item">
                                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                            <div class="test-details">
                                                <div class="text-center Avtar"><img src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg" class="img-fluid"></div>
                                                <p class="C-name">Marion Miller</p>
                                                <p class="C-profession">Diet Instructor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item" style="width: 1393px;">
                                        <div class="item">
                                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                            <div class="test-details">
                                                <div class="text-center Avtar"><img src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg" class="img-fluid"></div>
                                                <p class="C-name">Marion Miller</p>
                                                <p class="C-profession">Diet Instructor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item cloned" style="width: 1393px;">
                                        <div class="item">
                                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                            <div class="test-details">
                                                <div class="text-center Avtar"><img src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg" class="img-fluid"></div>
                                                <p class="C-name">Marion Miller</p>
                                                <p class="C-profession">Diet Instructor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item cloned" style="width: 1393px;">
                                        <div class="item">
                                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                            <div class="test-details">
                                                <div class="text-center Avtar"><img src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg" class="img-fluid"></div>
                                                <p class="C-name">Marion Miller</p>
                                                <p class="C-profession">Diet Instructor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div>
                            <div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("gym-blogs", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Blogs</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="Eight">
            <div class="col-lg-12 col-md-12 mb-12 Eighth-sec">
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col-md-6 blog-txt-sec aos-init aos-animate">
                    <p class="sub-head line">Our Blog</p>
                    <p class="top-head-1">TIME TO
                        <br>TRANSFORM
                    </p>
                    <p class="top-paragraph-1 spx">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis.</p>
                </div>
                <div class="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                    <div class="swiper-wrapper" id="swiper-wrapper-ef69ea2a50d744ed" aria-live="polite" style="transform: translate3d(0px, 0px, 0px);">
                        <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 6" style="width: 464.286px; margin-right: 30px;"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_14.jpg" class="img-fluid">
                            <div class="col-md-12 event-data">
                                <p class="event-date">19 Aug 2020</p>
                                <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                            </div>
                        </div>
                        <div class="swiper-slide swiper-slide-next" role="group" aria-label="2 / 6" style="width: 464.286px; margin-right: 30px;"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_15.jpg" class="img-fluid">
                            <div class="col-md-12 event-data">
                                <p class="event-date">19 Aug 2020</p>
                                <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                            </div>
                        </div>
                        <div class="swiper-slide" role="group" aria-label="3 / 6" style="width: 464.286px; margin-right: 30px;"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_16.jpg" class="img-fluid">
                            <div class="col-md-12 event-data">
                                <p class="event-date">19 Aug 2020</p>
                                <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                            </div>
                        </div>
                        <div class="swiper-slide" role="group" aria-label="4 / 6" style="width: 464.286px; margin-right: 30px;"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_14.jpg" class="img-fluid">
                            <div class="col-md-12 event-data">
                                <p class="event-date">19 Aug 2020</p>
                                <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                            </div>
                        </div>
                        <div class="swiper-slide" role="group" aria-label="5 / 6" style="width: 464.286px; margin-right: 30px;"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_15.jpg" class="img-fluid">
                            <div class="col-md-12 event-data">
                                <p class="event-date">19 Aug 2020</p>
                                <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                            </div>
                        </div>
                        <div class="swiper-slide" role="group" aria-label="6 / 6" style="width: 464.286px; margin-right: 30px;"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_16.jpg" class="img-fluid">
                            <div class="col-md-12 event-data">
                                <p class="event-date">19 Aug 2020</p>
                                <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                            </div>
                        </div>
                    </div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
                <div class="arrow-cont">
                    <div class="swiper-button-prev S-one swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-ef69ea2a50d744ed" aria-disabled="true"><img src="${assetsUrl}/templates/gym/Images/Icon/SVG/Arrow_Left_Active.svg" class="img-fluid"></div>
                    <div class="swiper-button-next S-two" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-ef69ea2a50d744ed" aria-disabled="false"><img src="${assetsUrl}/templates/gym/Images/Icon/SVG/Arrow_Right_Active.svg" class="img-fluid"></div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("gym-cta", {
        label: `<div class="inherit-color-svg">${cta}
            <div style="margin-top: 4.14px">CTA</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="Nine">
            <div class="row Ninth-sec Footer-up">
                <div class="col-lg-8 col-md-8 mb-12 signup-area">
                    <div class="F-top-text">
                        <p class="find-txt"><span class="find-txt-1">Find out first about our </span>launches, exclusive
                            <br>offers <span class="find-txt-1">and </span>private pop-ups.
                        </p>
                    </div>
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="F-bottom-text aos-init aos-animate">
                        <p class="loop-txt">Stay in the loop</p>
                    </div>
                    <div class="col-md-12 signup">
                        <form action="">
                            <div class="input-field"><input type="text"><label for="name">Sign up for latest offers<span class="G-spc"><img src="${assetsUrl}/templates/gym/Images/Icon/2x/send%201.png"></span></label></div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 mb-12">
                    <div class="row top-images">
                        <div class="col-md-6 f1-img">
                            <div class="move-4"><img src="${assetsUrl}/templates/gym/Images/move-img-white.png" class="rotate img-responsive s-img"></div><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_17.jpg" class="img-fluid border-sqr not-V">
                        </div>
                        <div class="col-md-6 f2-img"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_18.jpg" class="img-fluid border-sqr not-V"></div>
                    </div>
                    <div class="col-md-12 bottom-images"><img src="${assetsUrl}/templates/gym/Images/Images/2x/Image_19.jpg" class="img-fluid f2-img border-sqr not-V"></div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("gym-footer", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Footer</div>
        </div>`,
        category: "Template Components",
        content: `
        <footer id="section-nine" class="footer-outer">
            <div class="row footer-inner">
                <div class="col-md-12 footer-log"><a href="#"><img alt="#" src="${assetsUrl}/templates/gym/Images/Icon/SVG/Logo_Dark.svg"></a></div>
                <div class="col-lg-6 col-md-6 mb-12 p-0">
                    <p class="Know-T">Want to be
                        <br>the first to know?
                    </p>
                    <div class="web-view">
                        <div class="social_icon ss-social-ul">
                            <p class="social-txt">Follow us on social:</p><!-- social-ul --><span class="so-icons ss-social-li"><a href="#" class="s-color ss-social-item pointer"><i class="fa fa-facebook" id="ixv7jv"></i></a></span><span class="so-icons ss-social-li"><a href="#" class="s-color ss-social-item pointer"><i class="fa fa-twitter" id="i8b4ee"></i></a></span><span class="so-icons ss-social-li"><a href="#" class="s-color ss-social-item pointer"><i class="fa fa-instagram" id="i4pys4"></i></a></span><span class="ss-social-li"><a href="#" class="s-color ss-social-item pointer"><i class="fa fa-youtube-play" id="i07vxu"></i></a></span><!-- End-social-ul -->
                        </div>
                        <p class="copuright-txt">SiteSeed © 2020 All rights reserved.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 mb-6 L-1 p-0">
                    <!-- footer-ul -->
                    <ul class="Footer-nav ss-footer-ul">
                        <li class="F-nav ss-footer-li"><a href="#" class="c-color ss-footer-item pointer" id="iij4ll">Home</a></li>
                        <li class="F-nav ss-footer-li"><a href="#two" class="c-color ss-footer-item pointer">About Us</a></li>
                        <li class="F-nav ss-footer-li"><a href="#five" class="c-color ss-footer-item pointer">Trainers</a></li>
                        <li class="F-nav ss-footer-li"><a href="#six" class="c-color ss-footer-item pointer">Gallery</a></li>
                        <li class="F-nav ss-footer-li"><a href="#seven" class="c-color ss-footer-item pointer">Testimonial</a></li>
                        <li class="F-nav ss-footer-li"><a href="#Eight" class="c-color ss-footer-item pointer">Blog</a></li>
                    </ul><!-- End-footer-ul -->
                </div>
                <div class="col-lg-3 col-md-3 mb-6 L-1 p-0">
                    <ul class="Footer-faq">
                        <li class="Faq-nav"><a href="#" class="c-color pointer" id="iffejb">FAQ</a></li>
                        <li class="Faq-nav"><a href="#" class="c-color pointer">Privacy Policy</a></li>
                        <li class="Faq-nav"><a href="#" class="c-color pointer">Virtual Experience</a></li>
                        <li class="Faq-nav"><a href="#" class="c-color pointer">Contact Us</a></li>
                    </ul>
                </div>
                <div class="mob-view">
                    <div class="social_icon">
                        <p class="social-txt">Follow us on social:</p><!-- mob-social-ul --><span class="so-icons"><a href="#" class="s-color pointer"><i class="fa fa-facebook" id="iv9awg"></i></a></span><span class="so-icons"><a href="#" class="s-color pointer"><i class="fa fa-twitter" id="islax6"></i></a></span><span class="so-icons"><a href="#" class="s-color pointer"><i class="fa fa-instagram" id="if2cql"></i></a></span><span><a href="#" class="s-color pointer"><i class="fa fa-youtube-play" id="izqsg7"></i></a></span><!-- End-mob-social-ul -->
                    </div>
                    <p class="copuright-txt">SiteSeed © 2020 All rights reserved.</p>
                </div>
            </div>
        </footer>`
    })

    // =====================================================================
};