import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from '../assets/omnilink logo 1.png';
import facebookIcon from '../assets/facebook-logo.png';
import instagramIcon from '../assets/instagram-logo.png';
import linkedinIcon from '../assets/linkedin-logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#main">
          <img src={logo} alt="OMNILINK Logo" style={{ height: '50px' }} />
        </a>
      </div>
      <button onClick={toggleMenu} className="hamburger-menu btn">
        ☰
      </button>
      <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
        <a href="#services" className="nav-link">
          Services
        </a>
        <a href="#about" className="nav-link">
          About us
        </a>
        <a href="#contact" className="nav-link">
          Contact us
        </a>
      </nav>
      <div className="social-icons">
        <a href="https://facebook.com">
          <img src={facebookIcon} alt="Facebook" style={{ height: '30px' }} />
        </a>
        <a href="https://instagram.com">
          <img src={instagramIcon} alt="Instagram" style={{ height: '30px' }} />
        </a>
        <a href="https://linkedin.com">
          <img src={linkedinIcon} alt="LinkedIn" style={{ height: '30px' }} />
        </a>
      </div>
    </header>
  );
};

export default Header;
