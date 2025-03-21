import React from 'react';
import ImageCarousel from '../shared/ImageCarousel';
import ProcessSteps from '../shared/ProcessSteps';
import ProductFeatures from '../shared/ProductFeatures';
import WarningNotice from '../shared/WarningNotice';
import CustomerReviews from '../shared/CustomerReviews';

const CincoFoodLayout = ({
  productName,
  tagline,
  productImages,
  processSteps,
  features,
  customerReviews,
  warnings,
  children,
  nutritionFacts
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-100 via-lime-50 to-green-100 border-b-4 border-green-600">
        {/* Organic pattern background */}
        <div className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M30 30c2.5-7.5 7.5-12.5 15-15-7.5 2.5-12.5 7.5-15 15z' stroke='%2316A34A' stroke-width='1' opacity='0.2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
        />

        {/* Navigation Bar */}
        <div className="relative border-b-2 border-green-600 bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <img
                className="h-12 w-auto"
                src="images/layouts/CincoProductLayoutImages/cincologo.png"
                alt="CINCO™ FOODS"
              />
              <div className="text-sm font-mono text-green-800 bg-green-100 px-3 py-1 rounded border border-green-300">
                CINCO™ FOOD ID: {productName.replace(/[^A-Z0-9]/gi, '').toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-white p-8 rounded-lg shadow-lg border-2 border-green-600">
              <h1 className="text-5xl font-bold text-green-800 mb-4 font-serif">
                {productName}
              </h1>
              {tagline && (
                <p className="text-xl text-green-700 font-light">
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
          <div className="bg-white rounded-lg shadow-lg border-2 border-green-600 overflow-hidden">
            <ImageCarousel images={productImages} />
          </div>
        )}

        {/* Process Steps */}
        {processSteps && processSteps.length > 0 && (
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-green-600">
            <h2 className="text-3xl font-serif font-bold text-green-800 mb-8 text-center">
              Preparation Instructions
            </h2>
            <ProcessSteps steps={processSteps} />
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-green-600">
            <h2 className="text-3xl font-serif font-bold text-green-800 mb-8 text-center">
              Health Benefits
            </h2>
            <ProductFeatures features={features} />
          </div>
        )}

        {/* Custom Content (Nutrition Facts) */}
        {nutritionFacts && (
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-green-600">
            <h2 className="text-3xl font-serif font-bold text-green-800 mb-8 text-center">
              Nutrition Facts
            </h2>
            <div className="max-w-md mx-auto font-mono border-2 border-green-800 p-4">
              {nutritionFacts}
            </div>
          </div>
        )}

        {/* Reviews */}
        {customerReviews && customerReviews.length > 0 && (
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-green-600">
            <h2 className="text-3xl font-serif font-bold text-green-800 mb-8 text-center">
              Satisfied Customers
            </h2>
            <CustomerReviews reviews={customerReviews} />
          </div>
        )}

        {/* Custom Content */}
        {children && (
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-green-600">
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
      <footer className="border-t-4 border-green-600 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-green-800 font-mono">
              © 2008 CINCO™ FOODS
            </div>
            <img
              className="h-16 w-auto opacity-75"
              src="images/layouts/CincoProductLayoutImages/cincologo.png"
              alt="CINCO™ FOODS"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CincoFoodLayout;