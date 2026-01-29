import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://github.com/FireUknow" target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* Blog / LinkedIn placeholders */}
                {/* <a href="#" target="_blank" rel="noopener noreferrer">Blog</a> */}
                {/* <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
            </div>
            <div className="copyright">
                <p>Designed & Built by Uknow Lee</p>
            </div>
        </footer>
    );
};

export default Footer;
