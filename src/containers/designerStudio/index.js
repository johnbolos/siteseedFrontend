import React from "react";
import _ from 'lodash'
import { connect } from "react-redux";
//import grapesjs from "grapesjs"
import { Debounce } from "lodash-decorators/debounce";

import "./index.scss";
import _grapesEditor from "../../components/utils/grapesEditor";
import StylePanel from "./stylePanel/index";
import { undo, redo } from "../../reducers/actions/editorHistoryActions";
import { saveChanges } from "../../reducers/actions/pageActions";
import { closestElement } from "../../components/utils/index";
import { /* html, */ template1Html, template1Style } from "./dummie";
import { landingHtml, landingStyle } from "./templates/landing";
import { landing2Html, landing2Style } from "./templates/landing2";
import { question, minus, plus } from "../designerStudio/panels/icons";
import $ from "jquery";
import LeftBlock from "./leftblock/LeftBlock";
import TopPanel from "./toppanel/TopPanel";

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
		//window.addEventListener("scroll", this.handleScroll, true);
		this.apiRequest();
		setTimeout(() => {
			this.temp();
		}, 5000);
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
			const { templateName } = this.props.templates;
			let tempStyle;
			switch (templateName) {
				case "template1":
					tempStyle = template1Style;
					break;
				case "template2":
					tempStyle = landing2Style;
					break;
				case "template3":
					tempStyle = landingStyle;
					break;
				default:
					break;
			}
			//convert this string to styleObject

			//Save the tring to state
			this.setState({ templateStyle: tempStyle }, () => {
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
		const { dispatch } = this.props;
		const { templateName } = this.props.templates;
		let tempHtml, tempStyle;
		switch (templateName) {
			case "template1":
				tempHtml = template1Html;
				tempStyle = template1Style;
				break;
			case "template2":
				tempHtml = landing2Html;
				tempStyle = landing2Style;
				break;
			case "template3":
				tempHtml = landingHtml;
				tempStyle = landingStyle;
				break;
			default:
				break;
		}
		_grapesEditor.init(
			{
				components: tempHtml + tempStyle,
				styles: this.state.templateStyle,
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
			}
		);
		const { editor } = _grapesEditor;
		editor.on("storage:start", () => {
			let { currentPage, pages } = this.props.pageReducer;
			let components = JSON.parse(JSON.stringify(editor.getComponents()));
			let style = JSON.parse(JSON.stringify(editor.getStyle()));
			// console.log(pages);
			this.props.saveCurrentChanges(currentPage, {
				name: pages[currentPage].name,
				components,
				style,
			});
		});
	};
	@Debounce(500)
	fun(mouse) {
		// console.log("mouse moved", mouse.pageX, mouse.pageY);
		const el = closestElement({ x: mouse.pageX, y: mouse.pageY }, "draggable");
		// console.log(el, "is closest to mouse");
	}
	temp = () => {
		console.log("temporary function");
		const { editor } = _grapesEditor;
		// const rte = editor.RichTextEditor;
		// rte.add("bold", {
		// 	icon: '<i class="icon-SS-Checkbox"></i>',
		// 	attributes: { title: "Bold" },
		// 	result: (rte) => rte.exec("bold"),
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
	historyChange = (type) => {
		const { dispatch } = this.props;
		if (type == "undo") {
			dispatch(undo());
		} else {
			dispatch(redo());
		}
	};
	changeDevice = () => {
		$("#device").toggleClass("hide-top");
		$(".device-text").toggleClass("hide-top");
	};
	render() {
		const { selected } = this.state;
		return (
			<div className={"theme-dark"}>
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
									<img src={minus} alt='minus'></img>
								</span>
								<input type='text' value={this.state.zoom + "%"} disabled />
								<span className='plus' onClick={this.plus}>
									<img src={plus} alt='plus'></img>
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
		templates,
		styleObj: editorHistory.present.styleObj,
		pseudoClass: editor.pseudoClass,
		pageReducer,
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
