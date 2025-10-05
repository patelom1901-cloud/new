import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

// import new product detail pages
import DrumMix from './pages/DrumMix';
import WireRope from './pages/WireRope';
import SlingRope from './pages/SlingRope';

import './styles/shiv.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* product detail pages */}
        <Route path="/drum-mix" element={<DrumMix />} />
        <Route path="/wire-rope" element={<WireRope />} />
        <Route path="/sling-rope" element={<SlingRope />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;