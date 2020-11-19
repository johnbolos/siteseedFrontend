import { drop } from "lodash";
import _grapesEditor from "../../grapesEditor";

export default function (editor, opt = {}) {
    const trm = editor.TraitManager;
    const textTrat = trm.getType('text');

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
            console.log(selectedComponent, this, 'aaa.p')
            //... eg. update attributes
            selectedComponent.set('attributes', {
                onclick: inputValue.trim() == '' ? '' : `window.open('${inputValue}')`,
                src: selectedComponent.attributes.src
            });
        },

        getInputEl() {
            var input = document.createElement('input');
            input.placeholder = 'Enter URL Address'
            let value = (this.target.attributes && this.target.attributes.attributes.onclick) || ''
            value = value.replace(`window.open('`, '')
            value = value.replace(`')`, '')
            input.value = value
            return input;
        },
    })

}
