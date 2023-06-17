'use client';
import React, { useEffect, useRef } from 'react';

interface ProgressComponentProps {
  value: number;
}

const ProgressComponent: React.FC<ProgressComponentProps> = ({ value }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const valRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const $bar = barRef.current;
    const $val = valRef.current;
    const perc = parseInt(value.toString(), 10);

    let currentRotation = 45;
    let animationStep = (perc * 1.8) / 100;
    let currentValue = 0;

    const animateProgress = () => {
      currentValue += animationStep;

      if ($bar) {
        $bar.style.transform = `rotate(${45 + currentValue}deg)`;
        if (currentValue >= perc) {
          $bar.classList.add('completed');
        }
      }

      if ($val) {
        $val.textContent = Math.floor(currentValue) + '%';
      }

      if (currentValue < perc) {
        requestAnimationFrame(animateProgress);
      }
    };

    animateProgress();
  }, [value]);

  return (
    <div className="progress">
      <div className="barOverflow">
        <div ref={barRef} className="bar"></div>
      </div>
      <span className='glow' ref={valRef}></span>
    </div>
  );
};

export default ProgressComponent;
