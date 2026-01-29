import React from 'react';
import { useLanguage } from '../contexts/GlobalContext';
import { content } from '../data/content';
import './About.css';

const About = () => {
    const { language } = useLanguage();
    const t = content[language].about;

    return (
        <section id="about" className="about-section">
            <h2 className="section-title"><span className="section-number">03.</span> {t.title}</h2>
            <div className="about-content">
                <div className="about-text">
                    {t.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
