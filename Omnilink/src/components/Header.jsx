import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../assets/omnilink logo 1.png";
import facebookIcon from "../assets/facebook-logo.png";
import facebookIconDark from "../assets/facebook-logo-dark.png"; // Update to correct dark icon
import instagramIcon from "../assets/instagram-logo.png";
import instagramIconDark from "../assets/instagram-logo-dark.png"; // Update to correct dark icon
import linkedinIcon from "../assets/linkedin-logo.png";
import linkedinIconDark from "../assets/linkedin-logo-dark.png"; // Update to correct dark icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getSocialIcon = (icon, darkIcon) => {
    return scrolled || isSmallScreen ? darkIcon : icon;
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <NavHashLink smooth to="/#home">
          <img src={logo} alt="OMNILINK Logo" />
        </NavHashLink>
      </div>

      <button onClick={toggleMenu} className="hamburger-menu">☰</button>

      <div className={`navigation-container ${menuOpen ? "active" : ""}`}>
        <nav className="navigation">
          <NavHashLink smooth to="/#services">Services</NavHashLink>
          <NavHashLink smooth to="/#about">About us</NavHashLink>
          <NavHashLink smooth to="/contact">Contact us</NavHashLink>
        </nav>

        <div className="social-icons">
          <a href="https://facebook.com">
            <img src={getSocialIcon(facebookIcon, facebookIconDark)} alt="Facebook" />
          </a>
          <a href="https://instagram.com">
            <img src={getSocialIcon(instagramIcon, instagramIconDark)} alt="Instagram" />
          </a>
          <a href="https://linkedin.com">
            <img src={getSocialIcon(linkedinIcon, linkedinIconDark)} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
