import React from 'react'
import './galleryItem.css'

export default function GalleryItem({item}){

    return (
        <div className='galleryItem'>
            <img src={item.img} alt='item'/>
        </div>
    )
}