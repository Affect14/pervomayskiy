import { configureStore } from '@reduxjs/toolkit';


import alc1 from '../assets/products-items/images/alc1.png'
import alc2 from '../assets/products-items/images/alc2.png'
import alc3 from '../assets/products-items/images/alc3.png'
import alc4 from '../assets/products-items/images/alc4.png'
import alc5 from '../assets/products-items/images/alc5.png'
import alc6 from '../assets/products-items/images/alc6.png'
import alc7 from '../assets/products-items/images/alc7.png'
import alc8 from '../assets/products-items/images/alc8.png'
import alc9 from '../assets/products-items/images/alc9.png'

import img1Png from '../assets/gallery-items/scaled/1.png'
import img2Png from '../assets/gallery-items/scaled/2.png'
import img3Png from '../assets/gallery-items/scaled/3.png'
import img4Png from '../assets/gallery-items/scaled/4.png'
import img5Png from '../assets/gallery-items/scaled/5.png'
import img6Png from '../assets/gallery-items/scaled/6.png'
import img7Png from '../assets/gallery-items/scaled/7.png'
import img8Png from '../assets/gallery-items/scaled/8.png'
import img9Png from '../assets/gallery-items/scaled/9.png'
import img10Png from '../assets/gallery-items/scaled/10.png'
import img11Png from '../assets/gallery-items/scaled/11.png'
import img12Png from '../assets/gallery-items/scaled/12.png'

import img1PngNoScale from '../assets/gallery-items/noscale/img1noscale.png'
import img2PngNoScale from '../assets/gallery-items/noscale/img2noscale.png'
import img3PngNoScale from '../assets/gallery-items/noscale/img3noscale.png'
import img4PngNoScale from '../assets/gallery-items/noscale/img4noscale.png'
import img5PngNoScale from '../assets/gallery-items/noscale/img5noscale.png'
import img6PngNoScale from '../assets/gallery-items/noscale/img6noscale.png'
import img7PngNoScale from '../assets/gallery-items/noscale/img7noscale.png'
import img8PngNoScale from '../assets/gallery-items/noscale/img8noscale.png'
import img9PngNoScale from '../assets/gallery-items/noscale/img9noscale.png'
import img10PngNoScale from '../assets/gallery-items/noscale/img10noscale.png'
import img11PngNoScale from '../assets/gallery-items/noscale/img11noscale.png'
import img12PngNoScale from '../assets/gallery-items/noscale/img12noscale.png'



const defaultState = {
  alcImages :[
    { id: 0, img:alc1, description:'Бренди «Крымский статус» молодой', cap:'0,25 л', kind:'brendi' },
    { id: 1, img:alc2, description:'Виноградная водка «Крымский статус»', cap:'0,25 л', kind:'vinvod' },
    { id: 2, img:alc3, description:'Российский коньяк «Крымский статус» 5 звёзд', cap:'0,25 л', kind:'ordinkon' },
    { id: 3, img:alc4, description:'Самогон «Крымский статус»', cap:'0,25 л', kind:'vinvod' },
    { id: 4, img:alc5, description:'Бренди «Крымский статус» молодой', cap:'0,25 л', kind:'brendi' },
    { id: 5, img:alc6, description:'Виноградная водка «Крымский статус»', cap:'0,5 л', kind:'vinvod' },
    { id: 6, img:alc7, description:'Российский коньяк выдержанный высшего качества «Стародавний Боспор»', cap:'0,5 л', kind:'marochniy' },
    { id: 7, img:alc8, description:'Российский коньяк «Море Паласа» 5 лет', cap:'0,5 л', kind:'ordinkon' },
    { id: 8, img:alc9, description:'Российский коньяк выдержанный «Жемчужина Салгира»', cap:'0,5 л', kind:'marochniy' },
  ],
  
  galleryImages :[
    { id: 0, img: img1Png, imgNoScale: img1PngNoScale },
    { id: 1, img: img2Png, imgNoScale: img2PngNoScale },
    { id: 2, img: img3Png, imgNoScale: img3PngNoScale },
    { id: 3, img: img4Png, imgNoScale: img4PngNoScale },
    { id: 4, img: img5Png, imgNoScale: img5PngNoScale },
    { id: 5, img: img6Png, imgNoScale: img6PngNoScale },
    { id: 6, img: img7Png, imgNoScale: img7PngNoScale },
    { id: 7, img: img8Png, imgNoScale: img8PngNoScale },
    { id: 8, img: img9Png, imgNoScale: img9PngNoScale },
    { id: 9, img: img10Png, imgNoScale: img10PngNoScale },
    { id: 10, img: img11Png, imgNoScale: img11PngNoScale },
    { id: 11, img: img12Png, imgNoScale: img12PngNoScale },
  ],
  clickId: 3,
  isMobile: false
}

  const reducer = (state = defaultState, action) => {
    switch (action.type){
      case "SET_MOBILE":
        return {...state, isMobile: true}
      case "SET_DESKTOP":
        return {...state, isMobile: false}
      case "CHANGE_CLICKID":
        return {...state, clickId: action.id}
      default: return state
    }         
  }
  
const store = configureStore({reducer: reducer})

export default store