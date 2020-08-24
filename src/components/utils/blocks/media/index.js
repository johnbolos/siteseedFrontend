import { image, link, youtube } from "./icons";

export const media = (editor) => {
	editor.BlockManager.add("image", {
		label: `<img src=${image} alt=label />
        <div>Image</div>`,
		category: "Media",
		command: (e) =>
			e.runCommand("open-assets", {
				target: editor.getSelected(),
			}),
		content: `<img></img>`,
	});
	editor.BlockManager.add("youtube", {
		label: `<img src=${youtube} alt=label />
        <div>Youtube</div>`,
		category: "Media",
		content: `<iframe width="200px" height="200px"
		src="https://www.youtube.com/embed/tgbNymZ7vqY">
		</iframe>`,
	});
	editor.BlockManager.add("link", {
		label: `<img class='siteseed-link 'src=${link} alt=label />
        <div>Link</div>`,
		category: "Media",
		content: `<a href=''>Link</a>`,
	});
};
