import React, { useEffect, useState } from 'react';
import './GlitchLoader.css';

const GlitchLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glitch-loader">
      <div className="glitch-container">
       

        {/* SVG Animation */}
        <svg
          className="design-svg"
          viewBox="0 0 500 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#ffffff22" strokeWidth="1">
            {/* Grid */}
            {[...Array(11)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 50}
                y1={0}
                x2={i * 50}
                y2={200}
                className="grid-line"
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1={0}
                y1={i * 50}
                x2={500}
                y2={i * 50}
                className="grid-line"
              />
            ))}
            {/* Ruler ticks */}
            {[...Array(11)].map((_, i) => (
              <text
                key={`tick-${i}`}
                x={i * 50}
                y={195}
                fontSize="8"
                fill="#ffffff88"
                textAnchor="middle"
              >
                {i * 50}
              </text>
            ))}
          </g>

          {/* Animated path */}
          <path
            d="M20 150 C150 100, 350 100, 480 150"
            stroke="#a855f7"
            strokeWidth="4"
            fill="none"
            className="draw-path"
          />
        </svg>

        {/* Brush stroke progress bar */}
        <div className="brush-stroke-container">
          <div className="brush-stroke" style={{ width: `${progress}%` }} />
        </div>

        <p className="loading-text">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default GlitchLoader;
