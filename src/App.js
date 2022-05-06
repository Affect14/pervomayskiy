import { Routes, Route, Link} from 'react-router-dom'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
import BestProductsMobile from './components/best-products-mobile/bestProductsMobile'

import mainPng from './assets/preview-component/images/main.png'
import contactsPng from './assets/preview-component/images/contacts.png'
import factoryPng from './assets/preview-component/images/factory.png'
import galleryPng from './assets/preview-component/images/gallery.png'
import productionPng from './assets/preview-component/images/production.png'
import vacanciesPng from './assets/preview-component/images/vacancies.png'





function App() {
  const dispatch = useDispatch()
  window.addEventListener('resize', checkSize)
  function checkSize(){
    if (window.innerWidth > 767){
      dispatch({type:"SET_DESKTOP"})
    } else {
      dispatch({type:"SET_MOBILE"})
    }
  }
  checkSize()

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


  return (
   <div className="wrapper">
     <Routes>
       <Route path='/' element={<div className='mainPage'>
                                  <Preview content={Content.main}/>
                                  <About />
                                  { useSelector(state => state.isMobile) ? <BestProductsMobile/> : <BestProducts/> }
                                  { useSelector(state => state.isMobile) ? <></> : <Advantages/>}
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
                                            <Selector />
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
