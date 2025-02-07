import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import { Link } from 'react-router-dom'

import './Programs2.css'

import HomeComponent from '../HomeComponent/HomeComponent';

import MIM from '../../assets/MIM.png';


function Programs2() {
    const divHomeComponentCdL = (
        <>
          <li>5 facoltà con specializzazioni diverse</li>
          <hr />
          <li>Oltre 65 corsi di laurea vari e completi</li>
          <hr />
          <li>Tutor dedicati per assistenza personalizzata</li>
          <hr />
          <li>Tirocini per esperienza pratica</li>
          <hr />
          <li>Accesso a risorse esclusive e supporto professionale</li>
          <hr />
          <li>Collaborazioni con aziende locali per progetti</li>
        </>
      );

      const divHomeComponentCorsiSingoli = (
        <>
          <li>Scopri corsi singoli per ampliare le tue competenze</li>
          <hr />
          <li>Accesso a una vasta selezione di materie</li>
          <hr />
          <li>Flessibilità per scegliere in base ai tuoi interessi</li>
          <hr />
          <li>Opzioni di studio compatibili con il lavoro</li>
          <hr />
          <li>Certificati di partecipazione per ogni corso</li>
          <hr />
          <li>Supporto per orientarti nella scelta dei corsi</li>
        </>
      );

      const divHomeComponentMasterUniversitari = (
        <>
          <li>Approfondisci le tue conoscenze con i nostri master universitari</li>
          <hr />
          <li>Specializzati in diverse aree disciplinari</li>
          <hr />
          <li>Percorsi formativi di alto livello, riconosciuti a livello nazionale</li>
          <hr />
          <li>Docenti qualificati e con esperienza nel settore</li>
          <hr />
          <li>Opportunità di networking e di crescita professionale</li>
          <hr />
          <li>Supporto personalizzato per tutto il percorso formativo</li>
        </>
      );

      const divHomeComponent30CFU = (
        <>
          <li>Iscrizioni aperte al percorso 30 CFU ex art. 13</li>
          <hr />
          <li>Lezioni online sincrone con prova finale in presenza</li>
          <hr />
          <li>Abilitazioni utili per concorsi, GPS e mobilità</li>
          <hr />
          <li>Percorsi formativi accreditati in varie discipline</li>
          <hr />
          <li>Opportunità di avanzare nella carriera scolastica</li>
          <hr />
          <li>Supporto completo durante tutto il percorso formativo</li>
        </>
      );
      
      

    const divButton = <ScrollLink to='contact' smooth={true} offset={-260} duration={500}><button className='btn dark-btn'>Contattaci</button></ScrollLink>


    
  return (
    <>
      <div className='programs first'>
        <div className='program-column'>
          <HomeComponent title='Corsi di Laurea' div={divHomeComponentCdL} link='/Polo_universitario_128_eCampus/Corsi_di_Laurea' logo={MIM} testoFooter='Accedi al nostro supporto' button={divButton} colore='#021c48' gradiente='linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))'/>
          <Link to={'/Polo_universitario_128_eCampus/Corsi_di_Laurea'}><h3>Corsi di Laurea</h3></Link>
        </div>
        <div className='program-column'>
          <HomeComponent title='Master' div={divHomeComponentMasterUniversitari} link='/Polo_universitario_128_eCampus/Master' logo={MIM} testoFooter='Accedi al nostro supporto' button={divButton} colore='#021c48' gradiente='linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))'/>
          <Link to={'/Polo_universitario_128_eCampus/Master'}><h3>Master</h3></Link>
        </div>
      </div>
      <div className='programs first'>
        <div className='program-column'>
          <HomeComponent title='Corsi Singoli' div={divHomeComponentCorsiSingoli} link='/Polo_universitario_128_eCampus/Corsi_Singoli' logo={MIM} testoFooter='Accedi al nostro supporto' button={divButton} colore='#021c48' gradiente='linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))'/>
          <Link to={'/Polo_universitario_128_eCampus/Corsi_Singoli'}><h3>Corsi Singoli</h3></Link>
        </div>
        <div className='program-column'>
          <HomeComponent title='30 CFU' div={divHomeComponent30CFU} link='/Polo_universitario_128_eCampus/30CFU' logo={MIM} testoFooter='Accedi al nostro supporto' button={divButton} colore='#021c48' gradiente='linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))'/>
          <Link to={'/Polo_universitario_128_eCampus/30CFU'}><h3>30 CFU</h3></Link>
        </div>
      </div>
    </>
  )
}

export default Programs2


