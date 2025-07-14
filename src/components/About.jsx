import React from 'react';
import './About.css';
 import avatar from '../assets/avatar1.png'; // Replace with your avatar image

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-left">
        <div className="blob">
           <img src={avatar} alt="Anantharaman Avatar" className="about-avatar" /> 
        </div>
      </div>

      <div className="about-right glass">
        <h2>About Me</h2>
        <p>
          I'm Anantharaman J, a passionate graphic designer and web developer who blends creative visuals
          with modern frontend functionality. I specialize in crafting unique, visually appealing digital experiences.
        </p>
        <p>
          From branding and UI/UX to full-stack web applications, I bring both aesthetics and logic to every project.
          I'm driven by design, detail, and discovery.
        </p>

        <div className="skills-container">
          <h4>Skills</h4>
          <div className="skill-badges">
            <span className="badge">Figma</span>
            <span className="badge">XD</span>
            <span className="badge">AI</span>
            <span className="badge">PS</span>
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
            <span className="badge">React</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
