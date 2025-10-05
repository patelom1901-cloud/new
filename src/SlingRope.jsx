import { FaCogs, FaIndustry, FaLink, FaRuler, FaSyncAlt, FaTools, FaTooth, FaWeightHanging } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  return (
    <div className="products-section">
      
      {/* Main Section Heading */}
            <div className="contact-header">
        <h1>Sling Rope</h1>
        <div className="contact-breadcrumb">
          <Link to="/">Home</Link> &gt; Sling Rope
        </div>
      </div>
      {/* Product Grid */}
      <div className="pd-products-grid">

        {/* Card 1 */}
        <div className="pd-product-card">
          <h2>Multi Size SlingRope</h2>
          <div className="pd-product-card-image">
            <img src="/assets/multisizesling.png" alt="Segment" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaCogs className="pd-icon" /><span>Multi Wire Sling & Clemping</span></li>
              <li><FaLink className="pd-icon pd-heartbeat" /><span>Clemping: 10mm to 28mm </span></li>
              <li><FaWeightHanging className="pd-icon pd-battery" /><span>Application: Lifting heavy materials</span></li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="pd-product-card">
          <h2>Two Way SlingRope</h2>
          <div className="pd-product-card-image">
            <img src="/assets/twoway.png" alt="Drum Ring" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaCogs className="pd-icon" /><span>Two Way Sling & Clemping</span></li>
              <li><FaLink className="pd-icon pd-heartbeat" /><span>Clemping: 10mm to 28mm </span></li>
              <li><FaWeightHanging className="pd-icon pd-battery" /><span>Application: Lifting heavy materials</span></li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="pd-product-card">
          <h2>Four Way SlingRope</h2>
          <div className="pd-product-card-image">
            <img src="/assets/fourway.png" alt="Wire Rope" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaCogs className="pd-icon" /><span>Four Way Sling & Clemping</span></li>
              <li><FaLink className="pd-icon pd-heartbeat" /><span>Clemping: 10mm to 28mm </span></li>
              <li><FaWeightHanging className="pd-icon pd-battery" /><span>Application: Lifting heavy materials</span></li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="pd-product-card">
          <h2>Safety SlingRope</h2>
          <div className="pd-product-card-image">
            <img src="/assets/spring.png" alt="Sling Rope" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaCogs className="pd-icon" /><span>Safety Sling & Clemping</span></li>
              <li><FaLink className="pd-icon pd-heartbeat" /><span>Clemping: 6mm to 12mm </span></li>
              <li><FaWeightHanging className="pd-icon pd-battery" /><span>Application: Lifting heavy materials</span></li>
            </ul>
          </div>
        </div>
              
      </div>
    </div>
  );
};

export default Products;