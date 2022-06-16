import { assetsUrl } from "../../../../../settings";
import { countdown } from "../../extras/icons";
import { header, gallery, popUp, faq, team, form, testimonials, footer, cta, pricing } from "./icons";

export const blog = (editor) => {

    editor.BlockManager.add("blog-header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Template Components",
        content: `
        <div id="navbar_top" class="custom-sec1-main">
            <div class="container-nav custom-sec1">
                <nav id="myHeader" class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid nav-container"><a href="./home.html"><img src="${assetsUrl}/templates/blog/images/Logo.png" alt="" class="img-fluid logo"></a>
                        <div id="navbarResponsive" class="navbar-collapse hideshow content2 w100">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item"> <a href="./home.html" class="nav-link animate__animated active">Home</a></li>
                                <li class="nav-item"> <a href="./about.html" class="nav-link animate__animated">About</a></li>
                                <li class="nav-item"> <a href="./contact.html" class="nav-link animate__animated">Contact</a></li>
                            </ul>
                        </div>
                        <div id="menu-revealer" class="wrapper"><button data-label="" role="button" class="menu-toggle"> <span class="icon-bars"></span></button></div>
                    </div>
                </nav>
            </div>
        </div>`
    })

    editor.BlockManager.add("blog-banner", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Banner</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec2 web-view-collage">
            <div class="top-bg"><img src="${assetsUrl}/templates/blog/images/bg-line.png" class="img-responsive bg-img-1"></div>
            <div class="container">
                <div class="row top-banner">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0"><img src="${assetsUrl}/templates/blog/images/home-top-bg-1.png" alt="" class="img-responsive T-img-1"><img src="${assetsUrl}/templates/blog/images/home-top-shape-bg.png" alt="" class="img-responsive T-img-2"><img src="${assetsUrl}/templates/blog/images/home-top-shape-sm.png" alt="" class="img-responsive T-img-3 frame">
                        <div data-aos="fade-right" data-aos-duration="2000" class="top-text aos-init aos-animate">
                            <h1 class="home-head">My Daily Travel Blog <br>To Inspire And Get You <br>Motivated!</h1>
                            <div class="col-lg-8 col-md-8 mb-12 p-0">
                                <p class="home-para">Hi! I'm <b>Paul Harrington</b> — an adventure travel photographer, professional blogger, and digital nomad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><img src="${assetsUrl}/templates/blog/images/rotate.png" alt="" class="rotate">
        </section>
        <section class="custom-sec2 mobile-view-collage">
            <div class="top-bg-sm"><img src="${assetsUrl}/templates/blog/images/bg-line.png" class="img-responsive bg-img-sm"></div>
            <div class="container">
                <div class="row top-banner">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-lg-12 col-md-12 col-sm-12 p-0 top-text aos-init aos-animate">
                        <h1 class="home-head">My Daily Travel Blog <br>To Inspire And Get You Motivated!</h1>
                        <div class="col-lg-8 col-md-8 mb-12 p-0">
                            <p class="home-para">Hi! I'm <b>Paul Harrington</b> — an adventure travel photographer, professional blogger, and digital nomad.</p>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0 img-collage"><img src="${assetsUrl}/templates/blog/images/home-top-bg-1.png" alt="" class="img-responsive T-img-1"><img src="${assetsUrl}/templates/blog/images/home-top-shape-bg.png" alt="" class="img-responsive T-img-2"><img src="${assetsUrl}/templates/blog/images/home-top-shape-sm.png" alt="" class="img-responsive T-img-3 frame"></div>
                </div>
            </div><img src="${assetsUrl}/templates/blog/images/rotate.png" alt="" class="rotate">
        </section>`
    })

    editor.BlockManager.add("blog-gallery", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Gallery</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec3">
            <div class="top-bg-1"><img src="${assetsUrl}/templates/blog/images/bg-line.png" class="img-responsive bg-img-2"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-7 col-sm-12 L-block"><img src="${assetsUrl}/templates/blog/images/home-img-1.png" alt="" data-aos="fade-right" data-aos-duration="2000" class="img-responsive img-1 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-lg aos-init aos-animate">
                            <p class="B-sub-head-lg">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-lg"><a href="./blog-priview.html" id="ilq1l">We are a modern restaurant in the center of the city</a></p>
                            <p class="B-para-lg">by Herman Mitchell</p>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 R-block">
                        <div class="top-bg-sm-1"><img src="${assetsUrl}/templates/blog/images/bg-line.png" class="img-responsive bg-img-sm-1"></div><img src="${assetsUrl}/templates/blog/images/home-img-2.png" alt="" data-aos="fade-left" data-aos-duration="2000" class="img-responsive img-2 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-sm top-space-blog aos-init aos-animate">
                            <p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-sm"><a href="./blog-priview.html" id="i9oev">We are a modern restaurant in the center of the city</a></p>
                            <p class="B-para-sm">by Herman Mitchell</p>
                        </div><img src="${assetsUrl}/templates/blog/images/home-img-3.png" alt="" data-aos="fade-left" data-aos-duration="2000" class="img-responsive img-3 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-sm top-space-blog aos-init aos-animate">
                            <p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-sm"><a href="./blog-priview.html" id="i273y">We are a modern restaurant in the center of the city</a></p>
                            <p class="B-para-sm">by Herman Mitchell</p>
                        </div><img src="${assetsUrl}/templates/blog/images/home-imge-4.png" alt="" data-aos="fade-left" data-aos-duration="2000" class="img-responsive img-4 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-sm top-space-blog aos-init aos-animate">
                            <p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-sm"><a href="./blog-priview.html" id="imm19e">We are a modern restaurant in the center of the city</a></p>
                            <p class="B-para-sm">by Herman Mitchell</p>
                        </div><img src="${assetsUrl}/templates/blog/images/home-img-4.png" alt="" data-aos="fade-left" data-aos-duration="2000" class="img-responsive img-5 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-sm top-space-blog aos-init aos-animate">
                            <p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-sm"><a href="./blog-priview.html" id="ie6j63">We are a modern restaurant in the center of the city</a></p>
                            <p class="B-para-sm">by Herman Mitchell</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("blog-gallery2", {
        label: `<div class="inherit-color-svg">${form}
            <div style="margin-top: 4.14px">Big Images</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec4">
            <div class="container-fluid">
                <div class="row custom-sec4-row2">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0">
                        <div class="slider-card">
                            <h1 class="home-head">Love for the <br>writing is our best <br>strategy!
                            </h1>
                            <p class="home-para">Hi! I'm <b>Paul Harrington </b>— an adventure travel photographer, professional blogger, and digital nomad.</p>
                        </div><img src="${assetsUrl}/templates/blog/images/home-img-6.png" alt="" class="img-responsive img-7"><img src="${assetsUrl}/templates/blog/images/home-top-shape-sm.png" alt="" class="img-responsive T-img-3 frame">
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("blog-blogs", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Blogs</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-12 L-block"><img src="${assetsUrl}/templates/blog/images/home-img-7.png" alt="" data-aos="fade-right" data-aos-duration="2000" class="img-responsive img-2 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-sm top-space-blog aos-init aos-animate">
                            <p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-sm"><a href="./blog-priview.html" id="ifdrby">We are a modern restaurant in the center of the city</a></p>
                            <p class="B-para-sm">by Herman Mitchell</p>
                        </div><img src="${assetsUrl}/templates/blog/images/home-img-8.png" alt="" data-aos="fade-right" data-aos-duration="2000" class="img-responsive img-3 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-sm top-space-blog aos-init aos-animate">
                            <p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-sm"><a href="./blog-priview.html" id="i4wfne">We are a modern restaurant in the center of the city</a></p>
                            <p class="B-para-sm">by Herman Mitchell</p>
                        </div><img src="${assetsUrl}/templates/blog/images/home-img-9.png" alt="" data-aos="fade-right" data-aos-duration="2000" class="img-responsive img-4 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-sm top-space-blog aos-init aos-animate">
                            <p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-sm"><a href="./blog-priview.html" id="iodr6d">We are a modern restaurant in the center of the city</a></p>
                            <p class="B-para-sm">by Herman Mitchell</p>
                        </div><img src="${assetsUrl}/templates/blog/images/home-img-10.png" alt="" data-aos="fade-right" data-aos-duration="2000" class="img-responsive img-5 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-sm top-space-blog aos-init aos-animate">
                            <p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-sm"><a href="./blog-priview.html" id="i3rtyt">We are a modern restaurant in the center of the city</a></p>
                            <p class="B-para-sm">by Herman Mitchell</p>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-12 R-block"><img src="${assetsUrl}/templates/blog/images/home-img-11.png" alt="" data-aos="fade-left" data-aos-duration="2000" class="img-responsive img-1 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-lg aos-init aos-animate">
                            <p class="B-sub-head-lg">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-lg"><a href="./blog-priview.html" id="ic9hjh">We are a modern restaurant in the center of the city</a></p>
                            <p class="B-para-lg">by Herman Mitchell</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top-bg-2"><img src="${assetsUrl}/templates/blog/images/bg-line.png" class="img-responsive bg-img-3"></div>
        </section>
        <section class="custom-sec6">
            <div class="container">
                <div class="row align-items-center custom-sec6-row1">
                    <div class="col-lg-6 col-md-6 col-sm-12 L-block"><img src="${assetsUrl}/templates/blog/images/home-img-12.png" alt="" data-aos="fade-right" data-aos-duration="2000" class="img-responsive img-12 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-lg aos-init aos-animate">
                            <p class="B-sub-head-lg">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-lg">We are a modern restaurant in the center of the city</p>
                            <p class="B-para-lg">by Herman Mitchell</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 R-block"><img src="${assetsUrl}/templates/blog/images/home-img-13.png" alt="" data-aos="fade-left" data-aos-duration="2000" class="img-responsive img-13 aos-init aos-animate">
                        <div data-aos="fade-up" data-aos-duration="2000" class="blog-data-lg aos-init aos-animate">
                            <p class="B-sub-head-lg">APR 11 • PHOTO, TRENDING</p>
                            <p class="B-head-lg">We are a modern restaurant in the center of the city</p>
                            <p class="B-para-lg">by Herman Mitchell</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("blog-gallery", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Gallery</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec7">
            <div class="container">
                <div class="row align-items-center custom-sec7-row1">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-lg-12 col-md-12 col-sm-12 p-0 aos-init aos-animate">
                        <h1 class="home-head">Follow us on <br>Instagram @siteseed</h1>
                        <div class="col-lg-5 col-md-5 col-sm-12 p-0">
                            <p class="home-para">Hi! I'm <b>Paul Harrington</b> — an adventure travel photographer, professional blogger, and digital nomad.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="prod-slider-container">
                <div id="slider-new" class="owl-carousel owl-loaded owl-drag">
                    <div class="owl-stage-outer">
                        <div class="owl-stage" style="transform: translate3d(-1680px, 0px, 0px); transition: all 0s ease 0s; width: 6324px; padding-left: 80px; padding-right: 80px;">
                            <div class="owl-item cloned" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners T-bottom"><img src="${assetsUrl}/templates/blog/images/home-slider-3.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners"><img src="${assetsUrl}/templates/blog/images/home-slider-4.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners T-bottom"><img src="${assetsUrl}/templates/blog/images/home-slider-5.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners T-bottom"><img src="${assetsUrl}/templates/blog/images/home-slider-1.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners"><img src="${assetsUrl}/templates/blog/images/home-slider-2.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners T-bottom"><img src="${assetsUrl}/templates/blog/images/home-slider-3.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners"><img src="${assetsUrl}/templates/blog/images/home-slider-4.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners T-bottom"><img src="${assetsUrl}/templates/blog/images/home-slider-5.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners T-bottom"><img src="${assetsUrl}/templates/blog/images/home-slider-1.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners"><img src="${assetsUrl}/templates/blog/images/home-slider-2.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 560.333px;">
                                <div class="item">
                                    <div class="crad taners T-bottom"><img src="${assetsUrl}/templates/blog/images/home-slider-3.png" alt="" class="img-fluid inner-T"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div>
                    <div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button></div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("blog-footer", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Footer</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec8">
            <div class="container">
                <div class="row custom-sec8-row1 mobile-flex">
                    <div class="col-lg-7 col-md-7 col-sm-12 p-0"><img src="${assetsUrl}/templates/blog/images/Logo.png" alt="" data-aos="fade-down" data-aos-duration="2000" class="img-responsive footer-logo aos-init aos-animate">
                        <p data-aos="fade-right" data-aos-duration="2000" class="Footer-para aos-init aos-animate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque in quam sollicitudin rhoncus vitae ac velit. Donec sed augue massa. Nam quis augue non lectus dignissim sollicitudin. Aliquam turpis massa, mollis a diam a, iaculis ultrices lorem.</p>
                        <div class="social-data">
                            <p class="Follow-text">Follow us:</p><span class="S-icon"><img src="${assetsUrl}/templates/blog/images/facebook%20(9)%201.png" alt="" data-aos="fade-up" class="shows aos-init aos-animate"></span><span class="S-icon"><img src="${assetsUrl}/templates/blog/images/twitter%20(4)%201.png" alt="" data-aos="fade-down" class="shows aos-init aos-animate"></span><span class="S-icon"><img src="${assetsUrl}/templates/blog/images/instagram%20(4)%201.png" alt="" data-aos="fade-up" class="shows aos-init aos-animate"></span><span class="S-icon"><img src="${assetsUrl}/templates/blog/images/youtube%20(3)%201.png" alt="" data-aos="fade-down" class="shows aos-init aos-animate"></span>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 p-0">
                        <h1 data-aos="fade-down" data-aos-duration="2000" class="Footer-head aos-init aos-animate">Get our <br>newsletter</h1>
                        <div class="email"><input placeholder="Enter your email" type="email" id="emails" name="emails" multiple="">
                            <div data-aos="fade-left" data-aos-duration="2000" class="form-group aos-init aos-animate"><input type="checkbox" id="check"><label for="check" class="check-txt">By submitting this form, You agree to The Universal Music Group.
                                    <br><a href="#" id="imenj2">Privacy Policy</a> and

                                    <a href="#" id="iu4u6t">Terms &amp; Conditions.</a></label></div><button class="btn success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="custom-sec9">
            <div class="container">
                <div class="row align-items-center custom-sec8-row1">
                    <div class="col-lg-6 col-md-6 col-sm-12 p-0">
                        <p class="copyright-text">© 2020 SITESEED. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="top-bg-4"><img src="${assetsUrl}/templates/blog/images/bg-line.png" class="img-responsive bg-img-5"></div>`
    })

    // =====================================================================
};