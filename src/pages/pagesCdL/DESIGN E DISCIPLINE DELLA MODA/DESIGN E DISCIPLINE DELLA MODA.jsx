import React from 'react';
import FourDropComponentAux from '../../../Components/FourDropComponentAux/FourDropComponentAux';
import PreFooter from '../../../Components/PreFooter/PreFooter'
import Footer from '../../../Components/Footer/Footer'
import Navbar2 from '../../../Components/Navbar2/Navbar2'

const DesignEDisciplineDellaModa = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const divContent = (  <div className='ProgrammaCdL'>
  <h1>Accesso ad Ulteriori Studi</h1>
  <p>Accesso a studi di Secondo ciclo nel QF-EHEA / 7° livello EQF.</p>
  
  <h3>Titolo di studio rilasciato.</h3>
  <p>
  Al termine del percorso di studi lo studente consegue il titolo di Laurea in Design e Discipline della Moda. Il titolo conseguito appartiene al primo ciclo della formazione universitaria, ha valore legale e consente la qualificazione di dottore.
  </p>
</div>)

    const array1=['3 anni', '2017', 'Aperto', '180CFU', 'Italiano', 'Corsi di Laurea', 'D.M. 270/2004', 'L-3 - Classe delle lauree in Discipline delle arti figurative, della musica, dello spettacolo e della moda', 'No', 'Libero', 'LETTERE', 'CORSO DI LAUREA ORDINARIO' ];
    const titolo='DESIGN E DISCIPLINE DELLA MODA (D.M. 270/04)';
    const array2=['Titolo di Scuola Superiore', 'Titolo straniero'];
    const array3=['DESIGN E DISCIPLINE DELLA MODA'];
    const pdf = '/DesignEDisciplineDellaModa.pdf'; //messo in public
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

export default DesignEDisciplineDellaModa;