import React from 'react'
import './scss/bundle.scss'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Swip1 from '../../../../assets/slider__image/barber1.jpg'
import Swip2 from '../../../../assets/slider__image/barber2.jpg'
import Swip3 from '../../../../assets/slider__image/barber3.jpg'

const SwiperSliders = (props) => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            spaceBetween={50}
            initialSlide={1}
            
            pagination={{clickable: true}}
            
            className="image__slider mySwiper">
            <SwiperSlide className="image__slider__slide swiper-slide">

                <div className="image-slider__image">
                    <img src={Swip1} alt="Пример работы 1" />
                </div>

            </SwiperSlide>
            <SwiperSlide className="image__slider__slide swiper-slide">

                <div className="image-slider__image">
                    <img src={Swip2} alt="Пример работы 2" />
                </div>

            </SwiperSlide>
            <SwiperSlide className="image__slider__slide swiper-slide">

                <div className="image-slider__image">
                    <img src={Swip3} alt="Пример работы 3" />
                </div>

            </SwiperSlide>

        </Swiper>

    )
}


export default SwiperSliders


