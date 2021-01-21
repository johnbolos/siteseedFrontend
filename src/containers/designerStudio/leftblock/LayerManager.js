import React from "react";
import { search as Search } from "./icons";
//import _grapesEditor from "../../../components/utils/grapesEditor";
import "./layerManager.scss";
import $ from "jquery";
import { debounce } from "lodash";
import _grapesEditor from "../../../components/utils/grapesEditor";

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
				if (!$(this).text().toLowerCase().includes(query)) {
					return $(this).parent().parent().addClass("change-opacity");
				} else {
					return $(this).parent().parent().removeClass("change-opacity");
				}
			});
			/* $("#layer-manager .gjs-layer").addClass("open"); //for opening all layers but looks bad
			let result = $("#layer-manager span").filter(function () {
				if ($(this).text().toLowerCase().indexOf(query) > -1) {
					return $(this).parent().parent().addClass("gjs-selected");
				}
			}); */
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

	collapseAll = () => {
		const { editor } = _grapesEditor
		let components = this.getAllComponents(editor.DomComponents.getWrapper());
		components.forEach((model) => {
			model.set('open', false)
		})
	}

	getAllComponents = (model, result = []) => {
		result.push(model);
		model.components().each(mod => this.getAllComponents(mod, result))
		return result;
	}

	render() {

		// 	$(".gjs-layer-caret").before(`<div data-toggle-move="true" style="
		// 	display: flex;
		// 	height: 100%;
		// 	width: 110%;
		// 	position: absolute;
		// 	left: -10px;
		// 	top: 0;
		// "></div>` );
		$(".gjs-layer__icon").attr("data-toggle-move", "true");
		$(".gjs-layer-name").attr("data-toggle-move", "true");
		// $(".gjs-layer-caret").attr("onclick", "this.stopPropagation();");
		$(".gjs-layer-move").remove();
		$(".gjs-layer-count").remove();
		return (
			<>
				<div>
					<Search className='search-icon' />
					<input
						type='text'
						placeholder='Search'
						name='searchQuery'
						// style={{ width: "100%" }}
						onChange={this.handleChange}
						value={this.state.searchQuery}
					/>
					<div
						className='collapse-all'
						onClick={this.collapseAll}
						title={'Collapse All'}
					>
						<i class="fa fa-compress" aria-hidden="true"></i>
					</div>
				</div>
				<div style={{ borderBottom: "none" }}>
					<div id='layer-manager'></div>
				</div>
			</>
		);
	}
}

export default LayerManager;
