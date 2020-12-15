import { appUrl } from "../../../settings";

export const customCss = `
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');  
  

  @-webkit-keyframes fadeIn {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
   

/*ALL MEDIA QUERY*/

/*Resolution 1680*/


@media only screen and (max-width: 479px) {
	.testimonial .testimonial-content:after {
		content: "";
	}
}

@media only screen and (max-width: 1680px) and (min-width: 1600px) {
	.latest-services-block {
		padding: 125px;
	}

	.content {
		padding: 100px;
	}

	.B-blog-heading {
		font-size: 32px;
		line-height: 43px;
		width: 450px;
	}

	.content-img {
		padding: 60px 100px 100px 100px;
	}

	.G-img-bottom-1 {
		left: 11.2em !important;
	}

	.BOX-1 {
		padding: 45px 20px 20px 20px !important;
	}

	.Testimonial-bottom {
		top: 21.9em !important;
		position: relative;
		right: 22em !important;
	}
}
/* END Resolution 1680*/



/*1280 view*/
@media only screen and (max-width: 1300px) and (min-width: 1280px) {
	.B-services-text {
		margin-bottom: 26px !important;
	}

	.G-img-bottom-1 {
		left: 10.1em !important;
		position: relative;
		max-width: 41% !important;
	}

	h1.top-heading {
		font-size: 45px !important;
	}

	.footer-heading {
		font-size: 36px;
	}

	.BOX-1 {
		padding: 10px 20px 6px 20px !important;
	}

	span.bio-org-box img {
		margin-bottom: 3px !important;
	}

	p.descrpt {
		font-size: 13px!important;
	}

	.insta-follow-sec {
		padding: 78px 20px 20px 20px !important;
	}

	li.B-footer {
		padding: 0px 8px !important;
	}

	.right-col-1 {
		width: 26% !important;
	}

	.left-col-1 {
		width: 74% !important;
	}
}
/* END 1280 view*/

/*1536 view*/
@media only screen and (max-width: 1536px) and (min-width: 1500px) {

	.G-img-bottom-1 {
		left: 10.2em !important;
	}

	.testimonial-U-img {
		position: absolute;
	}

	.BOX-1 {
		padding: 20px 20px 7px 20px !important;
	}

	.latest-services-block {
		padding: 95px;
	}
}


/*END 1520 view*/

@media only screen and (max-width: 1900px) and (min-width: 1280px) {
	.B-services-text {
		margin-bottom: 50px;
	}

	.service-text-block {
		top: -2em;
		position: relative;
		left: 50px;
	}

	.testimonial-Text-sec {
		height: fit-content;
	}

	.testimonial-U-img {
		margin-top: -4.7em;
	}

	.percentge {
		font-family: 'Raleway';
		font-weight: 600;
		font-size: 36px;
		line-height: 42px;
		font-style: normal;
		color: #fff;
	}

	p.descrpt {
		text-transform: uppercase;
		font-family: 'Raleway';
		font-weight: 600;
		font-size: 16px;
		line-height: 19px;
		font-style: normal;
		color: #fff;
	}

	.F-blog-text {
		padding: 0px 90px;
	}

	.left-col {
		float: left;
		width: 84%;
	}

	.BOX-1 {
		padding: 28px 20px 20px 20px;
		background: #b4d6b1;
	}

	.right-col {
		width: 16%;
		float: left;
	}

	.left-col-1 {
		float: left;
		width: 77%;
	}

	.right-col-1 {
		text-align: right;
		width: 23%;
		float: left;
	}

	.owl-theme .owl-controls {
		top: -12em;
		position: absolute;
		left: 54em;
	}

	.G-img-bottom-1 {
		left: 9.6em;
		position: relative;
		max-width: 50%;
	}

	.G-img-bottom {
		margin-top: -3em;
	}

	.About-tet {
		padding-top: 4em;
	}

	section.About-us {
		padding: 100px 50px;
	}

	section.Our.services {
		padding: 50px 0px;
	}

	.gallery-text-block {
		position: relative;
		top: 2em;
		left: 11em;
	}

	section.our-blog-section {
		padding: 50px 50px;
	}

	.exp-img {
		border: 5px solid #fff;
	}

	.gallry-imgs {
		position: relative;
		z-index: 2;
		left: 9em;
	}
}


/*27 ich screen*/

@media only screen and (max-width: 3000px) and (min-width: 1901px) {
    
	.Footer-section {
		margin-top: 9em !important;
	}

	.bg-img {
		background-image: url(http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/bg-img-1920.jpg) !important;
		min-height: 63em !important;
	}

	.B-services-text {
		margin-bottom: 50px;
	}

	.service-text-block {
		top: -2em;
		position: relative;
		left: 50px;
	}

	p.top-paragraph {
		font-size: 13px;
		line-height: 22px;
	}

	.B-blog-heading {
		font-size: 24px;
		line-height: 32px;
		width: 360px;
	}

	.P-blog-text {
		font-size: 13px;
		line-height: 22px;
	}

	.learn-txt {
		font-size: 13px;
		line-height: 15px;
	}

	.learn-txt:hover .R-arrow-img {
		margin-left: -10px;
		padding: 20px;
		background-color: rgba(0, 0, 0, 0.15);
		margin-top: -5px;
		border-radius: 50px;
	}

	.testimonial .title {
		line-height: 32px !important;
		font-size: 24px !important;
	}

	.testimonial .name {
		font-size: 13px !important;
		line-height: 22px !important;
	}

	.know-more-button {
		margin-top: 2em;
		background-color: #3b717b;
		border: 0px;
		font-family: 'Raleway';
		font-size: 13px;
		line-height: 22px;
	}

	.know-more-button-B {
		font-size: 13px;
		line-height: 22px;
	}

	button.Book-now-button {
		font-size: 13px;
		line-height: 22px;
	}

	li a {
		font-size: 16px;
		line-height: 22px;
	}

	.navbar-dark .navbar-nav .nav-link {
		font-size: 16px;
	}

	.container.mobi-container {
		max-width: 86% !important;
	}

	section.testimonial-section {
		padding: 200px 50px !important;
	}

	nav.navbar.navbar-expand-lg.navbar-dark {
		padding: 40px 10px;
	}

	p.Abt-txt {
		font-size: 16px;
		line-height: 22px;
	}

	span.num-count {
		font-size: 52px;
		line-height: 69px;
	}

	span.inner-follow-sec {
		font-size: 16px;
		line-height: 22px;
	}

	.B-services-text {
		font-size: 13px;
		line-height: 22px;
	}

	.testimonial .post {
		font-size: 13px !important;
		line-height: 27px !important;
	}

	.testimonial-Text-sec {
		height: fit-content;
	}

	.testimonial-U-img {
		margin-top: -9.2em;
	}

	.percentge {
		font-family: 'Raleway';
		font-weight: 600;
		font-size: 36px;
		line-height: 42px;
		font-style: normal;
		color: #fff;
	}

	p.descrpt {
		text-transform: uppercase;
		font-family: 'Raleway';
		font-weight: 600;
		font-size: 16px;
		line-height: 22px;
		font-style: normal;
		color: #fff;
	}

	.F-blog-text {
		padding: 0px 90px;
	}

	.left-col {
		float: left;
		width: 88%;
	}

	.right-col {
		width: 12%;
		float: left;
	}

	.content-1 {
		padding: 9em !important;
	}

	.BOX-1 {
		padding: 105px 20px 72px 20px;
		background: #b4d6b1;
	}

	span.inner-follow-sec img {
		width: 2.1em;
	}

	.left-col-1 {
		float: left;
		width: 77%;
	}

	.right-col-1 {
		text-align: right;
		width: 23%;
		float: left;
	}

	.owl-theme .owl-controls {
		top: -12em;
		position: absolute;
		left: 54em;
	}

	.G-img-bottom-1 {
		left: 16.9em;
		position: relative;
		max-width: 50%;
	}

	.G-img-bottom {
		margin-top: -3em;
	}

	.About-tet {
		padding-left: 50px;
		padding-top: 4em;
	}

	section.About-us {
		padding: 100px 50px;
	}

	section.Our.services {
		padding: 50px 0px;
	}

	.gallery-text-block {
		position: relative;
		top: 2em;
		left: 11em;
	}

	.content {
		padding: 100px;
	}

	section.our-blog-section {
		padding: 50px 50px;
	}

	.exp-img {
		border: 5px solid #fff;
	}

	.gallry-imgs {
		position: relative;
		z-index: 2;
		left: 9em;
	}
}

/* END 27 ich screen*/
@media only screen and (max-width: 600px) and (min-width: 0px) {
	.bg-img {
		background-image: url(http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/bg-img-mobile.jpg);
		min-height: 50em;
	}

	.top-text {
		position: relative;
		top: 4em !important;
	}

	a.nav-link.nav-link-1.active {
		border-bottom: 2px solid #0000;
	}
}


@media only screen and (max-width: 820px) and (min-width: 0px) {
    
	.navbar-dark .navbar-toggler-icon {
		background-image: url(http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Hamburger_icon.svg.png) !important;
	}

	.mobi-logo {
		display: block !important;
	}

	ul.navbar-nav {
		padding: 40px 0px;
	}

	.offcanvas-header.mt-3 {
		position: relative;
		float: right;
		display: block !important;
		top: -2em;
	}

	i.fa.fa-times.btn-close {
		font-size: 25px;
		color: #fff;
		position: relative;
		top: -15px;
	}

	.navbar-dark .navbar-nav .nav-link {
		color: #fff !important;
	}

	.latest-services-block {
		padding: 20px 70px;
	}

	.bar1, .bar2, .bar3 {
		width: 32px;
		height: 4px;
		background-color: #3b717b;
		margin: 7px 0;
		transition: 0.4s;
	}

	.testimonial {
		padding: 0px !important;
	}

	iframe#cartoonVideo {
		height: 180px;
		width: 250px !important;
		
	}

	.B-blog-heading-w {
		font-size: 24px;
		line-height: 32px;
	}

	p.Abt-txt {
		margin-top: 0px;
	}

	.testimonial .name {
		font-size: 15px !important;
	}

	.demo {
		margin: 30px 0px !important;
	}

	.footer-heading {
		font-family: 'Playfair Display';
		font-size: 29px;
		line-height: 39px;
		color: #000;
		font-style: normal;
	}

	p.top-paragraph {
		width: 100% !important;
	}

	.BOX-1 {
		padding: 50px;
		background: #b4d6b1;
	}

	.percentge {
		font-family: 'Raleway';
		font-weight: 600;
		font-size: 20px;
		line-height: 42px;
		font-style: normal;
		color: #fff;
	}

	p.descrpt {
		text-transform: uppercase;
		font-family: 'Raleway';
		font-weight: 600;
		font-size: 13px;
		line-height: 19px;
		font-style: normal;
		color: #fff;
	}

	.mobi-container {
		margin-top: -20px;
	}

	.owl-theme .owl-controls {
		top: -4em;
		position: absolute;
		left: 7em;
	}

	.footer-bottom {
		margin-bottom: 30px;
		border-top: 1px solid #0000001c;
		padding: 10px 10px;
	}

	p.left-col-1 {
		margin-bottom: 15px;
	}

	.web-v {
		display: none !important;
	}

	.mobi-v {
		display: block !important;
	}

	section.testimonial-section {
		padding: 20px 20px;
	}

	.footer-bottom {
		text-align: center;
	}

	.footer-sec-1 {
		width: 49% !important;
	}

	.footer-sec-1.insta-follow-sec {
		width: 100% !important;
	}

	.column {
		float: left;
		width: 100% !important;
	}

	.content-1 {
		padding: 2em;
	}

	.f12 {
		visibility: hidden;
		padding: 15px;
		position: relative;
		z-index: 2;
		box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
		width: 100%;
		background-color: #f5dad1;
	}

	.gallery-text-block {
		padding: 30px;
	}

	.content {
		padding: 50px;
	}

	.insta-follow-sec {
		padding: 50px;
	}

	.form-control {
		width: 66% !important;
	}

	.exp-img {
		border: 5px solid #fff;
	}

	.Our-gallery {
		padding: 0px!important;
	}

	h1.top-heading {
		font-size: 24px;
		line-height: 39px;
		color: #000;
		font-style: normal;
	}

	.About-tet {
		padding-left: 0px !important;
		margin-top: 50px;
	}

	.service-txt {
		width: 65%;
	}

	section.About-us {
		padding: 50px 50px;
	}

	.service-text-block {
		left: 50px;
		top: -2em;
		position: relative;
	}

	section.Our.services {
		padding: 50px 0px;
	}

	.left-col {
		float: none;
		width: 100%;
	}

	.right-col {
		float: none;
		width: 100%;
	}

	.experience-text-block {
		padding: 20px;
	}

	section.Footer-section {
		padding: 30px 10px;
	}

	li.B-footer {
		padding: 10px 10px;
		float: none !important;
     }
}



@media only screen and (max-width: 600px) and (min-width: 0px) {
.bottom-nav {
    padding: 0px 50px;
	margin-top: 50px;
 }
}


/*I-pad view*/
@media only screen and (max-width: 768px) and (min-width: 760px) {
    li.B-footer-1 {
    padding: 0px 6px;
    float: left;
}
	.gallery-text-block {
		margin-left: 50px;
	}
.navbar-collapse {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 100%;
    width: 50% !important;
    }
    
	.About-tet {
		margin-top: 0px !important;
	}

	iframe#cartoonVideo {
		height: 20em;
		width: 600px !important;
	}

	.Testimonial-bottom {
		padding: 0px;
		top: 20.6em !important;
		position: initial !important;
		right: 19em !important;
	}

	.testimonial-U-img {
		position: inherit !important;
	}

	.left-col {
		float: left !important;
		width: 77% !important;
	}

	.right-col {
		width: 23% !important;
		float: left !important;
	}

	.right-col-1 {
		width: 33%;
		float: left;
	}

	.left-col-1 {
		width: 67%;
		float: left;
	}

	li.B-footer {
		padding: 0px 10px !important;
		float: left !important;
	}

	li.B-footer {
		padding: 0px 5px !important;
		float: left !important;
	}

	.footer-bottom {
		text-align: left !important;
	}

	.footer-bottom {
		padding: 10px 10px;
	}

	p.right-col {
		font-size: 11px !important;
	}

	p.right-col {
		font-size: 11px !important;
	}

	.content-1 {
		padding: 3em !important;
	}

	.content {
		padding: 25px !important;
	}

	.owl-theme .owl-controls {
		top: -11em;
		position: absolute;
		left: 27em;
	}

	.BOX-1 {
		padding: 62px 20px 20px 20px !important;
	}

	.demo {
		margin: 0px 0px !important;
	}
}

/*end i-pad-view*/




/*i-pad pro vie*/

@media only screen and (max-width: 1279px) and (min-width: 850px) {
    
    li.B-footer-1 {
    padding: 0px 12px;}
    
	.footer-heading {
		font-size: 30px;
	}

	.container.mobi-container {
		max-width: 900px !important;
	}

	.navbar-dark .navbar-nav .nav-link {
		font-size: 14px !important;
	}


	h1.B-services-heading {
		font-size: 21px;
	}

	.content-1 {
		padding: 2em;
	}

	.percentge {
		font-family: 'Raleway';
		font-weight: 600;
		font-size: 20px;
		line-height: 42px;
		font-style: normal;
		color: #fff;
	}

	p.descrpt {
		text-transform: uppercase;
		font-family: 'Raleway';
		font-weight: 600;
		font-size: 10px;
		line-height: 19px;
		font-style: normal;
		color: #fff;
	}

	span.bio-org-box img {
		margin-bottom: 0px;
	}

	.testimonial-Text-sec {
		height: 18em;
	}

	.left-col {
		float: left;
		width: 76%;
	}

	.right-col {
		float: left;
		width: 24%;
	}

	.left-col-1 {
		float: left;
		width: 65%;
	}

	.right-col-1 {
		float: left;
		width: 35%;
		text-align: right;
	}

	.owl-theme .owl-controls {
		top: -14em;
		position: absolute;
		left: 37em;
	}

	.G-img-bottom-1 {
		left: 8.2em;
		position: relative;
		max-width: 40%;
	}

	.gallry-imgs {
		position: relative;
		left: .9em;
		z-index: 2;
	}

	.insta-follow-sec {
		padding: 36px 20px 20px 20px;
		background-color: #f5dad1;
	}

	li.nav-item {
		padding-left: 13px;
		padding-right: 13px;
	}

	.col-lg-5.col-md-5.mb-12.text-left.p-0 {
		margin-top: 1.5em;
	}

	.BOX-1 {
		height: auto;
		padding: 4px;
		background: #b4d6b1;
	}

	.percentge {
		font-family: 'Raleway';
		font-weight: 600;
		font-size: 20px;
		line-height: 42px;
		font-style: normal;
		color: #fff;
	}

	section.About-us {
		padding: 100px 50px;
	}

	h1.top-heading {
		width: 100%;
		font-size: 40px;
		line-height: 57px;
		color: #000;
		font-style: normal;
	}

	p.top-paragraph {
		width: 70% !important;
	}

	section.Our.services {
		padding: 50px 0px;
	}

	.gallery-text-block {
		position: relative;
		top: 3em;
		left: 5em;
	}

	.content {
		padding: 2em;
	}

	section.our-blog-section {
		padding: 50px 50px;
	}

	.exp-img {
		border: 5px solid #fff;
	}

	.latest-services-block {
		padding: 39px;
	}
}



@media only screen and (max-width: 2560px) and (min-width: 2500px) {
    li.B-footer-1 {
    padding: 0px 20px;
    }
    
	.content-img {
		padding: 0px 100px 100px 100px !important;
	}

	.Testimonial-bottom {
		top: 38.3em !important;
		position: relative;
		right: 32em !important;
	}

	.content {
		padding: 100px;
	}

	.B-blog-heading {
		font-size: 32px;
		line-height: 43px;
		width: 450px;
	}

	.B-blog-heading-w {
		width: 450px;
	}

	.P-blog-text {
		font-size: 25px;
		line-height: 42px;
	}

	.learn-txt {
		font-size: 21px;
	}
}



@media only screen and (max-width: 1500px) and (min-width: 1400px) {
	.BOX-1 {
		padding: 13px 20px 10px 20px !important;
	}

	span.bio-org-box img {
		width: 30px;
		margin-bottom: 15px !important;
	}
}


@media only screen and (max-width: 1921px) and (min-width: 1901px) {
	.content {
		height: 25em;
	}

	.learn-txt:hover .R-arrow-img {
		margin-left: -10px;
		padding: 6px;
	}

	.latest-services-block {
		padding: 160px;
	}

	.exp-img {
		height: 300px;
	}

	.Testimonial-bottom {
		top: 32em !important;
		position: relative;
		right: 24em !important;
	}

	.BOX-1 {
		padding: 51px 20px 36px 20px;
		// !important;
	}

	.testimonial-U-img {
		position: absolute;
		margin-top: -7em;
	}

	.G-img-bottom-1 {
		left: 12.7em !important;
	}

	.owl-theme .owl-controls {
		top: -12em;
		position: absolute;
		left: 59em !important;
	}

	button.Book-now-button {
		background-color: #fff;
		border: 0px;
		height: 49px;
		width: 123px;
		font-family: 'Raleway';
		font-size: 13px;
		color: #1B1B1B;
		font-style: normal;
		line-height: 15px;
	}

	.know-more-button {
		margin-top: 2em;
		background-color: #000;
		border: 0px;
		height: 49px;
		width: 123px;
		font-family: 'Raleway';
		font-size: 13px;
		color: #fff;
		font-style: normal;
		line-height: 15px;
	}

	.know-more-button:hover {
		background-color: #3b717b;
		color: #fff;
	}

	.content {
		padding: 100px;
	}

	.B-blog-heading {
		font-size: 32px;
		line-height: 43px;
		width: 450px;
	}

	.B-blog-heading-w {
		width: 450px;
	}

	.form-control {
		margin-right: 15px;
		padding-top: 0px;
		display: inline;
		width: 40% !important;
		height: 40px;
	}

	.content-img {
		padding: 35px 100px 100px 100px;
	}

	.column {
		width: 50%;
		float: left;
	}
}


/*1366 resolution start*/
@media only screen and (max-width: 1370px) and (min-width: 1301px) {
	p.descrpt {
		font-size: 13px !important;
	}

	span.bio-org-box img {
		margin-bottom: 1px;
	}

	.testimonial-U-img {
		margin-top: -4.9em;
	}

	.G-img-bottom-1 {
		left: 9.1em;
	}

	.footer-heading {
		white-space: nowrap;
	}

	span.bio-org-box img {
		width: 30px;
		margin-bottom: 6px !important;
	}

	.BOX-1 {
		padding: 19px 20px 20px 20px;
	}

	.gallery-text-block {
		left: 10em;
	}
}


/*1366 resolution End*/

/*812 screen resolution*/
@media only screen and (max-width:850px) and (min-width:800px) {
	.container.mobi-container {
		margin-top: -25px !important;
	}
   
    .bottom-nav {
    padding: 0px 50px;
    margin-top: 50px;
    }
    
	h1.top-heading {
		font-size: 27px;
		line-height: 32px;
	}

	.About-tet {
		margin-top: 0px;
	}

	.gallery-text-block {
		top: 0px;
		margin-left: 50px;
	}

	.owl-theme .owl-controls {
		top: -10em;
		position: absolute;
		left: 27em;
	}

	.Testimonial-bottom {
		padding: 0px;
	}

	iframe#cartoonVideo {
		height: 200px;
		width: 400px !important;
	}

	.experience-text-block {
		margin-bottom: 20px;
	}
}

@media only screen and (max-width:992px) and (min-width:800px) {
    .navbar-collapse {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 100%;
		width: 50% !important;
		z-index: 2;
	}
}
@media only screen and (max-width: 992px) and (min-width: 800px) {
	.offcanvas-header.mt-3 {
		position: absolute;
		float: right;
		display: block !important;
		top: 0em;
    	right: 2em;
	}
	.navbar-collapse {
		padding: 50px;
	}
}

@media only screen and (max-width: 1279px) and (min-width: 992px) {
	.testimonial-U-img {
		margin-top: -3.7em;
	}
	.Testimonial-bottom {
		top: 18em !important;
		position: relative;
		right: 13em !important;
	}
}

@media only screen and (max-width: 992px) and (min-width: 0px) {
	.Testimonial-bottom {
		top: 0px !important;
		position: relative;
		right: 0px !important;
		padding: 0px;
	}
}
@media only screen and (max-width: 992px) and (min-width: 560px) {
	.Testimonial-bottom {
		display: flex;
	}
	.navbar-dark .navbar-toggler {
		background-color: #f5dad1;
	}
	.container.mobi-container {
		margin-top: -10px;
	}
}
/*end 812 screen resolution*/


/*-------Nav mobile view----------*/
@media (max-width: 992px) {
	.f12 {
		display: block;
	}

	.navbar-collapse {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 100%;
		width: 100%;
		padding-right: 1rem;
		padding-left: 1rem;
		overflow-y: auto;
		visibility: hidden;
		background-color: #3b717b;
		transition: visibility .2s ease-in-out, transform .2s ease-in-out;
	}

	.navbar-collapse.show {
		visibility: visible;
		transform: translateX(-100%);
	}
}


/*END ALL MEDIA QUERY*/


  
  `

export const baseCss = `
img {
	max-width: 100%;
}
.container.mobi-container {
	max-width: 1326px !important;
}

.nav-link:hover {
	color: #000;
}

.BOX-1 {	
    background: #b4d6b1;
}
.cool-link {
	display: inline-block;
	color: #000;
	text-decoration: none;
}

.navbar-expand-lg .navbar-nav .nav-link {
	padding-right: 0px !important;
	padding-left: 0px !important;
}

li.nav-item {
	padding-left: 15px;
	padding-right: 15px;
}

.cool-link::after {
	content: '';
	display: block;
	width: 0;
	height: 2px;
	background: #000;
	transition: width .3s;
}

.About-tet {
	padding-left: 40px;
	margin-top: 50px;
}

.B-footer-textt {
	color: #494949;
}

.B-footer-textt:hover {
	color: #000;
}

.Testimonial-bottom {
	top: 20.6em;
	position: relative;
	right: 19em;
}

.column {
	float: left;
	width: 50%;
}

.testimonial-U-img {
	position: absolute;
}

.Footer-section {
	margin-top: 5em;
}

.cool-link:hover::after {
	width: 100%;
	//transition: width .6s;
}

html {
	scroll-behavior: smooth;
}

.experience-text-block {
	margin-bottom: 50px;
}

.B-services-text {
	font-size: 13px;
	line-height: 22px;
}
/*modal css*/
.modal-header {
	box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
}

.modal-dialog {
	overflow: hidden;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%) !important;
	max-height: 500px !important;
}

.bs-example {
	margin: 20px;
}

.modal-content iframe {
	margin: 0 auto;
	display: block;
}

.modal-dialog {
	max-width: 630px;
	margin: 1.75rem auto;
}

.modal-content {
	background-color: #fff !important;
}

.close {
	color: #3b717b;
}

/*end modal css*/

p {
	margin-bottom: 0px;
}

.container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
	overflow-x: hidden;
	width: 100%;
	padding-right: 0px;
	padding-left: 0px;
	margin-right: auto;
	margin-left: auto;
}

.form-control {
	padding-top: 0px;
	display: inline;
	width: 70%;
	height: 40px;
	font-size: 16px !important;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #e9e9e9;
	border-radius: 0px !important;
	transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.arrow {
	border: solid black;
	border-width: 0 2px 2px 0;
	display: inline-block;
	padding: 3px;
}

.right {
	transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
}
/*Top section*/

.sticky {
	scroll-behavior: smooth;
	box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
	z-index: 3;
	background-color: #FFF;
	position: fixed;
	top: 0;
	width: 100%;
}

.modal-open .modal {
	background-color: #3b717ca6;
}

.sticky button.Book-now-button {
	background-color: #3b717b;
	color: #FFF;
}

.bg-dark-1 {
	padding-right: 30px;
	padding-left: 30px;
	background-color: #ffffff!important;
}

.nav-link {
	font-family: 'Playfair Display';
	font-weight: bold;
	font-size: 16px;
	letter-spacing: 0.025em;
	color: #494949 !important;
	font-style: normal;
	line-height: 21px;
}

.navbar-dark {
	padding: 40px 10px;
}

.Book-now-button {
	background-color: #fff;
	border: 0px;
	height: 49px;
	width: 123px;
	font-family: 'Raleway';
	font-size: 13px;
	color: #1B1B1B;
	font-style: normal;
	line-height: 15px;
}

.Book-now-button:hover {
	background-color: #000;
	color: #fff;
}

.know-more-button {
	margin-top: 2em;
	background-color: #000;
	border: 0px;
	height: 49px;
	width: 123px;
	font-family: 'Raleway';
	font-size: 13px;
	color: #fff;
	font-style: normal;
	line-height: 15px;
}

.know-more-button:hover {
	background-color: #3b717b;
	color: #fff;
}

.top-text {
	position: relative;
	top: 6em;
}

.l-img {
	width: 100%;
	max-width: 120pt;
}

span.Call-sec {
	margin-right: 30px;
}

.f12 {
	justify-content: center;
}

.bg-img {
	background-image: url('http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Banner.jpg');
	min-height: 50em;
	background-position: left top;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}

.top-heading {
	font-family: 'Playfair Display';
	font-size: 52px;
	line-height: 69px;
	color: #000;
	font-style: normal;
}

.top-paragraph {
	font-family: 'Raleway';
	font-weight: normal;
	font-size: 13px;
	width: 67%;
	line-height: 22px;
	font-style: normal;
	color: #000;
	opacity: 0.7;
}

/*End top section*/


/*About us section*/
.img-responsive {
	width: 100%;
}

.Web-space {
	padding-left: 2em;
}

.About-us {
	padding: 100px 0px;
}

.Abt-txt {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	color: #000;
	opacity: 0.7;
}

/*End about us section*/

/*our services section*/
.latest-services-block {
	padding: 67px;
	background-color: #ffeed0;
}

.services {
	padding: 50px 0px;
}

.B-services-heading {
	font-size: 22px;
	text-align: left;
	color: #000;
	line-height: 29px;
	font-weight: bold;
	font-style: normal;
	font-family: 'Playfair Display';
}

.B-services-text {
	font-family: 'Raleway';
	font-weight: normal;
	font-size: 13px;
	color: #000;
	opacity: 0.7;
	text-align: left;
	font-style: normal;
}

.num-count {
	margin-left: -25px;
	font-family: 'Playfair Display';
	font-size: 52px;
	line-height: 69px;
	color: #3b717b;
	font-style: normal;
}

.second-img img {
	margin-left: 21px;
}

/*end our services*/

/*Our gallery section*/
.Our-gallery {
	padding: 100px 0px;
}

/*end gallery section*/

/*our blog section*/

.R-arrow-img {
	margin-top: -5px;
}

a:hover {
	text-decoration: none;
}

.learn-txt:hover .R-arrow-img {
	margin-left: -10px;
	padding: 10px;
	background-color: rgba(0, 0, 0, 0.15);
	margin-top: -5px;
	border-radius: 50px;
}

.B-blog-heading {
	font-size: 24px;
	text-align: left;
	color: #000;
	line-height: 32px;
	font-weight: bold;
	font-style: normal;
	font-family: 'Playfair Display';
}

.B-blog-heading-w {
	font-weight: bold;
	font-style: normal;
	font-family: 'Playfair Display';
	font-size: 24px;
	line-height: 32px;
}

.P-blog-text {
	font-family: 'Raleway';
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #000;
	opacity: 0.7;
}

.learn-txt {
	font-family: 'Raleway';
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #000;
	opacity: 0.7;
	margin-top: 40px;
}
/*end section*/

/*Testimonial section*/

.testimonial-section {
	padding: 100px 50px;
}

span.bio-org-box img {
	width: 30px;
	margin-bottom: 22px;
}

.content-1 {
	padding: 4em;
}

.know-more-button-B {
	margin-top: 2em;
	background-color: #000000;
	border: 0px;
	height: 40px;
	width: 120px;
	font-family: 'Raleway';
	font-size: 13px;
	color: #fff;
	font-style: normal;
	line-height: 15px;
}

.know-more-button-B:hover {
	background-color: #3b717b;
	color: #fff;
}

.insta-follow-sec {
	padding: 90px 20px 20px 20px;
	background-color: #f5dad1;
}

span.inner-follow-sec {
	font-family: 'Raleway';
	font-weight: 600;
	font-size: 16px;
	line-height: 27px;
	font-style: normal;
	color: #000;
}
/*End section*/

/*Footer section*/
.footer-bottom {
	padding: 0px 50px;
}

.footer-bottom {
	color: #494949;
	line-height: 15px;
	font-size: 13px;
	margin-bottom: 30px;
	border-top: 1px solid #0000001c;
	padding: 20px 0px;
}

.footer-bottom:hover {
	color: #000;
}

.right-col {
	font-family: 'Raleway';
	font-weight: normal;
	font-size: 13px;
	line-height: 15px;
	font-style: normal;
	color: #000;
}

.left-col {
	font-family: 'Raleway';
	font-weight: normal;
	font-size: 13px;
	line-height: 15px;
	font-style: normal;
	color: #000;
}

.footer-heading {
	font-family: 'Playfair Display';
	font-size: 42px;
	line-height: 69px;
	color: #000;
	font-style: normal;
}

.F-blog-text {
	font-family: 'Raleway';
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #000;
	opacity: 0.7;
}

.footer-sec-1 {
	width: 20%;
}

.Footer-section {
	padding: 50px 0px;
}

.search-more-button-B {
	background-color: #000000;
	border: 0px;
	height: 40px;
	width: 88px;
	font-family: 'Raleway';
	font-size: 13px;
	color: #fff;
	font-style: normal;
	line-height: 15px;
}

.search-more-button-B:hover {
	background-color: #3b717b;
	color: #fff;
}

.search {
	text-align: center;
	padding: 25px 0px 100px 0px;
}

nav {
	width: 100%;
	height: 40px;
	position: fixed;
}

ul {
	margin: 0;
	padding-left: 0;
	list-style-type: none;
}

li {
	float: left;
}

li a {
	font-family: 'Playfair Display';
	font-weight: bold;
	font-size: 16px;
	letter-spacing: 0.025em;
	color: #494949;
	font-style: normal;
	line-height: 21px;
}

li a:hover {
	color: #000;
}

.content {
	padding: 50px 100px;
}

footer {
	bottom: 0;
	width: 100%;
	background-color: #fff;
}

.bottom-nav {
   margin-top: 50px;
}

li.B-footer {
	padding: 0px 10px;
	float: left;
}

li.B-footer-1 {
    padding: 0px 10px;
    float: left;
}
/*End footer*/




/*placeholder css*/
:-ms-input-placeholder {
	font-family: 'Raleway';
	color: #0000003b !important;
}

/*placeholder*/
input::-webkit-input-placeholder {
	font-size: 13px;
	line-height: 18px;
	font-family: 'Raleway';
	font-weight: 600;
	color: #0000003b !important;
	opacity: 0.3;
}

input:-moz-placeholder {
	font-size: 13px;
	line-height: 18px;
	font-family: 'Raleway';
	font-weight: 600;
	color: #0000003b !important;
	opacity: 0.3;
}

:-ms-input-placeholder {
	font-size: 13px;
	line-height: 18px;
	font-family: 'Raleway';
	font-weight: 600;
	color: #0000003b !important;
	opacity: 0.3;
}

/*End placeholder css*/


/*Testimonial design*/
.testimonial {
	padding: 50px;
	margin: 0px;
	position: relative;
}

.testimonial .title {
	font-family: 'Playfair Display';
	font-weight: bold;
	font-size: 24px;
	line-height: 32px;
	color: #000;
	font-style: normal;
}

.testimonial .description {
	text-align: justify;
	font-family: 'Raleway';
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #000;
	opacity: 0.7;
}

.testimonial .testimonial-content {
	margin-top: 30px;
	position: relative;
}

.testimonial .pic {
	display: inline-block;
	float: left;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin-right: 15px;
	overflow: hidden;
}

.testimonial .pic img {
	width: 100%;
	height: auto;
}

.content-t {
	position: relative;
	top: 10px;
}

.testimonial .content {
	display: inline-block;
	margin: 10px 0;
}

.testimonial .name {
	margin-bottom: 0px;
	font-family: 'Playfair Display';
	font-weight: bold;
	font-size: 16px;
	line-height: 21px;
	color: #000;
	font-style: normal;
}

.testimonial .post {
	font-family: 'Raleway';
	font-weight: normal;
	font-size: 13px;
	line-height: 22px;
	font-style: normal;
	color: #000;
	opacity: 0.7;
}
.testimonial-1 {	
	border-right: 1px solid #e9e9e9;
}
.testimonial-3 {	
	border-left: 1px solid #e9e9e9;
}

.owl-theme .owl-controls .owl-page span {
	background-image: url('http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Arrow_Left.svg');
}

.demo {
	margin: 80px 0px;
}


.img-container {
	position: relative;
	display: flex
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

.img-container:hover .overlay {
	opacity: 1;
}

.overlay span {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	color: #fff;
}

.overlay .popuptext {
	display: none;
}

.owl-pagination {
	display: none !important;
}

.owl-theme .owl-controls .owl-buttons div {
	background: transparent !important;
}

/*end testimonial design*/

.popup .popuptext {
	visibility: hidden;
	background-color: #555;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 8px 0;
	z-index: 1;
	bottom: 125%;
	left: 50%;
	margin-left: -80px;
}

.popup .show {
	visibility: visible;
	-webkit-animation: fadeIn 1s;
	animation: fadeIn 1s;
}


/*Mobile navbar */

.navbar-dark .navbar-toggler {
	background-color: transparent
    color: rgb(59 112 122);
	border-color: transparent;
}

.web-v {
	display: block;
}

.mobi-v {
	display: none;
}

/*end mobile navbar*/

/*social icon hover*/

.image_off, .hom:hover .image_on {
	display: none;
}

.image_on, .hom:hover .image_off {
	display: inline;
}

.img-responsive.image.video-img {
	height: 474px;
}

#cartoonVideo {
	height: 474px;
	display: none;
	flex: 1;
}
#music-marathon {
	background-color: #f5dad1;
}
#music-marathon-2 {
	background-color: #3b717b;
}
#music-marathon-2 h1 {
	color : #fff
}
#music-marathon-2 p {
	color : #fff
}
#music-marathon-3 {
	background-color: #ffeed0;
}
#music-marathon-img {
	background-color: #3b717b;
}
.testimonial-Text-sec{
	background-color: #f5dad1; 
}
.inner-follow-sec img{
	margin-bottom: 10px;
}
#insta-hashtag {
	color : #000;
}

/* END social icon hover*/
.offcanvas-header.mt-3 {
	display: none;
}

.mobi-logo {
	display: none;
}
/*-------end Nav mobile view----------*/

  `
export const style = `
  <style>
    ${`@media {background: red;}` + baseCss}
  </style>
  `

export const html = `
  
<!-- Top section -->
<div class="bg-img" id="home">
	<nav class="navbar navbar-expand-lg navbar-dark" id="myHeader">
		<div class="container mobi-container">
			<a href="#">
				<img class="l-img" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Logo.png" att="">
			</a>
			<button class="navbar-toggler" type="button" data-trigger="#collapsibleNavbar"> <span class="navbar-toggler-icon"></span>
			</button>
			<div class="f12 navbar-collapse" id="collapsibleNavbar">
				<a href="#">
					<img class="l-img mobi-logo" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Logo-W.png" att="">
				</a>
				<div class="offcanvas-header mt-3">	<i class="fa fa-times btn-close" aria-hidden="true"></i>
				</div>
				<ul class="navbar-nav">
					<li class="nav-item cool-link"> <a class="nav-link nav-link-1 active" href="#home">Home</a>
					</li>
					<li class="nav-item cool-link"> <a class="nav-link nav-link-1" href="#About-section">About Us</a>
					</li>
					<li class="nav-item cool-link"> <a class="nav-link nav-link-1" href="#service-section">Services</a>
					</li>
					<li class="nav-item cool-link"> <a class="nav-link nav-link-1" href="#our-gallery-section">Gallery</a>
					</li>
					<li class="nav-item cool-link"> <a class="nav-link nav-link-1" href="#Testimonials-sectionn">Testimonial</a>
					</li>
					<li class="nav-item cool-link"> <a class="nav-link nav-link-1" href="#Our-BLOG-sectionn">Blog</a>
					</li>
					<li class="nav-item cool-link"> <a class="nav-link nav-link-1" href="#Contact-us-section">Contact us</a>
					</li>
				</ul>
				<div class="ipad mobi-v">
					<div class="header-module">
						<button class="Book-now-button">BOOK NOW</button>
					</div>
				</div>
			</div>
			<div class="ipad web-v">
				<div class="header-module">
					<button class="Book-now-button">BOOK NOW</button>
				</div>
			</div>
		</div>
	</nav>
	<div class="top-text">
		<div class="offset-md-1 col-md-5 offset-lg-1 col-lg-5  offset-mb-0 mb-12 Web-space">
			<h1 class="top-heading">Experience allow us<br>
to create unique<br>
things.    
</h1>
			<P class="top-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam interdum quam nec imperdiet. Aenean nec pretium arcu. Morbi venenatis imperdiet nulla, sit amet dapibus massa tempus porttitor.</P>
			<button class="know-more-button">KNOW MORE</button>
		</div>
	</div>
</div>
<!--Top section end----->
<!---Container--->
<div class="container-fluid">
	<!---About us section--->
	<section class=" About-us" id="About-section">
		<div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10  offset-mb-0 mb-12 p-0 ">
			<div class="row text-center">
				<div class="col-lg-6 col-md-6 mb-12">
					<img class="img-responsive" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/about-us-img.jpg">
				</div>
				<div class="col-lg-6 col-md-6 mb-12 text-left About-tet">
					<p class="Abt-txt">About Us</p>
					<h1 class="top-heading">Treat Yourself to<br> 
	a Relaxing Day at<br> 
	the Spa</h1>
					<P class="top-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</P>
					<button class="know-more-button">KNOW MORE</button>
				</div>
			</div>
		</div>
	</section>
	<!---End about us--->
	<!---Our services section--->
	<section class="Our services" id="service-section">
		<div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10  offset-mb-0 mb-12 p-0 ">
			<div class="row text-center">
				<div class="col-lg-5 col-md-12 mb-12 text-left p-0">
					<div class="service-text-block">
						<p class="Abt-txt">Our Services</p>
						<h1 class="top-heading">An Incredible<br>
	Spa Experience  
	</h1>
						<div class="service-txt">
							<P class="top-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</P>
						</div>
					</div>
					<img class="img-responsive" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Services-img.jpg">
				</div>
				<div class=" latest-services-block col-lg-7 col-md-12 mb-12" style="background-color: #ffeed0;">
					<div class="row">
						<div class="col-lg-6 col-md-6 mb-12">
							<h1 class="B-services-heading"><span class="num-count">1</span>&nbsp; Message Therapy</h1>
							<p class="B-services-text">Lorem ipsum dolor sit amet,
								<br>consectetur adipiscing elit. Fusce
								<br>aliquam interdum quam nec imperdiet.</p>
						</div>
						<div class="col-lg-6 col-md-6 mb-12">
							<h1 class="B-services-heading"><span class="num-count">2</span>&nbsp; Physio Therapy</h1>
							<p class="B-services-text">Lorem ipsum dolor sit amet,
								<br>consectetur adipiscing elit. Fusce
								<br>aliquam interdum quam nec imperdiet.</p>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6 col-md-6 mb-12">
							<h1 class="B-services-heading"><span class="num-count">3</span>&nbsp; Aroma Therapy</h1>
							<p class="B-services-text">Lorem ipsum dolor sit amet,
								<br>consectetur adipiscing elit. Fusce
								<br>aliquam interdum quam nec imperdiet.</p>
						</div>
						<div class="col-lg-6 col-md-6 mb-12">
							<h1 class="B-services-heading"><span class="num-count">4</span>&nbsp; Body Treatments</h1>
							<p class="B-services-text">Lorem ipsum dolor sit amet,
								<br>consectetur adipiscing elit. Fusce
								<br>aliquam interdum quam nec imperdiet.</p>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6 col-md-6 mb-12">
							<h1 class="B-services-heading"><span class="num-count">5</span>&nbsp; Sports Massage</h1>
							<p class="B-services-text">Lorem ipsum dolor sit amet,
								<br>consectetur adipiscing elit. Fusce
								<br>aliquam interdum quam nec imperdiet.</p>
						</div>
						<div class="col-lg-6 col-md-6 mb-12">
							<h1 class="B-services-heading"><span class="num-count">6</span>&nbsp; Hot Stone Massage</h1>
							<p class="B-services-text">Lorem ipsum dolor sit amet,
								<br>consectetur adipiscing elit. Fusce
								<br>aliquam interdum quam nec imperdiet.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 offset-lg-4 col-lg-8  offset-mb-0 mb-12 p-0">
	  
					<div class="img-container" style="display: flex;">
						<img class="img-responsive image video-img" src="http://159.65.145.117:8090/SiteSeed/Spa&amp;Wellnss/images/vedio-imge.jpg" style="height: 474px;">
						<div class="overlay"> <span id="hom"><img class="popup image_on" src="http://159.65.145.117:8090/SiteSeed/Spa&amp;Wellnss/images/play-button-B.png"><img class="popup image_off" src="http://159.65.145.117:8090/SiteSeed/Spa&amp;Wellnss/images/play-button-G.png"></span>
						</div>
						<iframe id="cartoonVideo" style="height: 474px; display: none; flex: 1;" width="560" height="315" src="https://www.youtube.com/embed/YE7VzlLtp-4?" frameborder="0" allowfullscreen="" >
						</iframe>
					</div>
					<!--modal button-->
				</div>
			</div>
		</div>
	</section>
	<!---End Our services--->
	<!--Start our gallery section-->
	<section class="Our-gallery" id="our-gallery-section">
		<div class="row text-center">
			<div class="col-lg-5 col-md-12 mb-12 text-left p-0">
				<div class="gallery-text-block">
					<p class="Abt-txt">Our Gallery</p>
					<h1 class="top-heading">Bring Out The<br>
	Hidden Beauty  
	</h1>
					<div class="service-txt">
						<P class="top-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</P>
					</div>
				</div>
			</div>
			<div class="col-lg-7 col-md-12 mb-12 p-0">
				<img class="img-responsive" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Gallery-img-1.jpg">
			</div>
			<div class="col-lg-5 col-md-12 mb-12 p-0">
				<img class="img-responsive G-img-bottom" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/O6RXL30.jpg">
				<img class="img-responsive G-img-bottom-1" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Gallery-img-4.jpg">
			</div>
			<div class="col-lg-7 col-md-12 mb-12 p-0">
				<img class="img-responsive" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Gallery-img-3.jpg">
			</div>
		</div>
	</section>
	<!--End Gallery section--->
	<!--our blog section-->
	<section class="our-blog-section" id="Our-BLOG-sectionn">
		<div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10  offset-mb-0 mb-12 p-0 ">
			<div class="col-lg-12 col-md-12 mb-12 text-left p-0">
				<div class="experience-text-block">
					<p class="Abt-txt">Our Blog</p>
					<h1 class="top-heading">Experience allows us to create<br>
	unique things.    
	</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 col-md-6 mb-12 p-0" id="music-marathon" style="background-color: #f5dad1;">
					<div class="content">
						<h1 class="B-blog-heading">Messmerising music maraton was create with spinning records & special</h1>
						<p class="P-blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget,</p>
						<a href="#">
							<p class="learn-txt">Learn more
								<img class="R-arrow-img" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/right-arrow-B.png">
							</p>
						</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 mb-12 p-0" id="music-marathon-2" style="background-color: #3b717b;">
					<div class="content">
						<h1 class="B-blog-heading-w" style="color:#fff;">Messmerising music maraton was create with spinning records & special</h1>
						<p class="P-blog-text" style="color:#fff; opacity: 0.7;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget, vestibulum ac nunc.</p>
						<a href="#">
							<p class="learn-txt" style="color:#fff;">Learn more
								<img class="R-arrow-img" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/right-arrow-W.png">
							</p>
						</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 col-md-6 mb-12 p-0" id="music-marathon-3" style="background-color: #ffeed0;">
					<div class="content">
						<h1 class="B-blog-heading">Messmerising music maraton was create with spinning records & special</h1>
						<p class="P-blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vel urna sed luctus. Pellentesque leo erat, egestas scelerisque efficitur eget,</p>
						<a href="#">
							<p class="learn-txt">Learn more
								<img class="R-arrow-img" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/right-arrow-B.png">
							</p>
						</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 mb-12 p-0" id="music-marathon-img" style="background-color: #3b717b;">
					<div class="content content-img">
						<img class="img-responsive exp-img" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/experience-img.jpg">
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--end blog section-->
	<!-- our testimonial section-->
	<section class="testimonial-section" id="Testimonials-sectionn">
		<div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10  offset-mb-0 mb-12 p-0 ">
			<div class="experience-text-block">
				<p class="Abt-txt">Our Testimonial</p>
				<h1 class="top-heading">What Our Customers<br>
	Are Saying    
	</h1>
			</div>
			<div class="demo">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div id="testimonial-slider" class="owl-carousel">
								<div class="testimonial testimonial-1" style="border-right: 1px solid #e9e9e9;">
									<h3 class="title">Help us to improve our <br>productivity</h3>
									<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae.</p>
									<div class="testimonial-content">
										<div class="pic">
											<img src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/profile-1.png" alt="#">
										</div>
										<div class="content-t">
											<h4 class="name">Samantha Willian</h4>
											<span class="post">Senior designer at design studio</span>
										</div>
									</div>
								</div>
								<div class="testimonial testimonial-2">
									<h3 class="title">Help us to improve our <br>productivity</h3>
									<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae.</p>
									<div class="testimonial-content">
										<div class="pic">
											<img src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/profil-2.png" alt="#">
										</div>
										<div class="content-t">
											<h4 class="name">Samantha Willian</h4>
											<span class="post">Senior designer at design studio</span>
										</div>
									</div>
								</div>
								<div class="testimonial testimonial-3" style="border-left: 1px solid #e9e9e9;">
									<h3 class="title">Help us to improve our <br>productivity</h3>
									<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vehicula nibh. Duis eu interdum dolor. Pellentesque mollis nisl vitae.</p>
									<div class="testimonial-content">
										<div class="pic">
											<img src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/profile-1.png" alt="#">
										</div>
										<div class="content-t">
											<h4 class="name">Samantha Willian</h4>
											<span class="post">Senior designer at design studio</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10  offset-mb-0 mb-12 p-0 ">
		<div class="row subscribe-section">
			<div class="col-lg-5 col-md-12 mb-12 p-0 testimonial-Text-sec" style="background-color: #f5dad1 ;">
				<div class="content-1">
					<h1 class="B-blog-heading">Passion Commitment & Love For Natural Beauty</h1>
					<p class="P-blog-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
					<button class="know-more-button-B text-center">KNOW MORE</button>
				</div>
			</div>
			<div class="col-lg-4 col-md-12 mb-12 p-0">
				<img class="img-responsive testimonial-U-img" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/testimonial-img-1.jpg" alt="#">
				<div class="col-md-12 col-lg-12 mb-12 Testimonial-bottom">
					<div class="column">
						<img class="img-responsive" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Testimonial-Services.jpg">
					</div>
					<div class="column BOX-1"> <span class="bio-org-box"><img class="fb-icon" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/drop-leaf-table.svg" alt="#"><br>
			<p class="percentge">100%</p>
			<p class="descrpt">bio & organic no <br>tasted on animals</p></span>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-12 mb-12 p-0">
				<img class="img-responsive" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/testimonial-img-2.jpg" alt="#">
			</div>
		</div>
	</div>
	<!--End testimonial section-->
	<!--Footer Section-->
	<section class="Footer-section" id="Contact-us-section">
		<div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10  offset-mb-0 mb-12 p-0 ">
			<div class="col-md-12 offset-lg-3 col-lg-6 offset-mb-0 mb-12 p-0 ">
				<div class="experience-text-block">
					<h1 class="footer-heading text-center">Subscribe To Our Newsletter</h1>
					<p class="F-blog-text text-center">Subscribe to the free newsletter and receive notifications of new products and promotions!</p>
				</div>
				<div class="search">
					<input type="text" class="form-control form-rounded" placeholder="Enter your email">
					<button class="search-more-button-B text-center">SUBMIT</button>
				</div>
			</div>
			<div class="row searc-section">
				<div class="footer-sec-1">
					<img class="img-responsive" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Services-img-N.jpg" alt="#">
				</div>
				<div class="footer-sec-1">
					<img class="img-responsive" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Footer-img-2.jpg" alt="#">
				</div>
				<div class="footer-sec-1">
					<img class="img-responsive" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/footer-img-3.jpg" alt="#">
				</div>
				<div class="footer-sec-1">
					<img class="img-responsive" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/footer-img-4.jpg" alt="#">
				</div>
				<div class="footer-sec-1 insta-follow-sec"><span class="inner-follow-sec"><img src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/instagram-sketched.svg" alt="#" style="margin-bottom: 10px;"><br>
			Follow us<br>
			on instagram<br> <a href="#" id="insta-hashtag" style="color: #000;">#SiteSeed</a></span>
				</div>
			</div>
			<div class="row bottom-nav">
				<ul class="left-col">
					<li class="B-footer"><a href="#">Home</a>
					</li>
					<li class="B-footer"><a href="#">About Us</a>
					</li>
					<li class="B-footer"><a href="#">Services</a>
					</li>
					<li class="B-footer"><a href="#">Gallery</a>
					</li>
					<li class="B-footer"><a href="#">Testimonial</a>
					</li>
					<li class="B-footer"><a href="#">Blog</a>
					</li>
					<li class="B-footer"><a href="#">Contact us</a>
					</li>
				</ul>
				<ul class="right-col">
					<li class="B-footer-1">
						<a id="hom" class="hom" href="#">
							<img class="image_on" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/facebook%20(5).png" alt="#">
							<img class="image_off" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/fb-B.png">
						</a>
					</li>
					<li class="B-footer-1">
						<a id="hom" class="hom" href="#">
							<img class="image_on" class="Social-view" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/skype.png" alt="#">
							<img class="image_off" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/skype-B.png">
						</a>
					</li>
					<li class="B-footer-1">
						<a id="hom" class="hom" href="#">
							<img class="image_on" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/linkedin%20(2).png" alt="#">
							<img class="image_off" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/linkedin-B.png">
						</a>
					</li>
					<li class="B-footer-1">
						<a id="hom" class="hom" href="#">
							<img class="image_on" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/twitter.png" alt="#">
							<img class="image_off" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/twite-B.png">
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<!--End Footer section-->
</div>
<!-- /.container-fluid -->
<div class="footer-bottom">
	<div class="offset-md-1 col-md-10 offset-lg-1 col-lg-10  offset-mb-0 mb-12 p-0 ">
		<p class="left-col-1">© 2020 SITESEED. ALL RIGHTS RESERVED.</p>
		<p class="right-col-1"> <span><a href="#" class="B-footer-textt">PRIVACY POLICY</a></span> &nbsp; &nbsp;<span><a href="#" class="B-footer-textt">TERMS FOR USE</a></span> 
	</div>
</div>
<!-- Bootstrap core JavaScript -->
<!-- Slider JavaScript -->
<script>
var url = $("#cartoonVideo").attr('src');
	var player = document.getElementById("cartoonVideo");
	$(document).ready(function(){
	$("#testimonial-slider").owlCarousel({
		items:2,
		itemsDesktop:[1000,2],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		pagination:true,
		navigation:true,
		navigationText : ['<img class="T-D leftsmall" onclick="hide1()" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/S_Arrow_Right-1.png"> <img class="T-D-1 leftbig" onclick="hide1()" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Arrow_Left_Black.png" style="display: none;">','<img class="T-D rightbig" onclick="hide2()" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Arrow_Right_Black.png"> <img class="T-D-1 rightsmall" onclick="hide2()" src="http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/S_Arrow_Right.png" style="display: none;">'],
		slideSpeed:1000,
		autoPlay:true
	});
});

function hide1()
{
  $('.leftbig').show();
  $('.leftsmall').hide();
  $('.rightbig').hide();
  $('.rightsmall').show();
}

function hide2()
{
  $('.leftbig').hide();
  $('.leftsmall').show();
  $('.rightbig').show();
  $('.rightsmall').hide();
} 

</script>
<script>
$(document).ready(function(){
var url = $("#cartoonVideo").attr('src');
var player = document.getElementById("cartoonVideo");
$(".popup").click(function () {
$('.video-img').css("display", "none");
$('#cartoonVideo').css("display", "block");
$('.overlay').css("display", "none");
  player.src = url;
  $('.play').click();
  var symbol = $("#cartoonVideo")[0].src.indexOf("?") > -1 ? "&" : "?";
  //modify source to autoplay and start video
  $("#cartoonVideo")[0].src += symbol + "autoplay=1";
});
})
</script>
<!--navbar-->
<script>

$(document).ready(function(){
let scriptNode = this.currentScript;
window.addEventListener("scroll", ()=>{
  myFunction();
});

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
} else {
  header.classList.remove("sticky");
}
}
})

</script>
<script>
$(document).ready(function(){
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