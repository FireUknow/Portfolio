import React, { useState, useEffect } from 'react';
import { useLanguage, useTheme } from '../contexts/GlobalContext';
import { content } from '../data/content';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { language, toggleLanguage } = useLanguage();
    const { isDark, toggleTheme } = useTheme();

    const t = content[language].navbar;

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
                <a href="/" className="logo" onClick={closeMenu}>
                    YunOh.
                </a>

                {/* Desktop Links */}
                <div className="nav-desktop-group">
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <li><a href="#about" onClick={closeMenu}>{t.about}</a></li>
                        <li><a href="#projects" onClick={closeMenu}>{t.projects}</a></li>
                        <li><a href="#skills" onClick={closeMenu}>{t.skills}</a></li>
                        <li><a href="#contact" onClick={closeMenu}>{t.contact}</a></li>
                        <li>
                            <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                <button>{t.resume}</button>
                            </a>
                        </li>
                    </ul>

                    {/* Toggles - Always visible on Right Top */}
                    <div className="nav-toggles">
                        <button className="icon-btn" onClick={toggleLanguage} aria-label="Toggle Language">
                            {language === 'ko' ? 'EN' : 'KR'}
                        </button>
                        <div className="nav-divider">|</div>
                        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                            {isDark ? '☀️' : '🌙'}
                        </button>
                    </div>

                    <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
