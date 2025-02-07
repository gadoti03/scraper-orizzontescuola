import React, { useEffect } from 'react';
import './Polo128.css';

import sfondoCdL from '../../assets/sfondoLungoPolo128.webp'

import PreFooter from '../../Components/PreFooter/PreFooter'
import Footer from '../../Components/Footer/Footer'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import Contatti from '../../Components/Contact/Contact'
import Title from '../../Components/Title/Title'
import Programs2 from '../../Components/Programs2/Programs2'
import DropComponent from '../../Components/DropComponent/DropComponent'


import { Link } from 'react-router-dom';


const Polo128 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const div1 = <div className="Polo128-section"><p>Le nostre tariffe vantaggiose offrono un significativo risparmio rispetto ad eCampus, con sconti che variano dal <strong>20%</strong> al <strong>50%</strong>.</p><p>Questo approccio permette di rendere l'istruzione di alta qualità accessibile a un pubblico più ampio, senza compromettere i valori fondamentali dell'educazione.</p><p>Il nostro impegno è quello di fornire un'esperienza educativa eccellente a <strong>costi contenuti</strong>, consentendo agli studenti di investire nelle loro competenze e nel loro futuro senza gravare eccessivamente sulle finanze personali o familiari.</p></div>;

  const div2 = <div className="Polo128-section"><p>Il nostro programma di <strong>tutoraggio interno</strong> è stato sviluppato per offrire un <strong>supporto continuo e personalizzato</strong> a ogni studente.</p><p>I nostri tutor esperti sono sempre disponibili per rispondere a domande, fornire chiarimenti e offrire consigli pratici.</p><p>Crediamo fermamente che un supporto adeguato possa fare la differenza nel percorso accademico di uno studente, aiutandolo a superare le difficoltà e a raggiungere i propri obiettivi. Con il <strong>tutoraggio dedicato</strong>, garantiamo che ogni studente riceva l'attenzione necessaria per eccellere.</p></div>;
  
  const div3 = <div className="Polo128-section"><p>Offriamo una vasta gamma di opportunità di <strong>tirocini interni</strong>, grazie alle nostre collaborazioni con aziende e istituzioni leader del settore.</p><p>Questi tirocini sono progettati per fornire agli studenti un'<strong>esperienza pratica rilevante</strong>, che integra la teoria appresa in aula con competenze reali richieste dal mondo del lavoro.</p><p>I tirocini interni rappresentano un ponte concreto tra l'istruzione e la carriera professionale, permettendo agli studenti di acquisire un <strong>vantaggio competitivo</strong> e di entrare nel mercato del lavoro con fiducia e preparazione.</p></div>;
  
  const div4 = <div className="Polo128-section"><p>Sei pronto per iniziare il tuo percorso universitario? Qui troverai tutte le informazioni necessarie per completare l’iscrizione al corso di laurea che hai scelto.</p><p>Ma non devi affrontare tutto da solo: il nostro team è qui per offrirti <strong>supporto completo</strong> in ogni fase del processo.</p><p>Dalla preparazione dei documenti alla gestione delle pratiche, siamo al tuo fianco per rendere l’iscrizione il più semplice e fluida possibile.</p><p>Per iniziare, puoi compilare il <strong>form sottostante</strong> o <strong>contattarci direttamente</strong> per ricevere assistenza personalizzata. Scopri come procedere e approfitta della nostra <strong>assistenza dedicata</strong></p></div>;

  const div = <><li>5 facoltà con una vasta gamma di specializzazioni per soddisfare ogni interesse accademico</li>
  <hr />
  <li>Oltre 65 corsi di laurea per una formazione completa e diversificata</li>
  <hr />
  <li>Assistenza personalizzata con tutor dedicati per supportare il tuo percorso accademico</li>
  <hr />
  <li>Opportunità di tirocini interni per acquisire esperienza pratica e concreta</li>
  <hr />
  <li>Accesso a risorse didattiche esclusive e supporto per lo sviluppo professionale</li>
  <hr />
  <li>Integrazione con il territorio locale per progetti e collaborazioni aziendali</li>
  </>

  const divButton = <Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn dark-btn'>Contattaci</button></Link>

  return (
    <>
      <Navbar2/>
      <div className='sfondoNavber2'>
        <img src={sfondoCdL} alt=""/>
      </div>
      <div className='container noSfondoNavbar2'>
      <Title subTitle='POLO UNIVERSITARIO 128' title='Connessione Accademica per il Tuo Territorio'/>
      <div className='polo128-container'>
      <div className='polo128-text'>
        <p>
          Siamo lieti di presentarvi il <strong>Polo128 eCampus di Tito</strong>, un centro educativo che va oltre le convenzioni delle università telematiche. Situato in una posizione strategica, il nostro campus non solo offre un ambiente di apprendimento <strong>moderno e all’avanguardia</strong>, ma si dedica anche attivamente alla <strong>valorizzazione del territorio</strong>.
        </p>
        <p>
          Il Polo128 eCampus di Tito rappresenta un punto di riferimento per il <strong>progresso e l'innovazione</strong> della nostra regione. La nostra missione è quella di stimolare lo <strong>sviluppo economico locale</strong> attraverso la collaborazione con imprese e istituzioni del territorio. Questo impegno per la crescita regionale non solo contribuisce al benessere della comunità, ma crea anche un <strong>ecosistema favorevole all'apprendimento</strong> e alla prosperità.
        </p>
        <p>
          A differenza di altri poli universitari telematici, il Polo128 eCampus di Tito si distingue per il suo approccio <strong>pratico e personalizzato</strong> all'istruzione. Offriamo un <strong>supporto diretto e interattivo</strong> ai nostri studenti grazie a un servizio di tutoraggio dedicato. I nostri tutor sono sempre disponibili per fornire assistenza e rispondere alle domande, garantendo un'esperienza formativa di alta qualità.
        </p>
        <p>
          Inoltre, il Polo128 eCampus non si limita alla teoria. Offriamo ai nostri studenti opportunità concrete di applicare le competenze acquisite attraverso <strong>tirocini interni</strong>. Questi tirocini permettono di lavorare su progetti reali, fornendo un'esperienza pratica che arricchisce il percorso educativo e prepara gli studenti a entrare nel mercato del lavoro con un <strong>bagaglio di competenze concreto e valorizzabile</strong>.
        </p>
        <p>
          Per scoprire come il Polo128 eCampus di Tito può aiutarti a raggiungere i tuoi obiettivi accademici e professionali, visita il nostro sito web o contattaci direttamente. Siamo qui per supportarti nel <strong>costruire un futuro brillante</strong>!
        </p>
      </div>
    </div>
      <Title subTitle="Inizia il Tuo Percorso" title='La Nostra Offerta eCampus'/>
      <Programs2/>
      <Title subTitle='perché sceglierci' title='I vantaggi che offriamo'/>
      <DropComponent>
        <div title='Risparmio Intelligente: Il Nostro Vantaggio Economico su eCampus'>{div1}</div>
        <div title='Tutoraggio Dedicato: Supporto Interno Personalizzato'>{div2}</div>
        <div title='Tirocini Integrati: Esperienza Pratica Garantita'>{div3}</div>
        <div title="Il Tuo Percorso Universitario Inizia Qui: Supporto Completo per l'Iscrizione!">{div4}</div>
      </DropComponent>
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

export default Polo128