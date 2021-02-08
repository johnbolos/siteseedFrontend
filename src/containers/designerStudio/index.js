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
import { updateAssets } from '../../reducers/actions/userActions'
import { saveChanges } from "../../reducers/actions/pageActions";
import { closestElement, showToast } from "../../components/utils/index";
import { setCustomCss } from "../../reducers/actions/templateActions";

// Templates =========================================================================
import { template1Html, template1Style, template1StyleCss, template1StyleMedia } from "./dummiev3";
import therapists from "../../assets/templates/therapists";
import landingPageTemplate from "../../assets/templates/landingPage";
import agencyGreyTemplate from "../../assets/templates/agencyGrey";
import agencyDarkTemplate from "../../assets/templates/agencyDark";
import restaurant1 from "../../assets/templates/restaurant1";
import carpentry from "../../assets/templates/carpentry";
import spa from "../../assets/templates/spa";
import { landingHtml, landingStyle } from "./templates/landing";
import { landing2Html, landing2Style } from "./templates/landing2";
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

	componentDidMount() {
		let { currentUser, dispatch, assets } = this.props
		this.addCloseEvent()
		dispatch(selectTemplate('inProgress'))
		if (currentUser) {
			// initialise different settings.....
			if (currentUser.assets && currentUser.assets.image) {
				assets.image.push(currentUser.assets.image)
				dispatch(updateAssets(assets))
			}
		}
		//window.addEventListener("scroll", this.handleScroll, true);
		// get google api fonts
		this.setGoogleFonts()
		this.apiRequest();
		setTimeout(() => {
			// this.setScrollBarStyle()
			// this.temp();
		}, 5000);
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

	apiRequest = () => {
		return new Promise((resolve) => {
			const { pageReducer, dispatch } = this.props
			const { templateName: projectType } = this.props.templates;
			let style, html, customCss;
			switch (projectType) {
				case "template1":
					html = template1Html
					style = template1StyleCss
					customCss = template1StyleMedia
					break;
				case "template2":
					html = landing2Html
					style = landing2Style
					break;
				case "template3":
					html = landingHtml
					style = landingStyle
					break;
				case "therapists":
					html = therapists.html
					style = therapists.baseCss
					customCss = therapists.customCss
					break;
				case "spa":
					html = spa.html
					style = spa.baseCss
					customCss = spa.customCss
					break;
				case "landingPage":
					html = landingPageTemplate.html
					style = landingPageTemplate.baseCss
					customCss = landingPageTemplate.customCss
					break;
				case "agencyGrey":
					html = agencyGreyTemplate.html
					style = agencyGreyTemplate.baseCss
					customCss = agencyGreyTemplate.customCss
					break;
				case "agencyDark":
					html = agencyDarkTemplate.html
					style = agencyDarkTemplate.baseCss
					customCss = agencyDarkTemplate.customCss
					break;
				case "restaurant1":
					html = restaurant1.html
					style = restaurant1.baseCss
					customCss = restaurant1.customCss
					break;
				case "carpentry":
					html = carpentry.html
					style = carpentry.baseCss
					customCss = carpentry.customCss
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
			if (html && style) {
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
				this.props.saveCurrentChanges(0, {
					// ...this.props.pageReducer.pages[0],
					components: html,
					style: style,
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
					// styleFontStr
				});
				dispatch(setCustomCss(customCss))
			}

			// ===============================================================

			this.setState({ customCss }, () => {
				this.StartEditor();
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
		const { templateName, customCss } = this.props.templates;
		// const { customCss } = this.state
		// set template html and style from page manager
		let html = pageReducer.pages[pageReducer.currentPage].components
		let style = `<style> ${pageReducer.pages[pageReducer.currentPage].style} </style>`
		let styleFontStr = pageReducer.pages[pageReducer.currentPage].styleFontStr
		let mouseInLayers = false
		// ==========================================================
		_grapesEditor.init(
			{
				components: html,
				styles: style,
				styleFontStr,
				customCss
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
					console.log(args, 'sss.p')
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
			// style = style + styleGrapejs
			style = style
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
			_grapesEditor.editor.store(res => { });
			// ==============
		});
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
			setTimeout(() => {
				_grapesEditor.styleManager.resetAnim()
			}, 500)

			// ==========================Workaround mandatory to run certain templates which uses aos script===============================
			_grapesEditor.editor.runCommand('preview')
			_grapesEditor.editor.stopCommand('preview')
			// ============================================================================================================================

			// let frame = document.getElementsByClassName("gjs-frame");
			// const grapesDocument = frame[0].contentWindow.document;

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
	@Debounce(500)
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
								<LeftBlock />
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
								<CanvasActions gjsSelected={this.state.gjsSelected} resetSwapper={(fn) => {
									this.resetSwapper = fn
								}} />
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
									<StylePanel selected={selected} gjsSelected={this.state.gjsSelected} parentNode={this} resetBuilder={this.resetBuilder} />
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
		currentUser: global.currentUser
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
