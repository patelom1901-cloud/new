// Contact.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "./All.css"; // Your CSS file

const Contact = () => {
  return (
    <div className="contact-page">
      {/* New Heading Section */}
<div className="contact-header">
  <h1>Contact Us</h1>
  <div className="contact-breadcrumb">
    <Link to="/">Home</Link> &gt; Contact
  </div>
</div>

         {/* Contact Info */}
<div className="contact-section">
  {/* Address Card */}
  <div className="contact-card">
    <div className="contact-card__icon-wrapper">
      <FaMapMarkerAlt className="contact-card__icon" />
    </div>
    <h3 className="contact-card__title">Address</h3>
    <p className="contact-card__text">
      51-Shiv Shakti Industries, <br />
      Nilkanth Industrial Park Behind G.I.D.C,<br />
      Gujrat, Mehsana-384002
    </p>
  </div>

  {/* Phone Card */}
  <div className="contact-card">
    <div className="contact-card__icon-wrapper">
      <FaMobileAlt className="contact-card__icon" />
    </div>
    <h3 className="contact-card__title">Phone Number</h3>
    <p className="contact-card__text">+91 9909495768</p>
    <p className="contact-card__text">+91 9023491580</p>
  </div>

  {/* Email Card */}
  <div className="contact-card">
    <div className="contact-card__icon-wrapper">
      <FaEnvelope className="contact-card__icon" />
    </div>
    <h3 className="contact-card__title">Email Address</h3>
    <p className="contact-card__text">shivshaktindustries768@gmail.com</p>
  </div>
</div>
      {/* Contact Form */}
<div className="contact-form-container">
  <div className="contact-form__header">
    <h2 className="contact-form__title">
      GET IN TOUCH
      <span className="contact-form__heading-lines"></span>
    </h2>
  </div>

  <form className="contact-form">
    <input 
      type="text" 
      placeholder="FIRST NAME" 
      className="contact-form__input" 
      aria-label="First Name"
    />
    <input 
      type="text" 
      placeholder="LAST NAME" 
      className="contact-form__input" 
      aria-label="Last Name"
    />
    <input 
      type="email" 
      placeholder="EMAIL" 
      className="contact-form__input" 
      aria-label="Email"
    />
    <input 
      type="tel" 
      placeholder="MOBILE NUMBER" 
      className="contact-form__input" 
      aria-label="Mobile Number"
    />
    <textarea
      placeholder="MESSAGE" 
      className="contact-form__textarea" 
      rows="6"
      aria-label="Message"
    ></textarea>

    {/* --- Corrected Fake reCAPTCHA --- */}
    <div className="contact-form__recaptcha-wrapper">
      <label className="contact-form__recaptcha-box">
        <input 
          type="checkbox" 
          className="contact-form__checkbox-hidden" 
        />
        <span className="contact-form__checkbox-visual"></span>
        <span>I am not a robot</span>
      </label>
      
      <div className="contact-form__recaptcha-info">
        <div className="contact-form__recaptcha-icon">
          <img 
            src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
            alt="reCAPTCHA" 
            width="32" 
            height="32" 
          />
        </div>
        <div className="contact-form__recaptcha-links">
          <span className="contact-form__recaptcha-text">reCAPTCHA</span>
          <span>
            <a href="https://www.google.com/intl/en/policies/privacy/" className="contact-form__recaptcha-link">Privacy</a> · 
            <a href="https://www.google.com/intl/en/policies/terms/" className="contact-form__recaptcha-link">Terms</a>
          </span>
        </div>
      </div>
    </div>
    {/* -------------------------------- */}

    <div className="contact-form__submit-wrapper">
      <button 
        type="submit" 
        className="contact-form__submit-btn" 
      >
        SUBMIT
      </button>
    </div>
  </form>
</div>

      {/* 360° Factory Map */}
      <div className="factory-360-section">
        <div className="factory-360-container">
          <iframe
            title="Shiv Shakti Industries 360° View"
            src="https://www.google.com/maps/embed?pb=!4v1759485010775!6m8!1m7!1sCAoSHENJQUJJaERlUHdVb3lMSjZBMmNpMUFLa25YQ2I.!2m2!1d23.5810699!2d72.3521957!3f1.5157785543717766!4f5.062119774811038!5f0.4000000000000002"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;