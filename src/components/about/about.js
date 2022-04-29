import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import alcoholJpg from './images/Alcohol.jpg'
import mapPng from './images/Map.png'
import dashSvg from './images/Dash.svg'

export default function About(){
    return (
        <div className='about'>
            <div className='description__about'>
                <div className='about__factory'>
                    <div className='title__about'>
                        <div className='title__text'>О нас </div>
                        <div className='title__dash'><img src={dashSvg} alt='dash'/></div>
                    </div>
                    Коньячный «завод Первомайский» был основан в 1958 году. Завод расположен на юге России в селе Первомайское, Симферопольского района, Республики Крым и специализируется на переработке винограда, производстве виноградных виноматериалов, выработке коньячных, винных, виноградных дистиллятов, а также производстве, розливе и реализации различных видов алкогольной продукции: коньяков, бренди, виноградной водки и других.
                </div>
                <div className='map'>
                    <img src={mapPng} alt='map'/>
                </div>
                <div className='alcohol'>
                    <img src={alcoholJpg} alt='alcohol'/>
                </div>
                <div className='about__technologies'>
                    Коньячный «завод Первомайский» – это не только современный производственный комплекс, оснащенный новейшим технологическим оборудованием, но и бережное отношение к традициям и культуре производства, уважение к знаниям, мудрости и опыту наших мастеров. Именно сочетание современных технологий производства алкогольной продукции, традиций винокурения и экспертизы лучших в России специалистов, позволяет нам производить продукцию, высокое качество которой ценят не только в Крыму, но и на всей территории России.
                </div>
            </div>
            <div className='about__button'>
                <Link to='/about'><button>ПОДРОБНЕЕ О ЗАВОДЕ</button></Link>
            </div>
        </div>
    )
}