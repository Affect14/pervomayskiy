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

const defaultState = [
    { id: 0, img:alc1, description:'Бренди «Крымский статус» молодой', cap:'0,25 л', kind:'brendi' },
    { id: 1, img:alc2, description:'Виноградная водка «Крымский статус»', cap:'0,25 л', kind:'vinvod' },
    { id: 2, img:alc3, description:'Российский коньяк «Крымский статус» 5 звёзд', cap:'0,25 л', kind:'ordinkon' },
    { id: 3, img:alc4, description:'Самогон «Крымский статус»', cap:'0,25 л', kind:'vinvod' },
    { id: 4, img:alc5, description:'Бренди «Крымский статус» молодой', cap:'0,25 л', kind:'brendi' },
    { id: 5, img:alc6, description:'Виноградная водка «Крымский статус»', cap:'0,5 л', kind:'vinvod' },
    { id: 6, img:alc7, description:'Российский коньяк выдержанный высшего качества «Стародавний Боспор»', cap:'0,5 л', kind:'marochniy' },
    { id: 7, img:alc8, description:'Российский коньяк «Море Паласа» 5 лет', cap:'0,5 л', kind:'ordinkon' },
    { id: 8, img:alc9, description:'Российский коньяк выдержанный «Жемчужина Салгира»', cap:'0,5 л', kind:'marochniy' },
  ]

  const reducer = (state = defaultState, action) => {
              return state
      }
  
const store = configureStore({reducer: reducer})

export default store