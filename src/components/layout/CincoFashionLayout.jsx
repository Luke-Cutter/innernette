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
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-50 via-white to-violet-50"
    style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(247, 176, 243, 0.97)),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23f8ffa4' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")
        `,
        backgroundBlendMode: 'overlay',
        opacity: 0.8,
        pointerEvents: 'none'
            }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-fuchsia-100 via-pink-50 to-violet-100">
        {/* Fashion pattern background */}
        <div className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
        />

        {/* Navigation Bar */}
        <div className="relative border-b-[1px] bg-fuchsia-400/90 border-fuchsia-200 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="text-2xl italic font-serif font-bold text-white">
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
            <div className="inline-block bg-white p-12 border-2 border-fuchsia-800 rounded-2xl">
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
      <div className="max-w-7xl mx-auto px-8 -mt-10 relative z-10 space-y-16 pb-24">
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