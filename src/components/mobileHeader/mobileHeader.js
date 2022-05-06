import React from 'react'
import logoSvg from './images/logo.svg'

import './mobileHeader.css'

import PopupSvg from './images/popup.svg'

export default function MobileHeader(){
    return(
        <div className='mobileHeader'>
            <div className='mobileLogoSvg'>
                <img src={logoSvg} alt='Logo' />
            </div>
            <div className='popup'>
                <img src={PopupSvg} alt='popup'/>
            </div>
        </div>
    )
}