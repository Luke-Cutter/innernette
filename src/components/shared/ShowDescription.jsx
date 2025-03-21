import React from 'react';

const ShowDescription = ({ description }) => {
  return (
    <div className="bg-gray-900/50 rounded-lg border-2 border-red-800 p-6">
      <h2 className="text-2xl font-bold text-red-500 mb-4">About The Show</h2>
      <p className="text-red-100 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ShowDescription;