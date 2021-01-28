import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"

class VerifyCode extends React.Component {
    state = {}

    componentDidMount() {
        let { currentUser, dispatch } = this.props
    }
    render() {
        const { } = this.state
        const { dispatch } = this.props
        return (
            <div>
                <h1>Check your Email</h1>
                <br/>
                <label>***_***</label>
                <br/>
                <input type={'password'} />
                <br/><br/>
                <button type="submit">Verify</button>
                <br/>
                <p>I didn't recive the email?</p>
                <br/>
                <a>Login Page</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyCode)
