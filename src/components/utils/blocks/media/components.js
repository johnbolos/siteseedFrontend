export default function (editor, opt = {}) {
	const c = opt;
	const domc = editor.DomComponents;
	const defaultType = domc.getType("default");
	const imgType = domc.getType("image");
	const defaultModel = defaultType.model;
	const defaultView = defaultType.view;
	const imgModel = imgType.model;
	const imgView = imgType.view;

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
