import React, { useEffect } from 'react';

import { Link as ScrollLink } from 'react-scroll';

import './30CFU.css'

import { Link } from 'react-router-dom';

import PreFooter from '../../Components/PreFooter/PreFooter'
import Footer from '../../Components/Footer/Footer'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import Contatti from '../../Components/Contact/Contact'
import Title from '../../Components/Title/Title'
import Table30CFU from '../../Components/Table30CFU/Table30CFU'
import DropComponent from '../../Components/DropComponent/DropComponent'

const CFU30 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return(
        <>
          <div>
            <Navbar2 />
          </div>
          <div className="container">
            <div className='CFU30-presentazione'>
              <Title subTitle="Abilitazioni rapide per insegnanti" title="Percorso 30 CFU ex Art. 13" />
              
              <div className="polo128CdL-text">
                <p>
                  Iscrizioni aperte per il <strong>Percorso 30 CFU ex Art. 13</strong> di <strong>eCampus</strong>, pensato per chi desidera ottenere un'abilitazione in una nuova classe di concorso.  
                  Il percorso è rivolto a chi ha <strong>completato il TFA</strong>, a chi è <strong>già abilitato</strong> o <strong>abilitando ai 60 CFU</strong>, e a chi vuole <strong>ampliare le proprie opportunità professionali</strong> nel settore scolastico.  
                  Il programma online, con lezioni sincrone, include una <strong>prova finale</strong> in presenza, che consiste in una progettazione didattica innovativa e una lezione simulata.  
                  Accedi a concorsi, graduatorie e mobilità con un titolo valido per il futuro.<br />
                  Compila il <ScrollLink to='contact' smooth={true} offset={-250} duration={500}><span
                                                                                                  style={{
                                                                                                    color: "#004080", // Blu principale
                                                                                                    cursor: "pointer",
                                                                                                    transition: "color 0.3s ease",
                                                                                                  }}
                                                                                                  onMouseOver={(e) => (e.target.style.color = "#002b5e")} // Blu più scuro all'hover
                                                                                                  onMouseOut={(e) => (e.target.style.color = "#004080")} // Torna al colore originale
                  ><strong>form</strong></span></ScrollLink> per maggiori dettagli e informazioni sul percorso.
                </p>
              </div>
            </div>

            <Title subTitle="Scopri i dettagli del percorso" title="Accedi al Percorso 30 CFU " />

            <DropComponent>
              <div title="Iscrizioni Aperte: Accedi Subito al Percorso 30 CFU ex Art. 13">
                <div className='TFA-section'>
                  <p>
                    Il <strong>Percorso 30 CFU ex Art. 13</strong> è la soluzione ideale per chi desidera ottenere un'abilitazione in una nuova classe di concorso.
                  </p>
                  <p>Può accedere:</p>
                  <ul>
                    <li>
                      <ul>
                      <li>Chi ha già completato il <strong>TFA</strong></li>
                    <li>Chi è <strong>abilitato</strong> in una classe di concorso</li>
                    <li>Chi sta <strong>conseguendo i 60 CFU</strong> e vuole ottenere un'abilitazione aggiuntiva</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div title="Struttura del Percorso e Modalità di Studio">
                <div className="TFA-section">
                  <p>
                    Il percorso si svolge interamente <strong>online in modalità sincrona</strong>, con lezioni su una piattaforma dedicata che prevede il controllo della frequenza.
                  </p>
                  <p>La prova finale si svolge <strong>in presenza</strong> e consiste in:</p>
                  <ul>
                    <li>
                      <ul>
                      <li>Una <strong>progettazione didattica innovativa</strong> con l'uso di tecnologie digitali</li>
                      <li>Una <strong>lezione simulata</strong></li>
                      </ul>
                    </li>
                  </ul>
                  <p>È richiesta una <strong>frequenza minima del 70%</strong> per ogni attività formativa per poter accedere alla prova finale.</p>
                </div>
              </div>

              <div title="Spendibilità del Titolo: Concorsi e Graduatorie">
                <div className="TFA-section">
                  <p>Con il <strong>Percorso 30 CFU ex Art. 13</strong> potrai accedere a:</p>
                  <ul>
                    <li>
                      <ul>
                      <li><strong>Concorsi scuola</strong>, aumentando le possibilità di assunzione</li>
                    <li><strong>GPS (Graduatorie Provinciali di Supplenza)</strong>, per migliorare il punteggio</li>
                    <li><strong>Mobilità professionale</strong>, per avanzare nella carriera scolastica</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </DropComponent>


            <div className="tablePolo-container" style={{ marginTop: "50px" }}>
              <Table30CFU />
            </div>

            <div className="corsiSingoli">
              <h3>
                Torna a 
                <span>
                  <Link to={'/Polo_universitario_128_eCampus'}> Polo 128 eCampus</Link>
                </span>
              </h3>
            </div>

            <Title subTitle="CONTATTACI" title="Siamo Pronti ad Aiutarti" />
            <Contatti />
          </div>

          <div>
            <PreFooter />
            <Footer />
          </div>
        </>
      )
}

export default CFU30
