import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-cloudinary-lazy-image'
import $ from 'jquery'
import { useSelector } from "react-redux";

import HeaderMobileLine  from '../assets/header/final-arrow.webp'

const Header = () => {
    const [hamburger, setHamburger] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const setClickHamburger = () => {
        setHamburger(!hamburger)

        if(hamburger){
            $('.header_nav_wrapper').slideUp();
        }else{
            $('.header_nav_wrapper').slideDown();
        }
    }

    const closeMenuDrop = () => {
        setHamburger(false)

        $('.header_nav_wrapper').slideUp();
    }

    const { currentUser, tokenInfo } = useSelector(
		(state) => ({
			currentUser: state.global.currentUser,
			tokenInfo: state.global.tokenInfo,
		})
	)

    useEffect(() => {
        if ( currentUser ) {
            setIsLoggedIn(true)
        }else{
            setIsLoggedIn(false)
        }
        
    }, [currentUser])

    return (
        <>
            <header className="main-header">
                <div className="container d-flex">
                    <div className="header__logo">
                        <Link to="/home" onClick={closeMenuDrop}>
                            <Img cloudName={'siteseed'} imageName={'newLogo'} style={{ width: 253, height: 'auto' }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 253 }} />
                        </Link>
                    </div>
                    <div className="header_navigation">
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
                                    <Link to="/" onClick={closeMenuDrop}>Features</Link>
                                </li>
                                <li>
                                    <Link to="/pricing" onClick={closeMenuDrop}>Pricing</Link>
                                </li>
                                <li>
                                    <Link to="/about-us" onClick={closeMenuDrop}>About us</Link>
                                </li>
                                { !localStorage.getItem('access_token') &&
                                <li>
                                    <Link to="/login-page" className="login-link" onClick={closeMenuDrop}>
                                        <img src={HeaderMobileLine} />Log In
                                    </Link>
                                </li>
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;