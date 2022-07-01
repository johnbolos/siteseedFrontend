import { assetsUrl } from "../../../settings";

export const customCss = `
::-webkit-scrollbar {
    display: none;
}
/*ALL MEDIA QUERIES*/

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidebar {padding-top: 15px;}
    
}

@media only screen and (max-width: 1024px) and (min-width: 1020px){
    .agency-head-text-top {
    padding-top: 100px;
    font-style: normal;
    font-size: 45px !important;
    }
.btn-lg {
    margin-top: 100px !important;
}
}

/*For mobile view*/
@media only screen and (max-width: 767px) and (min-width: 0px) {
    span.num-gap {
    padding-right: 10px;
}
    
    .agency-numbring{font-size: 32px;}
    
    a.inner-text{font-size: 18px;}
    .embed-responsive
{border-radius: 10px;
height: 196px;    

}
    .right_c1 p {
    font-size: 20px;
    text-align: left;
}
    .agency-para-text{padding-top: 10px;}
    
    .ngape{margin-top: 0px !important;
        margin-bottom: 0px !important;
    }
    .no-space-butn{margin-top: 0px;}
    .carousel-caption{left: 30px !important;right: 30px !important;}
    .mobile-space{margin-bottom: 50px;}
    .nav-class {
    padding-bottom: 20px;
}
    .btn-lg{border-radius: 10px;}
    .btn-lg-vedio{height: 50px ;width: 50px;}
    .d-block {height: 25em;}
    .btn-lg-head{border-radius: 10px;}
    .Hide-mobi-view{display: none;}
    img.menu-image.shows {
    height: 50px;
    width: 50px;
}
    img.l-img {
    max-width: 65%;}
    
    .no-border {
        border-right: 1px solid transparent !important;}
    
   
   .footer-bottom {
    padding: 0px 15px;
    margin-bottom: 50px;
}
    
    .mobi-space-V{padding: 0px;}
    .agency-partner-sec{padding: 35px;}
    
    .vedio-image {
    border-radius: 10px;    
    height: 212px;
    padding: 8px;}
    
    img.l-1 {
    max-width: 80%;
}

    .right_c1 {
    padding: 20px;}
    
    .product-left-space{
        padding-left: 15px;
    }
    .btn-over-testimonial {
       margin-right: 30px;
        margin-top: 100px;}
    
    button.btn.btn-lg {
    margin-top: 50px;    
    margin-bottom: 50px;
}
    
  .agency-head-text-top {
    font-style: normal;
    font-size: 32px;
    line-height: 36px;
  }
    
     .agency-para-text {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    color: #31456A;
    opacity: 0.6;
}
    
.agency-head-text {
    padding-bottom: 20px;
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 30px;
    line-height: 36px;
    background: linear-gradient(to right, #202f45, 
 #6e7c8f);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
    .unselect-box {
    margin-top: 30px;}
    
    .col-md-3.b-w{
        width: 50%;
        border-bottom: 1px solid #d8d8d8;
    }

    .col-md-3.b-w-1 {
    width: 50%;    
     border-bottom: 1px solid #d8d8d8;}
    
    .agency-partner-sec{padding: 35;width: 50%;}
    
    .product-text-section {
    padding-top: 0px;
}
    p.agency-casestudy-para {
    width: 100%;}
     
    p.case-text-bottom {
    position: relative;    
    margin-top: 0px;
    bottom: 0px;}
    
    .agency-blog-para {
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 100%;
    color: #31456A;
}
    .agency-blog-date {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: rgba(49, 69, 106, 0.6);
    opacity: 0.7;
}
    p.agency-contact-para-top {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 100%;
    color: #31456A;
}
    .agency-contact-heading {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 58px;
}
    p.agency-contact-para {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    color: rgba(49, 69, 106, 0.6);
}
    .left-col-1 {
    padding-left: 0px;    
    margin-bottom: 30px;    
    width: 100%;
}
.right-col-1 {
    float: none;
    width: 100%;
    text-align: justify;
}
    .left-col {
    width: 100%;
}
    .right-col{
        width: 100%;
        padding: 30px 10px 0px 10px !important;
    }
    li.B-footer {
    padding-top: 20px;
    width: 50%;
    float: left;
}
    
    .inner-nav-menu {
    width: 80%;    
    padding: 50px;
}
.col-md-12.nav-contact {
    position: relative;
    margin-top: 150px;
}

.sidebar .closebtn {
    position: absolute;
    top: 25PX;
    right: 15px;
    font-size: 36px;
    margin-left: 50px;
}
    .mobile-gap{margin-top: 100px;}
    p.social-class {
    padding-bottom: 30px;}
    
    p.menu-class {
    padding-bottom: 10px;}
    
    .center{padding: 80px;}
    
    .btn-over {
     margin-left: 20px;}
    
    sect-spacing {
    padding-top: 50px;
}
    .product-text-section-1 {
    margin-top: 0px;
    padding: 30px;
}
 .product-text-section {
    margin-top: 0px;
}   
.center-contant {
    padding: 30px;
    height: 500px;
}
  p.right-col-1 {
      text-decoration: none;
      font-size: 16px;}
    
 .row.footer-section {
    margin-top: 50px;
}
    .sect-spacing {
    padding: 50px 0px 0px 0px ;    
}
    .agency-head-text-top {
        padding-top: 45px;}
   
    nav-class {
    padding-bottom: 24px;
}
.sidebar {
     z-index: 10;
    overflow: scroll;
    padding-top: 15px;
}
    .right_c1{border-radius: 10px;height: 150px;} 
    
    .carousel-caption {
    top: 10px;    
    text-align: left;
    bottom: 30px;
}
  .agency-head-text {
      padding: 0px 0px 0px 0px;} 
    
    .need-help-section.center-1.contact-bg{
    padding: 50px 0px 0px 0px ;
    margin-top: 0px;
    border-radius: 10px;
    }
    
    .N-Border-m {
    border-bottom: none !important;
}
    .agency-blog-date {
    padding-bottom: 20px;}
    
    button.btn.btn-lg.top-mobi-view{margin: 50px 0px 0px 0px;}
    
    .right_c1 img {
    width: 100px;
    height: 100px;}
    
   div#home {
    padding: 20px 0px ;
}  
img.side-img {
    position: absolute;
    right: 16px;
    bottom: 0%;
}
}
/*End For mobile view*/
@media only screen and (max-width: 320px) and (min-width: 300px){
.col-md-12.nav-contact {
    position: relative;
    margin-top: 43px !important;
}
    img.side-img {
    position: absolute;
    right: -18px !important;
    bottom: 0 !important;
}
}
@media only screen and (max-width: 1024px) and (min-width: 1000px) {
    
    .sidebar {
    overflow: scroll;
    padding-top: 15px;}
    
 .right-col {
    width: 30% !important;
    float: left;
}
    .left-col {
    float: left;
    width: 70% !important;
    }
.sidebar .closebtn {
    right: 30px !important;}
    
    .nav-contact {
    margin-top: 0px;
}
}

/*For i-phone-x landscape view*/
@media only screen and (max-width: 820px) and (min-width: 800px) {
    .sidebar {
    overflow: scroll;
        padding-top: 15px;}

    img.side-img {
    width: 143px;    
    position: absolute;
    right: 50px;
    top: 150%;
    }
    
    
}
/*End i-phone-x landscape view*/

/*For i-pad view*/
@media only screen and (max-width: 1024px) and (min-width: 768px) {
    .right_c1 img {
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: none;
    height: 120px;
}
    .product-text-section-1 {
    margin-top: 70px;
    padding: 15px 0px 0px 50px;
}
    .i-spc{
        padding-left: 0px;
    }
    button.btn.btn-lg.ngape {
    margin-left: 53px;
    }
    
    .product-text-section {
    padding: 0px;
    margin-top: 50px;
}
    .need-help-section.center-1.contact-bg{padding: 50px 0px;}
    .agency-head-text{font-size: 32px;line-height: 42px;}
    .right_c1 p{font-size: 18px;padding: 9px !important;}
    span.num-gap {
    padding-right: 15px !important;
}
    .sidebar {
    overflow: scroll;
    padding-top: 15px;}
    
   .right_c1 {
    padding: 25px;}
    
    .btn-over-testimonial {
    max-width: 36px;    
    margin-top: 10px;
    margin-left: 0px;
    background: linear-gradient(0deg, #E3EDF7, #E3EDF7);
    box-shadow: -4px -2px 16px #FFFFFF, 4px 2px 12px rgba(136, 165, 191, 0.54);
    border-radius: 50px;
    border: 3px solid transparent;
    }
    
    .inner-nav-menu {
     width: 705px;}
    
    .sidebar .closebtn {
    right: 12px;}
    
    .product-text-section-1 {
        margin-top: 40px;}
    
    .center {
    padding: 80px;}
    
    .carousel-caption {
    position: absolute;
    right: 7%;
    left: 7%;
    z-index: 10;
    padding-top: 43px;
    padding-bottom: 20px}
        
    .carousel-control-next, .carousel-control-prev {
    position: absolute;
    top: 258px;
} 
     
   .sect-spacing {
    padding-top: 100px;
}     
 p.agency-casestudy-para {
     width: 100%;}
  
    .btn-lg {
        margin-top: 30px;}
    
    p.case-text-bottom{
        margin-top: 20px;
        position: relative;}
    
    
    .center-contant {
    padding: 40px;
}
  .right-col {
    width: 39%;
    float: left;
}
    .left-col {
    margin-top: -25px;    
    float: left;
    width: 60%;
}
    p.right-col-1 {
    font-size: 14px;}
    
    li a {
    font-size: 14px;}
    
    .left-col-1 {
    float: left;
    width: 60%;
}
    .right-col-1 {
    margin-top: 10px;    
    text-align: right;
    width: 40%;}
}
/*End i-pad view*/

/*For 1280 view*/
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
    .product-text-section {
    padding: 0px;
    margin-top: 50px;
}
  .left-col {
    float: left;
    width: 77%;
}
    .right-col {
    width: 23%;
    float: left;
}
  .sidebar .closebtn {
      right: 26px; }
    
.inner-nav-menu {
 width: 705px;}
}

/*End 1280 view*/

/*For 1366 view*/
@media only screen and (max-width: 1400px) and (min-width: 1300px) {
  .sidebar .closebtn {
    right: 71px !important;
}
    .product-text-section {
    padding: 0px;
    margin-top: 50px;
}
}


/*For 1440 view*/
@media only screen and (max-width: 1440px) and (min-width: 1370px) {
    .product-text-section {
    padding: 0px;
    margin-top: 50px;
}
    .right_c1 {
    width: 512px;
    }
    
  .sidebar .closebtn {
   right: 107px;}
  
    .right-col {
    width: 23%;}
    
    .left-col {
     width: 77%;}
    
    .inner-nav-menu {
 width: 705px;}
    
.nav-contact {
    position: absolute;
    bottom: 0px;
    margin-bottom: 100px;
}    
}

/*END 1440 view*/

/*start  1920 view*/

@media only screen and (max-width: 1920px) and (min-width: 1600px) {
    .product-text-section {
    padding: 0px;
    margin-top: 50px;
}
    .right_c1 {
    width: 512px;
    }
    .right_c1 {
    width: 512px;
    }
.inner-nav-menu {
    width: 945px;
    padding: 207px 50px 50px 104px;
    }
    .sidebar .closebtn {
    right: 350px;
    }
    .nav-contact{margin-top: 250px;}
}


@media only screen and (max-width: 1600px) and (min-width: 1580px) {
   .sidebar .closebtn {
    right: 192px !important;
}
.nav-contact {
    margin-top: 180px !important;
} 
}

/*End 1920 view*/
.carousel-inner{z-index: 1;}

`

export const baseCss = `
.container.nav-container-mask.outer-section{
    max-width: 1280px;
}
html {
	scroll-behavior: smooth;
}

body {
   
    background: linear-gradient(180deg, #F1F5F8 0%, #EBF3FA 0.01%, #DDE7F3 53.92%, #E6F0F9 100%);
    font-family: 'Barlow', sans-serif;
}
body > div#wrapper {
    background: linear-gradient(180deg, #F1F5F8 0%, #EBF3FA 0.01%, #DDE7F3 53.92%, #E6F0F9 100%);
    font-family: 'Barlow', sans-serif;
}
p{margin-bottom: 0px;}
ul{margin-bottom: 0px;}


.sect-spacing{padding-top: 100px;}
.product-left-space{padding-left: 50px;}
/*nabar css*/
.menu-mail{
color: #31456a;    
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 26px;
text-decoration-line: underline;
}

.social-class-1{
padding-bottom: 6px;    
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
color: #838fa6;
}

.nav-contact{
    margin-top: 0px;
}
.sidebar {
 overflow: scroll;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  background:linear-gradient(210.55deg, #EBF2F9 19.14%, #C6D7EB 154.68%) ;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 43px;
}


a.social-class {
padding-bottom: 36px;    
font-size: 18px !important;
 line-height: 22px !important;   
}

p.social-class {
color: #838fa6;    
padding-bottom: 50px;    
font-size: 18px !important;
line-height: 22px !important;   
}

.nav-class {
    padding-bottom: 46px;
}
p.menu-class{
 padding-bottom: 30px;
 font-style: normal;
  font-size: 32px;
  line-height: 38px;
  color: #31456A;   
}
.inner-nav-menu {
    width: 790px ;
    padding: 100px 50px 50px 104px;
}

a.social-class :hover{font-weight: bold;}

img.btn-lg-head.cros-buton {
    padding: 16px;
}
.sidebar a {
  text-decoration: none;
  font-style: normal;
  font-size: 32px;
  line-height: 38px;
  color: #31456A;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
font-family: 'Barlow', sans-serif;
font-weight: 700;    
background: linear-gradient(to right, #6e7c8f, #202f45);
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;    
  font-weight: bold;
}
.sidebar .closebtn {
    position: absolute;
    top: 60px;
    right: 160px;
    font-size: 36px;
    margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #E5E5E5;
  color: white;
  padding: 0px;
  border: none;
}

.openbtn:hover {
  background-color:#E5E5E5;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}
/*navbar css end*/

/*top section start*/
 .btn-lg{
padding: 14px;     
margin-top: 62px;     
font-size: 18px;     
color: #31456A;     
background: linear-gradient(0deg, #E3EDF7, #E3EDF7);
box-shadow: -4px -2px 16px #FFFFFF, 4px 2px 12px rgba(136, 165, 191, 0.54);
border-radius: 16px;border: 0px;}

.btn-lg-head{
 font-size: 18px;     
color: #31456A;     
background: linear-gradient(0deg, #E3EDF7, #E3EDF7);
box-shadow: -4px -2px 16px #FFFFFF, 4px 2px 12px rgba(136, 165, 191, 0.54);
border-radius: 16px;border: 0px;   
}

.btn-lg-head:hover{
   background: #E3EDF7;
   box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(136, 165, 191, 0.48);
}

.btn-over{
max-width: 36px;    
margin-left: 20px;    
background: linear-gradient(0deg, #E3EDF7, #E3EDF7);
box-shadow: -4px -2px 16px #FFFFFF, 4px 2px 12px rgba(136, 165, 191, 0.54);
border-radius: 50px;
border: 3px solid transparent;    
}

img.btn-over:hover {
    max-width: 36px;
    background: #E3EDF7;
    box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(136, 165, 191, 0.48);
    border-radius: 150px;
}

.btn-lg-vedio{
 font-size: 18px;     
color: #31456A;     
background: linear-gradient(0deg, #E3EDF7, #E3EDF7);
box-shadow: -4px -2px 16px #FFFFFF, 4px 2px 12px rgba(136, 165, 191, 0.54);
border-radius: 50px;
border: 0px;   
}

.btn-lg-vedio:hover{
 background: #E3EDF7;
 box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(136, 165, 191, 0.48);
}

.social-icon-bg:hover{
  background: #E3EDF7;
  box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(136, 165, 191, 0.48);
}

/*top section end */


/*vedio section start*/
.img-responsive {
    width: 100%;
}
.vedio-image{
padding: 8px;    
background: linear-gradient(210.55deg, #EBF2F9 19.14%, #C6D7EB 154.68%);
box-shadow: -16px -16px 40px rgba(255, 255, 255, 0.8), 16px 4px 64px rgba(18, 61, 101, 0.3), inset -8px -6px 80px rgba(255, 255, 255, 0.18);
border-radius: 24px;
}
/*vedio section end*/

/*product section*/


.product-text-section {
    margin-top: 50px;
}

.product-text-section-1 {
    margin-top: 70px;
    padding: 30px 0px 0px 50px;
}



.center {
  margin-bottom: 20px;    
  padding: 85px 142px 90px 103px;
  text-align: center;
}

/*end product section*/


/*our partner section*/
.col-md-3.b-w {
    border-right: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
}

.col-md-3.b-w-2 {
    border-bottom: 1px solid #d8d8d8;
}
.col-md-3.b-w-1 {
    border-right: 1px solid #d8d8d8;
    }

.agency-partner-sec{
    text-align: center;
    padding: 51px;
}
/*end our partner section*/

/*case study section*/
.case-img{
padding: 8px;    
background: linear-gradient(210.55deg, #EBF2F9 19.14%, #C6D7EB 154.68%);
box-shadow: -16px -16px 40px rgba(255, 255, 255, 0.8), 16px 4px 64px rgba(18, 61, 101, 0.3), inset -8px -6px 80px rgba(255, 255, 255, 0.18);
border-radius: 24px;
}

p.case-text-bottom {
    margin-bottom: 60px;
    position: absolute;
    bottom: 0px;
}

/*end case study section*/


/*Need help section*/

.need-help-section{
    background: linear-gradient(210.55deg, #EBF2F9 19.14%, #C6D7EB 154.68%);
    box-shadow: -16px -16px 40px rgba(255, 255, 255, 0.8), 16px 4px 64px rgba(18, 61, 101, 0.3), inset -8px -6px 80px rgba(255, 255, 255, 0.18);
    border-radius: 24px;
}

.center-1 {
  margin-bottom: 20px;    
  text-align: center;
}

.ribbon {
  position:absolute;
  bottom:0;
  left:0;
}
/*end need help section*/


/*Footer section*/
.left-col {
    padding: 0px;
    float: left;
    width: 76%;
}
.right-col {
    width: 23%;
    float: left;
}
li.B-footer {
    padding: 0px 32px 0px 0px;
    float: left;
}
.left-col-1 {
    padding: 0px 0px 0px 15px;
    float: left;
    width: 70%;
}
.right-col-1 {
    text-align: right;
    width: 30%;
    float: left;
}
.center-contant{
    
}

 p.right-col-1 { 
font-size: 18px;
line-height: 100%;
color: #838fa6;}



li a {
font-size: 18px;
line-height: 100%;
color: #838fa6;
}

li a:hover{
text-decoration: none;    
font-size: 18px;
line-height: 100%;
color: #31456A !important;    
font-weight: bold !important;
}

li.B-footer-1 {
    padding-left: 12px;
    float: left;
}
li{list-style: none;}

 

.agency-head-text-top {
    padding-top: 100px;
    font-style: normal;
    font-size: 48px;
    line-height: 58px;    
    background: linear-gradient(to right, #6e7c8f, 
    #202f45);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.agency-head-text {
    padding: 20px 0px 0px 0px;
    vertical-align: middle;
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    line-height: 58px;    
    background: linear-gradient(to right, #6e7c8f, 
    #202f45);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.agency-para-text{
padding-top: 20px;    
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 100%;
color:#838fa6;
}

.agency-numbring{
color: #202f45;   
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 43px;
display: flex;    
}

.agency-product-text{
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 100%;
color: #31456A;
}

.product-s{display: none;}



p.agency-casestudy-para{
padding-top: 22px;  
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 100%;
color: #838fa6;}

span.agency-site{
padding-right: 8px;    
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 100%;
color: #838fa6;}

p.case-text-bottom{
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 100%;
color: #31456A;
}

.agency-blog-para{
width: 80%;    
padding-bottom: 22px;    
font-style: normal;
font-size: 24px;
line-height: 100%;
color: #31456A;  
}

a.inner-text{
text-decoration: none !important;     
padding-bottom: 22px;    
width: 95%;    
font-style: normal;
font-size: 24px;
line-height: 100%;
color: #31456A;   
}
a.inner-text:hover{
   font-weight: bold;
}

.agency-blog-date{
padding-bottom: 47px;    
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 100%;
color: #838fa6;
}

.block {
    margin-top: 35px;
    border-bottom: 1px solid #d8d8d8 ;
    
}



p.agency-contact-para-top{
 padding-bottom: 29px;    
 font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 100%;
color: #31456A;   
}
p.agency-contact-para{
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 100%;
color: #838fa6;

}

.social-icon-bg{
padding: 5px;    
height: 50px;
width: 50px;
background: #E3EDF7;
box-shadow: -4px -2px 16px #FFFFFF, 4px 2px 16px rgba(136, 165, 191, 0.48);
border-radius: 16px;
}



.img-container .overlay {
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
.footer-bottom {
    margin-bottom: 100px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(49, 69, 106, 0.6);
    padding-top: 12px;
}

.need-help-section.center-1.contact-bg {
    border: 8px solid #EBF2F9;
    background: linear-gradient(210.55deg, #EBF2F9 19.14%, #C6D7EB 154.68%);
    background-repeat: no-repeat;
    background-position: bottom left;
    padding: 100px 0px;
    position: relative;
    margin-top: 150px;
    background-image: url(${assetsUrl}/templates/agencyGrey/agency-images/chrome_Large.png);
}


div#home {
    padding: 46px 0px;
}
row.footer-section {
    margin-top: 172px;
}
.d-block {
    padding: 78px 78px 78px 78px;
    height: 21em;
}
    p.testimoanil-text {
    font-weight: normal;
    font-size: 18px;
    line-height: 100%;
    color: #31456A;
}
    
    p.test-heding {
   font-family: 'Barlow', sans-serif;
    font-weight: 700;    
    padding-top: 39px;    
    background: linear-gradient(to right, #6e7c8f, #202f45);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
}
  p.test-heding-2 {
    font-family: 'Barlow', sans-serif;
    font-weight: 700;  
    background: linear-gradient(to right, #6e7c8f, #202f45);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    padding-top: 49px;  
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
}  

    p.customers {
    padding-top: 5px;    
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 100%;
    color: #838fa6;
}

.demo{
 padding: 7px;   
 background: linear-gradient(0deg, #E3EDF7, #E3EDF7);
box-shadow: -6px -2px 16px rgba(255, 255, 255, 0.8), 6px 2px 16px rgba(136, 165, 191, 0.48);
border-radius: 16px   
}

.carousel-caption {
    text-align: left;
    bottom: 50px;
}

.carousel-control-next, .carousel-control-prev {
    position: absolute;
    top: 200px;}

img.ribbon {
    z-index: -1;
    max-width: 100%;
}


.btn-over-testimonial {
    width: 50px;
    margin-top: 10px;
    margin-left: 0px;
    background: linear-gradient(0deg, #E3EDF7, #E3EDF7);
    box-shadow: -4px -2px 16px #FFFFFF, 4px 2px 12px rgba(136, 165, 191, 0.54);
    border-radius: 50px;
    border: 3px solid transparent;
    }

.btn-over-testimonial:hover {
    width: 50px;
    background: #E3EDF7;
    box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(136, 165, 191, 0.48);
}

.agency-contact-heading {
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    line-height: 58px;
    background: linear-gradient(to right, #6e7c8f99, #202f45);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
 
.inner-contac-block{padding: 8px;}

.hides, #hom-1:hover .shows, #hom-2:hover .shows, #hom-3:hover .shows, #hom-4:hover .shows, #hom-5:hover .shows, #hom-6:hover .shows, #hom-7:hover .shows, #hom-8:hover .shows {
	display: none;
}

.shows, #hom-1:hover .hides, #hom-2:hover .hides, #hom-3:hover .hides, #hom-4:hover .hides, #hom-5:hover .hides, #hom-6:hover .hides, #hom-7:hover .hides, #hom-8:hover .hides {
	display: inline;
}

.btn.focus, .btn:focus {
    outline: 0;
    box-shadow: -4px -2px 16px #FFFFFF, 4px 2px 12px rgba(136, 165, 191, 0.54) !important;
}
button:focus {
    outline: 1px dotted;
    outline: transparent !important;
}

#overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(249.16deg, rgba(191, 203, 217, 0.9) -17.47%, rgb(43 59 75 / 98%) 72.59%);
    opacity: 1;
    z-index: 2;
    cursor: pointer;
}

nav#myHeader {
    padding: 0px;
}

.right_c1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 199px;
    transition-duration: 500ms;
    background: #E3EDF7;
    box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(136, 165, 191, 0.48);
    border-radius: 16px;
    position: relative;
    margin-bottom: 12px;
}

.right_c1 p{ 
    padding: 15px;
    z-index: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 100%;
    background: linear-gradient(to right, #6e7c8f, #202f45);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-align: center;
    }
.right_c1 img {
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: none;
    height: 160px;
}
.right_c1:hover img{display: block;}
.right_c1:hover p{font-weight: 600;}
.right_c1:hover {
    padding: 5px;
    border: 2px solid #c6d7eb;
    background: linear-gradient(210.55deg, #EBF2F9 19.14%, #c6d7eb 154.68%);
    box-shadow: -16px -16px 40px rgba(255, 255, 255, 0.8), 16px 4px 64px rgba(18, 61, 101, 0.3), inset -8px -6px 80px rgba(255, 255, 255, 0.18);
    cursor: pointer;
}

span.num-gap {
    padding-right: 24px;
}
img.side-img {
    position: absolute;
    right: 50px;
    bottom: 0px;
}
.ytp-large-play-button {
    display: none;}



.embed-responsive
{border-radius: 24px;}


`
export const style = `
  <style>
    ${`@media {background: red;}` + baseCss}
  </style>
  `

export const html = `
<!-- Top section -->
<div class="container nav-container-mask outer-section">
    <div id="home">
        <nav class="navbar navbar-expand-lg navbar-dark" id="myHeader">
            <div class="container-fluid">
                <a href="#">
                    <img class="l-img" src="${assetsUrl}/templates/agencyGrey/agency-images/new-logo.png"att="">
                </a>
                <div class="ipad web-v">
                    <div class="header-module">
                        <div id="mySidebar" class="sidebar">
                            <a href="javascript:void(0)" class="closebtn " onclick="off()"> <span id="hom-1"><img class="menu-image shows btn-lg-head cros-buton"style="padding: 10px;"src="${assetsUrl}/templates/agencyGrey/agency-images/cross-32.png">
 <img class="menu-image hides btn-lg-head cros-buton"style="padding: 10px;"src="${assetsUrl}/templates/agencyGrey/agency-images/cross-hover-32.png"></span> 
                            </a>
                            <div class="row inner-nav-menu">
                                <div class="col-md-6 Hide-mobi-view">
                                    <p class="social-class">Social</p> <a class="social-class" href="#">Facebook</a>
                                    <a class="social-class" href="#">Behance</a>
                                    <a class="social-class" href="#">Dribbble</a>
                                    <a class="social-class" href="#">Instagram</a>  <a class="social-class" href="#">Youtube</a> 
                                </div>
                                <div class="col-md-6 mobile-gap">
                                    <p class="social-class">Menu</p> 
                                    <a class="nav-class" href="#aboutus">About Us</a>
                                    <a class="nav-class" href="#servicessec">Services</a>
                                    <a class="nav-class" href="#portfoliosec">Portfolio</a>
                                    <a class="nav-class" href="#blogsec">Blog</a>  
                                    <a class="nav-class" href="#contactsec">Contact Us</a>
                                </div>
                                <div class="col-md-12 nav-contact">
                                    <a href="#"><p class="social-class-1">Get in touch</p></a>
                                    <p class="menu-mail">info@siteseed.io</p>
                                </div>
                            </div>
                            <img class="side-img" src="${assetsUrl}/templates/agencyGrey/agency-images/sidebar-bg.png">
                        </div>
                        <div id="overlay" onclick="off()"></div>
                        <button onclick="on()" class="openbtn btn-lg-head" onclick="openNav()"><span id="hom-2"><img class="menu-image shows"style="padding: 10px;"src="${assetsUrl}/templates/agencyGrey/agency-images/hamburger-32.png">
 <img class="menu-image hides"style="padding: 10px;"src="${assetsUrl}/templates/agencyGrey/agency-images/hamburger-hover-32.png"></span> 
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10  offset-mb-0 mb-12 p-0">
        <section class="top" id="one">
            <div class="col-lg-8 col-md-10 mb-12 p-0">
                <h1 class="agency-head-text-top"><b style="font-family: 'Barlow', sans-serif;">Leading digital agency </b>with <br>solid design and development <br>expertise.</h1>
                <p class="agency-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate efficitur mauris et faucibus. Proin molestie, nulla eget fringilla vehicula, orci nibh porttitor risus.</p>
                <button type="button" class="btn  btn-lg top-mobi-view">Contact us
                    <img class="btn-over" src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png">
                </button>
            </div>
        </section>
        
        <section id="aboutus"class="vedio sect-spacing" id="two">
            <div class="col-md-12 col-lg-10 offset-lg-1 offset-mb-0 mb-12 mobi-space-V vedio-image">
                <div class="embed-responsive embed-responsive-16by9 ">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"allowfullscreen></iframe>

                <div class="overlay"> <span id="hom-3"><span id="hom-4"><img class="btn-lg-vedio shows"style="padding: 16px;"src="${assetsUrl}/templates/agencyGrey/agency-images/vedio-off.png">
 <img class="btn-lg-vedio hides"style="padding: 16px;"src="${assetsUrl}/templates/agencyGrey/agency-images/vedio-on.png"></span></span>
                </div>
            </div></div>
        </section>
        <section id="servicessec"class="products sect-spacing" id="three">
            <div class="row">
                <div class="col-lg-6 col-md-6 mb-12 product-text-section">
                    <h1 class="agency-head-text">Experts in every <br> aspect  of the product<br> lifecycle </h1>
                    <p class="agency-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate efficitur mauris et faucibus. Proin molestie, nulla eget fringilla vehicula, orci nibh porttitor risus.</p>
                    <button type="button" class="btn  btn-lg">Contact us
                        <img class="btn-over" src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png">
                    </button>
                </div>
                <div class="col-lg-6 col-md-6 mb-12 product-left-space">
                    <div class="right_c1">
                        <p> <span class="num-gap">01</span><span>Branding & Visual Identity</span></p>
                        <img class="img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Small.png">
                    </div>
                    <div class="right_c1">
                        <p> <span class="num-gap">02</span> User Experience Design</p>
                        <img class="img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Small.png">
                    </div>
                    <div class="right_c1">
                        <p> <span class="num-gap">03</span> Mobile App & Web Design</p>
                        <img class="img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Small.png">
                    </div>
                    <div class="right_c1">
                        <p><span class="num-gap">04 </span>Web Development</p>
                        <img class="img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Small.png">
                    </div>
                    <div class="right_c1">
                        <p> <span class="num-gap">05</span>Animation & Motion Design</p>
                        <img class="img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Small.png">
                    </div>
                </div>
            </div>
        </section>
        <section id="portfoliosec" class="testimonial sect-spacing" id="four">
            <div class="row">
                <div class="col-lg-5 col-md-5 mb-12">
                    <h1 class="agency-head-text mobile-space">What our <br>Clients say</h1>
                </div>
                <div class="col-lg-7 col-md-7 mb-12">
                    <div class="demo">
                        <div class="carousel slide" id="main-carousel" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="d-block"></div>
                                    <div class="carousel-caption  d-md-block">
                                        <p class="testimoanil-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor sem quam, eget vestibulum odio laoreet id.</p>
                                        <p class="test-heding">It was a great experience all around!</p>
                                        <p class="test-heding-2">Dennis Mulato</p>
                                        <p class="customers">Director, Digital Marketing & Commerce</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-block"></div>
                                    <div class="carousel-caption  d-md-block">
                                        <p class="testimoanil-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor sem quam, eget vestibulum odio laoreet id.</p>
                                        <p class="test-heding">It was a great experience all around!</p>
                                        <p class="test-heding-2">Dennis Mulato</p>
                                        <p class="customers">Director, Digital Marketing & Commerce</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-block"></div>
                                    <div class="carousel-caption  d-md-block">
                                        <p class="testimoanil-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor sem quam, eget vestibulum odio laoreet id.</p>
                                        <p class="test-heding">It was a great experience all around!</p>
                                        <p class="test-heding-2">Dennis Mulato</p>
                                        <p class="customers">Director, Digital Marketing & Commerce</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-block"></div>
                                    <div class="carousel-caption  d-md-block">
                                        <p class="testimoanil-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor sem quam, eget vestibulum odio laoreet id.</p>
                                        <p class="test-heding">It was a great experience all around!</p>
                                        <p class="test-heding-2">Dennis Mulato</p>
                                        <p class="customers">Director, Digital Marketing & Commerce</p>
                                    </div>
                                </div>
                            </div>
                            <!-- /.carousel-inner -->
                            <a href="#main-carousel" class="carousel-control-next" data-slide="next">	<span class="carousel-control-next-icon-new"><img class="btn-over-testimonial" src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png"></span>
                                <span class="sr-only" aria-hidden="true">Next</span>
                            </a>
                        </div>
                        <!-- /.carousel -->
                    </div>
                </div>
            </div>
        </section>
        <section class="partner-section sect-spacing" id="five">
            <div class="row">
                <div class="row">
                    <div class="col-md-3 b-w agency-partner-sec">
                        <img class="l-1 img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/Vimeo.png">
                    </div>
                    <div class="col-md-3 b-w agency-partner-sec no-border">
                        <img class="l-1 img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/Spotify.png">
                    </div>
                    <div class="col-md-3 b-w agency-partner-sec">
                        <img class="l-1 img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/Wooden%20Dummy.png">
                    </div>
                    <div class="col-md-3 b-w-2 agency-partner-sec">
                        <img class="l-1 img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/Max.png">
                    </div>
                    <div class="col-md-3 b-w-1 agency-partner-sec">
                        <img class="l-1 img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/Aria.png">
                    </div>
                    <div class="col-md-3 b-w-1 agency-partner-sec no-border">
                        <img class="l-1 img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/Bauknecht.png">
                    </div>
                    <div class="col-md-3 b-w-1 agency-partner-sec N-Border-m">
                        <img class="l-1 img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/Jeep.png">
                    </div>
                    <div class="col-md-3 agency-partner-sec ">
                        <img class="l-1 img-fluid" src="${assetsUrl}/templates/agencyGrey/agency-images/Placeholder.png">
                    </div>
                </div>
            </div>
        </section>
        <section  class="case-study-section sect-spacing" id="six">
            <div class="row">
                <div class="col-lg-7 col-md-7 mb-12 product-text-section">
                    <img class="img-responsive case-img" src="${assetsUrl}/templates/agencyGrey/agency-images/image%203.jpg">
                </div>
                <div class="col-lg-5 col-md-5 mb-12 product-text-section-1">
                    <p class="agency-numbring">01</p>
                    <p class="agency-casestudy-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate efficitur mauris et faucibus.</p>
                    <button type="button" class="btn  btn-lg">See Case
                        <img class="btn-over" src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png">
                    </button>
                    <p class="case-text-bottom"><span class="agency-site">Website:</span><a href="#" style="color: #31456A;">siteseed.io</a>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-7 mb-12 product-text-section">
                    <img class="img-responsive case-img" src="${assetsUrl}/templates/agencyGrey/agency-images/image%204.jpg">
                </div>
                <div class="col-lg-5 col-md-5 mb-12 product-text-section-1">
                    <p class="agency-numbring">02</p>
                    <p class="agency-casestudy-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate efficitur mauris et faucibus.</p>
                    <button type="button" class="btn  btn-lg">See Case
                        <img class="btn-over" src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png">
                    </button>
                    <p class="case-text-bottom"><span class="agency-site">Website:</span><a href="#" style="color: #31456A;">siteseed.io</a>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-7 mb-12 product-text-section">
                    <img class="img-responsive case-img" src="${assetsUrl}/templates/agencyGrey/agency-images/image%205.jpg">
                </div>
                <div class="col-lg-5 col-md-5 mb-12 product-text-section-1">
                    <p class="agency-numbring">03</p>
                    <p class="agency-casestudy-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate efficitur mauris et faucibus.</p>
                    <button type="button" class="btn  btn-lg">See Case
                        <img class="btn-over" src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png">
                    </button>
                    <p class="case-text-bottom"><span class="agency-site">Website:</span><a href="#" style="color: #31456A;">siteseed.io</a>
                    </p>
                </div>
            </div>
            <div class="col-md-12 text-center no-space-butn">
                <button type="button" class="btn  btn-lg ngape">See More
                    <img class="btn-over" src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png">
                </button>
            </div>
        </section>
        <section id="blogsec"class="our-blog sect-spacing" id="seven">
            <div class="row">
                <div class="col-lg-5 col-md-5 mb-12 ">
                    <h1 class="agency-head-text">What’s new?<br>
       Our blog and <br>news</h1>
                </div>
                <div class="col-lg-7 col-md-7 mb-12 i-spc">
                    <div class="block">
                        <p class="agency-blog-para"><a class="inner-text" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                        </p>
                        <p class="agency-blog-date">Jun 25, 2020</p>
                    </div>
                    <div class="block">
                        <p class="agency-blog-para"><a class="inner-text" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                        </p>
                        <p class="agency-blog-date">Jun 25, 2020</p>
                    </div>
                    <div class="block">
                        <p class="agency-blog-para"><a class="inner-text" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                        </p>
                        <p class="agency-blog-date">Jun 25, 2020</p>
                    </div>
                    <div class="block">
                        <p class="agency-blog-para"><a class="inner-text" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                        </p>
                        <p class="agency-blog-date">Jun 25, 2020</p>
                    </div>
                    
                    <button type="button" class="btn  btn-lg">See More
                        <img class="btn-over" src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png">
                    </button>
                </div>
            </div>
        </section>
    </div>
    <div id="contactsec"class="need-help-section center-1 contact-bg ">
        <div class="inner-contac-block">
            <div class="center-contant offset-md-3 col-md-6 offset-lg-3 col-lg-6  offset-mb-0 mb-12">
                <p class="agency-contact-para-top">Need help with a project?</p>
                <h1 class="agency-contact-heading">Let’s talk!</h1>
                <p class="agency-contact-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque sit amet dolor sit amet molestie. Morbi malesuada nunc quam.</p>
                <br>
                <br>
                <button type="button" class="btn  btn-lg">Contact Us
                    <img class="btn-over" src="${assetsUrl}/templates/agencyGrey/agency-images/Arrow.png">
                </button>
            </div>
            <img class="ribbon" src="${assetsUrl}/templates/agencyGrey/agency-images/chrome_Large.png">
        </div>
    </div>
    <div class="row footer-section">
        <ul class="left-col">
            <img src="${assetsUrl}/templates/agencyGrey/agency-images/Logo%20Design.png">
        </ul>
        <ul class="right-col">
            <li class="B-footer-1">
                <a id="hom-5" href="#">
                    <img class="social-icon-bg" src="${assetsUrl}/templates/agencyGrey/agency-images/insta-32.png">
                </a>
            </li>
            <li class="B-footer-1">
                <a id="hom-6" href="#">
                    <img class="social-icon-bg" src="${assetsUrl}/templates/agencyGrey/agency-images/fb-32.png">
                </a>
            </li>
            <li class="B-footer-1">
                <a id="hom-7" href="#">
                    <img class="social-icon-bg" src="${assetsUrl}/templates/agencyGrey/agency-images/dribal-32.png">
                </a>
            </li>
            <li class="B-footer-1">
                <a id="hom-8" href="#">
                    <img class="social-icon-bg" src="${assetsUrl}/templates/agencyGrey/agency-images/behance-32.png">
                </a>
            </li>
        </ul>
    </div>
    <div class="footer-bottom">
        <ul class="left-col-1">
            <li class="B-footer"><a href="#">About Us</a>
            </li>
            <li class="B-footer"><a href="#">Services</a>
            </li>
            <li class="B-footer"><a href="#">Portfolio</a>
            </li>
            <li class="B-footer"><a href="#">Blog</a>
            </li>
            <li class="B-footer"><a href="#">Contact Us</a>
            </li>
        </ul>
        <p class="right-col-1">© 2020 SiteSeed. All Rights Reserved.</p>
    </div>
</div>
<script src="${assetsUrl}/templates/agencyGrey/vendor/jquery/jquery.min.js"></script>
<script src="${assetsUrl}/templates/agencyGrey/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Slider JavaScript -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
<script>
carouselControl()
function carouselControl() {
    let wrapper = document.querySelector('[data-gjs-type="wrapper"]')
    if (!wrapper) {
        return
    }
    const nextBtn = document.querySelector(".btn-over-testimonial")
    nextBtn.onclick = (e) => {
        let main = e.target.parentElement.parentElement.parentElement
        let children = main.querySelector(".carousel-inner").children
        let activeKey = 0
        _.each(children, (child, key) => {
            if (child.classList.contains('active')) {
                activeKey = key
            }
        })
        let currentElem = children[activeKey]
        let nextElem = activeKey + 1 == children.length ? children[0] : children[activeKey + 1];
        console.log(nextElem, currentElem, 'sss.p')
        nextElem.classList.add('carousel-item-next')
        setTimeout(()=>{
        currentElem.classList.add('carousel-item-left')
            nextElem.classList.add('active')
            nextElem.classList.remove('carousel-item-next')
        }, 10)
        setTimeout(()=>{
            currentElem.classList.remove('active')
            currentElem.classList.remove('carousel-item-left')
        }, 600)
    }
}
</script>
<script>
	function openNav() {
	  document.getElementById("mySidebar").style.width = "auto";
	  document.getElementById("main").style.marginLeft = "auto";
	}
	
	function on() {
	  document.getElementById("overlay").style.display = "block";
	  document.getElementById("mySidebar").style.width = "auto";
	  document.getElementById("main").style.marginLeft = "auto";
	      
	}
	
	function off() {
	  document.getElementById("overlay").style.display = "none";
	  document.getElementById("mySidebar").style.width = "0";
	  document.getElementById("main").style.marginLeft= "0";    
	}
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


  export default {
	  html,
	  baseCss,
	  customCss,
	  style,
      pageData
  }