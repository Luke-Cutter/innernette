import React, { useState, useEffect, useCallback } from 'react';
import { AlertTriangle, Star, Sparkles, Trophy} from 'lucide-react';
import CategoryButton from '../../components/common/CategoryButton';

const NewBadge = () => (
  <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full transform rotate-12 text-sm font-bold shadow-lg border-2 border-red-600">
    NEW!
  </div>
);

const GreatJobBadge = () => (
  <div className="absolute -top-4  -right-10 bg-green-500 text-white px-3 py-1 rounded-full transform rotate-12 text-sm font-bold shadow-lg border-2 border-blue-600">
    Great Job!
  </div>
);

const InnernetteHome = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  const categories = [
    { 
      name: ['Channel 5', 'News'],
      path: '/Channel5HomePage',
      color: 'bg-red-300',
      border: 'border-red-400',
      icon: <Star className="w-4 h-4" />
    },
    {
      name: ['CINCO &', 'Subsidiaries'],
      path: '/subsidiaries',
      color: 'bg-blue-300',
      border: 'border-blue-400',
      icon: <Trophy className="w-4 h-4" />
    },
    {
      name: ['Entertainment'],
      path: '/entertainment',
      color: 'bg-yellow-200',
      border: 'border-yellow-300',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      name: ['For Your', 'Health'],
      path: '/health',
      color: 'bg-green-300',
      border: 'border-green-400',
      icon: <AlertTriangle className="w-4 h-4" />
    },
    {
      name: ['Tech & Help'],
      path: '/help',
      color: 'bg-orange-200',
      border: 'border-orange-300',
      icon: <Star className="w-4 h-4" />
    }
  ];

  const testimonials = [
    "Thanks to The Innernette, I haven't needed real internet in weeks! - Bob O.",
    "I really feel 100% Secure!- Tim H.",
    "My computer hasn't caught a virus since installing! - Dr. Steve Brule",
    "Great for keeping the kids away from dangerous online websites! - Jan B.",
    "No more waiting for pages to load! - Tim H.",
    "I love browsing all 103 websites! - Eric W.", 
    "What a fresh new way to check out sites, buy clothing, and surf music all located on this tiny CD-ROM! - Eric W.",
  ];

  const rotateTestimonial = useCallback(() => {
    setTestimonialIndex(currentIndex => (currentIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(rotateTestimonial, 5000);
    return () => clearInterval(interval);
  }, [rotateTestimonial]);

  const featuredProducts = [
    {
      name: "B'Owl",
      description: "Part bat, part owl. Paint your B'Owl lips! Your pets will look at B'Owl. Put B'Owl in the trunk of your car and forget it! Perfect for throwing away!",
      image: "/images/pages/categories/core/InnernetteHome/bowl.png",
      warning: "Do not feed your B'Owl. It is not a real owl.",
      price: "Only 6 payments of $19.99 from CINCO™ Toys",
      isNew: true
    },
    {
      name: "Cinco™ E-Trial",
      description: "The new solution to boring trials, do it in the comfort of your own home! Trusted and used by Terry Cinco.",
      image: "/images/pages/categories/core/InnernetteHome/etrial.png",
      warning: "All verdicts are legally binding and MAY result in jail time",
      price: "Special offer: 3 payments of $33.33",
      isNew: false
    },
    {
      name: "CINCO™ C-Fone ",
      description: "Only one button for dialing, this phone cannot receive calls only make them! Harness the cutting-edge with our 2 Antennaes for improved reception.",
      image: "/images/pages/categories/core/InnernetteHome/c-phone.png",
      warning: "Use the CINCO™ Cooling Gel for burns!",
      price: "Just 4 easy payments of $25.99",
      isNew: true
    }
  ];

  return (
    <div className="p-8 relative bg-blue-200">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <h1 className="text-6xl italic font-light text-black mb-2">
            Welcome to the Innernette!
          </h1>
          <GreatJobBadge />
        </div>
        <div className="text-center italic text-sm mb-2">
          Your offline solution to the information superhighway
          <br />
          brought to you by CINCO™
        </div>
        <div className="text-sm bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 p-2 rounded inline-block">
          Version 2.5 - Now with 103 pre-installed websites!
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white p-4 rounded-lg mb-8 text-center">
        <p className="text-gray-600 italic">"{testimonials[testimonialIndex]}"</p>
      </div>

      {/* Featured Product Banner - Main Image: 400x300px */}
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 p-6 rounded-lg mb-8">
        <div className="flex gap-8 items-center">
          <img 
            src="/images/pages/categories/core/InnernetteHome/theinnernette.jpg" 
            alt="Innernette CD-ROM"
            className="w-[400px] h-[300px] object-cover rounded border-4 border-white shadow-lg" 
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">The Complete Innernette Package</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                103+ Pre-loaded websites
              </li>
              <li className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                Free replacement CD-ROM (limit one per household)
              </li>
              <li className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                Chat with 5 Interesting and Unique Avatars
              </li>
              <li className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                Listen to "Funk Barn" by the Jeff GoldBluMan Group
              </li>
              <li className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                Order CINCO™ Products Easily Over Fax 
              </li>
              <li className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                Shop at the Innernette™ Shopping Mall
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4 bg-yellow-200 p-2 rounded text-center -mt-3">
          Choose What You Would Like to Offline Browse:
        </h2>
        <div className="grid mx-auto max-w-5xl grid-cols-5 gap-1 justify-items-center">
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              to={category.path}
              color={category.color}
              border={category.border}
            >
              <div className="flex flex-col items-center">
                {category.icon}
                {category.name.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < category.name.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </CategoryButton>
          ))}
        </div>
      </div>

      {/* Warning Box */}
      <div className="bg-red-100 border-2 border-red-300 p-4 rounded-lg mb-8 relative">
        <div className="absolute -top-3 -left-3 bg-red-500 text-white p-1 rounded">
          IMPORTANT!
        </div>
        <div className="flex items-center gap-4">
          <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
          <div>
            <p className="text-sm font-bold text-red-500 mb-1">WARNING:</p>
            <p className="text-sm">
              This CD-ROM Minidisc is not a toy. Do not attempt to eat the CD-ROM. 
              For best results, computer should be turned on. Side effects may include: 
              Decreased internet addiction, increased productivity, and mild euphoria.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products - Product Images: 320x240px */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4 bg-blue-200 p-2 rounded text-center">
          New From CINCO™:
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg border-2 border-blue-300 p-4 relative">
              {product.isNew && <NewBadge />}
              <img 
                src={product.image} 
                alt={product.name}
                className="w-[320px] h-[240px] object-cover mb-4 rounded border-2 border-gray-200"
              />
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <div className="bg-yellow-100 p-2 rounded text-xs italic mb-4">
                {product.warning}
              </div>
              <div className="text-center bg-green-100 p-2 rounded">
                <span className="font-bold">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banners - Bonus Images: 160x160px */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-green-100 border-2 border-green-300 p-4 rounded-lg">
          <div className="flex gap-4">
            <img 
              src="/images/pages/categories/core/InnernetteHome/cigarettejuice.png" 
              alt="Cigarette Juice"
              className="w-[160px] h-[160px] object-cover rounded"
            />
            <div>
              <h3 className="font-bold mb-2">FREE BONUS:</h3>
              <p className="text-sm">
                GOOD NEWS! Every additional CD-ROM comes with a complementary tube of Cigarette juice! It's Natural!
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <br /> *Cigarette juice may cause drowsiness, confusion, and temporary memory loss
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 border-2 border-blue-300 p-4 rounded-lg">
          <div className="flex gap-4">
            <img 
              src="/images/pages/categories/core/InnernetteHome/midi-organizer.png" 
              alt="Privacy Bag"
              className="w-[160px] h-[160px] object-cover rounded"
            />
            <div>
              <h3 className="font-bold mb-2">LIMITED TIME OFFER:</h3>
              <p className="text-sm">
                Order Minidisc 2 now and receive a free Cinco™ MIDI Organizer!<br />~ Hook up to a T-38 Scsi Compatible port, use the Tulley Toggle, and organize away today!
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                *Allow 10-12 Weeks for Delivery 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Now Section */}
      <div className="bg-yellow-100 border-2 border-yellow-300 p-4 rounded-lg text-center relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
          ORDER NOW!
        </div>
        <p className="text-sm">
          Call Our Special Innernette™ hotline now to order your Innernette™ CD-ROM Expansion 2 through 31! Only 5 easy payments of $19.99 per Minidisc!
        </p>
        <p className="text-xs text-gray-600 mt-2">
          1-800-CINCO™-55
          <br />
          <span className="italic">
            (We may ignore your call based on past CINCO™ purchases)
          </span>
        </p>
      </div>
    </div>
  );
};

export default InnernetteHome;