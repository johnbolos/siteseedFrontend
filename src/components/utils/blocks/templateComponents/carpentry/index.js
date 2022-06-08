import { assetsUrl } from "../../../../../settings";
import { countdown } from "../../extras/icons";
import { header, gallery, popUp, faq, team, form, testimonials, footer, cta, pricing } from "./icons";

export const carpentry = (editor) => {

    editor.BlockManager.add("carpentry-header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Template Components",
        content: `
        <div id="navbar_top" class="custom-sec1-main">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid nav-container"><button id="mobile-nav" type="button" data-toggle="collapse" onclick="openNav()" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><img src="${assetsUrl}/templates/carpentry/Images/1x/sidetoggle.png"></button><img src="${assetsUrl}/templates/carpentry/Images/3x/logo3x.png" alt="Logo Img" class="logo-imgae">
                    <div id="navbarNav" class="collapse navbar-collapse justify-content-center content-new">
                        <ul id="menu" class="navbar-nav"><a onclick="closeNav()"><img src="${assetsUrl}/templates/carpentry/Images/1x/close-1.png" class="shows"></a>
                            <li class="nav-item cool-link"> <a aria-current="page" href="#" onclick="closeNav()" class="nav-link">HOME</a></li>
                            <li class="nav-item cool-link"> <a href="#about-us" onclick="closeNav()" class="nav-link">About US</a></li>
                            <li class="nav-item cool-link"> <a href="#features" onclick="closeNav()" class="nav-link">Services</a></li>
                            <li class="nav-item cool-link"> <a href="#our-gallery" onclick="closeNav()" class="nav-link">Gallery</a></li>
                            <li class="nav-item cool-link"> <a href="#our-testimonail" onclick="closeNav()" class="nav-link">Testimonial</a></li>
                            <li class="navbar-button"> <a class="nav-link-2">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div class="custom-nv-right">
                        <div class="nav-item"> <a href="#" onclick="document.getElementById('id01').style.display='block'" class="nav-link-1">CONTACT US</a></div>
                    </div>
                </div>
            </nav>
        </div>
        <div id="id01" class="w3-modal" style="display: none;">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" id="i7j2c">
                <div class="w3-center"> <span onclick="document.getElementById('id01').style.display='none'" title="Close Modal" class="w3-button w3-xlarge w3-hover-black w3-display-topright">×</span>
                    <h1 class="main-title-m text-center">Contact us</h1>
                    <p class="sub-title-m text-center" id="icy2j">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                </div>
                <form action="/action_page.php" class="container">
                    <div class="row custom-form-ele">
                        <div class="col-md-12 col-lg-12 col-sm-12 p-0">
                            <ul>
                                <li>
                                    <div><input type="text" placeholder="First Name" class="form-control"></div>
                                </li>
                                <li>
                                    <div><input type="text" placeholder="Last Name" class="form-control"></div>
                                </li>
                                <li>
                                    <div><input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" class="form-control"></div>
                                </li>
                                <li>
                                    <div><input type="text" placeholder="Phone" class="form-control"></div>
                                </li>
                                <li class="servicebody">
                                    <div><input type="text" placeholder="Select Services" class="form-control"></div>
                                </li>
                                <li class="msgbody">
                                    <div>
                                        <div id="text-select" class="guest-main"><textarea name="message" placeholder="Enter your message"></textarea></div>
                                    </div>
                                </li>
                                <li class="submitbutton">
                                    <div>
                                        <div class="modal-footer"><button type="button" class="btn btn-primary">CONTACT US</button></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>`
    })

    editor.BlockManager.add("carpentry-banner", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Banner</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec2">
            <div class="container">
                <div data-aos="fade-right" data-aos-duration="2000" class="row align-items-center custom-sec1-row1 aos-init aos-animate">
                    <div class="col-md-7 col-lg-7 col-sm-9 p-0">
                        <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.</p>
                        <h1 class="main-title W-view">Choosing the Right Carpenter for Carpentry Project</h1>
                        <div class="left-btn"><a id="iljhf">CONTACT US</a></div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("carpentry-about", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">About</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="about-us" class="custom-sec3">
            <div class="container about-sec">
                <div class="text-center single-line" id="i41bb"><img src="${assetsUrl}/templates/carpentry/Images/3x/Line.png" class="line-img"></div>
                <div class="row align-items-center inner-about-sec">
                    <p data-aos="fade-right" data-aos-duration="2000" class="sub-title aos-init aos-animate">ABOUT US</p>
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-6 col-lg-6 col-sm-12 p-0 aos-init aos-animate">
                        <h1 class="main-title">About Our Company</h1>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" class="col-md-6 col-lg-6 col-sm-12 p-0 aos-init aos-animate">
                        <p class="parag" id="inbav">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                        <p class="parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus. Phasellus luctus augue est, vel pharetra risus pulvinar nec. Maecenas laoreet porttitor egestas. Nulla turpis dolor, vulputate non mauris eu, pulvinar maximus velit. Vivamus ultricies dapibus pretium.</p>
                    </div>
                    <div class="row align-items-center Vedio-section">
                        <div class="col-md-12 col-lg-12 col-sm-12 p-0"><img src="${assetsUrl}/templates/carpentry/Images/3x/Video_Image.jpg" class="img-responsive"><a id="videoId" href="https://www.youtube.com/embed/pBFQdxA-apI" class="popup-youtube">
                                <div class="overlay"> <span id="hom"><img src="${assetsUrl}/templates/carpentry/Images/3x/vedio-iconz.png" class="popup image_on"></span></div>
                            </a></div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2000" class="bottom-text aos-init aos-animate">
                        <p class="parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus leo, accumsan bibendum aliquet in, commodo sit amet nulla. Mauris in lacus diam. Sed faucibus magna et felis vestibulum dictum. Proin ut ultrices dolor. Cras rhoncus tempor magna. Integer sed porttitor tortor. Sed placerat gravida est at vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ultricies diam lorem, ac molestie metus laoreet eu. Sed convallis ipsum a enim consectetur, quis viverra magna euismod. Aenean ultrices, lacus id aliquet porta, augue lectus dictum massa, vitae sollicitudin leo erat at felis.</p>
                        <p class="parag">Proin vulputate ligula felis, id maximus lacus porttitor nec. Suspendisse potenti. Suspendisse lobortis, ligula vitae dignissim accumsan, justo dui lacinia enim, ac consequat libero felis vitae mi. Sed quis sem ipsum. Morbi interdum aliquam pellentesque. Donec ut dapibus neque. Nunc ut nisl nunc.</p>
                        <p class="parag">Ut eleifend sem libero, et faucibus quam vehicula nec. Nullam luctus tincidunt lacinia. Maecenas convallis libero nulla, quis sagittis neque convallis a. Donec in diam nulla. Proin id molestie quam. Suspendisse porta</p>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("carpentry-features", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">Features</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="features" class="custom-sec4">
            <div class="container">
                <div class="row align-items-center custom-sec4-row2">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-10 col-lg-10 col-sm-12 p-0 aos-init aos-animate">
                        <p class="sub-title">Our Services</p>
                        <h1 class="main-title">Designs that are tailor-made to your needs</h1>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" class="col-md-2 col-lg-2 col-sm-12 p-0 aos-init aos-animate">
                        <div class="nav-item-contact contact-spcing"> <a href="#downloadtheapp" class="nav-link-2">CONTACT US</a></div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="slider">
                    <div class="service-slide"><img src="${assetsUrl}/templates/carpentry/Images/3x/s-one.jpg" alt="" class="img-responsive">
                        <div class="slider-contant">
                            <p class="Service-name">Roofing Repair</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                    <div class="service-slide"><img src="${assetsUrl}/templates/carpentry/Images/3x/s-two.jpg" alt="" class="img-responsive">
                        <div class="slider-contant">
                            <p class="Service-name">Remodeling</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                    <div class="service-slide"><img src="${assetsUrl}/templates/carpentry/Images/3x/s-three.jpg" alt="" class="img-responsive">
                        <div class="slider-contant">
                            <p class="Service-name">Carpentry</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                    <div class="service-slide"><img src="${assetsUrl}/templates/carpentry/Images/3x/s-one.jpg" alt="" class="img-responsive">
                        <div class="slider-contant">
                            <p class="Service-name">Roofing Repair</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                    <div class="service-slide"><img src="${assetsUrl}/templates/carpentry/Images/3x/s-two.jpg" alt="" class="img-responsive">
                        <div class="slider-contant">
                            <p class="Service-name">Remodeling</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                    <div class="service-slide"><img src="${assetsUrl}/templates/carpentry/Images/3x/s-three.jpg" alt="" class="img-responsive">
                        <div class="slider-contant">
                            <p class="Service-name">Carpentry</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("carpentry-form", {
        label: `<div class="inherit-color-svg">${form}
            <div style="margin-top: 4.14px">Contact</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="contct-sec" class="custom-sec5">
            <div class="container">
                <div class="row align-items-center contct-section-1">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-5 col-lg-5 col-sm-12 spc-R aos-init aos-animate"><img src="${assetsUrl}/templates/carpentry/Images/3x/Image_05.jpg" class="img-responsive large-image"><img src="${assetsUrl}/templates/carpentry/Images/3x/Image_06.jpg" class="img-responsive small-image"></div>
                    <div data-aos="fade-left" data-aos-duration="2000" class="col-md-7 col-lg-7 col-sm-12 spc-L aos-init aos-animate">
                        <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.</p>
                        <h1 class="main-title">Choosing the Right Carpenter for Carpentry Project</h1>
                        <div class="left-btn"><a id="i0x63s">CONTACT US</a></div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("carpentry-gallery", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Gallery</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="our-gallery" class="custom-sec6">
            <div class="container-fluid">
                <div class="row align-items-center custom-sec6-row1">
                    <div data-aos="fade-right" data-aos-duration="2000" class="col-md-8 col-lg-8 col-sm-12 p-0 aos-init aos-animate">
                        <p class="sub-title" id="ibhd4c">OUR GALLERY</p>
                        <h1 class="main-title" id="ibsg5h">Residential and Commercial Carpenters</h1>
                    </div>
                    <div class="slider responsive-1 web-slider slick-initialized slick-slider">
                        <div aria-live="polite" class="slick-list draggable" tabindex="0">
                            <div class="slick-track" style="opacity: 1; width: 5048px; transform: translate3d(0px, 0px, 0px);">
                                <div class="Gallery-slide slick-slide slick-active" data-slick-index="0" aria-hidden="false" style="width: 1262px;"><img src="${assetsUrl}/templates/carpentry/Images/3x/slider-2.png" alt="" class="img-responsive">
                                    <div class="G-text">
                                        <p class="G-head">INTERNATIONAL ARTISAN</p>
                                        <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                                    </div>
                                </div>
                                <div class="Gallery-slide slick-slide" data-slick-index="1" aria-hidden="true" style="width: 1262px;"><img src="${assetsUrl}/templates/carpentry/Images/3x/slider-2.png" alt="" class="img-responsive">
                                    <div class="G-text">
                                        <p class="G-head">INTERNATIONAL ARTISAN</p>
                                        <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                                    </div>
                                </div>
                                <div class="Gallery-slide slick-slide" data-slick-index="2" aria-hidden="true" style="width: 1262px;"><img src="${assetsUrl}/templates/carpentry/Images/3x/slider-1.jpg" alt="" class="img-responsive">
                                    <div class="G-text">
                                        <p class="G-head">INTERNATIONAL ARTISAN</p>
                                        <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                                    </div>
                                </div>
                                <div class="Gallery-slide slick-slide" data-slick-index="3" aria-hidden="true" style="width: 1262px;"><img src="${assetsUrl}/templates/carpentry/Images/3x/slider-2.png" alt="" class="img-responsive">
                                    <div class="G-text">
                                        <p class="G-head">INTERNATIONAL ARTISAN</p>
                                        <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                                    </div>
                                </div>
                            </div>
                        </div><button type="button" data-role="none" class="slick-prev slick-disabled" aria-label="previous" style="display: inline-block;">Previous</button><button type="button" data-role="none" class="slick-next" aria-label="next" style="display: inline-block;">Next</button>
                    </div>
                    <div class="container mobile-slider">
                        <div class="Gallery-slide"><img src="${assetsUrl}/templates/carpentry/Images/1x/Image_07.jpg" alt="" class="img-responsive">
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                        <div class="Gallery-slide"><img src="${assetsUrl}/templates/carpentry/Images/1x/imag-8.8.jpg" alt="" class="img-responsive">
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                        <div class="Gallery-slide"><img src="${assetsUrl}/templates/carpentry/Images/1x/Image_07.jpg" alt="" class="img-responsive">
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                        <div class="Gallery-slide"><img src="${assetsUrl}/templates/carpentry/Images/1x/imag-8.8.jpg" alt="" class="img-responsive">
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("carpentry-testimonial", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">Testimonials</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="our-testimonail" class="custom-sec7">
            <div class="container">
                <div class="row align-items-center custom-sec7-row1">
                    <div class="col-md-10 col-lg-10 col-sm-12 p-0">
                        <p class="sub-title">Testimonial</p>
                        <h1 class="main-title">Residential and Commercial Carpenters</h1>
                    </div>
                    <p class="parag fixed-wid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus leo, accumsan bibendum aliquet in, commodo sit amet nulla. Mauris in lacus diam. Sed faucibus magna et felis vestibulum dictum. Proin ut ultrices dolor. Cras rhoncus tempor magna. Integer sed porttitor tortor.</p>
                </div>
                <div id="testimonial-slider" class="owl-carousel owl-theme" style="opacity: 1; display: block;">
                    <div class="owl-wrapper-outer">
                        <div class="owl-wrapper" style="width: 14520px; left: 0px; display: block; transition: all 800ms ease 0s; transform: translate3d(-2904px, 0px, 0px);">
                            <div class="owl-item" style="width: 1452px;">
                                <div class="testimonial custom-testimonail">
                                    <p class="description p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam at urna consequat facilisis. Integer in enim ut leo vehicula consequat vitae interdum tellus. Donec scelerisque efficitur sem laoreet luctus. Maecenas ornare malesuada nibh ut congue. Nullam massa odio, posuere ut vehicula sed, ultricies.</p>
                                    <div class="testimonial-content">
                                        <div class="pic"><img src="${assetsUrl}/templates/carpentry/Images/3x/Avtar.png" alt="#" class="img-responsive"></div>
                                        <div class="content-t">
                                            <h4 class="name">Dennis Mulato</h4><span class="post">Director, Digital Marketing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1452px;">
                                <div class="testimonial custom-testimonail">
                                    <p class="description p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam at urna consequat facilisis. Integer in enim ut leo vehicula consequat vitae interdum tellus. Donec scelerisque efficitur sem laoreet luctus. Maecenas ornare malesuada nibh ut congue. Nullam massa odio, posuere ut vehicula sed, ultricies.</p>
                                    <div class="testimonial-content">
                                        <div class="pic"><img src="${assetsUrl}/templates/carpentry/Images/3x/Avtar.png" alt="#" class="img-responsive"></div>
                                        <div class="content-t">
                                            <h4 class="name">Dennis Mulato</h4><span class="post">Director, Digital Marketing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1452px;">
                                <div class="testimonial custom-testimonail">
                                    <p class="description p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam at urna consequat facilisis. Integer in enim ut leo vehicula consequat vitae interdum tellus. Donec scelerisque efficitur sem laoreet luctus. Maecenas ornare malesuada nibh ut congue. Nullam massa odio, posuere ut vehicula sed, ultricies.</p>
                                    <div class="testimonial-content">
                                        <div class="pic"><img src="${assetsUrl}/templates/carpentry/Images/3x/Avtar.png" alt="#" class="img-responsive"></div>
                                        <div class="content-t">
                                            <h4 class="name">Dennis Mulato</h4><span class="post">Director, Digital Marketing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1452px;">
                                <div class="testimonial custom-testimonail">
                                    <p class="description p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam at urna consequat facilisis. Integer in enim ut leo vehicula consequat vitae interdum tellus. Donec scelerisque efficitur sem laoreet luctus. Maecenas ornare malesuada nibh ut congue. Nullam massa odio, posuere ut vehicula sed, ultricies.</p>
                                    <div class="testimonial-content">
                                        <div class="pic"><img src="${assetsUrl}/templates/carpentry/Images/3x/Avtar.png" alt="#" class="img-responsive"></div>
                                        <div class="content-t">
                                            <h4 class="name">Dennis Mulato</h4><span class="post">Director, Digital Marketing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 1452px;">
                                <div class="testimonial custom-testimonail">
                                    <p class="description p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam at urna consequat facilisis. Integer in enim ut leo vehicula consequat vitae interdum tellus. Donec scelerisque efficitur sem laoreet luctus. Maecenas ornare malesuada nibh ut congue. Nullam massa odio, posuere ut vehicula sed, ultricies.</p>
                                    <div class="testimonial-content">
                                        <div class="pic"><img src="${assetsUrl}/templates/carpentry/Images/3x/Avtar.png" alt="#" class="img-responsive"></div>
                                        <div class="content-t">
                                            <h4 class="name">Dennis Mulato</h4><span class="post">Director, Digital Marketing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="owl-controls clickable">
                        <div class="owl-pagination">
                            <div class="owl-page"><span class=""></span></div>
                            <div class="owl-page"><span class=""></span></div>
                            <div class="owl-page active"><span class=""></span></div>
                            <div class="owl-page"><span class=""></span></div>
                            <div class="owl-page"><span class=""></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("carpentry-logos", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">Logo</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="custom-sec8">
            <div class="container">
                <div class="row align-items-center custom-sec8-row1">
                    <div class="col-md-12 col-lg-12 col-sm-12 sec8-col-center">
                        <ul>
                            <li><a><img src="${assetsUrl}/templates/carpentry/Images/3x/b-1.png" alt="brand" class="img-responsive"></a></li>
                            <li><a><img src="${assetsUrl}/templates/carpentry/Images/3x/b-2.png" alt="brand" class="img-responsive"></a></li>
                            <li><a><img src="${assetsUrl}/templates/carpentry/Images/3x/b-3.png" alt="brand" class="img-responsive"></a></li>
                            <li><a><img src="${assetsUrl}/templates/carpentry/Images/3x/b-4.png" alt="brand" class="img-responsive"></a></li>
                        </ul>
                    </div>
                    <div class="col-md-12 col-lg-12 col-sm-12 sec8-col-center">
                        <ul>
                            <li><a><img src="${assetsUrl}/templates/carpentry/Images/3x/b-5.png" alt="brand" class="img-responsive"></a></li>
                            <li><a><img src="${assetsUrl}/templates/carpentry/Images/3x/b-6.png" alt="brand" class="img-responsive"></a></li>
                            <li><a><img src="${assetsUrl}/templates/carpentry/Images/3x/b-7.png" alt="brand" class="img-responsive"></a></li>
                            <li><a><img src="${assetsUrl}/templates/carpentry/Images/3x/b-8.png" alt="brand" class="img-responsive"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("carpentry-pricing", {
        label: `<div class="inherit-color-svg">${pricing}
            <div style="margin-top: 4.14px">Pricing</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="pricing" class="custom-sec9">
            <div class="container-fluid">
                <div class="row align-items-center custom-sec9-row1">
                    <div data-section-type="lead-image-with-content" class="lead-image-with-content for_lead_image_desk s">
                        <div class="lead-image-with-inner">
                            <div class="lead-image-content"><img src="https://siteseed-dev.s3.ap-south-1.amazonaws.com/templates/carpentry/Images/3x/instagram.png" class="insta-imaz">
                                <p class="main-title space-between">Find us
                                    <br>on Instagram
                                </p>
                                <div class="nav-item-contact"> <a href="#downloadtheapp" class="nav-link-2">@siteseed</a></div>
                            </div>
                        </div>
                    </div>
                    <div data-section-type="lead-image-with-content" class="lead-image-with-content for_lead_image_desk small--hide mobile-img">
                        <div class="lead-image-with-inner">
                            <div class="lead-image-content m2"><img src="https://siteseed-dev.s3.ap-south-1.amazonaws.com/templates/carpentry/Images/1x/instagram.png"></div>
                            <p class="main-title space-between">Find us
                                <br>on Instagram
                            </p>
                            <div class="nav-item-contact"> <a href="#downloadtheapp" class="nav-link-2">@siteseed</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("carpentry-footer", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Footer</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="row footer-section">
            <ul class="left-col"><img src="${assetsUrl}/templates/carpentry/agency-images-dark/Logo%20Design%20Dark.png"></ul>
            <ul class="right-col">
                <li class="B-footer-1"><a id="hom-5" href="#"><img src="${assetsUrl}/templates/carpentry/agency-images-dark/instagram.png" class="social-icon-bg"></a></li>
                <li class="B-footer-1"><a id="hom-6" href="#"><img src="${assetsUrl}/templates/carpentry/agency-images-dark/facebook.png" class="social-icon-bg"></a></li>
                <li class="B-footer-1"><a id="hom-7" href="#"><img src="${assetsUrl}/templates/carpentry/agency-images-dark/dribbble.png" class="social-icon-bg"></a></li>
                <li class="B-footer-1"><a id="hom-8" href="#"><img src="${assetsUrl}/templates/carpentry/agency-images-dark/behance.png" class="social-icon-bg"></a></li>
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