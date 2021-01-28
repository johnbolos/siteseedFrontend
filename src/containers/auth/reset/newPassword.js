import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"

class NewPassword extends React.Component {
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
                <br/>
                
                <label>New Password</label>
                <br/>
                <input type={'password'} />
                <br/><br/>
                
                <label>Confirm Password</label>
                <br/>
                <input type={'password'} />
                <br/><br/>
                
                <button type="submit">Reset</button>
                <br/><br/>
                <a>try Logging in</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword)
