import React from 'react';
import ImageCarousel from '../shared/ImageCarousel';
import ProcessSteps from '../shared/ProcessSteps';
import ProductFeatures from '../shared/ProductFeatures';
import WarningNotice from '../shared/WarningNotice';
import CustomerReviews from '../shared/CustomerReviews';

const CincoToysLayout = ({
  productName,
  tagline,
  productImages,
  processSteps,
  features,
  customerReviews,
  warnings,
  children
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 pb-16 border-b-4 border-yellow-300">
        {/* Playful background pattern */}
        <div className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M30 30l-3-3 3-3 3 3z' stroke='%23FCD34D' stroke-width='2'/%3E%3Ccircle cx='45' cy='45' r='2' fill='%23F472B6'/%3E%3Ccircle cx='15' cy='15' r='2' fill='%2393C5FD'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
        />

        {/* Navigation Bar */}
        <div className="relative border-b-4 border-yellow-300 bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <img
                className="h-16 w-auto animate-bounce"
                src="images/layouts/CincoToysLayout/cincotoys.png"
                alt="CINCO™ TOYS"
              />
              <div className="text-lg font-mono text-pink-600 bg-pink-100 px-4 py-2 rounded-full border-2 border-pink-300 animate-pulse">
                TOY ID: {productName.replace(/[^A-Z0-9]/gi, '').toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative pt-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-white p-8 rounded-2xl shadow-xl border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300">
              <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 mb-6">
                {productName}
              </h1>
              {tagline && (
                <p className="text-2xl text-pink-600 font-bold">
                  {tagline}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 space-y-16 pb-24">
        {/* Product Images */}
        {productImages && productImages.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl border-4 border-yellow-300 overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <ImageCarousel images={productImages} />
          </div>
        )}

        {/* Process Steps */}
        {processSteps && processSteps.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-pink-300">
            <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
              How To Play!
            </h2>
            <ProcessSteps steps={processSteps} />
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-blue-300">
            <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              Cool Features!
            </h2>
            <ProductFeatures features={features} />
          </div>
        )}

        {/* Reviews */}
        {customerReviews && customerReviews.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-yellow-300">
            <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              Kids & Adults Love It!
            </h2>
            <CustomerReviews reviews={customerReviews} />
          </div>
        )}

        {/* Custom Content */}
        {children && (
          <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-pink-300">
            {children}
          </div>
        )}



        {/* Warnings */}
        {warnings && warnings.length > 0 && (
          <div className="mt-16">
            <WarningNotice warnings={warnings} />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t-4 border-yellow-300 bg-gradient-to-b from-yellow-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="text-lg text-pink-600 font-mono">
              © 2008 CINCO™ TOYS
            </div>
            <img
              className="h-12 w-auto animate-bounce"
              src="images/layouts/CincoToysLayout/cincotoys.png"
              alt="CINCO™ TOYS"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CincoToysLayout;