import React, { useEffect, useState } from 'react';

import './Polo128CdL.css';

import { Link } from 'react-router-dom';

import PreFooter from '../../Components/PreFooter/PreFooter'
import Footer from '../../Components/Footer/Footer'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import TableRata from '../../Components/TableRataPolo128CdL/TableRataPolo128CdL'
import Contatti from '../../Components/Contact/Contact'
import Title from '../../Components/Title/Title'
import TablePolo from '../../Components/TablePolo128/TablePolo128'

const courses = {
  primoLivello: {
    Economia: [
      { name: 'Economia (D.M. 270/04)', items: ['Econ Item 1', 'Econ Item 2', 'Econ Item 3'] },
      { name: 'Scienze del turismo per il management e i beni culturali', items: ['Tourism Item 1', 'Tourism Item 2'] }
    ],
    Giurisprudenza: [
      { name: 'Scienze della comunicazione', items: ['Comm Item 1', 'Comm Item 2', 'Comm Item 3', 'Comm Item 4'] },
      { name: 'Scienze politiche e sociali', items: ['PoliSci Item 1', 'PoliSci Item 2'] },
      { name: 'Servizi giuridici', items: ['Law Services Item 1'] }
    ],
    Ingegneria: [
      { name: 'Ingegneria civile e ambientale (D.M. 270/04)', items: ['Civil Eng Item 1'] },
      { name: 'Ingegneria industriale (D.M. 270/04)', items: ['Industrial Eng Item 1', 'Industrial Eng Item 2'] },
      { name: 'Ingegneria informatica e dell’automazione (D.M. 270/04)', items: ['Comp Eng Item 1', 'Comp Eng Item 2', 'Comp Eng Item 3'] }
    ],
    Lettere: [
      { name: 'Design e discipline della moda (D.M. 270/04)', items: ['Design Item 1'] },
      { name: 'Letteratura, arte, musica e spettacolo', items: ['Literature Item 1', 'Literature Item 2'] },
      { name: 'Lingue e culture europee e del resto del mondo', items: ['Languages Item 1', 'Languages Item 2', 'Languages Item 3'] }
    ],
    Psicologia: [
      { name: 'Scienze delle attività motorie e sportive', items: ['Sports Sci Item 1', 'Sports Sci Item 2'] },
      { name: 'Scienze dell’educazione e della formazione', items: ['Education Sci Item 1'] },
      { name: 'Scienze e tecniche psicologiche (D.M. 270/04)', items: ['Psych Techniques Item 1', 'Psych Techniques Item 2', 'Psych Techniques Item 3'] },
      { name: 'Scienze biologiche', items: ['Biological Sci Item 1'] }
    ]
  },
  cicloUnico: {
    Giurisprudenza: [
      { name: 'Giurisprudenza (D.M. 270/04)', items: ['Law Item 1', 'Law Item 2', 'Law Item 3', 'Law Item 4'] }
    ]
  },
  secondoLivello: {
    Economia: [
      { name: 'Scienze dell’economia', items: ['Econ Sci Item 1', 'Econ Sci Item 2'] }
    ],
    Ingegneria: [
      { name: 'Ingegneria civile', items: ['Civil Eng Sci Item 1'] },
      { name: 'Ingegneria industriale', items: ['Industrial Eng Sci Item 1', 'Industrial Eng Sci Item 2'] },
      { name: 'Ingegneria informatica e dell’automazione', items: ['Comp Eng Sci Item 1', 'Comp Eng Sci Item 2'] }
    ],
    Lettere: [
      { name: 'Letteratura, lingua e cultura italiana', items: ['Italian Lit Item 1', 'Italian Lit Item 2'] },
      { name: 'Lingue e letterature moderne e traduzione interculturale', items: ['Modern Languages Item 1'] }
    ],
    Psicologia: [
      { name: 'Psicologia', items: ['Psych Item 1', 'Psych Item 2', 'Psych Item 3'] },
      { name: 'Scienze dell’esercizio fisico per il benessere e la salute', items: ['Exercise Sci Item 1'] },
      { name: 'Scienze della nutrizione umana', items: ['Nutrition Sci Item 1', 'Nutrition Sci Item 2'] },
      { name: 'Scienze pedagogiche', items: ['Pedagogical Sci Item 1'] }
    ]
  }

};

const Polo128CdL = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <div>
      <Navbar2/>
    </div>
      <div className='container'>
        <div className='tablePolo-container'>
        <TablePolo />
        </div>
        <div className='corsiSingoli'>
          <h3>Torna a <span><Link to={'/Polo_universitario_128_eCampus'}>Polo 128 eCampus</Link></span></h3>
        </div>
        <Title subTitle='ESLORA I CORSI' title='Tre Percorsi di Laurea per il Tuo Futuro'/>
        <div className='polo128CdL-text'>
        <p>La nostra offerta formativa comprende tre distinti percorsi di laurea per soddisfare le diverse ambizioni degli studenti. Il <strong>Corso di Laurea 1</strong> rappresenta una scelta tradizionale e solida. I <strong>Corsi di Laurea Innovativi</strong> sono progettati per chi desidera un'istruzione moderna e orientata al futuro. Infine, la <strong>Laurea in Scienze Biologiche</strong> è dedicata a chi vuole approfondire le scienze della vita, con un approccio pratico e teorico. Scegli il corso che meglio rispecchia le tue aspirazioni e preparati a costruire un futuro di successo.</p>
        </div>
        <Title subTitle='CONTATTACI' title='Siamo Pronti ad Aiutarti'/>
        <Contatti/>
      </div>
      <div>
        <PreFooter/>
        <Footer/>
      </div>
    </>
  );
};

export default Polo128CdL;


        /*
        <Title subTitle='TASSE E RETTE' title="Approfitta del vantaggio economico su eCampus"/> 
        <TableRata/>*/