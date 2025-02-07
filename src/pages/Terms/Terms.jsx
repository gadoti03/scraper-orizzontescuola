import React, { useEffect, useState } from 'react';

import './Terms.css'

import PreFooter from '../../Components/PreFooter/PreFooter'
import Footer from '../../Components/Footer/Footer'
import Navbar2 from '../../Components/Navbar2/Navbar2'

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <div>
      <Navbar2/>
    </div>
    <div className="terms container">
    <h2>Termini e Condizioni di Utilizzo del Sito Web</h2>

    <h3>1. Termini</h3>
    <p>Accedendo a questo sito web, accessibile da www.tasl.it, accetti di essere vincolato dai seguenti Termini e Condizioni di Utilizzo del Sito Web e accetti di essere responsabile del rispetto di tutte le leggi locali applicabili. Se non sei d'accordo con uno qualsiasi di questi termini, non è consentito accedere a questo sito. I materiali contenuti in questo sito web sono protetti dalle leggi sul copyright e sulle marchi registrati.</p>

    <h3>2. Licenza d'uso</h3>
    <p>È concessa l'autorizzazione per scaricare temporaneamente una copia dei materiali presenti sul sito web di Tasl srls solo per la visualizzazione personale, non commerciale e transitoria. Questa è una concessione di licenza e non un trasferimento di titolo, e in base a questa licenza non puoi:</p>
    <ul>
      <li>modificare o copiare i materiali;</li>
      <li>utilizzare i materiali per qualsiasi scopo commerciale o per qualsiasi visualizzazione pubblica;</li>
      <li>tentare di decodificare a ritroso qualsiasi software contenuto nel sito web di Tasl srls;</li>
      <li>rimuovere qualsiasi annotazione di copyright o altre annotazioni proprietarie dai materiali; o</li>
      <li>trasferire i materiali a un'altra persona o "specchiare" i materiali su qualsiasi altro server.</li>
    </ul>
    <p>Ciò consentirà a Tasl srls di terminare la licenza in caso di violazione di una qualsiasi di queste restrizioni. Al termine della visualizzazione, anche il tuo diritto di visualizzazione sarà terminato e dovrai distruggere ogni copia dei materiali scaricati in tuo possesso, che sia in formato stampato o elettronico.</p>

    <h3>3. Disclaimer</h3>
    <p>Tutti i materiali presenti sul sito web di Tasl srls sono forniti "così come sono". Tasl srls non offre garanzie, esplicite o implicite, e declina e nega ogni altra garanzia. Inoltre, Tasl srls non fa alcuna rappresentazione riguardo all'accuratezza o all'affidabilità dell'uso dei materiali presenti sul suo sito web o relativamente a tali materiali o a qualsiasi sito collegato a questo sito web.</p>

    <h3>4. Limitazioni</h3>
    <p>Né Tasl srls né i suoi fornitori saranno ritenuti responsabili per eventuali danni derivanti dall'uso o dall'incapacità di utilizzare i materiali presenti sul sito web di Tasl srls, anche se Tasl srls o un rappresentante autorizzato di questo sito web è stato informato, verbalmente o per iscritto, della possibilità di tali danni. Alcune giurisdizioni non consentono limitazioni alle garanzie implicite o limitazioni di responsabilità per danni incidentali, queste limitazioni potrebbero non applicarsi a te.</p>

    <h3>5. Revisioni ed errori</h3>
    <p>I materiali presenti sul sito web di Tasl srls possono includere errori tecnici, tipografici o fotografici. Tasl srls non garantisce che qualsiasi dei materiali in questo sito web sia accurato, completo o attuale. Tasl srls può cambiare i materiali contenuti sul suo sito web in qualsiasi momento senza preavviso. Tasl srls non si impegna a aggiornare i materiali.</p>

    <h3>6. Collegamenti</h3>
    <p>Tasl srls non ha esaminato tutti i siti collegati al suo sito web e non è responsabile per i contenuti di nessun sito collegato. La presenza di un qualsiasi collegamento non implica un'approvazione da parte di Tasl srls del sito. L'uso di qualsiasi sito web collegato avviene a rischio dell'utente.</p>

    <h3>7. Modifiche ai Termini di Utilizzo del Sito</h3>
    <p>Tasl srls può revisionare questi Termini di Utilizzo per il suo sito web in qualsiasi momento senza preavviso. Utilizzando questo sito web, accetti di essere vincolato dalla versione attuale di questi Termini e Condizioni di Utilizzo.</p>

    <h3>8. La tua Privacy</h3>
    <p>Si prega di leggere la nostra Informativa sulla Privacy.</p>

    <h3>9. Legge Applicabile</h3>
    <p>Ogni rivendicazione relativa al sito web di Tasl srls sarà disciplinata dalle leggi senza considerazione dei suoi conflitti di disposizioni legali.</p>
  </div>
  <div>
      <PreFooter/>
      <Footer/>
    </div>
  </>
  )
}

export default Terms