import React from 'react';
import { useLanguage } from '../contexts/GlobalContext';
import { content } from '../data/content';
import './Hero.css';

const Hero = () => {
    const { language } = useLanguage();
    const t = content[language].hero;

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1 className="hero-shoutout">{t.greeting}</h1>
                <h2 className="hero-title big-ueber">{t.title}</h2>
                <h3 className="hero-subtitle big-ueber">{t.subtitle}</h3>

                <p className="hero-description">
                    {t.description}
                </p>

                <div className="hero-badges">
                    {t.badges.map((badge, i) => (
                        <span key={i} className="hero-badge">{badge}</span>
                    ))}
                </div>

                <a href="#projects" className="cta-btn">{t.cta}</a>
            </div>
        </section>
    );
};

export default Hero;
