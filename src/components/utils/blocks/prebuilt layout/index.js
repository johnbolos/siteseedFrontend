import { header } from "./icons";

export const prebuiltBlocks = (editor) => {

    editor.BlockManager.add("header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Prebuilt Layout",
        content: `
        <div class="ss-header-container">
                <div class="ss-nav">
                    <div class="ss-logo">
                        <a href="#"><img class="ss-logo-img" att="" /></a>
                    </div>
                    <div class="ss-nav-items">
                        <ul class="ss-nav-items-list">
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#about-section">About</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#gallery-section">Gallery</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#features-sectionn">Features</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#pricing-sectionn">Pricing</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#faq-section">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div class="ss-nav-actions">
                        <button class="ss-action-btn">Button Text</button>
                    </div>
                </div>
                <style>
                    .ss-header-container {
                        padding: 10px 10px;
                        background-color: #ffffff;
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        z-index: 5;
                    }
                    .ss-nav {
                        padding: 10px 110px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .ss-logo {
                        height: 70px;
                        width: 70px;
                        overflow: hidden;
                        padding: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .ss-nav-items {
                        flex: 1;
                        padding: 0px 35px;
                    }
                    .ss-nav-items-list {
                        list-style: none;
                        padding: 0px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        float: right;
                    }
                    .ss-nav-item {
                        margin: 0px 10px;
                        padding: 0px 7.5px;
                    }
                    .ss-nav-link {
                        text-decoration: none;
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 22px;
                        display: flex;
                        align-items: center;
                        text-transform: uppercase;
                        color: #95A1BB !important;
                    }
                    .ss-nav-link:hover {
                        color: #363940 !important;
                        text-decoration-line: underline !important;
                    }
                    .ss-action-btn {
                        height: 50px;
                        width: 120px;
                        border: none;
                        background-color: #006CFF;
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 22px;
                        color: #ffffff;
                    }
                </style>
            </div>
        `
    })
    // editor.BlockManager.add("label", {
    // 	label: `${label}
    //     <div>Label</div>`,
    // 	category: "Basic",
    // 	content: `<label for="">Label</label>
    //     <style>
    //     .label{
    //         width:100%;
    //         display:block;
    //       }
    //        </style>
    //     `,
    // });
    // editor.BlockManager.add("upload", {
    // 	label: `${upload}
    //     <div>Upload</div>`,
    // 	category: "Basic",
    // 	attributes: {
    // 		class: "upload-elem",
    // 	},
    // 	content: {
    // 		content: `<div id="ss-upload-container">
    // 		<div class="ss-upload-btn btn" onclick="(function(e) {
    // 			let input = e.getElementsByTagName('input')[0];
    // 			input.click();
    // 			})(this)"
    // 		 >
    // 			<i class="fa fa-upload"></i> Upload
    // 			<input type="file" id="ss-fileupload" name="filename" onchange="showUploaded(this)">
    // 		</div>
    // 		<div class="uploades-container">
    // 		</div>
    // 		<script>
    // 		function showUploaded(e) {
    // 			if (e.files.length == 0) return
    // 			let tag = \`<div class="ss-uploaded-file" style="display: flex; flex-direction: row; align-items: center; margin-left: 10px">
    // 				\$\{e.files[0].name\}
    // 			</div>\`
    // 		let elem = e.parentNode.parentNode.getElementsByClassName('uploaded-file');
    // 		elem[0].innerHTML = tag
    // 		}
    // 		</script>
    // 		<style>
    // 			.ss-upload-btn {
    // 				background-color: #006cff;
    // 				color: #ffffff;
    // 			}
    // 			#ss-upload-container {
    // 				display: flex;
    // 				flex-direction: row;
    // 				align-items: center;
    // 			}
    // 			#ss-fileupload {
    // 				display: none;
    // 			}
    // 		</style>
    // 	</div>`,
    // 		type: 'upload-btn'
    // 	},
    // });
    // editor.BlockManager.add("map", {
    // 	label: `${map}
    //     <div>Map</div>`,
    // 	category: "Basic",
    // 	//activate: true,
    // 	select: true,
    // 	attributes: {
    // 		class: "map-elem",
    // 	},
    // 	content: `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Ghrix%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>

    // 	<style>.mapouter{position:relative;text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}</style></div>`,
    // });
};
