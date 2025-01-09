import React from 'react';

const CustomerReview = ({ review }) => (
  <div className="bg-gradient-to-r from-cyan-50 to-white p-6 rounded-lg shadow-md border-2 border-cyan-200">
    <div className="flex items-start gap-4 h-full">
      {review.image && (
        <img
          src={review.image}
          alt={review.author}
          className="w-16 h-16 rounded-full border-2 border-cyan-300 p-1 bg-white flex-shrink-0"
        />
      )}
      <div className="flex-1 flex flex-col justify-between min-h-[100px]">
        <p className="text-cyan-700 italic mb-4 font-serif">"{review.text}"</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-cyan-900 font-medium">{review.author}</p>
          {review.verified && (
            <span className="text-xs text-cyan-700 font-mono bg-cyan-50 border border-cyan-200 px-2 py-1 rounded">
              ✓ VERIFIED CINCO™ USER
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
);

const CustomerReviews = ({ reviews }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <CustomerReview key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;