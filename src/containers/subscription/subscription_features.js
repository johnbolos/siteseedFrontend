import React, { useState, useEffect } from 'react'

const SubscriptionFeature = ({ features }) => {
    const [feature, setFeature] = useState([])

    useEffect(() => {
        if( features !== '' ){
            setFeature( features.split(',') )
        }
    }, [features])

    return (
        <div className="other-plan-features d-flex flex-wrap">
            { feature?.map((item, index) => (
                <div className="d-flex col-12 other-plan-features-item pb-2" key={index}>
                    <span className="icon-Tick turq"></span>
                    <span>{ item }</span>
                </div>
            )) }
        </div>
    )
}

export default SubscriptionFeature;