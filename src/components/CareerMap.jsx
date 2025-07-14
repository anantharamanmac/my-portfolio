import React from 'react';
import { motion } from 'framer-motion';
import './CareerMap.css';

const timeline = [
  {
    year: "2021",
    title: "Started Graphic Design",
    description: "Began exploring digital art, Photoshop, and Illustrator.",
  },
  {
    year: "2022",
    title: "Freelance Projects",
    description: "Worked with clients to create logos, banners, and social media designs.",
  },
  {
    year: "2023",
    title: "Professional Training",
    description: "Completed a graphic design certification and UI/UX basics.",
  },
  {
    year: "2024",
    title: "Advanced Design & Animation",
    description: "Added motion graphics and 3D design to my skillset.",
  },
];

const CareerMap = () => {
  return (
    <section className="career-section">
      <h2 className="career-title">Mi Camino Creativo</h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareerMap;
