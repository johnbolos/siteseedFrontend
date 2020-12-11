//import { lazy } from 'react'
import _ from "lodash";
import { push } from "connected-react-router";
import Path from "path-parser";

import Home from "./containers/home";
import DesignerStudio from "./containers/designerStudio";
// const Undercons = lazy(() => import('./containers/undercons'))

const routes = [
	{
		path: "/home",
		name: "Home Page",
		icon: "home",
		key: "home",
		showNavBar: true,
		homepage: true,
		component: Home,
		authority: [],
	},
	{
		path: "/designerStudio",
		name: "Designer Studio",
		icon: "pencil",
		key: "designerStudio",
		authority: [],
		// 'homepage': true,
		component: DesignerStudio,
	},
	{
		path: "/settings",
		name: "Settings",
		icon: "gear",
		key: "settings",
		authority: ["client"],
		children: [
			{
				path: "/profile",
				name: "Profile Settings",
				key: "profile",
				component: Home,
			},
			{
				path: "/all",
				name: "All Settings",
				key: "all",
				component: Home,
			},
		],
	},
];

//<editor-fold desc="Functions Exports">
export const getUrlPushWrapper = (keyString, query) => {	// to push to another page
	return push(getUrlPath(keyString, query));
};

export const getUrlPath = (keyString, params) => {	// generate url from page key
	if (!params) params = {};

	let keyArr = keyString.split(".");

	let val = _.find(routes, (p) => p.key === keyArr[0]);

	if (!val) {
		return `/`;
	}

	if (keyArr.length === 2) {
		val = _.find(val.children, (p) => p.key === keyArr[1]);
	}

	if (!val) {
		return `/`;
	}

	let queryString = Object.keys(params)
		.map((key) => key + "=" + params[key])
		.join("&");

	return `${val.path}?${queryString}`;
};

export const getPushPathWrapper = (keyString, params) => {	
	let obj = getUrlObject(keyString);
	if (obj) {
		const path = new Path(obj.path);

		// console.log(obj, path.build(params));
		return push(path.build(params));
	}

	return "error";
};

export const getUrlParams = (keyString, route) => {
	let obj = getUrlObject(keyString);

	if (obj) {
		const path = new Path(obj.path);

		return path.test(route);
	}

	return { error: true };
};

export const getUrlObject = (keyString) => {
	let keyArr = keyString.split(".");

	let val = _.find(routes, (p) => p.key === keyArr[0]);

	if (!val) {
		return `/`;
	}

	if (keyArr.length === 2) {
		val = _.find(val.children, (p) => p.key === keyArr[1]);
	}

	if (!val) {
		return `/`;
	}

	return val;
};
//</editor-fold>

export default routes;
