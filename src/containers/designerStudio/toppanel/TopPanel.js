import React, { Component } from "react";
import { connect } from "react-redux"
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
import { addStaticContent } from "../../../components/utils";

class TopPanel extends Component {
	changeDevice = () => {
		$("#device").toggleClass("hide-top");
		$(".responsive-overlay").toggleClass("hide-top");
		$(".device-text").toggleClass("hide-top");
	};
	showPreview = async () => {
		const { s3Dir, pagesStore, dispatch } = this.props
		// call grapes export config function
		const exportContent = _grapesEditor.exportConfigData()
		const location = await addStaticContent(exportContent, { s3Dir, dispatch, pagesStore })
		console.log(location, 'sss.p')
		if (location != '') { window.open(location, '_blank'); }
	}
	render() {
		const { s3Dir, dispatch } = this.props
		return (
			<>
				<div className='logo' onClick={() => { dispatch(getPushPathWrapper("home")) }}>
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
								<div onClick={() => _grapesEditor.editor.runCommand("set-device-desktop")}>
									<Desktop style={{ height: '20px', width: '20px' }} />
									{/* <img src={desktop} alt='Desktop' width='20px' height='20px' /> */}
										Desktop
									</div>
								<div onClick={() => _grapesEditor.editor.runCommand("set-device-tablet")}>
									<Ipad style={{ height: '20px', width: '20px' }} />
									{/* <img src={ipad} alt='Tablet' width='20px' height='20px' /> */}
										Tablet
									</div>
								<div onClick={() => _grapesEditor.editor.runCommand("set-device-mobile")} >
									<Mobile style={{ height: '20px', width: '20px' }} />
									{/* <img src={mobile} alt='Mobile' width='20px' height='20px' /> */}
										Mobile
									</div>
							</div>
						</div>
					</span>
					<span className='gjs-pn-btn' onClick={() => {
						this.showPreview()
					}}>
						<div class="tooltip">
							<div>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.74446 16.7737C8.9808 16.9201 9.22895 17 9.47711 17C9.73708 17 9.99705 16.9201 10.2334 16.7604L15.2674 13.4332C15.7282 13.1271 16 12.5948 16 11.9959C16 11.397 15.7282 10.8646 15.2674 10.5585L10.2334 7.23127C9.77253 6.92517 9.21713 6.92517 8.74446 7.21796C8.27179 7.52407 8 8.05642 8 8.66863V15.3231C8 15.9353 8.2836 16.481 8.74446 16.7737ZM8.94535 8.66863C8.94535 8.34922 9.13442 8.18951 9.21713 8.13627C9.2644 8.10966 9.35894 8.05642 9.48892 8.05642C9.57164 8.05642 9.66617 8.08304 9.76071 8.13627L14.7947 11.4635C15.031 11.6232 15.0547 11.8761 15.0547 11.9825C15.0547 12.089 15.031 12.3419 14.7947 12.5016L9.76071 15.8554C9.51256 16.0151 9.29985 15.9087 9.21713 15.8554C9.13442 15.8022 8.94535 15.6425 8.94535 15.3231V8.66863Z" fill="#C0C0C0" />
								</svg>
							</div>
							<span class="tooltiptext">Preview</span>
						</div>
					</span>
				</div>
			</>
		);
	}
}


const mapStateToProps = ({ global, layout, pageReducer, }) => {
	return {
		loading: global.loading,
		theme: layout.theme,
		pagesStore: pageReducer,
		currentUser: global.currentUser,
		s3Dir: global.userS3Dir,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel)