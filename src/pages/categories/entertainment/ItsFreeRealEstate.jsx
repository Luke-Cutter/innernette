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
    <div className="p-6 bg-white min-h-full relative bg-sky-200">
      {/* Jim Boonie Sticker */}
      <div className="absolute right-8 top-24 -rotate-12 z-10">
        <div className="relative group cursor-pointer transform hover:scale-110">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
            <img 
              src="images/pages/categories/entertainment/ItsFreeRealEstate/JimBoonie.PNG" 
              alt="Jim Boonie"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="absolute -bottom-5 left-0 right-0 text-center">
            <div className="bg-white text-blue-600 text-sm font-bold py-1 px-3 rounded-full shadow-md inline-block">
              Jim Boonie
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 bg-white rounded-md p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex justify-center">Exclusive Luxury Property Only For Jim!</h1>
          <p className="text-xl text-gray-600 flex justify-center">A Once-in-a-Lifetime Opportunity for Jim Boonie</p>
        </div>

        {/* Image Carousel Section */}
        <div className="mb-8">
          <ImageCarousel images={images} />
        </div>

        {/* Price Banner */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-8 rounded-r-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-emerald-700">PRICE: IT'S FREE! I'LL PEE MY PANTS!</h2>
            <span className="text-xl font-semibold text-emerald-600">
              <BlinkingText>EXCLUSIVE OFFER!</BlinkingText>
            </span>
          </div>
        </div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Property Details */}
          <div className="col-span-2 space-y-6">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border-l-2 border-blue-500 pl-3">
                  <p className="text-sm text-gray-500">Bedrooms</p>
                  <p className="text-lg font-semibold">2</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-3">
                  <p className="text-sm text-gray-500">Pool</p>
                  <p className="text-lg font-semibold">Yes</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-3">
                  <p className="text-sm text-gray-500">Keys</p>
                  <p className="text-lg font-semibold">Included</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-9">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Features</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Spacious Bedrooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Private Pool</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Keys Included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-500">No Rugs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-500">No Furniture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Free Real Estate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6 -mb-2">
            <BusinessCard
              name="Jim's Free Real Estate"
              title="Exclusive Offer for Jim Boonie"
              phone="1-800-555-0199"
              email="jim@freerealestate.com"
              className="shadow-lg"
            />

            {/* Call to Action */}
            <div className="bg-red-50 p-6 rounded-lg shadow-md border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-2">Special Notice</h3>
              <p className="text-red-700">Jim, this is the opportunity of a lifetime!</p>
              <div className="text-center">
              <span className="font-bold text-sm text-red-600">
                  <BlinkingText>JIM, GET YOUR DAMN LAND!</BlinkingText>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <WarningNotice 
          warnings={[
            "ATTENTION JIM: This is a furniture-free property. Buyer must provide their own furnishings.",
            "This exclusive offer is valid for Jim Boonie only.",
            "Jim, this house is FREE. It's free real estate!"
          ]}
        />

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-xl mt-4 text-center">
          <h2 className="text-3xl font-bold mb-2">
            IT'S FREE REAL ESTATE
          </h2>
          <p className="text-xl opacity-90">Don't miss this exclusive opportunity, Jim!</p>
        </div>
      </div>
    </div>
  );
};

export default ItsFreeRealEstate;