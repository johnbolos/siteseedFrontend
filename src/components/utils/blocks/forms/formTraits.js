import loadTraits from "./traits";

import loadComponents from "./components";

export default (editor, opts = {}) => {
	const config = {
		blocks: [
			"form",
			"input",
			"textarea",
			"select",
			"button",
			"label",
			"checkbox",
			"radio",
		],
		labelTraitMethod: "Method",
		labelTraitAction: "Action",
		labelTraitState: "State",
		labelTraitId: "ID",
		labelTraitFor: "For",
		labelInputName: "Input",
		labelTextareaName: "Textarea",
		labelSelectName: "Select",
		labelCheckboxName: "Checkbox",
		labelRadioName: "Radio",
		labelButtonName: "Button",
		labelTraitName: "Name",
		labelTraitPlaceholder: "Placeholder",
		labelTraitValue: "Value",
		labelTraitRequired: "Required",
		labelTraitType: "Type",
		labelTraitOptions: "Options",
		labelTraitChecked: "Checked",
		labelTypeText: "Text",
		labelTypeEmail: "Email",
		labelTypePassword: "Password",
		labelTypeUpload: "Upload",
		labelTypeNumber: "Number",
		labelTypeSubmit: "Submit",
		labelTypeReset: "Reset",
		labelTypeButton: "Button",
		labelNameLabel: "Label",
		labelForm: "Form",
		labelSelectOption: "- Select option -",
		labelOption: "Option",
		labelStateNormal: "Normal",
		labelStateSuccess: "Success",
		labelStateError: "Error",
		category: "New Forms",
		...opts,
	};

	loadComponents(editor, config);
	loadTraits(editor, config);
	//loadBlocks(editor, config);
};
