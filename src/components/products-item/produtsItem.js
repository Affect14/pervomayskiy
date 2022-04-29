import React from 'react'

export default function productsItem({item}){
    return (
        <div className='item'>
            <img src={item.img} alt='alcohol'/>
            <div className='descr'>
                {item.description}
            </div>
            <div className='cap'>
                {item.cap}
            </div>
        </div>
    )
}