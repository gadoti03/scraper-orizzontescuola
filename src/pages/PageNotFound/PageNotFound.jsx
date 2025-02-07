import React from 'react'
import { Link } from 'react-router-dom'

import './PageNotFound.css'

import Footer from '../../Components/Footer/Footer'
import Navbar2 from '../../Components/Navbar2/Navbar2'
/*import './PageNotFound.css'*/

const PageNotFound = () => {
  return (
    <>
    <div>
      <Navbar2/>
    </div>
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">404</h1>
        <p className="error-text">Ops! La pagina che stai cercando non è disponibile.</p>
        <p className="error-text">Torna alla <Link to="/" className="error-link">pagina iniziale</Link>.</p>
      </div>
    </div>
    <div style={{position: 'fixed', bottom: 0, left: 0, right: 0}}>
    <Footer/>
    </div>
    </>
  )
}

export default PageNotFound