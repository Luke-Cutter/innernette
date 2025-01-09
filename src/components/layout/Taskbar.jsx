// src/components/layout/Taskbar.jsx
import React, { useState, useEffect } from 'react';
import { Computer, Mail, ShoppingCart, Music, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Taskbar = () => {
  const navigate = useNavigate();
  const [datetime, setDatetime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDatetime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-700 flex items-center px-2 gap-1 border-t-2 border-blue-400 shadow-inner">
      {/* Start Button */}
      <button 
        onClick={() => navigate('/home')} 
        className="h-12 bg-gradient-to-b from-green-500 via-green-600 to-green-700 text-white px-4 md:px-6 rounded-lg flex items-center border border-green-800 hover:from-green-600 hover:to-green-800 shrink-0"
      >
        <Computer className="w-6 h-6 mr-2 drop-shadow-md" />
        <span className="font-bold text-lg drop-shadow-md hidden sm:inline">Start</span>
      </button>

      {/* Quick Launch Area */}
      <div className="h-10 w-px bg-blue-800 shadow mx-1 shrink-0" />
      
      <div className="flex gap-1 shrink-0">
        <button 
          onClick={() => navigate('/NetteChat')} 
          className="w-12 h-12 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-lg flex items-center justify-center border border-blue-400 hover:bg-blue-600"
        >
          <Mail className="w-7 h-7 text-white drop-shadow-md" />
        </button>
        <button
        onClick={() => navigate('/InnernetteShopping')}
        className="w-12 h-12 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-lg flex items-center justify-center border border-blue-400 hover:bg-blue-600">
          <ShoppingCart className="w-7 h-7 text-white drop-shadow-md" />
        </button>
        <button 
        onClick={() => navigate('/NetteTunes')} 
        className="w-12 h-12 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-lg flex items-center justify-center border border-blue-400 hover:bg-blue-600">
          <Music className="w-7 h-7 text-white drop-shadow-md" />
        </button>
        <button 
        onClick={() => navigate('/InnernetteSettings')}
        className="w-12 h-12 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-lg flex items-center justify-center border border-blue-400 hover:bg-blue-600">
          <Settings className="w-7 h-7 text-white drop-shadow-md" />
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Clock Area */}
      <div className="flex items-center bg-gradient-to-b from-blue-800 to-blue-900 px-3 py-2 rounded-lg border border-blue-500 shrink-0">
        <div className="text-white font-semibold drop-shadow-md flex flex-col sm:flex-row sm:gap-4 text-right">
          <span className="text-sm sm:text-base">{datetime.toLocaleDateString()}</span>
          <span className="text-sm sm:text-base">{datetime.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
          })}</span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;