import React, { Component } from "react";
import {
	addElem,
	components,
	layers,
	tip,
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
};

class LeftBlock extends Component {
	state = initialState;

	drawerToggleClickHandler = (e) => {
		let elem = $(`[name='${e.target.name}']`);
		this.reset(elem);
		this.setState({
			[e.target.name]: this.state[e.target.name] === "none" ? "block" : "none",
		});
	};
	reset(elem) {
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
	render() {
		//const { pageReducer } = this.props;
		return (
			<>
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
