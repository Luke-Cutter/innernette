import React from 'react';

const BusinessCard = ({ name, title, phone, email, className = '' }) => {
  return (
    <div className={`border-2 border-gray-300 p-6 bg-gradient-to-br from-white to-gray-100 shadow-lg max-w-sm ${className}`}>
      <h3 className="font-serif text-2xl mb-2">{name}</h3>
      <p className="text-gray-600 italic mb-4">{title}</p>
      <div className="space-y-1 text-sm">
        <p>📞 {phone}</p>
        <p>📧 {email}</p>
      </div>
    </div>
  );
};

export default BusinessCard;