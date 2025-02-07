import React from 'react';
import FourDropComponentAux from '../../../Components/FourDropComponentAux/FourDropComponentAux';
import PreFooter from '../../../Components/PreFooter/PreFooter'
import Footer from '../../../Components/Footer/Footer'
import Navbar2 from '../../../Components/Navbar2/Navbar2'

const ScienzePedagogicheS = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const divContent = (  <div className='ProgrammaCdL'>
        <h1>Accesso ad Ulteriori Studi</h1>
        <p>Accesso a studi di Terzo ciclo nel QF-EHEA / 8° livello EQF</p>
        
        <h3>Titolo di studio rilasciato.</h3>
        <p>
        Al termine del percorso di studi lo studente consegue il titolo di Laurea Magistrale in Scienze Pedagogiche. Il titolo conseguito appartiene al secondo ciclo della formazione universitaria, ha valore legale e consente la qualificazione di dottore magistrale.        </p>
        </div>)

    const array1=['2 anni', '2023', 'Aperto', '120CFU', 'Italiano', 'Corsi di Laurea Magistrale', 'D.M. 270/2004', 'LM-61 - Classe delle lauree magistrali in Scienze della nutrizione umana', 'No', 'Libero', 'PSICOLOGIA', 'CORSO DI LAUREA ORDINARIO' ];
    const titolo=`SCIENZE PEDAGOGICHE`;
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
    const array3=['E-LEARNING, DIDATTICA DIGITALE E MEDIA EDUCATION', `PEDAGOGIA DELLA MARGINALITA' E DELLA DISABILITA'`, 'PEDAGOGIA E SCIENZE UMANE'];
    const pdf = '/ScienzePedagogicheS.pdf'; //messo in public
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

export default ScienzePedagogicheS;