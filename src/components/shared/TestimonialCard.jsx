import React from 'react'; 

const TestimonialCard = ({ name, image, quote }) => (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg shadow-lg border border-blue-300">
      <div className="flex items-center mb-4">
        <img src={image || "/api/placeholder/64/64"} alt={name} className="w-16 h-16 rounded-full border-2 border-blue-400" />
        <div className="ml-4">
          <h3 className="font-bold text-blue-900">{name}</h3>
          <p className="text-xs text-blue-700">Satisfied Customer</p>
        </div>
      </div>
      <p className="text-blue-800 italic">{quote}</p>
      <p className="text-right text-sm text-blue-600 mt-2">Thanks CINCO™!</p>
    </div>
  );

  export default TestimonialCard;