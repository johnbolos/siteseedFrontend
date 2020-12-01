import React, { Component } from "react";
import _ from 'lodash'
import { cancel as Cancel, helperIcon as HelperIcon, upload, favicon as faviconIcon } from "./icons";
import shortid from 'shortid'
import Modal from "react-modal";
import "./pageSettingModal.scss";
import { connect } from "react-redux";
import { editPage } from "../../../reducers/actions/pageActions";
import { setS3Dir } from "../../../reducers/actions/userActions";
import _s3 from "../../../components/utils/s3"

Modal.setAppElement("#root");

class PageSettingModal extends Component {
	state = {
		title: "",
		description: "",
		previewTitle: "",
		previewDescription: "",
		favicon: null,
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	handleFormSubmit = (e) => {
		const { dispatch, pageReducer, editPageIndex } = this.props
		e.preventDefault();
		const {
			title,
			description,
			previewTitle,
			previewDescription,
			favicon
		} = this.state
		console.log('bbb.p', editPageIndex, !_.isUndefined(editPageIndex), !_.isNull(editPageIndex))
		if (!_.isUndefined(editPageIndex) && !_.isNull(editPageIndex)) {
			// this.props.sendEditPageReq(this.state.title);
			let pageObj = pageReducer.pages[editPageIndex]
			pageObj = {
				...pageObj,
				name: _.startCase(title),
				desp: description,
				favicon: favicon,
				seo: {
					name: _.startCase(previewTitle),
					desp: previewDescription
				}
			}
			dispatch(editPage(editPageIndex, pageObj))
		} else {
			let pageObj = {
				name: _.startCase(title),
				desp: description,
				favicon: favicon,
				seo: {
					name: _.startCase(previewTitle),
					desp: previewDescription
				}
			}
			console.log('bbb.p creating new page')
			this.props.createPage(this.state.title, pageObj);
		}
		this.setState({
			title: "",
			description: "",
			previewTitle: "",
			previewDescription: "",
			favicon: null
		});
		this.props.closeModal();
	};
	setFormFields = () => {
		const { pageSetting } = this.props
		if (!pageSetting || Object.keys(pageSetting).length === 0) {
			this.setState({
				title: '',
				description: '',
				favicon: null,
				previewTitle: '',
				previewDescription: '',
			})
			return
		}
		this.setState({
			title: _.startCase(pageSetting.name),
			description: pageSetting.desp,
			favicon: pageSetting.favicon,
			previewTitle: _.startCase(pageSetting.seo.name),
			previewDescription: pageSetting.seo.desp,
		})
	}
	handleUpload = async (e, mouseDrop) => {
		let { dispatch, assets, userS3Dir } = this.props
		let files = []
		if (mouseDrop) {
			// e.preventDefault()
			// e.stopPropagation()
			files = e.dataTransfer ? e.dataTransfer.files : []
		} else {
			files = e.target.files
		}
		if (files && files.length == 0) {
			return
		}
		if (files[0].size > 2000000) {
			console.log('please upload a file smaller than 2MB')
			return
		}
		if (!/jpeg|jpg|gif|png|svg|ico/.test(files[0].type)) {
			console.log('Invalid File Type')
			return
		}
		this.setState({ loading: true })
		let s3Dir = userS3Dir
		if (!s3Dir) {
			// create new userS3Dir
			s3Dir = shortid.generate()
			dispatch(setS3Dir(s3Dir))
		}
		_s3.uploadFile(files[0], s3Dir, (resp) => {
			this.setState({ loading: false })
			if (resp.error || !resp.data.location) {
				if (resp.message) {
					console.error(resp.message)
				}
				console.error('Empty Location returned')
				return
			}
			// this.handleAddImage(resp.data.location)
			this.setState({ favicon: resp.data.location })
		})
	}
	render() {
		const { theme, pageReducer } = this.props
		const isInvalid = (e) => {
			let pageExists = _.find(pageReducer.pages, (item) => {
				return _.startCase(e.target.value) == item.name
			})
			if (pageExists) {
				e.target.setCustomValidity('Please enter a unique Page Name')
			} else {
				e.target.setCustomValidity('')
			}
		}
		return (
			<Modal {...this.props} className={`Modal modal-theme-${theme}`} onAfterOpen={this.setFormFields} contentLabel='Example Modal'>
				<header>
					<h4>{this.props.pageSetting.name || "New Page"} Setting</h4>
					<Cancel onClick={this.props.closeModal} />
				</header>
				<div className={'modal-form-container'}>
					<form onSubmit={this.handleFormSubmit} autoComplete='off'>
						<label htmlFor='page-title'>Page Title</label>
						<input
							required
							onInput={isInvalid}
							type='text'
							name='title'
							value={this.state.title}
							onChange={this.handleChange}></input>
						<label className='helper-text'>
							<HelperIcon />
						character. Most search engines use a maximum of 57 chars for the
						home title
					</label>

						<label htmlFor='page-description'>Page Description</label>
						<textarea
							name='description'
							value={this.state.description}
							onChange={this.handleChange}></textarea>
						<label className='helper-text'>
							<HelperIcon />
						character. Most search engines use a maximum of 60 chars for the
						home description
					</label>

						{/* SEO settings section */}
						<div className={'seo-div'}>
							<h4>Seo Setting</h4>
							<label className='helper-text seo-setting'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Accusamus placeat accusantium unde doloribus.
						</label>
						</div>
						<div className='seo-preview'>
							<h5>{this.state.previewTitle || "Untitled"}</h5>
							<span>website.com/{`${this.state.previewTitle}`}</span>
							<label className='helper-text'>
								{this.state.previewDescription || "Meta Description"}
							</label>
						</div>
						<label htmlFor='page-title'>Title Tag</label>
						<input
							type='text'
							name='previewTitle'
							value={this.state.previewTitle}
							onChange={this.handleChange}></input>
						<label className='helper-text'>
							<HelperIcon />
						character. Most search engines use a maximum of 57 chars for the
						home title
					</label>

						<label htmlFor='page-description'>Meta Description</label>
						<textarea
							name='previewDescription'
							value={this.state.previewDescription}
							onChange={this.handleChange}></textarea>
						<label className='helper-text'>
							<HelperIcon />
						character. Most search engines use a maximum of 60 chars for the
						home description
					</label>

						{/* Favicon section */}
						<div className={'favicon-heading'}>
							<h4>Favicon</h4>
						</div>
						<div className='favicon-content'>
							<div className='favicon-box'>
								<img src={this.state.favicon || faviconIcon} alt='favicon' />
							</div>
							<div id='upload-btn'>
								<label htmlFor='files' className='upload-btn'>
									<img src={upload} alt='upload-icon' />
                                Upload
                            </label>
								{/* <input id='files' style={{ display: "none" }} type='file' /> */}
								<input
									type="file"
									id='files'
									accept="image/*"
									// multiple
									style={{ display: 'none' }}
									onChange={this.handleUpload}
								/>
								<label className='helper-text'>
									Upload a 32X32 pixel Icon, PNG, GIF, or JPG to display in
									browser tabs.
							</label>
							</div>
						</div>
						<footer>
							<button type='submit'>
								{this.props.pageSetting.name ? "Update" : "Save"}
							</button>
						</footer>
					</form>
				</div>
			</Modal>
		);
	}
}

const mapStateToProps = ({ global, layout, pageReducer }) => {
	return {
		pageReducer,
		theme: layout.theme,
		userS3Dir: global.userS3Dir
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSettingModal);