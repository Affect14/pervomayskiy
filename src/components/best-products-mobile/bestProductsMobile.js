import React from 'react'
import './bestProductsMobile.css'
import ProductsItem from '../products-item/produtsItem'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';

import dashSvg from './images/Dash.svg'

export default function BestProductsMobile(){
    var images = useSelector(state => state.alcImages)
    images = images.filter(item => item.id === 5 || item.id === 6 || item.id === 7 || item.id === 8 )
    return (
        <div className='bestProductsMobile'>
            <div className='Mobile_products__title'>
                <div className='Mobile_products__title__top'>
                    Наша гордость
                </div>
                <div className='Mobile_products__title__text'>
                    Лучшие товары
                    <img src={dashSvg} alt='dash'/>
                </div>
            </div>
            <div className='itemsMobile'>
                <Swiper
                modules={[Pagination]}
                centeredSlides={true}
                pagination={{ clickable: true }}
                
                >
                { 
                    images.map(item =>  {
                    return (
                    <SwiperSlide key={item.id}><div className='card' >
                        <ProductsItem item={item} />
                    </div></SwiperSlide>
                    )
                }) }
                </Swiper>
            </div>
        </div>
    )
}