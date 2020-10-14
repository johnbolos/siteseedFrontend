import React, { Component } from "react";
import {
	addPage as AddPage,
	page as Page,
	show as Show,
	setting as Setting,
	search as Search
} from "./icons";
import _grapesEditor from "../../../components/utils/grapesEditor";
import { connect } from "react-redux";
import {
	changePage,
	createPage,
	editPageSetting,
} from "../../../reducers/actions/pageActions";
import PageSettingModal from "./PageSettingModal";

class PageManager extends Component {
	state = {
		modalIsOpen: false,
		pageSetting: {},
		editPageIndex: null,
		searchInput: "",
		filteredPages: [],
	};

	createPage = (title, details) => {
		//creating new page
		//new page should be blank
		//const { editor } = _grapesEditor;
		//new page from a template
		/* let components = JSON.parse(JSON.stringify(editor.getComponents()));
		let style = JSON.parse(JSON.stringify(editor.getStyle())); */

		//blank new page
		let components = "";
		let style = "";
		console.log(this.props.pageReducer);
		this.props.createNewPage(title, components, style, details);
	};
	changeTemplate = async (index) => {
		const { editor } = _grapesEditor;
		let { pageReducer } = this.props;

		await this.props.changeCurrentPage(pageReducer.currentPage, index);
		editor.setComponents(pageReducer.pages[index].components);
		// editor.setStyle(pageReducer.pages[index].style);
	};
	closeModal = () => {
		this.setState({
			modalIsOpen: false,
		});
	};

	openSettings = async (index) => {
		this.setState(
			{
				pageSetting: this.props.pageReducer.pages[index],
				editPageIndex: index,
			},
			() => {
				this.setState({
					modalIsOpen: true,
				});
			}
		);
	};
	handleChange = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value,
			},
			() => {
				let { filteredPages, searchInput } = this.state;
				const { pageReducer } = this.props;
				if (searchInput) {
					filteredPages = pageReducer.pages.filter((page) =>
						(page.name.toLowerCase()).includes(searchInput.toLowerCase())
					);
					this.setState({
						filteredPages,
					});
				} else {
					this.setState({
						filteredPages: pageReducer.pages,
					});
				}
			}
		);
	};
	editPageRequest = (pageName) => {
		this.props.editPage(this.state.editPageIndex, pageName);
	};
	componentDidMount = () => {
		this.setState({
			filteredPages: this.props.pageReducer.pages,
		});
	};
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.pageReducer.pages !== this.props.pageReducer.pages) {
			this.setState({
				filteredPages: this.props.pageReducer.pages,
			});
		}
	}
	render() {
		const { filteredPages } = this.state;
		return (
			<>
				<div>
					<Search className='search-icon' />
					<input
						type='text'
						placeholder='Search'
						name='searchInput'
						onChange={this.handleChange}
						value={this.state.searchInput}
					/>
					<div
						className='add-page'
						onClick={() =>
							this.setState({
								pageSetting: {},
								modalIsOpen: true,
							})
						}>
						<AddPage />
					</div>
				</div>
				<ul>
					{filteredPages &&
						filteredPages.map((pageElem, index) => (
							<li key={index} className='pages'>
								<div onClick={() => this.changeTemplate(index)}>
									<Page className='page' />
									{pageElem.name}
								</div>
								<div>
									<Setting
										className='setting'
										onClick={() => this.openSettings(index)}
									/>
									<Show style={{ marginRight: '0px' }} />
								</div>
							</li>
						))}
				</ul>
				<PageSettingModal
					isOpen={this.state.modalIsOpen}
					onRequestClose={() =>
						this.setState({
							modalIsOpen: false,
						})
					}
					closeModal={this.closeModal}
					className='Modal'
					overlayClassName='Overlay'
					createPage={this.createPage}
					pageSetting={this.state.pageSetting}
					sendEditPageReq={this.editPageRequest}
					editPageIndex={this.state.editPageIndex}
				/>
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
		createNewPage: (name, components, style, details) =>
			dispatch(createPage(name, components, style, details)),
		editPage: (index, pageName) => dispatch(editPageSetting(index, pageName)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageManager);
