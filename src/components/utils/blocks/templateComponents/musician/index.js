import { assetsUrl } from "../../../../../settings";
import { countdown } from "../../extras/icons";
import { header, gallery, popUp, faq, team, form, testimonials, footer, cta, pricing } from "./icons";

export const musician = (editor) => {

    editor.BlockManager.add("musician-header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Template Components",
        content: `
        <nav class="navbar navbar-expand-lg navbar-dark navbar-offcanvas top-navbar">
            <!-- web-header-logo --><a href="#" class="navbar-brand mr-auto"><img src="${assetsUrl}/templates/musician/images/Logo%20(1).png" class="logo-img"></a><!-- End-web-header-logo -->
            <!-- Show Announcement --><button type="button" id="navToggle-1" class="navbar-toggler d-block"><img src="${assetsUrl}/templates/musician/images/open-menu.png" class="open-M"></button>
            <div class="navbar-collapse offcanvas-collapse"><img src="${assetsUrl}/templates/musician/images/close-menu.png" id="navToggle-2" class="close-M">
                <div class="row sidebar-section">
                    <div class="col-md-6 navbar-section ss-nav-ul">
                        <!-- header-ul --><a href="#home" onclick="closeNav()" class="menus ss-nav-item">Home</a><a href="#aboutus" onclick="closeNav()" class="menus ss-nav-item">About Us</a><a href="#Testimonail" onclick="closeNav()" class="menus ss-nav-item">Music</a><a href="#tour" onclick="closeNav()" class="menus ss-nav-item">Tour</a><a href="#news" onclick="closeNav()" class="menus ss-nav-item">News</a><!-- End-header-ul -->
                    </div>
                    <div class="col-md-6 navbar-section Right-nav">
                        <div class="nav-add">
                            <p class="nav-hd">
                                Tour<img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="img-responsive nav-t-star"></p>
                        </div>
                        <div class="nav-add">
                            <p class="nav-sb-head">Jun, 2</p>
                            <p class="nav-hd-1">San Diego, CA, USA</p>
                            <p class="nav-para">
                                Pechanga Arena, San Diego Rescheduled Date**
                            </p>
                        </div>
                        <div class="nav-add">
                            <p class="nav-sb-head-t">TICKETS</p>
                        </div>
                        <div class="nav-add">
                            <p class="nav-sb-head">Jun, 2</p>
                            <p class="nav-hd-1">San Diego, CA, USA</p>
                            <p class="nav-para">
                                Pechanga Arena, San Diego Rescheduled Date**
                            </p>
                        </div>
                        <div class="nav-add">
                            <p class="nav-sb-head-t">TICKETS</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`
    })

    editor.BlockManager.add("musician-banner", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Banner</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="home" class="custom-sec2">
            <div class="container web-cont">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-7 col-sm-12 p-0 L-cont-sec">
                        <h1 data-aos="fade-right" data-aos-duration="2000" class="T-heading top-section aos-init aos-animate">
                            Mariah
                            <span class="sur-head"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="img-responsive Carey-star">Carey</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-duration="2000" class="T-subhead aos-init aos-animate">
                            Pre-Order Mariah’s new album <br><b>THE RARITIES</b> now!
                        </p><span class="Group-two"><img src="${assetsUrl}/templates/musician/images/shape-2.png" alt="" class="img-responsivet img-t-6"><img src="${assetsUrl}/templates/musician/images/image-3.png" alt="" class="img-responsivet img-t-5"></span>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 text-right p-0"><span class="Group-three"><img src="${assetsUrl}/templates/musician/images/shape-1.png" alt="" class="img-responsivet img-t-2"><img src="${assetsUrl}/templates/musician/images/top-image.png" alt="" class="img-responsivet img-t-1"></span></div>
                </div>
            </div>
            <div class="container mobile-cont">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0 L-cont-sec">
                        <h1 class="T-heading top-section">
                            Mariah
                            <span class="sur-head"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="img-responsive Carey-star">Carey</span>
                        </h1>
                        <p class="T-subhead" id="ikjxl">
                            Pre-Order Mariah’s new <br>album <b>THE RARITIES</b> now!
                        </p><span class="Group-two"><img src="${assetsUrl}/templates/musician/images/shape-2.png" alt="" class="img-responsivet img-tm-6"><img src="${assetsUrl}/templates/musician/images/image-3.png" alt="" class="img-responsivet img-tm-5"></span>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 text-right p-0"><span class="Group-three"><img src="${assetsUrl}/templates/musician/images/shape-1.png" alt="" class="img-responsivet img-tm-2"><img src="${assetsUrl}/templates/musician/images/top-image.png" alt="" class="img-responsivet img-tm-1"></span></div>
                </div>
            </div><span class="Group-one"><img src="${assetsUrl}/templates/musician/images/shape-1.png" alt="" class="img-responsivet img-t-3"><img src="${assetsUrl}/templates/musician/images/image-2.png" alt="" class="img-responsivet img-t-4"><img src="${assetsUrl}/templates/musician/images/scroll-txt.png" alt="" class="img-responsive scroll-image animated bounce"></span>
        </section>`
    })

    editor.BlockManager.add("musician-about", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">About</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="aboutus" class="custom-sec3">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-md-12 col-sm-12 about-sec-p">
                        <p class="sub-head">Biography</p>
                        <p data-aos="fade-right" data-aos-duration="2000" class="main-head Bio-spc aos-init aos-animate">
                            A highly versatile artist, Rachel is an American singer who
                            got her start her career in the 2000s.
                        </p>
                        <p data-aos="fade-left" data-aos-duration="2000" class="main-head aos-init aos-animate">
                            Born on April 22, 1986, in El Centro, California, Rachel rose
                            to stardom as part of a singing act with brother Ban Calen in
                            the 2000s, hitting No. 1 with the single «Make Me Happy».
                            Rachel had established a solo career of her own as well,
                            having chart-toppers like «Gypsies, Tramps and Thieves»,
                        </p>
                        <div data-aos="fade-up" data-aos-duration="2000" class="Detail-D aos-init">
                            <p class="C-name">Christian Caldwell</p>
                            <p class="C-proff">Anne’s Producer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("musician-marquee", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Marquee</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="Albumb" class="custom-sec4">
            <div class="container-fluid">
                <div class="row align-items-center custom-sec4-row2">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0">
                        <p class="Black-bg">
                            <marquee scrollamount="10" class="marq"><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt">Album</span></span></marquee>
                        </p>
                        <p class="white-bg">
                            <marquee direction="right" scrollamount="10" class="marq"><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span><span class="M-text"><img src="${assetsUrl}/templates/musician/images/Star%201.png" alt="" class="Marq-star">Latest <span class="Outline-txt-w">Album</span></span></marquee>
                        </p>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("musician-testimonials", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">Testimonials</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="Testimonail" class="custom-sec5">
            <div class="container-fluid">
                <div id="testimonial-new" class="owl-carousel owl-theme owl-loaded owl-drag">
                    <div class="owl-stage-outer">
                        <div class="owl-stage" style="transform: translate3d(-10539px, 0px, 0px); transition: all 0.25s ease 0s; width: 11710px;">
                            <div class="owl-item" style="width: 1171px;">
                                <div class="row item">
                                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-7 p-0 S-right aos-init aos-animate"><span>
                                            <h1 class="slider-txt">Mariah</h1>
                                        </span><span><img src="${assetsUrl}/templates/musician/images/slider-image.png" alt="" class="slider-img"></span></div>
                                    <div class="col-md-5 contant-sec">
                                        <p class="s-date">May 8th 2020</p>
                                        <p class="S-quote">Stuck with U</p>
                                        <p id="itoq2f"><a class="S-dwnld">STREAM / DOWNLOAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1171px;">
                                <div class="row item">
                                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-7 p-0 S-right aos-init aos-animate"><span>
                                            <h1 class="slider-txt">Mariah</h1>
                                        </span><span><img src="${assetsUrl}/templates/musician/images/slider-image.png" alt="" class="slider-img"></span></div>
                                    <div class="col-md-5 contant-sec">
                                        <p class="s-date">May 8th 2020</p>
                                        <p class="S-quote">Stuck with U</p>
                                        <p id="i519lk"><a class="S-dwnld">STREAM / DOWNLOAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1171px;">
                                <div class="row item">
                                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-7 p-0 S-right aos-init aos-animate"><span>
                                            <h1 class="slider-txt">Mariah</h1>
                                        </span><span><img src="${assetsUrl}/templates/musician/images/slider-image.png" alt="" class="slider-img"></span></div>
                                    <div class="col-md-5 contant-sec">
                                        <p class="s-date">May 8th 2020</p>
                                        <p class="S-quote">Stuck with U</p>
                                        <p id="iikksb"><a class="S-dwnld">STREAM / DOWNLOAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1171px;">
                                <div class="row item">
                                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-7 p-0 S-right aos-init aos-animate"><span>
                                            <h1 class="slider-txt">Mariah</h1>
                                        </span><span><img src="${assetsUrl}/templates/musician/images/slider-image.png" alt="" class="slider-img"></span></div>
                                    <div class="col-md-5 contant-sec">
                                        <p class="s-date">May 8th 2020</p>
                                        <p class="S-quote">Stuck with U</p>
                                        <p id="ivgyef"><a class="S-dwnld">STREAM / DOWNLOAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1171px;">
                                <div class="row item">
                                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-7 p-0 S-right aos-init aos-animate"><span>
                                            <h1 class="slider-txt">Mariah</h1>
                                        </span><span><img src="${assetsUrl}/templates/musician/images/slider-image.png" alt="" class="slider-img"></span></div>
                                    <div class="col-md-5 contant-sec">
                                        <p class="s-date">May 8th 2020</p>
                                        <p class="S-quote">Stuck with U</p>
                                        <p id="ik81tl"><a class="S-dwnld">STREAM / DOWNLOAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1171px;">
                                <div class="row item">
                                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-7 p-0 S-right aos-init aos-animate"><span>
                                            <h1 class="slider-txt">Mariah</h1>
                                        </span><span><img src="${assetsUrl}/templates/musician/images/slider-image.png" class="slider-img"></span></div>
                                    <div class="col-md-5 contant-sec">
                                        <p class="s-date">May 8th 2020</p>
                                        <p class="S-quote">Stuck with U</p>
                                        <p id="i2830d"><a class="S-dwnld">STREAM / DOWNLOAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1171px;">
                                <div class="row item">
                                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-7 p-0 S-right aos-init aos-animate"><span>
                                            <h1 class="slider-txt">Mariah</h1>
                                        </span><span><img src="${assetsUrl}/templates/musician/images/slider-image.png" alt="" class="slider-img"></span></div>
                                    <div class="col-md-5 contant-sec">
                                        <p class="s-date">May 8th 2020</p>
                                        <p class="S-quote">Stuck with U</p>
                                        <p id="ilsjfk"><a class="S-dwnld">STREAM / DOWNLOAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1171px;">
                                <div class="row item">
                                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-7 p-0 S-right aos-init aos-animate"><span>
                                            <h1 class="slider-txt">Mariah</h1>
                                        </span><span><img src="${assetsUrl}/templates/musician/images/slider-image.png" class="slider-img"></span></div>
                                    <div class="col-md-5 contant-sec">
                                        <p class="s-date">May 8th 2020</p>
                                        <p class="S-quote">Stuck with U</p>
                                        <p id="i0nfhd"><a class="S-dwnld">STREAM / DOWNLOAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1171px;">
                                <div class="row item">
                                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-7 p-0 S-right aos-init aos-animate"><span>
                                            <h1 class="slider-txt">Mariah</h1>
                                        </span><span><img src="${assetsUrl}/templates/musician/images/slider-image.png" class="slider-img"></span></div>
                                    <div class="col-md-5 contant-sec">
                                        <p class="s-date">May 8th 2020</p>
                                        <p class="S-quote">Stuck with U</p>
                                        <p id="isawvr"><a class="S-dwnld">STREAM / DOWNLOAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 1171px;">
                                <div class="row item">
                                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-7 p-0 S-right aos-init aos-animate"><span>
                                            <h1 class="slider-txt">Mariah</h1>
                                        </span><span><img src="${assetsUrl}/templates/musician/images/slider-image.png" class="slider-img"></span></div>
                                    <div class="col-md-5 contant-sec">
                                        <p class="s-date">May 8th 2020</p>
                                        <p class="S-quote">Stuck with U</p>
                                        <p id="iu4u3t"><a class="S-dwnld">STREAM / DOWNLOAD</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next disabled"><span aria-label="Next">›</span></button></div>
                    <div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("musician-tour", {
        label: `<div class="inherit-color-svg">${pricing}
            <div style="margin-top: 4.14px">Tour</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="tour" class="custom-sec6">
            <div class="container">
                <div class="row align-items-center custom-sec6-row1">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0">
                        <h1 data-aos="fade-down" data-aos-duration="2000" class="T-heading top-section aos-init">
                            Tour<img src="${assetsUrl}/templates/musician/images/Star%201.png" class="img-responsive Tour-star"></h1>
                    </div>
                    <div class="row tour-data">
                        <div data-aos="fade-right" data-aos-duration="2000" class="col-lg-6 col-md-6 col-sm-12 p-0 T-box aos-init">
                            <p class="T-date">Jun, 2</p>
                            <p class="T-name">San Diego, CA, USA</p>
                            <p class="T-desc">
                                Pechanga Arena, San Diego <br>Rescheduled Date**
                            </p>
                            <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" class="col-lg-6 col-md-6 col-sm-12 p-0 T-box aos-init">
                            <p class="T-date">Jun, 2</p>
                            <p class="T-name">San Diego, CA, USA</p>
                            <p class="T-desc">
                                Pechanga Arena, San Diego <br>Rescheduled Date**
                            </p>
                            <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" class="col-lg-6 col-md-6 col-sm-12 p-0 T-box aos-init">
                            <p class="T-date">Jun, 2</p>
                            <p class="T-name">San Diego, CA, USA</p>
                            <p class="T-desc">
                                Pechanga Arena, San Diego <br>Rescheduled Date**
                            </p>
                            <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" class="col-lg-6 col-md-6 col-sm-12 p-0 T-box aos-init">
                            <p class="T-date">Jun, 2</p>
                            <p class="T-name">San Diego, CA, USA</p>
                            <p class="T-desc">
                                Pechanga Arena, San Diego <br>Rescheduled Date**
                            </p>
                            <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" class="col-lg-6 col-md-6 col-sm-12 p-0 T-box aos-init">
                            <p class="T-date">Jun, 2</p>
                            <p class="T-name">San Diego, CA, USA</p>
                            <p class="T-desc">
                                Pechanga Arena, San Diego <br>Rescheduled Date**
                            </p>
                            <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" class="col-lg-6 col-md-6 col-sm-12 p-0 T-box aos-init">
                            <p class="T-date">Jun, 2</p>
                            <p class="T-name">San Diego, CA, USA</p>
                            <p class="T-desc">
                                Pechanga Arena, San Diego <br>Rescheduled Date**
                            </p>
                            <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="2000" class="col-lg-6 col-md-6 col-sm-12 p-0 T-box aos-init">
                            <p><a href="#" class="V-txt">View all</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("musician-video", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Video</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="vedio-section" class="custom-sec7">
            <div class="container">
                <div class="row align-items-center custom-sec7-row1">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0"><img src="${assetsUrl}/templates/musician/images/vedio-image.png" alt="" class="img-responsive vedio-img"><a id="play-video" class="play top-video-target">
                            <div class="overlay"><span id="hom"><img src="${assetsUrl}/templates/musician/images/vedio-icon.png" class="popup image_on top-video-target"></span></div>
                        </a></div>
                </div>
            </div>
            <div id="video-head" class="VideoHead-popup-video">
                <div id="close-video" class="VideoHead-popup-video-exit">
                    <div class="VideoHead-popup-video-exit-line-1"></div>
                    <div class="VideoHead-popup-video-exit-line-2"></div>
                </div>
                <div class="VideoHead-popup-video-container">
                    <div class="VideoHead-popup-video-placeholder" id="i4bfzs"><iframe allowfullscreen="1" id="top-head-player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/Rwk5PdpTxSU?&amp;autoplay=1" class="top-video-target"></iframe></div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("musician-blog", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">News</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="news" class="custom-sec8">
            <div class="container-fluid">
                <div class="row align-items-center custom-sec8-row1">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0">
                        <h1 data-aos="fade-down" data-aos-duration="2000" class="T-heading top-section aos-init">
                            Latest<span class="L-nws-section">News<img src="${assetsUrl}/templates/musician/images/Star%201.png" class="img-responsive news-star"></span></h1>
                        <div class="prod-slider-container">
                            <div id="slider-new" class="owl-carousel owl-loaded owl-drag">
                                <div class="owl-stage-outer">
                                    <div class="owl-stage" style="transform: translate3d(-2080px, 0px, 0px); transition: all 0.25s ease 0s; width: 3640px;">
                                        <div class="owl-item" style="width: 520px;">
                                            <div class="item">
                                                <div class="crad taners t-top"><img src="${assetsUrl}/templates/musician/images/slider-1.png" alt="" class="img-fluid inner-T">
                                                    <div data-aos="fade-up" data-aos-duration="2000" class="Details-clients aos-init">
                                                        <p class="L-name">Aug, 28</p>
                                                        <p class="L-sepf">San Diego, CA, USA</p>
                                                        <p class="LR-txt"><a href="#" class="Lern-text">LEARN MORE</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-item" style="width: 520px;">
                                            <div class="item">
                                                <div class="crad taners T-bottom"><img src="${assetsUrl}/templates/musician/images/slider-2.png" alt="" class="img-fluid inner-T">
                                                    <div data-aos="fade-up" data-aos-duration="2000" class="Details-clients aos-init">
                                                        <p class="L-name">Aug, 28</p>
                                                        <p class="L-sepf">San Diego, CA, USA</p>
                                                        <p class="LR-txt"><a href="#" class="Lern-text">LEARN MORE</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-item" style="width: 520px;">
                                            <div class="item">
                                                <div class="crad taners T-top"><img src="${assetsUrl}/templates/musician/images/slider-3.png" alt="" class="img-fluid inner-T">
                                                    <div data-aos="fade-up" data-aos-duration="2000" class="Details-clients aos-init">
                                                        <p class="L-name">Aug, 28</p>
                                                        <p class="L-sepf">San Diego, CA, USA</p>
                                                        <p class="LR-txt"><a href="#" class="Lern-text">LEARN MORE</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-item" style="width: 520px;">
                                            <div class="item">
                                                <div class="crad taners T-bottom"><img src="${assetsUrl}/templates/musician/images/slider-1.png" alt="" class="img-fluid inner-T">
                                                    <div data-aos="fade-up" data-aos-duration="2000" class="Details-clients aos-init">
                                                        <p class="L-name">Aug, 28</p>
                                                        <p class="L-sepf">San Diego, CA, USA</p>
                                                        <p class="LR-txt"><a href="#" class="Lern-text">LEARN MORE</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-item active" style="width: 520px;">
                                            <div class="item">
                                                <div class="crad taners T-top"><img src="${assetsUrl}/templates/musician/images/slider-2.png" alt="" class="img-fluid inner-T">
                                                    <div data-aos="fade-up" data-aos-duration="2000" class="Details-clients aos-init">
                                                        <p class="L-name">Aug, 28</p>
                                                        <p class="L-sepf">San Diego, CA, USA</p>
                                                        <p class="LR-txt"><a href="#" class="Lern-text">LEARN MORE</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-item active" style="width: 520px;">
                                            <div class="item">
                                                <div class="crad taners T-bottom"><img src="${assetsUrl}/templates/musician/images/slider-1.png" alt="" class="img-fluid inner-T">
                                                    <div data-aos="fade-up" data-aos-duration="2000" class="Details-clients aos-init">
                                                        <p class="L-name">Aug, 28</p>
                                                        <p class="L-sepf">San Diego, CA, USA</p>
                                                        <p class="LR-txt"><a href="#" class="Lern-text">LEARN MORE</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-item active" style="width: 520px;">
                                            <div class="item">
                                                <div class="crad taners T-top"><img src="${assetsUrl}/templates/musician/images/slider-2.png" class="img-fluid inner-T">
                                                    <div data-aos="fade-up" data-aos-duration="2000" class="Details-clients aos-init">
                                                        <p class="L-name">Aug, 28</p>
                                                        <p class="L-sepf">San Diego, CA, USA</p>
                                                        <p class="LR-txt"><a href="#" class="Lern-text">LEARN MORE</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div>
                                <div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div>
                            </div>
                        </div>
                        <!--.owl-carousel-->
                        <!--.prod-slider-container-->
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("musician-cta", {
        label: `<div class="inherit-color-svg">${cta}
            <div style="margin-top: 4.14px">CTA</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="faq" class="custom-sec10">
            <div class="footer">
                <div class="row align-items-center custom-sec10-row1">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <h1 data-aos="fade-up" data-aos-duration="2000" class="F-heading aos-init aos-animate">
                            Want the latest news?
                        </h1>
                        <p data-aos="fade-down" data-aos-duration="2000" class="F-para aos-init aos-animate">
                            Follow and Subscribe to be one of the first to know the latest
                            news on Ed!
                        </p>
                        <div class="email">
                            <!-- Newsletter Input Section --><input placeholder="Email Address" type="email" id="emails" name="emails" multiple="">
                            <div class="form-group"><input type="checkbox" id="check"><label for="check" class="check-txt">By submitting this form, You agree to The Universal Music
                                    Group.<br><a href="#" class="pvt-link">Privacy Policy </a>and
                                    <a href="#" class="pvt-link">Terms &amp; Conditions.</a></label></div><button class="btn success">Submit</button><!-- End Newsletter Input Section -->
                        </div>
                    </div><!-- End Newsletter Section -->
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("musician-footer", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Footer</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="faq-2" class="custom-sec11 hr-l6 Web-F">
            <div class="container-fluid footer-container">
                <div class="row align-items-center custom-sec10-row1">
                    <div class="col-lg-4 col-md-4 col-sm-12 p-0"><img src="${assetsUrl}/templates/musician/images/Logo%20(1).png" alt="" class="img-footer img-responsive"></div>
                    <div class="col-lg-4 col-md-4 col-sm-12 p-0">
                        <p class="site-text">© 2020 SITESEED. ALL RIGHTS RESERVED.</p>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 p-0 social-mdia ss-social-ul">
                        <!-- social-ul --><span class="S-icon ss-social-li"><a href="#" class="ss-social-item"><img src="${assetsUrl}/templates/musician/images/facebook%20(9)%201.png" alt="" class="shows"></a></span><span class="S-icon ss-social-li"><a href="#" class="ss-social-item"><img src="${assetsUrl}/templates/musician/images/instagram%20(4)%201.png" alt="" class="shows"></a></span><span class="S-icon ss-social-li"><a href="#" class="ss-social-item"><img src="${assetsUrl}/templates/musician/images/twitter%20(4)%201.png" alt="" class="shows"></a></span><span class="S-icon ss-social-li"><a href="#" class="ss-social-item"><img src="${assetsUrl}/templates/musician/images/spotify%201.png" alt="" class="shows"></a></span><span class="S-icon ss-social-li"><a href="#" class="ss-social-item"><img src="${assetsUrl}/templates/musician/images/company%20(1)%201.png" alt="" class="shows"></a></span><span class="S-icon ss-social-li"><a href="#" class="ss-social-item"><img src="${assetsUrl}/templates/musician/images/youtube%20(3)%201.png" alt="" class="shows"></a></span><!-- End-social-ul -->
                    </div>
                </div>
            </div>
        </section>
        <section id="faq-3" class="custom-sec12 mobi-F">
            <div class="container-fluid footer-container">
                <div class="row align-items-center custom-sec10-row1">
                    <div class="col-lg-4 col-md-4 col-sm-12 p-0"><img src="${assetsUrl}/templates/musician/images/Logo%20(1).png" alt="" class="img-footer img-responsive social-mdia"></div>
                    <div class="col-lg-4 col-md-4 col-sm-12 p-0" id="ijj8rk">
                        <!-- mob-social-ul --><span class="S-icon"><a href="#"><img src="${assetsUrl}/templates/musician/images/facebook%20(9)%201.png" alt="" class="shows"></a></span><span class="S-icon"><a href="#"><img src="${assetsUrl}/templates/musician/images/instagram%20(4)%201.png" alt="" class="shows"></a></span><span class="S-icon"><a href="#"><img src="${assetsUrl}/templates/musician/images/twitter%20(4)%201.png" alt="" class="shows"></a></span><span class="S-icon"><a href="#"><img src="${assetsUrl}/templates/musician/images/spotify%201.png" alt="" class="shows"></a></span><span class="S-icon"><a href="#"><img src="${assetsUrl}/templates/musician/images/company%20(1)%201.png" alt="" class="shows"></a></span><span class="S-icon"><a href="#"><img src="${assetsUrl}/templates/musician/images/youtube%20(3)%201.png" alt="" class="shows"></a></span><!-- End-mob-social-ul -->
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 p-0 hr-l6">
                        <p class="site-text" id="ioz1aq">
                            © 2020 SITESEED. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
            </div>
        </section>`
    })

    // =====================================================================
};