import React from 'react';
import FourDropComponentAux from '../../../Components/FourDropComponentAux/FourDropComponentAux';
import PreFooter from '../../../Components/PreFooter/PreFooter'
import Footer from '../../../Components/Footer/Footer'
import Navbar2 from '../../../Components/Navbar2/Navbar2'

const IngegneriaInformaticaEDellAutomazioneS = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const divContent = (
      <div className='ProgrammaCdL'>
      <h1>Corso di Laurea Magistrale in Ingegneria Informatica e dell'Automazione</h1>

      <h2>Accesso ad ulteriori studi</h2>
      <p>
        Il titolo permette l'accesso a studi di Terzo ciclo nel QF-EHEA / 8° livello EQF, come il Dottorato di Ricerca ed i Master Universitari.
      </p>

      <h2>Status professionale conferito dal titolo</h2>
      <p>
        Il laureato può esercitare la professione di ingegnere informatico e dell'automazione a livello nazionale e internazionale. 
        I settori di impiego includono:
      </p>
      <ul>
        <li>Industrie di progettazione e produzione di software</li>
        <li>Industrie di reti informatiche e telematiche</li>
        <li>Industrie di produzione di beni e servizi</li>
        <li>Impianti di produzione, trasformazione e distribuzione dell'energia</li>
        <li>Industrie manifatturiere, pubblica amministrazione e servizi</li>
        <li>Società di ingegneria e consulenza</li>
        <li>Società ed enti pubblici di gestione dei servizi</li>
        <li>Centri di ricerca e sviluppo</li>
      </ul>
      <p>
        I laureati possono iscriversi all'Ordine degli Ingegneri - Sezione A - Settore Ingegneria dell'Informazione, previo esame di stato.
      </p>

      <h2>Caratteristiche prova finale</h2>
      <p>
        La prova finale prevede la stesura di una tesi di laurea basata su un'attività di progettazione, sviluppo o ricerca. 
        La tesi viene discussa davanti a una commissione di Docenti Universitari.
      </p>

      <h2>Conoscenze richieste per l'accesso</h2>
      <p>
        È necessario possedere una laurea triennale o un titolo estero equivalente. 
        Per l'accesso diretto sono richiesti specifici requisiti curriculari. 
        Gli studenti con titoli non appartenenti alle classi indicate devono aver superato determinati CFU in specifici settori scientifico-disciplinari (SSD).
      </p>

      <h2>Obiettivi formativi specifici</h2>
      <p>
        Il corso fornisce competenze flessibili per affrontare vari settori applicativi e tecnologici dell'ingegneria informatica e dell'automazione. 
        Mira a formare professionisti in grado di risolvere problemi complessi e interdisciplinari con un elevato grado di specializzazione.
      </p>

      <h2>Titolo di studio rilasciato</h2>
      <p>
        Il titolo conseguito è di Laurea Magistrale in Ingegneria Informatica e dell'Automazione, che consente di sostenere l'esame di stato per l'albo A degli ingegneri.
      </p>

      <h2>Descrittori di Dublino</h2>
      <h3>I - Conoscenza e capacità di comprensione</h3>
      <p>
        Il laureato conoscerà e comprenderà aspetti teorico-scientifici della matematica, delle scienze di base, dell'ingegneria informatica e dell'automazione, e la lingua inglese a livello B2.
      </p>

      <h3>II - Capacità di applicare conoscenza e comprensione</h3>
      <p>
        I laureati saranno in grado di risolvere problemi complessi, applicare strumenti specializzati, e utilizzare l'inglese per interazioni tecniche internazionali.
      </p>

      <h3>III - Autonomia di giudizio</h3>
      <p>
        I laureati saranno capaci di valutare autonomamente soluzioni tecniche, organizzative ed economiche, considerando anche le implicazioni sociali ed etiche.
      </p>

      <h3>IV - Abilità comunicative</h3>
      <p>
        I laureati saranno in grado di comunicare efficacemente soluzioni tecniche sia a specialisti che a non specialisti, in italiano e in inglese.
      </p>

      <h3>V - Capacità di apprendimento</h3>
      <p>
        I laureati saranno capaci di acquisire autonomamente nuove conoscenze tecniche specializzate e mantenersi aggiornati attraverso lo studio continuo.
      </p>

      <h2>Competenze associate alla funzione</h2>
      <p>
        Le competenze includono progettazione avanzata di software e sistemi, identificazione e modellazione di processi, strategie di controllo, gestione della sicurezza informatica, e comunicazione efficace.
      </p>

      <h2>Funzione in contesto di lavoro</h2>
      <p>
        Il laureato può occupare posizioni di responsabilità nella progettazione, direzione, coordinamento e sviluppo in ambiti informatici e di automazione, collaborando con diversi specialisti.
      </p>
    </div>
    )

    const array1=['2 anni', '2021', 'Aperto', '120CFU', 'Italiano', 'Corsi di Laurea Magistrale', 'D.M. 270/2004', 'LM-32 - Classe delle lauree magistrali in Ingegneria informatica', 'No', 'Libero', 'INGEGNERIA', 'CORSO DI LAUREA ORDINARIO' ];
    const titolo=`INGEGNERIA INFORMATICA E DELL'AUTOMAZIONE`;
    const array2=[
        'Laurea Magistrale',
        'Laurea',
        'Laurea di Primo Livello',
        'Laurea Specialistica',
        'Titolo straniero',
        'Diploma Universitario',
        'Diploma in educazione fisica',
        'Diploma accademico di primo livello',
        'Diploma accademico di secondo livello'
    ];
    const array3=[`ARTIFICIAL INTELLIGENCE`, 'CYBERSECURITY', `INGEGNERIA INFORMATICA E DELL'AUTOMAZIONE`,'comune'];
    const pdf = '/IngegneriaInformaticaEDellAutomazioneS.pdf'; //messo in public
    const div = divContent;
  return (
    <>
    <div>
      <div className='ProgrammaCdL container' style={{margin: '100px auto 30px'}}>
        <h1>{titolo}</h1>
        <label> Corso di Laurea Magistrale </label>
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

export default IngegneriaInformaticaEDellAutomazioneS;