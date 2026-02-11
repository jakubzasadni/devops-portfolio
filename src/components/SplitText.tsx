import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: { opacity?: number; y?: number; x?: number };
  to?: { opacity?: number; y?: number; x?: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
  showCallback?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
  showCallback = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const elements = container.querySelectorAll('.split-char');
            
            gsap.fromTo(
              elements,
              from,
              {
                ...to,
                duration,
                ease,
                stagger: delay / 1000,
                onComplete: () => {
                  if (onLetterAnimationComplete) {
                    onLetterAnimationComplete();
                  }
                  if (showCallback) {
                    console.log('Animation complete!');
                  }
                },
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [text, delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete, showCallback]);

  const splitText = () => {
    if (splitType === 'chars') {
      return text.split('').map((char, index) => (
        <span key={index} className="split-char inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
          {char}
        </span>
      ));
    }
    return text;
  };

  return (
    <div ref={containerRef} className={className} style={{ textAlign }}>
      {splitText()}
    </div>
  );
};

export default SplitText;
