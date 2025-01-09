// components/shared/WarningNotice.jsx
import React from 'react';

const WarningNotice = ({ warnings }) => {
  return (
    <div className="bg-red-900/10 border-2 border-red-500/30 rounded-lg p-6">
      <div className="flex items-center justify-center mb-4">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
          !
        </div>
      </div>
      
      <div className="space-y-2">
        {warnings.map((warning, index) => (
          <p key={index} className="text-red-500 text-sm text-center font-mono">
            *{warning}
          </p>
        ))}
      </div>
      
      <div className="mt-4 text-center text-xs text-red-400">
        CINCO™ SAFETY NOTICE REF: {Math.random().toString(36).substr(2, 9).toUpperCase()}
      </div>
    </div>
  );
};

export default WarningNotice;