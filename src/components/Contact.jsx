import React from 'react';
import { useLanguage } from '../contexts/GlobalContext';
import { content } from '../data/content';
import './Contact.css';

const Contact = () => {
    const { language } = useLanguage();
    const t = content[language].contact;

    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title text-center"><span className="section-number">03.</span> {t.title}</h2>
            <h2 className="contact-title">{t.subtitle}</h2>
            <p className="contact-description">
                {t.description}
            </p>
            <a href="mailto:example@email.com" className="email-link">{t.btn}</a>
        </section>
    );
};

export default Contact;
