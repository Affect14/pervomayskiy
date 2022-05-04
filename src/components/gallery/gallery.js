import React from 'react'
import './gallery.css'
import { useSelector } from 'react-redux'

import GalleryItem from '../gallery-item/galleryItem'

import Close from './images/close.png'


export default function Gallery(){
    const images = useSelector(state => state.galleryImages)

    function showFull(id){
        document.getElementById('showFull__img__noscale').innerHTML = 
                                                    `
                                                    <img src='${images[id].imgNoScale}' alt='gallery image' />
                                                    `
        document.getElementById('showFull').style.display = 'block'
    }

    function hideFull(){
        document.getElementById('showFull').style.display = 'none'
    }

    return (
        <div className='gallery'>
            <div id='showFull'>
                <div id='showFull__img'>
                    <div className='close_img'>    
                        <img src={Close} className='showFull__img__close' onClick={hideFull} alt='close'/>
                    </div>
                    <div id='showFull__img__noscale'>
                    </div>
                </div>
            </div>
            {
                images.map(item => {
                    return (
                        <GalleryItem item={item} key={item.id} clickShow={showFull} />
                    )
                })
            }
        </div>
    )
}