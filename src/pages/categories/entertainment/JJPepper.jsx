import React from 'react';
import ImageCarousel from '../../../components/shared/ImageCarousel';
import { Camera, Star, Wand2, Calendar, Phone, Car, Video, Sparkles, Music, Award } from 'lucide-react';
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

  // Testimonials
  const testimonials = [
    { name: "Ron Hubbard", text: "J.J. made my Grandfather's Day AMAZING! The kangaroo wipes blew my mind!" },
    { name: "Tina", text: "Used J.J. for my Biptism. No regrets! The digital tree covering my ugly cousin was worth every penny." },
    { name: "Uncle Muscles", text: "Certified and approved! J.J. is a videotape master!" }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-800 via-green-600 to-purple-800 overflow-hidden">
      {/* Multiple overlapping background textures - contained within the parent div */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(48, 216, 36, 0.7), rgba(95, 62, 185, 0.7)),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%236101fa' fill-opacity='0.4' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E")
        `,
        backgroundBlendMode: 'overlay',
        opacity: 0.8,
        pointerEvents: 'none'
      }}></div>
      
      {/* Triangles pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2329ac95' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.4,
        pointerEvents: 'none'
      }}></div>

      {/* Main content with relative positioning */}
      <div className="relative">
        {/* Header */}
        <header className="bg-gradient-to-r from-gray-800 via-green-700 to-purple-800 shadow-lg border-b-4 border-double border-green-500 relative overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2329ac95' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.3
          }}></div>
          
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-green-500 to-purple-600 rounded-full blur animate-pulse"></div>
                <img 
                  src="images/pages/categories/entertainment/JJPepper/JJLogo.png" 
                  alt="J.J. Pepper Logo" 
                  className="h-24 w-24 object-contain p-1 relative"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-yellow-200 to-purple-300 rotate-1 transform">J.J. Pepper's Videography</h1>
                <p className="text-green-300 italic text-sm -rotate-1 transform">Videotaping since yesterday!</p>
              </div>
              <div className="absolute right-64">
                  <img src="images/pages/categories/entertainment/JJPepper/welcomekangaroo.gif" alt="Hopping Kangaroo" className="h-28" />
                </div>
            </div>
            <div className="text-xl font-mono text-green-400 animate-pulse border-2 border-green-500 p-2 rounded-lg shadow-lg bg-gray-900/50 rotate-2 transform">
              <Phone className="h-6 w-6 inline-block mr-2" />
              1-800-555-0199
              <div className="text-xs text-purple-300">Call now! Please!</div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8 relative">
          
          {/* Hero Section with Carousel */}
          <div className="mb-16 transform -rotate-1">
            <div className="bg-gradient-to-r from-purple-800 via-green-700 to-purple-900 p-6 rounded-xl shadow-xl border-4 border-double border-green-500/70 relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%235eb75e' fill-opacity='0.4'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.2
              }}></div>
              
              <ImageCarousel
                images={[
                  "images/pages/categories/entertainment/JJPepper/JJ3.png",
                  "images/pages/categories/entertainment/JJPepper/JJ1.png",
                  "images/pages/categories/entertainment/JJPepper/JJ2.png",
                  "images/pages/categories/entertainment/JJPepper/JJ4.png"
                ]}
              />
              <div className="text-center mt-6 text-lg italic font-bold relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-1/2 bg-green-700/30 blur-xl"></div>
                </div>
                <p className="text-green-300 text-xl relative z-10 transform rotate-1">"Hi. Do you like my video? I made this!"</p>
                <div className="text-purple-300 text-sm">(J.J. Pepper, Professional Videographer)</div>
              </div>
            </div>
          </div>

          {/* Blinking new banner */}
          <div className="text-center mb-8">
            <div className="inline-block bg-yellow-500 text-purple-900 font-bold px-6 py-2 rounded-lg animate-pulse transform rotate-3 border-2 border-dashed border-purple-500">
              <Sparkles className="h-5 w-5 inline-block mr-2" />
              NEW! Now offering digital tree friend covers! Your ugly friends will THANK YOU!
              <Sparkles className="h-5 w-5 inline-block ml-2" />
            </div>
          </div>

          {/* Booking Section */}
          <div className="mb-16 transform rotate-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-purple-500 to-green-600 rounded-lg blur"></div>
              <div className="relative">
                <BookAnAppointment
                  productName="J.J. Pepper's Videography Services"
                  offerTitle="🎥 Book Your Special Event Today... Please? 🎥"
                  offerText="I might even be videotaping you now and you don't even know it! Why not make it official?"
                  offerDisclaimer="I can drive myself to and fro your event. I bring my own tuxedo AND video camera!"
                  buttonText="Give J.J. a Shot, Please!"
                  certificationBody="Uncle Muscles Video Safety Department"
                />
              </div>
            </div>
          </div>
          {/* Testimonials */}
          <div className="mb-16 bg-white p-4 rounded-lg border-4 border-double border-green-500/70" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23ff8f41' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                  }}>
            <h3 className="text-2xl font-bold text-center text-purple-1600 bg-clip-text bg-gradient-to-r from-green-300 via-yellow-200 to-purple-300 mb-6">
              <Award className="h-6 w-6 inline-block mr-2 text-yellow-400" />
              What People Are Saying About J.J. Pepper!
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/80 to-purple-900/80 p-4 rounded-lg shadow-lg border-2 border-green-500/50 transform hover:scale-105 transition-transform relative overflow-hidden" style={{ transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='84' viewBox='0 0 84 84' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23834fd7' fill-opacity='0.2'%3E%3Cpath d='M84 23c-4.417 0-8-3.584-8-7.998V8h-7.002C64.58 8 61 4.42 61 0H23c0 4.417-3.584 8-7.998 8H8v7.002C8 19.42 4.42 23 0 23v38c4.417 0 8 3.584 8 7.998V76h7.002C19.42 76 23 79.58 23 84h38c0-4.417 3.584-8 7.998-8H76v-7.002C76 64.58 79.58 61 84 61V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.3
                  }}></div>
                  <div className="relative z-10">
                    <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                    <p className="text-green-400 font-bold text-right">— {testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Services List */}
            <div className="bg-gradient-to-br from-gray-800/90 to-green-900/90 p-6 rounded-lg shadow-lg border-4 border-green-700/50 relative overflow-hidden transform -rotate-1">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%235eb75e' fill-opacity='0.2'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.3
              }}></div>
              <div className="absolute -bottom-4 right-16">
                  <img src="images/pages/categories/entertainment/JJPepper/two-kangaroos-hopping.gif" alt="Two Hopping Kangaroo" className="h-28" />
                </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  I Specialize In:
                  <span className="animate-pulse text-yellow-300 text-sm ml-2">(All Services!)</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors transform hover:translate-x-1">
                      <Video className="h-4 w-4 text-green-500" />
                      <span className={index % 2 === 0 ? 'rotate-1 transform' : '-rotate-1 transform'}>
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Special Effects */}
            <div className="bg-gradient-to-br from-gray-800/90 to-purple-900/90 p-6 rounded-lg shadow-lg border-4 border-purple-700/50 relative overflow-hidden transform rotate-1">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2329ac95' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.3
              }}></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                  <Wand2 className="h-6 w-6" />
                  Thousands of Effects!
                  <span className="animate-pulse text-yellow-300 text-sm ml-2">(Not exaggerating!)</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {effects.map((effect, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors transform hover:-translate-x-1">
                      <Star className="h-4 w-4 text-purple-500" />
                      <span className={index % 2 === 0 ? '-rotate-1 transform' : 'rotate-1 transform'}>
                        {effect}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-4 -right-16">
                  <img src="images/pages/categories/entertainment/JJPepper/hopping-kangaroo.gif" alt="Hopping Kangaroo" className="h-28" />
                </div>
              </div>
            </div>
          </div>

          {/* Bonus VHS Banner */}
          <div className="mb-16 bg-gradient-to-r from-yellow-500/80 via-orange-500/80 to-yellow-500/80 p-4 rounded-lg shadow-lg border-2 border-dashed border-yellow-300 text-center relative overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='84' viewBox='0 0 84 84' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23834fd7' fill-opacity='0.2'%3E%3Cpath d='M84 23c-4.417 0-8-3.584-8-7.998V8h-7.002C64.58 8 61 4.42 61 0H23c0 4.417-3.584 8-7.998 8H8v7.002C8 19.42 4.42 23 0 23v38c4.417 0 8 3.584 8 7.998V76h7.002C19.42 76 23 79.58 23 84h38c0-4.417 3.584-8 7.998-8H76v-7.002C76 64.58 79.58 61 84 61V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.2
            }}></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-purple-900 mb-2 flex items-center justify-center">
                <Music className="h-5 w-5 mr-2" />
                FREE BONUS OFFER!
                <Music className="h-5 w-5 ml-2" />
              </h3>
              <p className="text-gray-900 font-bold">Book now and receive a FREE VHS mixtape featuring J.J.'s favorite karaoke songs!</p>
              <p className="text-sm text-gray-800 mt-1">*Tape may be partially used. Songs include "Take On Me" and others.</p>
            </div>
          </div>

          {/* Extra Benefits */}
          <div className="bg-gradient-to-r from-gray-800/90 via-green-900/90 to-purple-900/90 p-8 rounded-lg shadow-lg border-4 border-green-700/50 mb-16 relative overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2329ac95' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.2
            }}></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-green-200 mb-6 text-center">
                <span className="relative">
                  Extra Benefits!
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-transparent to-purple-400"></span>
                </span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center transform hover:scale-105 transition-transform bg-gray-900/50 p-4 rounded-lg border border-green-500/30 hover:border-green-500">
                  <Car className="h-12 w-12 mx-auto text-green-400 mb-2" />
                  <p className="text-gray-300">I can drive myself to and fro your event!</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform bg-gray-900/50 p-4 rounded-lg border border-purple-500/30 hover:border-purple-500">
                  <Camera className="h-12 w-12 mx-auto text-purple-400 mb-2" />
                  <p className="text-gray-300">I even take photographs with cameras!</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform bg-gray-900/50 p-4 rounded-lg border border-green-500/30 hover:border-green-500">
                  <Wand2 className="h-12 w-12 mx-auto text-green-400 mb-2" />
                  <p className="text-gray-300">I bring my own tuxedo and video camera!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Under construction banner */}
          <div className="mb-16 bg-yellow-300 p-2 rounded-lg text-center">
            <div className="border-2 border-black p-2 rounded font-bold text-black flex items-center justify-center">
              <span className="animate-pulse mr-2">🚧</span>
              UNDER CONSTRUCTION - MORE KANGAROO EFFECTS COMING SOON!
              <span className="animate-pulse ml-2">🚧</span>
            </div>
          </div>

          {/* Final Plea */}
          <div className="text-center bg-gradient-to-r from-gray-800/90 via-green-900/90 to-purple-900/90 p-8 rounded-lg shadow-lg border-4 border-purple-700/50 relative overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%235eb75e' fill-opacity='0.2'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.2
            }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-yellow-200 to-purple-300 mb-4">Why don't you use me for your next event?</h2>
              <p className="text-xl text-gray-300 mb-4">We would do this together.</p>
              <div className="max-w-md mx-auto bg-black/30 p-4 rounded-lg border border-green-500/50 mb-6">
                <p className="text-green-400 italic font-bold text-xl">I'm almost always videotaping.</p>
                <div className="absolute -bottom-8 right-4">
                  <img src="images/pages/categories/entertainment/JJPepper/gday-kangaroo.gif" alt="Hopping Kangaroo" className="h-28" />
                </div>
                <div className="absolute -bottom-8 left-4">
                  <img src="images/pages/categories/entertainment/JJPepper/gday-kangaroo.gif" alt="Hopping Kangaroo" className="h-28" />
                </div>
                <p className="text-sm text-purple-300">That's a J.J. Pepper guarantee!</p>
              </div>
              <div className="mt-8 animate-pulse">
                <div className="relative inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-purple-500 to-green-600 rounded-full blur-lg mr-2 -mb-4 animate-pulse"></div>
                  <Phone className="h-16 w-16 mx-auto text-purple-400 -mb-6 mr-4 relative" />
                </div>
                <p className="text-2xl font-mono text-green-400 bg-gray-900/50 inline-block px-4 py-2 rounded-lg border-2 border-dashed border-green-500/50">1-800-555-0199</p>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900/30 p-3 rounded border border-green-500/30 transform -rotate-2">
                  <p className="text-yellow-300 font-bold">Free VHS Mixtape!</p>
                </div>
                <div className="bg-gray-900/30 p-3 rounded border border-purple-500/30 transform rotate-2">
                  <p className="text-green-300 font-bold">Digital Kangaroos!</p>
                </div>
                <div className="bg-gray-900/30 p-3 rounded border border-green-500/30 transform -rotate-1">
                  <p className="text-yellow-300 font-bold">Ugly Friend Trees!</p>
                </div>
              </div>
              <p className="mt-6 text-white">Thanks for caring.</p>
              
              {/* Copyright */}
              <div className="mt-8 text-xs text-white">
                © 1996-2008 J.J. Pepper Enterprises. All rights reserved. No copying my kangaroos.
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JJPepper;