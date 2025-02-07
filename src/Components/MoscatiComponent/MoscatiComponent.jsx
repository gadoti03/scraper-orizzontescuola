import React from 'react';
import './MoscatiComponent.css';

import MIM from '../../assets/MIM.png';
import screen from '../../assets/screenMoscati.png'; // Assicurati che il percorso dell'immagine sia corretto

import { Link } from 'react-scroll';

const MoscatiComponent = () => {
  const divHomeComponentMoscati = <><li>Assistenza personalizzata presso Scuola Moscati come Info Point</li>
  <hr />
  <li>Supporto completo per certificazioni linguistiche e informatiche</li>
  <hr />
  <li>Servizio di consulenza e preparazione per esami sempre a tua disposizione</li>
  <hr />
  <li>Certificazioni ufficiali riconosciute per il tuo percorso educativo e professionale</li>
  <hr />
  <li>Piattaforma di studio avanzata con assistenza dedicata per ogni tua esigenza</li>
  <hr /></>

  return (
    <div className="moscati-container">
      <div className="moscati-top-section">
        <div className="content-box">
          <div className="moscati-header">
          <div className='moscati-logo-div'>
                <img src={MIM} alt="MIM Logo" className="polo128-component-logo" />
            </div>
            <div className="moscati-title">
              <h1>INFO POINT<br />Scuola San Giuseppe Moscati</h1>
            </div>
          </div>
          <ul className="moscati-features">
            <li>Assistenza personalizzata presso Scuola Moscati come Info Point</li>
            <hr />
            <li>Supporto completo per certificazioni linguistiche e informatiche</li>
            <hr />
            <li>Servizio di consulenza e preparazione per esami sempre a tua disposizione</li>
            <hr />
            <li>Certificazioni ufficiali riconosciute per il tuo percorso educativo e professionale</li>
            <hr />
            <li>Piattaforma di studio avanzata con assistenza dedicata per ogni tua esigenza</li>
            <hr />
          </ul>
        </div>
        <div className="image-box-Moscati">
          <div><img src={screen} alt="Moscati Screen"/></div>
        </div>
      </div>
      <div className="moscati-bottom-section">
        <div className="moscati-cta">
          <Link to='contact' smooth={true} offset={-260} duration={500}>
            <button className='btn dark-btn'>Contattaci</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoscatiComponent;
