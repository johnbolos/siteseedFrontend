import { assetsUrl } from "../../../settings";

export const customCss = `
@keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 94px;}
    .sidenav a {font-size: 18px;}
}
@-webkit-keyframes rotate {
    from { -webkit-transform: rotate(360deg); }
    to { -webkit-transform: rotate(0); }
}
@-moz-keyframes rotate {
    from { -moz-transform: rotate(360deg); }
    to { -moz-transform: rotate(0); }
}
@-ms-keyframes rotate {
    from { -ms-transform: rotate(360deg); }
    to { -ms-transform: rotate(0); }
}
@-o-keyframes rotate {
    from { -o-transform: rotate(360deg); }
    to { -o-transform: rotate(0); }
}
@keyframes rotate {
    from { transform: rotate(360deg); }
    to { transform: rotate(0); }
}
/*All Media Query*/
/*Mobile view*/
@media only screen and (max-width: 320px){
 .top-head{
        line-height: 39px !important;
        font-size: 28px !important;
    }
    .text{
        line-height: 39px !important;
       font-size: 28px !important; 
    }

}

@media only screen and (max-width: 720px){
    
    .find-txt-1{font-size: 13px;}
    .find-txt{font-size: 13px;}
    section#three {
    padding-left: 15px;
}
    li.Faq-nav{
        font-size: 13px;
        line-height: 22px; 
    }
    .arrows {
    display: none;
}
    li.F-nav{
     font-size: 13px;
     line-height: 22px;   
    }
    
    .G-Spc {
    padding-left: 20px;
    padding-right: 20px;    
    margin-top: 20px;
   }
    
    .G-spcs {
    padding: 0px;
}
    .arrows {
    margin-bottom: 50px;
    text-align: end;
    margin-top: 0px;
}
.footer-log{
    padding: 0px;    
    margin-bottom: 0px;
}
    .overlay span {
    top: 70%;
    }
    .Footer-up {
    min-height: 350px;
    background-position: top right;
    }
    .F-top-text {
    top: 50px;
    position: absolute;
}
    
    .seventh-sec {
    margin-top: 50px;
}
    .top-text-1 {
    position: relative;
    top: 74px;
}
    .top-paragraph-2 {
    font-size: 13px;
    line-height: 16.24px;
   }
    
    .move-4{display: none;}
    .move-3{display: none;}
    .move-2{display: none;}
    .move-1{display: none;}
    span-1 {font-size: 22px;
        line-height: 26px;
    }
    .img-vedio {
       min-height: 400px;
    }
    h1.top-heading.V-text {
    padding: 0px 35px;
    font-size: 32px;
    line-height: 42px;
    }
    
    .l-spcc {
      padding-right: 50px !important;}
    
    .text-area {
    padding-right: 25px;    
    padding-left: 25px;
}
    
    p.Know-T{
        margin-top: 50px;
        margin-bottom: 50px;
    }
    
    .mobile-slid {
    display: block;
    padding-left: 30px;
    padding-right: 30px;
}
.Web-slid{display: none;}
    
    .full-width.seventh-sec{
 padding-left: 25px;
 padding-right: 25px;    
}
    .mob-view{display: block;}

  .top-text {
    left: 25px;
    position: absolute;
    top: 200px;
}
    .inner-nav {
    width: 100%;
    padding-left: 0px;
    margin-top: 44px;
    padding-right: 0px;
}
    .move-bit {
    margin-top: 22px;
    margin-left: 40px;
}
  .inner-about{
    padding: 0px;
}
  img.logo.img-fluid {
    margin-left: 20px;
}
    .top-head{
        line-height: 42px;
        font-size: 32px;
    }
    .text{
        line-height: 42px;
       font-size: 32px; 
    }
    .top-paragraph{
        font-size: 13px;
    }
    .C-name{
        font-size: 16px;
        line-height: 19.25px;
    }
    
    .inner-image {
    margin-top: 100px;    
    padding-left: 25px;
    padding-right: 25px;
}
    
    
    .bg-img {
    background-image: url(${assetsUrl}/templates/gym/Images/Images/2x/Banner%20Image.jpg);
    min-height: 750px;
    }
    .top-image {
    position: absolute;
   }
    
    .thired-sec {
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 50px;
}
    .fifth-sec {
    margin-top: 0px;    
    display: flex;
    flex-direction: column-reverse;    
    padding-left: 15px;
    padding-right: 15px;
   }
    .text-blk {
    padding: 0px;
    margin-top: 0px;
}
  .sixth-sec {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 50px;
}
    .Eighth-sec {
    margin-bottom: 15px;
    padding-left: 20px;
    margin-top: 50px;
}
    .footer-inner {
    padding-bottom: 50px;
    padding-right: 35px;
    padding-left: 35px;
    padding-top: 150px;
}
    .text-sec {
    padding-left: 25px;
    }
    
    .social_icon {
    margin-top: 50px;
}
    .blog-txt-sec {
     width: 100%;        
    padding-left: 0px;
}
   
    .top-head-1{
        line-height: 42px;
        font-size: 32px;
    }
    .top-paragraph-1{font-size: 13px;}
    
    .text-sec {
    margin-top: 50px;    
     margin-bottom: 50px;
}
    .F-1 {
    margin-top: 0px;
}
    h1.top-heading.V-text{
        font-size: 32px;
        line-height: 42px;
    }
    .main-sec{
        margin-top: 0px;
    }
    .services {
    margin-bottom: 50px;
    margin-top: 50px;
    padding-left: 50px;
}
    .S-1{
        margin-bottom: 0px;
        font-size: 32px;
        line-height: 42px;
    }
    .F-4 {
    top: 50px;
}
    .F-2{
    top: 50px;}
    
    .F-3{
    margin-bottom: 50px;    
    top: 50px;
}
    
    .M-A{
        height: auto;
        width: auto;
    }
    .M-B{
        height: auto;
        width: auto;
    }
    .M-C{
        height: auto;
        width: auto;
    }
    .M-D{
        height: auto;
        width: auto;
    }
    .C-data {
    padding-left: 25px;
    font-size: 22px;
    line-height: 33px;
    padding-right: 25px;
}
    .test-details {
    margin-top: 50px;
}
    .owl-carousel .owl-item img {
     width: 50px;
    }
    .owl-carousel {
    margin-top: 30px;
}
    .Q-img{
        width: 50px;
    }
    .signup-area {
    padding-left: 35px;
}
    .not-V{
        display: none;
    }
    .F-bottom-text {
    top: 155px;
    position: absolute;
}
    .col-md-12.signup {
    top: 270px;
}
    .loop-txt{
        width: 60%;
        font-size: 32px;
        line-height: 42px;
    }
    .L-1{
        float: left;
        width: 50%;
    }
    .inner-about {
    padding-right: 25px;    
    padding-left: 25px;
}
    .About-sec {
    padding-left: 15px;
    padding-right: 15px;
}
    section#one {
    margin-top: 150px;
}
 
    .second-sec {
    padding: 0px 25px;    
    margin-top: 50px;
    margin-left: 0px;
    }
    section#seven {
    margin-bottom: 50px;
}
    .web-view{display: none;}
    
    .arrow-cont {display: none;}
}



/*I-pad view*/
@media only screen and (max-width: 820px) and (min-width: 760px){
    .l-spcc {
    padding-right: 30px !important;
}
    .arrow-cont {display: none;}
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 50px !important;
    left: auto;
}
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: auto;
    right: 110px !important;
}
    .sidenav .closebtn {
    text-align: end;
    font-weight: 800;
    position: absolute;
    top: 52px;
    right: 214px;
    font-size: 16px;
    margin-left: 50px;
}
    .menu {
    padding: 8px 8px 8px 70px;
}
    .sidenav a {
    width: 100%;
    padding: 0px 8px 0px 73px;
    }
 .Web-space{
    width: 60%;
}
    span-1 {
    margin-bottom: 20px;    
    line-height: 42px;
    font-size: 32px;}
    
    .move-4{display: none;}
    .move-3{display: none;}
    .move-2{display: none;}
    .move-1{display: none;}
    
    .full-width.seventh-sec{
 padding-left: 50px;
 padding-right: 50px;    
}
    .top-text {
    left: 50px;
    position: absolute;
    top: 230px;
}

.inner-nav {
    width: 100%;
    padding-left: 50px;
    margin-top: 44px;
    padding-right: 50px;
}
  img.logo.img-fluid {
    margin-left: 20px;
}
    .top-head{
        line-height: 42px;
        font-size: 32px;
    }
    .text{
        line-height: 42px;
       font-size: 32px; 
    }
    .top-paragraph{
        width: 60%;
        font-size: 13px;
    }
    
    .inner-image {
    margin-top: 100px;    
    padding-left: 50px;
    padding-right: 50px;
}
 
    
    .bg-img {
    background-image: url(${assetsUrl}/templates/gym/Images/Images/2x/Banner%20Image.jpg);
    min-height: 690px;
    }
    .thired-sec {
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 50px;
}
    .fifth-sec {
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 150px;
}
  .sixth-sec {
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 100px;
}
    .Eighth-sec {
    margin-bottom: 100px;
    padding-left: 50px;
    margin-top: 100px;
}
    .footer-inner {
    padding-bottom: 50px;
    padding-right: 50px;
    padding-left:50px;
    padding-top: 100px;
}
    .blog-txt-sec {
     width: 100%;        
    padding-left: 0px;
}
  
    .event-name {
    font-size: 16px;
    line-height: 20px;
    }
  .Ninth-sec{
    padding-left: 50px;
    padding-right: 50px;
    }
    .top-head-1{
        line-height: 42px;
        font-size: 32px;
    }
    .top-paragraph-1{font-size: 13px;}
    
    .text-sec {
    margin-top: 100px;
}
    .F-1 {
    margin-top: 0px;
}
    h1.top-heading.V-text{
        font-size: 32px;
        line-height: 42px;
    }
    .main-sec{
        margin-top: 0px;
    }
    .services {
    margin-bottom: 50px;
    margin-top: 50px;
    padding-left: 250px;
}
    .S-1{
        margin-bottom: 20px;
        font-size: 32px;
        line-height: 42px;
    }
    .F-4 {
    top: 50px;
}
    .F-2{
    top: 50px;}
    
    .F-3{
    margin-bottom: 50px;    
    top: 50px;
}
    
    .M-A{
        height: auto;
        width: auto;
    }
    .M-B{
        height: auto;
        width: auto;
    }
    .M-C{
        height: auto;
        width: auto;
    }
    .M-D{
        height: auto;
        width: auto;
    }
    .C-data {
    font-size: 22px;
    line-height: 33px;
    }
    .quotes{
    margin-bottom: 30px;
    }
    .Q-img{
        width: 50px;
    }
    .signup-area {
    padding-left: 25px;
}
    .not-V{
        display: none;
    }
    .F-bottom-text {
    top: 380px;
    position: absolute;
}
    .loop-txt{
        font-size: 32px;
        line-height: 42px;
    }
    
    .L-1{
        float: left;
        width: 50%;
    }
    .inner-about {
    padding-left: 25px;
}
    .About-sec {
    padding-left: 50px;
    padding-right: 50px;
}
    section#one {
    margin-top: 100px;
}
   
    .second-sec {
    margin-top: 100px;
    margin-left: 50px;
    }
    section#seven {
    margin-bottom: 100px;
}  
    li.F-nav {
    font-size: 13px;
    }
    
    p.social-txt{
     font-size: 13px;
    line-height: 25px;   
    }
    
    li.Faq-nav{
     font-size: 13px;
    line-height: 25px;   
    }
    p.Know-T{
    font-size: 18px;
    line-height: 22px;
    }
}


/*I-pad-pro view*/
@media only screen and (max-width: 1030px) and (min-width: 1000px){
    .sidenav .closebtn {
    text-align: end;
    font-weight: 800;
    position: absolute;
    top: 44px;
    right: 190px;
    font-size: 16px;
    margin-left: 50px;
}
    .menu {
    padding: 8px 8px 8px 84px;
}
    .sidenav a {
    width: 100%;
    padding: 0px 8px 0px 85px;
    }
    .img-vedio{
        min-height: 550px;
    }
    .top-text-1 {
    position: relative;
    top: 150px;
}
     .full-width.seventh-sec{
 padding-left: 100px;
 padding-right:100px;    
}
    span-1{
    margin-bottom: 20px;    
    font-size: 32px;
    line-height: 42px;   
    }
    
    .Q-img {
    width: 100px;
}
   
   
    .inner-image {
    padding-left: 150px;
    padding-right: 150px;
}
 .top-text {
    left: 150px;
    position: absolute;
    top: 250px;
}   
    .inner-nav {
    width: 100%;
    padding-left:70px;
    margin-top: 44px;
    padding-right: 70px;
}
    .bg-img {
    background-image: url(${assetsUrl}/templates/gym/Images/Images/2x/Banner%20Image.jpg);
    min-height: 790px;
    }
    
    .main-sec {
    margin-top: 200px;
}
    .About-sec {
    margin-top: 100px;    
    padding-left: 150px;
    padding-right: 150px;
}
    .second-sec {
    margin-top: 150px;
    margin-left: 150px;
}
    .thired-sec {
    width: 80%;
    padding-left: 150px;
    padding-right: 150px;
    margin-top: 100px;
}
    .services {
    margin-bottom: 100px;
    margin-top: 100px;
    padding-left: 323px;
}
    .fifth-sec {
    padding-left: 150px;
    padding-right: 150px;
    margin-top: 100px;
}
    .sixth-sec {
    padding-left: 150px;
    padding-right: 150px;
    margin-top: 100px;
}
    .Eighth-sec {
    margin-bottom: 100px;
    padding-left: 150px;
    margin-top: 100px;
}
    .seventh-sec {
    margin-top: 100px;
}
    .footer-inner {
    padding-bottom: 100px;
    padding-right: 150px;
    padding-left: 150px;
    padding-top: 250px;
}
    .Footer-up {
    min-height: 546px;}
    
    .F-bottom-text {
    top: 360px;
    position: absolute;
}
    .col-md-12.signup {
    top: 440px;
}
    .loop-txt{
    font-size: 32px;
    line-height: 42px;
    }
    .f2-img {
    max-width: 60%;
}
 
    .move-3 {
    position: absolute;
    top: -100px;
    right: 0px;
}

.blog-txt-sec {
    width: 65%;
    margin-bottom: 50px;
}
    .top-head-1{
        font-size: 32px;
        line-height: 42px;
    }
    
.M-A{
    width: auto;
    height: auto;
}
    .M-B{
    width: auto;
    height: auto;
}
    .M-C{
    width: auto;
    height: auto;
}
    .M-D{
    width: auto;
    height: auto;
}
   .F-3 {
    margin-top: 31px;
}
    .F-1 {
    margin-top: 250px;
}
    .F-4 {
    position: relative;
    top: -50px;
}
    .C-data {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 32px;
    line-height: 43px;
    text-align: center;
    color: #232323;
}
    .event-name {
    font-size: 16px;
    line-height: 20px;
    }
    
    .signup-area {
    padding-left: 100px;
}
    .S-1 {
    margin-bottom: 20px;
    }
    .S-1{
        font-size: 32px;
        line-height: 42px;
    }
    h1.top-heading.V-text{
        font-size: 32px;
        line-height: 42px;
    }
    .top-head{
        font-size: 32px;
        line-height: 42px;   
    }
    .text{
      font-size: 52px;
      line-height: 62px;  
    }
}

/*1280 view*/
@media only screen and (max-width: 1300px) and (min-width: 1200px){
sidenav .closebtn {
    text-align: end;
    font-weight: 800;
    position: absolute;
    top: 54px;
    right: 200px;
    font-size: 16px;
    margin-left: 50px;
}
    .menu {
     padding: 8px 8px 8px 70px;}
    
    .sidenav a {
    width: 100%;
    padding: 0px 8px 0px 70px;
    }
    .G-spc {
    margin-left: 85px;
}
    .F-1 {
    margin-top: 293px;
}
    
  .M-A{
    width: auto;
    height: auto;
}
    .M-B{
    width: auto;
    height: auto;
}
    .M-C{
    width: auto;
    height: auto;
}
    .M-{
    width: auto;
    height: auto;
}
    .top-head-1 {
    font-family: 'monument_extendedultrabold';
    font-style: normal;
    font-weight: 800;
    font-size: 44px;
    line-height: 55px;
    }
}

/*1366 view*/
@media only screen and (max-width: 1400px) and (min-width: 1301px){
   
    .menu {
    padding: 8px 8px 8px 80px;}
    
    .sidenav a {
    width: 100%;
    padding: 0px 8px 0px 80px;
    }
    
    .sidenav .closebtn {
    text-align: end;
    font-weight: 800;
    position: absolute;
    top: 51px;
    right: 187px;
    font-size: 16px;
    margin-left: 50px;
}
  
    .top-head-1 {
    font-family: 'monument_extendedultrabold';
    font-style: normal;
    font-weight: 800;
    font-size: 47px;
    line-height: 57px;
    color: #232323;
}
}

/*1366 view*/
@media only screen and (max-width: 1600px) and (min-width: 1450px){
   
}

/*1920 view*/
@media only screen and (max-width: 1950px) and (min-width: 1900px){
 
    .sidenav .closebtn {
    text-align: end;
    font-weight: 800;
    position: absolute;
    top: 56px;
    right: 182px;
    font-size: 16px;
    margin-left: 50px;
}
    .menu {
   padding: 8px 8px 8px 95px;
    }
    .sidenav a {
    width: 100%;
    padding: 0px 8px 0px 96px;
    }
    
    .F-4 {
    position: relative;
    top: 0px;
}
 
    .G-spc {
    margin-left: 90px;
}
  
 
    .main-sec {
    margin-top: 600px;
}
 
    .M-A {
    width: auto;
    height: auto;}
    
   .M-B{
    width: auto;
    height: auto;}
    
    .M-C{
    width: auto;
    height: auto;}
    
    .M-D{
    width: auto;
    height: auto;}
    
    .Eighth-sec {
    margin-bottom: 250px;
    }
}


/*1536 view*/
@media only screen and (max-width: 1550px) and (min-width: 1501px){
 
    .sidenav .closebtn {
    text-align: end;
    font-weight: 800;
    position: absolute;
    top: 55px;
    right: 182px;
    font-size: 16px;
    margin-left: 50px;
}
    .menu {
     padding: 8px 8px 8px 87px;
}
    .sidenav a {
    width: 100%;
    padding: 0px 8px 0px 90px;
    }
 
}


/*1440 VIEW */
@media only screen and (max-width: 1450px) and (min-width: 1401px){
 
.sidenav .closebtn {
    text-align: end;
    font-weight: 800;
    position: absolute;
    top: 52px;
    right: 187px;
    font-size: 16px;
    margin-left: 76px;
    }
    .menu{
        margin-bottom: 20px;
        padding: 8px 8px 8px 87px;
    }
    .sidenav a{
       padding: 8px 8px 8px 90px; 
    }
}


@media only screen and (max-width: 10000px) and (min-width: 1921px){
body .container-fluid{
    max-width: 1600px;
     margin: 0 auto;}
    
body .container{
 max-width: 1200px;
 margin: 0 auto;}
    
.carousel-caption {
  right: 0%;
  left: 40%;}
    
.top-image {
    margin-top: -100px !important;
}
    
}



`

export const baseCss = `
html{overflow-x: hidden;scroll-behavior: smooth;}
body{position: relative;font-family: 'Source Sans Pro', sans-serif;}


body h1,body h2,body h3,body h4,body h5,body h6{color:#000000;font-family: 'Source Sans Pro', sans-serif;}
body .l-18{color:#000000;font-family: "Roboto-Regular";font-size:18px;line-height:31px;}
body .l-16{color:#000000;font-family: "Roboto-Regular";font-size:16px;line-height:27px;}
body .row {    margin: 0;}
body .container {width:100%; max-width:1200px;}
body h1 { font-size: 62px;}
body h2 {font-size: 50px;}
h5.l-22{color:#000000;font-family: "Roboto-Regular";font-size:22px;margin: 0;}
.l-22{color:#000000;font-family: "Roboto-Regular";font-size:22px;margin: 0;}


body h1,body h2,body h3,body h4,body h5,body h6{color:#000000;font-family: 'Source Sans Pro', sans-serif;}

.error-404 {
	text-align: center;
	margin-top: 5em;
	font-family: 'Source Sans Pro', sans-serif !important;
}

.error-404-text {
    font-size: 200px;
    font-weight: bold;
    color:#000000;
}  

label {
	display: block;
	color: #000000;
	font-family: 'Source Sans Pro', sans-serif;
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
	color: #000000;
	text-decoration: none;
	font-family: 'Source Sans Pro', sans-serif;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
	clear: both;
	color: #000000;
	text-decoration: none;
	font-family: 'Source Sans Pro', sans-serif;
}

p {
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #000000;
}

input,
optgroup,
select,
textarea {
	color: #000000;
	font-family: 'Source Sans Pro', sans-serif;
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
	color: #000000;
	background-color: #e1e1e1;
	border: 1px solid #e1e1e1;
	font-family: 'Source Sans Pro', sans-serif;
}

.wp-block-media-text {
	font-size: 13px;
	line-height: 1.42857143;
	word-break: break-all;
	word-wrap: break-word;
	color: #000000;
	font-family: 'Source Sans Pro', sans-serif;
}

figure.wp-block-pullquote {
	border-left: none;
	border-top: 4px solid;
	border-bottom: 4px solid;
	margin: 20px 0;
	padding: 3em 0;
	color: #000000;
}
.wp-block-pullquote {
	padding: 3em 0;
	margin-left: 0;
	margin-right: 0;
	text-align: center;
	font-family: 'Source Sans Pro', sans-serif;
	color: #000000;
}
table,
.wp-block-table {
	width: 100%;
	min-width: 240px;
	border-collapse: collapse;
	color: #000000;
}

table thead,
table tfoot,
.wp-block-table thead,
.wp-block-table tfoot {
	text-align: center;
}

table th,
.wp-block-table th {
	font-family: 'Source Sans Pro', sans-serif;
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
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #000000;
}
ol {
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #000000;
}

.site .button,.qtyminus,.qtyplus, button:not(.Join-button), input[type=submit], input[type=reset], .wp-block-search .wp-block-search__button, .wp-block-button .wp-block-button__link, .wp-block-file a.wp-block-file__button {
    margin-top: 50px;
    background-color: transparent;
    padding: 17px 29px;
    font-family: 'monument_extendedultrabold';
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: #232323;
    border: 2px solid #232323;
	border-radius: 0;
}
.site .button:hover,.qtyminus:hover,.qtyplus:hover, button:not(.Join-button):hover, input[type=submit]:hover, input[type=reset]:hover, .wp-block-search .wp-block-search__button:hover, .wp-block-button .wp-block-button__link:hover, .wp-block-file a.wp-block-file__button:hover {
    background-color: #232323;
    color: #fff;
}

#add_to_cart_product,.product-form__cart-submit, .shopify-payment-button .shopify-payment-button__button--unbranded {
   margin-top: 5px !important;
    background-color: transparent !important;
    padding: 17px 29px !important;
    font-family: 'monument_extendedultrabold'!important;
    font-style: normal !important;
    font-weight: 800 !important;
    font-size: 13px !important;
    line-height: 16px !important;
    letter-spacing: 0.05em !important;
    color: #232323 !important;
    border: 2px solid #232323 !important;
	border-radius: 0 !important;
}
#add_to_cart_product:hover,.shopify-payment-button__button--unbranded:hover:not([disabled]){
    background-color: #232323 !important;
    color: #fff !important;
}
.product-form__cart-submit:hover > span, #add_to_cart_product:hover > span {
  color: #fff !important;
}

body span {
    color:#232323;
  }
  
  .other-page .navbar{
  background:#232323;
  padding-bottom: 44px;
    margin-bottom: 44px;
  }
  
  .announcement-text span{
  color: #ffffff;
  }
  .other-page .announcement-text span{
    margin-top:-44px !important;
  }
  .navbar .search-bar__input {
    color:#ffffff !important;
    border: 1px solid #ffffff !important;
  }
  .navbar .icon-search,.navbar .search-form__input,.navbar .search-bar__input::placeholder {
    color:#ffffff !important;
  }
  .navbar svg{
  color:#ffffff !important;
  }
  
  .site-header__cart-count span {
  color:#232323 !important;
  font-weight: 800;
  }
  .site-header__cart-count {
    background:#ffffff !important;
    opacity:1;
    border:0.1px solid #232323 !important;
  }
  .search-form__connected-submit {
      border:1px solid #232323 !important;
  }
       
  .qtyminus,.qtyplus {
    width: 15%;
      padding: revert;
  }
  .other-page label {
    position:unset;
    color:#232323;
  }
  .site-title {
    display:flex;
    color: #ffffff;
  }
  
  .site-title-a,.site-title-a:hover {
  color: #ffffff;
  }
  .site-description {
  color: #ffffff;
  margin-left: 10px;
  }
  
  input[type="radio"]:checked + label:not(.color-view-product) {
    background-color: #232323 !important;
    color: #ffffff !important;
    border: 2px solid #232323 !important;    
  }
  
  .InputGroup label,input, textarea, select, .disclosure__toggle  {
    border: 2px solid #232323 !important;    
    font-weight: 800 !important;
    font-size: 13px !important;
  }

p {
    margin-top: 0;
    margin-bottom: 0px;
}
.rotate {
  animation: rotation 8s infinite linear;
}

/*navbar css*/
.menu-spc {
    margin-top: 100px;
}
.sidenav {
    height: 100%; 
    width: 0;
    position: fixed; 
    z-index: 9999; 
    top: 0;
    left: 0;
    background-color: #96F26F;; 
    overflow-x: hidden;
    padding-top: 60px; 
    transition: 0.5s; 
}
    .menu{
     font-family: 'Source Sans Pro', sans-serif;
     font-style: normal;
     font-weight: bold;
    font-size: 9px;
    line-height: 11px;
    color: #000000;    
    padding: 8px 8px 8px 50px;   
    }
    
.sidenav a {
    width: 100%;
    padding: 0px 8px 0px 50px;
    text-decoration: none;
    font-size: 16px;
    font-family: 'monument_extendedultrabold';
    color: #656565;
    display: block;
    transition: 0.3s
}
img.rotate.img-responsive.s-img {
    width: 80px;
}
.sidenav .closebtn {
    text-align: end;
    font-weight: 800;
    position: absolute;
    top: 51px;
    right: 239px;
    font-size: 16px;
    margin-left: 50px;
}

.sidenav a:hover, .offcanvas a:focus{
    color: #000;
}

#main {
    transition: margin-left .5s;
    padding: 20px;
}
    .hamburger-menu .ic_menu span{
        background-color: transparent;
    }
    
    div#mySidenav {
    padding-top: 94px;
}

.hamburger-menu .ic_menu {
   padding: 0px !important; 
   width:  42px!important; 
   height: 42px !important;
}
img.logo.img-fluid {
    margin-left: 44px;
}
navbar a{
    font-size: 16px;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    padding: 10px;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    border-radius:2px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor:pointer;
    margin: 4px;
}
navbar a:hover, navbar a:active, navbar a{
    text-decoration: none;
    color: rgba(0,0,0,0.0.0);
}
navbar a:hover{
    background: rgba(0,0,0,0.0);
}
navbar a:active{
    color: rgba(0,0,0,0.9);
    background: rgba(0,0,0,0.0);
}
navbar a{
    color: #5bc0de;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    float: right;
}

/*Shadow*/
navbar .paper-shadow-bottom-z-2 {
    box-shadow: 0 8px 17px 0 rgba(0,0,0,.2);
}

/*Setting Up Navbar Layouts*/
navbar .navbar-inverse{
    color: #000;
    background: #fff;
    border:none;
    min-height: 50px;
    max-height: 50px;
    height: 50px;
}
navbar .container-fluid{
    position: absolute;
    top:0; bottom: 0;
    right:0;
    left:0;
}
navbar .navbar-body{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    height: 100%;
    position: relative;
}
navbar div.navbar-end{
    align-items: flex-start;
    -webkit-align-items: flex-start;
}
navbar div.navbar-start,
navbar div.navbar-end{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: end;
}
navbar div.navbar-start .logo{
   
}
.sl-nav {
  display: inline;
}


.sl-nav ul {
  margin:0;
  padding:0;
  list-style: none;
  position: relative;
  display: inline-block;
}
.sl-nav li {
  cursor: pointer;
  padding-bottom:10px;
}
.sl-nav li ul {
  display: none;
}
.sl-nav li ul:hover{
    display: block;
}
.sl-nav li:hover ul {
  position: absolute;
  top:29px;
  right:-15px;
  display: block;
  background: #fff;
  width: 120px;
  padding-top: 0px;
  z-index: 1;
  border-radius:5px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
}
.sl-nav li:hover .triangle {
  position: absolute;
  top: 15px;
  right: -10px;
  z-index:10;
  height: 14px;
  overflow:hidden;
  width: 30px;
  background: transparent;
}
.sl-nav li:hover .triangle:after {
  content: '';
  display: block;
  z-index: 20;
  width: 15px;
  transform: rotate(45deg) translateY(0px) translatex(10px);
  height: 15px;
  background: #fff;
  border-radius:2px 0px 0px 0px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
}
.sl-nav li ul li {
  position: relative;
  text-align: left;
  background: transparent;
  padding: 15px 15px;
  z-index: 2;
  font-size: 15px;
  color: #232323;
}
.bg-img {
    background-image: url(${assetsUrl}/templates/gym/Images/Images/2x/Banner%20Image.jpg);
    min-height: 990px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.inner-nav {
    width: 100%;
    padding-left: 78px;
    margin-top: 44px;
    padding-right: 120px;
}

.L-font{
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 13px;
color: #FFFFFF;   
}

.fa-angle-down:before {
    content: "\\f107";
    color: #fff;
}
.top-text {
    position: absolute;
    top: 330px;
}
.top-image {
   margin-top:-100px;
}
.inner-image{
    padding-left: 224px;
    padding-right: 221px;
}
.top-head{
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 52px;
line-height: 62px;
letter-spacing: 0.05em;
color: #FFFFFF;
}

.top-paragraph{
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #FFFFFF;   
}

button.Join-button{
margin-top: 40px;    
background-color: transparent;
padding: 17px 29px;    
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 13px;
line-height: 16px;
letter-spacing: 0.05em;
color: #96F26F;
border: 2px solid #FFFFFF;    
}



button.Join-button:hover{
background-color: #96F26F; 
color: #fff;
border: 2px solid transparent;    
}
.text {
    font-family: 'monument_extendedultrabold';
    white-space: nowrap;
    font-size: 72px;
    color: white;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #96F26F;
    }

/*Rotated text*/
#circle { width: 100%; padding-bottom: 100%; overflow: hidden; }

#circle text { font-family: 'monument_extendedregular'; font-size: 16px; font-weight: bold; }

#circle svg {

  -webkit-animation-name: rotate;
     -moz-animation-name: rotate;
      -ms-animation-name: rotate;
       -o-animation-name: rotate;
          animation-name: rotate;
  -webkit-animation-duration: 5s;
     -moz-animation-duration: 5s;
      -ms-animation-duration: 5s;
       -o-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
       -o-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
       -o-animation-timing-function: linear;
          animation-timing-function: linear;

}

.svg01 {
  font-size: 15.5px;    
  width:120px;
  fill: #fff;
}

.svg02{
  font-size: 15.5px;     
  width:120px;
  fill: #232323;
}
.svg04{
  font-size: 15.5px;     
  width:80px;
  fill: #fff;
}

/*Second-sec*/
.main-sec{
    margin-top: 150px;
}
.move-4 {
    right: 70%;
    position: absolute;
    top: 78%;
    z-index: 99;
}

.About-sec{
    padding-left: 224px;
    padding-right: 221px;
}
.inner-about{
    padding-left: 250px;
}

.sub-head{
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 16px;
color: #656565;   
}

.top-head-1{
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 52px;
line-height: 62px;
color: #232323;  
}

.top-paragraph-1{
margin-top: 6px;    
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #232323;
}
.border-d{
      padding-left: 15px;
      border-left: 2px solid #232323;  
    }
.move-bit {
    margin-top: 22px;
    margin-left: 80px;
}

.Join-button-1{
 margin-top: 50px;    
background-color: transparent;
padding: 17px 29px;    
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 13px;
line-height: 16px;
letter-spacing: 0.05em;
color: #232323;
border: 2px solid #232323;    
}

.Join-button-1:hover{
 background-color: #232323;
 color: #fff;    
}
.line {
	position:relative;}

.line:after {
	content:" ";
	position:absolute;
	top:50%;
	height:2px;
	width:40px;
	border-top:1px solid  #232323;
	background:rgba(0,0,0,0.2);
}
.line:after {
	left:auto;
	width:40px;
	margin:0 0 0 6px;}

.second-sec{
    margin-top: 100px;
    margin-left: 473px;}

button:focus {
    outline: 1px dotted;
    outline: transparent;
}
.thired-sec{
    width: 60%;
    padding-left: 224px;
    padding-right: 221px;
    margin-top: 100px;
}

.services {
    margin-bottom: 100px;
    margin-top: 60px;
    padding-left: 473px;
}

.spx{
    width: 91%;
}
.S-1{
    margin-bottom: 50px;
    font-family: 'monument_extendedultrabold';
    font-size: 52px;
    color: white;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #232323;  
}

.S-1:hover{
  color: white;
    -webkit-text-fill-color: #96F26F;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #96F26F;  
}

/*vedio sec*/
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
.img-vedio {
    padding: 0px;
    border-radius: 20px;
    background-image: url(${assetsUrl}/templates/gym/Images/Images/2x/Image_03.jpg);
    min-height: 750px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.top-text-1 {
    position: relative;
    top: 239px;
}
pan#hom {
    z-index: 999;
    border: 2px solid #fff;
    width: 80px;
    border-radius: 50px;
    background-color: #D58F76;
    padding: 25px;
    height: 80px;
}
.overlay span {
    filter: drop-shadow(0px 0px 10px rgba(150, 242, 111, 0.7)), drop-shadow(0px 0px 20px rgba(150, 242, 111, 0.25)), drop-shadow(0px 0px 10px rgba(150, 242, 111, 0.25));
    z-index: 999;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    border: 2px solid #96F26F;
    padding: 30px;
    border-radius: 50px;
    height: 70px;
    width: 70px;
}

.V-subtitle{
margin-bottom: 12px;    
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 16px;
color: #FFFFFF;   
}

h1.top-heading.V-text{
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 52px;
line-height: 62px;
text-align: center;
color: #FFFFFF;   
}

img.popup.image_on {
    position: absolute;
    left: 25px;
    top: 23px;
}
span.G-spc img {
    max-width: 22px;
}

/*Team sec*/
.fifth-sec {
    padding-left: 223px;
    padding-right: 128px;
    margin-top: 150px;
}

.top-paragraph-2{
margin-top: 6px;    
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
color: #232323;
}

.move-bit-1{
    margin-top: 22px;
    margin-left: 40px;
}

.img-text{
    margin-top: 22px;
}
.Team-name{
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.05em;
color: #232323;   
}

.Team-P{
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 9px;
line-height: 11px;
color: #232323;  
}

.F-1 {
    margin-top: 350px;
}
.F-4 {
    position: relative;
    top: -30px;
}

.F-3{
    margin-top: 68px;
}
.text-sec{
    padding-left: 63px;
    margin-top: 259px;
}
.text-area{
    padding-left: 27px;
}
/*Gallery sec*/
.sixth-sec {
    position: relative;
    padding-left: 196px;
    padding-right: 196px;
    margin-top: 114px;
}
.G-Spc{
    margin-top: 50px;
}

.text-blk{
    padding: 0px;
    margin-top: 102px;
}

.seventh-sec{
    margin-top: 150px;
}
section#Nine{
   position: relative;
}

.C-data{
font-family: 'Source Sans Pro', sans-serif;
font-style: italic;
font-weight: normal;
font-size: 42px;
line-height: 53px;
text-align: center;
color: #232323;}

.C-name{
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 22px;
line-height: 26px;
text-align: center;
letter-spacing: 0.05em;   
}

.C-profession{
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #232323
}

.test-details {
    margin-top: 46px;
}

.owl-dots{
    margin-top: 50px !important;
}

.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    background: #96F26F !important;
    height: 8px;
    width: 8px;
}
.owl-theme .owl-dots .owl-dot span {
    width: 4px;
    height: 4px;
    margin: 5px 7px;
    background: #D6D6D6;
    display: block;
    -webkit-backface-visibility: visible;
    transition: opacity .2s ease;
}
.Eighth-sec{
    margin-bottom: 150px;
    padding-left: 126px;
    margin-top: 150px;
    height: fit-content;
}

.blog-txt-sec{
 padding-left: 96px;   
}

section#seven{
    margin-bottom: 150px;
}
.Footer-up{
    min-height: 646px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-image: url(${assetsUrl}/templates/gym/Images/Images/2x/Image_20.jpg);
}

.F-top-text {
    top: 85px;
    position: absolute;
}

.F-bottom-text{
    top: 406px;
    position: absolute;
}
.find-txt{
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
color: #96F26F;
}

.loop-txt{
font-family: 'monument_extendedregular';
font-style: normal;
font-weight: 800;
font-size: 52px;
line-height: 62px;
letter-spacing: 0.05em;
color: #96F26F;
}
.signup-area{
    padding-left: 223px;
}
.f2-img {
    max-width: 55%;
    position: absolute;
    top: -19%;
    left: 49%;
}

.f1-img {
    top: -6%;
    position: absolute;
}
.bottom-images {
    left: -54%;
    position: relative;
    top: 85%;
}

.footer-inner{
    background: #F2F2F2;
    padding-bottom: 100px;
    padding-right: 223px;
    padding-left: 223px;
    padding-top: 300px;
}

li.F-nav{
line-height: 26px;    
padding-bottom: 5px;    
 list-style: none;
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 16px;
color: #656565;
}

li.F-nav:hover{
 color: #232323;   
}

li.Faq-nav:hover{
 color: #232323;      
}

li.Faq-nav{
padding-bottom: 10px;        
list-style: none;    
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 28px;
color: #656565;   
}
.social_icon {
    margin-top: 68px;
}

p.Know-T{
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.05em;
color: #232323;
text-shadow: 3px 3px 0px rgba(150, 242, 111, 0.7);
}

p.copuright-txt{
margin-top: 50px;    
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 16px;
color: #3C3C3C;
}
.footer-log{
    padding: 0px;
    margin-bottom: 68px;
}
p.social-txt{
margin-bottom: 20px;    
    
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.05em;
color: #232323;
}
.socil-iconss{
    margin-top: 20px;
}
.so-icons{
    padding-right: 30px;
}

.c-color{
 color: #3C3C3C;   
}

.s-color{
    color: #232323;
}

a.s-color.pointer:hover{
 color: #96F26F;   
}

.pointer {cursor: pointer;}

a.c-color.pointer:hover{
    text-decoration: none;
    color: #232323;
}

.border-sqr.not-V {
    filter: drop-shadow(5px 5px 0px rgba(150, 242, 111, 0.7));
}

.col-md-12.signup {
    top: 523px;
}
.input-field {
  position: relative;
  width: 288px;
  height: 44px;
  line-height: 44px;
}
label {
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #d3d3d3;
  transition: 0.2s all;
  cursor: text;
}
input {
  background-color: transparent;    
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #fff;
  box-shadow: none;
  color: #111;
}
input:invalid {
  outline: 0;
  /* // color: #ff2300; */
  /* //   border-color: #ff2300; */
}


.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: left;
  }

.blog-txt-sec{
    width: 40%;
    margin-bottom: 50px;
}
.event-data {
    margin-top: 22px;
    width: 90%;
    padding: 0px;
}

.event-date{
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
color: #232323;  
}

.event-name{
margin-top: 6px;    
font-family: 'monument_extendedultrabold';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 22px;
letter-spacing: 0.05em;
color: #232323;   
}
.web-view{display: block;}
.mob-view{display: none;}

.G-spcs{
    padding-left: 50px;
}
.owl-carousel .owl-item img {
    margin-bottom: 18px;
    display: initial;
    width: auto;
}
.full-width.seventh-sec{
 padding-left: 224px;
 padding-right: 224px;    
}

/*Text hover effect*/

span-1{
    line-height: 62px;
    margin-bottom: 50px;
    font-family: 'monument_extendedultrabold';
    font-size: 52px;
    cursor: pointer;
  -webkit-text-stroke-width: 0.02em;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  -webkit-transition: background-size 0.60s cubic-bezier(0.67, 0.01, 0.15, 0.98);
  transition: background-size 0.60s cubic-bezier(0.67, 0.01, 0.15, 0.98);
}


.left {
  background-image: -webkit-gradient(linear, left top, right top, from(#96f26f), color-stop(50%, #96f26f), color-stop(50.1%, transparent));
  background-image: linear-gradient(90deg, #96f26f 0%, #96f26f 50%, transparent 50.1%);
  background-size: 0% 100%;
}
.left:hover {
 -webkit-text-stroke-color: #96f26f;
  background-size: 200% 100%;
}

/*End*/
.find-txt-1{
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #fff !important;
}



.mobile-slid{display: none;}
.Web-slid{display: block;}

.navbar{
    padding: 0px;
}
.l-spcc {
    padding-right: 50px !important;
}
.left-sp{
    margin-left: 15px;
}
section#Nine {
    top: 100px;
    position: relative;
}
.owl-carousel {
    margin-top: 40px;
}

span.S-one {
    border: 1px solid #000;
    margin-right: 10px;
    padding: 10px;
}
span.S-two{
 border: 1px solid #000;
    margin-left: 10px;
    padding: 10px;   
}

.arrows {
    margin-bottom: 100px;
    text-align: end;
    margin-top: -100px;
}
.move-2 {
    left: -135px;
    position: absolute;
    top: -150px;
}
.move-3 {
    position: absolute;
    top: -95px;
    right: 64px;
}
.left-sp {
    margin-left: -0px;
}

.move-1 {
    top: -70px;
    position: absolute;
    right: -25px;
    z-index: 999;
}
.hamburger-menu {
    cursor: pointer;
    padding: 0px; 
    margin: 0px;
}


.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: auto;
    right: 319px;
}
   .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 254px;
    left: auto;
}
    .swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 21%;
    padding: 10px;
    width: auto;
    height: auto;    
    }
    
    .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    content: '';}
    
   .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: '';} 
    
    .S-one {
    border: 1px solid #000;
    margin-right: 10px;
    }
    
    .S-two {
    border: 1px solid #000;
    margin-right: 10px;
    }
`
export const style = `
  <style>
    ${`@media {background: red;}` + baseCss}
  </style>
  `

export const html = `
<div class="bg-img" id="home">
    <div class="container-fluid">
    <!-- header-nav -->
    <navbar>
        <div class="navbar nav">
            <div class="inner-nav">
                <div class="v-flex">
                    <div class="navbar-body">
                        <div class="navbar-start">
                            <div class="hamburger-menu">
                                <div class="ic_menu"> <span onclick="openNav()"><img class="img-fluid"src="${assetsUrl}/templates/gym/Images/Icon/SVG/Menu_White.svg"></span>
                                </div>
                            </div>
                            <div id="mySidenav" class="sidenav">
                                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
                                    <img src="${assetsUrl}/templates/gym/Images/Icon/SVG/close.svg">
                                </a>
                                <div class="menu-spc ss-nav-ul">
                                <p class="menu">MENU</p>
                                <!-- header-ul -->
                                <a class="ss-nav-item" href=#one>HOME</a>
                                <a class="ss-nav-item" href="#two">ABOUT US</a>
                                <a class="ss-nav-item" href="#five">TRAINERS</a>
                                <a class="ss-nav-item" href="#six">GALLERY</a>
                                <a class="ss-nav-item" href="#seven">TESTIMONIAL</a>
                                <a class="ss-nav-item" href="#Eight">BLOG</a>
                                <a class="ss-nav-item" href="#Nine">CONTACT US</a>
                                <!-- End-header-ul -->
                                </div>
                                <div class="join-btn"> <a href="#join" style="color: #000;padding-top: 100px;">JOIN NOW</a> 
                                </div>
                            </div>
                            <!-- web-header-logo -->
                            <a class="navbar-brand" href="#">
                                <img class="logo img-fluid" src="${assetsUrl}/templates/gym/Images/Icon/SVG/Logo_White.svg">
                            </a>
                            <!-- End-web-header-logo -->
                        </div>
                        <!-- Show Announcement -->
                        <div class="navbar-end">
                            <div class="sl-nav">
                                <ul>
                                    <li><b class="L-font">USA</b>  <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        <div class="triangle"></div>
                                        <ul>
                                            <li><span class="active">Deutsch</span>
                                            </li>
                                            <li><span class="">Englisch</span>
                                            </li>
                                            <li><span class="">Français</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        <!-- Show Topbar -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </navbar>
    <!-- End-header-nav -->
    </div>
</div>

<div class="container">
<div class="row top-text">
    <div class="col-lg-12 col-md-12 mb-12 Web-space p-0" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <h1 class="top-head">KEEP YOUR BODY <br><span-1 class="text left">FIT & STRONG</span-1></h1>
        <div class="col-lg-5 col-mb-6 mb-12 p-0">
            <p class="top-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue.</p>
        </div>
        <div class="col-lg-12 col-mb-12 mb-12 p-0">
            <a class="book-btn" href="#">
                <button class="Join-button">JOIN NOW</button>
            </a>
        </div>
    </div>
</div>
</div>



<div class="container top-image">
    <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
    <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_01.jpg">
        <div class="move-1">
    <img class="rotate img-responsive" src="${assetsUrl}/templates/gym/Images/move-img-white.png">
</div>
    </div>
    </div>
    
</div>

<div class="container-fluid main-sec p-0">
    <!-------------------------------------Section-1------------------------------------->
    <section id="one">
        <div class="row About-sec">
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" class="col-md-10 col-lg-10 mb-12 inner-about">
                <p class="sub-head line">About Us</p>
                <p class="top-head-1">TIME TO TRANSFORM</p>
                <p class="top-paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue. Vestibulum sed tortor eu enim sodales interdum vitae nec dolor. Nulla tincidunt eros eu ex convallis luctus. Etiam posuere ac mi a vulputate. Cras</p>
                <div class="move-bit">
                    <p class="top-paragraph-1 border-d">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue. Vestibulum sed tortor eu enim sodales interdum vitae nec dolor. Nulla tincidunt eros eu ex convallis luctus. Etiam posuere ac mi a vulputate. Cras</p>
                    <div class="col-lg-12 col-md-12 mb-12 p-0">
                        <a class="book-btn" href="#">
                            <button class="Join-button-1 left-sp">JOIN NOW</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-1----------------------------------->
    <!-------------------------------------Section-2------------------------------------->
    <section id="two">
   <div class="col-md-12 second-sec">
            <div class="move-2">
            <div id="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
                    <defs>
                        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                        <use xlink:href="#circlePath" fill="none" />
                        <text fill="#000">
                            <textPath xlink:href="#circlePath" class="svg02">KEEP YOUR BODY KEEP YOUR BODY KEEP YOUR </textPath>
                        </text>
                    </g>
                </svg>
            </div>
        </div>
            <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_02.jpg">
        </div>
    </section>
    <!------------------------------------- /Section-2----------------------------------->
    <!------------------------------------- Section-3----------------------------------->
    <section id="three">
        <div class="row">
        <div class="col-lg-8 col-md-8 mb-12 thired-sec" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <p class="sub-head line">Our Services</p>
            <p class="top-head-1 ">TIME TO TRANSFORM</p>
            <p class="top-paragraph-1 spx">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue.</p>
        </div>
        <div class="col-md-12 services">
            <p class="S-1 pointer">
                <span-1 class="left">FITNESS</span-1>
            </p>
            <p class="S-1 pointer">
                <span-1 class="left">BODYBUILDING</span-1>
            </p>
            <p class="S-1 pointer">
                <span-1 class="left">CROSSFIT</span-1>
            </p>
            <p class="S-1 pointer">
                <span-1 class="left">STRENGTH ZONE</span-1>
            </p>
            <p class="S-1 pointer">
                <span-1 class="left">CARDIO</span-1>
            </p>
            <p class="S-1 pointer">
                <span-1 class="left">SPA & SONA</span-1>
            </p>
            <p class="S-1 pointer">
                <span-1 class="left">Nutrition</span-1>
            </p>
            </div></div>
    </section>
    <!------------------------------------- /Section-3----------------------------------->
    <!------------------------------------- Section-4----------------------------------->
    <section id="four">
        <div class="fourt-sec">
            <div class="row text-center vedio-main">
                <div class="col-lg-12 col-md-12 mb-12 img-vedio">
                    <div class="top-text-1 text-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 mb-12">
                                <p class="V-subtitle">More than just a gym</p>
                                <h1 class="top-heading V-text">WE TRAIN WITH <br>PASSSION</h1> 
                            </div>
                        </div>
                    </div>
                    <a class="popup-youtube" id="videoId" href="https://www.youtube.com/embed/pBFQdxA-apI">
                        <div class="overlay"> <span id="hom"><img class="popup image_on"alt="#" src="${assetsUrl}/templates/gym/Images/Icon/SVG/Play_Green.svg"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-4----------------------------------->
    <!------------------------------------- Section-5----------------------------------->
    <section id="five">
        <div class="row fifth-sec">
            <div class="col-lg-7 col-md-7 mb-12 Web-slid">
                <div class="row">
                    <div class="col-lg-5 col-md-5 mb-12 F-1 l-spcc p-0">
                        <img class="img-fluid M-A box" alt="#" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_05.jpg">
                        <div class="img-text">
                            <h5 class="Team-name">David Richards</h5>
                            <p class="Team-P">Aerobics Instructor</p>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7 mb-12 F-2 p-0">
                        <img class="img-fluid M-B box" alt="#" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_04.jpg">
                        <div class="img-text">
                            <h5 class="Team-name">Marion Miller</h5>
                            <p class="Team-P">Marion Miller</p>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7 mb-12 F-3 l-spcc p-0">
                        <img class="img-fluid M-B box" alt="#" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_06.jpg">
                        <div class="img-text">
                            <h5 class="Team-name">Marion Miller</h5>
                            <p class="Team-P">Diet Instructor</p>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5 mb-12 F-4 p-0">
                        <img class="img-fluid M-A box" alt="#" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_07.jpg">
                        <div class="img-text">
                            <h5 class="Team-name">David Richards</h5>
                            <p class="Team-P">Aerobics Instructor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-7 mb-12 mobile-slid">
                <div class="row">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/mobi-slider-1.jpg">
                                <div class="img-text">
                                    <h5 class="Team-name">David Richards</h5>
                                    <p class="Team-P">Aerobics Instructor</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/mobi-slider-2.jpg">
                                <div class="img-text">
                                    <h5 class="Team-name">David Richards</h5>
                                    <p class="Team-P">Aerobics Instructor</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/mobi-slider-3.jpg">
                                <div class="img-text">
                                    <h5 class="Team-name">David Richards</h5>
                                    <p class="Team-P">Aerobics Instructor</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/mobi-slider-4.jpg">
                                <div class="img-text">
                                    <h5 class="Team-name">David Richards</h5>
                                    <p class="Team-P">Aerobics Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-5 mb-12 text-sec" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                <p class="sub-head line">Our Trainers</p>
                <p class="top-head-1 ">TEAM OF EXPERT COACHES</p>
                <p class="top-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue.</p>
                <div class="move-bit-1">
                    <p class="top-paragraph-2 border-d" style="font-style: italic;font-weight: 600;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue.</p>
                    <div class="col-lg-12 col-md-12 mb-12 p-0">
                        <a class="book-btn" href="#">
                            <button class="Join-button-1 left-sp">JOIN NOW</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-5----------------------------------->
    <!------------------------------------- Section-6----------------------------------->
    <section id="six">
        <div class="row sixth-sec">
            <div class="col-lg-5 col-md-5 mb-12 text-blk ">
                <div class="text-area" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <p class="sub-head line">Gallery</p>
                    <p class="top-head-1 ">TIME TO
                        <br>TRANSFORM</p>
                    <p class="top-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis sapien quis imperdiet. Duis at tempus massa. Duis nec turpis sit amet velit varius congue.</p>
                </div>
                <img class="img-fluid G-Spc" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_09.jpg">
                <img class="img-fluid G-Spc" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_11.jpg">
                <img class="img-fluid G-Spc" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_13.jpg">
            </div>
            <div class="col-lg-7 col-md-7 mb-12 G-spcs">
                <img class="img-fluid G-Spc" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_08.jpg">
                <img class="img-fluid G-Spc" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_10.jpg">
                <img class="img-fluid G-Spc" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_12.jpg">
            </div>
            <div class="move-3">
                <div id="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
                        <defs>
                            <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                        </defs>
                        <circle cx="150" cy="100" r="75" fill="none" />
                        <g>
                            <use xlink:href="#circlePath" fill="none" />
                            <text fill="#000">
                                <textPath xlink:href="#circlePath" class="svg02">KEEP YOUR BODY KEEP YOUR BODY KEEP YOUR </textPath>
                            </text>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-6----------------------------------->
    <!------------------------------------- Section-7----------------------------------->
    <section id="seven">
        <div class="full-width seventh-sec">
            <div class="col-md-12 text-center p-0">
                <div class="quotes">
                    <img class="Q-img" src="${assetsUrl}/templates/gym/Images/Icon/SVG/Quotes.svg">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-lg-12 mb-12 p-0">
                    <div id="testimonial" class="owl-carousel owl-theme">
                        <div class="item">
                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                            <div class="test-details">
                                <div class="text-center Avtar">
                                    <img class="img-fluid " src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg">
                                </div>
                                <p class="C-name">Marion Miller</p>
                                <p class="C-profession">Diet Instructor</p>
                            </div>
                        </div>
                        <div class="item">
                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                            <div class="test-details">
                                <div class="text-center Avtar">
                                    <img class="img-fluid " src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg">
                                </div>
                                <p class="C-name">Marion Miller</p>
                                <p class="C-profession">Diet Instructor</p>
                            </div>
                        </div>
                        <div class="item">
                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                            <div class="test-details">
                                <div class="text-center Avtar">
                                    <img class="img-fluid " src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg">
                                </div>
                                <p class="C-name">Marion Miller</p>
                                <p class="C-profession">Diet Instructor</p>
                            </div>
                        </div>
                        <div class="item">
                            <p class="C-data">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                            <div class="test-details">
                                <div class="text-center Avtar">
                                    <img class="img-fluid " src="${assetsUrl}/templates/gym/Images/Images/1x/Avtar.jpg">
                                </div>
                                <p class="C-name">Marion Miller</p>
                                <p class="C-profession">Diet Instructor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-7----------------------------------->
    <!------------------------------------- Section-8----------------------------------->
    <section id="Eight">
        <div class="col-lg-12 col-md-12 mb-12 Eighth-sec">
            <div class="col-md-6 blog-txt-sec" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <p class="sub-head line">Our Blog</p>
                <p class="top-head-1">TIME TO
                    <br>TRANSFORM</p>
                <p class="top-paragraph-1 spx">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lobortis.</p>
            </div>
           
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_14.jpg">
                        <div class="col-md-12 event-data">
                            <p class="event-date">19 Aug 2020</p>
                            <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_15.jpg">
                        <div class="col-md-12 event-data">
                            <p class="event-date">19 Aug 2020</p>
                            <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_16.jpg">
                        <div class="col-md-12 event-data">
                            <p class="event-date">19 Aug 2020</p>
                            <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_14.jpg">
                        <div class="col-md-12 event-data">
                            <p class="event-date">19 Aug 2020</p>
                            <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_15.jpg">
                        <div class="col-md-12 event-data">
                            <p class="event-date">19 Aug 2020</p>
                            <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img class="img-fluid" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_16.jpg">
                        <div class="col-md-12 event-data">
                            <p class="event-date">19 Aug 2020</p>
                            <p class="event-name">10 TIPS HOW TO PREPARE MEALS FAST AND EASY.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="arrow-cont">
            <div class="swiper-button-prev S-one"><img class="img-fluid"src="${assetsUrl}/templates/gym/Images/Icon/SVG/Arrow_Left_Active.svg"></div>
        <div class="swiper-button-next S-two"><img class="img-fluid"src="${assetsUrl}/templates/gym/Images/Icon/SVG/Arrow_Right_Active.svg"></div>
        </div></div>
    </section>
    <!------------------------------------- /Section-8----------------------------------->
    <!------------------------------------- Section-9----------------------------------->
    <section id="Nine">
        <div class="row Ninth-sec Footer-up">
            <div class="col-lg-8 col-md-8 mb-12 signup-area">
                <div class="F-top-text">
                    <p class="find-txt"><span class="find-txt-1">Find out first about our </span>launches, exclusive
                        <br>offers <span class="find-txt-1">and </span>private pop-ups.</p>
                </div>
                <div class="F-bottom-text" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <p class="loop-txt">Stay in the loop</p>
                </div>
                <div class="col-md-12 signup">
                    <form action="">
                        <div class="input-field">
                            <input type="text">
                            <label for="name">Sign up for latest offers<span class="G-spc"><img src="${assetsUrl}/templates/gym/Images/Icon/2x/send%201.png"></span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 mb-12">
                <div class="row top-images">
                    <div class="col-md-6 f1-img">
                        <div class="move-4">
            <img class="rotate img-responsive s-img" src="${assetsUrl}/templates/gym/Images/move-img-white.png">
        </div>
                        <img class="img-fluid border-sqr not-V" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_17.jpg">
                    </div>
                    <div class="col-md-6 f2-img">
                        <img class="img-fluid border-sqr not-V" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_18.jpg">
                    </div>
                </div>
                <div class="col-md-12 bottom-images">
                    <img class="img-fluid f2-img border-sqr not-V" src="${assetsUrl}/templates/gym/Images/Images/2x/Image_19.jpg">
                </div>
            </div>
        </div>
    </section>
    <!------------------------------------- /Section-9----------------------------------->
    <!--Footer Section-->
    <footer id="section-nine" class="footer-outer">
        <div class="row footer-inner">
            <div class="col-md-12 footer-log">
                <a href="#">
                    <img alt="#" src="${assetsUrl}/templates/gym/Images/Icon/SVG/Logo_Dark.svg">
                </a>
            </div>
            <div class="col-lg-6 col-md-6 mb-12 p-0">
                <p class="Know-T">Want to be
                    <br>the first to know?</p>
                <div class="web-view">
                    <div class="social_icon ss-social-ul">
                        <p class="social-txt">Follow us on social:</p> 
                        <!-- social-ul -->
                        <span class="so-icons ss-social-li"><a class="s-color ss-social-item pointer"href="#"><i class="fa fa-facebook" style="font-size:20px"></i></a></span>
                        <span class="so-icons ss-social-li"><a class="s-color ss-social-item pointer"href="#"><i class="fa fa-twitter" style="font-size:20px"></i></a></span>
                        <span class="so-icons ss-social-li"><a class="s-color ss-social-item pointer"href="#"><i class="fa fa-instagram" style="font-size:20px"></i></a></span>
                        <span class="ss-social-li"><a class="s-color ss-social-item pointer"href="#"><i class="fa fa-youtube-play" style="font-size:20px"></i></a></span> 
                        <!-- End-social-ul -->
                    </div>
                    <p class="copuright-txt">SiteSeed © 2020 All rights reserved.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 mb-6 L-1 p-0">
                <!-- footer-ul -->
                <ul class="Footer-nav ss-footer-ul">
                    <li class="F-nav ss-footer-li"><a class="c-color ss-footer-item pointer" href="#" style="color: #232323">Home</a></li>
                    <li class="F-nav ss-footer-li"><a class="c-color ss-footer-item pointer" href="#two">About Us</a></li>
                    <li class="F-nav ss-footer-li"><a class="c-color ss-footer-item pointer" href="#five">Trainers</a></li>
                    <li class="F-nav ss-footer-li"><a class="c-color ss-footer-item pointer" class="c-color" href="#six">Gallery</a></li>
                    <li class="F-nav ss-footer-li"><a class="c-color ss-footer-item pointer" href="#seven">Testimonial</a></li>
                    <li class="F-nav ss-footer-li"><a class="c-color ss-footer-item pointer" href="#Eight">Blog</a></li>
                </ul>
				<!-- End-footer-ul -->
            </div>
            <div class="col-lg-3 col-md-3 mb-6 L-1 p-0">
                <ul class="Footer-faq">
                    <li class="Faq-nav"><a class="c-color pointer" href="#" style="color: #232323">FAQ</a>
                    </li>
                    <li class="Faq-nav"><a class="c-color pointer" href="#">Privacy Policy</a>
                    </li>
                    <li class="Faq-nav"><a class="c-color pointer" href="#">Virtual Experience</a>
                    </li>
                    <li class="Faq-nav"><a class="c-color pointer" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div class="mob-view">
                <div class="social_icon">
                    <p class="social-txt">Follow us on social:</p>
                    <!-- mob-social-ul -->
                    <span class="so-icons"><a class="s-color pointer"href="#"><i class="fa fa-facebook" style="font-size:20px"></i></a></span>
                    <span class="so-icons"><a class="s-color pointer"href="#"><i class="fa fa-twitter" style="font-size:20px"></i></a></span>
                    <span class="so-icons"><a class="s-color pointer"href="#"><i class="fa fa-instagram" style="font-size:20px"></i></a></span>
                    <span><a class="s-color pointer"href="#"><i class="fa fa-youtube-play" style="font-size:20px"></i></a></span> 
                    <!-- End-mob-social-ul -->
                </div>
                <p class="copuright-txt">SiteSeed © 2020 All rights reserved.</p>
            </div>
        </div>
    </footer>
    <!--End Footer section-->
</div>

<!-- Bootstrap core JavaScript -->
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
<script>
	AOS.init();
</script>
<!-- Initialize Swiper -->
    
<script>
$(document).ready(function() {
    console.log('sss.p swiper wow...');
    var slides;
    if (screen.width <= 600 ){
        slides = 1.3;
    }
    else
    {
        slides = 3.5;
    }
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: slides,
        spaceBetween: 30,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
});
</script>
    
<script>
	$(document).ready(function() {

$('.owl-carousel').owlCarousel({
   autoplay:true,
    loop:true,
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
	function openNav() {
	    document.getElementById("mySidenav").style.width = "325px";
	}
	function closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	}
</script>
`
//   ===================================================

export const pageData = [
    {
        components: html,
        style: baseCss,
        customCss: customCss,
        name: "Home",
        homePage: false,
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