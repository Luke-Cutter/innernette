import React from 'react';
import ImageCarousel from '../shared/ImageCarousel';
import ProcessSteps from '../shared/ProcessSteps';
import ProductFeatures from '../shared/ProductFeatures';
import WarningNotice from '../shared/WarningNotice';
import CustomerReviews from '../shared/CustomerReviews';

const CincoProductLayout = ({
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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 border-b-4 border-cyan-200">
        <div className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230891b2' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }}
        />

        {/* Navigation Bar */}
        <div className="relative border-b-2 border-cyan-200 bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2">
              <img
                className="h-16 w-auto"
                src="images/layouts/CincoProductLayoutImages/cincologo.png"
                alt="CINCO™"
              />
              <div className="text-sm font-mono text-cyan-700 bg-cyan-50 px-3 py-1 rounded border border-cyan-200">
                Product ID: {productName.replace(/[^A-Z0-9]/gi, '').toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative pt-12 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-50 via-white to-cyan-50 p-8 rounded-lg shadow-lg border-2 border-cyan-200">
              <h1 className="text-5xl font-bold text-cyan-900 mb-4 font-serif">
                {productName}
              </h1>
              {tagline && (
                <p className="text-xl text-cyan-700 font-light">
                  {tagline}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10 space-y-16 pb-24">
        {/* Product Images */}
        {productImages && productImages.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg border-2 border-cyan-200 overflow-hidden">
            <ImageCarousel images={productImages} />
          </div>
        )}

        {/* Process Steps */}
        {processSteps && processSteps.length > 0 && (
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-cyan-200">
            <h2 className="text-3xl font-serif font-bold text-cyan-900 mb-8 text-center">
              How It Works
            </h2>
            <ProcessSteps steps={processSteps} />
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-cyan-200">
            <h2 className="text-3xl font-serif font-bold text-cyan-900 mb-8 text-center">
              Key Features
            </h2>
            <ProductFeatures features={features} />
          </div>
        )}

        {/* Reviews */}
        {customerReviews && customerReviews.length > 0 && (
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-cyan-200">
            <h2 className="text-3xl font-serif font-bold text-cyan-900 mb-8 text-center">
              Customer Reviews
            </h2>
            <CustomerReviews reviews={customerReviews} />
          </div>
        )}

        {/* Custom Content */}
        {children && (
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-cyan-200">
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
      <footer className="border-t-4 border-cyan-200 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-cyan-700 font-mono">
              © 2008 CINCO™ Corporation
            </div>
            <img
              className="h-16 w-auto"
              src="images/layouts/CincoProductLayoutImages/cincologo.png"
              alt="CINCO™"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CincoProductLayout;