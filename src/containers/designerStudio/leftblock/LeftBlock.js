import React, { Component } from "react";
import {
	addElem as AddElem,
	components as Components,
	layers as Layers,
	tip as Tip,
} from "../../designerStudio/panels/icons";
import $ from "jquery";
//import _grapesEditor from "../../../components/utils/grapesEditor";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PageManager from "./PageManager";
import "react-tabs/style/react-tabs.css";
import "./leftBlock.scss";
import _grapesEditor from "../../../components/utils/grapesEditor";
import LayerManager from "./LayerManager";

const initialState = {
	blocks: "none",
	component: "none",
	layers: "none",
	comment: "none",
	openComponents: false
};

class LeftBlock extends Component {
	state = initialState;

	drawerToggleClickHandler = (name) => {
		let elem = $(`[name='${name}']`);
		this.reset(elem);
		this.setState({
			[name]: this.state[name] === "none" ? "block" : "none",
		});
	};
	reset = (elem) => {
		this.setState(initialState);
		// elem.next().toggleClass("hide-top");
	}
	componentDidMount() {
		setTimeout(() => {
			const gjsWindow = document.getElementsByClassName("gjs-frame")[0]
				.contentWindow;
			gjsWindow.addEventListener("mousedown", () => {
				this.reset();
			});
			/* editor.on("component:update", () => {
				this.reset();
			}); */
			/* let { editor } = _grapesEditor;
			this.setState({ newComponents: editor.BlockManager.render() }); */
		}, 500);
	}
	openLayers() {
		let { editor } = _grapesEditor;
		editor.runCommand("open-siteSeed-layers");
	}
	closeLayers() {
		let { editor } = _grapesEditor;
		editor.stopCommand("open-siteSeed-layers");
	}
	openComponents() {
		let { editor } = _grapesEditor;
		let { openComponents } = this.state
		openComponents ? editor.stopCommand("add-component-manager") : editor.runCommand("add-component-manager")
		this.setState({
			openComponents: !this.state.openComponents
		})
		//editor.runCommand("add-component-manager")
	}
	saveSection() {
		let { editor } = _grapesEditor;
		editor.runCommand("ss-save-section")
	}
	render() {
		const { blocks, component, layers } = this.state
		//const { pageReducer } = this.props;
		//let { editor } = _grapesEditor;
		return (
			<>
				<div className='left-pane'>
					<div className={`tooltip-left ${blocks != 'none' ? 'tooltip-left-selected' : ''}`} name='blocks' onClick={(e) => { this.drawerToggleClickHandler('blocks') }}>

						<AddElem />
						<span className='tooltiptext-left'>Add Elements</span>
					</div>
					<div className={`tooltip-left ${component != 'none' ? 'tooltip-left-selected' : ''}`} onClick={(e) => { this.drawerToggleClickHandler('component'); this.openComponents(); }}>

						<Components />
						<span className='tooltiptext-left'>Add Components</span>
					</div>
					<div className={`tooltip-left ${layers != 'none' ? 'tooltip-left-selected' : ''}`} onClick={() => { this.drawerToggleClickHandler('layers') }}>

						<Layers />
						<span className='tooltiptext-left'>Add Layers</span>
					</div>
				</div>
				<Tip
					width='15px'
					height='9px'
					className='tip'
					style={{
						display: this.state.blocks,
						marginTop: "15px",
					}}
				/>
				<div id='blocks' style={{ display: this.state.blocks }}>
					<h4 className='add-element'>Add Elements</h4>
					<button type="button" className="save-section" onClick={this.saveSection}>Save Section</button>
				</div>
				<Tip
					width='15px'
					height='9px'
					className='tip'
					style={{
						display: this.state.component,
						marginTop: "55px",
					}}
				/>
				<div id='components' style={{ display: this.state.component }}>
					<h4 className='add-element'>Add Components</h4>

				</div>
				<Tip
					width='15px'
					height='9px'
					className='tip'
					style={{
						display: this.state.layers,
						marginTop: "94px",
					}}
				/>
				<div id='layers' style={{ display: this.state.layers }}>
					<Tabs>
						<TabList style={{ display: "flex" }}>
							<Tab onClick={this.openLayers}>
								<h4>Layers</h4>
							</Tab>
							<Tab onClick={this.closeLayers}>
								<h4>Pages</h4>
							</Tab>
						</TabList>
						<TabPanel>
							<LayerManager />
						</TabPanel>
						<TabPanel>
							<PageManager />
						</TabPanel>
					</Tabs>
				</div>
			</>
		);
	}
}

export default LeftBlock;
