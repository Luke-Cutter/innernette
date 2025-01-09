import React from 'react';
import ImageCarousel from '../shared/ImageCarousel';
import ProcessSteps from '../shared/ProcessSteps';
import ProductFeatures from '../shared/ProductFeatures';
import WarningNotice from '../shared/WarningNotice';
import CustomerReviews from '../shared/CustomerReviews';

const CincoFashionLayout = ({
  productName,
  tagline,
  productImages,
  styleGuide,
  features,
  customerReviews,
  warnings,
  children
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-50 via-white to-violet-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-fuchsia-100 via-pink-50 to-violet-100">
        {/* Fashion pattern background */}
        <div className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M30 30l-6-6 6-6 6 6z' stroke='%23E879F9' stroke-width='1' opacity='0.2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
        />

        {/* Navigation Bar */}
        <div className="relative border-b-[1px] border-fuchsia-200 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="text-2xl font-serif italic text-fuchsia-600">
                CINCO™ FASHION
              </div>
              <div className="text-sm font-mono text-fuchsia-800 bg-fuchsia-50 px-3 py-1 rounded-full border border-fuchsia-200">
                Style ID: {productName.replace(/[^A-Z0-9]/gi, '').toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative pt-16 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block backdrop-blur-sm bg-white/30 p-12 rounded-2xl">
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-violet-600 mb-4 font-serif">
                {productName}
              </h1>
              {tagline && (
                <p className="text-2xl text-fuchsia-700 font-light italic">
                  {tagline}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 mt-8 relative z-10 space-y-16 pb-24">
        {/* Product Images */}
        {productImages && productImages.length > 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-fuchsia-200 overflow-hidden">
            <ImageCarousel images={productImages} />
          </div>
        )}

        {/* Style Guide */}
        {styleGuide && styleGuide.length > 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-fuchsia-200">
            <h2 className="text-3xl font-serif italic font-bold text-fuchsia-800 mb-8 text-center">
              How to Style
            </h2>
            <ProcessSteps steps={styleGuide} />
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-fuchsia-200">
            <h2 className="text-3xl font-serif italic font-bold text-fuchsia-800 mb-8 text-center">
              Design Features
            </h2>
            <ProductFeatures features={features} />
          </div>
        )}

        {/* Reviews */}
        {customerReviews && customerReviews.length > 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-fuchsia-200">
            <h2 className="text-3xl font-serif italic font-bold text-fuchsia-800 mb-8 text-center">
              Fashion Forward Reviews
            </h2>
            <CustomerReviews reviews={customerReviews} />
          </div>
        )}

        {/* Custom Content */}
        {children && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-fuchsia-200">
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
      <footer className="border-t border-fuchsia-200 bg-gradient-to-b from-white to-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-fuchsia-800 font-mono">
              © 2008 CINCO™ FASHION
            </div>
            <div className="text-sm italic text-fuchsia-600">
              Fashionably CINCO™
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CincoFashionLayout;