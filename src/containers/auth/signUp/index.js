import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"

import "./index.scss"

class CreateAccount extends React.Component {
    state = {}

    componentDidMount() {
        let { currentUser, dispatch } = this.props
    }
    render() {
        const { } = this.state
        const { dispatch } = this.props
        return (
            <div>
                <h1>Create You Account</h1>
                <br/><br/>
                <a>Sign in with Google</a>
                <br/><br/>
                Or
                <br/><br/>
                
                <label>First Name</label>
                <br/>
                <input type={'text'} />
                <br/><br/>
                
                <label>Last Name</label>
                <br/>
                <input type={'text'} />
                <br/><br/>
                
                <label>Email</label>
                <br/>
                <input type={'text'} />
                <br/><br/>
                
                <label>Password</label>
                <br/>
                <input type={'password'} />
                <br/><br/>

                <button type="submit">Create Account</button>
                <br/><br/>
                
                <a>Sign In</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
