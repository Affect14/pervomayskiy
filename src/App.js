import { Routes, Route, Link} from 'react-router-dom'
import { Fragment } from 'react'
import Preview from './components/preview/preview'
import About from './components/about/about'
import BestProducts from './components/best-products/bestProducts'
import Advantages from './components/advantages/advantages'
import Footer from './components/footer/footer'
import Selector from './components/selector/selector'
import Purchase from './components/purchase/purchase'
import Care from './components/care/care'
import Aboutus from './components/aboutus/aboutus'
import Partners from './components/partners/partners'
import Documents from './components/documents/documents'
import Gallery from './components/gallery/gallery'
import Vacancies from './components/vacancies/vacancies'
import Contacts from './components/contacts/contacts'

import mainPng from './assets/preview-component/images/main.png'
import contactsPng from './assets/preview-component/images/contacts.png'
import factoryPng from './assets/preview-component/images/factory.png'
import galleryPng from './assets/preview-component/images/gallery.png'
import productionPng from './assets/preview-component/images/production.png'
import vacanciesPng from './assets/preview-component/images/vacancies.png'

import alc1 from './assets/products-items/images/alc1.png'
import alc2 from './assets/products-items/images/alc2.png'
import alc3 from './assets/products-items/images/alc3.png'
import alc4 from './assets/products-items/images/alc4.png'
import alc5 from './assets/products-items/images/alc5.png'
import alc6 from './assets/products-items/images/alc6.png'
import alc7 from './assets/products-items/images/alc7.png'
import alc8 from './assets/products-items/images/alc8.png'
import alc9 from './assets/products-items/images/alc9.png'




function App() {
  const Content = {
    main : {content:(
      <Fragment>
            <div className='title'>
        <div className='specialization'>
            Коньячный завод
        </div>
        <div className='name'>
            ПЕРВОМАЙСКИЙ
        </div>
        <div className='founded'>
            основан в 1958 году
        </div>
        <div className='buttons'>
          <Link to='/about'><button>О ЗАВОДЕ</button></Link>
          <Link to='/production'><button>ПРОДУКЦИЯ</button></Link>
        </div>
      </div>
      </Fragment>
    ),
    img: mainPng},

    about :{content:(
      <Fragment>
        <div className='title__another'>
          О ЗАВОДЕ
        </div>
      </Fragment>
    ),
      img: factoryPng},

    production :{content:(
      <Fragment>
        <div className='title__another'>
          ПРОДУКЦИЯ
        </div>
      </Fragment>
    ),
      img: productionPng},

      gallery: { 
        content:(
          <Fragment>
              <div className='title__another'>
                ГАЛЕРЕЯ
              </div>
          </Fragment>
      ),
        img: galleryPng},

        vacancies: {
          content:(
            <Fragment>
                <div className='title__another'>
                  ВАКАНСИИ
                </div>
            </Fragment>
        ),
          img: vacanciesPng},

          contacts: {
            content:(
              <Fragment>
                  <div className='title__another'>
                    КОНТАКТЫ
                  </div>
              </Fragment>
          ),
            img: contactsPng}
  }

  var products = [
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

  return (
   <div className="wrapper">
     <Routes>
       <Route path='/' element={<div className='mainPage'>
                                  <Preview content={Content.main}/>
                                  <About />
                                  <BestProducts products={products} key={products.id}/>
                                  <Advantages />
                                  <Footer />
                                </div>}/>
        <Route path='/about' element={<div className='aboutPage'>
                                          <Preview content={Content.about}/>
                                          <Aboutus />
                                          <Partners />
                                          <Documents />
                                          <Footer />
                                        </div>}/>
        <Route path='/production' element={<div className='productionPage'>
                                            <Preview content={Content.production}/>
                                            <Selector products={products} key={products.id}/>
                                            <Purchase />
                                            <Care />
                                            <Footer />
                                          </div>}/>
        <Route path='/gallery' element={<div className='galleryPage'>
                                          <Preview content={Content.gallery}/>
                                          <Gallery />
                                          <Footer />
                                        </div>}/>
        <Route path='/vacancies' element={<div className='vacanciesPage'>
                                            <Preview content={Content.vacancies}/>
                                            <Vacancies />
                                            <Footer />
                                          </div>}/>
        <Route path='/contacts' element={<div className='contactsPage'>
                                          <Preview content={Content.contacts}/>
                                          <Contacts />
                                          <Footer />
                                        </div>}/>
     </Routes>
    </div>
  );
}

export default App;
