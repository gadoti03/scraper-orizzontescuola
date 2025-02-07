import React from 'react';
import FourDropComponentAux from '../../../Components/FourDropComponentAux/FourDropComponentAux';
import PreFooter from '../../../Components/PreFooter/PreFooter'
import Footer from '../../../Components/Footer/Footer'
import Navbar2 from '../../../Components/Navbar2/Navbar2'

const ScienzeETecnichePsicologiche = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const divContent = (<div className='ProgrammaCdL'>
    <h1>Corso di Laurea in Scienze e Tecniche Psicologiche</h1>

    <h2>Accesso ad Ulteriori Studi</h2>
    <p>
      Il titolo consente l'accesso a studi di Secondo ciclo nel QF-EHEA / 7° livello EQF.
    </p>

    <h2>Status Professionale Conferito dal Titolo</h2>
    <p>
      Il laureato potrà accedere alla professione di Specialista in Scienze e Tecniche Psicologiche e potrà accedere alla Laurea Magistrale in Psicologia. Potrà anche proseguire con la formazione post laurea.
    </p>
    <p>
      Il Corso di Laurea consente l'acquisizione di competenze per operare in contesti come istituzioni, aziende, scuole e organizzazioni pubbliche e private sotto la direzione di uno psicologo Senior.
    </p>

    <h2>Caratteristiche della Prova Finale</h2>
    <p>
      La prova finale consiste nella preparazione di un elaborato scritto o di una ricerca tecnico-applicativa su un argomento concordato con un docente. Il lavoro è supervisionato dal relatore e deve dimostrare capacità di sintesi e qualità della presentazione.
    </p>
    <ul>
      <li>Approfondimento metodologico</li>
      <li>Elaborazione di un caso di studio</li>
      <li>Rielaborazione di un'esperienza di tirocinio</li>
      <li>Altre modalità specificate nel regolamento del corso</li>
    </ul>

    <h2>Obiettivi Formativi Specifici</h2>
    <p>
      Il corso mira a fornire conoscenze teoriche e metodologiche nelle discipline psicologiche, comprese psicologia cognitiva, sociale, clinica, dello sviluppo e metodologie di ricerca. Gli studenti acquisiranno anche strumenti tecnico-professionali per operare in vari contesti, tra cui psicosociali, ergonomici, e della valutazione psicodiagnostica.
    </p>
    <p>
      Gli obiettivi includono:
    </p>
    <ul>
      <li>Utilizzare tecniche di diagnosi e intervento in contesti educativi e professionali</li>
      <li>Applicare tecniche per identificare e trattare problemi di sviluppo cognitivo e sociale</li>
      <li>Operare nella gestione delle risorse umane e progettazione di interventi</li>
      <li>Collaborare con operatori di diverse formazioni professionali</li>
    </ul>

    <h2>Titolo di Studio Rilasciato</h2>
    <p>
      Al termine del percorso, lo studente consegue il titolo di Laurea in Scienze e Tecniche Psicologiche, con valore legale e possibilità di accedere all’esame di stato per l’albo B degli psicologi.
    </p>

    <h2>Descrittori di Dublino</h2>

    <h3>I - Conoscenza e Capacità di Comprensione</h3>
    <ul>
      <li>Fondamenti della Psicologia: Conoscenze su percezione, apprendimento, memoria, ecc.</li>
      <li>Formazione Interdisciplinare: Conoscenze trasversali in vari ambiti (antropologia, biologia, ecc.)</li>
      <li>Psicologia Generale e Fisiologica: Teorie e aree di ricerca della psicologia</li>
      <li>Psicologia Sociale e del Lavoro: Strumenti per selezione, valutazione e formazione</li>
      <li>Psicologia Dinamica e Clinica: Metodologie e strumenti per la valutazione psicodinamica</li>
      <li>Psicologia dello Sviluppo e dell'Educazione: Conoscenze sui processi di sviluppo della comunicazione e del linguaggio</li>
    </ul>

    <h3>II - Capacità di Applicare Conoscenza e Comprensione</h3>
    <ul>
      <li>Applicazione pratica delle conoscenze in ambito professionale e aziendale</li>
      <li>Capacità di operare con strumenti psicodiagnostici e metodologie specifiche</li>
      <li>Applicazione critica delle conoscenze acquisite a contesti operativi</li>
    </ul>

    <h3>III - Autonomia di Giudizio</h3>
    <p>
      I laureati svilupperanno autonomia nella documentazione, osservazione e conduzione di indagini. Saranno capaci di utilizzare strumenti psicodiagnostici in modo critico e consapevole e di collaborare nella progettazione di interventi.
    </p>

    <h3>IV - Abilità Comunicative</h3>
    <p>
      La capacità di sintetizzare e comunicare in modo chiaro e preciso è essenziale. Gli studenti devono padroneggiare la comunicazione telematica e consultare fonti bibliografiche in più lingue.
    </p>

    <h3>V - Capacità di Apprendimento</h3>
    <p>
      I laureati devono sviluppare capacità di apprendimento autonomo per intraprendere studi successivi e applicare le conoscenze acquisite in contesti complessi e professionali.
    </p>
  </div>)

    const array1=['3 anni', '2010', 'Aperto', '180CFU', 'Italiano', 'Corsi di Laurea', 'D.M. 270/2004', `    L-24 - Classe delle lauree in Scienze e tecniche psicologiche`, 'No', 'Immatricolazione non consentita', 'PSICOLOGIA', 'CORSO DI LAUREA ORDINARIO' ];
    const titolo=`SCIENZE E TECNICHE PSICOLOGICHE (D.M. 270/04)`;
    const array2=['Titolo di Scuola Superiore', 'Titolo straniero'];
    const array3=['SCIENZE E TECNICHE PSICOLOGICHE'];
    const pdf = '/ScienzeETecnichePsicologiche.pdf'; //messo in public
    const div = divContent;
  return (
    <>
    <div>
      <div className='ProgrammaCdL container' style={{margin: '100px auto 30px'}}>
        <h1>{titolo}</h1>
        <label> Corso di Laurea </label>
        <p>Essendo questo Course Catalogue una guida all'offerta formativa corrente dell'Ateneo le descrizioni e le caratteristiche del presente corso di studio si riferiscono sempre all' ultimo ordinamento e regolamento vigenti.</p>
      </div>
      <Navbar2/>
    </div>
    <FourDropComponentAux array1={array1} array2={array2} array3={array3} pdf={pdf} div={div}/>
    <div>
        <PreFooter/>
        <Footer/>
      </div>
    </>

  );
};

export default ScienzeETecnichePsicologiche;