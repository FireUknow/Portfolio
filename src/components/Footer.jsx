import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                {/* Add social icons here later usually svg */}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="copyright">
                <p>Built by Uknow with React</p>
            </div>
        </footer>
    );
};

export default Footer;
