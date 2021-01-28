import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"

class RestPassword extends React.Component {
    state = {}

    componentDidMount() {
        let { currentUser, dispatch } = this.props
    }
    render() {
        const { } = this.state
        const { dispatch } = this.props
        return (
            <div>
                <h1>Rest your Password</h1>
                <br/><br/>
                <label>Email</label>
                <br/>
                <input type={'text'} />
                <br/><br/>
                <button type="submit">Submit</button>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RestPassword)
