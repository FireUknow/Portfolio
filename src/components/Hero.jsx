import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1 className="hero-shoutout">Hi, my name is</h1>
                <h2 className="hero-title big-ueber">Uknow.</h2>
                <h3 className="hero-subtitle big-ueber">I build things for the web.</h3>
                <p className="hero-description">
                    I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                </p>
                <a href="#projects" className="cta-btn">Check out my work!</a>
            </div>
        </section>
    );
};

export default Hero;
