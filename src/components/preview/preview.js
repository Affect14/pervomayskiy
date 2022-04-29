import React from 'react'
import './preview.css'
import Header from '../header/header'


export default function Preview(props){
    return (
        <div className='preview' style={{ backgroundImage: `url(${props.content.img})`,
                                        backgroundSize: 'cover'}}>
            <Header/>
            {props.content.content}
        </div>
    )
}