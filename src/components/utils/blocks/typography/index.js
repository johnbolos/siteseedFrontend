import { heading, paragraph, quote, richtext, textLink, text } from "./icons";

export const typography = (editor) => {
	editor.BlockManager.add("heading", {
		label: `${heading}
        <div>Heading</div>`,
		category: "Text",
		content: `<h1>Heading</h1>`,
	});
	editor.BlockManager.add("paragraph", {
		label: `${paragraph}
        <div>Paragraph</div>`,
		category: "Text",
		content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus placeat accusantium unde doloribus.</p>`,
	});
	editor.BlockManager.add("text-block", {
		label: `${text}
        <div>Text Block</div>`,
		category: "Text",
		content: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus placeat accusantium unde doloribus. Text block inside of div</div>`,
	});
	editor.BlockManager.add("block-quote", {
		label: `${quote}
        <div>Block Quote</div>`,
		category: "Text",
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
		label: `${richtext}
        <div>Rich Text</div>`,
		category: "Text",
		content: `<h1>A Nice heading</h1>
					<p>A paragraph with dummy content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</p>
				<h4> Sub heading</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</p>
		`,
	});
};
