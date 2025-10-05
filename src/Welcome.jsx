// Wlcome.jsx
import { Link } from "react-router-dom";
import { FaAngleRight, FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import "./All.css"; // Your CSS file

const Welcome = () => {
  return (
    <div className="contact-page">
      {/* New Heading Section */}
<div className="contact-header">
  <h1>Welcome To SSI</h1>
  <div className="contact-breadcrumb">
    <Link to="/">Home</Link> &gt; Welcome To SSI
  </div>
</div>
                 {/* ================= WELCOME ================= */}
        <section className="welcome-section">
          <div className="welcome-left">
            <h2 className="welcome-heading">
              <span className="welcome-light">Welcome to</span>
              <span className="welcome-bold"> Shiv Shakti Industries</span>
            </h2>
            <p>
              We are a leading manufacturer of wire ropes, sling ropes, and drum
              mix plant spare parts. With years of expertise, we deliver products
              that meet the highest industry standards.
            </p>
            <p>
              At Shiv Shakti Industries, we prioritize quality, precision, and
              customer satisfaction.
            </p>
            <p>
              Partner with us for reliable, durable, and efficient solutions that
              keep your business moving forward.
            </p>
          </div>

          <div className="welcome-right">
            <img src="/assets/front view.jpeg" alt="Business Card 1" />
            <img src="/assets/back view.jpeg" alt="Business Card 2" />
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

export default Welcome;