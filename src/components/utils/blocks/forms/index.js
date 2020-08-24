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
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input type="submit" value="Submit">
  </form>
  <style>
  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  </style>
  `,
	});

	editor.BlockManager.add("input-block", {
		label: `<img src=${inputIcon} alt=inputblock />
              <div>Input</div>`,
		category: "Forms",
		content: `<input type="text" class="form-control" id="" >
    <style>
    input[type=text], select {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    </style>
    `,
	});

	editor.BlockManager.add("textarea-block", {
		label: `<img src=${textarea} alt=textareablock />
              <div>Text Area</div>`,
		category: "Forms",
		content: ` <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <style>
  textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
  }</style>
  
  `,
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
  </div>
  <style>
  select {
    width: 100%;
    padding: 16px 20px;
    border: none;
    border-radius: 4px;
    background-color: #f1f1f1;
  }
  </style>
  `,
	});
	editor.BlockManager.add("dropdown-block", {
		label: `<img src=${dropdown} alt=dropdownblock />
              <div>Dropdown</div>`,
		category: "Forms",
		content: `<div class="dropdown">
    <button class="dropbtn">Dropdown</button>
    <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </div>
  </div>
  
  
  <style>
.dropbtn {
  background-color: #d983a6;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #d983a6;
}
</style>
  
  `,
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
		content: `
    <label class="switch" onclick="checkToggle(this)">
    <input type="checkbox" id="checkbox" >
    <span class="slider round"></span>
  </label>

    <script>
function checkToggle(checkbox) {
  $("#checkbox").attr('checked', function(_, attr){ return !attr});
  
}
</script>
    <style>
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
   


    `,
	});
};
