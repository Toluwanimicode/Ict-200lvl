import { useState } from 'react'
import './Navbar.css'
 
function Navbar({ name }) {
  // State: is the mobile menu open? Start as false (closed)
  const [menuOpen, setMenuOpen] = useState(false)
 
  function toggleMenu() {
    setMenuOpen(!menuOpen)  // ! means 'opposite of'. If true becomes false, if false becomes true
  }
 
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo">⚛</span>
        <span className="navbar__name">{name}</span>
      </div>
 
      {/* Hamburger button — only visible on mobile */}
      <button className="navbar__hamburger" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>
      {/* Nav links — className changes based on menuOpen state */}
      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )
}
 
export default Navbar