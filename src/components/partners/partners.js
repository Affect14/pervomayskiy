import React from 'react'
import './partners.css'

import magnitSvg from './images/magnit.svg'

export default function Partners(){
    return(
        <div className='partners'>
            <div className='partners__text'>
                НАШИ ПАРТНЁРЫ
            </div>
            <div className='partners__image'>
                <img src={magnitSvg} alt='magnit'/>
            </div>
        </div>
    )
}