import React from 'react'
import './bestProducts.css'
import ProductsItem from '../products-item/produtsItem'
import { useSelector } from 'react-redux'

import dashSvg from './images/Dash.svg'

export default function BestProducts(){
    var images = useSelector(state => state)
    images = images.filter(item => item.id === 5 || item.id === 6 || item.id === 7 || item.id === 8 )
    return (
        <div className='best_products'>
            <div className='products__title'>
                <div className='products__title__top'>
                    Наша гордость
                </div>
                <div className='products__title__text'>
                    <img src={dashSvg} alt='dash'/>Лучшие товары<img src={dashSvg} alt='dash'/>
                </div>
            </div>
            <div className='items'>
                { 
                    images.map(item =>  {
                    return (
                    <div className='card' key={item.id}>
                        <ProductsItem item={item} />
                    </div>
                    )
                }) }
            </div>
        </div>
    )
}