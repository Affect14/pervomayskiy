import React from 'react'
import './gallery.css'
import { useSelector } from 'react-redux'

import GalleryItem from '../gallery-item/galleryItem'
import GalleryZoom from '../gallery-zoom/galleryZoom'





export default function Gallery(){
    const images = useSelector(state => state.galleryImages)



    function showFull(id){
        document.getElementById('showFull__img__noscale').innerHTML = 
                                                    `
                                                    <img src='${images[id].imgNoScale}' alt='gallery image' />
                                                    `
        document.getElementById('galleryZoom').style.display = 'block'
    }

    return (
        <div className='gallery'>
            <GalleryZoom />
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