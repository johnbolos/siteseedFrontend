import {
	button,
	tooltip,
	label,
	slider,
	quote,
	upload,
	search,
	map,
} from "./icons";
import sliderplug from "grapesjs-lory-slider";

export const basicBlocks = (editor) => {
	editor.BlockManager.add("button", {
		label: `<img src=${button} alt=column />
        <div>Button</div>`,
		category: "Basic",
		content: `<button class="button">Send</button>`,
	});
	editor.BlockManager.add("tooltip", {
		label: `<img src=${tooltip} alt=tooltip />
        <div>Tooltips</div>`,
		category: "Basic",
		content: `<div class="gjs-row">`,
	});
	editor.BlockManager.add("label", {
		label: `<img src=${label} alt=label />
        <div>Label</div>`,
		category: "Basic",
		content: `<label class="label">Label</label>
        <style>
        .label{
            width:100%;
            display:block;
          }
           </style>
        `,
	});
	editor.BlockManager.add("slider", {
		label: `<img src=${slider} alt=slider />
        <div>Slider</div>`,
		category: "Basic",
		content: `${sliderplug}`,
	});
	editor.BlockManager.add("quote", {
		label: `<img src=${quote} alt=quote />
        <div>Quote</div>`,
		category: "Basic",
		content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>
      <style>
      .quote{
        color:#777;
        font-weight:300;
        padding:10px;
        box-shadow:-5px 0 0 0 #ccc;
        font-style:italic;
        margin:20px 30px;
      }
       </style>
      `,
	});
	editor.BlockManager.add("upload", {
		label: `<img src=${upload} alt=upload />
        <div>Upload</div>`,
		category: "Basic",
		content: `<div class="gjs-row"></div>`,
	});
	editor.BlockManager.add("search", {
		label: `<img src=${search} alt=search />
        <div>Search</div>`,
		category: "Basic",
		content: `<form onsubmit="event.preventDefault()">
		<input type="text" placeholder="Search.." name="search">
	  </form>
		<style>
		input[type=text] {
			float: right;
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
		content: `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Ghrix%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
		
		<style>.mapouter{position:relative;text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}</style></div>`,
	});
};