import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Spotify 데이터 시각화',
            description: '개인 맞춤형 Spotify 데이터를 시각화하는 웹 앱입니다. 자주 듣는 아티스트, 트랙, 오디오 특성 등을 분석하여 직관적인 차트로 제공합니다.',
            tech: ['React', 'Express', 'Spotify API', 'Chart.js'],
            github: '#',
            external: '#'
        },
        {
            title: '실시간 채팅 애플리케이션',
            description: 'React와 Firebase를 활용한 모던 채팅 앱입니다. 실시간 메시지 전송, 이미지 업로드, 소셜 로그인 기능을 지원하며 반응형 디자인을 적용했습니다.',
            tech: ['React', 'Firebase', 'Redux', 'Styled Components'],
            github: '#',
            external: '#'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title"><span className="section-number">02.</span> 프로젝트</h2>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <div key={i} className="project-card">
                        <div className="project-content">
                            <p className="project-overline">주요 프로젝트</p>
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
                                <a href={project.github} aria-label="GitHub Link">
                                    GitHub
                                </a>
                                <a href={project.external} aria-label="External Link">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
