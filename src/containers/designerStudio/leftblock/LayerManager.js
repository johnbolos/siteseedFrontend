import React from "react";
import { search } from "./icons";
import _grapesEditor from "../../../components/utils/grapesEditor";
import "./layerManager.scss";
import $ from "jquery";

class LayerManager extends React.Component {
	state = {
		components: [],
	};
	componentDidMount() {
		setTimeout(() => {
			let { editor } = _grapesEditor;
			let components = JSON.parse(JSON.stringify(editor.getComponents()));
			this.setState({
				components,
			});
			//$(".gjs-layer-move").remove();
			//$(".gjs-layer-count").remove();
		}, 100);
	}

	render() {
		$(".gjs-layer-name").attr("data-toggle-move", "true");
		$(".gjs-layer-move").remove();
		$(".gjs-layer-count").remove();
		return (
			<>
				<div>
					<img src={search} alt='search' className='search-icon' />
					<input
						type='text'
						placeholder='Search'
						name='searchInput'
						style={{ width: "100%" }}
						//onChange={this.handleChange}
						//value={this.state.searchInput}
					/>
				</div>
				<div style={{ borderBottom: "none" }}>
					<div id='layer-manager'></div>
				</div>
			</>
		);
	}
}

export default LayerManager;
