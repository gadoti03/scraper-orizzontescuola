import React from 'react';
import FourDropComponentAux from '../../../Components/FourDropComponentAux/FourDropComponentAux';
import PreFooter from '../../../Components/PreFooter/PreFooter'
import Footer from '../../../Components/Footer/Footer'
import Navbar2 from '../../../Components/Navbar2/Navbar2'

const ScienzeDelTurismoPerIlManagementEBeniCulturali = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const divContent = (  <div className='ProgrammaCdL'>
  <h1>Corso di Studi in Scienze del Turismo per il Management e i Beni Culturali</h1>

<h2>Accesso agli studi successivi</h2>
<p>
  Il corso consente l'accesso a studi di secondo ciclo nel QF-EHEA e al 7° livello EQF.
</p>

<h2>Status professionale conferito dal titolo</h2>
<p>
  Il titolo consente di lavorare in una vasta gamma di istituzioni, agenzie e organismi del settore turistico, culturale e del management, sia nel pubblico che nel privato. Possibili ruoli includono:
  <ul>
    <li>Agenzie pubbliche e istituti di ricerca</li>
    <li>Agenzie turistiche e di viaggio</li>
    <li>Strutture ricettive alberghiere e ristorative</li>
    <li>Enti locali e Pubbliche Amministrazioni</li>
    <li>Esperti di analisi del mercato turistico</li>
    <li>Organizzazione di eventi culturali e ricreativi</li>
    <li>Progettazione e promozione di itinerari turistici</li>
    <li>Gestione di prodotti turistici integrati</li>
    <li>Progettazione e gestione eventi/servizi museali</li>
    <li>Operatore culturale e museale</li>
    <li>Imprese e servizi turistici</li>
    <li>Istituzioni culturali</li>
    <li>Società di consulenza</li>
  </ul>
</p>

<h2>Caratteristiche della prova finale</h2>
<p>
  La prova finale consiste nella redazione di un elaborato sotto la guida di un docente-relatore, basato su tematiche didattiche, casi di studio o altre modalità concordate con il relatore.
</p>

<h2>Conoscenze richieste per l'accesso</h2>
<p>
  Necessario un diploma di scuola secondaria superiore o titolo equivalente. Richiesta buona padronanza dell'italiano, conoscenza dell'inglese, e basi di cultura generale storica, artistica ed economica. Modalità di verifica e obblighi formativi aggiuntivi sono specificati nel Regolamento Didattico.
</p>

<h2>Obiettivi formativi specifici</h2>
<p>
  Il corso mira a:
  <ul>
    <li>Fornire conoscenze e competenze nel settore turistico a livello locale, nazionale e internazionale</li>
    <li>Offrire conoscenze di base nelle diverse discipline del turismo</li>
    <li>Fornire competenze in cultura organizzativa dei contesti turistici</li>
    <li>Applicare tecniche di comunicazione e promozione dei beni culturali</li>
    <li>Utilizzare strumenti informatici per elaborazione e comunicazione</li>
    <li>Padroneggiare due lingue europee oltre all'italiano</li>
  </ul>
</p>

<h2>Titolo di studio rilasciato</h2>
<p>
  Laurea in Scienze del Turismo per il Management e i Beni Culturali. Titolo di primo ciclo con valore legale e qualificazione di dottore.
</p>

<h2>Descrittori di Dublino</h2>

<h3>I - Conoscenza e capacità di comprensione</h3>
<p>
  Area economico-giuridica: il laureato acquisirà conoscenze fondamentali di economia aziendale, gestione d'impresa, marketing turistico, organizzazione delle aziende turistiche e diritto pubblico.
</p>
<p>
  Area socio-storico-geografica: il laureato avrà solide conoscenze storiche, sociologiche e geografiche, comprendendo il valore storico-culturale del patrimonio e le problematiche sociali e territoriali del turismo.
</p>
<p>
  Area artistico-letteraria e linguistica: il laureato conoscerà testimonianze artistiche, emergenze architettoniche, e svilupperà competenze linguistiche in due lingue europee, oltre all'italiano, con orientamento specialistico nel turismo e nei beni culturali.
</p>

<h3>II - Capacità di applicare conoscenza e comprensione</h3>
<p>
  Il laureato sarà in grado di applicare conoscenze manageriali, giuridiche, storiche, sociologiche e linguistiche per analizzare problemi e proporre soluzioni nei settori del turismo e dei beni culturali.
</p>

<h3>III - Autonomia di giudizio</h3>
<p>
  Il laureato acquisirà capacità di analisi critica e autonomia di giudizio nell'interpretare dati e situazioni complesse, sviluppando soluzioni efficaci in ambito manageriale e organizzativo nel turismo.
</p>

<h3>IV - Abilità comunicative</h3>
<p>
  Il laureato sarà in grado di comunicare efficacemente con diverse tipologie di interlocutori nel settore turistico, utilizzando terminologia tecnica appropriata e competenze linguistiche in italiano e in due lingue europee.
</p>

<h3>V - Capacità di apprendimento</h3>
<p>
  Il laureato svilupperà un metodo di studio critico e assimilativo, capace di approfondire tematiche complesse e intraprendere studi successivi con maturità scientifica e autonomia.
</p>

<h2>Competenze associate alla funzione</h2>
<p>
  Il corso offre una formazione teorica e pratica in ambito economico, aziendale, storico-artistico, linguistico e manageriale, fondamentale per operare nei settori del turismo e della promozione culturale.
</p>

<h2>Funzione in contesto di lavoro</h2>
<p>
  Il laureato potrà ricoprire ruoli operativi e direttivi in amministrazione, gestione, progettazione e promozione di prodotti e servizi turistici, operando in strutture ricettive, enti pubblici, agenzie turistiche e aziende di servizi nel settore turistico.
</p>
</div>)

    const array1=['3 anni', '2021', 'Aperto', '180CFU', 'Italiano', 'Corsi di Laurea', 'D.M. 270/2004', 'L-15 - Classe delle lauree in Scienze del turismo', 'No', 'Libero', 'ECONOMIA', 'CORSO DI LAUREA ORDINARIO' ];
    const titolo='SCIENZE DEL TURISMO PER IL MANAGEMENT E I BENI CULTURALI'
    const array2=['Titolo di Scuola Superiore', 'Titolo straniero'];
    const array3=['COMUNE', `MANAGEMENT DELL'OSPITALITA' E DEL TERRITORIO`, 'MANAGEMENT E TURISMO CULTURALE'];
    const pdf = '/ScienzeDelTurismoPerIlManagementEBeniCulturali.pdf'; //messo in public
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

export default ScienzeDelTurismoPerIlManagementEBeniCulturali;