import React, {useState, useEffect} from 'react'
import moment from "moment"
import Dropdown from 'react-bootstrap/Dropdown'

const RoadMap = ({ roadmap, roadmapCards }) => {
    const [filter, setFilter] = useState('All')
    const [roadMapList, setRoadMapList] = useState([])

    const setRoadMapData = () => {

        if( !roadmapCards ){ return; }

        const temp = []

        if( filter.toLowerCase() !== 'all' ){
            roadmapCards.forEach(function(item, index){
                if( item.column.title.toLowerCase() === filter.toLowerCase() ){
                    temp.push({ 'title': item.title, 'description': item?.description, 'objective': item.objective.title, 'created': item.created })
                }
            })
        }else{
            roadmapCards.forEach(function(item, index){
                temp.push({ 'title': item.title, 'description': item?.description, 'objective': item.objective.title, 'created': item.created })
            })
        }

        // Sort array from latest to oldest
        if( temp ) {
            temp.sort(function(a,b){
                return new Date(b.created) - new Date(a.created);
            });
        }
        setRoadMapList(temp)
    }

    useEffect(() => {
        setRoadMapData()
    }, [roadmapCards, filter])

    return (
        <>
            <div className="col-6 roadmap-api">
                <div className="col-wrapper">
                    <div className="d-flex justify-space-between roadmap-updates-heading">
                        <div>
                            <h3>Updates & Releases (Roadmap)</h3>
                            <p>We’re continually rolling out new changes. Stay up to date with the latest SiteSeed developments to see what features will be released soon.</p>
                        </div>
                        <div>
                            <a>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2526 1.52273L6.28418 8.49112L7.00725 9.21418L13.9774 2.24401V5.44318H15.0001V1.01136C15.0001 0.729091 14.7711 0.5 14.4888 0.5H10.057V1.52273H13.2526ZM11.7614 15.5001H1.875C0.840682 15.5001 0 14.6594 0 13.6251V3.73872C0 2.7044 0.840682 1.86372 1.875 1.86372H8.35227V2.88645H1.875C1.40523 2.88645 1.02273 3.26895 1.02273 3.73872V13.6251C1.02273 14.0949 1.40523 14.4774 1.875 14.4774H11.7614C12.2311 14.4774 12.6136 14.0949 12.6136 13.6251V7.14781H13.6364V13.6251C13.6364 14.6594 12.7957 15.5001 11.7614 15.5001Z" fill="#F17D53"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex justify-space-between roadmap-filters">
                        <div className="flex-auto">{ filter !== 'All' ? 'Updates by ' + filter : 'All Updates'}</div>
                        <div className="d-flex roadmap-filter-btn col-4 justify-space-end">
                            <span>Filtered by:</span>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="d-flex align-center">
                                    <span>{ filter }</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="animate slideIn">
                                    <Dropdown.Item href="#" onClick={() => {setFilter('All')}}>
                                        All
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => { setFilter('In progress') }}>
                                        In Progress
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => {setFilter('Up next')}}>
                                        Up Next
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => {setFilter('Future')}}>
                                        Future
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="roadmapList-wrapper">
                        {roadMapList.map((item, index) => (
                            <div className="roadmap-item" key={index}>
                                <h4>{ item.title }</h4>
                                { item.description && <p>{item.description}</p> }
                                <div className="meta-wrapper">
                                    <span>{ moment( item.created ).format("MMM DD, YYYY") }</span>
                                    <span> | { item.objective }</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoadMap;