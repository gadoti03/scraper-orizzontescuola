import React from 'react';

import './TableRataPolo128CdL.css'

const TableRataPolo128CdL = () => {
  const costsData = {
    'Corsi di Laurea 1': {
      rettaAnnuale: 3900,
      dirittiPrimaImmatricolazione: 400,
      tassaAnnualeRegionale: 140,
      impostaBollo: 16,
      dirittiImmatricolazioneAnniSuccessivi: 200,
      totaleImmatricolazione: 4456,
      totaleAnniSuccessivi: 4256,
      tutorialIndividuale: 2800,
    },
    'Corsi di Laurea Innovativi': {
      rettaAnnuale: 5900,
      dirittiPrimaImmatricolazione: 400,
      tassaAnnualeRegionale: 140,
      impostaBollo: 16,
      dirittiImmatricolazioneAnniSuccessivi: 200,
      totaleImmatricolazione: 6456,
      totaleAnniSuccessivi: 6256,
      tutorialIndividuale: 1000,
    },
    'Laurea in Scienze Biologiche': {
      rettaAnnuale: 5900,
      dirittiPrimaImmatricolazione: 400,
      tassaAnnualeRegionale: 140,
      impostaBollo: 16,
      dirittiImmatricolazioneAnniSuccessivi: 200,
      totaleImmatricolazione: 6456,
      totaleAnniSuccessivi: 6256,
      tutorialIndividuale: 2000,
    }
  };

  return (
    <div className='Polo128CdL'>
    <table border="1">
      <thead>
        <tr>
          <th></th>
          <th>Corsi di Laurea 1</th>
          <th>Corsi di Laurea Innovativi</th>
          <th>Laurea in Scienze Biologiche</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Retta annuale</td>
          <td>€ {costsData['Corsi di Laurea 1'].rettaAnnuale}</td>
          <td>€ {costsData['Corsi di Laurea Innovativi'].rettaAnnuale}</td>
          <td>€ {costsData['Laurea in Scienze Biologiche'].rettaAnnuale}</td>
        </tr>
        <tr>
          <td>Diritti di prima immatricolazione</td>
          <td>€ {costsData['Corsi di Laurea 1'].dirittiPrimaImmatricolazione}</td>
          <td>€ {costsData['Corsi di Laurea Innovativi'].dirittiPrimaImmatricolazione}</td>
          <td>€ {costsData['Laurea in Scienze Biologiche'].dirittiPrimaImmatricolazione}</td>
        </tr>
        <tr>
          <td>Tassa annuale regionale per il diritto allo studio</td>
          <td>€ {costsData['Corsi di Laurea 1'].tassaAnnualeRegionale}</td>
          <td>€ {costsData['Corsi di Laurea Innovativi'].tassaAnnualeRegionale}</td>
          <td>€ {costsData['Laurea in Scienze Biologiche'].tassaAnnualeRegionale}</td>
        </tr>
        <tr>
          <td>Imposta di bollo assolta virtualmente</td>
          <td>€ {costsData['Corsi di Laurea 1'].impostaBollo}</td>
          <td>€ {costsData['Corsi di Laurea Innovativi'].impostaBollo}</td>
          <td>€ {costsData['Laurea in Scienze Biologiche'].impostaBollo}</td>
        </tr>
        <tr>
          <td>Diritti di immatricolazione anni successivi</td>
          <td>€ {costsData['Corsi di Laurea 1'].dirittiImmatricolazioneAnniSuccessivi}</td>
          <td>€ {costsData['Corsi di Laurea Innovativi'].dirittiImmatricolazioneAnniSuccessivi}</td>
          <td>€ {costsData['Laurea in Scienze Biologiche'].dirittiImmatricolazioneAnniSuccessivi}</td>
        </tr>
        <tr>
          <td>Totale per l'anno di immatricolazione</td>
          <td>€ {costsData['Corsi di Laurea 1'].totaleImmatricolazione}</td>
          <td>€ {costsData['Corsi di Laurea Innovativi'].totaleImmatricolazione}</td>
          <td>€ {costsData['Laurea in Scienze Biologiche'].totaleImmatricolazione}</td>
        </tr>
        <tr>
          <td>Totale per gli anni successivi</td>
          <td>€ {costsData['Corsi di Laurea 1'].totaleAnniSuccessivi}</td>
          <td>€ {costsData['Corsi di Laurea Innovativi'].totaleAnniSuccessivi}</td>
          <td>€ {costsData['Laurea in Scienze Biologiche'].totaleAnniSuccessivi}</td>
        </tr>
        <tr>
          <td>Tutorial individuale 36 ore</td>
          <td>€ {costsData['Corsi di Laurea 1'].tutorialIndividuale}</td>
          <td>€ {costsData['Corsi di Laurea Innovativi'].tutorialIndividuale}</td>
          <td>€ {costsData['Laurea in Scienze Biologiche'].tutorialIndividuale}</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default TableRataPolo128CdL