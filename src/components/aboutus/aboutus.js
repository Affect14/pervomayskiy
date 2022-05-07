import React from 'react'
import './aboutus.css'

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

export default function Aboutus(){
    return(
        <div className='aboutus'>
            <div className='aboutus__factoryFounded'>
                <div className='aboutus__factoryFounded__column'>
                    <div className='aboutus__factoryFounded__column__title'>
                        Коньячный «завод Первомайский» был основан в 1958 году.<br/>
                        <img src={dashSvg} alt='dash' />
                    </div>
                    <div className='aboutus__factoryFounded__column__map'>
                        <img src={mapPng} alt='map' />
                    </div>
                </div>
                <div className='aboutus__factoryFounded__column'>
                    <img src={fieldPng} alt='field' />
                </div>
            </div>
            <div className='aboutus__location'>
                <div className='aboutus__location__text'>
                    Завод расположен на юге России в селе Первомайское, Симферопольского района, Республики Крым и специализируется на переработке винограда, производстве виноградных виноматериалов, выработке коньячных, винных, виноградных дистиллятов, а также производстве, розливе и реализации различных видов алкогольной продукции: коньяков, бренди, виноградной водки и других.
                </div>
            </div>
            <div className='aboutus__factoryInfo__imgaes'>
                <div className='aboutus__factoryInfo'>
                    <div className='aboutus__factoryInfo__column'>
                        <img src={factory1Png} alt='factory'/>
                    </div>
                    <div className='aboutus__factoryInfo__column'>
                        <div className='aboutus__factoryInfo__column__title'>
                            Наш завод является предприятием полного технологического цикла производства.<br/>
                            <img src={dashSvg} alt='dash' />
                        </div>
                        <div className='aboutus__factoryInfo__column__text'>
                            Процесс производства продукции включает в себя: переработку винограда, получение виноматериалов, перекурку виноматериалов, получение и выдержку дистиллятов, приготовление купажей, обработку и розлив готовой продукции.
                        </div>
                    </div>
                </div>
                <div className='aboutus__factoryImages'>
                    <img src={factory2Png} alt='factory' />
                    <img src={factory3Png} alt='factory' />
                </div>
            </div>
            <div className='aboutus__alcoholInfo'>
                <div className='aboutus__alcoholInfo__column'>
                    <div className='aboutus__alcoholInfo__column__title'>
                        Над составлением купажей коньяков, бренди, виноградной водки, на предприятии, трудятся лучшие в России купажисты, десятилетиями оттачивающие свое искусство. <br/>
                        <img src={dashSvg} alt='dash'/>
                    </div>
                </div>
                <div className='aboutus__alcoholInfo__column'>
                    <img src={cognacPng} alt='cognac' />
                </div>
            </div>
            <div className='aboutus__barrels'>
                <div className='aboutus__barrels__column'>
                    <img src={barrelsPng} alt='barrels' />
                </div>
                <div className='aboutus__barrels__column'>
                    <div className='aboutus__barrels__column__text'>
                        Специалисты завода используют классическую технологию производства коньяков путем купажирования дистиллятов, выдержанных в эмалированных емкостях на дубовой клепке.
                        <br/>
                        <br/>
                        Лучшие сортовые дистилляты крепостью 64–72% об. выдерживаются в дубовых бочках до достижения соответствующего возраста и органолептических показателей.
                    </div>
                </div>
            </div>
            <div className='aboutus__wild'>
                <div className='aboutus__wild__text'>
                    Именно уникальной природе Симферопольского края, в том числе, обязана своими уникальными качествами и неповторимым вкусом, продукция коньячного «завода Первомайский».<br/>
                    <img src={dashSvg} alt='dash'/>
                </div>
            </div>
            <div className='aboutus__gallery'>
                <div className='aboutus__gallery__column'>
                    <div className='aboutus__gallery__column__text'>
                        Симферополь расположен в особой заповедной зоне с мягким климатом
                        и умеренной влажностью воздуха, в которой сочетаются горные вершины
                        и равнинные низменности.
                    </div>
                    <div className='aboutus__gallery__column__image'>
                        <img src={grapesPng} alt='grapes'/>
                    </div>
                </div>
                <div className='aboutus__gallery__column'>
                    <img src={grapefieldPng} alt='grapefield'/>
                    <img src={mountainPng} alt='mountain' />
                </div>
            </div>
            <div className='aboutus__mission'>
                <div className='aboutus__mission__title'>
                    <img src={dashSvg} alt='dash' />
                    НАША МИССИЯ
                    <img src={dashSvg} alt='dash' />
                </div>
                <div className='aboutus__mission__text'>
                    Развивать культуру потребления качественного и в то<br/> же время доступного продукта на территории России.
                </div>
            </div>
        </div>
    )
}