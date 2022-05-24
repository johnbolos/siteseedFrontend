import { assetsUrl } from "../../../settings";

export const customCss = `
@keyframes slide-down {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    } 
    100% {
        opacity: 0.9;
        transform: translateY(0);
    } 
}

/********************************* Media-queries*******************************/

/*********************************Mobile-view *******************************/

@media (min-width:0px) and (max-width:767px){
    .bottom-text {
    padding: 0px;
    margin-top: 3.2552083333333335vw;
}
    
    .navbar-light .navbar-toggler{padding: 0px 20px 0px 0px;}
    
    .custom-sec4{height: 100%;}
    li.navbar-button {
    display: block;
}
    img.line-img {
    height: 25vw;
}
    img.img-rounded.app-store {
    width: 15vw;
}
.slider.responsive-1.web-slider.slick-initialized.slick-slider{display: none;}
    .mobile-slider{display: block;}
    .lead-image-with-content {
    display: none;
    }
   .mobile-img{
    display: block;
    background-image: url('${assetsUrl}/templates/carpentry/Images/1x/mobile-instagram.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat; 
}
    body .navbar{
        padding: 0px;
    }
    .navbar-collapse.show {
    visibility: visible;
    transform: translateX(-100%);
}
    .collapse:not(.show) {
    display: none;
}
    .custom-sec1-row1{padding: 0px;}
    .navbar-collapse {
    transition: visibility .2s ease-in-out, transform .2s ease-in-out;}
    
    .main-title{font-size: 32px;margin-bottom: 20px;line-height: 42.4px;width: 100% !important;}
    
     a.nav-link-2{padding: 14px 30px;}
    
    .sub-title{font-size: 13px;width: 100%;}
    
    .left-btn a{font-size: 14px;}
    
    .parag{font-size: 13px;line-height: 21px;}
    
     a.nav-link-2{font-size: 14px;letter-spacing: 2.8px;}
    
     p.Service-name{font-size: 32px;}
    
    p.Service-descpt{font-size: 13px;width: 80%;}
    
    .Footer-para{font-size: 13px;margin-bottom: 30px;}
    .footer .footer-1 .copyright{font-size: 11px;margin-top: 100px;padding: 0px 20px;}
    
    .testimonial .description{font-size: 18px;}
    .testimonial .name{font-size: 18px;}
    .testimonial .post{font-size: 13px;}
     p.G-head{font-size: 16px;}
    p.G-title{font-size: 11px;}
    .custom-nv-right {display: none;}
    
    .custom-sec4 {
    margin-top: 50px;
}
   .container-fluid.nav-container {
    margin-left: 13px;
    justify-content: end;
}
    
    body .navbar{
        padding-top: 30px;
    }
    .custom-sec2 {
    background-repeat: no-repeat;
    height: 900px;    
    margin-top: -140px;    
    background: url(${assetsUrl}/templates/carpentry/Images/1x/mobile-bg.png);
    padding-top: 46%;
    padding-bottom: 103%;
}
    img.img-responsive.small-image {
    width: 36vw;
    }
    .custom-sec4-row2 {
    padding: 0px;}
    
    .custom-sec4-row2 .contact-spcing {
    letter-spacing: 2.8px;    
     margin-top: 50px;
}
    .G-text {
    position: absolute;
    bottom: 0px;
    left: 10px;
}
    .custom-sec1 .navbar-light .navbar-nav a.nav-link{
    padding: 25px;
    font-size: 14px;
    }
   .custom-sec10-row1{
    padding-top: 50px;
}
    .navbar-nav {
    padding: 0; 
    width: 100%;
    position: fixed;
    background-color: #cbd1d2;
    z-index: 999;
}.col-md-5.col-lg-5.col-sm-12.spc-R {
    padding-left: 0px;
    padding-right: 40px;
}
    
    body .container {
    padding: 0px;    
    width: 100%;
    max-width: 92.125vw;
}
    .custom-sec6-row1 {
    padding-left: 4.8125vw;
}
   .row.align-items-center.custom-sec4-row2 {
    padding: 0px;
} 
    .slider.responsive.slick-initialized.slick-slider {
    padding-left:0px;
    margin-top: 50px;
}
    .row.align-items-center.contct-section-1 {
    padding: 0px;
}
    .row.align-items-center.custom-sec7-row1{
    padding: 0px;
}
    .row.Address-section {
    padding: 0px 20px;
}
    .col-md-7.col-lg-7.col-sm-12.spc-L {
    margin-top: 105px;
    padding: 0px;
}
 .testimonial .description:before {
    height: 93px;
    left: -25px;
    position: absolute;
    top: -35px;
    width: 113px;
}
.testimonial.custom-testimonail{padding: 70px 25px 100px 25px;}
.testimonial .description{width: 100%;left: 0px;}
.testimonial .testimonial-content{left: 0;} 
.owl-theme .owl-controls {
    bottom: 40px;
    right: 120px;
    }
    .testimonial .pic{
        width: 50px;
        height: 50px;
    }
    .content-t {
    top: 10px;
}
 .custom-sec8-row1 ul li {
    list-style-type: none;
    float: left;
    padding: 25px 15px 25px 15px;
    width: 50%;
    text-align: center;
    min-height: 80px;   
    
}
    .container.footer-1 .col-md-12 {
    padding: 0px;
}
  .footer .footer-1 .Address-section {
    padding: 0px;  
    margin-top: 100px;
}
    .row.align-items-center.inner-about-sec {
    padding: 50px 20px;
}
    .contact-spcing {
    margin-top: 0px;
}
    a.nav-link-2{padding: 14px 30px;}
    
    section#contct-sec {
     padding-top: 50px;
     margin-top: 50px;}
    
    .cool-link {margin: 0px 30px0px 0px;}
    
    .navbar-light .navbar-nav .nav-link{font-size: 14px;padding: 20px 7px;}
    .row.align-items-center.custom-sec8-row1 {
    padding: 0px 0px 50px 0px;
    background-color: #ffffff;}
    
    section#pricing {
    padding-top: 50px;
    padding-bottom: 380px;
    background-color: #E5E5E5;
}
    .lead-image-with-inner {
    transform: translateY(150%);
    }
   .space-between {
    margin: 20px 0px 50px 0px;
}
    .container.footer-1 {
    padding-top: 0px;
}
    p.Footer-para.follow-text {
    margin-bottom: 5px;
}
    .fixed-wid {
    padding: 0px;    
    width: 100%;
    }
    .Gallery-slide {
    margin-bottom: 20px;    
    position: relative;
}
    p.G-title {
    color: #ffffff;
    width: 74%
    }
    .custom-sec6{padding: 50px 0px;}
    span#hom img {
    width: 10vw;
}
  .nav-link-2{
    text-decoration: none;
    background: #3C3C3C;
    color: #ffffff;
    font-size: 14px;
    padding: 14px 30px;
    text-align: center;
    font-family: 'Be Vietnam', sans-serif;
} 
    .navbar-button{margin-top: 20px;} 
    section#pricing-new {
    display: none;
}
 .navbar-nav {
    padding: 30px 26px;
    margin: -72.5px -15px !important;
}
    section#contct-sec {
    padding-bottom: 80px;
    }
    img.shows {
    margin-bottom: 20px;
    display: block;
}
    .custom-sec7{margin-top: 50px;}
    img.logo-imgae {
    height: 10vw !important;
}
    .owl-carousel {
    margin-top: 50px;
    }
}

/********************************* end mobile view*******************************/


/********************************* i-pad view*******************************/

@media (min-width:768px) and (max-width:991px){
    section#about-us {
    margin-top: -160px;
}
    .custom-sec1-row1{
    width: 92%;
}
    .single-line{margin-top: -20px !important;}
    
    img.img-rounded.app-store {
    width: 8vw;
}
    .footer-1 {
    padding: 100px 0px 50px 0px;
}
    .footer .footer-1 .Address-section {
    margin-top: 50px;
}
    img.img-responsive.large-image {
    width: 60vw;
}
    .left-btn {
    margin-top: 35px;
}
    .small-image {
    width: 27vw;
    right: 60px;
    bottom: -60px;
    position: absolute;
}
    .navbar-nav {
    display: block;
}span#hom img {
    max-width: 7vw;
}
.lead-image-with-inner-1{
    position: absolute;
    top: 49% !important;
    left: 31%;
}
img.logo-imgae {
    width: 110px;
}
 .navbar-light .navbar-nav .nav-link {
    font-size: 10px;
}
  .nav-link-1 {
    padding: 10px 25px;
    font-size: 10px;
}
    
.navbar-light .navbar-toggler{display: none;}
    .custom-sec2{margin-top: -128px;padding-bottom: 27%;}
    
    .lead-image-with-inner {
    transform: translateY(50%);
    }
    
    .testimonial.custom-testimonail {
    background-color: #fff;
    padding: 50px 50px;
}
    .testimonial .description:before {
    left: -3rem;
    position: absolute;
    top: -55px;
    width: 100px;
}
    .testimonial .description{left: 50px;}
    .owl-theme .owl-controls {
    bottom: 28px;
    }
    .custom-sec8-row1 ul li {
     padding: 40px 20px 40px 20px;
    }
    .main-title {
    margin-bottom: 22px;
    font-size: 32px;
    line-height: 38.5px;
    }
    .container.footer-1 {
    padding-top: 50px;
}
    .lead-image-with-content{padding: 34% 3% 65%;}
   a.nav-link-2{padding: 10px 25px;font-size: 10px;}
    
    .sub-title{font-size: 12px;width: 70%;}
    
    .left-btn a{font-size: 14px;}
    
    .parag{font-size: 13px;line-height: 20px;}
    
     a.nav-link-2{font-size: 14px;}
    
     p.Service-name{font-size: 32px;}
    
    p.Service-descpt{font-size: 13px;}
    
    .Footer-para{font-size: 10px;margin-bottom: 0px;}
    .footer .footer-1 .copyright{font-size: 11px;margin-top: 50px;padding: 0px 20px;}
    
    .testimonial .description{font-size: 18px;line-height: 31px;}
    .testimonial .name{font-size: 18px;}
    .testimonial .post{font-size: 13px;}
     p.G-head{font-size: 32px;}
     p.G-title{font-size: 16px;}
    .testimonial .testimonial-content {left: 50px;}
    section#contct-sec {
    padding-bottom: 50px;
    padding-top: 50px;}
    
    .col-md-7.col-lg-7.col-sm-12.spc-L.aos-init.aos-animate {
    margin-top: 100px;
}
    .so-icons {
    padding-right: 15px;
}
  .G-text {
    position: absolute;
    bottom: 25px;
    left: 25px;
}
 .slider.responsive.slick-initialized.slick-slider {
    padding-left: 0.8125vw;
    margin-top: 50px;
} 
    .contact-spcing {
    margin-top: 30px;
}
    body .container {
    width: 100%;
    max-width: 92.125vw;
}
    .custom-sec4 {
    height: 100%;
    margin-top: 6.510416666666667vw;
}
    .col-md-7.col-lg-7.col-sm-12.spc-L {
    padding-left: 0px;
}
    .custom-sec6-row1 {
    padding-left: 50px;
}
}

/********************************* end i-pad*******************************/


/*Insta collage*/
img.img_2 {
    position: absolute;
    top: 29%;
    left: 43%;
}
img.img_6 {
    left: 28%;
    position: absolute;
    top: 67%;
}
img.img_7 {
    left: 99%;
    position: absolute;
    top: 117%;
}
img.img_4 {
    top: -12%;
    position: absolute;
    z-index: 999;
    left: -40%;
}
img.img_8 {
    position: absolute;
    top: -7%;
    left: 35%;
}
img.img_9 {
    margin-top: 300px;
    margin-left: -100px;
}

.custom-9{padding-bottom: 250px;}

.lead-image-with-inner-1 {
    position: absolute;
    top: 46%;
    left: 31%;
}
section#pricing-new {
    background-color: #e5e5e5;
    padding-top: 200px;
    position: relative;
}

/*end collage*/
`

export const baseCss = `
body{background-color: #CBD1D2 !important;overflow-x: hidden;}
body .row { margin: 0;}
body .container {width:100%; max-width:78.125vw;padding:0px;}
body .container-fluid {width:100%; max-width:125vw;padding: 0px;}
p{margin: 0;}

.anchor-txt:hover{color: transparent;}
.owl-carousel {background-color: white;}

.navbar-light .navbar-nav .nav-link{
letter-spacing: 2.8px;
font-weight: 600;    
text-decoration: none;
font-size:0.9114583333333334vw;
text-transform: uppercase;
font-family: 'Be Vietnam', sans-serif;
color: #3C3C3C;    
}
.navbar-light .navbar-nav .nav-link:hover{font-weight: 800;color: #3C3C3C;}
.img-responsive{max-width: 100%;width: 100%;}
.navbar-collapse {
    align-items: center;
    width: 63%;
}

/**************TOP SECTION************/
h1.main-title.W-view {
    width: 85%;
}
.custom-sec2 {
    background: url(${assetsUrl}/templates/carpentry/Images/1x/Banner_Image.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    margin-top: -12.789063vw;
    padding-top: 21%;
    padding-bottom: 16%;
}
.top-text {
    position: relative;
    top: 6em;
}

body .navbar {
    padding: 3.2552083333333335vw 5.208333333333333vw;
}
.custom-sec1 .navbar-light .navbar-nav a.nav-link {
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9114583333333334vw;
    color: #3C3C3C;
    padding-left: 0px;
    padding-right: 0px;
    font-family: 'Be Vietnam', sans-serif;
    text-transform: uppercase;
}
.custom-sec1 .navbar-light .navbar-nav a.nav-link:hover{
    font-weight: 800;
}

.nav-link-1{
    text-decoration: none;
    background: #3C3C3C;
    color: #ffffff;
    font-size: 0.9114583333333334vw;
    padding:  0.9114583333333334vw 1.953125vw;
    text-align: center;
    font-family: 'Be Vietnam', sans-serif;
}

a.nav-link-1:hover {
    color: #fff;
    text-decoration: none;
}
.sub-title{
padding-left: 0.3255208333333333vw;    
width: 70%;    
margin-bottom: 20px;    
color: #3C3C3C;    
font-family: 'Be Vietnam', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 0.9114583333333334vw;    
letter-spacing: 2.8px;
text-transform: uppercase;  
}

.main-title{
margin: 0px;    
padding: 0px;    
font-family: 'exodus_demosharpen';
font-style: normal;
font-weight: 404;
font-size: 4.036458333333333vw;   
color: #3C3C3C;
line-height: 4.843750000000001vw;    
}

.left-btn a {
    font-weight: 600;
    padding-bottom: 12px;
    font-size: 0.9114583333333334vw;
    font-family: 'Be Vietnam', sans-serif;
    color: #3C3C3C;
    border-bottom: 2px solid #3C3C3C;
}

.left-btn{margin-top: 50px;}

.cool-link:hover::after {
	width: 100%;
	/* transition: width .6s; */
}
.cool-link {
    margin: 0px 1.953125vw 0px 0px;
	display: inline-block;
	text-decoration: none;
}
.cool-link::after {
	content: '';
	display: block;
	width: 0;
	height: 2px;
	background: #3C3C3C;
	transition: width .3s;
}

/**************END TOP SECTION************/



/********************ABOUT SECTION******************/

.about-sec{
    background-color: #fff;
    margin-top: -120px;
}
.row.align-items-center.inner-about-sec{
    padding: 3.2552083333333335vw 3.2552083333333335vw;
}
.row.align-items-center.Vedio-section {
    padding: 0px;
    margin-top: 3.2552083333333335vw;
}
.Vedio-section{position: relative;}

.Vedio-section .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 500ms ease-in-out;
}
.overlay span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
}

.parag{
line-height: 1.4322916666666667vw;    
color: #777777;    
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.9114583333333334vw;
}
.bottom-text {
    margin-top: 3.2552083333333335vw;
}

.Vedio-section{position: relative;}
/********************END ABOUT SECTION******************/


/********************SERVICE SECTION******************/
.contact-spcing{margin-top: 100px;}
 a.nav-link-2{
   text-decoration: none;
    background: #3C3C3C;
    color: #ffffff;
    font-size: 0.9114583333333334vw;
    padding: 0.9114583333333334vw 1.953125vw;
    text-align: center;
    font-family: 'Be Vietnam', sans-serif; 
}
a.nav-link-2:hover{color: #fff;text-decoration: none;}

.custom-sec4{
 height: 48.526041666666664vw;    
 margin-top: 6.510416666666667vw;
}

.slider.responsive.slick-initialized.slick-slider {
    padding-left: 9.8125vw;
    margin-top: 50px;
}
.service-slide{padding: 0px 15px;}

.slider-contant{margin-top: 14px;}

p.Service-name {
    margin-bottom: 6px;
    font-family: 'exodus_demosharpen';
    font-style: normal;
    font-weight: 404;
    font-size: 2.0833333333333335vw;
    }

p.Service-descpt{
color: #777777;    
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 0.9114583333333334vw;
}
.small-image {
    width: 10vw;
    right: 0;
    bottom: -50px;
    position: absolute;
}
section#contct-sec {
    padding-bottom: 109px;
    padding-top: 6.510416666666667vw;
    margin-top: 137px;
    background-color: #F6F6F6;
}
.col-md-7.col-lg-7.col-sm-12.spc-L{
    padding-left: 55px;
}
.col-md-5.col-lg-5.col-sm-12.spc-R{
    padding-right: 40px;
}
/********************END SERVICE SECTION******************/


/********************GALLERY SECTION******************/
.custom-sec6{
    padding-bottom: 6.510416666666667vw;
    padding-top: 6.510416666666667vw;
    background-color: #404040;
    }
.custom-sec6-row1{padding-left: 10.8125vw;}

.G-text{position: absolute;bottom: 50px;left: 50px;}

p.G-head{
font-family: 'exodus_demosharpen';
font-style: normal;
font-weight: 404;
font-size: 2.734375vw;
color: #FFFFFF;
}

p.G-title{
color: #ffffff;    
width: 60%;    
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.9114583333333334vw;
}

.slick-initialized .slick-slide{
    position: relative;
    display: block;
}

.Gallery-slide {
    padding: 0px 30px 0px 0px !important;}

.slider.responsive-1.slick-initialized.slick-slider {
    margin-top: 3.2552083333333335vw;
    padding: 0px;
}


/********************END GALLERY SECTION******************/

/********************TESTIMONIAL SECTION******************/

.custom-sec7{
    margin-top: 6.510416666666667vw
}

.fixed-wid{
width: 76%;
margin-bottom: 3.2552083333333335vw;
margin-top: 1.3020833333333333vw;
}

.testimonial .description {
    width: 90%;
    text-transform: uppercase;
    padding: 30px 15px 0px 15px;
    margin: 0;
    font-size: 1.4322916666666667vw;
    color: #3C3C3C;
    position: relative;
    font-family: 'exodus_demosharpen';
    left: 130px;
    z-index: 9999;
}
.testimonial .description:before {
    background-image: url(${assetsUrl}/templates/carpentry/Images/1x/quotes-1.png);
    background-position: center center;
    background-repeat: no-repeat no-repeat;
    background-size: contain;
    content: ""; 
    height: 152px;
    left: -9rem;
    position: absolute;
    top: -55px;
    width: 180px;
}
.testimonial.custom-testimonail {
    background-color: #fff;
    padding: 117px 130px;
}
.testimonial .name{
margin: 0px;    
font-family: 'exodus_demosharpen';
font-style: normal;
font-weight: 404;
font-size: 1.4322916666666667vw;
}
.testimonial .post{
opacity: .7;    
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.9114583333333334vw;
}

.testimonial .testimonial-content {
    left: 130px;
    margin-top: 50px;
    position: relative;
}
.testimonial .pic {
    display: inline-block;
    float: left;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 20px;
    overflow: hidden;
}
.content-t {
    position: relative;
    top: 20px;
}
.owl-theme .owl-controls {
    bottom: 6.510416666666667vw;
    position: absolute;
    margin-top: 10px;
    text-align: center;
    right: 72px;
}
.owl-theme .owl-controls .owl-page span {
    display: block;
    width: 8px !important;
    height: 8px !important;
    margin: 5px 5px;
    filter: Alpha(Opacity=50);
    opacity: .5;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background: #3C3C3C !important;
}
.slider.responsive-1.web-slider.slick-initialized.slick-slider{display: block;}
.mobile-slider{display: none;}
/********************END TESTIMONIALSECTION******************/


/********************OUR PATNERS SECTION******************/
.custom-sec8{background-color: #E5E5E5;border: 0;}
.our-patners{background-color: #fff;padding: 80px;}
.custom-sec8-row1 ul {
    padding: 0;
    text-align: center;
    width: 100%;
    margin: 0 auto;
}
 .custom-sec8-row1 ul li {
    list-style-type: none;
    float: left;
    padding:  4.752604166666667vw 3.2552083333333335vw  4.752604166666667vw 3.2552083333333335vw;
    width: 25%;
    text-align: center;
}
.sec8-col-center{
    background-color: #fff;
}

/********************END OUR PATNERS SECTION******************/


/********************INSTAGRAM SECTION******************/
section#pricing {
    background-color:#E5E5E5;;
}
.small-divice{display: none;}

.lead-image-with-content {
    background-image: url('${assetsUrl}/templates/carpentry/Images/1x/insta-collage.png');
    background-size: contain;
    background-position: center;
    padding: 18% 3% 65%;
    background-repeat: no-repeat;
}

.mobile-img{
    padding: 50px;
    display: none;
    background-image: url('${assetsUrl}/templates/carpentry/Images/1x/mobile-instagram.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat; 
}

 .lead-image-with-inner {
     transform: translateY(100%);
    text-align: center;
    left: 0;
    top: 50%;
}
.space-between{margin: 50px 0px;}

/********************END INSTAGRAM SECTION******************/



/********************FOOTER SECTION******************/
.modal-footer {
    padding: 0px !important;
    text-align: right;
    border-top: 1px solid transparent !important;
}
.container.footer-1{padding-top: 10.765625vw;}
a.Footer-para:hover {
    color: #ffffff;
    text-decoration: none;
}
a.border-b{
    border-bottom: 1px solid #fff;
}
.footer{background-color: #404040;}
.footer-1{padding: 150px 0px 50px 0px;}
.f-images {
    margin-bottom: 50px;
}
.footer .footer-1 .Address-section{margin-top: 212px;}
.footer .footer-1 .copyright{
text-transform: uppercase;    
margin-top: 121px; 
text-align: left;
color: #ffffff;
font-size: 0.9114583333333334vw;
letter-spacing: 2.8px;    
font-family: 'Be Vietnam', sans-serif; }

.Footer-para{
  color: #ffffff;
  font-family: 'Be Vietnam', sans-serif; 
  font-style: normal;
  font-weight: 400;
  font-size: 1.0416666666666667vw;
  letter-spacing: 2.8px;
 text-transform: uppercase;
}
.so-icons {
    padding-right: 30px;
}
.s-color {
    font-size: 18px;
    color: #ffffff;
}
.s-color:hover{
    color: #232323;
}
.follow-text{margin-bottom: 20px;}


/********************END FOOTER SECTION******************/


/*****************modal css************/
.w3-modal-content.w3-card-4.w3-animate-zoom{
    padding: 50px 30px;
  }
.row.custom-form-ele {
    margin-top: 50px;
}

.sub-title-m{
margin-top: 1.3020833333333333vw;    
margin-bottom: 1.3020833333333333vw;    
color: #3C3C3C;    
font-family: 'Be Vietnam', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 14px;
}

.main-title-m{
margin: 0px;    
padding: 0px;    
font-family: 'exodus_demosharpen';
font-style: normal;
font-weight: 404;
font-size: 42px;
color: #3C3C3C;  
}


.w3-modal {
    padding-bottom: 50px;
    padding-top: 50px !important;
    background: rgba(0, 0, 0, 0.7) !important;
}
span.w3-button.w3-xlarge.w3-hover-black.w3-display-topright:hover {
    color: #fff!important;
    background-color: #3c3c3c!important;
}
.custom-form-ele ul li {
    margin-bottom: 20px;
    border: 0;
    display: inline-block;
    width: 48.2%;
    float: left;
}
.custom-form-ele ul li input {
    border: 0;
    color: #000000;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    height: 49px;
    padding: 15px;
    background: #F2F2F2;
    border-radius: 0;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 0%);
}
.custom-form-ele ul li:nth-of-type(2n+1) {
    margin-right: 3.4%;
}

.custom-form-ele ul {
    padding: 0;
    float: left;
    width: 100%;
}
.custom-form-ele textarea {
    border: 0;
    width: 100%;
    height: 118px;
    padding: 14px;
    color: #000000;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: #F2F2F2;
    border-radius: 0;
}

.custom-form-ele .text-select-1 textarea{height: 49px;}
.custom-form-ele ul li.msgbody {
    float: left;
    width: 100%;
    margin-top: 20px;
}

.custom-form-ele ul li.servicebody
{
    float: left;
    width: 100%;
    margin: 0;
}
.custom-form-ele ul li.submitbutton .modal-footer button.btn.btn-primary {
    letter-spacing: 2.8px;
    background: #CBD1D2;
    width: 100%;
    border: 0;
    box-shadow: none;
    height: 59px;
    color: #3C3C3C;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    border-radius: 0;
    margin: 0;
    font-weight: 600;
}

.custom-form-ele ul li.submitbutton {
    float: left;
    width: 100%;
    margin: 0;
}
.modal-footer{padding: 0px;}
li.navbar-button {
    display: none;
}
img.shows {
    display: none;
}
img.logo-imgae {
    height:  2.2786458333333335vw;
}
img.img-rounded.app-store {
    width: 5vw;
}
.insta-imaz{width: 4vw;}
span#hom img {
    width: 5vw;
}
img.line-img {
    height: 6vw;
}
.row.align-items-center.custom-sec8-row1 {
    border-top: 1px solid #F2F2F2;
}


button.slick-next{display: none !important;}
button.slick-prev{display: none !important;}

.sidepanel  {
  width: 0;
  position: fixed;
  z-index: 1;
  height: 250px;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidepanel a:hover {
  color: #f1f1f1;
}

.sidepanel .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}
button.openbtn {
	background-color: transparent;
	border: 0;
}
		.navbar-light .navbar-toggler {
	color: rgb(0 0 0 / 0%);
	border-color: rgb(0 0 0 / 0%);
}

[data-gjs-type="wrapper"] {
    overflow: hidden !important;
  }
`
export const style = `
  <style>
    ${`@media {background: red;}` + baseCss}
  </style>
  `

export const html = `
<!-------------------------------------Outer-Main-div's------------------------------------->
<div class="Carpentry-main">
	<div class="Carpentry-main-inner">
		<!-------------------------------------navbar-div------------------------------------->
		<div id="navbar_top" class="custom-sec1-main">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container-fluid nav-container">
					<button id="mobile-nav" class="navbar-toggler" type="button" data-toggle="collapse" onclick="openNav()" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<img src="${assetsUrl}/templates/carpentry/Images/1x/sidetoggle.png">
					</button>
					<img class="logo-imgae" src="${assetsUrl}/templates/carpentry/Images/3x/logo3x.png" alt="Logo Img" />
					<div class="collapse navbar-collapse justify-content-center content-new" id="navbarNav">
						<ul id="menu" class="navbar-nav">
							<a onclick="closeNav()">
								<img class="shows" src="${assetsUrl}/templates/carpentry/Images/1x/close-1.png">
							</a>
							<li class="nav-item cool-link"> <a class="nav-link" aria-current="page" href="#" onclick="closeNav()">HOME</a>
							</li>
							<li class="nav-item cool-link"> <a class="nav-link" href="#about-us" onclick="closeNav()">About US</a>
							</li>
							<li class="nav-item cool-link"> <a class="nav-link" href="#features" onclick="closeNav()" onclick="closeNav()">Services</a>
							</li>
							<li class="nav-item cool-link"> <a class="nav-link" href="#our-gallery" onclick="closeNav()">Gallery</a>
							</li>
							<li class="nav-item cool-link"> <a class="nav-link" href="#our-testimonail" onclick="closeNav()">Testimonial</a>
							</li>
							<li class="navbar-button"> <a class="nav-link-2">CONTACT US</a>
							</li>
						</ul>
					</div>
					<div class="custom-nv-right">
						<div class="nav-item"> <a class="nav-link-1" href="#" onclick="document.getElementById('id01').style.display='block'">CONTACT US</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
		<!---------------MODAL---------->
		<div id="id01" class="w3-modal">
			<div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
				<div class="w3-center"> <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-xlarge w3-hover-black w3-display-topright" title="Close Modal">&times;</span>
					<h1 class="main-title-m text-center">Contact us</h1>
					<p class="sub-title-m text-center" style="width: 100%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
				</div>
				<form class="container" action="/action_page.php">
					<div class="row custom-form-ele">
						<div class="col-md-12 col-lg-12 col-sm-12 p-0">
							<ul>
								<form>
									<li>
										<div class="">
											<input type="text" class="form-control" placeholder="First Name">
										</div>
									</li>
									<li>
										<div class="">
											<input type="text" class="form-control" placeholder="Last Name">
										</div>
									</li>
									<li>
										<div class="">
											<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
										</div>
									</li>
									<li>
										<div class="">
											<input type="text" class="form-control" placeholder="Phone">
										</div>
									</li>
									<li class="servicebody">
										<div class="">
											<input type="text" class="form-control" placeholder="Select Services">
										</div>
									</li>
									<li class="msgbody">
										<div class="">
											<div id="text-select" class="guest-main">
												<textarea name="message" placeholder="Enter your message"></textarea>
											</div>
										</div>
									</li>
									<li class="submitbutton">
										<div class="">
											<div class="modal-footer">
												<button type="button" class="btn btn-primary">CONTACT US</button>
											</div>
										</div>
									</li>
								</form>
							</ul>
						</div>
					</div>
				</form>
			</div>
		</div>
		<!------------------END MODAL------------>
		<!------------------------------------- /navbar-div------------------------------------->
		<!-------------------------------------Section-2------------------------------------->
		<section class="custom-sec2">
			<div class="container">
				<div class="row align-items-center custom-sec1-row1" data-aos="fade-right" data-aos-duration="2000">
					<div class="col-md-7 col-lg-7 col-sm-9 p-0">
						<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.</p>
						<h1 class="main-title W-view">Choosing the Right Carpenter for Carpentry Project</h1>
						<div class="left-btn"><a style="color: #3C3C3C;">CONTACT US</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!------------------------------------- /Section-2----------------------------------->
		<!------------------------------------- Section-3----------------------------------->
		<section id="about-us" class="custom-sec3">
			<div class="container about-sec">
				<div class="text-center single-line" style="margin-top: -50px;">
					<img class="line-img" src="${assetsUrl}/templates/carpentry/Images/3x/Line.png">
				</div>
				<div class="row align-items-center inner-about-sec">
					<p class="sub-title"data-aos="fade-right" data-aos-duration="2000">ABOUT US</p>
					<div class="col-md-6 col-lg-6 col-sm-12 p-0" data-aos="fade-right" data-aos-duration="2000">
						<h1 class="main-title">About Our Company</h1>
					</div>
					<div class="col-md-6 col-lg-6 col-sm-12 p-0" data-aos="fade-left" data-aos-duration="2000">
						<p class="parag" style="font-weight: 700;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
						<p class="parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus. Phasellus luctus augue est, vel pharetra risus pulvinar nec. Maecenas laoreet porttitor egestas. Nulla turpis dolor, vulputate non mauris eu, pulvinar maximus velit. Vivamus ultricies dapibus pretium.</p>
					</div>
					<div class="row align-items-center Vedio-section">
						<div class="col-md-12 col-lg-12 col-sm-12 p-0">
							<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/Video_Image.jpg">
							<a class="popup-youtube" id="videoId" href="https://www.youtube.com/embed/pBFQdxA-apI">
								<div class="overlay"> <span id="hom"><img class="popup image_on" src="${assetsUrl}/templates/carpentry/Images/3x/vedio-iconz.png"></span>
								</div>
							</a>
						</div>
					</div>
					<div class="bottom-text" data-aos="fade-down" data-aos-duration="2000">
						<p class="parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus leo, accumsan bibendum aliquet in, commodo sit amet nulla. Mauris in lacus diam. Sed faucibus magna et felis vestibulum dictum. Proin ut ultrices dolor. Cras rhoncus tempor magna. Integer sed porttitor tortor. Sed placerat gravida est at vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ultricies diam lorem, ac molestie metus laoreet eu. Sed convallis ipsum a enim consectetur, quis viverra magna euismod. Aenean ultrices, lacus id aliquet porta, augue lectus dictum massa, vitae sollicitudin leo erat at felis.</p>
						<p class="parag">Proin vulputate ligula felis, id maximus lacus porttitor nec. Suspendisse potenti. Suspendisse lobortis, ligula vitae dignissim accumsan, justo dui lacinia enim, ac consequat libero felis vitae mi. Sed quis sem ipsum. Morbi interdum aliquam pellentesque. Donec ut dapibus neque. Nunc ut nisl nunc.</p>
						<p class="parag">Ut eleifend sem libero, et faucibus quam vehicula nec. Nullam luctus tincidunt lacinia. Maecenas convallis libero nulla, quis sagittis neque convallis a. Donec in diam nulla. Proin id molestie quam. Suspendisse porta</p>
					</div>
				</div>
			</div>
		</section>
		<!------------------------------------- /Section-3----------------------------------->
        <!------------------------------------- Section-4----------------------------------->
        <section id="features" class="custom-sec4">
            <div class="container">
                <div class="row align-items-center custom-sec4-row2">
                    <div class="col-md-10 col-lg-10 col-sm-12 p-0" data-aos="fade-right" data-aos-duration="2000">
                        <p class="sub-title">Our Services</p>
                        <h1 class="main-title">Designs that are tailor-made to your needs</h1>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-12 p-0" data-aos="fade-left" data-aos-duration="2000">
                        <div class="nav-item-contact contact-spcing"> <a class="nav-link-2" href="#downloadtheapp">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="slider responsive">
                    <div class="service-slide">
                        <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/s-one.jpg" alt="" />
                        <div class="slider-contant">
                            <p class="Service-name">Roofing Repair</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                    <div class="service-slide">
                        <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/s-two.jpg" alt="" />
                        <div class="slider-contant">
                            <p class="Service-name">Remodeling</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                    <div class="service-slide">
                        <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/s-three.jpg" alt="" />
                        <div class="slider-contant">
                            <p class="Service-name">Carpentry</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                    <div class="service-slide">
                        <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/s-one.jpg" alt="" />
                        <div class="slider-contant">
                            <p class="Service-name">Roofing Repair</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                    <div class="service-slide">
                        <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/s-two.jpg" alt="" />
                        <div class="slider-contant">
                            <p class="Service-name">Remodeling</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                    <div class="service-slide">
                        <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/s-three.jpg" alt="" />
                        <div class="slider-contant">
                            <p class="Service-name">Carpentry</p>
                            <p class="Service-descpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque sed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-4----------------------------------->
		
		<!------------------------------------- Section-5----------------------------------->
		<section id="contct-sec" class="custom-sec5">
			<div class="container">
				<div class="row align-items-center contct-section-1">
					<div class="col-md-5 col-lg-5 col-sm-12 spc-R" data-aos="fade-right" data-aos-duration="2000">
						<img class="img-responsive large-image" src="${assetsUrl}/templates/carpentry/Images/3x/Image_05.jpg">
						<img class="img-responsive small-image" src="${assetsUrl}/templates/carpentry/Images/3x/Image_06.jpg">
					</div>
					<div class="col-md-7 col-lg-7 col-sm-12 spc-L" data-aos="fade-left" data-aos-duration="2000">
						<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.</p>
						<h1 class="main-title">Choosing the Right Carpenter for Carpentry Project</h1>
						<div class="left-btn"><a style="color: #3C3C3C;">CONTACT US</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!------------------------------------- /Section-5----------------------------------->
        <!------------------------------------- Section-6----------------------------------->
        <section id="our-gallery" class="custom-sec6">
            <div class="container-fluid">
                <div class="row align-items-center custom-sec6-row1">
                    <div class="col-md-8 col-lg-8 col-sm-12 p-0" data-aos="fade-right" data-aos-duration="2000">
                        <p class="sub-title" style="color: #fff;">OUR GALLERY</p>
                        <h1 class="main-title" style="color: #fff;">Residential and Commercial Carpenters</h1>
                    </div>
                    <div class="slider responsive-1 web-slider">
                        <div class="Gallery-slide">
                            <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/slider-2.png" alt="" />
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                        <div class="Gallery-slide">
                            <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/slider-2.png" alt="" />
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                        <div class="Gallery-slide">
                            <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/slider-1.jpg" alt="" />
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                        <div class="Gallery-slide">
                            <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/slider-2.png" alt="" />
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                    </div>
                    <div class="container mobile-slider">
                        <div class="Gallery-slide">
                            <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/1x/Image_07.jpg" alt="" />
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                        <div class="Gallery-slide">
                            <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/1x/imag-8.8.jpg" alt="" />
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                        <div class="Gallery-slide">
                            <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/1x/Image_07.jpg" alt="" />
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                        <div class="Gallery-slide">
                            <img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/1x/imag-8.8.jpg" alt="" />
                            <div class="G-text">
                                <p class="G-head">INTERNATIONAL ARTISAN</p>
                                <p class="G-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero turpis, posuere sed cursus a, rhoncus ultricies risus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-6----------------------------------->
		<!------------------------------------- Section-7----------------------------------->
		<section id="our-testimonail" class="custom-sec7">
			<div class="container">
				<div class="row align-items-center custom-sec7-row1">
					<div class="col-md-10 col-lg-10 col-sm-12 p-0">
						<p class="sub-title">Testimonial</p>
						<h1 class="main-title">Residential and Commercial Carpenters</h1>
					</div>
					<p class="parag fixed-wid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus leo, accumsan bibendum aliquet in, commodo sit amet nulla. Mauris in lacus diam. Sed faucibus magna et felis vestibulum dictum. Proin ut ultrices dolor. Cras rhoncus tempor magna. Integer sed porttitor tortor.</p>
				</div>
				<div id="testimonial-slider" class="owl-carousel">
					<div class="testimonial custom-testimonail">
						<p class="description p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam at urna consequat facilisis. Integer in enim ut leo vehicula consequat vitae interdum tellus. Donec scelerisque efficitur sem laoreet luctus. Maecenas ornare malesuada nibh ut congue. Nullam massa odio, posuere ut vehicula sed, ultricies.</p>
						<div class="testimonial-content">
							<div class="pic">
								<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/Avtar.png" alt="#">
							</div>
							<div class="content-t">
								<h4 class="name">Dennis Mulato</h4><span class="post">Director, Digital Marketing</span>
							</div>
						</div>
					</div>
					<div class="testimonial custom-testimonail">
						<p class="description p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam at urna consequat facilisis. Integer in enim ut leo vehicula consequat vitae interdum tellus. Donec scelerisque efficitur sem laoreet luctus. Maecenas ornare malesuada nibh ut congue. Nullam massa odio, posuere ut vehicula sed, ultricies.</p>
						<div class="testimonial-content">
							<div class="pic">
								<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/Avtar.png" alt="#">
							</div>
							<div class="content-t">
								<h4 class="name">Dennis Mulato</h4><span class="post">Director, Digital Marketing</span>
							</div>
						</div>
					</div>
					<div class="testimonial custom-testimonail">
						<p class="description p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam at urna consequat facilisis. Integer in enim ut leo vehicula consequat vitae interdum tellus. Donec scelerisque efficitur sem laoreet luctus. Maecenas ornare malesuada nibh ut congue. Nullam massa odio, posuere ut vehicula sed, ultricies.</p>
						<div class="testimonial-content">
							<div class="pic">
								<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/Avtar.png" alt="#">
							</div>
							<div class="content-t">
								<h4 class="name">Dennis Mulato</h4><span class="post">Director, Digital Marketing</span>
							</div>
						</div>
					</div>
					
					<div class="testimonial custom-testimonail">
						<p class="description p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam at urna consequat facilisis. Integer in enim ut leo vehicula consequat vitae interdum tellus. Donec scelerisque efficitur sem laoreet luctus. Maecenas ornare malesuada nibh ut congue. Nullam massa odio, posuere ut vehicula sed, ultricies.</p>
						<div class="testimonial-content">
							<div class="pic">
								<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/Avtar.png" alt="#">
							</div>
							<div class="content-t">
								<h4 class="name">Dennis Mulato</h4><span class="post">Director, Digital Marketing</span>
							</div>
						</div>
					</div>
					
					<div class="testimonial custom-testimonail">
						<p class="description p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam at urna consequat facilisis. Integer in enim ut leo vehicula consequat vitae interdum tellus. Donec scelerisque efficitur sem laoreet luctus. Maecenas ornare malesuada nibh ut congue. Nullam massa odio, posuere ut vehicula sed, ultricies.</p>
						<div class="testimonial-content">
							<div class="pic">
								<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/Avtar.png" alt="#">
							</div>
							<div class="content-t">
								<h4 class="name">Dennis Mulato</h4><span class="post">Director, Digital Marketing</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!------------------------------------- /Section-7----------------------------------->
		<!------------------------------------- Section-8----------------------------------->
		<section class="custom-sec8">
			<div class="container">
				<div class="row align-items-center custom-sec8-row1">
					<div class="col-md-12 col-lg-12 col-sm-12 sec8-col-center ">
						<ul>
							<li>
								<a>
									<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/b-1.png" alt="brand">
								</a>
							</li>
							<li>
								<a>
									<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/b-2.png" alt="brand">
								</a>
							</li>
							<li>
								<a>
									<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/b-3.png" alt="brand">
								</a>
							</li>
							<li>
								<a>
									<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/b-4.png" alt="brand">
								</a>
							</li>
						</ul>
					</div>
					<div class="col-md-12 col-lg-12 col-sm-12 sec8-col-center">
						<ul>
							<li>
								<a>
									<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/b-5.png" alt="brand">
								</a>
							</li>
							<li>
								<a>
									<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/b-6.png" alt="brand">
								</a>
							</li>
							<li>
								<a>
									<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/b-7.png" alt="brand">
								</a>
							</li>
							<li>
								<a>
									<img class="img-responsive" src="${assetsUrl}/templates/carpentry/Images/3x/b-8.png" alt="brand">
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<!------------------------------------- /Section-8----------------------------------->
		<!------------------------------------- Section-9----------------------------------->
		<section id="pricing" class="custom-sec9">
			<div class="container-fluid">
				<div class="row align-items-center custom-sec9-row1">
					<div class="lead-image-with-content for_lead_image_desk s" data-section-type="lead-image-with-content">
						<div class="lead-image-with-inner">
							<div class="lead-image-content">
								<img class="insta-imaz" src="${assetsUrl}/templates/carpentry/Images/3x/instagram.png">
								<p class="main-title space-between">Find us
									<br>on Instagram</p>
								<div class="nav-item-contact"> <a class="nav-link-2" href="#downloadtheapp">@siteseed</a>
								</div>
							</div>
						</div>
					</div>
					<div class="lead-image-with-content for_lead_image_desk small--hide mobile-img" data-section-type="lead-image-with-content">
						<div class="lead-image-with-inner">
							<div class="lead-image-content m2">
								<img src="${assetsUrl}/templates/carpentry/Images/1x/instagram.png">
							</div>
							<p class="main-title space-between">Find us
								<br>on Instagram</p>
							<div class="nav-item-contact"> <a class="nav-link-2" href="#downloadtheapp">@siteseed</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--<section id="pricing" class="custom-sec9">
	<div class="container-fluid">
		
			
<div class="lead-image-with-content for_lead_image_desk small--hide mobile-img" data-section-type="lead-image-with-content" >
<div class="lead-image-with-inner"> 
  <div class="lead-image-content m2">
	<img  src="${assetsUrl}/templates/carpentry/Images/1x/instagram.png">
	
	</div>
	<p class="main-title space-between">Follow us <br>on Instagram</p>
	
	
	<div class="nav-item-contact">
		<a class="nav-link-2" href="#downloadtheapp">@siteseed</a></div>
</div></div>
		
		
</div>
	
	
</section>-->
		<!------------------------------------- /Section-9----------------------------------->
		<!--<section id="pricing-new" class="custom-9">
<div class="container-fluid">
<div class="row">
 <div class="col-md-4"><img class="img_1"src="${assetsUrl}/templates/carpentry/Images/1x/Image_09.jpg">
 <img class="img_2 "src="${assetsUrl}/templates/carpentry/Images/1x/Image_10.jpg">
 </div> 
	
 <div class="col-md-4"></div>
	
<div class="col-md-4" style="text-align: end;padding: 0px;">
<img class="img_3" src="${assetsUrl}/templates/carpentry/Images/1x/gray-bg.png">
<img class="img_4"src="${assetsUrl}/templates/carpentry/Images/1x/Image_11.jpg">
</div>     
</div>

<div class="row align-items-center custom-sec9-row1">
 <div class="col-md-4 p-0">
	<img class="img_5"src="${assetsUrl}/templates/carpentry/Images/1x/s-gray-bg.png">
	 <img class="img_6"src="${assetsUrl}/templates/carpentry/Images/1x/Image_12.jpg">
	 <img class="img_7"src="${assetsUrl}/templates/carpentry/Images/1x/Image_13.jpg">
	</div>   
 <div class="col-md-4"></div> 
<div class="col-md-4">
	<img class="img_8"src="${assetsUrl}/templates/carpentry/Images/1x/Image_14.jpg">
	<img class="img_9"src="${assetsUrl}/templates/carpentry/Images/1x/Image_15.jpg">
	</div>     
</div>

</div>

<div class="lead-image-with-inner-1"> 
  <div class="lead-image-content m3 text-center">
	<img  src="${assetsUrl}/templates/carpentry/Images/1x/instagram.png">
	
	</div>
	<p class="main-title space-between text-center">Follow us <br>on Instagram</p>
	
	
	<div class="nav-item-contact text-center">
		<a class="nav-link-2" href="#downloadtheapp">@siteseed</a></div>
</div>

</section>-->
		<!-------------------------------------Section-10----------------------------------->
		<section id="downloadtheapp" class="custom-sec10 custom-footer">
			<div class="container-fluid footer">
				<div class="container footer-1 ">
					<div class="row align-items-center custom-sec10-row1">
						<div class="col-md-12 col-lg-12 col-sm-12 sec10-col-center text-center">
							<div class="f-images">
								<a class="a-store">
									<img src="${assetsUrl}/templates/carpentry/Images/3x/Icon_logo.png" class="img-rounded app-store" alt="brand" />
								</a>
							</div>
							<h2 class="main-title" style="color: #ffffff;">Let’s design the place you always imagined.</h2>
						</div>
					</div>
					<div class="row Address-section">
						<div class="col-lg-3 col-md-3 mb-12 p-0">
							<p class="Footer-para ">20712 Knob Woods
								<br>Dr #208, Southfield,
								<br>MI, 48076</p>
						</div>
						<div class="col-lg-3 col-md-3 mb-12 p-0">
							<p class="Footer-para ">(617) 371 7722
								<br>info@SITESEED.com</p>
						</div>
						<div class="col-lg-3 col-md-3 mb-12 p-0">
							<p class="Footer-para "><a class="Footer-para border-b" href="#">Privacy Policy</a>
								<br><a class="Footer-para" href="#">Terms Of Use</a>
							</p>
						</div>
						<div class="col-lg-3 col-md-3 mb-12 p-0">
							<p class="Footer-para follow-text">Follow US:</p> <span class="so-icons"><a class="s-color pointer" href="#"><i class="fa fa-facebook" ></i></a></span>
							<span class="so-icons"><a class="s-color pointer" href="#"><i class="fa fa-twitter" ></i></a></span>  <span class="so-icons"><a class="s-color pointer" href="#"><i class="fa fa-instagram" ></i></a></span>
							<span><a class="s-color pointer" href="#"><i class="fa fa-youtube-play"></i></a></span> 
						</div>
					</div>
					
						<p class="l-16 copyright">© 2020 <a class="anchor-txt copyright" href="#">SiteSeed.</a> All rights reserved.</p>
					
				</div>
			</div>
		</section>
		<!------------------------------------- /Section-12----------------------------------->
	</div>
</div>

<script src="${assetsUrl}/templates/carpentry/js/scroll.js"></script>
<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.5/slick.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js"></script>

<script>
$("#testimonial-slider").owlCarousel({
	items:1,
	itemsDesktop:[1000,1],
	itemsDesktopSmall:[990,1],
	itemsTablet:[768,1],
	itemsMobile:[650,1],
	pagination:true,
	navigation:false,
	autoPlay:true
});
</script>
<script>
AOS.init()
</script>
<script>
window.document.body.addEventListener('scroll', (e) => {
    let aos = document.querySelectorAll('[data-aos|=fade]');
    aos.forEach((el)=>{
        var rect = el.getBoundingClientRect();
        var isVisible = (
            rect.top < e.target.clientHeight * 0.8     /*70% of client height*/
        )
        if (isVisible ) {
            $(el).addClass('aos-animate');
        } else {
            $(el).removeClass('aos-animate');
        }
    });
})
</script>
<!---swiper-1---->
<script>
	$('.responsive').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3.5,
	  slidesToScroll: 3.5,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1.1,
	        slidesToScroll: 1.1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1.1,
	        slidesToScroll: 1.1
	      }
	    }
	   
	  ]
	});
</script>
<!---swiper-1 end---->
<!---swiper-2---->
<script>
	$('.responsive-1').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 1.3,
	  slidesToScroll: 1.3,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1.1,
	        slidesToScroll: 1.1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	   
	  ]
	});
</script>
<!---swiper-2 end---->
<script>
	function openNav() {
	 $("#navbarNav").attr('style','display:block');
	 $("#Mobile-nav").attr('data-target','#navbarNav');
	}
	    
	function closeNav() {
	 $("#navbarNav").attr('style','display:none');
	 }
</script>
    
    <script>
    causeRepaintsOn = $("h1, h2, h3, p");

$(window).resize(function() {
  causeRepaintsOn.css("z-index", 1);
});
    </script>
    <script>
        $(function () {
                $(".popup-youtube, .popup-vimeo").magnificPopup({
                  type: "iframe",
                });
                $.extend(true, $.magnificPopup.defaults, {
                  iframe: {
                    patterns: {
                      youtube: {
                        index: "youtube.com/",
                        id: "videoId",
                        src: "https:%id%",
                      },
                      vimeo: {
                        index: "vimeo.com/",
                        id: "videoId2",
                        src: "https:/%id%",
                      },
                    },
                  },
                });
              });
    </script>
	
`
//   ===================================================

/*
  Steps
  1. extract basic and @media/@-webkit-keyframes/@keyframes styles from style.css of template
  2. put basic styles in template1StyleCss variable
  3. put later styles in template1StyleMedia variable
  4. put html>body content in template1Html also append scripts tags in the end of this variable
  5. Remove all inline styles and add them in css with proper ids
  6. If you want to drag and move components which has scripts. The script tags should be in the immediate parent of that component.
  */


/*
<script>
$('.menu-toggle').on('click', function() {
$('.wrapper').toggleClass('menu--is-revealed');
$('#navbarResponsive').toggleClass('hideshow');   

});    
</script> 
*/
export default {
	html,
	baseCss,
	customCss,
	style,
}