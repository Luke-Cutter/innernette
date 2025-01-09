import React from 'react';

const ProcessSteps = ({ steps }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 inset-y-0 w-0.5 bg-cyan-200" />
      
      {steps.map((step, index) => (
        <div key={index} className="relative pl-12 pb-8 last:pb-0">
          <div className="absolute left-0 w-8 h-8 bg-white border-2 border-cyan-500 rounded-full flex items-center justify-center text-cyan-700 font-mono shadow-md">
            {index + 1}
          </div>
          
          <div className="bg-gradient-to-r from-cyan-50 to-white p-6 rounded-lg shadow-md border-2 border-cyan-200">
            <div className="flex gap-6">
              {step.image && (
                <div className="w-48 h-36 flex-shrink-0">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover rounded border-2 border-cyan-200 p-1 bg-white"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-cyan-900 font-serif mb-2">
                  {step.title}
                </h3>
                <p className="text-cyan-700">{step.description}</p>
                {step.warning && (
                  <p className="text-red-600 text-sm mt-2 font-mono bg-red-50 p-2 rounded border border-red-200">
                    ⚠️ {step.warning}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;