import constants from "./constants";
import { slider } from "../icons";

export default (editor, config = {}) => {
	const bm = editor.BlockManager;
	const sliderBlock = config.sliderBlock;
	const { sliderName } = constants;

	sliderBlock &&
		bm.add(sliderName, {
			label: `<img src=${slider} alt=slider />
			<div>Slider</div>`,
			content: { type: sliderName },
			category: "Basic",
			...sliderBlock,
		});
};
