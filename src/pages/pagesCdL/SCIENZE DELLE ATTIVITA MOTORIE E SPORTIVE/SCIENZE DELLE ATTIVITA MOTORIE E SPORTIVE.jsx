import React from 'react';
import FourDropComponentAux from '../../../Components/FourDropComponentAux/FourDropComponentAux';
import PreFooter from '../../../Components/PreFooter/PreFooter'
import Footer from '../../../Components/Footer/Footer'
import Navbar2 from '../../../Components/Navbar2/Navbar2'

const ScienzeDelleAttivitaMotorieESportive = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const divContent = (    <div className='ProgrammaCdL'>
  <h1>Corso di Laurea in Scienze delle Attività Motorie e Sportive</h1>

  <h2>Accesso ad Ulteriori Studi</h2>
  <p>Il titolo consente l'accesso a studi di Secondo ciclo nel QF-EHEA / 7° livello EQF.</p>

  <h2>Status Professionale e Sbocchi Occupazionali</h2>
  <p>Il laureato può lavorare come:</p>
  <ul>
    <li>Mediatore nella prevenzione di rischio per la salute</li>
    <li>Operatore nella comunicazione tecnico-sportiva</li>
    <li>Educatore motorio per la salute personale</li>
    <li>Consulente e operatore di società sportive e centri sportivi</li>
    <li>Preparatore fisico e esperto in allenamento motorio</li>
    <li>Manager di strutture sportive</li>
  </ul>

  <h2>Caratteristiche della Prova Finale</h2>
  <p>La prova finale prevede la preparazione di un elaborato originale con la guida di un relatore e di un tutor. Deve dimostrare competenza nei temi trattati, capacità tecniche e comunicative.</p>

  <h2>Conoscenze Richieste per l'Accesso</h2>
  <p>È necessario avere un diploma di scuola secondaria di secondo grado e conoscenze di base in:</p>
  <ul>
    <li>Anatomia umana</li>
    <li>Chimica</li>
    <li>Biologia</li>
    <li>Fisica</li>
    <li>Lingua inglese e italiana (per studenti stranieri)</li>
  </ul>

  <h2>Obiettivi Formativi Specifici</h2>
  <p>Il corso mira a formare professionisti con competenze in:</p>
  <ul>
    <li>Educazione motoria e sportiva</li>
    <li>Prevenzione e mantenimento della salute</li>
    <li>Organizzazione e gestione di attività motorie</li>
    <li>Interazione con i media sportivi</li>
    <li>Collaborazione con figure professionali del settore</li>
  </ul>

  <h2>Struttura del Corso</h2>
  <p>Il corso di laurea è di tre anni e include:</p>
  <ul>
    <li>Lezioni teoriche e pratiche</li>
    <li>Esercitazioni interattive e seminari</li>
    <li>Tirocini formativi</li>
    <li>Approfondimento della lingua inglese</li>
  </ul>

  <h2>Verifica delle Competenze</h2>
  <p>La verifica avviene tramite prove scritte, orali, e un elaborato finale. Gli insegnamenti sono valutati in trentesimi.</p>

  <h2>Titolo di Studio Rilasciato</h2>
  <p>Al termine del percorso si consegue il titolo di Laurea in Scienze delle Attività Motorie e Sportive, con valore legale e qualificazione di dottore.</p>

  <h2>Desrittori di Dublino</h2>

  <h3>Conoscenza e Capacità di Comprensione</h3>
  <p>Lo studente acquisisce conoscenze approfondite nelle discipline motorie, basi biologiche, anatomiche e fisiologiche, e competenze medico-cliniche, psicologiche, pedagogiche, giuridico-economiche, e informatiche.</p>

  <h3>Capacità di Applicare Conoscenza e Comprensione</h3>
  <p>Il laureato sviluppa la capacità di applicare le conoscenze acquisite nella pratica sportiva, medico-clinica, e nella gestione di strutture sportive.</p>

  <h3>Autonomia di Giudizio</h3>
  <p>Il laureato è in grado di operare autonomamente, analizzare e valutare interventi di allenamento, gestire contesti di sviluppo e responsabilità legali.</p>

  <h3>Abilità Comunicative</h3>
  <p>Lo studente sviluppa competenze per motivare, coinvolgere e comunicare efficacemente le proprie competenze professionali.</p>

  <h3>Capacità di Apprendimento</h3>
  <p>Il corso prepara lo studente a un continuo aggiornamento scientifico e professionale e all'accesso a risorse culturali e tecniche.</p>

  <h2>Competenze Associate alla Funzione</h2>
  <p>Il laureato acquisisce competenze per:</p>
  <ul>
    <li>Gestire dinamiche relazionali e affettive</li>
    <li>Promuovere la cultura del movimento e della prevenzione</li>
    <li>Conducere e gestire attività motorie e sportive</li>
    <li>Gestire strutture sportive e pianificare nuove iniziative</li>
  </ul>

  <h2>Funzione in Contesto di Lavoro</h2>
  <p>Il laureato può ricoprire ruoli educativi, tecnici, gestionali e organizzativi in ambito sportivo, culturale e ricreativo.</p>
</div>)

    const array1=['3 anni', '2019', 'Aperto', '180CFU', 'Italiano', 'Corsi di Laurea', 'D.M. 270/2004', 'L-22 - Classe delle lauree in Scienze delle attività motorie e sportive', 'No', 'Libero', 'PSICOLOGIA', 'CORSO DI LAUREA ORDINARIO' ];
    const titolo=`SCIENZE DELLE ATTIVITA' MOTORIE E SPORTIVE`;
    const array2=['Titolo di Scuola Superiore', 'Titolo straniero'];
    const array3=['BASE', 'SPORT AND FOOTBALL MANAGEMENT', 'comune'];
    const pdf = '/ScienzeDelleAttivitaMotorieESportive.pdf'; //messo in public
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

export default ScienzeDelleAttivitaMotorieESportive;