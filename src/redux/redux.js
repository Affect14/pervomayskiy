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

import img1Png from '../assets/gallery-items/1.png'
import img2Png from '../assets/gallery-items/2.png'
import img3Png from '../assets/gallery-items/3.png'
import img4Png from '../assets/gallery-items/4.png'
import img5Png from '../assets/gallery-items/5.png'
import img6Png from '../assets/gallery-items/6.png'
import img7Png from '../assets/gallery-items/7.png'
import img8Png from '../assets/gallery-items/8.png'
import img9Png from '../assets/gallery-items/9.png'
import img10Png from '../assets/gallery-items/10.png'
import img11Png from '../assets/gallery-items/11.png'
import img12Png from '../assets/gallery-items/12.png'

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
    { id: 0, img: img1Png },
    { id: 1, img: img2Png },
    { id: 2, img: img3Png },
    { id: 3, img: img4Png },
    { id: 4, img: img5Png },
    { id: 5, img: img6Png },
    { id: 6, img: img7Png },
    { id: 7, img: img8Png },
    { id: 8, img: img9Png },
    { id: 9, img: img10Png },
    { id: 10, img: img11Png },
    { id: 11, img: img12Png },
  ]
}

  const reducer = (state = defaultState, action) => {
              return state
      }
  
const store = configureStore({reducer: reducer})

export default store