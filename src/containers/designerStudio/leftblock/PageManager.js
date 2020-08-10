import React, { Component } from "react";
import { addPage, page, show, setting, search } from "./icons";
import _grapesEditor from "../../../components/utils/grapesEditor";
import { connect } from "react-redux";
import { changePage, createPage } from "../../../reducers/actions/pageActions";

class PageManager extends Component {
	state = {
		initComponents: [],
		initStyles: [],
	};

	createPage = () => {
		//creating new page
		//new page should be blank
		const { editor } = _grapesEditor;
		let components = JSON.parse(JSON.stringify(editor.getComponents()));
		let style = JSON.parse(JSON.stringify(editor.getStyle()));
		console.log(this.props.pageReducer);
		this.props.createNewPage("newPAge", components, style);
	};
	changeTemplate = async (index) => {
		const { editor } = _grapesEditor;
		let { pageReducer } = this.props;
		console.log(index);

		await this.props.changeCurrentPage(pageReducer.currentPage, index);
		//console.log(pageReducer.pages[index], index);
		editor.setComponents(pageReducer.pages[index].components);
		editor.setStyle(pageReducer.pages[index].style);
	};

	render() {
		const { pageReducer } = this.props;
		return (
			<>
				<div>
					<img src={search} alt='search' className='search-icon' />
					<input type='text' placeholder='Search' />
					<div onClick={this.createPage}>
						<img src={addPage} alt='add-page' />
					</div>
				</div>
				<ul>
					{pageReducer.pages &&
						pageReducer.pages.map((pageElem, index) => (
							<li key={index}>
								<div onClick={() => this.changeTemplate(index)}>
									<img src={page} alt='page' className='page' />
									{pageElem.name}
								</div>
								<div>
									<img className='setting' src={setting} alt='setting' />
									<img src={show} alt='show' />
								</div>
							</li>
						))}
				</ul>
			</>
		);
	}
}

const mapStateToProps = ({ pageReducer }) => {
	return {
		pageReducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeCurrentPage: (currentPageIndex, newPageIndex) =>
			dispatch(changePage(currentPageIndex, newPageIndex)),
		createNewPage: (name, components, style) =>
			dispatch(createPage(name, components, style)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageManager);
