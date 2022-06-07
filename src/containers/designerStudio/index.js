import React from "react";
import _ from 'lodash'
import Async from 'async'
import { connect } from "react-redux";
//import grapesjs from "grapesjs"
import { Debounce } from "lodash-decorators/debounce";

import "./index.scss";
import Request from '../../request'
import _grapesEditor from "../../components/utils/grapesEditor";
import StylePanel from "./stylePanel/index";
import AssetsManager from './assetsManager'
import { undoOnce, redoOnce, setHistoryStatus, undoTimes, redoTimes } from "../../reducers/actions/editorHistoryActions";
import { setGoogleFonts } from "../../reducers/actions/editor"
import { setLocalFonts, updateAssets } from '../../reducers/actions/userActions'
import { saveChanges } from "../../reducers/actions/pageActions";
import { closestElement, showToast } from "../../components/utils/index";
import { setCustomCss } from "../../reducers/actions/templateActions";

// Templates =========================================================================
import therapists from "../../assets/templates/therapists";
import landingPageTemplate from "../../assets/templates/landingPage";
import agencyGreyTemplate from "../../assets/templates/agencyGrey";
import agencyDarkTemplate from "../../assets/templates/agencyDark";
import restaurant1 from "../../assets/templates/restaurant1";
import carpentry from "../../assets/templates/carpentry";
import spa from "../../assets/templates/spa";
import event from "../../assets/templates/event";
import musician from "../../assets/templates/musician";
import blog from "../../assets/templates/blog";
// ===================================================================================

import {
	question,
	minus as Minus,
	plus as Plus,
	PlayTuts,
	Speaker,
	Keyboard,
	People,
	Chat,
	tip as Tip,
} from "../designerStudio/panels/icons";
import $ from "jquery";
import LeftBlock from "./leftblock/LeftBlock";
import TopPanel from "./toppanel/TopPanel";
import assetsManager from "./assetsManager";
import { customEvents } from "../../components/utils/grapesEditor/styleManager";
import { selectTemplate } from "../../reducers/actions/templateActions";
import attachIconsToElem from '../../components/utils/grapesEditor/elementIcons'
import viewCode from "../../components/utils/grapesEditor/viewCode/viewCode";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CanvasActions from "./canvasActions";
import { getPushPathWrapper } from "../../routes";
import _s3 from "../../components/utils/s3";
import { assetsUrl } from "../../settings";
import isImageUrl from "is-image-url";
import gym from "../../assets/templates/gym";


class HelpNSupport extends React.Component {
	state = {
		dropDown: false,
	}
	render() {
		const { dropDown } = this.state
		return (
			<div id='question'>
				{
					dropDown && (
						<>
							<div id='help-support'>
								<div>
									<PlayTuts style={{ height: '20px', width: '20px' }} />
									How it works
								</div>
								<div>
									<Speaker style={{ height: '20px', width: '20px' }} />
									What's new
								</div>
								<div>
									<Keyboard style={{ height: '20px', width: '20px' }} />
									Shortcuts
								</div>
								<div>
									<People style={{ height: '20px', width: '20px' }} />
									Comunity Forums
								</div>
								<div>
									<Chat style={{ height: '20px', width: '20px' }} />
									Support
								</div>
								<Tip
									width='15px'
									height='9px'
									className='help-tip'
									style={{
										display: 'block',
									}}
								/>
							</div>
							<div className={'help-support-backdrop'} onClick={() => { this.setState({ dropDown: !dropDown }) }}></div>
						</>
					)
				}
				<img src={question} alt='question-mark' onClick={() => { this.setState({ dropDown: !dropDown }) }}></img>
			</div>
		)
	}
}

const initialState = {
	zoom: 100,
	key: 0,
	selected: {
		node: null,
		styleInfo: {},
	},
	gjsSelected: null,
};

class DesignerStudio extends React.Component {
	state = initialState;

    styleArray = [
        {
            type: "text/css",
			innerHTML: `
				.zsiq_theme1.zsiq_floatmain {
				  display: none !important;
				}			
			`
        },
    ]
	componentDidMount() {
		let { currentUser, dispatch, assets, currentBuilderSiteId } = this.props
		// this.loadScriptNStyle()
		if (!currentBuilderSiteId) {
			showToast({ type: 'error', message: 'Unable to find associated site, please try again!' })
			// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Uncomment once handled all templates ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			// dispatch(getPushPathWrapper('dashboard'))
			// return
			// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		}
		this.addCloseEvent()
		if (currentUser) {
			// initialise different settings.....
			if (currentUser.assets && currentUser.assets.image) {
				assets.image.push(currentUser.assets.image)
				dispatch(updateAssets(assets))
			}
		}

		// get pageManager variable from location
		this.setState({ pageManager: this.props.location.state && this.props.location.state.pageManager }, () => {
			this.apiRequest();
		})

		//window.addEventListener("scroll", this.handleScroll, true);
		// get google api fonts
		this.setGoogleFonts()
		setTimeout(() => {
			// this.setScrollBarStyle()
			// this.temp();
		}, 5000);
	}
    loadScriptNStyle = () => {
        const { scriptArray, styleArray } = this
        styleArray.forEach(styleData => {
            let elem = document.createElement("style")
            _.each(styleData, (val, key) => {
                elem[key] = val
            })
            elem.id = 'ss-styles-load'
            document.head.appendChild(elem)
        })

        // scriptArray.forEach(scriptData => {
        //     let elem = document.createElement("script")
        //     _.each(scriptData, (val, key) => {
        //         elem[key] = val
        //     })
        //     elem.id = 'ss-script-load'
        //     document.body.appendChild(elem)
        // })
    }
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.theme != this.props.theme) {
			this.setScrollBarStyle()
		}
		if (prevState.gjsSelected != this.state.gjsSelected) {
			if (!this.state.gjsSelected) {
				this.setSettingsMessage('show')
				return
			}
			this.setSettingsMessage('hide')
		}
	}
    componentWillUnmount() {
        document.querySelectorAll('#ss-script-load').forEach(e => e.remove())
        document.querySelectorAll('#ss-styles-load').forEach(e => e.remove())
    }
	addCloseEvent = () => {
		window.addEventListener("beforeunload", function (event) {
			// send data to backend before we leave page!!!!

			// =============================================
		})
	}
	setScrollBarStyle = () => {
		const { theme } = this.props
		let frame = document.getElementsByClassName("gjs-frame")
		let doc = frame[0].contentWindow.document
		let styleElem = doc.querySelector('body > style')
		let newStyleElem = doc.querySelector('#ss-scrollbar-style')
		if (!newStyleElem) {
			newStyleElem = doc.createElement('style')
			newStyleElem.id = 'ss-scrollbar-style'
			styleElem.parentNode.insertBefore(newStyleElem, styleElem.nextSibling);
		}
		let stringDark = styleElem.innerHTML
		let stringLight = styleElem.innerHTML
		stringDark += `
		
			* {
  				scrollbar-width: thin;
  				scrollbar-color: #6a6a6a #272727;
			}
			* ::-webkit-scrollbar {
				width: 6px;
				height: 0px;
			}

			* ::-webkit-scrollbar-track {
				background-color: #272727;
			}

			* ::-webkit-scrollbar-thumb {
				border-radius: 150px;
				background-color: #6a6a6a;
			}
		`

		stringLight += `
		
			body {
  				scrollbar-width: thin;
  				scrollbar-color: #6a6a6a #272727;
			}
			* ::-webkit-scrollbar {
				width: 6px;
				height: 0px;
			}

			* ::-webkit-scrollbar-track {
				background-color: #e6e6e6;
			}

			* ::-webkit-scrollbar-thumb {
				border-radius: 150px;
				background-color: #c0c0c0;
			}
		`

		if (theme == 'light') {
			newStyleElem.innerHTML = stringLight
			return
		}
		newStyleElem.innerHTML = stringDark
	}
	setGoogleFonts = async () => {
		const { dispatch } = this.props
		const googleApiReq = await Request.getGoogleFonts()
		if (googleApiReq.error) {
			return
		}
		dispatch(setGoogleFonts(googleApiReq.items))
	}
	setSettingsMessage = (action) => {
		// let frame = document.getElementsByClassName("gjs-frame")
		// let doc = frame[0].contentWindow.document
		// let settingsMessage = doc.querySelector('.setting-message')
		let styleManager = document.querySelector('#style-manager')
		if (action == 'hide') {
			styleManager.classList.add('hideSettingsMessage')
		} else {
			styleManager.classList.remove('hideSettingsMessage')
		}
	}
	handleScroll = (e) => {
		if (e.target.classList && e.target.classList.contains("on-scrollbar") === false) {
			e.target.classList.add("on-scrollbar");
			//wait
			setTimeout(() => {
				e.target.classList.remove("on-scrollbar");
			}, 1000);
		}
	};

	handleAddImage = (value) => {
		const { assets, dispatch } = this.props
		if (value == '' || !isImageUrl(value)) {
			return
		}
		const find = assets.image.find((v) => v == value)
		if (find) {
			return
		}
		assets.image.push(value)
		dispatch(updateAssets(assets))
	}
	handleAddFont = (fontObj) => {
		let { dispatch, localFonts } = this.props
		const find = localFonts.find((obj) => obj.url == fontObj.url)
		if (find) {
			return
		}
		localFonts.push(fontObj)
		dispatch(setLocalFonts(localFonts))
	}
	gets3Assets = () => {
		const { currentBuilderSiteId, userS3Dir, dispatch, assets } = this.props
		if (!currentBuilderSiteId) {
			return
		}
		let assetsType = ['fonts', 'images']
		assetsType.forEach((type) => {
			_s3.listFiles({ Prefix: `${userS3Dir}/sites/${currentBuilderSiteId}/${type}` }, (resp) => {
				if (resp.error || !resp.data) {
					showToast({ type: 'error', message: (resp.data && resp.data.message) || 'Error Occured while fetching, Try Again!' })
					return
				}
				const { Contents } = resp.data
				Contents.forEach((content, index) => {
					if (type == 'fonts') {
						if (index == 0) {
							dispatch(setLocalFonts([]))
						}
						const payload = {
							family: content.Key.split('/').pop().replace(/(?:\.([^.]+))?$/, ''),
							url: assetsUrl + '/' + content.Key
						}
						this.handleAddFont(payload)
					} else {
						if (index == 0) {
							assets.image = []
							dispatch(updateAssets(assets))
						}
						this.handleAddImage(assetsUrl + '/' + content.Key)
					}
				})
			})
		})
	}
	apiRequest = () => {
		return new Promise((resolve) => {
			const { pageReducer, dispatch } = this.props
			const { templateName: projectType } = this.props.templates;
			let style, html, customCss, defaultPageData;
			this.gets3Assets()
			switch (projectType) {
				case "therapists":
					// html = therapists.html
					// style = therapists.baseCss
					// customCss = therapists.customCss
					defaultPageData = therapists.pageData
					break;
				case "spa":
					// html = spa.html
					// style = spa.baseCss
					// customCss = spa.customCss
					defaultPageData = spa.pageData
					break;
				case "landingPage":
					// html = landingPageTemplate.html
					// style = landingPageTemplate.baseCss
					// customCss = landingPageTemplate.customCss
					defaultPageData = landingPageTemplate.pageData
					break;
				case "agencyGrey":
					// html = agencyGreyTemplate.html
					// style = agencyGreyTemplate.baseCss
					// customCss = agencyGreyTemplate.customCss
					defaultPageData = agencyGreyTemplate.pageData
					break;
				case "agencyDark":
					// html = agencyDarkTemplate.html
					// style = agencyDarkTemplate.baseCss
					// customCss = agencyDarkTemplate.customCss
					defaultPageData = agencyDarkTemplate.pageData
					break;
				case "restaurant1":
					// html = restaurant1.html
					// style = restaurant1.baseCss
					// customCss = restaurant1.customCss
					defaultPageData = restaurant1.pageData
					break;
				case "carpentry":
					// html = carpentry.html
					// style = carpentry.baseCss
					// customCss = carpentry.customCss
					defaultPageData = carpentry.pageData
					break;
				case "event":
					// html = event.html
					// style = event.baseCss
					// customCss = event.customCss
					defaultPageData = event.pageData
					break;
				case "musician":
					// html = musician.html
					// style = musician.baseCss
					// customCss = musician.customCss
					defaultPageData = musician.pageData
					break;
				case "blog":
					// html = blog.html
					// style = blog.baseCss
					// customCss = blog.customCss
					defaultPageData = blog.pageData
					break;
				case "gym":
					// html = blog.html
					// style = blog.baseCss
					// customCss = blog.customCss
					defaultPageData = gym.pageData
					break;
				case "myProject1":
					// html = xyzHtml
					// styles = xyzStyle;
					break;
				case "inProgress":
					break;
				default:
					break;
			}

			// reset page manager here =========================================
			if (this.state.pageManager) {
				// set page manager relating data from content.json
				this.props.dispatch({ type: 'RESET_PAGES' })
				window.localStorage.removeItem("gjs-styles")
				window.localStorage.removeItem("gjs-css")
				window.localStorage.removeItem("gjs-components")
				window.localStorage.removeItem("gjs-html")
				window.localStorage.removeItem("gjs-assets")
				_.forEach(this.state.pageManager, (page, index) => {
					this.props.saveCurrentChanges(index, {
						...page
					});
				})
				// dispatch(setCustomCss(customCss))
			} else if (defaultPageData) {
				// set page manager relating data from default data
				let { pages, currentPage } = pageReducer
				// if (pages.length > 1) {
				// 	// reset pages
				// 	this.props.dispatch({ type: 'RESET_PAGES' })
				// }
				// reset pages
				this.props.dispatch({ type: 'RESET_PAGES' })
				window.localStorage.removeItem("gjs-styles")
				window.localStorage.removeItem("gjs-css")
				window.localStorage.removeItem("gjs-components")
				window.localStorage.removeItem("gjs-html")
				window.localStorage.removeItem("gjs-assets")

				defaultPageData.forEach((page, index) => {
					this.props.saveCurrentChanges(index, page)
				})
				// this.props.saveCurrentChanges(0, {
				// 	// ...this.props.pageReducer.pages[0],
				// 	components: html,
				// 	style: style,
				// 	customCss: customCss,
				// 	name: "Home",
				// 	homePage: true,
				// 	styleFontStr: null,
				// 	hidden: false,
				// 	desp: null,
				// 	favicon: null,
				// 	seo: {
				// 		name: null,
				// 		desp: null
				// 	}
				// 	// styleFontStr
				// });


				// dispatch(setCustomCss(customCss))

			}

			// ===============================================================

			this.setState({ customCss }, () => {
				this.StartEditor();
				dispatch(selectTemplate('inProgress'))
			});
			return resolve();
		});
	};

	minus = () => {
		this.setState(
			{
				zoom: this.state.zoom - 10,
			},
			() => {
				const { editor } = _grapesEditor;
				editor.Canvas.setZoom(this.state.zoom);
			}
		);
	};
	plus = () => {
		this.setState(
			{
				zoom: this.state.zoom + 10,
			},
			() => {
				const { editor } = _grapesEditor;
				editor.Canvas.setZoom(this.state.zoom);
			}
		);
	};

	StartEditor = () => {
		const { dispatch, pageReducer } = this.props;
		const { templateName, currentTemplate } = this.props.templates;
		// const { templateName, currentTemplate, customCss } = this.props.templates;
		// const { customCss } = this.state
		// set template html and style from page manager
		let html = pageReducer.pages[pageReducer.currentPage].components
		let style = `<style> ${pageReducer.pages[pageReducer.currentPage].style} </style>`
		let customCss = pageReducer.pages[pageReducer.currentPage].customCss
		let styleFontStr = pageReducer.pages[pageReducer.currentPage].styleFontStr
		let mouseInLayers = false
		// ==========================================================
		_grapesEditor.init(
			{
				components: html,
				styles: style,
				styleFontStr,
				customCss,
				currentTemplate
			},
			dispatch,
			() => {
				const { editor } = _grapesEditor;
				const keymaps = editor.Keymaps;
				keymaps.remove('core:redo')
				keymaps.remove('core:undo')
				keymaps.add('ns:undo', '⌘+z, ctrl+z', 'ss-undo');
				keymaps.add('ns:redo', '⌘+y, ctrl+y', 'ss-redo');
				let frame = document.getElementsByClassName("gjs-frame");
				let contentWindow = frame[0].contentWindow;

				// Temporary - Imp ==================================================================================================
				let currentReactNode = this
				editor.on("component:selected", function (args) {
					let gjsSelected = editor.getSelected()
					const dc = editor.DomComponents;
					const findFirstValidComp = (editor, key = 0) => {
						let comp = dc.getComponents().at(key)
						if (['br', 'script', 'style', 'NULL'].includes(comp.attributes.tagName)) {
							comp = findFirstValidComp(editor, key + 1)
						} else if (['textnode'].includes(comp.attributes.type)) {
							comp = findFirstValidComp(editor, key + 1)
						}
						return comp
					}
					if (gjsSelected.view.el.classList.contains('close')
						||
						gjsSelected.view.el.classList.value.includes('VideoHead-popup-video-exit')
						||
						(getComputedStyle(gjsSelected.view.el, 'normal').display).includes('none')
					) {
						let comp = findFirstValidComp(editor)
						editor.select(comp)
						return
					}
					currentReactNode.setState({ gjsSelected })
					let elem = gjsSelected.view && gjsSelected.view.el
					if (!elem) {
						return
					}
					// currentReactNode.setSettingsMessage('hide')
					_grapesEditor.styleManager.addEvents(
						{ elem, node: currentReactNode },
						{ pseudoClass: currentReactNode.props.pseudoClass }
					);
				});
				editor.on("component:remove", function (args) {
					currentReactNode.setState({ gjsSelected: null, selected: { node: null, styleInfo: null } })
				});
				// contentWindow.addEventListener("mousedown", (e) => {
				// 	mouseInLayers = false
				// 	let elem = e.target
				// 	if (elem.tagName == "HTML") {
				// 		return
				// 	}
				// 	if (e.target.id == 'ss-upload-container') {	// Imp Workaround as selected elem is set data-gjs-selectable: false
				// 		elem = e.target.parentNode
				// 	}
				// 	_grapesEditor.styleManager.addEvents(
				// 		{ elem, node: this },
				// 		{ pseudoClass: this.props.pseudoClass }
				// 	);
				// 	mouseInLayers = true
				// 	// _grapesEditor.styleManager.addEvents({ e, node: this }, { pseudoClass: 'hover' })
				// });
				// ===================================================================================================================




				// =============================Rich Text Editor=========================
				const rte = editor.RichTextEditor;
				rte.remove('link')
				rte.add("link", {
					icon: '<span class="icon-ss-link"></span>'
				});
				// ======================================================================
				// const commands = editor.Commands;
				// commands.run('core:component-outline');
			}
		);
		const { editor } = _grapesEditor;

		let components = this.getAllComponents(editor.DomComponents.getWrapper());
		let navComp = components[54]
		// navComp.set({ icon: '<i class="fa fa-arrows"></i>' })
		attachIconsToElem(components)

		// Temporary - Imp ==================================================================================================
		// let currentReactNode = this
		// editor.on("component:selected", function (args) {
		// 	// args.set("resizable", true);
		// 	currentReactNode.setState({ gjsSelected: editor.getSelected() })

		// 	// _grapesEditor.styleManager.resetAnim()
		// });
		// ===================================================================================================================
		editor.on("storage:start", () => {
			let { currentPage, pages } = this.props.pageReducer;
			let components = JSON.parse(JSON.stringify(editor.getHtml()));
			let styleGrapejs = JSON.parse(JSON.stringify(editor.getCss()));
			// save all ss style tag in page manager
			let frame = document.getElementsByClassName("gjs-frame")
			if (!frame[0]) {
				return
			}
			let doc = frame[0] && frame[0].contentWindow.document
			let style = doc.getElementById("ss-style")
			style = (style && style.innerHTML) || ''
			style = styleGrapejs + '\n\n\n\n' + style
			// style = style
			// let customStyles = doc.getElementById("ss-customStyles")
			// let styleAssets = doc.getElementById("ss-style-assets")
			// ======================================
			this.props.saveCurrentChanges(currentPage, {
				...pages[currentPage],
				name: pages[currentPage].name,
				components,
				style,
			});
		})
		const um = editor.UndoManager;
		um.remove(editor.getStyle());
		editor.Commands.add("ss-undo", async editor => {
			let times = 1
			if (this.props.past && this.props.past.length > 2 && this.props.present.status == 'style') {
				times = 2
				// update ss-style tag ============================================
				_grapesEditor.styleManager.setStyleTag(this.props.past[this.props.past.length - times].style)
			} else if (this.props.past && this.props.past.length > 2 && this.props.present.status == 'style-background') {
				times = 14
				// update ss-style tag ============================================
				_grapesEditor.styleManager.setStyleTag(this.props.past[this.props.past.length - times].style)
			} else {
				um.undo()
			}
			if (this.props.past && this.props.past.length > 2) {
				await this.historyChange("undo", times)
			}
			this.setBackgroundPropertyValue()
			_grapesEditor.editor.store(res => { });
			// ==============
		});
		// ==================When device change desktop-tablet-mobile====================
		editor.on('run:set-device-desktop', (some, argument) => {
			this.canvasDimensionChange(true)
		})
		editor.on('run:set-device-tablet', (some, argument) => {
			this.canvasDimensionChange()
		})
		editor.on('run:set-device-mobile', (some, argument) => {
			this.canvasDimensionChange()
		})
		//  =============================================================================
		editor.on('change:changesCount', e => {
			if (document.activeElement.className == 'gjs-frame') {
				// if mouse was in side canvas then set history as canvas/grapesjs
				dispatch(setHistoryStatus('grapejs'))
				// ================================================================
				// revaluate styles
				// let grapesDoc = document.activeElement.contentWindow.document
				// let selected = grapesDoc.querySelector('.gjs-selected')

				// customEvents.saveStyleInfo({ elem: selected, node: this }, { pseudoClass: this.props.pseudoClass })
				// ================================================================
			}
		});
		editor.on('block:drag:stop', model => {
			let components = this.getAllComponents(editor.DomComponents.getWrapper());
			attachIconsToElem(components)
			editor.LayerManager.render();
		})
		editor.on('component:drag:end', model => {
			_grapesEditor.styleManager.resetAnim()
			if (model.target.view.el) {
				let target = model.target.view.el
				if (target.parentElement && target.parentElement.classList.contains("ss-faq-main")) {
					let script = target.parentElement.nextElementSibling
					if (script.tagName == 'SCRIPT') {
						let content = script.innerHTML
						script.remove()
						script = document.createElement('script')
						script.innerHTML = content
						target.parentElement.parentElement.appendChild(script)
					}
				}
			}
		})
		editor.Commands.add("ss-redo", async editor => {
			let times = 1
			if (this.props.future && this.props.future.length > 0 && this.props.future[0].status == 'style') {
				times = 2
				// update ss-style tag ============================================
				_grapesEditor.styleManager.setStyleTag(this.props.future[times - 1].style)
			} else if (this.props.future && this.props.future.length > 0 && this.props.future[0].status == 'style-background') {
				times = 14
				// update ss-style tag ============================================
				_grapesEditor.styleManager.setStyleTag(this.props.future[times - 1].style)
			} else {
				um.redo()
			}
			if (this.props.future && this.props.future.length > 0) {
				await this.historyChange("redo", times)
			}
			this.setBackgroundPropertyValue()
			_grapesEditor.editor.store(res => { });
		});
		// =============Toolbar events==============
		editor.on('run', (cmdId, res) => {
			let toolbarCmds = ['core:component-exit', 'tlb-move', 'tlb-clone', 'tlb-delete']
			if (toolbarCmds.includes(cmdId)) {
				let frame = document.getElementsByClassName("gjs-frame")
				const grapesDoc = frame[0].contentWindow.document
				let selected = grapesDoc.querySelector('.gjs-selected')
				customEvents.saveStyleInfo({ elem: selected, node: this }, { pseudoClass: this.props.pseudoClass })
			}
		});
		editor.on('load', () => {
			this.setScrollBarStyle()
			this.temp();
			this.restrictDrop('input')
			setTimeout(() => {
				_grapesEditor.styleManager.resetAnim()
			}, 500)

			// ==========================Workaround mandatory to run certain templates which uses aos script===============================
			// _grapesEditor.editor.runCommand('preview')
			// _grapesEditor.editor.stopCommand('preview')
			// ============================================================================================================================

			// let frame = document.getElementsByClassName("gjs-frame");
			// const grapesDocument = frame[0].contentWindow.document;


			// =================================solution for => Text Editor adds <div> when enter is pressed, and adds <br> when Shift + Enter is pressed===========================
			var iframeBody = editor.Canvas.getBody();
			$(iframeBody).on("keydown", "[contenteditable]", e => {
				// trap the return key being pressed
				if (e.keyCode === 13) {
					e.preventDefault();
					// insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
					e.target.ownerDocument.execCommand("insertHTML", false, "<br><br>");
					// prevent the default behaviour of return key pressed
					return false;
				}
			});
			// =====================================================================================================================================================================
		});
		// =========================================
	};
	resetBuilder = () => {
		this.resetSwapper()
	}

	restrictDrag = (componentType) => {	//currently not in use / WORKING ==> change properties of components dynamically
		const { editor } = _grapesEditor;
		let wrapper = editor.getWrapper()
		let component = wrapper.findType(componentType)
		if (component[0]) {
			let componentFirstChild = component[0].attributes.components.models[0]
			componentFirstChild.set({
				removable: false,
				draggable: false,
				propagate: ['draggable', 'removable']
			})
		}
		// let bm = editor.BlockManager
		// let pfx = 'countdown'
		// let countdown = bm.get('countdown').set({
		// 	removable: false,
		// 	draggable: false,
		// 	propagate: ['draggable', 'removable'],
		// 	components: `
		// 		<span data-js="countdown" data-gjs-draggable="false" data-gjs-removable="false" data-gjs-propagate='["draggable", "removable"]' class="${pfx}-cont">
		// 		  <div class="${pfx}-block">
		// 			<div data-js="countdown-day" class="${pfx}-digit"></div>
		// 			<div class="${pfx}-label">${'days'}</div>
		// 		  </div>
		// 		  <div class="${pfx}-block">
		// 			<div data-js="countdown-hour" class="${pfx}-digit"></div>
		// 			<div class="${pfx}-label">${'hours'}</div>
		// 		  </div>
		// 		  <div class="${pfx}-block">
		// 			<div data-js="countdown-minute" class="${pfx}-digit"></div>
		// 			<div class="${pfx}-label">${'minutes'}</div>
		// 		  </div>
		// 		  <div class="${pfx}-block">
		// 			<div data-js="countdown-second" class="${pfx}-digit"></div>
		// 			<div class="${pfx}-label">${'seconds'}</div>
		// 		  </div>
		// 		</span>
		// 		<span data-js="countdown-endtext" class="${pfx}-endtext"></span>
		// 	  `
		// })
	}
	restrictDrop = (componentType) => {	//currently not in use / WORKING ==> change properties of components dynamically
		const { editor } = _grapesEditor;
		let wrapper = editor.getWrapper()
		let component = wrapper.findType(componentType)
		if (component.length) {
			component.forEach(comp => {
				comp.set({
					droppable: false
					// propagate: ['droppable']
				})
			})
		}
	}
	//@Debounce(500)
	fun(mouse) {

		// const el = closestElement({ x: mouse.pageX, y: mouse.pageY }, "draggable");

	}
	temp = () => {
		const { editor } = _grapesEditor;
		// const rte = editor.RichTextEditor;
		// rte.remove('link')
		// rte.add("link", {
		// 	icon: '<span class="icon-ss-link"></span>',
		// 	attributes: { title: "LINK" },
		// 	result: (rte) => rte.insertHTML(`<a href="#">${rte.selection()}</a>`),
		// });

		const sm = editor.StyleManager;
		sm.getConfig().clearProperties = 1;
		sm.render();
		// //close all blocks
		let categories = _grapesEditor.editor.BlockManager.getCategories();
		categories.each(category => {
			category.set('open', false).on('change:open', opened => {
				opened.get('open') && categories.each(category => {
					category !== opened && category.set('open', false)
				})
			})
		})
	};

	getAllComponents = (model, result = []) => {
		result.push(model);
		model.components().each(mod => this.getAllComponents(mod, result))
		return result;
	}

	addStyleData = () => {
		const { dispatch } = this.props;
		this.setState({ key: this.state.key + 1 }, () => {
			dispatch({ type: "SET_STYLE_OBJECT", value: this.state.key });
		});
	};
	historyChange = (type, times) => {
		return new Promise(async resolve => {
			const { dispatch } = this.props;
			if (type == "undo") {
				await dispatch(undoTimes(times));
				return resolve()
				// Async.times(times, async (n, next) => {
				// 	await dispatch(undo());
				// 	next()
				// }, () => {
				// 	return resolve()
				// })
			} else {
				await dispatch(redoTimes(times));
				// await dispatch(redo());
				return resolve()
			}
		})
	};
	changeDevice = () => {
		$("#device").toggleClass("hide-top");
		$(".device-text").toggleClass("hide-top");
	};
	render() {
		const { selected } = this.state;
		const { assetsManager, dispatch } = this.props
		return (
			<div style={{ height: '100vh' }}>
				<div className={`builder theme-${this.props.theme}`} style={{ height: '100%' }}>
					<ToastContainer />
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							flexDirection: "row",
							height: "100%",
							width: "100%",
						}}>
						<div
							style={{
								height: "100%",
								width: "100%" /* backgroundColor: "red"  */,
								display: 'flex',
								flexDirection: 'column'
							}}>
							<div className='panel__top'>
								<TopPanel dispatch={dispatch} />
							</div>

							<div
								className='body-container'
							// style={{ height: `${window.innerHeight - 40}px` }}
							>
								<LeftBlock designerStudioNode={this} />
								<div id='grapesEditor'></div>
								<div id='zoom'>
									<span className='minus' onClick={this.minus}>
										<Minus />
									</span>
									<input type='text' value={this.state.zoom + "%"} disabled />
									<span className='plus' onClick={this.plus}>
										<Plus />
									</span>
								</div>
								<CanvasActions gjsSelected={this.state.gjsSelected}
									resetSwapper={(fn) => {
										this.resetSwapper = fn
									}}
									canvasDimensionChange={(fn) => {
										this.canvasDimensionChange = fn
									}}
								/>
								<HelpNSupport />
								<div
									id='style-manager'
									style={{
										width: "240px",
										display: "flex",
										flexDirection: "column",
										height: 'calc(100vh - 40px)',
									}}>
									{/* <button onClick={this.addStyleData}>Add Data</button> */}
									{/* <button onClick={() => { this.historyChange('undo') }}>Undo</button>
                                <button onClick={() => { this.historyChange('redo') }}>Redo</button> */}
									<StylePanel selected={selected} gjsSelected={this.state.gjsSelected} parentNode={this} resetBuilder={this.resetBuilder}
										setBackgroundPropertyValue={(fn) => {
											this.setBackgroundPropertyValue = fn
										}}
									/>
								</div>
								{assetsManager && <AssetsManager selected={selected} />}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({
	global,
	layout,
	editor,
	templates,
	editorHistory,
	pageReducer,
	router,
}) => {

	return {
		loading: global.loading,
		theme: layout.theme,
		templates,
		styleObj: JSON.parse(editorHistory.present.styleObj),
		styleStr: editorHistory.present.style,
		past: editorHistory.past,
		present: editorHistory.present,
		future: editorHistory.future,
		pseudoClass: editor.pseudoClass,
		pageReducer,
		assetsManager: editor.assetsManager,
		assets: global.assets,
		currentUser: global.currentUser,
		currentBuilderSiteId: global.currentBuilderSiteId,
		location: router.location,
		userS3Dir: global.userS3Dir,
		localFonts: global.localFonts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
		saveCurrentChanges: (pageIndex, pageObj) =>
			dispatch(saveChanges(pageIndex, pageObj)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignerStudio);
