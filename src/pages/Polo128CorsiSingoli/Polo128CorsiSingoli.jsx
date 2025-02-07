import React, { useEffect, useState } from 'react';

import './Polo128CorsiSingoli.css';
import { Link } from 'react-router-dom';

import PreFooter from '../../Components/PreFooter/PreFooter'
import Footer from '../../Components/Footer/Footer'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import TableRata from '../../Components/TableRataPolo128CdL/TableRataPolo128CdL'
import Contatti from '../../Components/Contact/Contact'
import Title from '../../Components/Title/Title'
import TablePolo from '../../Components/TablePolo128/TablePolo128'

const Polo128CorsiSingoli = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <div>
      <Navbar2/>
    </div>
      <div className='container'>
        <div className='container-corsiSingoli'>
        <div className='corsiSingoli'>
        <h1>Corsi Singoli</h1>
        <p>In base ai regolamenti dell’Ateneo sono ammessi a seguire corsi singoli anche i titolari di laurea e laurea magistrale, i quali abbiano necessità di frequentare i corsi e superare gli esami di discipline non inserite nei piani di studio seguiti per il conseguimento del rispettivo titolo, ma che, in base alle disposizioni in vigore, siano richiesti per l’ammissione a concorsi pubblici o per l’accesso a scuole di specializzazione.</p>
        <h3>Torna a <span><Link to={'/Polo_universitario_128_eCampus'}>Polo 128 eCampus</Link></span></h3>
        </div>
        </div>
        <Title subTitle='CONTATTACI' title='Siamo Pronti ad Aiutarti'/>
        <Contatti/>
      </div>
      <div>
        <PreFooter/>
        <Footer/>
      </div>
    </>
  );
};

export default Polo128CorsiSingoli;
