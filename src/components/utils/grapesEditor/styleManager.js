import _ from "lodash";

// import { template1StyleMedia } from "../../../containers/designerStudio/dummieTemp";
import { template1StyleMedia } from "../../../containers/designerStudio/dummiev3";
import {
	setEditorStyleData,
	setStyleStr,
} from "../../../reducers/actions/editorHistoryActions";

const styleManager = {
	defaultConfig: {},
	addEvents: (meta, options) => {
		//options = { pseudoClass: 'hover' }
		customEvents.saveStyleInfo(meta, options);
	},
	init: (styleStr, dispatch, styleFontStr, customCss) => {
		//create object
		let styleObj = styleManager.strToObj(styleStr);
		if (styleObj.error) {
			styleStr = '<style>	</style>'
			styleObj = { data: { stylesObj: [], filteredStr: '' } }
		}
		//save in redux=====================================================================
		dispatch(setEditorStyleData(styleObj.data.stylesObj));
		dispatch(setStyleStr(styleStr));
		//==================================================================================

		// let frame = document.getElementsByClassName("gjs-frame");
		// const body = frame[0].contentWindow.document.getElementsByTagName(
		// 	"body"
		// )[0];
		// //add the style tag in dom
		// let styleId = "ss-style";
		// let style = document.createElement("style");
		// style.id = styleId;
		// style.innerHTML = styleObj.data.filteredStr;
		// body.insertBefore(style, body.firstChild);
		// if (
		// 	styleObj.data &&
		// 	styleObj.data.stylesObj[0] &&
		// 	styleObj.data.stylesObj[0].custom
		// ) {
		// 	let style = document.createElement("style");
		// 	style.id = "ss-customStyles";
		// 	style.innerHTML = styleObj.data.stylesObj[0].styles;
		// 	body.insertBefore(style, body.firstChild);
		// }

		let frame = document.getElementsByClassName("gjs-frame");
		if (!frame[0]) {
			return
		}
		const grapesDocument = frame[0].contentWindow.document;
		let body = grapesDocument.getElementsByTagName("body");
		frame[0].contentWindow.addEventListener(
			"DOMNodeInserted",
			function (evt) {
				if (evt.target.className == "gjs-css-rules") {
					// const gjsCssRules = frame[0].contentWindow.document.querySelector(
					// 	".gjs-css-rules"
					// );
					const gjsCssRules = evt.target;



					let style = document.createElement("style");
					style.id = "ss-customStyles";
					// style.innerHTML = styleObj.data.stylesObj[0].styles;	//adds custom stylesss

					style.innerHTML = customCss;
					// ===========================================================
					// gjsCssRules.appendChild(style);
					// ===========================================================

					// body[0].appendChild(style);
					gjsCssRules.insertAdjacentElement("afterend", style);

					//add the style tag in dom
					style = document.createElement("style");
					style.id = "ss-style";
					style.innerHTML = styleObj.data.filteredStr;
					// ===========================================================
					// gjsCssRules.appendChild(style);
					// ===========================================================

					// body[0].appendChild(style);
					gjsCssRules.insertAdjacentElement("afterend", style);

					// if (!grapesDocument.querySelector('#ss-style')) {
					// 	body[0].appendChild(style);
					// }
					// body.insertBefore(style, body.firstChild);

					// -------------------------------------------Style-font-assets------------------------------------------------
					if (styleFontStr) {
						style = document.createElement("style");
						style.id = "ss-style-assets";
						style.innerHTML = styleFontStr;

						// body[0].appendChild(style);
						gjsCssRules.insertAdjacentElement("afterend", style);
					}
					// ------------------------------------------------------------------------------------------------------------


					let script = document.createElement("script");
					script.id = 'ss-animate-init'
					script.innerHTML = `ssAnimateInit()`
					// script.innerHTML = `
					// 	console.log('sss.p aaaaaaaaaaaaabbbb');
					// 	controller = null;
					// 	tl = null;
					// 	if (typeof(scene) === 'undefined') {
					// 	scene = [];
					// 	} else if (scene.find((item) => item !== null)) {
					// 	  //	object present
					// 	  scene.forEach((scn, key) => {
					// 		  scn.removeTween(true);
					// 		  scn.destroy(true);
					// 	  });
					// 	  scene = []
					// 	}
					// 	  controller = new ScrollMagic.Controller();
						
					// 	tl = new TimelineMax();
					// 	var child = $(".know-more-button.click-btn");
					// 	tl.to(child, 1, {
					// 	//   y: '-300%',	//move vertically top
					// 	  x: '-300%',	//move horizontally left
					// 	//   rotation: 360 * 10,	//rotate
					// 	//   scale: -100,	//scale
					// 	//   '-webkit-filter': 'blur(10px)',
					// 	//   'filter': 'blur(10px)',
					// 	//   autoAlpha: 0,	//transparency
					// 	  ease: Linear.easeNone
					// 	});
						
					// 	scene.push(
					// 		new ScrollMagic.Scene({
					// 			//   triggerElement: "#uniqueId",
					// 			  triggerHook: 0.2,
					// 			  offset: '625.4000000000001px',
					// 			  duration: "60%"
					// 			})
					// 			.setTween(tl)
					// 			.addIndicators({
					// 			  colorTrigger: "black",
					// 			  colorStart: "black",
					// 			  colorEnd: "black",
					// 			  indent: 10
					// 			})
					// 			.addTo(controller)
					// 	);
					// 	  `;

					gjsCssRules.insertAdjacentElement("afterend", script);

					// if (
					// 	styleObj.data &&
					// 	styleObj.data.stylesObj[0] &&
					// 	styleObj.data.stylesObj[0].custom
					// ) {
					// 	let style = document.createElement("style");
					// 	style.id = "ss-customStyles";
					// 	// style.innerHTML = styleObj.data.stylesObj[0].styles;	//adds custom stylesss

					// 	style.innerHTML = template1StyleMedia;
					// 	gjsCssRules.appendChild(style);
					// 	// body.insertBefore(style, body.firstChild);
					// }
				}
			},
			false
		);
	},
	strToObj: (str) => {
		//does not support media queries
		// str = str.toLowerCase();
		let response = [];
		let start = str.search("<style>");
		let end = str.search("</style>");
		if (start == -1) {
			return {
				error: true,
				message: "Invalid String, cannot find <style> tag",
			};
		}
		if (end == -1) str = str.substring(start + 7, str.length - 1);
		else str = str.substring(start + 7, end - 1);
		str = str.trim();
		// remove all comments

		str = styleManager.removeComments(str);
		//extract custom styles now
		const data = styleManager.extractBlock("@media", str);
		if (data.customCode != "") {
			response.push({
				custom: true,
				styles: data.customCode,
			});
		}
		str = data.str;
		// continue with flow
		let ruleSets = str.split("}");
		if (ruleSets.length <= 1)
			return {
				error: false,
				message: "Converted successfully",
				data: { filteredStr: str, stylesObj: response },
			};
		_.each(ruleSets, (item) => {
			if (item == "") return;
			let ruleSet = item.split("{");
			let selector = ruleSet[0].trim();
			let styles = {};
			let declarationBlock = ruleSet[1];
			if (!declarationBlock) return;
			let declarations = declarationBlock.split(";");
			_.each(declarations, (item) => {
				let declaration = item.split(":");
				if (item == "") return;
				if (declaration[0].trim() == "") return;
				if (declaration.length > 2) {
					let ruleSeclector = declaration.shift()
					styles[ruleSeclector.trim()] = declaration.join(':')
				} else {
					styles[declaration[0].trim()] = declaration[1];
				}
			});
			response.push({ selector, styles });
		});
		return {
			error: false,
			message: "converted successfully",
			data: { filteredStr: str, stylesObj: response },
		};
	},
	removeComments: (str) => {
		return str.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "");
	},
	extractBlock: (phrase = "@media", str) => {
		let response = {
			str: str,
			customCode: "",
		};
		// find phrase index
		let indices = styleManager.getIndicesOf(phrase, str);
		if (indices.length == 0) {
			return response;
		}
		let customStyleIndices = []; //{ start: '', end: '' }
		_.each(indices, (startIndex, key) => {
			// loop string from index
			customStyleIndices[key] = { start: startIndex };
			let exitBraceCount = 0,
				startBraceFound = false;

			for (let i = startIndex; i < str.length; i++) {
				if (str[i] == "{") {
					exitBraceCount++;
					startBraceFound = true;
				} else if (str[i] == "}") {
					exitBraceCount--;
				}
				if (exitBraceCount == 0 && startBraceFound) {
					customStyleIndices[key].end = i;
					break;
				}
			}
		});
		customStyleIndices.forEach((item, key) => {
			let subStr = str.substring(item.start, item.end + 1);
			response.customCode += "\n" + subStr;
			str = str.replace(subStr, "");
			if (customStyleIndices[key + 1]) {
				customStyleIndices[key + 1].start -= subStr.length;
				customStyleIndices[key + 1].end -= subStr.length;
			}
		});
		response.str = str;
		return response;
	},
	importFontsBlock: (name, type = "google") => {
		let frame = document.getElementsByClassName("gjs-frame");
		const grapesDocument = frame[0].contentWindow.document;
		let styleTag = grapesDocument.getElementById("ss-style-assets");
		if (!styleTag) {
			let styleId = "ss-style-assets";
			styleTag = grapesDocument.createElement("style");
			styleTag.id = styleId;
			let body = grapesDocument.getElementsByTagName("body")[0];
			body.insertBefore(styleTag, body.firstChild);
		}
		let str = styleTag.innerHTML,
			findPhrase = "";

		if (type == "google") {
			findPhrase = "https://fonts.googleapis.com/css?family=";
			let indices = styleManager.getIndicesOf(findPhrase, str);
			if (indices.length == 0) {
				// not present yet
				str =
					`\n\t@import url("${"https://fonts.googleapis.com/css?family=display=swap"}");\n` +
					str; //14
				indices.push(15);
			}
			str = [
				str.slice(0, indices[0] + findPhrase.length),
				`${name}:100,200,300,400,500,600,700,800,900|`,
				str.slice(indices[0] + findPhrase.length),
			].join(""); // -6 due to family
			styleTag.innerHTML = str;
			return { error: false, data: str }
		}
		findPhrase = '/* local fonts */\n'
		let indices = styleManager.getIndicesOf(findPhrase, str)
		if (indices.length == 0) {
			// not present yet
			str = str + `\n\t/* local fonts */\n`
			indices = styleManager.getIndicesOf(findPhrase, str)
		}
		let fontObj = name
		// find count
		let countPhrase = `:count-${fontObj.value}`
		let countIndexEnd = str.indexOf(countPhrase)
		let countIndexStart = -1
		if (countIndexEnd != -1) {
			for (let i = 1; i < 4; i++) {	// 4 depicts max possible count digit => { 2 => 1 digit; 999 => 3 digits }
				if (str[countIndexEnd - i] == '*') {
					countIndexStart = countIndexEnd - i + 1
					break;
				}
			}
		}
		let count = parseInt(str.substring(countIndexStart, countIndexEnd))
		// if exists, update the count to + 1
		if (!isNaN(count)) {
			count++;
			str = [str.slice(0, countIndexStart), `${count}`, str.slice(countIndexEnd)].join('')
			styleTag.innerHTML = str
		} else {
			// else add new rule with count 1
			let format = ''
			switch (/(?:\.([^.]+))?$/.exec(fontObj.url)[1]) {
				case 'woff2':
					format = 'format("woff2")'
					break;
				case 'woff':
					format = 'format("woff")'
					break;
				case 'ttf':
					format = 'format("truetype")'
					break;
			}
			let familyRule = `\n/*1:count-${fontObj.value}*/\n@font-face {
					font-family: "${fontObj.value}";
					src: url("${fontObj.url}") ${format};
				}\n`
			str = [str.slice(0, ((indices[0] + findPhrase.length))), `${familyRule}`, str.slice((indices[0] + findPhrase.length))].join('')
			styleTag.innerHTML = str
		}
		return { error: false, data: str }
	},
	removeFontsBlock: (name, type = "google") => {
		let frame = document.getElementsByClassName("gjs-frame");
		const grapesDocument = frame[0].contentWindow.document;
		const styleTag = grapesDocument.getElementById("ss-style-assets");
		if (!styleTag) {
			return { error: true }
		}
		let str = styleTag.innerHTML,
			findPhrase = "";

		let countPhrase = `:count-${name}`;
		let countIndexEnd = str.indexOf(countPhrase)
		let countIndexStart = -1
		if (countIndexEnd != -1) {
			for (let i = 1; i < 4; i++) {	// 4 depicts max possible count digit => { 2 => 1 digit; 999 => 3 digits }
				if (str[countIndexEnd - i] == '*') {
					countIndexStart = countIndexEnd - i + 1
					break;
				}
			}
			let count = parseInt(str.substring(countIndexStart, countIndexEnd))
			// remove url font
			if (count > 1) {
				count--;
				str = [str.slice(0, countIndexStart), `${count}`, str.slice(countIndexEnd)].join('')
				styleTag.innerHTML = str
			} else {
				let braceIndices = styleManager.getIndicesOf('}\n', str);
				let goal = countIndexEnd
				let blockEnd = braceIndices.reduce(function (prev, curr) {
					return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
				});
				str = [str.slice(0, countIndexStart - 3), `${count}`, str.slice(countIndexEnd + 1)].join('')
				styleTag.innerHTML = str
			}
			return { error: false, data: str }
		}
		// remove google font
		findPhrase = "https://fonts.googleapis.com/css?family=";
		let indices = styleManager.getIndicesOf(findPhrase, str);
		if (indices.length == 0) {
			// not present yet
			return { error: true }
		}
		if (type == "google") {
			findPhrase = `${name}:100,200,300,400,500,600,700,800,900|`;
			str = str.replace(findPhrase, "");
		}
		styleTag.innerHTML = str;
		return { error: false, data: str }

	},
	getIndicesOf: (searchStr, str, caseSensitive) => {
		var searchStrLen = searchStr.length;
		if (searchStrLen == 0) {
			return [];
		}
		var startIndex = 0,
			index,
			indices = [];
		if (!caseSensitive) {
			str = str.toLowerCase();
			searchStr = searchStr.toLowerCase();
		}
		while ((index = str.indexOf(searchStr, startIndex)) > -1) {
			indices.push(index);
			startIndex = index + searchStrLen;
		}
		return indices;
	},
	getSelectorStyles: (selector, styleObj) => {
		let obj = selector.map((val) => {
			return _.find(styleObj, (item) => {
				if (item.selector) {
					return item.selector.includes(val.trim());
				}
			});
		});
		return obj.filter((x) => x !== undefined);
	},
	getSelectorStyleInfo: (selector, styleObj, options = {}) => {
		let { pseudoClass } = options;
		if (pseudoClass == "normal") {
			pseudoClass = null;
		}
		let response = {
			index: [],
			styles: {},
		};
		response.index = selector.map((val) => {
			return _.findIndex(styleObj, (item) => {
				if (item.selector) {
					// return item.selector.includes(
					// 	`${pseudoClass ? val + ":" + pseudoClass : val}`.trim()
					// );
					return (
						item.selector ==
						`${pseudoClass ? "." + val + ":" + pseudoClass : "." + val}`.trim()
					);
				}
			});
		});
		response.index = response.index.filter((x) => x !== -1);
		response.index.forEach((val) => {
			response.styles = { ...response.styles, ...styleObj[val].styles };
		});
		return response;
	},
	getStyles: (selected, pseudoClass, key) => {
		// find in selected styleInfo, if not present then, return default
		// switch (key) {
		// 	case '':

		// 		return
		// }
		let { styleInfo } = selected;
		let resp = styleInfo.styles[key];
		let chromeNNotBorder = window.chrome || !key.includes('border')	// If browser is firefox then dont follow getComputedStyles approach for border property
		let skipComputed = ['box-shadow', 'width', 'height'].includes(key)	// For css rules which shouldn't follow getComputedStyles approach
		if (pseudoClass == 'normal' && chromeNNotBorder && !skipComputed) {

			// ===================================================== Not sure if important =====================================================
			// if (resp && resp.trim() != '' && ['width', 'height', 'maxWidth', 'maxHeight'].includes(key)) {
			// 	resp = resp.trim().replace(' !important', '')
			// 	return resp
			// }
			// ===================================================== ====================== =====================================================

			resp = getComputedStyle(selected.node)[key];
			resp = resp.replace(' !important', '')
			if (key == 'font-family') {
				if (resp.includes(",")) {
					// keep data before comma
					resp = (resp.split(','))[0]
					resp = _.startCase(resp);
				}
				resp = resp.replace(/ /gi, "+");
			}
			resp = `${resp}`.trim()
			if (key == "text-shadow") {
				// no need to alter as the logic is made in compatible for this already (for getComputerStyles)

				// resp = resp.split(/,(?![^(]*\))/);
				// _.each(resp, (element, index) => {
				// 	element = element.trim().split(/ (?![^(]*\))/);
				// 	let color = element.pop();
				// 	element.unshift(color);
				// 	resp[index] = element.join(" ");
				// });
				// resp = resp.join(", ");
			} else if (key == "box-shadow") {
				// no need to alter as the logic is made in compatible for this already (for getComputerStyles)
			} else if (key == 'border-radius') {
				if (resp.split(' ').length == 3) {
					let initialValueArr = resp.split(' ')
					resp = `${initialValueArr[0]} ${initialValueArr[1]} ${initialValueArr[1]} ${initialValueArr[2]}`
				}
			}
			return resp
		}
		if (resp) {
			resp = `${resp}`.trim()
			resp = resp.replace(' !important', '')
		}

		if (key.includes("font-family") && styleInfo.styles[key]) {
			if (resp.includes(",")) {
				return _.startCase(resp);
			}
			return resp.replace(/ /gi, "+");
		}
		if (key.includes("transition")) {
			resp = getComputedStyle(selected.node, pseudoClass)[key];
			return resp;
		}
		if (key.includes("margin") && styleInfo.styles["margin"]) {
			let margin = styleInfo.styles["margin"].trim().split(" ");
			let marginObj = {
				marginTop: "0px",
				marginRight: "0px",
				marginBottom: "0px",
				marginLeft: "0px",
			};
			switch (margin.length) {
				case 1:
					marginObj = {
						marginTop: margin[0],
						marginRight: margin[0],
						marginBottom: margin[0],
						marginLeft: margin[0],
					};
					break;
				case 2:
					marginObj = {
						marginTop: margin[0],
						marginRight: margin[1],
						marginBottom: margin[0],
						marginLeft: margin[1],
					};
					break;
				case 4:
					marginObj = {
						marginTop: margin[0],
						marginRight: margin[1],
						marginBottom: margin[2],
						marginLeft: margin[3],
					};
					break;
			}
			return marginObj[key];
		}
		if (key.includes("padding") && styleInfo.styles["padding"]) {
			let padding = styleInfo.styles["padding"].trim().split(" ");
			let paddingObj = {
				paddingTop: "0px",
				paddingRight: "0px",
				paddingBottom: "0px",
				paddingLeft: "0px",
			};
			switch (padding.length) {
				case 1:
					paddingObj = {
						paddingTop: padding[0],
						paddingRight: padding[0],
						paddingBottom: padding[0],
						paddingLeft: padding[0],
					};
					break;
				case 2:
					paddingObj = {
						paddingTop: padding[0],
						paddingRight: padding[1],
						paddingBottom: padding[0],
						paddingLeft: padding[1],
					};
					break;
				case 4:
					paddingObj = {
						paddingTop: padding[0],
						paddingRight: padding[1],
						paddingBottom: padding[2],
						paddingLeft: padding[3],
					};
					break;
			}
			return paddingObj[key];
		}
		if (resp) {
			if (key == "text-shadow") {
				resp = resp.split(/,(?![^(]*\))/);
				_.each(resp, (element, index) => {
					element = element.trim().split(/ (?![^(]*\))/);
					let color = element.pop();
					element.unshift(color);
					resp[index] = element.join(" ");
				});
				resp = resp.join(", ");
			} else if (key == "box-shadow") {
				resp = resp.split(/,(?![^(]*\))/);
				_.each(resp, (element, index) => {
					element = element.trim().split(/ (?![^(]*\))/);
					let color = ''
					if (element[element.length - 1].trim() == 'inset') {
						color = element[element.length - 2]
						element.splice(element.length - 2, 1)
					} else {
						color = element.pop();
					}
					element.unshift(color);
					resp[index] = element.join(" ");
				});
				resp = resp.join(", ");
			}
		}
		if (!resp) {
			// create default
			switch (key) {
				case "float":
					resp = "none";
					return resp;
				case "display":
					resp = "block";
					return resp;
				case "position":
					resp = "static";
					return resp;
				case "top":
				case "right":
				case "left":
				case "bottom":
				case "width":
				case "height":
					resp = "Auto";
					return resp;
				case "maxWidth":
				case "maxHeight":
					resp = "None";
					return resp;
				case "marginTop":
				case "marginRight":
				case "marginBottom":
				case "marginLeft":
				case "paddingTop":
				case "paddingRight":
				case "paddingBottom":
				case "paddingLeft":
					resp = "0px";
					return resp;
				case "font-family":
				case "font-weight":
					resp = "Auto";
					return resp;
				case "font-size":
					resp = getComputedStyle(selected.node, pseudoClass)[key];
					return resp;
				case "color":
					resp = "rgb(255, 255, 255)";
					return resp;
				case "line-height":
				case "letter-spacing":
					resp = getComputedStyle(selected.node, pseudoClass)[key];
					return resp;
				case "text-decoration":
					resp = "none";
					return resp;
				case "text-align":
					resp = "left";
					return resp;
				case "opacity":
					resp = 100;
					return resp;
				case "border-radius":
					resp = "0%";
					return resp;
				case "border-width":
					resp = "0px";
					return resp;
				case "border-style":
					resp = "solid";
					return resp;
				case "border-color":
					resp = "rgb(255, 255, 255)";
					return resp;
				case "transition-property":
					resp = "all";
					return resp;
				case "transition-duration":
					resp = "0ms";
					return resp;
				case "transition-timing-function":
					resp = "ease";
					return resp;
				case "perspective":
				case "order":
					resp = null;
					return resp;
				case "flex-direction":
				case "justify-content":
				case "align-items":
					resp = getComputedStyle(selected.node, pseudoClass)[key];
					return resp;
				case "flex-grow":
					resp = "0";
					return resp;
				case "flex-shrink":
					resp = "1";
					return resp;
				case "flex-basis":
					resp = null;
					return resp;
				case "text-shadow":
				case "box-shadow":
					resp = "none";
					return resp;
				case "background-image":
				case "background-blend-mode":
				case "background-repeat":
				case "background-position":
				case "background-attachment":
				case "background-size":
					resp = null;
					return resp;
				case "background-color":
					resp = "rgba(0, 0, 0, 0)";
					return resp;
			}
		}
		return resp;
	},
	setStyleTag: (data) => {
		// update style tag
		let frame = document.getElementsByClassName("gjs-frame")
		let doc = frame[0].contentWindow.document
		let style = doc.getElementById("ss-style")
		if (!style) {
			return { type: '' }
		}
		let innerHTML = _.clone(data)
		innerHTML = innerHTML.replace('<style>', '')
		innerHTML = innerHTML.replace('</style>', '')
		style.innerHTML = innerHTML
	},
	resetAnim: () => {
		let frame = document.getElementsByClassName("gjs-frame")
		if (!frame[0]) {
			return
		}
		let doc = frame[0].contentWindow.document
		const script = doc.getElementById("ss-animate-init")
		// script.innerHTML = ""
		script.remove();
		const gjsCssRules = doc.querySelector(".gjs-css-rules")
		let newScript = document.createElement("script");
		newScript.id = 'ss-animate-init'
		newScript.innerHTML = `ssAnimateInit()`
		gjsCssRules.insertAdjacentElement("afterend", newScript);
	}
};

export const customEvents = {
	saveStyleInfo: (meta, options, cb = () => { }) => {
		//options = { pseudoClass: 'hover' }
		const { elem, node } = meta;
		if (!elem || typeof elem.className == "object") {
			return;
		}
		let className = elem.className.split(" ");
		const styleInfo = styleManager.getSelectorStyleInfo(
			className,
			node.props.styleObj,
			options
		);
		node.setState({ selected: { node: elem, styleInfo } }, () => {

			cb();
		});
	},
};

export default styleManager;
