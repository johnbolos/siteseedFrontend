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
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-30px);}
  60% {transform: translateY(-15px);}
}
/********************************* Media-queries*******************************/

@media (min-width: 1024px) and (max-width: 1151px), (min-width: 768px) and (max-width: 1023px), (min-width: 667px) and (max-width: 767px), (max-width: 666px) {
    .VideoHead-popup-video-container {width: calc(100% - 16px * 2);}
}
@media (max-width: 500px) and (min-width: 400px){
.sur-head {
    margin-left: 150px !important;
    background-size: contain;
}
    h1.slider-txt {
    top: 189px !important;
    right: 143px !important;
}
}

@media (max-width: 320px) and (min-width: 0px){
.sur-head {
    margin-left: 60px !important;
    background-size: contain;
}
    h1.slider-txt {
    top: 118px !important;
    right: 273px !important;
}
    img.img-responsive.Carey-star{
     top: 17.375vw !important;   
    }
    p.T-subhead {
    width: 70% !important;
    }
    img.img-responsivet.img-tm-1 {
    position: relative;
    width: 245px !important;
    }
    .owl-carousel .owl-item img {
    width: 100% !important;
}
}

@media (min-width:0px) and (max-width:767px){
   section.custom-sec11.hr-l6.Web-F {
    display: none;
}
.Outline-txt-W{
font-size: 13px;
 line-height: 15.6px;
}
    input::-webkit-input-placeholder {
margin-bottom: 20px;    
color: #1A1A1A;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height:19px;
}
    
 img.slider-img {
    width: 80% !important;
}
    
    .container-fluid.footer-container {
    padding-left: 5.8125vw;
    padding-right: 5.8125vw;
}
    .mobi-F{
        display: block !important;
    }
    .lines-anits{display: none;}
    .check-txt{
    font-size: 13px;
    line-height: 15.3px;
}
    .prod-slider-container{
        margin-top: 50px;
    }
    .footer {
    padding-left: 10px;
    padding-right: 10px;
}
    .mobile-cont{display: block;}
    .web-cont{display: none;}
    
  img.img-responsivet.img-tm-6 {
    left: 87px;
    width: 52px;
    position: absolute;
    top: 13px;
    }
    img.img-responsivet.img-tm-5 {
    position: absolute;
    width: 79px;
    top: -70px;
    left: 8px;
    }
  img.img-responsivet.img-tm-2 {
    position: absolute;
    width: 100px;
    top: 100px;
    left: 0px;
}
    p.Black-bg {
    margin-left: 0px;
    }
   
    .sur-head {
    margin-left: 100px;
    background-size: contain;
}
 img.img-responsivet.img-tm-1 {
    position: relative;
    width: 300px;
    top: 125px;
}  
    body .container {
    width: 100%;
    max-width: 100%;
    padding: 0;
    padding-left: 25px;
    padding-right: 25px;
}
    img.img-responsive.Carey-star {
    left: 59.552vw;
    width: 15.51vw;
    top: 15.375vw;
    position: absolute;
    z-index: -99;
}
    p.T-subhead {
    margin-left: 38.572vw;
    }
    .Outline-txt{font-size: 13px;}
    .custom-sec4 {
    padding: 100px 0px;
}
   p.T-subhead {
    font-size: 18px;
    line-height: 21px;
} 
   .top-navbar {
    margin-top: 31px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 0px;
}img.close-M {
    right: 37px;
    position: absolute;
    width: 30px;
    top: 44px;
}
    .logo-img {
    width: 184px;
}
    img.open-M {
    width: 50px;
}
    .custom-sec2 {
    position: relative;
    margin-top: 82px;
}
    span.Group-one {
    display: none;
    }
    p.site-text {
    text-align: left;
    }
    p.sub-head {
    margin-bottom: 10px;    
    font-size: 16px;
    line-height: 19px;
    }
    
    p.main-head {
    font-size: 22px;
    line-height: 26.4px;
}
    p.C-name{
     font-size: 22px;
    line-height: 26.4px;   
    }
    p.C-proff{
     font-size: 13px;
    line-height: 15.6px;   
    }
  section.custom-sec3 {
    padding-right: 25px;
    padding-left: 25px;
    margin-top: 200px;
}
.crad.taners.T-bottom {
    margin-top: 0px;
}
.Bio-spc{
 margin-bottom: 20px;
}
    span.M-text{
    margin-right: 15px;    
    font-size: 13px;
    line-height: 15.6px;  
    } 
    .Outline-txt-w{
    font-size: 13px;
    line-height: 15.6px;     
    }
    .Marq-star {
    margin-right: 10px;
    width: 13px;
}
    .custom-sec5 {
    padding: 50px 25px;
    position: relative;
}
  .owl-carousel .owl-item img {
    margin-right: 30px;
    width: 95%;
}
    .owl-theme .owl-nav {
    text-align: center;
    margin-top: 10px;
    margin-left: -60px;
}
  h1.slider-txt {
    font-size: 72px;
    line-height: 86.4px;
    transform: rotate(-90deg);
    top: 165px;
    right: 158px;
}
  .contant-sec {
    padding-left: 0px;
    padding-top: 50px;
    margin-top: 50px;
}
    .owl-carousel .owl-stage-outer{padding-bottom: 0px;}
    p.s-date {
    font-size: 16px;
    line-height: 19px;}
    .S-quote {
    font-family: 'synebold';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    margin-top: 6px;
}
    a.S-dwnld {
    margin-top: 30px;
    font-size: 16px;
    line-height: 19px;
    }
    .owl-theme .owl-dots{
    display: none;
    }
    .owl-carousel .owl-nav button.owl-next, .owl-carousel .owl-nav button.owl-prev {
    margin: 1px;    
    font-size: 16px;
    border-radius: 0px;
    background-color: #1A1A1A;
    height: 50px;
    width: 50px;
}
    .owl-nav *, ::after, ::before {
    font-size: 32px;
    }
   .owl-nav {
    left: -100px;
    top: 107%;
}
    section.custom-sec6 {
    margin-top: 100px;
}
    p.site-text{
        font-size: 11px;
        line-height: 13.3px;
    }
   .row.tour-data {
    padding-left: 0px;
    padding-right: 0px;
}
    p.T-date {
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 19px;
}
    p.T-name {
    font-size: 22px;
    line-height: 26.4px;
    margin-bottom: 10px;}
    
    p.T-desc {
    margin-bottom: 30px;    
    font-size: 16px;
    line-height: 19.2px;}
    
    a.A-ticket {
    font-size: 16px;
    line-height: 19.2px;
    text-decoration-line: underline;
}
    h1.T-heading {
    font-size: 58px;
    line-height: 69px;}
    
    img.img-responsive.Tour-star {
    left: 104px;
    top: -7px;
    width: 50px;
    position: absolute;
    z-index: -99;
}
  .T-box {
    margin-top: 50px;}
    
    a.V-txt {
    font-size: 18px;
    line-height: 21px;}
    
    .custom-sec7 {
    margin: 50px 0px;
    padding: 0;}
    
    span#hom img {
    width: 40px;}
    
    img.img-responsive.news-star {
    width: 50px;
    position: absolute;
    top: -8px;
    left: 171px;
    z-index: -99;
}
    .L-nws-section {
    margin-top: -20px;
    margin-left: 87px;
 }
    .Details-clients {
    margin-top: 20px;
}
    p.L-name {
    font-size: 16px;
    line-height: 19.2px;}
    
    p.L-sepf {
    font-size: 22px;
    line-height: 26.4px;
     margin-top: 6px;}
    
.LR-txt {
    margin-top: 20px;}
    
    a.Lern-text {
    font-size: 16px;
    line-height: 19.4px;
    }
    .custom-sec9 {
    margin: 50px 0px;    
    padding: 0;
}
    .custom-sec10 {
    padding: 50px 0px;
}
h1.F-heading {
    width: 80%;
    font-size: 32px;
    line-height: 38px;
}
p.F-para {
    width: 93%;
    margin-top: 6px;
    font-size: 13px;
    line-height: 19px;
}
    .form-group {
    margin-top: 20px;
    margin-bottom: 0px;
}
    input#emails,input#Contact_footer-email{padding-bottom: 12px;} 
    .email {
    padding-left: 0px;    
    margin-top: 50px;}
    
     p.F-privact {
    padding-left: 10px;
    line-height: 15.6px;
    font-size: 13px;}
    
    #check {
    height: 18px;
    width: 18px;
    }
    .btn {
    margin-top: 50px;
    padding: 14px 28px;
    font-size: 16px;
    }
    .chk-data {
    margin-top: 20px;
}
    .img-footer {
    margin-bottom: 50px;
    width: 150px;
}
    .social-mdia {
    margin-bottom: 50px;    
    margin-top: 100px;    
    text-align: left;
}

 .S-icon {
    padding-right: 20px;
}   
img.shows {
    width: 18px;
}    
    .Right-nav{display: none;} 
    
    .row.sidebar-section {
    padding-left: 30px;
    width: 100%;
    padding-top: 150px;
}
    a.menus {
    padding-left: 50px;
    margin-bottom: 70px;
    font-size: 32px;
    line-height: 38.4px;}
    
  .offcanvas-collapse.open {
    width: -webkit-fill-available;
}
  
}


/******************I-PAD -VIEW********************/

@media (max-width: 991px) and (min-width: 601px){
    .lines-anits{display: none;}
    .check-txt{
    font-size: 13px;
    line-height: 15.3px;
}
.social-mdia {
    margin-bottom: 50px;
    margin-top: 50px !important;
    text-align: right;
}
    .S-icon {
    padding-right: 15px !important;
}
    body .container {
    width: 100%;
    max-width: 100%;
    padding: 0;
    padding-left: 50px;
    padding-right: 50px;
}
    .row.tour-data {
    padding-left: 60px;
    padding-right: 60px;
}
   section.custom-sec3 {
    padding-right: 100px;
    padding-left: 100px;
    margin-top: 150px;
} 
    .custom-sec10 {
    padding: 50px 140px;
}
    p.site-text {
    text-align: center;
    font-size: 13px;
    line-height: 18px;
}
    p.F-privact {
    padding-left: 10px;
    line-height: 15.6px;
    font-size: 13px;
}
    h1.F-heading {
    font-size: 32px;
    line-height: 38px;
}
    p.F-para {
    margin-top: 6px;
    font-size: 16px;
    line-height: 19px;
}
    .btn {
    margin-top: 50px;
    padding: 10px 28px;
    font-size: 16px;
}
    #check {
    height: 18px;
    width: 18px;
}
    .Outline-txt-w {
    font-size: 13px;
    line-height: 15.6px;
}
    span.M-text {
    margin-right: 15px;
    font-size: 13px;
    line-height: 15.6px;
}
    .Details-clients {
    margin-top: 20px;
}
    p.L-name {
    font-size: 16px;
    line-height: 19.2px;
}
    p.L-sepf {
    font-size: 22px;
    line-height: 26.4px;
    margin-top: 6px;
}
    .LR-txt {
    margin-top: 20px;
}
    .top-navbar {
    margin-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 0px;
}
    .logo-img {
    width: 150px;
}
    img.open-M {
    width: 40px;
}
    img.shows {
    width: 15px;
}
    .custom-sec5 {
    padding: 100px 50px 100px 180px;
    position: relative;
}
    .contant-sec {
    padding-left: 30px;
    padding-top: 50px;
}
    .owl-nav {
    right: 10.3645vw;
    position: absolute;
    top: 72%;
}
    
    span#hom img {
    width: 40px;
}
    .T-box {
    margin-top: 50px;
}
    a.V-txt {
    font-size: 18px;
    line-height: 21px;
}
    a.A-ticket {
    font-size: 16px;
    line-height: 19.2px;
    text-decoration-line: underline;
}
    p.T-desc {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 19.2px;
}
    p.T-name {
    font-size: 22px;
    line-height: 26.4px;
    margin-bottom: 10px;
}
    p.T-date {
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 19px;
}
    .T-box {
    margin-top: 50px;
}
 
    p.s-date {
    font-size: 16px;
    line-height: 19px;
}
    .S-quote {
    font-family: 'synebold';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    margin-top: 6px;
}
    a.S-dwnld {
    margin-top: 30px;
    font-size: 14px;
    line-height: 19px;
}
    h1.slider-txt {
    font-size: 72px;
    line-height: 86.4px;
    transform: rotate(-90deg);
    top: 122px;
    right: 79px;
}
    p.C-proff {
    font-size: 13px;
    line-height: 15.6px;
}
    p.C-name {
    font-size: 22px;
    line-height: 26.4px;
}
    p.main-head {
    font-size: 22px;
    line-height: 26.4px;
}
    p.sub-head {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 19px;
}
 
}


@media (min-width:1900px) and (max-width:1950px){
img.img-responsive.news-star {
    left: 30.296875vw;
    }
}
/********************************* /Media-queries*******************************/

`

export const baseCss = `
/********************************* CSS********************************/

html{overflow-x: hidden;}
body{position: relative;}
body p h1 h1 h3 h4 h5 h6 span col a{font-family: 'Barlow', sans-serif;margin: 0px;}
body{font-family: 'Barlow', sans-serif;color: #1A1A1A;background-color: #F6F6F6;overflow-x: hidden;}
body .row {margin: 0;}
body .container {width:100%; max-width:100%; padding-left:  7.8125vw;padding-right:  7.8125vw;}
body .container-fluid{padding: 0px;}
.img-responsive{width: 100%;max-width: 100%;}
p {margin: 0px;}
a:hover {color: #0056b3;text-decoration: none;}
h1, h2, h3, h4, h5, h6{margin: 0px;}
b, strong {font-weight: 600;}

.error-404 {
	text-align: center;
	margin-top: 5em;
	font-family: 'synebold';
}

.error-404-text {
    font-size: 200px;
    font-weight: bold;
    color:#1A1A1A;
}  


label {
	display: block;
	color: #1A1A1A;
	font-family: 'synebold';
	font-size: 22px;
	font-style: normal;
	line-height: 24px;
	margin-bottom: 1.2em;
	text-transform:uppercase;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	clear: both;
	color: #1A1A1A;
	text-decoration: none;
	font-family: 'synebold';
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
	clear: both;
	color: #1A1A1A;
	text-decoration: none;
	font-family: 'synebold';
}

p {
	font-family: 'synebold';
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #1A1A1A;
}

input,
optgroup,
select,
textarea {
	color: #1A1A1A;
	font-family: 'synebold';
	font-size: 24px;
	font-style: normal;
	line-height: 28px;
}

pre {
	display: block;
	padding: 9.5px;
	margin: 0 0 10px;
	font-size: 13px;
	line-height: 1.42857143;
	word-break: break-all;
	word-wrap: break-word;
	color: #1A1A1A;
	background-color: #FFFFFF;
	border: 1px solid #FFFFFF;
	font-family: 'synebold';
}

.wp-block-media-text {
	font-size: 13px;
	line-height: 1.42857143;
	word-break: break-all;
	word-wrap: break-word;
	color: #1A1A1A;
	font-family: 'synebold';
}

figure.wp-block-pullquote {
	border-left: none;
	border-top: 4px solid;
	border-bottom: 4px solid;
	margin: 20px 0;
	padding: 3em 0;
	color: #1A1A1A;
}
.wp-block-pullquote {
	padding: 3em 0;
	margin-left: 0;
	margin-right: 0;
	text-align: center;
	font-family: 'synebold';
	color: #1A1A1A;
}
table,
.wp-block-table {
	width: 100%;
	min-width: 240px;
	border-collapse: collapse;
	color: #1A1A1A;
}

table thead,
table tfoot,
.wp-block-table thead,
.wp-block-table tfoot {
	text-align: center;
}

table th,
.wp-block-table th {
	font-family: 'synebold';
}

table td,
table th,
.wp-block-table td,
.wp-block-table th {
	padding: 1em;
	border: 1px solid;
}
img {
	height:auto;
}
ul {
	font-family: 'synebold';
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #1A1A1A;
}
ol {
	font-family: 'synebold';
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #1A1A1A;
}


.site .button, button:not(.search-more-button-B):not(.navbar-toggler):not(.Book-now-button), input[type=submit]:not(.search-more-button-B), input[type=reset], .wp-block-search .wp-block-search__button, .wp-block-button .wp-block-button__link, .wp-block-file a.wp-block-file__button 
{
	background-color: transparent;
	font-family: 'synebold';
	color: #1A1A1A;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	border: 1px solid #1A1A1A;
	box-sizing: border-box;
	border-radius: 5px;
	padding: 17px;
}

#add_to_cart_product:hover, #add_to_cart_product:hover>span, .product-form__cart-submit:hover>span,input[type="radio"]:checked + label:not(.color-view-product) ,.qtyminus:hover,.qtyplus:hover,.site .button:hover, button:not(.search-more-button-B):not(.navbar-toggler):not(.Book-now-button):hover, input[type=submit]:not(.search-more-button-B):hover, input[type=reset]:hover, .wp-block-search .wp-block-search__button:hover, .wp-block-button .wp-block-button__link:hover, .wp-block-file a.wp-block-file__button:hover{
	background-color: #1A1A1A;
	color: #ffffff !important;
}

.owl-nav *, ::after, ::before {
    font-size: 2.604vw;
    color: #fff;
    box-sizing: border-box;
    position: relative;
    top:  -0.716vw;
}
.owl-theme .owl-nav [class*=owl-]:hover {
    opacity: 1;
    background: #1A1A1A;
}
.owl-carousel .owl-stage-outer {
    padding-bottom: 115px;
}

a.pvt-link{color: #1a1a1a;text-decoration: underline;}
/********************************* CSS********************************/


/********************************* NAVBAR CSS********************************/
.logo-img{
    width: 9.765vw;
}
img.open-M {
    width: 3.255vw;
}
img.close-M{
 width: 3.255vw;   
}
img.close-M {
    right: 4vw;
    position: absolute;
    width: 2.302vw;
    top: 3.864vw;
}
.navbar-dark .navbar-toggler {
    color: rgb(255 255 255 / 0%);
    border-color: rgb(255 255 255 / 0%);
}
.navbar-collapse.offcanvas-collapse.open {
transform: translateX(0%);
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
}

.navbar-collapse.offcanvas-collapse {
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
transform: translateX(100%);
z-index: 9999;
}
.offcanvas-collapse {
	    position: fixed;
	    top: 0;
	    bottom: 0;
	    right: 0;
	    width: 70.247vw;
	    padding-right: 0px;
	    padding-left: 0px;
	    overflow-y: auto;
	    visibility: hidden;
	    background-color: #1A1A1A;
	    transition-timing-function: ease-in-out;
	    transition: 0.5s;
	    transition-property: left, visibility;
	}
	.navbar-toggler {
    padding: 0px;
    background-color: transparent;
    border: 1px solid transparent; 
    }
	.offcanvas-collapse {
	    align-items: start;
	    -moz-background-clip: padding;
	    -webkit-background-clip: padding;
	    background-clip: padding-box;
	    }
	
	.offcanvas-collapse.open {
        z-index: 999;
        top: 0;
	    visibility: visible;
	}
	
	.navbar-expand-lg .navbar-nav {
	    -ms-flex-direction: column;
	    flex-direction: column;
	}
.top-navbar {
    margin-top:  3.255vw;
    padding-left:  7.8125vw;
    padding-right:  4.557vw;
    padding-top: 0px;
}
.mr-auto, .mx-auto {
    padding: 0px;
    margin-right: auto!important;
}

a.menus {
padding-left: 4.557vw;    
margin-bottom: 3.255vw;    
color: #ffffff !important;    
font-family: 'synebold';
font-style: normal;
font-weight: bold;
font-size: 2.604vw;
line-height: 3.125vw;
display: block;
}
p.nav-hd{
margin-bottom: 3.255vw;     
color: #ffffff;    
font-family: 'synebold';
font-style: normal;
font-weight: bold;
font-size: 2.6041vw;
line-height: 3.125vw;
display: block;   
}
p.nav-sb-head{
margin-bottom: 0.390625vw;    
color: #ffffff;
font-style: normal;
font-weight: 400;
font-size: 1.302vw;
line-height: 1.5625vw;   
}

p.nav-hd-1{
margin-bottom: 0.78125vw;    
color: #ffffff;    
font-family: 'synebold';
font-weight: bold;
font-size: 1.953125vw;
line-height:  2.34375vw;    
}
p.nav-para{
    color: #ffffff;
    margin-bottom: 3.255vw;
    font-style: normal;
    font-weight: normal;
    font-size: 1.302vw;
    line-height: 1.953125vw;
}
p.nav-sb-head-t{
margin-bottom: 3.255vw;    
font-weight: 600;
font-size: 1.041vw;
line-height: 1.236vw;
text-decoration-line: underline;
color: #FFFFFF;

}
.row.sidebar-section {
    padding-left: 6.510vw;
    width: 85%;
    padding-top: 13.020vw;
}

img.img-responsive.nav-t-star {
    position: absolute;
    width:3.255vw;
    top: -0.911vw;
    left: 5.859375vw;
    z-index: -99;
}
a.menus:hover{
    background-size: 40px 40px;
    background-repeat: no-repeat;
    background-position: left top;
    background-image: url(${assetsUrl}/templates/musician/images/Star%201.png);
}
/********************************* END NAVBAR CSS********************************/

/********************************* SECTION-ONE********************************/
.custom-sec2{
    position: relative;
    margin-top: 8.398vw;
}
.img-t-1 {
    width:  26.041666666666668vw;
}
.img-t-2 {
    z-index: -1;
    left: 6.698vw;
    position: absolute;
    width: 7.8125vw;
    top: -2.083vw;
}
img.img-responsivet.img-t-4 {
    position: relative;
    width: 15.625vw;
    top: 3.7vw;
    right: -3.3vw;
}
img.img-responsivet.img-t-3 {
    position: absolute;
    width: 7.8125vw;
}
img.img-responsivet.img-t-5 {
    left: 2.6vw;
    position: absolute;
    width: 7.8125vw;
    top: -7vw;
}
img.img-responsivet.img-t-6 {
    position: absolute;
    width: 5.208vw;
    top: 1.2vw;
    left: 10.5vw;
}
span.Group-one {
    left: 4.5vw;
    position: absolute;
    top: 23vw;
}
span.Group-two {
    position: absolute;
    left: 13.020vw;
}
.sur-head {
    margin-left: 18.453vw;
    background-size: contain;
}
.L-nws-section {
    margin-top: -20px;
}
.about-sec-p{padding:  0.7vw;}
h1.T-heading {
    font-family: 'synebold';
    font-style: normal;
    font-weight: bold;
    font-size: 9.114vw;
    line-height: 10.9375vw;
    color: #1A1A1A;
}
p.T-subhead {
    margin-left: 24.572vw;
    font-family: 'Barlow', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8vw;
    line-height: 2.34375vw;
}
.L-cont-sec{
  margin-top: -13.020vw;
}
img.img-responsive.Carey-star {
    left: 35.552vw;
    width: 6.510vw;
    top: 11.375vw;
    position: absolute;
    z-index: -99;
}
img.img-responsive.scroll-image {
    position: absolute;
    width: 0.976vw;
    left: 0;
    bottom:  -3.450vw;
}

/********************************* END SECTION-ONE********************************/

/********************************* SECTION-TWO********************************/

section.custom-sec3 {
    padding-right: 14.4vw;
    padding-left: 23vw;
    margin-top: 18.359375vw;
}
p.sub-head{
margin-bottom: 0.390625vw;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 1.302vw;
line-height: 1.5625vw;   
}
p.main-head{
font-family: 'synebold';
font-style: normal;
font-weight: bold;
font-size: 2.604vw;
line-height: 3.125vw;   
}
p.C-name{
font-family: 'synebold';
font-style: normal;
font-weight: bold;
font-size: 1.953125vw;
line-height: 2.34375vw;   
}
p.C-proff{
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 1.302vw;
line-height:1.5625vw;   
}

.Detail-D{
    margin-top: 6.510vw;
}
/********************************* END SECTION-TWO********************************/


/********************************* SECTION-THREE********************************/
.custom-sec4{
padding: 9.765vw 0px;    
}
p.Black-bg {
    margin-left: -99px;
    color: #fff;
    background: #1A1A1A;
    transform: matrix(0.99, -0.13, 0.13, 0.99, 0, 0);
}

p.white-bg {
background: #FFFFFF;    
color: #1A1A1A;    
transform: matrix(0.99, 0.13, -0.13, 0.99, 0, 0);
}
.marq {padding-top:0.9765625vw; padding-bottom: 0.9765625vw;} 

span.M-text{
margin-right: 3.255vw;    
font-family: 'synebold';
font-style: normal;
font-weight: bold;
font-size: 1.302vw;
line-height: 1.5625vw;
}
.Marq-star {
    margin-right:  0.651vw;
    width: 1.953125vw;
}

.Outline-txt{
    font-weight: 700;
    font-family: 'synebold';
    font-size: 1.302vw;
    color: white;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffffff;
}
.Outline-txt-W{
    font-weight: 700;
    font-family: 'synebold';
    font-size: 1.3020833333333333vw;
    color: #1A1A1A;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #1A1A1A;
}
/********************************* END SECTION-THREE********************************/

/*********************************SECTION-FOUR********************************/
.custom-sec5{
padding: 9.7655vw 11.263vw 9.765vw 24.8046875vw;
position: relative;
}
.contant-sec{
    padding-left: 4.255vw;
    padding-top: 11.020833333333334vw;
}
.owl-theme .owl-nav {
    margin-right: 10px;
    margin-top: 0%;
}
h1.slider-txt {
    overflow: hidden;
    position: absolute;
    font-family: 'synebold';
    font-style: normal;
    font-weight: bold;
    font-size: 9.114vw;
    line-height: 10.9375vw;
    transform: rotate(-90deg);
    top: 18.057vw;
    right: 12.877vw;
}
p.s-date{
font-style: normal;
font-weight: normal;
font-size: 1.302vw;
line-height: 1.5625vw;   
}

.S-quote{
font-family: 'synebold';
font-style: normal;
font-weight: bold;
font-size: 2.604vw;
line-height: 3.125vw;  
}

a.S-dwnld{
margin-top: 1.953125vw;    
font-style: normal;
font-weight: normal;
font-size: 1.041vw;
line-height: 1.236vw;
text-decoration-line: underline;    
}

.owl-nav {
    right: 15vw;
    position: absolute;
    top: 62%;
}
.owl-carousel .owl-nav button.owl-next, .owl-carousel .owl-nav button.owl-prev{
    margin: 1px;
    font-size:1.953125vw;
    border-radius: 0px;
    background-color: #1A1A1A;
    height: 3.255vw;
    width: 3.255vw;
}
.owl-theme .owl-dots .owl-dot span {
    border: 1px solid #1a1a1a;
    background: #1a1a1a00;
    display: block;
    border-radius:1.953125vw;
}

.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span{background-color: #1A1A1A;}
button:focus {
    outline: 1px dotted;
    outline: 1px solid transparent;
}
.owl-dots {
    margin-top: -4vw;
}
.slider-img{
    width: 29.8828125vw;
}
.owl-carousel .owl-item img{
    width: 30.580729166666668vw; 
}
.S-right{text-align: -webkit-right;}
.owl-dots {
    margin-left: 17.708vw;
    text-align: left !important;
    margin-top: -4vw;
}

/********************************* END SECTION-FOUR****************************/


/*********************************SECTION-FIVE****************************/

p.T-date{
margin-bottom: 0.390625vw;    
font-style: normal;
font-weight: 400;
font-size: 1.302vw;
line-height: 1.5625vw;
}

p.T-name{
font-family: 'syneregular';
font-style: normal;
font-weight: bold;
font-size: 1.953125vw;
line-height:2.34375vw;
}

p.T-desc{
margin-top:  0.78125vw;    
font-style: normal;
font-weight: 400;
font-size: 1.302vw;
line-height: 1.953125vw;
}

p.TICKETS{
margin-top: 3.255vw;    
}
a.A-ticket{
cursor: pointer;    
font-style: normal;
font-weight: 600;
font-size: 1.041vw;
line-height: 1.236vw;
text-decoration-line: underline;   
}
.row.tour-data {
    padding-left: 15.8vw;
    padding-right: 7.8vw;
}
.T-box{
    margin-top: 6.510vw;
}
a.V-txt{
color: #1A1A1A;    
text-decoration: underline;
cursor: pointer;    
font-style: normal;
font-weight: 600;
font-size: 1.953125vw;
line-height: 2.34375vw;  
}
img.img-responsive.Tour-star {
    left: 16.276vw;
    top: -0.5859375vw;
    width: 6.510vw;
    position: absolute;
    z-index: -99;
}
 p.white-bg.bottom-w-bg {
    position: relative;
}
/****************************** END SECTION-FIVE****************************/

/*********************************SECTION-SIX****************************/

.custom-sec7{
    padding:  9.765625vw 0vw;
}
img.img-responsive.vedio-img {
    width: 100%;
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

  p.site-text {
    font-size: 0.7161458333333334vw;
    line-height: 0.8658854166666666vw;
}
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

/********************************* END SECTION-SIX****************************/  

/********************************* SEVEN-SECTION****************************/  

.prod-slider-container{
    margin-top: 5.208vw;
}

.crad.taners.T-bottom {
    margin-top: 7.8125vw;
}
.Details-clients {
    margin-top:1.302vw;
}
p.L-name{
font-style: normal;
font-weight: 400;
font-size: 1.302vw;
line-height: 1.5625vw;
}
p.L-sepf{
font-family: 'syneregular';
font-style: normal;
font-weight: bold;
font-size: 1.953125vw;
line-height: 2.34375vw;
}

a.Lern-text{
color: #1A1A1A;    
font-weight: 600;
font-size: 1.041vw;
line-height: 1.23vw;
text-decoration-line: underline;    
}
.LR-txt{
    margin-top: 3.255vw;
}
.L-nws-section{
    display: block;
    color: white;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #1A1A1A;
     margin-left: 7.291666666666667vw;
    margin-top:  -3.2552083333333335vw;
}

img.img-responsive.news-star {
    width: 6.510vw;
    position: absolute;
    top: 7.765625vw;
    left: 30.296875vw;
    z-index: -99;
}
/********************************* END SEVEN-SECTION****************************/

/*********************************EIGHT-SECTION****************************/

.custom-sec9{
    padding: 9.765625vw 0vw;
}

.custom-sec8{
    padding-left:7.3vw;
    padding-right: 7.8125vw;
}
.crad.taners {
    padding-left:  0.6276041666666667vw;
    padding-right:  1.6276041666666667vw;
}

/********************************* END EIGHT-SECTION****************************/

/*********************************NONE-SECTION****************************/
.custom-sec10{
    padding: 6.510vw  31.786458vw 9.765625vw 22.786458333333332vw;
}

.btn {
  margin-top: 3.255vw;    
  border-radius: 0px;    
  border: 1px solid #1A1A1A;
  color: #1A1A1A;
  padding: 0.846vw 1.822vw;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
 font-size: 1.041vw;    
 }
.success {
  border-color: #1A1A1A;
  color: #1A1A1A;
}

.success:hover{
  background-color: #1A1A1A;    
  border-color: #1A1A1A;
  color: #ffffff;
}
.email{
    padding-left: 7.8125vw;
    margin-top: 3.255vw;
}
h1.F-heading{
font-family: 'synebold';
font-style: normal;
font-weight: bold;
font-size: 2.604vw;
line-height: 3.125vw;    
}

p.F-para{
font-family: 'synebold';
margin-top: 1.302vw;    
font-style: normal;
font-weight: normal;
font-size: 1.3671875vw;
line-height: 2.34375vw;   
}

p.F-privact {
padding-left: 0.78125vw;    
font-style: normal;
font-weight: normal;
font-size: 0.846vw;
line-height:1.041vw;    
}
input#emails,input#Contact_footer-email {
    margin-bottom: 1.3020833333333333vw;
    width: 96%;
    border-bottom: 1px solid #1A1A1A !important;
    border: 0;
    background-color: transparent;
}
.form-group {
    margin-bottom: 0px;
}


.chk-data{
    margin-top: 1.302vw;
}

#check {
    display: none;
    height: 1.171875vw;
    position: absolute;
    width: 1.171875vw;
    border: 1px solid #1A1A1A;
    border-radius: 0;  
}
/*placeholder css*/
:-ms-input-placeholder {
color: #1A1A1A;    
font-family: 'Barlow', sans-serif;
}

/*placeholder*/
input::-webkit-input-placeholder {
margin-bottom: 20px;    
color: #1A1A1A;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 1.0416vw;
line-height:  1.236vw;
}

input:-moz-placeholder {
margin-bottom: 20px;     
color: #1A1A1A;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 1.0416vw;
line-height:  1.236vw;
}

:-ms-input-placeholder {
margin-bottom: 20px;     
color: #1A1A1A;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 1.0416vw;
line-height:  1.236vw;
}
:focus {
    outline: 1px solid transparent;
}
button:focus {
    outline: 1px solid transparent;
}

/*End placeholder css*/

/*********************************END NINE-SECTION****************************/

/*********************************TEN-SECTION****************************/
.custom-sec11{
    padding: 3.255vw 0vw;
}
.img-footer{width: 11.979vw;}

img.shows{
   width:1.171875vw
}
.S-icon{padding-left: 1.302vw;}
.social-mdia{text-align: end;}
.btn.focus, .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 0%);
}
.owl-theme .owl-dots .owl-dot span{
    margin: 0px 0.325vw ;
}

.owl-theme .owl-dots .owl-dot span{
    width:  0.651vw;
    height: 0.651vw;
}
.Bio-spc{margin-bottom: 1.953125vw;}

.mobile-cont{display: none;}
.web-cont{display: block;}

.container-fluid.footer-container {
    padding-left: 7.8125vw;
    padding-right: 7.8125vw;
}
/*********************************END TEN-SECTION****************************/

/*********************************text bounce****************************/
.animated {
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}

.bounce {
  animation-name: bounce;
}
/*********************************END text bounce****************************/

/*********************************CHKECBOX****************************/

.check-txt {
  position:relative;
  padding-left:30px;
  margin-bottom:20px;
  display: inline-block;
}

.check-txt:before,
.check-txt:after {
  content:'';
  position:absolute;
}

.check-txt:before {
  width:20px;
  height:20px;
  border:2px solid #1A1A1A;
  top:0;
  left:0;
  border-radius:0px;
}

.check-txt:after {
  width:0px;
  height:0px;
  transition:width 0.2s;
  top: 6px;
  left: 4px;
  transform:rotate(-45deg);
}

input:checked + .check-txt:after {
    border:1px solid #1A1A1A;
    border-width: 0 0 2px 2px;
    height:5px;
    width:12px
}
  p.site-text {
    text-align: center;
    font-size: 0.716vw;
    line-height: 0.865vw;
}
.check-txt{
    margin-bottom: 0vw;
    font-size: 0.846vw;
    line-height: 0.99609375vw;
}
/*********************************END CHKECBOX****************************/

/*********************************BACKGROUND-LINES****************************/

.vl-l1{
      opacity: .1;   
      position: absolute;
      z-index: -99;
      border-right: 1px solid #1A1A1A;    
      left: 7.9%;
      height: -webkit-fill-available;
      max-height: 100%;    
    }    
    
    .vl-l2{
      opacity: .1;     
      border-right: .1px solid #1A1A1A;
      position: absolute;
      z-index: -99;
      left: 23.6%;
       height: -webkit-fill-available;
      max-height: 100%;      
    }
    
    .vl-l3{
      opacity: .1;    
      border-right: 1px solid #1A1A1A;
      position: absolute;
      z-index: -99;
      left: 31.5%;
       height: -webkit-fill-available;
      max-height: 100%;    
    }
    .vl-l4{
      opacity: .1;     
      border-right: 1px solid #1A1A1A;
      position: absolute;
      z-index: -99;
      left: 66.1%;
       height: -webkit-fill-available;
      max-height: 100%;      
    }
    .vl-l5{
      opacity: .1;    
      border-right: 1px solid #1A1A1A;
      position: absolute;
      z-index: -99;
      left: 84%;
       height: -webkit-fill-available;
      max-height: 100%;      
    }
    .vl-l6{
      opacity: .1;     
      border-right: 1px solid #1A1A1A;
      position: absolute;
      z-index: -99;
      left: 92%;
      height: -webkit-fill-available;
      max-height: 100%;   
    }

    .hr-l6{
      border-top: 1px solid #1a1a1a1a;    
    }
.owl-theme .owl-nav .disabled {
    opacity: 1;
    cursor: default;
}

.web-F{
        display: block;
    }
    .mobi-F{
        display: none;
    }
/*********************************END BACKGROUND-LINES****************************/

`
export const style = `
  <style>
    ${`@media {background: red;}` + baseCss}
  </style>
  `

export const html = `
<span class="lines-anits"
  ><div class="vl-l1"></div>
  <div class="vl-l2"></div>
  <div class="vl-l3"></div>
  <div class="vl-l4"></div>
  <div class="vl-l5"></div>
  <div class="vl-l6"></div>
</span>

<!-------------------------------------Outer-Main-div's------------------------------------->
<div class="demo-main">
  <div class="demo-main-inner">
    <!-------------------------------------navbar-div------------------------------------->
    <!-- header-nav -->
    <nav
      class="navbar navbar-expand-lg navbar-dark navbar-offcanvas top-navbar"
    >
      <!-- web-header-logo -->
      <a class="navbar-brand mr-auto" href="#">
        <img class="logo-img" src="${assetsUrl}/templates/musician/images/Logo%20(1).png" />
      </a>
      <!-- End-web-header-logo -->
      <!-- Show Announcement -->
      <button class="navbar-toggler d-block" type="button" id="navToggle-1">
        <img class="open-M" src="${assetsUrl}/templates/musician/images/open-menu.png" />
      </button>

      <div class="navbar-collapse offcanvas-collapse">
        <img class="close-M" src="${assetsUrl}/templates/musician/images/close-menu.png" id="navToggle-2" />
        <div class="row sidebar-section">
          <div class="col-md-6 navbar-section ss-nav-ul">
            <!-- header-ul -->
            <a class="menus ss-nav-item" href="#home" onclick="closeNav()">Home</a>
            <a class="menus ss-nav-item" href="#aboutus" onclick="closeNav()">About Us</a>
            <a class="menus ss-nav-item" href="#Testimonail" onclick="closeNav()">Music</a>
            <a class="menus ss-nav-item" href="#tour" onclick="closeNav()">Tour</a>
            <a class="menus ss-nav-item" href="#news" onclick="closeNav()">News</a>
            <!-- End-header-ul -->
          </div>

          <div class="col-md-6 navbar-section Right-nav">
            <div class="nav-add">
              <p class="nav-hd">
                Tour<img
                  class="img-responsive nav-t-star"
                  src="${assetsUrl}/templates/musician/images/Star%201.png"
                  alt=""
                />
              </p>
            </div>

            <div class="nav-add">
              <p class="nav-sb-head">Jun, 2</p>
              <p class="nav-hd-1">San Diego, CA, USA</p>
              <p class="nav-para">
                Pechanga Arena, San Diego Rescheduled Date**
              </p>
            </div>

            <div class="nav-add"><p class="nav-sb-head-t">TICKETS</p></div>

            <div class="nav-add">
              <p class="nav-sb-head">Jun, 2</p>
              <p class="nav-hd-1">San Diego, CA, USA</p>
              <p class="nav-para">
                Pechanga Arena, San Diego Rescheduled Date**
              </p>
            </div>

            <div class="nav-add"><p class="nav-sb-head-t">TICKETS</p></div>
          </div>
        </div>
      </div>
    </nav>
    <!-- End-header-nav -->
    <!------------------------------------- /navbar-div------------------------------------->
    <!-------------------------------------Section-2------------------------------------->
    <section id="home" class="custom-sec2">
      <div class="container web-cont">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-7 col-sm-12 p-0 L-cont-sec">
            <h1
              class="T-heading top-section"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Mariah
              <span class="sur-head"
                ><img
                  class="img-responsive Carey-star"
                  src="${assetsUrl}/templates/musician/images/Star%201.png"
                  alt=""
                />Carey</span
              >
            </h1>
            <p
              class="T-subhead"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Pre-Order Mariah’s new album <br /><b>THE RARITIES</b> now!
            </p>

            <span class="Group-two">
              <img
                class="img-responsivet img-t-6"
                src="${assetsUrl}/templates/musician/images/shape-2.png"
                alt=""
              />
              <img
                class="img-responsivet img-t-5"
                src="${assetsUrl}/templates/musician/images/image-3.png"
                alt=""
              />
            </span>
          </div>
          <div class="col-lg-5 col-md-5 col-sm-12 text-right p-0">
            <span class="Group-three">
              <img
                class="img-responsivet img-t-2"
                src="${assetsUrl}/templates/musician/images/shape-1.png"
                alt=""
              />
              <img
                class="img-responsivet img-t-1"
                src="${assetsUrl}/templates/musician/images/top-image.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>

      <div class="container mobile-cont">
        <div class="row align-items-center">
          <div class="col-lg-12 col-md-12 col-sm-12 p-0 L-cont-sec">
            <h1 class="T-heading top-section">
              Mariah
              <span class="sur-head"
                ><img
                  class="img-responsive Carey-star"
                  src="${assetsUrl}/templates/musician/images/Star%201.png"
                  alt=""
                />Carey</span
              >
            </h1>
            <p class="T-subhead" style="width: 60%">
              Pre-Order Mariah’s new <br />album <b>THE RARITIES</b> now!
            </p>

            <span class="Group-two">
              <img
                class="img-responsivet img-tm-6"
                src="${assetsUrl}/templates/musician/images/shape-2.png"
                alt=""
              />
              <img
                class="img-responsivet img-tm-5"
                src="${assetsUrl}/templates/musician/images/image-3.png"
                alt=""
              />
            </span>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 text-right p-0">
            <span class="Group-three">
              <img
                class="img-responsivet img-tm-2"
                src="${assetsUrl}/templates/musician/images/shape-1.png"
                alt=""
              />
              <img
                class="img-responsivet img-tm-1"
                src="${assetsUrl}/templates/musician/images/top-image.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
      <span class="Group-one">
        <img
          class="img-responsivet img-t-3"
          src="${assetsUrl}/templates/musician/images/shape-1.png"
          alt=""
        />
        <img
          class="img-responsivet img-t-4"
          src="${assetsUrl}/templates/musician/images/image-2.png"
          alt=""
        />
        <img
          class="img-responsive scroll-image animated bounce"
          src="${assetsUrl}/templates/musician/images/scroll-txt.png"
          alt=""
        />
      </span>
    </section>
    <!------------------------------------- /Section-2----------------------------------->
    <!------------------------------------- Section-3----------------------------------->
    <section id="aboutus" class="custom-sec3">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-12 col-md-12 col-sm-12 about-sec-p">
            <p class="sub-head">Biography</p>
            <p
              class="main-head Bio-spc"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              A highly versatile artist, Rachel is an American singer who
              got her start her career in the 2000s.
            </p>

            <p
              class="main-head"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Born on April 22, 1986, in El Centro, California, Rachel rose
              to stardom as part of a singing act with brother Ban Calen in
              the 2000s, hitting No. 1 with the single «Make Me Happy».
              Rachel had established a solo career of her own as well,
              having chart-toppers like «Gypsies, Tramps and Thieves»,
            </p>

            <div
              class="Detail-D"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p class="C-name">Christian Caldwell</p>
              <p class="C-proff">Anne’s Producer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------- /Section-3----------------------------------->
    <!------------------------------------- Section-4----------------------------------->
    <section id="Albumb" class="custom-sec4">
      <div class="container-fluid">
        <div class="row align-items-center custom-sec4-row2">
          <div class="col-lg-12 col-md-12 col-sm-12 p-0">
            <p class="Black-bg">
              <marquee class="marq" scrollamount="10"
                ><span class="M-text"
                  ><img class="Marq-star" src="${assetsUrl}/templates/musician/images/Star%201.png" />Latest
                  <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt">Album</span></span
                >
              </marquee>
            </p>

            <p class="white-bg">
              <marquee class="marq" direction="right" scrollamount="10">
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                    alt=""
                  />Latest <span class="Outline-txt-w">Album</span></span
                >
              </marquee>
            </p>
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------- /Section-4----------------------------------->
    <!------------------------------------- Section-5----------------------------------->
    <section id="Testimonail" class="custom-sec5">
      <div class="container-fluid">
        <div id="testimonial-new" class="owl-carousel owl-theme">
          <div class="row item">
            <div
              class="col-md-7 p-0 S-right"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span><h1 class="slider-txt">Mariah</h1></span
              ><span
                ><img
                  class="slider-img"
                  src="${assetsUrl}/templates/musician/images/slider-image.png"
                  alt=""
              /></span>
            </div>
            <div class="col-md-5 contant-sec">
              <p class="s-date">May 8th 2020</p>
              <p class="S-quote">Stuck with U</p>
              <p style="margin-top: 30px">
                <a class="S-dwnld">STREAM / DOWNLOAD</a>
              </p>
            </div>
          </div>

          <div class="row item">
            <div
              class="col-md-7 p-0 S-right"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span><h1 class="slider-txt">Mariah</h1></span
              ><span
                ><img
                  class="slider-img"
                  src="${assetsUrl}/templates/musician/images/slider-image.png"
                  alt=""
              /></span>
            </div>
            <div class="col-md-5 contant-sec">
              <p class="s-date">May 8th 2020</p>
              <p class="S-quote">Stuck with U</p>
              <p style="margin-top: 30px">
                <a class="S-dwnld">STREAM / DOWNLOAD</a>
              </p>
            </div>
          </div>

          <div class="row item">
            <div
              class="col-md-7 p-0 S-right"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span><h1 class="slider-txt">Mariah</h1></span
              ><span
                ><img
                  class="slider-img"
                  src="${assetsUrl}/templates/musician/images/slider-image.png"
                  alt=""
              /></span>
            </div>
            <div class="col-md-5 contant-sec">
              <p class="s-date">May 8th 2020</p>
              <p class="S-quote">Stuck with U</p>
              <p style="margin-top: 30px">
                <a class="S-dwnld">STREAM / DOWNLOAD</a>
              </p>
            </div>
          </div>

          <div class="row item">
            <div
              class="col-md-7 p-0 S-right"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span><h1 class="slider-txt">Mariah</h1></span
              ><span
                ><img
                  class="slider-img"
                  src="${assetsUrl}/templates/musician/images/slider-image.png"
                  alt=""
              /></span>
            </div>
            <div class="col-md-5 contant-sec">
              <p class="s-date">May 8th 2020</p>
              <p class="S-quote">Stuck with U</p>
              <p style="margin-top: 30px">
                <a class="S-dwnld">STREAM / DOWNLOAD</a>
              </p>
            </div>
          </div>

          <div class="row item">
            <div
              class="col-md-7 p-0 S-right"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span><h1 class="slider-txt">Mariah</h1></span
              ><span
                ><img
                  class="slider-img"
                  src="${assetsUrl}/templates/musician/images/slider-image.png"
                  alt=""
              /></span>
            </div>
            <div class="col-md-5 contant-sec">
              <p class="s-date">May 8th 2020</p>
              <p class="S-quote">Stuck with U</p>
              <p style="margin-top: 30px">
                <a class="S-dwnld">STREAM / DOWNLOAD</a>
              </p>
            </div>
          </div>

          <div class="row item">
            <div
              class="col-md-7 p-0 S-right"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span><h1 class="slider-txt">Mariah</h1></span
              ><span
                ><img class="slider-img" src="${assetsUrl}/templates/musician/images/slider-image.png"
              /></span>
            </div>
            <div class="col-md-5 contant-sec">
              <p class="s-date">May 8th 2020</p>
              <p class="S-quote">Stuck with U</p>
              <p style="margin-top: 30px">
                <a class="S-dwnld">STREAM / DOWNLOAD</a>
              </p>
            </div>
          </div>

          <div class="row item">
            <div
              class="col-md-7 p-0 S-right"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span><h1 class="slider-txt">Mariah</h1></span
              ><span
                ><img
                  class="slider-img"
                  src="${assetsUrl}/templates/musician/images/slider-image.png"
                  alt=""
              /></span>
            </div>
            <div class="col-md-5 contant-sec">
              <p class="s-date">May 8th 2020</p>
              <p class="S-quote">Stuck with U</p>
              <p style="margin-top: 30px">
                <a class="S-dwnld">STREAM / DOWNLOAD</a>
              </p>
            </div>
          </div>

          <div class="row item">
            <div
              class="col-md-7 p-0 S-right"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span><h1 class="slider-txt">Mariah</h1></span
              ><span
                ><img class="slider-img" src="${assetsUrl}/templates/musician/images/slider-image.png"
              /></span>
            </div>
            <div class="col-md-5 contant-sec">
              <p class="s-date">May 8th 2020</p>
              <p class="S-quote">Stuck with U</p>
              <p style="margin-top: 30px">
                <a class="S-dwnld">STREAM / DOWNLOAD</a>
              </p>
            </div>
          </div>

          <div class="row item">
            <div
              class="col-md-7 p-0 S-right"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span><h1 class="slider-txt">Mariah</h1></span
              ><span
                ><img class="slider-img" src="${assetsUrl}/templates/musician/images/slider-image.png"
              /></span>
            </div>
            <div class="col-md-5 contant-sec">
              <p class="s-date">May 8th 2020</p>
              <p class="S-quote">Stuck with U</p>
              <p style="margin-top: 30px">
                <a class="S-dwnld">STREAM / DOWNLOAD</a>
              </p>
            </div>
          </div>

          <div class="row item">
            <div
              class="col-md-7 p-0 S-right"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span><h1 class="slider-txt">Mariah</h1></span
              ><span
                ><img class="slider-img" src="${assetsUrl}/templates/musician/images/slider-image.png"
              /></span>
            </div>
            <div class="col-md-5 contant-sec">
              <p class="s-date">May 8th 2020</p>
              <p class="S-quote">Stuck with U</p>
              <p style="margin-top: 30px">
                <a class="S-dwnld">STREAM / DOWNLOAD</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!------------------------------------- /Section-5----------------------------------->

    <!------------------------------------- Section-6----------------------------------->
    <section id="tour" class="custom-sec6">
      <div class="container">
        <div class="row align-items-center custom-sec6-row1">
          <div class="col-lg-12 col-md-12 col-sm-12 p-0">
            <h1
              class="T-heading top-section"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              Tour<img
                class="img-responsive Tour-star"
                src="${assetsUrl}/templates/musician/images/Star%201.png"
              />
            </h1>
          </div>
          <div class="row tour-data">
            <div
              class="col-lg-6 col-md-6 col-sm-12 p-0 T-box"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p class="T-date">Jun, 2</p>
              <p class="T-name">San Diego, CA, USA</p>
              <p class="T-desc">
                Pechanga Arena, San Diego <br />Rescheduled Date**
              </p>
              <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
            </div>

            <div
              class="col-lg-6 col-md-6 col-sm-12 p-0 T-box"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <p class="T-date">Jun, 2</p>
              <p class="T-name">San Diego, CA, USA</p>
              <p class="T-desc">
                Pechanga Arena, San Diego <br />Rescheduled Date**
              </p>
              <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
            </div>

            <div
              class="col-lg-6 col-md-6 col-sm-12 p-0 T-box"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p class="T-date">Jun, 2</p>
              <p class="T-name">San Diego, CA, USA</p>
              <p class="T-desc">
                Pechanga Arena, San Diego <br />Rescheduled Date**
              </p>
              <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
            </div>

            <div
              class="col-lg-6 col-md-6 col-sm-12 p-0 T-box"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <p class="T-date">Jun, 2</p>
              <p class="T-name">San Diego, CA, USA</p>
              <p class="T-desc">
                Pechanga Arena, San Diego <br />Rescheduled Date**
              </p>
              <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
            </div>

            <div
              class="col-lg-6 col-md-6 col-sm-12 p-0 T-box"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p class="T-date">Jun, 2</p>
              <p class="T-name">San Diego, CA, USA</p>
              <p class="T-desc">
                Pechanga Arena, San Diego <br />Rescheduled Date**
              </p>
              <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
            </div>

            <div
              class="col-lg-6 col-md-6 col-sm-12 p-0 T-box"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <p class="T-date">Jun, 2</p>
              <p class="T-name">San Diego, CA, USA</p>
              <p class="T-desc">
                Pechanga Arena, San Diego <br />Rescheduled Date**
              </p>
              <p class="TICKETS"><a class="A-ticket">TICKETS</a></p>
            </div>

            <div
              class="col-lg-6 col-md-6 col-sm-12 p-0 T-box"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <p><a class="V-txt" href="#">View all</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------- /Section-6----------------------------------->
    <!------------------------------------- Section-7----------------------------------->
    <section id="vedio-section" class="custom-sec7">
      <div class="container">
        <div class="row align-items-center custom-sec7-row1">
          <div class="col-lg-12 col-md-12 col-sm-12 p-0">
            <img
              class="img-responsive vedio-img"
              src="${assetsUrl}/templates/musician/images/vedio-image.png"
              alt=""
            />
            <a id="play-video" class="play top-video-target">
              <div class="overlay">
                <span id="hom"
                  ><img
                    class="popup image_on top-video-target"
                    src="${assetsUrl}/templates/musician/images/vedio-icon.png"
                /></span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="video-head" class="VideoHead-popup-video">
        <div id="close-video" class="VideoHead-popup-video-exit">
          <div class="VideoHead-popup-video-exit-line-1"></div>
          <div class="VideoHead-popup-video-exit-line-2"></div>
        </div>
        <div class="VideoHead-popup-video-container">
          <div
            class="VideoHead-popup-video-placeholder"
            style="width: 100%; height: 100%"
          >
            <iframe
              class="top-video-target"
              id="top-head-player"
              frameborder="0"
              allowfullscreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video player"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/Rwk5PdpTxSU?autoplay=0&amp;controls=1&amp;autohide=1&amp;wmode=opaque&amp;origin=https%3A%2F%2Fclay.global&amp;enablejsapi=1&amp;widgetid=1"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------- /Section-7----------------------------------->
    <!------------------------------------- Section-8----------------------------------->
    <section id="news" class="custom-sec8">
      <div class="container-fluid">
        <div class="row align-items-center custom-sec8-row1">
          <div class="col-lg-12 col-md-12 col-sm-12 p-0">
            <h1
              class="T-heading top-section"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              Latest<span class="L-nws-section"
                >News<img
                  class="img-responsive news-star"
                  src="${assetsUrl}/templates/musician/images/Star%201.png"
              /></span>
            </h1>

            <div class="prod-slider-container">
              <div id="slider-new" class="owl-carousel">
                <div class="item">
                  <div class="crad taners t-top">
                    <img
                      class="img-fluid inner-T"
                      src="${assetsUrl}/templates/musician/images/slider-1.png"
                      alt=""
                    />
                    <div
                      class="Details-clients"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <p class="L-name">Aug, 28</p>
                      <p class="L-sepf">San Diego, CA, USA</p>
                      <p class="LR-txt">
                        <a href="#" class="Lern-text">LEARN MORE</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="crad taners T-bottom">
                    <img
                      class="img-fluid inner-T"
                      src="${assetsUrl}/templates/musician/images/slider-2.png"
                      alt=""
                    />
                    <div
                      class="Details-clients"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <p class="L-name">Aug, 28</p>
                      <p class="L-sepf">San Diego, CA, USA</p>
                      <p class="LR-txt">
                        <a href="#" class="Lern-text">LEARN MORE</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="crad taners T-top">
                    <img
                      class="img-fluid inner-T"
                      src="${assetsUrl}/templates/musician/images/slider-3.png"
                      alt=""
                    />
                    <div
                      class="Details-clients"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <p class="L-name">Aug, 28</p>
                      <p class="L-sepf">San Diego, CA, USA</p>
                      <p class="LR-txt">
                        <a href="#" class="Lern-text">LEARN MORE</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="crad taners T-bottom">
                    <img
                      class="img-fluid inner-T"
                      src="${assetsUrl}/templates/musician/images/slider-1.png"
                      alt=""
                    />
                    <div
                      class="Details-clients"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <p class="L-name">Aug, 28</p>
                      <p class="L-sepf">San Diego, CA, USA</p>
                      <p class="LR-txt">
                        <a href="#" class="Lern-text">LEARN MORE</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="crad taners T-top">
                    <img
                      class="img-fluid inner-T"
                      src="${assetsUrl}/templates/musician/images/slider-2.png"
                      alt=""
                    />
                    <div
                      class="Details-clients"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <p class="L-name">Aug, 28</p>
                      <p class="L-sepf">San Diego, CA, USA</p>
                      <p class="LR-txt">
                        <a href="#" class="Lern-text">LEARN MORE</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="crad taners T-bottom">
                    <img
                      class="img-fluid inner-T"
                      src="${assetsUrl}/templates/musician/images/slider-1.png"
                      alt=""
                    />
                    <div
                      class="Details-clients"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <p class="L-name">Aug, 28</p>
                      <p class="L-sepf">San Diego, CA, USA</p>
                      <p class="LR-txt">
                        <a href="#" class="Lern-text">LEARN MORE</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="crad taners T-top">
                    <img
                      class="img-fluid inner-T"
                      src="${assetsUrl}/templates/musician/images/slider-2.png"
                    />
                    <div
                      class="Details-clients"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <p class="L-name">Aug, 28</p>
                      <p class="L-sepf">San Diego, CA, USA</p>
                      <p class="LR-txt">
                        <a href="#" class="Lern-text">LEARN MORE</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--.owl-carousel-->

            <!--.prod-slider-container-->
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------- /Section-8----------------------------------->
    <!--Footer Section-->
    <section id="pricing" class="custom-sec9">
      <div class="container-fluid">
        <div class="row align-items-center custom-sec9-row1">
        <!-- Newsletter Section -->
          <div class="col-lg-12 col-md-12 col-sm-12 p-0">
            <p class="white-bg bottom-w-bg">
              <marquee class="marq" direction="right" scrollamount="10">
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                ><span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt-W">letter</span></span
                >
              </marquee>
            </p>
            <p class="Black-bg">
              <marquee class="marq" scrollamount="10">
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
                <span class="M-text"
                  ><img
                    class="Marq-star"
                    src="${assetsUrl}/templates/musician/images/Star%201.png"
                  /><span>News</span><span class="Outline-txt">letter</span></span
                >
              </marquee>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="faq" class="custom-sec10">
      <div class="footer">
        <div class="row align-items-center custom-sec10-row1">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h1
              class="F-heading"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Want the latest news?
            </h1>
            <p class="F-para" data-aos="fade-down" data-aos-duration="2000">
              Follow and Subscribe to be one of the first to know the latest
              news on Ed!
            </p>

            <div class="email">
            <!-- Newsletter Input Section -->
              <input
                placeholder="Email Address"
                type="email"
                id="emails"
                name="emails"
                multiple
              />
              <div class="form-group">
                <input type="checkbox" id="check" />
                <label class="check-txt" for="check"
                  >By submitting this form, You agree to The Universal Music
                  Group.<br /><a class="pvt-link" href="#"
                    >Privacy Policy </a
                  >and
                  <a class="pvt-link" href="#"
                    >Terms & Conditions.</a
                  ></label
                >
              </div>
              <button class="btn success">Submit</button>
              <!-- End Newsletter Input Section -->
            </div>
          </div>
          <!-- End Newsletter Section -->
        </div>
      </div>
    </section>
    <section id="faq" class="custom-sec11 hr-l6 Web-F">
      <div class="container-fluid footer-container">
        <div class="row align-items-center custom-sec10-row1">
          <div class="col-lg-4 col-md-4 col-sm-12 p-0">
            <img
              class="img-footer img-responsive"
              src="${assetsUrl}/templates/musician/images/Logo%20(1).png"
              alt=""
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 p-0">
            <p class="site-text">© 2020 SITESEED. ALL RIGHTS RESERVED.</p>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 p-0 social-mdia ss-social-ul">
          <!-- social-ul -->
            <span class="S-icon ss-social-li">
              <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]' class="ss-social-item">
                <img
                  class="shows"
                  src="${assetsUrl}/templates/musician/images/facebook%20(9)%201.png"
                  alt="" />
              </a>
            </span>
            <span class="S-icon ss-social-li">
              <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]' class="ss-social-item">
                <img
                  class="shows"
                  src="${assetsUrl}/templates/musician/images/instagram%20(4)%201.png"
                  alt="" />
              </a>
            </span>
            <span class="S-icon ss-social-li">
              <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]' class="ss-social-item">
                <img class="shows" src="${assetsUrl}/templates/musician/images/twitter%20(4)%201.png" alt=""/>
              </a>
            </span>
            <span class="S-icon ss-social-li">
              <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]' class="ss-social-item">
                <img
                  class="shows"
                  src="${assetsUrl}/templates/musician/images/spotify%201.png"
                  alt="" />
              </a>
            </span>
            <span class="S-icon ss-social-li">
              <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]' class="ss-social-item">
                <img
                  class="shows"
                  src="${assetsUrl}/templates/musician/images/company%20(1)%201.png"
                  alt="" />
              </a>
            </span>
            <span class="S-icon ss-social-li">
              <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]' class="ss-social-item">
                <img
                  class="shows"
                  src="${assetsUrl}/templates/musician/images/youtube%20(3)%201.png"
                  alt="" />
              </a>
            </span>
            <!-- End-social-ul -->
          </div>
        </div>
      </div>
    </section>
    <section id="faq" class="custom-sec12 mobi-F">
      <div class="container-fluid footer-container">
        <div class="row align-items-center custom-sec10-row1">
          <div class="col-lg-4 col-md-4 col-sm-12 p-0">
            <img
              class="img-footer img-responsive social-mdia"
              src="${assetsUrl}/templates/musician/images/Logo%20(1).png"
              alt=""
            />
          </div>

          <div
            class="col-lg-4 col-md-4 col-sm-12 p-0"
            style="margin-bottom: 50px"
          >
          <!-- mob-social-ul -->
          <span class="S-icon">
          <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
            <img
              class="shows"
              src="${assetsUrl}/templates/musician/images/facebook%20(9)%201.png"
              alt="" />
          </a>
        </span>
        <span class="S-icon">
          <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
            <img
              class="shows"
              src="${assetsUrl}/templates/musician/images/instagram%20(4)%201.png"
              alt="" />
          </a>
        </span>
        <span class="S-icon">
          <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
            <img class="shows" src="${assetsUrl}/templates/musician/images/twitter%20(4)%201.png" alt=""/>
          </a>
        </span>
        <span class="S-icon">
          <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
            <img
              class="shows"
              src="${assetsUrl}/templates/musician/images/spotify%201.png"
              alt="" />
          </a>
        </span>
        <span class="S-icon">
          <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
            <img
              class="shows"
              src="${assetsUrl}/templates/musician/images/company%20(1)%201.png"
              alt="" />
          </a>
        </span>
        <span class="S-icon">
          <a href="#" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
            <img
              class="shows"
              src="${assetsUrl}/templates/musician/images/youtube%20(3)%201.png"
              alt="" />
          </a>
        </span>
        <!-- End-mob-social-ul -->
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 p-0 hr-l6">
            <p class="site-text" style="padding: 45px 0px">
              © 2020 SITESEED. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--End Footer section-->
  </div>
</div>
<!-------------------------------------Outer-Main-div's------------------------------------->
<!-- Bootstrap core JavaScript -->
<script
src="https://code.jquery.com/jquery-2.2.4.min.js"
integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
crossorigin="anonymous"
></script>
<script
src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
type="text/javascript"
></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>
<!-----------Sidebar------------------>

<script>
$(document).ready(function () {
  console.log("document is ready");
  $('[data-toggle="offcanvas"], #navToggle-1, #navToggle-2').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });
});
window.onload = function () {
  console.log("window is loaded");
};
</script>

<!-----------carousal------------------>
<script>
$(document).ready(function () {
  $("#testimonial-new.owl-carousel").owlCarousel({
    dot: true,
    autoplay: true,
    loop: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 0.5,
      },
      1000: {
        items: 1,
      },
    },
  });
});
</script>

<script>
/* for video player */
$("#play-video").click(function () {
  $(".VideoHead-popup-video").addClass("show");
});

$("#close-video").click(function () {
  $(".VideoHead-popup-video").removeClass("show");
  var top_iframe = document.getElementById("top-head-player");
  top_iframe.src = top_iframe.src;
});

$(document).on("click", function (e) {
  if ($(e.target).hasClass("top-video-target") == false) {
    $(".VideoHead-popup-video").removeClass("show");
    var top_iframe = document.getElementById("top-head-player");
    top_iframe.src = top_iframe.src;
  }
});
</script>

<!-----------multiimages carousal------------------>

<script>
$(document).ready(function () {
  $("#slider-new.owl-carousel").owlCarousel({
    dot: true,
    autoPlay: 1000,
    autoplay: true,
    loop: false,
    nav: false,
    responsive: {
      0: {
        items: 1.1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
</script>

`
//   ===================================================

export const pageData = [
  {
      components: html,
      style: baseCss,
      customCss: customCss,
      name: "Home",
      homePage: true,
      styleFontStr: null,
      hidden: false,
      desp: null,
      favicon: null,
      seo: {
          name: null,
          desp: null
      }
  },
]
/*
  Steps
  1. extract basic and @media/@-webkit-keyframes/@keyframes styles from style.css of template
  2. put basic styles in template1StyleCss variable
  3. put later styles in template1StyleMedia variable
  4. put html>body content in template1Html also append scripts tags in the end of this variable
  5. Remove all inline styles and add them in css with proper ids
  6. If you want to drag and move components which has scripts. The script tags should be in the immediate parent of that component.
  */


export default {
  html,
  baseCss,
  customCss,
  style,
  pageData,
}