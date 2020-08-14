import React from "react";
import { connect } from "react-redux";
//import grapesjs from "grapesjs"
import { Debounce } from "lodash-decorators/debounce";

import "./index.scss";
import _grapesEditor from "../../components/utils/grapesEditor";
import StylePanel from "./stylePanel/index";
import { undo, redo } from "../../reducers/actions/editorHistoryActions";
import { closestElement } from "../../components/utils/index";
import { /* html, */ template1Html, template1Style } from "./dummie";
import { landingHtml, landingStyle } from "./templates/landing";
import { landing2Html, landing2Style } from "./templates/landing2";
import {
	logo,
	addElem,
	components,
	layers,
	comment,
	tip,
	question,
	minus,
	plus,
	mobile,
	desktop,
	ipad,
	bell,
} from "../designerStudio/panels/icons";
import $ from "jquery";

const initialState = {
	blocks: "none",
	component: "none",
	layers: "none",
	comment: "none",
	tipMargin: "15px",
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
		window.addEventListener('scroll', this.handleScroll, true);
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
			}, 1000)
		}
	}

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

	reset(elem) {
		this.setState(initialState);
		elem.next().toggleClass("hide-top");
	}
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
				components: tempHtml,
				styles: this.state.templateStyle,
			},
			dispatch,
			() => {
				console.log("callback for grapesjs init");
				let frame = document.getElementsByClassName("gjs-frame");
				let contentWindow = frame[0].contentWindow;
				contentWindow.addEventListener("mousedown", (e) => {
					_grapesEditor.styleManager.addEvents({ elem: e.target, node: this }, { pseudoClass: this.props.pseudoClass });
					// _grapesEditor.styleManager.addEvents({ e, node: this }, { pseudoClass: 'hover' })
				});
			}
		);
	};
	@Debounce(500)
	fun(mouse) {
		console.log("mouse moved", mouse.pageX, mouse.pageY);
		const el = closestElement({ x: mouse.pageX, y: mouse.pageY }, "draggable");
		console.log(el, "is closest to mouse");
	}
	temp = () => {
		console.log("temporary function");
		const { editor } = _grapesEditor;
		const rte = editor.RichTextEditor;
		rte.add("bold", {
			icon: '<i class="icon-SS-Checkbox"></i>',
			attributes: { title: "Bold" },
			result: (rte) => rte.exec("bold"),
		});
		// window.addEventListener("mousemove", (mouse) => {
		// 	this.fun(mouse)
		// })
	};
	drawerToggleClickHandler = (e) => {
		//adding custom attributes to components
		/* console.log(
			"selected ",
			//	_grapesEditor.editor.getSelected().parent().getEl()
			// .setAttributes({ "seed-id": "ss" })
			// /getEl() //gives html of selected component
			_grapesEditor.editor.getSelected().closest("div").parent().getEl()
		) */
		// let selected = _grapesEditor.editor.getSelected()
		// console.log(selected.attributes)
		let elem = $(`[name='${e.target.name}']`);
		//elem.next().toggleClass("hide-top");
		this.reset(elem);
		this.setState(
			{
				[e.target.name]:
					this.state[e.target.name] === "none" ? "block" : "none",
			}
			//() => elem.next().toggleClass("hide-top")
		);
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
		const { editor } = _grapesEditor;
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
							<div className='logo'>
								<img src={logo} alt='logo'></img>
							</div>
							<div className='panel__devices'></div>
							<div className='panel__basic-actions'>
								<span className='gjs-pn-btn'>
									<div className='tooltip'>
										<div>
											<img
												src={bell}
												alt='notification'
												height='22px'
												width='22px'
											/>
										</div>
										<span className='tooltiptext' style={{ left: "-85%" }}>
											Notification
										</span>
									</div>
								</span>
								<span className='gjs-pn-btn'>
									<div className='tooltip'>
										<div>
											<img
												src={mobile}
												alt='erase'
												height='22px'
												width='22px'
												onClick={this.changeDevice}
											/>
										</div>
										<span className='tooltiptext device-text'>Device</span>
									</div>
								</span>
								<div id='device' className='hide-top'>
									<div onClick={() => editor.runCommand("set-device-desktop")}>
										<img
											src={desktop}
											alt='Desktop'
											width='20px'
											height='20px'
										/>
										Desktop
									</div>
									<div onClick={() => editor.runCommand("set-device-tablet")}>
										<img src={ipad} alt='Tablet' width='20px' height='20px' />
										Tablet
									</div>
									<div onClick={() => editor.runCommand("set-device-mobile")}>
										<img src={mobile} alt='Mobile' width='20px' height='20px' />
										Mobile
									</div>
								</div>
							</div>
						</div>

						<div
							className='body-container'
							style={{ height: `${window.innerHeight - 40}px` }}>
							<div className='left-pane'>
								<div className='tooltip-left'>
									<img
										src={addElem}
										alt='addElement'
										name='blocks'
										onClick={this.drawerToggleClickHandler}
									/>
									<span className='tooltiptext-left'>Add Elements</span>
								</div>
								<div className='tooltip-left'>
									<img
										src={components}
										alt='Component'
										name='component'
										onClick={this.drawerToggleClickHandler}></img>
									<span className='tooltiptext-left'>Add Components</span>
								</div>
								<div className='tooltip-left'>
									<img
										src={layers}
										alt='layers'
										name='layers'
										onClick={this.drawerToggleClickHandler}></img>
									<span className='tooltiptext-left'>Add Layers</span>
								</div>
							</div>
							<img
								src={tip}
								alt='tip'
								width='15px'
								height='9px'
								className='tip'
								style={{
									display: this.state.blocks,
									marginTop: "15px",
								}}></img>
							<div id='blocks' style={{ display: this.state.blocks }}>
								<h4 className='add-element'>Add Elements</h4>
							</div>
							<img
								src={tip}
								alt='tip'
								width='15px'
								height='9px'
								className='tip'
								style={{
									display: this.state.component,
									marginTop: "55px",
								}}></img>
							<div id='components' style={{ display: this.state.component }}>
								<h4 className='add-element'>Add Components</h4>
							</div>
							<img
								src={tip}
								alt='tip'
								width='15px'
								height='9px'
								className='tip'
								style={{
									display: this.state.layers,
									marginTop: "94px",
								}}></img>
							<div id='layers' style={{ display: this.state.layers }}>
								<h4 className='add-element'>Add Layers</h4>
							</div>
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
									width: "270px",
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

const mapStateToProps = ({ global, layout, editor, templates, editorHistory }) => {
	return {
		loading: global.loading,
		templates,
		styleObj: editorHistory.present.styleObj,
		pseudoClass: editor.pseudoClass
	};
};

const mapDispatchToProps = (dispatch) => {
	return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignerStudio);
