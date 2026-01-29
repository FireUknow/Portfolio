import React from 'react';
import { useLanguage } from '../contexts/GlobalContext';
import { content, skillsData } from '../data/content';
import './About.css';

const About = () => {
    const { language } = useLanguage();
    const t = content[language].about;
    const tSkills = content[language].skills;

    return (
        <section id="about" className="about-section">
            <h2 className="section-title"><span className="section-number">01.</span> {t.title}</h2>
            <div className="about-content">
                <div className="about-text">
                    {t.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                    ))}

                    <div className="skills-container" id="skills">
                        <h3 className="skill-category-title">{tSkills.expert}</h3>
                        <ul className="skills-list expert">
                            {skillsData.expert.map((skill, i) => (
                                <li key={i}>
                                    <i className={skill.icon}></i> {skill.name}
                                </li>
                            ))}
                        </ul>

                        <h3 className="skill-category-title">{tSkills.proficient}</h3>
                        <ul className="skills-list proficient">
                            {skillsData.proficient.map((skill, i) => (
                                <li key={i}>
                                    <i className={skill.icon}></i> {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
