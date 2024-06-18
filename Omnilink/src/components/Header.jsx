import { useState } from "react";
import { NavHashLink } from "react-router-hash-link"; // Import NavHashLink
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../assets/omnilink logo 1.png";
import facebookIcon from "../assets/facebook-logo.png";
import instagramIcon from "../assets/instagram-logo.png";
import linkedinIcon from "../assets/linkedin-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <NavHashLink smooth to="/#home" activeClassName="active">
          <img
            src={logo}
            alt="OMNILINK Logo"
            style={{ height: "80px", cursor: "pointer" }}
          />
        </NavHashLink>
      </div>

      <button onClick={toggleMenu} className="hamburger-menu btn">
        ☰
      </button>
      <nav className={`navigation ${menuOpen ? "active" : ""}`}>
        <NavHashLink smooth to="/#services" activeClassName="active">
          Services
        </NavHashLink>
        <NavHashLink smooth to="/#about" activeClassName="active">
          About us
        </NavHashLink>
        <NavHashLink smooth to="/contact" activeClassName="active">
          Contact us
        </NavHashLink>
      </nav>
      <div className="social-icons">
        <a href="https://facebook.com">
          <img src={facebookIcon} alt="Facebook" style={{ height: "30px" }} />
        </a>
        <a href="https://instagram.com">
          <img src={instagramIcon} alt="Instagram" style={{ height: "30px" }} />
        </a>
        <a href="https://linkedin.com">
          <img src={linkedinIcon} alt="LinkedIn" style={{ height: "30px" }} />
        </a>
      </div>
    </header>
  );
};

export default Header;
