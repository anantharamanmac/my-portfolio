import React from 'react';
import './CVButton.css';

const CVButton = () => {
  return (
    <div className="cv-section">
      <a href="/cv/Appu_CV.pdf" download className="cv-button">
        Descargar CV
      </a>
    </div>
  );
};

export default CVButton;
