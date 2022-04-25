import React from 'react'
import './PriceText'

const PriceText = (props) => {
    return (
        <div>
            <div className="price__text">
                {props.text}
            </div>
        </div>
    )
}

export default PriceText