import React from 'react';
import './HomeComponent.css';

import { Link } from 'react-router-dom';

const HomeComponent = ({ title, subTitle, div, backgroundImage, image, link, logo, testoFooter, button, gradiente, colore, width}) => {
  const backgroundStyle = {
    background: `${gradiente}, url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: `${colore}`
  };

  const widthStyle = {
    width: `${width}`
  }

  return (
    <div className="home-component-container">
      <Link to={link}><div className="home-component-top-section" style={backgroundStyle}>
        <div className="home-component-content-box" style={widthStyle}>
          <div className="home-component-header">
            <div className="home-component-logo-div">
              <img src={logo} alt="logo" className="home-component-logo" />
            </div>
            <div className="home-component-title">
              <h1>{title}</h1>
              <h2>{subTitle}</h2>
            </div>
          </div>
          <ul className="home-component-features">
            {div}
          </ul>
        </div>
        <div className="home-component-image-box">
          <img src={image} alt="" />
        </div>
      </div></Link>
      <div className="home-component-bottom-section">
        <div className="home-component-cta">
          <div className="home-component-cta-text">
            {testoFooter}
          </div>
          {button}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
