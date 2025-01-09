import React from 'react';

const CastMembers = ({ cast }) => {
  return (
    <div className="bg-gray-900/50 rounded-lg border-2 border-red-800 p-6">
      <h2 className="text-2xl font-bold text-red-500 mb-6">Starring</h2>
      <div className="space-y-4">
        {cast.map((member, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-4"
          >
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full border-2 border-red-800 object-cover"
              />
            )}
            <div>
              <h3 className="text-white font-bold">{member.name}</h3>
              <p className="text-red-300 text-sm">{member.role}</p>
              {member.note && (
                <p className="text-red-400 text-xs italic mt-1">*{member.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastMembers;