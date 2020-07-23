import { column, column2, column3, column4, four, eight } from "./icons";

export const layoutBlocks = (editor) => {
	editor.BlockManager.add("1-column", {
		label: `<img src=${column} alt=column />
        <div>1 Column</div>`,
		category: "Layout",
		//activate: true,
		//select: true,
		content: `<div class="gjs-row">
        <div class="gjs-cell">
        </div>
      </div>
      <style>
      .gjs-row{
        display:table;
        padding-top:10px;
        padding-right:10px;
        padding-bottom:10px;
        padding-left:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
      }      
      </style>
      `,
	});
	editor.BlockManager.add("2-column", {
		label: `<img src=${column2} alt=column2 />
        <div>2 Columns</div>`,
		category: "Layout",
		//activate: true,
		//select: true,
		content: `<div class="gjs-row">
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
      </div>
      <style>
      .gjs-row{
        display:table;
        padding-top:10px;
        padding-right:10px;
        padding-bottom:10px;
        padding-left:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
      }
      </style>
      `,
	});
	editor.BlockManager.add("3-column", {
		label: `<img src=${column3} alt=column3 />
        <div>3 Columns</div>`,
		category: "Layout",
		//activate: true,
		//select: true,
		content: `<div class="gjs-row">
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
      </div>
      <style>
      .gjs-row{
        display:table;
        padding-top:10px;
        padding-right:10px;
        padding-bottom:10px;
        padding-left:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
      }
      </style>
      `,
	});
	editor.BlockManager.add("4-column", {
		label: `<img src=${column4} alt=column4 />
        <div>4 Columns</div>`,
		category: "Layout",
		//activate: true,
		//select: true,
		content: `<div class="gjs-row">
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
      </div>
      <style>
      .gjs-row{
        display:table;
        padding-top:10px;
        padding-right:10px;
        padding-bottom:10px;
        padding-left:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
      }
      </style>
      `,
	});
	editor.BlockManager.add("4/8-column", {
		label: `<img src=${four} alt=4/8 />
        <div>4/8 Columns</div>`,
		category: "Layout",
		//activate: true,
		//select: true,
		content: `<div class="gjs-row">
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
      </div>
      <style>
      .gjs-row{
        display:table;
        padding-top:10px;
        padding-right:10px;
        padding-bottom:10px;
        padding-left:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
      }
      </style>
      `,
	});
	editor.BlockManager.add("8/4-column", {
		label: `<img src=${eight} alt=8/4 />
        <div>8/4 Columns</div>`,
		category: "Layout",
		//activate: true,
		//select: true,
		content: `<div class="gjs-row">
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
      </div>
      <style>
      .gjs-row{
        display:table;
        padding-top:10px;
        padding-right:10px;
        padding-bottom:10px;
        padding-left:10px;
        width:100%;
      }
      .gjs-cell{
        width:8%;
        display:table-cell;
        height:75px;
      }
      @media (max-width: 768px){
        .gjs-cell{
          width:100%;
          display:block;
        }
      }
      </style>
      `,
	});
};
