import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'

import "./index.scss"
import Icons from '../../../assets/Icons'

class ViewMode extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {

    }
    switchTheme = () => {
        // cahnge classs name
    }
    render() {
        const { } = this.state
        const { selected, editorNode } = this.props
        return (
            <div className={'view-mode-container'} onClick={this.switchTheme}>
                <Icons.Theme className={'theme-icon'} style={{ width: '15px', height: '15px' }} />
                <div className={'heading'}>View Mode</div>
            </div>
        )
    }
}

const mapStateToProps = ({ global, layout, templates, editorHistory }) => {
    return {
        loading: global.loading,
        templates,
        styleObj: editorHistory.present.styleObj
    }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMode)
