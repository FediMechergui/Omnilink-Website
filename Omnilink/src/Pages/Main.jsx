import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import './Main.css';

const Main = () => {
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
    const handleWheelScroll = (e) => {
      e.preventDefault();

      const currentIndex = sections.indexOf(activeSection);
      const nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        setActiveSection(sections[nextIndex]);
      }
    };

    window.addEventListener('wheel', handleWheelScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const handleArrowKeys = (e) => {
      const currentIndex = sections.indexOf(activeSection);
      let nextIndex = currentIndex;

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          nextIndex = Math.min(currentIndex + 1, sections.length - 1);
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          nextIndex = Math.max(currentIndex - 1, 0);
          break;
        default:
          return; // Ignore other keys
      }

      setActiveSection(sections[nextIndex]);
    };

    window.addEventListener('keydown', handleArrowKeys);

    return () => {
      window.removeEventListener('keydown', handleArrowKeys);
    };
  }, [activeSection]);

  useEffect(() => {
    if (refs[activeSection]?.current) {
      refs[activeSection].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeSection]);

  return (
    <>
      <Header setActiveSection={setActiveSection} />
      <main>
        <section
          ref={mainRef}
          id="main"
          className={`section ${activeSection === 'main' ? 'active' : ''}`}
        >
          <MainSection />
        </section>
        <section
          ref={servicesRef}
          id="services"
          className={`section ${activeSection === 'services' ? 'active' : ''}`}
        >
          <Services />
        </section>
        <section
          ref={aboutRef}
          id="about"
          className={`section ${activeSection === 'about' ? 'active' : ''}`}
        >
          <AboutUs />
        </section>
        <section
          ref={footerRef}
          id="footer"
          className={`section ${activeSection === 'footer' ? 'active' : ''}`}
        >
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Main;
