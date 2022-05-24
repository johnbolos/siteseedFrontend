import React from 'react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss'

class GlobalLayout extends React.Component {
    componentDidMount() {
    }
    render() {
        const { Component } = this.props
        // const Component = require.resolve(pageData.component)
        return <>
            <ToastContainer />
            <Component />
        </>
    }
}

export default GlobalLayout