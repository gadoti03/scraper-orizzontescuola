import React, { useEffect } from 'react';

import { Link as ScrollLink } from 'react-scroll'

import { useLocation } from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async'; // 👈 Importa Helmet

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import ChiSiamo from './Components/ChiSiamo/ChiSiamo'
import Carousel from './Components/Carousel/Carousel'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Maps from './Components/Maps/Maps'
import Testimonials from './Components/Testimonials/Testimonials'
import PreFooter from './Components/PreFooter/PreFooter'
import PreFooterSocratis from './Components/PreFooterSocratis/PreFooterSocratis'
import HomeComponent from './Components/HomeComponent/HomeComponent';

//Hero
import heroImg_1 from './assets/eCampusSfondo.webp'
import heroImg_2 from './assets/hero_2.webp'
import heroImg_3 from './assets/hero_3_1.webp'

//HomeComponent Polo128
import MIM from './assets/MIM.png';
import sfondoHomeComponentPolo128 from './assets/university.webp';
import HomeComponentPolo128 from './assets/polo128.webp';

//HomeComponent Polo128
import HomeComponentTFA from './assets/program_3_1.webp';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const offset = -130; // Modifica questo valore per regolare l'offset

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset;
        window.scrollTo({
          top: elementTop + offset,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  const hero_1_h1 ="Polo Universitario 128 eCampus:\nEducazione per un Futuro Sostenibile";
  const hero_1_p ="Con Polo Universitario 128 eCampus, l'università è davvero intorno a te: un'esperienza educativa flessibile e all'avanguardia che ti permette di conciliare studio e impegni quotidiani. Valorizziamo il Territorio, rispettiamo l'Ambiente, promuoviamo la Salute e sosteniamo la Legalità, offrendo un'istruzione di qualità per costruire un futuro migliore.";

  const hero_2_h1="TFA-X Ciclo:\nPreparazione professionale per l'inclusione educativa";
  const hero_2_p="Con il corso preparatorio al TFA-X Ciclo, noi di TASL ci dedichiamo a formare insegnanti di sostegno capaci di affrontare le sfide educative con professionalità, passione e attenzione, garantendo un supporto mirato e personalizzato agli studenti con bisogni educativi speciali, per promuovere la creazione di un ambiente inclusivo.";

  const hero_3_h1="Info Point Scuola Moscati: La Porta d'Accesso alla Tua Istruzione";
  const hero_3_p="Il tuo punto di riferimento per informazioni dettagliate sull'offerta formativa, i programmi educativi, i servizi agli studenti e le opportunità di crescita personale offerte dalla Scuola Moscati.";

  const heroLink_1='/Polo_universitario_128_eCampus';
  const heroLink_2='/TFA';
  const heroLink_3='/Scuola Moscati';

  const slides = [
    <div>
      <Hero h1={hero_1_h1} p={hero_1_p} backgroundImage={heroImg_1} linkDestination={heroLink_1}/>
    </div>,
    <div>
      <Hero h1={hero_2_h1} p={hero_2_p} backgroundImage={heroImg_2} linkDestination={heroLink_2}/>
    </div>,
    <div>
      <Hero h1={hero_3_h1} p={hero_3_p} backgroundImage={heroImg_3} linkDestination={heroLink_3}/>
    </div>
  ];

  //HomeComponentPolo128
  const divHomeComponentPolo128 = <><li>5 facoltà con una vasta gamma di specializzazioni per soddisfare ogni interesse accademico</li>
  <hr />
  <li>Oltre 65 corsi di laurea per una formazione completa e diversificata</li>
  <hr />
  <li>Assistenza personalizzata con tutor dedicati per supportare il tuo percorso accademico</li>
  <hr />
  <li>Opportunità di tirocini interni per acquisire esperienza pratica e concreta</li>
  <hr />
  <li>Accesso a risorse didattiche esclusive e supporto per lo sviluppo professionale</li>
  <hr />
  <li>Integrazione con il territorio locale per progetti e collaborazioni aziendali</li>
  </>

  //TFA
  const divHomeComponentTFA =<><li>Formazione pratica per l'insegnamento nelle scuole secondarie</li>
  <hr style={{border: '1px solid #2d334e', opacity: '0.3'}}/>
  <li>Corsi tenuti da docenti esperti e professionisti del settore</li>
  <hr style={{border: '1px solid #2d334e', opacity: '0.3'}}/>
  <li>Supporto continuo attraverso tutoraggio e mentoring</li>
  <hr style={{border: '1px solid #2d334e', opacity: '0.3'}}/>
  <li>Accesso a risorse didattiche aggiornate e materiali di studio</li>
  <hr style={{border: '1px solid #2d334e', opacity: '0.3'}}/>
  <li>Opportunità di stage e tirocini in istituti scolastici</li>
  <hr style={{border: '1px solid #2d334e', opacity: '0.3'}}/>
  <li>Collaborazione con scuole e enti locali per progetti educativi</li>
</>

  const divButton = <ScrollLink to='contact' smooth={true} offset={-260} duration={500}><button className='btn dark-btn'>Contattaci</button></ScrollLink>
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>TASL - Formazione e Innovazione</title>
        <meta name="description" content="Scopri i nostri corsi di formazione eCampus, TFA e molto altro per la tua crescita professionale e accademica." />
        <meta name="keywords" content="università, formazione, TFA, eCampus, istruzione" />
        <meta name="author" content="TASL" />
      </Helmet>
    <div>
      <Navbar/>
      <div id='Carousel'><Carousel items={slides}/></div>
      <div className="container">
        <Title subTitle='LA NOSTRA OFFERTA' title='La Tua Formazione, la Nostra Missione'/>
        <div className='AppHomeComponent'>
          <HomeComponent title='POLO 128' subTitle='Università eCampus' div={divHomeComponentPolo128} backgroundImage={sfondoHomeComponentPolo128} image={HomeComponentPolo128} link='/Polo_universitario_128_eCampus' logo={MIM} testoFooter='Approfitta del vantaggio economico su eCampus' button={divButton} colore='white' gradiente='linear-gradient(to right, rgba(0, 51, 116, 1), rgba(107, 146, 252, .90))'/>
          <HomeComponent title='TFA' subTitle="Percorso di Abilitazione all'Insegnamento" div={divHomeComponentTFA} backgroundImage={HomeComponentTFA} link='/TFA' logo={MIM} testoFooter='Accedi al nostro supporto' button={divButton} colore='#021c48' gradiente='linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))'/>
        </div>
        <div id='ChiSiamo'>
          <Title subTitle='CHI SIAMO' title='Scopri di Più Su di Noi'/>
          <ChiSiamo/>
        </div>
        <div id='Maps'>
          <Title subTitle='LA NOSTRA POSIZIONE' title='Scopri Dove Siamo'/>
          <Maps/>
        </div>
        <div id='Testimonials'>
          <Title subTitle='TESTIMONIANZE' title='Le Opinioni dei Nostri Clienti'/>
          <Testimonials/>
        </div>
        <Title subTitle='CONTATTACI' title='Siamo Pronti ad Aiutarti'/>
        <div id='contatti'>
          <Contact/>
        </div>
      </div>
      <div className='container-footer'>
        <PreFooterSocratis/>
        <PreFooter/>
        <Footer/>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default App
