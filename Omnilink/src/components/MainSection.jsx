import './MainSection.css';
import mainImage from '../assets/main.png';

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="content">
        <h2>Unlocking Potential, Powering Progress</h2>
        <h1>We create projects based on AI/IOT</h1>
        <p>
          We specialize in developing and implementing innovative solutions that leverage the power of AI and enhance IoT ecosystems.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={mainImage} alt="OMNILINK" />
      </div>
    </section>
  );
}

export default MainSection;
