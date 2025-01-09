import React, { useState, useEffect } from 'react';

const BlinkingText = ({ children, speed = 500 }) => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(v => !v);
    }, speed);
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <span className={visible ? 'opacity-100' : 'opacity-0'}>
      {children}
    </span>
  );
};

export default BlinkingText;