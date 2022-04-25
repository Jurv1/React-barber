import React from 'react'
import PriceText from '../PriceRow/PriceText/PriceText'
import PriceAmount from '../PriceRow/PriceAmount/PriceAmount'
import './PriceList'

const PriceList = (props) => {

    let textElements = props.texts.map(i => <PriceText text={i.text} />)

    let amountsElements = props.amounts.map(i => <PriceAmount amount={i.amount} />)

    return (
        <div className="price__list">
            <div className="price__one price__row">
                {textElements[0]}
                {amountsElements[0]}
            </div>
            <div className="price__two price__row">
                {textElements[1]}
                {amountsElements[1]}
            </div>
            <div className="price__three price__row">
                {textElements[2]}
                {amountsElements[2]}
            </div>
            <div className="price__four price__row">
                {textElements[3]}
                {amountsElements[3]}
            </div>
            <div className="price__five price__row">
                {textElements[4]}
                {amountsElements[4]}
            </div>
        </div>
    )
}

export default PriceList