import React from 'react'
import './purchase.css'

import mapPng from './images/map.png'
import mapSvg from './images/map.svg'

export default function Purchase(){
    return (
        <div className='purchase'>
            <div className='purchase__title'>
            Где купить? У наших партнёров <br/>в регионах дистрибьюции 
            </div>
            <div className='purchase__map'>
                <img src={mapPng} alt='map'/>
            </div>
            <div className='purchase__locations'>
                <div className='purchase__locations__column'>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Амурская область
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Архангельская область
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Астраханская область 
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Брянская область
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Волгоградская область 

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Вологодская область
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Воронежская область
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Иркутская область

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Калининградская область 
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Камчатский край

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Краснодарский край 

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Ленинградская область
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Москва, Московская область
                    </div>
                </div>
                <div className='purchase__locations__column'>
                <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Мурманская область 
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Нижегородская область 
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Новосибирская область

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Омская область

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Оренбургская область

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Приморский край

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Псковская область

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Республика Башкортостан
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Республика Калмыкия 

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Республика Крым 

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Республика Мордовия

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Республика Саха (Якутия)
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Республика Татарстан

                    </div>
                </div>
                <div className='purchase__locations__column'>
                <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Республика Удмуртия

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Республика Чувашия

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Ростовская область 

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Санкт-Петербург
                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Самарская область

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Сахалинская область 

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Свердловская область

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Ставропольский край 

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Томская область

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Тюменская область

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>ХМАО

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Челябинская область

                    </div>
                    <div className='location__item'>
                        <img src={mapSvg} alt='map'/>Ярославская область
                    </div>
                </div>
            </div>
        </div>
    )
}