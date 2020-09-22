import React, { Component } from "react";
import "./traits.scss";
import Icons from "../../../assets/Icons";
import _grapesEditor from "../../../components/utils/grapesEditor";

class Traits extends Component {
	state = {
		isOpen: false,
	};
	openSettings = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
		let { editor } = _grapesEditor;
		editor.runCommand("show-traits");
	};
	componentDidMount() {
		/* setTimeout(() => {
			const gjsWindow = document.getElementsByClassName("gjs-frame")[0]
				.contentWindow;
			gjsWindow.addEventListener("mousedown", () => {
				this.setState({ isOpen: false });
			});
		}, 500); */
	}
	render() {
		let settingRow = document.getElementsByClassName("gjs-trt-trait__wrp")[0];
		/* $("select").selectpicker(); */
		return (
			<div className='settings-container' /* style={{ margin: "0px 20px" }} */>
				{/*  <div className='settings-label'>
				Settings</div> */}
				<div className={"settings-label"} onClick={this.openSettings}>
					Settings
					{this.state.isOpen ? (
						<Icons.Dropdown
							className={"dropdown"}
							style={{ width: "9px", height: "9px" }}
						/>
					) : (
						<Icons.RightArrow
							className={"rightArrow"}
							style={{ width: "4.5px", height: "9px", marginRight: "3px" }}
						/>
					)}
				</div>
				<div
					className='traits-container'
					style={{ display: this.state.isOpen ? "" : "none" }}>
					{!settingRow && (
						<div className='setting-message'>
							Select an element before using Settings Manager
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Traits;
