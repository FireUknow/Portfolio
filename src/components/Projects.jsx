import React, { useState } from 'react';
import { useLanguage } from '../contexts/GlobalContext';
import { content, projectsData } from '../data/content';
import './Projects.css';

const Projects = () => {
    const { language } = useLanguage();
    const t = content[language].projects;
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const currentProjects = projectsData[language];

    const filteredProjects = filter === 'all'
        ? currentProjects
        : currentProjects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title"><span className="section-number">02.</span> {t.title}</h2>

            {/* Filter Tabs */}
            <div className="projects-filter">
                {Object.keys(t.filter).map((key) => (
                    <button
                        key={key}
                        className={`filter-btn ${filter === key ? 'active' : ''}`}
                        onClick={() => setFilter(key)}
                    >
                        {t.filter[key]}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                        <div className="project-content">
                            <div className="project-top">
                                <div className="folder-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links-icon">
                                    {/* External Link Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-description">
                                <p>{project.summary}</p>
                            </div>
                            <ul className="project-tech-list">
                                {project.techStack.slice(0, 3).map((tech, j) => (
                                    <li key={j}>{tech}</li>
                                ))}
                                {project.techStack.length > 3 && <li>+</li>}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>

                        <h3 className="modal-title">{selectedProject.title}</h3>
                        <div className="modal-badges">
                            {selectedProject.techStack.map((tech, i) => (
                                <span key={i} className="modal-badge">{tech}</span>
                            ))}
                        </div>

                        <div className="modal-body">
                            <div className="modal-section">
                                <h4>{t.modal.context}</h4>
                                <p>{selectedProject.context}</p>
                            </div>
                            <div className="modal-section">
                                <h4>{t.modal.features}</h4>
                                <ul>
                                    {selectedProject.keyFeatures.map((feat, i) => (
                                        <li key={i}>{feat}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-section troubleshooting">
                                <h4>{t.modal.troubleshooting}</h4>
                                <p>{selectedProject.troubleshooting}</p>
                            </div>
                        </div>

                        <div className="modal-footer">
                            {selectedProject.links.github && <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="modal-link">GitHub</a>}
                            {selectedProject.links.video && <a href={selectedProject.links.video} target="_blank" rel="noopener noreferrer" className="modal-link">Video</a>}
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default Projects;
