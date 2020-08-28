import React from "react";
import { search } from "./icons";
//import _grapesEditor from "../../../components/utils/grapesEditor";
import "./layerManager.scss";
import $ from "jquery";
import { debounce } from "lodash";

class LayerManager extends React.Component {
	state = {
		searchQuery: "",
	};
	handleChange = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value,
			},
			this.findLayer
		);
	};

	findLayer = () => {
		let query = this.state.searchQuery.toLowerCase();
		if (query) {
			$("#layer-manager .gjs-layer").addClass("open"); //for opening all layers but looks bad
			let result = $("#layer-manager span").filter(function () {
				if ($(this).text().toLowerCase().indexOf(query) === -1) {
					return $(this).parent().parent().addClass("change-opacity");
				}
			});
			/* $("#layer-manager .gjs-layer").addClass("open"); //for opening all layers but looks bad
			let result = $("#layer-manager span").filter(function () {
				if ($(this).text().toLowerCase().indexOf(query) > -1) {
					return $(this).parent().parent().addClass("gjs-selected");
				}
			}); */
			console.log(result[1]); //result is having the required layers
		} else {
			$("#layer-manager .gjs-layer").removeClass("open");
			$("#layer-manager span").filter(function () {
				/* if ($(this).text().toLowerCase().indexOf(query) > -1) {
					return $(this).parent().parent().removeClass("gjs-selected");
				} */

				return $(this).parent().parent().removeClass("change-opacity");
			});
		}
	};

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
						name='searchQuery'
						style={{ width: "100%" }}
						onChange={this.handleChange}
						value={this.state.searchQuery}
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
