import React from 'react'
import './gallery.css'

import img1Png from './images/1.png'
import img2Png from './images/2.png'
import img3Png from './images/3.png'
import img4Png from './images/4.png'
import img5Png from './images/5.png'
import img6Png from './images/6.png'
import img7Png from './images/7.png'
import img8Png from './images/8.png'
import img9Png from './images/9.png'
import img10Png from './images/10.png'
import img11Png from './images/11.png'
import img12Png from './images/12.png'


export default function Gallery(){

    return (
        <div className='gallery'>
            <div className='galleryItem'>
                <img src={img1Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img2Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img3Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img4Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img5Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img6Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img7Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img8Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img9Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img10Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img11Png} alt='item'/>
            </div>
            <div className='galleryItem'>
                <img src={img12Png} alt='item'/>
            </div>
        </div>
    )
}