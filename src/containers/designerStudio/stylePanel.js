import React from "react"
import { connect } from "react-redux"

// import "./index.scss"
import _grapesEditor from "../../components/utils/grapesEditor"
// import Icons from './panels/icons'
import Icons from '../../assets/Icons'
// import {ReactComponent as ReactLogo} from '../../assets/right-pane/Plus.svg'
import { template1Html, template1Style } from "./dummie"

class StylePanel extends React.Component {
    state = {

    }
    componentDidMount() {

    }
    getClass = (node) => node.className.split(' ')
    render() {
        const { selected } = this.props
        return (
            <div className={'style-panel-container'}>
                {/* <pre className={'pre'} style={{ whiteSpace: 'break-spaces' }}>{JSON.stringify(selected.styleInfo)}</pre> */}
                {/* classes */}
                <div className={'classes-container'}>
                    <div className={'heading'}>Classes</div>
                    <div className={'input'}>
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                            <div className={'addBtn'}>
                                <Icons.Plus className={'plus'} style={{ width: '9px', height: '9px' }} />
                            </div>
                            {selected.node == null ? (
                                <div className={'defaultTxt'}>Select a Class or Tag</div>
                            ) : (
                                    <div className={'tags-container'}>
                                        {this.getClass(selected.node).map((item, key) => {
                                            if (item.includes('gjs')) {
                                                return null
                                            }
                                            return <div className={'tags'} key={key}>
                                                <Icons.Checkbox className={'checkbox'} style={{ width: '9px', height: '9px' }} />
                                                <div className={'tagTxt'}>{item}</div>
                                                <Icons.Plus className={'cross'} style={{ width: '9px', height: '9px', transform: 'rotate(-45deg)' }} />
                                            </div>
                                        })}
                                    </div>
                                )
                            }
                        </div>
                        <div className={'dropdownBtn'}>
                            <Icons.Dropdown className={'dropDown'} style={{ width: '9px', height: '9px' }} />
                        </div>
                    </div>
                </div>
                {/* Settings */}

                {/* styles */}
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
