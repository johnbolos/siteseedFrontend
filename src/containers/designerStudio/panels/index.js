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
					command: (e) => e.runCommand("core:undo"),
					label: `<div class="tooltip"><img src=${undo} alt="erase" height=20px width=20px  ></img>
          <span class="tooltiptext">Undo</span>
        </div>`,
				},
				{
					id: "redo",
					//className: "fa fa-repeat",
					command: (e) => e.runCommand("core:redo"),
					label: `<div class="tooltip"><img src=${redo} alt="erase" height=20px width=20px  ></img>
          <span class="tooltiptext">Redo</span>
        </div>`,
				},
				{
					id: expt,
					//className: "fa fa-code",
					command: (e) => e.runCommand(expt),
					label: `<div class="tooltip"><img src=${code} alt="erase" height=20px width=20px  ></img>
          <span class="tooltiptext">Code</span>
        </div>`,
				},
				{
					id: cmdClear,
					//className: "fa fa-trash",
					label: `<div class="tooltip"><img src=${clean} alt="erase" height=20px width=20px  ></img><span class="tooltiptext">Erase</span>
          </div>`,
					command: (e) => e.runCommand(cmdClear),
				},
				{
					id: cmdImport,
					//className: "fa fa-download",
					command: (e) => e.runCommand(cmdImport),
					label: `<div class="tooltip"><img src=${download} alt="erase" height=20px width=20px  ></img>
          <span class="tooltiptext">Download</span>
        </div>`,
				},
			],
		},
		{
			id: "options",
			el: ".panel__basic-actions",
			buttons: [
				/* {
					id: "undo",
					//className: "fa fa-undo",
					command: (e) => e.runCommand("core:undo"),
					label: `<div class="tooltip"><img src=${undo} alt="erase" height=20px width=20px  ></img>
          <span class="tooltiptext">Undo</span>
        </div>`,
				},
				{
					id: "redo",
					//className: "fa fa-repeat",
					command: (e) => e.runCommand("core:redo"),
					label: `<div class="tooltip"><img src=${redo} alt="erase" height=20px width=20px  ></img>
          <span class="tooltiptext">Redo</span>
        </div>`,
				}   {
          id: ful,
          command: ful,
          context: ful,
          //className: "fa fa-arrows-alt",
          label: `<div class="tooltip">Full
          <span class="tooltiptext">FullScreen</span>
        </div>`,
        }, 

				{
					id: expt,
					//className: "fa fa-code",
					command: (e) => e.runCommand(expt),
					label: `<div class="tooltip"><img src=${code} alt="erase" height=20px width=20px  ></img>
          <span class="tooltiptext">Code</span>
        </div>`,
				},
				{
					id: cmdClear,
					//className: "fa fa-trash",
					label: `<div class="tooltip"><img src=${clean} alt="erase" height=20px width=20px  ></img><span class="tooltiptext">Erase</span>
          </div>`,
					command: (e) => e.runCommand(cmdClear),
				},
				{
					id: cmdImport,
					//className: "fa fa-download",
					command: (e) => e.runCommand(cmdImport),
					label: `<div class="tooltip"><img src=${download} alt="erase" height=20px width=20px  ></img>
          <span class="tooltiptext">Download</span>
        </div>`,
				},*/
				{
					id: cmdDeviceMobile,
					command: cmdDeviceMobile,
					//className: "fa fa-mobile",
					label: `<div class="tooltip"><img src=${mobile} alt="erase" height=20px width=20px  ></img><span class="tooltiptext">Mobile</span>
          </div>`,
				},
				{
					id: prv,
					context: prv,
					command: (e) => e.runCommand(prv),
					//className: "fa fa-eye",
					label: `<div class="tooltip"><img src=${play} alt="erase" height=20px width=20px  ></img>
          <span class="tooltiptext">Play</span>
        </div>`,
				},
				{
					id: "publish",
					//className: "fa fa-trash",
					label: `<button type="button" class="publish">Publish</button>`,
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
			console.log("getting executed");
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

	//manage zoom
	commands.add("manage-zoom", (editor, e) => {
		//editor.Css.clear()
		console.log(editor, e);
		//alert("Zoom selected ")
	});
};
