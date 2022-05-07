import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Link} from 'react-router-dom'
import 'swiper/css';

import 'swiper/css/navigation';
import './advantagesMobile.css'

import DashSvg from './images/Dash.svg'
import slide1 from './images/slide1.png'
import slide2 from './images/slide2.png'
import slide3 from './images/slide3.png'
import buttonNext from './images/buttonNext.png'
import buttonPrev from './images/buttonPrev.png'
import roundActive from './images/roundActive.svg'
import roundNonActive from './images/roundNonActive.svg'

export default function AdvantagesMobile(){
    const prevRef = React.useRef(null);
    const nextRef = React.useRef(null);
    return(
        <div className='advantagesMobile'>
            <div className='advantagesMobile__title'>
                Наши преимущества
                
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }} >
                <SwiperSlide>
                    <div className='advantagesMobile__item__title'>
                        ТРАДИЦИИ ПРОИЗВОДСТВА
                        <img src={DashSvg} alt=''/>
                    </div>
                    <div className='advantagesMobile__item__text'>
                        Коньячный завод «Первомайский» имеет богатую историю, бесценный опыт и уникальные традиции производства виноматериалов, дистиллятов и высококачественной алкогольной продукции.
                    </div>
                    <div className='advantagesMobile__item__image'>
                        <img src={slide1} alt='barrels'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='advantagesMobile__item__title'>
                        ВЫГОДНЫЕ ЦЕНЫ
                        <img src={DashSvg} alt=''/>
                    </div>
                    <div className='advantagesMobile__item__text'>
                        Современное оборудование, бережное отношение и профессиональный подход к производству алкогольной продукции позволяет поддерживать и предлагать нашим клиентам наиболее выгодные цены на продукцию завода.
                    </div>
                    <div className='advantagesMobile__item__image'>
                        <img src={slide2} alt='barrels'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='advantagesMobile__item__title'>
                        УНИКАЛЬНЫЕ КАЧЕСТВА
                        <img src={DashSvg} alt=''/>
                    </div>
                    <div className='advantagesMobile__item__text'>
                     Своими уникальными качествами и неповторимым вкусом напитки коньячного «завода Первомайский» обязаны не только современному оборудованию, но и уникальной природе Симферопольского района.
                    </div>
                    <div className='advantagesMobile__item__image'>
                        <img src={slide3} alt='barrels'/>
                    </div>
                </SwiperSlide>
                <Link to='./about'><button className='more'>ПОДРОБНЕЕ О ЗАВОДЕ</button></Link>
                <div className='navigationButtons'>
                    <div ref={prevRef} className='prev'><img src={buttonPrev} alt='next'/></div>
                    <div ref={nextRef} className='next'><img src={buttonNext} alt='next'/></div>
                </div>
            </Swiper>
        </div>
    )
}