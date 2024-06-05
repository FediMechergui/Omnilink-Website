import './Footer.css';
import bannerImage from '../assets/be-hold.png'; 
import smallLogo from '../assets/logo-white.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      </div>
      <div className="footer-bottom">
        <img src={smallLogo} alt="Omnilink Logo" className="footer-logo-small" />
        <p className="footer-copyright">© 2024, All Rights Reserved</p>
        <div className="footer-social">
          <a href="https://facebook.com" className="social-link">Facebook</a>
          <a href="https://instagram.com" className="social-link">Instagram</a>
          <a href="https://linkedin.com" className="social-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
