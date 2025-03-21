import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative p-6 ">
      <div className="flex justify-center">
        <div className="relative w-full max-w-3xl h-96">
          <img 
            src={images[currentIndex]} 
            alt={`Product view ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded border-2 border-cyan-200 p-2 bg-white"
          />
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white px-4 py-2 rounded-full border border-cyan-200">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex 
                ? 'bg-cyan-600 ring-2 ring-cyan-200' 
                : 'bg-cyan-200 hover:bg-cyan-300'
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-cyan-200 text-cyan-700 w-10 h-10 rounded-full hover:bg-cyan-50 flex items-center justify-center shadow-lg"
      >
        ←
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-cyan-200 text-cyan-700 w-10 h-10 rounded-full hover:bg-cyan-50 flex items-center justify-center shadow-lg"
      >
        →
      </button>
    </div>
  );
};

export default ImageCarousel;