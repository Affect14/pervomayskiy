import React from 'react'
import './selector.css'
import ProductsItem from '../products-item/produtsItem'
import { useSelector } from 'react-redux'

export default function Selector(){
    var images = useSelector(state => state.alcImages)
    
    var [filteredArray, setFilteredArray] = React.useState(images)
    
    function showAll(){
        setFilteredArray(
            filteredArray = images
        )
       document.getElementById('btn1').classList.add('activeButton')
       document.getElementById('btn2').classList.remove('activeButton')
       document.getElementById('btn3').classList.remove('activeButton')
       document.getElementById('btn4').classList.remove('activeButton')
       document.getElementById('btn5').classList.remove('activeButton')
    }

    function showVinvod(){
        setFilteredArray(
            filteredArray = images.filter(item => item.kind === 'vinvod')
        )
        document.getElementById('btn1').classList.remove('activeButton')
        document.getElementById('btn2').classList.add('activeButton')
        document.getElementById('btn3').classList.remove('activeButton')
        document.getElementById('btn4').classList.remove('activeButton')
        document.getElementById('btn5').classList.remove('activeButton')
    }

    function showOrdinkon(){
        setFilteredArray(
            filteredArray = images.filter(item => item.kind === 'ordinkon')
        )
        document.getElementById('btn1').classList.remove('activeButton')
        document.getElementById('btn2').classList.remove('activeButton')
        document.getElementById('btn3').classList.add('activeButton')
        document.getElementById('btn4').classList.remove('activeButton')
        document.getElementById('btn5').classList.remove('activeButton')
    }

    function showMarochniy(){
        setFilteredArray(
            filteredArray = images.filter(item => item.kind === 'marochniy')
        )
        document.getElementById('btn1').classList.remove('activeButton')
        document.getElementById('btn2').classList.remove('activeButton')
        document.getElementById('btn3').classList.remove('activeButton')
        document.getElementById('btn4').classList.add('activeButton')
        document.getElementById('btn5').classList.remove('activeButton')
    }

    function showBrendi(){
        setFilteredArray(
            filteredArray = images.filter(item => item.kind === 'brendi')
        )
        document.getElementById('btn1').classList.remove('activeButton')
        document.getElementById('btn2').classList.remove('activeButton')
        document.getElementById('btn3').classList.remove('activeButton')
        document.getElementById('btn4').classList.remove('activeButton')
        document.getElementById('btn5').classList.add('activeButton')
    }

    return(
        <div className='selector'>
            <div className='selector__buttons'>
                <div className='selector__button activeButton' onClick={() => showAll()} id='btn1'>
                    ВСЕ
                </div>
                <div className='selector__button' onClick={() => showVinvod()} id='btn2'>
                    ВИНОГРАДНАЯ ВОДКА
                </div>
                <div className='selector__button' onClick={() => showOrdinkon()} id='btn3'>
                    ОРДИНАРНЫЙ КОНЬЯК
                </div>
                <div className='selector__button' onClick={() => showMarochniy()} id='btn4'>
                    МАРОЧНЫЙ КОНЬЯК
                </div>
                <div className='selector__button' onClick={() => showBrendi()} id='btn5'>
                    БРЕНДИ
                </div>
            </div>
            <div className='selector__items'>
                {
                    filteredArray.map(item => {
                    return(
                        <div className='card' key={item.id}>
                            <ProductsItem item={item}/>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}