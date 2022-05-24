import { assetsUrl } from "../../../settings";

export const customCss = `
/********************************* Media-queries*******************************/
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

@media (min-width: 1024px) and (max-width: 1151px), (min-width: 768px) and (max-width: 1023px), (min-width: 667px) and (max-width: 767px), (max-width: 666px) {
.VideoHead-popup-video-container {width: calc(100% - 16px * 2);}
}

@media (min-width:1900px) and (max-width:1920px){
    .w3-modal-content.w3-card-4.w3-animate-zoom.speaker {
        max-width: 480px !important;
        padding: 0px;
    }
    }
/********************************* I-PAD VIEW*******************************/

@media (min-width:767px) and (max-width:800px){
    img.img-responsive.side-F3 {
    display: none;
}
    span.so-icons {
    margin-right: -0.786458vw;
}
    .panel-title a {
    display: block;
    padding: 3.302083vw 0vw 3.325521vw 0vw;
    position: relative;
}
    .owl-dots {display: none;}
    .btn-d {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding: 1vw 1.976563vw;
    border-left: 1px solid #ffffff;
}
    .btn-d-1{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding: 1vw 1.976563vw;
    border-left: 1px solid #ffffff;
}
     .icon {
      top: 45%;}
    
    .w3-xlarge {
    z-index: 9999;
    font-size: 3vw !important;
}
    .social-txt{font-size: 13px;}
    .custom-nv-right.web-view {
    display: none;}
    img.img-rounded {
    width: 145px;
}  
    .navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0rem;
}
    /************** Sidebar*************/
    img.close-nav{display: block;}
  .offcanvas-header.mt-3 {
    position: relative;
    float: right;
    display: block !important;
    top: -3em;
}
    img.close-nav {
    width: 40px;
    height: 40px;    
}
    .btn-close{opacity: 1;}
    .mobile-nav{margin-top: 30px;}
     .navbar-collapse {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 100%;
    width: 100%;
    padding-right: 80px;
    padding-left: 80px;
    overflow-y: auto;
    visibility: hidden;
    background-color: #ffffff;
    transition: visibility .4s ease-in-out, transform .4s ease-in-out;
}
 .navbar-collapse.show {
    visibility: visible;
    transform: translateX(-100%);
    transition: visibility .4s ease-in-out, transform .4s ease-in-out;
}
 
    ul#menu {
    margin-top: 135px;
}
    .mobi-logo {
    width: 145px;
    display: block;
}
    li.nav-item.nav-data a.nav-link {
    font-size: 42px;
    margin: 0px;
    margin-bottom: 30px;
}
    .mobile-view{display: block;}
    /************** End Sidebar*************/
    .nav-item .nav-link-1{
       font-size: 16px;
     padding: 10px 25px; 
    }
    .custom-nv-right.mobile-view{
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .sub-title{font-size: 13px;}
    .main-title{font-size: 30px;  word-break: break-all;}
    .bold-txt{font-size: 30px;word-break: break-word;}
    p.main-para{font-size: 16px;width: 100%;}
     img.img-responsive.side-F4-sm {
    top: 47.552083vw;
}
    img.img-responsive.side-F4-dot {
    top: 68.5%;
    }
    img.img-responsive.side-F4-user {
    top: 51.552083vw;
    }
    .side-M8 {
    top: 52.5%;
    }
    .side-M6 {
     top: 70%;
    }
    .side-M7 {
    top: 39%;
    }
    .side-M9 {top: 64%;}
    .side-M4 {top: 56%;}
    .side-M11 {
    top: 53%;
    }
    .side-M10 {
    top: 50%;
    }
    .side-M3 {
     top: 47.5%;
    }
    .side-F2 {
    top: 34%;
    }
    .side-M2 {top: 56%;}
    .side-M1 {
    top: 59%;
    }
    .side-M5 {top: 69%;}
    
    .container-inner {
    padding-left: 125px;
}
    img.img-responsive.side-F1-sm {
    bottom: -4.723958vw;
    }
    img.img-responsive.ine-shape2 {
    bottom: 41.2%;
    width: 3.1901041666666665vw;
    right: 41%;
    position: absolute;
}
    
    .ine-shape {
   right: 15.46875vw;}
    
    img.NW-img-1.img-responsive{top: 29%;}
    img.NW-img-3.img-responsive{top: 35%;}
    img.NW-img-2.img-responsive{top: 31%;}
    img.SB-img-7.img-responsive{top: -35%;}
    img.SB-img-4.img-responsive{top: -26%;}
    img.SB-img-3.img-responsive{top: -6%;}
    img.SB-img-5.img-responsive {top: -12%}
    img.SB-img-6.img-responsive{top: -26%;}
    img.SB-img-1.img-responsive{top:-46%;}
    
   .brand-img {
    width: auto;
}
    
 .left-btn .nav-link-1 {
    font-size: 16px;
    padding: 10px 55px 10px 20px;
}
    .custom-sec4 {
    margin-top: 23.765625vw;
}
    
    .nav-item .nav-link-1{
       font-size: 16px;
    padding: 10px 55px 10px 20px;
    }
    #material-tabs-1>a {
    margin-right: 40px;
    font-size: 18px !important;
}
    .acc-timing {
    font-size: 13px;
}
    .Acc-theam {
    font-size: 13px;
}
    p.testimonial-para {
    font-size: 22px;
    line-height: 36px;
}
    p.s-name {
    font-size: 16px;
}
    p.s-data {
    font-size: 13px;
}
    p.client-name {
    font-size: 18px;
    margin-top: 50px;
}
    img.img-responsive.brand-name {
    margin-top: 15px;
    width: 92px;
}
    p.nws-head {
    font-size: 42px;
}
    p.nws-para {
    font-size: 16px;
}
    B.text-center {
    height: 40px;
    width: 88px;
    font-size: 13px;
}
    .acc-txt {
    font-size: 13px;
}
    .acc-P {
    font-size: 13px;
    line-height: normal;
}
    .acc-B {
    font-size: 13px;
}
    p.card-subhead{font-size: 13px;}
    p.card-head{font-size: 25px;}
    p.card-para{font-size: 16px;}
    
    .slider-card {
     width: 350px;
    }
    .card-container-1{
        padding-left: 120px;
    }
    .side-F {
    top: 18%;
    }
    .custom-sec10{margin-top: 200px;}
    li a {
    font-size: 16px;
    margin-right: 16px;
}
    .s-color {
    font-size: 18px;
    margin-right: 34px;
}
    .custom-sec13.custom-footer .copyright {
    font-size: 13px;
    margin-top: 20px;
}
.Speaker-div {
    position: relative;
    margin-right: 1.3020833333333333vw;
    float: left;
    width: 22%;
}
    .Speaker-div-1{
    position: relative;
    margin-right: 1.3020833333333333vw;
    float: left;
    width: 22%;
}
       .container-speaker {
    margin-top: 100px;
    padding-left: 80px;
    padding-right: 80px;
}
    #material-tabs-1 {
    max-width: 100%;
    }
    .container-inner2{
     padding-top: 0px;    
     padding-left: 80px;
     padding-right: 80px;    
    }
    .container-inner-vedio {
    padding-left: 80px;
    padding-right: 80px;
}
    .custom-sec7 {
    margin-top: 100px;
    padding-left: 80px;
    padding-right: 80px;
}
     .container-inner-patners {
    margin-top: 100px;
    padding-left: 80px;
    padding-right: 80px;
} 
    .custom-sec11 {
    margin-top: 100px;
    padding-left: 80px;
    padding-right: 80px;
}
 .container-newsletter {
    margin-top: 100px;
    padding-left: 150px;
    padding-right: 150px;
}
    button.search-more-button-B.text-center {
    height: 40px;
    width: 88px;
    font-size: 13px;}
    
    .form-control-1{
        font-size: 13px;
        height: 40px;
        width: 227px;
    }
    .custom-sec13.custom-footer ul li a{font-size: 16px;}
}

/*********************************END I-PAD VIEW*******************************/


/*********************************425 VIEW*******************************/

@media (min-width:390px) and (max-width:500px){
   img.img-responsive.ine-shape2 {
    bottom: 45.9% !important;
    right: 9% !important;   
    }
}

/*********************************425 VIEW VIEW*******************************/

/*********************************320 VIEW*******************************/

@media (max-width: 320px) and (min-width: 300px){
img.img-responsive.ine-shape2 {
    bottom: 55.5% !important;
    right: 4% !important;
  }

}
/*********************************320 VIEW END *******************************/

@media (min-width:0px) and (max-width:767px){
    /************** Sidebar*************/
    .btn-close{opacity: 1;}
     .navbar-collapse {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 100%;
    width: 100%;
    padding-right: 25px;
    padding-left: 25px;
    overflow-y: auto;
    visibility: hidden;
    background-color: #ffffff;
    transition: visibility .2s ease-in-out, transform .2s ease-in-out;
}
 .navbar-collapse.show {
    visibility: visible;
    transform: translateX(-100%);
}
    ul#menu {
    margin-top: 135px;
}
    .mobi-logo {
    width: 145px;
    display: block;
}
    /************** End Sidebar*************/
    .panel-title a {
    display: block;
    padding: 20px 0px;
    position: relative;
}
    .owl-dots {
        display: none;
    }
    
      img.SB-img-1.img-responsive {
          display: none;
    }
     .mobile-view{display: block;}
    img.close-nav{display: block;}
  .offcanvas-header.mt-3 {
    position: relative;
    float: right;
    display: block !important;
    top: -3em;}
    
    img.close-nav {
    height: 40px;   
    width: 40px;
}
    .mobile-nav{margin-top: 30px;}
    
    input::-webkit-input-placeholder {
    font-size: 13px;
    padding-left: 20px;    
    }
    .Speaker-div {
     padding: 0px;
}
    .Speaker-div-1{
     padding: 0px;
}
    .L-col{
    padding-right: 10px;
}
    .R-col{
    padding-left: 10px;
}
    .bottom-group-inner-mobi{
        display: block;
    }
    img.img-responsive.ine-shape1 {
    z-index: -999;
    position: absolute;
    width: 30.627604vw;
    top: -13.255208vw;
    left: 0;
}
    .In-img {
    left: 12%;
    max-width: 100%;
    width: 64.627604vw;
    position: relative;
}
  img.img-responsive.ine-shape2 {
    bottom: 46.5%;
    width: 6.627604vw;
    right: 13%;
    position: absolute;
}
  img.img-responsive.ine-shape22 {
    display: block;
    bottom: 40.9%;
    width: 8.627604vw;
    right: 3.5%;
    position: absolute;
}
    
    .navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0rem;
}
    .custom-sec2{margin-top: 0px;padding-top: 85px;}
    
    li.nav-item.nav-data a.nav-link {
    font-size: 42px;
    margin: 0px;
    margin-bottom: 30px;
}
    .nav-link-1{
    font-size: 16px;
    padding: 11px 22px;}
    
    span.btn-d img {
    width: 15px;
}
  nav.navbar.navbar-expand-lg.E-nabbar {
    margin-top: 30px;
    padding: 0;
} 
.custom-nv-right.web-view {
    display: none;}
    img.img-rounded {
    width: 145px;
}
    .navbar-toggler {
    padding: 0px;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;}
   
    body .navbar {
    padding: 29px 0px 30px 0px;
}
  body .navbar .container-fluid {
    padding-left: 25px;
    padding-right: 25px;
}
    .container.container-nav.custom-sec1 {
    width: 100%;
    max-width: 1200px;
}
  
    body .container {
    padding-left: 25px;
    padding-right: 25px;    
    width: 100%;
    max-width: 1200px;
    padding: 0;
}
    .left-btn {
    margin-top: 50px;
}
    .container-inner {
    padding-left: 25px;
}
    .sub-title{font-size: 13px;}
    .main-title{font-size: 42px;  word-break: break-all;}
    .bold-txt{font-size: 42px;word-break: break-word;}
    
    p.main-para {
    font-size: 16px;
    width: 100%;
    padding-top: 10px;
}
    
    .left-btn .nav-link-1{
     font-size: 16px;
     padding: 1.651042vw 15.580729vw 1.651042vw 3.302083vw;
    }
    
    .nav-item .nav-link-1{
       font-size: 16px;
       padding: 1.651042vw 15.580729vw 1.651042vw 3.302083vw;
    }
    .btn-d-1 {
    position: absolute;
    right: 0;
    top: 0px;
    height: 100%;
    padding: 1.716146vw 3.976563vw;
    border-left: 1px solid #ffffff;
}
    span.btn-d-1 img {
    margin-top: -5px;    
    width: 3vw;
}
    .L-sect{width: 30%;float: left;}
    
    .R-sect{width: 70%;float: left;}
    
    .row.social-space.space-R {
    padding: 20px 10px;
    border-top: 1px solid #dadada;
}
    .custom-nv-right.mobile-view{
        margin-top: 50px;
        margin-bottom: 100px;
    }
    .group-1{display: none;}
    .group-2{display: none;}
    
    .btn-d {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding: 1.716146vw 3.976563vw;
    border-left: 1px solid #ffffff;
}
    .row.top-banner-1 {
    margin-top: 200px;
}
  img.img-responsive.side-S-1 {
    width: 32.877604vw;
}
 .side-S-5 {
    position: absolute;
    width: 54.216146vw;
    right: 6.5625vw;
    top: 102%;
}
    
.side-S-4 {
    left: 18%;
    position: absolute;
    width: 113px;
    top: 53%;
} 
 .side-S-2 {
    top: -27px;
    position: absolute;
    width: 27px;
    left: 123px;
}   
 .side-S-3 {
    position: absolute;
    width: 27px;
    top: -53px;
    left: 150px;
}
  .group-3{display: block;} 
    .f-img {
    display: none;
    }
  
    section.custom-sec3 {
    margin-top: 100px;
}
    .inovation-sec {
    margin-top: 89px;
}
  .custom-sec4 {
    margin-top: 200px;
}
.v-1 {
    left: -17%;
    top: -30%;
    position: absolute;
    width: 113px;
}
    .v-2 {
    right: -15%;
    bottom: -28%;
    position: absolute;
    width: 113px;
}
    span#hom img {
    width: 50px;
}
  
    .row.speakers-details {
    padding-top: 50px;
}
    .Speaker-div {
    position: relative;
    margin-right:0px;
    float: left;
    width: 50%;
}
    
     .Speaker-div-1{
    position: relative;
    margin-right:0px;
    float: left;
    width: 50%;
}
    p.s-name{font-size: 16px;}    
    p.s-data{font-size: 13px;}
    .s-detail {
    margin-top: 12px;
    margin-bottom: 20px;
}
      .container-speaker {
    margin-top: 150px;
    padding-left: 25px;
    padding-right: 25px;
}
    .container-inner2{
     padding-top: 200px;    
     padding-left: 10px;
     padding-right: 10px;    
    }
    .container-inner-vedio {
    padding-left: 25px;
    padding-right: 25px;
}
    .custom-sec7 {
    margin-top: 100px;
    padding-left: 25px;
    padding-right: 25px;
}
     .container-inner-patners {
    margin-top: 50px;
    padding-left: 25px;
    padding-right: 25px;
} 
    .custom-sec11 {
    margin-top: 50px;
    padding-left: 25px;
    padding-right: 25px;
}
    .container-newsletter {
   margin-top: 100px;
    padding-left: 25px;
    padding-right: 25px;
}
    img.img-responsive.side-F3{display: none;}
   #material-tabs-1 {
    margin-left: 50px;
    overflow: scroll;
    margin-top: 50px !important;
    margin: 0 auto;
    max-width: 100%;
    position: relative;
    display: block;
    padding: 0;
    white-space: nowrap;
}
    #material-tabs-1>a {
    width: 25%;
    margin-right: 40px;
    font-size: 18px !important;
    text-align: center;
}
    ol, ul {
    padding-left: 1rem;
}
    .Acc-theam{font-size: 13px;}
    .acc-timing{font-size: 13px;}
    .acc-txt{font-size: 13px;}
    .acc-B{font-size: 13px;}
    .acc-P{font-size: 13px;line-height: normal;}
    img.img-responsive.s-img {
    width: 50px;
}
 .acc-img {
    width: 21%;
    float: left;
    margin-bottom: 20px;
}
    #accordion-1 .panel-heading a:before, #accordion-2 .panel-heading a:before, #accordion-3 .panel-heading a:before, #accordion-4 .panel-heading a:before, #accordion-5 .panel-heading a:before{font-size: 21px;margin-top: 15px;}
    
    .acc-date-sec{width: 40%;}
    .acc-date-sec-1{width: 50%;}
    
    .slider-card{
    display: none;
    }
    .slider-card-mobi {
    margin-bottom: 50px;
    padding-left: 25px;
    display: block;
}
    .slider-card-mobi p.card-subhead {
    margin-bottom: 0.6510416666666666vw;
    font-size: 13px;
    color: #161C2D;
}
    .slider-card-mobi p.card-head {
    margin-bottom: 1.1067708333333333vw;
    line-height: 50px;
    font-weight: normal;
    font-size: 42px;
    color: #161C2D;
}
    .slider-card-mobi p.card-para {
    padding-top: 12px;    
    font-weight: normal;
    font-size: 16px;
    color:  #869AB8;;
    line-height: 19px;
}
    .Slider-shape{display: none;}
   .brand-img {
    width: 150px;
}
    img.popup.image_on {
    width: 10vw;
}
    .V-shape{display: none;}
    .icon {
    top: 35%;
    }
    .w3-xlarge {
    z-index: 9999;
    font-size: 25px !important;
}
    .social-txt{font-size: 13px;}
    .custom-sec9-row1 ul li {
    padding: 30px 30px;
    width: 50%;}
   img.img-responsive.T-one {
    width: 113px;
    position: initial;
    left: 48%;
}
    img.img-responsive.T-two {
    top: 44%;
    position: absolute;
    left: 18%;
    width: 100px;
}
    .Testimonaial-spc {
    margin-top: 68px;
    padding-left: 0px;
}
    p.testimonial-para{font-size: 22px;line-height: 36px;}
    div#testimonials-section {
    padding: 0px;
}
    p.client-name{font-size: 18px;margin-top: 50px;} 
    
    img.img-responsive.brand-name {
    margin-top: 15px;    
    width: 92px;
}
    p.nws-head{font-size: 42px;}
    p.nws-para{font-size: 16px;}
    B.text-center {
    font-size: 13px;
    padding: 20px 25px;
    width: 88px;
}
    button.search-more-button-B.text-center {
    height: 40px;
    width: 88px;
    font-size: 13px;}
    
    .form-control-1{
        font-size: 13px;
        height: 40px;
        width: 227px;
    }
    
    nput::-webkit-input-placeholder {
	font-size: 50px;}
    
     input:-moz-placeholder {
	font-size: 50px;}
   
    :-ms-input-placeholder {
	font-size: 50px;
	}
    .bottom-group-2{display: none;}
    .bottom-group-1{display: none;}
    .custom-sec13.custom-footer ul li a{font-size: 16px;padding: 0px 8px;}
    .custom-sec13.custom-footer .copyright{font-size: 13px;margin-top: 20px;}
    .s-color {
    font-size: 18px;
    margin: 11px;
}
    .sub-title-m {
    text-transform: inherit;
    width: 100% !important;}
    
    .w3-btn, .w3-button{padding: 0px 25px;}
    p.U-name{font-size: 22px;padding-top: 20px;}
    p.U-proff{font-size: 16px;}
    
    .user-data {
    padding-left: 10px;    
    position: initial;
    }
    .ff {
    margin: 20px auto 50px auto;
}
    img.footer-logo {
     width: 50px;
}
    section#downloadtheapp {
    margin-top: 100px;
    margin-bottom: 50px;
}
   .neswletter-section {
    margin-bottom: 350px;
    margin-top: 350px;
}
    
    img.IN-img-1.img-responsive {
    width: 19px;
    position: absolute;
    top: 6%;
}
    img.IN-img-2.img-responsive {
    bottom: 90%;
    width: 25px;
    position: absolute;
    left: 31%;
}
    img.IN-img-3.img-responsive {
    left: 38%;
    width: 89px;
    position: absolute;
    bottom: 81%;
}
   img.IN-img-4.img-responsive {
    left: 5%;
    bottom: 69%;
    width: 117px;
    position: absolute;
}
    
  img.INN-img-1.img-responsive {
    width: 81px;
    position: absolute;
    right: 26%;
    top: 92%;
}
    img.INN-img-2.img-responsive {
    top: 80.5%;
    width: 103px;
    position: absolute;
    right: 0;
}
   img.INN-img-3.img-responsive {
    right: 48%;
    width: 23px;
    position: absolute;
    top: 89%;
}
   img.INN-img-4.img-responsive {
    width: 78px;
    position: absolute;
    top: 80.5%;
    right: 55%;
}
  img.INN-img-5.img-responsive {
    top: 70%;
    width: 103px;
    position: absolute;
    right: 27%;
}
  img.INN-img-6.img-responsive {
    z-index: -999;
    width: 70px;
    position: absolute;
    top: 77%;
    right: -31px;
}
    span.L-speaker{display: none;}
    .custom-sec13.custom-footer ul li{padding: 0px;}
}




/********************************* /Media-queries*******************************/
`

export const baseCss = `/********************************* CSS********************************/

body p h1 h1 h3 h4 h5 h6 span col a{font-family: 'Barlow', sans-serif;margin: 0px;}
body{font-family: 'Barlow', sans-serif;color: #869AB8;background-color: #ffffff;overflow-x: hidden;}
body .row {    margin: 0;}
body .container {width:100%; max-width:100%; padding: 0;}
body .container-fluid{padding: 0px;}
.img-responsive{width: 100%;max-width: 100%;}
p {margin: 0px;}
a:hover {color: #0056b3;text-decoration: none;}
h1, h2, h3, h4, h5, h6{margin: 0px;}

/*************Button hover***************/
a.nav-link-1:hover {
    color: #ffffff;
    }
button.search-more-button-B.text-center:hover {
    background-color: #161c2d;
}

a.nav-link-1:hover{
   background-color: #161c2d;  
}
/*********************************NAVBAR CSS********************************/
.container.container-nav.custom-sec1 {
    width: 100%;
    max-width: 83.125vw;
}
img.img-rounded {
    width: 9.440104166666666vw;
}
li.nav-item.nav-data a.nav-link {
  margin: 0px 1.6276041666666667vw;
  padding: 0;    
  color: #161C2D;
  font-size: 13px;
  font-size: 0.9516837481698389vw;
  text-decoration: none;    
}

li.nav-item.nav-data a.nav-link:hover {
    font-weight: 500;
    color: #0B32FF;
}
.nav-link-1 {
    font-family: 'Barlow', sans-serif;
    background: #0B32FF;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.0416666666666667vw;
    padding: 0.6510416666666666vw 4.8828125vw 0.6510416666666666vw  1.4322916666666667vw;
}
.nav-link-1:hover{background-color: #161c2d;}

.btn-d {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding:  0.7161458333333334vw  0.9765625vw;
    border-left: 1px solid #ffffff;
}

.btn-d-1{
    position: absolute;
    right: 0;
    top: 0px;
    height: 100%;
    padding:  0.7161458333333334vw  0.9765625vw;
    border-left: 1px solid #ffffff;
}

span.btn-d img {
    width:  0.9765625vw;
}

span.btn-d-1 img {
    margin-top: -5px;
    width:  0.9765625vw;
}
av.navbar.navbar-expand-lg.E-nabbar {
    z-index: 9999;
    margin-top: 3.2552083333333335vw;
    padding: 0;
}
.mobile-view{display: none;}
.navbar-collapse{width: 69%;}
.navbar {
    padding: 0px;
    z-index: 999;
    position: relative;
    min-height: 3.2552083333333335vw;
    margin-bottom: 0;
}

img.oprn-T {
    width: 40px;
    height: 40px;
}

/********************************* END NAVBAR ********************************/

/*****************modal css************/
.w3-modal-content.w3-card-4.w3-animate-zoom{
    padding: 50px 30px;
  }
p.f-name {
    font-size: 16px;
}
.sub-title-m{
font-family: 'Barlow', sans-serif;    
margin-top: 20px;    
margin-bottom: 30px;    
color: #869AB8;    
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;    
}

.main-title-m{
font-family: 'Barlow', sans-serif;    
margin: 0px;    
padding: 0px;    
font-style: normal;
font-weight: 600;
font-size: 32px;
color: #0B32FF;  
}


.w3-modal {
    padding-bottom: 100px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7) !important;
}
span.w3-button.w3-xlarge.w3-hover-black.w3-display-topright:hover {
    color: #fff!important;
    background-color: #0B32FF!important;
}
.custom-form-ele ul li {
    margin-bottom: 10px;
    border: 0;
    display: inline-block;
    width: 48.2%;
    float: left;
}
.custom-form-ele ul li input {
    border: 1px solid #869AB8;
    color: #000000;
    font-size: 16px;
    height: 49px;
    padding: 15px;
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
{float: left;
    width: 100%;
}
.custom-form-ele ul li.submitbutton .modal-footer button.btn.btn-primary {
    background: #0B32FF;;
    width: 100%;
    border: 0;
    box-shadow: none;
    height: 59px;
    color: #ffffff;
    font-size: 16px;
    border-radius: 0;
    margin: 0;
    font-weight: 600;
}

.custom-form-ele ul li.submitbutton {
    float: left;
    width: 100%;
    margin-top: 30px;
}
.modal-footer{padding: 0px;}
li.navbar-button {
    display: none;
}
img.shows {
    display: none;
}
img.logo-imgae {
    height: 2.781844802342606vw
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
.w3-modal {
    z-index: 999;
}
/*****************End modal css******************/


/*****************Top section******************/
.custom-sec2 {
    margin-top: -11.7890625vw;
    padding-top: 22%;
    padding-bottom: 18%;
}
.container-inner{
  padding-left: 12.565104166666666vw;  
}
.left-btn .nav-link-1 {
    text-decoration: none;
    background: #0B32FF;
    color: #ffffff;
    font-size: 1.171303074670571vw;
    padding: 0.6510416666666666vw 4.8828125vw 0.6510416666666666vw  1.4322916666666667vw;
    text-align: center;
    font-family: 'Barlow', sans-serif;   
}
.sub-title{
font-family: 'Barlow', sans-serif;   
font-style: normal;
font-weight: normal;
font-size: 0.8463541666666666vw;
color: #161C2D;
}
.main-title{
font-family: 'Barlow', sans-serif;   
font-style: normal;
font-weight: normal;
font-size:  3.125vw;
color: #161C2D;
}
.bold-txt{
    font-size: 3.3854166666666665vw;
    color: #0b32ff;
    font-weight: bold;
}
p.main-para{
margin-top: 0.78125vw;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 1.0416666666666667vw;
color: #869AB8;
}
.left-btn {
    position: absolute;
    margin-top: 3.2552083333333335vw;
}
.top-banner {
    position: absolute;
    top: 40%;
    right: 0;
}
/*****************End Top section******************/

/*****************inovation section******************/

.container-inner2{
padding-left: 21.158854166666668vw;
padding-right: 21.158854166666668vw;
}

.In-img{width:20.052083333333332vw;}

.ine-shape{
    z-index: -999;
    position: absolute;
    width: 6.510416666666667vw;
    top: -2.9296875vw;
    right: 4.46875vw;
}

img.img-responsive.ine-shape1 {
    z-index: -999;
    position: absolute;
    width: 7.356770833333333vw;
    top: -3.2552083333333335vw;
    left: -2.372396vw;
}
img.img-responsive.ine-shape2 {
    bottom: 41.2%;
    width: 2.2786458333333335vw;
    right: 24%;
    position: absolute;
}
img.img-responsive.ine-shape22 {
    bottom: 34.2%;
    width: 3.2552083333333335vw;
    right: 12%;
    position: absolute;
}
.f-img{margin-top: 12.552083333333336vw;}

section.custom-sec3 {
    margin-top: 21.020833333333334vw;
}
.inovation-sec{
    margin-top: 6.510416666666667vw;
}
/*****************inovation section******************/


/*****************Vedio section******************/
.custom-sec4{margin-top: 16.765625vw;}
.container-inner-vedio{
padding-left: 19.205729166666668vw;
padding-right: 19.205729166666668vw;
}
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
span#hom img {
    width: 5vw;
}
.v-1 {
    left: -5%;
    top: -9%;
    position: absolute;
    width: 6.705729166666667vw;
}
.v-2 {
    right: -5%;
    bottom: -9%;
    position: absolute;
    width: 7.356770833333333vw;
}

/*****************Vedio section end ******************/



/*****************Our speaker******************/

.container-speaker{
    margin-top: 14.778645833333334vw;
    padding-left: 14.518229166666666vw;
    padding-right: 14.518229166666666vw;
}
.Speaker-div {
    padding: 10px;
    position: relative;
    margin-right:2.4088541666666665vw;
    float: left;
    width: 17.2%;
}

.Speaker-div-1{
    padding: 10px;
    position: relative;
    margin-right: 0px;
    float: left;
    width: 17.2%;
}
.Speaker-div-1{
    padding-top: 3.2552083333333335vw;
}
p.s-name{
font-weight: 600;
font-size: 1.0416666666666667vw;
color: #0B32FF;
}
p.s-data{
  font-size: 0.8463541666666666vw;
 color: #869AB8;
}

.s-detail{
margin-top:  0.78125vw;}

img.popup.image_on {
    width: 3vw;
}
.overlay-1 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  }

.Speaker-div:hover .overlay-1 {
  opacity: 1;
}

.icon {
  color: white;
  font-size: 6.510416666666667vw;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.w3-modal-content.w3-card-4.w3-animate-zoom.speaker {
    padding: 0px;
}
.w3-xlarge {
    width: 3.2552083333333335vw;
    z-index: 9999;
    font-size: 1.5625vw !important;
}

p.U-name{
font-weight: 600;
font-size: 1.4322916666666667vw;
color: #0B32FF;
}
p.U-proff{
font-weight: normal;
font-size: 1.0416666666666667vw;
color: #869AB8;
}
.user-data {
    position: absolute;
    bottom: 45%;
    left: 7%;
}
.space-G{padding: 1.953125vw 1.953125vw 3.90625vw 1.953125vw;}
.space-R{padding: 0.6510vw 1.953125vw 1.953125vw 1.953125vw;}

 span.so-icons {
    margin-right: 2.2135416666666665vw;
}
.s-color {
    font-size: 1.171875vw;
    color: #869AB8;
}
.social-txt{
    font-family: 'Barlow', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.0416666666666667vw;
    color: #869AB8;
}

.Speaker-div {
    padding-top: 3.2552083333333335vw;
}
.row.speakers-details-1 {
    padding-top:  1.953125vw;
}
/*****************Our speaker end ******************/


/*****************Conference Schedule******************/

.custom-sec7{
    margin-top: 14.973958333333334vw;
    padding-left: 17.708333333333332vw;
    padding-right: 17.708333333333332vw;
}

/****************Tab design***************/
.odd-color{
    background: linear-gradient(270deg, rgba(241, 244, 248, 0) 0%, #F1F4F8 51.56%, rgba(241, 244, 248, 0) 100%);
}

.panel {
    margin-bottom: 0px;
    background-color: #fff;
    border-radius: 4px;
    }

#material-tabs-1{
    margin-top: 7.421875vw !important;
    margin: 0 auto;
    max-width: 29.231770833333332vw;
    position: relative;
    display: block;
    padding: 0;
    }

#material-tabs-1>a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    padding: 1.4322916666666667vw;
    text-transform: inherit;
    font-size: 1.171875vw;
    font-weight: 400;
    color: #869AB8;
    }

#material-tabs-1>a.active{
color: #0B32FF !important;
font-weight: 800;    
 border-bottom: 2px solid #0B32FF !important;
}

#material-tabs-1>a {
    font-size: 0.9114583333333334vw !important;
    font-weight: 400;
    color: #869AB8 !important;
}
.tab-content {
    border-top: 1px solid #F1F4F8;
    padding: 0px;
}
/****************End Tab design***************/


/************Acc CSS********************/
.panel-heading {
  background-color: #ffffff;
  border-radius: 0;
  border: none;
  color: #161C2D;
  padding: 0;
}
div#accordion-1, div#accordion-2, div#accordion-3, div#accordion-4, div#accordion-5 {
    margin-top: 3.2552083333333335vw;
}
.panel-title a {
  display: block;
  padding: 1.3020833333333333vw 0vw 0.3255208333333333vw 0vw;
  position: relative;
  }
 .panel-body {
  padding: 10px;     
  background: linear-gradient(270deg, rgba(241, 244, 248, 0) 0%, #F1F4F8 51.56%, rgba(241, 244, 248, 0) 100%);
}
.panel-body-1{
  padding: 10px;     
  }
.image-sec{margin-top: 30px;}
/* #accordion rotate icon option */

#accordion-1 .panel-heading a:before, #accordion-2 .panel-heading a:before, #accordion-3 .panel-heading a:before, #accordion-4 .panel-heading a:before, #accordion-5 .panel-heading a:before {
  content: url(${assetsUrl}/templates/event/images/Vector.png);
  position: absolute;
  right: 0.3255208333333333vw;
  top:  0.6510416666666666vw;
  width: 1vw;
  transition: all 0.5s;    
}

#accordion-1 .panel-heading.active a:before, #accordion-2 .panel-heading.active a:before, #accordion-3 .panel-heading.active a:before, #accordion-4 .panel-heading.active a:before, #accordion-5 .panel-heading.active a:before {
  color: #869AB8;     
  transform: rotate(90deg);
  transition: all 0.5s;
}
    
img.img-responsive.s-img {
    width: 3.125vw;}
    
.acc-img{ width: 10%;float: left;}

.image-acc-section{margin-top: 30px;}

.acc-txt{
color: #0B32FF;    
font-weight: 600;
font-size: 1.0416666666666667vw;
}
.acc-B{
font-size: 0.8463541666666666vw;
color: #869AB8;
} 
.acc-P {
    font-weight: 400;
    font-size: 1.0416666666666667vw;
    line-height: 1.4322916666666667vw;
    color: #161C2D;
}
.acc-timing {
    padding-left: 1.3020833333333333vw;
    font-style: normal;
    font-weight: normal;
    font-size: 1.0416666666666667vw;
    color: #869AB8;
}    
::marker {color: #0B32FF;
}
 
.Acc-theam{
font-weight: 500;
font-size: 1.0416666666666667vw;
color: #161C2D;
}
 /************Acc CSS end ********************/

/*****************Conference Schedule end ******************/


/*****************Our patners section  ******************/
.custom-sec9-row1 ul {
    padding: 0;
    text-align: center;
    width: 100%;
    margin: 0 auto;
}
.custom-sec9-row1 ul li {
    list-style-type: none;
    float: left;
    padding: 2.9947916666666665vw 3.1901041666666665vw 2.9947916666666665vw 3.1901041666666665vw;
    width: 25%;
    text-align: center;
}
.container-inner-patners {
    margin-top: 10.872395833333334vw;
    padding-left: 13.708333vw;
    padding-right: 13.708333vw;
}
.brand-img{width: 8.138020833333334vw;}


/*****************Our patners section end ******************/

/*****************Tech companies section******************/

.custom-sec10{
margin-top: 22.786458333333332vw;
position: relative;}

.row.social-space.space-R {
    border-top: 1px solid #dadada;
}
.slider-card {
    opacity: 0.95;
    background-color: #0B32FF;
    width: 31.4453125vw;
    padding: 3.2552083333333335vw 6.231771vw 3.2552083333333335vw 6.705729166666667vw;
}
p.card-subhead {
    margin-bottom: 0.6510416666666666vw;
    font-size: 0.8463541666666666vw;
    color: #FFFFFF;
}
p.card-head{
margin-bottom: 1.1067708333333333vw;    
line-height: 3.7760416666666665vw;    
font-weight: normal;
font-size: 3.125vw;
color: #FFFFFF;
}
p.card-para{
font-weight: normal;
font-size: 1.0416666666666667vw;
color: #FFFFFF;
}
.card-container {
    position: absolute;
    margin-left: 7.8125vw;
    top: -17.53125vw;
    z-index: 9;
}

/*****************Tech companies section end ******************/


/**************** Testimonail-section ******************/
.custom-sec11{
margin-top: 13.020833333333334vw;
padding-left: 14.518229166666666vw;
padding-right: 14.518229166666666vw;
}
.owl-theme .owl-nav.disabled+.owl-dots {
    display: none;
    margin-top: 0.6510416666666666vw;
}
img.img-responsive.T-one {
    width: 7.356770833333333vw;
    position: absolute;
    left: 48%;
}
 img.img-responsive.T-two {
    top: 3.627604vw;
    position: absolute;
    left: 75%;
    width: 6.510416666666667vw;
}
p.testimonial-para{
font-weight:  300;
font-size:  2.0833333333333335vw;
line-height:2.8645833333333335vw;
color: #161C2D;
}

p.client-name{
font-weight: 600;
font-size: 1.4322916666666667vw;
line-height: 1.6927083333333333vw;
color: #0B32FF;
}
span.client-prof{
font-weight: normal;    
color: #869AB8;
}
img.img-responsive.brand-name{width: 6.966145833333333vw;margin-top: 1.3020833333333333vw;}

.T-data {
    margin-top: 3.2552083333333335vw;
}
.Testimonaial-spc {
    padding-left: 5.4739583333333335vw;
}

/*****************Testimonail-section end ******************/


/*****************Newsletter section******************/
.container-newsletter{
    margin-top: 17.643229166666668vw;
    padding-left:29.8828125vw;
    padding-right:29.8828125vw;    
}

.search {
    margin-top: 3.2552083333333335vw;
    text-align: center;
    padding: 1.6276041666666667vw 0px 6.510416666666667vw 0px;}

.form-control-1 {
    padding-left: 1.3020833333333333vw;
    font-family: 'Barlow', sans-serif;
    padding-top: 0px;
    display: inline;
    width: 15.950520833333334vw;
    height: 2.6041666666666665vw;
    color: #869AB8;
    background-color:#F1F4F8;;
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 0px !important;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
button.search-more-button-B.text-center {
    margin-left: 1.3020833333333333vw;
    font-weight: 600;
    background-color: #0B32FF;
    border: 0px;
    height: 2.4739583333333335vw;
    width: 5.729166666666667vw;
    font-family: 'Barlow', sans-serif;
    font-size: 0.8463541666666666vw;
    color: #fff;
    font-style: normal;
    line-height: 0.9765625vw;
}
p.nws-head{
text-align: center;    
font-weight: normal;
font-size: 2.734375vw;
color: #161C2D
}
p.nws-para {
    padding: 0px 6.510416666666667vw;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 0.8463541666666666vw;
    color: #869AB8;
   }
span.nws-B{
font-weight: 700;    
color: #0B32FF;    
}
/*placeholder css*/
:-ms-input-placeholder {
	font-family: 'Raleway', sans-serif;
	color: #0000003b !important;
}

/*placeholder*/
input::-webkit-input-placeholder {
	font-size: 13px;
	line-height: 18px;
	font-family: 'Barlow', sans-serif;
	font-weight: 600;
	color: #869AB8 !important;
	opacity: 0.3;
}

input:-moz-placeholder {
	font-size: 13px;
	line-height: 18px;
	font-family: 'Barlow', sans-serif;
	font-weight: 600;
	color: #869AB8 !important;
	opacity: 0.3;
}

:-ms-input-placeholder {
	font-size: 13px;
	line-height: 18px;
	font-family: 'Barlow', sans-serif;
	font-weight: 600;
	color: #869AB8 !important;
	opacity: 0.3;
}
:focus {
    outline: 1px solid transparent;
}
button:focus {
    outline: 1px solid transparent;
}

/*End placeholder css*/

/**********SHAPES**************/
.newsletter-outer{position: relative;}
img.NW-img-1.img-responsive {
    width: 1.3020833333333333vw;
    position: absolute;
    top: 10%;
}
img.NW-img-2.img-responsive {
    width: 2.1484375vw;
    position: absolute;
    top: 6%;
    left: 8.5%;
}
img.NW-img-3.img-responsive {
    left: 11%;
    width: 7.356770833333333vw;
    position: absolute;
    top: 17%;
}
img.NW-img-4.img-responsive {
    width: 9.765625vw;
    position: absolute;
    top: 53%;
    left: 1.3671875vw;
}

img.SB-img-1.img-responsive {
    width: 9.765625vw;
    position: absolute;
    top: -84.5%;
    right: 9.8%;
}
img.SB-img-3.img-responsive {
    width: 6.705729166666667vw;
    position: absolute;
    top: 11%;
    right: 10.356771vw;
}
img.SB-img-4.img-responsive {
    width: 9.765625vw;
    position: absolute;
    top: -37%;
    right: 0;
}
img.SB-img-5.img-responsive {
    width: 2.1484375vw;
    position: absolute;
    top: 0;
    right: 17.760417vw;
}
img.SB-img-6.img-responsive {
    width: 7vw;
    position: absolute;
    top: -35%;
    right: 20vw;
}
img.SB-img-7.img-responsive {
    width: 3.2552083333333335vw;
    position: absolute;
    top: -52%;
    right: 0;
}
.side-F {
    top: -4%;
    position: absolute;
    width: 2.580729vw;
    left: 0;
}
img.img-responsive.side-F-sm {
    bottom: -4.609375vw;
    width: 2.1484375vw;
    position: absolute;
    left: 2.734375vw;
}
.side-F1 {
    top: 77%;
    position: absolute;
    width: 2.580729vw;
    left: 0;
}
img.img-responsive.side-F1-sm {
    bottom: -15.723958vw;
    width: 2.1484375vw;
    position: absolute;
    left: 2.734375vw;
}
.side-F2{
    top: 64.5%;
    position: absolute;
    width: 2.580729vw;
    right: 0;
}
img.img-responsive.side-F2-sm {
    top: 30vw;
    width: 2.1484375vw ;
    position: absolute;
    right: 2.734375vw;
}
img.img-responsive.side-F2-mb {
    top: 54%;
    width: 3.2552083333333335vw;
    position: absolute;
    right: 5vw;
}

img.img-responsive.side-F3 {
    top: 28.0625vw;
    width: 4.557291666666667vw;
    position: absolute;
    right: 0;
}

.side-F4 {
    height: 26.041666666666668vw;
    top: 36%;
    position: absolute;
    width: 2.580729vw;
    left: 0;
}
img.img-responsive.side-F4-sm {
    top: 45vw;
    width: 2.1484375vw;
    position: absolute;
    left: 2.8%;
}
img.img-responsive.side-F4-dot {
    top: 90.5%;
    width: 6.705729166666667vw;
    position: absolute;
    left: 5.296875vw;
}
img.img-responsive.side-F4-user {
    top: 50.552083vw;
    width: 9.765625vw;
    position: absolute;
    left: 8.734375vw;
}
.side-M1 {
    top: 71%;
    right: 50.6vw;
    width: 7.356770833333333vw;
    position: absolute;
}

.side-M2 {
    right: 48.354167vw;
    width: 2.2786458333333335vw;
    position: absolute;
    top: 66%;
}
.side-M3 {
    right: 41.192708vw;
    width: 6.705729166666667vw;
    position: absolute;
    top: 52.8%;
}
.side-M4 {
    right: 30.9vw;
    width: 9.765625vw;
    position: absolute;
    top: 66%;
}
.side-M5 {
    right: 40.7vw;
    width: 9.765625vw;
    position: absolute;
    top: 84.8%;
}
.side-M6 {
    right: 14.6vw;
    width: 16.276041666666668vw;
    position: absolute;
    top: 84.9%;
}
.side-M7 {
    top: 41.8%;
    right: 14.5vw;
    width: 9.765625vw;
    position: absolute;
}
.side-M8 {
    top: 60.5%;
    right: 1.7578125vw;
    width: 12.9vw;
    position: absolute;
}
.side-M9 {
    top: 78%;
    right: 27vw;
    width: 7.356770833333333vw;
    position: absolute;
    z-index: -9;
}
.side-M10 {
    top: 57%;
    right: 26.2vw;
    width: 2.2786458333333335vw;
    position: absolute;
}
.side-M11 {
    top: 61.5%;
    right: 28.6vw;
    width: 2.2786458333333335vw;
    position: absolute;
}
.side-M12 {
    top: 51%;
    right: 0;
    width: 2vw;
    position: absolute;
}
section#vedio{position: relative;}
.custom-sec9{position: relative;}
#speaker{position: relative;}
#Inovation{position: relative;}

.custom-nv-right.web-view{z-index: 999;}
#Home{position: relative;}
div#navbar_top {
    margin-top: 3.2552083333333335vw;
    z-index: 9999;
}
.row.speakers-details{padding: 0px;--bs-gutter-x: 0;
    --bs-gutter-y: 0;}
/************END SHAPES*******/


/*****************Newsletter section end ******************/


/*****************Footer section******************/
.ff {
    text-align: center;
    width: 100%;
    margin: 1.3020833333333333vw auto 3.2552083333333335vw auto;
}
.custom-sec13.custom-footer ul {
    padding: 0;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
}
.custom-sec13.custom-footer ul li {
    list-style-type: none;
    display: inline-block;
    text-align: center;
    padding: 0px 0.9765625vw;
}
.custom-sec13.custom-footer ul li a {
font-family: 'Barlow', sans-serif;    
font-size: 1.0416666666666667vw;
color: #161C2D;
}
.custom-sec13.custom-footer ul li a:hover {
    font-weight: 600;
    color: #0B32FF;
    text-decoration: none;
}
.custom-sec13.custom-footer .copyright {
    margin-top: 1.3020833333333333vw;
    color: #869AB8;
    font-size: 0.8463541666666666vw;
    font-family: 'Barlow', sans-serif;
    text-align: center;
    float: left;
    width: 100%;
}
section#downloadtheapp{
    margin-top: 9.114583333333334vw;
    margin-bottom: 6.510416666666667vw;
}
/*****************Footer section end ******************/

.group-3{display: none;}
img.footer-logo {
    width: 3.2552083333333335vw;
}
.bottom-group-inner-mobi{display: none;}
.mobi-logo {
    display: none;
}
img.close-nav{display: none;}

.navbar-toggler{padding: 0px !important}

.owl-dots {
    margin-top: 3.2552083333333335vw;
    text-align: center;
    position: relative;
    bottom: 0.3255208333333333vw;
    width: 100%;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
}

.owl-dot {
    border-radius: 3.2552083333333335vw;
    height: 0.2604166666666667vw;
    width: 3.7760416666666665vw;
    display: inline-block;
    background: #869AB8;
    margin-left: 0.3255208333333333vw;
    margin-right: 0.3255208333333333vw;
}

.owl-dot.active {
    width:6.119791666666667vw;
    background: #0B32FF;;
}

section#testimonial .owl-dots {
    display: none !important;
}
.slider-card-mobi{display: none;}


/*****************Vedio modal******************/
.VideoHead-popup-video {display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(21, 20, 26, 0.8);z-index: 9999;transition: all 0.36s ease-in-out;opacity: 0;visibility: hidden;}
.VideoHead-popup-video.show {transition: opacity 0.36s ease-in-out;opacity: 1;visibility: inherit;display:block;}
.VideoHead-popup-video-container {position: relative;height: calc(100% - 60px * 2);width: calc(100% - 24px * 2);max-width: 1640px;margin: 60px auto;}


.VideoHead-popup-video-placeholder {position: absolute;}
.VideoHead-popup-video-placeholder iframe {position: absolute;left: 0;top: 0;width: 100%;height: 100%;}
.VideoHead-popup-video-exit {position: absolute;top: 19px;right: 26px;width: 24px;height: 24px;transition: opacity 0.2s;}
.VideoHead-popup-video-exit:hover {cursor: pointer;opacity: 0.8;transition: opacity 0.2s;}
.VideoHead-popup-video-exit-line-1 {top: 11px;left: 2px;position: absolute;width: 20px;height: 2px;transform: rotate(-45deg);background-color: #ffffff;}
.VideoHead-popup-video-exit-line-2 {top: 11px;left: 2px;position: absolute;width: 20px;height: 2px;transform: rotate(45deg);background-color: #ffffff;}

/*****************Vedio modal end ******************/


/********************************* CSS********************************/
`
export const style = `
  <style>
    ${`@media {background: red;}` + baseCss}
  </style>
  `

export const html = `
<!-------------------------------------Outer-Main-div's------------------------------------->
<div class="mobilty-main">
    <div class="mobilty-main-inner">
        <!-------------------------------------navbar-div------------------------------------->
        <div id="navbar_top" class="custom-sec1-main">
            <div class="container container-nav custom-sec1">
                <nav class="navbar navbar-expand-lg E-nabbar">
                    <div class="container-fluid nav-container">
                        <a class="" href="#">
                            <img src="${assetsUrl}/templates/event/images/Logo%20(1).png" class="img-rounded" alt="Logo Img" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <img class="oprn-T" src="${assetsUrl}/templates/event/images/open-toggle.png">
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <div class="mobile-nav">
                                <a href="#">
                                    <img class="l-img mobi-logo" src="${assetsUrl}/templates/event/images/Logo%20(1).png" att="">
                                </a>
                                <div class="offcanvas-header mt-3">
                                    <img class="close-nav btn-close" src="${assetsUrl}/templates/event/images/close-toggle.png">
                                </div>
                            </div>
                            <ul id="menu" class="navbar-nav">
                                <li class="nav-item nav-data"> <a class="nav-link" aria-current="page" href="#Home">Home</a>
                                </li>
                                <li class="nav-item nav-data"> <a class="nav-link" href="#speaker">Speakers</a>
                                </li>
                                <li class="nav-item nav-data"> <a class="nav-link" href="#Conference">Schedule</a>
                                </li>
                                <li class="nav-item nav-data"> <a class="nav-link" href="#faq">Our Partners</a>
                                </li>
                                <li class="nav-item nav-data"> <a class="nav-link" href="#tech-companies">Gallery</a>
                                </li>
                                <li class="nav-item nav-data"> <a class="nav-link" href="#testimonial">Testimonial</a>
                                </li>
                                <div class="custom-nv-right mobile-view">
                                    <div class="nav-item" style="position: absolute;"> <a class="nav-link-1" href="#downloadtheapp" href="#" href="#downloadtheapp" href="#" onclick="document.getElementById('id01').style.display='block'">Register Now<span class="btn-d" style="display:flex; align-items:center; justify-content:center"><img src="${assetsUrl}/templates/event/images/pluse3x.png" style="margin-top: -5px;"></span></a>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div class="custom-nv-right web-view">
                            <div class="nav-item"> <a class="nav-link-1" href="#downloadtheapp" href="#" href="#downloadtheapp" href="#" onclick="document.getElementById('id01').style.display='block'">Register Now<span class="btn-d" style="display:flex; align-items:center; justify-content:center"><img src="${assetsUrl}/templates/event/images/pluse3x.png"></span></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <!------------------------------------- /navbar-div------------------------------------->
        <!-------------------------------------Section-2------------------------------------->
        <section id="Home" class="custom-sec2"> <span class="group-1"><img class="img-responsive side-F4" src="${assetsUrl}/templates/event/images/sideframe.png">
            <img class="img-responsive side-F4-sm"src="${assetsUrl}/templates/event/images/Subtract-b.png">
            <img class="img-responsive side-F4-dot"src="${assetsUrl}/templates/event/images/Frame%2022.png">
            <img class="img-responsive side-F4-user"src="${assetsUrl}/templates/event/images/Mask%20Group-18.jpg">
           </span>
            <div class="container-inner">
                <div class="row align-items-center" data-aos="fade-right" data-aos-duration="2000">
                    <div class="col-md-4 col-lg-4 col-sm-9 p-0">
                        <p class="sub-title">#The leading startup event</p>
                        <h1 class="main-title">Web Design <br><span class="bold-txt">Conference 2020</span></h1>
                        <p class="main-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                        <div class="left-btn"><a class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id01').style.display='block'">Register Now<span class="btn-d-1" style="display:flex; align-items:center; justify-content:center"><img src="${assetsUrl}/templates/event/images/pluse3x.png"></span></a>
                        </div>
                    </div>
                </div>
                <!-- <div class="row top-banner">
                 
                <div class="col-md-12 p-0"><img style="width: 60vw;"class="img-responsive"src="${assetsUrl}/templates/event/images/top-image.png">
                </div>
                </div>-->
                <div class="row top-banner-1">
                    <div class="col-md-12 p-0"> <span class="group-3">
            <img class="img-responsive side-S-1"src="${assetsUrl}/templates/event/images/Mask%20Group.jpg">
            <img class="img-responsive side-S-2"src="${assetsUrl}/templates/event/images/Subtract-b.png">
            <img class="img-responsive side-S-3"src="${assetsUrl}/templates/event/images/blue-big.png">
              <img class="img-responsive side-S-4"src="${assetsUrl}/templates/event/images/vedio-f-2.png">    
            <img class="img-responsive side-S-5"src="${assetsUrl}/templates/event/images/Rectangle%20592.jpg">
            </span> 
                    </div>
                </div>
            </div> <span class="group-2">
            <img class="img-responsive side-M1" src="${assetsUrl}/templates/event/images/Frame%2012.png">
            <img class="img-responsive side-M2"src="${assetsUrl}/templates/event/images/Subtract.png">
            <img class="img-responsive side-M3"src="${assetsUrl}/templates/event/images/Frame-black.png">
            <img class="img-responsive side-M4"src="${assetsUrl}/templates/event/images/Mask%20Group.jpg">
            <img class="img-responsive side-M5" src="${assetsUrl}/templates/event/images/Mask%20Group-17.jpg">
            <img class="img-responsive side-M6"src="${assetsUrl}/templates/event/images/Rectangle%20592.jpg">
            <img class="img-responsive side-M7"src="${assetsUrl}/templates/event/images/Rectangle%20645.jpg">
            <img class="img-responsive side-M8"src="${assetsUrl}/templates/event/images/Mask%20Group-2.jpg">
            <img class="img-responsive side-M9"src="${assetsUrl}/templates/event/images/Frame%2012.png">
            <img class="img-responsive side-M10"src="${assetsUrl}/templates/event/images/blue-big.png">
            <img class="img-responsive side-M11"src="${assetsUrl}/templates/event/images/Subtract-b.png">
            <img class="img-responsive side-M12"src="${assetsUrl}/templates/event/images/Frame%208.png">    
           </span> 
        </section>
        <!------------------------------------- /Section-2----------------------------------->
        <!------------------------------------- Section-3----------------------------------->
        <section id="Inovation" class="custom-sec3"> <span><img class="img-responsive side-F3" src="${assetsUrl}/templates/event/images/big-frame.png"></span>
            <div class="container-inner2">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-sm-12 f-img" data-aos="fade-right" data-aos-duration="2000"> <span><img class="img-responsive ine-shape"src="${assetsUrl}/templates/event/images/Frame%2011.png"><img class="img-responsive In-img" src="${assetsUrl}/templates/event/images/image-1.jpg"></span>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 s-img" data-aos="fade-down" data-aos-duration="2000"><span class="inovation-group"><img class="img-responsive ine-shape1"src="${assetsUrl}/templates/event/images/Frame%2012.png"><img class="img-responsive In-img"src="${assetsUrl}/templates/event/images/image-2.jpg"><img class="img-responsive ine-shape2"src="${assetsUrl}/templates/event/images/Subtract.png"><img class="img-responsive ine-shape22"src="${assetsUrl}/templates/event/images/gray-R.png"></span>
                        <div class="col-md-12 col-lg-12 col-sm-12 p-0 inovation-sec" data-aos="fade-left" data-aos-duration="2000">
                            <p class="sub-title">#The leading startup event</p>
                            <h1 class="main-title">Inovation &<span class="bold-txt"> Inspiration</span></h1> 
                            <p class="main-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                            <div class="left-btn"><a class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id01').style.display='block'">Register Now<span class="btn-d-1" style="display:flex; align-items:center; justify-content:center"><img src="${assetsUrl}/templates/event/images/pluse3x.png"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-3----------------------------------->
        <!------------------------------------- Section-4----------------------------------->
        <section id="vedio" class="custom-sec4"> <span class="V-shape"><img class="img-responsive side-F1" src="${assetsUrl}/templates/event/images/Frame%205.png"><img class="img-responsive side-F1-sm"src="${assetsUrl}/templates/event/images/Subtract.png"></span>
            <div class="container-inner-vedio" data-aos="fade-up" data-aos-duration="2000">
                <div class="row align-items-center Vedio-section">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0"> <span><img class="img-responsive v-1"src="${assetsUrl}/templates/event/images/vedio-f-1.png"><img class="img-responsive" src="${assetsUrl}/templates/event/images/vedio-image.png"><img class="img-responsive v-2"src="${assetsUrl}/templates/event/images/vedio-f-2.png">
            <a id="play-video" class="play top-video-target" >
            <div class="overlay"> <span id="hom"><img class="popup image_on top-video-target" src="${assetsUrl}/templates/event/images/vedioicon.png" data-aos="zoom-in" data-aos-duration="2000"></span>
                    </div>
                    </a>
                    </span>
                </div>
            </div>
    </div>
    <div id="video-head" class="VideoHead-popup-video">
        <div id="close-video" class="VideoHead-popup-video-exit">
            <div class="VideoHead-popup-video-exit-line-1"></div>
            <div class="VideoHead-popup-video-exit-line-2"></div>
        </div>
        <div class="VideoHead-popup-video-container">
            <div class="VideoHead-popup-video-placeholder" style="width: 100%; height: 100%;">
                <iframe class="top-video-target" id="top-head-player" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/Rwk5PdpTxSU?autoplay=0&amp;controls=1&amp;autohide=1&amp;wmode=opaque&amp;origin=https%3A%2F%2Fclay.global&amp;enablejsapi=1&amp;widgetid=1"></iframe>
            </div>
        </div>
    </div>
    </section>
    <!------------------------------------- /Section-4----------------------------------->
    <!------------------------------------- Section-5----------------------------------->
    <section id="speaker" class="custom-sec5"> <span class="L-speaker"><img class="img-responsive side-F2" src="${assetsUrl}/templates/event/images/Frame%205.png"><img class="img-responsive side-F2-sm"src="${assetsUrl}/templates/event/images/Subtract.png"><img class="img-responsive side-F2-mb"src="${assetsUrl}/templates/event/images/gray-R.png"></span>
        <div class="container-speaker">
            <div class="row align-items-center" data-aos="fade-right" data-aos-duration="2000">
                <div class="col-md-10 col-lg-4 col-sm-9 p-0">
                    <h1 class="main-title">Our<br><span class="bold-txt">Speakers</span></h1> 
                    <p class="main-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                </div>
            </div>
            <div class="row speakers-details">
                <div class="Speaker-div L-col" data-aos="zoom-in" data-aos-duration="2000">
                    <img class="img-responsive spk-img" src="${assetsUrl}/templates/event/images/Mask%20Group.png">
                    <div class="overlay-1">
                        <a href="#" class="icon" title="User Profile" class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id02').style.display='block'">
                            <img class="popup image_on" src="${assetsUrl}/templates/event/images/pluses.png">
                        </a>
                    </div>
                    <div class="s-detail">
                        <p class="s-name">Leslie Witt</p>
                        <p class="s-data">Small Business, Intuit</p>
                    </div>
                </div>
                <div class="Speaker-div R-col" data-aos="zoom-in" data-aos-duration="2000">
                    <img class="img-responsive spk-img" src="${assetsUrl}/templates/event/images/speaker-2.png">
                    <div class="overlay-1">
                        <a href="#" class="icon" title="User Profile" class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id02').style.display='block'">
                            <img class="popup image_on" src="${assetsUrl}/templates/event/images/pluses.png">
                        </a>
                    </div>
                    <div class="s-detail">
                        <p class="s-name">Leslie Witt</p>
                        <p class="s-data">Small Business, Intuit</p>
                    </div>
                </div>
                <div class="Speaker-div L-col" data-aos="zoom-in" data-aos-duration="2000">
                    <img class="img-responsive spk-img" src="${assetsUrl}/templates/event/images/speaker-3.png">
                    <div class="overlay-1">
                        <a href="#" class="icon" title="User Profile" class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id02').style.display='block'">
                            <img class="popup image_on" src="${assetsUrl}/templates/event/images/pluses.png">
                        </a>
                    </div>
                    <div class="s-detail">
                        <p class="s-name">Leslie Witt</p>
                        <p class="s-data">Small Business, Intuit</p>
                    </div>
                </div>
                <div class="Speaker-div R-col" data-aos="zoom-in" data-aos-duration="2000">
                    <img class="img-responsive spk-img" src="${assetsUrl}/templates/event/images/speaker-4.png">
                    <div class="overlay-1">
                        <a href="#" class="icon" title="User Profile" class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id02').style.display='block'">
                            <img class="popup image_on" src="${assetsUrl}/templates/event/images/pluses.png">
                        </a>
                    </div>
                    <div class="s-detail">
                        <p class="s-name">Leslie Witt</p>
                        <p class="s-data">Small Business, Intuit</p>
                    </div>
                </div>
                <div class="Speaker-div Speaker-div-1 L-col" data-aos="zoom-in" data-aos-duration="2000">
                    <img class="img-responsive spk-img" src="${assetsUrl}/templates/event/images/speaker-5.png">
                    <div class="overlay-1">
                        <a href="#" class="icon" title="User Profile" class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id02').style.display='block'">
                            <img class="popup image_on" src="${assetsUrl}/templates/event/images/pluses.png">
                        </a>
                    </div>
                    <div class="s-detail">
                        <p class="s-name">Leslie Witt</p>
                        <p class="s-data">Small Business, Intuit</p>
                    </div>
                </div>
                <div class="Speaker-div R-col" data-aos="zoom-in" data-aos-duration="2000">
                    <img class="img-responsive spk-img" src="${assetsUrl}/templates/event/images/speaker-6.png">
                    <div class="overlay-1">
                        <a href="#" class="icon" title="User Profile" class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id02').style.display='block'">
                            <img class="popup image_on" src="${assetsUrl}/templates/event/images/pluses.png">
                        </a>
                    </div>
                    <div class="s-detail">
                        <p class="s-name">Leslie Witt</p>
                        <p class="s-data">Small Business, Intuit</p>
                    </div>
                </div>
                <div class="Speaker-div L-col" data-aos="zoom-in" data-aos-duration="2000">
                    <img class="img-responsive spk-img" src="${assetsUrl}/templates/event/images/speaker-7.png">
                    <div class="overlay-1">
                        <a href="#" class="icon" title="User Profile" class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id02').style.display='block'">
                            <img class="popup image_on" src="${assetsUrl}/templates/event/images/pluses.png">
                        </a>
                    </div>
                    <div class="s-detail">
                        <p class="s-name">Leslie Witt</p>
                        <p class="s-data">Small Business, Intuit</p>
                    </div>
                </div>
                <div class="Speaker-div R-col" data-aos="zoom-in" data-aos-duration="2000">
                    <img class="img-responsive spk-img" src="${assetsUrl}/templates/event/images/speaker-8.png">
                    <div class="overlay-1">
                        <a href="#" class="icon" title="User Profile" class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id02').style.display='block'">
                            <img class="popup image_on" src="${assetsUrl}/templates/event/images/pluses.png">
                        </a>
                    </div>
                    <div class="s-detail">
                        <p class="s-name">Leslie Witt</p>
                        <p class="s-data">Small Business, Intuit</p>
                    </div>
                </div>
                <div class="Speaker-div L-col" data-aos="zoom-in" data-aos-duration="2000">
                    <img class="img-responsive spk-img" src="${assetsUrl}/templates/event/images/speaker-9.png">
                    <div class="overlay-1">
                        <a href="#" class="icon" title="User Profile" class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id02').style.display='block'">
                            <img class="popup image_on" src="${assetsUrl}/templates/event/images/pluses.png">
                        </a>
                    </div>
                    <div class="s-detail">
                        <p class="s-name">Leslie Witt</p>
                        <p class="s-data">Small Business, Intuit</p>
                    </div>
                </div>
                <div class="Speaker-div Speaker-div-1 R-col" data-aos="zoom-in" data-aos-duration="2000">
                    <img class="img-responsive spk-img" src="${assetsUrl}/templates/event/images/speaker-10.png">
                    <div class="overlay-1">
                        <a href="#" class="icon" title="User Profile" class="nav-link-1" href="#downloadtheapp" href="#" onclick="document.getElementById('id02').style.display='block'">
                            <img class="popup image_on" src="${assetsUrl}/templates/event/images/pluses.png">
                        </a>
                    </div>
                    <div class="s-detail">
                        <p class="s-name">Leslie Witt</p>
                        <p class="s-data">Small Business, Intuit</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-5----------------------------------->
    <!------------------------------------- Section-6----------------------------------->
    <section class="custom-sec6">
        <div class="container">
            <div class="row align-items-center custom-sec6-row1"></div>
        </div>
    </section>
    <!------------------------------------- /Section-6----------------------------------->
    <!------------------------------------- Section-7----------------------------------->
    <section id="Conference" class="custom-sec7">
        <div class="container">
            <div class="row align-items-center text-center" data-aos="fade-down" data-aos-duration="2000">
                <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-sm-12 p-0">
                    <p class="sub-title">#The leading startup event</p>
                    <h1 class="main-title">Conference<span class="bold-txt" style="margin-left: 10px;">Schedule</span></h1> 
                    <p class="main-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                </div>
            </div>
        </div>
        <div class="tab-section">
            <header>
                <div id="material-tabs-1">	<a id="tab1-tab" href="#tab1" class="active">Day 01</a>
                    <a id="tab2-tab" href="#tab2">Day 02</a>
                    <a id="tab3-tab" href="#tab3">Day 03</a>
                    <a id="tab4-tab" href="#tab4">Day 04</a>
                    <a id="tab5-tab" href="#tab5">Day 05</a>
                    <span class="yellow-bar"></span>
                </div>
            </header>
            <div class="tab-content">
                <div id="tab1">
                    <!------- start #accordion----------->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 p-0">
                                <div class="panel-group wrap" id="accordion-1" role="tablist" aria-multiselectable="true">
                                    <!--Start  panel -->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingOne">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <div class="row">
     <div class="col-lg-3 col-md-3 col-sm-3 p-0 acc-date-sec"><ul><li class="acc-timing">08:00 – 09:00</li></ul></div>
     <div class="col-lg-9 col-md-9 col-sm-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference Opening</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 2-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingTwo">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme one</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingThree">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme two</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingFour">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme three</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingFive">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">16:40 – 17:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme four</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 7-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingSix">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">18:20 – 19:10</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme five</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingSeven">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-1" href="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">18:20 – 19:10</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme six</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseSeven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end of #accordion -->
                </div>
                <!-- end of tab -->
                <div id="tab2">
                    <!------- start #accordion----------->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 p-0">
                                <div class="panel-group wrap" id="accordion-2" role="tablist" aria-multiselectable="true">
                                    <!--Start  panel -->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingEight">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">08:00 – 09:00</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference Opening-1</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseEight" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12">
                                                            <p class="acc-P p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 2-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingTwo-1">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseTwo-1" aria-expanded="true" aria-controls="collapseTwo-1">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme one-1</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseTwo-1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo-1">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingThree-1">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseThree-1" aria-expanded="true" aria-controls="collapseThree-1">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme two-1</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseThree-1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree-1">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingFour-1">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseFour-1" aria-expanded="true" aria-controls="collapseFour-1">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme three-1</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseFour-1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour-1">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingFive-1">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseFive-1" aria-expanded="true" aria-controls="collapseFive-1">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">16:40 – 17:30-1</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme four</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseFive-1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive-1">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 7-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingSix-1">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseSix-1" aria-expanded="true" aria-controls="collapseSix-1">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">18:20 – 19:10-1</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme five</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseSix-1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix-1">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingSeven-1">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#collapseSeven-1" aria-expanded="true" aria-controls="collapseSeven-1">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">18:20 – 19:10-1</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme six</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseSeven-1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven-1">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end of #accordion -->
                </div>
                <!-- end of tab -->
                <div id="tab3">
                    <!------- start #accordion----------->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 p-0">
                                <div class="panel-group wrap" id="accordion-3" role="tablist" aria-multiselectable="true">
                                    <!--Start  panel -->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingOne-2">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseOne-2" aria-expanded="true" aria-controls="collapseOne-2">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">08:00 – 09:00</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference Opening-2</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseOne-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne-2">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 2-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingTwo-2">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseTwo-2" aria-expanded="true" aria-controls="collapseTwo-2">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme one-2</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseTwo-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo-2">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingThree-2">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseThree-2" aria-expanded="true" aria-controls="collapseThree-2">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme two-2</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseThree-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree-2">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingFour-2">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseFour-2" aria-expanded="true" aria-controls="collapseFour-2">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme three-2</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseFour-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour-2">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingFive-2">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseFive-2" aria-expanded="true" aria-controls="collapseFive-2">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">16:40 – 17:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme four-2</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseFive-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive-2">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 7-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingSix-2">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseSix-2" aria-expanded="true" aria-controls="collapseSix-2">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">18:20 – 19:10</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme five-2</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseSix-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix-2">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingSeven-2">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#collapseSeven-2" aria-expanded="true" aria-controls="collapseSeven-2">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">18:20 – 19:10</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme six-2</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseSeven-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven-2">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div> 
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end of #accordion -->
                </div>
                <!-- end of tab -->
                <div id="tab4">
                    <!------- start #accordion----------->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 p-0">
                                <div class="panel-group wrap" id="accordion-4" role="tablist" aria-multiselectable="true">
                                    <!--Start  panel -->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingOne-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseOne-3" aria-expanded="true" aria-controls="collapseOne-3">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">08:00 – 09:00</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference Opening-3</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseOne-3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne-3">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 2-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingTwo-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseTwo-3" aria-expanded="true" aria-controls="collapseTwo-3">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme one-3</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseTwo-3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo-3">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingThree-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseThree-3" aria-expanded="true" aria-controls="collapseThree-3">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme two-3</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseThree-3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree-3">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingFour-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseFour-3" aria-expanded="true" aria-controls="collapseFour-3">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme three-3</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseFour-3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour-3">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingFive-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseFive-3" aria-expanded="true" aria-controls="collapseFive-3">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">16:40 – 17:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme four-3</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseFive-3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive-3">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 7-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingSix-4">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseSix-4" aria-expanded="true" aria-controls="collapseSix-4">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">18:20 – 19:10</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme five-3</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseSix-4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix-4">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingSeven-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-4" href="#collapseSeven-3" aria-expanded="true" aria-controls="collapseSeven-3">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">18:20 – 19:10</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme six-3</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseSeven-3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven-3">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end of #accordion -->
                </div>
                <div id="tab5">
                    <!------- start #accordion----------->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 p-0">
                                <div class="panel-group wrap" id="accordion-5" role="tablist" aria-multiselectable="true">
                                    <!--Start  panel -->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingOne-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseOne-4" aria-expanded="true" aria-controls="collapseOne-4">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">08:00 – 09:00</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference Opening-4</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseOne-4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne-3">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 2-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingTwo-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseTwo-4" aria-expanded="true" aria-controls="collapseTwo-4">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme one-4</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseTwo-4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo-3">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingThree-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseThree-4" aria-expanded="true" aria-controls="collapseThree-4">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme two-4</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseThree-4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree-3">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingFour-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseFour-4" aria-expanded="true" aria-controls="collapseFour-4">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">09:15 – 10:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme three-4</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseFour-4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour-3">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingFive-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseFive-4" aria-expanded="true" aria-controls="collapseFive-4">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">16:40 – 17:30</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme four-4</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseFive-4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive-3">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 7-->
                                    <div class="panel">
                                        <div class="panel-heading odd-color" role="tab" id="headingSix-4">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseSix-5" aria-expanded="true" aria-controls="collapseSix-5">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">18:20 – 19:10</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme five-4</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseSix-5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix-4">
                                            <div class="panel-body-1">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                    <!--Start  panel 3-->
                                    <div class="panel">
                                        <div class="panel-heading" role="tab" id="headingSeven-3">
                                            <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion-5" href="#collapseSeven-4" aria-expanded="true" aria-controls="collapseSeven-4">
     <div class="row">
     <div class="col-md-3 p-0 acc-date-sec"><ul><li class="acc-timing">18:20 – 19:10</li></ul></div>
     <div class="col-md-9 p-0 acc-date-sec-1"><p class="Acc-theam">Conference theme six-4</p></div>     
     </div>
    </a>
  </h4>
                                        </div>
                                        <div id="collapseSeven-4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven-3">
                                            <div class="panel-body">
                                                <div class="offset-lg-3 col-lg-9 offset-md-3 col-md-9 col-sm-9 p-0">
                                                    <div class="row conf-data">
                                                        <div class="col-md-12 p-0">
                                                            <p class="acc-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan pretium justo et rutrum. Pellentesque pretium commodo pharetra. Etiam suscipit maximus erat, quis accumsan mi bibendum ac. Maecenas nec ultrices est. Duis sagittis, felis vel dapibus congue, felis mauris consequat turpis, id ornare massa mauris aliquet sapien.</p>
                                                        </div>
                                                        <div class="col-md-12 image-sec p-0"> <span class="acc-img"><img class="img-responsive s-img"src="${assetsUrl}/templates/event/images/speaker-9.png"></span><span class="acc-txt">Leslie Witt<br><span class="acc-B">Small Business, Intuit</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of panel -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end of #accordion -->
                </div>
                <!-- end of tab -->
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-7----------------------------------->
    <!------------------------------------- Section-8----------------------------------->
    <section class="custom-sec9"> <span class="Slider-shape"><img class="img-responsive side-F" src="${assetsUrl}/templates/event/images/Frame%205.png"><img class="img-responsive side-F-sm"src="${assetsUrl}/templates/event/images/Subtract-b.png"></span> 
        <div class="container-inner-patners">
            <div class="row align-items-center custom-sec9-row1">
                <div class="col-md-12 col-lg-12 col-sm-12 sec8-col-center p-0">
                    <ul>
                        <li data-aos="flip-up" data-aos-duration="2000">
                            <a>
                                <img class="brand-img img-responsive" src="${assetsUrl}/templates/event/images/b-1.png" alt="brand">
                            </a>
                        </li>
                        <li data-aos="flip-up" data-aos-duration="2000">
                            <a>
                                <img class="brand-img img-responsive" src="${assetsUrl}/templates/event/images/b-2.png" alt="brand">
                            </a>
                        </li>
                        <li data-aos="flip-up" data-aos-duration="2000">
                            <a>
                                <img class="brand-img img-responsive" src="${assetsUrl}/templates/event/images/b-3.png" alt="brand">
                            </a>
                        </li>
                        <li data-aos="flip-up" data-aos-duration="2000">
                            <a>
                                <img class="brand-img img-responsive" src="${assetsUrl}/templates/event/images/b-4.png" alt="brand">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-12 col-lg-12 col-sm-12 sec8-col-center p-0">
                    <ul>
                        <li data-aos="flip-up" data-aos-duration="2000">
                            <a>
                                <img class="brand-img img-responsive" src="${assetsUrl}/templates/event/images/b-5.png" alt="brand">
                            </a>
                        </li>
                        <li data-aos="flip-up" data-aos-duration="2000">
                            <a>
                                <img class="brand-img img-responsive" src="${assetsUrl}/templates/event/images/b-6.png" alt="brand">
                            </a>
                        </li>
                        <li data-aos="flip-up" data-aos-duration="2000">
                            <a>
                                <img class="brand-img img-responsive" src="${assetsUrl}/templates/event/images/b-7.png" alt="brand">
                            </a>
                        </li>
                        <li data-aos="flip-up" data-aos-duration="2000">
                            <a>
                                <img class=" brand-img img-responsive" src="${assetsUrl}/templates/event/images/b-8.png" alt="brand">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-8----------------------------------->
    <!------------------------------------- Section-9----------------------------------->
    <section id="tech-companies" class="custom-sec10">
        <div class="container">
            <div class="row align-items-center custom-sec10-row1">
                <div class="col-lg-12 col-md-12 col-sm-12 p-0 card-container" data-aos="fade-down" data-aos-duration="2000">
                    <div class="slider-card">
                        <p class="card-subhead">#The leading startup event</p>
                        <p class="card-head">The New Era of Tech
                        <b>Companies</b>
                        </p>
                        <p class="card-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 p-0 card-container-1" data-aos="fade-down" data-aos-duration="2000">
                    <div class="slider-card-mobi">
                        <p class="card-subhead">#The leading startup event</p>
                        <p class="card-head">The New Era of 
                        <b style="color: #0b32ff;">Tech Companies</b>
                        </p>
                        <p class="card-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
                    </div>
                </div>
                <div id="slider-new" class="owl-carousel p-0">
                    <div class="item">
                        <a href="#">
                            <img src="${assetsUrl}/templates/event/images/slider-3.jfif" alt="" />
                        </a>
                    </div>
                    <div class="item black">
                        <a href="#">
                            <img src="${assetsUrl}/templates/event/images/slider-2.jfif" alt="" />
                        </a>
                    </div>
                    <div class="item">
                        <a href="#">
                            <img src="${assetsUrl}/templates/event/images/slider-1.jfif" alt="" />
                        </a>
                    </div>
                    <div class="item black">
                        <a href="#">
                            <img src="${assetsUrl}/templates/event/images/slider-3.jfif" alt="" />
                        </a>
                    </div>
                    <div class="item">
                        <a href="#">
                            <img src="${assetsUrl}/templates/event/images/slider-2.jfif" alt="" />
                        </a>
                    </div>
                    <div class="item black">
                        <a href="#">
                            <img src="${assetsUrl}/templates/event/images/slider-1.jfif" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-9----------------------------------->
    <!------------------------------------- Section-10----------------------------------->
    <section id="testimonial" class="custom-sec11">
        <div class="container">
            <div class="row align-items-center custom-sec11-row1">
                <div id="testimonials-section">
                    <div id="testimonial-new" class="owl-carousel owl-theme">
                        <div class="item row">
                            <div class="col-md-2 p-0" data-aos="zoom-in" data-aos-duration="2000"><span><img class="img-responsive T-one"src="${assetsUrl}/templates/event/images/Frame%2012.png"><img class="img-responsive T-two" src="${assetsUrl}/templates/event/images/testi-img-1.png" ></span>
                            </div>
                            <div class="col-md-10 Testimonaial-spc">
                                <p class="testimonial-para">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nisl ut leo tincidunt venenatis. Vivamus rhoncus dui ipsum. Sed dapibus id nunc id malesuada. Mauris sit amet ipsum condimentum, efficitur orci nec, hendrerit risus. Integer eget vehicula velit. Proin imperdiet interdum lacus non dignissim.”</p>
                                <div class="T-data" data-aos="fade-down" data-aos-duration="2000">
                                    <p class="client-name">James Woller<span class="client-prof">,Co-owner at JetPet</span>
                                    </p>
                                    <p>
                                        <img class="img-responsive brand-name" src="${assetsUrl}/templates/event/images/brand-3.png">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item row">
                            <div class="col-md-2 p-0" data-aos="zoom-in" data-aos-duration="2000"><span><img class="img-responsive T-one"src="${assetsUrl}/templates/event/images/Frame%2012.png"><img class="img-responsive T-two" src="${assetsUrl}/templates/event/images/testi-img-1.png" ></span>
                            </div>
                            <div class="col-md-10 Testimonaial-spc">
                                <p class="testimonial-para">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nisl ut leo tincidunt venenatis. Vivamus rhoncus dui ipsum. Sed dapibus id nunc id malesuada. Mauris sit amet ipsum condimentum, efficitur orci nec, hendrerit risus. Integer eget vehicula velit. Proin imperdiet interdum lacus non dignissim.”</p>
                                <div class="T-data" data-aos="fade-down" data-aos-duration="2000">
                                    <p class="client-name">James Woller<span class="client-prof">,Co-owner at JetPet</span>
                                    </p>
                                    <p>
                                        <img class="img-responsive brand-name" src="${assetsUrl}/templates/event/images/brand-3.png">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item row">
                            <div class="col-md-2 p-0" data-aos="zoom-in" data-aos-duration="2000"><span><img class="img-responsive T-one"src="${assetsUrl}/templates/event/images/Frame%2012.png"><img class="img-responsive T-two" src="${assetsUrl}/templates/event/images/testi-img-1.png" ></span>
                            </div>
                            <div class="col-md-10 Testimonaial-spc">
                                <p class="testimonial-para">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nisl ut leo tincidunt venenatis. Vivamus rhoncus dui ipsum. Sed dapibus id nunc id malesuada. Mauris sit amet ipsum condimentum, efficitur orci nec, hendrerit risus. Integer eget vehicula velit. Proin imperdiet interdum lacus non dignissim.”</p>
                                <div class="T-data" data-aos="fade-down" data-aos-duration="2000">
                                    <p class="client-name">James Woller<span class="client-prof">,Co-owner at JetPet</span>
                                    </p>
                                    <p>
                                        <img class="img-responsive brand-name" src="${assetsUrl}/templates/event/images/brand-3.png">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-10----------------------------------->
    <!-------------------------------------Section-11----------------------------------->
    <section id="newsletter" class="custom-sec12 newsletter-outer"> <span class="bottom-group-1">
            <img class="NW-img-1 img-responsive"src="${assetsUrl}/templates/event/images/bluse-sm.png">
            <img class="NW-img-2 img-responsive"src="${assetsUrl}/templates/event/images/Subtract.png">
            <img class="NW-img-3 img-responsive"src="${assetsUrl}/templates/event/images/Frame%2012.png">
            <img class="NW-img-4 img-responsive"src="${assetsUrl}/templates/event/images/Mask%20Group-3.jpg"></span>
        <span class="bottom-group-inner-mobi">
            <img class="IN-img-1 img-responsive"src="${assetsUrl}/templates/event/images/bluse-sm.png">     
            <img class="IN-img-2 img-responsive"src="${assetsUrl}/templates/event/images/Subtract.png">
            <img class="IN-img-3 img-responsive"src="${assetsUrl}/templates/event/images/Frame%2012.png">
            <img class="IN-img-4 img-responsive"src="${assetsUrl}/templates/event/images/Mask%20Group-3.jpg">
            </span>
        <div class="container-newsletter">
            <div class="row align-items-center custom-sec12-row1" data-aos="fade-down" data-aos-duration="2000">
                <div class="col-md-12 col-lg-12 col-sm-12 p-0 neswletter-section">
                    <p class="nws-head">Subscribe To Our <span class="nws-B">Newsletter</span>
                    </p>
                    <p class="nws-para">Subscribe to the free newsletter and recive notification of new products and promotions!</p>
                    <div class="search">
                        <input type="text" class="form-control-1 form-rounded" placeholder="Enter your email">
                        <button class="search-more-button-B text-center">Submit</button>
                    </div>
                </div>
            </div> <span class="bottom-group-inner-mobi"><img class="SB-img-1 img-responsive"src="${assetsUrl}/templates/event/images/blue-big.png">
            <img class="INN-img-1 img-responsive"src="${assetsUrl}/templates/event/images/Frame%2022.png">
            <img class="INN-img-2 img-responsive"src="${assetsUrl}/templates/event/images/Mask%20Group.jpg">
            <img class="INN-img-6 img-responsive"src="${assetsUrl}/templates/event/images/Frame%2012.png">       
            <img class="INN-img-3 img-responsive"src="${assetsUrl}/templates/event/images/Subtract-b.png">
            <img class="INN-img-4 img-responsive"src="${assetsUrl}/templates/event/images/Frame%2012.png">
            <img class="INN-img-5 img-responsive"src="${assetsUrl}/templates/event/images/blue-big.png">
            </span> 
        </div> <span class="bottom-group-2"><img class="SB-img-1 img-responsive"src="${assetsUrl}/templates/event/images/blue-big.png">
            <img class="SB-img-3 img-responsive"src="${assetsUrl}/templates/event/images/Frame%2022.png">
            <img class="SB-img-4 img-responsive"src="${assetsUrl}/templates/event/images/Mask%20Group.jpg">
            <img class="SB-img-5 img-responsive"src="${assetsUrl}/templates/event/images/Subtract-b.png">
            <img class="SB-img-6 img-responsive"src="${assetsUrl}/templates/event/images/Frame%2012.png">
            <img class="SB-img-7 img-responsive"src="${assetsUrl}/templates/event/images/Frame%2012.png">
            </span>
    </section>
    <!------------------------------------- /Section-11----------------------------------->
    <!-------------------------------------Section-12----------------------------------->
    <section id="downloadtheapp" class="custom-sec13 custom-footer">
        <div class="container">
            <div class="row align-items-center custom-sec13-row1" data-aos="zoom-in" data-aos-duration="2000">
                <div class="col-md-12 col-lg-12 col-sm-12 p-0 text-center custom-footer">
                    <img class="footer-logo" src="${assetsUrl}/templates/event/images/footer-logo.png">
                    <div class="ff">
                        <ul>
                            <li><a href="#" class="l-16">About </a>
                            </li>
                            <li><a href="#" class="l-16">Speakers</a>
                            </li>
                            <li><a href="#" class="l-16">Schedule</a>
                            </li>
                            <li><a href="#" class="l-16">Blog</a>
                            </li>
                            <li><a href="#" class="l-16">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-12 col-md-12 mb-12 p-0">	<span class="so-icons"><a class="s-color pointer" href="#"><i class="fa fa-facebook"></i></a></span>
                        <span class="so-icons"><a class="s-color pointer" href="#"><i class="fa fa-twitter"></i></a></span>  <span class="so-icons"><a class="s-color pointer" href="#"><i class="fa fa-instagram"></i></a></span>
                        <span><a class="s-color pointer" href="#"><i class="fa fa-youtube-play"></i></a></span> 
                    </div>
                    <p class="l-16 copyright">© 2020 SiteSeed. All rights reserved.</p>
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-12----------------------------------->
</div>
</div>
<!-------------------------------------Outer-Main-div's------------------------------------->
<!---------------MODAL---------->
<div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
        <div class=""> <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-xlarge w3-hover-black w3-display-topright" title="Close Modal">&times;</span>
            <h1 class="main-title-m ">Registration</h1>
            <p class="sub-title-m " style="width: 65%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor aliquet erat, vel laoreet est placerat at.</p>
        </div>
        <form class="container" action="/action_page.php">
            <div class="row custom-form-ele">
                <div class="col-md-12 col-lg-12 col-sm-12 p-0">
                    <ul>
                        <form>
                            <li>
                                <div class="">
                                    <p class="f-name">First Name<span style="color:#0B32FF;">*</span>
                                    </p>
                                    <input type="text" class="form-control">
                                </div>
                            </li>
                            <li>
                                <div class="">
                                    <p class="f-name">Last Name<span style="color:#0B32FF;">*</span>
                                    </p>
                                    <input type="text" class="form-control">
                                </div>
                            </li>
                            <li class="servicebody">
                                <div class="">
                                    <p class="f-name">Email<span style="color:#0B32FF;">*</span>
                                    </p>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                </div>
                            </li>
                            <li class="servicebody">
                                <div class="">
                                    <p class="f-name">Company</p>
                                    <input type="text" class="form-control">
                                </div>
                            </li>
                            <li class="servicebody">
                                <div class="">
                                    <p class="f-name">Job Title<span style="color:#0B32FF;">*</span>
                                    </p>
                                    <input type="text" class="form-control">
                                </div>
                            </li>
                            <li class="servicebody">
                                <div class="">
                                    <p class="f-name">Phone*</p>
                                    <input type="text" class="form-control">
                                </div>
                            </li>
                            <li class="servicebody">
                                <div class="">
                                    <p class="f-name">Address Line<span style="color:#0B32FF;">*</span>
                                    </p>
                                    <input type="text" class="form-control">
                                </div>
                            </li>
                            <li class="servicebody">
                                <div class="">
                                    <p class="f-name">Postel Code<span style="color:#0B32FF;">*</span>
                                    </p>
                                    <input type="text" class="form-control">
                                </div>
                            </li>
                            <li class="submitbutton">
                                <div class="col-md-4 offset-md-4 text-center p-0" style="width: 100%;">
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary">Submit</button>
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
<div id="id02" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-animate-zoom speaker" style="max-width:380px;">
        <div class=""> <span onclick="document.getElementById('id02').style.display='none'" class="w3-button w3-xlarge w3-hover-black w3-display-topright" title="Close Modal">&times;</span>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 p-0">
                <img class="img-responsive" src="${assetsUrl}/templates/event/images/speker-popup.png">
                <div class="user-data">
                    <p class="U-name">Leslie Witt</p>
                    <p class="U-proff">Small Business, Intuit</p>
                </div>
                <p class="main-para space-G">Lorem ipsum dolor sit amet, feugait adipisci nec an, an assum dicunt scaevola eam. Ut mel alii nonumy patrioque, mel te vidisse maiorum. Graecis mandamus ullamcorper pri ut, usu ludus facilisi ea. Tritani senserit forensibus sea et, et nam mentitum…</p>
            </div>
        </div>
        <div class="row social-space space-R">
            <div class="col-lg-5 col-md-5 col-sm-5 p-0 L-sect">
                <p class="social-txt">Social:</p>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-7 p-0 R-sect"> <span class="so-icons"><a class="s-color pointer" href="#"><i class="fa fa-facebook"></i></a></span>
                <span class="so-icons"><a class="s-color pointer" href="#"><i class="fa fa-twitter"></i></a></span>  <span class="so-icons"><a class="s-color pointer" href="#"><i class="fa fa-instagram"></i></a></span>
                <span><a class="s-color pointer" href="#"><i class="fa fa-youtube-play"></i></a></span>
            </div>
        </div>
    </div>
</div>
<!------------------END MODAL------------>


<!-- <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" type="text/javascript"></script>
<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/owl.carousel.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> -->
<script>
	AOS.init();
</script>
<script>
window.document.body.addEventListener('scroll', (e) => {
    let aos = document.querySelectorAll('[data-aos|=fade],[data-aos|=flip],[data-aos|=zoom]');
    aos.forEach((el)=>{
        var rect = el.getBoundingClientRect();
        var isVisible = (
            rect.top < e.target.clientHeight * 0.9     /*90% of client height*/
        )
        if (isVisible ) {
            $(el).addClass('aos-animate');
        } else {
            $(el).removeClass('aos-animate');
        }
    });
})
</script>
<script>
let toggler = document.querySelector('[data-target="#navbarNav"]')
toggler.onclick = (e) => {
    let navbar = document.querySelector('#navbarNav')
    navbar.classList.add('show')
}
let list = document.querySelectorAll('[data-toggle="collapse"][data-parent*="#accordion"]')
let parent = null
list.forEach(elem => {
    elem.onclick = (e) => {
        parent = document.querySelector(elem.getAttribute('data-parent'))
        console.log('sss.p clicked')
        let collapse = parent.querySelector(elem.getAttribute('href'))
        collapse.classList.toggle('show')
        elem.classList.toggle('collapsed')
        elem.setAttribute('aria-expanded', elem.getAttribute('aria-expanded') == 'true' ? 'false': 'true')
        elem.parentElement.parentElement.classList.toggle('active')
    }
})
</script>
<script>
	/* for tabs*/
	$(document).ready(function() {
			$('#material-tabs-1').each(function() {
	
					var $active, $content, $links = $(this).find('a');
	
					$active = $($links[0]);
					$active.addClass('active');
	
					$content = $($active[0].hash);
	
					$links.not($active).each(function() {
							$(this.hash).hide();
					});
	
					$(this).on('click', 'a', function(e) {
	
							$active.removeClass('active');
							$content.hide();
	
							$active = $(this);
							$content = $(this.hash);
	
							$active.addClass('active');
							$content.show();
	
							e.preventDefault();
					});
			});
	});
</script>
<script>
	/* for accordian*/    
	$(document).ready(function() {
	  $('.collapse.in').prev('.panel-heading').addClass('active');
	  $('#accordion, #bs-collapse')
	    .on('show.bs.collapse', function(a) {
	      $(a.target).prev('.panel-heading').addClass('active');
	    })
	    .on('hide.bs.collapse', function(a) {
	      $(a.target).prev('.panel-heading').removeClass('active');
	    });
	});
</script>
<script>
	/* for image slider */
		$('#slider-new.owl-carousel').owlCarousel({
		          autoplaySpeed: 1000,
		          autoplay: true,
		          stagePadding: 100,
		          loop:true,
		          margin:50,
	              dots:true,
		          nav:false,
		          items:1,
		          lazyLoad: true,
		          nav:false,
		          responsive:{
		              0:{
                           margin:10,
		                  items:1,
		                  stagePadding: 60
		              },
		              600:{
                           margin:10,
		                  items:1,
		                  stagePadding: 100
		              },
		              1000:{
		                  items:1,
		                  stagePadding: 200
		              },
		              1200:{
		                  items:1,
		                  stagePadding: 250
		              },
		              1400:{
		                  items:1,
		                  stagePadding: 300
		              },
		              1600:{
		                  items:1,
		                  stagePadding: 350
		              },
		              1800:{
		                  items:1,
		                  stagePadding: 400
		              }
		          }
		      })
</script>
<script>
	/* for testimonsil slider*/
	  	$(document).ready(function() {
	
	$('#testimonial-new.owl-carousel').owlCarousel({
	   autoplay:true,
	    loop:false,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
	
	  	});
</script>
<script>
	/* for mobile navbar */
		$(".align-togg").click(function(){
	  $("body").toggleClass("hidescrollbody");
	});
	    
	    function myFunction_1(x) {
	        x.classList.toggle("change");
	        } 
	
	        $(function () {
		  'use strict'
	
		$("[data-trigger]").on("click", function(){
	        var trigger_id =  $(this).attr('data-trigger');
	        $(trigger_id).toggleClass("show");
	        $('body').toggleClass("offcanvas-active");
	    });
	
	    // close if press ESC button 
	    $(document).on('keydown', function(event) {
	        if(event.keyCode === 27) {
	           $(".navbar-collapse").removeClass("show");
	           $("body").removeClass("overlay-active");
	        }
	    });
	    // close button 
	    $(".btn-close").click(function(e){
	        $(".navbar-collapse").removeClass("show");
	        $("body").removeClass("offcanvas-active");
	    }); 
	})
</script>
<script>
	/* for video player */
		$("#play-video").click(function() {
	    	$('.VideoHead-popup-video').addClass('show');
		});
		
		
		$("#close-video").click(function() {
			$('.VideoHead-popup-video').removeClass('show');
			var top_iframe = document.getElementById( 'top-head-player');
			top_iframe.src = top_iframe.src;
		});
	
		$(document).on("click", function(e) {
			if( $(e.target).hasClass('top-video-target') == false){
				$('.VideoHead-popup-video').removeClass('show');
				var top_iframe = document.getElementById( 'top-head-player');
				top_iframe.src = top_iframe.src;	
			}
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