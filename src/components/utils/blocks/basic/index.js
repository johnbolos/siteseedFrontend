import { button, tooltip, label, upload, search, map } from "./icons";

export const basicBlocks = (editor) => {
	editor.BlockManager.add("button", {
		label: `<img src=${button} alt=column />
        <div>Button</div>`,
		category: "Basic",
		content: `<button class="btn btn-danger">Send</button>`,
	});
	editor.BlockManager.add("tooltip", {
		label: `<img src=${tooltip} alt=tooltip />
        <div>Tooltips</div>`,
		category: "Basic",
		content: `<div class="tooltip">Hover over me
		<span class="tooltiptext">Tooltip text</span>
	  </div>
	 
	  <style>
	  .tooltip {
		position: relative;
		display: inline-block;
		border-bottom: 1px dotted black;
	  }
	  
	  .tooltip .tooltiptext {
		visibility: hidden;
		width: 120px;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		position: absolute;
		z-index: 1;
		top: -5px;
		left: 110%;
	  }
	  
	  .tooltip .tooltiptext::after {
		content: "";
		position: absolute;
		top: 50%;
		right: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent black transparent transparent;
	  }
	  .tooltip:hover .tooltiptext {
		visibility: visible;
	  }
</style>
	  `,
	});
	editor.BlockManager.add("label", {
		label: `<img src=${label} alt=label />
        <div>Label</div>`,
		category: "Basic",
		content: `<label for="">Label</label>
        <style>
        .label{
            width:100%;
            display:block;
          }
           </style>
        `,
	});
	editor.BlockManager.add("upload", {
		label: `<img src=${upload} alt=upload />
        <div>Upload</div>`,
		category: "Basic",
		attributes: {
			class: "upload-elem",
		},
		content: `<input type="file">`,
	});
	editor.BlockManager.add("search", {
		label: `<img src=${search} alt=search />
        <div>Search</div>`,
		category: "Basic",
		attributes: {
			class: "search-elem",
		},
		content: `<form onsubmit="event.preventDefault()">
		<input type="text" placeholder="Search.." name="search">
	  </form>
		<style>
		input[type=text] {
			padding: 6px;
			margin-top: 8px;
			margin-right: 16px;
			font-size: 17px;
		  }
		</style>
		`,
	});
	editor.BlockManager.add("map", {
		label: `<img src=${map} alt=map />
        <div>Map</div>`,
		category: "Basic",
		//activate: true,
		select: true,
		attributes: {
			class: "map-elem",
		},
		content: `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Ghrix%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
		
		<style>.mapouter{position:relative;text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}</style></div>`,
	});
};
