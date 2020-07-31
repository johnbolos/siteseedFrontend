import {
	checkbox,
	toggle,
	textarea,
	selectIcon,
	radio,
	inputIcon,
	formicon,
	dropdown,
} from "./icons";

export const formBlocks = (editor) => {
	editor.BlockManager.add("form-block", {
		label: `<img src=${formicon} alt=formblock />
        <div>Form Block</div>`,
		category: "Forms",
		content: `<form>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">I agree, to receiving updates on my email.</label>
    </div>
    <button type="submit" class="btn btn-primary">Subscribe</button>
  </form>`,
	});

	editor.BlockManager.add("input-block", {
		label: `<img src=${inputIcon} alt=inputblock />
              <div>Input</div>`,
		category: "Forms",
		content: `<input type="text" class="form-control" id="" >`,
	});

	editor.BlockManager.add("textarea-block", {
		label: `<img src=${textarea} alt=textareablock />
              <div>Text Area</div>`,
		category: "Forms",
		content: ` <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>`,
	});
	editor.BlockManager.add("select-block", {
		label: `<img src=${selectIcon} alt=selectblock />
              <div>Select</div>`,
		category: "Forms",
		content: `<div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>`,
	});
	editor.BlockManager.add("dropdown-block", {
		label: `<img src=${dropdown} alt=dropdownblock />
              <div>Dropdown</div>`,
		category: "Forms",
		content: `<div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown link
    </a>
  
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>`,
	});
	editor.BlockManager.add("checkbox-block", {
		label: `<img src=${checkbox} alt=checkboxblock />
              <div>Checkbox</div>`,
		category: "Forms",
		content: `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">I agree, to receiving updates on my email.</label>
  </div>`,
	});
	editor.BlockManager.add("radio-block", {
		label: `<img src=${radio} alt=radioblock />
              <div>Radio</div>`,
		category: "Forms",
		content: `<input type="radio" id="male" name="gender" value="male">
    <label for="male">Male </label> 
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female </label> 
    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Other </label> `,
	});
	editor.BlockManager.add("toggle-block", {
		label: `<img src=${toggle} alt=toggleblock />
              <div>Toggle</div>`,
		category: "Forms",
		content: `<style>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    
    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    input:checked + .slider {
      background-color: #2196F3;
    }
    
    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }
    
    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    
    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }
    
    .slider.round:before {
      border-radius: 50%;
    }
    </style>
    <label class="switch">
  <input type="checkbox" id="checkbox">
  <span class="slider round"></span>
</label>
<script>
$("#checkbox").click(function(){
  console.log("handler for for click sclicked")
})
</script>

    `,
	});
};
