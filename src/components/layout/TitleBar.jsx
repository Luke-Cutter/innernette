// src/components/layout/TitleBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TitleBar = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="h-8 bg-gradient-to-b from-gray-100 to-gray-200 border-b border-gray-300 flex items-center px-2">
      <span className="text-xs">{title}</span>
      <div className="ml-auto flex gap-1">
        <button className="w-6 h-5 bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-300 rounded flex items-center justify-center">
          <span className="text-xs leading-none mb-0.5">−</span>
        </button>
        <button className="w-6 h-5 bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-300 rounded flex items-center justify-center">
          <span className="text-xs leading-none">□</span>
        </button>
        <button 
        onClick={() => navigate('/home')}
        className="w-6 h-5 bg-red-500 border border-red-600 rounded flex items-center justify-center">
          <span className="text-white text-xs leading-none mb-0.5">×</span>
        </button>
      </div>
    </div>
  );
};

export default TitleBar;