import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-cloudinary-lazy-image'

import { useSelector } from "react-redux";

import SocialMedia from '../assets/socialMedia.webp'

const Footer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const { currentUser } = useSelector(
		(state) => ({
			currentUser: state.global.currentUser,
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
        { !isLoggedIn && <footer className="main-footer">
            <div className="container d-flex flex-wrap">
                <div className="col-4">
                    <Link to="/">
                        <Img cloudName={'siteseed'} imageName={'footer-logo'} style={{ width: 200, height: 'auto' }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 200 }} />
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a metus nulla. 
suscipit nibh eu isasdl gisoiuwer.</p>
                </div>
                <div className="col-8 footer-navigations">
                    <div className="d-flex">
                        <div className="flex-auto">
                            <h4>Features</h4>
                            <ul>
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Dolor</li>
                                <li>Sit amet</li>
                            </ul>
                        </div>
                        <div className="flex-auto">
                            <h4>Pricing</h4>
                            <ul>
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Dolor</li>
                                <li>Sit amet</li>
                                <li>Consectetur</li>
                            </ul>
                        </div>
                        <div className="flex-auto">
                            <h4>Templates</h4>
                            <ul>
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Dolor</li>
                                <li>Sit amet</li>
                                <li>Consectetur</li>
                            </ul>
                        </div>
                        <div className="flex-auto">
                            <h4>About us</h4>
                            <ul>
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Dolor</li>
                                <li>Sit amet</li>
                                <li>Consectetur</li>
                            </ul>
                        </div>
                        <div className="flex-auto">
                            <h4>Resources</h4>
                            <ul>
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Dolor</li>
                                <li>Sit amet</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="footer-copyright-social-media">
                        <p>© {new Date().getFullYear()} Siteseed, Inc. All rights reserved.</p>
                        <Img cloudName={'siteseed'} imageName={'socialMedia'} style={{ width: 200, height: 'auto', mixBlendMode: 'multiply' }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 200 }} />
                    </div>
                </div>
            </div>
        </footer>
        }
        </>
    )
}

export default Footer;