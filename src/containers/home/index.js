import React from "react"
import _ from 'lodash'
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import Img from 'react-cloudinary-lazy-image'
import Header from '../../layout/header'
import Footer from '../../layout/footer'

import "./index.scss"

class Home extends React.Component {
    state = {}

    componentDidMount() {
        let { currentUser, dispatch } = this.props
    }
    render() {
        const { } = this.state
        const { dispatch } = this.props
        return (
            <>
            <Header />
                <section className="home-banner text-center">
                    <h1>Hey there, <br />Welcome to SiteSeed</h1>
                    <h3>Build or design a site with total ownership and ability to use on any hosting platform you choose</h3>
                </section>

                <section className="home-world-selection">
                    <div className="container">
                        <Img cloudName={'siteseed'} imageName={'home-bg-with-overlay'} style={{ width: 1440, height: '100%', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 1440 }} />
                        <div className="d-flex">
                            <div className="flex-auto">
                                <Link to="/single-site">
                                    <div className="selection-wrapper selection-new">
                                        {/* <img src={SelectionBG} /> */}
                                        <h2 className="text-center">Create a new world</h2>
                                        <div className="selection-detail">
                                            <Img cloudName={'siteseed'} imageName={'gardener-hose'} style={{ width: 304, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 304 }} />
                                            <div className="selection-bottom">
                                                <Img cloudName={'siteseed'} imageName={'gardener-rock-plant'} style={{ width: 150, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 150 }} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex-auto">
                                <Link to="/multi-site">
                                    <div className="selection-wrapper selection-many">
                                        {/* <img src={SelectionBG} /> */}
                                        <h2 className="text-center">Create many new worlds</h2>
                                        <div className="selection-detail">
                                            <Img cloudName={'siteseed'} imageName={'gardener-planting'} style={{ width: 170, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 170 }} />
                                            <div className="selection-bottom">
                                                <Img cloudName={'siteseed'} imageName={'gardener-rock-plant'} style={{ width: 96, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 96 }} />
                                                <Img cloudName={'siteseed'} imageName={'gardener-rock-plant'} style={{ width: 150, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 150 }} />
                                                <Img cloudName={'siteseed'} imageName={'gardener-rock-plant'} style={{ width: 96, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 96 }} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
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
