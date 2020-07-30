import grapesjs from "grapesjs";

export default grapesjs.plugins.add("gjs-blocks-basic", (editor, opts = {}) => {
	const config = {
		blocks: [
			"column1",
			"column2",
			"column3",
			"column4",
			"column3-7",
			"4-8column",
			"8-4column",
		],
		flexGrid: 0,
		stylePrefix: "gjs-",
		addBasicStyle: true,
		category: "Layout",
		labelColumn1: "1 Column",
		labelColumn2: "2 Columns",
		labelColumn3: "3 Columns",
		labelColumn4: "4 Columns",
		labelColumn48: "4/8 Columns",
		labelColumn84: "8/4 Columns",
		rowHeight: 75,
		...opts,
	};

	// Add blocks
	const loadBlocks = require("./blocks");
	loadBlocks.default(editor, config);
});
