import ImageCarousel from '../shared/ImageCarousel';
import ProcessSteps from '../shared/ProcessSteps';
import ProductFeatures from '../shared/ProductFeatures';
import WarningNotice from '../shared/WarningNotice';
import CustomerReviews from '../shared/CustomerReviews';

const CincoComedyLayout = ({
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-lime-100 via-pink-100 to-purple-200 relative overflow-hidden">
      {/* Weird repeating background pattern */}
      <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-tr from-orange-400 to-red-500 transform rotate-45 opacity-30" />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-bl from-green-400 to-teal-600 opacity-25" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />

      {/* Navigation Bar */}
      <div className="relative border-b-8 border-double border-purple-500 bg-gradient-to-r from-orange-300 via-yellow-200 to-lime-300 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <img
                className="h-20 w-auto drop-shadow-2xl"
                src="images/layouts/CincoProductLayoutImages/cincologo.png"
                alt="CINCO™"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 blur-sm"></div>
              <div className="relative text-xs font-mono text-white bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-4 py-2 rounded-full border-4 border-yellow-300 shadow-lg transform -rotate-2">
                PRODUCT ID: {productName.replace(/[^A-Z0-9]/gi, '').toUpperCase()}
              </div>
            </div>
          </div>
        </div>
        {/* Wavy bottom border */}
        <div className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-200 via-blue-300 via-purple-300 to-pink-300 border-y-8 border-double border-orange-400 mt-8 shadow-2xl">
        {/* Radiating lines pattern */}
        <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #1e3a8a 10px, #1e3a8a 20px), repeating-linear-gradient(-45deg, transparent, transparent 10px, #7c2d12 10px, #7c2d12 20px)`
            }}
        />
        
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Glowing outer container */}
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 blur-xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-lime-100 via-white via-cyan-100 to-pink-100 p-12 rounded-3xl shadow-2xl border-8 border-double border-purple-600 transform hover:scale-105 transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-yellow-400 rounded-3xl opacity-50 transform translate-x-2 translate-y-2"></div>
                <h1 className="relative text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-4 font-serif drop-shadow-lg" style={{ textShadow: '3px 3px 0px rgba(255,255,0,0.3)' }}>
                  {productName}
                </h1>
                {tagline && (
                  <p className="relative text-2xl text-blue-800 font-light italic border-t-4 border-b-4 border-dotted border-pink-400 py-3 mt-4">
                    {tagline}
                  </p>
                )}
                {/* Corner decorations */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full border-4 border-purple-600"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full border-4 border-cyan-600"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-lime-400 rounded-full border-4 border-orange-600"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full border-4 border-pink-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 space-y-20 pb-32">
        {/* Product Images */}
        {productImages && productImages.length > 0 && (
          <div className="relative transform hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-lg opacity-50"></div>
            <div className="relative bg-gradient-to-br from-yellow-100 via-white to-cyan-100 rounded-3xl shadow-2xl border-8 border-double border-lime-500 overflow-hidden">
              <div className="border-8 border-orange-400 border-dotted">
                <ImageCarousel images={productImages} />
              </div>
            </div>
            {/* Floating corner accent */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce border-4 border-purple-600"></div>
          </div>
        )}

        {/* Process Steps */}
        {processSteps && processSteps.length > 0 && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-300 blur-lg opacity-40"></div>
            <div className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-10 shadow-2xl border-8 border-dashed border-cyan-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white px-8 py-3 rounded-full border-4 border-yellow-300 shadow-xl text-sm font-bold tracking-wider">
                  ⚡ PROCESS REVEALED ⚡
                </div>
              </div>
              <h2 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-10 text-center mt-6" style={{ textShadow: '2px 2px 0px rgba(255,200,0,0.3)' }}>
                How It Works
              </h2>
              <div className="border-4 border-lime-400 rounded-2xl p-6 bg-white/50">
                <ProcessSteps steps={processSteps} />
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 blur-lg opacity-40"></div>
            <div className="relative bg-gradient-to-br from-lime-100 via-yellow-100 to-orange-100 rounded-3xl p-10 shadow-2xl border-8 border-double border-pink-500 overflow-hidden">
              {/* Checkerboard pattern overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `repeating-conic-gradient(#000 0% 25%, transparent 0% 50%) 50% / 20px 20px`
              }}></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-20"></div>
              <h2 className="relative text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mb-10 text-center" style={{ textShadow: '2px 2px 0px rgba(100,200,255,0.3)' }}>
                Key Features
              </h2>
              <div className="relative border-4 border-purple-400 rounded-2xl p-6 bg-gradient-to-br from-white/70 to-cyan-50/70">
                <ProductFeatures features={features} />
              </div>
            </div>
          </div>
        )}

        {/* Reviews */}
        {customerReviews && customerReviews.length > 0 && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 blur-lg opacity-40"></div>
            <div className="relative bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 rounded-3xl p-10 shadow-2xl border-8 border-dotted border-orange-500">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-lime-400 via-green-500 to-teal-600 text-white px-8 py-3 rounded-full border-4 border-pink-300 shadow-xl text-sm font-bold tracking-wider transform -rotate-3">
                  ★★★ TESTIMONIALS ★★★
                </div>
              </div>
              <h2 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 mb-10 text-center mt-6" style={{ textShadow: '2px 2px 0px rgba(255,150,200,0.3)' }}>
                Customer Reviews
              </h2>
              <div className="border-4 border-yellow-400 rounded-2xl p-6 bg-white/60">
                <CustomerReviews reviews={customerReviews} />
              </div>
            </div>
          </div>
        )}

        {/* Custom Content */}
        {children && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-yellow-300 blur-lg opacity-40"></div>
            <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-3xl p-10 shadow-2xl border-8 border-double border-cyan-500">
              {children}
            </div>
          </div>
        )}

        {/* Warnings */}
        {warnings && warnings.length > 0 && (
          <div className="relative mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-orange-200 blur-xl opacity-50 animate-pulse"></div>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <WarningNotice warnings={warnings} />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t-8 border-double border-purple-500 bg-gradient-to-br from-yellow-200 via-orange-200 via-pink-200 to-purple-200 mt-20 shadow-2xl relative overflow-hidden">
        {/* Footer pattern */}
        <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333ea' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-400 blur-md opacity-50"></div>
              <div className="relative text-sm text-purple-900 font-mono bg-gradient-to-r from-yellow-200 to-lime-200 px-4 py-2 rounded-full border-4 border-pink-400 shadow-lg font-bold">
                © 2008 CINCO™ Corporation
              </div>
            </div>
            <div className="transform hover:rotate-12 transition-transform duration-300">
              <img
                className="h-20 w-auto drop-shadow-2xl"
                src="images/layouts/CincoProductLayoutImages/cincologo.png"
                alt="CINCO™"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 text-purple-900 px-6 py-2 rounded-full border-4 border-dashed border-orange-400 text-xs font-bold tracking-widest shadow-lg">
              A SUBSIDIARY OF CINCO™ BROTHERS WORLDWIDE INC. LTD. ESQ. B.M.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CincoComedyLayout;