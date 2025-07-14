import React from 'react';
import './Footer.css';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Animated Wave */}
      <div className="footer-wave">
        <svg
          className="wave-svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,140 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="#1a002f"  // Change this to match your section bg
          />
        </svg>
      </div>

      <footer className="footer glass">
        <p>Designed & Developed by <strong>Anantharaman J</strong> © {currentYear}</p>
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </footer>
    </>
  );
};

export default Footer;
