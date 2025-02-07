import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const courses = {
  facolta: [
    {
      "facolta": "ECONOMIA",
      "cdl": [
        "MBA",
        "Risorse umane, lavoro e organizzazione",
        "Gestione d’impresa: strategia, digital e AI"
      ]
    },
    {
      "facolta": "GIURISPRUDENZA",
      "cdl": [
        "Comunicazione Istituzionale e Politica",
        "Criminologia – Psicologia Giuridica e Forense",
        "Criminologia - Scienze Forensi e Investigative",
        "Giornalismo Panorama Academy",
        "Giornalismo locale web",
        "Legislazione e contenzioso delle opere pubbliche. RUP, progettazione ed esecuzione, CCT",
        "Digital Marketing Specialist",
        "Digital Graphic Designer",
        "Scienze Informative per la Sicurezza"
      ]
    },
    {
      "facolta": "INGEGNERIA",
      "cdl": [
        "Management & Cybersecurity",
        "Protezione dalle radiazioni ionizzanti"
      ]
    },
    {
      "facolta": "LETTERE",
      "cdl": [
        "Esperto management del turismo",
        "Fashion brand management",
        "Fashion communication management",
        "Storytelling - Scrivere un film, un romanzo, realizzare un podcast"
      ]
    },
    {
      "facolta": "PSICOLOGIA",
      "cdl": [
        "Dalla prenatalità alla genitorialità",
        "Lavoro e disabilità: Il disability job supporter (DJS)"
      ]
    }
  ]
  ,
  sanitaria: [
    {
      "facolta": "MASTER I LIVELLO",
      "cdl": [
        "Aspetti giuridici, medico-legali e relazionali della professione sanitaria",
        "Assistenza in pneumologia e nella riabilitazione respiratoria",
        "Assistenza infermieristica in terapia intensiva",
        "Biomeccanica e interferenze neurofisiologiche alla postura",
        "Case manager",
        "Disturbi del comportamento alimentare",
        "Esperto in disabilità e sport terapia",
        "Esperto in psicogeriatria",
        "Esperto in salute, sicurezza e ambiente nei luoghi di lavoro privati e pubblici – HSE Management",
        "Formazione infermieristica di ambito psichiatrico",
        "Gestione della violenza in ambito sociale, sanitario ed educativo",
        "Gestione dell'area socio educativa e socio sanitaria",
        "Gestione e coordinamento dell’area socio sanitaria",
        "Gestione multidisciplinare delle lesioni cutanee",
        "Il benessere globale: medicina alternativa come supporto alla medicina tradizionale",
        "Il piede diabetico",
        "Il professionista sanitario nell'attività forense: perizia, Consulenza Tecnica d'Ufficio (C.T.U) e consulenza di parte",
        "Infermiere di famiglia e di comunità",
        "L’infermiere in neonatologia",
        "L'infermiere specializzato nell’emergenza-urgenza sanitaria territoriale e ospedaliera",
        "L'Ostetrica di comunità",
        "La gestione clinica del paziente in doppia diagnosi",
        "La gestione delle cure palliative e terapia del dolore",
        "La gestione delle infezioni acquisite in comunità",
        "La medicina estetica",
        "Management per il coordinamento delle professioni sanitarie",
        "Manager 4.0 in Sanità",
        "NEP Trainer",
        "Nutrizione e Dietologia",
        "Operatore sanitario specializzato nell'assistenza cardiovascolare",
        "Osteopatia",
        "Osteopatica classica",
        "Risk management in Sanità",
        "Sanità digitale e telemedicina",
        "Scienze e tecniche osteopatiche",
        "Scienze motorie adattate",
        "Terapia manuale e fisioterapia muscoloscheletrica",
        "Valutazione motoria e posturale"
      ]
    },
    {
        "facolta": "MASTER II LIVELLO",
        "cdl": [
          "Aspetti giuridici, medico-legali e relazionali nell'ambito sanitario",
          "Esperto in salute, sicurezza e ambiente nei luoghi di lavoro privati e pubblici – HSE Management",
          "Gestione della violenza in ambito sociale, sanitario ed educativo",
          "Gestione dell'area socio educativa e socio sanitaria",
          "La medicina estetica",
          "Management per la direzione di struttura complessa",
          "Management per la gestione di organizzazioni sanitarie",
          "Medicina Estetica, Nutrizione e Anti-Aging",
          "Nutrizione clinica e applicata",
          "Risk management e Total quality management"
        ]
    },
    {
        "facolta": "CORSI DI PERFEZIONAMENTO",
        "cdl": ["Tecniche manuali osteopatiche"]
    },
    {
        "facolta": "ALTA SPECIALIZZAZIONE",
        "cdl": ["Alta specializzazione in cinestetica applicata in sala operatoria", "Alta specializzazione Fisioterapista Ortokinetico"]
    },
    {
        "facolta": "FORMAZIONE MANAGERIALE",
        "cdl": ["Corso Rivalidazione Manageriale","Corso DSC"]
    },
    {
        "facolta": "CORSI ECM",
        "cdl": ["Corso ECM"]
    }
  ],  
  scuola: [
    {
      "facolta": "MASTER FORMAZIONE DOCENTI",
      "cdl": [
        "Area linguistica - per l'insegnamento negli Istituti secondari di I e II grado",
        "A scuola oggi (3 indirizzi di studio)",
        "Autismo: dalla diagnosi all'intervento psicoeducativo",
        "Area socio-letteraria, storico-geografica per l'insegnamento negli istituti secondari di I e II grado",
        "Competenze e metodologie didattiche dell'animatore digitale",
        "Competenze non cognitive e life skills in ambito scolastico - La didattica dell’intelligenza emotiva",
        "Competenze per sviluppare il pensiero computazionale con il coding",
        "Didattica della lingua Italiana come lingua seconda (L2)",
        "Didattica e arti terapie - tecniche creative in ambito scolastico",
        "Didattica integrale per il nuovo ambiente di apprendimento",
        "Discipline geografiche per l'insegnamento negli istituti secondari di I e II grado",
        "Disegno e storia dell'arte negli istituti di istruzione secondaria di II grado",
        "Glottodidattica infantile",
        "Il bullismo: interpretazione, fenomenologia, prevenzione e didattica",
        "Il dirigente scolastico: funzioni competenze e responsabilità nel sistema scolastico italiano",
        "Insegnare filosofia e storia negli istituti secondari di 2° grado",
        "L'insegnamento delle discipline sanitarie negli istituti secondari di II grado",
        "L'insegnamento delle materie filosofiche e umanistiche negli istituti secondari di II grado: metodologie didattiche",
        "L'insegnamento delle materie giuridico-economiche negli istituti secondari di II grado: metodologie didattiche",
        "L'insegnamento delle materie scientifiche negli istituti secondari di I e II grado: matematica e fisica",
        "L'insegnamento dell'italiano agli stranieri, L2",
        "L'insegnamento di matematica e scienze nella scuola secondaria di I grado",
        "L'insegnamento di scienze e tecnologie elettriche ed elettroniche nelle scuole secondarie di I e II grado",
        "La figura dell’insegnante di sostegno nella scuola",
        "La professione docente nella scuola di oggi",
        "Le funzioni del Dirigente tecnico tra valutazione e management",
        "Management della scuola: il DSGA",
        "Metodologie didattiche per l'integrazione degli alunni con disturbi specifici di apprendimento (DSA)",
        "Nuova didattica per le lingue: multimodale, flipped learning e CLIL",
        "Psicologia scolastica",
        "Tecnologie digitali e metodologie didattiche a distanza (5 indirizzi di studio)"
      ]
    },
    {
      "facolta": "CORSI FORMAZIONE DOCENTI 120 CFU",
      "cdl": [
            "La scuola delle competenze: progettare, valutare, certificare",
            "Metodologie didattiche integrate e buone pratiche nella scuola dell'innovazione e dell'inclusione"
        ]
    },
    {
          "facolta": "CORSI FORMAZIONE DOCENTI 60 CFU",
          "cdl": [
            "Competenze e metodologie didattiche dell’animatore digitale",
            "Competenze non cognitive e life skills in ambito scolastico - La didattica dell’intelligenza emotiva",
            "Competenze per sviluppare il pensiero computazionale con il coding",
            "Didattica dell’insegnamento con la metodologia CLIL",
            "Didattica e Arti Terapie - Tecniche creative in ambito scolastico",
            "Didattica integrale per il nuovo ambiente di apprendimento",
            "Difficoltà dell'apprendimento in situazioni di handicap e integrazione scolastica",
            "Gestire i disturbi dell'apprendimento in prospettiva psico-pedagogica",
            "Glottodidattica infantile",
            "Il Bullismo: interpretazione, fenomenologia, prevenzione e didattica",
            "L'insegnamento della lingua italiana agli alunni stranieri",
            "La buona scuola. Metodologie didattiche",
            "La figura dell'insegnante di sostegno nella scuola",
            "Le funzioni dell’ITP nella scuola di oggi",
            "Metodologie didattiche, l'insegnamento curriculare e l'integrazione degli alunni con bisogni educativi speciali (BES)",
            "Metodologie didattiche per l'integrazione degli alunni con DSA",
            "Nuova didattica per le lingue: la metodologia CLIL",
            "Pratiche innovative con le tecnologie didattiche: tablet e lavagna multimediale (LIM)",
            "Psicologia scolastica",
            "Tecnologie digitali e metodologie didattiche a distanza (5 indirizzi di studio)"
          ]
    },
    {
          "facolta": "CORSI FORMAZIONE DOCENTI 5 CFU",
          "cdl": [
            "Formazione professionale del personale docente (d.m. 108/2022)"
          ]
    },
    {
      "facolta": "PERCORSI FORMATIVI ABILITANTI",
      "cdl": ["30 CFU","36 CFU","60 CFU"]
    }
  ],
  amministrazione: [
    {
      "facolta": "LIVELLO I",
      "cdl": [
        "Addetto Ufficio del Processo - Ministero della Giustizia",
        "Amministratore Aziende Sanitarie",
        "Diritto Amministrativo",
        "Funzionario Amministrativo Enti Locali e Amministrazione Centrale",
        "Funzionario Tributario",
        "Gestione degli Appalti Pubblici",
        "Innovazione e Management nelle PA",
        "Organizzazione e Innovazione nella PA",
        "Specialista Amministrativo Contabile nei CPI",
        "Specialista in Mercato e Servizi per il Lavoro nei CPI",
        "Transizione Ambientale",
        "Transizione Digitale nella PA"
      ]
    },
    {
        "facolta": "LIVELLO II",
        "cdl": [
          "Addetto Ufficio del Processo - Ministero della Giustizia",
          "Amministratore Aziende Sanitarie",
          "Diritto Amministrativo",
          "Funzionario Amministrativo Enti Locali e Amministrazione Centrale",
          "Funzionario Tributario",
          "Gestione degli Appalti Pubblici",
          "Governance e Management della PA",
          "Specialista Amministrativo Contabile nei CPI",
          "Specialista in Mercato e Servizi per il Lavoro nei CPI",
          "Transizione Ambientale",
          "Trasparenza e Anticorruzione nella PA"
        ]
      },
      {
        "facolta": "CORSI PUBBLICA AMMINISTRAZIONE",
        "cdl": [
          "Assistente Amministrativo Enti Locali e Amministrazione Centrale",
          "Assistente Amministrativo Sanitario",
          "Assistente Tributario",
          "Istruttore Amministrativo Contabile nei CPI",
          "Istruttore Operatore Mercato del Lavoro nei CPI",
          "La Guardia Forestale Regione Sicilia",
        ]
      }
  ] 
};

const CourseTable = ({ data, title, key1, key2 }) => (
  <div>
    <h2 style={{ color: '#000f38' }}>{title}</h2>
    <table border="1">
      <thead>
        <tr>
          <th>{key1}</th>
          <th>{key2}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.facolta}</td>
            <td>
              <ul>
                {item.cdl.map((course, idx) => (
                  <li key={idx}>
                    {course}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


const TablePolo128 = () => (
  <div className='TablePolo128'>
    <CourseTable data={courses.facolta} title="Master di primo e secondo livello delle facoltà eCampus" key1="Facoltà" key2="Titolo Master"/>
    <CourseTable data={courses.sanitaria} title="Area Sanitaria" key1='Tipologia' key2="Titolo Master"/>
    <CourseTable data={courses.scuola} title="Area Scuola" key1='Tipologia' key2="Titolo Master"/>
    <CourseTable data={courses.amministrazione} title="Area Amministrazione" key1='Tipologia' key2="Titolo Master"/>
  </div>
);

export default TablePolo128;
