import React from 'react';

const ProductFeatures = ({ features }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-gradient-to-r from-cyan-50 to-white p-6 rounded-lg shadow-md border-2 border-cyan-200 hover:shadow-lg transition-shadow"
        >
          {feature.icon && (
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 border-2 border-cyan-200">
              {feature.icon}
            </div>
          )}
          <h3 className="text-xl font-bold text-cyan-900 font-serif mb-2">
            {feature.title}
          </h3>
          <p className="text-cyan-700">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductFeatures;