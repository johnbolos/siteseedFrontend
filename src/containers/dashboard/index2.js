import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import Request from '../../request'
import _ from 'lodash'
import Img from 'react-cloudinary-lazy-image'
import { getPushPathWrapper } from "../../routes"
import { showToast } from "../../components/utils"
import { hideLoader, showLoader } from "../../reducers/actions"
import { setGeneralData, setUser } from "../../reducers/actions/userActions"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { apiUrl } from "../../settings"
import Icons from "../../assets/Icons"

// custom components
import NameYourSite from './components/nameYourSite'
import RoadMaps from './components/roadmapData'
import SiteData from './components/siteData'
import LoggedinHeader from '../../layout/loggedinLayouts/header'

import './index.scss'

const DashboardNew = () => {
    const dispatch = useDispatch();
    const [roadMapData, setRoadMapData] = useState(null)
    const [roadMapCardsData, setRoadMapCardsData] = useState(null)
    const [resultItem, setResultItem] = useState([])
    const [templateData, setTemplateData] = useState([])

    const [showNameSite, setShowNameSite] = useState(false)

    const { currentUser, tokenInfo, generalData, loading } = useSelector(
		(state) => ({
            loading: state.global.loading,
			currentUser: state.global.currentUser,
			tokenInfo: state.global.tokenInfo,
            generalData: state.global.generalData
		})
	)

    const formatResult = (item) => {
        return (
          <div style={{ maxWidth: '350px' }}>
            <h4 style={{ display: 'block', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#281C73', whiteSpace: 'normal' }}>{item.name}</h4>
            <p style={{ display: 'block', textAlign: 'left', opacity: '0.5', fontSize: '11px', whiteSpace: 'normal' }}>{item.description}</p>
          </div>
        )
    }

    useEffect(() => {
        async function fetchData(){
            if( tokenInfo.access_token ){
                dispatch(showLoader())

                const apiRequest = await Request.dashboard()

                dispatch(hideLoader())
                if (apiRequest.messageType && apiRequest.messageType == 'error') {
                    showToast({ type: 'error', message: 'Unable to fetch dashboard data, Try Relogging' })
                    return
                }
                
                dispatch( setGeneralData( apiRequest.data ) )
            }else{
                showToast({ type: 'error', message: 'Unable to fetch dashboard data, Try Relogging' })
                return
            }
        }

        async function roadMapCardsData(){
            const apiRequest = await Request.roadmapCards()
            dispatch(showLoader())
          
            if( apiRequest.messageType && apiRequest.messageType == 'error' ){
                showToast({ type: 'error', message: 'Unable to fetch roadmap data.' })
                return
            }

            dispatch(hideLoader())
            setRoadMapCardsData( apiRequest.roadmap_cards )
            
            if( apiRequest?.roadmap_cards ){
                var temp = []

                apiRequest.roadmap_cards.map(function(item){
                    temp.push({'id': item.id, 'name': item.title, 'description': item.description ? item.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate risus eget lectus vehicula, eget.'})
                })
    
                setResultItem(temp)
            }
            
        }

        async function getTemplateData(){
            const apiRequest = await Request.getTemplates()
            
            if( apiRequest.messageType && apiRequest.messageType == 'error' ){
                showToast({ type: 'error', message: 'Unable to fetch template data.' })
                return
            }

            setTemplateData( apiRequest.templates )
        }

        async function getProfile (){
            dispatch(showLoader())
            const apiRequest = await Request.getProfile()
            dispatch(hideLoader())
            
            if (apiRequest.messageType && apiRequest.messageType == 'error') {
                showToast({ type: 'error', message: apiRequest.details || 'Unable to fetch profile data, Try Relogging' })
                return
            }
    
            let profileInfo = apiRequest.user_profile
            dispatch(setUser({
                ...profileInfo,
                profile_picture: apiUrl + profileInfo.profile_picture,
            }))
        }

        getTemplateData()
        roadMapCardsData()
        fetchData()
        
    },[tokenInfo])

    const createNewSite = () => {
        if( generalData?.total_user_sites < generalData?.total_sites ){
            setShowNameSite(true)
        }else{
            showToast({ type: 'error', message: 'Maximum Limit Reached! Please upgrade your plan.' })
            return
        }
    }

    return (
        <>
            <LoggedinHeader />
            {/* Modals */}
            <NameYourSite show={showNameSite} setShow={setShowNameSite} />
            {
                loading && <div className={'backdrop-loading'}>
                    <Icons.Loading style={{ width: '70px', height: '70px' }} className={'searchLoading'} />
                </div>
            }

            <div className="loggedin-content-container">
                <div className="container flex-column">
                    <h1 className="dashboard-greetings">Hey there, {currentUser.display_name || currentUser.first_name}!</h1>
                    <div className="how-can-we-help pos-relative">
                        <Img cloudName={'siteseed'} imageName={'dashboard-bg'} style={{ width: 732, height: 'auto' }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 740 }} />
                        <div className="d-flex justify-space-between heading-and-search align-flex-start">
                            <h2>How can we help you today?</h2>
                            <div className="flex-auto searchAutocomplete">
                            <ReactSearchAutocomplete
                                items={resultItem}
                                autoFocus
                                formatResult={formatResult}
                            />
                            </div>
                            {/* <form>
                                <input type="text" name="search" placeholder="Search something..."/>
                                <button type="submit">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_34_2089)">
                                        <path d="M7.92682 0C3.55609 0 0 3.55609 0 7.92682C0 12.2978 3.55609 15.8536 7.92682 15.8536C12.2978 15.8536 15.8536 12.2978 15.8536 7.92682C15.8536 3.55609 12.2978 0 7.92682 0ZM7.92682 14.3903C4.36293 14.3903 1.46341 11.4908 1.46341 7.92686C1.46341 4.36296 4.36293 1.46341 7.92682 1.46341C11.4907 1.46341 14.3902 4.36293 14.3902 7.92682C14.3902 11.4907 11.4907 14.3903 7.92682 14.3903Z" fill="white"/>
                                        <path d="M17.7857 16.751L13.5906 12.5558C13.3047 12.27 12.8418 12.27 12.5559 12.5558C12.2701 12.8414 12.2701 13.3049 12.5559 13.5905L16.7511 17.7856C16.894 17.9285 17.0811 18 17.2684 18C17.4555 18 17.6428 17.9285 17.7857 17.7856C18.0716 17.5 18.0716 17.0366 17.7857 16.751Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_34_2089">
                                                <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </form> */}
                        </div>
                        <div className="d-flex align-flex-end justify-space-between">
                            <div className="how-can-we-help-description">
                                <p><b>Our team can help.</b> We offer everything to help you customize an advanced site, get more leads, and promote your business.</p>
                                <button className="btn-secondary btn-logged-in">Learn More</button>
                            </div>
                            <div className="visual-watering">
                                <Img cloudName={'siteseed'} imageName={'girl-watering'} style={{ width: 172, height: 'auto' }} imgStyle={{ height: 'auto' }} fluid={{ maxWidth: 172 }} />
                            </div>
                        </div>
                    </div>

                    {/* My Site */}
                    <div className="d-flex justify-space-between my-site align-flex-start">
                        <div>
                            <h2>My Sites</h2>
                            <p>Below you’ll find all of the sites you have created and their status. <br />Select a site to view or edit.</p>
                        </div>
                        <div>
                            <button onClick={() => createNewSite() }  className="btn-primary">CREATE A NEW SITE</button>
                        </div>
                    </div>

                    {/* Site Data */}
                    <div className="d-flex flex-wrap my-site-data">
                        { generalData?.user_sites?.length !== 0 ?
                            generalData?.user_sites?.map((item, index) => (
                                <SiteData siteData={item} templateData={templateData} key={index} />
                            ))
                            :
                            <div className="col-4">
                                <div className="col-wrapper nositedata text-center">
                                    <svg viewBox="0 0 210 297" >
                                        <path d="m16.9 279.4c-3.2-0.7-5.4-2.2-6.5-4.5-0.5-1-0.5-2.2-0.6-100.2l-0.1-99.2 0.5-1.5c0.7-1.8 2.2-3.5 4.2-4.4l1.5-0.7 21.3-0.1 21.3-0.1 0.1-21.5 0.1-21.5 0.6-1.1c0.9-1.8 2.1-2.9 3.7-3.7l1.5-0.7h66.9 66.9l1.5 0.7c1.6 0.8 2.8 2 3.7 3.7l0.6 1.1v99.8 99.8l-0.7 1.4c-0.4 0.7-1.3 1.8-1.9 2.4-2.3 2-1.2 1.9-24.7 1.9h-21l0 20.1c0 12.5-0.1 20.7-0.3 21.8-0.4 2.7-1.7 4.8-3.8 6.2l-1.1 0.7-66 0c-55 0-66.3-0.1-67.7-0.4zm121.6-16.5 0.8-0.8v-15.5-15.5l-9 0.1-9 0.1-1.7-0.8c-1.5-0.8-4.3-3.5-30.7-30.1C68.1 179.2 59.7 170.5 59.2 169.6L58.6 168.4 58.4 126.8 58.3 85.1H43c-14.2 0-15.3 0-16 0.5-0.4 0.3-0.8 0.8-1 1.1-0.2 0.4-0.2 33-0.2 87.8 0 93.7-0.1 87.9 1.3 88.7 0.5 0.3 10.5 0.4 55.6 0.4l55 0zm47.8-48.1c1.9-0.8 1.7 7.5 1.7-89.3V38.1L187.3 37.2 186.5 36.4H131.3 76.1l-0.8 0.9-0.8 0.9v64 64l29.4 0.1 29.4 0.1 1.3 0.7c1.7 0.9 3.1 2.4 3.9 4.1l0.6 1.3 0.1 21.4 0.1 21.4h23.1c19.3 0 23.2-0.1 24-0.4zm-57.1-65.1c-3.6-1.2-5.9-4.3-5.9-7.9 0-3 1.7-5.8 4.4-7.2 1.2-0.6 1.7-0.7 3.6-0.7 1.9 0 2.4 0.1 3.6 0.7 7.3 3.8 5 14.8-3.2 15.2-1 0-2.2 0-2.5-0.1zm0.4-32.1c-2.5-0.7-4.3-2.1-5.5-4.5l-0.9-1.8V85.5c0-29.1-0.1-27.4 2-29.8 1.6-1.8 3.6-2.7 6.1-2.7 4.3 0 7.3 2.7 8 7.1 0.2 1 0.2 11.3 0.2 26.4l-0.1 24.8-0.7 1.5c-0.9 2-2.1 3.3-3.8 4.1-1.5 0.7-4 1-5.3 0.7zm-6.9 66.2c-0.8-1.6-0.5-1.6-16.9-1.5l-15 0.1 16.1 16.3 16.1 16.3 0.1-15.2c0.1-13.2 0-15.3-0.3-15.9z" strokeWidth="0.3"></path>
                                    </svg>
                                    <span>No Sites Created Yet!</span>
                                </div>
                            </div>
                        }

                        {/* Static Data 3 */}
                        <div className="col-4">
                            <div className="col-wrapper start-now">
                                <Img cloudName={'siteseed'} imageName={'hire-editor'} style={{ width: 'auto', height: 'auto' }} imgStyle={{ height: 'auto', display: 'block' }} fluid={{ maxWidth: 1000 }} />
                                <div className="hire-editor-specialist">
                                    <h2>Hire an Expert</h2>
                                    <p>Get matched with one of our resident pros who can help you design, develop, or market your site!</p>
                                    <button>Schedule Now</button>
                                </div>
                                <Img cloudName={'siteseed'} imageName={'hire-specialist-gardener'} style={{ width: 'auto', height: 'auto' }} imgStyle={{ height: 'auto', display: 'block', maxWidth: 132 }} fluid={{ maxWidth: 132 }} />
                            </div>
                        </div>
                    </div>

                    {/* RoadMAp API and Account Plan Subscription */}
                    <div className="d-flex flex-wrap roadmap-account-subscription">
                        {/* RoadMAp API Here */}
                        <RoadMaps roadmap={roadMapData} roadmapCards={roadMapCardsData} />

                        {/* Account Plan Subscription Here */}
                        <div className="col-6 account-subscription">
                            <div className="col-wrapper">
                                <div className="d-flex justify-space-between account-subscription-heading">
                                    <div className="">
                                        <h3>Account Plan & Subscription</h3>
                                        <p>{generalData?.active_user_plan?.description}</p>
                                        <p><span>Current Plan : </span><span>{generalData?.active_user_plan?.name}</span></p>
                                    </div>
                                    <div>
                                        <a href="">
                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.2526 1.52273L6.28418 8.49112L7.00725 9.21418L13.9774 2.24401V5.44318H15.0001V1.01136C15.0001 0.729091 14.7711 0.5 14.4888 0.5H10.057V1.52273H13.2526ZM11.7614 15.5001H1.875C0.840682 15.5001 0 14.6594 0 13.6251V3.73872C0 2.7044 0.840682 1.86372 1.875 1.86372H8.35227V2.88645H1.875C1.40523 2.88645 1.02273 3.26895 1.02273 3.73872V13.6251C1.02273 14.0949 1.40523 14.4774 1.875 14.4774H11.7614C12.2311 14.4774 12.6136 14.0949 12.6136 13.6251V7.14781H13.6364V13.6251C13.6364 14.6594 12.7957 15.5001 11.7614 15.5001Z" fill="#F17D53"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap account-subscription-footer">
                                    <div className="col-6">
                                        <h3>Enjoy All of Our Incredible Benefits</h3>
                                        <p>You can change or cancel your plan at any time in your account setting.</p>
                                    </div>
                                    <div className="col-6">
                                        <h4>What's included?</h4>
                                        {generalData?.active_user_plan?.features}
                                        {/* <ul>
                                            <li>All functionality</li>
                                            <li>Export upto 5 sites per month (Wordpress theme-no Shopify)</li>
                                            <li>1 hostable site and 1 free domain</li>
                                            <li>All features (No e-Commerce)</li>
                                        </ul> */}
                                    </div>
                                    <div className="col-12">
                                        <button>UPGRADE YOUR PLAN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNew)