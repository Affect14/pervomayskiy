import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './header.css'
import phoneSvg from './images/phone.svg'
import mailSvg from './images/mail.svg'
import locationSvg from './images/location.svg'
import logoSvg from './images/Logo.svg'



export default function Header() {
    

    return (
        <div className='header'>
            <div className='column'>
                <div className='info left'>
                    <div className='location'>
                        <img src={locationSvg} alt="location" className='ico'/>
                    </div>
                    <div className='locationText'>
                        Россия, Республика Крым, Симферопольский район,
                        с. Первомайское, ул. Дьяченко, 5
                    </div>
                </div>
                <div className='tabs left'>
                    <div id='main'>
                        <Link to='/' >ГЛАВНАЯ</Link>
                    </div>
                    <div id='about'>
                    <NavLink to='/about'>О ЗАВОДЕ</NavLink>
                    </div>
                    <div id='production'>
                    <NavLink to='/production'>ПРОДУКЦИЯ</NavLink>
                    </div>
                </div>
            </div>
            <div className='logoSvg'>
                <img src={logoSvg} alt='Logo' />
            </div>
            <div className='column'>
                <div className='info contacts right'>
                    <div className='mail'>
                        <div className='mailSvg'>
                            <img src={mailSvg} alt="mail" className='ico'/>
                        </div>
                        <div className='mailText'>
                            pervomaika_5@mail.ru
                        </div>
            
                    </div>
                    <div className='phones'>
                        <div className='phoneNumber'>
                            <img src={phoneSvg} alt='phone' className='ico'/>
                            +7 365 232-32-81
                        </div>
                        <div className='phoneNumber'>
                            <img src={phoneSvg} alt='phone' className='ico'/>
                            +7 978 000-25-19
                        </div>
                    </div>
                </div>
                <div className='tabs right'>
                    <div id='gallery'>
                    <NavLink to='/gallery'>ГАЛЕРЕЯ</NavLink>
                    </div>
                    <div id='vacancies'>
                    <NavLink to='/vacancies'>ВАКАНСИИ</NavLink>
                    </div>
                    <div id='contacts'>
                    <NavLink to='/contacts'>КОНТАКТЫ</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}