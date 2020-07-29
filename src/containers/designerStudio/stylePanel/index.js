import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'

import "./index.scss"
import _grapesEditor from "../../../components/utils/grapesEditor"
import ClassManager from './classManager'
// import StyleManager from './styleManager'

class StylePanel extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {

    }
    render() {
        const { } = this.state
        const { selected, parentNode } = this.props
        return (
            <div className={'style-panel-container'}>
                {/* <pre className={'pre'} style={{ whiteSpace: 'break-spaces' }}>{JSON.stringify(selected.styleInfo)}</pre> */}
                {/* classes */}
                <ClassManager selected={selected} editorNode={parentNode} />
                {/* Settings */}

                {/* styles */}
                {/* <StyleManager /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(StylePanel)
