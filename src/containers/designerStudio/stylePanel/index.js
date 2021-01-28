import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import "./index.scss";
import _grapesEditor from "../../../components/utils/grapesEditor";
import ClassManager from "./classManager";
import StyleManager from "./styleManager";
import ViewMode from "./viewMode";
import Traits from "./traits";

class StylePanel extends React.Component {
	constructor(props) {
		super(props);
	}
	state = {};
	render() {
		const {} = this.state;
		const { selected, parentNode } = this.props;
		return (
			<div className={"style-panel-container"}>
				{/* <pre className={'pre'} style={{ whiteSpace: 'break-spaces' }}>{JSON.stringify(selected.styleInfo)}</pre> */}
				<div className={"styles-container"}>
					{/* classes */}
					<ClassManager selected={selected} gjsSelected={this.props.gjsSelected} editorNode={parentNode} />
					{/* Settings */}
					<Traits gjsSelected={this.props.gjsSelected}/>
					{/* styles */}
					<StyleManager selected={selected} editorNode={parentNode} resetBuilder={this.props.resetBuilder} />
				</div>
				{/* View Mode */}
				<ViewMode selected={selected} editorNode={parentNode} />
			</div>
		);
	}
}

const mapStateToProps = ({ global, layout, templates, editorHistory }) => {
	return {
		loading: global.loading,
		templates,
		styleObj: JSON.parse(editorHistory.present.styleObj),
	};
};

const mapDispatchToProps = (dispatch) => {
	return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(StylePanel);
