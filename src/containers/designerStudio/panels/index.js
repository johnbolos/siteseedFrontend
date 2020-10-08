import {
	clean,
	code,
	desktop,
	download,
	ipad,
	mobile,
	redo,
	undo,
	play,
	logo,
	share,
	viewMode,
} from "./icons";

const cmdImport = "gjs-open-import-webpage",
	cmdDeviceDesktop = "set-device-desktop",
	cmdDeviceTablet = "set-device-tablet",
	cmdDeviceMobile = "set-device-mobile",
	cmdClear = "core:canvas-clear";

export default (editor, config) => {
	const pn = editor.Panels;
	const eConfig = editor.getConfig();
	const commands = editor.Commands;
	const crc = "create-comp";
	const mvc = "move-comp";
	const swv = "sw-visibility";
	const expt = "export-template";
	const osm = "open-sm";
	const otm = "open-tm";
	const ola = "open-layers";
	const obl = "open-blocks";
	const ful = "fullscreen";
	const prv = "preview";

	eConfig.showDevices = 0;

	pn.getPanels().reset([
		{
			id: "commands",
			el: ".panel__devices",
			buttons: [
				{
					id: "undo",
					//className: "fa fa-undo",
					// command: (e) => e.runCommand("core:undo"),
					command: (e) => e.runCommand("ss-style-undo"),
					label: `<div class="tooltip"><div><img  src=${undo} alt="erase" height=22px width=22px  ></img></div>
          <span class="tooltiptext">Undo</span>
        </div>`,
				},
				{
					id: "redo",
					//className: "fa fa-repeat",
					command: (e) => (e.runCommand("ss-style-redo")) ,
					label: `<div class="tooltip"><div><img src=${redo} alt="erase" height=22px width=22px  ></img></div>
          <span class="tooltiptext">Redo</span>
        </div>`,
				},
				{
					//id: expt,
					//className: "fa fa-code",
					command: (e) => e.runCommand(expt),
					label: `<div class="tooltip"><div><img src=${code} alt="erase" height=22px width=22px  ></img></<div>
          <span class="tooltiptext" style="left: -65%">View Code</span>
        </div>`,
				},
				{
					id: cmdClear,
					//className: "fa fa-trash",
					label: `<div class="tooltip"><div><img src=${clean} alt="erase" height=22px width=22px  ></img></div><span class="tooltiptext">Erase</span>
          </div>`,
					command: (e) => e.runCommand(cmdClear),
				},
				{
					id: cmdImport,
					//className: "fa fa-download",
					command: (e) => e.runCommand("gjs-export-zip"),
					label: `<div class="tooltip"><div><img src=${download} alt="erase" height=22px width=22px  ></img></div>
          <span class="tooltiptext" style="left: -65%">Download</span>
        </div>`,
				},
				{
					id: "view-mode",
					//className: "fa fa-download",
					label: `<div class="tooltip"><div><img src=${viewMode} alt="erase" height=22px width=22px  ></img></div>
          <span class="tooltiptext" >View</span>
        </div>`,
				},
			],
		},
		{
			id: "options",
			el: ".panel__basic-actions",
			buttons: [
				{
					id: "share",
					//context: prv,
					//command: (e) => e.runCommand(prv),
					//className: "fa fa-eye",
					label: `<div class="tooltip"><div><img src=${share} alt="erase" height=24px width=24px  ></img></div>
          <span class="tooltiptext">Share</span>
        </div>`,
				},
				{
					//id: prv,
					context: prv,
					command: (e) => e.runCommand(prv),
					//className: "fa fa-eye",
					label: `<div class="tooltip"><div><img src=${play} alt="erase" height=24px width=24px  ></img></div>
          <span class="tooltiptext">Preview</span>
        </div>`,
				},
				{
					id: "publish",
					//className: "fa fa-trash",
					label: `<button type="button" class="publish">Publish Now</button>`,
					command: (e) => e.runCommand(cmdClear),
				},
			],
		},
	]);

	const openBl = pn.getButton("views", obl);
	editor.on("load", () => openBl && openBl.set("active", 1));

	// On component change show the Style Manager
	config.showStylesOnChange &&
		editor.on("component:selected", () => {
			const openSmBtn = pn.getButton("views", osm);
			const openLayersBtn = pn.getButton("views", ola);

			// Don't switch when the Layer Manager is on or
			// there is no selected component
			if (
				(!openLayersBtn || !openLayersBtn.get("active")) &&
				editor.getSelected()
			) {
				openSmBtn && openSmBtn.set("active", 1);
			}
		});
};
