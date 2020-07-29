import { image, link, youtube } from "./icons";

export const media = (editor) => {
	editor.BlockManager.add("image", {
		label: `<img src=${image} alt=label />
        <div>Image</div>`,
		category: "Media",
		content: `<img></img>`,
	});
	editor.BlockManager.add("youtube", {
		label: `<img src=${youtube} alt=label />
        <div>Youtube</div>`,
		category: "Media",
		content: ``,
	});
	editor.BlockManager.add("link", {
		label: `<img class='siteseed-link 'src=${link} alt=label />
        <div>Link</div>`,
		category: "Media",
		content: `<a href=''>Link</a>`,
	});
};
