import React from "react";
import { connect } from "react-redux";
//import grapesjs from "grapesjs"
import { Debounce } from "lodash-decorators/debounce";

import "./index.scss";
import _grapesEditor from "../../components/utils/grapesEditor";
import StylePanel from "./stylePanel";
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
} from "../designerStudio/panels/icons";

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
		this.apiRequest();
		setTimeout(() => {
			// this.temp()
		}, 5000);
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

	// componentDidMount() {
	// 	this.StartEditor()
	// 	/* setTimeout(() => {
	// 		this.temp()
	// 	}, 5000) */
	// }

	reset() {
		this.setState(initialState);
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
				styles: tempStyle,
			},
			dispatch,
			() => {
				console.log("callback for grapesjs init");
				let frame = document.getElementsByClassName("gjs-frame");
				let contentWindow = frame[0].contentWindow;
				contentWindow.addEventListener("mouseup", (e) => {
					_grapesEditor.styleManager.addEvents({ e, node: this });
					// _grapesEditor.styleManager.addEvents({ e, node: this }, { pseudoClass: 'hover' })
					console.log(this.state.selected);
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
		let wrapper = document.getElementsByClassName("body-container");

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
		this.reset();
		this.setState({
			[e.target.name]: this.state[e.target.name] === "none" ? "block" : "none",
		});
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
	changeDevice = (e) => {
		const { editor } = _grapesEditor;
		switch (e.target.value) {
			case "tablet":
				editor.runCommand("set-device-tablet");
				break;
			case "mobile":
				editor.runCommand("set-device-mobile");
				break;
			case "desktop":
				editor.runCommand("set-device-desktop");
				break;
			default:
				break;
		}
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
							<div className='logo'>
								<img src={logo} alt='logo'></img>
							</div>
							<div className='panel__devices'></div>
							<div className='panel__basic-actions'>
								<div className='tooltip'>
									<select
										name='device'
										id='device'
										onChange={this.changeDevice}>
										<option value='desktop'>Desktop</option>
										<option value='tablet'>Tablet</option>
										<option value='mobile' label='mobile'>
											<img
												src={mobile}
												alt='erase'
												height='22px'
												width='22px'
											/>
										</option>
									</select>
									<span className='tooltiptext'>Device</span>
								</div>
							</div>
						</div>

						<div className='body-container'>
							<div className='left-pane'>
								<img
									src={addElem}
									alt='addElement'
									name='blocks'
									onClick={this.drawerToggleClickHandler}
								/>
								<img
									src={components}
									alt='Component'
									name='component'
									onClick={this.drawerToggleClickHandler}></img>
								<img
									src={layers}
									alt='layers'
									name='layers'
									onClick={this.drawerToggleClickHandler}></img>
								<img
									src={comment}
									alt='commment'
									name='comment'
									onClick={this.drawerToggleClickHandler}></img>
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
							<img
								src={tip}
								alt='tip'
								width='15px'
								height='9px'
								className='tip'
								style={{
									display: this.state.comment,
									marginTop: "135px",
								}}></img>
							<div id='comment' style={{ display: this.state.comment }}>
								<h4 className='add-element'>Add Comments</h4>
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
									width: "18%",
									overflowY: "overlay",
									// overflowX: "hidden",
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

const mapStateToProps = ({ global, layout, templates, editorHistory }) => {
	return {
		loading: global.loading,
		templates,
		styleObj: editorHistory.present.styleObj,
	};
};

const mapDispatchToProps = (dispatch) => {
	return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignerStudio);
