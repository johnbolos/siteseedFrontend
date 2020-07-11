import _ from 'lodash'
import React, { Component, Suspense } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'

import routes from '../../routes'
import GlobalLayoutWrapper from "../../layout/globalLayoutWrapper"
import logo from './logo.svg';
import './index.scss';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('token'),
            user: (localStorage.getItem('user') != 'undefined') ? JSON.parse(localStorage.getItem('user')) : null
        }
    }
    componentDidMount() {
        console.log('asasasasas')
    }
    render() {
        const { user } = this.state
        return (<Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {routes.map((item, key) => {
                    if (item.children) {
                        item.children.map((child) => {
                            return (<Route exact path={item.path + child.path} key={item.path + child.path} render={(route) => {
                                return <GlobalLayoutWrapper Component={child.component} path={item.path + child.path} user={user}
                                    pageData={{ ...item, child }} />
                            }} />)
                        })
                    } else {
                        // if (!item.authority || item.authority.length == 0) {
                        //     return (<Route exact path={item.path} key={item.path} render={(route) => {
                        //         return <GlobalLayoutWrapper Component={item.component} path={item.path} pageData={item} />
                        //     }} />)
                        // }
                        return (<Route exact path={item.path} key={item.path} render={(route) => {
                            return <GlobalLayoutWrapper Component={item.component} path={item.path} user={user} pageData={item} />
                        }} />)
                    }
                })}
                {/* <Route exact path="/" render={(route) => {
                    return (
                        <Redirect to="/dashboard" />
                    )
                }} /> */}
            </Switch>
        </Suspense>)
    }
}
export default App