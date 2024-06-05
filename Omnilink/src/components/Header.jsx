import './Header.css';
import logo from '../assets/omnilink logo 1.png';
import facebookIcon from '../assets/facebook-logo.png';
import instagramIcon from '../assets/instagram-logo.png';
import linkedinIcon from '../assets/linkedin-logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="OMNILINK Logo" />
      </div>
      <nav className="navigation">
        <a href="#services">Services</a>
        <a href="#about">About us</a>
        <a href="#contact">Contact us</a>
      </nav>
      <div className="social-icons">
        <a href="https://facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="https://instagram.com"><img src={instagramIcon} alt="Instagram" /></a>
        <a href="https://linkedin.com"><img src={linkedinIcon} alt="LinkedIn" /></a>
      </div>
    </header>
  );
}

export default Header;
