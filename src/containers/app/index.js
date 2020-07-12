
import _ from 'lodash'
import React, { Component, Suspense } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'

import routes from '../../routes'
import GlobalLayoutWrapper from "../../layout/globalLayoutWrapper"
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
    console.log('asasasasas', routes)
  }
  render() {
    const { user } = this.state
    return (
      <>

        {routes.map((item, key) => {
          if (!item.children) {
            return (<Route exact path={item.path} key={item.path} render={(route) => {
              return <GlobalLayoutWrapper Component={item.component} path={item.path} user={user} pageData={item} />
            }} />)
          }
        })}


        {routes.map((item, key) => {
          if (item.children) {
            return item.children.map((child, k) => {
              return (<Route exact path={item.path + child.path} key={item.path + child.path} render={(route) => {
                return <GlobalLayoutWrapper Component={child.component} path={item.path + child.path} user={user}
                  pageData={{ ...item, child }} />
              }} />)
            })
          } else {
            return null
          }
        })}

        <Route exact path="/" render={(route) => {
          let path = routes[0].path
          routes.forEach(item => {
            if (item.homepage) path = item.path
            if (item.children) {
              item.children.forEach(element => {
                if (element.homepage) path = element.path
              })
            }
          })
          return (
            <Redirect to={path} />
          )
        }} />
      </>)
  }
}
export default App