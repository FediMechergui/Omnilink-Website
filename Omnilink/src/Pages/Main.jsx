import { useEffect, useState } from 'react';
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

  let touchStartY = 0;
  let touchEndY = 0;

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

  const handleTouchStart = (e) => {
    touchStartY = e.changedTouches[0].screenY;
  };

  const handleTouchEnd = (e) => {
    touchEndY = e.changedTouches[0].screenY;
    if (touchStartY > touchEndY + 5) {
      // Swipe up
      setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
    } else if (touchStartY < touchEndY - 5) {
      // Swipe down
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
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="app-container">
      <div className='navbar-container'>
        <Header />
      </div>
      <div className="sections">
        <Element name="main">
          <div className={`section-container ${mainInView? 'fade-in' : 'fade-out'}`} ref={mainRef}>
            <div className="content-wrapper">
              <MainSection />
            </div>
          </div>
        </Element>
        <Element name="services">
          <div className={`section-container ${servicesInView? 'fade-in' : 'fade-out'}`} ref={servicesRef}>
            <div className="content-wrapper">
              <Services />
            </div>
          </div>
        </Element>
        <Element name="about">
          <div className={`section-container ${aboutInView? 'fade-in' : 'fade-out'}`} ref={aboutRef}>
            <div className="content-wrapper">
              <AboutUs />
            </div>
          </div>
        </Element>
        <Element name="contact">
          <div className={`section-container ${contactInView? 'fade-in' : 'fade-out'}`} ref={contactRef}>
            <div className="content-wrapper">
              <ContactUs />
            </div>
          </div>
        </Element>
        <Element name="footer">
          <div className={`section-container ${footerInView? 'fade-in' : 'fade-out'}`} ref={footerRef}>
            <Footer /> {/* No content-wrapper here for the footer */}
          </div>
        </Element>
      </div>
    </div>
  );
  
};

export default Main;
