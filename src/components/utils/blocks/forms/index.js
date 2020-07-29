import {
	checkbox,
	toggle,
	textarea,
	selectIcon,
	radio,
	inputIcon,
	formblock,
	dropdown,
} from "./icons";

export const formBlocks = (editor) => {
	editor.BlockManager.add("form-block", {
		label: `<img src=${formblock} alt=formblock />
        <div>Form Block</div>`,
		category: "Forms",
		content: `<form class="form">
        <div class="form-group">
          <label class="label">Name</label>
          <input placeholder="Type here your name" class="input"/>
        </div>
        <div class="form-group">
          <label class="label">Email</label>
          <input type="email" placeholder="Type here your email" class="input"/>
        </div>
        <div class="form-group">
          <label class="label">Gender</label>
          <input type="checkbox" class="checkbox" value="M">
          <label class="checkbox-label">M</label>
          <input type="checkbox" class="checkbox" value="F">
          <label class="checkbox-label">F</label>
        </div>
        <div class="form-group">
          <label class="label">Message</label>
          <textarea class="textarea"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="button">Send</button>
        </div>
      </form>`,
	});
};
