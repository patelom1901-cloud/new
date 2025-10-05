import { FaCogs, FaIndustry, FaRuler, FaSyncAlt, FaTools, FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  return (
    <div className="products-section">
      
      {/* Main Section Heading */}
      <div className="contact-header">
  <h1>Drum Mix Plant Parts</h1>
  <div className="contact-breadcrumb">
    <Link to="/">Home</Link> &gt; Drum Mix Plant Parts
  </div>
</div>
      {/* Product Grid */}
      <div className="pd-products-grid">

        {/* Card 1 */}
        <div className="pd-product-card">
          <h2>Segment</h2>
          <div className="pd-product-card-image">
            <img src="/assets/segments.png" alt="Segment" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaIndustry className="pd-icon" /><span>Material: Mild Steel</span></li>
              <li><FaRuler className="pd-icon pd-heartbeat" /><span>Size: DM-25/35/45/50/60</span></li>
              <li><FaTooth className="pd-icon pd-battery" /><span>Outer Teeth Design</span></li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="pd-product-card">
          <h2>Dryer Ring</h2>
          <div className="pd-product-card-image">
            <img src="/assets/dryerrings.png" alt="Drum Ring" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaCogs className="pd-icon" /><span>Type: Segmental Ringl</span></li>
              <li><FaTools className="pd-icon pd-heartbeat" /><span>Fitting: Bolt-On</span></li>
              <li><FaRuler className="pd-icon pd-battery" /><span>Size: DM-25/35/45/50/60</span></li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="pd-product-card">
          <h2>Thrust Roller</h2>
          <div className="pd-product-card-image">
            <img src="/assets/thrustrollers.png" alt="Wire Rope" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaIndustry className="pd-icon" /><span>Material: Steel Cast,Mild steel</span></li>
              <li><FaSyncAlt className="pd-icon pd-heartbeat" /><span>Work : Balances Drum Movement</span></li>
              <li><FaRuler className="pd-icon pd-battery" /><span>Size: DM-25/35/45/50/60</span></li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="pd-product-card">
          <h2>Sprocket</h2>
          <div className="pd-product-card-image">
            <img src="/assets/sprockets.png" alt="Sling Rope" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaIndustry className="pd-icon" /><span>Material: Mild Steel</span></li>
              <li><FaSyncAlt className="pd-icon pd-heartbeat" /><span>Usage: Power Transmission</span></li>
              <li><FaRuler className="pd-icon pd-battery" /><span>Size: DM-25/35/45/50/60</span></li>
            </ul>
          </div>
        </div>

        {/* Card 5 */}
        <div className="pd-product-card">
          <h2>Chain Sprocket</h2>
          <div className="pd-product-card-image">
            <img src="/assets/chainsprockets.png" alt="Gear" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaIndustry className="pd-icon" /><span>Material: Mild Steel</span></li>
              <li><FaSyncAlt className="pd-icon pd-heartbeat" /><span>Usage: Power Transmission</span></li>
              <li><FaRuler className="pd-icon pd-battery" /><span>Size: DM-25/35/45/50/60</span></li>
            </ul>
          </div>
        </div>

        {/* Card 6 */}
        <div className="pd-product-card">
          <h2>Tunion Roller</h2>
          <div className="pd-product-card-image">
            <img src="/assets/tunionrollers.png" alt="Gear" />
          </div>
          <div className="pd-product-card-content">
            <ul className="pd-product-features">
              <li><FaIndustry className="pd-icon" /><span>Material: Steel Casting</span></li>
              <li><FaCogs className="pd-icon pd-heartbeat" /><span>Work : Supports Drum Rotation</span></li>
              <li><FaRuler className="pd-icon pd-battery" /><span>Size: DM-25/35/45/50/60</span></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;