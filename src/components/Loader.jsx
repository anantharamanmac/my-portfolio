import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container glass">
        <h1 className="loader-logo">A</h1>
        <p className="loader-text">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default Loader;
