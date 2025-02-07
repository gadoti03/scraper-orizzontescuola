import React from 'react'

import FourDropComponent from '../../Components/FourDropComponent/FourDropComponent';
import ArrayToList from '../../Components/ArrayToList/ArrayToList';
import PDFimage from '../../assets/PDF.png'

const FourDropComponentAux = ({array1, array2, array3, pdf, div}) => {
        const downloadPdf = () => {

            const pdfUrl = pdf; // Percorso relativo del PDF nella cartella `public`
        
            // Creazione di un link temporaneo per scaricare il PDF
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'documento.pdf'; // Nome del file PDF che verrà scaricato
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          };


  return (
    <FourDropComponent>
      <div title="Informazioni generali riferite all'anno accademico corrente">
      <table>
      <tbody>
        <tr>
          <td>Durata:</td>
          <td>{array1[0]}</td>
        </tr>
        <tr>
          <td>Ordinamento:</td>
          <td>{array1[1]}</td>
        </tr>
        <tr>
          <td>Stato:</td>
          <td>{array1[2]}</td>
        </tr>
        <tr>
          <td>Crediti:</td>
          <td>{array1[3]}</td>
        </tr>
        <tr>
          <td>Lingua:</td>
          <td>{array1[4]}</td>
        </tr>
        <tr>
          <td>Tipologia:</td>
          <td>{array1[5]}</td>
        </tr>
        <tr>
          <td>Normativa:</td>
          <td>{array1[6]}</td>
        </tr>
        <tr>
          <td>Classe di laurea:</td>
          <td>{array1[7]}</td>
        </tr>
        <tr>
          <td>Corso Interateneo:</td>
          <td>{array1[8]}</td>
        </tr>
        <tr>
          <td>Accesso:</td>
          <td>{array1[9]}</td>
        </tr>
        <tr>
          <td>Dipartimento:</td>
          <td>{array1[10]}</td>
        </tr>
        <tr>
          <td>Modalità didattica:</td>
          <td>{array1[11]}</td>
        </tr>
      </tbody>
      </table>
      </div>
      <div title="Requisiti di accesso">
        <table>
            <tbody>
                <tr>
                    <td>
                        Titoli opzionali (a scelta fra i seguenti)
                    </td>
                    <td>
                        <ArrayToList array={array2}/>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
      <div title="Percorsi e piano di studio">
      <table>
            <tbody>
                <tr>
                    <td>
                        <ArrayToList array={array3}/>
                    </td>
                    <td style = {{display: 'flex', justifyContent: 'left', alignItems: 'center', }}>
                        <a onClick={downloadPdf}>Scarica il Piano di Studi</a><img src={PDFimage} alt="" style={{width: '40px'}}/> 
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
      <div title="Programma, testi e obiettivi">
        {div}
      </div>
    </FourDropComponent>
  );
};

export default FourDropComponentAux