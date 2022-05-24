import { drop } from "lodash";
import _grapesEditor from "../../grapesEditor";

export default function (editor, opt = {}) {
  const trm = editor.TraitManager;
  const textTrat = trm.getType('text');

  trm.addType('content', {
    events: {
      'keyup': 'onChange',
    },

    onValueChange: function () {
      var md = this.model;
      var target = md.target;
      target.set('content', md.get('value'));
    },

    getInputEl: function () {
      if (!this.inputEl) {
        this.inputEl = textTrat.prototype.getInputEl.bind(this)();
        this.inputEl.value = this.target.get('content');
      }
      return this.inputEl;
    }
  });


  trm.addType('select-options', {
    events: {
      'keyup': 'onChange',
    },

    onValueChange: function () {
      var optionsStr = this.model.get('value').trim();
      var options = optionsStr.split('\n');
      var optComps = [];

      for (var i = 0; i < options.length; i++) {
        var optionStr = options[i];
        var option = optionStr.split('::');
        var opt = {
          tagName: 'option',
          attributes: {}
        };
        if (option[1]) {
          opt.content = option[1];
          opt.attributes.value = option[0];
        } else {
          opt.content = option[0];
          opt.attributes.value = option[0];
        }
        optComps.push(opt);
      }

      var comps = this.target.get('components');
      comps.reset(optComps);
      this.target.view.render();
    },

    getInputEl: function () {
      if (!this.$input) {
        var md = this.model;
        var trg = this.target;
        var name = md.get('name');
        var optionsStr = '';
        var opts = { placeholder: '' };
        var options = trg.get('components');

        for (var i = 0; i < options.length; i++) {
          var option = options.models[i];
          var optAttr = option.get('attributes');
          var optValue = optAttr.value || '';
          optionsStr += `${optValue}::${option.get('content')}\n`;
        }

        this.$input = document.createElement('textarea');
        this.$input.value = optionsStr;
      }
      return this.$input;
    },
  });

  trm.addType('urlInput', {
    // events: {
    //   'keyup': 'onChange', // trigger parent onChange method on keyup
    // },

    /**
     * Triggered when the value of the model is changed
     */
    onValueChange() {
      var traitModel = this.model;
      var selectedComponent = this.target;
      var inputValue = traitModel.get('value');
      //... eg. update attributes
      selectedComponent.set('attributes', { onclick: inputValue.trim() == '' ? '' : `window.open('${inputValue}')` });
    },

    getInputEl() {
      var input = document.createElement('input');
      // ...
      let value = (this.target.attributes && this.target.attributes.attributes.onclick) || ''
      value = value.replace(`window.open('`, '')
      value = value.replace(`')`, '')
      input.value = value
      return input;
    },
  })

  // name trait for upload element
  trm.addType('linked-name-trt', {
    // events: {
    //   'keyup': 'onChange', // trigger parent onChange method on keyup
    // },

    /**
     * Triggered when the value of the model is changed
     */
    onValueChange() {
      var traitModel = this.model;
      var selectedComponent = this.target;
      var selectedElem = this.target.view.el
      var inputValue = traitModel.get('value');
      //... eg. update attributes
      selectedComponent.set('attributes', { name: inputValue.trim() });
      let input = selectedElem.getElementsByTagName('input')[0]
      input.name = inputValue
      _grapesEditor.editor.store(res => {});
    },

    getInputEl() {
      var input = document.createElement('input');
      // ...
      input.value = (this.target.attributes && this.target.attributes.attributes.name) || ''
      return input;
    },
  })

  // dropdown element interaction-switch
  trm.addType('interaction-switch', {
    // events: {
    //   'keyup': 'onChange', // trigger parent onChange method on keyup
    // },

    /**
     * Triggered when the value of the model is changed
     */
    onEvent({ elInput, component, event }) {
      var traitModel = this.model;
      // var selectedComponent = this.target;
      let selectedComponent = _grapesEditor.editor.getSelected()
      var selectedElem = this.target.view.el
      var value = event.target.checked;
      //... eg. update attributes
      let dropdown = (selectedComponent.find('.dropdown-content'))[0]
      // let dropdown = selectedElem.querySelector('.dropdown-content')
      if (value) {
        dropdown.setClass('dropdown-content content-effect-hover');
        // dropdown.className = 'dropdown-content content-effect-hover'
      } else {
        dropdown.setClass('dropdown-content content-effect-toggle')
        // dropdown.className = 'dropdown-content content-effect-toggle'
      }
      _grapesEditor.editor.store(res => {});

      // selectedComponent.set('attributes', { name: value.trim() });
      // let input = selectedElem.getElementsByTagName('input')[0]
      // input.name = value
    },
    getInputEl() {
      // input.value = (this.target.attributes && this.target.attributes.attributes.name) || ''
      var selectedElem = this.target.view.el
      let dropdown = selectedElem.querySelector('.dropdown-content')
      let value = ''
      if (dropdown.classList.value.includes('content-effect-hover')) {
        value = 'checked'
      }
      return `<label class="gjs-field gjs-field-checkbox" data-input=""><input type="checkbox" ${value}>
      <i class="gjs-chk-icon"></i>
    </label>`;
    },
  })

  // Pop-up show/hide
  trm.addType('show-popup', {
    // events: {
    //   'keyup': 'onChange', // trigger parent onChange method on keyup
    // },

    /**
     * Triggered when the value of the model is changed
     */
    onEvent({ elInput, component, event }) {
      var traitModel = this.model;
      // var selectedComponent = this.target;
      // let selectedComponent = _grapesEditor.editor.getSelected()
      var selectedElem = this.target.view.el
      var value = event.target.checked;
      let overlay = selectedElem.querySelector('.ss-modal');
      if (!value) {
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = 0;
        return
      }
      overlay.style.visibility = 'visible';
      overlay.style.opacity = 1;
    },
    getInputEl() {
      let elem = this.target.view.el
      let overlay = elem.querySelector(".ss-modal")
      let btn = document.createElement('button')
      btn.innerHTML = 'Show/Hide Pop Up'
      btn.onclick = () => {
        let popVisible = true
        if (overlay.style.visibility == 'hidden' || overlay.style.visibility.trim() == '') {
          popVisible = false
        }
        if (!popVisible) {
          overlay.style.visibility = 'visible'
          overlay.style.opacity = 1
          return
        }
        overlay.style.visibility = 'hidden'
        overlay.style.opacity = 0
      }
      return btn
    },
  })
}
