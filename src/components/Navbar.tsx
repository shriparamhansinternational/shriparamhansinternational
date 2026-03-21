import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logoImg from '../assets/SPI FINAL LOGO copy.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position to toggle navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change + reset scroll state
  useEffect(() => {
    setMenuOpen(false);
    setScrolled(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path ? 'active' : '';

  // Transparent only on home page before scrolling; solid on all other pages
  const isHome = location.pathname === '/';
  const navClass = scrolled || !isHome ? 'scrolled' : 'transparent';

  return (
    <nav className={`navbar ${navClass}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="SPI Logo" />
          <div className="logo-text">
            <span className="logo-name">SPI</span>
            <span className="logo-sub">Shri Paramhans International</span>
            <span className="logo-tagline">Core of Professionals</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about')}>About</Link></li>
          <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
          <li><Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link></li>
          <li><Link to="/clients" className={isActive('/clients')}>Clients</Link></li>
          <li><Link to="/contact" className={`nav-cta ${isActive('/contact')}`}>Contact Us</Link></li>
        </ul>

        {/* Hamburger for mobile */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
