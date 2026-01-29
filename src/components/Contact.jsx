import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title text-center"><span className="section-number">03.</span> 연락하기</h2>
            <h2 className="contact-title">함께 이야기해요</h2>
            <p className="contact-description">
                현재 새로운 기회를 열린 마음으로 찾고 있습니다.
                궁금한 점이 있거나 인사를 건네고 싶으시다면 언제든 메일 보내주세요.
                빠르게 답변 드리겠습니다!
            </p>
            <a href="mailto:example@email.com" className="email-link">메일 보내기</a>
        </section>
    );
};

export default Contact;
