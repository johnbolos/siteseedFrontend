import { assetsUrl } from "../../../../../settings";
import { countdown } from "../../extras/icons";
import { header, gallery, popUp, faq, team, form, testimonials, footer, cta, pricing } from "./icons";

export const therapists = (editor) => {

    editor.BlockManager.add("therepists-gallery", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Gallery</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="ss-gallery-container" data-gjs-custom-name="ss-gallery">
            <div class="ss-gallery-header">
                <H1>Portfolio</H1>
                <p>Failure will never overtake me if my determination to succeed is strong enough.</p>
            </div>
            <div class="ss-gallery-main">
                <div class="ss-gallery-card ss-img-spacing">
                    <img src="${assetsUrl}/images/imagePlaceholder.png"/>
                </div>
                
                <div class="ss-gallery-card col">
                    <div class="ss-gallery-card">
                        <div class="ss-gallery-card ss-img-spacing">
                            <img src="${assetsUrl}/images/imagePlaceholder.png"/>
                        </div>
                        <div class="ss-gallery-card ss-img-spacing">
                            <img src="${assetsUrl}/images/imagePlaceholder.png"/>
                        </div>
                    </div>
                    <div class="ss-gallery-card">
                        <div class="ss-gallery-card ss-img-spacing">
                            <img src="${assetsUrl}/images/imagePlaceholder.png"/>
                        </div>
                        <div class="ss-gallery-card ss-img-spacing">
                            <img src="${assetsUrl}/images/imagePlaceholder.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                .ss-gallery-container {
                    padding: 100px;
                    background-color: #FFFFFF;
                }
                .ss-gallery-header {
                    text-align: center;
                    margin-bottom: 20px;
                    font-family: Open Sans;
                    font-style: normal;
                }
                .ss-gallery-header H1 {
                    font-weight: 600;
                    font-size: 36px;
                    line-height: 43px;
                    color: #363940;
                    margin-bottom: 20px;
                }
                .ss-gallery-header P {
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 22px;
                    color: #95A1BB;
                }
                .ss-gallery-main {
                    display: flex;
                    align-items: center;
                    padding: 5px 5px;
                }
                .ss-gallery-card {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    flex: 1;
                }
                .ss-gallery-card.ss-img-spacing {
                    padding: 15px;
                }
                .ss-gallery-card > img {
                    width: 100%;
                }
                .col {
                    flex-direction: column;
                }
            </style>
        </div>
        `
    })

    editor.BlockManager.add("header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Template Components",
        content: `
        <nav class="ss-header-container">
                <div class="ss-nav">
                    <div class="ss-logo">
                        <a href="#"><img class="ss-logo-img" src="${assetsUrl}/images/imagePlaceholder.png"/></a>
                    </div>
                    <div class="ss-nav-items">
                        <ul class="ss-nav-items-list">
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#about-section">About</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#gallery-section">Gallery</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#features-sectionn">Features</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#pricing-sectionn">Pricing</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#faq-section">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div class="ss-nav-actions">
                        <button class="ss-action-btn">Button Text</button>
                    </div>
                </div>
                <div class="ss-toogler" onclick="
                	let nav = document.querySelector('.ss-nav');
                    if (nav.style.marginLeft == '100%' || nav.style.marginLeft == '') {
                    	nav.style.marginLeft = '0%'
                    } else {
                    	nav.style.marginLeft = '100%'
                    }
                    let hamburger = document.querySelector('.ss-hamburger');
                    let close = document.querySelector('.ss-close');
                    hamburger.style.display = (hamburger.style.display == 'block' || hamburger.style.display == '') ? 'none' : 'block';
                    close.style.display = (close.style.display == 'none' || close.style.display == '') ? 'block' : 'none';
                    
                ">
                    <svg class="ss-hamburger" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="2" fill="black"/>
                        <rect y="8" width="24" height="2" fill="black"/>
                        <rect y="16" width="24" height="2" fill="black"/>
                    </svg>
                    <svg class="ss-close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.807617" y="17.7782" width="24" height="2" transform="rotate(-45 0.807617 17.7782)" fill="white"/>
                        <rect x="17.7782" y="19.1924" width="24" height="2" transform="rotate(-135 17.7782 19.1924)" fill="white"/>
                    </svg>
                </div>
                <style>
                    .ss-header-container {
                        padding: 10px 10px;
                        background-color: #ffffff;
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 110px;
                        z-index: 5;
                    }
                    .ss-nav {
                        padding: 10px 110px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        transition: margin-left 1s;
                    }
                    .ss-logo {
                        height: 70px;
                        width: 70px;
                        overflow: hidden;
                        padding: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .ss-logo-img {
                        width: 60px;
                        height: 60px;
                    }
                    .ss-toogler {
                        display: none;
                        position: absolute;
                        right: 120px;
                        top: 50px;
                    }
                    .ss-hamburger {
                    	display: block;
                    }
                    .ss-close {
                    	display: none;
                    }
                    .ss-nav-items {
                        flex: 1;
                        padding: 0px 35px;
                    }
                    .ss-nav-items-list {
                        list-style: none;
                        padding: 0px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        float: right;
                    }
                    .ss-nav-item {
                        margin: 0px 10px;
                        padding: 0px 7.5px;
                    }
                    .ss-nav-link {
                        text-decoration: none;
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 22px;
                        display: flex;
                        align-items: center;
                        text-transform: uppercase;
                        color: #95A1BB;
                    }
                    .ss-cool-link::after {
                        content: '';
                        display: block;
                        width: 0;
                        height: 2px;
                        background: #363940;
                        transition: width .3s;
                    }
                    .ss-cool-link:hover::after {
                        width: 100%;
                    }
                    .ss-nav-link:hover {
                        color: #363940;
                    }
                    .ss-action-btn {
                        height: 50px;
                        width: 120px;
                        border: none;
                        background-color: #006CFF;
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 22px;
                        color: #ffffff;
                    }
                </style>
                <style>
                @media screen and (max-width: 1024px) {
                	.ss-header-container {
                    	padding: 0px;
                    }
                    .ss-header-container .ss-toogler {
                        display: block;
                        z-index: 2;
                    }
                    .ss-nav {
                    	margin-left: 100%;
                        background-color: antiquewhite;
                        padding: 0px;
                        flex-direction: column;
                        position: fixed;
    					height: 100%;
    					width: 100%;
    					justify-content: space-evenly;
                        z-index: 1;
                    }
                    .ss-logo {
                    	align-self: flex-start;
    					position: fixed;
    					top: 20px;
    					left: 120px;
                    }
                    .ss-nav-items {
                    	flex: none;
                    }
                    .ss-nav-items-list {
                    	flex-direction: column;
                    }
                    .ss-nav-item {
                    	margin: 30px 10px;
                    }
                }
                @media screen and (min-width: 1024px) {
                    .ss-nav {
                        margin-left: 0% !important;
                    }
                }
                @media screen and (max-width: 640px) {
                    .ss-logo {
                        left: 25px;
                    }
                    .ss-toogler {
                    	right: 25px;
                    }
                }
                </style>
            </nav>
        `
    })

    editor.BlockManager.add("team", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">Team</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="ss-team-container" data-gjs-custom-name="ss-team">
            <div class="ss-team-header">
                <H1>Our Team</H1>
                <p>Failure will never overtake me if my determination to succeed is strong enough.</p>
            </div>
            <div class="ss-team-main">
                <div class="ss-team-card ss-img-spacing">
                    <img src="${assetsUrl}/images/imagePlaceholder.png"/>
                    <div class="ss-card-details">
                    	<H2 class="ss-card-title">Andrei Masharin</H2>
                        <P class="ss-card-description">CEO</P>
                    </div>
                </div>
                <div class="ss-team-card ss-img-spacing">
                <img src="${assetsUrl}/images/imagePlaceholder.png"/>
                    <div class="ss-card-details">
                    	<H2 class="ss-card-title">Stina Gunnarsdottir</H2>
                        <P class="ss-card-description">Co- founder</P>
                    </div>
                </div>
                <div class="ss-team-card ss-img-spacing">
                <img src="${assetsUrl}/images/imagePlaceholder.png"/>
                    <div class="ss-card-details">
                    	<H2 class="ss-card-title">Dai Jiang</H2>
                        <P class="ss-card-description">Developer</P>
                    </div>
                </div>
                <div class="ss-team-card ss-img-spacing">
                <img src="${assetsUrl}/images/imagePlaceholder.png"/>
                    <div class="ss-card-details">
                    	<H2 class="ss-card-title">Xun Guiying</H2>
                        <P class="ss-card-description">Developer</P>
                    </div>
                </div>
            </div>
            <style>
                .ss-team-container {
                    padding: 100px;
                    background-color: #FFFFFF;
                    font-family: Open Sans;
                    font-style: normal;
                }
                .ss-team-header {
                    text-align: center;
                    margin-bottom: 20px;
                    font-family: Open Sans;
                    font-style: normal;
                }
                .ss-team-header H1 {
                    font-weight: 600;
                    font-size: 36px;
                    line-height: 43px;
                    color: #363940;
                    margin-bottom: 20px;
                }
                .ss-team-header P {
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 22px;
                    color: #95A1BB;
                }
                .ss-team-main {
                    display: flex;
                    align-items: baseline;
                    flex-wrap: wrap;
                    padding: 5px 5px;
                }
                .ss-team-card {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    flex: 1;
                    min-width: 150px;
                }
                .ss-team-card.ss-img-spacing {
                    padding: 15px;
                }
                .ss-team-card img {
                    width: 100%;
                }
                .ss-team-card .ss-card-details {
                	width: 100%;
                }
                .ss-team-card .ss-card-details .ss-card-title {
					margin: 15px 0px 6px 0px;
              		font-size: 18px;
					line-height: 22px;
					color: #363940;
                }
                .ss-team-card .ss-card-details .ss-card-description {
                	margin: 0px;
                	font-size: 12px;
					line-height: 20px;
					letter-spacing: 2px;
                    text-transform: uppercase;
					color: #95A1BB;
                }
            </style>
            <style>
            @media screen and (max-width: 640px) {
                .ss-team-container {
                    padding: 100px 70px;
                }
            }
            </style>
        </div>
        `
    })

    editor.BlockManager.add("form", {
        label: `<div class="inherit-color-svg">${form}
            <div style="margin-top: 4.14px">Form</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="ss-contact-container" data-gjs-custom-name="ss-contact-us">
            <div class="ss-contact-main">
                <form class="ss-contact-form" action="/action_page.php" method="get">
                	<H1>Contact Us</H1>
                    <P>The harder you work for something, the greater you’ll feel when you achieve it.</P>
                    <select name="type">
                    	<option>Technical</option>
                    	<option>Complaint</option>
                    	<option>Custom</option>
                    </select>
                    <input name="firstname" placeholder="First Name" value="First Name"/>
                    <input name="lastname" placeholder="Last Name" value="Last Name"/>
                    <textarea id="w3review" name="w3review" rows="5" placeholder="Description (optional)"></textarea>
                    <button type="submit">Send Request</button>
                </form>
            </div>
            <div class="ss-contact-map">
                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
                <style>.mapouter{position:relative;text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}</style></div>
            </div>
            <style>
            	.ss-contact-container {
                	display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
					font-family: Open Sans;
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					line-height: 22px;
                    color: #363940;
                    background-color: #ffffff;
                }
				.ss-contact-main {
                	padding: 100px 0px;
                    width: 50%;
                }
				.ss-contact-main .ss-contact-form {
					padding: 0px 120px;
					justify-content: space-between;
					display: flex;
					flex-wrap: wrap;
                }
				.ss-contact-main .ss-contact-form H1, .ss-contact-main .ss-contact-form P, .ss-contact-main .ss-contact-form select, .ss-contact-main .ss-contact-form textarea {
                	width: 100%;
                    margin-bottom: 20px;
                    padding: 12px 15px;
                    color: #363940;
                }
				.ss-contact-main .ss-contact-form H1 {
					font-weight: 600;
					font-size: 36px;
					line-height: 43px;
                    margin: 0px;
                    padding: 0px;
                }
                .ss-contact-main .ss-contact-form P {
                	color: #95A1BB;
                    margin: 20px 0px 30px 0px;
                    padding: 0px;
                }
				.ss-contact-main .ss-contact-form input {
                	width: 43%;
                    padding: 12px 15px;
                    margin-bottom: 20px;
                    color: #363940;
                }
				.ss-contact-main .ss-contact-form button {
                    padding: 13px 25px;
                    background: #006CFF;
                    font-weight: 600;
					font-size: 12px;
					line-height: 20px;
                    text-align: center;
					letter-spacing: 2px;
					text-transform: uppercase;
                    color: #ffffff;
                    border: none;
                }
                .ss-contact-map {
                    padding: 5px;
                	width: 50%;
                    display: flex;
					justify-content: center;
					align-items: center;
                }
                .ss-contact-map img {
                	width: 100%;
                }
            </style>
            <style>
            @media screen and (max-width: 1300px) {
				.ss-contact-main, .ss-contact-map {
                    width: 100%;
                }
				.ss-contact-main .ss-contact-form {
                    padding: 0px 40px;
                }
            }
            </style>
        </div>
        `
    })

    editor.BlockManager.add("testimonials", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">Testimonials</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="ss-testimonials-container" data-gjs-custom-name="ss-testimonials">
            	<H1>Testimonials</H1>
                <div class="main-container">
                    <div class="testimonials-prev">
                        <img src="${assetsUrl}/images/leftArrow.png"/>
                    </div>
                	<div class="testimonials-main">
                    	<div class="slider">
                        	<div class="slide">
                            	<div class="slider-card">
                                	<P>Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.</P>
                                    <div class="card-info">
                                        <img src="${assetsUrl}/images/imagePlaceholderCircle.png"/>
                                        <div class="card-details">
                                        	<H2>Melissa Morillo</H2>
                                            <P>CO-Founder</P>
                                        </div>
                                    </div>
                                </div>
                            	<div class="slider-card">
                                	<P>Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.</P>
                                    <div class="card-info">
                                        <img src="${assetsUrl}/images/imagePlaceholderCircle.png"/>
                                        <div class="card-details">
                                        	<H2>Melissa Morillo</H2>
                                            <P>CO-Founder</P>
                                        </div>
                                    </div>
                                </div>
                            	<div class="slider-card">
                                	<P>Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.</P>
                                    <div class="card-info">
                                        <img src="${assetsUrl}/images/imagePlaceholderCircle.png"/>
                                        <div class="card-details">
                                        	<H2>Melissa Morillo</H2>
                                            <P>CO-Founder</P>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        	<div class="slide">
                            	<div class="slider-card">
                                	<P>Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.</P>
                                    <div class="card-info">
                                        <img src="${assetsUrl}/images/imagePlaceholderCircle.png"/>
                                        <div class="card-details">
                                        	<H2>Arnold</H2>
                                            <P>CO-Founder</P>
                                        </div>
                                    </div>
                                </div>
                            	<div class="slider-card">
                                	<P>Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.</P>
                                    <div class="card-info">
                                        <img src="${assetsUrl}/images/imagePlaceholderCircle.png"/>
                                        <div class="card-details">
                                        	<H2>Arnold</H2>
                                            <P>CO-Founder</P>
                                        </div>
                                    </div>
                                </div>
                            	<div class="slider-card">
                                	<P>Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.</P>
                                    <div class="card-info">
                                        <img src="${assetsUrl}/images/imagePlaceholderCircle.png"/>
                                        <div class="card-details">
                                        	<H2>Arnold</H2>
                                            <P>CO-Founder</P>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                	<div class="testimonials-next">
                        <img src="${assetsUrl}/images/rightArrow.png"/>
                    </div>
                </div>
            <style>
            	.ss-testimonials-container {
                	display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
					font-family: Open Sans;
					font-style: normal;
					font-weight: normal;
                    color: #363940;
                    background-color: #ffffff;
                    padding: 100px 30px;
                }
            	.ss-testimonials-container H1 {
                	font-weight: 600;
					font-size: 36px;
                    line-height: 43px;
                }
            	.ss-testimonials-container .main-container {
                	display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    width: 100%;
                }
            	.ss-testimonials-container .main-container .testimonials-prev {
                	cursor: pointer
                }
            	.ss-testimonials-container .main-container .testimonials-next {
                	cursor: pointer
                }
            	.ss-testimonials-container .main-container .testimonials-main {
                	position: relative;
                	width: 100%;
                    height: 410px;
                    overflow: hidden;
                }
            	.ss-testimonials-container .slider {
                	position: absolute;
                    left: 0;
                    top: 0;
                    /*width: 100%;*/
                    height: 100%;
                    transition: all 0.5s ease-in-out;
                    display: flex;
                }
            	.ss-testimonials-container .slide {
                    /*width: 100%;*/
                    height: 100%;
                    display: flex;
                }
            	.ss-testimonials-container .slider-card {
                    margin: 15px;
                    padding: 0px 30px;
                    background-color: #F6F7FA;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    overflow: hidden;
                    width: 380px;
                    transition: all 0.5s ease-in-out;
                }
            	.ss-testimonials-container .slider-card P {
                    margin: 0px 0px 40px 0px;
                    font-size: 16px;
					line-height: 24px;
                }
            	.ss-testimonials-container .slider-card .card-info {
                    display: flex;
                }
            	.ss-testimonials-container .slider-card .card-info img {
                    margin: 0px 20px 20px 0px;
                }
            	.ss-testimonials-container .slider-card .card-info .card-details H2 {
                    margin: 0px 20px 0px 2px;
                    font-weight: 500;
					font-size: 18px;
					line-height: 22px;
                }
            	.ss-testimonials-container .slider-card .card-info .card-details P {
                    margin: 0px;
                    font-weight: 500;
					font-size: 12px;
                    line-height: 20px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #95A1BB;
                }
            </style>
            <style>
            @media screen and (max-width: 640px) {
            	.ss-testimonials-container .slider-card {
                    width: 200px;
                }
            	.ss-testimonials-container .slider-card P {
                    margin: 0px 0px 10px 0px;
                }
            }
            @media screen and (max-width: 440px) {
            	.ss-testimonials-container {
                    padding: 100px 0px;
                }
                .ss-testimonials-container .main-container .testimonials-prev {
                	margin-left: -10px;
                }
                .ss-testimonials-container .main-container .testimonials-next {
                	margin-right: -10px;
                }
                .ss-testimonials-container .main-container .testimonials-main {
                	height: 450px;
                }
            	.ss-testimonials-container .slider-card {
                    width: 200px;
                    margin: 5px;
                    padding: 0px 10px;
                }
            	.ss-testimonials-container .slider-card P {
                    margin: 0px 0px 10px 0px;
                }
            }
            </style>
            <script>
            	parentNode = document.currentScript.parentNode;
                navIcon = parentNode.querySelector(".testimonials-prev");
                navIcon.addEventListener('click', (e) => {
                    parentNode = e.target.parentNode.parentNode
                    let sliderNode = parentNode.querySelector(".ss-testimonials-container .slider");
                    let singleSlideNode = parentNode.querySelector(".ss-testimonials-container .slide");
                    let sliderCard = parentNode.querySelector(".ss-testimonials-container .slide .slider-card");
                    if (getComputedStyle(sliderNode).left == '0px') {
                    	return;
                    }
                    
                    if (Math.abs(parseFloat(getComputedStyle(sliderNode).left)) < Math.abs(parseFloat(sliderCard.clientWidth))) {
                    	let move = parseFloat(getComputedStyle(sliderNode).left) + Math.abs(parseFloat(getComputedStyle(sliderNode).left));
                        sliderNode.style.left = move + 'px';
                        return;
                    }
                    
                    let move = parseFloat(getComputedStyle(sliderNode).left) + parseFloat(sliderCard.clientWidth) + 30;
                    sliderNode.style.left = move + 'px';
                });
                navIcon = parentNode.querySelector(".testimonials-next");
                navIcon.addEventListener('click', (e) => {
                    parentNode = e.target.parentNode.parentNode
                    let sliderNode = parentNode.querySelector(".ss-testimonials-container .slider");
                    let singleSlideNode = parentNode.querySelector(".ss-testimonials-container .slide");
                    let sliderCard = parentNode.querySelector(".ss-testimonials-container .slide .slider-card");
                    if (getComputedStyle(sliderNode).width == getComputedStyle(sliderNode).left) {
                    	return;
                    }
                    
                    if (Math.abs(parseFloat(getComputedStyle(sliderNode).right)) < Math.abs(parseFloat(sliderCard.clientWidth))) {
                    	let move = parseFloat(getComputedStyle(sliderNode).left) - Math.abs(parseFloat(getComputedStyle(sliderNode).right));
                        sliderNode.style.left = move + 'px';
                        return;
                    }
                    
                    let move = parseFloat(getComputedStyle(sliderNode).left) - parseFloat(sliderCard.clientWidth) - 30;
                    sliderNode.style.left = move + 'px';
                });
            </script>
        </div>
        `
    })

    editor.BlockManager.add("footer", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Footer</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="ss-footer-container" data-gjs-custom-name="ss-footer">
                <div class="main-container">
                	<div class="footer-head">
                        <img class="footer-head-logo" src="${assetsUrl}/images/imagePlaceholder.png"/>
						<P>All Rights Reserved. © 2020 SiteSeed.</P>
                    </div>
                	<div class="footer-nav">
                    	<div class="footer-nav-col">
                        	<H2>First Column</H2>
                            <a>Text Link</a>
                            <a>Text Link</a>
                            <a>Text Link</a>
                            <a>Text Link</a>
                        </div>
                    	<div class="footer-nav-col">
                        	<H2>Second Column</H2>
                            <a>Text Link</a>
                            <a>Text Link</a>
                            <a>Text Link</a>
                            <a>Text Link</a>
                        </div>
                    	<div class="footer-nav-col">
                        	<H2>Third Column</H2>
                            <a>Text Link</a>
                            <a>Text Link</a>
                            <a>Text Link</a>
                            <a>Text Link</a>
                        </div>
                    </div>
                	<div class="footer-newsletter">
                    	<H2>Subscribe</H2>
                        <div class="newsletter-form">
                            <form>
                        	    <input type="text" placeholder="Placeholder"/>
                                <button class="newsletter-submit-button">
                                    <img src="${assetsUrl}/images/send.png"/>
                                </button>
                            </form>
                        </div>
                        <P>Depending on the company, a suer experience designer may need to be a jack of all trades</P>
                    </div>
                </div>
            <style>
            	.ss-footer-container {
                	display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
					font-family: Open Sans;
					font-style: normal;
					font-weight: normal;
                    font-size: 16px;
                    line-height: 22px;
                    color: #363940;
                    background-color: #ffffff;
                    padding: 100px 120px;
                }
            	.ss-footer-container .main-container {
                	display: flex;
                    justify-content: space-between;
                    flex-direction: row;
                    width: 100%;
                }
            	.ss-footer-container .main-container .footer-head {
                    width: 146px;
                }
            	.ss-footer-container .main-container .footer-head .footer-head-logo {
                    width: 73px;
                    height: 73px;
                }
            	.ss-footer-container .main-container .footer-head P {
                    color: #95A1BB;
                    margin: 20px 0px;
                }
            	.ss-footer-container .main-container .footer-nav {
                	display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    flex: 1;
                    margin: 0px 5px;
                }
            	.ss-footer-container .main-container .footer-nav .footer-nav-col {
                	display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0px 10px;
                }
            	.ss-footer-container .main-container .footer-nav .footer-nav-col H2 {
                	text-align: center;
                    font-weight: 600;
                    font-size: 16px;
                    margin: 0px 0px 20px 0px;
                }
            	.ss-footer-container .main-container .footer-nav .footer-nav-col a {
                	margin: 0px 0px 22px 0px;
                    color: #95A1BB;
                    cursor: pointer;
                }
            	.ss-footer-container .main-container .footer-newsletter {
                	width: 283px;
                }
            	.ss-footer-container .main-container .footer-newsletter H2 {
                	font-weight: 600;
               		font-size: 16px;
					margin: 0px 0px 20px 0px;
                }
            	.ss-footer-container .main-container .footer-newsletter .newsletter-form {
                	background-color: #F6F7FA;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
            	.ss-footer-container .main-container .footer-newsletter .newsletter-form form {
                    padding: 12px 15px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    flex: 1;
                    margin: 0px;
                }
            	.ss-footer-container .main-container .footer-newsletter .newsletter-form input {
                	flex: 1;
                    background-color: transparent;
                    border: none;
                    font-family: Open Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 22px;
                    color: #95A1BB;
                }
            	.ss-footer-container .main-container .footer-newsletter .newsletter-form input::placeholder {
                    color: #95A1BB;
                }
            	.ss-footer-container .main-container .footer-newsletter .newsletter-form .newsletter-submit-button {
                	border: none;
                    background: transparent;
                    cursor: pointer;
                }
            	.ss-footer-container .main-container .footer-newsletter P {
               		font-size: 13px;
                    line-height: 18px;
                    color: #95A1BB;
                    margin: 20px 0px 20px 0px;
                }
            </style>
            <style>
            @media screen and (max-width: 960px) {
            	.ss-footer-container {
                	padding: 100px 20px;
                }
            	
            }
            @media screen and (max-width: 760px) {
            	.ss-footer-container .main-container .footer-nav {
                	display: none;
                }
            }
            @media screen and (max-width: 530px) {
            	.ss-footer-container .main-container .footer-head {
                    width: auto;
                }
            	.ss-footer-container .main-container .footer-newsletter {
                    width: auto;
                }
            	.ss-footer-container .main-container {
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                }
            }
            </style>
        </div>
        `
    })

    editor.BlockManager.add("cta", {
        label: `<div class="inherit-color-svg">${cta}
            <div style="margin-top: 4.14px">CTA</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="ss-action-container" data-gjs-custom-name="ss-cta">
                <H1>Your world will never be the same</H1>
                <P>There are many reasons to get down and start to get depressed about your situation. </P>
                <button>Get Started</button>
            <style>
            	.ss-action-container {
                	display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
					font-family: Open Sans;
					font-style: normal;
                    text-align: center;
                    background-color: #ffffff;
                    padding: 100px 120px;
                }
            	.ss-action-container H1 {
                	font-weight: 600;
					font-size: 36px;
                    line-height: 43px;
                    color: #363940;
                    margin: 0px;
                }
            	.ss-action-container P {
                	font-weight: normal;
                    font-size: 16px;
                    line-height: 22px;
                    color: #95A1BB;
                    margin: 20px 0px 40px 0px;
                    width: 366px;
                }
            	.ss-action-container button {
                	font-weight: 600;
                    font-size: 12px;
                    line-height: 20px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                    background-color: #006CFF;
                    height: 46px;
                    width: 160px;
                    border: none;
                }
            </style>
            <style>
            @media screen and (max-width: 600px) {
            	.ss-action-container {
                    padding: 100px 20px;
                }
            }
            @media screen and (max-width: 390px) {
            	.ss-action-container P {
                    width: auto;
                }
            }
            </style>
        </div>
        `
    })

    editor.BlockManager.add("pricing", {
        label: `<div class="inherit-color-svg">${pricing}
            <div style="margin-top: 4.14px">Pricing</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="ss-pricing-container" data-gjs-custom-name="ss-pricing">
            <div class="pricing-header">
                <H1>Choose your plan</H1>
                <p>There are many reasons to get down and start to get depressed about your situation.</p>
            </div>
            <div class="pricing-main">
                <div class="pricing-card card-spacing">
                    <div class="card-details">
                        <img class="footer-head-logo" src="${assetsUrl}/images/avatar.png"/>
                    	<H2 class="card-title">Standard</H2>
                        <div class="card-price">
                        	<H1>$59</H1><P>/month</P>
                        </div>
                        <P class="card-description">
                        	When applied to building block a website or similar work product, a Visual Guide
						</P>
                        <H3 class="card-about-list-title">First Column</H3>
                        <P class="card-about-list-item">
                            <img class="footer-head-logo" src="${assetsUrl}/images/tick.png"/>
                            Create Messages
                        </P>
                        <P class="card-about-list-item">
                            <img class="footer-head-logo" src="${assetsUrl}/images/tick.png"/>
                            Manage conversations from email
                        </P>
                        <P class="card-about-list-item">
                            <img class="footer-head-logo" src="${assetsUrl}/images/tick.png"/>
                            View customer profiles
                        </P>
                    </div>
                    <div class="card-actions">
                    	<button>Button</button>
                    	<div class="card-actions-subscript">Includes Free Trials of Source <a>Link</a></div>
                    </div>
                </div>
                <div class="pricing-card card-spacing">
                    <div class="card-details">
                        <img class="footer-head-logo" src="${assetsUrl}/images/avatar.png"/>
                    	<H2 class="card-title">Individual</H2>
                        <div class="card-price">
                        	<H1>$9.99</H1><P>/month</P>
                        </div>
                        <P class="card-description">
                        	When applied to building block a website or similar work product, a Visual Guide
						</P>
                        <H3 class="card-about-list-title">First Column</H3>
                        <P class="card-about-list-item">
                            <img class="footer-head-logo" src="${assetsUrl}/images/tick.png"/>
                            Create Messages
                        </P>
                        <P class="card-about-list-item">
                            <img class="footer-head-logo" src="${assetsUrl}/images/tick.png"/>
                            Manage conversations from email
                        </P>
                        <P class="card-about-list-item">
                            <img class="footer-head-logo" src="${assetsUrl}/images/tick.png"/>
                            View customer profiles
                        </P>
                    </div>
                    <div class="card-actions">
                    	<button>Button</button>
                    	<div class="card-actions-subscript">Includes Free Trials of Source <a>Link</a></div>
                    </div>
                </div>
                <div class="pricing-card card-spacing">
                    <div class="card-details">
                        <img class="footer-head-logo" src="${assetsUrl}/images/avatar.png"/>
                    	<H2 class="card-title">Enterprise</H2>
                        <div class="card-price">
                        	<H1>$199</H1><P>/month</P>
                        </div>
                        <P class="card-description">
                        	When applied to building block a website or similar work product, a Visual Guide
						</P>
                        <H3 class="card-about-list-title">First Column</H3>
                        <P class="card-about-list-item">
                            <img class="footer-head-logo" src="${assetsUrl}/images/tick.png"/>
                            Create Messages
                        </P>
                        <P class="card-about-list-item">
                            <img class="footer-head-logo" src="${assetsUrl}/images/tick.png"/>
                            Manage conversations from email
                        </P>
                        <P class="card-about-list-item">
                            <img class="footer-head-logo" src="${assetsUrl}/images/tick.png"/>
                            View customer profiles
                        </P>
                        <P class="card-about-list-item">
                            <img class="footer-head-logo" src="${assetsUrl}/images/tick.png"/>
                        	Integrate with Stripe
                        </P>
                    </div>
                    <div class="card-actions">
                    	<button>Button</button>
                    	<div class="card-actions-subscript">Includes Free Trials of Source <a>Link</a></div>
                    </div>
                </div>
            </div>
            <style>
                .ss-pricing-container {
                    padding: 100px;
                    background-color: #FFFFFF;
                    font-family: Rubik;
                    font-style: normal;
                }
                .pricing-header {
                    text-align: center;
                    margin-bottom: 20px;
                    font-family: Open Sans;
                    font-style: normal;
                }
                .pricing-header H1 {
                    font-weight: 600;
                    font-size: 36px;
                    line-height: 43px;
                    color: #363940;
                    margin-bottom: 20px;
                    text-align: center;
                }
                .pricing-header P {
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 22px;
                    color: #95A1BB;
                }
                .pricing-main {
                    display: flex;
                    align-items: baseline;
                    flex-wrap: wrap;
                    padding: 5px 5px;
                }
                .pricing-card {
                    display: flex;
                    align-content: space-between;
                    justify-content: center;
                    flex-wrap: wrap;
                    flex: 1;
                    min-width: 150px;
                    height: 570px;
                    border: 1px solid #E1E5EE;
                    box-sizing: border-box;
                    border-radius: 4px;
                    margin: 0px 15px;
                }
                .pricing-card.card-spacing {
                    padding: 50px 30px;
                }
                .pricing-card img {
                    /*width: 100%;*/
                }
                .pricing-card .card-details {
                	width: 100%;
                    position: relative;
                }
                .pricing-card .card-details > img {
                	position: absolute;
                    right: 0px;
                    top: -10px;
                }
                .pricing-card .card-details .card-title {
					margin: 0px 0px 20px 0px;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 28px;
                }
                .pricing-card .card-details .card-price {
                	display: flex;
                    align-items: baseline;
                }
                .pricing-card .card-details .card-price H1 {
                	font-weight: 500;
                    font-size: 48px;
                    line-height: 57px;
                    margin: 0;
                }
                .pricing-card .card-details .card-price P {
                	font-weight: 500;
                    font-size: 18px;
                    line-height: 22px;
                    color: #95A1BB;
                    margin: 0;
                }
                .pricing-card .card-details .card-description {
                	border-bottom: 1px solid #E1E5EE;
                    margin: 0px;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 22px;
                    color: #95A1BB;
                    padding: 10px 0px 30px 0px;
                }
                .pricing-card .card-details .card-about-list-title {
                	font-weight: 500;
                    font-size: 18px;
                    line-height: 22px;
                    color: #363940;
                    margin: 30px 0px 0px 0px;
                }
                .pricing-card .card-details .card-about-list-item {
               		margin: 10px 0px 0px 0px;
                    display: flex;
                    align-items: center;
                }
                .pricing-card .card-details .card-about-list-item img {
               		margin-right: 7px;
                }
                .pricing-card .card-actions {
                    width: 100%;
                }
                .pricing-card .card-actions button {
                	background-color: #006CFF;
                    border: none;
                    color: #ffffff;
                    width: 100%;
                    height: 46px;
                }
                .pricing-card .card-actions .card-actions-subscript {
                	font-weight: normal;
                    font-size: 13px;
                    line-height: 22px;
                    color: #95A1BB;
                    margin-top: 10px;
                }
                .pricing-card .card-actions .card-actions-subscript a {
                	font-weight: normal;
                    font-size: 13px;
                    line-height: 22px;
                    color: #4091ff;
                }
            </style>
            <style>
            @media screen and (max-width: 1260px) {
                .ss-pricing-container {
                    padding: 100px 20px;
                }
            }
            @media screen and (max-width: 1100px) {
                .ss-pricing-container {
                    padding: 100px 20px;
                }
                .pricing-card.card-spacing {
                    padding: 30px 10px;
                }
            }
            @media screen and (max-width: 800px) {
                .pricing-main {
                    flex-direction: column;
                }
                .pricing-card.card-spacing {
                    margin: 5px 15px;
                    padding: 50px 30px;
                }
                .pricing-card .card-actions {
                	margin-top: 20px;
                }
            }
            @media screen and (max-width: 420px) {
            	.ss-pricing-container {
                    padding: 100px 0px;
                }
                .pricing-card.card-spacing {
                    margin: 5px 0px;
                    padding: 50px 10px;
                }
            }
            </style>
        </div>
        `
    })

    editor.BlockManager.add("faq", {
        label: `<div class="inherit-color-svg">${faq}
            <div style="margin-top: 4.14px">FAQ</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="ss-faq-container" data-gjs-custom-name="ss-faq">
            <div class="ss-faq-header">
                <H1>FAQ</H1>
            </div>
            <div class="ss-faq-main">
                <div class="list-container">
                    <div class="accordion" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
                        <p>Do you help with relocation?</p>
				    	<svg class="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				    		<path d="M15.8333 10.8334H10.8333V15.8334H9.16666V10.8334H4.16666V9.16675H9.16666V4.16675H10.8333V9.16675H15.8333V10.8334Z" fill="#006CFF"/>
				    	</svg>

				    	<svg class="minus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				    		<path d="M4.16666 10.8334V9.16675H15.8333V10.8334H4.16666Z" fill="#006CFF"/>
				    	</svg>
				    </div>
                    <div class="panel" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
                        <p>Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place. 

                        The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people; I know it speaks volumes to me. “Autobiography in Five Chapters”</p>
                    </div>
                </div>

                <div class="list-container">
                    <div class="accordion" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
                        <p>How does your hiring process work?</p>
				    	<svg class="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				    		<path d="M15.8333 10.8334H10.8333V15.8334H9.16666V10.8334H4.16666V9.16675H9.16666V4.16675H10.8333V9.16675H15.8333V10.8334Z" fill="#006CFF"/>
				    	</svg>

				    	<svg class="minus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				    		<path d="M4.16666 10.8334V9.16675H15.8333V10.8334H4.16666Z" fill="#006CFF"/>
				    	</svg>
				    </div>
                    <div class="panel" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
                        <p>Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place. 

                        The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people; I know it speaks volumes to me. “Autobiography in Five Chapters”</p>
                    </div>
                </div>

                <div class="list-container">
                    <div class="accordion" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
                        <p>Do you have an internship program?</p>
				    	<svg class="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				    		<path d="M15.8333 10.8334H10.8333V15.8334H9.16666V10.8334H4.16666V9.16675H9.16666V4.16675H10.8333V9.16675H15.8333V10.8334Z" fill="#006CFF"/>
				    	</svg>

				    	<svg class="minus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				    		<path d="M4.16666 10.8334V9.16675H15.8333V10.8334H4.16666Z" fill="#006CFF"/>
				    	</svg>
				    </div>
                    <div class="panel" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
                        <p>Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place. 

                        The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people; I know it speaks volumes to me. “Autobiography in Five Chapters”</p>
                    </div>
                </div>
                
                <div class="list-container">
                    <div class="accordion" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
                        <p>What are your working hours?</p>
				    	<svg class="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				    		<path d="M15.8333 10.8334H10.8333V15.8334H9.16666V10.8334H4.16666V9.16675H9.16666V4.16675H10.8333V9.16675H15.8333V10.8334Z" fill="#006CFF"/>
				    	</svg>

				    	<svg class="minus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				    		<path d="M4.16666 10.8334V9.16675H15.8333V10.8334H4.16666Z" fill="#006CFF"/>
				    	</svg>
				    </div>
                    <div class="panel" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
                        <p>Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place. 

                        The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people; I know it speaks volumes to me. “Autobiography in Five Chapters”</p>
                    </div>
                </div>
            </div>
            <style>
                .ss-faq-container {
                    padding: 100px 250px;
                    background-color: #FFFFFF;
                    font-family: Open Sans;
                    font-style: normal;
                    font-weight: 600;
                    color: #363940;
                }
                .ss-faq-container .ss-faq-header {
                    font-size: 36px;
                    line-height: 43px;
                    text-align: center;
                    margin-bottom: 50px;
                }
                .ss-faq-container .list-container {
                    margin-top: 20px;
                }
                .ss-faq-container .accordion {
                    position: relative;
                    pointer: cursor;
                    padding: 20px;
                    border: 1px solid #E1E5EE;
					background: transparent;
					border-radius: 4px;
                    box-sizing: border-box;
					transition: 0.4s;
                }
                .ss-faq-container .accordion svg {
                    position: absolute;
                    right: 20px;
                    top: 20px;
                }
                .ss-faq-container .accordion.active .plus {
                	display: none;
                }
                .ss-faq-container .accordion.active .minus {
                	display: block;
                }
                .ss-faq-container .panel {
                    font-weight: 400;
					background: transparent;
					border-radius: 4px;
                    box-sizing: border-box;
					max-height: 0;
					overflow: hidden;
					transition: max-height 0.2s ease-out;
                }
                .ss-faq-container .panel p {
                    margin: 20px;
                }
                .ss-faq-container .accordion:hover {
                	background: transparent;
                }
                .ss-faq-container .accordion.active {
                	border: 1px solid #006CFF;
                    border-bottom: none;
					border-radius: 4px 4px 0px 0px;
                }
                .ss-faq-container .panel.active {
                	border: 1px solid #006CFF;
                    border-top: none;
					border-radius: 0px 0px 4px 4px;
                }
            </style>
            <script>
            	var main = document.getElementsByClassName("ss-faq-main")[0];
                var acc = main.getElementsByClassName("accordion");
                var i;
                for (i = 0; i < acc.length; i++) {
                  acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    panel.classList.toggle("active");
                    if (panel.style.maxHeight) {
                      panel.style.maxHeight = null;
                    } else {
                      panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
                  });
                }
            </script>
        </div>`
    })

    editor.BlockManager.add("pop-up", {
        label: `<div class="inherit-color-svg">${popUp}
            <div style="margin-top: 4.14px">Pop Up</div>
        </div>`,
        category: "Template Components",
        // editable: false,
        draggable: true,
        stylable: true,
        // selectable: false,
        content: {
            type: 'pop-up',
            components: `
          <button class="btn btn-danger" id="open-modal">Open Modal</button>
        <!-- The Modal -->
        <div id="myModal" class="ss-modal" data-gjs-icon='<i class="fa fa-superpowers"></i>' data-gjs-custom-name="ss-pop-up">
    
        <!-- Modal content -->
        <div class="modal-content">
            
        <span class="close float-right" data-gjs-editable="false" data-gjs-removable="false" data-gjs-draggable="false">&times;</span>
          
                 
                        <!--Section: Content-->
                        <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                    
                          <!--Grid row-->
                          <div class="row d-flex justify-content-center">
                    
                            <!--Grid column-->
                            <div class="col-md-6">
                    
                              <!-- Default form subscription -->
                              <form class="text-center" action="#!">
                    
                                <p class="h4 mb-4">Subscribe</p>
                    
                                <p>Join our mailing list. We write rarely, but only the best content.</p>
                    
                                <p>
                                  <a href="" target="_blank">See the last newsletter</a>
                                </p>
                    
                                <!-- Name -->
                                <input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Name">
                    
                                <!-- Email -->
                                <input type="email" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="E-mail">
                    
                                <!-- Sign in button -->
                                <button class="btn btn-info btn-block" type="submit">Sign in</button>
                    
                    
                              </form>
                              <!-- Default form subscription -->
                    
                            </div>
                            <!--Grid column-->
                    
                          </div>
                          <!--Grid row-->
                    
                    
                        </section>
                      </div>
        </div>
    
        <style>
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        div[ss-pop-up] .ss-modal  {
          visibility: visible;
          opacity: 1;
        }
        .ss-modal {
           display: block; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s linear;
            animation: 1s ease-out 0s 1 slideInFromLeft;
          }
          
          /* Modal Content */
          .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            color: #000
          }
          
          /* The Close Button */
          .close {
            color: #aaaaaa;
            width: 20px;
            font-size: 28px;
            font-weight: bold;
          }
          
          .close:hover,
          .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
          }
          </style>
        <script>
        // Get the modal
        parentNode = document.currentScript.parentNode;
        //var modal = parentNode.querySelector('.ss-modal');
    
        // Get the button that opens the modal
        var btn = parentNode.querySelector(".btn");
    
        // Get the <span> element that closes the modal
        var span = parentNode.getElementsByClassName("close")[0];
        // When the user clicks the button, open the modal 
        // btn.ondblclick = function() {
        // modal.style.display = "block";
        // }
    
        //open the modal on triple click
        btn.addEventListener('click', function (evt) {
        let parent = evt.target.parentNode;
        let modal = parent.querySelector('.ss-modal');
          if (evt.detail === 1) {
            let isBuilder = document.querySelector("div[data-gjs-type='wrapper']")
            if (isBuilder) { return; }
             // modal.style.display = "block";
             modal.style.visibility= "visible";
             modal.style.opacity= 1;
          }
          if (evt.detail === 2) {
              if (document.querySelector("div[data-gjs-type='wrapper']")){
                modal.style.visibility= "visible";
                modal.style.opacity= 1;
            }
        }
      });
    
    
        // When the user clicks on <span> (x), close the modal
        span.addEventListener('click', function (evt) {
        let modal = evt.target.parentNode.parentNode;
            modal.style.opacity= 0;
            modal.style.visibility= "hidden";
        });
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target.className == 'ss-modal') {
          event.target.style.opacity= 0;
          event.target.style.visibility= "hidden";
        }
        }
        </script>`
        },
    });

    // CountDown Component==================================================
    const pfx = 'countdown'
    const domc = editor.DomComponents;
    let c = {
        blocks: ['countdown'],

        // Default style
        defaultStyle: true,

        // Default start time, eg. '2018-01-25 00:00'
        startTime: '',

        // Text to show when the countdown is ended
        endText: 'EXPIRED',

        // Date input type, eg, 'date', 'datetime-local'
        dateInputType: 'datetime-local',

        // Countdown class prefix
        countdownClsPfx: 'countdown',

        // Countdown label
        labelCountdown: 'Countdown',

        // Countdown category label
        labelCountdownCategory: 'Extra',

        // Days label text used in component
        labelDays: 'days',

        // Hours label text used in component
        labelHours: 'hours',

        // Minutes label text used in component
        labelMinutes: 'minutes',

        // Seconds label text used in component
        labelSeconds: 'seconds',
    }
    let COUNTDOWN_TYPE = 'countdown'
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    domc.addType(COUNTDOWN_TYPE, {

        model: defaultModel.extend({
            defaults: {
                ...defaultModel.prototype.defaults,
                startfrom: c.startTime,
                endText: c.endText,
                droppable: false,
                traits: [{
                    label: 'Start',
                    name: 'startfrom',
                    changeProp: 1,
                    type: c.dateInputType,
                }, {
                    label: 'End text',
                    name: 'endText',
                    changeProp: 1,
                }],
                script: function () {
                    var startfrom = '{[ startfrom ]}';
                    var endTxt = '{[ endText ]}';
                    var countDownDate = new Date(startfrom).getTime();
                    var countdownEl = this.querySelector('[data-js=countdown]');
                    var endTextEl = this.querySelector('[data-js=countdown-endtext]');
                    var dayEl = this.querySelector('[data-js=countdown-day]');
                    var hourEl = this.querySelector('[data-js=countdown-hour]');
                    var minuteEl = this.querySelector('[data-js=countdown-minute]');
                    var secondEl = this.querySelector('[data-js=countdown-second]');
                    var oldInterval = this.gjs_countdown_interval;
                    if (oldInterval) {
                        oldInterval && clearInterval(oldInterval);
                    }

                    var setTimer = function (days, hours, minutes, seconds) {
                        dayEl.innerHTML = days < 10 ? '0' + days : days;
                        hourEl.innerHTML = hours < 10 ? '0' + hours : hours;
                        minuteEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
                        secondEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
                    }

                    var moveTimer = function () {
                        var now = new Date().getTime();
                        var distance = countDownDate - now;
                        var days = Math.floor(distance / 86400000);
                        var hours = Math.floor((distance % 86400000) / 3600000);
                        var minutes = Math.floor((distance % 3600000) / 60000);
                        var seconds = Math.floor((distance % 60000) / 1000);

                        setTimer(days, hours, minutes, seconds);

                        /* If the count down is finished, write some text */
                        if (distance < 0) {
                            clearInterval(interval);
                            endTextEl.innerHTML = endTxt;
                            countdownEl.style.display = 'none';
                            endTextEl.style.display = '';
                        }
                    };

                    if (countDownDate) {
                        var interval = setInterval(moveTimer, 1000);
                        this.gjs_countdown_interval = interval;
                        endTextEl.style.display = 'none';
                        countdownEl.style.display = '';
                        moveTimer();
                    } else {
                        setTimer(0, 0, 0, 0);
                    }
                }
            },
        }, {
            isComponent(el) {
                if (el.getAttribute &&
                    el.getAttribute('data-gjs-type') == COUNTDOWN_TYPE) {
                    return {
                        type: COUNTDOWN_TYPE
                    };
                }
            },
        }),


        view: defaultView.extend({
            init() {
                this.listenTo(this.model, 'change:startfrom change:endText', this.updateScript);
            }
        }),
    });
    editor.BlockManager.add('countdown', {
        label: `${countdown}
        Countdown`,
        category: 'Prebuilt',
        attributes: { class: 'fa fa-clock-o' },
        content: `
            <div class="${pfx}" data-gjs-type="countdown">
                <span data-js="countdown" class="${pfx}-cont" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
                    <div class="${pfx}-block">
                      <div data-js="countdown-day" class="${pfx}-digit"></div>
                      <div class="${pfx}-label">${c.labelDays}</div>
                    </div>
                    <div class="${pfx}-block">
                      <div data-js="countdown-hour" class="${pfx}-digit"></div>
                      <div class="${pfx}-label">${c.labelHours}</div>
                    </div>
                    <div class="${pfx}-block">
                      <div data-js="countdown-minute" class="${pfx}-digit"></div>
                      <div class="${pfx}-label">${c.labelMinutes}</div>
                    </div>
                    <div class="${pfx}-block">
                      <div data-js="countdown-second" class="${pfx}-digit"></div>
                      <div class="${pfx}-label">${c.labelSeconds}</div>
                    </div>
                </span>
                <span data-js="countdown-endtext" class="${pfx}-endtext"></span>
        
            </div>
            <style>
                .${pfx} {
                  text-align: center;
                  font-family: Helvetica, serif;
                }
            
                .${pfx}-block {
                  display: inline-block;
                  margin: 0 10px;
                  padding: 10px;
                }
            
                .${pfx}-digit {
                  font-size: 5rem;
                }
            
                .${pfx}-endtext {
                  font-size: 5rem;
                }
            
                .${pfx}-cont,
                .${pfx}-block {
                  display: inline-block;
                }
            </style>
        `
    })
    // =====================================================================
};