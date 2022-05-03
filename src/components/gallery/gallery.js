import React from 'react'
import './gallery.css'
import { useSelector } from 'react-redux'

import GalleryItem from '../gallery-item/galleryItem'


export default function Gallery(){
    const images = useSelector(state => state.galleryImages)
    return (
        <div className='gallery'>
            <div className='showFull'>

            </div>
            {
                images.map(item => {
                    return (
                        <GalleryItem item={item} key={item.id}/>
                    )
                })
            }
        </div>
    )
}