import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="portfolio-section contact-section">
      <h2>Contact Me</h2>
      {/* --- REPLACE WITH YOUR ACTUAL CONTACT INFO --- */}
      <p>Feel free to reach out!</p>
      <ul>
        <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></li>
        <li>GitHub: <a href="https://github.com/vickyatish" target="_blank" rel="noopener noreferrer">github.com/vickyatish</a></li>
        {/* Add other links (Twitter, etc.) if desired */}
      </ul>
    </section>
  );
}

export default Contact;