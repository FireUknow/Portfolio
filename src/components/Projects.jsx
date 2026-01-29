import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track.',
            tech: ['React', 'Express', 'Spotify API', 'Styled Components'],
            github: '#',
            external: '#'
        },
        {
            title: 'Project Two',
            description: 'A nice looking chat app built with React and Firebase. Features include real-time messaging, image uploading, and user authentication.',
            tech: ['React', 'Firebase', 'Chat API'],
            github: '#',
            external: '#'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title"><span className="section-number">02.</span> Some Things I've Built</h2>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <div key={i} className="project-card">
                        <div className="project-content">
                            <p className="project-overline">Featured Project</p>
                            <h3 className="project-title"><a href={project.external}>{project.title}</a></h3>
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>
                            <ul className="project-tech-list">
                                {project.tech.map((tech, j) => (
                                    <li key={j}>{tech}</li>
                                ))}
                            </ul>
                            <div className="project-links">
                                <a href={project.github} aria-label="GitHub Link">GitHub</a>
                                <a href={project.external} aria-label="External Link">Visit</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
