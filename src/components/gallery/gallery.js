import React from 'react'
import './gallery.css'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';


import Close from './images/close.png'
import buttonStep from './images/buttonStep.png'
import GalleryItem from '../gallery-item/galleryItem'





export default function Gallery(){
    const images = useSelector(state => state.galleryImages)
    const [begin, setBegin] = React.useState(false);
    const [clickId, setClickId] = React.useState();


    function showFull(id){
        setClickId(id)
        setBegin(true)
        
        document.querySelector('.gallery__sliderPhoto').style.display = 'block'
    }

    function hideFull(){
        setBegin(false)
        document.querySelector('.gallery__sliderPhoto').style.display = 'none'
    }

    const prevRef = React.useRef(null);
    const nextRef = React.useRef(null);

    return (
        <div className='gallery'>
            <div className='gallery__sliderPhoto' style={{display:'none'}}>
                <div className='gallery__sliderPhoto__container'>
            { begin ? 
            <>
                <div className='closeButton' onClick={hideFull}><img src={Close} alt='close'/></div>
                <Swiper
                    modules={[Pagination, Navigation]}
                    centeredSlides={true}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    initialSlide={clickId}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                      }}
                    loop={true}
                    >
                    { 
                        images.map(item =>  {
                        return (
                        <SwiperSlide key={item.id}>
                            <img src={item.imgNoScale} alt='gallery slide'/>    
                        </SwiperSlide>
                        )
                    }) }
                     <div className='navigationButtons'>
                    <div ref={prevRef} className='prev'><img src={buttonStep} alt='next' /></div>
                    <div ref={nextRef} className='next'><img src={buttonStep} alt='next'/></div>
                    </div>
                </Swiper>
            </>
                : <></>}
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