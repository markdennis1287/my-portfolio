import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        scrollToSection={scrollToSection}
        sections={{ homeRef, aboutRef, projectsRef, contactRef }}
      />
      <main className="flex-grow">
        <div ref={homeRef}><Home /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
