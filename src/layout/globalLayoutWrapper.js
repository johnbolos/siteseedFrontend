import React from 'react'

import './styles.scss'

class GlobalLayoutWrapper extends React.Component {
    componentDidMount() {
    }
    render() {
        const { Component } = this.props
        // const Component = require.resolve(pageData.component)
        return <div style={{ height: '100vh' }}>
            <Component/>
        </div>
    }
}

export default GlobalLayoutWrapper