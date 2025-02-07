import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/black_arrow.png';

import { Link } from 'react-router-dom';

const Hero = ({ h1, p, backgroundImage, linkDestination }) => {

  const heroStyle = {
    background: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  return (
    <div className='hero container' style={heroStyle}>
      <div className='hero-text'>
        <h1>{h1}</h1>
        <p>{p}</p>
        <p>
          <Link to={linkDestination}>
            <button className='btn'>Scopri di più<img src={dark_arrow} alt="" /></button>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Hero;
