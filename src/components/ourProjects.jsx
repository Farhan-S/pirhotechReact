import React, { useState } from 'react';
import '../css/ourProjects.css';

function OurProjects() {
  const [hoverState, setHoverState] = useState(false);
  const THRESHOLD = 15;

  const handleHover = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    setHoverState({
      transform: `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`,
    });
  };

  const resetStyles = () => {
    setHoverState({ transform: `perspective(0px) rotateX(0deg) rotateY(0deg)` });
  };

  return (
    <div
      className={`card ${hoverState ? 'hovered' : ''}`}
      onMouseMove={handleHover}
      onMouseLeave={resetStyles}
    >
      <div className="content">
        <h2>The Best Beaches</h2>
        <p>Check out these top 10 beaches this summer.</p>
        <button type="button">Explore</button>
      </div>
    </div>
  );
}

export default OurProjects;
