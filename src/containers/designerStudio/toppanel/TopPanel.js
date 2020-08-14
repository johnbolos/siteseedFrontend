import React, { Component } from "react";
import _grapesEditor from "../../../components/utils/grapesEditor";
import {
	logo,
	mobile,
	desktop,
	ipad,
	bell,
} from "../../designerStudio/panels/icons";
import $ from "jquery";

export default class TopPanel extends Component {
	changeDevice = () => {
		$("#device").toggleClass("hide-top");
		$(".device-text").toggleClass("hide-top");
	};
	render() {
		const { editor } = _grapesEditor;
		return (
			<>
				<div className='logo'>
					<img src={logo} alt='logo'></img>
				</div>
				<div className='panel__devices'></div>
				<div className='panel__basic-actions'>
					<span className='gjs-pn-btn'>
						<div className='tooltip'>
							<div>
								<img src={bell} alt='notification' height='22px' width='22px' />
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
							<div id='device' className='hide-top'>
								<div onClick={() => editor.runCommand("set-device-desktop")}>
									<img src={desktop} alt='Desktop' width='20px' height='20px' />
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
					</span>
				</div>
			</>
		);
	}
}
