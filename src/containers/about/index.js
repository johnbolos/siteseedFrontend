import React from 'react'
import Img from 'react-cloudinary-lazy-image'
import $ from 'jquery'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import "./index.scss"

const AboutUs = () => {
    $("body").on("webkitAnimationEnd mozAnimationEnd animationend", '.with-animation',function(){
        $(this).removeClass("animated")  
    })

    $('body').on('mouseover', '.with-animation', function(){
        $(this).addClass('animated');
    });

    return (
        <>
        <Header />
        <div className="about-us-container container-no-flex">
            <h1 className="text-center">What we're <b>about.</b><br/>Why we do what we do</h1>

            <div className="about-us-wrapper pos-relative">
                <Img cloudName={'siteseed'} imageName={'about-line'} style={{ width: '100%', height: '100%' }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 1114 }} />
                <div className="d-flex flex-wrap">
                    <div className="col-12">
                        <div className="about-details-wrapper pos-relative with-animation">
                            <Img cloudName={'siteseed'} imageName={'leaf-right'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 500 }} />
                            <Img cloudName={'siteseed'} imageName={'leaf-rightsmall'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 89 }} />
                            <h4>SiteSeed has been strategically designed, crafted and built to fill a gap in market offerings for website builders.</h4>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="about-details-wrapper pos-relative with-animation">
                            <Img cloudName={'siteseed'} imageName={'leaf-left'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 500 }} />
                            <Img cloudName={'siteseed'} imageName={'leaf-leftsmall'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 89 }} />
                            <h4>It is not pretentious nor high-end.  It's a friendly gathering place for creatives and techies, for solopreneurs and savvy business owners to come together and launch their vision.  Free of pressure, free of frustration, free of fear of making the wrong decision and regretting being tied to a website platform for life or having to start over.  </h4>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="about-details-wrapper pos-relative with-animation">
                            <Img cloudName={'siteseed'} imageName={'leaf-rightbig'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 500 }} />
                            <h4>Freedom, security, support, an occasional pat on the back, and room to grow.  That's what SiteSeed gives its users - and amazingly enough this gift of camaraderie does not require a trade off of savvy tools or design faux paux.  Each SiteSeed member gets access to robust tools and exclusively and professionally designed web templates  (as they would on any other builder). </h4>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="about-details-wrapper pos-relative with-animation">
                            <Img cloudName={'siteseed'} imageName={'leaf-left'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 500 }} />
                            <Img cloudName={'siteseed'} imageName={'leaf-leftsmall'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 89 }} />
                            <h4>Through the SiteSeed website we are saying "hey friend, come on in!  Look around, explore, see what we have to offer, and get inspired."</h4>
                            <div className="leafonly-wrapper">
                                <Img cloudName={'siteseed'} imageName={'leaf-rightsmall'} style={{ width: 89, height: 'auto' }} fluid={{ maxWidth: 89 }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="about-details-wrapper pos-relative with-animation">
                            <Img cloudName={'siteseed'} imageName={'leaf-rightbig'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 500 }} />
                            <Img cloudName={'siteseed'} imageName={'leaf-rightsmall'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 89 }} />
                            <h4>We desire to appeal to single site builders and multi-site creators - two groups who, frankly, couldn't be more different.  So, what's the one thing that connects us all together?  We all have something to say and we all realize that creating an amazing website with this message is the first seed that must be planted in order for all other success to grow. </h4>
                            <div className="leafonly-wrapper">
                                <Img cloudName={'siteseed'} imageName={'leaf-rightsmall'} style={{ width: 89, height: 'auto', right: 83, bottom: 30, position: 'absolute' }} fluid={{ maxWidth: 89 }} />
                                <Img cloudName={'siteseed'} imageName={'leaf-leftsmall'} style={{ width: 89, height: 'auto' }} fluid={{ maxWidth: 89 }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="about-details-wrapper pos-relative with-animation">
                            <Img cloudName={'siteseed'} imageName={'leaf-left'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 500 }} />
                            <Img cloudName={'siteseed'} imageName={'leaf-leftsmall'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 89 }} />
                            <h4>So, how do we create this in an environment?  What setting do we bring our new friends to to impress them? What areas of success do we emphasize with excitement to then further entice their excitement?  What world do we create that makes them forget about all the reasons they can't and motivates them with all the reasons they CAN?</h4>
                            <div className="leafonly-wrapper">
                                <Img cloudName={'siteseed'} imageName={'leaf-rightsmall'} style={{ width: 89, height: 'auto' }} fluid={{ maxWidth: 89 }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="about-details-wrapper pos-relative with-animation">
                            <Img cloudName={'siteseed'} imageName={'leaf-right'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 500 }} />
                            <Img cloudName={'siteseed'} imageName={'leaf-rightsmall'} style={{ width: 'auto', height: 'auto' }} fluid={{ maxWidth: 89 }} />
                            <h4>What does success look like?<br/>Influence<br/>Revenue<br/>Reputation<br/>Business Growth (client roster or sales)</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default AboutUs;