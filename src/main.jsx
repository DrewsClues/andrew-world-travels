import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css-sheets/home-page.css'; 
import Homepage from './components/home'
import Tripspage from './components/trips'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation_Bar from './components/navbar';
import Japancarousel from './components/japancarousel';
import Koreacarousel from './components/koreacarousel';
import Taiwancarousel from './components/taiwancarousel';
import USAcarousel from './components/usacarousel';
import Myanmarcarousel from './components/myanmarcarousel';
import Laoscarousel from './components/laoscarousel';
import Cambodiacarousel from './components/cambodiacarousel';
import Macau_carousel from './components/macau';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navigation_Bar/>
      <div className='home-carousel-container'>

        <div className='home-div' id='korea-carousel'>
          <h1 className='country-title'>South Korea</h1>
          <Koreacarousel/>
        </div>
        
        <div className='home-div' id='japan-carousel'>
                <h1 className='country-title'>Japan</h1>
                <Japancarousel />
        </div>

        <div className='home-div' id='taiwan-carousel'>
          <h1 className='country-title'>Taiwan</h1>
          <Taiwancarousel/>
        </div>

        <div className='home-div' id='usa-carousel'>
          <h1 className='country-title'>USA</h1>
          <USAcarousel/>
        </div>

        <div className='home-div' id='myanmar-carousel'>
          <h1 className='country-title'>Myanmar</h1>
          <Myanmarcarousel/>
        </div>

        <div className='home-div' id='laos-carousel'>
          <h1 className='country-title'>Laos</h1>
          <Laoscarousel/>
        </div>

        <div className='home-div' id='cambodia-carousel'>
          <h1 className='country-title'>Cambodia</h1>
          <Cambodiacarousel/>
        </div>


        <div className='home-div' id='macau-carousel'>
          <h1 className='country-title'>Macau</h1>
          <Macau_carousel/>
        </div>



      </div>

      

  </React.StrictMode>,
)
