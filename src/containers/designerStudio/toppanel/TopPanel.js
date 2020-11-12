import React, { Component } from "react";
import _grapesEditor from "../../../components/utils/grapesEditor";
import {
	logo as Logo,
	mobile as Mobile,
	desktop as Desktop,
	ipad as Ipad,
	bell as Bell,
} from "../../designerStudio/panels/icons";
import { getPushPathWrapper } from "../../../routes";
import $ from "jquery";

export default class TopPanel extends Component {
	changeDevice = () => {
		$("#device").toggleClass("hide-top");
		$(".responsive-overlay").toggleClass("hide-top");
		$(".device-text").toggleClass("hide-top");
	};
	render() {
		const { editor } = _grapesEditor;
		const { dispatch } = this.props
		return (
			<>
				<div className='logo' onClick={() => {dispatch(getPushPathWrapper("home"))}}>
					<Logo />
					{/* <img src={logo} alt='logo'></img> */}
				</div>
				<div className='panel__devices'></div>
				<div className='panel__basic-actions'>
					{/* <span className='gjs-pn-btn'>
						<div className='tooltip'>
							<div>
								<Bell />
							</div>
							<span className='tooltiptext' style={{ left: "-85%" }}>
								Notification
							</span>
						</div>
					</span> */}
					<span className='gjs-pn-btn'>
						<div className='tooltip'>
							<div onClick={this.changeDevice}>
								<Mobile style={{ height: '22px', width: '22px' }} />
								{/* <img
									src={mobile}
									alt='erase'
									height='22px'
									width='22px'
								/> */}
							</div>
							<span className='tooltiptext device-text'>Device</span>
							<div className={'responsive-overlay hide-top'} onClick={this.changeDevice}></div>
								<div id='device' className='hide-top'>
									<div onClick={() => editor.runCommand("set-device-desktop")}>
										<Desktop style={{ height: '20px', width: '20px' }} />
										{/* <img src={desktop} alt='Desktop' width='20px' height='20px' /> */}
										Desktop
									</div>
									<div onClick={() => editor.runCommand("set-device-tablet")}>
										<Ipad style={{ height: '20px', width: '20px' }} />
										{/* <img src={ipad} alt='Tablet' width='20px' height='20px' /> */}
										Tablet
									</div>
									<div onClick={() => editor.runCommand("set-device-mobile")} >
										<Mobile style={{ height: '20px', width: '20px' }} />
										{/* <img src={mobile} alt='Mobile' width='20px' height='20px' /> */}
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
