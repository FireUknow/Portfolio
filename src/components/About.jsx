import React from 'react';
import './About.css';

const About = () => {
    const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'HTML & CSS', 'Git', 'TypeScript'];

    return (
        <section id="about" className="about-section">
            <h2 className="section-title"><span className="section-number">01.</span> About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hello! My name is Uknow and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is a lot of fun!
                    </p>
                    <p>
                        Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio.
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <ul className="skills-list">
                        {skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="about-img">
                    <div className="img-wrapper">
                        {/* Replace with actual image later */}
                        <div className="img-placeholder"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
