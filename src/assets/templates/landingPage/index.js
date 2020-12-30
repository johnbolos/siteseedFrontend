import { assetsUrl } from "../../../settings";

export const customCss = `
@font-face {
  font-family: "Roboto-Bold";
  src: url("${assetsUrl}/templates/landingPage/fonts/Roboto-Bold.eot"); /* IE9 Compat Modes */
  src: url("${assetsUrl}/templates/landingPage/fonts/Roboto-Bold.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Bold.otf") format("opentype"), /* Open Type Font */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Bold.svg") format("svg"), /* Legacy iOS */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Bold.ttf") format("truetype"), /* Safari, Android, iOS */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Bold.woff") format("woff"), /* Modern Browsers */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Bold.woff2") format("woff2"); /* Modern Browsers */
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Roboto-Medium";
  src: url("${assetsUrl}/templates/landingPage/fonts/Roboto-Medium.eot"); /* IE9 Compat Modes */
  src: url("${assetsUrl}/templates/landingPage/fonts/Roboto-Medium.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Medium.otf") format("opentype"), /* Open Type Font */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Medium.svg") format("svg"), /* Legacy iOS */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Medium.ttf") format("truetype"), /* Safari, Android, iOS */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Medium.woff") format("woff"), /* Modern Browsers */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Medium.woff2") format("woff2"); /* Modern Browsers */
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Roboto-Regular";
  src: url("${assetsUrl}/templates/landingPage/fonts/Roboto-Regular.eot"); /* IE9 Compat Modes */
  src: url("${assetsUrl}/templates/landingPage/fonts/Roboto-Regular.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Regular.otf") format("opentype"), /* Open Type Font */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Regular.svg") format("svg"), /* Legacy iOS */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Regular.ttf") format("truetype"), /* Safari, Android, iOS */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Regular.woff") format("woff"), /* Modern Browsers */
    url("${assetsUrl}/templates/landingPage/fonts/Roboto-Regular.woff2") format("woff2"); /* Modern Browsers */
  font-weight: normal;
  font-style: normal;
}


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


@media (min-width:0px) and (max-width:567px){
    .custom-sec9 .custom-sec9-row1 span.pmt-plan img {margin-top: -25px;margin-left: 5px;text-align: right;float: right;border: 0;height: 45px;}
    .custom-sec9 .custom-sec9-row1 label.switch {margin-left: 5px;margin-right: 5px;}
    .custom-sec2 .sec2-col-left .custom-playbtn .left a {margin-right: 15px;   }
    body .custom-sec2 h1 {width: 80%;}
    .custom-sec12.custom-footer ul li {list-style-type: none;display: inline-block;text-align: center;padding: 0;width: 48%;margin-bottom: 20px;}
    .custom-sec12.custom-footer ul li a {color: #6E6791;font-size: 16px;font-weight: normal;}
    }
    
    
    @media (min-width:0px) and (max-width:767px){	
    body .l-18 {font-size: 13px;line-height:22px;}
    body .l-16 {    font-size: 13px;    line-height: 22px;}
    html,body {overflow-x:hidden;}	
    body .navbar {padding: 15px 0px;}	
    .custom-sec2 .sec2-col-left {padding-left: 0;    padding-right: 0;}
    body h1 {font-size: 42px;line-height: 49.22px;}
    body h1 br {    display: none;}
    button.navbar-toggler {    color: #ffffff !important;    background: #23B682;    border-radius: 0;border: 0;}
    .navbar-collapse.collapse {background: #23B682;margin-top: -2px;border-radius: 0;padding-top: 5px;padding-bottom: 20px;}
    .custom-sec1 .navbar-light .navbar-nav a.nav-link {font-size: 14px;color: #ffffff;margin: 0;padding: 15px 15px 0px 15px;font-family: "Roboto-Regular";}
    body .custom-sec2 {margin-top: 0;padding-top: 0;background: transparent;}
    .custom-sec2 .sec2-col-right img {margin-bottom: 0;width: 100%;margin-top: 30px;}
    body .sec2-col-left {padding-bottom: 50px;}
    .sec2-col-right-mob {margin-top: 158px;padding-bottom: 50px;}
    .sec2-col-right-mob img {margin-top: -122px;width: 107%;}
    .sec2-col-right-mob {background: url(${assetsUrl}/templates/landingPage/images/top-gradient.png);background-size: cover;}
    .sec2-col-right{display:none;}
    .custom-sec3 {padding-top: 20px;padding-bottom: 45px;}
    .custom-sec4 .sec4-col-center {padding-left: 0px;padding-right: 0px;}
    .custom-sec4 .sec4-col-center p br {display: none;}
    .custom-sec4 p.l-18 {font-size: 13px;line-height: 22px;}
    .custom-sec4 .custom-sec4-row2 p.l-16 br {display: none;}
    .custom-sec3 ul {padding: 0;text-align: center;width: 100%;margin: 0 auto;}
    .custom-sec3 ul li {list-style-type: none;float: left;padding: 15px 15px 5px 15px;width: 50%;text-align: center;min-height: 80px;margin-top: 20px;}
    .custom-sec3 ul li:last-child {width: 100%;}
    .custom-sec4-row2 .col-md-3.col-lg-3.col-sm-12 {    margin-bottom: 30px;}
    .custom-sec4 {text-align: center;padding-top: 20px;}
    .custom-sec4 h2 {font-size: 42px;}
    .custom-sec5 {margin-bottom: 45px;padding-top: 30px;}
    .custom-sec5 .custom-sec5-row1 .coll {padding-left: 0px;padding-right: 0px;}
    .custom-sec5 .custom-sec5-row1 .coll img {width: 107%;}
    body h2 {font-size: 42px;} 
    .custom-sec5 .custom-sec5-row1 {width: 100%;margin: 0 auto;}
    .custom-sec5 .custom-sec5-row1 .custom-sec5-colr {padding-right: 0px;padding-left: 0px;padding-top: 25px;}
    .custom-sec5 .custom-sec5-row1 .custom-sec5-colr br {display: none;}
    .custom-sec5 .custom-sec5-row1 .custom-sec5-colr .ullid li .right {float: left;width: 70%;}
    .custom-sec6 .row.custom-sec6-row1 {width: 100%;margin: 0 auto;}
    .custom-sec6 .row.custom-sec6-row1 .custom-sec6-coll {text-align: left;padding: 0;}
    .custom-sec6-coll-inner {padding-right: 0;}
    .custom-sec6-coll-inner p br {display: none;}
    .custom-sec6 .custom-sec6-row1 .custom-sec6-colr {padding-right: 0;padding-left: 0px;padding-bottom: 45px;}
    .custom-sec6 .custom-sec6-row1 {    flex-direction: column-reverse;}
    .custom-sec6 {margin-top: 80px;}
    .custom-sec7 .row.custom-sec7-row1 {width: 100%;margin: 0 auto;}
    .custom-sec7 {margin-top: 35px;}
    .custom-sec7 .row.custom-sec7-row1 .custom-sec7-coll {padding-left: 0;padding-right: 0px;padding-bottom: 45px;}
    .custom-sec7 .row.custom-sec7-row1 .custom-sec7-colr {padding-right: 0;padding-left: 0px;}
    .custom-sec7-colr-inner {padding-left: 0;}
    .custom-sec8 .custom-sec8-row1{flex-direction: column-reverse;}
    .custom-sec8 {padding-bottom: 60px;margin-top: 35px;}
    .custom-sec8 .row.custom-sec8-row1 {width: 100%;margin: 0 auto;}
    .custom-sec8 .row.custom-sec8-row1 .custom-sec8-coll {padding-left: 0px;padding-right: 0px;text-align: left;padding-top: 55px;    padding-bottom: 25px;}
    .custom-sec9 .custom-sec9-row2 p.p-usd, .custom-sec9 .custom-sec9-row3 p.p-usd {    display: none;}
    .custom-sec9 .price-data {margin-top: 25px;position: relative;margin-bottom: 35px;}
    .custom-sec8-coll-inner {padding-right: 0;}
    .custom-sec8 .row.custom-sec8-row1 .custom-sec8-coll p br {display: none;}
    .custom-sec8 .row.custom-sec8-row1 .custom-sec8-colr {padding-right: 0;padding-left: 0px;}
    .custom-sec9 {text-align: center;padding-top: 0px;padding-bottom: 0;}
    .custom-sec9 .custom-sec9-row1, .custom-sec9 .custom-sec9-row2, .custom-sec9 .custom-sec9-row3 {width: 100%;margin: 0 auto;}
    .custom-sec9 .sec9-col-center {padding: 0;}
    .custom-sec9 .sec9-col-center p br {display:none;}
    .custom-sec9 .col-md-6.col-lg-6.col-sm-12 {padding: 12px 0px;}
    .custom-sec10 {text-align: center;padding-top: 90px;padding-bottom: 60px;}
    .custom-sec10 h5.l-22 {font-size: 18px;line-height: 21.09px;}
    .custom-sec11 .row .col-md-12.col-lg-12.col-sm-12 {padding: 0;}
    .custom-sec11 .row .col-md-12.col-lg-12.col-sm-12 h2 br {display: none;}
    .testimonial {text-align: center;margin: 0;}
    .custom-sec10 .custom-sec10-row1 {width: 100%;margin: 0 auto;}
    .testimonial .description {font-size: 13px;line-height: 22px}
    .custom-sec10 .custom-sec10-row1 .sec10-col-center {padding-left: 0;padding-right: 0;}
    .custom-sec11 .row {width: 100%;margin: 0 auto;}
    .testimonial .description br {display: none;}
    .custom-sec11 {padding-bottom: 80px;}
    body .owl-theme .owl-controls {margin-top: 30px;text-align: center;}
    .testimonial .post {opacity: 0.7;}
    .custom-sec12.custom-footer {text-align: center;margin-top: 0;margin-bottom: 45px;}
    .custom-sec12.custom-footer .sec12-col-center {padding-left: 0;padding-right: 0;}
    .f-images a {float: left;width: 48%;margin-left:1%;margin-right:1%;}
    .custom-sec12.custom-footer .f-images img {width: 100%;max-height:67px;max-width:180px;margin: 0;}
    .wrapper.menu--is-revealed button.menu-toggle {padding-right: 10px;}
    .custom-sec12 p.l-22 {font-size: 18px;}
    .custom-sec12.custom-footer h2 {margin-top: 20px;margin-bottom: 45px;}
    .ff {margin: 50px auto 35px auto;}
    .custom-sec10 button.accordion::after {top: 21px;}
    body .custom-sec2 {margin-top: 40px;padding-top: 0;}
    }
    
    
    @media (min-width:0px) and (max-width:991px){
    html,body {overflow-x:hidden;}	
    body .navbar {padding: 29px 0px 30px 0px;}
    .custom-nv-right { display: none;}
    .custom-sec1 .navbar-light .navbar-nav .custom-last-child a.nav-link {background: #ffffff;border-radius: 99px;font-size: 14px;width: 160px;padding: 12px;text-align: center;font-family: "Roboto-Bold";color: #23B682;margin-left: 15px;margin-top: 15px;}
    button.navbar-toggler {color: #ffffff !important;background: transparent;border: 1px solid rgb(38 29 86);border-color: rgba(38,29,86,1) !important;border-radius: 99px;padding: 0;width: 42px;height: 42px;}
    button.navbar-toggler span.navbar-toggler-icon {    filter: brightness(0) invert();}
    .navbar-collapse.collapse {background: #23B682;margin-top: -2px;border-radius: 0;padding-top: 5px;padding-bottom: 20px;}
    .custom-sec1 .navbar-light .navbar-nav a.nav-link {font-size: 14px;color: #ffffff;margin: 0;padding: 15px 15px 0px 15px;font-family: "Roboto-Regular";}
    .custom-sec2 .sec2-col-right img {margin-bottom: 0;width: 100%;margin-top: 30px;}
    div#navbarNav {position: fixed;top: 100px;height: 100vh;background: url(${assetsUrl}/templates/landingPage/images/top-gradient.png);z-index: 99;left: 0;opacity: 1 !important;background-size: 100% 100%;transition: visibility .4s ease-in-out, transform .4s ease-in-out;transform: translateX(100%);padding: 0;margin: 0;}
    button.navbar-toggler {z-index: 999;}
    div#navbarNav.show {transform: translateX(0%);}
    div#navbar_top {transform: unset;}
    a.navbar-brand {z-index: 999;padding-top: 0;}
    div#navbarNav ul#menu {height: 100vh;margin-top: 70px;}
    body div#navbarNav ul#menu li a {color: #261D56;width: auto;text-align: center;font-size: 32px;font-family: "Roboto-Medium";margin: 0;padding: 0;}
    body div#navbarNav ul#menu li.nav-item.custom-last-child {text-align: center;margin: 45px auto 0 auto;}
    body div#navbarNav ul#menu li.nav-item.custom-last-child a {    background: #23B682;
    color: #ffffff;
    border-radius: 99px;
    font-size: 14px;
    width: 160px;
    padding: 12px;
    text-align: center;
    font-family: "Roboto-Bold";}
    body div#navbarNav ul#menu li {
    margin-bottom: 30px;
    }
    body.scrollstuck {overflow:hidden;}
    #nav-icon1 {width: 42px;height: 42px;position: relative; -webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);transform: rotate(0deg);-webkit-transition: .5s ease-in-out;-moz-transition: .5s ease-in-out;-o-transition: .5s ease-in-out;transition: .5s ease-in-out;cursor: pointer;}
    #nav-icon1 span {display: block;position: absolute;height: 1.68px;width: 21.84px;background: #261D56;border-radius: 9px;opacity: 1;left: 0;-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);transform: rotate(0deg);-webkit-transition: .25s ease-in-out;-moz-transition: .25s ease-in-out;-o-transition: .25s ease-in-out;transition: .25s ease-in-out;}
    #nav-icon1 span:nth-child(1) {top: 15px;left: 9px;}
    #nav-icon1 span:nth-child(2) {top: 22px;left: 9px;}
    #nav-icon1.open span:nth-child(1) {transition-delay: 0.4s;top: 19px;-webkit-transform: rotate(135deg);-moz-transform: rotate(135deg);-o-transform: rotate(135deg);transform: rotate(135deg);}
    #nav-icon1.open span:nth-child(2) {transition-delay: 0.4s;top: 19px;-webkit-transform: rotate(-135deg);-moz-transform: rotate(-135deg);-o-transform: rotate(-135deg);transform: rotate(-135deg);}
    body .container {padding-left: 25px;padding-right: 25px;}
    }
    
    
    
    @media (min-width:768px) and (max-width:991px){
    .custom-sec2 .sec2-col-left {padding-left: 30px;}
    .custom-sec2 .custom-playbtn .left {float: left;display: block;width: 100%;margin-bottom: 35px;}
    .custom-sec3 ul {width: 100%;}
    body h1 {font-size: 40px;}
    .custom-sec4 .custom-sec4-row2 .col-md-3.col-lg-3.col-sm-12 {width: 50%;min-width: 50%;max-width: 50%;}
    .custom-sec4-row1 p br {display: none;}
    .custom-sec5 .custom-sec5-row1 .custom-sec5-colr .ullid li:first-child .right {float: left;padding-top: 20px;width: 66%;}
    .custom-sec5 .custom-sec5-row1 .custom-sec5-colr .ullid li .right {float: left;width: 66%;} 
    .custom-sec4 h2 {font-size: 35px;}
    body h2 {font-size: 35px;}
    .whole-plan h5 {font-family: "Roboto-Medium";color: #261D56;font-size: 35px;}
    .custom-sec9 .custom-sec9-row1, .custom-sec9 .custom-sec9-row2, .custom-sec9 .custom-sec9-row3 {width: 100%;margin: 0 auto;}
    .custom-sec10 .custom-sec10-row1 {width: 100%;margin: 0 auto;}
    .custom-sec11 .row {width: 100%;margin: 0 auto;}
    .scrollstuck section.custom-sec2 {background: transparent;} 
    }
    
    
    @media (min-width:992px) and (max-width:1100px){
    body h1 {    font-size: 45px;}
    .custom-sec2 .sec2-col-left {    padding-left: 30px;}
    }
    
    @media (min-width: 1024px) and (max-width: 1151px), (min-width: 768px) and (max-width: 1023px), (min-width: 667px) and (max-width: 767px), (max-width: 666px) {
    .VideoHead-popup-video-container {width: calc(100% - 16px * 2);}
    }
    
    @media (min-width:992px) and (max-width:10000px){
    .custom-last-child { display: none;}
    }
    
    @media (min-width:768px) and (max-width:10000px){
    .sec2-col-right-mob { display: none;}
    }

`

export const baseCss = `
body h1,body h2,body h3,body h4,body h5,body h6{color:#261D56;font-family: "Roboto-Medium";}
body .l-18{color:#6E6791;font-family: "Roboto-Regular";font-size:18px;line-height:31px;}
body .l-16{color:#6E6791;font-family: "Roboto-Regular";font-size:16px;line-height:27px;}
body .row {    margin: 0;}
body .container {width:100%; max-width:1200px;}
body h1 { font-size: 62px;}
body h2 {font-size: 50px;}
h5.l-22{color:#261D56;font-family: "Roboto-Regular";font-size:22px;margin: 0;}
.l-22{color:#6E6791;font-family: "Roboto-Regular";font-size:22px;margin: 0;}


body h1,body h2,body h3,body h4,body h5,body h6{color:#261D56;font-family: "Roboto-Medium";}
#navbar_top {transform: translateZ(0);    transition:all 0.5s;}	
.fixed-top {    background: #ffffff; box-shadow:0 2px 6px rgba(0,0,0,0.2);      padding:4px 0;       opacity:1;  animation:slide-down 1s;  }   
body .navbar {    padding:43px 0px 30px 0px;}
body .fixed-top .navbar {    padding: 10px 0px;}
body .navbar .container-fluid {    padding-left: 0;    padding-right: 0;}
.custom-sec1 .navbar-light .navbar-nav a.nav-link {font-size: 14px;color: #261D56;margin: 0px 20px;padding-left: 10px;    padding-right: 10px;font-family: "Roboto-Regular"}
.custom-sec1 .navbar-light .navbar-nav a.nav-link:hover {color: #23B682;}
.custom-sec1 .custom-nv-right a.nav-link {    background: #23B682;    color: #ffffff;    border-radius: 99px;    font-size: 14px;    width: 160px;    padding: 12px;    text-align: center;    font-family: "Roboto-Bold";}
.custom-sec1 .navbar-light .navbar-nav .selected a {font-weight: 700;color: #23B682;}
.custom-sec1 .custom-nv-right a.nav-link:hover {background: #261D56;}



.VideoHead-popup-video {display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(21, 20, 26, 0.8);z-index: 9999;transition: all 0.36s ease-in-out;opacity: 0;visibility: hidden;}
.VideoHead-popup-video.show {transition: opacity 0.36s ease-in-out;opacity: 1;visibility: inherit;display:block;}
.VideoHead-popup-video-container {position: relative;height: calc(100% - 60px * 2);width: calc(100% - 24px * 2);max-width: 1640px;margin: 60px auto;}

.VideoHead-popup-video-placeholder {position: absolute;}
.VideoHead-popup-video-placeholder iframe {position: absolute;left: 0;top: 0;width: 100%;height: 100%;}
.VideoHead-popup-video-exit {position: absolute;top: 19px;right: 26px;width: 24px;height: 24px;transition: opacity 0.2s;}
.VideoHead-popup-video-exit:hover {cursor: pointer;opacity: 0.8;transition: opacity 0.2s;}
.VideoHead-popup-video-exit-line-1 {top: 11px;left: 2px;position: absolute;width: 20px;height: 2px;transform: rotate(-45deg);background-color: #ffffff;}
.VideoHead-popup-video-exit-line-2 {top: 11px;left: 2px;position: absolute;width: 20px;height: 2px;transform: rotate(45deg);background-color: #ffffff;}



.custom-sec2 .sec2-col-left .custom-playbtn .left a:hover {background: #261D56;}
.custom-sec2 .sec2-col-left p{padding-top: 7px;}
.custom-sec2 .sec2-col-left .custom-playbtn {float: left;width: 100%;margin-top: 40px;}
.custom-sec2 .sec2-col-left .custom-playbtn .left a {background: #23B682;color: #ffffff;border-radius: 99px;font-size: 14px;width: 160px;padding: 14px 24px;text-align: center;font-family: "Roboto-Bold";margin-right: 25px;}
.custom-sec2 .custom-playbtn .right a {    float: left;    font-family: "Roboto-Regular";    font-size: 14px;    color: #6E6791;}
.custom-sec2 .custom-playbtn .right a:hover{text-decoration:none;}
.custom-sec2 .custom-playbtn .right a span {padding-top: 3px;display: inline-block;}
.custom-sec2 {background: url(${assetsUrl}/templates/landingPage/images/top-gradient.png);background-size: 50% 87%;background-repeat: no-repeat;background-position: top right;margin-top: -131px;padding-top: 100px;}
.custom-sec2 .sec2-col-left {padding-left: 60px;}
.custom-sec2 .custom-playbtn .left {float: left;}
.custom-sec2 .custom-playbtn .right {float: left;} 
.custom-sec2 .custom-playbtn .right a img {    float: left;    margin-top: -8px;    margin-right: 15px;}
.custom-sec2 .sec2-col-left .custom-playbtn a:hover {    cursor: pointer;}
.custom-sec2 .custom-playbtn .right a:hover .green {    display: block !important;}
.custom-sec2 .custom-playbtn .right a:hover .blue {    display: none;}



.custom-sec3 {padding-top: 0px;    padding-bottom: 0px;}
.custom-sec3 ul {padding: 0;text-align: center;width: 80%;margin: 0 auto;}
.custom-sec3 ul li {list-style-type: none;float: left;padding: 20px 15px 45px 15px;width: 20%;text-align: center;}


.custom-sec4 {text-align: center; padding-top:100px;}
.custom-sec4 h2 { font-size: 50px;}
.custom-sec4 h5 { font-size: 22px;margin-top: 20px;    margin-bottom: 12px;}
.custom-sec4 .custom-sec4-row2 {    width: 90%;    margin: 30px auto 0 auto;}


.custom-sec5 {margin-bottom: 45px;padding-top:100px;}
.custom-sec5 .custom-sec5-row1 {width: 90%;margin: 0 auto;}
.custom-sec5 .custom-sec5-row1 .coll {padding-left: 30px; }
.custom-sec5 .custom-sec5-row1 .custom-sec5-colr {padding-right: 30px;}
.custom-sec5 .custom-sec5-row1 .coll img {  width: 100%;}
.custom-sec5 .custom-sec5-row1 .custom-sec5-colr .ullid {float: left;width: 100%;}
.custom-sec5 .custom-sec5-row1 .custom-sec5-colr .ullid li {float: left;width: 100%;list-style-type: none;    margin-bottom: 10px;}
.custom-sec5 .custom-sec5-row1 .custom-sec5-colr .ullid li .left {float: left;margin-right: 35px;}
.custom-sec5 .custom-sec5-row1 .custom-sec5-colr .ullid li .right {float: left;}
.custom-sec5 .custom-sec5-row1 .custom-sec5-colr .ullid li:first-child .right {    float: left;    padding-top: 20px;}
.custom-sec5 .custom-sec5-row1 .custom-sec5-colr .ullid li .right p {    margin-bottom: 0;}
.custom-sec5 .custom-sec5-row1 .custom-sec5-colr .ullid li .right h5 {font-size: 22px;}


.custom-sec6 .row.custom-sec6-row1 {width: 90%;margin: 0 auto;}
.custom-sec6 .row.custom-sec6-row1 .custom-sec6-coll {text-align: right;}
.custom-sec6 .custom-sec6-row1 .custom-sec6-coll {padding-left: 30px;padding-right: 0px; }
.custom-sec6 .custom-sec6-row1 .custom-sec6-colr {padding-right: 30px;padding-left: 0px;}
.custom-sec6 .custom-sec6-row1 .custom-sec6-colr img {    width: 100%;}
.custom-sec6-coll-inner {    padding-right: 30px;}


.custom-sec7 .row.custom-sec7-row1 {width: 90%;margin: 0 auto;}
.custom-sec7 .row.custom-sec7-row1 .custom-sec7-coll {text-align: right;}
.custom-sec7 .row.custom-sec7-row1 .custom-sec7-coll {padding-left: 30px;padding-right: 0px; }
.custom-sec7 .row.custom-sec7-row1 .custom-sec7-colr {padding-right: 30px;padding-left: 0px;}
.custom-sec7 .custom-sec7-row1 .custom-sec7-coll img {    width: 100%;}
.custom-sec7-colr-inner {    padding-left: 30px;}


.custom-sec8{    padding-bottom: 60px;}
.custom-sec8 .row.custom-sec8-row1 {width: 90%;margin: 0 auto;}
.custom-sec8 .row.custom-sec8-row1 .custom-sec8-coll {text-align: right;}
.custom-sec8 .row.custom-sec8-row1 .custom-sec8-coll {padding-left: 30px;padding-right: 0px; }
.custom-sec8 .row.custom-sec8-row1 .custom-sec8-colr {padding-right: 30px;padding-left: 0px;}
.custom-sec8 .custom-sec8-row1 .custom-sec8-colr img {    width: 100%;}
.custom-sec8-coll-inner {    padding-right: 30px;}



.custom-sec9 {text-align: center;padding-top: 90px;padding-bottom: 60px;}
.custom-sec9 h2 {    margin-bottom: 18px;}
.custom-sec9 .custom-sec9-row1, .custom-sec9 .custom-sec9-row2, .custom-sec9 .custom-sec9-row3 {width: 70%; margin: 0 auto;}
.custom-sec9 .plan-inactive {display:none !important;}
.custom-sec9 .custom-sec9-row2 p.p-usd select#countries, .custom-sec9 .custom-sec9-row3 p.p-usd select#countries {color: #261D56;font-family: "Roboto-Medium";font-size: 16px;border: 0;-moz-appearance: none;-webkit-appearance: none;appearance: none;width:auto;}
select::-ms-expand {display: none;border: 0;}
select {-webkit-appearance: none;-moz-appearance: none;text-indent: 1px;text-overflow: '';border: 0;}
.custom-sec9 .custom-sec9-row2 p.p-usd select#select-monthly:focus, .custom-sec9 .custom-sec9-row3 p.p-usd select#select-yearly:focus {outline: none;}
.custom-sec9 .switch {position: relative;display: inline-block;width: 40px;height: 22px;}
.custom-sec9 .switch input { opacity: 0;width: 0;height: 0;}
.custom-sec9 .slider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #ccc;-webkit-transition: .4s;transition: .4s;}
.custom-sec9 .slider:before {position: absolute;content: "";height: 18px;width: 18px;left: 2px;bottom: 2px;background-color: white;-webkit-transition: .4s;transition: .4s;}
.custom-sec9 input:checked + .slider {background-color: #23B682;}
.custom-sec9 input:focus + .slider {box-shadow: 0 0 1px #23B682;}
.custom-sec9 input:checked + .slider:before {-webkit-transform: translateX(18px);-ms-transform: translateX(18px);transform: translateX(18px);}
.custom-sec9 .slider.round {border-radius: 34px;}
.custom-sec9 .slider.round:before {border-radius: 50%;}
.custom-sec9 .custom-sec9-row1 span {color: #6E6791;font-family: "Roboto-Medium";font-size: 18px;}
.custom-sec9 .custom-sec9-row1 span.plan-active {color: #261D56;font-family: "Roboto-Bold";font-size: 18px;}
.custom-sec9 .custom-sec9-row1 label.switch {margin-left: 25px;margin-right: 25px;}
.custom-sec9 .price-data {    margin-top: 45px;position: relative;}
.custom-sec9 .custom-sec9-row1 span.pmt-plan img {margin-top: -30px;margin-left: 10px;    position: absolute;}
.custom-sec9 .custom-sec9-row2, .custom-sec9 .custom-sec9-row3 {    margin-top: 17px;}
.custom-sec9 .custom-sec9-row2 p.p-usd, .custom-sec9 .custom-sec9-row3 p.p-usd {text-align: right;color: #6E6791;font-family: "Roboto-Medium";font-size: 16px;    padding-left: 17px;    padding-right: 17px;}
.custom-sec9 .custom-sec9-row2 .col-md-6.col-lg-6.col-sm-12 .whole-plan, .custom-sec9 .custom-sec9-row3 .col-md-6.col-lg-6.col-sm-12 .whole-plan {border: 1px solid #6E6791;border-radius: 10px;padding: 30px;float: left;width: 100%;}
.custom-sec9 .custom-sec9-row2 p.p-usd span select, .custom-sec9 .custom-sec9-row3 p.p-usd span select {border-bottom: 1px solid #261D56;display: inline-block;height: auto;line-height: 17px;}
.whole-plan ul li.no-tik {background: transparent;opacity: 0.5;}
.whole-plan {    box-shadow: 0px 4px 24px rgba(38, 29, 86, 0.1);}
.whole-plan p.l-22 {font-family: "Roboto-Medium";}
.whole-plan .p-per {width: 100%;text-align: center;margin: 13px auto 0 auto;float: left;}
.whole-plan span, .whole-plan h5, .whole-plan sub {display: inline-block;}
.whole-plan sup {font-family: "Roboto-Medium";color: #261D56;font-size: 22px;top: -8px;    margin-right: 2px;}
.whole-plan h5 {font-family: "Roboto-Medium";color: #261D56;font-size: 50px;}
.whole-plan sub {font-family: "Roboto-Medium";color: #261D56;font-size: 22px;bottom: 5px;    margin-left: 5px;}
.whole-plan .p-per-btn a {border: 1px solid #6e6791;float: left;width: 100%;padding: 15px;border-radius: 10px;margin-top: 15px;margin-bottom: 30px;font-family: "Roboto-Medium";font-size: 18px;color:#261D56;}
.whole-plan .p-per-btn a:hover {border: 1px solid #23B682;float: left;width: 100%;padding: 15px;border-radius: 10px;margin-top: 15px;margin-bottom: 30px;font-family: "Roboto-Medium";font-size: 18px;color:#23B682;cursor:pointer;}
.whole-plan ul {padding: 0;    float: left;    width: 100%;}
.whole-plan ul li {list-style-type: none;font-family: "Roboto-Regular";color: #6E6791;font-size: 14px;margin-bottom: 15px;text-align: left;padding-left: 36px;background: url(${assetsUrl}/templates/landingPage/images/tik.png);background-repeat: no-repeat;background-position: 0px 3px;}



.custom-sec10 {text-align: center;padding-top: 90px;padding-bottom: 150px;}
.custom-sec10 h2 {    padding-bottom: 30px;}
.custom-sec10 .accordion {background-color: #eee;color: #444;cursor: pointer;padding: 18px;width: 100%;border: none;text-align: left;outline: none;font-size: 15px;transition: 0.8s;}
.custom-sec10 .active, .custom-sec10 .accordion:hover {background-color: #ccc;}
.custom-sec10 .panel {padding: 0 18px;background-color: white;max-height: 0;overflow: hidden;transition: max-height 0.4s ease-out;}
.custom-sec10 .custom-sec10-row1 {width: 70%;margin: 0 auto;}
.custom-sec10 button.accordion {border: 1px solid #6E6791;background: transparent;border-bottom:0;}
.custom-sec10 button.accordion:first-child {border-top-left-radius:10px;border-top-right-radius:10px;}
.custom-sec10 button.accordion:nth-of-type(7){border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-bottom: 1px solid #6E6791;}
.custom-sec10 button.accordion.active:nth-of-type(7){border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-bottom: 0;}
.custom-sec10 .panel {border-left: 1px solid #6E6791;border-right: 1px solid #6E6791;text-align: left;}
.custom-sec10 button.accordion:hover {background: transparent;}
.custom-sec10 .panel p {padding-bottom: 12px;}
.custom-sec10 button.accordion {padding-right: 50px;position: relative;}
.custom-sec10 button.accordion::after {background: url(${assetsUrl}/templates/landingPage/images/plus-tilt.png);background-position: 0px;background-size: contain;content: "";display: inline-block;width: 20px;height: 16px;background-repeat: no-repeat;float: right;position: absolute;transition: 300ms linear all;right: 15px;top: 23px;opacity: 0.6;}
.custom-sec10 button.accordion.active::after {transform: rotate(-45deg);-webkit-transform: rotate(-45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transition: 300ms linear all;background-position: 0px;opacity: 1;}
.custom-sec10 .my-ride {border-bottom: 1px solid #6E6791;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;}



.custom-sec11  {padding-bottom:90px;}
.custom-sec11 #client-testimonial-carousel {padding-top:90px;}
.custom-sec11 {    text-align: center;}
.custom-sec11 .row {width: 70%;margin: 0 auto;}



.testimonial{    text-align: center;    margin: 0 15px;}
.testimonial .description{padding: 30px 15px 0px 15px;margin: 0;font-size: 18px;color: #6e6791;line-height: 31px;position: relative;font-family: "Roboto-Regular"} 
.testimonial .pic{width: 54px;height: 54px;border-radius: 50%;overflow: hidden;margin: 40px auto 20px auto;}
.testimonial .pic img{width: 100%;height: auto;}
.testimonial .title{font-size: 16px;color: #261D56;margin: 0px;font-family: "Roboto-Bold"}
.testimonial .post{display: block;font-size: 13px;color: #6E6791;font-family: "Roboto-Regular"}
body .owl-controls.clickable { margin-top: 45px;}
.owl-theme .owl-controls{margin-top: 30px;}
.owl-theme .owl-controls .owl-page span{background: #ccc;opacity: 1;transition: all 0.4s ease 0s;}
.owl-theme .owl-controls .owl-page.active span,.owl-theme .owl-controls.clickable .owl-page:hover span{background: #73438f;}
.owl-page span {background: #EDEFFB !important;opacity: 1 !important;border-radius: 0 !important;height: 2px !important;width: 14px !important;}
.owl-page.active span {background: #23B682 !important;opacity: 1 !important;}





.custom-sec12.custom-footer {text-align: center;}
.custom-sec12.custom-footer {text-align: center;margin-top: 100px;margin-bottom: 80px;}
.custom-sec12.custom-footer h2 {    margin-top: 20px;    margin-bottom: 35px;}
.custom-sec12.custom-footer .f-images img {    margin: 0px 10px;}
.ff {text-align: center;float: left;width: 100%;margin: 30px auto 25px auto;}
.custom-sec12.custom-footer ul {padding: 0;text-align: center;width: 100%;margin: 0 auto;overflow: hidden;}
.custom-sec12.custom-footer ul li {list-style-type: none;display: inline-block;text-align: center;padding: 0px 15px;}
.custom-sec12.custom-footer ul li a {color: #6E6791;}
.custom-sec12.custom-footer ul li a:hover {color: #23B682;text-decoration:none;}
.custom-sec12.custom-footer ul li a:hover {cursor: pointer;}
.custom-sec12.custom-footer .copyright {    text-align: center;    opacity: 0.5; float: left;    width: 100%;}
.custom-sec12.custom-footer .f-images a.a-store:hover .app-store {display: none;}
.custom-sec12.custom-footer .f-images a.a-store:hover .app-store-hover {display: block !important;}
.custom-sec12.custom-footer .f-images a.g-play:hover .google-play {display: none;}
.custom-sec12.custom-footer .f-images a.g-play:hover .google-play-hover {display: block !important;}
.f-images {width: 100%;max-width: 405px;margin: 0 auto;overflow: hidden;}
.f-images a {float: left;}

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
      <div class="mobilty-main">
          <div class="mobilty-main-inner">


          
<!-------------------------------------navbar-div------------------------------------->
  <div  id="navbar_top" class="custom-sec1-main">
      <div class="container container-nav custom-sec1">
          <nav  class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src="${assetsUrl}/templates/landingPage/images/Logo.png" class="img-rounded" alt="Logo Img" /></a>
              <button id="navbar-toggle" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <div id="nav-icon1">
                    <span></span>
                    <span></span>
                </div>
              </button>
              <div class="navbar-collapse justify-content-center" id="navbarNav">
                <ul id="menu" class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#features">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#howitwork">How it Works</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#pricing">Pricing</a>
                  </li>				
                  <li class="nav-item">
                    <a class="nav-link" href="#faq">FAQ</a>
                  </li>				
                  <li class="nav-item">
                    <a class="nav-link" href="#testimonial-main">Testimonial</a>
                  </li>
                  <li class="nav-item custom-last-child">
                    <a class="nav-link" href="#downloadtheapp">Download the app</a>
                  </li>
                </ul>
              </div>
              <div class="custom-nv-right">
                  <div class="nav-item">
                    <a class="nav-link" href="#downloadtheapp">Download the app</a>
              </div>
                </div>
            </div>
          </nav>
      </div>
  </div>
  


<!------------------------------------- /navbar-div------------------------------------->


<!-------------------------------------Section-2------------------------------------->
  <section class="custom-sec2">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-md-5 col-lg-5 col-sm-12 sec2-col-left" data-aos="fade-right" data-aos-duration="2000">
                  <h1>Simple,<br /> accessible<br /> micromobility<br /> for all.</h1>
                  <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper lacus eu lorem ullamcorper, sed tincidunt nulla dictum. </p>
                  <div class="custom-playbtn">
                      <div class="left"><a href="#downloadtheapp">Download the app</a></div>
                      <div class="right"><a id="play-video" class="play top-video-target" >
                          <img src="${assetsUrl}/templates/landingPage/images/play-sign.png" class="img-rounded blue  top-video-target" alt="PlayImg" />
                          <img src="${assetsUrl}/templates/landingPage/images/play-sign-hover.png" style="display:none;" class="img-rounded green  top-video-target" alt="PlayImg" /><span>How it works</span></a>
                      </div>
                  </div>				
              </div>				
              <div class="col-md-7 col-lg-7 col-sm-12 sec2-col-right" data-aos="fade-left" data-aos-duration="3000">				
                      <div class="right-bg"><a><img src="${assetsUrl}/templates/landingPage/images/x52.png" class="img-rounded" alt="mob1" /></a></div>
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
<!------------------------------------- /Section-2----------------------------------->

<div class="col-md-12 col-lg-12 col-sm-12 sec2-col-right-mob" data-aos="fade-left" data-aos-duration="3000">				
  <div class="right-bg"><a><img src="${assetsUrl}/templates/landingPage/images/x52.png" class="img-rounded" alt="mob1" /></a></div>
</div>	


<!------------------------------------- Section-3----------------------------------->
  <section class="custom-sec3">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-md-12 col-lg-12 col-sm-12 sec3-col-center justify-content-center">
                  <ul>
                      <li><a><img src="${assetsUrl}/templates/landingPage/images/large_slack-imgs.png" class="img-rounded" alt="brand" /></a></li>
                      <li><a><img src="${assetsUrl}/templates/landingPage/images/Spotify_Logo_CMYK_Black.png" class="img-rounded" alt="brand" /></a></li>
                      <li><a><img src="${assetsUrl}/templates/landingPage/images/woodendummy-logo-2x.png" class="img-rounded" alt="brand" /></a></li>
                      <li><a><img src="${assetsUrl}/templates/landingPage/images/max.png" class="img-rounded" alt="brand" /></a></li>
                      <li><a><img src="${assetsUrl}/templates/landingPage/images/jeep.png" class="img-rounded" alt="brand" /></a></li>
                  </ul>
              </div>				
          </div>
      </div>
  </section>
<!------------------------------------- /Section-3----------------------------------->


<!------------------------------------- Section-4----------------------------------->
  <section id="features" class="custom-sec4" data-aos="fade-down" data-aos-duration="2000">
      <div class="container">
          <div class="row align-items-center custom-sec4-row1">
              <div class="col-md-12 col-lg-12 col-sm-12 sec4-col-center justify-content-center">
                  <h2>Awesome Apps Features</h2>
                  <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper lacus eu lorem <br /> ullamcorper, sed tincidunt nulla dictum. </p>
              </div>
          </div>
          <div class="row align-items-center custom-sec4-row2">
              <div class="col-md-3 col-lg-3 col-sm-12">
                  <img src="${assetsUrl}/templates/landingPage/images/love1.png" class="img-rounded" alt="brand" />
                  <h5>Super Easy to Use</h5>
                  <p class="l-16">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> Etiam .</p>
              </div>
              <div class="col-md-3 col-lg-3 col-sm-12">
                  <img src="${assetsUrl}/templates/landingPage/images/features1.png" class="img-rounded" alt="brand" />
                  <h5>Full Featured</h5>
                  <p class="l-16">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> Etiam .</p>
              </div>
              <div class="col-md-3 col-lg-3 col-sm-12">
                  <img src="${assetsUrl}/templates/landingPage/images/login1.png" class="img-rounded" alt="brand" />
                  <h5>Fast & Reliable</h5>
                  <p class="l-16">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit <br /> Etiam .</p>
              </div>
              <div class="col-md-3 col-lg-3 col-sm-12">
                  <img src="${assetsUrl}/templates/landingPage/images/support1.png" class="img-rounded" alt="brand" />
                  <h5>24/7 Expert Support</h5>
                  <p class="l-16">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit <br /> Etiam .</p>
              </div>				
          </div>
      </div>
  </section>
<!------------------------------------- /Section-4----------------------------------->


<!------------------------------------- Section-5----------------------------------->
  <section id="howitwork" class="custom-sec5">
      <div class="container">
          <div class="row align-items-center custom-sec5-row1">
              <div class="col-md-6 col-lg-6 col-sm-12 coll" data-aos="fade-right" data-aos-duration="2000">
                  <img src="${assetsUrl}/templates/landingPage/images/x4.png" class="img-rounded" alt="brand" />
              </div>
              <div class="col-md-6 col-lg-6 col-sm-12 custom-sec5-colr" data-aos="fade-left" data-aos-duration="2000">					
                  <h2>How it works</h2>
                  <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam ullamcorper lacus eu lorem ullamcorper,<br /> sed tincidunt nulla dictum. </p>
                  <div class="ullid">
                      <li>
                          <div class="left" data-aos="fade-down" data-aos-duration="2000">
                              <img src="${assetsUrl}/templates/landingPage/images/locate.png" class="img-rounded" alt="brand" />
                          </div>
                          <div class="right">					
                              <h5>Locate</h5>
                              <p class="l-16">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit Etiam .</p>
                          </div>
                      </li>						
                      <li>
                          <div class="left" data-aos="fade-down" data-aos-duration="2000">
                              <img src="${assetsUrl}/templates/landingPage/images/scan.png" class="img-rounded" alt="brand" />
                          </div>
                          <div class="right">					
                              <h5>Scan</h5>
                              <p class="l-16">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit Etiam .</p>
                          </div>
                      </li>						
                      <li>
                          <div class="left"data-aos="fade-down" data-aos-duration="2000">
                              <img src="${assetsUrl}/templates/landingPage/images/ride.png" class="img-rounded" alt="brand" />
                          </div>
                          <div class="right">					
                              <h5>Ride</h5>
                              <p class="l-16">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit Etiam .</p>
                          </div>
                      </li>					
                  </div>					

              </div>				
          </div>
      </div>
  </section>
<!------------------------------------- /Section-5----------------------------------->


<!------------------------------------- Section-6----------------------------------->
  <section class="custom-sec6">
      <div class="container">
          <div class="row align-items-center custom-sec6-row1">
              <div class="col-md-6 col-lg-6 col-sm-12 custom-sec6-coll" data-aos="fade-right" data-aos-duration="2000">					
                  <div class="custom-sec6-coll-inner">					
                      <h2>Find A <br /> Scooter In-App</h2>
                      <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam ullamcorper lacus eu lorem ullamcorper,<br /> sed tincidunt nulla dictum. </p>										
                  </div>	
              </div>	
              <div class="col-md-6 col-lg-6 col-sm-12 custom-sec6-colr" data-aos="fade-left" data-aos-duration="2000">
                  <img src="${assetsUrl}/templates/landingPage/images/Frame2.png" class="img-rounded" alt="brand" />
              </div>			
          </div>
      </div>
  </section>
<!------------------------------------- /Section-6----------------------------------->


<!------------------------------------- Section-7----------------------------------->
  <section class="custom-sec7">
      <div class="container">
          <div class="row align-items-center custom-sec7-row1">
          <div class="col-md-6 col-lg-6 col-sm-12 custom-sec7-coll" data-aos="fade-right" data-aos-duration="2000">
                  <img src="${assetsUrl}/templates/landingPage/images/Frame1.png" class="img-rounded" alt="brand" />
              </div>	
              <div class="col-md-6 col-lg-6 col-sm-12 custom-sec7-colr" data-aos="fade-left" data-aos-duration="2000">					
                  <div class="custom-sec7-colr-inner">					
                      <h2>Scan Code <br /> to Unlock</h2>
                      <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam ullamcorper lacus eu lorem ullamcorper,<br /> sed tincidunt nulla dictum. </p>										
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
              <div class="col-md-6 col-lg-6 col-sm-12 custom-sec8-coll" data-aos="fade-right" data-aos-duration="2000">					
                  <div class="custom-sec8-coll-inner">					
                      <h2>Ride <br />Responssibly</h2>
                      <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam ullamcorper lacus eu lorem ullamcorper,<br /> sed tincidunt nulla dictum. </p>										
                  </div>	
              </div>	
              <div class="col-md-6 col-lg-6 col-sm-12 custom-sec8-colr" data-aos="fade-left" data-aos-duration="2000">
                  <img src="${assetsUrl}/templates/landingPage/images/Frame3.png" class="img-rounded" alt="brand" />
              </div>			
          </div>
      </div>
  </section>
<!------------------------------------- /Section-8----------------------------------->


<!------------------------------------- Section-9----------------------------------->
  <section id="pricing" class="custom-sec9" data-aos="fade-down" data-aos-duration="2000">
      <div class="container">
          <div class="row align-items-center custom-sec9-row1">
              <div class="col-md-12 col-lg-12 col-sm-12 sec9-col-center justify-content-center">
                  <h2>Simple plans for everyone</h2>
                  <p class="l-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper lacus eu lorem <br /> ullamcorper, sed tincidunt nulla dictum. </p>
                  
                  
                  <div class="price-data">
                      <span id="plan-monthly" class="pmt-plan">Pay Monthly</span>
                          <label class="switch">
                              <input id="pmt-plan-toggle" type="checkbox" checked>
                              <span class="slider round"></span>
                          </label>	
                      <span id="plan-yearly" class="pmt-plan plan-active">Pay Yearly<img src="${assetsUrl}/templates/landingPage/images/save20.png" class="img-rounded" alt="save" /></span>						
                  </div>
              
              
              </div>
          </div>
          
          
          <div id="monthly-tab" class="row align-items-center custom-sec9-row2 plan-inactive">
              <p class="p-usd">Price in 
                  <span>  
                      <select name="countries" id="select-monthly" class="resizeselect">
                          <option selected value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                          <option value="AUD">AUD</option>
                      </select>
                  </span>
              </p>														
              <div class="col-md-6 col-lg-6 col-sm-12">
              <div class="whole-plan">
                  <p class="l-22">Free</p>
                  <div class="p-per"><sup>$</sup><h5>0</h5></div>
                  <div class="p-per-btn"><a>Get Started</a></div>
                  <div class="facility">
                      <ul>
                      <li class="tik">30,000+ graphic & animated templates</li>
                      <li class="tik">Instant access to 140 million stock images</li>
                      <li class="tik">Upload your own fonts & images</li>
                      <li class="tik">500,000+ premium images</li>
                      <li class="tik">32,000 videos & animations</li>
                      </ul>
                  
                  </div>
                  
                  
              </div>
              </div>
              <div class="col-md-6 col-lg-6 col-sm-12">
              <div class="whole-plan">
                  <p class="l-22">Pro</p>
                  <div class="p-per"><sup>$</sup><h5>7.99</h5><sub>/mo</sub></div>
                  <div class="p-per-btn"><a>Try 30 Days Free</a></div>
                  <div class="facility">
                      <ul>
                      <li class="tik">30,000+ graphic & animated templates</li>
                      <li class="tik">Instant access to 140 million stock images</li>
                      <li class="tik">Upload your own fonts & images</li>
                      <li class="tik">500,000+ premium images</li>
                      <li class="tik">32,000 videos & animations</li>
                      </ul>
                  
                  </div>
              </div>			
              </div>			
          </div>
          
          <div id="yearly-tab" class="row align-items-center custom-sec9-row3 plan-active">
              <p class="p-usd">Price in 
                  <span>  
                      <select name="countries" id="select-yearly" class="resizeselect">
                          <option selected value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                          <option value="AUD">AUD</option>
                      </select>
                  </span>
              </p>	
          
              <div class="col-md-6 col-lg-6 col-sm-12">
              <div class="whole-plan">
                  <p class="l-22">Free</p>
                  <div class="p-per"><sup>$</sup><h5>0</h5></div>
                  <div class="p-per-btn"><a>Get Started</a></div>
                  <div class="facility">
                      <ul>
                      <li class="tik">30,000+ graphic & animated templates</li>
                      <li class="tik">Instant access to 140 million stock images</li>
                      <li class="no-tik">Upload your own fonts & images</li>
                      <li class="no-tik">500,000+ premium images</li>
                      <li class="no-tik">32,000 videos & animations</li>
                      </ul>
                  
                  </div>
                  
                  
              </div>
              </div>
              <div class="col-md-6 col-lg-6 col-sm-12">
              <div class="whole-plan">
                  <p class="l-22">Pro</p>
                  <div class="p-per"><sup>$</sup><h5>95.88</h5><sub>/yr</sub></div>
                  <div class="p-per-btn"><a>Try 30 Days Free</a></div>
                  <div class="facility">
                      <ul>
                      <li class="tik">30,000+ graphic & animated templates</li>
                      <li class="tik">Instant access to 140 million stock images</li>
                      <li class="tik">Upload your own fonts & images</li>
                      <li class="tik">500,000+ premium images</li>
                      <li class="tik">32,000 videos & animations</li>
                      </ul>
                  
                  </div>
              </div>			
              </div>			
          </div>
          
          
          
      </div>
  </section>
<!------------------------------------- /Section-9----------------------------------->


<!------------------------------------- Section-10----------------------------------->
  <section id="faq" class="custom-sec10" data-aos="fade-down" data-aos-duration="2000">
      <div class="container">
          <div class="row align-items-center custom-sec10-row1">
              <div class="col-md-12 col-lg-12 col-sm-12 sec10-col-center justify-content-center">
                  <h2>Frequently Asked Questions</h2>
                  <div class="faq-data">
                      <button class="accordion"><h5 class="l-22">What are the requirements to ride?</h5></button>
                      <div class="panel l-18">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                      </div>

                      <button class="accordion"><h5 class="l-22">How do I find a scooter?</h5></button>
                      <div class="panel l-18">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                      </div>
                      
                      <button class="accordion"><h5 class="l-22">How do I unlock a scooter?</h5></button>
                      <div class="panel l-18">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                      </div>
                      
                      <button class="accordion"><h5 class="l-22">Where can I ride?</h5></button>
                      <div class="panel l-18">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                      </div>
                      
                      <button class="accordion"><h5 class="l-22">How to start and ride?</h5></button>
                      <div class="panel l-18">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                      </div>
                      
                      <button class="accordion"><h5 class="l-22">Where can I park?</h5></button>
                      <div class="panel l-18">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                      </div>
                                              
                      <button class="accordion last-acc"><h5 class="l-22">How do I end my ride?</h5></button>
                      <div class="panel last-acc-div l-18">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis molestie lacus. Curabitur felis urna, efficitur ut interdum at, lobortis id nibh. Praesent iaculis lectus a neque scelerisque mollis. Aliquam erat volutpat. Pellentesque elementum augue a tellus ornare eleifend. Vestibulum at euismod ante. </p>
                      </div>	
                      
                  </div>					
              </div>
          </div>
      </div>
  </section>
<!------------------------------------- /Section-10----------------------------------->


<!-------------------------------------Section-11----------------------------------->
  <section id="testimonial-main" class="custom-sec11 " data-aos="fade-down" data-aos-duration="2000">
      <div class="container">
          <div class="row align-items-center custom-sec11-row1">	
              <div class="col-md-12 col-lg-12 col-sm-12">
              <h2>What Our Customers <br />Are Saying</h2>
                  <div id="testimonial-slider" class="owl-carousel">
                      <div class="testimonial">	
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel <br /> urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, <br /> vestibulum ac nunc. Etiam non porta mauris. Mauris elementum erat nec erat<br /> tempus, sit amet nisl euismod. 
                          </p>
                          <div class="pic">
                              <img src="${assetsUrl}/templates/landingPage/images/client.png" alt="">
                          </div>
                          <p class="title">Samantha William</p>
                          <span class="post">Senior Designer at Design Studio</span>
                      </div>
                      <div class="testimonial">	
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel <br /> urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, <br /> vestibulum ac nunc. Etiam non porta mauris. Mauris elementum erat nec erat<br /> tempus, sit amet nisl euismod. 
                          </p>
                          <div class="pic">
                              <img src="${assetsUrl}/templates/landingPage/images/client.png" alt="">
                          </div>
                          <p class="title">Samantha William</p>
                          <span class="post">Senior Designer at Design Studio</span>
                      </div>
                      <div class="testimonial">	
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel <br /> urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, <br /> vestibulum ac nunc. Etiam non porta mauris. Mauris elementum erat nec erat<br /> tempus, sit amet nisl euismod. 
                          </p>
                          <div class="pic">
                              <img src="${assetsUrl}/templates/landingPage/images/client.png" alt="">
                          </div>
                          <p class="title">Samantha William</p>
                          <span class="post">Senior Designer at Design Studio</span>
                      </div>
                      <div class="testimonial">	
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel <br /> urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, <br /> vestibulum ac nunc. Etiam non porta mauris. Mauris elementum erat nec erat<br /> tempus, sit amet nisl euismod. 
                          </p>
                          <div class="pic">
                              <img src="${assetsUrl}/templates/landingPage/images/client.png" alt="">
                          </div>
                          <p class="title">Samantha William</p>
                          <span class="post">Senior Designer at Design Studio</span>
                      </div>
                      <div class="testimonial">	
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel <br /> urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, <br /> vestibulum ac nunc. Etiam non porta mauris. Mauris elementum erat nec erat<br /> tempus, sit amet nisl euismod. 
                          </p>
                          <div class="pic">
                              <img src="${assetsUrl}/templates/landingPage/images/client.png" alt="">
                          </div>
                          <p class="title">Samantha William</p>
                          <span class="post">Senior Designer at Design Studio</span>
                      </div>
                  </div>
              </div>











          
          </div>
      </div>
  </section>
<!------------------------------------- /Section-11----------------------------------->


<!-------------------------------------Section-12----------------------------------->
  <section id="downloadtheapp" class="custom-sec12 custom-footer" data-aos="fade-up" data-aos-duration="2000">
      <div class="container">
          <div class="row align-items-center custom-sec12-row1">
              <div class="col-md-12 col-lg-12 col-sm-12 sec12-col-center justify-content-center">
                  <p class="l-22">What are you waiting for?</p>
                  <h2>Download our mobile app</h2>
                  <div class="f-images">
                      <a href="#" class="a-store">
                          <img src="${assetsUrl}/templates/landingPage/images/app-store-default.png" class="img-rounded app-store" alt="brand" />
                          <img src="${assetsUrl}/templates/landingPage/images/app-store-hover.png" class="img-rounded app-store-hover" style="display:none;" alt="brand" />
                      </a>
                      <a href="#" class="g-play">
                          <img src="${assetsUrl}/templates/landingPage/images/google-play-default.png" class="img-rounded google-play" alt="brand" />
                          <img src="${assetsUrl}/templates/landingPage/images/google-play-hover.png" class="img-rounded google-play-hover" style="display:none;" alt="brand" />
                      </a>
                  </div>
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
  </section>
<!------------------------------------- /Section-12----------------------------------->







              
              
              
              
          </div>
      </div>
<!-------------------------------------Outer-Main-div's------------------------------------->






  <!-- Optional JavaScript; choose one of the two! -->

  <!-- Option 1: Bootstrap Bundle with Popper -->
<script type="text/javascript">
$(document).ready(function() {
    if ($(window).width() > 992) {
        
        var navbar_height =  $('.navbar').outerHeight();

        $(window).scroll(function(){  
            if ($(this).scrollTop() > 300) {
				 $('.navbar-wrap').css('height', navbar_height + 'px');
                 $('#navbar_top').addClass("fixed-top");
                 
            }else{
                $('#navbar_top').removeClass("fixed-top");
                $('.navbar-wrap').css('height', 'auto');
            }   
        });
    } 	
}); 
</script>
<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
</script>
<script>
$(document).ready(function(){
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
});
$("[data-gjs-type='wrapper'] .price-data .switch").click(function(e) {
  $("#pmt-plan-toggle").prop("checked", !$("#pmt-plan-toggle").prop("checked"));
  $('#plan-monthly').toggleClass("plan-active");
  $('#plan-yearly').toggleClass("plan-active");
  $('#monthly-tab').toggleClass("plan-active").toggleClass("plan-inactive");
  $('#yearly-tab').toggleClass("plan-active").toggleClass("plan-inactive");
  $("select.resizeselect").resizeselect();

});
$("#pmt-plan-toggle").click(function() {
	$('#plan-monthly').toggleClass("plan-active");
	$('#plan-yearly').toggleClass("plan-active");
	$('#monthly-tab').toggleClass("plan-active").toggleClass("plan-inactive");
	$('#yearly-tab').toggleClass("plan-active").toggleClass("plan-inactive");
	$("select.resizeselect").resizeselect();

});
$("#menu li a").click(function() {
    $(this).parent().addClass('selected').siblings().removeClass('selected');

    });
	
	
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
	
	(function($, window){
		$.fn.resizeselect = function(settings) {
			return this.each(function() {

				$(this).change(function(){
					var $this = $(this);

					// create test element
					var text = $this.find("option:selected").text();
					var $test = $("<span>").html(text).css({
					"font-size": $this.css("font-size"), // ensures same size text
					"visibility": "hidden" // prevents FOUC
					});


					// add to body, get width, and get out
					$test.appendTo($this.parent());
					var width = $test.width();
					$test.remove();

					// set select width
					$this.width(width+3);
					


				// run on start
				}).change();

			});
		};
		// run by default
		$("select.resizeselect").resizeselect();

	})(jQuery, window);

	$("#faq .faq-data button.last-acc").click( function(){
		$("#faq .faq-data div.last-acc-div").toggleClass('my-ride');
	});
	
	$('#navbar-toggle').on('click', function() {
            $('#navbarNav').toggleClass('show');    
            $('body').toggleClass('scrollstuck');  
         }); 
		 
		 $('#navbarNav ul li.nav-item').on('click', function() {
            // $('#navbarNav').toggleClass('show');  
            $('#navbar-toggle').toggleClass('collapsed');  
            $('#navbar-toggle').attr('aria-expanded',"false"); 
			$('body').removeClass('scrollstuck');  			
         }); 
			$(document).ready(function(){
				$('#nav-icon1').click(function(){
					$(this).toggleClass('open');
				});
			});
</script>
<script>
AOS.init();
</script>
<script>
window.document.body.addEventListener('scroll', (e) => {
    let aos = document.querySelectorAll('[data-aos|=fade]');
    aos.forEach((el)=>{
        var rect = el.getBoundingClientRect();
        var isVisible = (
            rect.top < e.target.clientHeight * 0.7     /*70% of client height*/
        )
        if (isVisible ) {
            $(el).addClass('aos-animate');
        } else {
            $(el).removeClass('aos-animate');
        }
    });
})
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


  export default {
	  html,
	  baseCss,
	  customCss,
	  style,
  }