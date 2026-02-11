import { useRef, useEffect, useState, ReactNode } from 'react';
import './LogoLoop.css';

interface Logo {
  src?: string;
  alt?: string;
  node?: ReactNode;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

export default function LogoLoop({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 60,
  gap = 60,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor,
  ariaLabel = 'Logo carousel',
}: LogoLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>();

  const isVertical = direction === 'up' || direction === 'down';
  const isReverse = direction === 'right' || direction === 'down';

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstList = track.querySelector('.logoloop__list') as HTMLElement;
    if (!firstList) return;

    const totalSize = isVertical ? firstList.offsetHeight : firstList.offsetWidth;
    let position = 0;

    const animate = () => {
      const currentSpeed = isHovered ? hoverSpeed : speed;
      const delta = (currentSpeed / 1000) * (isReverse ? 1 : -1);
      position += delta;

      if (isReverse) {
        if (position >= totalSize) position = 0;
      } else {
        if (position <= -totalSize) position = 0;
      }

      if (isVertical) {
        track.style.transform = `translate3d(0, ${position}px, 0)`;
      } else {
        track.style.transform = `translate3d(${position}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, hoverSpeed, isHovered, direction, isVertical, isReverse]);

  const renderLogo = (logo: Logo, index: number) => {
    const content = logo.node ? (
      <span className="logoloop__node">{logo.node}</span>
    ) : (
      <img src={logo.src} alt={logo.alt || `Logo ${index + 1}`} draggable={false} />
    );

    if (logo.href) {
      return (
        <a
          href={logo.href}
          className="logoloop__link"
          target="_blank"
          rel="noopener noreferrer"
          title={logo.title || logo.alt}
        >
          {content}
        </a>
      );
    }

    return content;
  };

  const logoList = (
    <ul className="logoloop__list" role="list">
      {logos.map((logo, i) => (
        <li key={i} className="logoloop__item">
          {renderLogo(logo, i)}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`logoloop ${isVertical ? 'logoloop--vertical' : ''} ${
        scaleOnHover ? 'logoloop--scale-hover' : ''
      } ${fadeOut ? 'logoloop--fade' : ''}`}
      style={
        {
          '--logoloop-gap': `${gap}px`,
          '--logoloop-logoHeight': `${logoHeight}px`,
          '--logoloop-fadeColor': fadeOutColor,
        } as React.CSSProperties
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={ariaLabel}
    >
      <div ref={trackRef} className="logoloop__track">
        {logoList}
        {logoList}
      </div>
    </div>
  );
}
