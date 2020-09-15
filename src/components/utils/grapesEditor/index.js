import "grapesjs/dist/css/grapes.min.css";
import _ from "lodash";
import grapesjs from "grapesjs";
//import "grapesjs-blocks-basic";
import exportPlugin from "grapesjs-plugin-export";
import panels from "../../../containers/designerStudio/panels";
//import "grapesjs-preset-webpage";
import $ from "jquery";
import styleManager from "./styleManager";
import { openAssets } from "../../../reducers/actions/editor";

import "./index.scss";
import { svg } from "../index";
import layoutBlocks from "../blocks/layout";
import { basicBlocks } from "../blocks/basic";
import { typography } from "../blocks/typography";
import { formBlocks } from "../blocks/forms";
import formTraits from "../blocks/forms/formTraits";
import { media } from "../blocks/media";
import { extras } from "../blocks/extras";
import { slider } from "../blocks/basic/icons";
import "grapesjs-lory-slider";

const _grapesEditor = {
	editor: null,
	styleManager,
	exportConfig: {
		addExportBtn: true,
		btnLabel: "Export ZIP",
		filename: (editor) => "my-file.zip",
		root: {
			css: {
				"style.css": (ed) => ed.getCss(),
			},
			"body.html": (ed) => `<body>${ed.getHtml()}</body>`,
			"header.html": (ed) => {
				const data = _grapesEditor.extractHtmlCode({ tag: "header" }); //Custom Utility
				if (data.error) return data.message;
				return data.data;
			},
			"footer.html": (ed) => {
				const data = _grapesEditor.extractHtmlCode({ tag: "footer" }); //Custom Utility
				if (data.error) return data.message;
				return data.data;
			},
		},
	},
	styleSectors: [
		{
			name: "General",
			open: false,
			buildProps: [
				"float",
				"display",
				"position",
				"top",
				"right",
				"left",
				"bottom",
			],
			properties: [
				{
					name: "Alignment",
					property: "float",
					type: "radio",
					defaults: "none",
					list: [
						{
							title: "None",
							value: "none",
							name: `${svg("/assets/cross.svg", {
								width: "11px",
								height: "11px",
							})}`,
						},
						{
							title: "Left",
							value: "left",
							name: `${svg("/assets/floatLeft.svg", {
								width: "20px",
								height: "20px",
							})}`,
						},
						{
							title: "Right",
							value: "right",
							name: `${svg("/assets/floatRight.svg", {
								width: "20px",
								height: "20px",
							})}`,
						},
					],
				},
				{
					name: "Position",
					property: "position",
					type: "select",
					defaults: "static",
					list: [
						{
							name: "Static",
							value: "static",
						},
						{
							name: "Relative",
							value: "relative",
						},
						{
							name: "Absolute",
							value: "absolute",
						},
						{
							name: "fixed",
							value: "fixed",
						},
					],
				},
			],
		},
		{
			name: "Dimension",
			open: false,
			buildProps: [
				"width",
				"height",
				"max-width",
				"max-height",
				"min-width",
				"min-height",
				"margin",
				"padding",
			],
			properties: [
				{
					name: "Margin",
					property: "margin",
					type: "composite",
					properties: [
						{
							name: "Top",
							value: "margin-top",
							units: ["deg", "%", "vh"],
							unit: "deg",
						},
						{
							name: "Bottom",
							value: "margin-bottom",
							units: ["deg", "%", "vh"],
							unit: "deg",
						},
						{
							name: "Left",
							value: "margin-left",
							units: ["deg", "%", "vh"],
							unit: "deg",
						},
						{
							name: "Right",
							value: "margin-right",
							units: ["deg", "%", "vh"],
							unit: "deg",
						},
					],
				},
			],
		},
		{
			name: "Typography",
			open: false,
			buildProps: [
				"font-family",
				"font-size",
				"font-weight",
				"letter-spacing",
				"color",
				"line-height",
				"text-align",
				"text-decoration",
				"text-shadow",
			],
			properties: [
				{
					name: "Font",
					property: "font-family",
				},
				{
					name: "Weight",
					property: "font-weight",
				},
				{
					name: "Letter Spzcing",
					property: "letter-spacing",
				},
				{
					name: "Line Height",
					property: "line-height",
				},
				{
					name: "Decoration",
					property: "text-decoration",
					type: "select",
					list: [
						{
							name: `<h1>None</h1>`,
							value: "none",
						},
						{
							name: "Underline",
							value: "underline",
						},
						{
							name: "Striketrough",
							value: "line-through",
						},
					],
				},
				{
					name: "Shadow",
					value: "text-shadow",
				},
			],
		},
		{
			name: "Decorations",
			open: false,
			buildProps: [
				"opacity",
				"background-color",
				"border-radius",
				"border",
				"box-shadow",
				"background",
			],
			properties: [
				{
					name: "",
					property: "background-color",
				},
				{
					type: "slider",
					property: "opacity",
					defaults: 1,
					step: 0.01,
					max: 1,
					min: 0,
				},
			],
		},
		{
			name: "Extra",
			open: false,
			buildProps: ["perspective", "transition", "transform"],
			properties: [
				{
					name: "Transform",
					property: "transform",
					type: "composite",
					properties: [
						{
							name: "Rotate X",
							functionName: "rotateX",
							defaults: 0,
							type: "slider",
							step: 0.01,
							max: 1,
							min: 0,
							// units: ['deg'],
							unit: "deg",
						},
						{
							name: "Rotate Y",
							functionName: "rotateY",
							defaults: 0,
							type: "slider",
							step: 1,
							min: 0,
							max: 360,
							// units: ['deg'],
							unit: "deg",
						},
						{
							name: "Rotate Z",
							functionName: "rotateZ",
							defaults: 0,
							type: "slider",
							step: 10,
							min: 0,
							max: 100,
							unit: "deg",
						},
						{
							name: "Scale X",
							// property: 'transform-scale-x',
							functionName: "scaleX",
							defaults: 1,
							type: "slider",
							step: 1,
							min: 0,
							max: 360,
						},
						{
							name: "Scale Y",
							// property: 'transform-scale-y',
							functionName: "scaleY",
							defaults: 1,
							type: "slider",
							step: 1,
							min: 0,
							max: 360,
						},
						{
							name: "Scale Z",
							// property: 'transform-scale-z',
							functionName: "scaleZ",
							defaults: 1,
							type: "slider",
							step: 1,
							min: 0,
							max: 360,
						},
					],
				},
			],
		},
		{
			name: "Flex",
			open: false,
			buildProps: [
				"flex-direction",
				"justify-content",
				"align-items",
				"align-self",
			],
			properties: [
				{
					name: "Direction",
					property: "flex-direction",
					type: "radio",
					defaults: "row",
					list: [
						{
							value: "row",
							name: `${svg("/assets/icon.svg")}`,
							// className: 'icons-flex icon-dir-row',
							title: "Row",
						},
						{
							value: "row-reverse",
							name: `${svg("/assets/icon.svg")}`,
							// className: 'icons-flex icon-dir-row-rev',
							title: "Row reverse",
						},
						{
							value: "column",
							name: `${svg("/assets/icon.svg")}`,
							title: "Column",
							// className: 'icons-flex icon-dir-col',
						},
						{
							value: "column-reverse",
							name: `${svg("/assets/icon.svg")}`,
							title: "Column reverse",
							// className: 'icons-flex icon-dir-col-rev',
						},
					],
				},
				{
					name: "Justify",
					property: "justify-content",
					type: "radio",
					defaults: "flex-start",
					list: [
						{
							value: "flex-start",
							name: `${svg("/assets/icon.svg")}`,
							title: "Flex-Start",
						},
						{
							value: "flex-end",
							name: `${svg("/assets/icon.svg")}`,
							title: "Flex-End",
						},
						{
							value: "space-between",
							name: `${svg("/assets/icon.svg")}`,
							title: "Space-Between",
						},
						{
							value: "space-around",
							name: `${svg("/assets/icon.svg")}`,
							title: "Space-Around",
						},
						{
							value: "center",
							name: `${svg("/assets/icon.svg")}`,
							title: "Center",
						},
					],
				},
				{
					name: "Align",
					property: "align-items",
					type: "radio",
					defaults: "center",
					list: [
						{
							value: "flex-start",
							name: `${svg("/assets/icon.svg")}`,
							title: "Flex-Start",
						},
						{
							value: "flex-end",
							name: `${svg("/assets/icon.svg")}`,
							title: "Flex-End",
						},
						{
							value: "stretch",
							name: `${svg("/assets/icon.svg")}`,
							title: "Stretch",
						},
						{
							value: "center",
							name: `${svg("/assets/icon.svg")}`,
							title: "Center",
						},
					],
				},
			],
		},
	],
	config: {
		container: "#grapesEditor",
		height: "100%",
		storageManager: { type: "none" },
		// dragMode: 'absolute',
		// parser: {
		// 	parserCss: (css, editor) => [],
		// },
		plugins: [
			//"gjs-blocks-basic",
			//"gjs-preset-webpage",
			(editor) => exportPlugin(editor, _grapesEditor.exportConfig),
			layoutBlocks,
			basicBlocks,
			typography,
			media,
			"grapesjs-lory-slider",
			formBlocks,
			extras,
			formTraits,
		],
		pluginsOpts: {
			"grapesjs-lory-slider": {
				sliderBlock: {
					label: `<img src=${slider} alt=slider />
					<div>Slider</div>`,
					category: "Basic",
				},
			},
		},
		allowScripts: 1,
		components: `<div style="display: flex; justify-content: center; align-items: center">This is the default Page</div>`,
		panels: {
			appendTo: ".panel__basic-actions",
			defaults: [],
		},
		blockManager: {
			appendTo: "#blocks",
		},
		layerManager: {
			appendTo: "#layer-manager",
		},
		traitManager: {
			appendTo: ".traits-container",
		},
		canvas: {
			styles: [
				"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
				"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css",
				"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css",
			],
			scripts: [
				"https://code.jquery.com/jquery-3.3.1.slim.min.js",
				"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
				"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
				"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js",
			],
		},
	},
	init: (config = {}, dispatch, cb) => {
		let defaultConfig = _grapesEditor.config;
		if (defaultConfig.styleManager)
			defaultConfig.styleManager.sectors = _grapesEditor.styleSectors;

		if (config.plugins) {
			config.plugins.push(defaultConfig.plugins);
		}

		_grapesEditor.editor = grapesjs.init({ ...defaultConfig, ...config });
		let editor = _grapesEditor.editor;
		panels(editor, config);

		//fires for every change in the canvas
		// editor.on("component:update", (some) => {
		// 	// do something
		// 	console.log("component changed/updated/added", some);
		// });
		editor.on("run:preview", () => {
			$("#grapesEditor").addClass("left-pane-preview");
			$(".panel__top").addClass("hide-top");
			$("#style-manager").addClass("hide-top");
			$("#zoom").addClass("hide-top");
			$("#question").addClass("hide-top");
		});
		editor.on("stop:preview", () => {
			$("#grapesEditor").removeClass("left-pane-preview");
			$(".panel__top").removeClass("hide-top");
			$("#style-manager").removeClass("hide-top");
			$("#zoom").removeClass("hide-top");
			$("#question").removeClass("hide-top");
		});
		editor.Commands.add("set-device-mobile", (e) => {
			e.setDevice("Mobile portrait");
		});
		editor.Commands.add("set-device-desktop", (e) => {
			e.setDevice("Desktop");
		});
		editor.DeviceManager.add("tablet", "900px");
		editor.Commands.add("set-device-tablet", {
			run: (editor) => editor.setDevice("tablet"),
		});
		editor.on("modal:open", () => {
			console.log("modal opened");
		});
		editor.Commands.add("open-assets", {
			run(editor, sender, opts = {}) {
				dispatch(openAssets({ type: "image", imageAssetsTarget: opts.target }));
				// opts.target.set('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg')
			},
		});
		/* 	editor.Commands.add("show-traits", {
			getTraitsEl(editor) {
				//const row = editor.getContainer().closest(".style-panel-container");
				//console.log(document.getElementsByClassName("traits-container"));
				return document.getElementsByClassName("traits-container");
			},
			run(editor, sender) {
				document.getElementsByClassName("traits-container")[0].style.display =
					"";
			},
			stop(editor, sender) {
				document.getElementsByClassName("traits-container")[0].style.display =
					"none";
			},
		}); */
		// editor.on("component:add", (model) => {
		// 	/* if (model.attributes.type === "image") {
		// 		editor.runCommand("open-assets");
		// 	} */
		// 	/* if (model.ccid === "modal-container-2") {
		// 		editor.select(model);
		// 		const component = editor.getSelected();
		// 		component.remove(model);
		// 		alert("cannot add multiple popups on same page");
		// 	} */
		// });
		editor.on("canvas:drop", (instance, model) => {
			if (model.attributes && model.attributes.type === "image") {
				editor.runCommand("open-assets");
			}

			if (model.ccid === "modal-container-2") {
				editor.select(model);
				const component = editor.getSelected();
				component.remove(model);
				alert("cannot add multiple popups on same page");
			}
		});

		editor.on("component:update", () => {
			setTimeout(() => {
				$(".gjs-layer-name").attr("data-toggle-move", "true");
				$(".gjs-layer-move").remove();
				$(".gjs-layer-count").remove();
			}, 110);
		});

		//for adding layer manager
		editor.Commands.add("open-siteSeed-layers", {
			run(editor) {
				const lm = editor.LayerManager;
				setTimeout(() => {
					const newPanels = document.getElementById("layer-manager");
					//console.log("from openSiteSeed command --> panels -->", newPanels);
					const layers = document.createElement("div");
					layers.appendChild(lm.render());
					newPanels.appendChild(layers);
					$(".gjs-layer-name").attr("data-toggle-move", "true");
					$(".gjs-layer-move").remove();
					$(".gjs-layer-count").remove();
				}, 100);
			},

			stop() {
				const layers = this.layers;
				layers && (layers.style.display = "none");
			},
		});

		let domComps = editor.DomComponents;
		let dType = domComps.getType("video");
		let dModel = dType.model;
		const yt = "yt";
		domComps.addType("video", {
			model: dModel.extend({
				getProviderTrait() {
					return {
						type: "select",
						label: "Provider",
						name: "provider",
						changeProp: 1,
						options: [{ value: yt, name: "Youtube" }],
					};
				},
			}),
		});

		//init style manager
		styleManager.init(config.styles, dispatch);
		if (cb) {
			cb();
		}
	},
	getCode: (options = { html: true, css: true }) => {
		const { html, css } = options;
		return {
			html: html && _grapesEditor.editor.getHtml(),
			css: css && _grapesEditor.editor.getCss(),
		};
	},
	extractHtmlCode: (options) => {
		let { start, end, tag } = options;
		if (tag) {
			start = `<${tag}`;
			end = `</${tag}>`;
		}
		const { editor } = _grapesEditor;
		let html = `${editor.getHtml()}`;
		const startIndex = html.search(start);
		const endIndex = html.search(end) + end.length;
		if (startIndex === -1 || endIndex === -1)
			return {
				error: true,
				message: tag
					? `Please add '${tag}' tag, to export correctly`
					: `Please add '${
							start + "' and '" + end
					  }' identifer, to export correctly`,
			};
		let header = html.substring(startIndex, endIndex);
		return {
			error: false,
			message: "Extracted Content Successfully",
			data: header,
		};
	},
	addBlock: (name, config) => {
		if (!config || !name || name === "") {
			return;
		}
		let blockManager = _grapesEditor.editor.BlockManager;
		blockManager.add(name, config);
	},
};

export default _grapesEditor;
