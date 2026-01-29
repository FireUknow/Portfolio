import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import './Hero.css';

const Hero = () => {
    const typedText = useTypewriter('사용자에게 최고의 경험을 선물합니다.', 100);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1 className="hero-shoutout">안녕하세요, 제 이름은</h1>
                <h2 className="hero-title big-ueber">이윤호입니다.</h2>
                <h3 className="hero-subtitle big-ueber">웹을 통해 세상을 연결합니다.</h3>
                <div className="hero-typing-wrapper">
                    <span className="hero-typing">{typedText}</span><span className="cursor">|</span>
                </div>
                <p className="hero-description">
                    저는 사용자 경험(UX)과 접근성을 최우선으로 생각하는 프론트엔드 개발자입니다.
                    현재는 직관적이고 아름다운 웹 애플리케이션을 만드는 데 집중하고 있습니다.
                </p>
                <a href="#projects" className="cta-btn">프로젝트 보러가기</a>
            </div>
        </section>
    );
};

export default Hero;
