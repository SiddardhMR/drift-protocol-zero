
import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchOnHover?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = '', 
  glitchOnHover = false 
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  useEffect(() => {
    if (!glitchOnHover) {
      const interval = setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every interval
          triggerGlitch();
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [glitchOnHover]);

  return (
    <span
      className={`glitch-text ${className} ${isGlitching ? 'animate-glitch' : ''}`}
      data-text={text}
      onMouseEnter={glitchOnHover ? triggerGlitch : undefined}
    >
      {text}
    </span>
  );
};

export default GlitchText;
