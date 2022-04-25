import React from 'react'
import Title2 from './Title2'
import Swiper from './Swiper/Swiper'
import './SectThree.module.scss'

const SectThree = (props) => {
    return (
        <div>
            <section className="page__section page__section__3">
                <div className="container">
                    <Title2 name='Наши работы' />
                    <Swiper />
                </div>
            </section>
        </div>
    )
}

export default SectThree