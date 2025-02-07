import React, { useEffect } from 'react';

import './Master.css'

import { Link } from 'react-router-dom';

import PreFooter from '../../Components/PreFooter/PreFooter'
import Footer from '../../Components/Footer/Footer'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import Contatti from '../../Components/Contact/Contact'
import Title from '../../Components/Title/Title'
import TableMaster from '../../Components/TableMaster/TableMaster'

const Master = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return(
        <>
        <div>
            <Navbar2/>
        </div>
        <div className='container'>
            <div className='tablePolo-container'>
                <TableMaster />
            </div>
        <div className='corsiSingoli'>
          <h3>Torna a <span><Link to={'/Polo_universitario_128_eCampus'}>Polo 128 eCampus</Link></span></h3>
        </div>
        <Title subTitle='ESLORA I MASTER' title='Scopri i Percorsi di I e II Livello'/>
        <div className='polo128CdL-text'>
        <p>Il <strong>Polo 128</strong> di <strong>eCampus</strong> offre una vasta gamma di master, progettati per soddisfare le esigenze di formazione avanzata in diversi settori professionali. I nostri programmi di <strong>Master di I livello</strong> sono ideali per coloro che cercano di ampliare le proprie competenze e avviare una carriera di successo, mentre i <strong>Master di II livello</strong> sono pensati per chi desidera approfondire ulteriormente le proprie conoscenze e acquisire specializzazioni avanzate. Ogni percorso è strutturato per fornire una preparazione pratica e teorica, combinando lezioni online e attività pratiche, e supportato da un team di docenti esperti e professionisti del settore.<br/>Per ricevere maggiori informazioni sui singoli master, compila il form sottostante e sarai contattato al più presto.</p>
        </div>
        <Title subTitle='CONTATTACI' title='Siamo Pronti ad Aiutarti'/>
        <Contatti/>
        </div>
      <div>
        <PreFooter/>
        <Footer/>
      </div>       
        </>
      )
}

export default Master