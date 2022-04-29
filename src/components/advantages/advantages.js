import React from 'react'
import { Link } from 'react-router-dom'
import './advantages.css'

import slide1 from './images/slide1.png'
import slide2 from './images/slide2.png'
import slide3 from './images/slide3.png'
import buttonNext from './images/buttonNext.png'
import buttonPrev from './images/buttonPrev.png'
import roundActive from './images/roundActive.svg'
import roundNonActive from './images/roundNonActive.svg'




export default function Advantages(){
        
    let offset = 0;

        function slideNext(){
            offset += 720
            if (offset > 1440){
                offset = 0;
            }
            document.querySelector('.slider-line').style.left = -offset + 'px';
            if (offset === 0){
                document.querySelectorAll('.dot')[0].src = roundActive
                document.querySelectorAll('.dot')[1].src = roundNonActive
                document.querySelectorAll('.dot')[2].src = roundNonActive
                document.querySelector('.advantages__title__text').innerHTML = 'ТРАДИЦИИ ПРОИЗВОДСТВА'
                document.querySelector('.advantages__description').innerHTML = 'Коньячный «завод Первомайский» имеет богатую историю, бесценный опыт и уникальные традиции производства виноматериалов, дистиллятов и высококачественной алкогольной продукции.'
            } else if (offset === 720){
                document.querySelectorAll('.dot')[0].src = roundNonActive
                document.querySelectorAll('.dot')[1].src = roundActive
                document.querySelectorAll('.dot')[2].src = roundNonActive
                document.querySelector('.advantages__title__text').innerHTML = 'ВЫГОДНЫЕ ЦЕНЫ'
                document.querySelector('.advantages__description').innerHTML = 'Современное оборудование, бережное отношение и профессиональный подход к производству алкогольной продукции позволяет поддерживать и предлагать нашим клиентам наиболее выгодные цены на продукцию завода.'
            } else if (offset === 1440 ){
                document.querySelectorAll('.dot')[0].src = roundNonActive
                document.querySelectorAll('.dot')[1].src = roundNonActive
                document.querySelectorAll('.dot')[2].src = roundActive
                document.querySelector('.advantages__title__text').innerHTML = 'УНИКАЛЬНЫЕ КАЧЕСТВА'
                document.querySelector('.advantages__description').innerHTML = 'Своими уникальными качествами и неповторимым вкусом напитки коньячного «завода Первомайский» обязаны не только современному оборудованию, но и уникальной природе Симферопольского района.'
            }
        }


        function slidePrev(){
            offset -= 720
            if (offset < 0){
                offset = 1440;
            }
            document.querySelector('.slider-line').style.left = -offset + 'px';
            if (offset === 0){
                document.querySelectorAll('.dot')[2].src = roundNonActive
                document.querySelectorAll('.dot')[1].src = roundNonActive
                document.querySelectorAll('.dot')[0].src = roundActive
                document.querySelector('.advantages__title__text').innerHTML = 'ТРАДИЦИИ ПРОИЗВОДСТВА'
                document.querySelector('.advantages__description').innerHTML = 'Коньячный «завод Первомайский» имеет богатую историю, бесценный опыт и уникальные традиции производства виноматериалов, дистиллятов и высококачественной алкогольной продукции.'
            } else if (offset === 720){
                document.querySelectorAll('.dot')[2].src = roundNonActive
                document.querySelectorAll('.dot')[1].src = roundActive
                document.querySelectorAll('.dot')[0].src = roundNonActive
                document.querySelector('.advantages__title__text').innerHTML = 'ВЫГОДНЫЕ ЦЕНЫ'
                document.querySelector('.advantages__description').innerHTML = 'Современное оборудование, бережное отношение и профессиональный подход к производству алкогольной продукции позволяет поддерживать и предлагать нашим клиентам наиболее выгодные цены на продукцию завода.'
            } else if (offset === 1440){
                document.querySelectorAll('.dot')[2].src = roundActive
                document.querySelectorAll('.dot')[1].src = roundNonActive
                document.querySelectorAll('.dot')[0].src = roundNonActive
                document.querySelector('.advantages__title__text').innerHTML = 'УНИКАЛЬНЫЕ КАЧЕСТВА'
                document.querySelector('.advantages__description').innerHTML = 'Своими уникальными качествами и неповторимым вкусом напитки коньячного «завода Первомайский» обязаны не только современному оборудованию, но и уникальной природе Симферопольского района.'

            }
        }
    

    return (
        <div className='advantages'>
            <div className="slider">
                <div className="slider-line">
                    <img src={slide1} alt="slide"/>
                    <img src={slide2} alt="slide"/>
                    <img src={slide3} alt="slide"/>
                </div>
            </div>
            <div className='advantages__column'>
                <div className='advantages__title'>
                    <div className='advantages__title__top'>
                        Наши преимущества
                    </div>
                    <div className='advantages__title__text'>
                        ТРАДИЦИИ ПРОИЗВОДСТВА
                    </div>
                </div>
                <div className='advantages__description'>
                    Коньячный «завод Первомайский» имеет богатую историю, бесценный опыт и уникальные традиции производства виноматериалов, дистиллятов и высококачественной алкогольной продукции.
                </div>
                <Link to='./about'><button className='more'>ПОДРОБНЕЕ О ЗАВОДЕ</button></Link>
                <div className='advantages__buttons'>
                    <img src={buttonPrev} className='sliderPrev arrow' onClick={() => slidePrev()} alt='previous'/>
                    <img src={roundActive} className='dot' alt='dot'/>
                    <img src={roundNonActive} className='dot' alt='dot'/>
                    <img src={roundNonActive} className='dot' alt='dot'/>
                    <img src={buttonNext} className='sliderNext arrow' onClick={() => slideNext()} alt='next'/>
                </div>
            </div>
            
        </div>
        )
    
}