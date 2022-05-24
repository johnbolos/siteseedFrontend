import loadTraits from "./traits";

import loadComponents from "./components";

export default (editor, opts = {}) => {
	const config = {
		...opts,
	};

	loadComponents(editor, config);
	loadTraits(editor, config);
	//loadBlocks(editor, config);
};
