import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './TablePolo128.css';

const courses = {
  primoLivello: [
    {
      facolta: 'ECONOMIA',
      cdl: ['ECONOMIA (D.M. 270/04)', 'SCIENZE DEL TURISMO PER IL MANAGEMENT E I BENI CULTURALI']
    },
    {
      facolta: 'GIURISPRUDENZA',
      cdl: ['SCIENZE DELLA COMUNICAZIONE', 'SCIENZE POLITICHE E SOCIALI', 'SERVIZI GIURIDICI']
    },
    {
      facolta: 'INGEGNERIA',
      cdl: [
        'INGEGNERIA CIVILE E AMBIENTALE (D.M. 270/04)',
        'INGEGNERIA INDUSTRIALE (D.M. 270/04)',
        'INGEGNERIA INFORMATICA E DELL\'AUTOMAZIONE (D.M. 270/04)'
      ]
    },
    {
      facolta: 'LETTERE',
      cdl: [
        'DESIGN E DISCIPLINE DELLA MODA (D.M. 270/04)',
        'LETTERATURA, ARTE, MUSICA E SPETTACOLO',
        'LINGUE E CULTURE EUROPEE E DEL RESTO DEL MONDO'
      ]
    },
    {
      facolta: 'PSICOLOGIA',
      cdl: [
        'SCIENZE DELLE ATTIVITA\' MOTORIE E SPORTIVE',
        'SCIENZE DELL\'EDUCAZIONE E DELLA FORMAZIONE',
        'SCIENZE E TECNICHE PSICOLOGICHE (D.M. 270/04)',
        'SCIENZE BIOLOGICHE'
      ]
    }
  ],
  magistraliUnico: [
    {
      facolta: 'GIURISPRUDENZA',
      cdl: ['GIURISPRUDENZA (D.M. 270/04)']
    }
  ],
  secondoLivello: [
    {
      facolta: 'ECONOMIA',
      cdl: ['SCIENZE DELL\'ECONOMIA']
    },
    {
      facolta: 'INGEGNERIA',
      cdl: [
        'INGEGNERIA CIVILE',
        'INGEGNERIA INDUSTRIALE',
        'INGEGNERIA INFORMATICA E DELL\'AUTOMAZIONE'
      ]
    },
    {
      facolta: 'LETTERE',
      cdl: [
        'LETTERATURA, LINGUA E CULTURA ITALIANA',
        'LINGUE E LETTERATURE MODERNE E TRADUZIONE INTERCULTURALE'
      ]
    },
    {
      facolta: 'PSICOLOGIA',
      cdl: [
        'PSICOLOGIA',
        'SCIENZE DELL\'ESERCIZIO FISICO PER IL BENESSERE E LA SALUTE',
        'SCIENZE DELLA NUTRIZIONE UMANA',
        'SCIENZE PEDAGOGICHE'
      ]
    }
  ]
};

const CourseTable = ({ data, title }) => (
  <div>
    <h2 style={{ color: '#000f38' }}>{title}</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Facoltà</th>
          <th>Corso di Laurea</th>
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
                    <Link to={`${course}`}>{course}</Link> {/* Wrap course name with Link */}
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
    <CourseTable data={courses.primoLivello} title="Corsi di Laurea di Primo Livello" />
    <CourseTable data={courses.magistraliUnico} title="Corsi di Laurea Magistrali Ciclo Unico 5 anni" />
    <CourseTable data={courses.secondoLivello} title="Corsi di Laurea di Secondo Livello - Specialistica (Magistrale a durata biennale)" />
  </div>
);

export default TablePolo128;
