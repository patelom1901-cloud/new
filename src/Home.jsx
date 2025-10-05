import { useState, useEffect, useRef } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { FaAngleRight, FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const slides = [
  "/assets/wire-rope.jpeg",
  "/assets/drum-mix.jpg",
  "/assets/slingrope.jpg",
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const videoRef = useRef(null);
  const videoSrc = "/assets/shiv shakti.mp4";

  // Slider controls
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-count");
      let count = 0;
      const speed = 2000;
      const stepTime = 20;
      const increment = target / (speed / stepTime);

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.floor(count);
          setTimeout(updateCount, stepTime);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <div className="home-container">
      {/* ================= MAIN CONTENT ================= */}
      <main className="main-content">
        {/* ================= SLIDER ================= */}
        <div className="custom-slider">
          {slides.map((slide, index) => (
            <div
              className={`slide ${index === current ? "active" : ""}`}
              key={index}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}

          <button className="arrow left" onClick={prevSlide}>
            ❮
          </button>
          <button className="arrow right" onClick={nextSlide}>
            ❯
          </button>

          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
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

        {/* ================= ABOUT ================= */}
        <section className="about-section-container">
          <div className="about-us">
            <div className="about-text">
              <h2>
                ABOUT <span>us</span>
              </h2>
              <p>Building quality products</p>
              <p>Organized date: 14-09-2017</p>
            </div>
            <div className="about-video">
              <video controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support video.
              </video>
            </div>
          </div>

          <section id="who-we-are" className="who-we-are slide-in">
            <div className="about-info-grid">
              <div className="about-block">
                <img src="/assets/manufacturer.jpeg" alt="Manufacturer" />
                <p>
                  Nature of Business
                  <br />
                  <strong>Manufacturer</strong>
                </p>
              </div>
              <div className="about-block">
                <img src="/assets/gst.jpeg" alt="GST" />
                <p>
                  GST Registration Date
                  <br />
                  <strong>14-09-2017</strong>
                </p>
              </div>
              <div className="about-block">
                <img src="/assets/propship.jpeg" alt="Proprietorship" />
                <p>
                  Legal Status of Firm
                  <br />
                  <strong>Proprietorship</strong>
                </p>
              </div>
              <div className="about-block">
                <img src="/assets/document.jpeg" alt="Document" />
                <p>
                  GST No.
                  <br />
                  <strong>24DWMPP5258N1ZP</strong>
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* ================= STATUS ================= */}
        <section className="status-section flip-in">
          {[
            { icon: "/assets/user.jpeg", count: 1100, label: "Satisfied Customers" },
            { icon: "/assets/products.jpeg", count: 25, label: "Industrial Products" },
            { icon: "/assets/time.jpeg", count: 26, label: "Years of Experience" },
            { icon: "/assets/globel.jpeg", count: 7500, label: "Global Reach" },
          ].map((stat, i) => (
            <div className="status-box" key={i}>
              <div className="sticker">
                <img src={stat.icon} alt={stat.label} width={40} height={40} />
              </div>
              <h2 className="stat-number" data-count={stat.count}>
                0
              </h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>
      </main>

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

export default Home;