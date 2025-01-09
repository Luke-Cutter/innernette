// src/components/common/GoHomeButton.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoHomeButton = ({ children, className = '' }) => {
    const navigate = useNavigate();
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 5 - 4,
        y: Math.random() * 5 - 4
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <button
      onClick={() => navigate('/home')}
      className={`bg-purple-500 border-black border-2 mb-2 text-white px-2 py-1 rounded-lg transform hover:scale-105 transition-transform ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      {children}
    GO HOME
    </button>
  );
};

export default GoHomeButton;