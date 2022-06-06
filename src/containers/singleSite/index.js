import React from 'react'
import $ from 'jquery'
import Img from 'react-cloudinary-lazy-image'
import Header from '../../layout/header'
import Footer from '../../layout/footer'

import "./index.scss"

const SingleSite = () => {
    $("body").on("webkitAnimationEnd mozAnimationEnd animationend", '.with-animation',function(){
        $(this).removeClass("animated")  
    })

    $('body').on('mouseover', '.with-animation', function(){
        $(this).addClass('animated');
    });
    return (
        <>
        <Header />
        <div className="single-site-wrapper">
            <Img cloudName={'siteseed'} imageName={'single-site-sprout-bg'} style={{ width: 1270, height: '100%', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 1270 }} />

            <div className="single-site-first-section">
                <div className="d-flex">
                    <div className="flex-auto">
                        <Img cloudName={'siteseed'} imageName={'Rings'} style={{ width: 355, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 355 }} />
                        <Img cloudName={'siteseed'} imageName={'Cloud1'} style={{ width: 249, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 249 }} />
                        <Img cloudName={'siteseed'} imageName={'Jet-Pack'} style={{ width: 209, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 209 }} />
                        <div className="ss-first-section-content"> 
                            <Img cloudName={'siteseed'} imageName={'Board'} style={{ width: '100%', height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 1000 }} />
                            <h1>Finally,<br />A New World for Website Creation</h1>
                            <button className="btn-primary">Explore the difference</button>
                        </div>
                        <Img cloudName={'siteseed'} imageName={'Cloud2'} style={{ width: 282, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 282 }} />
                    </div>
                    <div className="flex-auto">
                        <Img cloudName={'siteseed'} imageName={'Planet-rings'} style={{ width: 492, height: 'auto' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 492 }} />
                        <Img cloudName={'siteseed'} imageName={'Rocket'} style={{ width: 261, height: 'auto' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 261 }} />
                    </div>
                </div>
            </div>

            <div className="single-site-second-section">
                <Img cloudName={'siteseed'} imageName={'board-line1'} style={{ width: 693, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 693 }} />
                <Img cloudName={'siteseed'} imageName={'board-line2'} style={{ width: 161, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 161 }} />
                <Img cloudName={'siteseed'} imageName={'Cloud2'} style={{ width: 282, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 282 }} />
                
                <div className="single-site-second-content">
                    <Img cloudName={'siteseed'} imageName={'Banner'} style={{ width: '100%', height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 1000 }} />
                    <h2>Where Creativity Meets Total Site Ownership</h2>
                    <button className="btn-secondary">Explore Our Features</button>
                </div>
            </div>

            <div className="single-site-third-section">
                <div className="d-flex">
                    <div className="flex-auto leef-wrapper-left">
                        <div className="single-site-blue-leef blue-leef-left with-animation">
                            <Img cloudName={'siteseed'} imageName={'Leaf-first'} style={{ width: '100%', height: '100%', position: 'absolute' }} imgStyle={{ width: '100%', height: '100%', objectFit: 'unset' }} fluid={{ maxWidth: 1000 }} />
                            <h3>Full Site Builder</h3>
                        </div>
                        <div className="single-site-blue-leef blue-leef-left with-animation">
                            <Img cloudName={'siteseed'} imageName={'leef-with-branch'} style={{ width: '100%', height: '100%', position: 'absolute' }} imgStyle={{ width: '100%', height: '100%', objectFit: 'unset'}} fluid={{ maxWidth: 1000 }} />
                            <h2>A Place With All The Tools You'd Expect To Help You Grow...</h2>
                        </div>
                        <div className="single-site-blue-leef blue-leef-right with-animation">
                            <Img cloudName={'siteseed'} imageName={'right-leef'} style={{ width: '100%', height: '100%', position: 'absolute' }} imgStyle={{ width: '100%', height: '100%', objectFit: 'unset' }} fluid={{ maxWidth: 1000 }} />
                            <h3>One:One Support & Consultation</h3>
                        </div>
                    </div>
                    <div className="flex-auto leef-wrapper-right">
                        <div className="single-site-blue-leef blue-leef-right with-animation">
                            <Img cloudName={'siteseed'} imageName={'right-leef'} style={{ width: '100%', height: '100%', position: 'absolute' }} imgStyle={{ width: '100%', height: '100%', objectFit: 'unset' }} fluid={{ maxWidth: 1000 }} />
                            <h3>Design Templates</h3>
                        </div>
                        <div className="single-site-blue-leef blue-leef-left with-animation">
                            <Img cloudName={'siteseed'} imageName={'Wide-Leaf-withbranch'} style={{ width: '100%', height: '100%', position: 'absolute' }} imgStyle={{ width: '100%', height: '100%', objectFit: 'unset' }} fluid={{ maxWidth: 1000 }} />
                            <h3>Hosting</h3>
                        </div>
                        <div className="single-site-blue-leef blue-leef-right with-animation">
                            <Img cloudName={'siteseed'} imageName={'wide-left-last'} style={{ width: '100%', height: '100%', position: 'absolute' }} imgStyle={{ width: '100%', height: '100%', objectFit: 'unset' }} fluid={{ maxWidth: 1000 }} />
                            <h3>Export Templates</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-site-fourth-section">
                <div className="d-flex">
                    <div className="flex-zero-auto pos-relative">
                        <Img cloudName={'siteseed'} imageName={'Butterfly'} style={{ width: 180, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 180 }} />
                        <div className="signpost-container">
                            <Img cloudName={'siteseed'} imageName={'SignPost'} style={{ width: '100%', height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 1000 }} />
                            <h2>Are You Ready To See What Awaits On The Other Side?</h2>
                            <button className="btn-secondary">Explore Our Features</button>
                        </div>
                    </div>
                    <div className="flex-zero-auto">
                        <Img cloudName={'siteseed'} imageName={'Gardener-Pot'} style={{ width: 233, height: 'auto'}} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 233 }} />
                        <Img cloudName={'siteseed'} imageName={'Island'} style={{ width: 495, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 495 }} />
                    </div>
                </div>
            </div>

            <div className="single-site-fifth-section">
                <div className="d-flex">
                    <div className="flex-auto d-flex flex-wrap leaf-steps">
                        <div className="col-12 pos-relative leaf-wrapper with-animation">
                            <h2>5 Easy Steps To Plant Your Seed And Start Growing</h2>
                        </div>
                        <div className="d-flex col-12">
                            <div className="flex-auto pos-relative leaf-wrapper with-animation">
                                <h4>Select a design template to customize or start from scratch</h4>
                            </div>
                            <div className="flex-auto pos-relative leaf-wrapper with-animation">
                                <h4>Utilize a Siteseed domain, purchase a custom domain, or link a URL you already own</h4>
                            </div>
                        </div>
                        <div className="d-flex col-12">
                            <div className="flex-auto pos-relative leaf-wrapper with-animation">
                                <h4>Click "publish" to go live on or export your design for any platform that accepts custom themes</h4>
                            </div>
                            <div className="flex-auto pos-relative leaf-wrapper with-animation">
                                <h4>Tell everyone you know about your amazing new website</h4>
                            </div>
                        </div>
                        <div className="d-flex col-12">
                            <div className="flex-auto pos-relative leaf-wrapper with-animation">
                                <h4>Open our<br/>easy-to-use builder and start telling the world about your unique offerings</h4>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="flex-auto pos-relative">
                        <Img cloudName={'siteseed'} imageName={'bird'} style={{ width: 109, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 109 }} />
                        <Img cloudName={'siteseed'} imageName={'bird'} style={{ width: 109, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 109 }} />
                        <Img cloudName={'siteseed'} imageName={'Cloud1'} style={{ width: 248, height: 'auto', position: 'absolute' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 248 }} />
                        <div className="with-animation upsidedown-leaf">
                            <Img cloudName={'siteseed'} imageName={'upsidedown-leaf'} style={{ width: 192, height: 'auto' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 192 }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-site-sixth-section pos-relative">
                <Img cloudName={'siteseed'} imageName={'halo-moon'} style={{ width: 1186, height: 'auto', zIndex: -2, left: 10, bottom: 30, margin: 'auto' }} imgStyle={{ width: '100%', height: 'auto' }} fluid={{ maxWidth: 1186 }} />
                <Img cloudName={'siteseed'} imageName={'Grond-Seed'} style={{ width: 1241, height: 'auto', position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-48%)' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 1241 }} />
                <Img cloudName={'siteseed'} imageName={'gardener-hose'} style={{ width: 606, height: 'auto', position: 'absolute', bottom: 10, left: 'unset', right: 190, transform: 'rotateY(180deg)', zIndex: -1 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 606 }} />
                <Img cloudName={'siteseed'} imageName={'Creature1'} style={{ width: 166, height: 'auto', position: 'absolute', bottom: 20, left: 380, zIndex: -1 }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 166 }} />
            </div>

        </div>
        <div className="water-section-container">
            <div className="water-section-first pos-relative">
                <Img cloudName={'siteseed'} imageName={'water-first'} style={{ width: 951, height: 'auto', zIndex: -2, left: 30, margin: 'auto' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 951 }} />
                <div className="FishOne">
                    <Img cloudName={'siteseed'} imageName={'fish'} style={{ width: 195, height: 'auto'}} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 951 }} />
                </div>
                <div className="FishTwo">
                    <Img cloudName={'siteseed'} imageName={'fish-2'} style={{ width: 81, height: 'auto'}} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 81 }} />
                </div>
                <div className="FishThree">
                    <Img cloudName={'siteseed'} imageName={'fish-3'} style={{ width: 100, height: 'auto'}} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 100 }} />
                </div>
            </div>
            <div className="water-section-second pos-relative">
                <Img cloudName={'siteseed'} imageName={'water-second'} style={{ width: 1326, height: 'auto', position: 'absolute', left: '50%', top: 0, zIndex: -1, transform: 'translateX(-52%)'}} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 1326 }} />
                <h2 className="text-center">Just take a look at the success of our community who grow something from nothing in a whole new way each and every day.</h2>
            </div>
            <div className="water-section-third pos-relative">
                <Img cloudName={'siteseed'} imageName={'water-third'} style={{ width: 1209, height: 'auto', position: 'absolute', left: '50%', top: 0, zIndex: -1, transform: 'translateX(-50%)'}} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 1209 }} />
                <div className="d-flex">
                    <div className="flex-auto">
                        <div className="treequote-wrapper with-animation">
                            <Img cloudName={'siteseed'} imageName={'TreeQuote1'} style={{ width: '100%', height: 'auto' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 1209 }} />
                            <h4>Their site builder was so smooth I was done in record time.</h4>
                        </div>
                    </div>
                    <div className="flex-auto">
                        <div className="treequote-wrapper with-animation">
                            <Img cloudName={'siteseed'} imageName={'TreeQuote2'} style={{ width: '100%', height: 'auto' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 1209 }} />
                            <h4>Fancy words about siteseed. It's the bestest</h4>
                        </div>
                    </div>
                    <div className="flex-auto">
                        <div className="treequote-wrapper with-animation">
                            <Img cloudName={'siteseed'} imageName={'TreeQuote1'} style={{ width: '100%', height: 'auto' }} imgStyle={{ width: '100%', height: 'auto', display: 'block' }} fluid={{ maxWidth: 1209 }} />
                            <h4>Fancy words about siteseed. It's the bestest</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default SingleSite;