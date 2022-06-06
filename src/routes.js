//import { lazy } from 'react'
import _ from "lodash";
import { push } from "connected-react-router";
import Path from "path-parser";

import Home from "./containers/home";
import AllTemplates from "./containers/allTemplates";
import DesignerStudio from "./containers/designerStudio";
import Dashboard from "./containers/dashboard/index2";
import DashboardOld from "./containers/dashboard";
import Profile from "./containers/profile";
import CreateAccount from './containers/auth/signUp'
import LogIn from './containers/auth/logIn'
import ResetPassword from './containers/auth/reset'
import VerifyCode from './containers/auth/reset/verifyCode'
import NewPassword from './containers/auth/reset/newPassword'
import SiteSettings from "./containers/siteSettings";
import Checkout from "./containers/checkout";
import SearchDomain from "./containers/searchDomain";
import BuyTemplate from "./containers/buyTemplate";
import BetaCodeGenerator from "./containers/betaCodeGenerator";
// const Undercons = lazy(() => import('./containers/undercons'))



import SingleSite from './containers/singleSite';
import MultiSite from './containers/multiSite';
import AboutUs from './containers/about'
import Pricing from './containers/pricing'


import Domains from './containers/domains'
import Billing from './containers/billingInformation'
import Subscription from './containers/subscription'

const routes = [
	{
		path: "/home",
		key: "home",
		// homepage: true,
		component: Home,
		authority: [],
	},
	{
		path: "/single-site",
		key: "single-site",
		component: SingleSite,
		authority: [],
	},
	{
		path: "/multi-site",
		key: "multi-site",
		component: MultiSite,
		authority: [],
	},
	{
		path: "/about-us",
		key: "about-us",
		component: AboutUs,
		authority: [],
	},
	{
		path: "/pricing",
		key: "pricing",
		component: Pricing,
		authority: [],
	},
	{
		path: "/dashboard",
		key: "dashboard",
		homepage: true,
		component: Dashboard,
		authority: ['client'],
	},
	{
		path: "/dashboard-old",
		key: "dashboardold",
		homepage: true,
		component: DashboardOld,
		authority: ['client'],
	},
	{
		path: "/domains",
		key: "domains",
		homepage: true,
		component: Domains,
		authority: ['client'],
	},
	{
		path: "/billing",
		key: "billing",
		homepage: true,
		component: Billing,
		authority: ['client'],
	},
	{
		path: "/subscription",
		key: "subscription",
		homepage: true,
		component: Subscription,
		authority: ['client'],
	},
	{
		path: "/profile/:activeTab",
		key: "profile",
		component: Profile,
		authority: ['client'],
	},
	{
		path: "/profile",
		redirect: "/profile/details",
	},
	{
		path: "/site-settings/:siteId",
		key: "siteSettings",
		component: SiteSettings,
		authority: ['client'],
	},
	{
		path: "/checkout",
		key: "checkout",
		component: Checkout,
		authority: ['client'],
	},
	{
		path: "/search-domain",
		key: "searchDomain",
		component: SearchDomain,
		authority: ['client'],
	},
	{
		path: "/YWRkLWJldGEtdXNlcg==",
		key: "addTestUser",
		component: BetaCodeGenerator,
		authority: ['client'],
	},
	{
		path: "/buy-template/:siteId",
		key: "buyTemplate",
		component: BuyTemplate,
		authority: ['client'],
	},
	{
		path: "/allTemplates",
		key: "allTemplates",
		// homepage: true,
		component: AllTemplates,
		authority: [],
	},
	{
		path: "/designerStudio",
		key: "designerStudio",
		independentLayout: true,
		component: DesignerStudio,
		authority: [],
	},
	{
		path: "/create-account",
		key: "createAccount",
		component: CreateAccount,
		authority: [],
	},
	{
		path: "/login-page",
		key: "loginPage",
		component: LogIn,
		authority: [],
	},
	{
		path: "/reset-password",
		key: "resetPassword",
		authority: [],
		children: [
			{
				path: "/reset-password/enter-email",
				key: "enterEmail",
				component: ResetPassword,
			},
			{
				path: "/reset-password/verify-code/:email",
				key: "verifyCode",
				component: VerifyCode,
			},
			{
				path: "/reset-password/set-password/:email",
				key: "setPassword",
				component: NewPassword,
			},
		],
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
				component: AllTemplates,
			},
			{
				path: "/all",
				name: "All Settings",
				key: "all",
				component: AllTemplates,
			},
		],
	},
];

export const getUrlPushWrapper = (keyString, query) => {
	return push(getUrlPath(keyString, query))
}

export const getUrlPath = (keyString, params) => {

	if (!params) params = {}

	let keyArr = keyString.split('.')

	let val = _.find(routes, p => p.key === keyArr[0])

	if (!val) {
		return `/`
	}

	if (keyArr.length === 2) {
		val = _.find(val.children, p => p.key === keyArr[1])
	}

	if (!val) {
		return `/`
	}

	let queryString = Object.keys(params).
		map(key => key + '=' + params[key]).
		join('&')

	return `${val.path}?${queryString}`
}

export const getPushPathWrapper = (keyString, params) => {

	let obj = getUrlObject(keyString)

	if (obj) {
		const path = new Path(obj.path)

		return push(path.build(params))
	}

	return 'error'
}
 
export const getPushPathWrapperWithObj = (keyString, paramsObj = {}, params = {}) => {	// how to retrieve the obj => this.props.location.state, which comes from mapStatetoProps router.location

	let obj = getUrlObject(keyString)

	if (obj) {
		const path = new Path(obj.path)

		return push({
			pathname: path.build(params),
			state: paramsObj
		})
	}

	return 'error'
}

export const getUrlParams = (keyString, route) => {

	let obj = getUrlObject(keyString)

	if (obj) {
		const path = new Path(obj.path)

		return path.test(route)
	}

	return { error: true }
}

export const getUrlObject = (keyString) => {

	let keyArr = keyString.split('.')

	let val = _.find(routes, p => p.key === keyArr[0])

	if (!val) {
		return `/`
	}

	if (keyArr.length === 2) {
		val = _.find(val.children, p => p.key === keyArr[1])
	}

	if (!val) {
		return `/`
	}

	return val
}

export default routes;
