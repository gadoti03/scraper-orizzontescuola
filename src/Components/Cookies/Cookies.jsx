import React from 'react';
import CookieConsent from 'react-cookie-consent';
import './Cookies.css'; // Importa il file CSS

const Cookies = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accetta"
      declineButtonText="Rifiuta"
      cookieName="cookieConsent"
      style={styles.banner}
      buttonStyle={styles.acceptButton}
      declineButtonStyle={styles.declineButton}
      expires={150}
    >
      Questo sito web utilizza i cookie per migliorare l'esperienza dell'utente.
      <a href='/policy' className="cookie-link">Leggi di più</a>
    </CookieConsent>
  );
};

const styles = {
  banner: {
    background: '#001f3f', // Blu scuro
    color: '#e0e0e0', // Grigio chiaro per il testo
    padding: '20px 20px',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)', // Leggero ombra
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '100000000'
},
  acceptButton: {
    background: '#004d99', // Blu medio
    color: '#fff',
    fontSize: '16px',
    borderRadius: '25px',
    padding: '15px 25px',
    border: 'none',
    cursor: 'pointer',
    margin: '0 5px',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',
  },
};

export default Cookies;
