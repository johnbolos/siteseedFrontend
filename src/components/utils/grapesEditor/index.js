import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import "grapesjs-blocks-basic";
import exportPlugin from "grapesjs-plugin-export";
import panels from "../../../containers/designerStudio/panels";
// import "grapesjs-preset-webpage";
import $ from "jquery";
import styleManager from "./styleManager";

import "./index.scss";
import { svg } from "../index";
import { layoutBlocks } from "../blocks/layout";
import { basicBlocks } from "../blocks/basic";
import slider from "grapesjs-lory-slider";
/* const navBar = (editor) => {
	editor.BlockManager.add("navbar", {
		label: "Simple Block",
		category: "Layout",
		//activate: true,
		//select: true,
		content: `<div class="my-block">This is a simple block</div>`,
	});
};
 */
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
		height: "100vh",
		storageManager: { type: "none" },
		plugins: [
			//"gjs-blocks-basic",
			//"gjs-preset-webpage",
			(editor) => exportPlugin(editor, _grapesEditor.exportConfig),
			layoutBlocks,
			basicBlocks,
			//slider,
		],
		pluginsOpts: {
			"grapesjs-lory-slider": { sliderBlock: { category: "Basic" } },
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
		// console.log("html ", editor.getHtml());
		// console.log("selected ", editor.getSelected());
		// console.log("config ", editor.getConfig());
		// console.log("JS ", editor.getJs());

		//fire for every change in the canvas
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
		//init style manager
		styleManager.init(config.styles, dispatch);
		if (cb) {
			console.log("pppppppppppppppppp");
		}
		cb();
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
		console.log(startIndex);
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

/* class apiReference {
	blockConfig = {
		label: `<div>
                    <img src="https://picsum.photos/70/70"/>
                    <div class="my-label-block">Label block</div>
                </div>`,
		content: '<div class="my-block" id="h1qert">This is a simple block</div>',
		category: "extra",
		attributes: {
			class: "customBlock",
		},
		render: ({ model, className }) => `<div class="${className}__my-wrap">
                Before label
                ${model.get("label")}
                After label
            </div>`,

		// content: html
	};
	editorConfig = {
		container: "#grapesEditor",
		height: "100%",
		storageManager: { type: "none" },
		plugins: ["gjs-blocks-basic"],
		allowScripts: 1,
		components: `<div style="display: flex; justify-content: center; align-items: center">This is the default Page</div>`,
		// panels: {
		//   defaults: []
		// },
		blockManager: {
			appendTo: "#blocks",
		},
		// styleManager: {
		//   sectors: [{
		//     name: 'Dimension',
		//     buildProps: ['height', 'min-height', 'width', 'min-height']
		//   }, {
		//     name: 'Extra',
		//     buildProps: ['background-color', 'box-shadow']
		//   }]
		// }
	};
	exportCommand = {
		// editor.runCommand('gjs-export-zip')
	};
	addBlock = {
		// _grapesEditor.addBlock('my-first-block', {
		//     label: 'Simple Block',
		//     // content: '<div class="my-block" id="h1qert">This is a simple block</div>',
		//     content: html,
		//     category: 'extra',
		//     attributes: {
		//         class: 'custom-block'
		//     },
		//     render: ({ model, className }) => (`<div class="${className}__my-wrap" style="display: flex; justify-content: space-between; align-items: center; flex-direction: column; height: 100%;">
		//             <div>Before label</div>
		//             <div>${model.get('label')}</div>
		//             <div>After label</div>
		//         </div>`
		//     ),
		// })
	};
} */
