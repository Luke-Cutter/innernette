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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, .15) 25%, rgba(59, 130, 246, .15) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .15) 75%, rgba(59, 130, 246, .15) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, .15) 25%, rgba(59, 130, 246, .15) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .15) 75%, rgba(59, 130, 246, .15) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '80px 80px'
          }}
      />

      {/* Subtle scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 0, 0, .05) 3px, rgba(0, 0, 0, .05) 6px)`
          }}
      />

      {/* Navigation Bar */}
      <div className="relative border-b-8 border-double border-blue-600 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 shadow-xl">
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img
                className="h-20 w-auto drop-shadow-lg"
                src="images/layouts/CincoProductLayoutImages/cincologo.png"
                alt="CINCO™"
              />
            </div>
            <div className="relative bg-white/90 px-6 py-3 border-4 border-blue-800 shadow-lg">
              <div className="text-xs font-mono text-blue-900 font-bold tracking-wider">
                PRODUCT ID: {productName.replace(/[^A-Z0-9]/gi, '').toUpperCase()}
              </div>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-300 to-blue-400"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b-8 border-double border-blue-400 mt-8 bg-gradient-to-br from-blue-200 via-cyan-100 to-blue-100 shadow-xl">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(59, 130, 246, 0.4) 60px, rgba(59, 130, 246, 0.4) 62px),
                repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(59, 130, 246, 0.4) 60px, rgba(59, 130, 246, 0.4) 62px)
              `
            }}
        />
        
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block relative">
              <div className="absolute -inset-8 border-8 border-double border-blue-400 opacity-40"></div>
              <div className="absolute -inset-4 border-4 border-cyan-300"></div>
              <div className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-16 border-8 border-double border-blue-600 shadow-2xl">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-cyan-400"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-8 border-l-8 border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-cyan-400"></div>
                
                <h1 className="relative text-7xl font-bold text-blue-900 mb-6 font-serif tracking-wide" style={{ 
                  textShadow: '4px 4px 0px rgba(6, 182, 212, 0.3)'
                }}>
                  {productName}
                </h1>
                {tagline && (
                  <div className="relative mt-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                    <p className="relative text-2xl text-blue-700 font-light tracking-wide border-t-4 border-b-4 border-double border-cyan-400 py-4">
                      {tagline}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10 space-y-20 pb-32">
        {/* Product Images */}
        {productImages && productImages.length > 0 && (
          <div className="relative">
            <div className="absolute -inset-4 border-4 border-cyan-300"></div>
            <div className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 border-8 border-double border-blue-600 shadow-2xl overflow-hidden">
              <div className="border-8 border-cyan-400 m-2">
                <ImageCarousel images={productImages} />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 border-4 border-cyan-400 flex items-center justify-center text-white font-bold text-xs transform rotate-45">
              NEW
            </div>
          </div>
        )}

        {/* Process Steps */}
        {processSteps && processSteps.length > 0 && (
          <div className="relative">
            <div className="absolute -inset-3 border-4 border-dashed border-blue-300"></div>
            <div className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-12 border-8 border-double border-blue-600 shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-3 border-4 border-white shadow-xl text-sm font-bold tracking-widest">
                  ⚡ HOW TO USE ⚡
                </div>
              </div>
              <h2 className="text-5xl font-serif font-bold text-blue-900 mb-12 text-center mt-4 tracking-wide" style={{ 
                textShadow: '3px 3px 0px rgba(6, 182, 212, 0.2)'
              }}>
                How It Works
              </h2>
              <div className="border-4 border-blue-400 p-8 bg-white/70">
                <ProcessSteps steps={processSteps} />
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="relative">
            <div className="absolute -inset-3 border-4 border-dotted border-cyan-300"></div>
            <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-white p-12 border-8 border-double border-cyan-600 shadow-2xl">
              {/* Subtle grid overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(59, 130, 246, 1) 2px, transparent 2px),
                  linear-gradient(0deg, rgba(59, 130, 246, 1) 2px, transparent 2px)
                `,
                backgroundSize: '40px 40px'
              }}></div>
              <h2 className="relative text-5xl font-serif font-bold text-cyan-900 mb-12 text-center tracking-wide" style={{ 
                textShadow: '3px 3px 0px rgba(59, 130, 246, 0.2)'
              }}>
                Key Features
              </h2>
              <div className="relative border-4 border-cyan-400 p-8 bg-white/70">
                <ProductFeatures features={features} />
              </div>
            </div>
          </div>
        )}

        {/* Reviews */}
        {customerReviews && customerReviews.length > 0 && (
          <div className="relative">
            <div className="absolute -inset-3 border-4 border-double border-blue-400"></div>
            <div className="relative bg-gradient-to-br from-white via-cyan-50 to-blue-50 p-12 border-8 border-double border-blue-600 shadow-2xl">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-3 border-4 border-white shadow-xl text-sm font-bold tracking-widest">
                  ★★★ TESTIMONIALS ★★★
                </div>
              </div>
              <h2 className="text-5xl font-serif font-bold text-blue-900 mb-12 text-center mt-4 tracking-wide" style={{ 
                textShadow: '3px 3px 0px rgba(6, 182, 212, 0.2)'
              }}>
                Customer Reviews
              </h2>
              <div className="border-4 border-blue-400 p-8 bg-white/70">
                <CustomerReviews reviews={customerReviews} />
              </div>
            </div>
          </div>
        )}

        {/* Custom Content */}
        {children && (
          <div className="relative">
            <div className="absolute -inset-3 border-4 border-dashed border-cyan-300"></div>
            <div className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-12 border-8 border-double border-blue-600 shadow-2xl">
              {children}
            </div>
          </div>
        )}

        {/* Warnings */}
        {warnings && warnings.length > 0 && (
          <div className="relative mt-24">
            <div className="relative">
              <WarningNotice warnings={warnings} />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t-8 border-double border-blue-600 bg-gradient-to-b from-blue-500 via-blue-600 to-cyan-600 mt-24 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255, 255, 255, 1) 2px, transparent 2px),
                linear-gradient(0deg, rgba(255, 255, 255, 1) 2px, transparent 2px)
              `,
              backgroundSize: '50px 50px'
            }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex justify-between items-center">
            <div className="relative bg-white/90 px-8 py-4 border-4 border-blue-900 shadow-lg">
              <div className="text-sm text-blue-900 font-mono font-bold tracking-wider">
                © 2008 CINCO™ CORPORATION
              </div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img
                className="h-24 w-auto drop-shadow-lg"
                src="images/layouts/CincoProductLayoutImages/cincologo.png"
                alt="CINCO™"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block bg-white/90 text-blue-900 px-10 py-3 border-4 border-blue-900 text-xs font-bold tracking-widest shadow-lg">
              BROUGHT TO YOU OFFLINE ONLINE BY THE CINCO™ PRESERVATION SOCIETY
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-300 to-blue-400"></div>
      </footer>
    </div>
  );
};

export default CincoProductLayout;