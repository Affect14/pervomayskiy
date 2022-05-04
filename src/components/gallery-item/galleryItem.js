import React from 'react'
import './galleryItem.css'

export default function GalleryItem({item, clickShow}){

    return (
        <div className='galleryItem'>
            <img src={item.img} alt='item' onClick={() => clickShow(item.id)}/>
        </div>
    )
}