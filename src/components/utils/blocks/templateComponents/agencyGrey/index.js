import { assetsUrl } from "../../../../../settings";
import { countdown } from "../../extras/icons";
import { header, gallery, popUp, faq, team, form, testimonials, footer, cta, pricing } from "./icons";

export const agencyGrey = (editor) => {

    editor.BlockManager.add("agencyGrey-header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Template Components",
        content: `
        <div id="home">
            <nav id="myHeader" class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid"><a href="#"><img src="${assetsUrl}/templates/agencyGrey/agency-images/new-logo.png" att="" class="l-img"></a>
                    <div class="ipad web-v">
                        <div class="header-module">
                            <div id="mySidebar" class="sidebar"><a href="javascript:void(0)" onclick="off()" class="closebtn"> <span id="hom-1"><img src="${assetsUrl}/templates/agencyGrey/agency-images/cross-32.png" id="ijcil" class="menu-image shows btn-lg-head cros-buton"><img src="${assetsUrl}/templates/agencyGrey/agency-images/cross-hover-32.png" id="i0zvg" class="menu-image hides btn-lg-head cros-buton"></span></a>
                                <div class="row inner-nav-menu">
                                    <div class="col-md-6 Hide-mobi-view">
                                        <p class="social-class">Social</p> <a href="#" class="social-class">Facebook</a><a href="#" class="social-class">Behance</a><a href="#" class="social-class">Dribbble</a><a href="#" class="social-class">Instagram</a><a href="#" class="social-class">Youtube</a>
                                    </div>
                                    <div class="col-md-6 mobile-gap">
                                        <p class="social-class">Menu</p><a href="#aboutus" class="nav-class">About Us</a><a href="#servicessec" class="nav-class">Services</a><a href="#portfoliosec" class="nav-class">Portfolio</a><a href="#blogsec" class="nav-class">Blog</a><a href="#contactsec" class="nav-class">Contact Us</a>
                                    </div>
                                    <div class="col-md-12 nav-contact"><a href="#">
                                            <p class="social-class-1">Get in touch</p>
                                        </a>
                                        <p class="menu-mail">info@siteseed.io</p>
                                    </div>
                                </div><img src="${assetsUrl}/templates/agencyGrey/agency-images/sidebar-bg.png" class="side-img">
                            </div>
                            <div id="overlay" onclick="off()"></div><button onclick="on()" class="openbtn btn-lg-head"><span id="hom-2"><img src="${assetsUrl}/templates/agencyGrey/agency-images/hamburger-32.png" id="ibtij" class="menu-image shows"><img src="${assetsUrl}/templates/agencyGrey/agency-images/hamburger-hover-32.png" id="iwklc" class="menu-image hides"></span></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>`
    })

    editor.BlockManager.add("agencyGrey-banner", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Banner</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="one" class="top">
            <div class="col-lg-8 col-md-10 mb-12 p-0">
                <h1 class="agency-head-text-top"><b id="idx7f">Leading digital agency </b>with <br>solid design and development <br>expertise.</h1>
                <p class="agency-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate efficitur mauris et faucibus. Proin molestie, nulla eget fringilla vehicula, orci nibh porttitor risus.</p><button type="button" class="btn btn-lg top-mobi-view">Contact us
                    <img src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png" class="btn-over"></button>
            </div>
        </section>`
    })

    editor.BlockManager.add("agencyGrey-about", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">About</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="aboutus" class="vedio sect-spacing">
            <div class="col-md-12 col-lg-10 offset-lg-1 offset-mb-0 mb-12 mobi-space-V vedio-image">
                <div class="embed-responsive embed-responsive-16by9"><iframe allowfullscreen="" src="https://www.youtube.com/embed/tgbNymZ7vqY?" class="embed-responsive-item"></iframe>
                    <div class="overlay"> <span id="hom-3"><span id="hom-4"><img src="${assetsUrl}/templates/agencyGrey/agency-images/vedio-off.png" id="ia2yh" class="btn-lg-vedio shows"><img src="${assetsUrl}/templates/agencyGrey/agency-images/vedio-on.png" id="ix666" class="btn-lg-vedio hides"></span></span></div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("agencyGrey-service", {
        label: `<div class="inherit-color-svg">${form}
            <div style="margin-top: 4.14px">Services</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="servicessec" class="products sect-spacing">
            <div class="row">
                <div class="col-lg-6 col-md-6 mb-12 product-text-section">
                    <h1 class="agency-head-text">Experts in every <br> aspect of the product<br> lifecycle </h1>
                    <p class="agency-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate efficitur mauris et faucibus. Proin molestie, nulla eget fringilla vehicula, orci nibh porttitor risus.</p><button type="button" class="btn btn-lg">Contact us
                        <img src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png" class="btn-over"></button>
                </div>
                <div class="col-lg-6 col-md-6 mb-12 product-left-space">
                    <div class="right_c1">
                        <p> <span class="num-gap">01</span><span>Branding &amp; Visual Identity</span></p><img src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Small.png" class="img-fluid">
                    </div>
                    <div class="right_c1">
                        <p> <span class="num-gap">02</span> User Experience Design</p><img src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Small.png" class="img-fluid">
                    </div>
                    <div class="right_c1">
                        <p> <span class="num-gap">03</span> Mobile App &amp; Web Design</p><img src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Small.png" class="img-fluid">
                    </div>
                    <div class="right_c1">
                        <p><span class="num-gap">04 </span>Web Development</p><img src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Small.png" class="img-fluid">
                    </div>
                    <div class="right_c1">
                        <p> <span class="num-gap">05</span>Animation &amp; Motion Design</p><img src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Small.png" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("agencyGrey-testimonials", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">Testimonials</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="portfoliosec" class="testimonial sect-spacing">
            <div class="row">
                <div class="col-lg-5 col-md-5 mb-12">
                    <h1 class="agency-head-text mobile-space">What our <br>Clients say</h1>
                </div>
                <div class="col-lg-7 col-md-7 mb-12">
                    <div class="demo">
                        <div id="main-carousel" data-ride="carousel" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="d-block"></div>
                                    <div class="carousel-caption d-md-block">
                                        <p class="testimoanil-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor sem quam, eget vestibulum odio laoreet id.</p>
                                        <p class="test-heding">It was a great experience all around!</p>
                                        <p class="test-heding-2">Dennis Mulato</p>
                                        <p class="customers">Director, Digital Marketing &amp; Commerce</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-block"></div>
                                    <div class="carousel-caption d-md-block">
                                        <p class="testimoanil-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor sem quam, eget vestibulum odio laoreet id.</p>
                                        <p class="test-heding">It was a great experience all around!</p>
                                        <p class="test-heding-2">Dennis Mulato</p>
                                        <p class="customers">Director, Digital Marketing &amp; Commerce</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-block"></div>
                                    <div class="carousel-caption d-md-block">
                                        <p class="testimoanil-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor sem quam, eget vestibulum odio laoreet id.</p>
                                        <p class="test-heding">It was a great experience all around!</p>
                                        <p class="test-heding-2">Dennis Mulato</p>
                                        <p class="customers">Director, Digital Marketing &amp; Commerce</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-block"></div>
                                    <div class="carousel-caption d-md-block">
                                        <p class="testimoanil-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor sem quam, eget vestibulum odio laoreet id.</p>
                                        <p class="test-heding">It was a great experience all around!</p>
                                        <p class="test-heding-2">Dennis Mulato</p>
                                        <p class="customers">Director, Digital Marketing &amp; Commerce</p>
                                    </div>
                                </div>
                            </div><!-- /.carousel-inner --><a href="#main-carousel" data-slide="next" class="carousel-control-next"><span class="carousel-control-next-icon-new"><img src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png" class="btn-over-testimonial"></span><span aria-hidden="true" class="sr-only">Next</span></a>
                        </div><!-- /.carousel -->
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("agencyGrey-gallery", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Gallery</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="five" class="partner-section sect-spacing">
            <div class="row">
                <div class="row">
                    <div class="col-md-3 b-w agency-partner-sec"><img src="${assetsUrl}/templates/agencyGrey/agency-images/Vimeo.png" class="l-1 img-fluid"></div>
                    <div class="col-md-3 b-w agency-partner-sec no-border"><img src="${assetsUrl}/templates/agencyGrey/agency-images/Spotify.png" class="l-1 img-fluid"></div>
                    <div class="col-md-3 b-w agency-partner-sec"><img src="${assetsUrl}/templates/agencyGrey/agency-images/Wooden%20Dummy.png" class="l-1 img-fluid"></div>
                    <div class="col-md-3 b-w-2 agency-partner-sec"><img src="${assetsUrl}/templates/agencyGrey/agency-images/Max.png" class="l-1 img-fluid"></div>
                    <div class="col-md-3 b-w-1 agency-partner-sec"><img src="${assetsUrl}/templates/agencyGrey/agency-images/Aria.png" class="l-1 img-fluid"></div>
                    <div class="col-md-3 b-w-1 agency-partner-sec no-border"><img src="${assetsUrl}/templates/agencyGrey/agency-images/Bauknecht.png" class="l-1 img-fluid"></div>
                    <div class="col-md-3 b-w-1 agency-partner-sec N-Border-m"><img src="${assetsUrl}/templates/agencyGrey/agency-images/Jeep.png" class="l-1 img-fluid"></div>
                    <div class="col-md-3 agency-partner-sec"><img src="${assetsUrl}/templates/agencyGrey/agency-images/Placeholder.png" class="l-1 img-fluid"></div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("agencyGrey-casestudy", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Case Study</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="six" class="case-study-section sect-spacing">
            <div class="row">
                <div class="col-lg-7 col-md-7 mb-12 product-text-section"><img src="${assetsUrl}/templates/agencyGrey/agency-images/image%203.jpg" class="img-responsive case-img"></div>
                <div class="col-lg-5 col-md-5 mb-12 product-text-section-1">
                    <p class="agency-numbring">01</p>
                    <p class="agency-casestudy-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate efficitur mauris et faucibus.</p><button type="button" class="btn btn-lg">See Case
                        <img src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png" class="btn-over"></button>
                    <p class="case-text-bottom"><span class="agency-site">Website:</span><a href="#" id="i46m59">siteseed.io</a></p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-7 mb-12 product-text-section"><img src="${assetsUrl}/templates/agencyGrey/agency-images/image%204.jpg" class="img-responsive case-img"></div>
                <div class="col-lg-5 col-md-5 mb-12 product-text-section-1">
                    <p class="agency-numbring">02</p>
                    <p class="agency-casestudy-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate efficitur mauris et faucibus.</p><button type="button" class="btn btn-lg">See Case
                        <img src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png" class="btn-over"></button>
                    <p class="case-text-bottom"><span class="agency-site">Website:</span><a href="#" id="imaojr">siteseed.io</a></p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-7 mb-12 product-text-section"><img src="${assetsUrl}/templates/agencyGrey/agency-images/image%205.jpg" class="img-responsive case-img"></div>
                <div class="col-lg-5 col-md-5 mb-12 product-text-section-1">
                    <p class="agency-numbring">03</p>
                    <p class="agency-casestudy-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate efficitur mauris et faucibus.</p><button type="button" class="btn btn-lg">See Case
                        <img src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png" class="btn-over"></button>
                    <p class="case-text-bottom"><span class="agency-site">Website:</span><a href="#" id="iwbt1u">siteseed.io</a></p>
                </div>
            </div>
            <div class="col-md-12 text-center no-space-butn"><button type="button" class="btn btn-lg ngape">See More
                    <img src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png" class="btn-over"></button></div>
        </section>`
    })

    editor.BlockManager.add("agencyGrey-blog", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Blog</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="blogsec" class="our-blog sect-spacing">
            <div class="row">
                <div class="col-lg-5 col-md-5 mb-12">
                    <h1 class="agency-head-text">What’s new?<br>
                        Our blog and <br>news</h1>
                </div>
                <div class="col-lg-7 col-md-7 mb-12 i-spc">
                    <div class="block">
                        <p class="agency-blog-para"><a href="#" class="inner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></p>
                        <p class="agency-blog-date">Jun 25, 2020</p>
                    </div>
                    <div class="block">
                        <p class="agency-blog-para"><a href="#" class="inner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></p>
                        <p class="agency-blog-date">Jun 25, 2020</p>
                    </div>
                    <div class="block">
                        <p class="agency-blog-para"><a href="#" class="inner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></p>
                        <p class="agency-blog-date">Jun 25, 2020</p>
                    </div>
                    <div class="block">
                        <p class="agency-blog-para"><a href="#" class="inner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></p>
                        <p class="agency-blog-date">Jun 25, 2020</p>
                    </div><button type="button" class="btn btn-lg">See More
                        <img src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png" class="btn-over"></button>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("agencyGrey-cta", {
        label: `<div class="inherit-color-svg">${cta}
            <div style="margin-top: 4.14px">CTA</div>
        </div>`,
        category: "Template Components",
        content: `
        <div id="contactsec" class="need-help-section center-1 contact-bg">
            <div class="inner-contac-block">
                <div class="center-contant offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-mb-0 mb-12">
                    <p class="agency-contact-para-top">Need help with a project?</p>
                    <h1 class="agency-contact-heading">Let’s talk!</h1>
                    <p class="agency-contact-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque sit amet dolor sit amet molestie. Morbi malesuada nunc quam.</p><br><br><button type="button" class="btn btn-lg">Contact Us
                        <img src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png" class="btn-over"></button>
                </div><img src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Large.png" class="ribbon">
            </div>
        </div>`
    })

    editor.BlockManager.add("agencyGrey-footer", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Footer</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="row footer-section">
            <ul class="left-col"><img src="${assetsUrl}/templates/agencyGrey/agency-images/Logo%20Design.png"></ul>
            <ul class="right-col">
                <li class="B-footer-1"><a id="hom-5" href="#"><img src="${assetsUrl}/templates/agencyGrey/agency-images/insta-32.png" class="social-icon-bg"></a></li>
                <li class="B-footer-1"><a id="hom-6" href="#"><img src="${assetsUrl}/templates/agencyGrey/agency-images/fb-32.png" class="social-icon-bg"></a></li>
                <li class="B-footer-1"><a id="hom-7" href="#"><img src="${assetsUrl}/templates/agencyGrey/agency-images/dribal-32.png" class="social-icon-bg"></a></li>
                <li class="B-footer-1"><a id="hom-8" href="#"><img src="${assetsUrl}/templates/agencyGrey/agency-images/behance-32.png" class="social-icon-bg"></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <ul class="left-col-1">
                <li class="B-footer"><a href="#">About Us</a></li>
                <li class="B-footer"><a href="#">Services</a></li>
                <li class="B-footer"><a href="#">Portfolio</a></li>
                <li class="B-footer"><a href="#">Blog</a></li>
                <li class="B-footer"><a href="#">Contact Us</a></li>
            </ul>
            <p class="right-col-1">© 2020 SiteSeed. All Rights Reserved.</p>
        </div>`
    })

    // =====================================================================
};