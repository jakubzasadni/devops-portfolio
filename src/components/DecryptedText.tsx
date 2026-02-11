import React, { useEffect, useState } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'hover' | 'view';
  revealDirection?: 'start' | 'end' | 'center';
  sequential?: boolean;
  useOriginalCharsOnly?: boolean;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  sequential = false,
  useOriginalCharsOnly = false,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const decrypt = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split('')
          .map((_, index) => {
            if (index < iterations) {
              return text[index];
            }
            return useOriginalCharsOnly
              ? text[Math.floor(Math.random() * text.length)]
              : characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iterations += 1 / (sequential ? 3 : 1);

      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view') {
      decrypt();
    }
  }, [animateOn]);

  return (
    <span
      className={parentClassName}
      onMouseEnter={animateOn === 'hover' ? decrypt : undefined}
    >
      <span className={`${className} ${isAnimating ? encryptedClassName : ''}`}>
        {displayText}
      </span>
    </span>
  );
};

export default DecryptedText;
