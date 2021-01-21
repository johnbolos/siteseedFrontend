import React from "react";
import _ from 'lodash'
import { connect } from "react-redux";
import "./index.scss";
import Request from '../../../request'
import $ from "jquery";
import _grapesEditor from "../../../components/utils/grapesEditor";

class CanvasActions extends React.Component {
    state = {
        swapperBtns: null
    };

    componentDidMount() {
        this.props.resetSwapper && this.props.resetSwapper(this.createHorizSwapper.bind(this))
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.gjsSelected == null && this.props.gjsSelected != null) {
            this.resetOnScroll();
        }
        if (prevProps.gjsSelected != this.props.gjsSelected) {
            this.createHorizSwapper()
        }
    }
    resetOnScroll = (cb) => {
        let frame = document.getElementsByClassName("gjs-frame")
        let gjsBody = frame[0].contentWindow.document.body
        gjsBody.onscroll = (e) => {
            this.createHorizSwapper()
        }
    }
    createHorizSwapper = () => {
        const { gjsSelected } = this.props
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
        let resp = null
        if (!gjsSelected) { return null }
        let components = gjsSelected.attributes && gjsSelected.attributes.components && gjsSelected.attributes.components.models
        if (components && components.length > 1) {
            //  filter this array wrt the reqd types of components (remove br ,etc) list -> type: ['textnode'], tag: ['br', 'script', 'style']
            let filteredComponents = components.map(comp => {
                let elmTypecheck = !['br', 'script', 'style', 'NULL'].includes(comp.attributes.tagName)
                    &&
                    !['textnode'].includes(comp.attributes.type)
                    &&
                    !comp.attributes.attributes['data-ss-scroll-effect']
                    &&
                    !comp.attributes.attributes['data-ss-mouse-effect']
                let check = elmTypecheck
                if (check) {
                    return comp
                } else return null
            })
            filteredComponents = filteredComponents.filter(function (model) { return model && !['absolute', 'fixed', 'sticky'].includes(getComputedStyle(model.view.el).position); })
            if (filteredComponents.length <= 1) {
                return
            }
            // only show swap for elements which are horizontally parallel by creating swap pairs
            let swappair = []
            filteredComponents = filteredComponents.every(function (model, key) {
                if (key == filteredComponents.length - 1) {
                    return false
                }
                let rect1 = model.view.el.getBoundingClientRect()
                let rect2 = filteredComponents[key + 1].view.el.getBoundingClientRect()
                if (rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
                    swappair.push([model, filteredComponents[key + 1]])
                }
                return true
            })

            // set jsx for swap btn and add the onclick replace to them
            swappair.forEach((pair, key) => {
                let elem0 = pair[0].view.el
                let rect0 = elem0.getBoundingClientRect()
                let elem1 = pair[1].view.el
                let rect1 = elem1.getBoundingClientRect()
                let btnTop = ((rect0.top + (rect0.height / 2)) + (rect1.top + (rect1.height / 2))) / 2      // Average of vertical center of two rectangle
                let btnLeft = ((rect0.right + rect1.left) / 2)        // Center of space btw two rectangle
                btnTop = btnTop + (40 - 10)     // Adding 40 for builder left Top bar and subtracting due to btn height
                btnLeft = btnLeft + (40 - 14)   // Adding 40 for Builder Left Tool Bar and subtracting due to btn width
                resp = <>
                    {resp}
                    <button
                        onClick={() => {
                            pair[0].replaceWith(pair[1].toHTML())
                            pair[1].replaceWith(pair[0].toHTML())
                            // after click rerun this function to update swap btn position and components html
                            this.createHorizSwapper()
                        }}
                        style={{
                            position: 'fixed',
                            top: parseInt(btnTop) + 'px',
                            left: parseInt(btnLeft) + 'px',
                            borderRadius: '4px',
                            backgroundColor: '#3b97e3'
                        }}
                    >
                        <i class="fa fa-exchange" aria-hidden="true" style={{ color: '#ffffff' }}></i>
                    </button>
                </>
            })

            // Removed ==================================================================================================
            // create array of objects in state which would contain html string of each filtered component in order to its correspnding swap btn
            // create jsx swap buttons wrt to the number of filtered components give them class based on their corresponding element index (for btn of 0th nd 1st child give class 'swapper-0')
            // evaluate and assign each btn position wrt to its corresponding element
            // onclick of each swapper btn swap corresponding element and update its state
            // ==========================================================================================================
        }
        this.setState({ swapperBtns: resp })
    }
    render() {
        const { } = this.state;
        const { gjsSelected, dispatch } = this.props
        return (
            <div className={`canvas-custom-action`} style={{ position: 'fixed', left: 0, top: 0, zIndex: 1 }}>
                {this.state.swapperBtns}
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
