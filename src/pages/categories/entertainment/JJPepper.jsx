import React from 'react';
import ImageCarousel from '../../../components/shared/ImageCarousel';
import { Camera, Star, Wand2, Calendar, Phone, Car, Video } from 'lucide-react';
import BookAnAppointment from '../../../components/shared/BookAnAppointment';

const JJPepper = () => {
  const services = [
    "Weddings",
    "Funerals",
    "Graduations",
    "Bra Mitzvahs",
    "Baptisms",
    "Biptisms",
    "Grandfather's Day",
    "Noteworthy Special Events"
  ];

  const effects = [
    "Star Wipes",
    "Digital Kangaroos",
    "Kangaroo Page Wipes",
    "Multiply!",
    "Black and White",
    "Kangaroo Cube",
    "Ugly Friend? Cover With a Tree!",
    "Ear removal"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-green-600 to-purple-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 via-green-700 to-purple-800 shadow-lg border-b border-green-700/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="images/pages/categories/entertainment/JJPepper/JJLogo.png" 
              alt="J.J. Pepper Logo" 
              className="h-24 w-24 object-contain p-1 opacity-90 hover:opacity-100 transition-opacity"
            />
            <h1 className="text-2xl font-bold text-green-200">J.J. Pepper's Videography</h1>
          </div>
          <div className="text-xl font-mono text-green-400 animate-pulse">
            <Phone className="h-6 w-6 inline-block mr-2" />
            1-800-555-0199
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section with Carousel */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-800 via-green-700 to-purple-900 p-6 rounded-xl shadow-xl border border-green-700/30">
            <ImageCarousel
              images={[
                "images/pages/categories/entertainment/JJPepper/JJ3.png",
                "images/pages/categories/entertainment/JJPepper/JJ1.png",
                "images/pages/categories/entertainment/JJPepper/JJ2.png",
                "images/pages/categories/entertainment/JJPepper/JJ4.png"
              ]}
            />
            <div className="text-center mt-4 text-lg text-green-400 italic font-bold">
              "Hi. Do you like my video? I made this!"
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="mb-16 opacity-90 hover:opacity-100 transition-opacity">
          <BookAnAppointment
            productName="J.J. Pepper's Videography Services"
            offerTitle="🎥 Book Your Special Event Today... Please? 🎥"
            offerText="I might even be videotaping you now and you don't even know it! Why not make it official?"
            offerDisclaimer="I can drive myself to and fro your event. I bring my own tuxedo AND video camera!"
            buttonText="Give J.J. a Shot, Please!"
            certificationBody="Uncle Muscles Video Safety Department"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Services List */}
          <div className="bg-gradient-to-br from-gray-800 to-green-900 p-6 rounded-lg shadow-lg border border-green-700/30">
            <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              I Specialize In:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors">
                  <Video className="h-4 w-4 text-green-500" />
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Special Effects */}
          <div className="bg-gradient-to-br from-gray-800 to-purple-900 p-6 rounded-lg shadow-lg border border-purple-700/30">
            <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
              <Wand2 className="h-6 w-6" />
              Thousands of Effects!
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {effects.map((effect, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
                  <Star className="h-4 w-4 text-purple-500" />
                  {effect}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extra Benefits */}
        <div className="bg-gradient-to-r from-gray-800 via-green-900 to-purple-900 p-8 rounded-lg shadow-lg border border-green-700/30 mb-16">
          <h3 className="text-2xl font-bold text-green-200 mb-4 text-center">Extra Benefits!</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center transform hover:scale-105 transition-transform">
              <Car className="h-12 w-12 mx-auto text-green-400 mb-2" />
              <p className="text-gray-300">I can drive myself to and fro your event!</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <Camera className="h-12 w-12 mx-auto text-purple-400 mb-2" />
              <p className="text-gray-300">I even take photographs with cameras!</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <Wand2 className="h-12 w-12 mx-auto text-green-400 mb-2" />
              <p className="text-gray-300">I bring my own tuxedo and video camera!</p>
            </div>
          </div>
        </div>

        {/* Final Plea */}
        <div className="text-center bg-gradient-to-r from-gray-800 via-green-900 to-purple-900 p-8 rounded-lg shadow-lg border border-purple-700/30">
          <h2 className="text-3xl font-bold text-green-200 mb-4">Why don't you use me for your next event?</h2>
          <p className="text-xl text-gray-300 mb-4">We would do this together.</p>
          <p className="text-green-400 italic">I'm almost always videotaping.</p>
          <div className="mt-8 animate-pulse">
            <Phone className="h-16 w-16 mx-auto text-purple-400 mb-4" />
            <p className="text-2xl font-mono text-green-400">1-800-555-0199</p>
          </div>
          <p className="mt-4 text-gray-500">Thanks for caring.</p>
        </div>
      </main>
    </div>
  );
};

export default JJPepper;