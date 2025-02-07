import React from 'react';
import FourDropComponentAux from '../../../Components/FourDropComponentAux/FourDropComponentAux';
import PreFooter from '../../../Components/PreFooter/PreFooter'
import Footer from '../../../Components/Footer/Footer'
import Navbar2 from '../../../Components/Navbar2/Navbar2'

const ScienzeDellEconomiaS = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const divContent = (  <div className='ProgrammaCdL'>
      <h1>Programma di Laurea Magistrale in Scienze dell’Economia</h1>
      
      <h2>Accesso ad Ulteriori Studi</h2>
      <p>Accesso a studi di Terzo ciclo QF-EHEA / 8° livello EQF.</p>

      <h2>Status Professionale Conferito dal Titolo</h2>
      <p>
        I laureati magistrali in Scienze Economiche possono lavorare come liberi consulenti per l'amministrazione, il controllo e il finanziamento delle imprese, e come commercialisti (dopo abilitazione) per questioni fiscali e di bilancio. Possono anche occupare ruoli di alto livello nelle pubbliche amministrazioni e nelle imprese.
      </p>

      <h2>Caratteristiche Prova Finale</h2>
      <p>
        La prova finale consiste nella valutazione di un elaborato scritto su un argomento teorico e/o sperimentale applicativo, discusso davanti a una commissione. La tesi deve dimostrare padronanza degli strumenti analitici e capacità di interpretare fenomeni con spirito critico. La prova è redatta in italiano o inglese e il titolo è conferito sulla base della valutazione del curriculum e della tesi. In caso di votazione massima, è possibile conferire la lode.
      </p>

      <h2>Obiettivi Formativi Specifici</h2>
      <p>
        Il corso prepara professionisti con competenze avanzate in aree economiche, aziendali, matematico-statistiche e giuridiche. 
        - Economico: Approfondimento della teoria economica, dinamiche dello sviluppo, e conoscenza di mercati globalizzati.
        - Aziendale: Gestione e controllo delle imprese, strategia e politica della governance.
        - Giuridico: Diritto commerciale e tributario per attività consulenziali.
        - Matematico-Statistico: Indicatori quantitativi e tecniche per decisioni complesse.
      </p>

      <h2>Titolo di Studio Rilasciato</h2>
      <p>Il titolo conseguito è Laurea Magistrale in Scienze dell’Economia, appartenente al secondo ciclo della formazione universitaria con valore legale e qualificazione di dottore magistrale.</p>

      <h2>Desrittori di Dublino</h2>
      <h3>I - Conoscenza e Capacità di Comprensione</h3>
      <p>
        - Economica: Conoscenze avanzate di metodi e fenomeni economici, capaci di elaborare idee originali e interpretare eventi in contesti internazionali.
        - Aziendale: Perfezionamento delle competenze in governance e strategia aziendale.
        - Giuridica: Conoscenza delle regole normative per la gestione aziendale.
        - Statistico-Matematica: Metodi statistici avanzati per comprendere e calibrare dinamiche economico-aziendali.
      </p>

      <h3>II - Capacità di Applicare Conoscenza e Comprensione</h3>
      <p>
        - Economica: Lettura critica della realtà e risoluzione di problematiche innovative con approccio integrato.
        - Aziendale: Gestione e sviluppo sostenibile delle imprese.
        - Giuridica: Applicazione delle conoscenze giuridiche in contesti evoluti.
        - Statistico-Matematica: Intervento su processi e strutture economiche attraverso strumenti quantitativi.
      </p>

      <h3>III - Autonomia di Giudizio</h3>
      <p>
        Il laureato avrà preparazione critica e interdisciplinare, capacità di formulare giudizi autonomi, raccogliere e interpretare dati economici e analizzare responsabilità sociali ed etiche.
      </p>

      <h3>IV - Abilità Comunicative</h3>
      <p>
        Il laureato avrà capacità di comunicare chiaramente informazioni e soluzioni a specialisti e non specialisti, sviluppate attraverso attività formative, redazione di relazioni e discussione orale.
      </p>

      <h3>V - Capacità di Apprendimento</h3>
      <p>
        Il laureato sarà in grado di aggiornare autonomamente le proprie conoscenze, individuare strumenti di formazione adeguati e sarà valutato attraverso verifica continua, preparazione di progetti e attività di tutorato.
      </p>
    </div>)

    const array1=['2 anni', '2013', 'Aperto', '120CFU', 'Italiano', 'Corsi di Laurea Magistrale', 'D.M. 270/2004', `LM-56 - Classe delle lauree magistrali in Scienze dell'economia`, 'No', 'Libero', 'ECONOMIA', 'CORSO DI LAUREA ORDINARIO' ];
    const titolo=`SCIENZE DELL'ECONOMIA`;
    const array2=['Titolo di Scuola Superiore', 'Titolo straniero'];
    const array3=[`GREEN ECONOMY E SOSTENIBILITA'`, 'SCIENZE ECONOMICHE', 'eCOMMERCE E DIGITAL MANAGEMENT', 'comune'];
    const pdf = '/ScienzeDellEconomiaS.pdf'; //messo in public
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

export default ScienzeDellEconomiaS;