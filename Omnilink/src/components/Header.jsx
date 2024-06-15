import './Header.css';
import logo from '../assets/omnilink logo 1.png';
import facebookIcon from '../assets/facebook-logo.png';
import instagramIcon from '../assets/instagram-logo.png';
import linkedinIcon from '../assets/linkedin-logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="OMNILINK Logo" />
      </div>
      <nav className="navigation">
        <Link
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Services
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          About us
        </Link>
        <Link
          to="footer"
          smooth={true}
          duration={500}
        >
          Contact us
        </Link>
      </nav>
      <div className="social-icons">
        <a href="https://facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="https://instagram.com"><img src={instagramIcon} alt="Instagram" /></a>
        <a href="https://linkedin.com"><img src={linkedinIcon} alt="LinkedIn" /></a>
      </div>
    </header>
  );
};

export default Header;
