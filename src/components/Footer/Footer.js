import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  return (
    <footer className="portfolio-footer">
      <p>© {currentYear} Vicky Atish. All rights reserved.</p>
    </footer>
  );
}

export default Footer;