import { assetsUrl } from "../../../../../settings";
import { countdown } from "../../extras/icons";
import { header, gallery, popUp, faq, team, form, testimonials, footer, cta, pricing } from "./icons";

export const spa = (editor) => {

    editor.BlockManager.add("therapists-banner", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Banner</div>
        </div>`,
        category: "Template Components",
        content: `
        <div id="home" class="bg-img">
            <div class="top-text">
                <div class="offset-md-1 col-md-5 offset-lg-1 col-lg-5 offset-mb-0 mb-12 Web-space">
                    <h1 class="top-heading">Experience allow us<br>
                        to create unique<br>
                        things.
                    </h1>
                    <p class="top-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam interdum quam nec imperdiet. Aenean nec pretium arcu. Morbi venenatis imperdiet nulla, sit amet dapibus massa tempus porttitor.</p><button class="know-more-button">KNOW MORE</button>
                </div>
            </div>
        </div>`
    })

    editor.BlockManager.add("therapists-header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Template Components",
        content: `
        <nav id="myHeader" class="navbar navbar-expand-lg navbar-dark">
            <div class="container mobi-container"><a href="#"><img src="${assetsUrl}/templates/spa/images/Logo.png" att="" class="l-img"></a><button type="button" data-trigger="#collapsibleNavbar" class="navbar-toggler"> <span class="navbar-toggler-icon"></span></button>
                <div id="collapsibleNavbar" class="f12 navbar-collapse"><a href="#"><img src="${assetsUrl}/templates/spa/images/Logo-W.png" att="" class="l-img mobi-logo"></a>
                    <div class="offcanvas-header mt-3"><i aria-hidden="true" class="fa fa-times btn-close"></i></div>
                    <ul class="navbar-nav">
                        <li class="nav-item cool-link"> <a href="#home" class="nav-link nav-link-1 active">Home</a></li>
                        <li class="nav-item cool-link"> <a href="#About-section" class="nav-link nav-link-1">About Us</a></li>
                        <li class="nav-item cool-link"> <a href="#service-section" class="nav-link nav-link-1">Services</a></li>
                        <li class="nav-item cool-link"> <a href="#our-gallery-section" class="nav-link nav-link-1">Gallery</a></li>
                        <li class="nav-item cool-link"> <a href="#Testimonials-sectionn" class="nav-link nav-link-1">Testimonial</a></li>
                        <li class="nav-item cool-link"> <a href="#Our-BLOG-sectionn" class="nav-link nav-link-1">Blog</a></li>
                        <li class="nav-item cool-link"> <a href="#Contact-us-section" class="nav-link nav-link-1">Contact us</a></li>
                    </ul>
                    <div class="ipad mobi-v">
                        <div class="header-module"><button class="Book-now-button">BOOK NOW</button></div>
                    </div>
                </div>
                <div class="ipad web-v">
                    <div class="header-module"><button class="Book-now-button">BOOK NOW</button></div>
                </div>
            </div>
        </nav>`
    })

    editor.BlockManager.add("therapists-about", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">About</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="About-section" class="About-us">
            <div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-mb-0 mb-12 p-0">
                <div class="row text-center">
                    <div class="col-lg-6 col-md-6 mb-12"><img src="${assetsUrl}/templates/spa/images/about-us-img.jpg" class="img-responsive"></div>
                    <div class="col-lg-6 col-md-6 mb-12 text-left About-tet">
                        <p class="Abt-txt">About Us</p>
                        <h1 class="top-heading">Treat Yourself to<br>
                            a Relaxing Day at<br>
                            the Spa</h1>
                        <p class="top-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p><button class="know-more-button">KNOW MORE</button>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("therapists-service", {
        label: `<div class="inherit-color-svg">${form}
            <div style="margin-top: 4.14px">Service</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="service-section" class="Our services">
            <div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-mb-0 mb-12 p-0">
                <div class="row text-center">
                    <div class="col-lg-5 col-md-12 mb-12 text-left p-0">
                        <div class="service-text-block">
                            <p class="Abt-txt">Our Services</p>
                            <h1 class="top-heading">An Incredible<br>
                                Spa Experience
                            </h1>
                            <div class="service-txt">
                                <p class="top-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </div><img src="${assetsUrl}/templates/spa/images/Services-img.jpg" class="img-responsive">
                    </div>
                    <div class="latest-services-block col-lg-7 col-md-12 mb-12" id="iset3">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 mb-12">
                                <h1 class="B-services-heading"><span class="num-count">1</span>&nbsp; Message Therapy</h1>
                                <p class="B-services-text">Lorem ipsum dolor sit amet,
                                    <br>consectetur adipiscing elit. Fusce
                                    <br>aliquam interdum quam nec imperdiet.
                                </p>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-12">
                                <h1 class="B-services-heading"><span class="num-count">2</span>&nbsp; Physio Therapy</h1>
                                <p class="B-services-text">Lorem ipsum dolor sit amet,
                                    <br>consectetur adipiscing elit. Fusce
                                    <br>aliquam interdum quam nec imperdiet.
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 mb-12">
                                <h1 class="B-services-heading"><span class="num-count">3</span>&nbsp; Aroma Therapy</h1>
                                <p class="B-services-text">Lorem ipsum dolor sit amet,
                                    <br>consectetur adipiscing elit. Fusce
                                    <br>aliquam interdum quam nec imperdiet.
                                </p>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-12">
                                <h1 class="B-services-heading"><span class="num-count">4</span>&nbsp; Body Treatments</h1>
                                <p class="B-services-text">Lorem ipsum dolor sit amet,
                                    <br>consectetur adipiscing elit. Fusce
                                    <br>aliquam interdum quam nec imperdiet.
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 mb-12">
                                <h1 class="B-services-heading"><span class="num-count">5</span>&nbsp; Sports Massage</h1>
                                <p class="B-services-text">Lorem ipsum dolor sit amet,
                                    <br>consectetur adipiscing elit. Fusce
                                    <br>aliquam interdum quam nec imperdiet.
                                </p>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-12">
                                <h1 class="B-services-heading"><span class="num-count">6</span>&nbsp; Hot Stone Massage</h1>
                                <p class="B-services-text">Lorem ipsum dolor sit amet,
                                    <br>consectetur adipiscing elit. Fusce
                                    <br>aliquam interdum quam nec imperdiet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 offset-lg-4 col-lg-8 offset-mb-0 mb-12 p-0">
                        <div class="img-container" id="i92d6i"><img src="${assetsUrl}/templates/spa/images/vedio-imge.jpg" id="iksukn" class="img-responsive image video-img">
                            <div class="overlay"> <span id="hom"><img src="${assetsUrl}/templates/spa/images/play-button-B.png" class="popup image_on"><img src="${assetsUrl}/templates/spa/images/play-button-G.png" class="popup image_off"></span></div><iframe allowfullscreen="" id="cartoonVideo" width="560" height="315" src="https://www.youtube.com/embed/YE7VzlLtp-4?" frameborder="0">
                            </iframe>
                        </div>
                        <!--modal button-->
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("therapists-gallery", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Gallery</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="our-gallery-section" class="Our-gallery">
            <div class="row text-center">
                <div class="col-lg-5 col-md-12 mb-12 text-left p-0">
                    <div class="gallery-text-block">
                        <p class="Abt-txt">Our Gallery</p>
                        <h1 class="top-heading">Bring Out The<br>
                            Hidden Beauty
                        </h1>
                        <div class="service-txt">
                            <p class="top-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12 mb-12 p-0"><img src="${assetsUrl}/templates/spa/images/Gallery-img-1.jpg" class="img-responsive"></div>
                <div class="col-lg-5 col-md-12 mb-12 p-0"><img src="${assetsUrl}/templates/spa/images/O6RXL30.jpg" class="img-responsive G-img-bottom"><img src="${assetsUrl}/templates/spa/images/Gallery-img-4.jpg" class="img-responsive G-img-bottom-1"></div>
                <div class="col-lg-7 col-md-12 mb-12 p-0"><img src="${assetsUrl}/templates/spa/images/Gallery-img-3.jpg" class="img-responsive"></div>
            </div>
        </section>`
    })

    editor.BlockManager.add("therapists-blog", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Blog</div>
        </div>`,
        category: "Template Components", 
        content: `
        <section id="Our-BLOG-sectionn" class="our-blog-section">
            <div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-mb-0 mb-12 p-0">
                <div class="col-lg-12 col-md-12 mb-12 text-left p-0">
                    <div class="experience-text-block">
                        <p class="Abt-txt">Our Blog</p>
                        <h1 class="top-heading">Experience allows us to create<br>
                            unique things.
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div id="music-marathon" class="col-lg-6 col-md-6 mb-12 p-0">
                        <div class="content">
                            <h1 class="B-blog-heading">Messmerising music maraton was create with spinning records &amp; special</h1>
                            <p class="P-blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget,</p><a href="#">
                                <p class="learn-txt">Learn more
                                    <img src="${assetsUrl}/templates/spa/images/right-arrow-B.png" class="R-arrow-img">
                                </p>
                            </a>
                        </div>
                    </div>
                    <div id="music-marathon-2" class="col-lg-6 col-md-6 mb-12 p-0">
                        <div class="content">
                            <h1 class="B-blog-heading-w" id="idgnqe">Messmerising music maraton was create with spinning records &amp; special</h1>
                            <p class="P-blog-text" id="i9k9z3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, vestibulum ac nunc.</p><a href="#">
                                <p class="learn-txt" id="ifiu6y">Learn more
                                    <img src="${assetsUrl}/templates/spa/images/right-arrow-W.png" class="R-arrow-img">
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="music-marathon-3" class="col-lg-6 col-md-6 mb-12 p-0">
                        <div class="content">
                            <h1 class="B-blog-heading">Messmerising music maraton was create with spinning records &amp; special</h1>
                            <p class="P-blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget,</p><a href="#">
                                <p class="learn-txt">Learn more
                                    <img src="${assetsUrl}/templates/spa/images/right-arrow-B.png" class="R-arrow-img">
                                </p>
                            </a>
                        </div>
                    </div>
                    <div id="music-marathon-img" class="col-lg-6 col-md-6 mb-12 p-0">
                        <div class="content content-img"><img src="${assetsUrl}/templates/spa/images/experience-img.jpg" class="img-responsive exp-img"></div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("therapists-testimonial", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">Testimonial</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="Testimonials-sectionn" class="testimonial-section">
            <div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-mb-0 mb-12 p-0">
                <div class="experience-text-block">
                    <p class="Abt-txt">Our Testimonial</p>
                    <h1 class="top-heading">What Our Customers<br>
                        Are Saying
                    </h1>
                </div>
                <div class="demo">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="testimonial-slider" class="owl-carousel">
                                    <div class="testimonial testimonial-1" id="iz1j1n">
                                        <h3 class="title">Help us to improve our <br>productivity</h3>
                                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae.</p>
                                        <div class="testimonial-content">
                                            <div class="pic"><img src="${assetsUrl}/templates/spa/images/profile-1.png" alt="#"></div>
                                            <div class="content-t">
                                                <h4 class="name">Samantha Willian</h4><span class="post">Senior designer at design studio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="testimonial testimonial-2">
                                        <h3 class="title">Help us to improve our <br>productivity</h3>
                                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae.</p>
                                        <div class="testimonial-content">
                                            <div class="pic"><img src="${assetsUrl}/templates/spa/images/profil-2.png" alt="#"></div>
                                            <div class="content-t">
                                                <h4 class="name">Samantha Willian</h4><span class="post">Senior designer at design studio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="testimonial testimonial-3" id="iin1vb">
                                        <h3 class="title">Help us to improve our <br>productivity</h3>
                                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae.</p>
                                        <div class="testimonial-content">
                                            <div class="pic"><img src="${assetsUrl}/templates/spa/images/profile-1.png" alt="#"></div>
                                            <div class="content-t">
                                                <h4 class="name">Samantha Willian</h4><span class="post">Senior designer at design studio</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("therapists-pricing", {
        label: `<div class="inherit-color-svg">${pricing}
            <div style="margin-top: 4.14px">Subscribe</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-mb-0 mb-12 p-0">
            <div class="row subscribe-section">
                <div class="col-lg-5 col-md-12 mb-12 p-0 testimonial-Text-sec" id="i7i9r2">
                    <div class="content-1">
                        <h1 class="B-blog-heading">Passion Commitment &amp; Love For Natural Beauty</h1>
                        <p class="P-blog-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p><button class="know-more-button-B text-center">KNOW MORE</button>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 mb-12 p-0"><img src="${assetsUrl}/templates/spa/images/testimonial-img-1.jpg" alt="#" class="img-responsive testimonial-U-img">
                    <div class="col-md-12 col-lg-12 mb-12 Testimonial-bottom">
                        <div class="column"><img src="${assetsUrl}/templates/spa/images/Testimonial-Services.jpg" class="img-responsive"></div>
                        <div class="column BOX-1"> <span class="bio-org-box"><img src="${assetsUrl}/templates/spa/images/drop-leaf-table.svg" alt="#" class="fb-icon"><br>
                                <p class="percentge">100%</p>
                                <p class="descrpt">bio &amp; organic no <br>tasted on animals</p>
                            </span></div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 mb-12 p-0"><img src="${assetsUrl}/templates/spa/images/testimonial-img-2.jpg" alt="#" class="img-responsive"></div>
            </div>
        </div>`
    })

    editor.BlockManager.add("therapists-cta", {
        label: `<div class="inherit-color-svg">${cta}
            <div style="margin-top: 4.14px">CTA</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="Contact-us-section" class="Footer-section">
            <div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-mb-0 mb-12 p-0">
                <div class="col-md-12 offset-lg-3 col-lg-6 offset-mb-0 mb-12 p-0">
                    <div class="experience-text-block">
                        <h1 class="footer-heading text-center">Subscribe To Our Newsletter</h1>
                        <p class="F-blog-text text-center">Subscribe to the free newsletter and receive notifications of new products and promotions!</p>
                    </div>
                    <div class="search"><input type="text" placeholder="Enter your email" class="form-control form-rounded"><button class="search-more-button-B text-center">SUBMIT</button></div>
                </div>
                <div class="row searc-section">
                    <div class="footer-sec-1"><img src="${assetsUrl}/templates/spa/images/Services-img-N.jpg" alt="#" class="img-responsive"></div>
                    <div class="footer-sec-1"><img src="${assetsUrl}/templates/spa/images/Footer-img-2.jpg" alt="#" class="img-responsive"></div>
                    <div class="footer-sec-1"><img src="${assetsUrl}/templates/spa/images/footer-img-3.jpg" alt="#" class="img-responsive"></div>
                    <div class="footer-sec-1"><img src="${assetsUrl}/templates/spa/images/footer-img-4.jpg" alt="#" class="img-responsive"></div>
                    <div class="footer-sec-1 insta-follow-sec"><span class="inner-follow-sec"><img src="${assetsUrl}/templates/spa/images/instagram-sketched.svg" alt="#" id="iyygdx"><br>
                            Follow us<br>
                            on instagram<br> <a href="#" id="insta-hashtag">#SiteSeed</a></span></div>
                </div>
                <div class="row bottom-nav">
                    <ul class="left-col">
                        <li class="B-footer"><a href="#">Home</a></li>
                        <li class="B-footer"><a href="#">About Us</a></li>
                        <li class="B-footer"><a href="#">Services</a></li>
                        <li class="B-footer"><a href="#">Gallery</a></li>
                        <li class="B-footer"><a href="#">Testimonial</a></li>
                        <li class="B-footer"><a href="#">Blog</a></li>
                        <li class="B-footer"><a href="#">Contact us</a></li>
                    </ul>
                    <ul class="right-col">
                        <li class="B-footer-1"><a id="hom-2" href="#" class="hom"><img src="${assetsUrl}/templates/spa/images/facebook%20(5).png" alt="#" class="image_on"><img src="${assetsUrl}/templates/spa/images/fb-B.png" class="image_off"></a></li>
                        <li class="B-footer-1"><a id="hom-3" href="#" class="hom"><img src="${assetsUrl}/templates/spa/images/skype.png" alt="#" class="image_on"><img src="${assetsUrl}/templates/spa/images/skype-B.png" class="image_off"></a></li>
                        <li class="B-footer-1"><a id="hom-4" href="#" class="hom"><img src="${assetsUrl}/templates/spa/images/linkedin%20(2).png" alt="#" class="image_on"><img src="${assetsUrl}/templates/spa/images/linkedin-B.png" class="image_off"></a></li>
                        <li class="B-footer-1"><a id="hom-5" href="#" class="hom"><img src="${assetsUrl}/templates/spa/images/twitter.png" alt="#" class="image_on"><img src="${assetsUrl}/templates/spa/images/twite-B.png" class="image_off"></a></li>
                    </ul>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("therapists-footer", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Footer</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="Contact-us-section" class="Footer-section">
            <div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-mb-0 mb-12 p-0">
                <div class="col-md-12 offset-lg-3 col-lg-6 offset-mb-0 mb-12 p-0">
                    <div class="experience-text-block">
                        <h1 class="footer-heading text-center">Subscribe To Our Newsletter</h1>
                        <p class="F-blog-text text-center">Subscribe to the free newsletter and receive notifications of new products and promotions!</p>
                    </div>
                    <div class="search"><input type="text" placeholder="Enter your email" class="form-control form-rounded"><button class="search-more-button-B text-center">SUBMIT</button></div>
                </div>
                <div class="row searc-section">
                    <div class="footer-sec-1"><img src="${assetsUrl}/templates/spa/images/Services-img-N.jpg" alt="#" class="img-responsive"></div>
                    <div class="footer-sec-1"><img src="${assetsUrl}/templates/spa/images/Footer-img-2.jpg" alt="#" class="img-responsive"></div>
                    <div class="footer-sec-1"><img src="${assetsUrl}/templates/spa/images/footer-img-3.jpg" alt="#" class="img-responsive"></div>
                    <div class="footer-sec-1"><img src="${assetsUrl}/templates/spa/images/footer-img-4.jpg" alt="#" class="img-responsive"></div>
                    <div class="footer-sec-1 insta-follow-sec"><span class="inner-follow-sec"><img src="${assetsUrl}/templates/spa/images/instagram-sketched.svg" alt="#" id="iyygdx"><br>
                            Follow us<br>
                            on instagram<br> <a href="#" id="insta-hashtag">#SiteSeed</a></span></div>
                </div>
                <div class="row bottom-nav">
                    <ul class="left-col">
                        <li class="B-footer"><a href="#">Home</a></li>
                        <li class="B-footer"><a href="#">About Us</a></li>
                        <li class="B-footer"><a href="#">Services</a></li>
                        <li class="B-footer"><a href="#">Gallery</a></li>
                        <li class="B-footer"><a href="#">Testimonial</a></li>
                        <li class="B-footer"><a href="#">Blog</a></li>
                        <li class="B-footer"><a href="#">Contact us</a></li>
                    </ul>
                    <ul class="right-col">
                        <li class="B-footer-1"><a id="hom-2" href="#" class="hom"><img src="${assetsUrl}/templates/spa/images/facebook%20(5).png" alt="#" class="image_on"><img src="${assetsUrl}/templates/spa/images/fb-B.png" class="image_off"></a></li>
                        <li class="B-footer-1"><a id="hom-3" href="#" class="hom"><img src="${assetsUrl}/templates/spa/images/skype.png" alt="#" class="image_on"><img src="${assetsUrl}/templates/spa/images/skype-B.png" class="image_off"></a></li>
                        <li class="B-footer-1"><a id="hom-4" href="#" class="hom"><img src="${assetsUrl}/templates/spa/images/linkedin%20(2).png" alt="#" class="image_on"><img src="${assetsUrl}/templates/spa/images/linkedin-B.png" class="image_off"></a></li>
                        <li class="B-footer-1"><a id="hom-5" href="#" class="hom"><img src="${assetsUrl}/templates/spa/images/twitter.png" alt="#" class="image_on"><img src="${assetsUrl}/templates/spa/images/twite-B.png" class="image_off"></a></li>
                    </ul>
                </div>
            </div>
        </section>`
    })
    // =====================================================================
};