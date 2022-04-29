import React from 'react'
import './contacts.css'

import mapPng from './images/Map.png'
import locationSvg from './images/location.svg'
import mailSvg from './images/mail.svg'
import phoneSvg from './images/phone.svg'
import timeSvg from './images/time.svg'

export default function Contacts(){
    return (
        <div className='contactsPage__block'>
            <div className='contactsPage__block__column'>
                <img src={mapPng} alt='map' />
            </div>
            <div className='contactsPage__block__column'>
                <div className='contactsPage__column__item'>
                    <img src={locationSvg} alt='location'/>
                    Россия, Республика крым, Симферопольский район, с. Первомайское, ул. Дьяченко, 5
                </div>
                <div className='contactsPage__column__item'>
                    <img src={timeSvg} alt='time' />
                    ПН-ПТ с 10:00 до 18:00
                </div>
                <div className='contactsPage__column__item'>
                    <img src={mailSvg} alt='time' />
                    pervomaika_5@mail.ru
                </div>
                <div className='contactsPage__column__item'>
                    <img src={phoneSvg} alt='phone' />
                    +7 365 232-32-81
                </div>
                <div className='contactsPage__column__item'>
                    <img src={phoneSvg} alt='phone' />
                    +7 978 000-25-19
                </div>
            </div>
        </div>
    )
}