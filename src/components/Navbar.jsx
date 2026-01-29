import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="logo">P.</a>
            <ul className="nav-links">
                <li>
                    <a href="#about" className="nav-link">
                        <span className="nav-number">01.</span>About
                    </a>
                </li>
                <li>
                    <a href="#projects" className="nav-link">
                        <span className="nav-number">02.</span>Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="nav-link">
                        <span className="nav-number">03.</span>Contact
                    </a>
                </li>
                <li>
                    <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
                        <button>Resume</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
