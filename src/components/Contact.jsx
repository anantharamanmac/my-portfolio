import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container glass">
        <div className="contact-left">
          <h2>Let's Connect</h2>
          <p>Have a project in mind or just want to say hi? Feel free to drop a message!</p>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {showToast && (
        <div className="custom-toast glass">✅ Message submitted (fake)!</div>
      )}
    </section>
  );
};

export default Contact;
