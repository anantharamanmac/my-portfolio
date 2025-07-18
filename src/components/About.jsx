import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import avatar from '../assets/avatar1.png';

const skills = [
  { name: 'Figma', percent: 70 },
  { name: 'XD', percent: 100 },
  { name: 'AI', percent: 100 },
  { name: 'PS', percent: 100 },
  { name: 'HTML', percent: 100 },
  { name: 'CSS', percent: 100 },
  { name: 'React', percent: 90 },
];

const About = () => {
  const [visible, setVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

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

        <div className="skills-container" ref={progressRef}>
          <h4>Skills</h4>
          <div className="progress-badges">
            {skills.map((skill, index) => (
              <div key={index} className="progress-box">
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${visible ? 'animate' : ''}`}
                    style={{
                      width: visible ? `${skill.percent}%` : '0%',
                      animationDelay: `${index * 0.2}s`,
                    }}
                  ></div>
                </div>
                <span className="percent">{skill.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
