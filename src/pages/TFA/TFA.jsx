import React, { useEffect, useState } from 'react';

import './TFA.css';
import { Link as ScrollLink } from 'react-scroll';
import sfondoTFA from '../../assets/sfondoTFA.webp'
import quality from '../../assets/qualitySfondo.webp'

import PreFooter from '../../Components/PreFooter/PreFooter'
import Footer from '../../Components/Footer/Footer'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import Contatti from '../../Components/Contact/Contact'
import Title from '../../Components/Title/Title'
import DropComponent from '../../Components/DropComponent/DropComponent'

const TFA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const div1 = (
    <div className="TFA-section">
      <ul>
        <li>
          Il <strong>TFA X Ciclo</strong> è un percorso formativo specializzato offerto internamente da <strong>TASL</strong> per aspiranti insegnanti di sostegno. Questo corso è progettato per fornire le competenze necessarie al docente che deve saper lavorare in modo efficace insieme a studenti con <strong>bisogni educativi speciali (BES)</strong> e disabilità nella scuola primaria e secondaria di primo e secondo grado.
        </li>
        <li>
          Essendo un programma interno di <strong>TASL</strong>, il corso preparatorio al <strong>TFA X Ciclo</strong> è progettato per garantire l’acquisizione delle necessarie competenze teoriche e pratiche, anche grazie al supporto in itinere del personale docente, assicurando così ai partecipanti una adeguata preparazione al fine di sostenere le diverse fasi della <strong>procedura concorsuale</strong> presso tutti gli atenei.
        </li>
      </ul>
    </div>
  );  
  
  const div2 = (
    <div className="TFA-section">
      <ul>
        <li><strong>Percorso su misura:</strong> Un programma didattico strutturato per prepararti alle tre fasi di selezione: test preselettivo, prova scritta e colloquio orale.</li>
        <li><strong>Docenti esperti:</strong> Formatori altamente qualificati con esperienza nella didattica inclusiva e nel superamento delle selezioni del TFA.</li>
        <li><strong>Materiali esclusivi:</strong> Accesso a dispense aggiornate, quiz interattivi e simulazioni per affinare le tue competenze.</li>
        <li><strong>Metodologia pratica e coinvolgente:</strong> Dibattito, esercitazioni e casi studio per tradurre la teoria in pratica.</li>
        <li><strong>Supporto personalizzato:</strong> Tutor dedicati pronti a rispondere alle tue domande e a guidarti in ogni fase del percorso.</li>
      </ul>
    </div>
  );
  
  const div3 = (
    <div className="TFA-section">
      <ul>
        <li><strong>Modulo Normativo e Legislativo:</strong> Approfondimenti su leggi e linee guida sull'inclusione scolastica.</li>
        <li><strong>Modulo Socio-psico-pedagogico:</strong> Teoria e tecniche per progettare interventi educativi inclusivi.</li>
        <li><strong>Modulo su Creatività e pensiero divergente:</strong> Dagli autori alla pratica.</li>
        <li><strong>Preparazione alle Prove:</strong> Simulazioni del test preselettivo, esercitazioni per la prova scritta e tecniche per affrontare il colloquio orale.</li>
      </ul>
    </div>
  );
  
  const div4 = (
    <div className="TFA-section">
      <ul>
        <li>I requisiti di accesso al TFA Sostegno X Ciclo variano a seconda dell’ordine di scuola: Infanzia e Primaria oppure Secondaria di I e II grado.</li>
        <li><strong>Scuola dell’Infanzia e Primaria:</strong>
          <ul>
            <li>Laurea magistrale a ciclo unico in Scienze della Formazione Primaria, oppure un titolo equivalente conseguito all’estero e riconosciuto valido in Italia.</li>
            <li>Diploma magistrale conseguito entro l’anno scolastico 2001/2002, o un titolo estero equivalente e riconosciuto in Italia.</li>
          </ul>
        </li>
        <li><strong>Scuola Secondaria di I e II grado:</strong>
          <ul>
            <li>Abilitazione specifica per una classe di concorso, oppure un documento equivalente ottenuto all’estero e riconosciuto valido in Italia.</li>
            <li>Laurea magistrale o a ciclo unico che consenta l’accesso ad almeno una classe di concorso specifica.</li>
            <li>Diploma per l’insegnamento tecnico-pratico (ITP).</li>
          </ul>
        </li>
      </ul>
    </div>
  );
  
  const div5 = (
    <div className="TFA-section">
      <ul>
        <li>Il corso di formazione TASL è progettato per fornire ai candidati strumenti e competenze per affrontare con successo le selezioni del TFA.</li>
        <li><strong>Conoscenza normativa e legislativa:</strong> Approfondire il quadro normativo nazionale e internazionale sull’inclusione scolastica, con riferimento alla Legge 104/1992 e alle Linee Guida per l’integrazione degli studenti con BES e disabilità.</li>
        <li><strong>Sviluppo delle competenze teoriche:</strong> Fornire solide basi pedagogiche, psicologiche e didattiche per comprendere le esigenze specifiche degli studenti con disabilità e BES.</li>
        <li><strong>Preparazione alle prove di selezione:</strong> Allenare i partecipanti alle tre fasi di selezione (test preselettivo, prova scritta e colloquio orale) tramite esercitazioni pratiche, simulazioni e strategie di gestione del tempo.</li>
        <li><strong>Approccio pratico e metodologico:</strong> Offrire esempi concreti e casi studio per applicare nella pratica quotidiana i principi dell’inclusione scolastica.</li>
        <li><strong>Promozione di un mindset inclusivo:</strong> Incoraggiare una mentalità sensibile e inclusiva, valorizzando le diversità e promuovendo il successo formativo di tutti gli studenti.</li>
      </ul>
    </div>
  );
  

  const div6 = (
    <div className="TFA-section">
      <p>
        Per maggiori dettagli sul TFA X Ciclo, inclusi i <strong>bandi di ammissione</strong> e le <strong>scadenze</strong>, ti invitiamo a compilare il <ScrollLink to='contact' smooth={true} offset={-270} duration={500}><strong>form di contatto</strong></ScrollLink> o a raggiungerci attraverso i dettagli nella sezione "Contatti" in basso. Saremo lieti di fornirti ulteriori informazioni e supporto.
      </p>
    </div>
  );
      
      
  return (
    <>
    <Navbar2/>
    <div className='sfondoNavber2'>
      <img src={sfondoTFA} alt=""/>
    </div>
    <div className='container noSfondoNavbar2'>
      <Title subTitle='TFA X CICLO' title='Abilitazione al Sostegno Didattico'/>
        <DropComponent>
        <div title='Formazione per docenti di sostegno'>{div1}</div>
        <div title='Perché scegliere il nostro corso'>{div2}</div>
        <div title='Struttura del corso'>{div3}</div>
        <div title='Requisiti di accesso'>{div4}</div>
        <div title="Obiettivi del corso">{div5}</div>
        <div title='Iscrizioni e Informazioni'>{div6}</div>
      </DropComponent>
      <Title subTitle='IL CASO STUDIO' title='Anno Accademico 2024/25'/>
      <div className="case-study-container">
      <div className="case-study-content">
        <img src={quality} alt="" />
        <p>
          Nell'anno accademico 2024/25, tutti i partecipanti al percorso TFA X Ciclo sono stati ammessi al percorso di abilitazione, dimostrando così una preparazione e una competenza eccellenti. Il TFA X Ciclo è un programma rigoroso che prepara i partecipanti a diventare insegnanti di sostegno altamente qualificati, capaci di affrontare le sfide dell'inclusione educativa.
        </p>
        <p>
          Per garantire che i partecipanti fossero pronti a affrontare le sfide professionali, è stato consigliato di affrontare il test TER, che funge anche da allenamento supplementare. Questo test non è solo un'opportunità per mettere alla prova le proprie competenze, ma anche per prepararsi ulteriormente per le sfide future.
        </p>
        <p>
          I risultati del test TER sono stati straordinari: il 94% dei partecipanti ha superato il test con successo. Questo elevato tasso di successo è una chiara dimostrazione dell'efficacia del nostro programma TFA X Ciclo e della preparazione di alta qualità che fornisce. Il test TER ha confermato che i partecipanti sono ben equipaggiati per affrontare le sfide professionali nel campo dell'insegnamento di sostegno.
        </p>
        <p>
          La nostra esperienza con il TFA X Ciclo continua a confermare il valore del nostro percorso formativo. Siamo orgogliosi dei risultati ottenuti dai nostri partecipanti e continueremo a impegnarci per fornire una formazione di alta qualità che prepari efficacemente i futuri insegnanti di sostegno per una carriera di successo.
        </p>
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
  )
}

export default TFA;