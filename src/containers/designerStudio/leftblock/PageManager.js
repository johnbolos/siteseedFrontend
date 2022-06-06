import React, { Component } from "react";
import {
	addPage as AddPage,
	page as Page,
	show as Show,
	Hide,
	setting as Setting,
	search as Search,
	DeletePage,
	HomePage
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
import { resetHistory } from "../../../reducers/actions/editorHistoryActions";
import styleManager from "../../../components/utils/grapesEditor/styleManager";

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
	changePage = (index, changeCurrentPageState = true) => {
		return new Promise(async resolve => {
			const { editor } = _grapesEditor;
			let { pageReducer, dispatch } = this.props;
			if (pageReducer.currentPage == index) {
				return
			}
			if (changeCurrentPageState) {
				await this.props.changeCurrentPage(pageReducer.currentPage, index);
			}
			editor.setComponents(pageReducer.pages[index].components);

			console.log(index, 'sss.p page change index')
			// Reinit Style Manager
			let style = `<style> ${pageReducer.pages[index].style} </style>`
			styleManager.init({ styleStr: style, dispatch, styleFontStr: pageReducer.pages[index].styleFontStr, customCss: pageReducer.pages[index].customCss, reset: true });

			// editor.setStyle(pageReducer.pages[index].style);
			this.props.designerStudioNode.setState({ gjsSelected: null, selected: { node: null, styleInfo: null } })
			editor.select()
			const um = editor.UndoManager
			um.clear()
			dispatch(resetHistory())
			return resolve()
		})
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
	deletePage = async (index) => {
		const { pageReducer: { currentPage, pages }, dispatch } = this.props
		if (index == currentPage) {
			let switchPage = (index == pages.length - 1) ? index - 1 : index + 1
			await this.changePage(switchPage, false)
		}
		pages.splice(index, 1)
		await dispatch({ type: 'DELETE_PAGE', payload: pages })
	}
	setHomePage = (index) => {
		const { dispatch } = this.props
		dispatch({ type: 'SET_HOME', payload: index })
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
							<li key={index} className={`pages ${pageReducer.pages[index] && pageReducer.pages[index].hidden && 'hide-page'} ${pageReducer.currentPage == index && 'current-page'}`} onClick={() => {
								if (pageReducer.pages[index].hidden) return

								this.changePage(index)
							}}>
								<div>
									<Page className='page' />
									{pageElem.name}
								</div>
								<div>
									<HomePage style={{ height: '14px', width: '14px' }}
										id={pageElem.homePage ? 'home-page-icon' : ''}
										onClick={(e) => {
											e.stopPropagation()
											if (pageElem.homePage) {
												return
											}
											// this.showHide(index)
											this.setHomePage(index)
										}}
									/>
									<Setting
										className='setting'
										onClick={(e) => {
											e.stopPropagation()
											this.openSettings(index)
										}}
									/>
									{/* {!pageReducer.pages[index].hidden && <Show style={{ marginRight: '0px' }}
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
									/>} */}
									<DeletePage style={{ marginRight: '0px', height: '14px', width: '14px', opacity: (pageReducer.pages.length == 1 || pageElem.homePage) ? 0.55 : 1 }}
										onClick={(e) => {
											e.stopPropagation()
											if (pageReducer.pages.length == 1 || pageElem.homePage) {
												return
											}
											// this.showHide(index)
											this.deletePage(index)
										}}
									/>
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
