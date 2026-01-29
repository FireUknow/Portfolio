import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="/" className="logo" onClick={closeMenu}>U.</a>

                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#about" onClick={closeMenu}>
                            <span className="nav-number">01.</span> 소개
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={closeMenu}>
                            <span className="nav-number">02.</span> 프로젝트
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            <span className="nav-number">03.</span> 연락하기
                        </a>
                    </li>
                    <li>
                        <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                            <button>이력서</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
