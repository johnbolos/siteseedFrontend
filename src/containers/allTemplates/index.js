import React from "react";
import { connect } from "react-redux";

import './style.scss'
import { showLoader, hideLoader } from "../../reducers/actions";
import { selectTemplate, setCurrentTemplate } from "../../reducers/actions/templateActions";
import { getPushPathWrapper } from "../../routes";

function AllTemplates({ dispatch, loading, templates }) {
	return (
		<div>
			<header id="i4oc" class="header-banner">
				<div id="rfwed" class="container-width dcfwd">
					<div id="igec" class="logo-container">
						<div class="logo">Site Seed
		</div>
					</div>
					<nav id="i3qi" class="menu">
						<div id="i4yn" class="menu-item">BUILDER
		</div>
						<div id="iw4k" class="menu-item">TEMPLATE
		</div>
						<div id="imvz" class="menu-item">WEB
		</div>
					</nav>
					<div class="clearfix">
					</div>
					<div id="ic24x" class="lead-title">Build your templates without coding
	  </div>
					<div id="i3dx1" class="sub-lead-title">All text blocks could be edited easily with double clicking on it. You can create new text blocks with the command from the left panel
	  </div>
					<div
						class="lead-btn"
						onClick={() => {
							dispatch(selectTemplate("template1"))
							dispatch(getPushPathWrapper("designerStudio"))
						}}
					>
						Edit this Layout
	  </div>
					{/* <div
						class="lead-btn"
						onClick={() => {
							dispatch(selectTemplate("inProgress"))
							dispatch(getPushPathWrapper("designerStudio"));
						}}
					>
						Continue where you left ?
	  </div> */}
				</div>
			</header>
			<section id="i5ao9" class="flex-sect">
				<div class="container-width">
					<div id="ib3kj" class="flex-title">Flex is the new black
	  </div>
					<div class="flex-desc">With flexbox system you're able to build complex layouts easily and with free responsivity
	  </div>
					<div id="ifnlj" class="cards">
						<div class="card" style={{ backgroundImage: 'url("/assets/templates/spa/thumbnail.jpg")' }} onClick={() => {
							dispatch(selectTemplate("spa"))
							dispatch(setCurrentTemplate("spa"))
							dispatch(getPushPathWrapper("designerStudio"))
						}}>
						</div>
						<div class="card" style={{ backgroundImage: 'url("/assets/templates/therapists/thumbnail.jpg")' }} onClick={() => {
							dispatch(selectTemplate("therapists"))
							dispatch(setCurrentTemplate("therapists"))
							dispatch(getPushPathWrapper("designerStudio"))
						}}>
						</div>
						<div class="card" style={{ backgroundImage: 'url("/assets/templates/agencyGrey/thumbnail.jpg")' }} onClick={() => {
							dispatch(selectTemplate("agencyGrey"))
							dispatch(setCurrentTemplate("agencyGrey"))
							dispatch(getPushPathWrapper("designerStudio"))
						}}>
						</div>
						<div class="card" style={{ backgroundImage: 'url("/assets/templates/agencyDark/thumbnail.jpg")' }} onClick={() => {
							dispatch(selectTemplate("agencyDark"))
							dispatch(setCurrentTemplate("agencyDark"))
							dispatch(getPushPathWrapper("designerStudio"))
						}}>
						</div>
						<div class="card" style={{ backgroundImage: 'url("/assets/templates/landingPage/thumbnail.jpg")' }} onClick={() => {
							dispatch(selectTemplate("landingPage"))
							dispatch(setCurrentTemplate("landingPage"))
							dispatch(getPushPathWrapper("designerStudio"))
						}}>
						</div>
						<div class="card" style={{ backgroundImage: 'url("/assets/templates/restaurant1/thumbnail.jpg")' }} onClick={() => {
							dispatch(selectTemplate("restaurant1"))
							dispatch(setCurrentTemplate("restaurant1"))
							dispatch(getPushPathWrapper("designerStudio"))
						}}>
						</div>
						<div class="card" style={{ backgroundImage: 'url("/assets/templates/carpentry/thumbnail.jpg")' }} onClick={() => {
							dispatch(selectTemplate("carpentry"))
							dispatch(setCurrentTemplate("carpentry"))
							dispatch(getPushPathWrapper("designerStudio"))
						}}>
						</div>
						<div class="card">
						</div>
						<div class="card">
						</div>
						<div class="card">
						</div>
						<div class="card">
						</div>
						<div class="card">
						</div>
					</div>
				</div>
			</section>
			<section id="i2uzg" class="am-sect">
				<div class="container-width">
					<div id="izjru" class="am-container">
						<img onmousedown="return false" src="https://grapesjs.com/img/phone-app.png" id="if5bd" class="img-phone dcfd ff h" />
						<div class="am-content">
							<div class="am-pre">ASSET MANAGER
		  </div>
							<div class="am-title">Manage your images with Asset Manager
		  </div>
							<div class="am-desc">You can create image blocks with the command from the left panel and edit them with double click
		  </div>
							<div class="am-post">Image uploading is not allowed in this demo
		  </div>
						</div>
					</div>
				</div>
			</section>
			<section id="ilufu" class="blk-sect">
				<div class="container-width">
					<div class="blk-title">Blocks
	  </div>
					<div class="blk-desc">Each element in HTML page could be seen as a block. On the left panel you could find different kind of blocks that you can create, move and style
	  </div>
					<div class="price-cards">
						<div class="price-card-cont">
							<div class="price-card">
								<div class="pc-title">Starter
			</div>
								<div class="pc-desc">Some random list
			</div>
								<div class="pc-feature odd-feat">+ Starter feature 1
			</div>
								<div class="pc-feature">+ Starter feature 2
							</div>
								<div class="pc-feature odd-feat">+ Starter feature 3
							</div>
								<div class="pc-feature">+ Starter feature 4
						</div>
								<div class="pc-amount odd-feat">$ 9,90/mo
							</div>
							</div>
						</div>
						<div class="price-card-cont">
							<div class="price-card pc-regular">
								<div class="pc-title">Regular
							</div>
								<div id="i62tj" class="pc-desc">Some random list
							</div>
								<div class="pc-feature odd-feat">+ Regular feature 1
							</div>
								<div class="pc-feature">+ Regular feature 2
							</div>
								<div class="pc-feature odd-feat">+ Regular feature 3
								</div>
								<div class="pc-feature">+ Regular feature 4
							</div>
								<div class="pc-amount odd-feat">$ 19,90/mo
							</div>
							</div>
						</div>
						<div class="price-card-cont">
							<div class="price-card pc-enterprise">
								<div class="pc-title">Enterprise
							</div>
								<div class="pc-desc">Some random list
							</div>
								<div class="pc-feature odd-feat">+ Enterprise feature 1
							</div>
								<div class="pc-feature">+ Enterprise feature 2
							</div>
								<div class="pc-feature odd-feat">+ Enterprise feature 3
							</div>
								<div class="pc-feature">+ Enterprise feature 4
						</div>
								<div class="pc-amount odd-feat">$ 29,90/mo
						</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="bdg-sect">
				<div class="container-width">
					<h1 class="bdg-title">The team
	  			</h1>
					<div class="badges">
						<div class="badge">
							<div class="badge-header">
							</div>
							<img src="https://grapesjs.com/img/team1.jpg" class="badge-avatar" />
							<div class="badge-body">
								<div class="badge-name">Adam Smith
			</div>
								<div class="badge-role">CEO
			</div>
								<div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
			</div>
							</div>
							<div class="badge-foot">
								<span class="badge-link">f</span>
								<span class="badge-link">t</span>
								<span class="badge-link">ln</span>
							</div>
						</div>
						<div class="badge">
							<div class="badge-header">
							</div>
							<img src="https://grapesjs.com/img/team2.jpg" class="badge-avatar" />
							<div class="badge-body">
								<div class="badge-name">John Black
			</div>
								<div class="badge-role">Software Engineer
			</div>
								<div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
			</div>
							</div>
							<div class="badge-foot">
								<span class="badge-link">f</span>
								<span class="badge-link">t</span>
								<span class="badge-link">ln</span>
							</div>
						</div>
						<div class="badge">
							<div class="badge-header">
							</div>
							<img src="https://grapesjs.com/img/team3.jpg" class="badge-avatar" />
							<div class="badge-body">
								<div class="badge-name">Jessica White
			</div>
								<div class="badge-role">Web Designer
			</div>
								<div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
			</div>
							</div>
							<div class="badge-foot">
								<span class="badge-link">f</span>
								<span class="badge-link">t</span>
								<span class="badge-link">ln</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

const mapStateToProps = ({ global, layout, templates }) => {
	return { loading: global.loading, templates };
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
		selectTemplate: (value) => dispatch(selectTemplate(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTemplates);
