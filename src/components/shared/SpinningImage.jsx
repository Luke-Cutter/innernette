import React from 'react';

const SpinningImage = ({ src, alt, size = 'md' }) => {
  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  return (
    <div className={`${sizes[size]} animate-spin-slow`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default SpinningImage;