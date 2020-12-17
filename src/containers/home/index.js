import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"
import Request from '../../request'

class Home extends React.Component {
    state = {}

    componentDidMount() {
        let { currentUser, dispatch } = this.props
    }
    render() {
        const { } = this.state
        const { dispatch } = this.props
        return (
            <div></div>
        )
    }
}

const mapStateToProps = ({ global, layout, templates, }) => {
    return {
        loading: global.loading,
        theme: layout.theme,
        templates,
        currentUser: global.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
