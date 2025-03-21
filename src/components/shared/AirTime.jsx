import React from 'react';

const AirTime = ({ day, time, timezone = "EST", note }) => {
  return (
    <div className="bg-gray-900/50 rounded-lg border-2 border-red-800 p-6">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Air Time</h2>
      <div className="space-y-2">
        <div className="text-white text-xl font-bold">
          {day}s at {time} {timezone}
        </div>
        {note && (
          <p className="text-red-400 text-sm italic">
            *{note}
          </p>
        )}
        <div className="text-red-300 text-sm mt-4">
          Check your local listings for Channel 5 availability in your area
        </div>
      </div>
    </div>
  );
};

export default AirTime;