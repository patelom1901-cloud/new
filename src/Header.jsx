import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaHome, FaSmile, FaInfoCircle, FaBox,} from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* 🔹 Mobile Hamburger */}
      <div className="mobile-hamburger-bar">
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* 🔹 Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <a href="mailto:shivshaktindustries768@gmail.com"><FaEnvelope /> shivshaktindustries768@gmail.com</a>
          <a href="tel:+919909495768"><FaPhone /> +91 9909495768</a>
          <a href="tel:+919023491580"><FaPhone /> +91 9023491580</a>
        </div>
        <div className="social-icons">
          <a href="https://wa.me/919909495768" target="_blank" rel="noreferrer">
            <img src="/assets/whatsapp.png" alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/shivshaktiindustries_51" target="_blank" rel="noreferrer">
            <img src="/assets/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.indiamart.com/shivshaktiindustries-mahesana/" target="_blank" rel="noreferrer">
            <img src="/assets/INDIAMART.NS.png" alt="IndiaMART" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/shiv-shakti-industries-1860a0380" target="_blank" rel="noreferrer">
            <img src="/assets/LinkedIn.png.png" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>

      {/* 🔹 Main Bar */}
      <div className="main-bar">
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo.png.jpeg" alt="Logo" className="main-logo" />
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/welcome">Welcome</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      {/* 🔹 Mobile Sidebar */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        

        <Link to="/" onClick={() => setMenuOpen(false)}>
          <span className="menu-icon"><FaHome /></span>
          <span className="menu-text">Home</span>
        </Link>

        <Link to="/welcome" onClick={() => setMenuOpen(false)}>
          <span className="menu-icon"><FaSmile /></span>
          <span className="menu-text">Welcome</span>
        </Link>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <span className="menu-icon"><FaInfoCircle /></span>
          <span className="menu-text">About</span>
        </Link>

        <Link to="/products" onClick={() => setMenuOpen(false)}>
          <span className="menu-icon"><FaBox /></span>
          <span className="menu-text">Products</span>
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <span className="menu-icon"><FaPhone /></span>
          <span className="menu-text">Contact</span>
        </Link>
      </div>

      {/* 🔹 Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
}