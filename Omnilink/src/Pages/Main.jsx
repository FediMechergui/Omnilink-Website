import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import './Main.css';

const Main = () => {
  return (

    <>
    <div className="app-container">
      
      <main className="content-wrapper">
      <Header />
        <div className="content-inner">
          <section id="home">
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
      
      </div>
      <Footer />
      </>
  );
};

export default Main;
