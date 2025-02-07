import React from 'react';

const courses = {
  percorsiFormativi: [
    {
      "facolta": "Area Discipline Letterarie",
      "cdl": [
        "A11 - Discipline letterarie e latino",
        "A12 - Discipline letterarie",
        "A13 - Discipline letterarie latino e greco"
      ]
    },
    {
      "facolta": "Area Filosofia e Scienze Umane",
      "cdl": [
        "A18 - Filosofia e Scienze umane",
        "A19 - Filosofia e Storia"
      ]
    },
    {
      "facolta": "Area Scienze Sociali e Linguistiche",
      "cdl": [
        "A22 - Italiano Storia e Geografia",
        "A23 - Lingua italiana per discenti di lingua straniera"
      ]
    },
    {
      "facolta": "Area Matematica e Scienze",
      "cdl": [
        "A26 - Matematica",
        "A27 - Matematica e fisica",
        "A28 - Matematica e Scienze"
      ]
    },
    {
      "facolta": "Area Scienze Economiche e Aziendali",
      "cdl": [
        "A45 - Scienze economico – aziendali",
        "A46 - Scienze giuridico – economiche"
      ]
    },
    {
      "facolta": "Area Scienze Motorie e Sportive",
      "cdl": [
        "A48 - Scienze motorie e sportive negli istituti di istruzione secondaria di II grado",
        "A49 - Scienze motorie e sportive nella scuola secondaria di I grado"
      ]
    },
    {
      "facolta": "Area Storia dell'Arte e Design",
      "cdl": [
        "A54 - Storia dell'Arte",
        "A01 - Arte e immagine nella scuola secondaria di I grado",
        "A04 - Design del libro",
        "A05 - Design del tessuto e della moda",
        "A08 - Discipline geometriche, architettura, design d'arredamento e scenotecnica",
        "A09 - Discipline grafiche pittoriche e scenografiche",
        "A10 - Discipline grafico-pubblicitarie",
        "A17 - Disegno e storia dell'arte negli istituti di istruzione secondaria di II grado"
      ]
    },
    {
      "facolta": "Area Tecnologie Grafiche",
      "cdl": [
        "A62 - Tecnologie e tecniche per la grafica"
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
    <CourseTable data={courses.percorsiFormativi} title="Percorsi Formativi Accreditati di Campus" key1="Area" key2="Codice e Titolo"/>
  </div>
);

export default TablePolo128;
