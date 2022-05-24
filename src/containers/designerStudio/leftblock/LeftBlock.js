import React, { Component } from "react";
import _ from 'lodash'
import {
	addElem as AddElem,
	components as Components,
	layers as Layers,
	tip as Tip,
	pages as PagesIcon,
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
	pages: "none",
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
		}, () => {
			if (['blocks', 'component'].includes(name)) {
				let first5Categ = 'block'
				if (name == 'component') {
					first5Categ = 'none'
				}
				let getAllCategories = document.querySelectorAll('.gjs-block-category')
				_.each(getAllCategories, (category, index) => {
					if (index < 5) {
						category.style.display = first5Categ
					} else {
						category.style.display = first5Categ == 'block' ? 'none' : 'block'
					}
				})
			}
		});
	};
	reset = (elem) => {
		this.setState(initialState);
		// elem.next().toggleClass("hide-top");
	}
	componentDidMount() {
		setTimeout(() => {
			if (!document.getElementsByClassName("gjs-frame")[0]) {
				return
			}
			const gjsWindow = document.getElementsByClassName("gjs-frame")[0]
				.contentWindow;
			gjsWindow.addEventListener("mousedown", () => {
				if (this.state.layers != 'none') {
					return
				}
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
		const { blocks, component, layers, pages } = this.state
		//const { pageReducer } = this.props;
		//let { editor } = _grapesEditor;
		return (
			<>
				<div className='left-pane'>
					<div className={`tooltip-left ${blocks != 'none' ? 'tooltip-left-selected' : ''}`} name='blocks' onClick={(e) => { this.drawerToggleClickHandler('blocks') }}>

						<AddElem />
						<span className='tooltiptext-left'>Add Elements</span>
					</div>
					<div className={`tooltip-left ${component != 'none' ? 'tooltip-left-selected' : ''}`} onClick={(e) => { this.drawerToggleClickHandler('component'); }}>

						<Components />
						<span className='tooltiptext-left'>Add Components</span>
					</div>
					<div className={`tooltip-left ${layers != 'none' ? 'tooltip-left-selected' : ''}`} onClick={() => { this.drawerToggleClickHandler('layers') }}>

						<Layers />
						<span className='tooltiptext-left'>Layers</span>
					</div>
					<div className={`tooltip-left ${pages != 'none' ? 'tooltip-left-selected' : ''}`} name='pages' onClick={(e) => { this.drawerToggleClickHandler('pages') }}>

						<PagesIcon />
						<span className='tooltiptext-left'>Pages</span>
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
				<div id='blocks' style={{ display: (this.state.blocks == 'block' || this.state.component == 'block') ? 'block' : 'none' }}>
					<div>
						{blocks == 'block' && <h4 className='add-element'>Add Elements</h4>}
						{component == 'block' && (<>
							<h4 className='components-title'>Add Components</h4>
							{/* <button type="button" className="save-section" onClick={this.saveSection}>Save Section</button> */}
						</>)}
					</div>

				</div>
				<Tip
					width='15px'
					height='9px'
					className='tip'
					style={{
						display: this.state.component,
						marginTop: "53px",
					}}
				/>
				{/* <div id='components' style={{ display: this.state.component }}>
					<h4 className='add-element'>Add Components</h4>

				</div> */}
				<Tip
					width='15px'
					height='9px'
					className='tip'
					style={{
						display: this.state.layers,
						marginTop: "90px",
						// marginTop: "94px",
					}}
				/>
				<div id='layers' style={{ display: this.state.layers, width: 'auto', minWidth: '242px' }}>
					<h4 className="layers-title">Layers</h4>
					<LayerManager />
					{/* <Tabs>
						<TabList style={{ display: "flex" }}>
							<Tab onClick={this.openLayers}>
							</Tab>
							<Tab onClick={this.closeLayers}>
								<h4>Pages</h4>
							</Tab>
						</TabList>
						<TabPanel>
						</TabPanel>
						<TabPanel>
							<PageManager />
						</TabPanel>
					</Tabs> */}
				</div>
				<Tip
					width='15px'
					height='9px'
					className='tip'
					style={{
						display: this.state.pages,
						marginTop: "127px",
					}}
				/>
				<div id='page-manager' style={{ display: this.state.pages }}>
					<h4 className='pages-title'>Pages</h4>
					<PageManager designerStudioNode={this.props.designerStudioNode} />
				</div>
			</>
		);
	}
}

export default LeftBlock;
