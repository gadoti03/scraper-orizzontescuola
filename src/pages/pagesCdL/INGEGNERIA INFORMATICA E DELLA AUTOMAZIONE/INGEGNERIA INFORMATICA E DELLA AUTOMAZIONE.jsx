import React from 'react';
import FourDropComponentAux from '../../../Components/FourDropComponentAux/FourDropComponentAux';
import PreFooter from '../../../Components/PreFooter/PreFooter'
import Footer from '../../../Components/Footer/Footer'
import Navbar2 from '../../../Components/Navbar2/Navbar2'

const IngegneriaInformaticaEDellAutomazione = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const divContent = (  <div className='ProgrammaCdL'>
        <h1>Accesso ad Ulteriori Studi</h1>
        <p>Accesso a studi di Secondo ciclo nel QF-EHEA / 7° livello EQF.</p>
        
        <h3>Titolo di studio rilasciato.</h3>
        <p>
        Al termine del percorso di studi lo studente consegue il titolo di Laurea in Ingegneria Informatica e dell’automazione. Il titolo conseguito appartiene al primo ciclo della formazione universitaria, ha valore legale, consente la qualificazione di dottore e la possibilità di effettuare l'esame di stato per l'accesso all'albo B degli ingegneri.        </p>
      </div>)

    const array1=['3 anni', '2021', 'Aperto', '180CFU', 'Italiano', 'Corsi di Laurea', 'D.M. 270/2004', `L-8 - Classe delle lauree in Ingegneria dell'informazione`, 'No', 'Libero', 'INGEGNERIA', 'CORSO DI LAUREA ORDINARIO' ];
    const titolo=`INGEGNERIA INFORMATICA E DELL'AUTOMAZIONE (D.M. 270/04)`;
    const array2=['Titolo di Scuola Superiore', 'INGEGNERIA INFORMATICA E DELLE APP', 'SISTEMI DI ELABORAZIONE E CONTROLLO', 'comune'];
    const array3=['DATABASE', 'DRONI', 'comune'];
    const pdf = '/IngegneriaInformaticaEDellAutomazione.pdf'; //messo in public
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

export default IngegneriaInformaticaEDellAutomazione;