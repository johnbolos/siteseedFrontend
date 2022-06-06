import React from 'react'
import $ from 'jquery'
import Img from 'react-cloudinary-lazy-image'
import Header from '../../layout/header'
import Footer from '../../layout/footer'

import './index.scss'

const MultiSite = () => {
    $("body").on("webkitAnimationEnd mozAnimationEnd animationend", '.with-animation',function(){
        $(this).removeClass("animated")  
    })

    $('body').on('mouseover', '.with-animation', function(){
        $(this).addClass('animated');
    });

    return (
        <>
        <Header />
        <div className="container-no-flex multisite-wrapper pos-relative ">
            <Img cloudName={'siteseed'} imageName={'multi-site-bg'} style={{ width: 1359, height: 'auto', position: 'absolute', left: '50%', zIndex: -2, transform: 'translateX(-50%)' }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 1359 }} />

            <div className="d-flex">
                <div className="flex-auto pos-relative">
                    <Img cloudName={'siteseed'} imageName={'gardener-planting'} style={{ width: 138, height: 'auto', position: 'absolute', left: 100, bottom: 'calc(100% + 50px)', zIndex: 1, transform: 'rotateY(180deg) rotate(-11deg)' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 138 }} />
                    <Img cloudName={'siteseed'} imageName={'orangeplanet'} style={{ width: 159, height: 'auto', transform: 'translate(90px, -100px)' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 138 }} />
                    <Img cloudName={'siteseed'} imageName={'blueplanet-rings'} style={{ width: 323, height: 'auto', bottom: 30, left: 110, position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 323 }} />
                </div>
                <div className="flex-auto">
                    <div className="multisite-banner pos-relative text-center">
                        <Img cloudName={'siteseed'} imageName={'multisite-banner'} style={{ width: '100%', height: 'auto', top: 0, left: 0, position: 'absolute', zIndex: -1 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 2000 }} />
                        <h1>Finally,<br/>A New World for Website Creation</h1>
                        <button className="btn-primary">Explore the difference</button>
                        <Img cloudName={'siteseed'} imageName={'blueplanet'} style={{ width: 246, height: 'auto', bottom: 'calc(100% + 30px)', left: 150, position: 'absolute', zIndex: -1 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 246 }} />
                        <Img cloudName={'siteseed'} imageName={'alien'} style={{ width: 158, height: 'auto', top: -110, right: 10, position: 'absolute', zIndex: -2 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 158 }} />
                        <Img cloudName={'siteseed'} imageName={'pinkplanet'} style={{ width: 175, height: 'auto', top: 70, right: -36, position: 'absolute', zIndex: -2 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 175 }} />
                        <Img cloudName={'siteseed'} imageName={'man-rocket'} style={{ width: 163, height: 'auto', top: -113, left: -91, position: 'absolute', zIndex: -1 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 163 }} />
                        <Img cloudName={'siteseed'} imageName={'Cloud2'} style={{ width: 282, height: 'auto', bottom: -80, right: -110, position: 'absolute', zIndex: -1 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 282 }} />
                        <svg width="42" height="47" viewBox="0 0 42 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8181 20.9725C12.8181 20.9725 16.8581 12.8025 17.3981 12.9425C19.1281 13.4025 14.6781 25.1825 20.0581 36.0025C21.0181 37.9325 24.5081 44.9625 30.4781 45.3125C34.7881 45.5625 39.8481 42.2925 40.2281 38.4425C40.4981 35.7125 38.5381 32.7525 37.3481 32.9025C36.0081 33.0625 36.3581 37.0625 34.6881 37.5625C32.7781 38.1225 28.8981 33.9225 27.3681 28.9125C25.1181 21.5425 29.7681 18.3225 28.0381 12.2825C26.1881 5.84253 18.1681 0.0125172 11.8581 1.64252C0.848072 4.48252 1.59809 20.9825 1.59809 20.9825H12.8181V20.9725Z" fill="url(#paint0_linear_22_938)" stroke="black" strokeWidth="2" strokeMiterlimit="10"/>
                            <defs>
                            <linearGradient id="paint0_linear_22_938" x1="38.1429" y1="23.343" x2="3.12439" y2="23.343" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B1FF75"/>
                            <stop offset="1" stopColor="#008855"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5381 28.8727C25.5381 28.8727 33.7081 24.8327 33.5681 24.2927C33.1081 22.5627 21.3281 27.0127 10.5081 21.6327C8.57809 20.6727 1.54809 17.1827 1.19809 11.2127C0.94809 6.90273 4.21809 1.84273 8.06808 1.46273C10.7981 1.19273 13.7581 3.15273 13.6081 4.34273C13.4481 5.68273 9.44809 5.33274 8.94809 7.00274C8.38809 8.91274 12.5881 12.7927 17.5981 14.3227C24.9681 16.5727 28.1881 11.9227 34.2281 13.6527C40.6681 15.5027 46.4981 23.5227 44.8681 29.8327C42.0281 40.8427 25.5281 40.0927 25.5281 40.0927V28.8727H25.5381Z" fill="url(#paint0_linear_22_939)" stroke="black" strokeWidth="2" strokeMiterlimit="10"/>
                            <defs>
                            <linearGradient id="paint0_linear_22_939" x1="23.171" y1="3.54783" x2="23.171" y2="38.5663" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B1FF75"/>
                            <stop offset="1" stopColor="#008855"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                <div className="flex-auto">
                    <div className="creativity-banner text-center">
                        <h2>Where Creativity Meets Total Site Ownership</h2>
                        <button className="btn-primary">Explore Our Features</button>
                    </div>
                </div>
                <div className="flex-auto"></div>
            </div>

            <div className="d-flex basket-like-container">
                <div className="flex-auto"></div>
                <div className="flex-auto">
                    <div className="d-flex">
                        <div className="flex-auto place-round1">
                            <Img cloudName={'siteseed'} imageName={'mini-clouds'} style={{ width: 36, height: 'auto', top: 30, left: 120, position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 36 }} />
                            <Img cloudName={'siteseed'} imageName={'mini-clouds'} style={{ width: 36, height: 'auto', bottom: 170, left: 80, position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 36 }} />
                            <Img cloudName={'siteseed'} imageName={'mini-clouds'} style={{ width: 36, height: 'auto', top: 50, left: 200, position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 36 }} />
                            <Img cloudName={'siteseed'} imageName={'mini-clouds'} style={{ width: 36, height: 'auto', bottom: 180, left: 320, position: 'absolute', zIndex: 2 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 36 }} />
                        </div>
                        <div className="flex-auto place-round2">
                            <Img cloudName={'siteseed'} imageName={'mini-clouds'} style={{ width: 70, height: 'auto', bottom: 250, left: 80, position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 70 }} />
                            <Img cloudName={'siteseed'} imageName={'mini-clouds'} style={{ width: 70, height: 'auto', right: 60, position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 70 }} />
                            <Img cloudName={'siteseed'} imageName={'mini-clouds'} style={{ width: 70, height: 'auto', bottom: 220, right: 60, position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 70 }} />
                        </div>
                    </div>
                    <div className="d-flex basket-container flex-wrap">
                        <div className="col-12"></div>
                        <div className="col-12">
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2>A Place With All The Tools You'd Expect To Help You Grow...</h2>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="flex-auto pos-relative flex-with-svg">
                                <svg width="224" height="510" viewBox="0 0 224 510" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M113 0V0C113 12.1503 103.15 22 91 22H32C17.0883 22 5 34.0883 5 49V283C5 297.912 17.0883 310 32 310H192C206.912 310 219 322.088 219 337V510" stroke="#3DAEB4" strokeWidth="10"/>
                                </svg>
                                <div className="basket-details-wrapper">
                                    <h3>Hosting</h3>
                                </div>
                            </div>
                            <div className="flex-auto">
                                <div className="basket-details-wrapper">
                                    <svg width="235" height="365" viewBox="0 0 235 365" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M131 0V0C131 10.4934 139.507 19 150 19H203C217.912 19 230 31.0883 230 46V197C230 211.912 217.912 224 203 224H147C132.088 224 120 236.088 120 251V277C120 291.912 107.912 304 93 304H23.5C13.2827 304 5 295.717 5 285.5V285.5C5 275.283 13.2827 267 23.5 267H28C40.7025 267 51 277.297 51 290V365" stroke="#3DAEB4" strokeWidth="10"/>
                                    </svg>
                                    <h3>Full Site Builder</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="flex-zero-auto">
                                <div className="basket-details-wrapper">
                                    <svg width="75" height="386" viewBox="0 0 75 386" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 5H7C21.9117 5 34 17.0883 34 32V247C34 256.941 42.0589 265 52 265V265C61.9411 265 70 273.059 70 283V386" stroke="#3DAEB4" strokeWidth="10"/>
                                    </svg>
                                    <h3>Export Templates</h3>
                                </div>
                            </div>
                            <div className="flex-auto">
                                <div className="basket-details-wrapper">
                                    <svg width="110" height="374" viewBox="0 0 110 374" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M105 374V40.9344C105 26.0227 92.9117 13.9344 78 13.9344H18.9344C11.2387 13.9344 5 7.69577 5 0V0" stroke="#3DAEB4" strokeWidth="10"/>
                                    </svg>
                                    <h3>Design Templates</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-center">
                            <div className="flex-zero-auto">
                                <div className="basket-details-wrapper">
                                    <svg width="114" height="644" viewBox="0 0 114 644" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 0V27.9905C5 42.9022 17.0883 54.9905 32 54.9905H42.8116C57.7233 54.9905 69.8116 67.0788 69.8116 81.9905V526.645C69.8116 537.466 78.5842 546.239 89.4058 546.239V546.239C100.227 546.239 109 555.012 109 565.833V644" stroke="#3DAEB4" strokeWidth="10"/>
                                    </svg>
                                    <Img cloudName={'siteseed'} imageName={'Cloud1'} style={{ width: 249, height: 'auto', top: -70, right: -120, position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 249 }} />
                                    <h3>One:One Support & Consultation</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex are-you-ready-section">
                <div className="flex-auto pos-relative">
                    <Img cloudName={'siteseed'} imageName={'Cloud1'} style={{ width: 249, height: 'auto', margin: '-20px 0 0 60px' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 249 }} />
                </div>
                <div className="flex-auto">
                    <div className="are-you-ready-leaf-wrapper text-center pos-relative with-animation">
                        <Img cloudName={'siteseed'} imageName={'Leaf'} style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0, zIndex: -1 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 1000 }} />
                        <h2>Are You Ready To See What Awaits On The Other Side?</h2>
                        <button className="btn-primary">Explore our features</button>
                        <svg width="218" height="270" viewBox="0 0 218 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M210 270V179C210 167.402 200.598 158 189 158H111C99.402 158 90 167.402 90 179V233C90 244.598 80.598 254 69 254H29C17.402 254 8 244.598 8 233V0" stroke="#636DBE" strokeWidth="15"/>
                        </svg>
                    </div>
                </div>
                <div className="flex-auto pos-relative leaf-in-branches">
                    <div className="with-animation">
                        <Img cloudName={'siteseed'} imageName={'Leaf'} style={{ width: 140, height: 'auto', marginLeft: 15 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 140 }} />
                    </div>
                    <svg width="103" height="82" viewBox="0 0 103 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77 69H85C92.1797 69 98 63.1797 98 56V45C98 37.8203 92.1797 32 85 32H45C37.8203 32 32 37.8203 32 45V64C32 71.1797 26.1797 77 19 77H18C10.8203 77 5 71.1797 5 64V0" stroke="#636DBE" strokeWidth="10"/>
                    </svg>
                    <div className="with-animation">
                        <Img cloudName={'siteseed'} imageName={'Leaf'} style={{ width: 140, height: 'auto', transform: 'rotateY(180deg) translateX(-150px) rotateZ(0deg)', position: 'absolute', top: 280, right: 30 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 140 }} />
                    </div>
                    <svg width="40" height="62" viewBox="0 0 40 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 62V24C5 13.5066 13.5066 5 24 5H40" stroke="#636DBE" strokeWidth="10"/>
                    </svg>
                </div>
            </div>

            <div className="pos-relative d-flex man-picking-berries">
                <div className="flex-auto pos-relative">
                    <Img cloudName={'siteseed'} imageName={'man-picking'} style={{ width: 157, height: 'auto', position: 'absolute', bottom: 155, left: 50, zIndex: 2 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 157 }} />
                    <div className="d-flex berry-tree-wrapper">
                        <div className="flex-zero-auto pos-relative">
                            <div className="tree-wrapper">
                                <span className="berry"></span>
                            </div>
                        </div>  
                        <div className="flex-auto pos-relative">
                            <div className="tree-wrapper">
                                <span className="berry"></span>
                            </div>
                            <div className="tree-wrapper">
                                <span className="berry"></span>
                                <span className="berry"></span>
                                <span className="berry"></span>
                                <span className="berry"></span>
                                <span className="berry"></span>
                            </div>
                        </div>
                    </div>
                    <div className="man-picking-ground"></div>
                    <Img cloudName={'siteseed'} imageName={'cloud-like'} style={{ width: 531, height: 'auto', marginLeft: 30 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 531 }} />
                </div>
                <div className="flex-zero-auto">

                </div>
            </div>

            <div className="teardrops-section d-flex pos-relative flex-wrap">
                <Img cloudName={'siteseed'} imageName={'Cloud1'} style={{ width: 249, height: 'auto', position: 'absolute', right: 55, top: 240, zIndex: 2 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 249 }} />
                <div className="col-12">
                    <div className="teardrop-wrapper">
                        <svg width="335" height="231" viewBox="0 0 335 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M330 0V70C330 83.2548 319.255 94 306 94H218C204.745 94 194 104.745 194 118V202C194 215.255 204.745 226 218 226H222C235.255 226 246 215.255 246 202V184C246 170.745 235.255 160 222 160H29C15.7452 160 5 149.255 5 136V118C5 104.745 15.7452 94 29 94H135C147.15 94 157 103.85 157 116V116C157 128.15 147.15 138 135 138H42C35.9249 138 31 133.075 31 127V127C31 120.925 35.9249 116 42 116H107" stroke="#281C73" strokeWidth="10"/>
                        </svg>
                        <svg width="307" height="1111" viewBox="0 0 307 1111" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99988 1111V348C7.99988 324.252 27.2516 305 50.9999 305H193H256C279.748 305 299 285.748 299 262V124C299 110.745 288.255 100 275 100V100C261.745 100 251 89.2548 251 76V51C251 27.2518 270.252 8 294 8H299" stroke="#281C73" strokeWidth="15"/>
                        </svg>
                        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M125 81V105C125 116.046 116.046 125 105 125H95C83.9543 125 75 116.046 75 105V83C75 71.9543 66.0457 63 55 63H25C13.9543 63 5 54.0457 5 43V25C5 13.9543 13.9543 5 25 5H27C38.0457 5 47 13.9543 47 25V25" stroke="#281C73" strokeWidth="10"/>
                        </svg>
                        <h2>5 Easy Steps To Plant Your Seed And Start Growing</h2>
                    </div>
                </div>
                <div className="col-12 d-flex justify-center">
                    <div className="flex-auto">
                        <div className="teardrop-wrapper">
                            <svg width="72" height="916" viewBox="0 0 72 916" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M72.0001 8H8.00006V916" stroke="#281C73" strokeWidth="15"/>
                            </svg>
                            <h4>Select a design template to customize or start from scratch</h4>
                        </div>
                    </div>
                    <div className="flex-auto">
                        <div className="teardrop-wrapper">
                            <h4>Utilize a SiteSeed domain, purchase a custom domain, or link a URL you already own</h4>
                        </div>
                    </div>
                    <div className="flex-auto">
                        <div className="teardrop-wrapper">
                            <svg width="320" height="943" viewBox="0 0 320 943" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M320 8H274.429C250.68 8 231.429 27.2518 231.429 51V81C231.429 104.748 212.177 124 188.429 124H143C119.252 124 100 143.252 100 167V326C100 349.748 80.7482 369 57 369H51C27.2518 369 8 388.252 8 412V943" stroke="#281C73" strokeWidth="15"/>
                            </svg>
                            <svg width="140" height="267" viewBox="0 0 140 267" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 0V23C5 36.8071 16.1929 48 30 48H44C57.8071 48 69 59.1929 69 73V87C69 100.807 80.1929 112 94 112H110C123.807 112 135 123.193 135 137V237C135 250.807 123.807 262 110 262H64C50.1929 262 39 250.807 39 237V191C39 177.193 50.1929 166 64 166H72C85.8071 166 97 177.193 97 191V197C97 210.807 85.8071 222 72 222H69" stroke="#281C73" strokeWidth="10"/>
                            </svg>
                            <h4>Click "publish" to go live on or export your design for any platform that accepts custom themes</h4>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-flex justify-center">
                    <div className="flex-auto">
                        <div className="teardrop-wrapper">
                            <svg width="162" height="766" viewBox="0 0 162 766" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 0V201C100 219.225 85.2254 234 67 234H41C22.7746 234 8 248.775 8 267V615C8 633.225 22.7746 648 41 648H121C139.225 648 154 662.775 154 681V766" stroke="#281C73" strokeWidth="15"/>
                            </svg>
                            <h4>Tell everyone you know about your amazing new website</h4>
                        </div>
                    </div>
                    <div className="flex-auto">
                        <div className="teardrop-wrapper">
                            <svg width="264" height="834" viewBox="0 0 264 834" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M202 8H221C240.33 8 256 23.67 256 43V475C256 494.33 240.33 510 221 510H43C23.67 510 8 525.67 8 545V834" stroke="#281C73" strokeWidth="15"/>
                            </svg>
                            <h4>Open our easy-to-use builder and start telling the world about your unique offerings</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-plant-section d-flex pos-relative">
                <div className="flex-auto floatingIslandMonster pos-relative">
                    <Img cloudName={'siteseed'} imageName={'floatingIsland-2'} style={{ width: 165, height: 'auto', position: 'absolute', left: 356, bottom: '70%' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 165 }} />
                    <Img cloudName={'siteseed'} imageName={'floatingMonster-2'} style={{ width: 300, height: 'auto', position: 'absolute', left: 96, bottom: '44%' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 300 }} />
                </div>
                <div className="flex-zero-auto pos-relative">
                    <Img cloudName={'siteseed'} imageName={'island-mud-withman-fork'} style={{ width: 781, height: 'auto', transform: 'translateX(158px)' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 781 }} />
                </div>
                <div className="flex-zero-auto pos-relative">
                    <Img cloudName={'siteseed'} imageName={'Islands-with-man'} style={{ width: 419, height: 'auto', transform: 'translateX(-40px)' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 419 }} />
                </div>
            </div>

            <div className="bottom-plant-content-section d-flex flex-wrap">
                <div className="col-12">
                    <div className="bottom-mud-text">
                        <h2>Just take a look at the success of our community who grow something from nothing in a whole new way each and every day.</h2>
                    </div>
                </div>
                <div className="col-4">
                    <div className="bottom-bubbles-wrapper with-animation">
                        <Img cloudName={'siteseed'} imageName={'bubbles'} style={{ width: '100%', height: '100%' }} imgStyle={{ width: '100%', height: '100%', display: 'block' }} fluid={{ maxWidth: 1000 }} />
                        <h4>Their site builder was so smooth I was done in record time.</h4>
                    </div>
                </div>
                <div className="col-4">
                    <div className="bottom-bubbles-wrapper with-animation">
                        <Img cloudName={'siteseed'} imageName={'bubbles-2'} style={{ width: '100%', height: '100%' }} imgStyle={{ width: '100%', height: '100%', display: 'block' }} fluid={{ maxWidth: 1000 }} />
                        <h4>Their site builder was so smooth I was done in record time.</h4>
                    </div>
                </div>
                <div className="col-4">
                    <div className="bottom-bubbles-wrapper with-animation">
                        <Img cloudName={'siteseed'} imageName={'bubbles'} style={{ width: '100%', height: '100%' }} imgStyle={{ width: '100%', height: '100%', display: 'block' }} fluid={{ maxWidth: 1000 }} />
                        <h4>Their site builder was so smooth I was done in record time.</h4>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
        </>
    )
}
export default MultiSite;