// src/components/common/CategoryButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryButton = ({ to, color, border, children }) => {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate(to)}
      className={`w-32 h-16 ${color} rounded-lg text-center text-sm border-2 ${border} flex flex-col justify-center`}
    >
      {children}
    </button>
  );
};

export default CategoryButton;