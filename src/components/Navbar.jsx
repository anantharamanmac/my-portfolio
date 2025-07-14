import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = ['hero', 'about', 'projects', 'contact'];
      for (let sec of sections) {
        const element = document.getElementById(sec);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar glass ${scrolled ? 'navbar-shrink' : ''}`}>
      <div className="navbar-container">
        <ul className="nav-items">
          <li><a href="#" className={activeSection === 'hero' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Me</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
