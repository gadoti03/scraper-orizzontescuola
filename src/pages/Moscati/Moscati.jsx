import React, { useEffect, useState } from 'react';

import { Link as ScrollLink } from 'react-scroll'

import './Moscati.css'

import sfondoMoscati from '../../assets/sfondoMoscati.webp'
import screenMoscati from '../../assets/screenMoscati.webp'
import MIM from '../../assets/MIM.png'

import PreFooter from '../../Components/PreFooter/PreFooter'
import Footer from '../../Components/Footer/Footer'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import Contatti from '../../Components/Contact/Contact'
import Title from '../../Components/Title/Title'
import HomeComponent from '../../Components/HomeComponent/HomeComponent'

const Moscati = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const divHomeComponentMoscati = <><li>Assistenza personalizzata presso Scuola Moscati come Info Point</li>
  <hr />
  <li>Supporto completo per certificazioni linguistiche e informatiche</li>
  <hr />
  <li>Servizio di consulenza e preparazione per esami sempre a tua disposizione</li>
  <hr />
  <li>Certificazioni ufficiali riconosciute per il tuo percorso educativo e professionale</li>
  <hr />
  <li>Piattaforma di studio avanzata con assistenza dedicata per ogni tua esigenza</li>
  </>

  const divButton = <ScrollLink to='contact' smooth={true} offset={-260} duration={500}><button className='btn dark-btn'>Contattaci</button></ScrollLink>


  return (
    <>
    <Navbar2/>
    <div className='sfondoNavber2'>
      <img src={sfondoMoscati} alt=""/>
    </div>
    <div className='container noSfondoNavbar2'>
    <Title subTitle='Info Point Moscati' title='Supporto e orientamento scolastico'/>
    <div className='AppHomeComponent'>
      <HomeComponent title='INFO POINT' subTitle='Scuola San Giuseppe Moscati' div={divHomeComponentMoscati} link={'https://scuolamoscati.it/'} /*backgroundImage={sfondoHomeComponentPolo128}*/ image={screenMoscati} logo={MIM} testoFooter="Approfitta dell'assistenza gratuita" button={divButton} colore='white' gradiente='linear-gradient(to right, rgba(0, 51, 116, 1), rgba(107, 146, 252, .90))'/>
      </div>
    <Title subTitle='CONTATTACI' title='Siamo Pronti ad Aiutarti'/>
    <Contatti/>
    </div>
    <div>
    <PreFooter/>
    <Footer/>
    </div>
    </>
  )
}

export default Moscati