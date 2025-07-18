import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_c9zsrvh',     // Replace with your EmailJS service ID
      'template_2hzr4m7',    // Replace with your EmailJS template ID
      e.target,
      'p9rav256SNnLISAAM'         // Replace with your EmailJS user/public key
    )
    .then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      e.target.reset(); // Reset form after submission
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again.');
    });
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
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {showToast && (
        <div className="custom-toast glass">✅ Message sent successfully!</div>
      )}
    </section>
  );
};

export default Contact;
