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
    label: `${formicon}
        <div>Form Block</div>`,
    category: "Forms",
    content: `<form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <button type="submit" class="submit-btn">Submit</button>
  </form>
  <style>
  input[type=text], input[type=email], input[type=password], input[type=number], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .submit-btn {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #45a049;
  }
  </style>
  `,
  });

  editor.BlockManager.add("input-block", {
    label: `${inputIcon}
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
    label: `${textarea}
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
    label: `${selectIcon}
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
    label: `${dropdown}
              <div>Dropdown</div>`,
    category: "Forms",
    content: {
      content: `<div class="dropdown">
      <button class="dropdownbtn" onclick="${`
      let content = this.getElementsByClassName('content-effect-toggle');
      if (content.length == 0) {
        return;
      };
      content[0].style.display = content[0].style.display == 'block' ? 'none' : 'block';
      `}" onblur="${`
      let content = this.getElementsByClassName('content-effect-toggle');
          if (content.length == 0) {
            return;
          };
          content[0].style.display = 'none';
      `}">
        Dropdown
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
        <div class="dropdown-content content-effect-toggle">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </button>
      <script>
        function dropdownToggle(e) {
          let content = e.getElementsByClassName("content-effect-toggle")
          if (content.length == 0) {
            return
          }
          content[0].style.display = content[0].style.display == 'block' ? 'none' : 'block'
        }
        function dropdownHide(e) {
          let content = e.getElementsByClassName("content-effect-toggle")
          if (content.length == 0) {
            return
          }
          content[0].style.display = 'none'
        }
      </script>
    <style>
    .dropdownbtn {
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
      left: 0;
      top: 100%;
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
    
    .dropdown:hover .content-effect-hover {
      display: block !important;
    }
    
    .dropdown:hover .dropdownbtn {
      background-color: #d983a6;
    }
    </style>
    </div>
    
    `,
      type: 'drop-down'
    },
  });
  editor.BlockManager.add("checkbox-block", {
    label: `${checkbox}
              <div>Checkbox</div>`,
    category: "Forms",
    content: `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">I agree, to receiving updates on my email.</label>
  </div>`,
  });
  editor.BlockManager.add("radio-block", {
    label: `${radio}
              <div>Radio</div>`,
    category: "Forms",
    content: `<div class="ss-radio-btn">
      <input type="radio" id="male" name="gender" value="male">
      <label for="male">Male </label> 
      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female </label> 
      <input type="radio" id="other" name="gender" value="other">
      <label for="other">Other </label> 
    </div>`,
  });
  editor.BlockManager.add("toggle-block", {
    label: `${toggle}
              <div>Toggle</div>`,
    category: "Forms",
    content: `
    <label class="switch" onclick="checkToggle(this)">
    <input type="checkbox" id="checkbox" >
    <span data-gjs-selectable="false" data-gjs-hoverable="false" class="slider round"></span>
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
