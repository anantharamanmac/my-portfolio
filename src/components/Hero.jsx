import React from 'react';
import './Hero.css';
import { useToast } from '../context/ToastContext';
 import avatar from '../assets/avatar1.png'; // Optional: your image

const Hero = () => {
  const { showToast } = useToast();

  const handleCVDownload = () => {
    showToast("✅ CV download started!");
  };

  return (
    <section className="hero">
      <div className="hero-left glass">
        <p className="intro">WELCOME TO MY WORLD ✨</p>
        <h1>Hi, I'm <span>Anantharaman J</span></h1>
        <h2>Graphic Designer & Web Developer</h2>
        <p className="subtext">
          I craft creative and functional visuals that blend aesthetics and interactivity.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="glass-button">My Projects</a>
          <a
            href="/Anantharaman-CV.pdf"
            download
            className="glass-button outline"
            onClick={handleCVDownload}
          >
            Download CV
          </a>
        </div>

        <div className="social-icons">
          <a href="#"><i className="fab fa-behance"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="hero-right">
        {/* Optional Avatar */}
         <img src={avatar} alt="avatar" className="hero-avatar" /> 
      </div>

      <div className="scroll-down">↓</div>
    </section>
  );
};

export default Hero;
