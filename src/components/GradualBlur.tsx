import React from 'react';

interface GradualBlurProps {
  target?: 'parent' | 'self';
  position?: 'top' | 'bottom' | 'left' | 'right';
  height?: string;
  strength?: number;
  divCount?: number;
  curve?: 'linear' | 'bezier';
  exponential?: boolean;
  opacity?: number;
}

const GradualBlur: React.FC<GradualBlurProps> = ({
  position = 'bottom',
  height = '7rem',
  strength = 2,
  divCount = 5,
  exponential = false,
  opacity = 1,
}) => {
  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return { top: 0, left: 0, right: 0, height };
      case 'bottom':
        return { bottom: 0, left: 0, right: 0, height };
      case 'left':
        return { top: 0, left: 0, bottom: 0, width: height };
      case 'right':
        return { top: 0, right: 0, bottom: 0, width: height };
      default:
        return {};
    }
  };

  const getBlurValue = (index: number) => {
    if (exponential) {
      return Math.pow(index / divCount, 2) * strength;
    }
    return (index / divCount) * strength;
  };

  const getOpacityValue = (index: number) => {
    return (index / divCount) * opacity;
  };

  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        ...getPositionStyles(),
      }}
    >
      {Array.from({ length: divCount }).map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            backdropFilter: `blur(${getBlurValue(index)}px)`,
            WebkitBackdropFilter: `blur(${getBlurValue(index)}px)`,
            opacity: getOpacityValue(index),
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1))',
          }}
        />
      ))}
    </div>
  );
};

export default GradualBlur;
