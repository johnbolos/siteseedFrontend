import { column, column2, column3, column4, four, eight } from "./icons";

export default function (editor, opt = {}) {
	const c = opt;
	let bm = editor.BlockManager;
	let blocks = c.blocks;
	let stylePrefix = c.stylePrefix;
	const flexGrid = c.flexGrid;
	const basicStyle = c.addBasicStyle;
	const rowHeight = c.rowHeight;
	const clsRow = `${stylePrefix}row`;
	const clsCell = `${stylePrefix}cell`;
	const styleRow = flexGrid
		? `
    .${clsRow} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }`
		: `
    .${clsRow} {
      display: table;
      padding: 10px;
      width: 100%;
    }
    @media (max-width: 768px) {
      .${stylePrefix}cell, .${stylePrefix}cell30, .${stylePrefix}cell70 {
        width: 100%;
        display: block;
      }
    }`;
	const styleClm = flexGrid
		? `
    .${clsCell} {
      min-height: ${rowHeight}px;
      flex-grow: 1;
      flex-basis: 100%;
    }`
		: `
    .${clsCell} {
      width: 8%;
      display: table-cell;
      height: ${rowHeight}px;
    }`;
	const styleClm30 = `
  .${stylePrefix}cell30 {
    width: 30%;
  }`;
	const styleClm70 = `
  .${stylePrefix}cell70 {
    width: 70%;
  }`;

	const step = 0.2;
	const minDim = 1;
	const currentUnit = 1;
	const resizerBtm = {
		tl: 0,
		tc: 0,
		tr: 0,
		cl: 0,
		cr: 0,
		bl: 0,
		br: 0,
		minDim,
	};
	const resizerRight = {
		...resizerBtm,
		cr: 1,
		bc: 0,
		currentUnit,
		minDim,
		step,
	};

	// Flex elements do not react on width style change therefore I use
	// 'flex-basis' as keyWidth for the resizer on columns
	if (flexGrid) {
		resizerRight.keyWidth = "flex-basis";
	}

	const rowAttr = {
		class: clsRow,
		"data-gjs-droppable": `.${clsCell}`,
		"data-gjs-resizable": resizerBtm,
		"data-gjs-name": "Row",
	};

	const colAttr = {
		class: clsCell,
		"data-gjs-draggable": `.${clsRow}`,
		"data-gjs-resizable": resizerRight,
		"data-gjs-name": "Cell",
	};

	if (flexGrid) {
		colAttr["data-gjs-unstylable"] = ["width"];
		colAttr["data-gjs-stylable-require"] = ["flex-basis"];
	}

	// Make row and column classes private
	const privateCls = [`.${clsRow}`, `.${clsCell}`];
	editor.on(
		"selector:add",
		(selector) =>
			privateCls.indexOf(selector.getFullName()) >= 0 &&
			selector.set("private", 1)
	);

	const attrsToString = (attrs) => {
		const result = [];

		for (let key in attrs) {
			let value = attrs[key];
			const toParse = value instanceof Array || value instanceof Object;
			value = toParse ? JSON.stringify(value) : value;
			result.push(`${key}=${toParse ? `'${value}'` : `'${value}'`}`);
		}

		return result.length ? ` ${result.join(" ")}` : "";
	};

	const toAdd = (name) => blocks.indexOf(name) >= 0;
	const attrsRow = attrsToString(rowAttr);
	const attrsCell = attrsToString(colAttr);

	toAdd("column1") &&
		bm.add("column1", {
			label: `<img src=${column} alt=column />
      <div>1 Column</div>`,
			category: c.category,
			//attributes: { class: 'gjs-fonts gjs-f-b1' },
			content: `<div ${attrsRow}>
        <div ${attrsCell}></div>
      </div>
      ${
				basicStyle
					? `<style>
          ${styleRow}
          ${styleClm}
        </style>`
					: ""
			}`,
		});

	toAdd("column2") &&
		bm.add("column2", {
			label: `<img src=${column2} alt=column2 />
      <div>2 Columns</div>`,
			//attributes: { class: 'gjs-fonts gjs-f-b2' },
			category: c.category,
			content: `<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>
      ${
				basicStyle
					? `<style>
          ${styleRow}
          ${styleClm}
        </style>`
					: ""
			}`,
		});

	toAdd("column3") &&
		bm.add("column3", {
			label: `<img src=${column3} alt=column3 />
      <div>3 Columns</div>`,
			category: c.category,
			//attributes: { class: 'gjs-fonts gjs-f-b3' },
			content: `<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>
      ${
				basicStyle
					? `<style>
          ${styleRow}
          ${styleClm}
        </style>`
					: ""
			}`,
		});
	toAdd("column4") &&
		bm.add("column4", {
			label: `<img src=${column4} alt=column4 />
      <div>4 Columns</div>`,
			category: c.category,
			//attributes: { class: 'gjs-fonts gjs-f-b3' },
			content: `<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>
      ${
				basicStyle
					? `<style>
          ${styleRow}
          ${styleClm}
        </style>`
					: ""
			}`,
		});

	toAdd("4-8column") &&
		bm.add("4-8column", {
			label: `<img src=${four} alt=4-8column />
      <div>4/8 Columns</div>`,
			category: c.category,
			//attributes: { class: 'gjs-fonts gjs-f-b37' },
			content: `<div ${attrsRow}>
        <div ${attrsCell} style='${
				flexGrid ? "flex-basis" : "width"
			}: 30%;'></div>
        <div ${attrsCell} style='${
				flexGrid ? "flex-basis" : "width"
			}: 70%;'></div>
      </div>
      ${
				basicStyle
					? `<style>
          ${styleRow}
          ${styleClm}
          ${styleClm30}
          ${styleClm70}
        </style>`
					: ""
			}`,
		});
	toAdd("8-4column") &&
		bm.add("8-4column", {
			label: `<img src=${eight} alt=8-4column />
      <div>8/4 Columns</div>`,
			category: c.category,
			//attributes: { class: 'gjs-fonts gjs-f-b37' },
			content: `<div ${attrsRow}>
        <div ${attrsCell} style='${
				flexGrid ? "flex-basis" : "width"
			}: 70%;'></div>
        <div ${attrsCell} style='${
				flexGrid ? "flex-basis" : "width"
			}: 30%;'></div>
      </div>
      ${
				basicStyle
					? `<style>
          ${styleRow}
          ${styleClm}
          ${styleClm30}
          ${styleClm70}
        </style>`
					: ""
			}`,
		});
}
