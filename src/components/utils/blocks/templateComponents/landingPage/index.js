import { assetsUrl } from "../../../../../settings";
import { countdown } from "../../extras/icons";
import { header, gallery, popUp, faq, team, form, testimonials, footer, cta, pricing } from "./icons";

export const landingPage = (editor) => {

    editor.BlockManager.add("landingPage-header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Template Components",
        content: `
        <div id="navbar_top" class="custom-sec1-main">
            <div class="container container-nav custom-sec1">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid"><a href="#" class="navbar-brand"><img src="${assetsUrl}/templates/landingPage/images/Logo.png" alt="Logo Img" class="img-rounded"></a><button id="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
                            <div id="nav-icon1"><span></span><span></span></div>
                        </button>
                        <div id="navbarNav" class="navbar-collapse justify-content-center">
                            <ul id="menu" class="navbar-nav">
                                <li class="nav-item"><a aria-current="page" href="#features" class="nav-link">Features</a></li>
                                <li class="nav-item"><a href="#howitwork" class="nav-link">How it Works</a></li>
                                <li class="nav-item"><a href="#pricing" class="nav-link">Pricing</a></li>
                                <li class="nav-item"><a href="#faq" class="nav-link">FAQ</a></li>
                                <li class="nav-item"><a href="#testimonial-main" class="nav-link">Testimonial</a></li>
                                <li class="nav-item custom-last-child"><a href="#downloadtheapp" class="nav-link">Download the app</a></li>
                            </ul>
                        </div>
                        <div class="custom-nv-right">
                            <div class="nav-item"><a href="#downloadtheapp" class="nav-link">Download the app</a></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>`
    })

    editor.BlockManager.add("landingPage-banner", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Banner</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec2">
            <div class="container">
                <div class="row align-items-center">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-5 col-lg-5 col-sm-12 sec2-col-left aos-init aos-animate">
                        <h1>Simple,<br> accessible<br> micromobility<br> for all.</h1>
                        <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper lacus eu lorem ullamcorper, sed tincidunt nulla dictum. </p>
                        <div class="custom-playbtn">
                            <div class="left"><a href="#downloadtheapp">Download the app</a></div>
                            <div class="right"><a id="play-video" class="play top-video-target"><img src="${assetsUrl}/templates/landingPage/images/play-sign.png" alt="PlayImg" class="img-rounded blue top-video-target"><img src="${assetsUrl}/templates/landingPage/images/play-sign-hover.png" alt="PlayImg" id="idybh" class="img-rounded green top-video-target"><span>How it works</span></a></div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000" class="col-md-7 col-lg-7 col-sm-12 sec2-col-right aos-init aos-animate">
                        <div class="right-bg"><a><img src="${assetsUrl}/templates/landingPage/images/x52.png" alt="mob1" class="img-rounded"></a></div>
                    </div>
                </div>
            </div>
            <div id="video-head" class="VideoHead-popup-video">
                <div id="close-video" class="VideoHead-popup-video-exit">
                    <div class="VideoHead-popup-video-exit-line-1"></div>
                    <div class="VideoHead-popup-video-exit-line-2"></div>
                </div>
                <div class="VideoHead-popup-video-container">
                    <div class="VideoHead-popup-video-placeholder" id="idot2"><iframe allowfullscreen="1" id="top-head-player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/Rwk5PdpTxSU?&amp;autoplay=1" class="top-video-target"></iframe></div>
                </div>
            </div>
        </section>
        <div data-aos="fade-left" data-aos-duration="3000" class="col-md-12 col-lg-12 col-sm-12 sec2-col-right-mob aos-init aos-animate">
            <div class="right-bg"><a><img src="${assetsUrl}/templates/landingPage/images/x52.png" alt="mob1" class="img-rounded"></a></div>
        </div>`
    })

    editor.BlockManager.add("landingPage-clients", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">Clients</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-12 col-lg-12 col-sm-12 sec3-col-center justify-content-center">
                        <ul>
                            <li><a><img src="${assetsUrl}/templates/landingPage/images/large_slack-imgs.png" alt="brand" class="img-rounded"></a></li>
                            <li><a><img src="${assetsUrl}/templates/landingPage/images/Spotify_Logo_CMYK_Black.png" alt="brand" class="img-rounded"></a></li>
                            <li><a><img src="${assetsUrl}/templates/landingPage/images/woodendummy-logo-2x.png" alt="brand" class="img-rounded"></a></li>
                            <li><a><img src="${assetsUrl}/templates/landingPage/images/max.png" alt="brand" class="img-rounded"></a></li>
                            <li><a><img src="${assetsUrl}/templates/landingPage/images/jeep.png" alt="brand" class="img-rounded"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("landingPage-service", {
        label: `<div class="inherit-color-svg">${pricing}
            <div style="margin-top: 4.14px">Features</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="features" data-aos="fade-down" data-aos-duration="2000" class="custom-sec4 aos-init aos-animate">
            <div class="container">
                <div class="row align-items-center custom-sec4-row1">
                    <div class="col-md-12 col-lg-12 col-sm-12 sec4-col-center justify-content-center">
                        <h2>Awesome Apps Features</h2>
                        <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper lacus eu lorem <br> ullamcorper, sed tincidunt nulla dictum. </p>
                    </div>
                </div>
                <div class="row align-items-center custom-sec4-row2">
                    <div class="col-md-3 col-lg-3 col-sm-12"><img src="${assetsUrl}/templates/landingPage/images/love1.png" alt="brand" class="img-rounded">
                        <h5>Super Easy to Use</h5>
                        <p class="l-16">Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit <br> Etiam .</p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-sm-12"><img src="${assetsUrl}/templates/landingPage/images/features1.png" alt="brand" class="img-rounded">
                        <h5>Full Featured</h5>
                        <p class="l-16">Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit <br> Etiam .</p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-sm-12"><img src="${assetsUrl}/templates/landingPage/images/login1.png" alt="brand" class="img-rounded">
                        <h5>Fast &amp; Reliable</h5>
                        <p class="l-16">Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit <br> Etiam .</p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-sm-12"><img src="${assetsUrl}/templates/landingPage/images/support1.png" alt="brand" class="img-rounded">
                        <h5>24/7 Expert Support</h5>
                        <p class="l-16">Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit <br> Etiam .</p>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("landingPage-howitwork", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">How It Works</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="howitwork" class="custom-sec5">
            <div class="container">
                <div class="row align-items-center custom-sec5-row1">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-6 col-lg-6 col-sm-12 coll aos-init aos-animate"><img src="${assetsUrl}/templates/landingPage/images/x4.png" alt="brand" class="img-rounded"></div>
                    <div data-aos="fade-left" data-aos-duration="2000" class="col-md-6 col-lg-6 col-sm-12 custom-sec5-colr aos-init aos-animate">
                        <h2>How it works</h2>
                        <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing <br> elit. Etiam ullamcorper lacus eu lorem ullamcorper,<br> sed tincidunt nulla dictum. </p>
                        <div class="ullid">
                            <li>
                                <div data-aos="fade-down" data-aos-duration="2000" class="left aos-init aos-animate"><img src="${assetsUrl}/templates/landingPage/images/locate.png" alt="brand" class="img-rounded"></div>
                                <div class="right">
                                    <h5>Locate</h5>
                                    <p class="l-16">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit Etiam .</p>
                                </div>
                            </li>
                            <li>
                                <div data-aos="fade-down" data-aos-duration="2000" class="left aos-init aos-animate"><img src="${assetsUrl}/templates/landingPage/images/scan.png" alt="brand" class="img-rounded"></div>
                                <div class="right">
                                    <h5>Scan</h5>
                                    <p class="l-16">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit Etiam .</p>
                                </div>
                            </li>
                            <li>
                                <div data-aos="fade-down" data-aos-duration="2000" class="left aos-init aos-animate"><img src="${assetsUrl}/templates/landingPage/images/ride.png" alt="brand" class="img-rounded"></div>
                                <div class="right">
                                    <h5>Ride</h5>
                                    <p class="l-16">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit Etiam .</p>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="custom-sec6">
            <div class="container">
                <div class="row align-items-center custom-sec6-row1">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-6 col-lg-6 col-sm-12 custom-sec6-coll aos-init aos-animate">
                        <div class="custom-sec6-coll-inner">
                            <h2>Find A <br> Scooter In-App</h2>
                            <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing <br> elit. Etiam ullamcorper lacus eu lorem ullamcorper,<br> sed tincidunt nulla dictum. </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" class="col-md-6 col-lg-6 col-sm-12 custom-sec6-colr aos-init aos-animate"><img src="${assetsUrl}/templates/landingPage/images/Frame2.png" alt="brand" class="img-rounded"></div>
                </div>
            </div>
        </section>
        <section class="custom-sec7">
            <div class="container">
                <div class="row align-items-center custom-sec7-row1">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-6 col-lg-6 col-sm-12 custom-sec7-coll aos-init aos-animate"><img src="${assetsUrl}/templates/landingPage/images/Frame1.png" alt="brand" class="img-rounded"></div>
                    <div data-aos="fade-left" data-aos-duration="2000" class="col-md-6 col-lg-6 col-sm-12 custom-sec7-colr aos-init aos-animate">
                        <div class="custom-sec7-colr-inner">
                            <h2>Scan Code <br> to Unlock</h2>
                            <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing <br> elit. Etiam ullamcorper lacus eu lorem ullamcorper,<br> sed tincidunt nulla dictum. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="custom-sec8">
            <div class="container">
                <div class="row align-items-center custom-sec8-row1">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-6 col-lg-6 col-sm-12 custom-sec8-coll aos-init aos-animate">
                        <div class="custom-sec8-coll-inner">
                            <h2>Ride <br>Responssibly</h2>
                            <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing <br> elit. Etiam ullamcorper lacus eu lorem ullamcorper,<br> sed tincidunt nulla dictum. </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" class="col-md-6 col-lg-6 col-sm-12 custom-sec8-colr aos-init aos-animate"><img src="${assetsUrl}/templates/landingPage/images/Frame3.png" alt="brand" class="img-rounded"></div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("landingPage-pricing", {
        label: `<div class="inherit-color-svg">${pricing}
            <div style="margin-top: 4.14px">Pricing</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="pricing" data-aos="fade-down" data-aos-duration="2000" class="custom-sec9 aos-init aos-animate">
            <div class="container">
                <div class="row align-items-center custom-sec9-row1">
                    <div class="col-md-12 col-lg-12 col-sm-12 sec9-col-center justify-content-center">
                        <h2>Simple plans for everyone</h2>
                        <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper lacus eu lorem <br> ullamcorper, sed tincidunt nulla dictum. </p>
                        <div class="price-data"><span id="plan-monthly" class="pmt-plan">Pay Monthly</span><label class="switch"><input type="checkbox" id="pmt-plan-toggle" checked=""><span class="slider round"></span></label><span id="plan-yearly" class="pmt-plan plan-active">Pay Yearly<img src="${assetsUrl}/templates/landingPage/images/save20.png" alt="save" class="img-rounded"></span></div>
                    </div>
                </div>
                <div id="monthly-tab" class="row align-items-center custom-sec9-row2 plan-inactive">
                    <p class="p-usd">Price in
                        <span><select name="countries" id="select-monthly" class="resizeselect" style="width: 3px;">
                                <option selected="" value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="AUD">AUD</option>
                            </select></span>
                    </p>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="whole-plan">
                            <p class="l-22">Free</p>
                            <div class="p-per"><sup>$</sup>
                                <h5>0</h5>
                            </div>
                            <div class="p-per-btn"><a>Get Started</a></div>
                            <div class="facility">
                                <ul>
                                    <li class="tik">30,000+ graphic &amp; animated templates</li>
                                    <li class="tik">Instant access to 140 million stock images</li>
                                    <li class="tik">Upload your own fonts &amp; images</li>
                                    <li class="tik">500,000+ premium images</li>
                                    <li class="tik">32,000 videos &amp; animations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="whole-plan">
                            <p class="l-22">Pro</p>
                            <div class="p-per"><sup>$</sup>
                                <h5>7.99</h5><sub>/mo</sub>
                            </div>
                            <div class="p-per-btn"><a>Try 30 Days Free</a></div>
                            <div class="facility">
                                <ul>
                                    <li class="tik">30,000+ graphic &amp; animated templates</li>
                                    <li class="tik">Instant access to 140 million stock images</li>
                                    <li class="tik">Upload your own fonts &amp; images</li>
                                    <li class="tik">500,000+ premium images</li>
                                    <li class="tik">32,000 videos &amp; animations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="yearly-tab" class="row align-items-center custom-sec9-row3 plan-active">
                    <p class="p-usd">Price in
                        <span><select name="countries" id="select-yearly" class="resizeselect" style="width: 35px;">
                                <option selected="" value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="AUD">AUD</option>
                            </select></span>
                    </p>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="whole-plan">
                            <p class="l-22">Free</p>
                            <div class="p-per"><sup>$</sup>
                                <h5>0</h5>
                            </div>
                            <div class="p-per-btn"><a>Get Started</a></div>
                            <div class="facility">
                                <ul>
                                    <li class="tik">30,000+ graphic &amp; animated templates</li>
                                    <li class="tik">Instant access to 140 million stock images</li>
                                    <li class="no-tik">Upload your own fonts &amp; images</li>
                                    <li class="no-tik">500,000+ premium images</li>
                                    <li class="no-tik">32,000 videos &amp; animations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="whole-plan">
                            <p class="l-22">Pro</p>
                            <div class="p-per"><sup>$</sup>
                                <h5>95.88</h5><sub>/yr</sub>
                            </div>
                            <div class="p-per-btn"><a>Try 30 Days Free</a></div>
                            <div class="facility">
                                <ul>
                                    <li class="tik">30,000+ graphic &amp; animated templates</li>
                                    <li class="tik">Instant access to 140 million stock images</li>
                                    <li class="tik">Upload your own fonts &amp; images</li>
                                    <li class="tik">500,000+ premium images</li>
                                    <li class="tik">32,000 videos &amp; animations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("landingPage-faq", {
        label: `<div class="inherit-color-svg">${faq}
            <div style="margin-top: 4.14px">FAQ</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="faq" data-aos="fade-down" data-aos-duration="2000" class="custom-sec10 aos-init">
            <div class="container">
                <div class="row align-items-center custom-sec10-row1">
                    <div class="col-md-12 col-lg-12 col-sm-12 sec10-col-center justify-content-center">
                        <h2>Frequently Asked Questions</h2>
                        <div class="faq-data"><button class="accordion">
                                <h5 class="l-22">What are the requirements to ride?</h5>
                            </button>
                            <div class="panel l-18">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                            </div><button class="accordion">
                                <h5 class="l-22">How do I find a scooter?</h5>
                            </button>
                            <div class="panel l-18">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                            </div><button class="accordion">
                                <h5 class="l-22">How do I unlock a scooter?</h5>
                            </button>
                            <div class="panel l-18">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                            </div><button class="accordion">
                                <h5 class="l-22">Where can I ride?</h5>
                            </button>
                            <div class="panel l-18">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                            </div><button class="accordion">
                                <h5 class="l-22">How to start and ride?</h5>
                            </button>
                            <div class="panel l-18">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                            </div><button class="accordion">
                                <h5 class="l-22">Where can I park?</h5>
                            </button>
                            <div class="panel l-18">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                            </div><button class="accordion last-acc">
                                <h5 class="l-22">How do I end my ride?</h5>
                            </button>
                            <div class="panel last-acc-div l-18">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("landingPage-testimonial", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">Testimonials</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="testimonial-main" data-aos="fade-down" data-aos-duration="2000" class="custom-sec11 aos-init">
            <div class="container">
                <div class="row align-items-center custom-sec11-row1">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                        <h2>What Our Customers <br>Are Saying</h2>
                        <div id="testimonial-slider" class="owl-carousel">
                            <div class="testimonial">
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel <br> urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, <br> vestibulum ac nunc. Etiam non porta mauris. Mauris elementum erat nec erat<br> tempus, sit amet nisl euismod.
                                </p>
                                <div class="pic"><img src="${assetsUrl}/templates/landingPage/images/client.png" alt=""></div>
                                <p class="title">Samantha William</p><span class="post">Senior Designer at Design Studio</span>
                            </div>

                            <div class="testimonial">
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel <br> urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, <br> vestibulum ac nunc. Etiam non porta mauris. Mauris elementum erat nec erat<br> tempus, sit amet nisl euismod.
                                </p>
                                <div class="pic"><img src="${assetsUrl}/templates/landingPage/images/client.png" alt=""></div>
                                <p class="title">Samantha William</p><span class="post">Senior Designer at Design Studio</span>
                            </div>

                            <div class="testimonial">
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel <br> urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, <br> vestibulum ac nunc. Etiam non porta mauris. Mauris elementum erat nec erat<br> tempus, sit amet nisl euismod.
                                </p>
                                <div class="pic"><img src="${assetsUrl}/templates/landingPage/images/client.png" alt=""></div>
                                <p class="title">Samantha William</p><span class="post">Senior Designer at Design Studio</span>
                            </div>

                            <div class="testimonial">
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel <br> urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, <br> vestibulum ac nunc. Etiam non porta mauris. Mauris elementum erat nec erat<br> tempus, sit amet nisl euismod.
                                </p>
                                <div class="pic"><img src="${assetsUrl}/templates/landingPage/images/client.png" alt=""></div>
                                <p class="title">Samantha William</p><span class="post">Senior Designer at Design Studio</span>
                            </div>

                            <div class="testimonial">
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel <br> urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, <br> vestibulum ac nunc. Etiam non porta mauris. Mauris elementum erat nec erat<br> tempus, sit amet nisl euismod.
                                </p>
                                <div class="pic"><img src="${assetsUrl}/templates/landingPage/images/client.png" alt=""></div>
                                <p class="title">Samantha William</p><span class="post">Senior Designer at Design Studio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("landingPage-footer", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Footer</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="downloadtheapp" data-aos="fade-up" data-aos-duration="2000" class="custom-sec12 custom-footer aos-init">
            <div class="container">
                <div class="row align-items-center custom-sec12-row1">
                    <div class="col-md-12 col-lg-12 col-sm-12 sec12-col-center justify-content-center">
                        <p class="l-22">What are you waiting for?</p>
                        <h2>Download our mobile app</h2>
                        <div class="f-images"><a href="#" class="a-store"><img src="${assetsUrl}/templates/landingPage/images/app-store-default.png" alt="brand" class="img-rounded app-store"><img src="${assetsUrl}/templates/landingPage/images/app-store-hover.png" alt="brand" id="inn2jc" class="img-rounded app-store-hover"></a><a href="#" class="g-play"><img src="${assetsUrl}/templates/landingPage/images/google-play-default.png" alt="brand" class="img-rounded google-play"><img src="${assetsUrl}/templates/landingPage/images/google-play-hover.png" alt="brand" id="i99qjk" class="img-rounded google-play-hover"></a></div>
                        <div class="ff">
                            <ul>
                                <li><a href="#" class="l-16">Why SiteSeed</a></li>
                                <li><a href="#" class="l-16">Features</a></li>
                                <li><a href="#" class="l-16">Privacy Policy</a></li>
                                <li><a href="#" class="l-16">Terms of Use</a></li>
                                <li><a href="#" class="l-16">Security</a></li>
                            </ul>
                        </div>
                        <p class="l-16 copyright">© 2020 SiteSeed. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>`
    })
    
    // =====================================================================
};