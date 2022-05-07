import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

import logoSvg from './images/Logo.svg'
import locationSvg from './images/location.svg'
import mailSvg from './images/mail.svg'
import phoneSvg from './images/phone.svg'
import timeSvg from './images/time.svg'

export default function Footer(){
    return (
        <div className='footer'>
            <div className='attention'>
                ВНИМАНИЕ! ЧРЕЗМЕРНОЕ УПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ
            </div>
            <div className='footer__main'>
                <div className='footer__main__logo'>
                    <img src={logoSvg} alt='logo'/>
                </div>
                <div className='footer__main__menu'>
                    <Link to='/'>ГЛАВНАЯ</Link>
                    <Link to='/about'>О ЗАВОДЕ</Link>
                    <Link to='/production'>ПРОДУКЦИЯ</Link>
                    <Link to='/gallery'>ГАЛЕРЕЯ</Link>
                    <Link to='/vacancies'>ВАКАНСИИ</Link>
                    <Link to='/contacts'>КОНТАКТЫ</Link>
                </div>
                <div className='footer__main__contacts'>
                    <div className='contacts__block'>
                        <div className='contacts__img'>
                            <img src={locationSvg} alt='location'/>
                        </div>
                        <div className='contacts__text'>
                        Россия, Республика Крым,
                        Симферопольский район
                        с. Первомайское, ул. Дьяченко, 5
                        </div>
                    </div>
                    <div className='contacts__block'>
                        <div className='contacts__img'>
                            <img src={timeSvg} alt='time'/>
                        </div>
                        <div className='contacts__text'>
                            ПН-ПТ с 10:00 до 18:00
                        </div>
                    </div>
                    <div className='contacts__block numbers__block'>
                        <div className='number'>
                            <div className='contacts__img'>
                                <img src={phoneSvg} alt='phone'/>
                            </div>
                            <div className='contacts__text'>
                                +7 365 232-32-81
                            </div>
                        </div>
                        <div className='number bottom'>
                            <div className='contacts__img'>
                                <img src={phoneSvg} alt='phone'/>
                            </div>
                            <div className='contacts__text'>
                                 +7 978 000-25-19
                            </div>
                        </div>
                    </div>
                    <div className='contacts__block'>
                        <div className='contacts__img'>
                            <img src={mailSvg} alt='mail'/>
                        </div>
                        <div className='contacts__text'>
                            pervomaika_5@mail.ru
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}