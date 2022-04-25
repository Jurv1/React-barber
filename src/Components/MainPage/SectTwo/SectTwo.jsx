import React from 'react'
import PriceText from '../PriceRow/PriceText/PriceText'
import PriceAmount from '../PriceRow/PriceAmount/PriceAmount'
import SubT from '../SubTitle/SubT'

export const SectTwo = (props) => {
    let textElements = props.texts.map(i => <PriceText text={i.text} key = {i.id}/>)


    let amountsElements = props.amounts.map(i => <PriceAmount amount={i.amount} key = {i.id}/>)
    return (
        <div>
            <section className="page__section page__section__2">
                <div className="container">
                    <div className="second__price">
                        <SubT name='Дополнительные Услуги' />
                        <div className="price__list">
                            <div className="price__one price__row">
                                {textElements[5]}
                                {amountsElements[5]}
                            </div>
                            <div className="price__two price__row">
                                {textElements[6]}
                                {amountsElements[6]}
                            </div>
                            <div className="price__three price__row">
                                {textElements[7]}
                                {amountsElements[7]}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectTwo