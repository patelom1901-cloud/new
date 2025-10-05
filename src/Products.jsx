// products.jsx
import { Link } from "react-router-dom";
import { FaAngleRight, FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import "./All.css"; // Your CSS file

const products = () => {
  return (
    <div className="contact-page">
      {/* New Heading Section */}
<div className="contact-header">
  <h1>Our Industrieal Products </h1>
  <div className="contact-breadcrumb">
    <Link to="/">Home</Link> &gt; Our Industrieal Products
  </div>
</div>
                  {/* ================= PRODUCTS ================= */}
<section id="products" className="product-section">
    
  <div className="video-heading">
    <div className="top-line"></div>
    <h2>Our Products</h2>
    <div className="bottom-line"></div>
  </div>
          <h3 className="paragraph-font">click Read more Or Product card and explore our more product details</h3>
  <div className="product-gallery">
    <div className="product-grid">
      <a href="/drum-mix" className="product-card-link">
        <div className="product-card">
          <img src="/assets/drum-mix.jpg" alt="Drum Mix Plant Parts" />
          <h3>Drum Mix Plant Parts</h3>
          <div className="read-more-btn">Read More ➤</div>
        </div>
      </a>

      <a href="/wire-rope" className="product-card-link">
        <div className="product-card">
          <img src="/assets/wire-rope.jpeg" alt="Wire Rope" />
          <h3>Wire Rope</h3>
          <div className="read-more-btn">Read More ➤</div>
        </div>
      </a>

      <a href="/sling-rope" className="product-card-link">
        <div className="product-card">
          <img src="/assets/slingrope.jpg" alt="Sling Rope" />
          <h3>Sling Rope</h3>
          <div className="read-more-btn">Read More ➤</div>
        </div>
      </a>
    </div>
  </div>
</section>

         {/* =============================================== 
                                      QUICK CNTACT SECTION
                    =================================================*/}
        
                 {/* ================= VIDEO BACKGROUND ================= */}
        
                    <div className="video-heading">
            <div className="top-line"></div>
            <h2>QUICK CONTACT</h2>
            <div className="bottom-line"></div>
          </div>
                    <section className="video-section">
          
        {/* Semi-transparent overlay */}
          <div className="video-overlay-layer"></div>
          <video autoPlay muted loop playsInline className="bg-video">
            <source src="/assets/16_9.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
                    
         <div className="video-overlay">
          <Link to="/Contact" className="contact-btn">
            Contact Us
          </Link>
        </div>
        </section>
        
        {/* ===================google review form  ================ */}
        
                    <section className="google-widget-section">
          <div className="google-widget-container">
            <div className="google-left">
              <img src="/assets/G.png" alt="Google Logo" />
            </div>
            <div className="google-right">
              <h2>Rate Us on Google</h2>
              <div className="google-stars">
                <span>★ ★ ★ ★ ★</span>
              </div>
              <button
                className="google-review-btn"
                onClick={() => {
                  window.open(
                    "https://g.page/r/CcmuDzwbq6OjEBM/review",
                    "_blank"
                  );
                }}
              >
                Submit Review
              </button>
            </div>
          </div>
        </section>
        {/* ===================quick link & adress ================ */}
        <div className="sidebar">
          {/* Recent Posts */}
          <div className="recent-posts">
            <h3 className="heading">QUICK LINKS</h3>
            <ul>
              <li>
                <FaAngleRight className="pd-icon" />
                <Link to="/drum-mix">Drum Mix Plant Parts</Link>
              </li>
              <li>
                <FaAngleRight className="pd-icon" />
                <Link to="/wire-rope">Wire Rope</Link>
              </li>
              <li>
                <FaAngleRight className="pd-icon" />
                <Link to="/sling-rope">Sling Rope</Link>
              </li>
            </ul>
          </div>
        
        {/* Address */}
        <div className="address">
          <h3 className="heading">ADDRESS</h3>
          <p>
            <FaMapMarkedAlt className="pd-icon" />
            51-Shiv Shakti Industries, Nilkanth Industrial Park Behind G.I.D.C,Gujrat, Mehsana-384002
          </p>
          <p>
            <FaPhone className="pd-icon" />
            +91 9909495768 / +91 9023491580
          </p>
          <p>
            <FaEnvelope className="pd-icon" />
            shivshaktindustries768@gmail.com
          </p>
        
          {/* Get Directions Button */}
          <a
          href="https://maps.app.goo.gl/BrGaDTbd7EyqFRMr9"
          target="_blank"
          rel="noopener noreferrer"
          className="directions-btn"
        >
          <span className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M10 17l5-5-5-5v10z"/>
            </svg>
          </span>
          Directions
        </a>
        </div>
        </div>
         
    </div>
  );
};

export default products;