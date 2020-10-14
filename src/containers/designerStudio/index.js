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
import { closestElement } from "../../components/utils/index";
// import { /* html, */ template1Html, template1Style } from "./dummie";
// import { /* html, */ template1Html, template1Style } from "./dummieTemp";
import { /* html, */ template1Html, template1Style, template1StyleCss } from "./dummiev3";
import { landingHtml, landingStyle } from "./templates/landing";
import { landing2Html, landing2Style } from "./templates/landing2";
import { question, minus as Minus, plus as Plus } from "../designerStudio/panels/icons";
import $ from "jquery";
import LeftBlock from "./leftblock/LeftBlock";
import TopPanel from "./toppanel/TopPanel";
import assetsManager from "./assetsManager";
import { customEvents } from "../../components/utils/grapesEditor/styleManager";

const initialState = {
	zoom: 100,
	key: 0,
	selected: {
		node: null,
		styleInfo: {},
	},
};

class DesignerStudio extends React.Component {
	state = initialState;

	componentDidMount() {
		let { currentUser, dispatch, assets } = this.props
		this.addCloseEvent()
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
			this.temp();
		}, 5000);
	}
	addCloseEvent = () => {
		window.addEventListener("beforeunload", function (event) {
			// send data to backend before we leave page!!!!

			// =============================================
		})
	}
	// componentDidUpdate(prevProps) {
	// 	if (JSON.stringify(prevProps.styleObj) != JSON.stringify(this.props.styleObj) && this.props.selected) {
	// 		this.setState({ selected: this.props.selected })
	// 	}
	// }
	setGoogleFonts = async () => {
		const { dispatch } = this.props
		const googleApiReq = await Request.getGoogleFonts()
		if (googleApiReq.error) {
			return
		}
		dispatch(setGoogleFonts(googleApiReq.items))
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
			const { pageReducer } = this.props
			const { templateName: projectType } = this.props.templates;
			let style, html;
			console.log(projectType, 'aaa.templateName')
			switch (projectType) {
				case "template1":
					html = template1Html
					style = template1StyleCss;
					break;
				case "template2":
					html = landing2Html
					style = landing2Style;
					break;
				case "template3":
					html = landingHtml
					style = landingStyle;
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

			// set page manager here =========================================
			if (html && style) {
				let { pages, currentPage } = pageReducer
				this.props.saveCurrentChanges(0, {
					...pages[0],
					components: html,
					style: style,
				});
			}

			// ===============================================================

			this.setState({ templateStyle: '' }, () => {
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
		const { templateName } = this.props.templates;
		// let tempHtml, tempStyle;
		// switch (templateName) {
		// 	case "template1":
		// 		tempHtml = template1Html;
		// 		tempStyle = template1Style;
		// 		break;
		// 	case "template2":
		// 		tempHtml = landing2Html;
		// 		tempStyle = landing2Style;
		// 		break;
		// 	case "template3":
		// 		tempHtml = landingHtml;
		// 		tempStyle = landingStyle;
		// 		break;
		// 	default:
		// 		break;
		// }
		// set template html and style from page manager
		let html = pageReducer.pages[pageReducer.currentPage].components
		let style = `<style> 
		@media {background: red;}
		 ${pageReducer.pages[pageReducer.currentPage].style} </style>`
		console.log(style, this.state.templateStyle, 'aaa.init')
		// ==========================================================
		_grapesEditor.init(
			{
				components: html,
				styles: style,
			},
			dispatch,
			() => {
				console.log("callback for grapesjs init");
				let frame = document.getElementsByClassName("gjs-frame");
				let contentWindow = frame[0].contentWindow;
				contentWindow.addEventListener("mousedown", (e) => {
					_grapesEditor.styleManager.addEvents(
						{ elem: e.target, node: this },
						{ pseudoClass: this.props.pseudoClass }
					);
					// _grapesEditor.styleManager.addEvents({ e, node: this }, { pseudoClass: 'hover' })
				});
				// =============================Rich Text Editor=========================
				const { editor } = _grapesEditor;
				const rte = editor.RichTextEditor;
				rte.remove('link')
				rte.add("link", {
					icon: '<span class="icon-ss-link"></span>'
				});
				// ======================================================================
			}
		);
		const { editor } = _grapesEditor;
		editor.on("storage:start", () => {
			let { currentPage, pages } = this.props.pageReducer;
			let components = JSON.parse(JSON.stringify(editor.getComponents()));
			// let style = JSON.parse(JSON.stringify(editor.getCss()));
			// save all ss style tag in page manager
			let frame = document.getElementsByClassName("gjs-frame")
			let doc = frame[0].contentWindow.document
			let style = doc.getElementById("ss-style").innerHTML
			console.log(doc.getElementById("ss-style").innerHTML, 'aaa.storage')
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
		editor.Commands.add("ss-style-undo", async editor => {
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
		editor.Commands.add("ss-style-redo", async editor => {
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
		// =========================================

	};
	@Debounce(500)
	fun(mouse) {

		const el = closestElement({ x: mouse.pageX, y: mouse.pageY }, "draggable");

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
		const { assetsManager } = this.props
		return (
			<div className={`theme-${this.props.theme}`}>
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
						}}>
						<div className='panel__top'>
							<TopPanel />
						</div>

						<div
							className='body-container'
							style={{ height: `${window.innerHeight - 40}px` }}>
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
							<div id='question'>
								<img src={question} alt='question-mark'></img>
							</div>
							<div
								id='style-manager'
								style={{
									width: "240px",
									display: "flex",
									flexDirection: "column",
								}}>
								{/* <button onClick={this.addStyleData}>Add Data</button> */}
								{/* <button onClick={() => { this.historyChange('undo') }}>Undo</button>
                                <button onClick={() => { this.historyChange('redo') }}>Redo</button> */}
								<StylePanel selected={selected} parentNode={this} />
							</div>
							{assetsManager && <AssetsManager selected={selected} />}
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
	// console.log(editorHistory.present.styleObj, 'aaaaaa..')
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
