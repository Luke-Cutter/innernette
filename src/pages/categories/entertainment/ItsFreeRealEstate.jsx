import React from 'react';
import WarningNotice from '../../../components/shared/WarningNotice';
import BlinkingText from '../../../components/shared/BlinkingText';
import BusinessCard from '../../../components/shared/BusinessCard';
import ImageCarousel from '../../../components/shared/ImageCarousel';

const ItsFreeRealEstate = () => {
  const images = [
    "images/pages/categories/entertainment/ItsFreeRealEstate/freerealestate.PNG",
    "images/pages/categories/entertainment/ItsFreeRealEstate/houseatopland.PNG",
    "images/pages/categories/entertainment/ItsFreeRealEstate/itsfree.PNG",
    "images/pages/categories/entertainment/ItsFreeRealEstate/landplots.PNG",
    "images/pages/categories/entertainment/ItsFreeRealEstate/houses.PNG"
  ];

  return (
    <div className="p-6 min-h-full relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #87CEEB 0%, #98D8C8 25%, #F7DC6F 50%, #E67E22 75%, #E74C3C 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 20s ease infinite'
    }}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-crazy {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        .brick-texture {
          background-image: 
            repeating-linear-gradient(0deg, #8B4513 0px, #8B4513 2px, transparent 2px, transparent 10px),
            repeating-linear-gradient(90deg, #A0522D 0px, #A0522D 2px, transparent 2px, transparent 30px);
        }
        .roof-texture {
          background-image: repeating-linear-gradient(45deg, #8B0000 0px, #8B0000 10px, #A52A2A 10px, #A52A2A 20px);
        }
        .wood-texture {
          background-image: 
            repeating-linear-gradient(90deg, #D2691E 0px, #D2691E 1px, #CD853F 1px, #CD853F 8px),
            repeating-linear-gradient(0deg, rgba(139, 69, 19, 0.3) 0px, transparent 2px);
        }
        .house-border {
          border-radius: 20px 80px 30px 70px / 70px 30px 80px 20px;
        }
        .roof-shape {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .window-shape {
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
        }
        .door-shape {
          border-radius: 10px 10px 0 0;
        }
      `}</style>

      {/* Floating houses in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            🏠
          </div>
        ))}
      </div>

      {/* Jim Boonie Sticker */}
      <div className="absolute right-8 top-32 z-20" style={{animation: 'bounce-crazy 3s ease-in-out infinite'}}>
        <div className="relative group cursor-pointer">
          <div className="w-40 h-40 overflow-hidden border-8 border-yellow-400 shadow-2xl relative z-10 house-border bg-gradient-to-br from-orange-200 to-red-200">
            <div className="absolute inset-0 brick-texture opacity-30"></div>
            <img 
              src="images/pages/categories/entertainment/ItsFreeRealEstate/JimBoonie.PNG" 
              alt="Jim Boonie"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-64 h-12 bg-red-700 roof-shape border-4 border-red-900"></div>
          <div className="absolute -bottom-16 left-0 right-0 text-center">
            <div className="bg-yellow-400 text-red-700 text-lg font-black inline-block border-4 border-red-700 house-border" style={{animation: 'wiggle 2s ease-in-out infinite'}}>
              🏠 JIM BOONIE 🏠
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-8 bg-white p-6 relative overflow-hidden house-border border-8 border-orange-500 shadow-2xl" style={{animation: 'float 4s ease-in-out infinite'}}>
          <div className="absolute top-0 left-0 right-0 h-16 roof-texture opacity-40"></div>
          <div className="absolute inset-0 brick-texture opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-black text-red-700 mb-3 text-center" style={{
              textShadow: '4px 4px 0px rgba(255,165,0,0.5)',
              transform: 'rotate(-1deg)'
            }}>
              🏡 Exclusive Luxury Property Only For Jim! 🏡
            </h1>
            <p className="text-2xl text-orange-600 text-center font-bold">A Once-in-a-Lifetime Opportunity for Jim Boonie</p>
          </div>
        </div>

        {/* Image Carousel Section */}
        <div className="mb-8 p-4 bg-gradient-to-br from-yellow-100 to-orange-100 house-border border-6 border-red-600 shadow-xl relative overflow-hidden" style={{animation: 'wiggle 5s ease-in-out infinite'}}>
          <div className="absolute inset-0 wood-texture opacity-20"></div>
          <div className="relative z-10">
            <ImageCarousel images={images} />
          </div>
        </div>

        {/* Price Banner */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 border-8 border-yellow-400 p-6 mb-8 house-border relative overflow-hidden shadow-2xl" style={{animation: 'float 3s ease-in-out infinite'}}>
          <div className="absolute inset-0 brick-texture opacity-20"></div>
          <div className="flex items-center justify-between relative z-10">
            <h2 className="text-4xl font-black text-white" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.3)'}}>
              💰 PRICE: IT'S FREE! I'LL PEE MY PANTS! 💰
            </h2>
            <span className="text-2xl font-black text-yellow-300 bg-red-600 px-6 py-3 house-border border-4 border-yellow-400">
              <BlinkingText>🏠 EXCLUSIVE OFFER! 🏠</BlinkingText>
            </span>
          </div>
        </div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Property Details */}
          <div className="col-span-2 space-y-6">
            {/* Overview */}
            <div className="bg-white house-border shadow-2xl p-6 border-6 border-blue-500 relative overflow-hidden" style={{animation: 'float 4s ease-in-out infinite'}}>
              <div className="absolute top-0 left-0 w-full h-4 roof-texture"></div>
              <div className="absolute inset-0 brick-texture opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-blue-700 mb-4 flex items-center gap-2">
                  🏠 Property Overview
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-4 house-border border-3 border-blue-400">
                    <p className="text-sm text-blue-600 font-bold">🛏️ Bedrooms</p>
                    <p className="text-2xl font-black text-blue-800">2</p>
                  </div>
                  <div className="bg-blue-50 p-4 house-border border-3 border-blue-400">
                    <p className="text-sm text-blue-600 font-bold">🏊 Pool</p>
                    <p className="text-2xl font-black text-blue-800">Yes</p>
                  </div>
                  <div className="bg-blue-50 p-4 house-border border-3 border-blue-400">
                    <p className="text-sm text-blue-600 font-bold">🔑 Keys</p>
                    <p className="text-2xl font-black text-blue-800">Included</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white house-border shadow-2xl p-6 border-6 border-purple-500 relative overflow-hidden" style={{animation: 'wiggle 6s ease-in-out infinite'}}>
              <div className="absolute inset-0 wood-texture opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-purple-700 mb-4 flex items-center gap-2">
                  ⭐ Property Features
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 bg-green-50 p-3 house-border border-2 border-green-400">
                    <span className="text-2xl">✅</span>
                    <span className="font-bold text-green-700">Spacious Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-green-50 p-3 house-border border-2 border-green-400">
                    <span className="text-2xl">✅</span>
                    <span className="font-bold text-green-700">Private Pool</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-green-50 p-3 house-border border-2 border-green-400">
                    <span className="text-2xl">✅</span>
                    <span className="font-bold text-green-700">Keys Included</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-red-50 p-3 house-border border-2 border-red-400">
                    <span className="text-2xl">❌</span>
                    <span className="font-bold text-red-700">No Rugs</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-red-50 p-3 house-border border-2 border-red-400">
                    <span className="text-2xl">❌</span>
                    <span className="font-bold text-red-700">No Furniture</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-yellow-100 p-3 house-border border-2 border-yellow-500">
                    <span className="text-2xl">🏠</span>
                    <span className="font-black text-orange-700">FREE REAL ESTATE!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            <div className="relative" style={{animation: 'float 3.5s ease-in-out infinite'}}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full h-8 bg-red-600 roof-shape border-4 border-red-800"></div>
              <BusinessCard
                name="Jim's Free Real Estate"
                title="Exclusive Offer for Jim Boonie"
                phone="1-800-555-0199"
                email="jim@freerealestate.com"
                className="shadow-2xl border-6 border-orange-500 house-border"
              />
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-6 house-border shadow-2xl border-6 border-red-500 relative overflow-hidden" style={{animation: 'bounce-crazy 4s ease-in-out infinite'}}>
              <div className="absolute inset-0 brick-texture opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-red-800 mb-3 flex items-center gap-2">
                  🚨 Special Notice 🚨
                </h3>
                <p className="text-red-700 font-bold text-lg mb-3">Jim, this is the opportunity of a lifetime!</p>
                <div className="text-center bg-yellow-300 p-4 house-border border-4 border-red-600">
                  <span className="font-black text-xl text-red-700">
                    <BlinkingText>🏠 JIM, GET YOUR DAMN LAND! 🏠</BlinkingText>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-6 bg-white">
          <WarningNotice 
            warnings={[
              "🏠 ATTENTION JIM: This is a furniture-free property. Buyer must provide their own furnishings.",
              "🔑 This exclusive offer is valid for Jim Boonie only.",
              "💰 Jim, this house is FREE. It's free real estate!"
            ]}
          />
        </div>

        {/* Bottom Banner */}
        <div className="relative overflow-hidden house-border border-8 border-yellow-400 shadow-2xl" style={{animation: 'wiggle 4s ease-in-out infinite'}}>
          <div className="absolute top-0 left-0 right-0 h-20 roof-texture opacity-60"></div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-10 text-center relative z-10">
            <div className="absolute inset-0 brick-texture opacity-20"></div>
            <h2 className="text-5xl font-black mb-3 text-yellow-300 relative z-10" style={{
              textShadow: '5px 5px 0px rgba(0,0,0,0.5)',
              animation: 'wiggle 2s ease-in-out infinite'
            }}>
              🏡 IT'S FREE REAL ESTATE 🏡
            </h2>
            <p className="text-2xl text-white font-bold relative z-10">Don't miss this exclusive opportunity, Jim!</p>
          </div>
          <div className="absolute -bottom-2 left-0 right-0 flex justify-around">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-8 h-12 bg-red-700 door-shape border-2 border-red-900"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItsFreeRealEstate;