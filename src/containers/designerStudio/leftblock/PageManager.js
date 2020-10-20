import React, { Component } from "react";
import {
	addPage as AddPage,
	page as Page,
	show as Show,
	Hide,
	setting as Setting,
	search as Search
} from "./icons";
import _grapesEditor from "../../../components/utils/grapesEditor";
import { connect } from "react-redux";
import {
	changePage,
	createPage,
	editPageSetting,
	saveChanges,
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
		this.props.createNewPage(title, components, style, details);
	};
	changeTemplate = async (index) => {
		const { editor } = _grapesEditor;
		let { pageReducer } = this.props;
		if (pageReducer.currentPage == index) {
			return
		}
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
	showHide = (index) => {
		const { pageReducer: { currentPage, pages }, dispatch } = this.props
		if (currentPage == index) {
			console.error('Cannot hide currently opened page')
			return
		}
		dispatch(saveChanges(index, {
			hidden: !pages[index].hidden
		}))
	}
	render() {
		const { filteredPages } = this.state;
		const { pageReducer } = this.props
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
							<li key={index} className={`pages ${pageReducer.pages[index].hidden && 'hide-page'}`} onClick={() => {
								if (pageReducer.pages[index].hidden) return
								
								this.changeTemplate(index)
							}}>
								<div>
									<Page className='page' />
									{pageElem.name}
								</div>
								<div>
									<Setting
										className='setting'
										onClick={(e) => {
											e.stopPropagation()
											this.openSettings(index)
										}}
									/>
									{!pageReducer.pages[index].hidden && <Show style={{ marginRight: '0px' }}
										onClick={(e) => {
											e.stopPropagation()
											this.showHide(index)
										}}
									/>}
									{pageReducer.pages[index].hidden && <Hide style={{ marginRight: '0px', height: '14px', width: '14px' }}
										onClick={(e) => {
											e.stopPropagation()
											this.showHide(index)
										}}
									/>}
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
		dispatch,
		changeCurrentPage: (currentPageIndex, newPageIndex) =>
			dispatch(changePage(currentPageIndex, newPageIndex)),
		createNewPage: (name, components, style, details) =>
			dispatch(createPage(name, components, style, details)),
		editPage: (index, pageName) => dispatch(editPageSetting(index, pageName)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageManager);
