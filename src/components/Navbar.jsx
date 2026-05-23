import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ([name]) => {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu(){
        setMenuOpen(!menuOpen)
    } 
return (
    <div>
        <nav className='navbar'>
            <div className='navbar-brand'>
                <span className='navbar_logo'>
                    @
                </span>
                <span className='navbar_name'>
                    {name}
                </span>
            </div>
            <button className="navbar_harmburger" onclick={toggleMenu}>
                {menuOpen ? 'X' : '='}
            </button>
            <ul className={'navbar_links' }>
                <li>Home</li>
                <li>about</li>
                <li>Skills</li>
                <li>Project</li>
                <li>Projects</li>
                <li>Education</li>
            </ul>
        </nav>
    </div>
)
}

export default Navbar;