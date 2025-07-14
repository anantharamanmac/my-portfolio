import React, { useState } from 'react';
import './Services.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaintBrush, FaBullhorn, FaCode, FaPencilRuler } from 'react-icons/fa';

const services = [
  {
    title: 'Graphic Design',
    desc: 'Posters, social media creatives, and visual content.',
    details: 'Tools: Photoshop, Illustrator, Canva\nI’ve designed 100+ graphics for events and social media.',
    icon: <FaPaintBrush />,
  },
  {
    title: 'Branding',
    desc: 'Logo design and brand identity.',
    details: 'I craft logos, guidelines, and brand stories to leave a lasting impact.',
    icon: <FaBullhorn />,
  },
  {
    title: 'Web Development',
    desc: 'Frontend + Backend solutions using React, Node.',
    details: 'I build responsive, scalable web apps with MERN stack and REST APIs.',
    icon: <FaCode />,
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centered wireframes & mockups.',
    details: 'Prototyping in Figma and Adobe XD with usability-first principles.',
    icon: <FaPencilRuler />,
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>What I Do</h2>
        <p>Combining design & development into modern digital experiences</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card glass"
            key={index}
            onClick={() => setActiveService(service)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal glass"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="modal-close" onClick={() => setActiveService(null)}>×</button>
              <h3>{activeService.title}</h3>
              <p>{activeService.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
