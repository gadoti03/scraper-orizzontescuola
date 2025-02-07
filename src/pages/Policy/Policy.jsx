import React, { useEffect, useState } from 'react';

import './Policy.css'

import PreFooter from '../../Components/PreFooter/PreFooter'
import Footer from '../../Components/Footer/Footer'
import Navbar2 from '../../Components/Navbar2/Navbar2'

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <div>
      <Navbar2/>
    </div>
    <div className='policy container'>
      <h2>Privacy Policy</h2>
      <p><strong>Informativa sulla Privacy di TASL srls</strong></p>
      <p><em>Ultimo aggiornamento: 10 agosto 2024</em></p>

      <p>Benvenuti su TASL srls. La tua privacy è importante per noi, e desideriamo che tu sia informato su come raccogliamo, utilizziamo e condividiamo i tuoi dati personali. Questa informativa sulla privacy spiega le nostre pratiche in merito a tali dati.</p>

      <h3>Raccolta dei Dati Personali</h3>
      <p>Raccogliamo i seguenti dati personali direttamente da te quando ci contatti per richiedere informazioni:</p>
      <ul>
        <li>Nome</li>
        <li>Cognome</li>
        <li>Numero di telefono</li>
        <li>Indirizzo email</li>
      </ul>
      <p>Questi dati vengono raccolti esclusivamente per rispondere alle tue richieste d'informazione.</p>

      <h3>Utilizzo dei Dati Personali</h3>
      <p>Utilizziamo i dati personali raccolti esclusivamente per le seguenti finalità:</p>
      <ul>
        <li>Fornire risposte alle richieste d'informazione su misura dell'utente finale che le richiede.</li>
      </ul>

      <h3>Condivisione dei Dati Personali</h3>
      <p>I tuoi dati personali saranno gestiti solo dal personale autorizzato di TASL srls. Non condivideremo i tuoi dati personali con terze parti, tranne nei seguenti casi:</p>
      <ul>
        <li>Quando richiesto per rispettare obblighi legali.</li>
      </ul>

      <h3>Protezione dei Dati Personali</h3>
      <p>Ci impegniamo a proteggere i tuoi dati personali e adottiamo misure di sicurezza adeguate per prevenirne la perdita, l'accesso non autorizzato o la divulgazione.</p>

      <h3>Cookie e Tecnologie Simili</h3>
      <p>Il nostro sito web utilizza cookie e altre tecnologie simili. Puoi gestire le impostazioni dei cookie nel tuo browser.</p>

      <h3>Modifiche a questa Informativa sulla Privacy</h3>
      <p>Ci riserviamo il diritto di apportare modifiche a questa informativa sulla privacy. Ogni modifica verrà notificata su questa pagina e sarà effettiva dalla data di pubblicazione dell'aggiornamento.</p>

      <h3>Contattaci</h3>
      <p>Se hai domande o richieste relative a questa informativa sulla privacy, ti preghiamo di contattarci utilizzando le seguenti informazioni:</p>
      <ul>
        <li>Indirizzo: Via Giovanni Leone 3, Tito (PZ)</li>
        <li>Numero di telefono: +39 0971 282212</li>
        <li>Sito web: <a href="http://www.tasl.it">www.tasl.it</a></li>
      </ul>
    </div>
    <div>
      <PreFooter/>
      <Footer/>
    </div>
    </>
  )
}

export default Policy