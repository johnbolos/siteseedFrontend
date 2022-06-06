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
@-webkit-keyframes zoomeffect{
		0%{
			background-position:center;
		  transform:scale(1,1);
		}
		50%{
			background-position:center;
		  transform:scale(1.2,1.2);
		}
		100%{
			background-position:center;
		  transform:scale(1,1);
		}
}
@keyframes zoomeffect{
		0%{
			background-position:center;
		  transform:scale(1,1);
		}
		50%{
			background-position:center;
		  transform:scale(1.2,1.2);
		}
		100%{
			background-position:center;
		  transform:scale(1,1);
		}
}
@keyframes mymove {
  from {right: 0px;}
  to {right: 13.020vw;}
}
@media only screen and (max-width: 991px) and (min-width: 0px){
.mobil-space{
padding-left: 0.9765vw;
padding-right: 0.9765vw;
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
    
.content2 ul.navbar-nav.ml-auto {
padding-left: 1.3020vw;
margin-top: 6.510vw;
width: 100%;
display: flex;
flex-direction: column;
top: 6.510vw;
background: linear-gradient(180deg, #F1A7F1 0%, #FAD0C4 100%);
height: 100vh;
}
.content2 {
z-index: 2;
width: 100%;
position: absolute;
display: flex;
flex-direction: column;
top: 6.575vw;
height: -webkit-fill-available;
transition: top .5s;
transition: left .5s;
padding: 3.255vw 0vw;
}

 
    
li.active.tabs.cool-link {padding-bottom:0.455vw;}
    
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@media (min-width:0px) and (max-width:767px){
    li.nav-item {
    padding-right: 0px;
}
    img.img-responsive.img-1 {
    height: auto;
    }
    input::-webkit-input-placeholder {
margin-bottom: 20px;    
color: #333333;    
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
}
 .web-view-collage {
    display: none;
}
    h1.Footer-head.aos-init.aos-animate {
    margin-bottom: 30px;
}
    .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show>.nav-link{
        border-bottom: 2px solid transparent;
    }
   
 .mobile-view-collage {
    display: block;
}  
    img.img-responsive.bg-img-sm {
    opacity: .5;     
    position: absolute;
    top: 36%;
    z-index: 99;
}
    img.img-responsive.bg-img-sm-1 {
    opacity: .5;    
    position: absolute;
    top: 22%;
}
   .top-bg-sm-1{display: block;} 
/**************navbar*******************/    
.navbar-collapse.offcanvas-collapse.open {
transform: translateX(0%);
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
}
.navbar-dark .navbar-nav .nav-link {
    text-align: center;
    padding: 50px 0px;
    font-size: 22px;
    line-height: 22px;
    color: #333333 !important;
}
  
 nav#myHeader {
    padding: 50px 0px 0px 0px;
}
.navbar-collapse.offcanvas-collapse {
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
transform: translateX(100%);
z-index: 9999;
}

.offcanvas-collapse.open {
z-index: 999;
top: 0;
right: 0;
visibility: visible;
}

.offcanvas-collapse {
position: fixed;
top: 3.645vw;
bottom: 0;
right: 0;
width: 70.247vw;
padding-right: 0px;
padding-left: 0px;
overflow-y: auto;
visibility: hidden;
background-color: #1A1A1A;
top: 0;
}
img.img-fluid.logo {
    padding-left: 25px;
    width: 150px;
}
 .icon-bars, .icon-bars:before, .icon-bars:after{width: 50px;}
    
 .container-fluid.nav-container {
    padding: 0px;
}
    
    .content2{
        margin-top: 250px;
        font-size: 22px;
        line-height: 22px;
    } 
    button.menu-toggle {
    padding-right: 25px;
}
/**************end-navbar*******************/ 
    
 
/**************footer*******************/
    h1.home-head{
     font-size: 32px;
    line-height: 32px;   
    }
    .custom-sec7 {
    margin-top: 50px;
}
 body .container {
    width: 100%;
    max-width: 100%;
    padding: 0;
    padding: 0px 25px;
}
    p.home-para{
     margin-top: 10px;    
     font-size: 13px;
     line-height: 22px;   
    }
  .prod-slider-container {
    margin-top: 50px;
    padding-left: 25px;
    padding-right: 25px;
 }
   img.img-responsive.footer-logo {
    margin-top: 100px;   
    width: 180px;
}
    p.Footer-para{
     width: 100%;    
     font-size: 13px;
     line-height: 22px;   
    }
    p.Follow-text {
    margin-bottom: 20px;    
    margin-top: 50px;
    font-size: 16px;
    line-height: 16px;
   }
   img.shows {
    width: 18px;
    margin-right:30px;
} 
    h1.Footer-head{
        font-size: 32px;
        line-height: 32px;} 
    
  .check-txt {
    font-size: 13px;
    line-height: 17.5px;
 }
 label:before {
    width: 18px;
    height: 18px;
}
label{padding-left: 30px;}  
.btn {
    margin-top: 50px;
    border: 1px solid #333333;
    padding: 17px 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #333333;
    border-radius: 0;
}
  p.copyright-text{
     font-size: 11px;
     line-height: 15px;   
  } 
   .custom-sec9 {
    margin-top: 100px;
    margin-bottom: 50px;
} 
.form-group {
    margin-top: 20px;
    margin-bottom: 0px;
}
 .mobile-flex {
    display: flex;
    flex-direction: column-reverse;
}
    
/**************end-footer*******************/
    
 .R-block {padding: 0px;}
 .L-block {padding: 0px;}  
    
/**************Text-css*******************/    
    
.blog-data-lg {
    margin-bottom: 50px; 
    margin-top: 20px;
    width: 80%;
}
p.B-sub-head-lg{
 font-size: 11px;
line-height: 15px;}
    
p.B-head-lg{
    margin-top: 20px;
    font-size: 32px;
    line-height: 32px;
}
.custom-sec6{
    margin-top: 0px;
    }
 p.B-para-lg{
  margin-top: 6px;     
  font-size: 13px;
  line-height: 24px;
}
 img.img-responsive.img-1 {
    width: 100%;
}
 p.B-sub-head-sm{
  font-size: 11px;
  line-height: 15px;      
 }   
  p.B-head-sm{
  margin-top: 20px;      
  font-size: 18px;
  line-height: 22px;      
 }
 .top-space-blog {
    margin-top: 20px; 
    margin-bottom: 50px;
}   
    p.B-para-sm{
     margin-top: 20px;
     font-size: 18px;
     line-height: 18px;    
    }    
    p.B-para-sm{
        margin-top: 6px;
        font-size: 13px;
       line-height: 24px;
    }
   .custom-sec4 img.img-responsive.T-img-3 {
    width: 80px;
    position: absolute;
    top: 93%;
    right: 11%;
}
/**************Text-css-end*******************/    
/**************checkbox-css*******************/     
    
    input:checked + label:after {
   width: 10px;}
    
    label:after {
    top: 8px;
    left: 4px;
    }
 
/**************end-checkbox-cssr*******************/
   
.slider-card {
    height: auto;
    position: initial;
    background: linear-gradient(180deg, #F1A7F1 0%, #FAD0C4 100%);
    width: 95%;
    padding: 100px 25px;
    top: -6.510vw;
}    
section.custom-sec5 {
    margin-top: 100px;
}
    
.custom-sec4 {
    position: relative;
    margin-top: 0;
}
img.rotate{display: none;}    
 .top-text {
    position: relative;
    top: 0;
    left: 0;
} 
    
img.img-responsive.T-img-1 {
    padding-left: 6.705vw;
    width: 79.778vw;
}
.custom-sec2 {
    position: relative;
    margin-top: 100px;
}
 img.img-responsive.T-img-3 {
    width: 80px;
    position: absolute;
    top: 48%;
    right: 3%;
    }
    
 img.img-responsive.T-img-2 {
    top: 10.161vw;
    right: 0px;
    position: absolute;
    width: 69.072vw;
    z-index: -99;
}
    img.img-responsive.T-img-1 {
    padding-left: 0;
    width: 74.778vw;
}

    .img-collage{margin-top: 50px;} 
    
    .custom-sec3 {
    position: relative;
    padding-top: 50px;
    margin-top: 100px;
}
       
    
}



@media (min-width:768px) and (max-width:991px){
  
/**************I-PAD-VIEW*******************/    
/**************navbar*******************/    
.navbar-collapse.offcanvas-collapse.open {
transform: translateX(0%);
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
}
    img.img-responsive.img-1 {
    height: auto;
    width: 46.744vw;
}
    li.nav-item {
    padding-right: 0px;
}
    .content2 ul.navbar-nav.ml-auto {
    width: 700px;
    padding-left: 1.3020vw;
    margin-top: -10.49vw;
    margin: 0 auto;
}
    .content2 ul.navbar-nav.ml-auto {
    padding-left: 1.3020vw;
    margin-top: -10.49vw;
    }
.navbar-dark .navbar-nav .nav-link {
    text-align: center;
    padding: 50px 0px;
    font-size: 22px;
    line-height: 22px;
    color: #333333 !important;
}
  
 nav#myHeader {
    padding: 50px 0px 0px 0px;
}
.navbar-collapse.offcanvas-collapse {
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
transform: translateX(100%);
z-index: 9999;
}

.offcanvas-collapse.open {
z-index: 999;
top: 0;
right: 0;
visibility: visible;
}

.offcanvas-collapse {
position: fixed;
top: 3.645vw;
bottom: 0;
right: 0;
width: 70.247vw;
padding-right: 0px;
padding-left: 0px;
overflow-y: auto;
visibility: hidden;
background-color: #1A1A1A;
top: 0;
}
img.img-fluid.logo {
    padding-left: 3.90625vw;
    width: 150px;
}
      button.menu-toggle {
    padding-right: 3.90625vw;
}
    
 .icon-bars, .icon-bars:before, .icon-bars:after{width: 50px;}
    
 .container-fluid.nav-container {
    padding: 0px;
}
    
    .content2{
        margin-top: 250px;
        font-size: 22px;
        line-height: 22px;
    }
    /**************end-navbar*******************/
    
    /****************font-sizes*****************/
    
    h1.home-head {
    font-size: 32px;
    line-height: 32px;
}
 p.home-para {
    margin-top: 10px;
    font-size: 13px;
    line-height: 22px;
}
    p.B-sub-head-lg {
    font-size: 11px;
    line-height: 15px;
}
    .blog-data-lg {
    margin-bottom: 20px;
    margin-top: 20px;
    width: 100%;
}
    p.B-sub-head-sm {
    font-size: 11px;
    line-height: 15px;
}
    .top-space-blog {
    margin-top: 20px;
    margin-bottom: 20px;
}
    p.B-head-sm {
    margin-top: 20px;
    font-size: 18px;
    line-height: 22px;
}
    p.B-para-sm {
    margin-top: 6px;
    font-size: 13px;
    line-height: 24px;
}
    .blog-data-sm{
        width: 100%;
    }
    p.B-head-lg {
    margin-top: 20px;
    font-size: 20px;
    line-height: 22px;
}
    p.B-para-lg {
    margin-top: 6px;
    font-size: 13px;
    line-height: 24px;
}
    h1.home-head {
    font-size: 32px;
    line-height: 32px;
}
    p.home-para {
    margin-top: 10px;
    font-size: 13px;
    line-height: 22px;
}
    h1.Footer-head.aos-init.aos-animate {
    margin-bottom: 30px;
}
    p.Footer-para {
    width: 80%;
    font-size: 13px;
    line-height: 22px;
}
    p.copyright-text {
    font-size: 11px;
    line-height: 15px;
}
    p.Follow-text {
    margin-bottom: 20px;
    margin-top: 50px;
    font-size: 16px;
    line-height: 16px;
}
 /*placeholder*/
input::-webkit-input-placeholder {
margin-bottom: 20px;    
color: #333333;    
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size:  16px;
line-height: 16px;
}
    
 .btn {
    font-size: 16px;
    line-height: 16px;
    color: #333333;
    }   
   .check-txt {
    font-size: 13px;
    line-height: 17.5px;
}
    label {
    padding-left: 30px;
    }
    label:before {
    width: 20px;
    height: 20px;
    }
}



/**************I-PAD-VIEW*******************/

/********************************* /Media-queries*******************************/

`

export const baseCss = `
/********************************* CSS********************************/
html{overflow-x: hidden;}
body{position: relative;overflow: auto;}
body p h1 h1 h3 h4 h5 h6 span col a{font-family: 'anglecia_pro_dspregular';margin: 0px;}
body{font-family: 'anglecia_pro_dspregular';color: #333333;background-color: #ffffff;overflow-x: hidden;}
body .row {margin: 0;}
body .container {width:100%; max-width:78.125vw; padding: 0;}
body .container-fluid{padding: 0px;}
.img-responsive{width: 100%;max-width: 100%;}
p {margin: 0px;}
a:hover {color: #0056b3;text-decoration: none;}
h1, h2, h3, h4, h5, h6{margin: 0px;}
b, strong {font-weight: 800;}
:focus {
    outline: -webkit-focus-ring-color auto 0px;
}

.top-bg-4 {
    position: relative;
}

/***********************zoom-in-animation*******************/

.navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show>.nav-link{
        border-bottom: 2px solid #f1a7f1;
    }

    img.rotate:hover {
animation: none;
}
.navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show>.nav-link {
    border-bottom: 2px solid #f1a7f100;
}

    .frame{
   -webkit-animation: zoomeffect 5s infinite;
   -moz-animation: zoomeffect 5s infinite;
   animation: zoomeffect 5s infinite;
}
/***********************-End-zoom-in-animation*******************/

/***********************NAVBAR********************/

button:focus {
    outline: 1px dotted;
    outline: 1px solid transparent;
}
    .hideshow{visibility: hidden;}
    
    nav#myHeader {
    padding:  3.90625vw 0vw 0vw 0vw ;}
    .menu-toggle {
    display: block;
    height:  2.604vw;
    padding: 0.976vw 0.78125vw;
    position: relative;
    z-index: 1;
    background-color: transparent;
    border: 0 none;
    cursor: pointer;
    font-family: 'anglecia_pro_dspregular';
    outline: medium none;
    overflow: visible;
    text-align: center;
    vertical-align: middle;
}
  
   .menu-toggle:focus .icon-bars, .menu-toggle:focus .icon-bars:before, .menu-toggle:focus .icon-bars:after, .menu-toggle:hover .icon-bars, .menu-toggle:hover .icon-bars:before, .menu-toggle:hover .icon-bars:after {
    background-color: #333333 !important;
}

.icon-bars, .icon-bars:before, .icon-bars:after {
    background-color: #333333 !important; 
}
.split-text{margin-top: 9.765vw;}

.menu-inner-text{
white-space: nowrap;
font-size: 12.369vw;
color: white;
-webkit-text-fill-color: transparent;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #B3B3B3;
font-family: 'roslindale_testingtextRg';    
}
.Right-text{text-align: right;}
.inner-mid-space{padding: 0px;}
.inner-sec-mobi {
    padding: 0px;
    text-align: right;
}
.POS-L{text-align: left;margin-left: 0.911vw;}
.POS-L1{text-align: left;margin-left:  7.8125vw;}
.slide-right h1 {
   animation: 2s slide-right;
   animation-delay: 2s;
}
ul.navbar-nav.ml-auto {
    height: 1.302vw;
}
.menu-toggle {
    display: block;
    height: 2.604vw;
    position: relative;
    z-index: 1;
    background-color: transparent;
    border: 0 none;
    cursor: pointer;
    font-family: 'anglecia_pro_dspregular';
    outline: medium none;
    overflow: visible;
    text-align: center;
    vertical-align: middle;  
}

.menu-toggle:before {
    content: attr(data-label);
    display: block;
    padding: 0.78125vw 0;
    position: absolute;
    right: 100%;
    top: 0;
    transition: color 0.2s ease 0s, opacity 0.3s ease 0s, visibility 0.3s ease 0s;
}

.menu--is-revealed .menu-toggle:before {
    opacity: 0;
    visibility: hidden;
}

.menu-toggle .icon-bars, 
.menu-toggle .icon-bars:before, 
.menu-toggle .icon-bars:after {
  transition: background-color 0.2s ease;
}
.menu-toggle:focus .icon-bars, 
.menu-toggle:focus .icon-bars:before, 
.menu-toggle:focus .icon-bars:after, 
.menu-toggle:hover .icon-bars, 
.menu-toggle:hover .icon-bars:before, 
.menu-toggle:hover .icon-bars:after {
  background-color: red;
}

.menu-toggle .icon-bars {
  transition: transform 0.3s ease-in, background-color 0.2s ease;
}
.menu-toggle .icon-bars:before, 
.menu-toggle .icon-bars:after {
  transition: top 0.3s 0.3s ease-in, transform 0.3s ease-in, background-color 0.2s ease;
}

.menu-toggle:active .icon-bars, 
.menu--is-revealed .menu-toggle .icon-bars {
  transition: transform 0.3s 0.2s ease-in, background-color 0.2s ease;
  transform: rotate3d(0, 0, 1, 135deg);
}
.menu-toggle:active .icon-bars:before, 
.menu-toggle:active .icon-bars:after, 
.menu--is-revealed .menu-toggle .icon-bars:before, 
.menu--is-revealed .menu-toggle .icon-bars:after {
  transition: top 0.2s ease-in, transform 0.3s 0.2s ease-in, background-color 0.2s ease;
  transform: rotate3d(0, 0, 1, 90deg);
  top: 0;
}

.icon-bars {
  position: relative;
}
.icon-bars, .icon-bars:before, .icon-bars:after {
  display: block;
  width: 2.9296875vw;
  height: 0.130vw;
  background-color: currentColor;
}
.icon-bars, .icon-bars:before, .icon-bars:after {
  background-color: #273138;
}
.icon-bars:before, .icon-bars:after {
  content: "";
  position: absolute;
  left: 0;
}
.icon-bars:before {
 display: none;
  top: 0.5em;
}
.icon-bars:after {
  top: -0.5em;
}

.content2 {
    justify-content: center;
    position: relative;
    /*animation: mymove 10s ;
    animation-delay: 10s; */

}

 
  ul.navbar-nav.ml-auto {
    width: 80%;  
    height: 1.302vw;
}
    li.nav-item {
    padding-right:13.020vw;
}
    .navbar-dark .navbar-nav .nav-link {
    font-size: 1.171vw;
    color: #333333 !important;
}
.nav-link{
    padding: 0px;}
        

.container-fluid.nav-container {
    padding: 0px 4.90625vw;
    z-index: 99999;
}
img.img-fluid.logo {
    width: 11.765vw;
}
/*********************************END NAVBAR********************************/

/*********************************TOP-SECTION********************************/

img.img-responsive.T-img-1 {
    padding-left: 6.705vw;
    width: 70.778vw;
}
img.img-responsive.T-img-2 {
    top: 6.161vw;
    right: 0px;
    position: absolute;
    width: 58.072vw;
    z-index: -99;
}
img.img-responsive.T-img-3 {
    width: 9.635vw;
    position: absolute;
    top: 64%;
    right: 4%;
}
.top-text {
    position: absolute;
    top: 14.518vw;
    left: 0px;
}
.rotate {
    animation: rotation 8s infinite linear;
    width: 9.114vw;
    position: absolute;
    top: 81%;
    left: 6.90625vw;
}
.custom-sec2{
    position: relative;
    margin-top: 6.510vw;
}

h1.home-head{
font-style: normal;
font-weight: normal;
font-size: 4.557vw;
line-height: 4.557vw;
color: #333333;
}

p.home-para{
margin-top: 0.781vw;    
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 1.041vw;
line-height: 1.5625vw;
color: #333333;
opacity: 0.7;
}
/*********************************END TOP-SECTION********************************/

/*********************************second-five-section********************************/
.custom-sec3 {
    position: relative;
    padding-top: 11.718vw;
    margin-top:  9.765vw;
}
section.custom-sec5 {
    position: relative;
    margin-top:  16.276vw;
}
img.img-responsive.img-1 {
    height: 120vh;
    width: 46.744vw;
}
img.img-responsive.img-2 {
    width: 100%;
}
img.img-responsive.img-3 {
    width: 100%;
}
img.img-responsive.img-4{
    width: 100%;
}
img.img-responsive.img-5{
   width: 100%;
}
.L-block{
  padding-left: 0px;    
  padding-right: 3.255vw;
}

.R-block{
  z-index: 99;    
  padding-right: 0px;    
  padding-left: 3.255vw;
}
.blog-data-lg{margin-top: 1.302vw; width: 80%;}
.blog-data-sm{margin-top: 1.302vw; width: 80%;}

.top-space-blog{margin-bottom: 3.255vw;}

p.B-sub-head-lg{
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.716vw;
line-height: 0.976vw;
color: #333333;
opacity: 0.7;   
}
p.B-head-lg{
margin-top: 1.432vw;    
font-style: normal;
font-weight: normal;
font-size: 2.734375vw;
line-height: 2.734375vw;
color: #333333;
}

p.B-para-lg{
margin-top: 0.390625vw;    
font-family: 'anglecia_pro_dspitalic';    
font-style: italic;
font-weight: normal;
font-size: 0.846vw;
line-height: 1.5625vw;
color: #333333;
opacity: 0.7;   
}
p.B-sub-head-sm{
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size:  0.716vw;
line-height: 0.976vw;
color: #333333;
opacity: 0.7;
}

p.B-head-sm{
margin-top: 1.432vw;    
font-style: normal;
font-weight: normal;
font-size: 1.432vw; 
line-height: 1.432vw; 
color: #333333;   
}
p.B-para-sm{
margin-top:0.390625vw;      
font-family: 'anglecia_pro_dspitalic';    
font-style: italic;
font-weight: normal;
font-size:  0.846vw;
line-height: 1.5625vw;
color: #333333;
opacity: 0.7;
}

/*********************************END second-five-section********************************/


/*********************************second-four********************************/
.slider-card {
    border: 0;
    height: 41.015vw;
    position: absolute;
    background: linear-gradient(180deg, #F1A7F1 0%, #FAD0C4 100%);
    width: 55.598vw;
    padding: 16.276vw 7.747vw 7.161vw 7.942vw;
    top: -6.510vw;
}
.custom-sec4{
    position: relative;
    margin-top: 16.276vw;
}
.custom-sec4 img.img-responsive.T-img-3 {
    width: 9.635vw;
    position: absolute;
    top: 90%;
    right: 11%;
}
/*********************************END second-four********************************/


/*********************************second-six********************************/
.custom-sec6{
    margin-top: 9.765vw;
}

/*********************************END second-six********************************/



/*********************************second-seven********************************/
.custom-sec7{
    margin-top:  9.765vw;
}
.prod-slider-container {
    margin-top: 6.510vw;
}
.crad.taners.T-bottom {
    margin-top: 6.510vw;
}
.crad.taners {
    padding-left: 1.976vw;
    padding-right: 1.976vw;
}

/*********************************END second-seven********************************/

/*********************************FOOTER********************************/
.custom-sec8{
    margin-top: 16.276vw;
}

.custom-sec9{
    margin-top: 8.59375vw;
    margin-bottom: 3.255vw;
}
img.img-responsive.footer-logo{
    width: 11.718vw;
}
input#emails {
    display: block;
    padding-bottom: 0.78125vw;
    width: 90%;
    border-bottom: 1px solid #333333 !important;
    border: 0;
    background-color: transparent;
}
input[type="checkbox" i] {
    display: none;
    height: 1.171875vw;
    position: absolute;
    width: 1.171875vw;
    border: 1px solid #1A1A1A;
    border-radius: 0;
}
.check-txt {
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.846vw;
line-height: 1.171875vw;
color: #333333;
opacity: 0.7;
}

label:before {
    width: 1.302vw;
    height:1.302vw;
    border: 0.13020833333333334vw solid #1A1A1A;
    top: 0;
    left: 0;
    border-radius: 0px;
}
label {
    position: relative;
    padding-left: 1.953vw;
    margin-bottom: 1.302vw;
    display: inline-block;
}
.success {
    border-color: #333333;
    color: #333333;
}
.success:hover{
    background-color: #333333;
    color: #ffffff;
}
.btn {
    margin-top:  4.557vw;
    border: 1px solid #333333;
    padding: 1.106vw 1.953125vw;
    font-style: normal;
    font-weight: normal;
    font-size: 1.041vw;
    line-height: 1.041vw;
    color: #333333;
    border-radius: 0;
}

p.Footer-para{
width: 51%;    
margin-top: 2.408vw;    
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.846vw;
line-height: 1.432vw;
color: #333333c7;
}

.social-data{margin-top:  1.953125vw;}

p.Follow-text{
margin-bottom:1.302vw;    
font-style: normal;
font-weight: normal;
font-size: 1.041vw;
line-height: 1.041vw;
color: #333333;
}

img.shows {
    width: 1.171875vw;
    margin-right: 1.953125vw;
}
span.S-icon{}

h1.Footer-head{
font-style: normal;
font-weight: normal;
font-size:  2.734375vw;
line-height:  2.734375vw;
color: #333333;
}

.email {
margin-top: 3.255vw;}

.form-group {
    margin-top: 1.302vw;
    margin-bottom: 0px;
}
p.copyright-text{
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.716vw;
line-height: 0.976vw;
color: #333333;
opacity: 0.7;
}
/*********************************END FOOTER********************************/

/*********************************CHKECBOX****************************/

label {
  position:relative;
  padding-left:1.953125vw;
  margin-bottom:1.302vw;
  display: inline-block;
}

label:before,
label:after {
  content:'';
  position:absolute;
}

label:before {
  width:1.302vw;
  height:1.302vw;
  border:2px solid #333333;
  top:0;
  left:0;
  border-radius:0px;
}

label:after {
  width:0px;
  height:0px;
  transition:width 0.2s;
  top:  0.390625vw;
  left: 0.260vw;
  transform:rotate(-45deg);
}

input:checked + label:after {
    border:1px solid #333333;
    border-width: 0 0 2px 2px;
    height:0.325vw;
    width:0.78125vw;
}
  p.site-text {
    text-align: center;
    font-size: 0.716vw;
    line-height: 0.865vw;
}
.check-txt{
    font-size: 0.846vw;
    line-height: 0.99609375vw;
}
/*********************************END CHKECBOX****************************/

/*placeholder css*/
:-ms-input-placeholder {
color: #333333;    
font-family: 'anglecia_pro_dspregular';
}

/*placeholder*/
input::-webkit-input-placeholder {
margin-bottom: 20px;    
color: #333333;    
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size:  1.0416666666666667vw;
line-height:  1.0416666666666667vw;
}

input:-moz-placeholder {
margin-bottom: 20px;     
color: #333333;   
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size:  1.0416666666666667vw;
line-height:  1.0416666666666667vw;
}

:-ms-input-placeholder {
margin-bottom: 20px;     
color: #333333;    
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size:  1.0416666666666667vw;
line-height:  1.0416666666666667vw;
}
:focus {
    outline: 1px solid transparent;
}
button:focus {
    outline: 1px solid transparent;
}

/*End placeholder css*/


.mobile-view-collage{display: none;}
.web-view-collage{display: block;}

/*****************Background-lines************************/

img.img-responsive.bg-img-1 {
    opacity: .5;
    top: 0;
    left: -18%;
    position: absolute;
    z-index: 9;
}    
img.img-responsive.bg-img-2 {
    opacity: .5;
    top: 25%;
    position: absolute;
}
    
 img.img-responsive.bg-img-3 {
    z-index: -99;
    opacity: .5;
    position: absolute;
    top: 34%;
}
 
 img.img-responsive.bg-img-5 {
    z-index: -99; 
    opacity: .5; 
    right: -20%;
    position: absolute;
    bottom: 0;
} 
.top-bg-sm-1{display: none;}
/****************************End lines***************************/

/********************************* CSS********************************/
`

export const style = `
  <style>
    ${`@media {background: red;}` + baseCss}
  </style>
  `

export const html = `
	<!-------------------------------------Outer-Main-div's------------------------------------->
	<div class="blog-main">
		<div class="blog-main-inner">
			<!-------------------------------------navbar-div------------------------------------->
			<div id="navbar_top" class="custom-sec1-main">
				<div class="container-nav custom-sec1">
					<nav class="navbar navbar-expand-lg navbar-dark" id="myHeader">
						<div class="container-fluid nav-container">
							<a href="./home.html"><img class="img-fluid logo" src="${assetsUrl}/templates/blog/images/Logo.png" / alt=""></a>
							<div class="navbar-collapse hideshow content2 w100 " id="navbarResponsive">
								<ul class="navbar-nav ml-auto ">
									<li class="nav-item"> <a class="nav-link animate__animated active" href="./home.html">Home</a>
									</li>
									<li class="nav-item"> <a class="nav-link animate__animated" href="./about.html">About</a>
									</li>
									<li class="nav-item"> <a class="nav-link animate__animated" href="./contact.html">Contact</a>
									</li>
								</ul>
							</div>
							<div id="menu-revealer" class="wrapper">
								<button data-label="" role="button" class="menu-toggle"> <span class="icon-bars"></span>
								</button>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<!------------------------------------- /navbar-div------------------------------------->
			<!-------------------------------------Section-2------------------------------------->

			<section class="custom-sec2 web-view-collage">
			<div class="top-bg"><img class="img-responsive bg-img-1" src="${assetsUrl}/templates/blog/images/bg-line.png"></div>    
			 <div class="container">
					<div class="row top-banner">
						<div class="col-lg-12 col-md-12 col-sm-12 p-0">
							<img class="img-responsive T-img-1" src="${assetsUrl}/templates/blog/images/home-top-bg-1.png" alt="">
							<img class="img-responsive T-img-2" src="${assetsUrl}/templates/blog/images/home-top-shape-bg.png" alt="">
							<img class="img-responsive T-img-3 frame " src="${assetsUrl}/templates/blog/images/home-top-shape-sm.png" alt="">
							<div class="top-text" data-aos="fade-right" data-aos-duration="2000">
								<h1 class="home-head">My Daily Travel Blog <br>To Inspire And Get You <br>Motivated!</h1>
								<div class="col-lg-8 col-md-8 mb-12 p-0">
									<p class="home-para">Hi! I'm <b>Paul Harrington</b> — an adventure travel photographer, professional blogger, and digital nomad.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img class="rotate" src="${assetsUrl}/templates/blog/images/rotate.png" alt="">
			</section>

			<section class="custom-sec2 mobile-view-collage">
				<div class="top-bg-sm"><img class="img-responsive bg-img-sm" src="${assetsUrl}/templates/blog/images/bg-line.png"></div>
				<div class="container">
					<div class="row top-banner">
						<div class="col-lg-12 col-md-12 col-sm-12 p-0 top-text p-0" data-aos="fade-right" data-aos-duration="2000">
								<h1 class="home-head">My Daily Travel Blog <br>To Inspire And Get You Motivated!</h1>
								<div class="col-lg-8 col-md-8 mb-12 p-0">
									<p class="home-para">Hi! I'm <b>Paul Harrington</b> — an adventure travel photographer, professional blogger, and digital nomad.</p>
								</div>
							</div>
						<div class="col-lg-12 col-md-12 col-sm-12 p-0 img-collage">
							<img class="img-responsive T-img-1" src="${assetsUrl}/templates/blog/images/home-top-bg-1.png" alt="">
							<img class="img-responsive T-img-2" src="${assetsUrl}/templates/blog/images/home-top-shape-bg.png" alt="">
							<img class="img-responsive T-img-3 frame " src="${assetsUrl}/templates/blog/images/home-top-shape-sm.png" alt="">

						</div>
					</div>
				</div>
				<img class="rotate" src="${assetsUrl}/templates/blog/images/rotate.png" alt="">
			</section>
			<!------------------------------------- /Section-2----------------------------------->
			<!------------------------------------- Section-3----------------------------------->
			<section class="custom-sec3">
				 <div class="top-bg-1"><img class="img-responsive bg-img-2" src="${assetsUrl}/templates/blog/images/bg-line.png"></div>
				<div class="container">
					<div class="row">
						<div class="col-lg-7 col-md-7 col-sm-12 L-block">
							<img class="img-responsive img-1" src="${assetsUrl}/templates/blog/images/home-img-1.png" alt="" data-aos="fade-right" data-aos-duration="2000">
							<div class="blog-data-lg" data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-lg">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-lg"><a style="color: #333333;"href="./blog-priview.html">We are a modern restaurant in the center of the city</a></p>
								<p class="B-para-lg">by Herman Mitchell</p>
							</div>
						</div>
						<div class="col-lg-5 col-md-5 col-sm-12 R-block">
							<div class="top-bg-sm-1"><img class="img-responsive bg-img-sm-1" src="${assetsUrl}/templates/blog/images/bg-line.png"></div>
							<img class="img-responsive img-2" src="${assetsUrl}/templates/blog/images/home-img-2.png" alt="" data-aos="fade-left" data-aos-duration="2000">
							<div class="blog-data-sm top-space-blog" data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</a></p>
						<p class="B-head-sm"><a style="color: #333333;"href="./blog-priview.html">We are a modern restaurant in the center of the city</a></p>
								<p class="B-para-sm">by Herman Mitchell</p>
							</div>
							<img class="img-responsive img-3" src="${assetsUrl}/templates/blog/images/home-img-3.png" alt="" data-aos="fade-left" data-aos-duration="2000">
							<div class="blog-data-sm top-space-blog" data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-sm"><a style="color: #333333;"href="./blog-priview.html">We are a modern restaurant in the center of the city</a></p>
								<p class="B-para-sm">by Herman Mitchell</p>
							</div>
							<img class="img-responsive img-4" src="${assetsUrl}/templates/blog/images/home-imge-4.png" alt="" data-aos="fade-left" data-aos-duration="2000">
							<div class="blog-data-sm top-space-blog" data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-sm"><a style="color: #333333;"href="./blog-priview.html">We are a modern restaurant in the center of the city</a></p>
								<p class="B-para-sm">by Herman Mitchell</p>
							</div>
							<img class="img-responsive img-5" src="${assetsUrl}/templates/blog/images/home-img-4.png" alt="" data-aos="fade-left" data-aos-duration="2000">
							<div class="blog-data-sm top-space-blog" data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-sm"><a style="color: #333333;"href="./blog-priview.html">We are a modern restaurant in the center of the city</a></p>
								<p class="B-para-sm">by Herman Mitchell</p>
							</div>
				</div></section>
					</div>
				</div>
			</section>
			<!------------------------------------- /Section-3----------------------------------->
			<!------------------------------------- Section-4----------------------------------->
			<section class="custom-sec4">
				<div class="container-fluid">
					<div class="row  custom-sec4-row2">
						<div class="col-lg-12 col-md-12 col-sm-12 p-0">
							<div class="slider-card">
								<h1 class="home-head">Love for the <br>writing is our best <br>strategy!
							</h1>
								<p class="home-para">Hi! I'm <b>Paul Harrington </b>— an adventure travel photographer, professional blogger, and digital nomad.</p>
							</div>
							<img class="img-responsive img-7" src="${assetsUrl}/templates/blog/images/home-img-6.png" alt="">
							<img class="img-responsive T-img-3 frame " src="${assetsUrl}/templates/blog/images/home-top-shape-sm.png" alt="">
						</div>
					</div>
				</div>
			</section>
			<!------------------------------------- /Section-4----------------------------------->
			<!------------------------------------- Section-5----------------------------------->
			<section  class="custom-sec5">
				<div class="container">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-12 L-block">
							<img class="img-responsive img-2" src="${assetsUrl}/templates/blog/images/home-img-7.png" alt="" data-aos="fade-right" data-aos-duration="2000">
							<div class="blog-data-sm top-space-blog" data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-sm"><a style="color: #333333;"href="./blog-priview.html">We are a modern restaurant in the center of the city</a></p>
								<p class="B-para-sm">by Herman Mitchell</p>
							</div>
							<img class="img-responsive img-3" src="${assetsUrl}/templates/blog/images/home-img-8.png" alt="" data-aos="fade-right" data-aos-duration="2000">
							<div class="blog-data-sm top-space-blog" data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-sm"><a style="color: #333333;"href="./blog-priview.html">We are a modern restaurant in the center of the city</a></p>
								<p class="B-para-sm">by Herman Mitchell</p>
							</div>
							<img class="img-responsive img-4" src="${assetsUrl}/templates/blog/images/home-img-9.png" alt="" data-aos="fade-right" data-aos-duration="2000">
							<div class="blog-data-sm top-space-blog" data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-sm"><a style="color: #333333;"href="./blog-priview.html">We are a modern restaurant in the center of the city</a></p>
								<p class="B-para-sm">by Herman Mitchell</p>
							</div>
							<img class="img-responsive img-5" src="${assetsUrl}/templates/blog/images/home-img-10.png" alt="" data-aos="fade-right" data-aos-duration="2000">
							<div class="blog-data-sm top-space-blog" data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-sm">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-sm"><a style="color: #333333;"href="./blog-priview.html">We are a modern restaurant in the center of the city</a></p>
								<p class="B-para-sm">by Herman Mitchell</p>
							</div>
						</div>
						<div class="col-lg-7 col-md-7 col-sm-12 R-block">
							<img class="img-responsive img-1" src="${assetsUrl}/templates/blog/images/home-img-11.png" alt=""data-aos="fade-left" data-aos-duration="2000">
							<div class="blog-data-lg"data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-lg">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-lg"><a style="color: #333333;"href="./blog-priview.html">We are a modern restaurant in the center of the city</a></p>
								<p class="B-para-lg">by Herman Mitchell</p>
							</div>
						</div>
					</div>
				</div>
				<div class="top-bg-2"><img class="img-responsive bg-img-3" src="${assetsUrl}/templates/blog/images/bg-line.png"></div>
			</section>
			<!------------------------------------- /Section-5----------------------------------->
			<!------------------------------------- Section-6----------------------------------->
			<section class="custom-sec6">
				<div class="container">
					<div class="row align-items-center custom-sec6-row1">
						<div class="col-lg-6 col-md-6 col-sm-12 L-block">
							<img class="img-responsive img-12" src="${assetsUrl}/templates/blog/images/home-img-12.png" alt="" data-aos="fade-right" data-aos-duration="2000">
							<div class="blog-data-lg"data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-lg">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-lg">We are a modern restaurant in the center of the city</p>
								<p class="B-para-lg">by Herman Mitchell</p>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-12 R-block">
							<img class="img-responsive img-13" src="${assetsUrl}/templates/blog/images/home-img-13.png" alt=""data-aos="fade-left" data-aos-duration="2000">
							<div class="blog-data-lg"data-aos="fade-up" data-aos-duration="2000">
								<p class="B-sub-head-lg">APR 11 • PHOTO, TRENDING</p>
								<p class="B-head-lg">We are a modern restaurant in the center of the city</p>
								<p class="B-para-lg">by Herman Mitchell</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!------------------------------------- /Section-6----------------------------------->
			<!------------------------------------- Section-7----------------------------------->
			<section class="custom-sec7">
				<div class="container">
					<div class="row align-items-center custom-sec7-row1">
						<div class="col-lg-12 col-md-12 col-sm-12 p-0" data-aos="fade-right" data-aos-duration="2000">
							<h1 class="home-head">Follow us on <br>Instagram @siteseed</h1>
							<div class="col-lg-5 col-md-5 col-sm-12 p-0">
								<p class="home-para">Hi! I'm <b>Paul Harrington</b> — an adventure travel photographer, professional blogger, and digital nomad.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="prod-slider-container">
					<div id="slider-new" class="owl-carousel">
						<div class="item">
							<div class="crad  taners T-bottom">
								<img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-1.png" alt="">
							</div>
						</div>
						<div class="item">
							<div class="crad  taners">
								<img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-2.png" alt="">
							</div>
						</div>
						<div class="item">
							<div class="crad  taners T-bottom">
								<img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-3.png" alt="">
							</div>
						</div>
						<div class="item">
							<div class="crad  taners">
								<img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-4.png" alt="">
							</div>
						</div>
						<div class="item">
							<div class="crad  taners T-bottom">
								<img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-5.png" alt="">
							</div>
						</div>
					</div>
				</div>
			</section>
			<!------------------------------------- /Section-7----------------------------------->
			<!------------------------------------- Section-8----------------------------------->
			<section class="custom-sec8">
				<div class="container">
					<div class="row  custom-sec8-row1 mobile-flex">
						<div class="col-lg-7 col-md-7 col-sm-12 p-0">
							<img class="img-responsive footer-logo" src="${assetsUrl}/templates/blog/images/Logo.png" alt="" data-aos="fade-down" data-aos-duration="2000">
							<p class="Footer-para"data-aos="fade-right" data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque in quam sollicitudin rhoncus vitae ac velit. Donec sed augue massa. Nam quis augue non lectus dignissim sollicitudin. Aliquam turpis massa, mollis a diam a, iaculis ultrices lorem.</p>
							<div class="social-data" >
								<p class="Follow-text">Follow us:</p> 

								<span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/facebook%20(9)%201.png" alt=""data-aos="fade-up"></span>

								<span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/twitter%20(4)%201.png" alt=""data-aos="fade-down"></span>

								<span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/instagram%20(4)%201.png" alt=""data-aos="fade-up"></span> 

								<span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/youtube%20(3)%201.png" alt=""data-aos="fade-down"></span> 
							</div>
						</div>
						<div class="col-lg-5 col-md-5 col-sm-12 p-0">
							<h1 class="Footer-head"data-aos="fade-down" data-aos-duration="2000">Get our <br>newsletter</h1>
							<div class="email">
								<input placeholder="Enter your email" type="email" id="emails" name="emails" multiple>
								<div class="form-group" data-aos="fade-left" data-aos-duration="2000">
									<input type="checkbox" id='check'>
									<label class="check-txt" for="check">By submitting this form, You agree to The Universal Music Group.
										<br><a href="#" style="color: #333333">Privacy Policy</a> and 

										<a href="#" style="color: #333333">Terms & Conditions.</a></label>
								</div>
								<button class="btn success">Submit</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!------------------------------------- Section-9----------------------------------->
			<section class="custom-sec9">
				<div class="container">
					<div class="row align-items-center custom-sec8-row1">
						<div class="col-lg-6 col-md-6 col-sm-12 p-0">
							<p class="copyright-text">© 2020 SITESEED. ALL RIGHTS RESERVED.</p>
						</div>
					</div>
				</div>
			</section>
			<!------------------------------------- /Section-9----------------------------------->
	<div class="top-bg-4"><img class="img-responsive bg-img-5" src="${assetsUrl}/templates/blog/images/bg-line.png"></div>
		</div>
	</div>
	<!-------------------------------------Outer-Main-div's------------------------------------->



	<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" type="text/javascript"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
	
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
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
	
	<!-----------Navbar------------->
	<script>
		$('.menu-toggle').on('click', function() {
		            $('#menu-revealer').toggleClass('menu--is-revealed');  
		            $('#navbarResponsive').toggleClass('hideshow');
		            $('#navbarResponsive ul li a.nav-link').toggleClass('animate__fadeInRight'); 
		         }); 
		         $('#datepicker').datepicker(); 
		         $('#datepicker1').datepicker(); 
			 
		         $(".navbar ul li.nav-item a" ).click( function(){
		            $('#navbarResponsive').toggleClass('hideshow');   
		            $('#menu-revealer').toggleClass('menu--is-revealed');
		            $('#navbarResponsive ul li a.nav-link').toggleClass('animate__fadeInRight'); 
		         });
	</script>
	<script>
		function openNav() {
		  document.getElementById("mySidenav").style.width = "250px";
		}

		function closeNav() {
		  document.getElementById("mySidenav").style.width = "0";
		}
	</script>
	<script>
    $(document).ready(function () {
        console.log('sss.p owl')
        $('#slider-new.owl-carousel').owlCarousel({
           stagePadding: 80,
           loop:true,
           nav:false,
           responsive:{
               0:{
                   items:1
               
               },
               600:{
                   items:2
               },
               1000:{
                   items:3
               }
           }
       })
    });
	</script>
`

//   ============================================================================================================================================================================================================
export const customCssAbout = `
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
@-webkit-keyframes zoomeffect{
        0%{
            background-position:center;
          transform:scale(1,1);
        }
        50%{
            background-position:center;
          transform:scale(1.2,1.2);
        }
        100%{
            background-position:center;
          transform:scale(1,1);
        }
}
@keyframes zoomeffect{
        0%{
            background-position:center;
          transform:scale(1,1);
        }
        50%{
            background-position:center;
          transform:scale(1.2,1.2);
        }
        100%{
            background-position:center;
          transform:scale(1,1);
        }
}
@keyframes mymove {
  from {right: 0px;}
  to {right: 13.020vw;}
}
/********************************* Media-queries*******************************/

@media only screen and (max-width: 991px) and (min-width: 0px){
.mobil-space{
padding-left: 0.9765vw;
padding-right: 0.9765vw;
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
    
.content2 ul.navbar-nav.ml-auto {
padding-left: 1.3020vw;
margin-top: 6.510vw;
width: 100%;
display: flex;
flex-direction: column;
top: 6.510vw;
background: linear-gradient(180deg, #F1A7F1 0%, #FAD0C4 100%);
height: 100vh;
}
.content2 {
z-index: 2;
width: 100%;
position: absolute;
display: flex;
flex-direction: column;
top: 6.575vw;
height: -webkit-fill-available;
transition: top .5s;
transition: left .5s;
padding: 3.255vw 0vw;
}

 
    
li.active.tabs.cool-link {padding-bottom:0.455vw;}
    
}


@media (min-width:0px) and (max-width:767px){
.web-view-collage {
    display: none;
}
     h1.home-para.blog-p {
    font-size: 32px;
    line-height:32px;
}
    p.home-para.blog-p{
        margin-top: 20px;
    }
    li.nav-item {
    padding-right: 0px;
}
   .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show>.nav-link{
        border-bottom: 2px solid transparent;
    }
 .mobile-view-collage {
    display: block;
}
    img.img-responsive.bg-img-1 {
    z-index: 99;
    right: -17%;
    position: absolute;
}
/**************navbar*******************/    
.navbar-collapse.offcanvas-collapse.open {
transform: translateX(0%);
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
}
.navbar-dark .navbar-nav .nav-link {
    text-align: center;
    padding: 50px 0px;
    font-size: 22px;
    line-height: 22px;
    color: #333333 !important;
}
  
 nav#myHeader {
    padding: 50px 0px 0px 0px;
}
.navbar-collapse.offcanvas-collapse {
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
transform: translateX(100%);
z-index: 9999;
}

.offcanvas-collapse.open {
z-index: 999;
top: 0;
/* / right: 0; / */
visibility: visible;
}

.offcanvas-collapse {
position: fixed;
top: 3.645vw;
bottom: 0;
right: 0;
width: 70.247vw;
padding-right: 0px;
padding-left: 0px;
overflow-y: auto;
visibility: hidden;
background-color: #1A1A1A;
top: 0;
}
img.img-fluid.logo {
    padding-left: 25px;
    width: 150px;
}
 .icon-bars, .icon-bars:before, .icon-bars:after{width: 50px;}
    
 .container-fluid.nav-container {
    padding: 0px;
}
    
    .content2{
        margin-top: 250px;
        font-size: 22px;
        line-height: 22px;
    } 
    button.menu-toggle {
    padding-right: 25px;
}
/**************end-navbar*******************/ 

/**************checkbox-css*******************/     
    
    input:checked + label:after {
   width: 10px;}
    
    label:after {
    top: 8px;
    left: 4px;
    }
 
/**************end-checkbox-cssr*******************/ 
    
/**************footer*******************/
    h1.home-head{
     font-size: 32px;
    line-height: 32px;   
    }
    .custom-sec7 {
    margin-top: 100px;
}
 body .container {
    width: 100%;
    max-width: 100%;
    padding: 0;
    padding: 0px 25px;
}
    p.home-para{
     margin-top: 10px;    
     font-size: 13px;
     line-height: 22px;   
    }
  .prod-slider-container {
    margin-top: 50px;
    padding-left: 25px;
    padding-right: 25px;
 }
   img.img-responsive.footer-logo {
    margin-top: 100px;   
    width: 180px;
}
    p.Footer-para{
     margin-top: 20px;    
     width: 100%;    
     font-size: 13px;
     line-height: 22px;   
    }
    p.Follow-text {
    margin-bottom: 20px;    
    margin-top: 50px;
    font-size: 16px;
    line-height: 16px;
   }
   img.shows {
    width: 18px;
    margin-right:30px;
} 
    h1.Footer-head{
        font-size: 32px;
        line-height: 32px;} 
    
  .check-txt {
    font-size: 13px;
    line-height: 17.5px;
 }
 label:before {
    width: 18px;
    height: 18px;
}
label{padding-left: 30px;}  
.btn {
    margin-top: 50px;
    border: 1px solid #333333;
    padding: 17px 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #333333;
    border-radius: 0;
}
  p.copyright-text{
     font-size: 11px;
     line-height: 15px;   
  }
    p.blog-sub-head{
      font-size: 13px;
      line-height: 18px;  
    }
   .custom-sec9 {
    margin-top: 100px;
    margin-bottom: 50px;
} 
.form-group {
    margin-top: 20px;
    margin-bottom: 0px;
}
 .mobile-flex {
    display: flex;
    flex-direction: column-reverse;
}
    
/**************end-footer*******************/
    
 .R-block {padding: 0px;}
 .L-block {padding: 0px;}  
    
 img.img-responsive.T-img-3-blog {
    right: 25%;
    width: 80px;
    top: 87%;
}  
 img.img-responsive.A-img-1 {
    margin-left: -45px;
    margin-top: -100px;
    padding-left: 0;
    width: 100%;
}
    
    .sky-round-bg-main {
    background: none;
    }
  section.custom-sec2-about {
    z-index: -99;  
    background-color: #fbede0;
    position: relative;
    margin-top: 150px;
    margin-left: 45px;
    margin-right: 25px;
} 
  .About-inner-contant {
    padding: 100px 0px 0px 0px;
}
 .top-contant {
    padding: 0px 25px;
    background-color: #fbede0;
    margin-left: 20px;
}   
  section.custom-sec1-about {
    margin-top: 100px;
} 
    
  section.custom-sec3-about {
    margin-left: 0px;
    margin-right: 20px;
} 
    .bottom-block{
        padding: 0px 0px 50px 0px;
    }
}




/*******************I-PAD-VIEW ************************/ 

@media (min-width:768px) and (max-width:991px){
  
/**************navbar*******************/    
.navbar-collapse.offcanvas-collapse.open {
transform: translateX(0%);
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
}
    .About-inner-contant {
    padding: 20px;
}
    .top-contant {
    margin-top: -260px;
    }
.navbar-dark .navbar-nav .nav-link {
    text-align: center;
    padding: 50px 0px;
    font-size: 22px;
    line-height: 22px;
    color: #333333 !important;
}
  img.img-responsive.T-img-3-blog {
    z-index: 99;
    width: 9.635vw;
    position: absolute;
    top: 37%;
    right: 19%;
}
 nav#myHeader {
    padding: 50px 0px 0px 0px;
}
.navbar-collapse.offcanvas-collapse {
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
transform: translateX(100%);
z-index: 9999;
}

.offcanvas-collapse.open {
z-index: 999;
top: 0;
/* / right: 0; / */
visibility: visible;
}

.offcanvas-collapse {
position: fixed;
top: 3.645vw;
bottom: 0;
right: 0;
width: 70.247vw;
padding-right: 0px;
padding-left: 0px;
overflow-y: auto;
visibility: hidden;
background-color: #1A1A1A;
top: 0;
}
img.img-fluid.logo {
    padding-left: 3.90625vw;
    width: 150px;
}
      button.menu-toggle {
    padding-right: 3.90625vw;
}
 .icon-bars, .icon-bars:before, .icon-bars:after{width: 50px;}
    
 .container-fluid.nav-container {
    padding: 0px;
}
    
    .content2{
        z-index: 9999;
        margin-top: 250px;
        font-size: 22px;
        line-height: 22px;
    } 
  
    .sky-round-bg-main{right: 11vw !important;}

li.nav-item {
    padding-right: 0px;
}
    ul.navbar-nav.ml-auto {
    width: 700px !important;
    padding-left: 1.3020vw;
    margin-top: -10.49vw;
    margin: 0 auto !important;
}
    .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show>.nav-link {
    border-bottom: 2px solid #f1a7f100;
}

/**************end-navbar*******************/

/****************font-sizes*****************/

p.blog-sub-head {
    font-size: 13px;
    line-height: 18px;
}
    p.home-para {
    margin-top: 10px;
    font-size: 13px;
    line-height: 22px;
}
    h1.home-head {
    font-size: 32px;
    line-height: 32px;
}
    p.home-para {
    margin-top: 10px;
    font-size: 13px;
    line-height: 22px;
}
    h1.Footer-head {
    font-size: 32px;
    line-height: 32px;
}
    .btn {
    font-size: 16px;
    line-height: 16px;
  }
    .check-txt {
    font-size: 13px;
    line-height: 17.5px;
}
    label {
    padding-left: 30px;
    }
    label:before {
    width: 20px;
    height: 20px;
    }
  p.Footer-para {
    margin-top: 20px;
    width: 80%;
    font-size: 13px;
    line-height: 22px;
}
    p.Follow-text {
    margin-bottom: 20px;
    margin-top: 50px;
    font-size: 16px;
    line-height: 16px;
}
    p.copyright-text {
    font-size: 11px;
    line-height: 15px;
}
  /*placeholder*/
input::-webkit-input-placeholder {
margin-bottom: 20px;    
color: #333333;    
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size:  16px;
line-height: 16px;
}
    
}

/**************I-PAD-VIEW*******************/


/********************************* /Media-queries*******************************/`

export const baseCssAbout = `/********************************* CSS********************************/
html{overflow-x: hidden;}
body{position: relative;z-index: 99999;}
body p h1 h1 h3 h4 h5 h6 span col a{font-family: 'anglecia_pro_dspregular';margin: 0px;}
body{font-family: 'anglecia_pro_dspregular';color: #333333;background-color: #ffffff;overflow-x: hidden;}
body .row {margin: 0;}
body .container {width:100%; max-width:78.125vw; padding: 0;}
body .container-fluid{padding: 0px;}
.img-responsive{width: 100%;max-width: 100%;}
p {margin: 0px;}
a:hover {color: #0056b3;text-decoration: none;}
h1, h2, h3, h4, h5, h6{margin: 0px;}
b, strong {font-weight: 800;}
:focus {
    outline: -webkit-focus-ring-color auto 0px;
}

.top-bg-4 {
    position: relative;
}
/***********************zoom-in-animation*******************/

.navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show>.nav-link{
        border-bottom: 2px solid #f1a7f1;
    }
    img.rotate:hover {
animation: none;
}
    .frame{
   -webkit-animation: zoomeffect 5s infinite;
   -moz-animation: zoomeffect 5s infinite;
   animation: zoomeffect 5s infinite;
}

/***********************-End-zoom-in-animation*******************/

/***********************NAVBAR********************/

button:focus {
    outline: 1px dotted;
    outline: 1px solid transparent;
}
    .hideshow{visibility: hidden;}
    
    nav#myHeader {
    padding:  3.90625vw 0vw 0vw 0vw ;}
    .menu-toggle {
    display: block;
    height:  2.604vw;
    padding: 0.976vw 0.78125vw;
    position: relative;
    z-index: 1;
    background-color: transparent;
    border: 0 none;
    cursor: pointer;
    font-family: 'anglecia_pro_dspregular';
    outline: medium none;
    overflow: visible;
    text-align: center;
    vertical-align: middle;
}
  
   .menu-toggle:focus .icon-bars, .menu-toggle:focus .icon-bars:before, .menu-toggle:focus .icon-bars:after, .menu-toggle:hover .icon-bars, .menu-toggle:hover .icon-bars:before, .menu-toggle:hover .icon-bars:after {
    background-color: #333333 !important;
}

.icon-bars, .icon-bars:before, .icon-bars:after {
    background-color: #333333 !important; 
}
.split-text{margin-top: 9.765vw;}

.menu-inner-text{
white-space: nowrap;
font-size: 12.369vw;
color: white;
-webkit-text-fill-color: transparent;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #B3B3B3;
font-family: 'roslindale_testingtextRg';    
}
.Right-text{text-align: right;}
.inner-mid-space{padding: 0px;}
.inner-sec-mobi {
    padding: 0px;
    text-align: right;
}
.POS-L{text-align: left;margin-left: 0.911vw;}
.POS-L1{text-align: left;margin-left:  7.8125vw;}
.slide-right h1 {
   animation: 2s slide-right;
   animation-delay: 2s;
}
ul.navbar-nav.ml-auto {
    height: 1.302vw;
}
.menu-toggle {
    display: block;
    height: 2.604vw;
    position: relative;
    z-index: 1;
    background-color: transparent;
    border: 0 none;
    cursor: pointer;
    font-family: 'anglecia_pro_dspregular';
    outline: medium none;
    overflow: visible;
    text-align: center;
    vertical-align: middle;  
}

.menu-toggle:before {
    content: attr(data-label);
    display: block;
    padding: 0.78125vw 0;
    position: absolute;
    right: 100%;
    top: 0;
    transition: color 0.2s ease 0s, opacity 0.3s ease 0s, visibility 0.3s ease 0s;
}

.menu--is-revealed .menu-toggle:before {
    opacity: 0;
    visibility: hidden;
}

.menu-toggle .icon-bars, 
.menu-toggle .icon-bars:before, 
.menu-toggle .icon-bars:after {
  transition: background-color 0.2s ease;
}
.menu-toggle:focus .icon-bars, 
.menu-toggle:focus .icon-bars:before, 
.menu-toggle:focus .icon-bars:after, 
.menu-toggle:hover .icon-bars, 
.menu-toggle:hover .icon-bars:before, 
.menu-toggle:hover .icon-bars:after {
  background-color: red;
}

.menu-toggle .icon-bars {
  transition: transform 0.3s ease-in, background-color 0.2s ease;
}
.menu-toggle .icon-bars:before, 
.menu-toggle .icon-bars:after {
  transition: top 0.3s 0.3s ease-in, transform 0.3s ease-in, background-color 0.2s ease;
}

.menu-toggle:active .icon-bars, 
.menu--is-revealed .menu-toggle .icon-bars {
  transition: transform 0.3s 0.2s ease-in, background-color 0.2s ease;
  transform: rotate3d(0, 0, 1, 135deg);
}
.menu-toggle:active .icon-bars:before, 
.menu-toggle:active .icon-bars:after, 
.menu--is-revealed .menu-toggle .icon-bars:before, 
.menu--is-revealed .menu-toggle .icon-bars:after {
  transition: top 0.2s ease-in, transform 0.3s 0.2s ease-in, background-color 0.2s ease;
  transform: rotate3d(0, 0, 1, 90deg);
  top: 0;
}

.icon-bars {
  position: relative;
}
.icon-bars, .icon-bars:before, .icon-bars:after {
  display: block;
  width: 2.9296875vw;
  height: 0.130vw;
  background-color: currentColor;
}
.icon-bars, .icon-bars:before, .icon-bars:after {
  background-color: #273138;
}
.icon-bars:before, .icon-bars:after {
  content: "";
  position: absolute;
  left: 0;
}
.icon-bars:before {
 display: none;
  top: 0.5em;
}
.icon-bars:after {
  top: -0.5em;
}

.content2 {
    justify-content: center;
    position: relative;
    /*animation: mymove 10s ;
    animation-delay: 10s; */

}


ul.navbar-nav.ml-auto {
    z-index: 9999;
    width: 75%;
    height: 1.302vw;
}
    li.nav-item {
    padding-right:13.020vw;
}
    .navbar-dark .navbar-nav .nav-link {
    font-size: 1.171vw;
    color: #333333 !important;
}
.nav-link{
    padding: 0px;}
        

.container-fluid.nav-container {
    padding: 0px 4.90625vw;
    z-index: 99999;
}
img.img-fluid.logo {
    width: 11.765vw;
}
/*********************************END NAVBAR********************************/

/****************************About css******************************/
section.custom-sec1-about {
    z-index: -99;
    margin-top: 9.765625vw;
}

p.blog-sub-head{
margin-bottom: 1.302vw;    
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1.4322916666666667vw;
line-height: 1.953125vw;
color: #333333;
}
h1.home-para.blog-p {
    font-size: 4.557291666666667vw;
    line-height: 4.557291666666667vw;
}
h1.home-head {
    margin-bottom: 1.302vw;
    font-style: normal;
    font-weight: normal;
    font-size: 4.557vw;
    line-height: 4.557vw;
    color: #333333;
}
p.home-para {
    margin-top: 0.781vw;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.041vw;
    line-height: 1.5625vw;
    color: #333333;
    opacity: 0.7;
}
.top-contant {
    padding: 3.2552083333333335vw 6.705729166666667vw 4.947916666666667vw 6.705729166666667vw;
    background-color: #fbede0;
}
img.img-responsive.T-img-1 {
    padding-left: 6.705vw;
    width: 64.778vw;
}
img.img-responsive.T-img-2 {
    top: 7.161vw;
    right: 0px;
    position: absolute;
    width: 58.072vw;
    z-index: -99;
}
img.img-responsive.T-img-3-blog {
    z-index: 99;
    width: 9.635vw;
    position: absolute;
    top: 69%;
    right: 19%;
}
p.home-para.blog-p {
    margin-top: 1.3020833333333333vw;
}
section.custom-sec2-about {
    position: relative;
    margin-top: 11.510vw;
}

img.img-responsive.A-img-1 {
    margin-top: -6.020833333333334vw;
    padding-left: 6.705vw;
    width:  34.380208333333332vw;
}

.sky-round-bg-main {
    background: url(${assetsUrl}/templates/blog/images/home-top-shape-bg.png) no-repeat center;
    z-index: -99;
    position: absolute;
    width: 126.898438vw;
    height: 100%;
    top: 0 !important;
    right:  11vw !important;
    background-position: top right;
    object-fit: cover;
    background-size: 65.10416666666667vw;
}
.About-inner-contant {
    padding:  5.143229166666667vw 6.510416666666667vw 0vw 0vw;
}

section.custom-sec5-about {
    margin-top: 16.276vw;
}
section.custom-sec6-about {
    margin-top: 8.59375vw;
    margin-bottom: 3.255vw;
}
/***************************end about css**************************/


/******************************slider css****************************/
.prod-slider-container {
    margin-top: 6.510vw;
}
.crad.taners.T-bottom {
    margin-top: 6.510vw;
}
.crad.taners {
    padding-left: 0.976vw;
    padding-right: 0.976vw;
}

/****************end slider css*********************************/

/*************************placeholder css**********************/
:-ms-input-placeholder {
color: #333333;    
font-family: 'anglecia_pro_dspregular';
}

/*placeholder*/
input::-webkit-input-placeholder {
margin-bottom: 20px;    
color: #333333;    
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
}

input:-moz-placeholder {
margin-bottom: 20px;     
color: #333333;   
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height:16px;
}

:-ms-input-placeholder {
margin-bottom: 20px;     
color: #333333;    
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height:16px;
}
:focus {
    outline: 1px solid transparent;
}
button:focus {
    outline: 1px solid transparent;
}

/*******************End placeholder css*************************/


/*********************************FOOTER********************************/
.custom-sec8{
    margin-top: 16.276vw;
}

.custom-sec9{
    margin-top: 8.59375vw;
    margin-bottom: 3.255vw;
}
img.img-responsive.footer-logo{
    width: 11.718vw;
}
input#emails {
    display: block;
    width: 90%;
    border-bottom: 1px solid #333333 !important;
    border: 0;
    background-color: transparent;
}
input[type="checkbox" i] {
    height: 1.171875vw;
    position: absolute;
    width: 1.171875vw;
    border: 1px solid #1A1A1A;
    border-radius: 0;
}
.check-txt {
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.846vw;
line-height: 1.171875vw;
color: #333333;
opacity: 0.7;
}


label {
    position: relative;
    padding-left: 1.953vw;
    margin-bottom: 1.302vw;
    display: inline-block;
}
.success {
    border-color: #333333;
    color: #333333;
}
.success:hover{
    background-color: #333333;
    color: #ffffff;
}
.btn {
    margin-top:  4.557vw;
    border: 1px solid #333333;
    padding: 1.106vw 1.953125vw;
    font-style: normal;
    font-weight: normal;
    font-size: 1.041vw;
    line-height: 1.041vw;
    color: #333333;
    border-radius: 0;
}

p.Footer-para{
width: 52%;    
margin-top: 2.408vw;    
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.846vw;
line-height: 1.432vw;
color: #333333;
opacity: 0.7;   
}

.social-data{margin-top:  1.953125vw;}

p.Follow-text{
margin-bottom:1.302vw;    
font-style: normal;
font-weight: normal;
font-size: 1.041vw;
line-height: 1.041vw;
color: #333333;
}

img.shows {
    width: 1.171875vw;
    margin-right: 1.953125vw;
}
span.S-icon{}

h1.Footer-head{
font-style: normal;
font-weight: normal;
font-size:  2.734375vw;
line-height:  2.734375vw;
color: #333333;
}

.email {
margin-top: 3.255vw;}

.form-group {
    margin-top: 1.302vw;
    margin-bottom: 0px;
}
p.copyright-text{
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.716vw;
line-height: 0.976vw;
color: #333333;
opacity: 0.7;
}
/*********************************END FOOTER********************************/

/*********************************CHKECBOX****************************/
input {
  display:none
}

label {
  position:relative;
  padding-left:1.953125vw;
  margin-bottom:1.302vw;
  display: inline-block;
}

label:before,
label:after {
  content:'';
  position:absolute;
}

label:before {
  width:1.302vw;
  height:1.302vw;
  border:2px solid #333333;
  top:0;
  left:0;
  border-radius:0px;
}

label:after {
  width:0px;
  height:0px;
  transition:width 0.2s;
  top:  0.390625vw;
  left: 0.260vw;
  transform:rotate(-45deg);
}

input:checked + label:after {
    border:1px solid #333333;
    border-width: 0 0 2px 2px;
    height:0.325vw;
    width:0.78125vw;
}

input:checked-1 + label:after {
    border:1px solid #333333;
    border-width: 0 0 2px 2px;
    height:0.325vw;
    width:0.78125vw;
}
  p.site-text {
    text-align: center;
    font-size: 0.716vw;
    line-height: 0.865vw;
}
.check-txt{
    font-size: 0.846vw;
    line-height: 0.99609375vw;
}
/*********************************END CHKECBOX****************************/


/*****************Background-lines************************/

img.img-responsive.bg-img-1 {
    z-index: 99;
    right: 12%;
    position: absolute;
}
  img.img-responsive.bg-img-5 {
    z-index: -99;
    opacity: .5;
    right: -20%;
    position: absolute;
    bottom: 0;
}


/*****************End-Background-lines************************/

/********************************* CSS********************************/`

export const htmlAbout = `
<!-------------------------------------Outer-Main-div's------------------------------------->
<div class="demo-main">
    <div class="demo-main-inner">
        <div class="top-bg"><img class="img-responsive bg-img-1" src="${assetsUrl}/templates/blog/images/bg-line.png"></div>
        <!-------------------------------------navbar-div------------------------------------->
        <div id="navbar_top" class="custom-sec1-main">
            
            <div class="container-nav custom-sec1">
                <nav class="navbar navbar-expand-lg navbar-dark" id="myHeader">
                    <div class="container-fluid nav-container">
                        <a href="./home.html"><img class="img-fluid logo" src="${assetsUrl}/templates/blog/images/Logo.png" / alt=""></a>
                        <div class="navbar-collapse hideshow content2 w100 " id="navbarResponsive">
                            <ul class="navbar-nav ml-auto ">
                                <li class="nav-item"> <a class="nav-link animate__animated" href="./home.html">Home</a>
                                </li>
                                <li class="nav-item"> <a class="nav-link animate__animated active">About</a>
                                </li>
                                <li class="nav-item"> <a class="nav-link animate__animated" href="./contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div id="menu-revealer" class="wrapper">
                            <button data-label="" role="button" class="menu-toggle"> <span class="icon-bars"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <!------------------------------------- /navbar-div------------------------------------->
        <!-------------------------------------Section-2------------------------------------->
        <section class="custom-sec2-about">
            <div class="container">
                <div class="row top-banner">
                    <div class="sky-round-bg-main"></div>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-0">
                        <img class="img-responsive T-img-3-blog frame " src="${assetsUrl}/templates/blog/images/home-top-shape-sm.png" alt="">
                        <img class="img-responsive A-img-1" src="${assetsUrl}/templates/blog/images/About-banner.png" alt=""data-aos="fade-right" data-aos-duration="2000">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 About-inner-contant"data-aos="fade-down" data-aos-duration="2000">
                        <p class="blog-sub-head">About Us</p>
                        <h1 class="home-para blog-p">Hi, thanks for dropping by!</h1> 
                        <p class="home-para blog-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                        <p class="home-para blog-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-2----------------------------------->
        <!------------------------------------- Section-3----------------------------------->
        <section class="custom-sec3-about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-2 col-md-2 col-sm-12"></div>
                    <div class="col-lg-10 col-md-10 col-sm-12 top-contant">
                        <div class="col-lg-12 col-mb-12 mb-12 bottom-block" data-aos="fade-up" data-aos-duration="2000">
                            <p class="home-para blog-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                            <p class="home-para blog-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <p class="home-para blog-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-3----------------------------------->
        <!------------------------------------- Section-4----------------------------------->
        <section class="custom-sec1-about">
            <div class="container">
                <div class="row align-items-center custom-sec4-row1">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0"data-aos="fade-right" data-aos-duration="2000">
                        <h1 class="home-head">Follow us on <br>Instagram @siteseed</h1>
                        <div class="col-lg-5 col-md-5 col-sm-12 p-0">
                            <p class="home-para">Hi! I'm <b>Paul Harrington</b> — an adventure travel photographer, professional blogger, and digital nomad.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="prod-slider-container">
                <div id="slider-new" class="owl-carousel">
                    <div class="item">
                        <div class="crad  taners T-bottom">
                            <img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-1.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <div class="crad  taners">
                            <img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-2.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <div class="crad  taners T-bottom">
                            <img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-3.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <div class="crad  taners">
                            <img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-4.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <div class="crad  taners T-bottom">
                            <img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-5.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-4----------------------------------->
        <!------------------------------------- Section-5----------------------------------->
        <section class="custom-sec5-about">
            <div class="container">
                <div class="row custom-sec5-row1 mobile-flex">
                    <div class="col-lg-7 col-md-7 col-sm-12 p-0">
                        <img class="img-responsive footer-logo" src="${assetsUrl}/templates/blog/images/Logo.png" alt="" data-aos="fade-down" data-aos-duration="2000">
                        <p class="Footer-para"data-aos="fade-right" data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque in quam sollicitudin rhoncus vitae ac velit. Donec sed augue massa. Nam quis augue non lectus dignissim sollicitudin. Aliquam turpis massa, mollis a diam a, iaculis ultrices lorem.</p>
                        <div class="social-data" >
                            <p class="Follow-text">Follow us:</p> 
                            
                            <span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/facebook%20(9)%201.png" alt=""data-aos="fade-up"></span>
                            
                            <span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/twitter%20(4)%201.png" alt=""data-aos="fade-down"></span>
                            
                            <span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/instagram%20(4)%201.png" alt=""data-aos="fade-up" ></span> 
                            
                            <span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/youtube%20(3)%201.png" alt=""data-aos="fade-down" ></span> 
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 p-0">
                        <h1 class="Footer-head"data-aos="fade-down" data-aos-duration="2000">Get our <br>newsletter</h1>
                        <div class="email">
                            <input placeholder="Enter your email" type="email" id="emails" name="emails" multiple>
                            <div class="form-group" data-aos="fade-left" data-aos-duration="2000">
                                <input type="checkbox" id='check'>
                                <label class="check-txt" for="check">By submitting this form, You agree to The Universal Music Group.
                                    <br><a href="#" style="color: #333333">Privacy Policy</a> and 
                                    <a href="#" style="color: #333333">Terms & Conditions.</a></label>
                            </div>
                            <button class="btn success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-5----------------------------------->
        <!------------------------------------- Section-6----------------------------------->
        <section class="custom-sec6-about">
            <div class="container">
                <div class="row align-items-center custom-sec8-row1">
                    <div class="col-lg-6 col-md-6 col-sm-12 p-0">
                        <p class="copyright-text">© 2020 SITESEED. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-6----------------------------------->
        <div class="top-bg-4"><img class="img-responsive bg-img-5" src="${assetsUrl}/templates/blog/images/bg-line.png"></div>
    </div>
</div>
<!-------------------------------------Outer-Main-div's------------------------------------->

<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
	AOS.init();
</script>
    
<script>
	$('.menu-toggle').on('click', function() {
	            $('#menu-revealer').toggleClass('menu--is-revealed');  
	            $('#navbarResponsive').toggleClass('hideshow');
	            $('#navbarResponsive ul li a.nav-link').toggleClass('animate__fadeInRight'); 
	         }); 
	         $('#datepicker').datepicker(); 
	         $('#datepicker1').datepicker(); 
	
	         $(".navbar ul li.nav-item a" ).click( function(){
	            $('#navbarResponsive').toggleClass('hideshow');   
	            $('#menu-revealer').toggleClass('menu--is-revealed');
	            $('#navbarResponsive ul li a.nav-link').toggleClass('animate__fadeInRight'); 
	         });
</script>
<script>
	function openNav() {
	  document.getElementById("mySidenav").style.width = "250px";
	}
	
	function closeNav() {
	  document.getElementById("mySidenav").style.width = "0";
	}
</script>
    
<script>
 $('#slider-new.owl-carousel').owlCarousel({
    stagePadding: 80,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
</script>

`
//   ============================================================================================================================================================================================================
export const customCssContact = `
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
@-webkit-keyframes zoomeffect{
    0%{
        background-position:center;
      transform:scale(1,1);
    }
    50%{
        background-position:center;
      transform:scale(1.2,1.2);
    }
    100%{
        background-position:center;
      transform:scale(1,1);
    }
}
@keyframes zoomeffect{
    0%{
        background-position:center;
      transform:scale(1,1);
    }
    50%{
        background-position:center;
      transform:scale(1.2,1.2);
    }
    100%{
        background-position:center;
      transform:scale(1,1);
    }
}
@keyframes mymove {
    from {right: 0px;}
    to {right: 13.020vw;}
}
/********************************* Media-queries*******************************/


@media only screen and (max-width: 991px) and (min-width: 0px){
    .mobil-space{
    padding-left: 0.9765vw;
    padding-right: 0.9765vw;
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
        
    .content2 ul.navbar-nav.ml-auto {
    padding-left: 1.3020vw;
    margin-top: 6.510vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    top: 6.510vw;
    background: linear-gradient(180deg, #F1A7F1 0%, #FAD0C4 100%);
    height: 100vh;
    }
    .content2 {
    z-index: 2;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 6.575vw;
    height: -webkit-fill-available;
    transition: top .5s;
    transition: left .5s;
    padding: 3.255vw 0vw;
    }
    
        .spac-dam{
            padding: 0px 15px;
        }
        
    li.active.tabs.cool-link {padding-bottom:0.455vw;}
        
    }

@media (min-width:0px) and (max-width:767px){
.web-view-collage {
    display: none;
}
    .row.align-items-center.custom-sec9-row1 {
    padding: 0px;
}
    li.nav-item {
    padding-right: 0px;
}
   .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show>.nav-link{
        border-bottom: 2px solid transparent;
    }
 .mobile-view-collage {
    display: block;
}   
    img.img-responsive.bg-img-1 {
    opacity: .5;
    z-index: 99;
    right: -19%;
    position: absolute;
}
/**************navbar*******************/    
.navbar-collapse.offcanvas-collapse.open {
transform: translateX(0%);
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
}
.navbar-dark .navbar-nav .nav-link {
    text-align: center;
    padding: 50px 0px;
    font-size: 22px;
    line-height: 22px;
    color: #333333 !important;
}
  
 nav#myHeader {
    padding: 50px 0px 0px 0px;
}
.navbar-collapse.offcanvas-collapse {
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
transform: translateX(100%);
z-index: 9999;
}

.offcanvas-collapse.open {
z-index: 999;
top: 0;
/* / right: 0; / */
visibility: visible;
}

.offcanvas-collapse {
position: fixed;
top: 3.645vw;
bottom: 0;
right: 0;
width: 70.247vw;
padding-right: 0px;
padding-left: 0px;
overflow-y: auto;
visibility: hidden;
background-color: #1A1A1A;
top: 0;
}
img.img-fluid.logo {
    padding-left: 25px;
    width: 150px;
}
 .icon-bars, .icon-bars:before, .icon-bars:after{width: 50px;}
    
 .container-fluid.nav-container {
    padding: 0px;
}
    
    .content2{
        margin-top: 250px;
        font-size: 22px;
        line-height: 22px;
    } 
    button.menu-toggle {
    padding-right: 25px;
}
/**************end-navbar*******************/ 

/**************checkbox-css*******************/     
    
    input:checked + label:after {
   width: 10px;}
    
     #txtComputer {
      font-size:  1.0416666666666667vw;
      font-family: 'anglecia_pro_dspregular';
      color: #333333;
 }
    
    label:after {
    top: 8px;
    left: 4px;
    }
 .md-textarea {
    width: 100%;
}
    textarea {
    padding-bottom: 50px !important;
}
/**************end-checkbox-cssr*******************/ 
    
/**************footer*******************/
    h1.home-head{
     font-size: 32px;
    line-height: 32px;   
    }
    .custom-sec7 {
    margin-top: 100px;
}
 body .container {
    width: 100%;
    max-width: 100%;
    padding: 0;
    padding: 0px 25px;
}
    p.home-para{
     margin-top: 10px;    
     font-size: 13px;
     line-height: 22px;   
    }
  .prod-slider-container {
    margin-top: 50px;
    padding-left: 25px;
    padding-right: 25px;
 }
   img.img-responsive.footer-logo {
    margin-top: 100px;   
    width: 180px;
}
    p.Footer-para{
     margin-top: 20px;    
     width: 100%;    
     font-size: 13px;
     line-height: 22px;   
    }
    p.Follow-text {
    margin-bottom: 20px;    
    margin-top: 50px;
    font-size: 16px;
    line-height: 16px;
   }
   img.shows {
    width: 18px;
    margin-right:30px;
} 
    h1.Footer-head{
        font-size: 32px;
        line-height: 32px;} 
    
  .check-txt {
    font-size: 13px;
    line-height: 17.5px;
 }
 label:before {
    width: 18px;
    height: 18px;
}
label{padding-left: 30px;}  
.btn {
    margin-top: 50px;
    border: 1px solid #333333;
    padding: 17px 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #333333;
    border-radius: 0;
}
  p.copyright-text{
     font-size: 11px;
     line-height: 15px;   
  }
    p.blog-sub-head{
      font-size: 13px;
      line-height: 18px;  
    }
   .custom-sec9 {
    margin-top: 100px;
    margin-bottom: 50px;
} 
.form-group {
    margin-top: 20px;
    margin-bottom: 0px;
}
 .mobile-flex {
    display: flex;
    flex-direction: column-reverse;
}
    .col-md-4.md-form {
    padding: 0px;
    margin-bottom: 30px;
}
    section.custom-sec3-blog {
    padding-left: 25px;
    padding-right: 0px;
}
 /**************end-footer*******************/ 
    
    
    .Form-section {
    padding: 100px 20px 50px 20px;
    background-color: #fbede0;
}
    img.img-responsive.T-img-1-contact {
    padding-left: 0px;
    width: 90%;
}
  img.img-responsive.T-img-3-contact {
    width: 80px;
    top: 79%;
    } 
    section.custom-sec2.blog {
    position: relative;
    margin-top: 100px;
}
   img.img-responsive.T-img-2-contact {
    top: 11.161vw;
    }
    
}
    


/*******************I-PAD-VIEW ************************/ 

@media (min-width:768px) and (max-width:991px){
  
/**************navbar*******************/    
.navbar-collapse.offcanvas-collapse.open {
transform: translateX(0%);
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
}
.navbar-dark .navbar-nav .nav-link {
    text-align: center;
    padding: 50px 0px;
    font-size: 22px;
    line-height: 22px;
    color: #333333 !important;
}
  
 nav#myHeader {
    padding: 50px 0px 0px 0px;
}
.navbar-collapse.offcanvas-collapse {
transition: visibility .8s ease-in-out, transform .8s ease-in-out;
transform: translateX(100%);
z-index: 9999;
}

.offcanvas-collapse.open {
z-index: 999;
top: 0;
/* / right: 0; / */
visibility: visible;
}

.offcanvas-collapse {
position: fixed;
top: 3.645vw;
bottom: 0;
right: 0;
width: 70.247vw;
padding-right: 0px;
padding-left: 0px;
overflow-y: auto;
visibility: hidden;
background-color: #1A1A1A;
top: 0;
}
img.img-fluid.logo {
    padding-left: 3.90625vw;
    width: 150px;
}
      button.menu-toggle {
    padding-right: 3.90625vw;
}
 .icon-bars, .icon-bars:before, .icon-bars:after{width: 50px;}
    
 .container-fluid.nav-container {
    padding: 0px;
}
    
    .content2{
        z-index: 9999;
        margin-top: 250px;
        font-size: 22px;
        line-height: 22px;
    } 
  
      li.nav-item {
    padding-right:0px;
}
    ul.navbar-nav.ml-auto{
    width: 700px !important;
    margin: 0 auto !important;
    }
    .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show>.nav-link {
    border-bottom: 2px solid #f1a7f108;
}
    .col-lg-4.col-md-12.col-sm-12.md-form {
    margin-bottom: 30px;
}
/**************end-navbar*******************/
    
/****************font-sizes*****************/

p.blog-sub-head {
    font-size: 13px;
    line-height: 18px;
}
    p.home-para {
    margin-top: 10px;
    font-size: 13px;
    line-height: 22px;
}
    h1.home-head {
    font-size: 32px;
    line-height: 32px;
}
    p.home-para {
    margin-top: 10px;
    font-size: 13px;
    line-height: 22px;
}
    h1.Footer-head {
    font-size: 32px;
    line-height: 32px;
}
    .btn {
    font-size: 16px;
    line-height: 16px;
  }
    .check-txt {
    font-size: 13px;
    line-height: 17.5px;
}
    label {
    padding-left: 30px;
    }
    label:before {
    width: 20px;
    height: 20px;
    }
  p.Footer-para {
    margin-top: 20px;
    width: 80%;
    font-size: 13px;
    line-height: 22px;
}
    p.Follow-text {
    margin-bottom: 20px;
    margin-top: 50px;
    font-size: 16px;
    line-height: 16px;
}
    p.copyright-text {
    font-size: 11px;
    line-height: 15px;
}
  /*placeholder*/
input::-webkit-input-placeholder {
margin-bottom: 20px;    
color: #333333;    
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size:  16px;
line-height: 16px;
}
    
}


/**************I-PAD-VIEW*******************/
/********************************* /Media-queries*******************************/


`

export const baseCssContact = `
/********************************* CSS********************************/
html{overflow-x: hidden;}
body{position: relative;}
body p h1 h1 h3 h4 h5 h6 span col a{font-family: 'anglecia_pro_dspregular';margin: 0px;}
body{font-family: 'anglecia_pro_dspregular';color: #333333;background-color: #ffffff;overflow-x: hidden;}
body .row {margin: 0;}
body .container {width:100%; max-width:78.125vw; padding: 0;}
body .container-fluid{padding: 0px;}
.img-responsive{width: 100%;max-width: 100%;}
p {margin: 0px;}
a:hover {color: #0056b3;text-decoration: none;}
h1, h2, h3, h4, h5, h6{margin: 0px;}
b, strong {font-weight: 800;}
:focus {
    outline: -webkit-focus-ring-color auto 0px;
}

img.img-responsive.bg-img-1 {
    opacity: .5;  
    z-index: 99;
    right: 15%;
    position: absolute;
}
 img.img-responsive.bg-img-5 {
    z-index: -99;
    opacity: .5;
    right: -20%;
    position: absolute;
    bottom: 0;
}   
.top-bg-4 {
    position: relative;
}
/***********************zoom-in-animation*******************/

  .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show>.nav-link{
        border-bottom: 2px solid #f1a7f1;
    }

    img.rotate:hover {
animation: none;
}
    .frame{
   -webkit-animation: zoomeffect 5s infinite;
   -moz-animation: zoomeffect 5s infinite;
   animation: zoomeffect 5s infinite;
}

/***********************-End-zoom-in-animation*******************/

/***********************NAVBAR********************/

button:focus {
    outline: 1px dotted;
    outline: 1px solid transparent;
}
    .hideshow{visibility: hidden;}
    
    nav#myHeader {
    padding:  3.90625vw 0vw 0vw 0vw ;}
    .menu-toggle {
    display: block;
    height:  2.604vw;
    padding: 0.976vw 0.78125vw;
    position: relative;
    z-index: 1;
    background-color: transparent;
    border: 0 none;
    cursor: pointer;
    font-family: 'anglecia_pro_dspregular';
    outline: medium none;
    overflow: visible;
    text-align: center;
    vertical-align: middle;
}
  
   .menu-toggle:focus .icon-bars, .menu-toggle:focus .icon-bars:before, .menu-toggle:focus .icon-bars:after, .menu-toggle:hover .icon-bars, .menu-toggle:hover .icon-bars:before, .menu-toggle:hover .icon-bars:after {
    background-color: #333333 !important;
}

.icon-bars, .icon-bars:before, .icon-bars:after {
    background-color: #333333 !important; 
}
.split-text{margin-top: 9.765vw;}

.menu-inner-text{
white-space: nowrap;
font-size: 12.369vw;
color: white;
-webkit-text-fill-color: transparent;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #B3B3B3;
font-family: 'roslindale_testingtextRg';    
}
.Right-text{text-align: right;}
.inner-mid-space{padding: 0px;}
.inner-sec-mobi {
    padding: 0px;
    text-align: right;
}
.POS-L{text-align: left;margin-left: 0.911vw;}
.POS-L1{text-align: left;margin-left:  7.8125vw;}
.slide-right h1 {
   animation: 2s slide-right;
   animation-delay: 2s;
}
ul.navbar-nav.ml-auto {
    height: 1.302vw;
}
.menu-toggle {
    display: block;
    height: 2.604vw;
    position: relative;
    z-index: 1;
    background-color: transparent;
    border: 0 none;
    cursor: pointer;
    font-family: 'anglecia_pro_dspregular';
    outline: medium none;
    overflow: visible;
    text-align: center;
    vertical-align: middle;  
}

.menu-toggle:before {
    content: attr(data-label);
    display: block;
    padding: 0.78125vw 0;
    position: absolute;
    right: 100%;
    top: 0;
    transition: color 0.2s ease 0s, opacity 0.3s ease 0s, visibility 0.3s ease 0s;
}

.menu--is-revealed .menu-toggle:before {
    opacity: 0;
    visibility: hidden;
}

.menu-toggle .icon-bars, 
.menu-toggle .icon-bars:before, 
.menu-toggle .icon-bars:after {
  transition: background-color 0.2s ease;
}
.menu-toggle:focus .icon-bars, 
.menu-toggle:focus .icon-bars:before, 
.menu-toggle:focus .icon-bars:after, 
.menu-toggle:hover .icon-bars, 
.menu-toggle:hover .icon-bars:before, 
.menu-toggle:hover .icon-bars:after {
  background-color: red;
}

.menu-toggle .icon-bars {
  transition: transform 0.3s ease-in, background-color 0.2s ease;
}
.menu-toggle .icon-bars:before, 
.menu-toggle .icon-bars:after {
  transition: top 0.3s 0.3s ease-in, transform 0.3s ease-in, background-color 0.2s ease;
}

.menu-toggle:active .icon-bars, 
.menu--is-revealed .menu-toggle .icon-bars {
  transition: transform 0.3s 0.2s ease-in, background-color 0.2s ease;
  transform: rotate3d(0, 0, 1, 135deg);
}
.menu-toggle:active .icon-bars:before, 
.menu-toggle:active .icon-bars:after, 
.menu--is-revealed .menu-toggle .icon-bars:before, 
.menu--is-revealed .menu-toggle .icon-bars:after {
  transition: top 0.2s ease-in, transform 0.3s 0.2s ease-in, background-color 0.2s ease;
  transform: rotate3d(0, 0, 1, 90deg);
  top: 0;
}

.icon-bars {
  position: relative;
}
.icon-bars, .icon-bars:before, .icon-bars:after {
  display: block;
  width: 2.9296875vw;
  height: 0.130vw;
  background-color: currentColor;
}
.icon-bars, .icon-bars:before, .icon-bars:after {
  background-color: #273138;
}
.icon-bars:before, .icon-bars:after {
  content: "";
  position: absolute;
  left: 0;
}
.icon-bars:before {
 display: none;
  top: 0.5em;
}
.icon-bars:after {
  top: -0.5em;
}

.content2 {
    justify-content: center;
    position: relative;
    /*animation: mymove 10s ;
    animation-delay: 10s; */

}
button.btn.success.aos-init.aos-animate{margin-left: 15px;}
  ul.navbar-nav.ml-auto {
    width: 80%;  
    height: 1.302vw;
}
    li.nav-item {
    padding-right:13.020vw;
}
    .navbar-dark .navbar-nav .nav-link {
    font-size: 1.171vw;
    color: #333333 !important;
}
.nav-link{
    padding: 0px;}
        

.container-fluid.nav-container {
    z-index: 99999;
    padding: 0px 4.90625vw;
}
img.img-fluid.logo {
    width: 11.765vw;
}
/*********************************END NAVBAR********************************/


/*********************************CONTACT CSS*******************************/
section.custom-sec1-contact {
    margin-top: 9.765625vw;
}
section.custom-sec5-contact {
    margin-top: 16.276vw;
}
section.custom-sec6-contact {
    margin-top: 8.59375vw;
    margin-bottom: 3.255vw;
}
h1.home-head {
    margin-bottom: 1.302vw;
    font-style: normal;
    font-weight: normal;
    font-size: 4.557vw;
    line-height: 4.557vw;
    color: #333333;
}
p.home-para {
    margin-top: 0.781vw;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.041vw;
    line-height: 1.5625vw;
    color: #333333;
    opacity: 0.7;
}

img.img-responsive.T-img-1-contact {
    padding-left: 6.705vw;
    width: 69.778vw;
}
img.img-responsive.T-img-2-contact {
    top: 7.161vw;
    right: 0px;
    position: absolute;
    width: 58.072vw;
    z-index: -99;
}
img.img-responsive.T-img-3-contact {
    z-index: 99;
    width: 9.635vw;
    position: absolute;
    top: 88%;
    right: 16%;
}
.Form-section {
    padding: 10.255208vw 7.705729vw 9.947917vw 7.705729vw;
    background-color: #fbede0;
}

section.custom-sec2.blog{
    position: relative;
    margin-top: 6.510vw;
}
/*********************************END CONTACT CSS********************************/

/******************************slider css****************************/
.prod-slider-container {
    margin-top: 6.510vw;
}
.crad.taners.T-bottom {
    margin-top: 6.510vw;
}
.crad.taners {
    padding-left: 0.976vw;
    padding-right: 0.976vw;
}

/****************end slider css*********************************/


/****************Form css*********************************/
.md-textarea{width: 100%;}

p.form-heading{
margin-bottom: 0.78125vw;    
font-style: normal;
font-weight: normal;
font-size: 2.734375vw;
line-height: 2.734375vw;
color: #333333;    
}

textarea {
    padding-bottom: 100px !important;
}

p.form-para{
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 1.0416666666666667vw;
line-height: 1.5625vw;
color: #333333;
opacity: 0.7;    
}

.row.contct-form {
    margin-top: 6.510416666666667vw;
}


section.custom-sec9-blog{
    padding-left: 27.864583333333332vw;
    padding-right: 27.864583333333332vw;
   
}
.col-md-4.md-form {
    margin-bottom: 3.2552083333333335vw;
}

.cont-data{
    background-color: transparent;
    padding: 0px;
    border-bottom: 1px solid #333333 !important;
    border: 0;
    border-radius: 0;
}

.form-control:focus {
    color: #333333;
    background-color: transparent;
    border-color: #ffffff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.0%);
}

/****************end Form css*********************************/


/*placeholder css*/
:-ms-input-placeholder {
color: #333333;    
font-family: 'anglecia_pro_dspregular';
}

/*placeholder*/
input::-webkit-input-placeholder {
margin-bottom: 20px;    
color: #333333;    
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
}

input:-moz-placeholder {
margin-bottom: 20px;     
color: #333333;   
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
}

:-ms-input-placeholder {
margin-bottom: 20px;     
color: #333333;    
font-family: 'anglecia_pro_dspregular';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height:16px;
}
:focus {
    outline: 1px solid transparent;
}
button:focus {
    outline: 1px solid transparent;
}

/*End placeholder css*/

.col-lg-4.col-md-12.col-sm-12.md-form {
    margin-bottom: 50px;
}
/*********************************FOOTER********************************/
.custom-sec8{
    margin-top: 16.276vw;
}

.custom-sec9{
    margin-top: 8.59375vw;
    margin-bottom: 3.255vw;
}
img.img-responsive.footer-logo{
    width: 11.718vw;
}
input#emails {
    display: block;
    width: 90%;
    border-bottom: 1px solid #333333 !important;
    border: 0;
    background-color: transparent;
}
input[type="checkbox" i] {
    height: 1.171875vw;
    position: absolute;
    width: 1.171875vw;
    border: 1px solid #1A1A1A;
    border-radius: 0;
}
.check-txt {
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.846vw;
line-height: 1.171875vw;
color: #333333;
opacity: 0.7;
}


label {
    position: relative;
    padding-left: 1.953vw;
    margin-bottom: 1.302vw;
    display: inline-block;
}
.success {
    border-color: #333333;
    color: #333333;
}
.success:hover{
    background-color: #333333;
    color: #ffffff;
}
.btn {
    margin-top:  4.557vw;
    border: 1px solid #333333;
    padding: 1.106vw 1.953125vw;
    font-style: normal;
    font-weight: normal;
    font-size: 1.041vw;
    line-height: 1.041vw;
    color: #333333;
    border-radius: 0;
}

p.Footer-para{
width: 52%;    
margin-top: 2.408vw;    
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.846vw;
line-height: 1.432vw;
color: #333333;
opacity: 0.7;   
}

.social-data{margin-top:  1.953125vw;}

p.Follow-text{
margin-bottom:1.302vw;    
font-style: normal;
font-weight: normal;
font-size: 1.041vw;
line-height: 1.041vw;
color: #333333;
}

img.shows {
    width: 1.171875vw;
    margin-right: 1.953125vw;
}
span.S-icon{}

h1.Footer-head{
font-style: normal;
font-weight: normal;
font-size:  2.734375vw;
line-height:  2.734375vw;
color: #333333;
}

.email {
margin-top: 3.255vw;}

.form-group {
    margin-top: 1.302vw;
    margin-bottom: 0px;
}
p.copyright-text{
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 0.716vw;
line-height: 0.976vw;
color: #333333;
opacity: 0.7;
}
/*********************************END FOOTER********************************/

/*********************************CHKECBOX****************************/
input {
  display:none
}

label {
  position:relative;
  padding-left:1.953125vw;
  margin-bottom:1.302vw;
  display: inline-block;
}

label:before,
label:after {
  content:'';
  position:absolute;
}

label:before {
  width:1.302vw;
  height:1.302vw;
  border:2px solid #333333;
  top:0;
  left:0;
  border-radius:0px;
}

label:after {
  width:0px;
  height:0px;
  transition:width 0.2s;
  top:  0.390625vw;
  left: 0.260vw;
  transform:rotate(-45deg);
}

input:checked + label:after {
    border:1px solid #333333;
    border-width: 0 0 2px 2px;
    height:0.325vw;
    width:0.78125vw;
}

input:checked-1 + label:after {
    border:1px solid #333333;
    border-width: 0 0 2px 2px;
    height:0.325vw;
    width:0.78125vw;
}
  p.site-text {
    text-align: center;
    font-size: 0.716vw;
    line-height: 0.865vw;
}
.check-txt{
    font-size: 0.846vw;
    line-height: 0.99609375vw;
}
/*********************************END CHKECBOX****************************/


/********************************* CSS********************************/
`

export const htmlContact = `
<!-------------------------------------Outer-Main-div's------------------------------------->
<div class="contact-main">
    <div class="contact-main-inner">
        <div class="top-bg"><img class="img-responsive bg-img-1" src="${assetsUrl}/templates/blog/images/bg-line.png"></div>
       
        <!-------------------------------------navbar-div------------------------------------->
        <div id="navbar_top" class="custom-sec1-main">
            <div class="container-nav custom-sec1">
                <nav class="navbar navbar-expand-lg navbar-dark" id="myHeader">
                    <div class="container-fluid nav-container">
                        <a href="./home.html"><img class="img-fluid logo" src="${assetsUrl}/templates/blog/images/Logo.png" alt=""></a>
                        <div class="navbar-collapse hideshow content2 w100 " id="navbarResponsive">
                            <ul class="navbar-nav ml-auto ">
                                <li class="nav-item"> <a class="nav-link animate__animated" href="./home.html">Home</a>
                                </li>
                                <li class="nav-item"> <a class="nav-link animate__animated" href="./about.html">About</a>
                                </li>
                                <li class="nav-item"> <a class="nav-link animate__animated active">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div id="menu-revealer" class="wrapper">
                            <button data-label="" role="button" class="menu-toggle"> <span class="icon-bars"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <!------------------------------------- /navbar-div------------------------------------->
        <!-------------------------------------Section-2------------------------------------->
        <section class="custom-sec2 blog">
            <div class="container">
                <div class="row top-banner">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0">
                        <img class="img-responsive T-img-1-contact" src="${assetsUrl}/templates/blog/images/contact-top-image.png" alt="">
                        <img class="img-responsive T-img-2-contact" src="${assetsUrl}/templates/blog/images/home-top-shape-bg.png" alt="">
                        <img class="img-responsive T-img-3-contact frame" src="${assetsUrl}/templates/blog/images/home-top-shape-sm.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-2----------------------------------->
        <!------------------------------------- Section-3----------------------------------->
        <section class="custom-sec3-blog">
            <div class="container">
                <div class="row align-items-center custom-sec9-row1">
                    <div class="col-md-2"></div>
                    <div class="col-lg-10 col-md-10 col-sm-12 Form-section">
                        <h1 class="home-head spac-dam"data-aos="fade-down" data-aos-duration="2000">Let's keep in<br> touch!</h1>
                        <p class="home-para spac-dam"data-aos="fade-down" data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis tellus, ut elementum purus. Praesent mattis tellus risus.</p>
                        <form action="/action_page.php">
                            <div class="row contct-form">
                                <div class="col-lg-4 col-md-12 col-sm-12 md-form">
                                    <input type="text" id="txtComputer" class="form-control cont-data" placeholder="Name*" required>
                                </div>
                                <div class="col-lg-4 col-md-12 col-sm-12 md-form">
                                    <input placeholder="Email*" id="txtComputer"type="email" name="emails" multiple class="form-control cont-data" required>
                                </div>
                                <div class="col-lg-4 col-md-12 col-sm-12 md-form">
                                    <input placeholder="Phone*" type="tel" id="txtComputer" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" multiple class="form-control cont-data" required>
                                </div>
                                <div class="col-md-12 md-form ">
                                    <textarea type="text" class="md-textarea cont-data" placeholder="Message" required></textarea>
                                </div>
                            </div>
                            <button class="btn success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-3----------------------------------->
        <!------------------------------------- Section-4----------------------------------->
        <section class="custom-sec1-contact">
            <div class="container">
                <div class="row align-items-center custom-sec4-row1">
                    <div class="col-lg-12 col-md-12 col-sm-12 p-0"data-aos="fade-right" data-aos-duration="2000">
                        <h1 class="home-head">Follow us on <br>Instagram @siteseed</h1>
                        <div class="col-lg-5 col-md-5 col-sm-12 p-0">
                            <p class="home-para">Hi! I'm <b>Paul Harrington</b> — an adventure travel photographer, professional blogger, and digital nomad.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="prod-slider-container">
                <div id="slider-new" class="owl-carousel">
                    <div class="item">
                        <div class="crad  taners T-bottom">
                            <img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-1.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <div class="crad  taners">
                            <img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-2.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <div class="crad  taners T-bottom">
                            <img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-3.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <div class="crad  taners">
                            <img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-4.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <div class="crad  taners T-bottom">
                            <img class="img-fluid inner-T" src="${assetsUrl}/templates/blog/images/home-slider-5.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-4----------------------------------->
        <!------------------------------------- Section-5----------------------------------->
        <section class="custom-sec5-contact">
            <div class="container">
                <div class="row  custom-sec5-row1 mobile-flex">
                    <div class="col-lg-7 col-md-7 col-sm-12 p-0">
                        <img class="img-responsive footer-logo" src="${assetsUrl}/templates/blog/images/Logo.png" alt="" data-aos="fade-down" data-aos-duration="2000">
                        <p class="Footer-para"data-aos="fade-right" data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque in quam sollicitudin rhoncus vitae ac velit. Donec sed augue massa. Nam quis augue non lectus dignissim sollicitudin. Aliquam turpis massa, mollis a diam a, iaculis ultrices lorem.</p>
                        <div class="social-data" >
                            <p class="Follow-text">Follow us:</p> 
                            
                            <span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/facebook%20(9)%201.png" alt=""data-aos="fade-up"></span>
                            
                            <span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/twitter%20(4)%201.png" alt=""data-aos="fade-down"></span>
                            
                            <span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/instagram%20(4)%201.png" alt=""data-aos="fade-up"></span> 
                            
                            <span class="S-icon"><img class="shows" src="${assetsUrl}/templates/blog/images/youtube%20(3)%201.png" alt=""data-aos="fade-down"></span> 
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                        <h1 class="Footer-head"data-aos="fade-down" data-aos-duration="2000">Get our <br>newsletter</h1>
                        <div class="email">
                            <input placeholder="Enter your email" type="email" id="emails" name="emails" multiple>
                            <div class="form-group" data-aos="fade-left" data-aos-duration="2000">
                                <input type="checkbox" id='check'>
                                <label class="check-txt" for="check">By submitting this form, You agree to The Universal Music Group.
                                    <br><a href="#" style="color: #333333">Privacy Policy</a> and 
                                    <a href="#" style="color: #333333">Terms & Conditions.</a></label>
                            </div>
                            <button class="btn success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-5----------------------------------->
        <!------------------------------------- Section-6----------------------------------->
        <section class="custom-sec6-contact">
            <div class="container">
                <div class="row align-items-center custom-sec8-row1">
                    <div class="col-lg-6 col-md-6 col-sm-12 p-0">
                        <p class="copyright-text">© 2020 SITESEED. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        </section>
        <!------------------------------------- /Section-6----------------------------------->
        <div class="top-bg-4"><img class="img-responsive bg-img-5" src="${assetsUrl}/templates/blog/images/bg-line.png"></div>
    </div>
</div>
<!-------------------------------------Outer-Main-div's------------------------------------->

<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
AOS.init();
</script>

<script>
$('.menu-toggle').on('click', function() {
            $('#menu-revealer').toggleClass('menu--is-revealed');  
            $('#navbarResponsive').toggleClass('hideshow');
            $('#navbarResponsive ul li a.nav-link').toggleClass('animate__fadeInRight'); 
         }); 
         $('#datepicker').datepicker(); 
         $('#datepicker1').datepicker(); 

         $(".navbar ul li.nav-item a" ).click( function(){
            $('#navbarResponsive').toggleClass('hideshow');   
            $('#menu-revealer').toggleClass('menu--is-revealed');
            $('#navbarResponsive ul li a.nav-link').toggleClass('animate__fadeInRight'); 
         });
</script>
<script>
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
</script>

<script>
$('#slider-new.owl-carousel').owlCarousel({
stagePadding: 80,
loop:true,
margin:10,
nav:false,
responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
})
</script>
`


//   ============================================================================================================================================================================================================

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
    {
        components: htmlAbout,
        style: baseCssAbout,
        customCss: customCssAbout,
        name: "About Us",
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
    {
        components: htmlContact,
        style: baseCssContact,
        customCss: customCssContact,
        name: "Contact",
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