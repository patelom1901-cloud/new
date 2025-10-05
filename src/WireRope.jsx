import { FaBolt, FaCheckCircle, FaCogs, FaIndustry, FaRuler, FaShieldAlt, FaSyncAlt, FaTools, FaTooth, FaWeightHanging } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  return (
    <div className="products-section">
      
      {/* Main Section Heading */}
            <div className="contact-header">
        <h1>Wire Rope</h1>
        <div className="contact-breadcrumb">
          <Link to="/">Home</Link> &gt; Wire Rope
        </div>
      </div>
      {/* Product Grid */}
      <div className="pd-products-grid">

        {/* Card 1 */}
        <div className="pd-product-card">
          <h2>Multi Size WireRope</h2>
          <div className="pd-product-card-image">
            <img src="/assets/multisize.png" alt="Segment" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaTools className="pd-icon" /><span>Uses In: Crane, Borwell, Elevator etc.</span></li>
              <li><FaCogs className="pd-icon pd-heartbeat" /><span>Wire Construction: 6x25, 6x31, 6x36</span></li>
              <li><FaRuler className="pd-icon pd-battery" /><span>Diameter: 12mm, 16mm, 19mm, 20mm</span></li>
              <li><FaIndustry className="pd-icon pd-battery" /><span> Industrial Grade</span></li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="pd-product-card">
          <h2>Galvenized WireRope</h2>
          <div className="pd-product-card-image">
            <img src="/assets/galvenized.png" alt="Drum Ring" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaCogs className="pd-icon" /><span> Wire Construction: 7x7</span></li>
              <li><FaRuler className="pd-icon pd-heartbeat" /><span>Diameter: 3mm, 4.8mm</span></li>
              <li><FaShieldAlt className="pd-icon pd-battery" /><span> Corrosion Resistant</span></li>
              <li><FaCheckCircle className="pd-icon pd-battery" /><span>High Tensile Strength</span></li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="pd-product-card">
          <h2>Un Galvenized WireRope</h2>
          <div className="pd-product-card-image">
            <img src="/assets/ungalvenized.png" alt="Wire Rope" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaCogs className="pd-icon" /><span>Wire Construction: 6x19</span></li>
              <li><FaRuler className="pd-icon pd-heartbeat" /><span> Diameter: 8mm, 10mm</span></li>
              <li><FaBolt className="pd-icon pd-battery" /><span>Excellent Flexibility</span></li>
              <li><FaWeightHanging className="pd-icon pd-battery" /><span>High Load Capacity</span></li>
            </ul>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Products;