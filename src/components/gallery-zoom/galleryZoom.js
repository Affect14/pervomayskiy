import React from 'react'

import Close from './images/close.png'
import ButtonStep from './images/buttonStep.png'

export default function GalleryZoom(){
    function hideFull(){
        document.getElementById('galleryZoom').style.display = 'none'
    }


    return (
        <div id='galleryZoom'>
                <div id='showFull__img'>
                    <div className='close_img'>    
                        <img src={Close} className='showFull__img__close' onClick={hideFull} alt='close'/>
                    </div>
                    <div className='buttonRight_img'>
                        <img src={ButtonStep} alt='right' className='turn' id='buttonRight' />
                    </div>
                    <div className='buttonLeft_img' id='buttonLeft' >
                        <img src={ButtonStep} alt='left' />
                    </div>
                    <div id='showFull__img__noscale'>
                    </div>
                </div>
            </div>
    )
}