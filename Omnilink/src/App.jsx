import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './index.css'; // Ensure this line is added to import the CSS

const App = () => {
  const [activeSection, setActiveSection] = useState('main');
  const mainRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  const sections = ['main', 'services', 'about', 'footer'];
  const refs = {
    main: mainRef,
    services: servicesRef,
    about: aboutRef,
    footer: footerRef,
  };

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      const currentIndex = sections.indexOf(activeSection);
      const nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        setActiveSection(sections[nextIndex]);
        refs[sections[nextIndex]].current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeSection, refs]);

  useEffect(() => {
    if (refs[activeSection]?.current) {
      refs[activeSection].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection, refs]);

  return (
    <Router>
      <Header setActiveSection={setActiveSection} />
      <main style={{ overflow: 'hidden', marginTop: '60px' }}>
        <section ref={mainRef} id="main" className="main-section">
          {activeSection === 'main' && <MainSection />}
        </section>
        <section ref={servicesRef} id="services" className="services-section">
          {activeSection === 'services' && <Services />}
        </section>
        <section ref={aboutRef} id="about" className="about-section">
          {activeSection === 'about' && <AboutUs />}
        </section>
        <div ref={footerRef} id="footer">
          {activeSection === 'footer' && <Footer />}
        </div>
      </main>
    </Router>
  );
};

export default App;
