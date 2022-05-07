import React from 'react'
import './aboutusMobile.css'

import barrelsPng from './images/barrels.png'
import cognacPng from './images/cognac.png'
import factory1Png from './images/factory1.png'
import factory2Png from './images/factory2.png'
import factory3Png from './images/factory3.png'
import fieldPng from './images/field.png'
import grapefieldPng from './images/grapefield.png'
import grapesPng from './images/grapes.png'
import mapPng from './images/map.png'
import mountainPng from './images/mountain.png'
import dashSvg from './images/dash.svg'

export default function AboutusMobile(){
    return (
        <div className='aboutusMobile'>
            <div className='aboutusMobile__founded'>
                <div className='aboutusMobile__founded titleMobile'>
                    Коньячный завод «Первомайский» был основан в 1958 году.
                    <img src={dashSvg} alt='dash'/>
                </div>
                <div className='aboutusMobile__founded imagesMobile'>
                    <img src={grapefieldPng} alt='grape field'/>
                    <img src={mapPng} alt='map'/>
                </div>
                <div className='aboutusMobile__founded textMobile'>
                    Завод расположен на юге России в селе Первомайское, Симферопольского района, Республики Крым и специализируется на переработке винограда, производстве виноградных виноматериалов, выработке коньячных, винных, виноградных дистиллятов, а также производстве, розливе и реализации различных видов алкогольной продукции: коньяков, бренди, виноградной водки и других.
                </div>
            </div>
            <div className='aboutusMobile__factory'>
                <div className='aboutusMobile__factory titleMobile'>
                    Наш завод является предприятием полного технологического цикла производства.
                    <img src={dashSvg} alt='dash'/>
                </div>
                <div className='aboutusMobile__factory textMobile'>
                    Процесс производства продукции включает в себя: переработку винограда, получение виноматериалов, перекурку виноматериалов, получение и выдержку дистиллятов, приготовление купажей, обработку и розлив готовой продукции.
                </div>
                <div className='aboutusMobile__factory imagesMobile'>
                    <img src={factory1Png} alt='factory'/>
                    <img src={factory2Png} alt='factory'/>
                    <img src={factory3Png} alt='factory'/>
                </div>
            </div>
            <div className='aboutusMobile__alcohol'>
                <div className='aboutusMobile__alcohol titleMobile'>
                    Над составлением купажей коньяков, бренди, виноградной водки, на предприятии, трудятся лучшие в России купажисты, десятилетиями оттачивающие свое искусство.  
                    <img src={dashSvg} alt=''/>
                </div>
                <div className='aboutusMobile__alcohol imagesMobile'>
                    <img src={cognacPng} alt='cognac'/>
                </div>
                <div className='aboutusMobile__alcohol textMobile'>
                    Специалисты завода используют классическую технологию производства коньяков путем купажирования дистиллятов, выдержанных в эмалированных емкостях на дубовой клепке.
                    <br/> <br/>
                    Лучшие сортовые дистилляты крепостью 64–72% об. выдерживаются в дубовых бочках до достижения соответствующего возраста и органолептических показателей.
                </div>
                <div className='aboutusMobile__alcohol imagesMobile'>
                    <img src={barrelsPng} alt='barrels'/>
                </div>
            </div>
            <div className='aboutusMobile__gallery'>
                <div className='aboutusMobile__gallery titleMobile'>
                    Именно уникальной природе Симферопольского края,
                    в том числе, обязана своими уникальными качествами
                    и неповторимым вкусом, продукция коньячного завода «Первомайский».
                    <img src={dashSvg} alt='dash'/>
                </div>
                <div className='aboutusMobile__gallery textMobile'>
                    Симферополь расположен в особой заповедной зоне с мягким климатом
                    и умеренной влажностью воздуха, в которой сочетаются горные вершины
                    и равнинные низменности.
                </div>
                <div className='aboutusMobile__gallery imagesMobile'>
                    <img src={grapesPng} alt='grapes'/>
                    <img src={grapefieldPng} alt='grapefield'/>
                    <img src={mountainPng} alt='mountain'/>
                </div>
            </div>
            <div className='aboutusMobile__misson'>
                <div className='aboutusMobile__mission__title'>
                    НАША МИССИЯ
                    <img src={dashSvg} alt='dash' />
                </div>
                <div className='aboutusMobile__mission__text'>
                    Развивать культуру потребления качественного и в то же время доступного продукта на территории России.
                </div>
            </div>
        </div>
    )
}