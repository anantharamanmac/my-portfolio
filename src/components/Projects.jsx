import React from 'react';
import './Projects.css';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  const projectList = [
    {
      title: 'Creative Poster Pack',
      category: 'Graphic Design',
      embedCode: `<iframe src="https://www.behance.net/embed/project/221100559?ilo0=1" height="316" width="100%" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>`,
      url: 'https://www.behance.net/gallery/221100559/Creative-Poster-Pack',
    },
    {
      title: 'Branding Identity Kit',
      category: 'Branding',
      embedCode: `<iframe src="https://www.behance.net/embed/project/217075723?ilo0=1" height="316" width="100%" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>`,
      url: 'https://www.behance.net/gallery/217075723/Branding-Identity-Kit',
    },
    {
      title: 'Portfolio Showcase Design',
      category: 'UI/UX & Web',
      embedCode: `<iframe src="https://www.behance.net/embed/project/217076129?ilo0=1" height="316" width="100%" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>`,
      url: 'https://www.behance.net/gallery/217076129/Portfolio-Showcase-Design',
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>A blend of design and development I’ve worked on recently</p>
      </div>

      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <Tilt
            key={index}
            glareEnable
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.04}
            transitionSpeed={250}
            className="tilt-card"
          >
            <div className="project-card glass">
              <div
                className="embed-container"
                dangerouslySetInnerHTML={{ __html: proj.embedCode }}
              />
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.category}</p>
              </div>
              <a
                href={proj.url}
                className="behance-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project on Behance →
              </a>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
