import { assetsUrl } from "../../../../../settings";
import { countdown } from "../../extras/icons";
import { header, gallery, popUp, faq, team, form, testimonials, footer, cta, pricing } from "./icons";

export const event = (editor) => {

    editor.BlockManager.add("event-gallery", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Gallery</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec9"> <span class="Slider-shape"><img src="${assetsUrl}/templates/event/images/Frame%205.png" class="img-responsive side-F"><img src="${assetsUrl}/templates/event/images/Subtract-b.png" class="img-responsive side-F-sm"></span>
            <div class="container-inner-patners">
                <div class="row align-items-center custom-sec9-row1">
                    <div class="col-md-12 col-lg-12 col-sm-12 sec8-col-center p-0">
                        <ul>
                            <li data-aos="flip-up" data-aos-duration="2000" class="aos-init aos-animate"><a><img src="${assetsUrl}/templates/event/images/b-1.png" alt="brand" class="brand-img img-responsive"></a></li>
                            <li data-aos="flip-up" data-aos-duration="2000" class="aos-init aos-animate"><a><img src="${assetsUrl}/templates/event/images/b-2.png" alt="brand" class="brand-img img-responsive"></a></li>
                            <li data-aos="flip-up" data-aos-duration="2000" class="aos-init aos-animate"><a><img src="${assetsUrl}/templates/event/images/b-3.png" alt="brand" class="brand-img img-responsive"></a></li>
                            <li data-aos="flip-up" data-aos-duration="2000" class="aos-init aos-animate"><a><img src="${assetsUrl}/templates/event/images/b-4.png" alt="brand" class="brand-img img-responsive"></a></li>
                        </ul>
                    </div>
                    <div class="col-md-12 col-lg-12 col-sm-12 sec8-col-center p-0">
                        <ul>
                            <li data-aos="flip-up" data-aos-duration="2000" class="aos-init aos-animate"><a><img src="${assetsUrl}/templates/event/images/b-5.png" alt="brand" class="brand-img img-responsive"></a></li>
                            <li data-aos="flip-up" data-aos-duration="2000" class="aos-init aos-animate"><a><img src="${assetsUrl}/templates/event/images/b-6.png" alt="brand" class="brand-img img-responsive"></a></li>
                            <li data-aos="flip-up" data-aos-duration="2000" class="aos-init aos-animate"><a><img src="${assetsUrl}/templates/event/images/b-7.png" alt="brand" class="brand-img img-responsive"></a></li>
                            <li data-aos="flip-up" data-aos-duration="2000" class="aos-init aos-animate"><a><img src="${assetsUrl}/templates/event/images/b-8.png" alt="brand" class="brand-img img-responsive"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("events-header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Template Components",
        content: `
        <div id="navbar_top" class="custom-sec1-main">
            <div class="container container-nav custom-sec1">
                <nav class="navbar navbar-expand-lg E-nabbar">
                    <div class="container-fluid nav-container"><a href="#"><img src="${assetsUrl}/templates/event/images/Logo%20(1).png" alt="Logo Img" class="img-rounded"></a><button type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><img src="${assetsUrl}/templates/event/images/open-toggle.png" class="oprn-T"></button>
                        <div id="navbarNav" class="collapse navbar-collapse justify-content-center">
                            <div class="mobile-nav"><a href="#"><img src="${assetsUrl}/templates/event/images/Logo%20(1).png" att="" class="l-img mobi-logo"></a>
                                <div class="offcanvas-header mt-3"><img src="${assetsUrl}/templates/event/images/close-toggle.png" class="close-nav btn-close"></div>
                            </div>
                            <ul id="menu" class="navbar-nav">
                                <li class="nav-item nav-data"> <a aria-current="page" href="#Home" class="nav-link">Home</a></li>
                                <li class="nav-item nav-data"> <a href="#speaker" class="nav-link">Speakers</a></li>
                                <li class="nav-item nav-data"> <a href="#Conference" class="nav-link">Schedule</a></li>
                                <li class="nav-item nav-data"> <a href="#faq" class="nav-link">Our Partners</a></li>
                                <li class="nav-item nav-data"> <a href="#tech-companies" class="nav-link">Gallery</a></li>
                                <li class="nav-item nav-data"> <a href="#testimonial" class="nav-link">Testimonial</a></li>
                                <div class="custom-nv-right mobile-view">
                                    <div id="i6z17" class="nav-item"> <a href="#downloadtheapp" onclick="document.getElementById('id01').style.display='block'" class="nav-link-1">Register Now<span id="i3lwg" class="btn-d"><img src="${assetsUrl}/templates/event/images/pluse3x.png" id="irg2m"></span></a></div>
                                </div>
                            </ul>
                        </div>
                        <div class="custom-nv-right web-view">
                            <div class="nav-item"> <a href="#downloadtheapp" onclick="document.getElementById('id01').style.display='block'" class="nav-link-1">Register Now<span id="irkpj" class="btn-d"><img src="${assetsUrl}/templates/event/images/pluse3x.png"></span></a></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>`
    })

    editor.BlockManager.add("event-banner", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Banner</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="Home" class="custom-sec2"> <span class="group-1"><img src="${assetsUrl}/templates/event/images/sideframe.png" class="img-responsive side-F4"><img src="${assetsUrl}/templates/event/images/Subtract-b.png" class="img-responsive side-F4-sm"><img src="${assetsUrl}/templates/event/images/Frame%2022.png" class="img-responsive side-F4-dot"><img src="${assetsUrl}/templates/event/images/Mask%20Group-18.jpg" class="img-responsive side-F4-user"></span>
            <div class="container-inner">
                <div data-aos="fade-right" data-aos-duration="2000" class="row align-items-center aos-init aos-animate">
                    <div class="col-md-4 col-lg-4 col-sm-9 p-0">
                        <p class="sub-title">#The leading startup event</p>
                        <h1 class="main-title">Web Design <br><span class="bold-txt">Conference 2020</span></h1>
                        <p class="main-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                        <div class="left-btn"><a href="#downloadtheapp" onclick="document.getElementById('id01').style.display='block'" class="nav-link-1">Register Now<span id="idj1x" class="btn-d-1"><img src="${assetsUrl}/templates/event/images/pluse3x.png"></span></a></div>
                    </div>
                </div>
                <!-- <div class="row top-banner">
                        
                        <div class="col-md-12 p-0"><img style="width: 60vw;"class="img-responsive"src="${assetsUrl}/templates/event/images/top-image.png">
                        </div>
                        </div>-->
                <div class="row top-banner-1">
                    <div class="col-md-12 p-0"> <span class="group-3"><img src="${assetsUrl}/templates/event/images/Mask%20Group.jpg" class="img-responsive side-S-1"><img src="${assetsUrl}/templates/event/images/Subtract-b.png" class="img-responsive side-S-2"><img src="${assetsUrl}/templates/event/images/blue-big.png" class="img-responsive side-S-3"><img src="${assetsUrl}/templates/event/images/vedio-f-2.png" class="img-responsive side-S-4"><img src="${assetsUrl}/templates/event/images/Rectangle%20592.jpg" class="img-responsive side-S-5"></span></div>
                </div>
            </div> <span class="group-2"><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="img-responsive side-M1"><img src="${assetsUrl}/templates/event/images/Subtract.png" class="img-responsive side-M2"><img src="${assetsUrl}/templates/event/images/Frame-black.png" class="img-responsive side-M3"><img src="${assetsUrl}/templates/event/images/Mask%20Group.jpg" class="img-responsive side-M4"><img src="${assetsUrl}/templates/event/images/Mask%20Group-17.jpg" class="img-responsive side-M5"><img src="${assetsUrl}/templates/event/images/Rectangle%20592.jpg" class="img-responsive side-M6"><img src="${assetsUrl}/templates/event/images/Rectangle%20645.jpg" class="img-responsive side-M7"><img src="${assetsUrl}/templates/event/images/Mask%20Group-2.jpg" class="img-responsive side-M8"><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="img-responsive side-M9"><img src="${assetsUrl}/templates/event/images/blue-big.png" class="img-responsive side-M10"><img src="${assetsUrl}/templates/event/images/Subtract-b.png" class="img-responsive side-M11"><img src="${assetsUrl}/templates/event/images/Frame%208.png" class="img-responsive side-M12"></span>
        </section>`
    })

    editor.BlockManager.add("events-inovation", {
        label: `<div class="inherit-color-svg">${form}
            <div style="margin-top: 4.14px">Inovation</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="Inovation" class="custom-sec3"> <span><img src="${assetsUrl}/templates/event/images/big-frame.png" class="img-responsive side-F3"></span>
            <div class="container-inner2">
                <div class="row align-items-center">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-lg-6 col-md-6 col-sm-12 f-img aos-init aos-animate"> <span><img src="${assetsUrl}/templates/event/images/Frame%2011.png" class="img-responsive ine-shape"><img src="${assetsUrl}/templates/event/images/image-1.jpg" class="img-responsive In-img"></span></div>
                    <div data-aos="fade-down" data-aos-duration="2000" class="col-lg-6 col-md-6 col-sm-12 s-img aos-init aos-animate"><span class="inovation-group"><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="img-responsive ine-shape1"><img src="${assetsUrl}/templates/event/images/image-2.jpg" class="img-responsive In-img"><img src="${assetsUrl}/templates/event/images/Subtract.png" class="img-responsive ine-shape2"><img src="${assetsUrl}/templates/event/images/gray-R.png" class="img-responsive ine-shape22"></span>
                        <div data-aos="fade-left" data-aos-duration="2000" class="col-md-12 col-lg-12 col-sm-12 p-0 inovation-sec aos-init aos-animate">
                            <p class="sub-title">#The leading startup event</p>
                            <h1 class="main-title">Inovation &amp;<span class="bold-txt"> Inspiration</span></h1>
                            <p class="main-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                            <div class="left-btn"><a href="#downloadtheapp" onclick="document.getElementById('id01').style.display='block'" class="nav-link-1">Register Now<span id="ia8ukd" class="btn-d-1"><img src="${assetsUrl}/templates/event/images/pluse3x.png"></span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("events-testimonials", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">Testimonials</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="testimonial" class="custom-sec11">
            <div class="container">
                <div class="row align-items-center custom-sec11-row1">
                    <div id="testimonials-section">
                        <div id="testimonial-new" class="owl-carousel owl-theme owl-loaded">
                            <div class="owl-stage-outer">
                                <div class="owl-stage" style="transform: translate3d(-2558px, 0px, 0px); transition: all 0.25s ease 0s; width: 3837px;">
                                    <div class="owl-item" style="width: 1279px; margin-right: 0px;">
                                        <div class="item row">
                                            <div data-aos="zoom-in" data-aos-duration="2000" class="col-md-2 p-0 aos-init aos-animate"><span><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="img-responsive T-one"><img src="${assetsUrl}/templates/event/images/testi-img-1.png" class="img-responsive T-two"></span></div>
                                            <div class="col-md-10 Testimonaial-spc">
                                                <p class="testimonial-para">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nisl ut leo tincidunt venenatis. Vivamus rhoncus dui ipsum. Sed dapibus id nunc id malesuada. Mauris sit amet ipsum condimentum, efficitur orci nec, hendrerit risus. Integer eget vehicula velit. Proin imperdiet interdum lacus non dignissim.”</p>
                                                <div data-aos="fade-down" data-aos-duration="2000" class="T-data aos-init aos-animate">
                                                    <p class="client-name">James Woller<span class="client-prof">,Co-owner at JetPet</span></p>
                                                    <p><img src="${assetsUrl}/templates/event/images/brand-3.png" class="img-responsive brand-name"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item" style="width: 1279px; margin-right: 0px;">
                                        <div class="item row">
                                            <div data-aos="zoom-in" data-aos-duration="2000" class="col-md-2 p-0 aos-init aos-animate"><span><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="img-responsive T-one"><img src="${assetsUrl}/templates/event/images/testi-img-1.png" class="img-responsive T-two"></span></div>
                                            <div class="col-md-10 Testimonaial-spc">
                                                <p class="testimonial-para">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nisl ut leo tincidunt venenatis. Vivamus rhoncus dui ipsum. Sed dapibus id nunc id malesuada. Mauris sit amet ipsum condimentum, efficitur orci nec, hendrerit risus. Integer eget vehicula velit. Proin imperdiet interdum lacus non dignissim.”</p>
                                                <div data-aos="fade-down" data-aos-duration="2000" class="T-data aos-init aos-animate">
                                                    <p class="client-name">James Woller<span class="client-prof">,Co-owner at JetPet</span></p>
                                                    <p><img src="${assetsUrl}/templates/event/images/brand-3.png" class="img-responsive brand-name"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item active" style="width: 1279px; margin-right: 0px;">
                                        <div class="item row">
                                            <div data-aos="zoom-in" data-aos-duration="2000" class="col-md-2 p-0 aos-init aos-animate"><span><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="img-responsive T-one"><img src="${assetsUrl}/templates/event/images/testi-img-1.png" class="img-responsive T-two"></span></div>
                                            <div class="col-md-10 Testimonaial-spc">
                                                <p class="testimonial-para">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nisl ut leo tincidunt venenatis. Vivamus rhoncus dui ipsum. Sed dapibus id nunc id malesuada. Mauris sit amet ipsum condimentum, efficitur orci nec, hendrerit risus. Integer eget vehicula velit. Proin imperdiet interdum lacus non dignissim.”</p>
                                                <div data-aos="fade-down" data-aos-duration="2000" class="T-data aos-init aos-animate">
                                                    <p class="client-name">James Woller<span class="client-prof">,Co-owner at JetPet</span></p>
                                                    <p><img src="${assetsUrl}/templates/event/images/brand-3.png" class="img-responsive brand-name"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-controls">
                                <div class="owl-nav">
                                    <div class="owl-prev" style="display: none;">prev</div>
                                    <div class="owl-next" style="display: none;">next</div>
                                </div>
                                <div class="owl-dots" style="display: block;">
                                    <div class="owl-dot"><span></span></div>
                                    <div class="owl-dot"><span></span></div>
                                    <div class="owl-dot active"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("events-footer", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Footer</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="downloadtheapp" class="custom-sec13 custom-footer">
            <div class="container">
                <div data-aos="zoom-in" data-aos-duration="2000" class="row align-items-center custom-sec13-row1 aos-init aos-animate">
                    <div class="col-md-12 col-lg-12 col-sm-12 p-0 text-center custom-footer"><img src="${assetsUrl}/templates/event/images/footer-logo.png" class="footer-logo">
                        <div class="ff">
                            <ul>
                                <li><a href="#" class="l-16">About </a></li>
                                <li><a href="#" class="l-16">Speakers</a></li>
                                <li><a href="#" class="l-16">Schedule</a></li>
                                <li><a href="#" class="l-16">Blog</a></li>
                                <li><a href="#" class="l-16">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-12 col-md-12 mb-12 p-0"><span class="so-icons"><a href="#" class="s-color pointer"><i class="fa fa-facebook"></i></a></span><span class="so-icons"><a href="#" class="s-color pointer"><i class="fa fa-twitter"></i></a></span><span class="so-icons"><a href="#" class="s-color pointer"><i class="fa fa-instagram"></i></a></span><span><a href="#" class="s-color pointer"><i class="fa fa-youtube-play"></i></a></span></div>
                        <p class="l-16 copyright">© 2020 SiteSeed. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("events-newsletter", {
        label: `<div class="inherit-color-svg">${cta}
            <div style="margin-top: 4.14px">Newsletter</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="newsletter" class="custom-sec12 newsletter-outer"> <span class="bottom-group-1"><img src="${assetsUrl}/templates/event/images/bluse-sm.png" class="NW-img-1 img-responsive"><img src="${assetsUrl}/templates/event/images/Subtract.png" class="NW-img-2 img-responsive"><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="NW-img-3 img-responsive"><img src="${assetsUrl}/templates/event/images/Mask%20Group-3.jpg" class="NW-img-4 img-responsive"></span><span class="bottom-group-inner-mobi"><img src="${assetsUrl}/templates/event/images/bluse-sm.png" class="IN-img-1 img-responsive"><img src="${assetsUrl}/templates/event/images/Subtract.png" class="IN-img-2 img-responsive"><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="IN-img-3 img-responsive"><img src="${assetsUrl}/templates/event/images/Mask%20Group-3.jpg" class="IN-img-4 img-responsive"></span>
    <div class="container-newsletter">
        <div data-aos="fade-down" data-aos-duration="2000" class="row align-items-center custom-sec12-row1 aos-init aos-animate">
            <div class="col-md-12 col-lg-12 col-sm-12 p-0 neswletter-section">
                <p class="nws-head">Subscribe To Our <span class="nws-B">Newsletter</span></p>
                <p class="nws-para">Subscribe to the free newsletter and recive notification of new products and promotions!</p>
                <div class="search"><input type="text" placeholder="Enter your email" class="form-control-1 form-rounded"><button class="search-more-button-B text-center">Submit</button></div>
            </div>
        </div> <span class="bottom-group-inner-mobi"><img src="${assetsUrl}/templates/event/images/blue-big.png" class="SB-img-1 img-responsive"><img src="${assetsUrl}/templates/event/images/Frame%2022.png" class="INN-img-1 img-responsive"><img src="${assetsUrl}/templates/event/images/Mask%20Group.jpg" class="INN-img-2 img-responsive"><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="INN-img-6 img-responsive"><img src="${assetsUrl}/templates/event/images/Subtract-b.png" class="INN-img-3 img-responsive"><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="INN-img-4 img-responsive"><img src="${assetsUrl}/templates/event/images/blue-big.png" class="INN-img-5 img-responsive"></span>
    </div> <span class="bottom-group-2"><img src="${assetsUrl}/templates/event/images/blue-big.png" class="SB-img-1 img-responsive"><img src="${assetsUrl}/templates/event/images/Frame%2022.png" class="SB-img-3 img-responsive"><img src="${assetsUrl}/templates/event/images/Mask%20Group.jpg" class="SB-img-4 img-responsive"><img src="${assetsUrl}/templates/event/images/Subtract-b.png" class="SB-img-5 img-responsive"><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="SB-img-6 img-responsive"><img src="${assetsUrl}/templates/event/images/Frame%2012.png" class="SB-img-7 img-responsive"></span>
</section>
        `
    })

    editor.BlockManager.add("events-team", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">Team</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="speaker" class="custom-sec5"> <span class="L-speaker"><img src="${assetsUrl}/templates/event/images/Frame%205.png" class="img-responsive side-F2"><img src="${assetsUrl}/templates/event/images/Subtract.png" class="img-responsive side-F2-sm"><img src="${assetsUrl}/templates/event/images/gray-R.png" class="img-responsive side-F2-mb"></span>
            <div class="container-speaker">
                <div data-aos="fade-right" data-aos-duration="2000" class="row align-items-center aos-init aos-animate">
                    <div class="col-md-10 col-lg-4 col-sm-9 p-0">
                        <h1 class="main-title">Our<br><span class="bold-txt">Speakers</span></h1>
                        <p class="main-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                    </div>
                </div>
                <div class="row speakers-details">
                    <div data-aos="zoom-in" data-aos-duration="2000" class="Speaker-div L-col aos-init aos-animate"><img src="${assetsUrl}/templates/event/images/Mask%20Group.png" class="img-responsive spk-img">
                        <div class="overlay-1"><a href="#" title="User Profile" onclick="document.getElementById('id02').style.display='block'" class="icon"><img src="${assetsUrl}/templates/event/images/pluses.png" class="popup image_on"></a></div>
                        <div class="s-detail">
                            <p class="s-name">Leslie Witt</p>
                            <p class="s-data">Small Business, Intuit</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" class="Speaker-div R-col aos-init aos-animate"><img src="${assetsUrl}/templates/event/images/speaker-2.png" class="img-responsive spk-img">
                        <div class="overlay-1"><a href="#" title="User Profile" onclick="document.getElementById('id02').style.display='block'" class="icon"><img src="${assetsUrl}/templates/event/images/pluses.png" class="popup image_on"></a></div>
                        <div class="s-detail">
                            <p class="s-name">Leslie Witt</p>
                            <p class="s-data">Small Business, Intuit</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" class="Speaker-div L-col aos-init aos-animate"><img src="${assetsUrl}/templates/event/images/speaker-3.png" class="img-responsive spk-img">
                        <div class="overlay-1"><a href="#" title="User Profile" onclick="document.getElementById('id02').style.display='block'" class="icon"><img src="${assetsUrl}/templates/event/images/pluses.png" class="popup image_on"></a></div>
                        <div class="s-detail">
                            <p class="s-name">Leslie Witt</p>
                            <p class="s-data">Small Business, Intuit</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" class="Speaker-div R-col aos-init aos-animate"><img src="${assetsUrl}/templates/event/images/speaker-4.png" class="img-responsive spk-img">
                        <div class="overlay-1"><a href="#" title="User Profile" onclick="document.getElementById('id02').style.display='block'" class="icon"><img src="${assetsUrl}/templates/event/images/pluses.png" class="popup image_on"></a></div>
                        <div class="s-detail">
                            <p class="s-name">Leslie Witt</p>
                            <p class="s-data">Small Business, Intuit</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" class="Speaker-div Speaker-div-1 L-col aos-init aos-animate"><img src="${assetsUrl}/templates/event/images/speaker-5.png" class="img-responsive spk-img">
                        <div class="overlay-1"><a href="#" title="User Profile" onclick="document.getElementById('id02').style.display='block'" class="icon"><img src="${assetsUrl}/templates/event/images/pluses.png" class="popup image_on"></a></div>
                        <div class="s-detail">
                            <p class="s-name">Leslie Witt</p>
                            <p class="s-data">Small Business, Intuit</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" class="Speaker-div R-col aos-init aos-animate"><img src="${assetsUrl}/templates/event/images/speaker-6.png" class="img-responsive spk-img">
                        <div class="overlay-1"><a href="#" title="User Profile" onclick="document.getElementById('id02').style.display='block'" class="icon"><img src="${assetsUrl}/templates/event/images/pluses.png" class="popup image_on"></a></div>
                        <div class="s-detail">
                            <p class="s-name">Leslie Witt</p>
                            <p class="s-data">Small Business, Intuit</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" class="Speaker-div L-col aos-init aos-animate"><img src="${assetsUrl}/templates/event/images/speaker-7.png" class="img-responsive spk-img">
                        <div class="overlay-1"><a href="#" title="User Profile" onclick="document.getElementById('id02').style.display='block'" class="icon"><img src="${assetsUrl}/templates/event/images/pluses.png" class="popup image_on"></a></div>
                        <div class="s-detail">
                            <p class="s-name">Leslie Witt</p>
                            <p class="s-data">Small Business, Intuit</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" class="Speaker-div R-col aos-init aos-animate"><img src="${assetsUrl}/templates/event/images/speaker-8.png" class="img-responsive spk-img">
                        <div class="overlay-1"><a href="#" title="User Profile" onclick="document.getElementById('id02').style.display='block'" class="icon"><img src="${assetsUrl}/templates/event/images/pluses.png" class="popup image_on"></a></div>
                        <div class="s-detail">
                            <p class="s-name">Leslie Witt</p>
                            <p class="s-data">Small Business, Intuit</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" class="Speaker-div L-col aos-init aos-animate"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive spk-img">
                        <div class="overlay-1"><a href="#" title="User Profile" onclick="document.getElementById('id02').style.display='block'" class="icon"><img src="${assetsUrl}/templates/event/images/pluses.png" class="popup image_on"></a></div>
                        <div class="s-detail">
                            <p class="s-name">Leslie Witt</p>
                            <p class="s-data">Small Business, Intuit</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" class="Speaker-div Speaker-div-1 R-col aos-init aos-animate"><img src="${assetsUrl}/templates/event/images/speaker-10.png" class="img-responsive spk-img">
                        <div class="overlay-1"><a href="#" title="User Profile" onclick="document.getElementById('id02').style.display='block'" class="icon"><img src="${assetsUrl}/templates/event/images/pluses.png" class="popup image_on"></a></div>
                        <div class="s-detail">
                            <p class="s-name">Leslie Witt</p>
                            <p class="s-data">Small Business, Intuit</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("events-video", {
        label: `<div class="inherit-color-svg">${faq}
            <div style="margin-top: 4.14px">Video</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="vedio" class="custom-sec4"> <span class="V-shape"><img src="${assetsUrl}/templates/event/images/Frame%205.png" class="img-responsive side-F1"><img src="${assetsUrl}/templates/event/images/Subtract.png" class="img-responsive side-F1-sm"></span>
            <div data-aos="fade-up" data-aos-duration="2000" class="container-inner-vedio aos-init aos-animate">
                <div class="row align-items-center Vedio-section">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0"> <span><img src="${assetsUrl}/templates/event/images/vedio-f-1.png" class="img-responsive v-1"><img src="${assetsUrl}/templates/event/images/vedio-image.png" class="img-responsive"><img src="${assetsUrl}/templates/event/images/vedio-f-2.png" class="img-responsive v-2"><a id="play-video" class="play top-video-target">
                                <div class="overlay"> <span id="hom"><img src="${assetsUrl}/templates/event/images/vedioicon.png" data-aos="zoom-in" data-aos-duration="2000" class="popup image_on top-video-target aos-init aos-animate"></span></div>
                            </a></span></div>
                </div>
            </div>
            <div id="video-head" class="VideoHead-popup-video">
                <div id="close-video" class="VideoHead-popup-video-exit">
                    <div class="VideoHead-popup-video-exit-line-1"></div>
                    <div class="VideoHead-popup-video-exit-line-2"></div>
                </div>
                <div class="VideoHead-popup-video-container">
                    <div id="iollrx" class="VideoHead-popup-video-placeholder"><iframe allowfullscreen="1" id="top-head-player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/Rwk5PdpTxSU?&amp;autoplay=1" class="top-video-target"></iframe></div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("events-accordion", {
        label: `<div class="inherit-color-svg">${faq}
            <div style="margin-top: 4.14px">Accordion</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="Conference" class="custom-sec7">
            <div class="container">
                <div data-aos="fade-down" data-aos-duration="2000" class="row align-items-center text-center aos-init aos-animate">
                    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-sm-12 p-0">
                        <p class="sub-title">#The leading startup event</p>
                        <h1 class="main-title">Conference<span id="i7dcpm" class="bold-txt">Schedule</span></h1>
                        <p class="main-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                    </div>
                </div>
            </div>
            <div class="tab-section">
                <header>
                    <div id="material-tabs-1"><a id="tab1-tab" href="#tab1" class="active">Day 01</a><a id="tab2-tab" href="#tab2">Day 02</a><a id="tab3-tab" href="#tab3">Day 03</a><a id="tab4-tab" href="#tab4">Day 04</a><a id="tab5-tab" href="#tab5">Day 05</a><span class="yellow-bar"></span></div>
                </header>
                <div class="tab-content">
                    <div id="tab1">
                        <!------- start #accordion----------->
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 p-0">
                                    <div id="accordion-1" role="tablist" aria-multiselectable="true" class="panel-group wrap">
                                        <!--Start  panel -->
                                        <div class="panel">
                                            <div role="tab" id="headingOne" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <div class="row">
                                                            <div class="col-lg-3 col-md-3 col-sm-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">08:00 – 09:00</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-9 col-md-9 col-sm-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference Opening</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseOne" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 2-->
                                        <div class="panel">
                                            <div role="tab" id="headingTwo" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme one</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingThree" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme two</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseThree" role="tabpanel" aria-labelledby="headingThree" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingFour" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme three</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseFour" role="tabpanel" aria-labelledby="headingFour" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingFive" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">16:40 – 17:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme four</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseFive" role="tabpanel" aria-labelledby="headingFive" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 7-->
                                        <div class="panel">
                                            <div role="tab" id="headingSix" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">18:20 – 19:10</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme five</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseSix" role="tabpanel" aria-labelledby="headingSix" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingSeven" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">18:20 – 19:10</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme six</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseSeven" role="tabpanel" aria-labelledby="headingSeven" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                    </div>
                                </div>
                            </div>
                        </div><!-- end of #accordion -->
                    </div><!-- end of tab -->
                    <div id="tab2" style="display: none;">
                        <!------- start #accordion----------->
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 p-0">
                                    <div id="accordion-2" role="tablist" aria-multiselectable="true" class="panel-group wrap">
                                        <!--Start  panel -->
                                        <div class="panel">
                                            <div role="tab" id="headingEight" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">08:00 – 09:00</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference Opening-1</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseEight" role="tabpanel" aria-labelledby="headingEight" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12">
                                                                <p class="acc-P p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 2-->
                                        <div class="panel">
                                            <div role="tab" id="headingTwo-1" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseTwo-1" aria-expanded="true" aria-controls="collapseTwo-1">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme one-1</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseTwo-1" role="tabpanel" aria-labelledby="headingTwo-1" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingThree-1" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseThree-1" aria-expanded="true" aria-controls="collapseThree-1">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme two-1</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseThree-1" role="tabpanel" aria-labelledby="headingThree-1" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingFour-1" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseFour-1" aria-expanded="true" aria-controls="collapseFour-1">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme three-1</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseFour-1" role="tabpanel" aria-labelledby="headingFour-1" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingFive-1" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseFive-1" aria-expanded="true" aria-controls="collapseFive-1">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">16:40 – 17:30-1</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme four</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseFive-1" role="tabpanel" aria-labelledby="headingFive-1" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 7-->
                                        <div class="panel">
                                            <div role="tab" id="headingSix-1" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseSix-1" aria-expanded="true" aria-controls="collapseSix-1">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">18:20 – 19:10-1</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme five</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseSix-1" role="tabpanel" aria-labelledby="headingSix-1" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingSeven-1" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseSeven-1" aria-expanded="true" aria-controls="collapseSeven-1">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">18:20 – 19:10-1</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme six</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseSeven-1" role="tabpanel" aria-labelledby="headingSeven-1" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                    </div>
                                </div>
                            </div>
                        </div><!-- end of #accordion -->
                    </div><!-- end of tab -->
                    <div id="tab3" style="display: none;">
                        <!------- start #accordion----------->
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 p-0">
                                    <div id="accordion-3" role="tablist" aria-multiselectable="true" class="panel-group wrap">
                                        <!--Start  panel -->
                                        <div class="panel">
                                            <div role="tab" id="headingOne-2" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseOne-2" aria-expanded="true" aria-controls="collapseOne-2">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">08:00 – 09:00</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference Opening-2</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseOne-2" role="tabpanel" aria-labelledby="headingOne-2" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 2-->
                                        <div class="panel">
                                            <div role="tab" id="headingTwo-2" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseTwo-2" aria-expanded="true" aria-controls="collapseTwo-2">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme one-2</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseTwo-2" role="tabpanel" aria-labelledby="headingTwo-2" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingThree-2" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseThree-2" aria-expanded="true" aria-controls="collapseThree-2">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme two-2</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseThree-2" role="tabpanel" aria-labelledby="headingThree-2" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingFour-2" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseFour-2" aria-expanded="true" aria-controls="collapseFour-2">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme three-2</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseFour-2" role="tabpanel" aria-labelledby="headingFour-2" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingFive-2" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseFive-2" aria-expanded="true" aria-controls="collapseFive-2">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">16:40 – 17:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme four-2</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseFive-2" role="tabpanel" aria-labelledby="headingFive-2" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 7-->
                                        <div class="panel">
                                            <div role="tab" id="headingSix-2" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseSix-2" aria-expanded="true" aria-controls="collapseSix-2">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">18:20 – 19:10</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme five-2</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseSix-2" role="tabpanel" aria-labelledby="headingSix-2" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingSeven-2" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseSeven-2" aria-expanded="true" aria-controls="collapseSeven-2">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">18:20 – 19:10</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme six-2</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseSeven-2" role="tabpanel" aria-labelledby="headingSeven-2" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                    </div>
                                </div>
                            </div>
                        </div><!-- end of #accordion -->
                    </div><!-- end of tab -->
                    <div id="tab4" style="display: none;">
                        <!------- start #accordion----------->
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 p-0">
                                    <div id="accordion-4" role="tablist" aria-multiselectable="true" class="panel-group wrap">
                                        <!--Start  panel -->
                                        <div class="panel">
                                            <div role="tab" id="headingOne-3" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseOne-3" aria-expanded="true" aria-controls="collapseOne-3">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">08:00 – 09:00</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference Opening-3</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseOne-3" role="tabpanel" aria-labelledby="headingOne-3" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 2-->
                                        <div class="panel">
                                            <div role="tab" id="headingTwo-3" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseTwo-3" aria-expanded="true" aria-controls="collapseTwo-3">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme one-3</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseTwo-3" role="tabpanel" aria-labelledby="headingTwo-3" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingThree-3" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseThree-3" aria-expanded="true" aria-controls="collapseThree-3">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme two-3</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseThree-3" role="tabpanel" aria-labelledby="headingThree-3" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingFour-3" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseFour-3" aria-expanded="true" aria-controls="collapseFour-3">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme three-3</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseFour-3" role="tabpanel" aria-labelledby="headingFour-3" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingFive-3" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseFive-3" aria-expanded="true" aria-controls="collapseFive-3">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">16:40 – 17:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme four-3</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseFive-3" role="tabpanel" aria-labelledby="headingFive-3" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 7-->
                                        <div class="panel">
                                            <div role="tab" id="headingSix-4" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseSix-4" aria-expanded="true" aria-controls="collapseSix-4">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">18:20 – 19:10</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme five-3</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseSix-4" role="tabpanel" aria-labelledby="headingSix-4" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingSeven-3" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseSeven-3" aria-expanded="true" aria-controls="collapseSeven-3">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">18:20 – 19:10</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme six-3</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseSeven-3" role="tabpanel" aria-labelledby="headingSeven-3" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                    </div>
                                </div>
                            </div>
                        </div><!-- end of #accordion -->
                    </div>
                    <div id="tab5" style="display: none;">
                        <!------- start #accordion----------->
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 p-0">
                                    <div id="accordion-5" role="tablist" aria-multiselectable="true" class="panel-group wrap">
                                        <!--Start  panel -->
                                        <div class="panel">
                                            <div role="tab" id="headingOne-3-2" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseOne-4" aria-expanded="true" aria-controls="collapseOne-4">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">08:00 – 09:00</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference Opening-4</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseOne-4" role="tabpanel" aria-labelledby="headingOne-3" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 2-->
                                        <div class="panel">
                                            <div role="tab" id="headingTwo-3-2" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseTwo-4" aria-expanded="true" aria-controls="collapseTwo-4">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme one-4</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseTwo-4" role="tabpanel" aria-labelledby="headingTwo-3" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingThree-3-2" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseThree-4" aria-expanded="true" aria-controls="collapseThree-4">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme two-4</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseThree-4" role="tabpanel" aria-labelledby="headingThree-3" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingFour-3-2" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseFour-4" aria-expanded="true" aria-controls="collapseFour-4">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">09:15 – 10:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme three-4</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseFour-4" role="tabpanel" aria-labelledby="headingFour-3" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingFive-3-2" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseFive-4" aria-expanded="true" aria-controls="collapseFive-4">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">16:40 – 17:30</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme four-4</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseFive-4" role="tabpanel" aria-labelledby="headingFive-3" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 7-->
                                        <div class="panel">
                                            <div role="tab" id="headingSix-4-2" class="panel-heading odd-color">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseSix-5" aria-expanded="true" aria-controls="collapseSix-5">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">18:20 – 19:10</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme five-4</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseSix-5" role="tabpanel" aria-labelledby="headingSix-4" class="panel-collapse collapse">
                                                <div class="panel-body-1">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                        <!--Start  panel 3-->
                                        <div class="panel">
                                            <div role="tab" id="headingSeven-3-2" class="panel-heading">
                                                <h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseSeven-4" aria-expanded="true" aria-controls="collapseSeven-4">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0 acc-date-sec">
                                                                <ul>
                                                                    <li class="acc-timing">18:20 – 19:10</li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-9 p-0 acc-date-sec-1">
                                                                <p class="Acc-theam">Conference theme six-4</p>
                                                            </div>
                                                        </div>
                                                    </a></h4>
                                            </div>
                                            <div id="collapseSeven-4" role="tabpanel" aria-labelledby="headingSeven-3" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                        <div class="row conf-data">
                                                            <div class="col-md-12 p-0">
                                                                <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                            </div>
                                                            <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img src="${assetsUrl}/templates/event/images/speaker-9.png" class="img-responsive s-img"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end of panel -->
                                    </div>
                                </div>
                            </div>
                        </div><!-- end of #accordion -->
                    </div><!-- end of tab -->
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("events-slider", {
        label: `<div class="inherit-color-svg">${faq}
            <div style="margin-top: 4.14px">Slider</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="tech-companies" class="custom-sec10">
            <div class="container">
                <div class="row align-items-center custom-sec10-row1">
                    <div data-aos="fade-down" data-aos-duration="2000" class="col-lg-12 col-md-12 col-sm-12 p-0 card-container aos-init aos-animate">
                        <div class="slider-card">
                            <p class="card-subhead">#The leading startup event</p>
                            <p class="card-head">The New Era of Tech
                                <b>Companies</b>
                            </p>
                            <p class="card-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2000" class="col-lg-12 col-md-12 col-sm-12 p-0 card-container-1 aos-init aos-animate">
                        <div class="slider-card-mobi">
                            <p class="card-subhead">#The leading startup event</p>
                            <p class="card-head">The New Era of
                                <b id="io8df3l">Tech Companies</b>
                            </p>
                            <p class="card-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                        </div>
                    </div>
                    <div id="slider-new" class="owl-carousel">
                        <div class="item"><a href="#"><img src="${assetsUrl}/templates/event/images/slider-2.jfif" alt=""></a></div>

                        <div class="item black"><a href="#"><img src="${assetsUrl}/templates/event/images/slider-1.jfif" alt=""></a></div>

                        <div class="item"><a href="#"><img src="${assetsUrl}/templates/event/images/slider-3.jfif" alt=""></a></div>

                        <div class="item black"><a href="#"><img src="${assetsUrl}/templates/event/images/slider-2.jfif" alt=""></a></div>

                        <div class="item"><a href="#"><img src="${assetsUrl}/templates/event/images/slider-1.jfif" alt=""></a></div>

                        <div class="item black"><a href="#"><img src="${assetsUrl}/templates/event/images/slider-3.jfif" alt=""></a></div>

                        <div class="item"><a href="#"><img src="${assetsUrl}/templates/event/images/slider-2.jfif" alt=""></a></div>

                        <div class="item black"><a href="#"><img src="${assetsUrl}/templates/event/images/slider-1.jfif" alt=""></a></div>

                        <div class="item"><a href="#"><img src="${assetsUrl}/templates/event/images/slider-3.jfif" alt=""></a></div>

                        <div class="item black"><a href="#"><img src="${assetsUrl}/templates/event/images/slider-2.jfif" alt=""></a></div>
                    </div>
                </div>
            </div>
        </section>`
    })

};