import _ from "lodash";
import { addStaticContent, showToast, staticJSONContent, uploadSiteJSONObj } from "../../../components/utils";
import _grapesEditor from "../../../components/utils/grapesEditor";
import _s3 from "../../../components/utils/s3";
import { hideLoader, showLoader } from "../../../reducers/actions";
import { setCurrentBuilderTemplateData } from "../../../reducers/actions/userActions";
import Request from "../../../request";
import { store } from "../../../store";
import {
	clean,
	code,
	desktop,
	download,
	ipad,
	mobile,
	redo,
	undo,
	play,
	logo,
	share,
	viewMode,
} from "./icons";

const cmdImport = "gjs-open-import-webpage",
	cmdDeviceDesktop = "set-device-desktop",
	cmdDeviceTablet = "set-device-tablet",
	cmdDeviceMobile = "set-device-mobile",
	cmdClear = "clear-html";

export default (editor, config) => {
	const pn = editor.Panels;
	const eConfig = editor.getConfig();
	const commands = editor.Commands;
	const crc = "create-comp";
	const mvc = "move-comp";
	const swv = "sw-visibility";
	const expt = "export-template";
	const osm = "open-sm";
	const otm = "open-tm";
	const ola = "open-layers";
	const obl = "open-blocks";
	const ful = "fullscreen";
	const prv = "preview";

	eConfig.showDevices = 0;

	pn.getPanels().reset([
		{
			id: "commands",
			el: ".panel__devices",
			buttons: [
				{
					id: "undo",
					//className: "fa fa-undo",
					// command: (e) => e.runCommand("core:undo"),
					command: (e) => e.runCommand("ss-undo"),
					label: `<div class="tooltip"><div><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.25 4.84375L3.4375 7.65624L6.25 10.4688V8.12505H12.8125C14.3787 8.12505 15.625 9.37129 15.625 10.9375C15.625 12.5038 14.3787 13.75 12.8125 13.75H10V14.6875H12.8125C14.8819 14.6875 16.5625 13.0069 16.5625 10.9375C16.5625 8.86814 14.8819 7.18754 12.8125 7.18754H6.25V4.84375Z" fill="#C0C0C0"/>
					</svg></div>
          <span class="tooltiptext">Undo</span>
        </div>`,
				},
				{
					id: "redo",
					//className: "fa fa-repeat",
					command: (e) => (e.runCommand("ss-redo")),
					label: `<div class="tooltip"><div><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.75 4.84375L16.5625 7.65624L13.75 10.4688V8.12505H7.1875C5.62127 8.12505 4.375 9.37129 4.375 10.9375C4.375 12.5038 5.62127 13.75 7.1875 13.75H10V14.6875H7.1875C5.11811 14.6875 3.4375 13.0069 3.4375 10.9375C3.4375 8.86814 5.11811 7.18754 7.1875 7.18754H13.75V4.84375Z" fill="#C0C0C0"/>
					</svg></img></div>
          <span class="tooltiptext">Redo</span>
        </div>`,
				},
				{
					//id: expt,
					//className: "fa fa-code",
					command: (e) => e.runCommand(expt),
					label: `<div class="tooltip"><div><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.8994 6.29102L11.1571 7.03337L14.1232 9.99947L11.1571 12.9659L11.8994 13.7082L15.6083 9.99947L11.8994 6.29102ZM8.10081 6.29117L4.39191 9.99992L8.10081 13.7085L8.84316 12.9662L5.87706 9.99992L8.84316 7.03367L8.10081 6.29117Z" fill="#C0C0C0"/>
					</svg></img></<div>
          <span class="tooltiptext" style="left: -65%">View Code</span>
        </div>`,
				},
				{
					id: cmdClear,
					//className: "fa fa-trash",
					label: `<div class="tooltip"><div><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.0567 14.237C10.3261 14.237 10.5866 14.1324 10.7722 13.9494L16.3763 8.4297C16.7634 8.04627 16.7634 7.42406 16.3763 7.04062L12.9061 3.6141C12.7259 3.43633 12.4672 3.3335 12.1977 3.3335C11.9283 3.3335 11.6696 3.43633 11.4894 3.6141L5.88535 9.13383C5.63199 9.38481 5.53565 9.74733 5.62843 10.0872L3.68546 12.0044C3.21623 12.4645 3.21623 13.2104 3.68368 13.6706L5.52316 15.4849C5.74618 15.7063 6.05484 15.8335 6.37242 15.8335H14.4975C14.5279 15.8335 14.5511 15.8108 14.5511 15.7812V15.2636C14.5511 15.2339 14.5279 15.2113 14.4975 15.2113H8.79176L9.81231 14.2074C9.89081 14.2266 9.97288 14.237 10.0567 14.237ZM7.66595 15.2113H6.37242C6.22434 15.2113 6.08161 15.152 5.97634 15.0475L4.13508 13.2314C3.91384 13.0135 3.91384 12.6597 4.13686 12.4436L5.98348 10.6205L9.26635 13.8623L8.06025 15.0492C7.95677 15.152 7.81225 15.2113 7.66595 15.2113ZM15.9231 7.99224L10.3208 13.512C10.2548 13.5765 10.162 13.6131 10.0639 13.6131C9.96575 13.6131 9.87297 13.5765 9.80695 13.512L6.33674 10.0872C6.19222 9.94427 6.19222 9.71421 6.33674 9.5713L11.9408 4.05157C12.0104 3.98359 12.1014 3.94699 12.196 3.94699C12.2923 3.94699 12.3833 3.98359 12.4529 4.05157L15.9231 7.47634C16.0676 7.61926 16.0676 7.84932 15.9231 7.99224Z" fill="#C0C0C0"/>
					</svg></div><span class="tooltiptext">Erase</span>
          </div>`,
					command: (e) => e.runCommand(cmdClear),
				},
				{
					id: cmdImport,
					//className: "fa fa-download",
					command: async (e) => {
						const dispatch = store.dispatch
						const storeState = store.getState()
						const currentBuilderTemplateId = storeState.global.currentBuilderTemplateId
						const { templates } = await Request.getTemplates()
						if (templates) {
							const templateItem = templates.find(item => item.template_id == currentBuilderTemplateId)
							dispatch(setCurrentBuilderTemplateData(templateItem))
						}
						e.runCommand("gjs-export-zip")
					},
					label: `<div class="tooltip"><div><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5371 8.10901L13.0881 8.70084L9.82282 11.66L6.55752 8.70084L7.10854 8.10901L9.41466 10.1906V3.3335H10.231V10.1906L12.5371 8.10901ZM15.4966 14.8369V11.5103H16.3129V15.6532H3.33331V11.5103H4.14964V14.8369H15.4966Z" fill="#C0C0C0"/>
					</svg></div>
          <span class="tooltiptext" style="left: -65%">Download</span>
        </div>`,
				},
				// 		{
				// 			id: "view-mode",
				// 			//className: "fa fa-download",
				// 			label: `<div class="tooltip"><div><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				// 			<path d="M16.1562 2.75H5.84375C4.09062 2.75 2.75 4.09062 2.75 5.84375V16.1562C2.75 17.9094 4.09062 19.25 5.84375 19.25H16.1562C17.9094 19.25 19.25 17.9094 19.25 16.1562V5.84375C19.25 4.09062 17.9094 2.75 16.1562 2.75ZM18.2188 5.84375V13.0625H11.5156V3.78125H16.1562C17.2906 3.78125 18.2188 4.70938 18.2188 5.84375ZM5.84375 3.78125H10.4844V7.90625H3.78125V5.84375C3.78125 4.70938 4.70938 3.78125 5.84375 3.78125ZM3.78125 16.1562V8.9375H10.4844V18.2188H5.84375C4.70938 18.2188 3.78125 17.2906 3.78125 16.1562ZM16.1562 18.2188H11.5156V14.0938H18.2188V16.1562C18.2188 17.2906 17.2906 18.2188 16.1562 18.2188Z" fill="#C0C0C0"/>
				// 			</svg></div>
				//   <span class="tooltiptext" >View</span>
				// </div>`,
				// 		},
			],
		},
		{
			id: "options",
			el: ".panel__basic-actions",
			buttons: [
				// 		{
				// 			id: "share",
				// 			//context: prv,
				// 			//command: (e) => e.runCommand(prv),
				// 			//className: "fa fa-eye",
				// 			label: `<div class="tooltip"><div><svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				// 			<path d="M17.7066 11.9303C17.7117 11.8215 17.7147 11.7123 17.7147 11.6042C17.7138 10.2673 17.3165 8.96062 16.573 7.84946C15.8295 6.73829 14.7733 5.8725 13.5379 5.36153C13.5379 5.34873 13.5379 5.33627 13.5379 5.32313C13.5379 4.64069 13.2668 3.98621 12.7842 3.50365C12.3017 3.0211 11.6472 2.75 10.9648 2.75C10.2823 2.75 9.62784 3.0211 9.14528 3.50365C8.66273 3.98621 8.39163 4.64069 8.39163 5.32313C8.39163 5.33458 8.39163 5.34603 8.39163 5.35681C7.15451 5.86729 6.09674 6.73348 5.35234 7.84564C4.60794 8.95781 4.2104 10.2659 4.21008 11.6042C4.21008 11.7214 4.21311 11.84 4.21918 11.9579C3.91396 12.1028 3.64028 12.3065 3.41377 12.5572C3.18725 12.808 3.01234 13.1008 2.89902 13.4192C2.7857 13.7375 2.73618 14.075 2.75331 14.4125C2.77043 14.7499 2.85385 15.0807 2.9988 15.3859C3.14376 15.6911 3.34741 15.9648 3.59814 16.1913C3.84886 16.4178 4.14175 16.5928 4.46007 16.7061C4.77839 16.8194 5.11592 16.8689 5.45338 16.8518C5.79083 16.8347 6.12162 16.7513 6.42683 16.6063C7.67271 17.7368 9.2958 18.3613 10.9781 18.3576C12.6604 18.3538 14.2807 17.7221 15.5215 16.5861C15.8286 16.7405 16.1634 16.8319 16.5063 16.8547C16.8492 16.8776 17.1932 16.8316 17.518 16.7193C17.8428 16.607 18.1418 16.4308 18.3974 16.2011C18.6529 15.9713 18.8599 15.6927 19.006 15.3816C19.1521 15.0706 19.2344 14.7334 19.248 14.39C19.2616 14.0466 19.2063 13.704 19.0853 13.3823C18.9643 13.0607 18.7801 12.7665 18.5435 12.5172C18.307 12.268 18.0229 12.0686 17.708 11.9309L17.7066 11.9303ZM10.9664 3.69316C11.2888 3.69316 11.604 3.78875 11.872 3.96786C12.1401 4.14696 12.349 4.40153 12.4723 4.69937C12.5957 4.9972 12.628 5.32494 12.5651 5.64112C12.5022 5.95731 12.347 6.24774 12.119 6.4757C11.8911 6.70365 11.6006 6.85889 11.2844 6.92178C10.9683 6.98468 10.6405 6.9524 10.3427 6.82903C10.0448 6.70566 9.79027 6.49674 9.61117 6.22869C9.43207 5.96065 9.33647 5.64551 9.33647 5.32313C9.337 4.891 9.5089 4.47672 9.81447 4.17115C10.12 3.86559 10.5343 3.69369 10.9664 3.69316ZM3.68394 14.2861C3.68394 13.9638 3.77953 13.6486 3.95864 13.3806C4.13774 13.1125 4.39231 12.9036 4.69015 12.7802C4.98799 12.6569 5.31572 12.6246 5.6319 12.6875C5.94809 12.7504 6.23852 12.9056 6.46648 13.1336C6.69443 13.3615 6.84967 13.652 6.91257 13.9681C6.97546 14.2843 6.94318 14.6121 6.81981 14.9099C6.69644 15.2077 6.48752 15.4623 6.21948 15.6414C5.95143 15.8205 5.63629 15.9161 5.31391 15.9161C4.88178 15.9156 4.4675 15.7437 4.16194 15.4381C3.85637 15.1325 3.68447 14.7183 3.68394 14.2861ZM7.20224 16.032C7.5423 15.6649 7.76787 15.2066 7.85131 14.7132C7.93474 14.2198 7.8724 13.7128 7.67195 13.2543C7.47149 12.7958 7.14162 12.4058 6.72277 12.132C6.30393 11.8583 5.8143 11.7126 5.31391 11.713C5.26035 11.713 5.20747 11.715 5.15459 11.7184C5.15459 11.6803 5.15459 11.6423 5.15459 11.6042C5.15515 10.4836 5.47939 9.3871 6.0883 8.44641C6.69722 7.50573 7.56489 6.76096 8.587 6.30165C8.78071 6.77315 9.11013 7.17647 9.53345 7.46042C9.95677 7.74437 10.4549 7.89616 10.9646 7.89652C11.4744 7.89688 11.9727 7.7458 12.3965 7.46245C12.8202 7.17909 13.1502 6.77624 13.3445 6.30502C14.365 6.76497 15.2311 7.50959 15.8389 8.44954C16.4468 9.3895 16.7705 10.4849 16.7712 11.6042C16.7712 11.6413 16.7712 11.6783 16.7712 11.7154C16.7375 11.7154 16.7069 11.713 16.6742 11.713C16.1773 11.7126 15.6909 11.8563 15.2739 12.1265C14.8569 12.3968 14.5271 12.7821 14.3244 13.2358C14.1218 13.6895 14.0549 14.1923 14.132 14.6832C14.209 15.1741 14.4267 15.6322 14.7586 16.002C13.7098 16.9074 12.372 17.408 10.9865 17.4135C9.60098 17.419 8.25917 16.929 7.20325 16.032H7.20224ZM16.6729 15.9164C16.3505 15.9164 16.0354 15.8209 15.7673 15.6418C15.4993 15.4627 15.2904 15.2081 15.167 14.9103C15.0436 14.6125 15.0113 14.2848 15.0742 13.9686C15.1371 13.6524 15.2923 13.362 15.5202 13.134C15.7481 12.9061 16.0385 12.7508 16.3547 12.6879C16.6708 12.6249 16.9986 12.6572 17.2964 12.7805C17.5942 12.9038 17.8488 13.1127 18.028 13.3807C18.2071 13.6487 18.3028 13.9638 18.3028 14.2861C18.3023 14.7183 18.1304 15.1325 17.8248 15.4381C17.5193 15.7437 17.105 15.9156 16.6729 15.9161V15.9164Z" fill="#C0C0C0"/>
				// 			</svg></div>
				//   <span class="tooltiptext">Share</span>
				// </div>`,
				// 		},
				// 		{
				// 			//id: prv,
				// 			context: prv,
				// 			command: (e) => {
				// 				// addStaticContent()
				// 				e.runCommand(prv)
				// 			},
				// 			//className: "fa fa-eye",
				// 			label: `<div class="tooltip"><div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				// 			<path d="M8.74446 16.7737C8.9808 16.9201 9.22895 17 9.47711 17C9.73708 17 9.99705 16.9201 10.2334 16.7604L15.2674 13.4332C15.7282 13.1271 16 12.5948 16 11.9959C16 11.397 15.7282 10.8646 15.2674 10.5585L10.2334 7.23127C9.77253 6.92517 9.21713 6.92517 8.74446 7.21796C8.27179 7.52407 8 8.05642 8 8.66863V15.3231C8 15.9353 8.2836 16.481 8.74446 16.7737ZM8.94535 8.66863C8.94535 8.34922 9.13442 8.18951 9.21713 8.13627C9.2644 8.10966 9.35894 8.05642 9.48892 8.05642C9.57164 8.05642 9.66617 8.08304 9.76071 8.13627L14.7947 11.4635C15.031 11.6232 15.0547 11.8761 15.0547 11.9825C15.0547 12.089 15.031 12.3419 14.7947 12.5016L9.76071 15.8554C9.51256 16.0151 9.29985 15.9087 9.21713 15.8554C9.13442 15.8022 8.94535 15.6425 8.94535 15.3231V8.66863Z" fill="#C0C0C0"/>
				// 			</svg></div>
				//   <span class="tooltiptext">Preview</span>
				// </div>`,
				// 		},
				{
					id: "publish",
					//className: "fa fa-trash",
					label: `<button type="button" class="publish">Publish Now</button>`,
					command: async (e) => {
						// e.runCommand(cmdClear)
						let frame = document.getElementsByClassName("gjs-frame")
						const doc = frame[0].contentWindow.document
						let nav = doc.querySelector("nav")
						if (!nav) nav = doc.querySelector("navbar")
						let items = null
						let itemLi = null
						let itemUl = null
						const dispatch = store.dispatch
						const storeState = store.getState()
						const currentBuilderSiteId = storeState.global.currentBuilderSiteId
						const pagesStore = storeState.pageReducer
						const currentUser = storeState.global.currentUser
						const s3Dir = storeState.global.userS3Dir
						const pageManager = pagesStore.pages
						let templateName = storeState.templates.currentTemplate
						const currentBuilderTemplateId = storeState.global.currentBuilderTemplateId
						const { templates } = await Request.getTemplates()
						if (templates) {
							const templateItem = templates.find(item => item.template_id == currentBuilderTemplateId)
							dispatch(setCurrentBuilderTemplateData(templateItem))
						}
						let headerJSON = [
							// {
							// 	menuItems: {
							// 		menu_name: 'Home',
							// 		menu_link: '#home',
							// 		menu_li_class: "home-li",
							// 		menu_a_class: "home-a"
							// 		// selector: 'nav .navbar-nav nav-item.cool-link nav-link.nav-link-1.ss-nav-item'
							// 	},
							// 	ul_class: "navbar-nav",
							// 	li_calss: "nav-item cool-link",
							// 	a_class: "nav-link nav-link-1",
							// }
						]
						if (nav) {
							items = nav.querySelectorAll(".ss-nav-item")
							itemLi = nav.querySelectorAll(".ss-nav-li")
							itemUl = nav.querySelector(".ss-nav-ul")
							items && items.length && [...items].map((item, key) => {
								headerJSON.push({
									menuItems: {
										menu_name: (item.innerText == '') ? item.innerHTML : item.innerText,
										menu_link: (item.getAttribute('href'))[0] == '#' ? '/' + item.getAttribute('href') : item.getAttribute('href'),
										menu_li_class: (itemLi && itemLi.length && itemLi[key]) ? [...itemLi[key].classList].join(" ") : false,
										menu_a_class: [...item.classList].join(" ")
										// selector: 'nav .navbar-nav nav-item.cool-link nav-link.nav-link-1.ss-nav-item'
									},
									ul_class: itemUl ? [...itemUl.classList].join(" ") : false,
									// li_class: "nav-item cool-link",
									// a_class: "nav-link nav-link-1",
								})
							})
						}

						let socialJSON = [
							// {
							// 	menuItems: {
							// 		menu_name: 'Facebook',	//optional
							// 		menu_link: 'facebook.com',
							// 		// selector: 'nav .navbar-nav nav-item.cool-link nav-link.nav-link-1.ss-nav-item',
							// 		menu_icon: "<img src='https://siteseed-dev.s3.ap-south-1.amazonaws.com/templates/spa/images/fb-B.png'>",
							// 		menu_li_class: "home-li ss-social-li",
							// 		menu_a_class: "home-a ss-social-item",
							// 	},
							// 	ul_class: "right-col ss-social-ul",
							// 	li_class: "B-footer-1",
							// 	a_class: "hom",
							// }
						]
						itemUl = doc.querySelector(".ss-social-ul")
						if (itemUl) {
							itemLi = itemUl.querySelectorAll(".ss-social-li")
							items = itemUl.querySelectorAll(".ss-social-item")
							items && items.length && [...items].map((item, key) => {
								let obj = {
									menuItems: {
										// menu_name: item.innerText,
										menu_link: item.getAttribute('href') ? ((item.getAttribute('href'))[0] == '#' ? '/' + item.getAttribute('href') : item.getAttribute('href')) : '/',
										menu_li_class: (itemLi && itemLi.length && itemLi[key]) ? ([...itemLi[key].classList].join(" ")).replace('ss-social-item', '') : false,
										menu_a_class: ([...item.classList].join(" ")).replace('ss-social-li', '')
										// selector: 'nav .navbar-nav nav-item.cool-link nav-link.nav-link-1.ss-nav-item'
									},
									ul_class: itemUl ? [...itemUl.classList].join(" ") : false,
									// li_class: "nav-item cool-link",
									// a_class: "nav-link nav-link-1",
								}
								if (_.toLower(item.children[0].tagName) == 'img') {
									obj.menuItems = {
										...obj.menuItems,
										menu_icon: item.innerHTML,
									}
								} else if ((item.children[0] && item.children[0].classList.contains('fa'))) {
									obj.menuItems = {
										...obj.menuItems,
										menu_icon: item.innerHTML,
									}
								} else if ((item.children[0] && item.children[0].getAttribute('export-type') == 'menu-icon')) {
									obj.menuItems = {
										...obj.menuItems,
										menu_icon: item.innerHTML,
									}
								} else {
									obj.menuItems = {
										...obj.menuItems,
										menu_name: item.innerText,
									}
								}
								socialJSON.push(obj)
							})
						}

						let footerJSON = [
							// {
							// 	menuItems: {
							// 		menu_name: 'Home',
							// 		menu_link: '#home',
							// 		// selector: 'nav .navbar-nav nav-item.cool-link nav-link.nav-link-1.ss-nav-item'
							// 		menu_li_class: "home-li",
							// 		menu_a_class: "home-a",
							// 	},
							// 	ul_class: "left-col",
							// 	li_class: "B-footer",
							// 	a_class: "",
							// }
						]
						itemUl = doc.querySelector(".ss-footer-ul")
						if (itemUl) {
							itemLi = itemUl.querySelectorAll(".ss-footer-li")
							items = itemUl.querySelectorAll(".ss-footer-item")
							items && items.length && [...items].map((item, key) => {
								footerJSON.push({
									menuItems: {
										menu_name: item.innerText,
										menu_link: (item.getAttribute('href'))[0] == '#' ? '/' + item.getAttribute('href') : item.getAttribute('href'),
										menu_li_class: (itemLi && itemLi.length && itemLi[key]) ? [...itemLi[key].classList].join(" ") : false,
										menu_a_class: [...item.classList].join(" ")
										// selector: 'nav .navbar-nav nav-item.cool-link nav-link.nav-link-1.ss-nav-item'
									},
									ul_class: itemUl ? [...itemUl.classList].join(" ") : false,
									// li_class: "nav-item cool-link",
									// a_class: "nav-link nav-link-1",
								})
							})
						}

						// save in assets.json
						let siteContent = {}
						const extractExportContent = (obj) => {
							if (!obj) {
								return {}
							}
							let resp = {}
							_.forEach(obj, (content, key) => {
								if (/\.html|\.css/.test(key)) {
									resp[key] = content()
								} else {
									resp[key] = extractExportContent(content)
								}
							})
							return resp
						}
						const exportContent = _grapesEditor.exportConfigData()
						siteContent = extractExportContent(exportContent)
						const staticJSON = staticJSONContent(templateName)
						uploadSiteJSONObj({ ...staticJSON, headerJSON, socialJSON, footerJSON, pageManager, ...siteContent }, currentBuilderSiteId)

						// Create backup of current version
						let newPrefix = `${s3Dir}/sites/${currentBuilderSiteId}/backups/${Date.now()}-${'automatic'}`
						_s3.listFiles({ Prefix: `${s3Dir}/sites/${currentBuilderSiteId}/backups/`, Delimiter: '/' }, async (apiRequest) => {
							dispatch(showLoader())
							if (apiRequest.error || !apiRequest.data || !apiRequest.data.CommonPrefixes) {
								showToast({ type: 'error', message: 'Unable to create backup, Try again after a while!' })
								dispatch(hideLoader())
								return
							}
							if (apiRequest.data.CommonPrefixes.length == 0) {
								newPrefix += '-original'
							}
							await _s3.copyFiles({
								oldPrefix: `${s3Dir}/sites/${currentBuilderSiteId}`,
								newPrefix,
								blockList: ['publish/', 'backups/']
							})
							dispatch(hideLoader())
							showToast({ type: 'success', message: 'Backup Created Successfuly' })
						})

						// Upload content to s3 publish folder and calling the backend deploy api
						addStaticContent(exportContent, { s3Dir, dispatch, pagesStore, currentUser, projectId: currentBuilderSiteId, isPublish: true }).then(() => {
							let data = {
								site_id: currentBuilderSiteId,
								s3_folder_path: `${s3Dir}/sites/${currentBuilderSiteId}/publish`
							}
							let formData = new FormData()
							_.each(data, (val, key) => {
								formData.append(key, val)
							})
							Request.uploadToHosting(formData).then((apiRequest) => {
								console.log(apiRequest, 'sss.p')
							})
						})
					},
				},
			],
		},
	]);

	const openBl = pn.getButton("views", obl);
	editor.on("load", () => openBl && openBl.set("active", 1));

	// On component change show the Style Manager
	config.showStylesOnChange &&
		editor.on("component:selected", () => {
			const openSmBtn = pn.getButton("views", osm);
			const openLayersBtn = pn.getButton("views", ola);

			// Don't switch when the Layer Manager is on or
			// there is no selected component
			if (
				(!openLayersBtn || !openLayersBtn.get("active")) &&
				editor.getSelected()
			) {
				openSmBtn && openSmBtn.set("active", 1);
			}
		});
};
