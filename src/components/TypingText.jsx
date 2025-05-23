import React, { useEffect, useState } from 'react';

function TypingText({
  words = [],
  typingSpeed = 120,
  deletingSpeed = 70,
  pauseTime = 1200,
  cursor = '|',
  textColor = '#ffffff',
  className = '',
}) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = !isDeleting && text === currentWord;
    const isWordGone = isDeleting && text === '';

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (isWordComplete) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }

      if (isWordGone) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span
      style={{ color: textColor }}
      className={`inline-block ${className}`}
    >
      {text}
      <span className="animate-pulse">{cursor}</span>
    </span>
  );
}

export default TypingText;
