import React from 'react'
import Title from '../Title/Title'
import Popup from './Popup/Popup'
import './SectFour'


const SectFour = (props) => {
    return (
        <div>
            <section className="page__section page__section__4">
                <Title name='Наше местоположение' />
                <Popup name = 'Узнай, где мы находимся' />


            </section>
        </div>
    )
}

export default SectFour