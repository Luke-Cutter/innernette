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
    <div className="min-h-screen bg-gradient-to-b from-lime-100 via-green-50 via-yellow-50 to-orange-100 relative overflow-hidden">
      {/* Checkered tablecloth pattern */}
      <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `repeating-conic-gradient(#16a34a 0% 25%, transparent 0% 50%) 50% / 40px 40px`
          }}
      />

      {/* Food splatter textures */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-red-300 rounded-full opacity-30 blur-2xl" />
      <div className="absolute top-40 left-20 w-40 h-40 bg-yellow-300 rounded-full opacity-30 blur-2xl" />
      <div className="absolute bottom-40 right-1/4 w-36 h-36 bg-orange-300 rounded-full opacity-30 blur-2xl" />

      {/* Hero Section - Menu Board Style */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-800 via-yellow-900 to-amber-900 border-b-8 border-yellow-600 shadow-2xl">
        {/* Wood grain texture */}
        <div className="absolute inset-0 opacity-40" 
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, rgba(139, 69, 19, 0.3) 0px, rgba(139, 69, 19, 0.3) 2px, transparent 2px, transparent 4px)`
            }}
        />
        
        {/* Vintage menu pattern */}
        <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 18A32 32 0 1 0 50 82 32 32 0 1 0 50 18M50 22A28 28 0 1 1 50 78 28 28 0 1 1 50 22' /%3E%3Cpath d='M45 40h10v20h-10z'/%3E%3Cpath d='M40 45h20v10h-20z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
        />

        {/* Navigation Bar - Chalkboard Style */}
        <div className="relative border-b-4 border-yellow-700 bg-gradient-to-r from-green-900 via-green-800 to-green-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)`
          }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <img
                className="h-16 w-auto drop-shadow-lg"
                src="images/layouts/CincoProductLayoutImages/cincologo.png"
                alt="CINCO™ FOODS"
              />
              <div className="text-sm font-mono text-yellow-300 bg-green-900/80 px-4 py-2 rounded border-4 border-yellow-600 shadow-lg transform rotate-2">
                FOOD ID: {productName.replace(/[^A-Z0-9]/gi, '').toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content - Retro Diner Sign */}
        <div className="relative pt-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Decorative food icons */}
            <div className="absolute top-8 left-1/4 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🍔</div>
            <div className="absolute top-8 right-1/4 text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🍕</div>
            <div className="absolute bottom-8 left-1/3 text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌮</div>
            <div className="absolute bottom-8 right-1/3 text-5xl animate-bounce" style={{ animationDelay: '0.6s' }}>🍟</div>
            
            <div className="inline-block relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 blur-2xl opacity-50 animate-pulse" />
              <div className="absolute -inset-6 border-8 border-double border-yellow-400 transform rotate-3" />
              <div className="absolute -inset-4 border-4 border-red-600 transform -rotate-2" />
              
              <div className="relative bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 p-12 border-8 border-double border-yellow-300 shadow-2xl">
                {/* Corner decorations */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 border-4 border-yellow-300 rounded-full flex items-center justify-center text-2xl">
                  ★
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-600 border-4 border-yellow-300 rounded-full flex items-center justify-center text-2xl">
                  ★
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-600 border-4 border-yellow-300 rounded-full flex items-center justify-center text-2xl">
                  ★
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-600 border-4 border-yellow-300 rounded-full flex items-center justify-center text-2xl">
                  ★
                </div>
                
                <h1 className="text-7xl font-bold text-white mb-6 font-serif transform -rotate-1" style={{
                  textShadow: '4px 4px 0px rgba(0, 0, 0, 0.5), 8px 8px 0px rgba(139, 69, 19, 0.3)',
                  WebkitTextStroke: '2px rgba(255, 165, 0, 0.5)'
                }}>
                  {productName}
                </h1>
                {tagline && (
                  <div className="relative mt-6">
                    <div className="bg-yellow-300 text-red-900 px-8 py-4 border-4 border-red-700 shadow-lg transform rotate-1">
                      <p className="text-2xl font-bold tracking-wide">
                        {tagline}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative bottom border */}
        <div className="h-4 bg-gradient-to-r from-red-600 via-yellow-500 via-orange-500 to-red-600" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 space-y-16 pb-24">
        {/* Product Images - Recipe Card Style */}
        {productImages && productImages.length > 0 && (
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-200 to-red-200 border-4 border-dashed border-orange-400" />
            <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg shadow-2xl border-8 border-double border-orange-600 overflow-hidden">
              <div className="absolute top-4 left-4 tracking-widest bg-red-600 text-yellow-300 px-4 py-2 font-black text-lg border-4 border-yellow-400 transform -rotate-6 z-10">
                FRESH!
              </div>
              <div className="border-8 border-yellow-400 m-2">
                <ImageCarousel images={productImages} />
              </div>
            </div>
            {/* Food stains */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-400 rounded-full opacity-40 blur-xl" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400 rounded-full opacity-40 blur-xl" />
          </div>
        )}

        {/* Process Steps - Recipe Instructions */}
        {processSteps && processSteps.length > 0 && (
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-lime-200 to-green-200 border-4 border-dotted border-green-500 transform rotate-1" />
            <div className="relative bg-gradient-to-br from-lime-50 via-white to-green-50 rounded-lg p-10 shadow-2xl border-8 border-double border-green-600">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-700 text-yellow-300 px-8 py-3 font-black text-xl border-4 border-yellow-400 transform tracking-widest -rotate-2">
                🍴 HOW TO PREPARE 🍴
              </div>
              <h2 className="text-4xl font-serif font-bold text-green-800 mb-10 text-center mt-4">
                Preparation Instructions
              </h2>
              <div className="border-4 border-green-400 rounded-lg p-6 bg-white/70">
                <ProcessSteps steps={processSteps} />
              </div>
            </div>
          </div>
        )}

        {/* Features - Nutritional Benefits */}
        {features && features.length > 0 && (
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-yellow-200 to-orange-200 border-4 border-dashed border-yellow-500 transform -rotate-1" />
            <div className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 rounded-lg p-10 shadow-2xl border-8 border-double border-yellow-600">
              <div className="absolute -top-6 right-12 bg-orange-600 text-white px-8 py-3 font-black text-xl border-4 border-yellow-400 tracking-widest transform rotate-3">
                HEALTHY!
              </div>
              <h2 className="text-4xl font-serif font-bold text-orange-800 mb-10 text-center mt-4">
                Health Benefits
              </h2>
              <div className="border-4 border-orange-400 rounded-lg p-6 bg-white/70">
                <ProductFeatures features={features} />
              </div>
              {/* Decorative veggies */}
              <div className="absolute bottom-4 left-4 text-4xl">🥕</div>
              <div className="absolute bottom-4 right-4 text-4xl">🥦</div>
            </div>
          </div>
        )}

        {/* Custom Content (Nutrition Facts) */}
        {nutritionFacts && (
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-200 to-cyan-200 border-4 border-double border-blue-500" />
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-lg p-10 shadow-2xl border-8 border-double border-blue-600">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-700 text-yellow-300 px-8 py-3 font-black text-xl border-4 border-yellow-400 transform tracking-widest rotate-1">
                📊 NUTRITION FACTS 📊
              </div>
              <h2 className="text-4xl font-serif font-bold text-blue-800 mb-10 text-center mt-4">
                What's Inside?
              </h2>
              <div className="max-w-md mx-auto border-8 border-double border-blue-800 p-6 bg-white/90 shadow-lg">
                {nutritionFacts}
              </div>
            </div>
          </div>
        )}

        {/* Reviews - Diner Style */}
        {customerReviews && customerReviews.length > 0 && (
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-pink-200 to-red-200 border-4 border-dotted border-pink-500 transform rotate-1" />
            <div className="relative bg-gradient-to-br from-pink-50 via-white to-red-50 rounded-lg p-10 shadow-2xl border-8 border-double border-red-600">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-700 text-yellow-300 px-8 py-3 font-black text-xl border-4 border-yellow-400 transform tracking-widest -rotate-2">
                ⭐ CUSTOMERS LOVE IT! ⭐
              </div>
              <h2 className="text-4xl font-serif font-bold text-red-800 mb-10 text-center mt-4">
                Satisfied Customers
              </h2>
              <div className="border-4 border-red-400 rounded-lg p-6 bg-white/70">
                <CustomerReviews reviews={customerReviews} />
              </div>
              {/* Happy food emojis */}
              <div className="absolute top-6 left-6 text-4xl">😋</div>
              <div className="absolute top-6 right-6 text-4xl">🤤</div>
            </div>
          </div>
        )}

        {/* Custom Content */}
        {children && (
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-purple-200 to-indigo-200 border-4 border-dashed border-purple-500" />
            <div className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-lg p-10 shadow-2xl border-8 border-double border-purple-600">
              {children}
            </div>
          </div>
        )}

        {/* Warnings */}
        {warnings && warnings.length > 0 && (
          <div className="relative mt-20">
            <WarningNotice warnings={warnings} />
          </div>
        )}
      </div>

      {/* Footer - Restaurant Menu Style */}
      <footer className="relative border-t-8 border-double border-orange-600 bg-gradient-to-b from-amber-800 via-yellow-900 to-amber-900 mt-20 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-30" 
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, rgba(139, 69, 19, 0.3) 0px, rgba(139, 69, 19, 0.3) 2px, transparent 2px, transparent 4px)`
            }}
        />
        <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex justify-between items-center">
            <div className="text-lg text-yellow-300 font-mono bg-green-900/80 px-6 py-3 border-4 border-yellow-500 shadow-lg font-bold transform -rotate-1">
              © 2008 CINCO™ FOODS
            </div>
            <img
              className="h-20 w-auto drop-shadow-lg opacity-90"
              src="images/layouts/CincoProductLayoutImages/cincologo.png"
              alt="CINCO™ FOODS"
            />
          </div>
          <div className="mt-6 text-center">
            <div className="inline-block font-mono bg-red-600 text-yellow-300 px-8 py-3 font-black text-sm tracking-widest border-4 border-double border-yellow-400 shadow-lg transform rotate-1 tracking-widest">
              A SUBSIDIARY OF CINCO FOOD TUBES INTERNATIONAL
            </div>
          </div>
        </div>
        <div className="h-4 bg-gradient-to-r from-red-600 via-yellow-500 via-orange-500 to-red-600" />
      </footer>
    </div>
  );
};

export default CincoFoodLayout;