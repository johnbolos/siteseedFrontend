export const componentData = {
    styleOb : [
        {
            selector: '',
            styles: {
                'color': 'red',
                'background-color': 'yellow'
            }
        }
    ]
}

export const layerData = [
  {
    tagName: 'div',
    id: 'main',
    children: [
      {
        tagName: 'div',
        id: 'heading',
        innerHtml: 'Heading'
      },
      {
        tagName: 'div',
        id: 'caption',
        innerHtml: 'Caption'
      },
    ]
  },
  {
    tagName: 'div',
    id: 'secondary',
    children: [
      {
        tagName: 'a',
        id: 'link',
        innerHtml: 'Link'
      }
    ]
  }
]

export const template1Style = `
@font-face {font-family: "SofiaPro-SemiBold";
  src: url("42441faa9c7c255068f6dd0c33ca2ba5.eot"); /* IE9*/
  src: url("42441faa9c7c255068f6dd0c33ca2ba5.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
  url("42441faa9c7c255068f6dd0c33ca2ba5.woff2") format("woff2"), /* chrome、firefox */
  url("42441faa9c7c255068f6dd0c33ca2ba5.woff") format("woff"), /* chrome、firefox */
  url("42441faa9c7c255068f6dd0c33ca2ba5.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url("42441faa9c7c255068f6dd0c33ca2ba5.svg#SofiaPro-SemiBold") format("svg"); /* iOS 4.1- */
}

.card-body {
    height: 16em;}
body {
    font-family: "SofiaPro-SemiBold";
    font-weight: 400;
    line-height: 1.7em;
    font-size: 1em;
    color: #808291;
}


/*navbar-sec*/

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}
.bg-dark-1 {
    border-bottom: 2px solid #c1c5c8;
    padding-right: 30px;
    padding-left: 30px;
    background-color: #ffffff!important;
    }
.navbar-dark .navbar-nav .nav-link {
    font-family: "SofiaPro-SemiBold" !important;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.025em;
    color: #5b6670 !important;
}
.navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 15px !important;
    padding-left: 15px!important;
}

img.l-img {
    width: 100%;
    max-width: 120pt;
}
button.btn.btn-lg.r-20 {
    padding: 15px !important;
    background-color: #fff !important;
    color: #1489c1 !important;
    border: 1px solid #1489c1;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 32px !important;
    font-size: 12px !important;
    font-weight: 700 !important;
    letter-spacing: 0.1em !important;
    }
span.Call-sec {
    margin-right: 30px;
}

/*hero sec*/
h5.s-head {
    font-size: 18px;
    color: #10cfc9;
    text-align: left;
}
h1.h-head {
    font-size: 48px;
    text-align: left;
    color: #3f3a60;
    font-family: 'helvetica_neuebold';
    font-weight: normal;
}
.tabs-h.tabs-h-1 span {
    font-family: 'helvetica_neuebold';
    font-size: 48px;
    color: #3f3a60;
}

.st-desc {
    font-family: 'niveau_groteskregular';
    color: #5b6670;
    font-size: 16px;
    margin-bottom: 1em;
}
button.custm-buttton {
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 25px;
    padding-right: 25px;
    background-color: blue;
    color: white !important;
    font-size: 22px !important;
    font-family: sofiasemibold;
    font-weight: normal !important;
    border: 0px !important;
}

.top-sec{background: url(../img/imageo1.png) no-repeat center;
    /* margin: 5% 0 !important; */
    height: 100vh;
}

.tab-content>.active{
background: url(../img/background-ui.png) no-repeat center;}

/*tabs section*/

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    border-radius: 0px !important;
    border: 4px solid #d3d3d6;
    font-size: 24px;
    font-family: sofiasemibold !important !important;
    font-weight: normal !important;
    color: #3f3a60 !important;
    background-color:#d0d0d2 !important;
    border-color: transparent !important;
}
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link {
    border-radius: 0px !important;
    border: 4px solid #d3d3d6 !important;
    font-size: 24px;
    font-family: "SofiaPro-SemiBold" !important;
    font-weight: normal !important;
    color: #5b6670 !important;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #d0d0d2 !important;
}
.nav-tabs .nav-item {
    margin: 12px 12px -3px 12px !important;
    width: 31.5% !important;
    margin-bottom: -1px;
}
span.trust-text {
    color: #10cfc9 !important;
    font-family: 'SofiaPro-SemiBold' !important;
    font-size: 18px !important;
}
.tab-content{
margin: 0px;
}

.left-col{float: left;width: 50%;}
.right-col{float: left;width: 50%;}

.left-col-1{float: left;width: 30%;}
.right-col-1{float: left;width: 69%;}

input#email {
    width: 80%;
    padding: 15px;
}
input#mail {
    border-radius: 0px !important;
    padding: 30px;
}
span.input-group-text {
    font-family: "SofiaPro-SemiBold" !important;
    font-size: 18px;
}
.input-group.mb-3 {
    border: 2px solid #fff;}

.input-group-text {
    color: #fff !important;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 9px 40px !important;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 700 !important;
    line-height: 1.5;
    color: #fdfeff;
    text-align: center;
    white-space: nowrap;
    background-color:  transparent !important;
    border: 1px solid #ced4da;
    border-radius: 0px !important;
}

.tabs-h{
    color: #3f3a60 !important;
    font-family: 'SofiaPro-SemiBold' !important;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
}

.custm-butt{
    background: url(../img/imgpsh_fullsize_anim.png) no-repeat center;
    background-size: cover !important;
    width:120px;
    height: 40px;
    border: none;
    color: #fff;
    font-size: 20px;}
.custm-butt:hover, .custm-butt:active, .custm-butt:focus{border:none;outline: none;cursor: pointer;box-shadow: 0 0 7px 4px #00000018;}

.tabs-p {
    line-height: 25px !important;
    font-family: 'niveau_groteskregular' !important;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 34px;
    color: #5b6670;
}
hr {
    margin-top: 3rem !important;
    margin-bottom: 1rem;
    border: 0;
    border-top: 2px solid rgba(0,0,0,.1) !important;
}

.col-md-12.tqb-sec {
    padding: 0px !important;
}

/*card design*/
img.im-card {
    margin-top: -78px;
}
.L-1 {margin-left: -10px;
    margin-right: -10px;
    border-top: 7px solid #d0009f;
    margin-top: 68px;
}
.L-2{
    margin-left: -10px;
    margin-right: -10px;
    border-top: 7px solid #665cc7;
    margin-top: 68px;
}
.L-3 {
    margin-left: -10px;
    margin-right: -10px;
    border-top: 7px solid #007da5;
    margin-top: 68px;
}
.L-4 {
    margin-left: -10px;
    margin-right: -10px;
    border-top: 7px solid #1fcfcb;
    margin-top: 68px;
}

.card.card-1 {
    padding: 0px !important;
    background-color: #727b83 !important;
}
.card.card-2 {
    padding: 0px !important;
    background-color: #899298 !important;
}
.card.card-3 {
    padding: 0px !important;
    background-color: #abb0b4 !important;
}
.card.card-4 {
    padding: 0px !important;
    background-color: #bcc0c2 !important;

}
.top-s {
    height: 15em;
    background-color: #fff;
}
.card-img-top {
    max-width: 50%;
    background-color: #fff;
    margin: 40px;
}
.card {border: none !important;}

h4.card-title {
    font-family: "SofiaPro-SemiBold" !important;
    font-size: 18px !important;
    color: #fff !important;
    text-align: justify;
}

h5.card-text {
    height: 2.5em;
    font-family: "SofiaPro-SemiBold" !important;
    color: #fff !important;
    text-align: initial;
    font-size: 16px !important;
}
a.L-Link {
    color: #007da5;
    background-color: white;
    padding: 10px 20px;
    font-family: "SofiaPro-SemiBold" !important;
    font-weight: normal;
    font-size: 16px;
    margin-right: 30px;
   
}
.custom-focus li {
    font-family: 'niveau_groteskregular' !important;
    color: #5b6670;
    font-size: 18px;
    line-height: 48px;
    list-style-type: none;
    background-image: url();
    background-repeat: no-repeat;
    background-position: center left;
    padding: 0 0 0 0px;
}
.col-md-12.serch-sec {
    margin-bottom: 30px;
    margin-top: 30px;
    padding-left: 20px;
    padding-top: 70px !important;
    padding-bottom: 70px !important;
    background: url(../img/imgpsh_fullsize_anim.png) no-repeat center;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}
span.ld-fh-txt {
    font-family: "SofiaPro-SemiBold" !important;
    font-size: 32px !important;
    color: rgb(255, 255, 255);
}

h5.vc_custom_heading.vc_custom_1595842755130 {
    font-family: 'niveau_groteskregular' !important;
    font-size: 18px !important;
}
p.card-text{
font-family: 'niveau_groteskregular' !important;    
font-size: 12px;    
text-align: initial;
color: #fff !important;
}
/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0px 10px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
ul.custom-focus {
    padding: 0px !important;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
 border-radius: 0px !important;
  padding: 16px;
  text-align: center;
    background-color: #f1f1f1;}

/*footer sec*/
.jumbotron.text-center {
    background-color: #727b83 !important;
}
.jumbotron{
    padding: 0px !important;
}
/* Footer */
.F-logo{max-width: 50%;}
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
    padding: 60px 0px 10px 0px;
}

section .section-title {
    text-align: center;
    color: #007b5e;
    margin-bottom: 50px;
    text-transform: uppercase;
}
#footer {
    font-family: "SofiaPro-SemiBold" !important;
    background: #727b83 !important;
}
#footer h5{
	padding-bottom: 6px;
    margin-bottom: 20px;
    color: #c2c6ca;
}
#footer a {
    color: #c1c5c8;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.social li a, #footer ul.quick-links li a {
    font-size: 19px !important;
    color: #ffffff;
    white-space: nowrap;
}

#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}
}
.text-white {
    text-align: left;
    color: #fff!important;
}

.f12 {
    justify-content: flex-end;
}

/*i-pad pro view*/
@media only screen and (max-width: 1024px) and (min-width: 769px){
    .f12 ul{    width: 100%;
        display: flex;
        justify-content: flex-end;
       margin-left: 6em;
    }
    
    .owl-theme .owl-controls .owl-buttons div {
font-size: 8em !important;background-color: transparent !important;}
   
.owl-next {
    position: absolute;
    left: 7em;
}

img.navtext-right {
    max-width: 100px;
}
img.navtext-left {
    max-width: 100px;
    }
     .col-xs-12.col-sm-4.col-md-2.custom-dix {
    max-width: 13% !important;
}
    .card {
    height: 37em !important;
}
    .nav-tabs .nav-item {
    width: 30.9% !important;
    margin-bottom: -1px;
}
ul.navbar-nav {
    justify-content: end !important;
}
    div#collapsibleNavbar {
    padding-right: 20px !important;
}
.f12 ul {
    width: auto !important;}
    .ipad {
    display: grid !important;
    margin-top: -40px;
}
    .col-md-12.tqb-sec {
    margin-top: 0em !important;
}
}
.containe-footer {
    margin: 0px 20px;
}
/*i-pad view*/
@media only screen and (max-width: 768px) and (min-width: 760px){
    
    #footer ul.social li a, #footer ul.quick-links li a {
    font-size: 16px !important;
    color: #ffffff;
}
    
    .owl-theme .owl-controls .owl-buttons div {
font-size: 8em !important;background-color: transparent !important;}
   
.owl-next {
    position: absolute;
    left: 5em;
}

img.navtext-right {
    max-width: 100px;
}
img.navtext-left {
    max-width: 100px;
    }
    
    .col-xs-12.col-sm-4.col-md-2.custom-dix {
    max-width: 13% !important;
}
    div#collapsibleNavbar{padding: 0px !important;}
    
    .custm-butt {font-size: 12px;}
   
   
.f12 ul {
    margin-left: -8em;
    width: auto !important;}
    .ipad {
    display: grid !important;
    margin-top: -40px;
}
    ul.navbar-nav {
    justify-content: end !important;
}
    
    .st-desc {
    color: #5b6670;
    font-size: 20px;
    font-family: niveaugroteskregular !important;
    margin-bottom: 2.5em;
}
    .nav-tabs .nav-item {
    width: 100% !important;
    margin-bottom: -1px;
}
    .column {
    width: 50% !important;
    }
.col-md-12.tqb-sec {
    margin-top: 0em !important;
}
}

/*mobile view*/
@media only screen and (max-width:1100px){
    .col-md-12.tqb-sec {
        margin-top: 5em;}
    .nav-tabs .nav-item {
    width: 100%;
    margin-bottom: -1px;
}
    .ipad {
    display: flex;
    justify-content: end !important;
    width: 100%;
}
    .st-desc {
    color: #5b6670;
    font-size: 17px;
    margin-bottom: 2.5em;
}
    .text-white {
    text-align: center;
    color: #fff!important;
}
    span.input-group-text {
    font-size: 20px !important;
}
    a.L-Link {
    display: block;
    color: #007da5;
    background-color: white;
    padding: 10px 20px;
    font-family: "SofiaPro-SemiBold" !important;
    font-weight: normal;
    font-size: 20px;
    margin-right: 30px;
    margin-bottom: 10px;
            }
    .left-col-1 {
     width: 100% !important;
               }
    .right-col-1 {
     width: 100% !important;
      }
    .col-md-12.serch-sec {
    padding: 10px !important;
}
   
    img.l-img {
        max-width: 170px;
    }
    .f12{flex-direction: column;}
    .f12 ul{    width: 100%;
        display: flex;
        justify-content: flex-end;
       }
    
    
    .f12 ul li a{font-size: 18px!important;}
    .ipad {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        }
}
@media only screen and (max-width: 767px) {
    
    .card-body {
    height: auto !important;
}
    
    .owl-theme .owl-controls .owl-buttons div {
font-size: 6em !important;background-color: transparent !important;}
   
.owl-next {
    position: absolute;
    left: 2em;
}

img.navtext-right {
    max-width: 100px;
}
img.navtext-left {
    max-width: 100px;
    }
    img.l-img {
        max-width: 120px;
    }
.nav-tabs .nav-item {
    width: 100% !important;
    margin-bottom: -1px;
    }
    .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    border-radius: 0px !important;
    border: 4px solid #d3d3d6;
    font-size: 20px !important;
    font-weight: normal !important;
    color: #3f3a60 !important;
    background-color: #dee2e6 !important;
    border-color: transparent!important;
        }
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link {
    border-radius: 0px !important;
    border: 4px solid #d3d3d6 !important;
    font-size: 20px !important;
    font-weight: normal !important;
    color: #3f3a60 !important;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #dee2e600 !important;
    }
    .navbar-dark .navbar-toggler {
        color: rgb(146 146 146 / 33%);
        border-color: rgb(181 181 181 / 66%);
        background-color: #444444;
    }
.header-module{text-align:center;}
}

.t-c{margin-right: 10px;
    color: #43c1af;}

.tick-1 {
    max-width: 35px;
    margin-right: 15px;
}
.col-md-12.ux-sec-3 {
    padding: 60px 15px;
}

/*Testimonial code*/
.demo{margin-top: 50px;}

.testimonial-content.testimonial-1 {
    background-color: #007da5!important;
}

.testimonial-content.testimonial-2 {
    background-color: #009eba!important;
}

.testimonial-content.testimonial-3 {
    background-color: #6bbdd1!important;
}
.testimonial .description {
    font-family: 'niveau_groteskregular' !important;
    font-size: 21px;
    font-style: inherit !important;
    color: #ffffff !important;
    line-height: 25px !important;
    margin: 0;
}
.fakeimg {
    height: 200px;
    background: #aaa;
  }
  .demo{ background: #f8f8f8; }
.testimonial{
    margin: 0px !important;
}
.testimonial .testimonial-content{
    height: 35em !important;
    padding: 35px 25px 35px 50px;
    margin-bottom: 35px;
    position: relative;
}
.testimonial .testimonial-content:after{
    display: none !important;
}
.testimonial-content .testimonial-icon{
    width: 50px;
    height: 45px;
    text-align: center;
    font-size: 40px;
    color: #fff;
    line-height: 42px;
    position: inherit;
    top: -9px;
    left: 0px;
}
.testimonial-content .testimonial-icon:before{
display: none !important;
}
.testimonial .description{
    font-family: 'niveau_groteskregular' !important;
    font-size: 21px;
    font-style: italic;
    color: #8a8a8a;
    line-height: 23px;
    margin: 0;
}
.testimonial .title{
    font-family: 'niveau_groteskregular' !important;
    display: block;
    font-size: 18px;
    color: #d6f7f6;
    letter-spacing: 1px;
    margin: 0 0 5px 0;
}
.web-text{
    display: block;
    font-size: 18px;
    color: #fff;}

div#collapsibleNavbar {
    padding-right: 20px;
}
.testimonial .post {
    display: block;
    font-size: 18px;
    color: #d6f7f6;
}
.owl-theme .owl-controls{
    margin-top: 20px;
}
.owl-theme .owl-controls .owl-page span{
    display: none !important;
    background: #ccc;
    opacity: 1;
    transition: all 0.4s ease 0s;
}
.owl-theme .owl-controls .owl-page.active span,
.owl-theme .owl-controls.clickable .owl-page:hover span{
    display: none;
}
  
.owl-theme .owl-controls {
    margin-top: 10px;
    text-align: center;
    
}
.b-tn {position: absolute;bottom: 0px ;padding-bottom: 20px;}

.col-md-12.top-sec{height: 650px !important;}

.owl-buttons {
    position: absolute;
    top: 20%;
}

.fa-angle-right:before {
    background: url(../img/imageo1.png) no-repeat center !important;}

.col-md-12.ux-sec-2 {
    position: relative;
    padding: 60px 15px;
    z-index: 1;
}
.sect-img {
    position: absolute;
    z-index: -1;
}

@media only screen and (min-width: 1281px) and (max-width: 3000px) {
.col-xs-12.col-sm-4.col-md-2.custom-dix {max-width: 13.4%;}

.owl-theme .owl-controls .owl-buttons div {
font-size: 10em !important;background-color: transparent !important;}
   
.owl-next {
    position: absolute;
    left: 7.6em;
}

img.navtext-right {
    max-width: 100px;
}
img.navtext-left {
    max-width: 100px;
    }
}

/*MAC Screen*/
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
    .nav-tabs .nav-item {
    margin: 12px 12px -3px 12px !important;
    width: 31% !important;
    margin-bottom: -1px;
}
.col-xs-12.col-sm-4.col-md-2.custom-dix {max-width: 13.8%;}

.owl-theme .owl-controls .owl-buttons div {
font-size: 10em !important;background-color: transparent !important;}
   
.owl-next {
    position: absolute;
    left: 7.1em;
}

img.navtext-right {
    max-width: 100px;
}
img.navtext-left {
    max-width: 100px;
    }
}

/*crousal-arrow*/
@media only screen and (min-width: 0px) and (max-width: 320px) {.owl-next {
    position: absolute;
    left: 2em !important;
}}
@media only screen and (min-width: 321px) and (max-width: 375px) {.owl-next {
    position: absolute;
    left: 2.5em !important;
}}
@media only screen and (min-width: 376px) and (max-width: 425px) {.owl-next {
    position: absolute;
    left: 2.8em !important;
}}

img.Q-class{max-width: 100%;}

/*IE*/
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.card.card-1 {
    padding: 0px !important;
    background-color: #727b83 !important;
}
    
    h5.card-text {text-align: left;}
    p.card-text{text-align: left;}
.card.card-2 {
    padding: 0px !important;
    background-color: #899298 !important;
}
.card.card-3 {
    padding: 0px !important;
    background-color: #abb0b4 !important;
}
.card.card-4 {
    padding: 0px !important;
    background-color: #bcc0c2 !important;

}
img.l-img {
    max-width: 16%;
}
    :-ms-input-placeholder {
   color:#655dc6 !important;
    }

}


/*testimonial quotes*/
i.fa.fa-quote-left:before{
    background: url(../img/quotes.png) !important;}

/*placeholder*/
input::-webkit-input-placeholder{
    color:#655dc6 !important;
}
input:-moz-placeholder {
    color:#655dc6 !important;
}
:-ms-input-placeholder {
   color:blue!important;
}

.col-md-8.U-txt{
    color: #5b6670;
    font-size: 16px;
    font-family: 'niveau_groteskregular' !important;
    padding-left: 0px;
}




/*==tab-main-bg==*/
.tab-content>.active {
background:unset;
position: relative;
}
.sky-round-bg-main {background: url(../img/background-ui.png) no-repeat center;z-index: 9;position: absolute;width: 100%;height: 100%;top: 0 !important;right: 0 !important;background-position: top right;object-fit: cover;background-size: 1090px;}
.col-md-12.ux-sec-2 p.tabs-p {
    position: relative;
    z-index: 99;
}
#buzz .col-md-12.ux-sec-2 ~ .col-md-12.ux-sec-2 .row {
    z-index: 99;
    position: relative;
}

#buzz .col-md-12.ux-sec-2 {z-index: unset;}
#buzz .col-md-12.ux-sec-2 ~ .col-md-12.ux-sec-2 {z-index: unset;}
#buzz .col-md-12.ux-sec-3 h2.tabs-h.tabs-h-1 {position: relative;z-index: 9;}
#buzz .col-md-12.ux-sec-3 .col-md-12 {position: relative;z-index: 9;}
#buzz .col-md-12.ux-sec-3 .col-md-8.U-txt {position: relative;z-index: 9;}
/*==/tab-main-bg==*/


`
export const template1Html = `<nav class="navbar navbar-expand-sm bg-dark-1 navbar-dark" >
<img class="l-img"src="img/ezgif.com-gif-to-apng.png">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="f12 collapse navbar-collapse" id="collapsibleNavbar">
   <ul class="navbar-nav">
      <li class="nav-item">
         <a class="nav-link nav-link-1" href="#">Work</a>
      </li>
      <li class="nav-item">
         <a class="nav-link nav-link-1" href="#">Services</a>
      </li>
      <li class="nav-item">
         <a class="nav-link nav-link-1" href="#">Resources</a>
      </li>
      <li class="nav-item">
         <a class="nav-link nav-link-1" href="#">People</a>
      </li>
      <li class="nav-item">
         <a class="nav-link nav-link-1" href="#">Join</a>
      </li>
   </ul>
   <div class="ipad">
      <div class="header-module">
         <button class="custm-butt">Contact Us</button>
      </div>
   </div>
</div>
</nav>
<div class="container-fluid" style="margin-top:180px;">
<div class="row">
   <div class="col-md-12 top-sec">
      <div class="col-sm-6">
         <h5 class="s-head service-font">Services</h5>
         <h1 class="h-head">Digital Experiences</h1>
         <div class="st-desc great-font">Great digital experience is a critical component of business success. Businesses who want to survive and succeed in today’s continuously evolving and constantly changing environment will have to make sure they are offering the best digital experiences to their customers. Hence, we at Bright Development, follow an unparalleled approach to provide digital experiences that have aesthetically appealing designs, excellent usability, quality content, and high performance.</div>
         <button class="custm-butt">Contact Us</button>
      </div>
      <div class="col-sm-6">
      </div>
   </div>
   <div class="col-md-12 tqb-sec">
      <div class="col-md-12">
         <h2 style=" color: #007da5;font-family: SofiaPro-SemiBold ;font-size:28px;">About  Our Offering</h2>
      </div>
      <ul class="nav nav-tabs" role="tablist">
         <li class="nav-item">
            <a class="nav-link " href="#profile" role="tab" data-toggle="tab">Mobile Applications</a>
         </li>
         <li class="nav-item">
            <a class="nav-link active show" href="#buzz" role="tab" data-toggle="tab">UX/UI Design</a>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="#references" role="tab" data-toggle="tab">Dashboards & Tools</a>
         </li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
         <div role="tabpanel" class="tab-pane fade in " id="profile">
         </div>
         <div role="tabpanel" class="tab-pane fade active show" id="buzz">
            <div class="sky-round-bg-main"></div>
             <div class="col-md-12 ux-sec-2" style="background-color:#d0d0d2;">
            <div class="col-md-8 ux-sec-1">
               <h2 class="tabs-h">UX/UI Design</h2>
               <p class="tabs-p">In this era when the number of smartphone users is skyrocketing, we understand the drastic difference a mobile app can make for your business. That’s why Bright Development builds powerful applications for iOS/Android that meet your everyday business needs. With our mobile app development services,we help you become a successful brand with a great story to tell.</p>
               <p class="tabs-p">Instead of focusing solely on technology, we examine all sorts of methods to expand and enhance the customer experience so that your customers can benefit fully from every aspect of your product. Here’s how we do it.</p>
                 </div></div>
            <div class="col-md-12 ux-sec-2" style="background-color: #dbdcde;">
               <h2 class="tabs-h">Our Process</h2>
               <div class="row">
                  <div class="column">
                     <div class="card card-1" >
                        <div class="top-s">
                           <img class="card-img-top" src="img/imageo4.png" alt="Card image" style="width:100%">
                        </div>
                        <div class="card-body">
                           <h4 class="card-title">Step 1.</h4>
                           <h5 class="card-text">Understanding your customers</h5>
                           <p class="card-text">We research the market and analyze your customers’ likes and dislikes. Understanding your customers helps us see which elements attract them to your product. This is essential for creating a successful digital experience.</p>
                        </div>
                     </div>
                     <div class="L-1"><img class="im-card" src="img/i1.svg"></div>
                  </div>
                  <div class="column">
                     <div class="card card-2" >
                        <div class="top-s">
                           <img class="card-img-top" src="img/imageo3.png" alt="Card image" style="width:100%">
                        </div>
                        <div class="card-body">
                           <h4 class="card-title">Step 2.</h4>
                           <h5 class="card-text">Content and digital experience planning</h5>
                           <p class="card-text">Based on the collected data, we plan the customer experience of your website or app. The idea is to design your website or app in such a way that users get hooked.</p>
                        </div>
                     </div>
                     <div class="L-2"><img class="im-card"src="img/i2.svg"></div>
                  </div>
                  <div class="column">
                     <div class="card card-3" >
                        <div class="top-s">
                           <img class="card-img-top" src="img/imageo5.png" alt="Card image" style="width:100%">
                        </div>
                        <div class="card-body">
                           <h4 class="card-title">Step 3.</h4>
                           <h5 class="card-text">UX/UI design and development</h5>
                           <p class="card-text">Based on the content plan, our UX/UI designers begin creating the UXUI design of your website or app.</p>
                        </div>
                     </div>
                     <div class="L-3"><img class="im-card" src="img/i3.svg"></div>
                  </div>
                  <div class="column">
                     <div class="card card-4" >
                        <div class="top-s">
                           <img class="card-img-top" src="img/imageo2.png" alt="Card image" style="width:100%">
                        </div>
                        <div class="card-body">
                           <h4 class="card-title">Step 4.</h4>
                           <h5 class="card-text">Refining the digital experience</h5>
                           <p class="card-text">After the design and development, we’ll continue to check your website and make necessary modifications and improvements.</p>
                        </div>
                     </div>
                     <div class="L-4"><img class="im-card" src="img/i4.svg"></div>
                  </div>
               </div>
            </div>
            <div class="col-md-12 ux-sec-3" style="background-color: #e1e2e4;">
               <h2 class="tabs-h tabs-h-1">UX/UI Design Services We Offer</h2>
               <div class="col-md-12" style="margin: 30px 0px;padding-left:0px;">
                  <a class="L-Link" href="#">Strategies for Social Media </a>
                  <a class="L-Link" href="#">Software development using UX methodologies</a>  
               </div>
               <div class="col-md-8 U-txt">We understand customer behavior well, which is an essential part of creating UI/UX services that excel in themarket. We follow advanced UX research methods that are backed by surveys and interviews with focus groups.</div>
            </div>
            <div class="col-md-12 ux-sec-3" style="background-color: #ededed;">
               <h2 class="tabs-h tabs-h-1">Why Choose Bright Development?</h2>
               <div class="col-md-12" style="margin: 30px 0px;padding-left: 0px;">
                  <ul class="custom-focus">
                     <li ><img class="tick-1" src="img/tick-new.png">We focus on every single detail so that customers get everything they want.</li>
                     <li><img class="tick-1" src="img/tick-new.png">We ensure customers spend more time on your website and consume the content.</li>
                     <li><img class="tick-1" src="img/tick-new.png">We tell a brand story across multiple channels with your interface and design.</li>
                  </ul>
               </div>
            </div>
         
         <div role="tabpanel" class="tab-pane fade" id="references"></div>
      </div></div>
   </div>
   <div class="col-md-12 serch-sec">
      <div class="sec-1">
         <div class="left-col-1">
            <h2 class="lqd-highlight-underline lqd-highlight-grow-left"><span class="ld-fh-txt"> Start Now</span></h2>
            <h5 style="color: #ffffff;text-align: left" class="vc_custom_heading vc_custom_1595842755130">Get a project estimation.</h5>
         </div>
         <div class="right-col-1">
            <p class="ld_sf_paragraph">
            <div class="input-group mb-3">
               <input type="text" class="form-control" placeholder="Enter your email..." id="mail" name="email">
               <div class="input-group-append">
                  <span class="input-group-text">Continue</span>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="col-md-12 testimonail-sec">
      <h2 class="tabs-h tabs-h-1 "><span>Testimonials </span> <span class="trust-text">From our Trusted Client</span></h2>
      <div class="demo">
         <div class="">
            <div class="row">
               <div class="col-md-12">
                  <div id="testimonial-slider" class="owl-carousel">
                     <div class="testimonial ">
                        <div class="testimonial-content testimonial-1">
                           <div class="testimonial-icon">
                              <img class="Q-class" src="img/quotes.png">
                           </div>
                           <p class="description">
                              Their uncompromising quality and commitment to seamless communication shone through as they brought results to the table year after year.
                           </p>
                           <div class="b-tn">
                              <h3 class="title">Lisa Dahl, Executive</h3>
                              <span class="post">Chef and Owner of Dahl Restaurant Group
                              </span>
                              <span class="web-text"><a style="color:#fff;" href="">dahlrestaurant.com</a></span>
                           </div>
                        </div>
                     </div>
                     <div class="testimonial ">
                        <div class="testimonial-content testimonial-2">
                           <div class="testimonial-icon">
                              <img class="Q-class" src="img/quotes.png">
                           </div>
                           <p class="description">
                              Greg and his team have been great to work with. They were able to do develop a simple solution to a complex problem with their willingness to listen and understand our needs as opposed to making assumptions and jumping to conclusions.
                           </p>
                           <div class="b-tn">
                              <h3 class="title">Noah Krimm, CEO of</h3>
                              <span class="post">Hindon Industries </span>
                              <span class="web-text"><a style="color:#fff;"  href="">hindon.com</a></span>
                           </div>
                        </div>
                     </div>
                     <div class="testimonial ">
                        <div class="testimonial-content testimonial-3">
                           <div class="testimonial-icon">
                              <img class="Q-class" src="img/quotes.png">
                           </div>
                           <p class="description">
                              Very responsive, excellent service. Bright Development completed the project successfully by improving 3 pages on our website. Already seeing an increase in traffic! Greg and Peter understand best practices when it comes to Wordpress, Hubspot, and creative a positive user experience.
                           </p>
                           <div class="b-tn">
                              <h3 class="title">Jake Pinkus, CEO of</h3>
                              <span class="post"> Pinkus Partners<br>
                              dahlrestauant.com</span>
                              <span class="web-text"><a style="color:#fff;"  href="">pinkus.com</a></span>
                           </div>
                        </div>
                     </div>
                     <div class="testimonial ">
                        <div class="testimonial-content testimonial-1">
                           <div class="testimonial-icon">
                              <img class="Q-class" src="img/quotes.png">
                           </div>
                           <p class="description">
                              “Bright was a pleasure to work with. Very professional, communicative and super quick with the job.” - www.roanoke.edu
                           </p>
                           <div class="b-tn">
                              <h3 class="title">Lisa Dahi,Executive</h3>
                              <span class="post">Chef and Owner<br>
                              of Dahl Restaurant<br>
                              Group<br>
                              <a style="color:#fff;"  href="">dahlrestauant.com</a></span>
                           </div>
                        </div>
                     </div>
                     <div class="testimonial ">
                        <div class="testimonial-content testimonial-2">
                           <div class="testimonial-icon">
                              <img class="Q-class" src="img/quotes.png">
                           </div>
                           <p class="description">
                              “Bright was a pleasure to work with. Very professional, communicative and super quick with the job.” - www.roanoke.edu“Bright Development was a dream to work with! They were hired to finish a website that they did not start. They truly are the trifecta: knows their stuff, able to communicate clearly and punctual with deadlines. I will definitely work with Bright again.” - www.stillmorellc.com
                           </p>
                           <div class="b-tn">
                              <h3 class="title">Lisa Dahi,Executive</h3>
                              <span class="post">Chef and Owner<br>
                              of Dahl Restaurant<br>
                              Group<br>
                              <a style="color:#fff;"  href="">dahlrestauant.com</a></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
<div class="jumbotron text-center" style="margin-bottom:0">
<section id="footer">
   <div class="col-md-12">
      <div class="row text-center text-xs-center text-sm-left text-md-left">
         <div class="col-xs-12 col-sm-4 col-md-2">
            <img class="F-logo"src="img/footer-lofo-w.png">	
         </div>
         <div class="col-xs-12 col-sm-4 col-md-2 custom-dix">
            <h5>Welcome</h5>
            <ul class="list-unstyled quick-links">
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
            </ul>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-2 custom-dix">
            <h5>Work</h5>
            <ul class="list-unstyled quick-links">
               <li><a href="#">Industry</a></li>
               <li><a href="#">Industry</a></li>
               <li><a href="#">Industry</a></li>
               <li><a href="#">Industry</a></li>
               <li><a href="#">Industry</a></li>
               <li><a href="#">Industry</a></li>
            </ul>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-2 custom-dix">
            <h5>Resources</h5>
            <ul class="list-unstyled quick-links">
               <li><a href="#">SEO</a></li>
               <li><a href="#">SEO</a></li>
               <li><a href="#">SEO</a></li>
               <li><a href="#">SEO</a></li>
               <li><a href="#">SEO</a></li>
               <li><a href="#">SEO</a></li>
            </ul>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-2 custom-dix">
            <h5>Peoples</h5>
            <ul class="list-unstyled quick-links">
               <li><a href="#">Leadership</a></li>
               <li><a href="#">our values</a></li>
            </ul>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-2 custom-dix">
            <h5>Join</h5>
            <ul class="list-unstyled quick-links">
               <li><a href="#">Opertunities</a></li>
               <li><a href="#">internship</a></li>
            </ul>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-2 custom-dix">
            <h5>Contact</h5>
            <ul class="list-unstyled quick-links">
               <li><a href="#">Hours</a></li>
               <li><a href="#">9am to 5pm EST</a></li>
               <li><a href="#">Monday to Saturday</a></li>
               <ul class="list-unstyled quick-links">
                  <h5 style="margin-bottom:0px;padding-bottom: 0px;margin-top: 20px;">Social</h5>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Facebook</a></li>
               </ul>
            </ul>
         </div>
      </div>
      <div class="row">
         <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2  text-white">
            <p><u style="text-decoration: none;"><a href="#">©2020 Bright Development LLC. All Rights Reserved. 666th Street, Nowwhere, NW 11111</a></u></p>
            <p class="h6"><span class="t-c"><a  href="#"></a>Terms and Conditions</span><span class="t-c">Privacy policy</span></p>
         </div>
         <hr>
      </div>
   </div>
</section>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[980,2],
      itemsTablet:[768,2],
      itemsMobile:[650,1],
      pagination:false,
      navigation:true,
      navigationText : ['<img class="T-D" src="img/L-arrow-n.png">','<img class="T-D" src="img/R-arrow-n.png">'],
      slideSpeed:1000,
      autoPlay:true
      

  });
});
</script>`