import React from 'react';
import './About.css';

const About = () => {
    const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'HTML & CSS', 'Git', 'TypeScript'];

    return (
        <section id="about" className="about-section">
            <h2 className="section-title"><span className="section-number">01.</span> 소개</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        안녕하세요! 저는 인터넷 공간에 무언가를 만들어내는 것을 즐기는 이윤호입니다. 웹 개발에 대한 제 관심은 우연히 텀블러(Tumblr) 테마를 수정해보면서 시작되었습니다. HTML과 CSS를 조금씩 수정하다 보니, 어느새 나만의 공간이 만들어지는 것에 큰 매력을 느끼게 되었습니다.
                    </p>
                    <p>
                        현재 저는 사용자 친화적인 인터페이스와 효율적인 코드 작성에 집중하고 있으며, 끊임없이 새로운 기술을 배우고 적용하는 것을 즐깁니다.
                    </p>
                    <p>최근 제가 다루고 있는 기술들은 다음과 같습니다:</p>
                    <ul className="skills-list">
                        {skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="about-img">
                    <div className="img-wrapper">
                        <div className="img-placeholder"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
