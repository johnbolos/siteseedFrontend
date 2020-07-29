import { heading, paragraph, quote, richtext, textLink, text } from "./icons";

export const typography = (editor) => {
	editor.BlockManager.add("heading", {
		label: `<img src=${heading} alt=heading />
        <div>Heading</div>`,
		category: "Typography",
		content: `<h1>Heading</h1>`,
	});
	editor.BlockManager.add("paragraph", {
		label: `<img src=${paragraph} alt=paragraph />
        <div>Paragraph</div>`,
		category: "Typography",
		content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus placeat accusantium unde doloribus.</p>`,
	});
	editor.BlockManager.add("text-link", {
		label: `<img src=${textLink} alt=text-link />
        <div>Text Link</div>`,
		category: "Typography",
		content: `<a href='/'>link</a>`,
	});
	editor.BlockManager.add("text-block", {
		label: `<img src=${text} alt=text-block />
        <div>Text Block</div>`,
		category: "Typography",
		content: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus placeat accusantium unde doloribus.</div>`,
	});
	editor.BlockManager.add("block-quote", {
		label: `<img src=${quote} alt=block-quote />
        <div>Block Quote</div>`,
		category: "Typography",
		content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
	  </blockquote>
      <style>
      .quote{
        color:#777;
        font-weight:300;
        padding:10px;
        box-shadow:-5px 0 0 0 #ccc;
        font-style:italic;
        margin:20px 30px;
      }
       </style>
      `,
	});
	editor.BlockManager.add("rich-text", {
		label: `<img src=${richtext} alt=rich-text />
        <div>Rich Text</div>`,
		category: "Typography",
		content: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus placeat accusantium unde doloribus.</div>`,
	});
};
