import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Shiv Shakti Industries</h2>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/Welcome">Welcome</Link>
          <Link to="/About">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="social-icons">
          <a href="https://wa.me/919909495768" target="_blank" rel="noreferrer">
            <img src="/assets/whatsapp.png" alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/shivshaktiindustries_51?igsh=MTJyc2JtYTFoamZhdw==" target="_blank" rel="noreferrer">
            <img src="/assets/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.indiamart.com/shivshaktiindustries-mahesana/" target="_blank" rel="noreferrer">
            <img src="/assets/INDIAMART.NS.png" alt="IndiaMART" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/shiv-shakti-industries-1860a0380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <img src="/assets/LinkedIn.png.png" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Shiv Shakti Industries. All rights reserved.</p>

      <style>{`
        footer.footer {
          background: #111;
          color: #fff;
          padding: 30px 20px;
          text-align: center;
          font-family: "Segoe UI", sans-serif;
        }

        .footer-top h2 {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          color: #fbff00ff;
        }

        .footer-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 15px;
        }

        .footer-nav a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .footer-nav a:hover {
          color: #ff6600;
        }

        

        .footer-bottom {
          font-size: 0.9rem;
          color: #aaa;
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer-nav {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;