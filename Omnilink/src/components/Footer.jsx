import './Footer.css';
import bannerImage from '../assets/be-hold.png'; 
import smallLogo from '../assets/logo-white.png';
import facebookIcon from '../assets/facebook-logo.png';
import instagramIcon from '../assets/instagram-logo.png';
import linkedinIcon from '../assets/linkedin-logo.png';

const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <div className="footer-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      </div>
      <div className="footer-bottom">
        <img src={smallLogo} alt="Omnilink Logo" className="footer-logo-small" />
        <p className="footer-copyright">© 2024, All Rights Reserved</p>
        <div className="footer-social">
        <a href="https://facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="https://instagram.com"><img src={instagramIcon} alt="Instagram" /></a>
        <a href="https://linkedin.com"><img src={linkedinIcon} alt="LinkedIn" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
