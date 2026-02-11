import React, { useEffect, useRef } from 'react';

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: string;
  extraScale?: number;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = '#ffffff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        const angle = (Math.PI * 2 * i) / sparkCount;
        const vx = Math.cos(angle) * sparkRadius;
        const vy = Math.sin(angle) * sparkRadius;

        spark.style.position = 'absolute';
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.width = `${sparkSize}px`;
        spark.style.height = `${sparkSize}px`;
        spark.style.backgroundColor = sparkColor;
        spark.style.borderRadius = '50%';
        spark.style.pointerEvents = 'none';
        spark.style.transition = `all ${duration}ms ${easing}`;
        spark.style.transform = `translate(-50%, -50%) scale(${extraScale})`;

        container.appendChild(spark);

        requestAnimationFrame(() => {
          spark.style.transform = `translate(${vx}px, ${vy}px) scale(0)`;
          spark.style.opacity = '0';
        });

        setTimeout(() => {
          spark.remove();
        }, duration);
      }
    };

    container.addEventListener('click', handleClick);

    return () => {
      container.removeEventListener('click', handleClick);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easing, extraScale]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    />
  );
};

export default ClickSpark;
