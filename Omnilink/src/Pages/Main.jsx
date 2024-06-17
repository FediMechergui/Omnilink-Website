import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import ContactUs from './ContactUs';
import Footer from '../components/Footer';
import './Main.css';

const Main = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="content-wrapper">
        <div className="content-inner">
          <section id="main">
            <MainSection />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="about">
            <AboutUs />
          </section>
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default Main;
