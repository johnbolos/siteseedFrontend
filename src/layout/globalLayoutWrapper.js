import React from 'react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss'

class GlobalLayoutWrapper extends React.Component {
    componentDidMount() {
    }
    render() {
        const { Component } = this.props
        // const Component = require.resolve(pageData.component)
        return <div>
            <ToastContainer />
            <Component />
        </div>
    }
}

export default GlobalLayoutWrapper