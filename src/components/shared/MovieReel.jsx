import React from 'react';

const MovieReel = () => {
  return (
    <div className="relative h-20 overflow-hidden bg-black border-y-4 border-red-800">
      <div className="absolute inset-0 flex items-center">
        <div className="animate-scroll-left flex">
          {/* Repeat this section to create continuous scroll */}
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex-none flex items-center mx-4">
              <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black" />
              </div>
              <div className="w-20 h-2 bg-red-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieReel;