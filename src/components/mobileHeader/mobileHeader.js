import React from 'react'
import logoSvg from './images/logo.svg'

import './mobileHeader.css'

import { Link } from 'react-router-dom'

import PopupSvg from './images/popup.svg'
import LocationSvg from './images/location.svg'
import MailSvg from './images/mail.svg'
import PhoneSvg from './images/phone.svg'
import Close from './images/close.svg'

export default function MobileHeader(){

    function showMenu(){
        var display = document.querySelector('.popup__menu').style.display
        if (display === 'none') {
            document.querySelector('.popup__menu').style.display = 'flex'
            document.querySelector('.popup').style.backgroundColor = '#C6B281'
            document.getElementById('imgPopup').src = Close
        }
        else { document.querySelector('.popup__menu').style.display = 'none'
                document.getElementById('imgPopup').src = PopupSvg
                document.querySelector('.popup').style.backgroundColor = '#B89F61' }
    }

    return(
        <div className='mobileHeader'>
            <div className='mobileLogoSvg'>
                <img src={logoSvg} alt='Logo' />
            </div>
            <div className='popup' onClick={showMenu}>
                <img src={PopupSvg} id='imgPopup' alt='popup'/>
            </div>
            <div className='popup__menu'>
                <div className='popup__menu__numbers'>
                    <div className='popup__menu__number'>
                        <img src={PhoneSvg} alt='number'/> +7 365 232-32-81
                    </div>
                    <div className='popup__menu__number'>
                        <img src={PhoneSvg} alt='number'/> +7 978 000-25-19
                    </div>
                </div>
                <div className='popup__menu__urls'>
                    <Link to='/' onClick={showMenu}>ГЛАВНАЯ</Link>
                    <Link to='/about' onClick={showMenu}>О ЗАВОДЕ</Link>
                    <Link to='/production' onClick={showMenu}>ПРОДУКЦИЯ</Link>
                    <Link to='/gallery' onClick={showMenu}>ГАЛЕРЕЯ</Link>
                    <Link to='/vacancies' onClick={showMenu}>ВАКАНСИИ</Link>
                    <Link to='/contacts' onClick={showMenu}>КОНТАКТЫ</Link>
                </div>
                <div className='popup__menu__contacts'>
                    <div className='popup__menu__contact'>
                        <img src={MailSvg} alt='mail'/> pervomaika_5@mail.ru
                    </div>
                    <div className='popup__menu__contact'>
                        <img src={LocationSvg} alt='location'/> Россия, Республика Крым, Симферопольский район, с. Первомайское, ул. Дьяченко, 5
                    </div>
                </div>
            </div>
        </div>
    )
}