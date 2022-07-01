import _ from "lodash";
import React, { Component, Suspense, useEffect } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";

import routes from "../../routes";
import GlobalLayout from "../../layout/globalLayout";
import "./index.scss";
import { useSelector } from "react-redux";

function GlobalLayoutWrapper(props) {

	const { currentUser, tokenInfo } = useSelector(
		(state) => ({
			currentUser: state.global.currentUser,
			tokenInfo: state.global.tokenInfo,
		})
	)
	if (!props.Component) {	// 404 Component
		return <h1>404 NOT Found</h1>
	}
	if (props.pageData.authority && props.pageData.authority.length > 0 && !currentUser) {
		return <Redirect to="/login-page" />
	}
	if (props.pageData.independentLayout) {
		return (
			<props.Component path={props.path} pageData={props.pageData} />
		)
	}
	return (
		<GlobalLayout {...props} />
	)
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// token: localStorage.getItem("token"),
			// user:
			// 	localStorage.getItem("user") !== "undefined"
			// 		? JSON.parse(localStorage.getItem("user"))
			// 		: null,

		};
	}
	componentDidMount() {

	}
	render() {
		const { user } = this.state;
		return (
			<Switch>
				{routes.map((item, key) => {
					if (!item.children) {
						if (item.redirect) {
							return (<Route
								exact
								key={item.path}
								path={item.path}
								render={(route) => {
									return <Redirect to={item.redirect} />
								}}
							/>)
						}
						return (
							<Route
								exact
								path={item.path}
								key={item.path}
								render={(route) => {
									return (
										<GlobalLayoutWrapper
											Component={item.component}
											path={item.path}
											// user={user}
											pageData={item}
										/>
									);
								}}
							/>
						);
					}
				})}

				{routes.map((item, key) => {
					if (item.children) {
						return item.children.map((child, k) => {
							if (item.redirect) {
								return (<Route
									exact
									path={child.path}
									key={child.path}
									render={(route) => {
										return <Redirect to={child.redirect} />
									}}
								/>)
							}
							return (
								<Route
									exact
									path={child.path}
									key={child.path}
									render={(route) => {
										if (child.independentLayout) {
											return <child.component
												path={child.path}
												// user={user}
												pageData={{ ...item, child }}
											/>
										}
										return (
											<GlobalLayoutWrapper
												Component={child.component}
												path={child.path}
												// user={user}
												pageData={{ ...item, child }}
											/>
										);
									}}
								/>
							);
						});
					}
				})}

				<Route
					exact
					path='/'
					render={(route) => {
						let path = routes[0].path;
						routes.forEach((item) => {
							if (item.homepage) path = item.path;
							if (item.children) {
								item.children.forEach((element) => {
									if (element.homepage) path = element.path;
								});
							}
						});
						return <Redirect to={path} />;
					}}
				/>
				<Route
					render={(route) => {
						return (
							<GlobalLayoutWrapper route />
						);
					}}
				/>
			</Switch>
		);
	}
}
export default App;
