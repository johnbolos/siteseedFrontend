import { image, link, video } from "./icons";

export const media = (editor) => {
	editor.BlockManager.add("image", {
		label: `${image}
        <div>Image</div>`,
		category: "Media",
		command: (e) =>
			e.runCommand("open-assets", {
				target: editor.getSelected(),
			}),
		content: `<img></img>`,
	});
	editor.BlockManager.add("video", {
		label: `${video}
        <div>Video</div>`,
		category: "Media",
		content: `<iframe width="200px" height="200px"
		src="https://www.youtube.com/embed/tgbNymZ7vqY">
		</iframe>`,
	});
	editor.BlockManager.add("link", { //==================class = siteseed-link
		label: `${link}
        <div>Link</div>`,
		category: "Media",
		content: `<a href=''>Link</a>`,
	});
};
