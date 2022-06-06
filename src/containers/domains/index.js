import React, {useState} from 'react'
import Img from 'react-cloudinary-lazy-image'
import Table from 'react-bootstrap/Table'
import { connect, useDispatch } from "react-redux"
import { getPushPathWrapper } from "../../routes"
import Request from '../../request'
import './index.scss'

import { useSelector } from "react-redux";
import LoggedinHeader from '../../layout/loggedinLayouts/header'
import Domains from "../dashboard/domains"

const Domain = () => {
    const dispatch = useDispatch();
    const [domains, setDomains] = useState([])

    const BuyDomain = () => {
        dispatch( getPushPathWrapper('searchDomain') )
    }
    

    return(
        <>
            <LoggedinHeader />
            
            <div className="loggedin-content-container">
                <div className="container flex-column">
                    <Domains />
                    {/* <h1>Domains</h1>

                    <div className="d-flex">
                        <div className="col-12 domain-settings">
                            <div className="d-flex flex-wrap">
                                <div className="col-6">
                                    <h2>Domain Settings</h2>
                                    <p>Manage all your domains right here.</p>
                                </div>
                                <div className="col-6 text-right">
                                    <button onClick={BuyDomain} className="buy-a-domain-btn"><span>+</span> Buy a Domain</button>
                                </div>
                                <div className="col-12">
                                    <Table responsive className="domainList-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Details</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { domains.length === 0 &&
                                            <tr>
                                                <td colSpan="3" className="text-center no-domains">
                                                    <svg viewBox="0 0 210 297" >
                                                        <path d="m16.9 279.4c-3.2-0.7-5.4-2.2-6.5-4.5-0.5-1-0.5-2.2-0.6-100.2l-0.1-99.2 0.5-1.5c0.7-1.8 2.2-3.5 4.2-4.4l1.5-0.7 21.3-0.1 21.3-0.1 0.1-21.5 0.1-21.5 0.6-1.1c0.9-1.8 2.1-2.9 3.7-3.7l1.5-0.7h66.9 66.9l1.5 0.7c1.6 0.8 2.8 2 3.7 3.7l0.6 1.1v99.8 99.8l-0.7 1.4c-0.4 0.7-1.3 1.8-1.9 2.4-2.3 2-1.2 1.9-24.7 1.9h-21l0 20.1c0 12.5-0.1 20.7-0.3 21.8-0.4 2.7-1.7 4.8-3.8 6.2l-1.1 0.7-66 0c-55 0-66.3-0.1-67.7-0.4zm121.6-16.5 0.8-0.8v-15.5-15.5l-9 0.1-9 0.1-1.7-0.8c-1.5-0.8-4.3-3.5-30.7-30.1C68.1 179.2 59.7 170.5 59.2 169.6L58.6 168.4 58.4 126.8 58.3 85.1H43c-14.2 0-15.3 0-16 0.5-0.4 0.3-0.8 0.8-1 1.1-0.2 0.4-0.2 33-0.2 87.8 0 93.7-0.1 87.9 1.3 88.7 0.5 0.3 10.5 0.4 55.6 0.4l55 0zm47.8-48.1c1.9-0.8 1.7 7.5 1.7-89.3V38.1L187.3 37.2 186.5 36.4H131.3 76.1l-0.8 0.9-0.8 0.9v64 64l29.4 0.1 29.4 0.1 1.3 0.7c1.7 0.9 3.1 2.4 3.9 4.1l0.6 1.3 0.1 21.4 0.1 21.4h23.1c19.3 0 23.2-0.1 24-0.4zm-57.1-65.1c-3.6-1.2-5.9-4.3-5.9-7.9 0-3 1.7-5.8 4.4-7.2 1.2-0.6 1.7-0.7 3.6-0.7 1.9 0 2.4 0.1 3.6 0.7 7.3 3.8 5 14.8-3.2 15.2-1 0-2.2 0-2.5-0.1zm0.4-32.1c-2.5-0.7-4.3-2.1-5.5-4.5l-0.9-1.8V85.5c0-29.1-0.1-27.4 2-29.8 1.6-1.8 3.6-2.7 6.1-2.7 4.3 0 7.3 2.7 8 7.1 0.2 1 0.2 11.3 0.2 26.4l-0.1 24.8-0.7 1.5c-0.9 2-2.1 3.3-3.8 4.1-1.5 0.7-4 1-5.3 0.7zm-6.9 66.2c-0.8-1.6-0.5-1.6-16.9-1.5l-15 0.1 16.1 16.3 16.1 16.3 0.1-15.2c0.1-13.2 0-15.3-0.3-15.9z" strokeWidth="0.3"></path>
                                                    </svg>
                                                    <span>No Domains added yet!</span>
                                                </td>
                                            </tr>
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = ({ global, layout, templates, }) => {
    return {
        loading: global.loading,
        theme: layout.theme,
        templates,
        currentUser: global.currentUser,
        tokenInfo: global.tokenInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Domain);