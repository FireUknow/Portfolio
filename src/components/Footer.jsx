import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                {/* Social Icons would typically replace text here */}
                <a href="https://github.com/FireUknow" target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
            </div>
            <div className="copyright">
                <p>Designed & Built by Uknow</p>
            </div>
        </footer>
    );
};

export default Footer;
