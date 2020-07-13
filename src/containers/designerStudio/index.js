import React, { useEffect } from "react";
import { connect } from "react-redux";
import grapesjs from "grapesjs";

import "./index.scss";
//import GlobalLayoutWrapper from "../../components/layout/globalLayoutWrapper"
import { showLoader, hideLoader } from "../../reducers/actions";
import _grapesEditor from "../../components/utils/grapesEditor";

import { html, template1Html, template1Style } from "./dummie";
import { landingHtml, landingStyle } from "./templates/landing";
import { landing2Html, landing2Style } from "./templates/landing2";
import {
	logo,
	addElem,
	components,
	layers,
} from "../designerStudio/panels/icons";
import SlideDrawer from "./slideDrawer/slideDrawer";
import Backdrop from "./slideDrawer/backdrop";

class DesignerStudio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "blue",
			clientCode: null,
			drawerOpen: false,
		};
		// this.showDetails = this.showDetails.bind(this);
	}

	html = () => {
		return `<div style="background-color: red;">
        <br></br><a id='h1qert' href="http://google.com">Link13</a>
        {/* <span data-gjs-stylable="false">Link13</span> */}
        <h1 class='fo'>Link13</h1>
    </div>`;
	};

	componentDidMount() {
		this.StartEditor();
		/*    setTimeout(() => {
          // console.log(_grapesEditor.getCode())
        }, 5000) */
	}

	StartEditor = () => {
		const { html } = this.state;
		const { templateName } = this.props.templates;
		let tempHtml, tempStyle;
		switch (templateName) {
			case "template1":
				tempHtml = template1Html;
				tempStyle = template1Style;
				break;
			case "template2":
				tempHtml = landing2Html;
				tempStyle = landing2Style;
				break;
			case "template3":
				tempHtml = landingHtml;
				tempStyle = landingStyle;
				break;
			default:
				break;
		}

		_grapesEditor.init({
			components: tempHtml + tempStyle,
		});
	};

	temp = () => {
		console.log("temporary function");
		// const { editor } = _grapesEditor
		//============Change Css dynamically =================================
		const frame = document.getElementsByClassName("gjs-frame");
		const element = frame[0].contentWindow.document.getElementsByClassName(
			"logo"
		);
		console.log(element);
		element[0].style.backgroundColor = "red";
	};

	drawerToggleClickHandler = () => {
		this.setState({
			drawerOpen: !this.state.drawerOpen,
		});
	};
	backdropClickHandler = () => {
		this.setState({
			drawerOpen: false,
		});
	};
	render() {
		let backdrop;
		if (this.state.drawerOpen) {
			backdrop = <Backdrop close={this.backdropClickHandler} />;
		}
		/* const {
			pageContext: { pageData },
			loading,
		} = this.props; */
		return (
			<div>
				{backdrop}
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "row",
						height: "100%",
						width: "100%",
					}}>
					<div
						style={{
							height: "100%",
							width: "100%" /* backgroundColor: "red"  */,
						}}>
						<div className='panel__top'>
							<div className='logo'>
								<img src={logo} alt='logo'></img>
							</div>
							<div className='panel__devices'></div>
							<div className='panel__basic-actions'></div>
						</div>

						<div className='body-container'>
							<div className='left-pane'>
								<img
									src={addElem}
									alt='logo'
									onClick={this.drawerToggleClickHandler}
								/>
								<img src={components} alt='logo'></img>
								<img src={layers} alt='logo'></img>
							</div>
							<div id='blocks'>
								{" "}
								{this.state.drawerOpen && (
									<SlideDrawer show={this.state.drawerOpen} />
								)}
							</div>
							<div id='grapesEditor'></div>
							<div
								id='style-manager'
								style={{
									width: "17%",
									overflowY: "overlay",
									display: "flex",
									flexDirection: "column",
								}}>
								<div id='selectors-container'></div>
								<div id='style-manager-container'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ global, layout, templates }) => {
	return { loading: global.loading, templates };
};

const mapDispatchToProps = (dispatch) => {
	return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignerStudio);
