import { assetsUrl } from "../../../settings";

export const customCss = `

@keyframes mymove {
    from {right: 0px;}
    to {right: 200px;}
    }

/*ALL MEDIA QUERY*/
@media only screen and (max-width: 567px) and (min-width: 0px){
.popup-top-paragraph {width: 80%;}
}


@media only screen and (max-width: 767px) and (min-width: 568px){}


@media only screen and (max-width: 767px) and (min-width: 0px){
.marq-mob{display:block;}
.marq-des{display:none;}
footer#Contact-section .col-lg-3.col-md-3.mb-6.left-col h5.follow-us-text {font-size: 16px;}
.cs-menu-mob-downn {height: 0.1px;border: 0.2px solid rgba(0,0,0,0.2) !important;width: 100%;position: absolute;left: 0;}
#basic-select-1::after {right: 12px;}
#basic-select-2::after {right: 12px;}
#basic-select-3::after {right: 12px;}
.R-list {padding-right: 15px;}
.col-md-2.R-list p.tabs-heading {    text-align: right;padding-right: 15px;} 	
body .modal.fade .modal-dialog .modal-content {padding: 20px;}
body .modal.fade .modal-dialog .modal-content button.close span img {width: 28px;height: 28px;}
.modal-content .modal-header {padding: 0;}
body .modal.fade .modal-dialog .modal-content .modal-body {padding-left: 0;padding-right: 0;padding-top: 0;}
.popup-top-tagline {    font-size: 16px;}
.popup-top-heading {    font-size: 32px;	line-height: 38px;}
.popup-top-paragraph {font-weight: normal;font-size: 13px;line-height: 22px;color: #808080;}
.custom-form-ele ul li {display: inline-block;width: 100%;float: left;}
.custom-form-ele ul li:nth-of-type(2n+1) {margin-right: 0%;}
.custom-form-ele ul li:nth-of-type(2n+2) {margin-left: 0%;} 
body .modal-dialog.modal-dialog-centered {    max-width: 790px;    width: 84%;    margin: 45px auto;}
body input#datepicker {width: 100%;}
nav#myHeader {padding-top: 25px;padding-left: 25px;padding-right: 25px;}
button.menu-toggle {padding: 10px 0px 15px 12px;}
body section.slider-sec.main-body {padding-left: 10px;padding-right: 10px;}
body section.tradition-sec.main-body {padding-left: 10px;padding-right: 10px;}
body section.our-partner.main-body {padding-left: 10px;padding-right: 10px;}
body .thechef-sec{margin-top: 15px;}
section#About-section {padding-left: 10px;padding-right: 10px;}
section.recipie-sec.main-body {padding-left: 10px;padding-right: 10px;margin-bottom: 20px;}
div#Gallery-section .col-lg-6.col-md-6.mb-12.inner-mid-space {margin-bottom: 20px;}
div#Gallery-section .col-lg-6.col-md-6.mb-12.inner-sec-mobi {margin-bottom: 5px;}
div#Gallery-section .col-lg-6.col-md-6.mb-12.inner-sec-mobi h1.recipe-head.POS-L, div#Gallery-section .col-lg-6.col-md-6.mb-12.inner-sec-mobi p {margin-left: 0;}
body .row.full-recipie-sec.main-body{padding-left: 10px;padding-right: 10px;margin-bottom: 35px;}
body .row.inner-recipie-sec.main-body{padding-left: 10px;padding-right: 10px;}
body .row.inner-recipie-sec.main-body .col-lg-6.col-md-6.mb-12.R-pading {padding-bottom: 20px;}
body section.bottom-tradition.main-body {padding-left: 10px;padding-right: 10px;}
body section#Menu-section {padding-left: 10px;padding-right: 10px;}
section#Menu-section .tab-content .row.inner-table {padding-left: 15px;}
.row.avilable-section.main-body .col-lg-5.col-md-6.mb-12.p-0 {padding-left: 15px !important;padding-right: 15px !important;}
.row.book-now-sec.main-body {padding-left: 15px;padding-right: 15px;}
footer#Contact-section{padding: 35px 30px !important;}
footer#Contact-section .col-lg-3.col-md-3.mb-6.left-col ul a img {margin-right: 15px;}
footer#Contact-section p.copyright-text {padding-left: 0px;}

}


@media only screen and (max-width: 991px) and (min-width: 0px){
.cs-menu-mob-upper, .cs-menu-mob-down{display:block;}
.cs-menu-mob-upper {height: 0.2px;border: 0.2px solid rgba(0,0,0,0.2) !important;width: 100%;position: absolute;left: 0;margin-top: 85px;}
.cs-menu-mob-down {height: 0.2px;border: 0.2px solid rgba(0,0,0,0.2) !important;width: 100%;position: absolute;left: 0;}
.row.avilable-section.main-body.twelve {border-bottom: 0px solid #808080;}
div.scrollmenu {border-bottom: 0px solid #888;}
div#menu-revealer {
-webkit-transition: all 0.2s ease;
-moz-transition: all 0.2s ease;
-o-transition: all 0.2s ease;
-ms-transition: all 0.2s ease;
transition: all 0.2 ease;
}
.wrapper.menu--is-revealed span, .wrapper.menu--is-revealed .menu-toggle:hover .icon-bars, .wrapper.menu--is-revealed .menu-toggle:hover .icon-bars:after {background-color: #ffffff !important;}
.wrapper.menu--is-revealed {z-index: 999999;position: fixed;right: 25px;/*margin-top: 5px;*/margin-right: -7px;}
div#navbarResponsive {height: 100%;background: rgba(0,0,0,0.8) !important;float: left;width: 100%;padding: 0;margin: 0;top: 0;position: fixed;}
ul.navbar-nav.ml-auto {background: rgba(0,0,0,0.8) !important;margin: 0 !important;padding: 0 !important;text-align: center;padding-top: 100px !important;}
ul.navbar-nav.ml-auto li.nav-item {padding: 0;padding-bottom: 50px;}
ul.navbar-nav.ml-auto li.nav-item a {font-size: 32px;font-family: 'roslindale_testingtextRg';color: rgba(255,255,255,0.8) !important;border:0;}
.navbar-collapse.content2.w100.hideshow {transition: visibility .6s ease-in-out, transform .6s ease-in-out;transform: translateX(100%);}
.navbar-collapse.content2.w100 {transform: translateX(0%);transition: visibility .6s ease-in-out, transform .6s ease-in-out;}
.slider-sec.main-body ol.carousel-indicators {z-index: 0;}
body .menu-shape {display: none;}
.Most-top-sec {padding: 70px 10px 0px 10px;}
.top-header-shape {position: absolute;top: 0px !important;left: 0px !important;}
.top-header-shape img.img-fluid.top-shape {height: 320px;width: 100%;}
nav#myHeader {padding-top: 25px;}
}


@media only screen and (max-width: 991px) and (min-width: 768px){	
body .modal-dialog.modal-dialog-centered {max-width: 790px;width: 84%;margin: 0 auto;}
body .sub-image {
position: absolute;
top: 300px;
left: 0;
}
input#datepicker {
width: 170px;
}
}


@media only screen and (max-width: 812px) and (min-width: 0px){
img.img-fluid.L-shape {top: 336%;position: absolute;left: -3px;z-index: -1 !important;}
.menu-shape {top: 90%;right: 0px !important;position: absolute;z-index: 3;}
img.social-icons {margin-right: 30px;}
.L-list {width: 78%;float: left;padding: 0px;}
.R-list {padding: 0px;width: 22%;float: left;}
.carousel-control-next{display: none;}
.carousel-control-prev{display: none;}
.R-pading {margin: 15px 0px 0px 0px ;}
p.tabs-para{font-size: 13px;}
.tabs-heading{font-size: 16px;}
.recipe-head{font-size: 16px;}
.inner-full-width {width: 500px;}
.book-margin-top{margin-top: 30px;}
.footer-header{font-size: 16px;}
.L-M{margin-left: 20px;}
div.scrollmenu a{font-size: 16px;}
.copyright-text {padding-right: 15px;padding-left: 15px;font-size: 13px;}
body {background-position: right;background-size: cover;}
.POS-L1{margin-left: 0px;}    
.mobil-space{padding-left: 15px;padding-right: 15px;} 
.content2 ul.navbar-nav.ml-auto {padding-left: 20px;margin-top: 100px;width: 100%;display: flex;flex-direction: column;top: 100px;background-color: #fff;height: 100vh;}
.content2 {margin-top: -50px;z-index: 2;width: 100%;position: absolute;display: flex;flex-direction: column;top: 101px;background-color: #fff;height: -webkit-fill-available;transition: top .5s;transition: left .5s;right: -100%;padding: 50px 0px;}
.w100 {left: 0%;}
.nav-link {padding: 5px !important;}
.split-text{margin-top: 20px;}
.menu-inner-text {font-size: 50px}
div.scrollmenu a {padding: 0px 0px 11px 0px;}
body{padding-top: 0px;}
li.active.tabs.cool-link {padding-bottom: 7px;}
.top-heading{font-size: 32px;}
.top-tagline {font-size: 16px;}
.top-paragraph {font-weight: normal;font-size: 13px;line-height: 22px;}
.buttons-div {text-align: left;padding-top: 50px;}
.slider-sec {margin-top: 50px;}
.tradition-sec {position: relative;   margin-top: 50px;}
.B-heading {padding-bottom: 12px;   font-size: 32px;} 
.our-partner{margin-top: 50px;}
.agency-partner-sec {width: 50%;text-align: center;padding: 35px;}
.col-md-3.b-w {width: 50%;border-right: 1px solid #BCB495;border-bottom: 1px solid #BCB495;}
.col-md-3.b-w-2 {width: 50%;border-bottom: 1px solid #BCB495;}
.col-md-3.b-w-1 {width: 50%;border-right: 1px solid #BCB495;border-bottom: 1px solid #BCB495;}
.no-border {border-right: 1px solid transparent !important;}
.N-Border-m{border-bottom: 1px solid transparent !important; }
.text-sec-spacing {margin-top: 0px;padding-right: 15px;}
.xs-div{display: flex;flex-direction: column-reverse;}
.image-div{padding-top: 50px;}
.text-div{padding-top: 50px;}
.recipie-sec {margin-top: 50px;}
.recipe-head{margin-top: 20px;}
.recipe-para {font-size: 13px;margin-top: 6px;line-height: 22px;}
.inner-recipie-sec{margin-top: 0px;}
.inner-mid-space{margin-top: 30px;padding: 0px;}
.inner-sec-mobi{margin-top: 30px;padding: 0px;}
.full-recipie-sec {margin-top: 30px;}
.menuoftheday {margin-top: 50px;margin-bottom: 50px;}
.bottom-tradition {margin-top: 50px;}
.tabs-section {margin-top: 50px;}
.tabs {text-align: center;margin-right: 20px;margin-top: 20px;}
.tab-content {padding-bottom: 50px;}
.avilable-section {margin-top: 50px;}
.book-now-sec {margin-top: 50px;padding-bottom:50px;}
select#cars-1 {width: 100%;}
select#cars-2 {width: 100%;}
select#cars-3 {width: 100%;}
.book-table{width: 100%;}
.left-col{float: left;width: 50%;}
.inner-image{margin-top: 50px;display: none;}
.bottom-gap {padding-top: 30px;}
.footer-paragraph{font-size: 13px;}
ul.nav.nav-pills {border-bottom: 1px solid #80808000;}
.inner-table {padding-left: 30px;margin-top: 30px;padding-right: 0px;}
li.space {margin-left: 0px;} 
.bg-dark {padding: 39px 15px;background-color: #ffffff!important;}
.R-pading{padding: 0px;}  
}


@media only screen and (max-width: 320px) and (min-width: 300px){
img.social-icons {margin-right: 23px !important;}
.menu-inner-text {font-size: 42px !important;}
}


@media only screen and (max-width: 450px) and (min-width: 400px){
.menu-inner-text {font-size: 56px !important;}
}


@media only screen and (max-width: 768px) and (min-width: 991px){
.sub-image {left: 20px;}	
input#datepicker {width: 170px !important;}
}

@media only screen and (max-width: 812px) and (min-width: 730px){
.inner-full-width {width: auto !important;}
.slider-inner-cont {padding: 0px;}
.xs-div {display: flex;flex-direction: inherit !important;}
.inner-mid-space {margin-top: 100px !important;}
.menu-inner-text {white-space: nowrap;font-size: 98px;}
.inner-table {margin-top: 30px;}
.book-table{width: 170px;}
select#cars-1{width: 170px;}
select#cars-2{width: 170px;}
select#cars-3{width: 170px;}
.content2 ul.navbar-nav.ml-auto {width: 100%;display: flex;flex-direction: column;top: 100px;background-color: #fff;height: 100vh;}
.content2 {margin-top: -50px;z-index: 2;width: 100%;position: absolute;display: flex;flex-direction: column;top: 101px;background-color: #fff;height: -webkit-fill-available;transition: top .5s;transition: left .5s;right: -100%;padding: 50px 0px;}
.w100 {left: 0%;}
.top-heading{font-size: 48px;}
.buttons-div {text-align: left;padding-top: 50px;}
.B-heading{font-size: 38px;}
.inner-mid-space {padding-left: 40px !important;}
.Right-text {margin-top: 100px;text-align: right;}
.inner-image{display: block !important;}
.col-md-3.b-w-1{border: 1px solid #bcb49500;}
.col-md-3.b-w{border: 1px solid #bcb49500;}
.col-md-3.b-w-2{border: 1px solid #bcb49500;}
}


@media only screen and (max-width: 812px) and (min-width: 800px){
.inner-full-width {width: auto !important;}
}


@media only screen and (max-width: 1920px) and (min-width: 1900px){
.our-partner {margin-top: 115px !important;}
.menu-inner-text {white-space: nowrap;font-size: 251px !important;color: white;-webkit-text-fill-color: transparent;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: #B3B3B3;font-family: 'roslindale_testingtextRg';}
.top-header-shape-1920 {position: absolute;top: 0px;left: 0px !important;display: block !important;}
body .top-header-shape-1920 {display: none !important;}
.top-header-shape{display: block;}
.menu-shape{display: none;}
.menu-shape-1920 {display: block !important;top: 29%;right: -439px;position: absolute;}
.F-left-shape{display: block;}
.L-shape-1920 {display: none !important;top: 88.5% !important;position: absolute;left: -157px;}
.thechef-sec {margin-top: 40px !important;}     
}


/*mobile view*/


/*1280 view*/
@media only screen and (max-width: 1280px) and (min-width: 1270px){
.menu-inner-text {font-size: 165px !important;}
}
/*End view*/


/*Web view*/
@media only screen and (max-width: 3000px) and (min-width: 1280px){
.head-W{width: 413px;}
.carousel-control-prev {left: -130px;}
.carousel-control-next {right: -130px;}
nav#myHeader {padding: 60px 0px 0px 0px ;}
}
/*END Web view*/


/*1024 view*/
@media only screen and (max-width: 1050px) and (min-width: 1020px){
nav#myHeader {padding: 60px 0px 0px 0px ;}
@keyframes mymove {
from {right: 0px;}
to {right: 80px;}
}  
.container.slider-inner-cont {padding: 0px;}
.main-body {padding-left: 20px;padding-right: 20px;}
}
/*END*/


@media only screen and (max-width: 1280px) and (min-width: 1275px){
.menu-inner-text {font-size: 165px !important;}
body {background-size: cover;}
}


@media only screen and (max-width: 1025px) and (min-width: 1000px){
.menu-inner-text {font-size: 132px;}
body {background-position: right;background-size: cover;}
}



/*1366 Resolution*/
@media only screen and (max-width: 1367px) and (min-width: 1300px){
/*.top-header-shape {position: absolute;top: -35px !important;left: 36px !important;}*/
body {background-position: center;background-size: cover !important;}
.menu-inner-text {font-size: 180px;}
}


/*1600 Resolution*/
@media only screen and (max-width: 1680px) and (min-width: 1550px){
.menu-inner-text {white-space: nowrap;font-size: 209px !important; }
}

@media only screen and (max-width: 10000px) and (min-width: 1500px){
.tabs-section.cs-menu .menu-shape {display: none;}
}

`

export const baseCss = `
.hideshow{visibility: hidden;} 
body, html {overflow-x:hidden;}
a:hover {color: #0056b300 !important;text-decoration: underline;}
a.tab:hover{color: #333 !important;}
/*button.menu-toggle {    margin-top: 5px;}*/
.nav-container {max-width: 1200px;}
html {scroll-behavior: smooth;}
.icon-bars:after {top: 0px !important;}
.top-header-shape-1920 {display: none;}
.menu-shape-1920{display: none;}
.L-shape-1920{display: none;}
body {background-color: #FFFDFA;    font-family: 'Source Sans Pro', sans-serif; }
p{margin-bottom: 0px;}
h1{margin-bottom: 0px;}
.bg-dark {padding: 50px 0px;background-color: #ffffff00 !important;}
#basic-select-1 select {appearance: none;-webkit-appearance: none;-moz-appearance: none;background-color: transparent;}
#basic-select-2 select {appearance: none;-webkit-appearance: none;-moz-appearance: none;background-color: transparent;}
#basic-select-3 select {appearance: none;-webkit-appearance: none;-moz-appearance: none;background-color: transparent;}
.navbar-dark .navbar-nav .nav-link {font-size: 18px;font-family: 'roslindale_testingtextSBd';color: #3D3D3D !important;}
.nav-link{padding: 0px !important;}
.nav-link:hover {border-bottom:2px solid #3D3D3D; }
li.nav-item {padding-right: 30px;}
.main-body{max-width: 995px;margin:0 auto;}
li.active.tabs.cool-link {padding-bottom: 21px;border-bottom: 2px solid #333333;}
.Most-top-sec{padding-top: 152px;}
.buttons-div{text-align: right;}
button.btn.btn-outline {border-radius: 0px;border: 1px solid rgba(0, 0, 0, 0.8);padding: 14px 24px;}
button.btn.btn-outline:hover{background-color: #333333;color: #fff;  }
marquee h1.menu-inner-text.Right-text {text-align: unset;margin-bottom: 15px;}


/*Top section*/
.top-tagline{font-size: 22px;color: #666666;padding-bottom: 10px;}
.top-heading{font-family: 'roslindale_testingtextRg';font-size: 72px;font-weight: normal;font-stretch: normal;font-style: normal;letter-spacing: 0.72px;color: #333;padding-bottom: 20px; }
.top-paragraph{font-weight: normal;font-size: 16px;line-height: 28px;color:#808080;}
/*END*/


/*slider section*/
.slider-sec{margin-top: 42px;}
.tradition-sec{margin-top:100px;}
.B-heading{font-family: 'roslindale_testingtextRg';font-size: 52px;font-weight: normal;font-stretch: normal;font-style: normal;letter-spacing: 0.52px;color: #333;padding-bottom: 20px;}
/*END*/


/*Our partner sec*/
.our-partner {margin-top: 156px;}
.agency-partner-sec {text-align: center;padding: 50px;}
/*END*/


/*thechef-sec*/
.thechef-sec {margin-top: 70px;}
.text-sec-spacing{margin-top: 50px;padding-right: 132px;}
.recipie-sec{margin-top: 150px;}
.recipe-head{margin-top: 28px;    font-family: 'roslindale_testingtextRg';font-size: 22px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: 0.22px;color: #333;}
.recipe-para{margin-top: 6px;   font-weight: normal;font-size: 16px;line-height: 28px;color:#808080;}
.inner-recipie-sec{margin-top: 100px;}
.inner-mid-space{margin-top: 100px;}
.full-recipie-sec{margin-top: 100px;}
li.tabs a {text-decoration: none;color: #666666;font-style: normal;font-weight: normal;font-size: 18px;line-height: 22px;}
li.space{margin-left: 50px;}
.tabs-section{margin-top: 100px;}
ul.nav.nav-pills {border-bottom: 1px solid #808080;}
.inner-table{margin-top: 50px;}
.inner-image {padding: 0px;padding-left: 45px;margin-top: 132px;text-align: right;}
.tabs-heading{font-family: 'roslindale_testingtextRg'; font-size: 18px;line-height: 22px;color: #333;}
p.tabs-para{font-weight: normal;font-size: 16px;line-height: 28px;color: #808080;}
.sub-image {position: absolute;top: 300px;left: 61px;}
.tab-content {padding-bottom: 100px;/*border-bottom: 1px solid #808080;*/}
.row.avilable-section.main-body.twelve {max-width: 1200px;margin: 0 auto;border-bottom: 1px solid #808080;}
.avilable-section{margin-top: 100px;}
.book-now-sec{margin-top: 100px;padding-bottom: 100px;/*border-bottom: 1px solid #808080;*/  }
select#cars-1 {z-index: 9999;position: absolute;color: #808080;font-size: 16px;width: 226px;height: 59px;border: solid 1px #666;padding: 15px 10px;}
select#cars-2 {z-index: 9999;position: absolute;color: #808080;font-size: 16px;width: 226px;height: 59px;border: solid 1px #666;padding: 15px 10px;}
select#cars-3 {z-index: 9999;position: absolute;color: #808080;font-size: 16px;width: 226px;height: 59px;border: solid 1px #666;padding: 15px 10px;}
.book-table{border: 0; color: #fff;  width: 226px;height: 59px;left: 992px;top: 8809px;background-color: #333;}
.footer-header{ font-family: 'roslindale_testingtextRg';font-size: 18px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: 0.18px;color: #333;}
.footer-paragraph{font-style: normal;font-weight: normal;font-size: 16px;line-height: 28px;color: #808080; }
.bottom-gap{padding-top: 50px;}
img.social-icons {margin-right: 40px;}
.follow-us-text{font-family: 'roslindale_testingtextRg';font-size: 24px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;color: #333;}
.copyright-text{padding-top: 50px;    font-family: 'Barlow', sans-serif;font-size: 18px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #333;}
.menuoftheday{margin-top: 128px;margin-bottom: 0px;}
.carousel-indicators li{height: 4px;}
.carousel-indicators .active{width: 50px;}
.btn.focus, .btn:focus {outline: 0;box-shadow: 0 0 0 0.2rem rgb(255 255 255 / 25%);}
.navbar-dark .navbar-toggler {background-color: #333;color: rgb(52 52 52);border-color: rgb(69 69 69);}
button:focus {outline: 1px dotted;outline: 1px solid transparent;}
div.scrollmenu {border-bottom: 1px solid #888;  overflow: auto;white-space: nowrap;}
div.scrollmenu a {display: inline-block;color: white;text-align: center;padding: 14px;text-decoration: none;}
.nav{display: block;}
div.scrollmenu a{font-family: 'roslindale_testingtextRg';padding: 0px 0px 21px 0px;text-decoration: none;color: #666;font-style: normal;font-weight: normal;font-size: 18px;line-height: 22px;}
.L-M{margin-left: 50px;}
a.active.tab {color: #333;border-bottom: 2px solid #333;}
.menu-toggle:focus .icon-bars, .menu-toggle:focus .icon-bars:before, .menu-toggle:focus .icon-bars:after, .menu-toggle:hover .icon-bars, .menu-toggle:hover .icon-bars:before, .menu-toggle:hover .icon-bars:after {background-color: #333 !important;}
.icon-bars, .icon-bars:before, .icon-bars:after {background-color: #333 !important; }
.split-text{margin-top: 150px;}
.menu-inner-text{white-space: nowrap;font-size: 190px;color: white;-webkit-text-fill-color: transparent;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: #B3B3B3;font-family: 'roslindale_testingtextRg';  }
.Right-text{text-align: right;}
.inner-mid-space{padding: 0px;}
.inner-sec-mobi {padding: 0px;text-align: right;}
.POS-L{text-align: left;margin-left: 14px;}
.POS-L1{text-align: left;margin-left: 120px;}
.slide-right h1 {animation: 4s slide-right;animation-delay: 2s;}
ul.navbar-nav.ml-auto {height: 20px;}
.menu-toggle {display: block;height: 40px;padding: 15px 12px;position: relative;z-index: 1;background-color: transparent;border: 0 none;cursor: pointer;font-family: sans-serif;outline: medium none;overflow: visible;text-align: center;vertical-align: middle; }
.menu-toggle:before {content: attr(data-label);display: block;padding: 12px 0;position: absolute;right: 100%;top: 0;transition: color 0.2s ease 0s, opacity 0.3s ease 0s, visibility 0.3s ease 0s;}
.menu--is-revealed .menu-toggle:before {opacity: 0;visibility: hidden;}
.menu-toggle .icon-bars, 
.menu-toggle .icon-bars:before, .menu-toggle .icon-bars:after {transition: background-color 0.2s ease;}
.menu-toggle:focus .icon-bars, 
.menu-toggle:focus .icon-bars:before, 
.menu-toggle:focus .icon-bars:after, 
.menu-toggle:hover .icon-bars, 
.menu-toggle:hover .icon-bars:before, 
.menu-toggle:hover .icon-bars:after {background-color: red;}
.menu-toggle .icon-bars {transition: transform 0.3s ease-in, background-color 0.2s ease;}
.menu-toggle .icon-bars:before, .menu-toggle .icon-bars:after {transition: top 0.3s 0.3s ease-in, transform 0.3s ease-in, background-color 0.2s ease;}
.menu-toggle:active .icon-bars, 
.menu--is-revealed .menu-toggle .icon-bars {transition: transform 0.3s 0.2s ease-in, background-color 0.2s ease;transform: rotate3d(0, 0, 1, 135deg);}
.menu-toggle:active .icon-bars:before, .menu-toggle:active .icon-bars:after, .menu--is-revealed .menu-toggle .icon-bars:before, 
.menu--is-revealed .menu-toggle .icon-bars:after {transition: top 0.2s ease-in, transform 0.3s 0.2s ease-in, background-color 0.2s ease;transform: rotate3d(0, 0, 1, 90deg);top: 0;}
.icon-bars {position: relative;}
.icon-bars, .icon-bars:before, .icon-bars:after {display: block;width: 50px;height: 2px;background-color: currentColor;}
.icon-bars, .icon-bars:before, .icon-bars:after {background-color: #273138;}
.icon-bars:before, .icon-bars:after {content: "";position: absolute;left: 0;}
.icon-bars:before {top: 0.5em;}
.icon-bars:after {top: -0.5em;}
.content2 {justify-content: center;position: relative;/*animation: mymove 5s ;animation-delay: 3s;*/ }
.crousla-row{display: block !important;}
input#datepicker {color: #000000;font-family: 'Source Sans Pro', sans-serif;font-size: 16px;width: 226px;height: 59px;border: solid 1px #666666;padding: 15px 10px;background: transparent;    border-radius: 0;}
a.ui-state-default:hover {color: #454545 !important;}
input#datepicker1:focus {box-shadow: none;border: 2px solid #000000;border-radius: 4px;}
/*social icon hover*/
.image_off, #hom-1:hover .image_on,  #hom-2:hover .image_on,  #hom-3:hover .image_on {display: none;}
.image_on, #hom-1:hover .image_off, #hom-2:hover .image_off, #hom-3:hover .image_off {display: inline-block;}
select#cars-1::before{padding-right: 20px !important;}
select#cars-2::before{padding-right: 20px !important;}
select#cars-3::before{padding-right: 20px !important;}

.d-block{filter: drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.15));}
.shadow-bg{filter: drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.15));}
/*shapes css*/
.top-header-shape{position: absolute;top: 0;left: 0px;z-index: -1;width: 100%;}
.top-header-shape img.img-fluid.top-shape {height: 724px;width: 100%;}
img.img-fluid.L-shape {position: absolute;left: -3px;width:100%; height:1111px;}
.menu-shape {top: 25%;right: -162px;position: absolute;}
#basic-select-1 select {appearance: none;-webkit-appearance: none;-moz-appearance: none;}
#basic-select-1::after {font-family: FontAwesome;position: absolute;content: "\\f078";color: #333;top: 18px;right: 26px;}
#basic-select-1 select {appearance: none;-webkit-appearance: none;-moz-appearance: none;position: initial;font-family: 'Source Sans Pro', sans-serif;color:#000000;}

#basic-select-2 select {appearance: none;-webkit-appearance: none;-moz-appearance: none;}
#basic-select-2::after {font-family: FontAwesome;position: absolute;content: "\\f078";color: #333;top: 18px;right: 26px;}
#basic-select-2 select {appearance: none;-webkit-appearance: none;-moz-appearance: none;position: initial;font-family: 'Source Sans Pro', sans-serif;color:#000000;}

#basic-select-3 select {appearance: none;-webkit-appearance: none;-moz-appearance: none;}
#basic-select-3::after {font-family: FontAwesome;position: absolute;content: "\\f078";color: #333;top: 18px;right: 26px;}
#basic-select-3 select {appearance: none;-webkit-appearance: none;-moz-appearance: none;position: initial;font-family: 'Source Sans Pro', sans-serif;color:#000000;}
.cs-menu-mob-upper, .cs-menu-mob-down{display:none;}
.marq-mob{display:none;}

/****************popup******************/
body.modal-open {    background: #ffffff;}
body.modal-open .modal { padding-right: 0 !important;}
body .modal-dialog.modal-dialog-centered {max-width: 790px;}
.modal-content .modal-header  {border: 0;    padding-bottom: 0;}
.modal-content .modal-header button {opacity: 1;}
body .modal.fade .modal-dialog .modal-content {padding: 16px;border-radius: 0;border: 0;    background: #FFFDFA;}
.modal.fade .modal-dialog.modal-dialog-zoom {-webkit-transform: translate(0,0)scale(.5);transform: translate(0,0)scale(.5);}
.modal.show .modal-dialog.modal-dialog-zoom {-webkit-transform: translate(0,0)scale(1);transform: translate(0,0)scale(1);}
body .fade {transition: opacity .30s linear;}
body .modal.fade .modal-dialog {transition: -webkit-transform .8s ease-out;transition: transform .4s ease-out;transition: transform .4s ease-out,-webkit-transform .4s ease-out;-webkit-transform: translate(0,-50px);transform: translate(0,-50px);}
.popup-top-tagline {font-size: 22px;color: #666666;padding-bottom: 5px;}
.popup-top-heading {font-family: 'roslindale_testingtextRg';font-size: 48px;font-weight: normal;font-stretch: normal;font-style: normal;letter-spacing: 0.72px;color: rgba(0, 0, 0, 0.8);line-height:58px;padding-bottom: 5px;}
.popup-top-paragraph {font-weight: normal;font-size: 16px;line-height: 28px;color: #808080;}
body .modal.fade .modal-dialog .modal-content .modal-body {padding-left: 30px;padding-right: 30px;padding-top: 0;}
.row.custom-form-ele {padding-top: 30px;}
.custom-form-ele .form-group {    position: relative;}
.custom-form-ele ul {padding: 0;loat: left;    width: 100%;}
.custom-form-ele ul li {display: inline-block;width: 48.2%;float: left;}
.custom-form-ele ul li:nth-of-type(2n+2) {margin-left: 1.8%;}
.custom-form-ele ul li:nth-of-type(2n+1) {margin-right: 1.8%;}
.custom-form-ele ul li input{color: #000000;font-family: 'Source Sans Pro', sans-serif;font-size: 16px;height: 59px;border: solid 1px #000000;padding: 15px;background: transparent;border-radius: 0;}
.custom-form-ele ul li select{  -webkit-appearance: none;    -moz-appearance: none;   appearance: none;color: #000000;font-family: 'Source Sans Pro', sans-serif;font-size: 16px;height: 59px;border: solid 1px #000000;padding: 15px;background: transparent;border-radius: 0;}
.custom-form-ele ul li input:focus {background: #FFFDFA;box-shadow: none;border: 2px solid #000000;border-radius: 4px;color: #000000;font-family: 'Source Sans Pro', sans-serif;font-size: 16px;}
.custom-form-ele ul li select:focus {background: #FFFDFA;box-shadow: none;border: 2px solid #000000;border-radius: 4px;color: #000000;font-family: 'Source Sans Pro', sans-serif;font-size: 16px;}
.custom-form-ele ul li input::placeholder {color: #000000;}
.arrow-select::after {font-family: FontAwesome;position: absolute;content: "\\f078";color: #000000;top: 18px;right: 15px;}
.custom-form-ele ul li.msgbody {float: left;width: 100%;margin: 0;}
.custom-form-ele ul li textarea::placeholder {color: #000000;}
.custom-form-ele textarea {width: 100%;height: 118px;padding: 15px;color: #000000;font-family: 'Source Sans Pro', sans-serif;font-size: 16px;border: solid 1px #000000;background: transparent;border-radius: 0;}
.custom-form-ele ul li.submitbutton {float: left;width: 100%;margin: 0;}
.custom-form-ele ul li.submitbutton .modal-footer {border: 0;padding-left:0;padding-right:0;}
.custom-form-ele ul li.submitbutton .modal-footer button.btn.btn-primary {background: rgba(0,0,0,0.8);width: 100%;border: 0;box-shadow: none;height: 59px;color: #ffffff;font-family: 'Source Sans Pro', sans-serif;font-size: 16px;    border-radius: 0;margin:0;}
/**************** /popup******************/

`
export const style = `
  <style>
    ${`@media {background: red;}` + baseCss}
  </style>
  `

export const html = `
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark" id="myHeader">
   <div class="container nav-container">
	  <img class="img-fluid" src="${assetsUrl}/templates/restaurant1/images/Logo.png">
	  <div class="navbar-collapse hideshow content2 w100 " id="navbarResponsive">
		 <ul class="navbar-nav ml-auto ">
			<li class="nav-item active">
			   <a class="nav-link animate__animated" href="#home-section">Home
			   <span class="sr-only">(current)</span>
			   </a>
			</li>
			<li class="nav-item">
			   <a class="nav-link animate__animated" href="#About-section">About</a>
			</li>
			<li class="nav-item">
			   <a class="nav-link animate__animated" href="#Gallery-secrion">Gallery</a>
			</li>
			<li class="nav-item">
			   <a class="nav-link animate__animated" href="#Menu-section">Menu</a>
			</li>
			<li class="nav-item">
			   <a class="nav-link animate__animated" href="#Contact-section">Find Us</a>
			</li>
		 </ul>
	  </div>
	  <div id="menu-revealer" class="wrapper">
		 <button data-label="" role="button" class="menu-toggle">
		 <span class="icon-bars"></span>
		 </button>
	  </div>
   </div>
</nav>
<!-- /Navigation -->

<!-- Page Content -->
<div class="container-fluid ">


   <div class="top-sec main-body Most-top-sec">
	  <div class="top-header-shape">
		 <img class="img-fluid top-shape" src="${assetsUrl}/templates/restaurant1/images/Vector_Outline_01.png">
	  </div>
	  <div class="top-header-shape-1920">
		 <img class="img-fluid top-shape" src="${assetsUrl}/templates/restaurant1/images/shp-11.png">
	  </div>
	  <div class="row">
		 <div class="col-lg-9 col-md-9 mb-12">
			<p class="top-tagline">The Future of tradition</p>
			<h1 class="top-heading">Food so good... it’s <br>addictive</h1>
		 </div>
	  </div>
	  <div class="row">
		 <div class="col-md-6">
			<p class="top-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem urna, elementum nec ultrices sed, commodo eget augue. </p>
		 </div>
		 <div class="col-lg-6 col-md-12 mb-12 buttons-div">
			<button type="button" class="btn btn-outline" data-toggle="modal" data-target="#booktable">Reserve a table</button>      
		 </div>
	  </div>
   </div>
   
   
   <section class="slider-sec main-body">
	  <div class="row crousla-row">
		 <main id="Home-section">
			<div class="container slider-inner-cont">
			   <div class="carousel slide" id="main-carousel" data-ride="carousel">
				  <ol class="carousel-indicators">
					 <li data-target="#main-carousel" data-slide-to="0" class="active"></li>
					 <li data-target="#main-carousel" data-slide-to="1"></li>
					 <li data-target="#main-carousel" data-slide-to="2"></li>
				  </ol>
				  <!-- /.carousel-indicators -->
				  <div class="carousel-inner">
					 <div class="carousel-item active">
						<img class="d-block img-fluid" src="${assetsUrl}/templates/restaurant1/images/image%2045.jpg" alt="">
					 </div>
					 <div class="carousel-item">
						<img class="d-block img-fluid" src="${assetsUrl}/templates/restaurant1/images/image%2045.jpg" alt="">
					 </div>
					 <div class="carousel-item">
						<img class="d-block img-fluid" src="${assetsUrl}/templates/restaurant1/images/image%2045.jpg" alt="">
					 </div>
				  </div>
				  <!-- /.carousel-inner -->
				  <a href="#main-carousel" class="carousel-control-prev" data-slide="prev">
				  <span><img class="img-fluid" src="${assetsUrl}/templates/restaurant1/images/Next_Left.png"></span>
				  <span class="sr-only" aria-hidden="true">Prev</span>
				  </a>
				  <a href="#main-carousel" class="carousel-control-next" data-slide="next">
				  <span><img class="img-fluid"src="${assetsUrl}/templates/restaurant1/images/Next_Right.png"></span>
				  <span class="sr-only" aria-hidden="true">Next</span>
				  </a>
			   </div>
			</div>
		 </main>
	  </div>
   </section>
   
   
   <section class="tradition-sec main-body">
	  <div class="F-left-shape">
		 <img class="img-fluid L-shape" src="${assetsUrl}/templates/restaurant1/images/Vector_Outline_02.png">
	  </div>
	  <div class="F-left-shape-1920">
		 <img class="img-fluid L-shape-1920" src="${assetsUrl}/templates/restaurant1/images/shp-22.png">
	  </div>
	  <div class="row">
		 <div class="col-lg-4 col-md-4 mb-12"></div>
		 <div class="col-lg-8 col-md-12 mb-12">
			<p class="top-tagline">The Future of tradition</p>
			<h1 class="B-heading">Get more of what you really want!</h1>
			<p class="top-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus etiam.</p>
			<br>
			<p class="top-paragraph">Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum nam rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
		 </div>
	  </div>
   </section>
   
   
   <section class="our-partner main-body">
	  <div class="row mobil-space">
		 <div class="col-md-3 b-w agency-partner-sec">
			<img class="l-1 img-fluid" src="${assetsUrl}/templates/restaurant1/images/Vimeo.png">
		 </div>
		 <div class="col-md-3 b-w agency-partner-sec no-border">
			<img class="l-1 img-fluid" src="${assetsUrl}/templates/restaurant1/images/Spotify.png">
		 </div>
		 <div class="col-md-3 b-w agency-partner-sec">
			<img class="l-1 img-fluid" src="${assetsUrl}/templates/restaurant1/images/Woodendummy.png">
		 </div>
		 <div class="col-md-3 b-w-2 agency-partner-sec">
			<img class="l-1 img-fluid" src="${assetsUrl}/templates/restaurant1/images/Max.png">
		 </div>
		 <div class="col-md-3 b-w-1 agency-partner-sec">
			<img class="l-1 img-fluid" src="${assetsUrl}/templates/restaurant1/images/Aria.png">
		 </div>
		 <div class="col-md-3 b-w-1 agency-partner-sec no-border">
			<img class="l-1 img-fluid" src="${assetsUrl}/templates/restaurant1/images/Bauknecht.png">
		 </div>
		 <div class="col-md-3 b-w-1 agency-partner-sec N-Border-m">
			<img class="l-1 img-fluid" src="${assetsUrl}/templates/restaurant1/images/Jeep.png">
		 </div>
		 <div class="col-md-3 agency-partner-sec ">
			<img class="l-1 img-fluid" src="${assetsUrl}/templates/restaurant1/images/Placeholder.png">
		 </div>
	  </div>
   </section>
   
   
   <section class="thechef-sec main-body"id="About-section">
	  <div class="row xs-div">
		 <div class="col-lg-6 col-md-6 mb-12 text-sec-spacing text-div">
			<p class="top-tagline">The chef</p>
			<h1 class="B-heading">Mauro <br>COLAGRECO</h1>
			<p class="top-paragraph">Through his personal interpretations of ingredients and flavour combinations, Mauro Colagreco has forged a style of his own.<br>
			   He has absorbed his Italian-Argentinian cultural heritage and that of the chefs with whom he trained, and now follows his intuition as he draws on the local culture on both sides of the border.
			</p>
			<br>
			<p class="top-paragraph">Inspired by the sea, the mountains and the fruit and vegetables grown in his own gardens, Mauro invents colourful, pictorial dishes that play with textures and bold contrasts.</p>
		 </div>
		 <div class="col-lg-6 col-md-6 mb-12 image-div">   
			<img class="img-fluid shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2055.jpg">   
		 </div>
	  </div>
   </section>
   
   
   <section class="recipie-sec main-body">
	  <div class="row">
		 <div class="col-lg-12 col-md-12 mb-12">
			<img class="img-fluid shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2057.jpg">   
		 </div>
		 <div class="col-lg-12 col-md-12 mb-12">
			<h1 class="recipe-head">Chateau Marguii Rose</h1>
			<p class="recipe-para"> France (Provence) Cinsault, Grenache France (Provence)<br>
			   Cinsault, Grenache 
			</p>
		 </div>
	  </div>
   </section>
   
   
   <div class="row inner-recipie-sec main-body"id="Gallery-section">
	  <div class="col-lg-6 col-md-6 mb-12 inner-mid-space">
		 <img class="img-fluid inner-full-width shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2063.jpg">
		 <h1 class="recipe-head">Aubry 1er Cru Brut </h1>
		 <p class="recipe-para"> France (Champagne) Chardonnay, Pinot Noir </p>
	  </div>
	  <div class="col-lg-6 col-md-6 mb-12 inner-sec-mobi">
		 <img class="img-fluid shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2062.jpg">
		 <h1 class="recipe-head POS-L">Niepoort ‘Redoma Branco’</h1>
		 <p class="recipe-para POS-L">Portugal (Douro) Rabigato, Codéga de LarinhoFrance
			(Provence) Cinsault 
		 </p>
	  </div>
   </div>
   
   
   <div class="row full-recipie-sec main-body">
	  <div class="offset-lg-2 col-lg-8 offset-md-2 col-md-8 mb-12 R-pading">
		 <img class="img-fluid shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2061.jpg">
		 <h1 class="recipe-head">Guillot Broux ‘Genievrieres’ </h1>
		 <p class="recipe-para">France (Burgundy) Chardonnay </p>
	  </div>
   </div>
   
   
   <div class="row inner-recipie-sec main-body">
	  <div class="col-lg-6 col-md-6 mb-12 R-pading">
		 <img class="img-fluid shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2064.jpg">
		 <h1 class="recipe-head">Day Wines ‘Cancilla Vineyard’ </h1>
		 <p class="recipe-para">France (Champagne) Chardonnay, Pinot Noir </p>
	  </div>
	  <div class="col-lg-6 col-md-6 mb-12 inner-mid-space s inner-sec-mobi">
		 <img class="img-fluid shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2058.jpg">
		 <h1 class="recipe-head POS-L1">Chateau Marguii Rose </h1>
		 <p class="recipe-para POS-L1">France (Provence) Cinsault </p>
	  </div>
   </div>
   
   
   <section class="menuoftheday">
	  <!--<img class ="img-fluid"src="${assetsUrl}/templates/restaurant1/images/Menu%20of%20day.png">-->
	  <!--<div class="row"> 
		 <div class="col-lg-6 col-md-6 mb-12 slide-right" style="padding-left: 0px">   
			 <marquee width="100%" direction="right" scrollamount="20">
				 <h1 class="menu-inner-text">Menu of </h1> </marquee></div>
		  
		 <div class="col-lg-6 col-md-6 mb-12 split-text" style="padding-right: 0px;"> 
			<marquee width="100%" direction="left"  scrollamount="20">
				<h1 class="menu-inner-text Right-text">the Day</h1> </marquee></div>    
		 </div>-->
	  <div class="row marq-des">
		 <div class="col-lg-12 col-md-12 mb-12 slide-right" style="padding-left: 0px">
			<marquee width="100%" direction="right" scrolldelay="90" scrollamount="20">
			   <h1 class="menu-inner-text">Menu of </h1>
			</marquee>
			<marquee width="100%" direction="left"  scrolldelay="90" scrollamount="20">
			   <h1 class="menu-inner-text Right-text">the Day</h1>
			</marquee>
		 </div>
	  </div>
	  <div class="row marq-mob">
		 <div class="col-lg-12 col-md-12 mb-12 slide-right" style="padding-left: 0px">
			<marquee width="100%" direction="right" scrolldelay="300" scrollamount="20">
			   <h1 class="menu-inner-text">Menu of </h1>
			</marquee>
			<marquee width="100%" direction="left"  scrolldelay="300" scrollamount="20">
			   <h1 class="menu-inner-text Right-text">the Day</h1>
			</marquee>
		 </div>
	  </div>
   </section>
   
   
   <section class="bottom-tradition main-body">
	  <div class="row">
		 <div class="col-lg-9 col-md-12 mb-12">
			<p class="top-tagline">The Future of tradition</p>
			<h1 class="B-heading">Where the flavor <br>inebriates you</h1>
			<p class="top-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>
		 </div>
	  </div>
   </section>
   
   
   <div class="cs-menu-mob-upper"></div>
   <section class="tabs-section main-body cs-menu" id="Menu-section">
	  <div class="row">
		 <div class="col-md-12">
			<div class="nav nav-pills scrollmenu">
			   <a class="active tab" data-toggle="pill" href="#menu1">Cocktails</a>
			   <a class="L-M tab" data-toggle="pill" href="#menu2">Afterdinner Cocktails</a>
			   <a class="L-M tab" data-toggle="pill" href="#menu3">Maindish</a>
			   <a class="L-M tab" data-toggle="pill" href="#menu4">Wine</a>
			   <a class="L-M tab" data-toggle="pill" href="#menu3">Beer</a>
			</div>
			<div class="menu-shape">
			   <img class="img-fluid menu-image" src="${assetsUrl}/templates/restaurant1/images/Vector_Outline_03.png">
			</div>
			<div class="menu-shape-1920">
			   <img class="img-fluid menu-image" src="${assetsUrl}/templates/restaurant1/images/shp-3.png">
			</div>
			<div class="tab-content">
			   <div id="menu1" class="tab-pane active show">
				  <div class="row">
					 <div class="col-lg-6 col-md-6 mb-12">
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Aubry 1er Cru Brut </p>
							  <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">50$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Chateau Marguii Rose 2016 </p>
							  <p class="tabs-para">France (Provence) Cinsault, Grenache France (Provence)
								 Cinsault, Grenache 
							  </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2016</p>
							  <p class="tabs-para"> France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">50$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2015</p>
							  <p class="tabs-para"> Portugal (Douro) Rabigato, Codéga de LarinhoFrance(Provence) Cinsault </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">70$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Guillot Broux ‘Genievrieres’ 2015</p>
							  <p class="tabs-para">France (Burgundy) Chardonnay </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">30$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Day Wines ‘Cancilla Vineyard’ 2014 </p>
							  <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir  </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2013 </p>
							  <p class="tabs-para">France (Loire) </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2012 </p>
							  <p class="tabs-para"> Portugal (Douro) Rabigato</p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">80$</p>
						   </div>
						</div>
					 </div>
					 <div class="col-lg-6 col-md-6 mb-12 inner-image">
						<img class="img-fluid shadow-bg"src="${assetsUrl}/templates/restaurant1/images/image%2054.jpg">
						<img class="img-fluid sub-image shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2053.jpg">    
					 </div>
				  </div>
			   </div>
			   <div id="menu2" class="tab-pane fade">
				  <div class="row">
					 <div class="col-lg-6 col-md-6 mb-12">
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Aubry 1er Cru Brut </p>
							  <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">50$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Chateau Marguii Rose 2016 </p>
							  <p class="tabs-para">France (Provence) Cinsault, Grenache France (Provence)
								 Cinsault, Grenache 
							  </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2016</p>
							  <p class="tabs-para"> France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">50$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2015</p>
							  <p class="tabs-para"> Portugal (Douro) Rabigato, Codéga de LarinhoFrance(Provence) Cinsault </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">70$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Guillot Broux ‘Genievrieres’ 2015</p>
							  <p class="tabs-para">France (Burgundy) Chardonnay </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">30$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Day Wines ‘Cancilla Vineyard’ 2014</p>
							  <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir  </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2013</p>
							  <p class="tabs-para">France (Loire) </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2012</p>
							  <p class="tabs-para"> Portugal (Douro) Rabigato</p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">80$</p>
						   </div>
						</div>
					 </div>
					 <div class="col-lg-6 col-md-6 mb-12 inner-image">
						<img class="img-fluid shadow-bg"src="${assetsUrl}/templates/restaurant1/images/image%2054.jpg">
						<img class="img-fluid sub-image shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2053.jpg">    
					 </div>
				  </div>
			   </div>
			   <div id="menu3" class="tab-pane fade">
				  <div class="row">
					 <div class="col-lg-6 col-md-6 mb-12">
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Aubry 1er Cru Brut </p>
							  <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">50$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Chateau Marguii Rose 2016 </p>
							  <p class="tabs-para">France (Provence) Cinsault, Grenache France (Provence)
								 Cinsault, Grenache 
							  </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2016</p>
							  <p class="tabs-para"> France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">50$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2015</p>
							  <p class="tabs-para"> Portugal (Douro) Rabigato, Codéga de LarinhoFrance(Provence) Cinsault </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">70$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Guillot Broux ‘Genievrieres’ 2015</p>
							  <p class="tabs-para">France (Burgundy) Chardonnay </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">30$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Day Wines ‘Cancilla Vineyard’ 2014</p>
							  <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir  </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2013</p>
							  <p class="tabs-para">France (Loire) </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2012</p>
							  <p class="tabs-para"> Portugal (Douro) Rabigato</p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">80$</p>
						   </div>
						</div>
					 </div>
					 <div class="col-lg-6 col-md-6 mb-12 inner-image">
						<img class="img-fluid shadow-bg"src="${assetsUrl}/templates/restaurant1/images/image%2054.jpg">
						<img class="img-fluid sub-image shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2053.jpg">    
					 </div>
				  </div>
			   </div>
			   <div id="menu4" class="tab-pane fade">
				  <div class="row">
					 <div class="col-lg-6 col-md-6 mb-12">
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Aubry 1er Cru Brut </p>
							  <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">50$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Chateau Marguii Rose 2016 </p>
							  <p class="tabs-para">France (Provence) Cinsault, Grenache France (Provence)
								 Cinsault, Grenache 
							  </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2016</p>
							  <p class="tabs-para"> France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">50$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2015</p>
							  <p class="tabs-para"> Portugal (Douro) Rabigato, Codéga de LarinhoFrance(Provence) Cinsault </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">70$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Guillot Broux ‘Genievrieres’ 2015</p>
							  <p class="tabs-para">France (Burgundy) Chardonnay </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">30$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Day Wines ‘Cancilla Vineyard’ 2014</p>
							  <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir  </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2013</p>
							  <p class="tabs-para">France (Loire) </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2012</p>
							  <p class="tabs-para"> Portugal (Douro) Rabigato</p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">80$</p>
						   </div>
						</div>
					 </div>
					 <div class="col-lg-6 col-md-6 mb-12 inner-image">
						<img class="img-fluid shadow-bg"src="${assetsUrl}/templates/restaurant1/images/image%2054.jpg">
						<img class="img-fluid sub-image shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2053.jpg">    
					 </div>
				  </div>
			   </div>
			   <div id="menu5" class="tab-pane fade">
				  <div class="row">
					 <div class="col-lg-6 col-md-6 mb-12">
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Aubry 1er Cru Brut </p>
							  <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">50$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Chateau Marguii Rose 2016 </p>
							  <p class="tabs-para">France (Provence) Cinsault, Grenache France (Provence)
								 Cinsault, Grenache 
							  </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2016</p>
							  <p class="tabs-para"> France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">50$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2015</p>
							  <p class="tabs-para"> Portugal (Douro) Rabigato, Codéga de LarinhoFrance(Provence) Cinsault </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">70$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Guillot Broux ‘Genievrieres’ 2015</p>
							  <p class="tabs-para">France (Burgundy) Chardonnay </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">30$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Day Wines ‘Cancilla Vineyard’ 2014</p>
							  <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir  </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2013</p>
							  <p class="tabs-para">France (Loire) </p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">20$</p>
						   </div>
						</div>
						<div class="row inner-table">
						   <div class="col-md-10 L-list">
							  <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2012</p>
							  <p class="tabs-para"> Portugal (Douro) Rabigato</p>
						   </div>
						   <div class="col-md-2 R-list">
							  <p class="tabs-heading">80$</p>
						   </div>
						</div>
					 </div>
					 <div class="col-lg-6 col-md-6 mb-12 inner-image">
						<img class="img-fluid shadow-bg"src="${assetsUrl}/templates/restaurant1/images/image%2054.jpg">
						<img class="img-fluid sub-image shadow-bg" src="${assetsUrl}/templates/restaurant1/images/image%2053.jpg">    
					 </div>
				  </div>
			   </div>
			</div>
		 </div>
	  </div>
   </section>
   <div class="cs-menu-mob-down"></div>
   
   
   <div class="row avilable-section main-body twelve"></div>
   <div class="row avilable-section main-body">
	  <div class="col-lg-7 col-md-6 mb-12">
		 <p class="top-tagline">Make online Reservation</p>
		 <h1 class="B-heading head-W">We are available for dinnings & <br />events</h1>
	  </div>
	  <div class="col-lg-5 col-md-6 mb-12 p-0">
		 <p class="top-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
		 <p class="top-paragraph book-margin-top">Book online or give us a call +1-541-754-3700 between 10:30am - 6.00pm on weekdays. and between 11pm - 4.30pm on weekends </p>
	  </div>
   </div>
   
   
   <div  class="row book-now-sec main-body">
	  <div id="basic-select-1"class="col-lg-3 col-md-3 mb-12 R-pading ">
	  <input type="text" id="datepicker" class="datepicker form-control" value="25/09/2020">
		 <!--<select id="cars-1" name="cars">
			<option value="volvo">13/07/2020</option>
			<option value="saab">14/07/2020</option>
			<option value="fiat">15/07/2020</option>
			<option value="audi">16/07/2020</option>
		 </select>-->
	  </div>
	  <div id="basic-select-2"class="col-lg-3 col-md-3 mb-12 R-pading">
		 <select id="cars-2" name="cars">
			<option value="time">1:00 am</option>
			<option value="time">2:00 am</option>
			<option value="time">3:00 am</option>
			<option value="time">4:00 am</option>
			<option value="time">5:00 am</option>
			<option value="time">6:00 am</option>
			<option value="time">7:00 am</option>
			<option value="time">8:00 am</option>
			<option value="time">9:00 am</option>
			<option value="time">10:00 am</option>
			<option value="time">11:00 am</option>
			<option value="time">12:00 am</option>
			<option value="time">1:00 am</option>
			<option value="time">2:00 pm</option>
			<option value="time">3:00 pm</option>
			<option value="time">4:00 pm</option>
			<option value="time">5:00 pm</option>
			<option value="time">6:00 pm</option>
			<option value="time">7:00 pm</option>
			<option value="time">8:00 pm</option>
			<option value="time">9:00 pm</option>
			<option value="time">10:00 pm</option>
			<option value="time">11:00 pm</option>
			<option value="time">12:00 pm</option>
		 </select>
	  </div>
	  <div id="basic-select-3" class="col-lg-3 col-md-3 mb-12 R-pading ">
		 <select id="cars-3" name="cars">
			<option class="color-set"value="volvo">2 People</option>
			<option class="color-set"value="saab">3 People</option>
			<option class="color-set"value="fiat">4 People</option>
			<option class="color-set"value="audi">5 People</option>
		 </select>
	  </div>
	  <div class="col-lg-3 col-md-3 mb-12 R-pading"><button class="book-table">Book a Table</button></div>
   </div>
   <div class="row avilable-section main-body twelve"></div>
   
   <div class="cs-menu-mob-downn"></div>
   
   
</div>


<!-- Footer -->
<footer class="py-5 bg-dark main-body" id="Contact-section">
   <div class="container R-pading">
	  <div class="row">
		 <div class="col-lg-3 col-md-3 mb-6 left-col">
			<h5 class="footer-header">Address</h5>
			<ul class="list-unstyled quick-links">
			   <li class="footer-paragraph">4108 Columbia Ave, Ridge</li>
			   <li class="footer-paragraph">Spring, SC, 29129</li>
			   <ul class="list-unstyled quick-links">
				  <h5 class="footer-header bottom-gap">Opening hours</h5>
				  <li class="footer-paragraph">Monday to Saturday</li>
				  <li class="footer-paragraph">11:00 - 16.30</li>
			   </ul>
			</ul>
		 </div>
		 <div class="col-lg-3 col-md-3 mb-6 left-col">
			<h5 class="footer-header">Phone</h5>
			<ul class="list-unstyled quick-links">
			   <li class="footer-paragraph">+1-541-754-3700</li>
			   <li class="footer-paragraph">+1-541-368-3700</li>
			   <ul class="list-unstyled quick-links">
				  <h5 class="footer-header bottom-gap">Email</h5>
				  <li class="footer-paragraph">info@siteSeed.com</li>
			   </ul>
			</ul>
		 </div>
		 <div class="col-lg-3 col-md-3 mb-6 left-col">
			<h5 class="follow-us-text">Follow us</h5>
			<ul class="list-unstyled quick-links">
			   <li><a id="hom-1" href="#">
				  <img class="social-icons img-fluid image_on"src="${assetsUrl}/templates/restaurant1/images/Instagram.png" />
				  <img class="social-icons img-fluid image_off"src="${assetsUrl}/templates/restaurant1/images/insta-hover.png" />    
				  </a>
				  <a id="hom-2" href="#"><img class="social-icons img-fluid image_on" src="${assetsUrl}/templates/restaurant1/images/Facebook.png">
				  <img class="social-icons img-fluid image_off"src="${assetsUrl}/templates/restaurant1/images/fb-hover.png">
				  </a>
				  <a id="hom-3" href="#"><img class="social-icons img-fluid image_on" src="${assetsUrl}/templates/restaurant1/images/Linkedin.png">
				  <img class="social-icons img-fluid image_off"src="${assetsUrl}/templates/restaurant1/images/linkedin-hover.png">
				  </a>
			   </li>
			</ul>
		 </div>
	  </div>
	  <div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12"><p class="copyright-text">© 2020 SiteSeed. All Rights Reserved.</p></div>
	  </div>
   </div>
   <!-- /.container -->
</footer>

<!------------------------------------popup----------------------------------->

<div class="modal fade" id="booktable" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel4" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg" role="document">
  <div class="modal-content">
	  <div class="modal-header">
	  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	  <span aria-hidden="true"><img class="img-fluid shadow-bg"src="${assetsUrl}/templates/restaurant1/images/popup-cross.png"></span>
	  </button>
	  </div>
	  <div class="modal-body">
		  <div class="row">
			 <div class="col-lg-12 col-md-12 col-sm-12">
				<p class="popup-top-tagline">The Fututre of tradition</p>
				<h1 class="popup-top-heading">Book a Table</h1>
			 </div>
		  </div>
		  <div class="row">
			 <div class="col-md-9 col-lg-9 col-sm-12">
				<p class="popup-top-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem urna, elementum nec ultrices sed, commodo eget augue. </p>
			 </div>
		  </div>
		  <div class="row custom-form-ele">
			 <div class="col-md-12 col-lg-12 col-sm-12">
				  <ul>
					  <form>
						  <li>
							<div class="form-group"> 
							  <input type="text" class="form-control" placeholder="Your name">
							</div>
						  </li>
						  <li>
							<div class="form-group">    
							  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email">
							</div>
						  </li>
						  <li>
							<div class="form-group"> 
							  <input type="text" class="form-control" placeholder="Your phone">
							</div>
						  </li>																
						  <li>
							  <div class="form-group"> 
								  <div id="guest-select" class="guest-main arrow-select">
									 <select class="form-control" >
										<option selected class="guest-list demo">Number of guests</option>
										<option class="guest-list">2 People</option>
										<option class="guest-list">3 People</option>
										<option class="guest-list">4 People</option>
										<option class="guest-list">5 People</option>
									 </select>
								  </div>
							  </div>
						  </li>
						  <li>
							  <div class="form-group">
								  <div id="date-select" class="date-main arrow-select">
									  <input type="text" id="datepicker1" class="datepicker form-control" value="23/11/2020">
								  </div>
							  </div>
						  </li>
						  <li>
							  <div class="form-group">
								  <div id="time-select" class="time-main arrow-select">
									 <select class="form-control" >
										<option selected="selected" class="time-list demo"><span class="grey_color">Select time</span></option>
										<option class="time-list">2 pm </option>
										<option class="time-list">3 pm</option>
										<option class="time-list">4 pm</option>
										<option class="time-list">5 pm</option>
									 </select>
								  </div>
							  </div>
						  </li>
						  <li class="msgbody">
							  <div class="form-group">
								  <div id="text-select" class="guest-main">
									  <textarea name="message" placeholder="Enter your message" ></textarea>
								  </div>
							  </div>
						  </li>	
						  <li class="submitbutton">	
							  <div class="form-group">
								  <div class="modal-footer">
								  <button type="button" class="btn btn-primary">Submit your reservation</button>
								  </div>	
							  </div>	
						  </li>			
					  </form>					
				  </ul>						
	  </div>
	  </div>
	  
	  
	  
	  
	  </div>
  </div>
</div>
</div>
<!------------------------------------popup----------------------------------->


<!-- Bootstrap core JavaScript -->
<script src="${assetsUrl}/templates/restaurant1/vendor/jquery/jquery.min.js"></script>
<script src="${assetsUrl}/templates/restaurant1/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>-->
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
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