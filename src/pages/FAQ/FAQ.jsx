import React, { useEffect } from 'react';

import './FAQ.css';

import PreFooter from '../../Components/PreFooter/PreFooter';
import Footer from '../../Components/Footer/Footer';
import Navbar2 from '../../Components/Navbar2/Navbar2';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Navbar2 />
      </div>
      <div className='FAQ container'>
        <h3>Polo Universitario 128 Tito (PZ)</h3>
        <p>
          <strong>Che cos'è il Polo Universitario 128 di Tito (PZ)?</strong><br />
          Il Polo Universitario 128 di Tito (PZ) è un centro accademico situato in Basilicata che offre una vasta gamma di corsi universitari in collaborazione con diverse università italiane. È un punto di riferimento per gli studenti che desiderano frequentare corsi di laurea e altri programmi formativi direttamente nella regione.
        </p>
        <p>
          <strong>Quali corsi sono disponibili presso il Polo Universitario 128?</strong><br />
          Il Polo Universitario 128 offre corsi di laurea triennali e magistrali in ingegneria, economia, giurisprudenza, pscicologia e lettere.
        </p>
        <p>
          <strong>Come posso iscrivermi ai corsi offerti dal Polo Universitario 128?</strong><br />
          Per iscriversi ai corsi offerti dal Polo Universitario 128 di Tito, è possibile visitare il sito ufficiale del polo, dove troverai tutte le informazioni relative alle modalità di iscrizione, ai requisiti e alle scadenze.
        </p>

        <h3>TFA (Tirocinio Formativo Attivo)</h3>
        <p>
          <strong>Cos'è il TFA (Tirocinio Formativo Attivo)?</strong><br />
          Il TFA è un pfercorso formativo abilitante per l'insegnamento nella scuola secondaria di primo e secondo grado. È un programma che combina formazione teorica e pratica per preparare i futuri insegnanti ad affrontare le sfide dell'insegnamento nelle scuole italiane.
        </p>
        <p>
          <strong>Come posso accedere al TFA?</strong><br />
          Per accedere al TFA, è necessario superare un concorso pubblico che include una prova preliminare, una prova scritta e una prova orale. Una volta ammessi, i candidati seguiranno corsi di formazione specifici e completeranno un tirocinio presso una scuola.
        </p>
        <p>
          <strong>Quali sono i benefici del TFA?</strong><br />
          Il completamento del TFA consente di ottenere l'abilitazione all'insegnamento nella scuola secondaria, aprendo così la strada a una carriera stabile e gratificante nel settore educativo. Inoltre, il TFA fornisce competenze pratiche fondamentali per la gestione della classe e l'insegnamento efficace.
        </p>

        <h3>Info Point Scuola Moscati</h3>
        <p>
          <strong>Cos'è l'Info Point Scuola Moscati?</strong><br />
          L'Info Point Scuola Moscati è uno sportello informativo dedicato agli studenti e alle famiglie che cercano informazioni sui servizi educativi offerti dalla Scuola Moscati. Qui puoi ricevere assistenza su iscrizioni, programmi educativi, attività extracurriculari e molto altro.
        </p>
        <p>
          <strong>Quali servizi offre l'Info Point Scuola Moscati?</strong><br />
          L'Info Point offre consulenza su tutti gli aspetti legati alla vita scolastica, tra cui le procedure di iscrizione, le opportunità di borse di studio, il calendario scolastico e i dettagli sui programmi didattici. È un punto di riferimento per chi desidera maggiori informazioni sulla scuola e sulle sue offerte educative.
        </p>
      </div>
      <div>
        <PreFooter />
        <Footer />
      </div>
    </>
  );
}

export default FAQ;
