import React from "react";
import FileSaver from "file-saver";
import JSZip from "jszip";
import $ from "jquery";

import {showToast} from "../../../components/utils";
import PageTemplate from "./pageTemplate.js";
import siteseedFilter from "./siteseedFilter.txt";
import siteseedFilterLib from "./siteseedFilterLib.txt";
import theme from "./theme.txt";
import themeCss from "./themeCss.txt";
import userIcon from "./user-icon.png";
import passwordLiquid from "./passwordLiquid.txt";
import lazysizes from "./lazysizes.txt";
import enJson from "./enJson.txt";
import ie11 from "./ie11.txt";
import siteseedBundleMin from "./siteseedBundleMin.txt";

export default class ExportSite extends React.Component {
	state = {};
	componentDidMount() {
		this.props.onRef(this);
	}
	componentWillUnmount() {
		this.props.onRef(null);
	}
	async readZipFolder(fileUrl) {
		let jsonData;
		await $.get(fileUrl, {paramOne: 1, paramX: "abc"}, function (data) {
			jsonData = JSON.parse(data);
		}).catch(error => {
			// handle your errors here
			console.error(error);
		});

		let htmlFile = jsonData["index.html"] || "";
		let footerJSON =
			jsonData.footerJSON && htmlFile.includes("<!-- footer-ul -->")
				? jsonData.footerJSON
				: [];
		let headerJSON =
			jsonData.headerJSON && htmlFile.includes("<!-- header-ul -->")
				? jsonData.headerJSON
				: [];
		let socialJSON =
			jsonData.socialJSON && htmlFile.includes("<!-- social-ul -->")
				? jsonData.socialJSON
				: [];
		let styleFile = jsonData.css["index.css"] || "";
		let sectionJSON = jsonData.sectionJSON || [];
		let thumbnail = jsonData["thumbnail"] || "";
		let templateName =
			(jsonData["template_name"] && jsonData["template_name"].toLowerCase()) ||
			"";
		let siteName =
			templateName !== "" ? jsonData["template_name"] : this.props.site_name;
		templateName = templateName.replace(/\s+/g, "");
		let cssJSON = {
			"font-color": "#000000",
			"button-text-color": "#ffffff",
			"button-background-color": "#000000",
			"button-text-color-hover": "#ffffff",
			"button-background-color-hover": "#000000",
			"font-family-header": `"Playfair Display", serif`,
			"font-family-body": `"Playfair Display", serif`,
		};
		if (jsonData["cssJSON"]) {
			cssJSON = {...cssJSON, ...jsonData["cssJSON"]};
		}
		htmlFile = htmlFile
			.replaceAll("&amp;", `&`)
			.replaceAll("&quot;", `"`)
			.replaceAll("&#039;", `'`)
			.replaceAll("&gt;", `>`)
			.replaceAll("&lt;", `<`)
			.replaceAll(`\\"`, `"`)
			.replaceAll("\t", `	`)
			.replaceAll(
				"\n;",
				`
					`
			);
		let otherPages = [];
		jsonData.pageManager.map(x => {
			if (x.homePage !== true) {
				let pageName = x.name.toLowerCase();
				let page = {name: pageName};
				page["htmlFile"] = jsonData[`${pageName}.html`] || "";
				page["htmlFile"] = page["htmlFile"]
					.replaceAll("&amp;", `&`)
					.replaceAll("&quot;", `"`)
					.replaceAll("&#039;", `'`)
					.replaceAll("&gt;", `>`)
					.replaceAll("&lt;", `<`)
					.replaceAll(`\\"`, `"`)
					.replaceAll("\t", `	`)
					.replaceAll(
						"\n;",
						`
					`
					);
				page["cssFile"] = x.style || "";
				otherPages.push(page);
			}
			return x;
		});

		this.setState({
			htmlFile,
			styleFile,
			footerJSON,
			headerJSON,
			socialJSON,
			cssJSON,
			sectionJSON,
			thumbnail,
			templateName,
			siteName,
			otherPages,
		});
		return {
			htmlFile,
			styleFile,
			footerJSON,
			headerJSON,
			socialJSON,
			cssJSON,
			sectionJSON,
			thumbnail,
			templateName,
			siteName,
			otherPages,
		};
	}

	async schemaSection(name) {
		return `
		{% schema %}
		{
  		"name": "${name}",
  		"presets": [
    		{
      			"name": "${name}",
      			"category": "Advanced layout"
    		}
  		]
		}
		{% endschema %}`;
	}

	async getHeaderFilesForWP({
		navHeader,
		logo_img_class,
		logo_anchor_class,
		templateName,
		frontPage,
		headerUlClass,
		navRemoved,
		isFooterSectionPresent,
	}) {
		let removedHeaderLogo = "";
		if (navHeader.includes("<!-- web-header-logo -->")) {
			removedHeaderLogo = navHeader.split("<!-- web-header-logo -->");
			navHeader =
				removedHeaderLogo[0] +
				` <?php get_template_part( 'template-parts/header/site-branding',null ,array('data'  => array(
    			'is-mobile' => false,
  			))); ?>` +
				removedHeaderLogo[1].split("<!-- End-web-header-logo -->")[1];

			let headerLogo = removedHeaderLogo[1].split(
				"<!-- End-web-header-logo -->"
			)[0];
			logo_img_class = headerLogo
				.split("<img")[1]
				.split("/>")[0]
				.includes("class")
				? headerLogo
						.split("<img")[1]
						.split("/>")[0]
						.split('class="')[1]
						.split('"')[0]
				: "";

			logo_anchor_class = headerLogo
				.split("<a")[1]
				.split("/>")[0]
				.includes("class")
				? headerLogo
						.split("<a")[1]
						.split("/>")[0]
						.split('class="')[1]
						.split('"')[0]
				: "";
		}
		let removedMobHeaderLogo = "";
		if (navHeader.includes("<!-- mobile-header-logo -->")) {
			removedMobHeaderLogo = navHeader.split("<!-- mobile-header-logo -->");
			navHeader =
				removedMobHeaderLogo[0] +
				`<?php if (wp_is_mobile() ) : ?><?php get_template_part( 'template-parts/header/site-branding',null ,array('data'  => array(
    					'is-mobile' => true,
  				))); ?><?php endif; ?>` +
				removedMobHeaderLogo[1].split("<!-- End-mobile-header-logo -->")[1];
		}
		let removedHeaderUL = navHeader.split("<!-- header-ul -->");

		let headerNavMenu =
			headerUlClass !== ""
				? `<?php
		wp_nav_menu(
			array(
				'theme_location'  => 'primary',
				'menu_class'      => '${headerUlClass}',
				'items_wrap'      => '<ul id="primary-menu-list" class="%2$s">%3$s</ul>',
				'fallback_cb'     => false,
				'container'       => false,
			)
		);
		?>`
				: `<?php
		$menuParameters = array(
			'theme_location'    => 'primary',
			'menu_class'      => '${headerUlClass}',
			'container'         => false,
			'echo'              => false,
			'link_before'       => '<span>',
			'link_after'        => '</span>',
			'items_wrap'        => '%3$s',
			'depth'             => 0,
		);
		echo strip_tags(wp_nav_menu( $menuParameters ), '<a>, <span>' );
		?>`;
		if (templateName === "gym") {
			headerNavMenu = `<?php
            $menuParameters = array(
              'theme_location'  => 'primary', 
              'container'       => false,
              'echo'            => false,
              'items_wrap'      => '%3$s',
              'depth'           => 0,
            );
            echo strip_tags(wp_nav_menu( $menuParameters ), '<a>' );
            ?>`;
		}
		if (
			removedHeaderUL[1] &&
			removedHeaderUL[1].includes("<!-- End-header-ul -->")
		)
			navHeader =
				removedHeaderUL[0] +
				headerNavMenu +
				removedHeaderUL[1].split("<!-- End-header-ul -->")[1];

		if (navRemoved[0].includes("<!-- header-nav -->")) {
			let headSection =
				`<?php get_header();?> ` +
				"<body" +
				navRemoved[0].split("<!-- header-nav -->")[0] +
				`<?php get_template_part( 'template-parts/header/navbar') ?>`;

			let withoutFooter = isFooterSectionPresent
				? navRemoved[1]
						.split("<!-- End-header-nav -->")[1]
						.split("<!--Footer Section-->")[0]
				: navRemoved[1]
						.split("<!-- End-header-nav -->")[1]
						.split("<!-- Bootstrap core JavaScript -->")[0];
			frontPage =
				frontPage + headSection + withoutFooter + ` <?php get_footer();?>`;
		}
		return {frontPage, navHeader, logo_img_class, logo_anchor_class};
	}

	async getFooterFilesForWP({
		footerUlClass,
		footer,
		socialUlClass,
		templateName,
	}) {
		//Footer Section
		footer = footer.split("<!-- Bootstrap core JavaScript -->")[0];
		let footerNavMenu =
			footerUlClass !== ""
				? `<?php
			wp_nav_menu(
				array(
					'theme_location'  => 'secondary',
					'menu_class'      => '${footerUlClass}',
					'items_wrap'      => '<ul id="footer-menu-list" class="%2$s">%3$s</ul>',
					'fallback_cb'     => false,
					'container'       => false,
				)
			);
			?>`
				: `<?php
			$menuParameters = array(
				'theme_location'    => 'secondary',
				'menu_class'        => '${footerUlClass}',
				'container'         => false,
				'echo'              => false,
				'link_before'       => '<span>',
				'link_after'        => '</span>',
				'items_wrap'        => '%3$s',
				'depth'             => 0,
			);
			echo strip_tags(wp_nav_menu( $menuParameters ), '<a>, <span>' );
			?>`;
		if (footer.includes("<!-- footer-ul -->")) {
			let removedFooterUL = footer.split("<!-- footer-ul -->");
			footer =
				removedFooterUL[0] +
				footerNavMenu +
				removedFooterUL[1].split("<!-- End-footer-ul -->")[1];
		}
		let socialNavMenu =
			socialUlClass !== ""
				? `<?php
					wp_nav_menu(
						array(
							'theme_location'  => 'social',
							'menu_class'      => '${socialUlClass}',
							'items_wrap'      => '<ul id="social-menu-list" class="%2$s">%3$s</ul>',
							'fallback_cb'     => false,
							'container'       => false,
						)
					);
					?>`
				: `<?php
					$menuParameters = array(
						'theme_location'    => 'social',
						'menu_class'      => '${socialUlClass}',
						'container'         => false,
						'echo'              => false,
						'link_before'       => '<span>',
						'link_after'        => '</span>',
						'items_wrap'        => '%3$s',
						'depth'             => 0,
					);
					echo strip_tags(wp_nav_menu( $menuParameters ), '<a>, <span>' );
					?>`;

		let removedSocialUL = "",
			removedMobSocialUL = "";

		if (footer.includes("<!-- social-ul -->")) {
			removedSocialUL = footer.split("<!-- social-ul -->");
			if (
				(templateName === "gym" || templateName === "musician") &&
				footer.includes("<!-- mob-social-ul -->")
			) {
				removedMobSocialUL = removedSocialUL[1].split("<!-- mob-social-ul -->");
			}
			footer =
				removedSocialUL[0] +
				socialNavMenu +
				removedSocialUL[1].split("<!-- End-social-ul -->")[1];
			if (
				templateName === "gym" ||
				templateName === "carpentry" ||
				templateName === "therapists" ||
				templateName === "event" ||
				templateName === "musician"
			) {
				let replaceWithLi = removedSocialUL[1]
					.trim()
					.split(" ")[0]
					.split("<")[1];
				if (replaceWithLi === "a") {
					socialNavMenu = `<?php
						$menuParameters = array(
							'theme_location'    => 'social',
							'container'         => false,
							'echo'              => false,
							'items_wrap'        => '%3$s',
							'depth'             => 0,
						);
						echo strip_tags(wp_nav_menu( $menuParameters ), '<a>' );
						?>`;
				} else {
					socialNavMenu = `<?php
					wp_nav_menu(array(
					'theme_location'  => 'social', 
					'container'       => false,
					'echo'            => false,
					'items_wrap'      => '%3$s',
					'replace_li' => '${replaceWithLi}',
					));
					?>`;
				}
				if (
					(templateName === "gym" || templateName === "musician") &&
					removedMobSocialUL !== ""
				) {
					footer =
						removedSocialUL[0] +
						socialNavMenu +
						removedMobSocialUL[0].split("<!-- End-social-ul -->")[1] +
						socialNavMenu +
						removedMobSocialUL[1].split("<!-- End-mob-social-ul -->")[1];
				} else {
					footer =
						removedSocialUL[0] +
						socialNavMenu +
						removedSocialUL[1].split("<!-- End-social-ul -->")[1];
				}
			}
		}
		return {footer};
	}

	async getHeaderFilesForShopify({
		navHeader,
		templateName,
		header_li_class,
		header_a_class,
		frontPage,
		isFooterSectionPresent,
		navRemoved,
	}) {
		let removedHeaderLogo =
			(navHeader.includes("<!-- web-header-logo -->") &&
				navHeader.split("<!-- web-header-logo -->")) ||
			"";
		if (removedHeaderLogo !== "") {
			let removedAnchorTag = removedHeaderLogo[1].split("<img");

			let webHeaderClass = removedAnchorTag[1].split("/>")[0].includes("class")
				? removedAnchorTag[1].split("/>")[0].split('class="')[1].split('"')[0]
				: "";
			navHeader =
				removedHeaderLogo[0] +
				removedAnchorTag[0] +
				` 
				{% assign img_url = section.settings.logo | img_url: '1x1' | replace: '_1x1.', '_{width}x.' %}
                    <img class="${webHeaderClass}"
                         src="{{ section.settings.logo | img_url: '300x300' }}"
                         data-src="{{ img_url }}"
                         data-widths="[120, 180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048]"
                         data-aspectratio="{{ section.settings.logo.aspect_ratio }}"
                         data-sizes="auto"
                         alt="{{ shop.name | escape }}"
                         itemprop="logo"
						 style="height:30px;min-width:100px;"/>
				 </a>` +
				removedHeaderLogo[1].split("<!-- End-web-header-logo -->")[1];
		}
		let removedMobHeaderLogo = "";
		if (navHeader.includes("<!-- mobile-header-logo -->")) {
			removedMobHeaderLogo = navHeader.split("<!-- mobile-header-logo -->");
			let removedMobAnchorTag = removedMobHeaderLogo[1].split("<img");
			let mobHeaderClass = removedMobAnchorTag[1]
				.split('class="')[1]
				.split('"')[0];
			navHeader =
				removedMobHeaderLogo[0] +
				removedMobAnchorTag[0] +
				` 
				{% assign img_url = section.settings.logo | img_url: '1x1' | replace: '_1x1.', '_{width}x.' %}
                    <img class="${mobHeaderClass}"
                         src="{{ section.settings.logo | img_url: '300x300' }}"
                         data-src="{{ img_url }}"
                         data-widths="[120, 180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048]"
                         data-aspectratio="{{ section.settings.logo.aspect_ratio }}"
                         data-sizes="auto"
                         alt="{{ shop.name | escape }}"
                         itemprop="logo"
						 style="height:30px;min-width:100px;"></a>` +
				removedMobHeaderLogo[1].split("<!-- End-mobile-header-logo -->")[1];
		}

		let removedHeaderUL =
			(navHeader.includes("<!-- header-ul -->") &&
				navHeader.split("<!-- header-ul -->")) ||
			"";
		if (removedHeaderUL !== "") {
			if (templateName === "gym" || templateName === "musician") {
				navHeader =
					removedHeaderUL[0] +
					`{% assign li_class = "${header_li_class}" | split: ',' %}
                 	 {% assign a_class = "${header_a_class}" | split: ',' %}
				 
   				{% if section.settings.nav_menu != blank %}
				    {% for link in linklists[section.settings.nav_menu].links %}
         				<a href="{{ link.url }}"  class="{{a_class[forloop.index0]}}" {% if link.active %}" active" {% endif %}>{{ link.title }}</a>
              		{% endfor %}
			  	{%else %}
      				{% for block in section.blocks %}
             			{% if block.settings.header_icon != blank %}
           					<a href="{{block.settings.header_link}}" class="{{a_class[forloop.index0]}}"><img src="{{ block.settings.header_icon | img_url: 'master' }}"></a></li>
              			{% elsif block.settings.header_icon_img != blank %}
              				<a href="{{block.settings.header_link}}" class="{{a_class[forloop.index0]}}">{{block.settings.header_icon_img}}</a>
             			{% endif %}
           			{% endfor %}
 				{% endif %}` +
					removedHeaderUL[1].split("<!-- End-header-ul -->")[1];
			} else {
				navHeader =
					removedHeaderUL[0] +
					`{% assign li_class = "${header_li_class}" | split: ',' %}
                 {% assign a_class = "${header_a_class}" | split: ',' %}
				 
   					{% if section.settings.nav_menu != blank %}` +
					removedHeaderUL[1].split("<li")[0] +
					` {% for link in linklists[section.settings.nav_menu].links %}
                		<li class="{{li_class[forloop.index0]}}"><a href="{{ link.url }}"  class="{{a_class[forloop.index0]}}" {% if link.active %}" active" {% endif %}>{{ link.title }}</a></li>
						{% endfor %}
					</ul>
					{%else %}` +
					removedHeaderUL[1].split("<li")[0] +
					`{% for block in section.blocks %}
						{% if block.settings.header_icon != blank %}
						<li class="{{li_class[forloop.index0]}}"><a href="{{block.settings.header_link}}" class="{{a_class[forloop.index0]}}"><img src="{{ block.settings.header_icon | img_url: 'master' }}"></a></li>
						{% elsif block.settings.header_icon_img != blank %}
						<li class="{{li_class[forloop.index0]}}"><a href="{{block.settings.header_link}}" class="{{a_class[forloop.index0]}}">{{block.settings.header_icon_img}}</a></li>
						{% endif %}
						{% endfor %}
						</ul>
				   {% endif %}` +
					removedHeaderUL[1].split("<!-- End-header-ul -->")[1];
			}
		} else {
			navHeader = navHeader + "</div>";
		}
		if (navRemoved[0].includes("<!-- header-nav -->")) {
			let headSection =
				"<body" +
				navRemoved[0].split("<!-- header-nav -->")[0] +
				`{% section 'header' %}`;

			let withoutFooter = isFooterSectionPresent
				? navRemoved[1]
						.split("<!-- End-header-nav -->")[1]
						.split("<!--Footer Section-->")[0]
				: navRemoved[1]
						.split("<!-- End-header-nav -->")[1]
						.split("<!-- Bootstrap core JavaScript -->")[0];
			frontPage = headSection + withoutFooter;
		}
		return {navHeader, frontPage};
	}

	async getNavHeaderForShopify({
		templateName,
		navHeader,
		headerStartDiv,
		headerSchema,
		endNavName,
		headAfterNav,
		startNavName,
	}) {
		let announcement = `{% if section.settings.show_announcement == true %}
     			<div class="announcement wrapper post-large--hide announcement-bar--mobile announcement-text" style="text-align:center; 
    				flex-direction: column;margin-top: -20px;">
					{% if section.settings.show_announcement %}
						{% if section.settings.announcement_link != blank %}
							<a href="{{ section.settings.announcement_link }}">
						{% endif %}
						<span>{{ section.settings.header_text | escape }}</span>
							{% if section.settings.announcement_link != blank %}</a>{% endif %}
					{% endif %}
				</div>
			{% endif %}`;

		let topHeader = `{% include 'top-header' %}`;

		let newHeader = navHeader.split(endNavName);
		var lastIndex = newHeader[0].lastIndexOf("</div>");

		if (templateName === "gym") {
			topHeader = `{% include 'top-header' ,class:"show-mob"%}`;
			navHeader =
				navHeader.substring(0, lastIndex) +
				`${topHeader}{% if section.settings.show_announcement == true %}
     			<div class="show-mob announcement wrapper post-large--hide announcement-bar--mobile announcement-text" style="text-align:center; 
    				flex-direction: column;margin-top: -20px;">
					{% if section.settings.show_announcement %}
						{% if section.settings.announcement_link != blank %}
							<a href="{{ section.settings.announcement_link }}">
						{% endif %}
						<span>{{ section.settings.header_text | escape }}</span>
							{% if section.settings.announcement_link != blank %}</a>{% endif %}
					{% endif %}
				</div>
			{% endif %}</div>${endNavName}`;
			topHeader = `{% include 'top-header',class:"hide-mob"%}`;
			navHeader = navHeader.replace(
				`<!-- Show Announcement -->`,
				`{% if section.settings.show_announcement == true %}
     			<div class="hide-mob announcement wrapper post-large--hide announcement-bar--mobile announcement-text" style="text-align:center; 
    				flex-direction: column;margin-top: -20px;">
					{% if section.settings.show_announcement %}
						{% if section.settings.announcement_link != blank %}
							<a href="{{ section.settings.announcement_link }}">
						{% endif %}
						<span>{{ section.settings.header_text | escape }}</span>
							{% if section.settings.announcement_link != blank %}</a>{% endif %}
					{% endif %}
				</div>
			{% endif %}`
			);
			navHeader = navHeader.replace(`<!-- Show Topbar -->`, topHeader);
			navHeader = headerStartDiv + navHeader + headerSchema;
		} else if (templateName === "therapists") {
			newHeader =
				newHeader[0].substring(0, lastIndex) +
				`</div>${topHeader} ${endNavName} ${announcement}` +
				headAfterNav;
			navHeader = headerStartDiv + newHeader + headerSchema;
		} else if (templateName === "event") {
			navHeader = navHeader.replace(`<!-- Show Topbar -->`, topHeader);
			navHeader = navHeader.replace(`<!-- Show Announcement -->`, announcement);
			navHeader = headerStartDiv + navHeader + headerSchema;
		} else if (templateName === "musician") {
			navHeader =
				newHeader[0] +
				announcement.replace(
					`class="announcement`,
					`class="show-mob announcement`
				) +
				topHeader +
				endNavName;
			navHeader = navHeader.replace(
				`<!-- Show Announcement -->`,
				announcement.replace(
					`class="announcement`,
					`class="hide-mob  mr-auto announcement`
				)
			);
			navHeader = headerStartDiv + navHeader + headerSchema;
		} else {
			newHeader =
				newHeader[0].substring(0, lastIndex) +
				`${topHeader} </div> ${announcement}` +
				endNavName +
				headAfterNav;
			navHeader = headerStartDiv + newHeader + headerSchema;
		}

		if (templateName !== "therapists" && templateName !== "musician")
			navHeader = navHeader.replace(
				startNavName,
				`${startNavName} style="display:block;" `
			);
		return {navHeader};
	}

	async getFooterFilesForShopify({
		templateName,
		footer,
		footer_li_class,
		footer_a_class,
		scriptRemoved,
		footerSchema,
		social_li_class,
		social_a_class,
	}) {
		if (footer.includes("<!-- footer-ul -->")) {
			let removedFooterUL = footer.split("<!-- footer-ul -->");
			let footerUl = removedFooterUL[1].split("<li")[0];
			let footerNavMenu = ` 
			{% assign footer_li_class = "${footer_li_class}" | split: ',' %}
            {% assign footer_a_class = "${footer_a_class}" | split: ',' %}

			{% if section.settings.footer_nav_menu != blank %}
            ${footerUl}
                {% for link in linklists[section.settings.footer_nav_menu].links %}
                <li class="{{footer_li_class[forloop.index0]}}"><a href="{{ link.url }}" class="{{footer_a_class[forloop.index0]}}">{{
                        link.title }}</a></li>
                {% endfor %}
            </ul>
            {%else %}
            ${footerUl}
                {% for block in section.blocks %}
                {% if block.settings.footer_icon != blank %}
                <li class="{{footer_li_class[forloop.index0]}}"><a href="{{block.settings.footer_link}}"
                        class="{{footer_a_class[forloop.index0]}}"><img
                            src="{{ block.settings.footer_icon | img_url: 'master' }}"></a></li>
                {% elsif block.settings.footer_icon_img != blank %}
                <li class="{{footer_li_class[forloop.index0]}}"><a href="{{block.settings.footer_link}}"
                        class="{{footer_a_class[forloop.index0]}}">{{block.settings.footer_icon_img}}</a></li>
                {% endif %}
                {% endfor %}
            </ul>
            {% endif %}`;
			footer =
				removedFooterUL[0] +
				footerNavMenu +
				removedFooterUL[1].split("<!-- End-footer-ul -->")[1];
		}
		let socialNavMenu = `
			{% assign social_li_class = "${social_li_class}" | split: ',' %}
            {% assign social_a_class = "${social_a_class}" | split: ',' %}
			{% assign count = 0 %}
			`;

		let removedSocialUL = "",
			removedMobSocialUL = "";

		if (footer.includes("<!-- social-ul -->")) {
			removedSocialUL = footer.split("<!-- social-ul -->");
			if (
				(templateName === "gym" || templateName === "musician") &&
				footer.includes("<!-- mob-social-ul -->")
			) {
				removedMobSocialUL = removedSocialUL[1].split("<!-- mob-social-ul -->");
			}
			footer =
				removedSocialUL[0] +
				socialNavMenu +
				removedSocialUL[1].split("<li")[0] +
				`
				{% for block in section.blocks%}
                {% if block.type == "custom" %}
                {% if block.settings.social_icon != blank %}
                <li class="{{social_li_class[count]}}"><a href="{{block.settings.social_link}}"
                        class="{{social_a_class[count]}}"><img
                            src="{{ block.settings.social_icon | img_url: 'master' }}"></a></li>
                {% elsif block.settings.social_icon_img != blank %}
                <li class="{{social_li_class[count]}}"><a href="{{block.settings.social_link}}"
                        class="{{social_a_class[count]}}">{{block.settings.social_icon_img}}</a></li>
                {% endif %}
                {% assign count = count | plus: 1 %}
                {% endif %}
                {% endfor %}
            </ul>` +
				removedSocialUL[1].split("<!-- End-social-ul -->")[1];

			if (
				(templateName === "gym" || templateName === "musician") &&
				removedMobSocialUL !== ""
			) {
				let replaceWithLi = removedSocialUL[1].split(" ")[0].split("<")[1];
				let socialMenuBlock = `{% for block in section.blocks%}
                {% if block.type == "custom" %}
                {% if block.settings.social_icon != blank %}
                <${replaceWithLi} class="{{social_li_class[count]}}"><a href="{{block.settings.social_link}}"
                        class="{{social_a_class[count]}}"><img
                            src="{{ block.settings.social_icon | img_url: 'master' }}"></a></${replaceWithLi}>
                {% elsif block.settings.social_icon_img != blank %}
                <${replaceWithLi} class="{{social_li_class[count]}}"><a href="{{block.settings.social_link}}"
                        class="{{social_a_class[count]}}">{{block.settings.social_icon_img}}</a></${replaceWithLi}>
                {% endif %}
                {% assign count = count | plus: 1 %}
                {% endif %}
                {% endfor %}`;
				footer =
					removedSocialUL[0] +
					socialNavMenu +
					socialMenuBlock +
					removedMobSocialUL[0].split("<!-- End-social-ul -->")[1] +
					socialNavMenu +
					socialMenuBlock +
					removedMobSocialUL[1].split("<!-- End-mob-social-ul -->")[1];
			} else if (
				templateName === "carpentry" ||
				templateName === "therapists" ||
				templateName === "event"
			) {
				let replaceWithLi = removedSocialUL[1]
					.trim()
					.split(" ")[0]
					.split("<")[1];
				let socialMenuBlock = `{% for block in section.blocks%}
                {% if block.type == "custom" %}
                {% if block.settings.social_icon != blank %}
                <${replaceWithLi} class="{{social_li_class[count]}}"><a href="{{block.settings.social_link}}"
                        class="{{social_a_class[count]}}"><img
                            src="{{ block.settings.social_icon | img_url: 'master' }}"></a></${replaceWithLi}>
                {% elsif block.settings.social_icon_img != blank %}
                <${replaceWithLi} class="{{social_li_class[count]}}"><a href="{{block.settings.social_link}}"
                        class="{{social_a_class[count]}}">{{block.settings.social_icon_img}}</a></${replaceWithLi}>
                {% endif %}
                {% assign count = count | plus: 1 %}
                {% endif %}
                {% endfor %}`;
				footer =
					removedSocialUL[0] +
					socialNavMenu +
					socialMenuBlock +
					removedSocialUL[1].split("<!-- End-social-ul -->")[1];
			}
		}

		let newsletter = "";
		if (footer.includes("<!-- Newsletter Section -->")) {
			newsletter = footer
				.split("<!-- Newsletter Section -->")[1]
				.split("<!-- End Newsletter Section -->")[0];

			newsletter = newsletter.replace(
				"<input",
				`<input name = "contact[email]"	id ="{{ formId }}-email" `
			);

			newsletter = newsletter.replace(
				"<!-- Newsletter Input Section -->",
				`<!-- Newsletter Input Section -->
					{%- assign formId = 'Contact_' | append: section.id -%}
					{% form 'customer', id: formId, novalidate: 'novalidate', class: 'contact-form form-single-field' %}
					{%- if form.posted_successfully? -%}
						<p class="form-message form-message--success" tabindex="-1" data-form-status>
						{{ 'general.newsletter_form.confirmation' | t }}
						</p>
					{%- endif -%}`
			);

			newsletter = newsletter.replace(
				"<!-- End Newsletter Input Section -->",
				`<!-- End Newsletter Input Section -->
					{%- if form.errors contains 'email' -%}
						<span id="{{ formId }}-email-error" class="input-error-message">
						<span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
						{% include 'icon-error' %}
						<span>{{ form.errors.translated_fields['email'] | capitalize }} {{ form.errors.messages['email'] }}.</span>
						</span>
					{%- endif -%}
				{% endform %}`
			);

			footer =
				footer.split("<!-- Newsletter Section -->")[0] +
				`{%if section.settings.show_newsletter %}` +
				newsletter +
				`{%endif%}` +
				footer.split("<!-- End Newsletter Section -->")[1];
		}
		footer = footer + footerSchema;
		return {footer};
	}

	async downloadFile() {
		try {
			const {
				selectSiteForExport: {content_path},
			} = this.props;

			let {
				htmlFile,
				styleFile,
				cssJSON,
				sectionJSON,
				thumbnail,
				templateName,
				otherPages,
			} = await this.readZipFolder(content_path);

			let zip = new JSZip();
			let headRemoved,
				startNavName,
				endNavName,
				navRemoved,
				navEndRemoved,
				header,
				headBeforeNav,
				headAfterNav,
				navHeader,
				footerRemoved,
				footer,
				scriptRemoved,
				alls,
				beforeNavDiv,
				isHeadNavPresent,
				isFooterSectionPresent,
				onlyBody;
			if (this.props.choosePlatformSelect !== "Htmlcss") {
				headRemoved = htmlFile && htmlFile.split("<body");
				onlyBody = htmlFile && htmlFile.split("<body");
				onlyBody =
					onlyBody[1].includes("<!-- Bootstrap core JavaScript -->") &&
					onlyBody[1].split("<!-- Bootstrap core JavaScript -->");
				onlyBody = "<body" + onlyBody[0];
				isHeadNavPresent = htmlFile.includes("<!-- header-nav -->")
					? true
					: false;

				isFooterSectionPresent = htmlFile.includes("<!--Footer Section-->")
					? true
					: false;

				header = headRemoved[0];

				footerRemoved =
					(headRemoved[1] &&
						isFooterSectionPresent &&
						isHeadNavPresent &&
						headRemoved[1].split("<!--Footer Section-->")) ||
					(headRemoved[1] &&
						isFooterSectionPresent &&
						!isHeadNavPresent &&
						onlyBody.split("<!--Footer Section-->")) ||
					onlyBody.split("<!-- Bootstrap core JavaScript -->");
				footer = footerRemoved[1] || "";
				scriptRemoved =
					headRemoved[1] &&
					headRemoved[1].includes("<!-- Bootstrap core JavaScript -->") &&
					headRemoved[1].split("<!-- Bootstrap core JavaScript -->");

				alls = scriptRemoved[1] && scriptRemoved[1].split("</script>");

				if (isHeadNavPresent) {
					startNavName = "<nav";
					endNavName = "</nav>";
					if (htmlFile.includes("<navbar>")) {
						startNavName = "<navbar";
						endNavName = "</navbar>";
					}

					navRemoved = headRemoved[1] && headRemoved[1].split(startNavName);
					navEndRemoved = navRemoved[1] && navRemoved[1].split(endNavName);

					headBeforeNav =
						(headRemoved[1] &&
							headRemoved[1].includes("<!-- header-nav -->") &&
							headRemoved[1]
								.split("<!-- header-nav -->")[1]
								.split(startNavName)[0]) ||
						"";
					headAfterNav =
						(headRemoved[1] &&
							headRemoved[1].includes("<!-- End-header-nav -->") &&
							headRemoved[1]
								.split(endNavName)[1]
								.split("<!-- End-header-nav -->")[0]) ||
						"";

					navHeader =
						headBeforeNav +
						startNavName +
						navEndRemoved[0] +
						endNavName +
						headAfterNav;

					beforeNavDiv = navRemoved[0].substring(
						navRemoved[0].indexOf(">") + 1
					);
					if (beforeNavDiv.includes("<!-- header-nav -->")) {
						beforeNavDiv = beforeNavDiv.split("<!-- header-nav -->")[0];
					}
				}
			}
			if (this.props.choosePlatformSelect === "Wordpress") {
				styleFile = styleFile + `body span {color:${cssJSON["font-color"]};}`;

				const {
					pageNotFound,
					singlePage,
					singlePost,
					siteBrand,
					indexFile,
					functionTxt,
					headerUlClass,
					footerUlClass,
					socialUlClass,
				} = await this.pageTemplate.getAllFileForWp();

				let frontPage = `<?php require_once('wp-load.php'); ?>
			<?php /* Template Name: Front Page */ ?>`;

				let logo_anchor_class = "",
					logo_img_class = "";

				//Header Section
				header =
					header.split("<!-- stylesheet -->")[0] +
					`<link rel="stylesheet" href="<?php echo get_theme_file_uri().'/style.css'; ?>">` +
					header
						.split("<!-- stylesheet -->")[1]
						.split("<!-- End-stylesheet -->")[1];

				header = header.replace(
					"</head>",
					`<?php wp_head();?>
				</head>`
				);

				header = header.replace(
					`<html lang="en">`,
					`<html <?php language_attributes(); ?>>`
				);

				let title = header.split("<!-- title -->");
				header = title[0] + title[1].split("<!-- End-title -->")[1];

				let meta = header.split("<!-- meta-charset -->");
				header =
					meta[0] +
					`<meta charset="<?php bloginfo( 'charset' ); ?>" />` +
					meta[1].split("<!-- End-meta-charset -->")[1];

				if (isHeadNavPresent) {
					({frontPage, navHeader, logo_img_class, logo_anchor_class} =
						await this.getHeaderFilesForWP({
							navHeader,
							logo_img_class,
							logo_anchor_class,
							templateName,
							frontPage,
							headerUlClass,
							navRemoved,
							isFooterSectionPresent,
						}));
				} else {
					frontPage =
						frontPage +
						`<?php get_header();?>` +
						footerRemoved[0] +
						` <?php get_footer();?>`;
				}
				if (isFooterSectionPresent) {
					({footer} = await this.getFooterFilesForWP({
						footerUlClass,
						footer,
						socialUlClass,
						templateName,
					}));
				}
				let firstSection = sectionJSON.filter(x => x.section_order === 1);
				if (firstSection && firstSection.length > 0) {
					let fileContent =
						htmlFile.includes(firstSection[0].section_split_start) &&
						htmlFile
							.split(firstSection[0].section_split_start)[1]
							.split(firstSection[0].section_split_end)[0];
					if (fileContent !== "") {
						if (fileContent.includes(startNavName)) {
							beforeNavDiv = "<body>";
						}
					}
				}
				let navBarPath = isHeadNavPresent
					? "<?php get_template_part( 'template-parts/header/navbar') ?>"
					: "";
				header =
					header +
					`<?php if (!is_page('Front Page') && !is_home() && !is_front_page() ) : ?>
					<div  class="other-page">
						<?php get_header();?> 
							${navBarPath}
						<?php endif; ?>`;

				let siteBranding = siteBrand;
				if (templateName === "musician")
					siteBranding = siteBranding.replace(
						`site-branding`,
						`site-branding ${logo_anchor_class}`
					);

				zip.file("header.php", header);
				zip.file("index.php", indexFile);
				zip.file("style.css", styleFile);
				zip.file("single.php", singlePost);
				zip.file("page.php", singlePage);
				zip.file("404.php", pageNotFound);

				if (isHeadNavPresent) {
					var template = zip.folder("template-parts");
					template.file("header/navbar.php", navHeader);
					template.file("header/site-branding.php", siteBranding);
				}

				var pageTemplateFolder = zip.folder("page-templates");
				pageTemplateFolder.file("front-page.php", frontPage);

				let functionFile = functionTxt;
				let functionScript = "";
				var js = zip.folder("js");
				let jsIndex = 1;
				for (let j = 0; j < alls.length - 1; j++) {
					if (
						alls[j].split("<script>")[1] &&
						alls[j].split("<script>")[1].toString().trim() !== ""
					) {
						js.file(`script-${jsIndex}.js`, alls[j].split("<script>")[1]);
						functionScript =
							functionScript +
							`<script src="<?php echo get_theme_file_uri().'/js/script-${jsIndex}.js'; ?>"></script>`;
						jsIndex = jsIndex + 1;
					} else {
						if (alls[j] && alls[j].toString().trim() !== "")
							functionScript = functionScript + alls[j] + `</script>`;
					}
				}

				footer = footer + functionScript + alls[alls.length - 1];

				functionFile =
					functionFile +
					`
add_filter( 'get_custom_logo', 'change_logo_class' );
	function change_logo_class( $html ) {
    $html = str_replace( 'custom-logo-link', '${logo_anchor_class}', $html );
    $html = str_replace( 'custom-logo', '${logo_img_class}', $html );

    return $html;
}`;

				zip.file("functions.php", functionFile);
				zip.file("footer.php", footer);

				var css = zip.folder("css");
				otherPages.map(x => {
					let pageHtml = `<?php /* Template Name: ${x.name} */ ?>${x["htmlFile"]}`;
					pageTemplateFolder.file(`${x.name}.php`, pageHtml);
					css.file(`${x.name}.css`, x["cssFile"]);
					return x;
				});

				await fetch(thumbnail, {
					method: "GET",
					headers: {},
				})
					.then(async response => {
						await response.arrayBuffer().then(async function (buffer) {
							await zip.file("screenshot.png", new Blob([buffer]));
						});
					})
					.catch(err => {
						console.log(err);
					});
			} else if (this.props.choosePlatformSelect === "Shopify") {
				let removedComment = styleFile.split("*/")[0] + "*/";
				styleFile = styleFile.replace(removedComment, "");

				let indexFile = `{% section 'header' %}
							{{ content_for_index }}
							</div>`;

				let indexLiquidFile = beforeNavDiv + indexFile;
				var sections = zip.folder("sections");

				let sectionTemplate = {},
					contentForIndex = [];
				if (templateName === "gym") {
					sectionJSON.unshift({
						section_order: 0,
						section_name: "top-section",
						section_title: "Top Section",
					});
				}
				await sectionJSON.map(async x => {
					let fileContent = "";
					if (templateName === "gym" && x.section_order === 0) {
						if (
							htmlFile.split("<body>")[1] &&
							htmlFile
								.split("<body>")[1]
								.includes(
									"<!-------------------------------------Section-1------------------------------------->"
								)
						) {
							fileContent = htmlFile
								.split("<body>")[1]
								.split(
									"<!-------------------------------------Section-1------------------------------------->"
								)[0];
						}
					} else {
						fileContent =
							htmlFile.includes(x.section_split_start) &&
							htmlFile.includes(x.section_split_end)
								? htmlFile
										.split(x.section_split_start)[1]
										.split(x.section_split_end)[0]
								: "";
					}
					if (fileContent !== "") {
						if (
							(fileContent.includes(startNavName) &&
								fileContent.includes("<!-- End-header-nav -->")) ||
							(templateName === "gym" &&
								x.section_order === 0 &&
								fileContent.includes("<!-- End-header-nav -->"))
						) {
							let beforeHeadNav = fileContent.split("<!-- header-nav -->")[0];
							let afterHeadNav =
								templateName === "gym" && x.section_order === 0
									? "</div></div>"
									: "";
							fileContent =
								templateName === "gym" && x.section_order === 0
									? fileContent
											.split("<!-- End-header-nav -->")[1]
											.replace("</div>", "")
											.replace("</div>", "")
									: fileContent.split("<!-- End-header-nav -->")[1];

							let fileContentForIndex = "";
							if (templateName === "gym" && x.section_order === 0) {
								let length = fileContent.length;
								let index = fileContent.lastIndexOf("<div");
								fileContentForIndex = fileContent.substring(index, length);
								fileContent = fileContent.substring(0, index);
							}
							indexFile = indexFile.replace(
								`{% section 'header' %}`,
								`${beforeHeadNav}{% section 'header' %}${afterHeadNav}`
							);
							indexFile = indexFile.replace(
								`{{ content_for_index }}`,
								`{%section '${x.section_name}'%}${fileContentForIndex}{{ content_for_index }}`
							);
							indexLiquidFile = indexFile;

							fileContent =
								`{% if section.settings.show_${x.section_name} == true %}
						<script type="text/javascript">		
							$(document).ready(function(){
    							$('.bg-img1').removeClass('bg-img1').addClass('bg-img');
   								$('.other-page').removeClass('other-page').addClass('other-page1');
							});
						</script>` +
								fileContent +
								`{%else%}
							<script type="text/javascript">	
								$(document).ready(function(){
    								$('.bg-img').removeClass('bg-img').addClass('bg-img1');
								});
							</script>
							{%endif%}
							{% schema %}
							{
								"name": "${x.section_title}", 
								"settings":[
									{
									"type":"checkbox",
									"id":"show_${x.section_name}",
									"label":"Show ${x.section_title}",
									"default":true
									}]
							}
							{% endschema %}`;
						} else {
							contentForIndex.push(x.section_name);
							fileContent =
								fileContent + (await this.schemaSection(x.section_title));
						}

						sections.file(`${x.section_name}.liquid`, fileContent);
						let currentSection = {
							[x.section_name]: {
								type: x.section_name,
								settings: {},
							},
						};
						sectionTemplate = {...sectionTemplate, ...currentSection};
					}
				});

				this.setState({
					...this.state,
					sectionTemplate,
					contentForIndex,
				});
				const {
					headerSchema: headerSchemaFromTemplate,
					header_li_class,
					header_a_class,
					pageNotFound,
					articleTemplate,
					blogTemplate,
					cartTemplate,
					collectionTemplate,
					customerAccountTemplate,
					customerActivateAccountTemplate,
					customerAddressTemplate,
					customerLoginTemplate,
					customerOrderTemplate,
					customerRegisterTemplate,
					customerResetPassword,
					giftCardTemplate,
					listCollectionsTemplate,
					passwordTemplate,
					productTemplate,
					searchTemplate,
					singlePage,
					articleTemplateSection,
					blogTemplateSection,
					cartTemplateSection,
					collectionSection,
					collectionListSection,
					collectionTemplateSection,
					listCollectionsTemplateSection,
					passwordContentSection,
					passwordFooterSection,
					passwordHeaderSection,
					productRecommendationsSection,
					productTemplateSection,
					swatchSection,
					footerSchema,
					footer_li_class,
					footer_a_class,
					social_li_class,
					social_a_class,
					settingData,
					settingSchema,
					bgsetSnippets,
					cartPopUpSnippets,
					collectionGridItemSnippets,
					commentSnippets,
					cssVariablesSnippets,
					formStatusSnippets,
					iconArrowLeftSnippets,
					iconArrowRightSnippets,
					iconCartSnippets,
					iconChevronDownSnippets,
					iconCloseSnippets,
					iconErrorSnippets,
					iconFacebookSnippets,
					iconLoginSnippets,
					iconPintrestSnippets,
					iconSaleTagSnippets,
					iconSearchSnippets,
					iconSpinnerSnippets,
					iconTwitterSnippets,
					imageStyleSnippets,
					mediaSnippets,
					paginationSnippets,
					productCardGridSnippets,
					productCardListSnippets,
					productPriceSnippets,
					productPriceListingSnippets,
					searchDrawerSnippets,
					siteseedFilterActionSnippets,
					siteseedFilterNoResultSnippets,
					siteseedFilterPaginationSnippets,
					siteseedFilterProductSnippets,
					siteseedFilterScriptSnippets,
					siteseedFilterSearchSnippets,
					siteseedFilterSortSnippets,
					siteseedFilterTreeSnippets,
					socialSharingSnippets,
					topHeaderSnippets,
					giftCardCssAssets,
					siteseedFilterCssSnippets,
					siteseedSearchCssAssets,
					giftCardJsAssets,
					passwordJsAssets,
					siteseedFilterInitJsAssets,
					giftCardLiquid,
					headerStartDiv,
					featureBlog,
				} = await this.pageTemplate.getAllFileForShopify();
				let headerSchema = htmlFile.includes("<!-- header-ul -->")
					? headerSchemaFromTemplate
					: "";

				let styleSheet = header.split("<!-- stylesheet -->");
				header =
					styleSheet[0] + styleSheet[1].split("<!-- End-stylesheet -->")[1];

				let htmlClass =
					templateName === "musician" ? "no-js musician" : "no-js";
				header = header.replace(
					`<html lang="en">`,
					`<html class="${htmlClass}" lang="{{ request.locale.iso_code }}">`
				);

				let title = header.split("<!-- title -->");
				header =
					title[0] +
					"<title>{{ page_title }}{% if current_tags %}{% assign meta_tags = current_tags | join: ', ' %} &ndash; {{ 'general.meta.tags' | t: tags: meta_tags }}{% endif %}{% if current_page != 1 %} &ndash; {{ 'general.meta.page' | t: page: current_page }}{% endif %}{% unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless %}</title>" +
					title[1].split("<!-- End-title -->")[1];

				let meta = header.split("<!-- meta-charset -->");
				header = meta[0] + meta[1].split("<!-- End-meta-charset -->")[1];

				let icon = header.split("<!-- icon -->");
				header =
					icon[0] +
					`{% if settings.favicon %}
      		<link rel="shortcut icon" href="{{ settings.favicon | img_url: '32x32' }}" type="image/png" />
    	{% endif %}` +
					icon[1].split("<!-- End-icon -->")[1];

				var assets = zip.folder("assets");
				let functionFile = ``;
				assets.file("style.css", styleFile);
				let jsIndex = 1;
				for (let j = 0; j < alls.length - 1; j++) {
					if (
						alls[j].split("<script>")[1] &&
						alls[j].split("<script>")[1].toString().trim() !== ""
					) {
						assets.file(`script-${jsIndex}.js`, alls[j].split("<script>")[1]);
						functionFile =
							functionFile +
							`
                {{ 'script-${jsIndex}.js' | asset_url | script_tag }}`;
						jsIndex = jsIndex + 1;
					} else {
						if (alls[j] && alls[j].toString().trim() !== "")
							functionFile = functionFile + alls[j] + `</script>`;
					}
				}
				header = header.replace(
					"</head>",
					`<style>*,::after,::before{box-sizing:border-box}body{margin:0}body:not(.musician),html:not(.musician){background-color:var(--color-body)}body,button{font-size:calc(var(--font-size-base) * 1px);font-family:var(--font-stack-body);font-style:var(--font-style-body);font-weight:var(--font-weight-body);color:var(--color-text);line-height:1.5}body,button{-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}.border-bottom{border-bottom:1px solid var(--color-border)}.btn--link{background-color:transparent;border:0;margin:0;color:var(--color-text);text-align:left}.text-right{text-align:right}.icon:not(.event .overlay-1 .icon){display:inline-block;width:20px;height:20px;vertical-align:middle;fill:currentColor}.icon__fallback-text,.visually-hidden{position:absolute!important;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0}svg.icon:not(.icon--full-color) circle,svg.icon:not(.icon--full-color) ellipse,svg.icon:not(.icon--full-color) g,svg.icon:not(.icon--full-color) line,svg.icon:not(.icon--full-color) path,svg.icon:not(.icon--full-color) polygon,svg.icon:not(.icon--full-color) polyline,svg.icon:not(.icon--full-color) rect,symbol.icon:not(.icon--full-color) circle,symbol.icon:not(.icon--full-color) ellipse,symbol.icon:not(.icon--full-color) g,symbol.icon:not(.icon--full-color) line,symbol.icon:not(.icon--full-color) path,symbol.icon:not(.icon--full-color) polygon,symbol.icon:not(.icon--full-color) polyline,symbol.icon:not(.icon--full-color) rect{fill:inherit;stroke:inherit}li{list-style:none}.list--inline{padding:0;margin:0}.list--inline>li{display:inline-block;margin-bottom:0;vertical-align:middle}a{color:var(--color-text);text-decoration:none}.h1,.h2,h1,h2{margin:0 0 17.5px;font-family:var(--font-stack-header);font-style:var(--font-style-header);font-weight:var(--font-weight-header);line-height:1.2;overflow-wrap:break-word;word-wrap:break-word}.h1 a,.h2 a,h1 a,h2 a{color:inherit;text-decoration:none;font-weight:inherit}.h1,h1{font-size:calc(((var(--font-h1-desktop))/ (var(--font-size-base))) * 1em);text-transform:none;letter-spacing:0}@media only screen and (max-width:749px){.h1,h1{font-size:calc(((var(--font-h1-mobile))/ (var(--font-size-base))) * 1em)}}.h2,h2{font-size:calc(((var(--font-h2-desktop))/ (var(--font-size-base))) * 1em);text-transform:uppercase;letter-spacing:.1em}@media only screen and (max-width:749px){.h2,h2{font-size:calc(((var(--font-h2-mobile))/ (var(--font-size-base))) * 1em)}}p{color:var(--color-body-text);margin:0 0 19.44444px}@media only screen and (max-width:749px){p{font-size:calc(((var(--font-size-base) - 1)/ (var(--font-size-base))) * 1em)}}p:last-child{margin-bottom:0}@media only screen and (max-width:749px){.small--hide{display:none!important}}.grid{list-style:none;margin:0;padding:0;margin-left:-30px}.grid::after{content:'';display:table;clear:both}@media only screen and (max-width:749px){.grid{margin-left:-22px}}.grid::after{content:'';display:table;clear:both}.grid--no-gutters{margin-left:0}.grid--no-gutters .grid__item{padding-left:0}.grid--table{display:table;table-layout:fixed;width:100%}.grid--table>.grid__item{float:none;display:table-cell;vertical-align:middle}.grid__item{float:left;padding-left:30px;width:100%}@media only screen and (max-width:749px){.grid__item{padding-left:22px}}.grid__item[class*="--push"]{position:relative}@media only screen and (min-width:750px){.medium-up--one-quarter{width:25%}.medium-up--push-one-third{width:33.33%}.medium-up--one-half{width:50%}.medium-up--push-one-third{left:33.33%;position:relative}}.site-header{position:relative;background-color:var(--color-body)}@media only screen and (max-width:749px){.site-header{border-bottom:1px solid var(--color-border)}}@media only screen and (min-width:750px){.site-header{padding:0 55px}.site-header.logo--center{padding-top:30px}}.site-header__logo{margin:15px 0}.logo-align--center .site-header__logo{text-align:center;margin:0 auto}@media only screen and (max-width:749px){.logo-align--center .site-header__logo{text-align:left;margin:15px 0}}@media only screen and (max-width:749px){.site-header__logo{padding-left:22px;text-align:left}.site-header__logo img{margin:0}}.site-header__logo-link{display:inline-block;word-break:break-word}@media only screen and (min-width:750px){.logo-align--center .site-header__logo-link{margin:0 auto}}.site-header__logo-image{display:block}@media only screen and (min-width:750px){.site-header__logo-image{margin:0 auto}}.site-header__logo-image img{width:100%}.site-header__logo-image--centered img{margin:0 auto}.site-header__logo img{display:block}.site-header__icons{position:relative;white-space:nowrap}@media only screen and (max-width:749px){.site-header__icons{width:auto;padding-right:13px}.site-header__icons .btn--link,.site-header__icons .site-header__cart{font-size:calc(((var(--font-size-base))/ (var(--font-size-base))) * 1em)}}.site-header__icons-wrapper{position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center;-webkit-justify-content:flex-end;-ms-justify-content:flex-end;justify-content:flex-end}.site-header__account,.site-header__cart,.site-header__search{position:relative}.site-header__search.site-header__icon{display:none}@media only screen and (min-width:1400px){.site-header__search.site-header__icon{display:block}}.site-header__search-toggle{display:block}@media only screen and (min-width:750px){.site-header__account,.site-header__cart{padding:10px 11px}}.site-header__cart-title,.site-header__search-title{position:absolute!important;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;display:block;vertical-align:middle}.site-header__cart-title{margin-right:3px}.site-header__cart-count{display:flex;align-items:center;justify-content:center;position:absolute;right:.4rem;top:.2rem;font-weight:700;background-color:var(--color-btn-primary);color:var(--color-btn-primary-text);border-radius:50%;min-width:1em;height:1em}.site-header__cart-count span{font-family:HelveticaNeue,"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:calc(11em / 16);line-height:1}@media only screen and (max-width:749px){.site-header__cart-count{top:calc(7em / 16);right:0;border-radius:50%;min-width:calc(19em / 16);height:calc(19em / 16)}}@media only screen and (max-width:749px){.site-header__cart-count span{padding:.25em calc(6em / 16);font-size:12px}}.site-header__menu{display:none}@media only screen and (max-width:749px){.site-header__icon{display:inline-block;vertical-align:middle;padding:10px 11px;margin:0}}@media only screen and (min-width:750px){.site-header__icon .icon-search{margin-right:3px}}.announcement-bar{z-index:10;position:relative;text-align:center;border-bottom:1px solid transparent;padding:2px}.announcement-bar__link{display:block}.announcement-bar__message{display:block;padding:11px 22px;font-size:calc(((16)/ (var(--font-size-base))) * 1em);font-weight:var(--font-weight-header)}@media only screen and (min-width:750px){.announcement-bar__message{padding-left:55px;padding-right:55px}}.site-nav{position:relative;padding:0;text-align:center;margin:25px 0}.site-nav a{padding:3px 10px}.site-nav__link{display:block;white-space:nowrap}.site-nav--centered .site-nav__link{padding-top:0}.site-nav__link .icon-chevron-down{width:calc(8em / 16);height:calc(8em / 16);margin-left:.5rem}.site-nav__label{border-bottom:1px solid transparent}.site-nav__link--active .site-nav__label{border-bottom-color:var(--color-text)}.site-nav__link--button{border:none;background-color:transparent;padding:3px 10px}.site-header__mobile-nav{z-index:11;position:relative;background-color:var(--color-body)}@media only screen and (max-width:749px){.site-header__mobile-nav{display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}}.mobile-nav--open .icon-close{display:none}.main-content{opacity:0}.main-content .shopify-section{display:none}.main-content .shopify-section:first-child{display:inherit}.critical-hidden{display:none}</style>
				<script>
					var theme = {
					breakpoints: {
						medium: 750,
						large: 990,
						widescreen: 1400
					},
					strings: {
						addToCart: {{ 'products.product.add_to_cart' | t | json }},
						soldOut: {{ 'products.product.sold_out' | t | json }},
						unavailable: {{ 'products.product.unavailable' | t | json }},
						regularPrice: {{ 'products.product.regular_price' | t | json }},
						salePrice: {{ 'products.product.sale_price' | t | json }},
						sale: {{ 'products.product.on_sale' | t | json }},
						fromLowestPrice: {{ 'products.product.from_lowest_price_html' | t: lowest_price: '[price]' | json }},
						vendor: {{'products.product.vendor' | t | json }},
						showMore: {{ 'general.filters.show_more' | t | json }},
						showLess: {{ 'general.filters.show_less' | t | json }},
						searchFor: {{ 'general.search.search_for' | t | json }},
						addressError: {{ 'sections.map.address_error' | t | json }},
						addressNoResults: {{ 'sections.map.address_no_results' | t | json }},
						addressQueryLimit: {{ 'sections.map.address_query_limit_html' | t | json }},
						authError: {{ 'sections.map.auth_error_html' | t | json }},
						newWindow: {{ 'general.accessibility.link_messages.new_window' | t | json }},
						external: {{ 'general.accessibility.link_messages.external' | t | json }},
						newWindowExternal: {{ 'general.accessibility.link_messages.new_window_and_external' | t | json }},
						removeLabel: {{ 'cart.label.remove' | t: product: '[product]' | json }},
						update: {{ 'cart.label.update' | t | json }},
						quantity: {{ 'cart.label.quantity' | t | json }},
						discountedTotal: {{ 'cart.label.discounted_total' | t | json }},
						regularTotal: {{ 'cart.label.regular_total' | t | json }},
						priceColumn: {{ 'cart.label.price_column' | t | json }},
						quantityMinimumMessage: {{ 'products.product.quantity_minimum_message' | t | json }},
						cartError: {{ 'cart.general.cart_error' | t | json }},
						removedItemMessage: {{ 'cart.general.removed_item_html' | t: quantity: '[quantity]', link: '[link]' | json }},
						unitPrice: {{ 'products.product.unit_price_label' | t | json }},
						unitPriceSeparator: {{ 'general.accessibility.unit_price_separator' | t | json }},
						oneCartCount: {{ 'cart.popup.cart_count' | t: count: 1 | json }},
						otherCartCount: {{ 'cart.popup.cart_count' | t: count: '[count]' | json }},
						quantityLabel: {{ 'cart.popup.quantity_label' | t: quantity_count: '[count]' | json }},
						products: {{ 'general.search.products' | t | json }},
						loading: {{ 'general.search.loading' | t | json }},
						number_of_results: {{ 'general.search.number_of_results' | t: result_number: '[result_number]', results_count: '[results_count]' | json }},
						number_of_results_found: {{ 'general.search.number_of_results_found' | t: results_count: '[results_count]' | json }},
						one_result_found: {{ 'general.search.one_result_found' | t | json }}
					},
					moneyFormat: {{ shop.money_format | json }},
					moneyFormatWithCurrency: {{ shop.money_with_currency_format | json }},
					settings: {
						predictiveSearchShowPrice: {{ settings.predictive_search_show_price | json }},
						predictiveSearchShowVendor: {{ settings.predictive_search_show_vendor | json }},
						enable_color_swatch: {{ settings.enable_color_swatch | json }}
					},
					stylesheet: "{{ 'theme.css' | asset_url }}"
					}

					document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
				</script>
					{% unless template contains "page" %}
						{{ 'style.css' | asset_url | stylesheet_tag }}
						{{ 'theme.css' | asset_url | stylesheet_tag }}
							{% include 'css-variables' %}
						<script src="{{ 'theme.js' | asset_url }}" defer="defer"></script>
						<script src="{{ 'lazysizes.js' | asset_url }}" async="async"></script>
					{%endunless%}
				<script type="text/javascript">
					if (window.MSInputMethodContext && document.documentMode) {
					var scripts = document.getElementsByTagName('script')[0];
					var polyfill = document.createElement("script");
					polyfill.defer = true;
					polyfill.src = "{{ 'ie11CustomProperties.min.js' | asset_url }}";

					scripts.parentNode.insertBefore(polyfill, scripts);

					}     
				</script>   
				
					{%- if request.page_type contains 'customers/' -%}
					<script src="{{ 'shopify_common.js' | shopify_asset_url }}" defer="defer"></script>
				{%- endif -%}
									{% include 'siteseed.filter.script' %} 
									{{ content_for_header }}

				</head>`
				);
				let containerFluid =
					templateName === "therapists" ? "" : "container-fluid";

				let beforeNavRemoved = isHeadNavPresent
					? navRemoved[0].split(">")[0]
					: "";
				header =
					header +
					`<body class="${containerFluid} template-{{ request.page_type | handle }} ${templateName} {% if settings.enable_homepage and template contains "index" or template contains "frontpage" %}{%else%}other-page{%endif%}" id="PageContainer" style="padding:0px;max-width:100%;width:100%;" ${beforeNavRemoved}>` +
					`   <a class="in-page-link visually-hidden skip-link" href="#MainContent">{{ 'general.accessibility.skip_to_content' | t }}</a>
					{% if settings.enable_ajax %} 
						{% include 'cart-popup' %}
					{% endif %}
					
					{% if template contains "page" %}
                      	{{ content_for_layout }}
					{%elsif settings.enable_homepage and template contains "index" %}
						{% include 'home-page' %}
					{%elsif template contains "index" or template contains "frontpage" %}
						{{ content_for_layout }} 
					{% else %}                      
						{%section 'header'%}
						{{ content_for_layout }}
					{%- endif -%}
					{% unless template contains "page" %}{% section 'footer' %}{%endunless%}
										
					<script type="application/json" data-cart-routes>
						{
						"cartUrl": "{{ routes.cart_url }}",
						"cartAddUrl": "{{ routes.cart_add_url }}",
						"cartChangeUrl": "{{ routes.cart_change_url }}"
						}
					</script>

					<ul hidden>
						<li id="a11y-refresh-page-message">{{ 'general.accessibility.refresh_page' | t }}</li>
						<li id="a11y-selection-message">{{ 'general.accessibility.selection_help' | t }}</li>
					</ul>
										
					{% include 'siteseed.filter.action' %}
					${functionFile}` +
					alls[alls.length - 1];

				let frontPage;
				if (isHeadNavPresent) {
					({navHeader, frontPage} = await this.getHeaderFilesForShopify({
						navHeader,
						templateName,
						header_li_class,
						header_a_class,
						frontPage,
						isFooterSectionPresent,
						navRemoved,
						headAfterNav,
					}));

					({navHeader} = await this.getNavHeaderForShopify({
						templateName,
						navHeader,
						headerStartDiv,
						headerSchema,
						endNavName,
						headAfterNav,
						startNavName,
					}));
				} else {
					frontPage = footerRemoved[0];
				}
				if (isFooterSectionPresent) {
					({footer} = await this.getFooterFilesForShopify({
						templateName,
						footer,
						footer_li_class,
						footer_a_class,
						scriptRemoved,
						footerSchema,
						social_li_class,
						social_a_class,
					}));
				} else {
					footer = `<style>
  #shopify-section-footer {
  height:50px;
  display:block;
  }
</style>`;
				}

				let siteseedFilterAssests,
					siteseedFilterLibAssests,
					themeJs,
					themeCssAssets,
					passwordLayout,
					lazysizesJSAssets,
					enJsonLocales,
					ie11Assets,
					siteSeedBundleMinAssets;
				await fetch(siteseedFilter)
					.then(r => r.text())
					.then(text => {
						siteseedFilterAssests = text;
					});

				await fetch(siteseedFilterLib)
					.then(r => r.text())
					.then(text => {
						siteseedFilterLibAssests = text;
					});

				await fetch(theme)
					.then(r => r.text())
					.then(text => {
						themeJs = text;
					});

				await fetch(themeCss)
					.then(r => r.text())
					.then(text => {
						themeCssAssets = text;
					});

				await fetch(passwordLiquid)
					.then(r => r.text())
					.then(text => {
						passwordLayout = text;
					});

				await fetch(lazysizes)
					.then(r => r.text())
					.then(text => {
						lazysizesJSAssets = text;
					});

				await fetch(enJson)
					.then(r => r.text())
					.then(text => {
						enJsonLocales = text;
					});

				await fetch(ie11)
					.then(r => r.text())
					.then(text => {
						ie11Assets = text;
					});

				await fetch(siteseedBundleMin)
					.then(r => r.text())
					.then(text => {
						siteSeedBundleMinAssets = text;
					});

				var locales = zip.folder("locales");
				locales.file("en.default.json", enJsonLocales);

				var layout = zip.folder("layout");
				layout.file("theme.liquid", header);
				layout.file("gift_card.liquid", giftCardLiquid);
				layout.file("password.liquid", passwordLayout);

				var templates = zip.folder("templates");
				templates.file("404.liquid", pageNotFound);
				templates.file("article.liquid", articleTemplate);
				templates.file("blog.liquid", blogTemplate);
				templates.file("cart.liquid", cartTemplate);
				templates.file("collection.liquid", collectionTemplate);
				templates.file("gift_card.liquid", giftCardTemplate);
				templates.file("index.liquid", indexLiquidFile);
				templates.file("list-collections.liquid", listCollectionsTemplate);
				templates.file("page.frontpage.liquid", frontPage);
				templates.file("page.liquid", singlePage);
				templates.file("password.liquid", passwordTemplate);
				templates.file("product.liquid", productTemplate);
				templates.file("search.liquid", searchTemplate);

				var customers = templates.folder("customers");
				customers.file("account.liquid", customerAccountTemplate);
				customers.file(
					"activate_account.liquid",
					customerActivateAccountTemplate
				);
				customers.file("addresses.liquid", customerAddressTemplate);
				customers.file("login.liquid", customerLoginTemplate);
				customers.file("order.liquid", customerOrderTemplate);
				customers.file("register.liquid", customerRegisterTemplate);
				customers.file("reset_password.liquid", customerResetPassword);

				sections.file("article-template.liquid", articleTemplateSection);
				sections.file("blog-template.liquid", blogTemplateSection);
				sections.file("cart-template.liquid", cartTemplateSection);
				sections.file("collection.liquid", collectionSection);
				sections.file("collection-list.liquid", collectionListSection);
				sections.file("collection-template.liquid", collectionTemplateSection);
				sections.file("footer.liquid", footer);
				sections.file("header.liquid", navHeader);
				sections.file("feature-blog.liquid", featureBlog);
				sections.file(
					"list-collections-template.liquid",
					listCollectionsTemplateSection
				);
				sections.file("password-content.liquid", passwordContentSection);
				sections.file("password-footer.liquid", passwordFooterSection);
				sections.file("password-header.liquid", passwordHeaderSection);
				sections.file(
					"product-recommendations.liquid",
					productRecommendationsSection
				);
				sections.file("product-template.liquid", productTemplateSection);
				sections.file("swatch.liquid", swatchSection);

				var snippets = zip.folder("snippets");
				snippets.file("bgset.liquid", bgsetSnippets);
				snippets.file("cart-popup.liquid", cartPopUpSnippets);
				snippets.file(
					"collection-grid-item.liquid",
					collectionGridItemSnippets
				);
				snippets.file("comment.liquid", commentSnippets);
				snippets.file("css-variables.liquid", cssVariablesSnippets);
				snippets.file("form-status.liquid", formStatusSnippets);
				snippets.file("home-page.liquid", frontPage);
				snippets.file("icon-arrow-left.liquid", iconArrowLeftSnippets);
				snippets.file("icon-arrow-right.liquid", iconArrowRightSnippets);
				snippets.file("icon-cart.liquid", iconCartSnippets);
				snippets.file("icon-chevron-down.liquid", iconChevronDownSnippets);
				snippets.file("icon-close.liquid", iconCloseSnippets);
				snippets.file("icon-error.liquid", iconErrorSnippets);
				snippets.file("icon-facebook.liquid", iconFacebookSnippets);
				snippets.file("icon-login.liquid", iconLoginSnippets);
				snippets.file("icon-pinterest.liquid", iconPintrestSnippets);
				snippets.file("icon-saletag.liquid", iconSaleTagSnippets);
				snippets.file("icon-search.liquid", iconSearchSnippets);
				snippets.file("icon-spinner.liquid", iconSpinnerSnippets);
				snippets.file("icon-twitter.liquid", iconTwitterSnippets);
				snippets.file("image-style.liquid", imageStyleSnippets);
				snippets.file("media.liquid", mediaSnippets);
				snippets.file("pagination.liquid", paginationSnippets);
				snippets.file("product-card-grid.liquid", productCardGridSnippets);
				snippets.file("product-card-list.liquid", productCardListSnippets);
				snippets.file("product-price.liquid", productPriceSnippets);
				snippets.file(
					"product-price-listing.liquid",
					productPriceListingSnippets
				);
				snippets.file("search-drawer.liquid", searchDrawerSnippets);
				snippets.file(
					"siteseed.filter.action.liquid",
					siteseedFilterActionSnippets
				);
				snippets.file(
					"siteseed.filter.no_results.liquid",
					siteseedFilterNoResultSnippets
				);
				snippets.file(
					"siteseed.filter.pagination.liquid",
					siteseedFilterPaginationSnippets
				);
				snippets.file(
					"siteseed.filter.product.liquid",
					siteseedFilterProductSnippets
				);
				snippets.file(
					"siteseed.filter.script.liquid",
					siteseedFilterScriptSnippets
				);
				snippets.file(
					"siteseed.filter.search.liquid",
					siteseedFilterSearchSnippets
				);
				snippets.file(
					"siteseed.filter.sort.liquid",
					siteseedFilterSortSnippets
				);
				snippets.file(
					"siteseed.filter.tree.liquid",
					siteseedFilterTreeSnippets
				);
				snippets.file("social-sharing.liquid", socialSharingSnippets);
				snippets.file("top-header.liquid", topHeaderSnippets);
				snippets.file("siteseed-filter-css.liquid", siteseedFilterCssSnippets);

				var config = zip.folder("config");
				config.file("settings_schema.json", settingSchema);
				config.file("settings_data.json", JSON.stringify(settingData));

				assets.file("gift-card.css", giftCardCssAssets);
				assets.file("siteseed-search.css", siteseedSearchCssAssets);
				assets.file("theme.css", themeCssAssets);
				assets.file("gift-card.js", giftCardJsAssets);
				assets.file("ie11CustomProperties.min.js", ie11Assets);
				assets.file("lazysizes.js", lazysizesJSAssets);
				assets.file("password.js", passwordJsAssets);
				assets.file("siteseed.filter.init.js", siteseedFilterInitJsAssets);
				assets.file("siteseed.filter.js", siteseedFilterAssests);
				assets.file("siteseed.filter.lib.js", siteseedFilterLibAssests);
				assets.file("theme.js", themeJs);
				assets.file("siteseed.bundle.min.js", siteSeedBundleMinAssets);

				otherPages.map(x => {
					let pageHtml = x["htmlFile"];
					if (x["htmlFile"].includes("<!-- stylesheet -->")) {
						let splitArray = x["htmlFile"].split("<!-- stylesheet -->");
						pageHtml =
							splitArray[0] +
							`{{ '${x.name}.css' | asset_url | stylesheet_tag }}` +
							splitArray[1].split("<!-- End-stylesheet -->")[1];
					} else if (x["htmlFile"].includes("</head>")) {
						let splitArray = x["htmlFile"].split("</head>");
						pageHtml =
							splitArray[0] +
							`{{ '${x.name}.css' | asset_url | stylesheet_tag }}</head>` +
							splitArray[1];
					}
					templates.file(`page.${x.name}.liquid`, pageHtml);
					assets.file(`${x.name}.css`, x["cssFile"]);
					return x;
				});

				await fetch(userIcon, {
					method: "GET",
					headers: {},
				})
					.then(async response => {
						await response.arrayBuffer().then(async function (buffer) {
							await assets.file("user-icon.png", new Blob([buffer]));
						});
					})
					.catch(err => {
						console.log(err);
					});
			} else if (this.props.choosePlatformSelect === "Htmlcss") {
				let removedComment = styleFile.split("*/")[0] + "*/";
				styleFile = styleFile.replace(removedComment, "");
				let removedScript = htmlFile.split(
					"<!-- Bootstrap core JavaScript -->"
				);
				let indexFile = removedScript[0] + removedScript[1];
				zip.file("index.html", indexFile);

				var cssFolder = zip.folder("css");
				cssFolder.file("index.css", styleFile);
				otherPages.map(x => {
					zip.file(`${x.name}.html`, x["htmlFile"]);
					cssFolder.file(`${x.name}.css`, x["cssFile"]);
					return x;
				});
			}

			let zipFolderName = `${this.state.siteName} for ${this.props.choosePlatformSelect} by SiteSeed.zip`;

			zip.generateAsync({type: "blob"}).then(function (content) {
				// see FileSaver.js
				FileSaver.saveAs(content, zipFolderName);
			});
		} catch (e) {
			showToast({
				type: "error",
				message: "Unable to Export Site, Try again in a moment!",
			});
			return;
		}
	}
	render() {
		return (
			<>
				<PageTemplate
					onRef={ref => (this.pageTemplate = ref)}
					currentItem={this.props}
					{...this.state}
				/>
			</>
		);
	}
}
