import React from 'react';

const GlitchText = ({ text, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute top-0 left-0 text-red-500 animate-glitch-1">
        {text}
      </span>
      <span className="absolute top-0 left-0 text-blue-500 animate-glitch-2">
        {text}
      </span>
      <span>{text}</span>
    </div>
  );
};

export default GlitchText;