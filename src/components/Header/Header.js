import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="portfolio-header">
      <nav>
        {/* Basic navigation links - can be improved later */}
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;