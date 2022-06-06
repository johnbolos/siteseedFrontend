import React, { useState } from 'react'
import Img from 'react-cloudinary-lazy-image'
import Header from '../../layout/header'
import Footer from '../../layout/footer'

import './index.scss'

const Pricing = () => {
    const [priceToggle, setPriceToggle] = useState(true)

    const priceToggleClick = () => {
        setPriceToggle(!priceToggle)
    }

    return (
        <>
        <Header />
            <div className="container-no-flex pos-relative pricing-page-wrapper">
                <h1 className="text-center page-title">PRICING</h1>

                <div className="pricing-header text-center pos-relative">
                    <Img cloudName={'siteseed'} imageName={'slug-left'} style={{ width: 117, height: 'auto', position: 'absolute', left: -47, top: -1, zIndex: -1 }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 117 }} />
                    <Img cloudName={'siteseed'} imageName={'slug-right'} style={{ width: 121, height: 'auto', position: 'absolute', right: -35, top: 13, zIndex: -1 }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 121 }} />
                    <Img cloudName={'siteseed'} imageName={'pricing-headerwith-rope'} style={{ width: '100%', height: 'auto' }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 2000 }} />
                    <div className="pricing-header-mobile">
                        <Img cloudName={'siteseed'} imageName={'pricing-header'} style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, zIndex: -1 }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 2000 }} />
                    </div>
                    <div className="pricing-header-details">
                        <button className="btn-primary">Start for free</button>
                        <h2>Then Unlock A Plan Whenever You're Ready To Grow</h2>
                    </div>
                </div>

                <div className="d-flex justify-center pricing-toggle-container align-center">
                    <div className="flex-zero-auto">
                        <h4>MONTHLY</h4>
                    </div>
                    <div className="flex-zero-auto">
                        <div className={`pricing-toggle-wrapper ${ !priceToggle ? 'annual' : '' }`} onClick={priceToggleClick}>
                            <span></span>
                        </div>
                    </div>
                    <div className="flex-zero-auto">
                        <h4>ANNUAL</h4>
                    </div>
                </div>

                <div className="d-flex pricing-table-wrapper flex-wrap">
                    <div className="col-3 pricing-table pricing-free d-flex flex-column">
                        <div className="pricing-table-header">
                            <Img cloudName={'siteseed'} imageName={'free-bg'} style={{ width: 'auto', height: 215 }} imgStyle={{ width: '100%', height: 215, objectFit: 'contain', objectPosition: 'bottom', display: 'block' }} fluid={{ maxWidth: 2000 }} />
                        </div>
                        <div className="pricing-table-label">
                            <h3>FREE</h3>
                        </div>
                        <div className="pricing-table-content d-flex flex-column flex-auto">
                            <h4 className="text-center price">$0</h4>
                            <span className="text-center permonth">&nbsp;</span>
                            <div className="pricing-features">
                                <ul>
                                    <li>All standard features</li>
                                    <li>Access to all our free templates</li>
                                    <li>Siteseed Branding</li>
                                    <li>Siteseed url</li>
                                    <li>No site export</li>
                                </ul>
                            </div>
                            <button className="btn-secondary">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-3 pricing-table pricing-individual d-flex flex-column">
                        <div className="pricing-table-header">
                            <Img cloudName={'siteseed'} imageName={'individual-bg'} style={{ width: 'auto', height: 215 }} imgStyle={{ width: '100%', height: 215, objectFit: 'contain', objectPosition: 'bottom', display: 'block' }} fluid={{ maxWidth: 2000 }} />
                        </div>
                        <div className="pricing-table-label">
                            <h3>INDIVIDUAL</h3>
                        </div>
                        <div className="pricing-table-content d-flex flex-column flex-auto">
                            <h4 className="text-center price">$11/$8</h4>
                            <span className="text-center permonth">per month</span>
                            <div className="pricing-features">
                                <ul>
                                    <li>All standard features</li>
                                    <li>Access to all our free templates</li>
                                    <li>No site export</li>
                                    <li>1 hostable site and 1 free domain</li>
                                </ul>
                            </div>
                            <button className="btn-secondary">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-3 pricing-table pricing-collaboration d-flex flex-column">
                        <div className="pricing-table-header">
                            <Img cloudName={'siteseed'} imageName={'collab-bg'} style={{ width: 'auto', height: 215 }} imgStyle={{ width: '100%', height: 215, objectFit: 'contain', objectPosition: 'bottom', display: 'block' }} fluid={{ maxWidth: 2000 }} />
                        </div>
                        <div className="pricing-table-label">
                            <h3>COLLABORATION</h3>
                        </div>
                        <div className="pricing-table-content d-flex flex-column flex-auto">
                            <h4 className="text-center price">$25/$20</h4>
                            <span className="text-center permonth">per month</span>
                            <div className="pricing-features"> 
                                <ul>
                                    <li>All standard features</li>
                                    <li>Advanced eCommerce features</li>
                                    <li>Access to all our free templates</li>
                                    <li>Real-time Collaboration. Invite collaborators to provide feedbacks on your site designs.</li>
                                    <li>Export up to 5 sites per month for WordPress and Shopify</li>
                                    <li>1 hostable site and 1 free domain</li>
                                </ul>
                            </div>
                            <button className="btn-secondary">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-3 pricing-table pricing-enterprise d-flex flex-column">
                        <div className="pricing-table-header">
                            <Img cloudName={'siteseed'} imageName={'enterprise-bg'} style={{ width: 'auto', height: 215 }} imgStyle={{ width: '100%', height: 215, objectFit: 'contain', objectPosition: 'bottom', display: 'block' }} fluid={{ maxWidth: 2000 }} />  
                        </div>
                        <div className="pricing-table-label">
                            <h3>ENTERPRISE</h3>
                        </div>
                        <div className="pricing-table-content d-flex flex-column flex-auto">
                            <h4 className="text-center price">$128/$100</h4>
                            <span className="text-center permonth">per month</span>
                            <div className="pricing-features">
                                <ul>
                                    <li>All standard features</li>
                                    <li>Advanced eCommerce features</li>
                                    <li>Access to all our free templates</li>
                                    <li>Real-time Collaboration. Invite collaborators to provide feedback on your site designs</li>
                                    <li>Unlimited site export to WordPress and Shopify</li>
                                    <li>3 hosted sites and 3 domains included</li>
                                </ul>
                            </div>
                            <button className="btn-secondary">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-12 pricing-addons text-center">
                        <h2>ADD INDIVIDUAL FEATURES AS YOU NEED THEM</h2>
                        <h5>Siteseed gives you the building tools, templates and total design ownership that allows you the freedom to grow wherever you go!</h5>
                        <h5>Choose a base package and add on a-la-carte features as you need them.</h5>

                        <div className="d-flex">
                            <div className="col-3 d-flex flex-column align-center">
                                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M75.302 0.698425C74.8033 0.199675 74.1098 -0.052075 73.4068 0.00967498L54.934 1.69117C54.0173 1.77667 53.2288 2.38468 52.9153 3.24917C52.6018 4.11368 52.8155 5.08742 53.4663 5.73817L58.506 10.7779L33.3168 35.9624C32.3905 36.8887 32.3905 38.3944 33.3168 39.3207L36.675 42.6789C37.606 43.6099 39.107 43.6099 40.038 42.6837L65.2273 17.4944L70.267 22.5342C70.9178 23.1849 71.8868 23.3987 72.756 23.0899C73.0885 22.9664 73.383 22.7764 73.6253 22.5342C74.01 22.1494 74.2618 21.6364 74.3093 21.0664L75.9908 2.59367C76.0525 1.89067 75.8008 1.19718 75.302 0.698425Z" fill="black"/>
                                <path d="M66.5 28.5V66.5H9.5V9.5H47.5V0H4.75C2.12325 0 0 2.12325 0 4.75V71.25C0 73.872 2.12325 76 4.75 76H71.25C73.872 76 76 73.872 76 71.25V28.5H66.5Z" fill="black"/>
                                </svg>
                                <h5>One-time site purchase<br/>Export any site design for any platform that accepts custom themes</h5>
                                <h5>$14 per export</h5>
                            </div>
                            <div className="col-3 d-flex flex-column align-center">
                                <Img cloudName={'siteseed'} imageName={'hosting-icon'} style={{ width: 'auto', height: 76, marginBottom: 25 }} imgStyle={{ width: 'auto', height: 76, display: 'block' }} fluid={{ maxWidth: 2000 }} />  
                                <h5>Additional site hosting. Hose as many sites as you desire on Siteseed.</h5>
                            </div>
                            <div className="col-3 d-flex flex-column align-center">
                                <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M83.6227 73.2177C78.8528 73.2177 74.8268 76.458 73.6182 80.8551H57.0202C56.0528 77.3357 53.2806 74.5598 49.7658 73.591V63.1001H77.0721C86.2371 63.1001 93.6932 55.6339 93.6932 46.4567C93.6932 37.703 86.9089 30.5061 78.329 29.8606C77.619 22.3617 71.2948 16.4764 63.6231 16.4764C62.12 16.4764 60.6498 16.6997 59.2474 17.1346C58.9685 7.63879 51.1672 0 41.6178 0C31.8926 0 23.9806 7.92244 23.9806 17.6606V18.8957H22.4107C10.2396 18.8957 0.337813 28.8106 0.337813 40.998C0.337813 53.1853 10.2396 63.1001 22.4106 63.1001H44.2652V73.591C40.7505 74.5596 37.9782 77.3357 37.0108 80.8551H20.382C19.1734 76.4582 15.1474 73.2177 10.3775 73.2177C4.65539 73.2177 0 77.8792 0 83.6088C0 89.3384 4.65539 94 10.3775 94C15.1474 94 19.1734 90.7598 20.382 86.3627H37.0108C38.2194 90.7598 42.2455 94 47.0154 94C51.7854 94 55.8114 90.7598 57.02 86.3627H73.618C74.8268 90.7598 78.8526 94 83.6227 94C89.3448 94 94 89.3386 94 83.6088C94 77.879 89.3448 73.2177 83.6227 73.2177ZM5.83846 40.998C5.83846 31.8478 13.2727 24.4035 22.4109 24.4035H29.4813V17.6606C29.4813 10.9594 34.9258 5.50781 41.618 5.50781C48.3101 5.50781 53.7546 10.9596 53.7546 17.6606V27.0155L58.1353 23.7866C59.735 22.6076 61.6328 21.9843 63.6233 21.9843C68.7357 21.9843 72.8948 26.1491 72.8948 31.268C72.8948 31.5937 72.8763 31.9323 72.8397 32.2741L72.514 35.3212H77.0721C83.2039 35.3212 88.1927 40.3166 88.1927 46.4567C88.1927 52.5969 83.2039 57.5921 77.0721 57.5921H22.4107C13.2725 57.5923 5.83846 50.1481 5.83846 40.998ZM10.3775 88.4922C7.68835 88.4922 5.50047 86.3015 5.50047 83.6088C5.50047 80.916 7.68835 78.7254 10.3775 78.7254C13.0667 78.7254 15.2543 80.916 15.2543 83.6088C15.2543 86.3015 13.0667 88.4922 10.3775 88.4922ZM47.0154 88.4922C44.3261 88.4922 42.1386 86.3015 42.1386 83.6088C42.1386 80.916 44.3263 78.7254 47.0154 78.7254C49.7045 78.7254 51.8922 80.916 51.8922 83.6088C51.8922 86.3015 49.7047 88.4922 47.0154 88.4922ZM83.6227 88.4922C80.9334 88.4922 78.7459 86.3015 78.7459 83.6088C78.7459 80.916 80.9336 78.7254 83.6227 78.7254C86.3118 78.7254 88.4995 80.916 88.4995 83.6088C88.4995 86.3015 86.3118 88.4922 83.6227 88.4922Z" fill="black"/>
                                </svg>
                                <h5>Additional domains. Grab as many custom domains as you need (or want to secure before someone else grabs theme).</h5>
                            </div>
                            <div className="col-3 d-flex flex-column align-center">
                                <Img cloudName={'siteseed'} imageName={'template'} style={{ width: 'auto', height: 76, marginBottom: 25 }} imgStyle={{ width: 'auto', height: 76, display: 'block' }} fluid={{ maxWidth: 2000 }} />
                                <h5>Premium design templates. Upgrade to a featured design template at any time within the app.</h5>
                                <h5>$49 per design</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-bottom">
                <Img cloudName={'siteseed'} imageName={'pricing-bottom'} style={{ width: '100%' }} imgStyle={{ width: '100%', display: 'block' }} fluid={{ maxWidth: 2000 }} /> 
            </div>
        <Footer />
        </>
    )
}
export default Pricing;