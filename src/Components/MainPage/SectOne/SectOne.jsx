import React from 'react'
import PriceList from '../PriceList/PriceList'
import SubT from '../SubTitle/SubT'
import Title from '../Title/Title'
import './SectOne'

const SectOne = (props) => {
    
    
    return (
        <div>
            <section class="page__section page__section__1">
                <div className="container">
                    <div className="first__price">
                        <Title name = 'Наш прайс-лист и Услуги' />
                        <SubT name = 'Основные Услуги'/>
                        <PriceList texts = {props.texts} amounts = {props.amounts} />
                    </div>
                </div>
            </section>
        </div>
    )
}



export default SectOne