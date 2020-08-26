import React from "react";
import { search } from "./icons";
import _grapesEditor from "../../../components/utils/grapesEditor";

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
		}, 1000);
	}

	render() {
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
				<div>
					<div id='layer-manager'></div>
				</div>
			</>
		);
	}
}

export default LayerManager;
