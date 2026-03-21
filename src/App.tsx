import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import './index.css';
import './styles/mobile.css';

// ===== ROOT APP =====
function App() {
  return (
    <BrowserRouter>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
