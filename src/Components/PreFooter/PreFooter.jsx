// PreFooter.js

import React from 'react';
import { FaEnvelope, FaPhone, FaFacebook, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './PreFooter.css'; // Importa il file CSS

import { Link } from 'react-router-dom';

const PreFooter = () => {
  return (
    <div className='prefooter-container'>
      <div className="prefooter">
        <div className="column">
          <h3>Servizi TASL</h3>
          <ul>
            <li><Link to={'/Polo_universitario_128_eCampus'}>Polo Universitario 128 eCampus</Link></li>
            <li><Link to={'/Certificazioni_ligua'}>Certificazioni Ligua</Link></li>
            <li><Link to={'/TFA'}>TFA-X Ciclo</Link></li>            
            <li><Link to={'/Scuola Moscati'}>Info Point Scuola Moscati</Link></li> 
          </ul>
        </div>
        <div className="column">
          <h3>Link Utili</h3>
          <ul>
            <li><Link to={'/policy'}>Privacy Policy</Link></li>
            <li><Link to={'/terms'}>Terms of Service</Link></li>
            <li><Link to={'/FAQ'}>FAQ</Link></li>
          </ul>
        </div>
        <div className="column">
          <h3>Contatti</h3>
          <ul>
            <li><span>Email: </span><a href="mailto:info@tasl.it">info@tasl.it</a></li>
            <li><span>Telefono: </span><a href="tel:+39 0971 282212">+39 0971 282212</a></li>
            <li><span>Whatsapp: </span><a href="https://api.whatsapp.com/send?phone=390971282212" target="_blank">+39 0971 282212</a></li>
            <li><span>Facebook: </span><a href="https://www.facebook.com/profile.php?id=61563875285189" target="_blank">Facebook Page</a></li>
            <li><span>Instgram: </span><a href="https://www.instagram.com/tasl.formazione/" target="_blank">Instagram Page</a></li>
            <li><span>Pec: </span><a href="mailto:tasl@pec.it">tasl@pec.it</a></li>
          </ul>
        </div>
      </div>

      <div className="additional-section">
        <div className="column">
          <h3>TASL S.R.L.S.</h3>
          <p>Documento</p>
          <p>Certificazione</p>
        </div>
        <div className="column">
          <h3>Icone Contatti</h3>
          <ul className="icon-list">
          <li>
        <a href="mailto:info@tasl.it" title='Mail'>
          <FaEnvelope color="#FF0000" /> {/* Colore rosso */}
        </a>
      </li>
      <li>
        <a href="https://api.whatsapp.com/send?phone=390971282212" target="_blank" title='Whatsapp'>
          <FaWhatsapp color="#25D366" /> {/* Colore verde di WhatsApp */}
        </a>
      </li>
      <li>
        <a href="tel:+39 0971 282212" title='Telefono'>
          <FaPhone color="#00FF00" /> {/* Colore verde */}
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/people/TASL-Scuola-di-Formazione-Professionale/61563875285189/?locale=it_IT" target="_blank" title='Facebook'>
          <FaFacebook color="#3b5998" /> {/* Colore blu di Facebook */}
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/tasl.formazione/" target="_blank" title='Instagram'>
          <FaInstagram color="#3b5998" /> {/* Colore blu di Facebook */}
        </a>
      </li>
      <li>
        <a href="https://maps.app.goo.gl/PKE8v4w7VSvRBzBF6" target='_blank' title='Google Maps'>
          <FaMapMarkerAlt color="#FF4500" /> {/* Colore arancione */}
        </a>
      </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
