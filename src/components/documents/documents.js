import React from 'react'
import './documents.css'
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';

export default function Documents(){
    
    function fillBlock(event){
        event.target.parentNode.parentNode.style.background = "rgba(255, 255, 255, 1)"
    }

    function opacityBlock(event){
        event.target.parentNode.parentNode.style.background = "rgba(255, 255, 255, 0.6)"
    }

    return (
        <div className='documents'>
            <div className='documents__title'>
                ДОКУМЕНТЫ
            </div>
            { useSelector(state=> state.isMobile) ? <>
                <div className='documents__items'>
                    <Swiper
                        modules={[Pagination]}
                        centeredSlides={true}
                        pagination={{ clickable: true }}>
                        <SwiperSlide>
                            <div className='documents__item'>
                                <div className='documents__item__title'>
                                    Свидетельство о регистрации
                                </div>
                                <div className='documents__item__button' >
                                    <button onMouseOut={(event => opacityBlock(event))} onMouseOver={(event) => fillBlock(event)} >СМОТРЕТЬ</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='documents__item'>
                                <div className='documents__item__title'>
                                    Свидетельство о регистрации
                                </div>
                                <div className='documents__item__button' >
                                    <button onMouseOut={(event => opacityBlock(event))} onMouseOver={(event) => fillBlock(event)} >СМОТРЕТЬ</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='documents__item'>
                                <div className='documents__item__title'>
                                    Свидетельство о регистрации
                                </div>
                                <div className='documents__item__button' >
                                    <button onMouseOut={(event => opacityBlock(event))} onMouseOver={(event) => fillBlock(event)} >СМОТРЕТЬ</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </> 
            :
            <div className='documents__items'>
                <div className='documents__item'>
                    <div className='documents__item__title'>
                        Свидетельство о регистрации
                    </div>
                    <div className='documents__item__button' >
                        <button onMouseOut={(event => opacityBlock(event))} onMouseOver={(event) => fillBlock(event)} >СМОТРЕТЬ</button>
                    </div>
                </div>
                <div className='documents__item'>
                <div className='documents__item__title'>
                        Устав
                    </div>
                    <div className='documents__item__button'>
                        <button onMouseOut={(event => opacityBlock(event))} onMouseOver={(event) => fillBlock(event)}>СМОТРЕТЬ</button>
                    </div>
                </div>
                <div className='documents__item'>
                    <div className='documents__item__title'>
                        Лицензия
                    </div>
                    <div className='documents__item__button'>
                        <button onMouseOut={(event => opacityBlock(event))} onMouseOver={(event) => fillBlock(event)}>СМОТРЕТЬ</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}