import React from 'react';
import './App.css'; // Main App styles

// Import components
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header /> {/* Use the Header component */}
      <main> {/* Wrap sections in main for semantic HTML */}
        <About />    {/* Use the About component */}
        <Projects /> {/* Use the Projects component */}
        <Contact />  {/* Use the Contact component */}
      </main>
      <Footer />   {/* Use the Footer component */}
    </div>
  );
}

export default App;