import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import './Main.css';
import { Element, scroller } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import ContactUs from './ContactUs';

const Main = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['main', 'services', 'about', 'contact', 'footer'];

  const [mainRef, mainInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });
  const [footerRef, footerInView] = useInView({ threshold: 0.1 });

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      // Scroll down
      setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
    } else {
      // Scroll up
      setCurrentSection((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
    } else if (e.key === 'ArrowUp') {
      setCurrentSection((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    const section = sections[currentSection];
    scroller.scrollTo(section, {
      duration: 500,
      smooth: 'easeInOutQuart'
    });
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <Header />
      <Element name="main">
        <div className={`section ${mainInView ? 'fade-in' : 'fade-out'}`} ref={mainRef}>
          <MainSection />
        </div>
      </Element>
      <Element name="services">
        <div className={`section ${servicesInView ? 'fade-in' : 'fade-out'}`} ref={servicesRef}>
          <Services />
        </div>
      </Element>
      <Element name="about">
        <div className={`section ${aboutInView ? 'fade-in' : 'fade-out'}`} ref={aboutRef}>
          <AboutUs />
        </div>
      </Element>
      <Element name="contact">
        <div className={`section ${contactInView ? 'fade-in' : 'fade-out'}`} ref={contactRef}>
          <ContactUs />
        </div>
      </Element>
      {/* Footer outside of Element for fixed positioning */}
      <div className={`footer ${footerInView ? 'fade-in' : 'fade-out'}`} ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Main;