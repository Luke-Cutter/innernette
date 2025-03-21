import React, { useState, useEffect, useCallback } from 'react';
import { AlertTriangle, AlertOctagon, Info, Zap, Computer, ThermometerSun } from 'lucide-react';

const useSound = (type) => {
  const playSound = useCallback(() => {
    const audio = new Audio(`/music/RandomPopupSystem/${type}.mp3`);
    audio.play().catch(err => console.log('Audio playback error:', err));
  }, [type]);

  return playSound;
};

const POPUP_MESSAGES = [
  {
    title: "Temperature Warning",
    message: "Your Innernette™ temperature is not exactly 75°F. This could lead to decreased content accessibility and mild euphoria.",
    icon: <ThermometerSun className="text-red-500" size={24} />,
    type: "error"
  },
  {
    title: "Memory Management",
    message: "Your computer's memory has been infected with real internet. Would you like CINCO™ to remove all memories of the real internet?",
    icon: <Computer className="text-blue-500" size={24} />,
    type: "warning"
  },
  {
    title: "System Update Required",
    message: "A new Innernette™ CD-ROM has been detected in your area. Please insert Minidisc 2-31 to continue browsing.",
    icon: <Info className="text-blue-500" size={24} />,
    type: "info"
  },
  {
    title: "Cigarette Juice Alert",
    message: "WARNING: Cigarette juice levels are running low. Please reapply juice to your CD-ROM drive for optimal performance.",
    icon: <AlertOctagon className="text-yellow-500" size={24} />,
    type: "warning"
  },
  {
    title: "B'Owl Detection Failed",
    message: "No B'Owl detected in system trunk. Would you like to order a new B'Owl for just 6 easy payments?",
    icon: <AlertTriangle className="text-orange-500" size={24} />,
    type: "warning"
  },
  {
    title: "CINCO™ Error D-PANTS",
    message: "Your D-Pants™ trial period has expired. Please remove D-Pants™ immediately.",
    icon: <AlertOctagon className="text-red-500" size={24} />,
    type: "error"
  },
  {
    title: "Connection Detected",
    message: "ALERT: Real internet connection detected. Please disconnect immediately to maintain your Innernette™ experience.",
    icon: <Zap className="text-red-500" size={24} />,
    type: "error"
  },
  {
    title: "System Performance",
    message: "Your Innernette™ browsing could be up to 0.0001% faster! Would you like to defragment your CD-ROM?",
    icon: <Info className="text-blue-500" size={24} />,
    type: "info"
  },
  {
    title: "T-38 SCSI Port Error",
    message: "Unable to locate Tulley Toggle. Please confirm your MIDI Organizer is properly connected.",
    icon: <AlertTriangle className="text-yellow-500" size={24} />,
    type: "warning"
  },
  {
    title: "Great Job!",
    message: "Congratulations! You've been browsing the Innernette™ for 5 minutes without any real internet! Keep it up!",
    icon: <Info className="text-green-500" size={24} />,
    type: "success"
  }
];

const PopupMessage = ({ message, onClose }) => {
  const getSoundType = () => {
    switch (message.type) {
      case 'error':
      case 'warning':
        return 'error';
      case 'success':
        return 'success';
      case 'info':
      default:
        return 'info';
    }
  };

  const playSound = useSound(getSoundType());

  useEffect(() => {
    playSound();
  }, [playSound]);
  const getBackgroundColor = () => {
    switch (message.type) {
      case 'error': return 'from-red-50 to-red-100';
      case 'warning': return 'from-yellow-50 to-yellow-100';
      case 'info': return 'from-blue-50 to-blue-100';
      case 'success': return 'from-green-50 to-green-100';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const getTitleBarColor = () => {
    switch (message.type) {
      case 'error': return 'from-red-600 to-red-700';
      case 'warning': return 'from-yellow-600 to-yellow-700';
      case 'info': return 'from-blue-600 to-blue-700';
      case 'success': return 'from-green-600 to-green-700';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={`w-[400px] bg-gradient-to-b ${getBackgroundColor()} rounded-lg shadow-2xl`}>
        {/* Title Bar */}
        <div className={`bg-gradient-to-r ${getTitleBarColor()} p-2 rounded-t-lg flex items-center justify-between`}>
          <div className="text-white font-semibold flex items-center gap-2">
            {message.icon}
            {message.title}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700">{message.message}</p>
        </div>

        {/* Buttons */}
        <div className="p-4 bg-gradient-to-b from-gray-50 to-gray-100 rounded-b-lg flex justify-end gap-2">
          <button 
            className="px-4 py-2 bg-gradient-to-b from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 
                     border border-gray-300 rounded shadow-sm transition-colors"
            onClick={onClose}
          >
            OK
          </button>
          {message.type === 'warning' && (
            <button 
              className="px-4 py-2 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                       text-white rounded shadow-sm transition-colors"
              onClick={onClose}
            >
              Ignore
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const RandomPopupSystem = () => {
  const [currentPopup, setCurrentPopup] = useState(null);
  const [lastPopupTime, setLastPopupTime] = useState(Date.now());

  const showRandomPopup = () => {
    const randomIndex = Math.floor(Math.random() * POPUP_MESSAGES.length);
    setCurrentPopup(POPUP_MESSAGES[randomIndex]);
    setLastPopupTime(Date.now());
  };

  useEffect(() => {
    const checkAndShowPopup = () => {
      const now = Date.now();
      if (now - lastPopupTime >= 5 * 60 * 1000) { // 5 minutes
        showRandomPopup();
      }
    };

    const interval = setInterval(checkAndShowPopup, 10000); // Check every 10 seconds
    return () => clearInterval(interval);
  }, [lastPopupTime]);

  if (!currentPopup) return null;

  return (
    <PopupMessage 
      message={currentPopup} 
      onClose={() => setCurrentPopup(null)} 
    />
  );
};

export default RandomPopupSystem;