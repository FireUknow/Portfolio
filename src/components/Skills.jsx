import React from 'react';
import { useLanguage } from '../contexts/GlobalContext';
import { content, skillsData } from '../data/content';
import './Skills.css';

const Skills = () => {
    const { language } = useLanguage();
    const t = content[language].skills;

    // Render a single layer
    const renderLayer = (layerKey, data) => (
        <div className={`skill-layer layer-${layerKey}`} key={layerKey}>
            <div className="layer-header">
                <h3 className="layer-title">{t.layers[layerKey]}</h3>
                <p className="layer-desc">{data.desc}</p>
            </div>
            <div className="layer-content">
                <ul className="layer-skills">
                    {data.skills.map((skill, index) => (
                        <li key={index} className="skill-item">
                            <i className={`${skill.icon} skill-icon`}></i>
                            <span className="skill-name">{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title"><span className="section-number">01.</span> {t.title}</h2>

            <div className="skills-container">
                {/* Layer 1: S/W (Top) */}
                {renderLayer('sw', skillsData.sw)}

                {/* Layer 2: F/W (Middle) */}
                {renderLayer('fw', skillsData.fw)}

                {/* Layer 3: H/W (Bottom) */}
                {renderLayer('hw', skillsData.hw)}
            </div>
        </section>
    );
};

export default Skills;
