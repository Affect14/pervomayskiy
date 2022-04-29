import React from 'react'
import './care.css'

import alcoholPng from './images/alcohol.png'
import arrowboxSvg from './images/arrowbox.svg'

export default function Care(){
    return(
        <div className='care'>
            <div className='care__title'>
                С заботой о  наших покупателях
            </div>
            <div className='care__block'>
                <div className='care__image'>
                    <img src={alcoholPng} alt='alcohol' />
                </div>
                <div className='care__column'>
                    <div className='care__column__text'>
                        Коньячный «завод Первомайский» работает строго в рамках федерального закона «О государственном регулировании производства и оборота этилового спирта, алкогольной и спиртосодержащей продукции и об ограничении потребления (распития) алкогольной продукции» от 22.11.1995 N 171-ФЗ (последняя редакция) и выпускает продукцию, качество которой соответствует всем российским стандартам.
                    </div>
                    <div className='care__column__button'>
                        <button className='care__button'> ПРОВЕРИТЬ ПОДЛИННОСТЬ ТОВАРА <img src={arrowboxSvg} alt='arrow'/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}