import React, { Component } from "react";
import { cancel, helperIcon, upload, favicon } from "./icons";
import Modal from "react-modal";
import "./pageSettingModal.scss";

Modal.setAppElement("#root");

class PageSettingModal extends Component {
	state = {
		title: "",
		description: "",
		previewTitle: "",
		previewDescription: "",
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	handleFormSubmit = (e) => {
		e.preventDefault();
		//console.log("create page req");
		if (this.props.pageSetting.name) {
			this.props.sendEditPageReq(this.state.title);
		} else {
			this.props.createPage(this.state.title);
		}
		this.setState({
			title: "",
			description: "",
		});
		this.props.closeModal();
	};

	componentDidMount = () => {
		setTimeout(() => {
			let { pageSetting } = this.props;
			//console.log("pageSetting ", pageSetting);
			if (pageSetting) {
				this.setState({
					title: pageSetting.name,
				});
			}
		}, 5000);
	};
	componentDidUpdate = (prevProps) => {
		let { pageSetting } = this.props;
		if (pageSetting.name !== prevProps.pageSetting.name) {
			if (pageSetting) {
				this.setState({
					title: pageSetting.name,
				});
			}
		}
	};
	render() {
		return (
			<Modal {...this.props} contentLabel='Example Modal'>
				<header>
					<h4>{this.props.pageSetting.name || "New Page"} Setting</h4>
					<img src={cancel} alt='close' onClick={this.props.closeModal} />
				</header>
				<form onSubmit={this.handleFormSubmit} autoComplete='off'>
					<label htmlFor='page-title'>Page title</label>
					<input
						type='text'
						name='title'
						value={this.state.title}
						onChange={this.handleChange}></input>
					<label className='helper-text'>
						<img src={helperIcon} alt='helper-icon' />
						character. Most search engines use a maximum of 57 chars for the
						home title
					</label>

					<label htmlFor='page-description'>Page Description</label>
					<textarea
						name='description'
						value={this.state.description}
						onChange={this.handleChange}></textarea>
					<label className='helper-text'>
						<img src={helperIcon} alt='helper-icon' />
						character. Most search engines use a maximum of 60 chars for the
						home description
					</label>

					{/* SEO settings section */}
					<div>
						<h4>SEO Setting</h4>
						<label className='helper-text seo-setting'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Accusamus placeat accusantium unde doloribus.
						</label>
					</div>
					<div className='seo-preview'>
						<h5>{this.state.previewTitle || "Untitled"}</h5>
						<span>website.com/{`${this.state.previewTitle}`}</span>
						<label className='helper-text'>
							{this.state.previewDescription || "meta description"}
						</label>
					</div>
					<label htmlFor='page-title'>Page title</label>
					<input
						type='text'
						name='previewTitle'
						value={this.state.previewTitle}
						onChange={this.handleChange}></input>
					<label className='helper-text'>
						<img src={helperIcon} alt='helper-icon' />
						character. Most search engines use a maximum of 57 chars for the
						home title
					</label>

					<label htmlFor='page-description'>Page Description</label>
					<textarea
						name='previewDescription'
						value={this.state.previewDescription}
						onChange={this.handleChange}></textarea>
					<label className='helper-text'>
						<img src={helperIcon} alt='helper-icon' />
						character. Most search engines use a maximum of 60 chars for the
						home description
					</label>

					{/* Favicon section */}
					<div>
						<h4>Favicon</h4>
					</div>
					<div className='favicon-content'>
						<div className='favicon-box'>
							<img src={favicon} alt='favicon' />
						</div>
						<div id='upload-btn'>
							<label htmlFor='files' className='upload-btn'>
								<img src={upload} alt='upload-icon' />
								Upload
							</label>
							<input id='files' style={{ display: "none" }} type='file' />
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
			</Modal>
		);
	}
}

export default PageSettingModal;
