import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 100, delay = 1000) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            } else if (isDeleting && index > 0) {
                setDisplayText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, index, isDeleting, speed]);

    return displayText;
};
