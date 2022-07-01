import watch from 'redux-watch'
import { store } from "../../../../store";

export default function (editor, opt = {}) {
	const domc = editor.DomComponents;
	const defaultType = domc.getType("default");
	const imgType = domc.getType("image");
	const imgModel = imgType.model;
	const imgView = imgType.view;
  const linkPageTraitName = 'url-type';
  let storeUnSubscriber;

  const processPagesObject = (pages) => {
    return pages.map((page) => ({ name: page.name, id: page.url + ".html" })
    )
    /*return pages.filter((_, i) => currentPage !== i
    ).map((page) => ({ name: page.name, id: page.url + ".html" })
    )*/
  }

  editor.on("component:selected", function (a, b) {
    const component = editor.getSelected();
    // Unsubscribe old subscriber
    if (storeUnSubscriber) {
      storeUnSubscriber();
    }
    if (!component.is("link")) return;
    const selectedUrlType = component.get('attributes')?.[linkPageTraitName];

    const hrefTrait = component.getTrait("href");

    if (selectedUrlType === "fromPages") {
      if (hrefTrait) {
        hrefTrait.set(
          "options",
          processPagesObject(store.getState().pageReducer?.pages)
        );
      } else
        component.addTrait({
          type: "select",
          name: "href",
          options: processPagesObject(store.getState().pageReducer?.pages),
        });
    } 
    else if(selectedUrlType === "fromUrl"){
      if (hrefTrait) {
        hrefTrait.set(
          "text"
        );
      } else
        component.addTrait({
          type: "text",
          name: "href"
        });
    }
    else if(!selectedUrlType){
      const attributes = component.getAttributes();
      component.setAttributes({...attributes, [linkPageTraitName]: 'fromUrl'})
    }

    // store is THE redux store
    if (selectedUrlType === "fromPages") {
      let w = watch(store.getState, "pageReducer.pages");
      storeUnSubscriber = store.subscribe(
        w((newVal, oldVal, objectPath) => {
          component.getTrait("href").set("options", processPagesObject(newVal));
          editor.TraitManager.getTraitsViewer().render();
        })
      );
    }
    
  });



	const preventDefaultClick = () => {
		return defaultType.view.extend({
			events: {
				mousedown: "handleClick",
			},

			handleClick(e) {
				e.preventDefault();
			},
		});
	};

	// IMAGE
	domc.addType("img", {
		model: imgModel.extend(
			{
				defaults: {
					...imgModel.prototype.defaults,
					name: 'img',
					tagName: "img",
					traits: [
                        {
                            type: 'input',
                            label: 'Id',
                            name: 'id'
                        },
                        {
                            type: 'input',
                            label: 'Title',
                            name: 'title'
                        },
						{
							type: 'urlInput',
							label: 'URL',
							name: 'onClick'
						},
                    ],
				},
			},
			{
				isComponent(el) {
					if (el.tagName == "IMG") {
						return { type: "img" };
					}
				},
			}
		),
		view: imgView,
	});

	// LINK
	domc.addType("link", {
    model: {
      defaults: {
        traits: [
          {
            type: "select",
            name: 'target',
            label: "Target",
            options: [
              {
                id: '_blank',
                name: 'New window'
              },
              {
                id: '_self',
                name: 'This window'
              }
            ]
          },
          {
            type: "select",
            name: linkPageTraitName,
            label: "Enter URL or Select From Pages",
            pages: [],
            options: [
              {
                id: "fromUrl",
                name: "URL",
              },
              {
                id: "fromPages",
                name: "From Pages",
              },
            ],
          }
        ],
      },
      init: function () {
        this.on(
          `change:attributes:${linkPageTraitName}`,
          this._handleChangeUrlType
        );
      },
      _handleChangeUrlType: function (a, changedValue) {
        this.removeTrait("href");

        if (changedValue === "fromUrl") {
          // Add url trait
          this.addTrait({
            type: "text",
            name: "href",
            label: "URL",
            placeholder: "Enter URL",
          });
        } else if (changedValue === "fromPages") {
          this.addTrait({
            type: "select",
            name: "href",
            label: "Page",
            options: processPagesObject(store.getState().pageReducer?.pages),
          });
        }
      },
    },
    view: {
      // Callback triggered when the element is removed from the canvas
      removed() {
        if (storeUnSubscriber) {
          storeUnSubscriber();
        }
      },
    },
  });


	// domc.addType("upload-btn", {
	// 	model: defaultModel.extend(
	// 		{
	// 			defaults: {
	// 				...defaultModel.prototype.defaults,
	// 				name: 'upload-btn',
	// 				tagName: "div",
	// 				draggable: true,
	// 				droppable: true,
	// 				traits: [
	// 					idTrait,
	// 					{
	// 						type: 'linked-name-trt',
	// 						label: 'Name',
	// 					},
	// 					requiredTrait,
	// 				],
	// 			},
	// 		},
	// 		{
	// 			isComponent(el) {
	// 				if (el.tagName == "DIV" && el.type == 'upload-btn') {
	// 					return { type: "upload-btn" };
	// 				}
	// 			},
	// 		}
	// 	),
	// 	view: defaultView,
	// });

}
