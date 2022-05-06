import React from 'react'
import './preview.css'
import Header from '../header/header'
import { useSelector } from 'react-redux'
import MobileHeader from '../mobileHeader/mobileHeader'


export default function Preview(props){
    return (
        <div className='preview' style={{ backgroundImage: `url(${props.content.img})`,
                                        backgroundSize: 'cover'}}>
            { useSelector(state => state.isMobile) ? <MobileHeader/> : <Header/> }
            {props.content.content}
        </div>
    )
}