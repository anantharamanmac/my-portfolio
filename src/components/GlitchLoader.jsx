import React from 'react';
import './GlitchLoader.css';

const GlitchLoader = () => {
  return (
    <div className="glitch-loader">
      <div className="glitch-container">
        <h1 className="glitch-text" data-text="A">A</h1>
        <p className="loading-text">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default GlitchLoader;
