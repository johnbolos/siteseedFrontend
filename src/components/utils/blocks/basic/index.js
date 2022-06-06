import { button, tooltip, label, upload, search, map } from "./icons";

export const basicBlocks = (editor) => {
	editor.BlockManager.add("button", {
		label: `${button}
        <div>Button</div>`,
		category: "Basic",
		content: `<button class="btn btn-danger">Send</button>`,
	});
	editor.BlockManager.add("tooltip", {
		label: `${tooltip}
        <div style="font-size: 10px;">Text + Tooltip</div>`,
		category: "Basic",
		content: `<div class="ss-tooltip">Hover over me
		<span class="ss-tooltiptext">Tooltip text</span>
	  </div>
	 
	  <style>
	  .ss-tooltip {
		position: relative;
		display: inline-block;
		text-decoration: underline;
    	text-decoration-style: dotted;
	  }
	  
	  .ss-tooltip .ss-tooltiptext {
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
	  
	  .ss-tooltip .ss-tooltiptext::after {
		content: "";
		position: absolute;
		top: 50%;
		right: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent black transparent transparent;
	  }
	  .ss-tooltip:hover .ss-tooltiptext {
		visibility: visible;
	  }
</style>
	  `,
	});
	editor.BlockManager.add("label", {
		label: `${label}
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
		label: `${upload}
        <div>Upload</div>`,
		category: "Basic",
		attributes: {
			class: "upload-elem",
		},
		content: {
			components: `<div id="ss-upload-container" data-gjs-selectable="false" data-gjs-hoverable="false" data-gjs-draggable="false" data-gjs-propagate='["draggable"]'>
			<div class="ss-upload-btn btn" onclick="(function(e) {
				let input = e.getElementsByTagName('input')[0];
				input.click();
				})(this)"
			 >
				<i class="fa fa-upload ss-upload-icon"></i> <div>Upload</div>
				<input type="file" id="ss-fileupload" name="filename" onchange="showUploaded(this)">
			</div>
			<div class="uploades-container">
			</div>
			<script>
			function showUploaded(e) {
				if (e.files.length == 0) return
				let tag = \`<div class="ss-uploaded-file" style="display: flex; flex-direction: row; align-items: center; margin-left: 10px">
					\$\{e.files[0].name\}
				</div>\`
			let elem = e.parentNode.parentNode.getElementsByClassName('uploades-container');
			elem[0].innerHTML = tag
			}
			</script>
			<style>
				.ss-upload-btn {
					background-color: #006cff;
					color: #ffffff;
					display: flex;
					flex-direction: row;
				}
				.ss-upload-icon {
					padding: 5px;
				}
				#ss-upload-container {
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				#ss-fileupload {
					display: none;
				}
			</style>
		</div>`,
		type: 'upload-btn'
		},
	});
	editor.BlockManager.add("search", {
		label: `${search}
        <div>Search</div>`,
		category: "Basic",
		attributes: {
			class: "search-elem",
		},
		// content: `<div class="wrapper"><script async src="https://cse.google.com/cse.js?cx=85f9b8cdddd1238ef"></script>
		// <div class="gcse-search"></div>
		// </div>
		// `,
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
		label: `${map}
        <div>Map</div>`,
		category: "Basic",
		//activate: true,
		select: true,
		attributes: {
			class: "map-elem",
		},
		content: `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
		
		<style>.mapouter{position:relative;text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}</style></div>`,
	});
};
