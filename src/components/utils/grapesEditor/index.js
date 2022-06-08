import "grapesjs/dist/css/grapes.min.css";
import _ from "lodash";
import grapesjs from "grapesjs";
//import "grapesjs-blocks-basic";
import exportPlugin from "grapesjs-plugin-export";
// import 'grapesjs-component-countdown'
import 'grapesjs-navbar'
import panels from "../../../containers/designerStudio/panels";
//import "grapesjs-preset-webpage";
import $, { parseHTML } from "jquery";
import styleManager from "./styleManager";
import { openAssets } from "../../../reducers/actions/editor";

import "./index.scss";
import { svg } from "../index";
import layoutBlocks from "../blocks/layout";
import { basicBlocks } from "../blocks/basic";
import { typography } from "../blocks/typography";
import { formBlocks } from "../blocks/forms";
import formTraits from "../blocks/forms/formTraits";
import { media } from "../blocks/media";
import { extras } from "../blocks/extras";
import { slider } from "../blocks/basic/icons";
import "grapesjs-lory-slider";
import { useStore } from "react-redux";
import { store } from "../../../store";
import viewCode from "./viewCode/viewCode";
import mediaTraits from "../blocks/media/mediaTraits";
import { prebuiltBlocks } from "../blocks/prebuilt";
import { assetsUrl, stagingUrl } from "../../../settings";
import Request from "../../../request";
// import { countdown } from "../blocks/extras/icons";



/* Template Component Blocks */
import { agencyDark } from "../blocks/templateComponents/agencyDark";
import { agencyGrey } from "../blocks/templateComponents/agencyGrey";
import { blog } from "../blocks/templateComponents/blog";
import { carpentry } from "../blocks/templateComponents/carpentry";
import { event } from "../blocks/templateComponents/event";
import { gym } from "../blocks/templateComponents/gym";
import { landingPage } from "../blocks/templateComponents/landingPage";
import { musician } from "../blocks/templateComponents/musician";
import { restaurant1 } from "../blocks/templateComponents/restaurant1";
import { spa } from "../blocks/templateComponents/spa";
import { therapists } from "../blocks/templateComponents/therapists";

const _grapesEditor = {
	editor: null,
	styleManager,
	exportConfigData: () => {
		let frame = document.getElementsByClassName("gjs-frame")
		let doc = frame[0].contentWindow.document
		let animationScript = doc.getElementById("ss-animate-init")
		let storeState = store.getState()
		const currentBuilderTemplateData = storeState.global.currentBuilderTemplateData
		let templateName = storeState.templates.currentTemplate
		let resp = {
			css: {}
			// css: {
			// 	'style.css': () => {
			// 		let ed = _grapesEditor.editor
			// 		let resp = ed.getCss()
			// 		let frame = document.getElementsByClassName("gjs-frame")
			// 		if (!frame[0]) {
			// 			return resp
			// 		}
			// 		let doc = frame[0].contentWindow.document
			// 		// let styleGrapejs = ed.getCss()
			// 		let style = doc.getElementById("ss-style")
			// 		let customStyles = doc.getElementById("ss-customStyles")
			// 		let styleAssets = doc.getElementById("ss-style-assets")
			// 		if (styleAssets) {
			// 			resp = styleAssets.innerHTML + '\n\n' + resp
			// 		}
			// 		// if (styleGrapejs.trim() != '') {
			// 		// 	resp = '\n\n' + styleGrapejs
			// 		// }
			// 		if (style) {
			// 			resp += '\n\n' + style.innerHTML
			// 		}
			// 		if (customStyles) {
			// 			resp += '\n\n' + customStyles.innerHTML
			// 		}
			// 		let prefix = `/*\nTheme Name: ${templateName}\nTheme URI: http://159.65.145.117:8090/SiteSeed/ \nDescription: Our theme is basically designed for spa & wellness\nVersion: 1.0\nAuthor: SiteSeed\nAuthor URI: http://159.65.145.117:8090/SiteSeed/ \n*/\n\n\n\n\n\n`
			// 		return prefix + resp
			// 	},
			// },
		}
		_.each(storeState.pageReducer.pages, (page, pageNo) => {
			let title = (page.seo && page.seo.name) || page.name
			let pageFunc = () => {
				let title = (page.seo && page.seo.name) || page.name
				let desp = (page.seo && page.seo.desp) || page.desp
				let favicon = page.favicon == '' || !page.favicon ? 'https://siteseed-dev.s3.amazonaws.com/assets/images/ssFavicon.svg' : page.favicon
				// const page = storeState.pageReducer.pages[storeState.pageReducer.currentPage]
				return `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${title}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${desp == '' || !desp ? '' : desp}">
					<!-- icon --><link rel="icon" href="${favicon}" /><!-- End-icon -->
					${_grapesEditor.getTags()}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/${page.homePage ? 'index' : _.camelCase(title)}.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${page.components}
						${animationScript ? `<script id="ss-animate-init">${animationScript.innerHTML}</script>` : null}
					</body>
				  </html>`
			}
			if (page.homePage) {
				title = 'index'
			}
			resp[_.camelCase(title) + '.html'] = pageFunc
			resp.css[_.camelCase(title) + '.css'] = () => {
				if (storeState.pageReducer.pages.currentPage == pageNo) {
					let respString = ''
					let style = page.style
					let customStyles = page.customCss
					let styleAssets = page.styleFontStr
					if (styleAssets) {
						respString = styleAssets.replace(/<[^>]*>/g, "") + '\n\n' + respString
					}
					if (style) {
						respString += '\n\n' + style.replace(/<[^>]*>/g, "")
					}
					if (customStyles) {
						respString += '\n\n' + customStyles.replace(/<[^>]*>/g, "")
					}
					let prefix = `/*\nTheme Name: ${templateName}\nTheme URI: http://159.65.145.117:8090/SiteSeed/ \nDescription: Our theme is basically designed for spa & wellness\nVersion: 1.0\nAuthor: SiteSeed\nAuthor URI: http://159.65.145.117:8090/SiteSeed/ \n*/\n\n\n\n\n\n`
					if (currentBuilderTemplateData) {
						prefix = `/*\nTheme Name: ${currentBuilderTemplateData.name}\nTheme URI: ${currentBuilderTemplateData.path} \nDescription: Our theme is basically designed for spa & wellness\nVersion: 1.0\nAuthor: SiteSeed\nAuthor URI: http://159.65.145.117:8090/SiteSeed/ \n*/\n\n\n\n\n\n`
					}
					return prefix + respString
				}
				let ed = _grapesEditor.editor
				let respString = ed.getCss()
				let frame = document.getElementsByClassName("gjs-frame")
				if (!frame[0]) {
					return respString
				}
				let doc = frame[0].contentWindow.document
				// let styleGrapejs = ed.getCss()
				let style = doc.getElementById("ss-style")
				let customStyles = doc.getElementById("ss-customStyles")
				let styleAssets = doc.getElementById("ss-style-assets")
				if (styleAssets) {
					respString = styleAssets.innerHTML + '\n\n' + respString
				}
				if (style) {
					respString += '\n\n' + style.innerHTML
				}
				if (customStyles) {
					respString += '\n\n' + customStyles.innerHTML
				}
				let prefix = `/*\nTheme Name: ${templateName}\nTheme URI: http://159.65.145.117:8090/SiteSeed/ \nDescription: Our theme is basically designed for spa & wellness\nVersion: 1.0\nAuthor: SiteSeed\nAuthor URI: http://159.65.145.117:8090/SiteSeed/ \n*/\n\n\n\n\n\n`
				if (currentBuilderTemplateData) {
					prefix = `/*\nTheme Name: ${currentBuilderTemplateData.name}\nTheme URI: ${currentBuilderTemplateData.path} \nDescription: Our theme is basically designed for spa & wellness\nVersion: 1.0\nAuthor: SiteSeed\nAuthor URI: http://159.65.145.117:8090/SiteSeed/ \n*/\n\n\n\n\n\n`
				}
				return prefix + respString
			}
		})
		return resp
	},
	canvasConfigData: (templateName) => {
		let resp = {
			styles: [
				`${assetsUrl}/assets/Fonts/default.css`
			],
			scripts: [
				"https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js",
				"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
				"https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js",
				"https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.js",
				"https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js",

				`${assetsUrl}/assets/script/ssAnimation.js`,
				'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js'
				// `http://localhost:3000/assets/script/ssAnimation.js`
			]
		}

		switch (templateName) {
			case "template1":
			case "spa":
				resp.styles = [
					...resp.styles,
					"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css",
					"https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap",
					"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap",

					// "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
					// "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
					// "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
					// "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",

					// `${assetsUrl}/templates/spa/vendor/bootstrap/css/bootstrap.min.css`,
				]
				resp.scripts = [
					...resp.scripts,
					// `${assetsUrl}/templates/spa/vendor/jquery/jquery.min.js`,
					// `${assetsUrl}/templates/spa/vendor/bootstrap/js/bootstrap.bundle.min.js`,
					"https://code.jquery.com/jquery-3.3.1.slim.min.js",
					"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js",
				]
				break;
			case "spaTemp":
				resp.styles = [
					...resp.styles,
					"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css",
					"https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap",
					"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap",

					// "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
					// "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
					// "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
					// "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",

					// `${assetsUrl}/templates/spa/vendor/bootstrap/css/bootstrap.min.css`,
				]
				resp.scripts = [
					...resp.scripts,
					// `${assetsUrl}/templates/spa/vendor/jquery/jquery.min.js`,
					// `${assetsUrl}/templates/spa/vendor/bootstrap/js/bootstrap.bundle.min.js`,
					"https://code.jquery.com/jquery-3.3.1.slim.min.js",
					"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js",
				]
				break;
			case "spaTemp":
				resp.styles = [
					...resp.styles,
					// "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
					// "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css",
					// "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css",
					// "https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap",
					// "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap",

					// // "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
					// // "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
					// // "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
					// "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
					// // "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",

					// // `${assetsUrl}/templates/spa/vendor/bootstrap/css/bootstrap.min.css`,

					"https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css",
					"https://unpkg.com/aos@2.3.1/dist/aos.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",

					`${assetsUrl}/templates/spa/vendor/bootstrap/css/bootstrap.min.css`,
					`${assetsUrl}/templates/spa/fonts/stylesheet.css`,
				]
				resp.scripts = [
					...resp.scripts,
					// // `${assetsUrl}/templates/spa/vendor/jquery/jquery.min.js`,
					// // `${assetsUrl}/templates/spa/vendor/bootstrap/js/bootstrap.bundle.min.js`,
					// "https://code.jquery.com/jquery-3.3.1.slim.min.js",
					// "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
					// // "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js",
				]
				break;
			case "therapists":
				resp.styles = [
					...resp.styles,
					// "https://unpkg.com/aos@2.3.1/dist/aos.css",
					// "https://fonts.gstatic.com",
					// "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.css",
					// "https://unpkg.com/swiper/swiper-bundle.min.css",
					// "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css",

					// `${assetsUrl}/templates/therapists/vendor/bootstrap/css/bootstrap.min.css`,
					"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
					"https://fonts.gstatic.com",
					"https://fonts.googleapis.com/css2?family=Barlow:wght@400&display=swap",
					"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
					"https://fonts.googleapis.com/css2?family=Barlow:wght@700&display=swap",
					"https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.css",
					"https://unpkg.com/swiper/swiper-bundle.min.css",
					`${assetsUrl}/templates/therapists/vendor/bootstrap/css/bootstrap.min.css`,
					"https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css"
					
				]
				resp.scripts = [
					...resp.scripts,
					// "https://unpkg.com/aos@2.3.1/dist/aos.js",
					// "https://unpkg.com/swiper/swiper-bundle.min.js",
					// `${assetsUrl}/templates/therapists/vendor/jquery/jquery.min.js`,
					// `${assetsUrl}/templates/therapists/vendor/bootstrap/js/bootstrap.bundle.min.js`,
					// "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js",

					"https://unpkg.com/aos@2.3.1/dist/aos.js",
					"https://unpkg.com/swiper/swiper-bundle.min.js",
					`${assetsUrl}/templates/therapists/vendor/jquery/jquery.min.js`,
					`${assetsUrl}/templates/therapists/vendor/bootstrap/js/bootstrap.bundle.min.js`,
					"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
					"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js",
					"https://code.jquery.com/ui/1.12.1/jquery-ui.js",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.js",
					"https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js",
				]
				break;
			case "landingPage":
				resp.styles = [
					...resp.styles,
					"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
					`${assetsUrl}/templates/landingPage/css/scroll.css`,
					"https://unpkg.com/aos@2.3.1/dist/aos.css",
					"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",	//diff version
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css",
				]
				resp.scripts = [
					...resp.scripts,
					"https://code.jquery.com/jquery-2.2.4.min.js",
					"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js",
					"https://unpkg.com/aos@2.3.1/dist/aos.js",
					`${assetsUrl}/templates/landingPage/js/scroll.js`,
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js",
				]
				break;
			case "agencyGrey":
				resp.styles = [
					...resp.styles,
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css",
					`${assetsUrl}/templates/agencyGrey/vendor/bootstrap/css/bootstrap.min.css`,
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
				]
				resp.scripts = [
					...resp.scripts,
					// Agency Grey all present in corresponding template file
					// "https://code.jquery.com/jquery-1.12.0.min.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js",
					// `${assetsUrl}/templates/agencyGrey/vendor/bootstrap/js/bootstrap.bundle.min.js`,
					// `${assetsUrl}/templates/agencyGrey/vendor/jquery/jquery.min.js`,
					// "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js",	//not available in original
				]
				break;
			case "agencyDark":
				resp.styles = [
					...resp.styles,
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css",
					`${assetsUrl}/templates/agencyDark/vendor/bootstrap/css/bootstrap.min.css`,
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
				]
				resp.scripts = [
					...resp.scripts,
					// Agency Dark all present in corresponding template file
					// "https://code.jquery.com/jquery-1.12.0.min.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js",
					// `${assetsUrl}/templates/agencyGrey/vendor/bootstrap/js/bootstrap.bundle.min.js`,
					// `${assetsUrl}/templates/agencyGrey/vendor/jquery/jquery.min.js`,
				]
				break;
			case "restaurant1":
				resp.styles = [
					...resp.styles,
					"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
					`${assetsUrl}/templates/restaurant1/fonts/stylesheet.css`,
					"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
					"https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css",
					`${assetsUrl}/templates/restaurant1/vendor/bootstrap/css/bootstrap.min.css`,
				]
				resp.scripts = [
					...resp.scripts,
					// `${assetsUrl}/templates/restaurant1/vendor/jquery/jquery.min.js`,
					// `${assetsUrl}/templates/restaurant1/vendor/bootstrap/js/bootstrap.bundle.min.js`,
					// "https://code.jquery.com/ui/1.12.1/jquery-ui.js",
					// "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
				]
				break;
			case "carpentry":
				resp.styles = [
					...resp.styles,
					"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
					`${assetsUrl}/templates/carpentry/fonts/stylesheet.css`,
					`${assetsUrl}/templates/carpentry/css/scroll.css`,
					"https://unpkg.com/aos@2.3.1/dist/aos.css",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
					"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.5/slick.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css",
					"https://www.w3schools.com/w3css/4/w3.css",
					"https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css",
					"https://fonts.gstatic.com",
					"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",
					"https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@600&display=swap",
					"https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400&display=swap",
					"https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@800&display=swap",
					"https://fonts.googleapis.com/css2?family=Roboto&display=swap",
				]
				resp.scripts = [
					...resp.scripts,
					"https://code.jquery.com/jquery-2.2.4.min.js",
					"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
					"https://unpkg.com/aos@2.3.1/dist/aos.js",
					`${assetsUrl}/templates/carpentry/js/scroll.js`,
					"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js",
					"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.5/slick.min.js",
					"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js",
					"https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js",
				]
				break;
			case "event":
				resp.styles = [
					...resp.styles,
					"https://unpkg.com/aos@2.3.1/dist/aos.css",
					"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
					"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
					"https://www.w3schools.com/w3css/4/w3.css",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
					"https://fonts.googleapis.com/icon?family=Material+Icons",
					"https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/owl.carousel.css",
					"https://fonts.gstatic.com",
					"https://fonts.googleapis.com/css2?family=Barlow&display=swap",
					"https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap",
					"https://fonts.googleapis.com/css2?family=Barlow:wght@700&display=swap",
					"https://fonts.googleapis.com/css2?family=Raleway&display=swap",
				]
				resp.scripts = [
					...resp.scripts,
					"https://code.jquery.com/jquery-2.2.4.min.js",
					"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js",
					"https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/owl.carousel.min.js",
					"https://unpkg.com/aos@2.3.1/dist/aos.js",
				]
				break;
			case "musician":
				resp.styles = [
					...resp.styles,
					"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
					"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css",
					"https://fonts.gstatic.com",
					"https://fonts.googleapis.com/css2?family=Barlow:wght@400&display=swap",
					"https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap",
					"https://fonts.googleapis.com/css2?family=Barlow:wght@700&display=swap",
					`${assetsUrl}/templates/musician/fonts/stylesheet.css`,
				]
				// resp.scripts = [
				// 	...resp.scripts,
				// 	"https://code.jquery.com/jquery-2.2.4.min.js",
				// ]
				break;
			case "gym":
				resp.styles = [
					...resp.styles,
					"https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css",
					"https://unpkg.com/aos@2.3.1/dist/aos.css",
					"https://unpkg.com/swiper/swiper-bundle.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css",
					"https://fonts.googleapis.com/icon?family=Material+Icons",
					"https://firebasestorage.googleapis.com/v0/b/personal-1c08e.appspot.com/o/ic_menu.css?alt=media&amp;token=d3e0e883-baca-49e2-8e0d-4c43d1ca59c2",
					"https://fonts.googleapis.com/css?family=Montserrat",
					"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
					"https://fonts.gstatic.com",
					"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400&display=swap",
					`${assetsUrl}/templates/gym/vendor/bootstrap/css/bootstrap.min.css`,
					`${assetsUrl}/templates/gym/Fonts/stylesheet.css`,
					`${stagingUrl}/assets/templates/gym/defaultStyle.css`,
				]
				resp.scripts = [
					...resp.scripts,
					"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js",
					"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js",
					"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
					"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
					"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
					"https://unpkg.com/swiper/swiper-bundle.min.js",
					"https://unpkg.com/aos@2.3.1/dist/aos.js",
					"https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js",
				]
				break;
			case "blog":
				resp.styles = [
					...resp.styles,
					"https://unpkg.com/aos@2.3.1/dist/aos.css",
					"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
					"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css",
					"https://fonts.gstatic.com",
					"https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap",
					"https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap",
					`${assetsUrl}/templates/blog/fonts/stylesheet.css`,
				]
				resp.scripts = [
					...resp.scripts,
					"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
				]
				break;
			default:
				break;
		}
		return resp
	},
	exportConfig: {
		addExportBtn: false,
		btnLabel: "Export ZIP",
		filename: (editor) => "my-site.zip",
		root: () => _grapesEditor.exportConfigData()
	},
	styleSectors: [
		{
			name: "General",
			open: false,
			buildProps: [
				"float",
				"display",
				"position",
				"top",
				"right",
				"left",
				"bottom",
			],
			properties: [
				{
					name: "Alignment",
					property: "float",
					type: "radio",
					defaults: "none",
					list: [
						{
							title: "None",
							value: "none",
							name: `${svg("/assets/cross.svg", {
								width: "11px",
								height: "11px",
							})}`,
						},
						{
							title: "Left",
							value: "left",
							name: `${svg("/assets/floatLeft.svg", {
								width: "20px",
								height: "20px",
							})}`,
						},
						{
							title: "Right",
							value: "right",
							name: `${svg("/assets/floatRight.svg", {
								width: "20px",
								height: "20px",
							})}`,
						},
					],
				},
				{
					name: "Position",
					property: "position",
					type: "select",
					defaults: "static",
					list: [
						{
							name: "Static",
							value: "static",
						},
						{
							name: "Relative",
							value: "relative",
						},
						{
							name: "Absolute",
							value: "absolute",
						},
						{
							name: "fixed",
							value: "fixed",
						},
					],
				},
			],
		},
		{
			name: "Dimension",
			open: false,
			buildProps: [
				"width",
				"height",
				"max-width",
				"max-height",
				"min-width",
				"min-height",
				"margin",
				"padding",
			],
			properties: [
				{
					name: "Margin",
					property: "margin",
					type: "composite",
					properties: [
						{
							name: "Top",
							value: "margin-top",
							units: ["deg", "%", "vh"],
							unit: "deg",
						},
						{
							name: "Bottom",
							value: "margin-bottom",
							units: ["deg", "%", "vh"],
							unit: "deg",
						},
						{
							name: "Left",
							value: "margin-left",
							units: ["deg", "%", "vh"],
							unit: "deg",
						},
						{
							name: "Right",
							value: "margin-right",
							units: ["deg", "%", "vh"],
							unit: "deg",
						},
					],
				},
			],
		},
		{
			name: "Typography",
			open: false,
			buildProps: [
				"font-family",
				"font-size",
				"font-weight",
				"letter-spacing",
				"color",
				"line-height",
				"text-align",
				"text-decoration",
				"text-shadow",
			],
			properties: [
				{
					name: "Font",
					property: "font-family",
				},
				{
					name: "Weight",
					property: "font-weight",
				},
				{
					name: "Letter Spzcing",
					property: "letter-spacing",
				},
				{
					name: "Line Height",
					property: "line-height",
				},
				{
					name: "Decoration",
					property: "text-decoration",
					type: "select",
					list: [
						{
							name: `<h1>None</h1>`,
							value: "none",
						},
						{
							name: "Underline",
							value: "underline",
						},
						{
							name: "Striketrough",
							value: "line-through",
						},
					],
				},
				{
					name: "Shadow",
					value: "text-shadow",
				},
			],
		},
		{
			name: "Decorations",
			open: false,
			buildProps: [
				"opacity",
				"background-color",
				"border-radius",
				"border",
				"box-shadow",
				"background",
			],
			properties: [
				{
					name: "",
					property: "background-color",
				},
				{
					type: "slider",
					property: "opacity",
					defaults: 1,
					step: 0.01,
					max: 1,
					min: 0,
				},
			],
		},
		{
			name: "Extra",
			open: false,
			buildProps: ["perspective", "transition", "transform"],
			properties: [
				{
					name: "Transform",
					property: "transform",
					type: "composite",
					properties: [
						{
							name: "Rotate X",
							functionName: "rotateX",
							defaults: 0,
							type: "slider",
							step: 0.01,
							max: 1,
							min: 0,
							// units: ['deg'],
							unit: "deg",
						},
						{
							name: "Rotate Y",
							functionName: "rotateY",
							defaults: 0,
							type: "slider",
							step: 1,
							min: 0,
							max: 360,
							// units: ['deg'],
							unit: "deg",
						},
						{
							name: "Rotate Z",
							functionName: "rotateZ",
							defaults: 0,
							type: "slider",
							step: 10,
							min: 0,
							max: 100,
							unit: "deg",
						},
						{
							name: "Scale X",
							// property: 'transform-scale-x',
							functionName: "scaleX",
							defaults: 1,
							type: "slider",
							step: 1,
							min: 0,
							max: 360,
						},
						{
							name: "Scale Y",
							// property: 'transform-scale-y',
							functionName: "scaleY",
							defaults: 1,
							type: "slider",
							step: 1,
							min: 0,
							max: 360,
						},
						{
							name: "Scale Z",
							// property: 'transform-scale-z',
							functionName: "scaleZ",
							defaults: 1,
							type: "slider",
							step: 1,
							min: 0,
							max: 360,
						},
					],
				},
			],
		},
		{
			name: "Flex",
			open: false,
			buildProps: [
				"flex-direction",
				"justify-content",
				"align-items",
				"align-self",
			],
			properties: [
				{
					name: "Direction",
					property: "flex-direction",
					type: "radio",
					defaults: "row",
					list: [
						{
							value: "row",
							name: `${svg("/assets/icon.svg")}`,
							// className: 'icons-flex icon-dir-row',
							title: "Row",
						},
						{
							value: "row-reverse",
							name: `${svg("/assets/icon.svg")}`,
							// className: 'icons-flex icon-dir-row-rev',
							title: "Row reverse",
						},
						{
							value: "column",
							name: `${svg("/assets/icon.svg")}`,
							title: "Column",
							// className: 'icons-flex icon-dir-col',
						},
						{
							value: "column-reverse",
							name: `${svg("/assets/icon.svg")}`,
							title: "Column reverse",
							// className: 'icons-flex icon-dir-col-rev',
						},
					],
				},
				{
					name: "Justify",
					property: "justify-content",
					type: "radio",
					defaults: "flex-start",
					list: [
						{
							value: "flex-start",
							name: `${svg("/assets/icon.svg")}`,
							title: "Flex-Start",
						},
						{
							value: "flex-end",
							name: `${svg("/assets/icon.svg")}`,
							title: "Flex-End",
						},
						{
							value: "space-between",
							name: `${svg("/assets/icon.svg")}`,
							title: "Space-Between",
						},
						{
							value: "space-around",
							name: `${svg("/assets/icon.svg")}`,
							title: "Space-Around",
						},
						{
							value: "center",
							name: `${svg("/assets/icon.svg")}`,
							title: "Center",
						},
					],
				},
				{
					name: "Align",
					property: "align-items",
					type: "radio",
					defaults: "center",
					list: [
						{
							value: "flex-start",
							name: `${svg("/assets/icon.svg")}`,
							title: "Flex-Start",
						},
						{
							value: "flex-end",
							name: `${svg("/assets/icon.svg")}`,
							title: "Flex-End",
						},
						{
							value: "stretch",
							name: `${svg("/assets/icon.svg")}`,
							title: "Stretch",
						},
						{
							value: "center",
							name: `${svg("/assets/icon.svg")}`,
							title: "Center",
						},
					],
				},
			],
		},
	],
	config: {
		container: "#grapesEditor",
		height: "100%", 
		// storageManager: { type: "none" },
		// richTextEditor: {
		// 	stylePrefix: 'rte-',
		// 	// If true, moves the toolbar below the element when the top canvas
		// 	// edge is reached
		// 	adjustToolbar: 1,
		// 	// Default RTE actions
		// 	actions: ['bold']
		// },
		// dragMode: 'absolute',
		// parser: {
		// 	parserCss: (css, editor) => [],
		// },
		plugins: [
			//"gjs-blocks-basic",
			//"gjs-preset-webpage",
			(editor) => exportPlugin(editor, _grapesEditor.exportConfig),
			layoutBlocks,
			basicBlocks,
			typography,
			media,
			"grapesjs-lory-slider",
			formBlocks,
			extras,
			prebuiltBlocks,
			formTraits,
			mediaTraits,
			// 'gjs-component-countdown',
			// 'gjs-navbar'
		],
		pluginsOpts: {
			// 'gjs-component-countdown': {
			// 	labelCountdownCategory: 'Prebuilt',
			// 	labelCountdown: `
			// 	${countdown}
			// 	Countdown
			// 	`
			// },
			// 'gjs-navbar': {
			// 	labelNavbarCategory: 'Extras'
			// },
			"grapesjs-lory-slider": {
				sliderBlock: {
					label: `${slider}
					<div>Slider</div>`,
					category: "Basic",
				},
			},
		},
		allowScripts: 1,
		components: `<div style="display: flex; justify-content: center; align-items: center">This is the default Page</div>`,
		panels: {
			appendTo: ".panel__basic-actions",
			defaults: [],
		},
		blockManager: {
			appendTo: "#blocks",
		},
		layerManager: {
			appendTo: "#layer-manager",
			scrollCanvas: { behavior: 'smooth', block: 'nearest' },
			scrollLayers: { behavior: 'auto', block: 'nearest' },
		},
		traitManager: {
			appendTo: ".traits-container",
		},
	},
	pages: [],
	init: (config = {}, dispatch, cb) => {
		let defaultConfig = _grapesEditor.config;
		if (defaultConfig.styleManager)
			defaultConfig.styleManager.sectors = _grapesEditor.styleSectors;
		defaultConfig.canvas = _grapesEditor.canvasConfigData(config.currentTemplate)

		/* Add Prebuilt Section based on Template used */
		console.log( 'Template => ', config.currentTemplate );
		if( config.currentTemplate == 'event' ){
			defaultConfig.plugins.push( event )
		}else if( config.currentTemplate == 'agencyDark' ){
			defaultConfig.plugins.push( agencyDark )
		}else if( config.currentTemplate == 'agencyGrey' ){
			defaultConfig.plugins.push( agencyGrey )
		}else if( config.currentTemplate == 'blog' ){
			defaultConfig.plugins.push( blog )
		}else if( config.currentTemplate == 'carpentry' ){
			defaultConfig.plugins.push( carpentry )
		}else if( config.currentTemplate == 'gym' ){
			defaultConfig.plugins.push( gym )
		}else if( config.currentTemplate == 'landingPage' ){
			defaultConfig.plugins.push( landingPage )
		}else if( config.currentTemplate == 'musician' ){
			defaultConfig.plugins.push( musician )
		}else if( config.currentTemplate == 'restaurant1' ){
			defaultConfig.plugins.push( restaurant1 )
		}else if( config.currentTemplate == 'spa' ){
			defaultConfig.plugins.push( spa )
		}else{
			defaultConfig.plugins.push( therapists )
		} 



		if (config.plugins) {
			config.plugins.push(defaultConfig.plugins);
		}

		_grapesEditor.editor = grapesjs.init({ ...defaultConfig, ...config });
		let editor = _grapesEditor.editor;
		panels(editor, config);

		//fires for every change in the canvas
		// editor.on("component:update", (some) => {
		// 	// do something

		// });
		editor.on("run:preview", () => {
			$("#grapesEditor").addClass("left-pane-preview");
			$(".panel__top").addClass("hide-top");
			$("#style-manager").addClass("hide-top");
			$("#zoom").addClass("hide-top");
			$("#question").addClass("hide-top");
			// Turn off editor on preview
			// editor.DomComponents.getWrapper().onAll(comp => {
			// 		comp.is('text') && comp.set({ editable: false })
			// 		comp.is('link') && comp.set({ editable: false })
			// 		comp.is('textnode') && comp.set({ editable: false })
			// 	}
			// );
			// set zIndex of canvas to 3
			let canvas = document.querySelector(".gjs-cv-canvas")
			canvas.style.zIndex = 9
		});
		editor.on("stop:preview", () => {
			$("#grapesEditor").removeClass("left-pane-preview");
			$(".panel__top").removeClass("hide-top");
			$("#style-manager").removeClass("hide-top");
			$("#zoom").removeClass("hide-top");
			$("#question").removeClass("hide-top");
			// Turn on editor after preview
			// editor.DomComponents.getWrapper().onAll(comp =>
			// 	comp.is('text') && comp.set({ editable: true })
			// );
			// set zIndex of canvas to 1
			const um = editor.UndoManager
			um.undo()
			um.redo()
			let canvas = document.querySelector(".gjs-cv-canvas")
			canvas.style.zIndex = 1
		});
		// editor.DeviceManager.add("mobile", "px");
		// editor.Commands.add("set-device-mobile", {
		// 	run: (editor) => editor.setDevice("mobile"),
		// });
		editor.Commands.add('clear-html', () => {
			editor.DomComponents.clear()
		});
		editor.Commands.add("set-device-mobile", (e) => {
			e.setDevice("Mobile portrait");
		});
		editor.Commands.add("set-device-desktop", (e) => {
			e.setDevice("Desktop");
		});
		editor.DeviceManager.add("tablet", "900px");
		editor.Commands.add("set-device-tablet", {
			run: (editor) => editor.setDevice("tablet"),
		});
		editor.on("modal:open", () => {
			let component = editor.getComponents()//.toHTML();
			//component = JSON.parse(JSON.stringify(component))
			let html = '';
			component.forEach((m) => {
				html += m.toHTML();
			});
		});
		editor.Commands.add("open-assets", {
			run(editor, sender, opts = {}) {
				dispatch(openAssets({ type: "image", imageAssetsTarget: opts.target }));
				// opts.target.set('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg')
			},
		});
		editor.on("canvas:drop", (instance, model) => {
			if (model.attributes && model.attributes.type === "image") {
				// editor.runCommand("open-assets");
			}

			if (model.ccid === "modal-container-2") {
				editor.select(model);
				const component = editor.getSelected();
				component.remove(model);
				alert("cannot add multiple popups on same page");
			}
		});

		editor.on("component:update", () => {
			setTimeout(() => {
				$(".gjs-layer-name").attr("data-toggle-move", "true");
				$(".gjs-layer-move").remove();
				$(".gjs-layer-count").remove();
			}, 110);
		});
		editor.on("run:export-template", () => {
			// =========================View Code===================================
			viewCode()
			// =====================================================================
		})
		let saveSection = 1
		editor.Commands.add("ss-save-section", {
			run(editor) {
				let fromGetSelected = editor.getSelected();
				if (fromGetSelected) {

					let componentCss = editor.CodeManager.getCode(fromGetSelected, "css", {
						cssc: editor.CssComposer,
					});
					let componentHTML = editor.CodeManager.getCode(fromGetSelected, "html", {
						htmlc: editor.HtmlComposer,
					});

					editor.BlockManager.add(`ss-section-${saveSection}`, {
						label: `<div>Section ${saveSection}</div>`,
						category: 'Saved sections',
						content: `${componentHTML} <style> ${componentCss}</style>`,
					});
					saveSection++
				} else {
					alert("please select a section to save")
				}
			}
		})


		//for adding layer manager
		editor.Commands.add("open-siteSeed-layers", {
			run(editor) {
				const lm = editor.LayerManager;
				setTimeout(() => {
					const newPanels = document.getElementById("layer-manager");

					const layers = document.createElement("div");
					layers.appendChild(lm.render());
					newPanels.appendChild(layers);
					$(".gjs-layer-name").attr("data-toggle-move", "true");
					$(".gjs-layer-move").remove();
					$(".gjs-layer-count").remove();
				}, 100);
			},

			stop() {
				const layers = this.layers;
				layers && (layers.style.display = "none");
			},
		});

		//add components manager for savable section
		/*  editor.Commands.add("add-component-manager", {
			run(editor) {
				const bm = editor.BlockManager;
				const blocks = bm.getAll();
				const filtered = blocks.filter(block => {
					return block.get('category').id == 'sections'
				});
				if(filtered) {
					setTimeout(() => {
						const newPanels = document.getElementById("components");
						const components = document.createElement("div");
						components.appendChild(bm.render(filtered, {external : true}));
						newPanels.appendChild(components);
						// const newBlocksEl = bm.render(filtered, { external: true });
						// document.getElementById("components").appendChild(newBlocksEl);
					}, 100);
				}
			},

			stop() {
				let sections = document.getElementById("components").querySelectorAll('div')
				sections.forEach(el => el.remove())
			},
		}); */
		/*   editor.Commands.add("add-block-manager", {
			run(editor) {
				const bm = editor.BlockManager;
				const blocks = bm.getAll();
				const filtered = blocks.filter(
					(block) => block.get("category") !== "Sections"
				);
				setTimeout(() => {
					const newPanels = document.getElementById("blocks");
					const components = document.createElement("div");
					components.appendChild(bm.render());
					newPanels.appendChild(components);
				}, 100);
			},

			stop() {
				const components = this.components;
				components && (components.style.display = "none");
			},
		});   */
		// =======================================Restricting video block to youtube===========================================
		// let domComps = editor.DomComponents;
		// let dType = domComps.getType("video");
		// let dModel = dType.model;
		// const yt = "yt";
		// domComps.addType("video", {
		// 	model: dModel.extend({
		// 		getProviderTrait() {
		// 			return {
		// 				type: "select",
		// 				label: "Provider",
		// 				name: "provider",
		// 				changeProp: 1,
		// 				options: [{ value: yt, name: "Youtube" }],
		// 			};
		// 		},
		// 	}),
		// });
		// =====================================================================================================================

		//init style manager
		styleManager.init({ styleStr: config.styles, dispatch, styleFontStr: config.styleFontStr, customCss: config.customCss });
		if (cb) {
			cb();
		}
	},
	getCode: (options = { html: true, css: true }) => {
		const { html, css } = options;
		return {
			html: html && _grapesEditor.editor.getHtml(),
			css: css && _grapesEditor.editor.getCss(),
		};
	},
	extractHtmlCode: (options) => {
		let { start, end, tag } = options;
		if (tag) {
			start = `<${tag}`;
			end = `</${tag}>`;
		}
		const { editor } = _grapesEditor;
		let html = `${editor.getHtml()}`;
		const startIndex = html.search(start);
		const endIndex = html.search(end) + end.length;
		if (startIndex === -1 || endIndex === -1)
			return {
				error: true,
				message: tag
					? `Please add '${tag}' tag, to export correctly`
					: `Please add '${start + "' and '" + end
					}' identifer, to export correctly`,
			};
		let header = html.substring(startIndex, endIndex);
		return {
			error: false,
			message: "Extracted Content Successfully",
			data: header,
		};
	},
	addBlock: (name, config) => {
		if (!config || !name || name === "") {
			return;
		}
		let blockManager = _grapesEditor.editor.BlockManager;
		blockManager.add(name, config);
	},
	getTags: () => {
		let scripts = _grapesEditor.config.canvas.scripts
		let styles = _grapesEditor.config.canvas.styles
		let tags = ""
		for (let i = 0; i < scripts.length; i++) {
			tags += `<script type="text/javascript" src="${scripts[i]}"></script>`
		}
		for (let i = 0; i < styles.length; i++) {
			tags += `<link href="${styles[i]}" rel="stylesheet"></link>`
		}
		return tags
	}
};

export default _grapesEditor;
