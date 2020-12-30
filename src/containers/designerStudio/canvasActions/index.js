import React from "react";
import _ from 'lodash'
import { connect } from "react-redux";
import "./index.scss";
import Request from '../../../request'
import $ from "jquery";
import _grapesEditor from "../../../components/utils/grapesEditor";

class CanvasActions extends React.Component {
    state = {

    };

    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState) {
    }
    createHorizSwapper = (gjsSelected) => {
        // let selected = editor.getSelected()
        // let components = selected.attributes.components && selected.attributes.components.models
        // console.log(selected, components, components[0].toHTML(), 'sss.p')
        // if (components && components[0] && components[1]) {
        //     let component0 = components[0]
        //     let component1 = components[1]
        //     // selected.replaceWith(components[1].toHTML() + components[0].toHTML() + components[2].toHTML())
        //     component0.replaceWith(component1.toHTML())
        //     component1.replaceWith(component0.toHTML())
        // }
        if (!gjsSelected) {return null}
        let components = gjsSelected.attributes && gjsSelected.attributes.components && gjsSelected.attributes.components.models
        if (components && components.length > 1) {
            //  filter this array wrt the reqd types of components (remove br ,etc) list -> type: ['textnode'], tag: ['br', 'script', 'style']
            let filteredComponents = components.map(comp => {
                let check = !['br', 'script', 'style'].includes(comp.attributes.tagName) && !['textnode'].includes(comp.attributes.type)
                if (check) {
                    return comp
                } else return null
            })
            filteredComponents = filteredComponents.filter(function(el) { return el; })
            console.log(filteredComponents, 'sss.p')
            if (filteredComponents.length <= 1) {
                return null
            }
            // only show swap for elements which are horizontally parallel
            // set jsx for swap btn and add the onclick replace to them
            // after click rerun this function to update swap btn position and components html


            // Removed ==================================================================================================
            // create array of objects in state which would contain html string of each filtered component in order to its correspnding swap btn
            // create jsx swap buttons wrt to the number of filtered components give them class based on their corresponding element index (for btn of 0th nd 1st child give class 'swapper-0')
            // evaluate and assign each btn position wrt to its corresponding element
            // onclick of each swapper btn swap corresponding element and update its state
            // ==========================================================================================================
        }
        return null
    }
    render() {
        const { } = this.state;
        const { gjsSelected, dispatch } = this.props
        return (
            <div className={`canvas-custom-action`} style={{ height: '100%' }}>
                {this.createHorizSwapper(gjsSelected)}
            </div>
        );
    }
}

const mapStateToProps = ({
    global,
    layout,
}) => {

    return {
        loading: global.loading,
        theme: layout.theme,
        currentUser: global.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasActions);
