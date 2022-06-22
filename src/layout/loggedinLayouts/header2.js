import React, {useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import { connect } from "react-redux"
import { getPushPathWrapper } from "../../routes"
import _ from 'lodash'

import Request from '../../request'
import { setTokenInfo, setUser, setGeneralData, setProfileData } from "../../reducers/actions/userActions"

import { useSelector, useDispatch } from "react-redux";
import UpdateLanguage from '../../containers/dashboard/components/updateLanguage'

// import 'bootstrap/dist/css/bootstrap.min.css';

import './header.scss'

const Header2 = ({ currentUser }) => {
    const dispatch = useDispatch();

    const [updateLanguage, setUpdateLanguage] = useState(false)
    const [language, setLanguage] = useState('English')
    const [hamburger, setHamburger] = useState(false)
    const { generalData } = useSelector(
		(state) => ({
			generalData: state.global.generalData
		})
	)
    const [userGeneralData, setUserGeneralData] = useState( generalData )
    

    const setClickHamburger = () => {
        setHamburger(!hamburger)
    }

    const logout = () => {
        Request.logout().then((apiRequest) => {
            localStorage.removeItem('access_token')
            localStorage.removeItem('current_user')
            dispatch( setUser(null) )
            dispatch( setTokenInfo({}) )
            dispatch( setGeneralData({}) )
            dispatch( setProfileData({}) )
            dispatch(getPushPathWrapper('loginPage'))
        })
    }

    useEffect(() => {
        setUserGeneralData( generalData )
    }, [generalData])

    useEffect(() => {
        let styleArray = [
            {
                rel: "stylesheet",
                href: "./assets/website/css/jquery-ui.css"
            },
            {
                rel: "stylesheet",
                href: "./assets/website/css/nice-select.css"
            },
            {
                rel: "stylesheet",
                href: "./assets/website/css/style.css"
            },
        ]

        styleArray.forEach(styleData => {
            let elem = document.createElement("link")
            _.each(styleData, (val, key) => {
                elem[key] = val
            })
            elem.id = 'ss-styles-load'
            document.head.appendChild(elem)
        })
    })

    return (
        <>
        <UpdateLanguage show={updateLanguage} setShow={setUpdateLanguage} language={language} setLanguage={setLanguage}/>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"></link>
        <header className="main-header loggedin-header">
            <div className="container d-flex justify-space-between">
                <div className="topbar-left">
                    <a><img src="./assets/website/images/Logo.svg" width="50" className="img-fluid" alt="Responsive image" /></a>
                </div>
                <div className="topbar-right">
                    <div className="d-flex flex-auto align-center">
                        <div className="support-link "><NavLink to="/" className="white-nowrap">Need Support?</NavLink></div>
                        <div className="topbar-profile d-flex">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="d-flex align-center">
                                    <div className="pos-relative">
                                        <img width="40" height="auto" src={ currentUser ? currentUser?.profile_picture : 'https://res.cloudinary.com/siteseed/image/upload/f_auto,q_auto,c_scale,w_50//profiile-img'} />
                                    </div>
                                    <span>{currentUser?.display_name || currentUser?.first_name}</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="animate slideIn">
                                    <Dropdown.Item as="div">
                                        <NavLink activeClassName="active" to="/profile">Profile</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="div">
                                        <NavLink activeClassName="active" to="/profile">Account & Security</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="div">
                                        <NavLink activeClassName="active" to="/profile">Notifications</NavLink>
                                    </Dropdown.Item>
                                    {/* <Dropdown.Item as="div">
                                        <NavLink activeClassName="active" onClick={() => {setUpdateLanguage(true)}} to="#">Language</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="div">
                                        <NavLink activeClassName="active" to="/profile">Help Center</NavLink>
                                    </Dropdown.Item> */}
                                    <Dropdown.Item as="div"><a href="#" onClick={logout}>Log Out</a></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-navigation">
                <div className="container d-flex">
                    <div className="bottom-navigation_wrapper col-12">
                        <button className="mobile-menu-toggle" onClick={setClickHamburger}>
                            <svg viewBox='0 0 10 8' width='40'>
                                <path d='M1 1h8M1 4h 8M1 7h8' 
                                    stroke='#000' 
                                    strokeWidth='1' 
                                    strokeLinecap='round'/>
                            </svg>
                        </button>
                        <nav className={`header_nav_wrapper ${hamburger ? 'open-menu' : 'closed-menu'}`}>
                            <ul>
                                <li>
                                    <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li>
                                    <nav>
                                        <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <li>
                                                <a className="nav-link active  darkgrey osr-16" id="nav-general-tab" data-bs-toggle="tab" href="#ds-general" role="tab" aria-controls="nav-general" aria-selected="false">General</a>
                                            </li>
                                            <li>
                                                <a className="nav-link darkgrey osr-16" id="nav-forms-tab" data-bs-toggle="tab" href="#ds-forms" role="tab" aria-controls="nav-forms" aria-selected="false">Forms</a>
                                            </li>
                                            <li>
                                                <a className="nav-link darkgrey osr-16" id="nav-font-tab" data-bs-toggle="tab" href="#ds-font" role="tab" aria-controls="nav-font" aria-selected="false">Font</a>
                                            </li>
                                            <li>
                                                <a className="nav-link darkgrey osr-16" id="nav-backup-tab" data-bs-toggle="tab" href="#ds-backup" role="tab" aria-controls="nav-backup" aria-selected="false">Backups</a>
                                            </li>
                                            <li>
                                                <a className="nav-link darkgrey osr-16" id="nav-contributor-tab" data-bs-toggle="tab" href="#ds-contributor" role="tab" aria-controls="nav-contributor" aria-selected="false">Contributor</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </li>
                                <div className="d-flex total-export-credits">
                                    <div className="d-flex">
                                        <div className="total-icon">
                                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51821 11.8924L7.97218 10.6409C8.19765 9.69095 8.31202 8.66956 8.31202 7.60474C8.31202 4.19215 5.90989 1.04607 5.11209 0.768969C5.03926 0.74384 4.96046 0.74384 4.88764 0.768969C4.08983 1.04607 1.68771 4.19215 1.68771 7.60474C1.68771 8.66956 1.80207 9.69112 2.02789 10.6409L0.481687 11.8924C0.389205 11.9673 0.342366 12.085 0.357923 12.203L0.988711 16.9531C1.00649 17.0876 1.10205 17.1989 1.23231 17.2365C1.36308 17.2741 1.50274 17.2315 1.58993 17.1274L4.05376 14.1829C4.65942 14.5526 5.34047 14.5526 5.94613 14.1829L8.40963 17.1274C8.47578 17.2062 8.5722 17.25 8.67186 17.25C8.70365 17.25 8.73562 17.2455 8.76724 17.2365C8.8975 17.1987 8.99289 17.0876 9.01084 16.9531L9.64163 12.203C9.65753 12.0852 9.61069 11.9673 9.51821 11.8924ZM5.00012 7.52268C4.24488 7.52268 3.63255 6.91036 3.63255 6.15512C3.63255 5.39988 4.24488 4.78755 5.00012 4.78755C5.75536 4.78755 6.36768 5.39988 6.36768 6.15512C6.36768 6.91036 5.75536 7.52268 5.00012 7.52268Z" fill="#F17D53"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p><b>
                                                { userGeneralData?.total_sites === 999 ? <span className="infinite">8 </span> : userGeneralData?.total_sites - userGeneralData?.total_user_sites < 0 ? 0 : userGeneralData?.total_sites - userGeneralData?.total_user_sites }/
                                                {  userGeneralData?.total_sites === 999 ? <span className="infinite">8 </span> : userGeneralData?.total_sites + ' left' }</b> Total Website</p>
                                            <Link to="subscription" className="btn-buymore">ADD MORE SITES</Link>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="total-icon">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.3035 8.41074L8.99997 13.7143L3.69647 8.41074L5.46432 6.64289L7.82145 9.00002V0.75H10.1786V9.00002L12.5357 6.64289L14.3035 8.41074ZM17.25 14.8928H0.75V17.2499H17.25V14.8928Z" fill="#F17D53"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p><b>
                                                {  userGeneralData?.export_credits === 999 ? <span className="infinite">8 </span> : userGeneralData?.export_credits - userGeneralData?.total_user_exports < 0 ? 0 : userGeneralData?.export_credits - userGeneralData?.total_user_exports }/
                                                { userGeneralData?.export_credits === 999 ? <span className="infinite"> 8 </span> : userGeneralData?.export_credits + ' left' }</b> Export Credits</p>
                                            <Link to="subscription" className="btn-buymore">ADD MORE CREDITS</Link>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}


const mapStateToProps = ({ global, layout, templates, }) => {
    return {
        loading: global.loading,
        theme: layout.theme,
        templates,
        currentUser: global.currentUser,
        tokenInfo: global.tokenInfo,
        generalData: global.generalData,
        profileData: global.profileData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header2)