import React, { useState, useEffect, useCallback } from 'react';
import { AlertTriangle, Newspaper, Star, Sparkles, Trophy, Mail, Clock } from 'lucide-react';
import CategoryButton from '../../components/common/CategoryButton';

// Badges and components
const NewBadge = () => (
  <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full transform rotate-12 text-sm font-bold shadow-lg border-2 border-red-600">
    NEW!
  </div>
);

const GreatJobBadge = () => (
  <div className="absolute -top-4 -right-10 bg-green-500 text-white px-3 py-1 rounded-full transform rotate-12 text-sm font-bold shadow-lg border-2 border-blue-600">
    Great Job!
  </div>
);

const InnernetteHome = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [blinkEffect, setBlinkEffect] = useState(false);
  
  // Simulated cursor blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkEffect(prev => !prev);
    }, 600);
    return () => clearInterval(blinkInterval);
  }, []);
  
  const categories = [
    { 
      name: ['Channel 5', 'News'],
      path: '/Channel5HomePage',
      color: 'bg-red-300',
      border: 'border-red-400',
      icon: <Newspaper className="w-4 h-4" />
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
    "Thanks to The Innernette™, I haven't needed real internet in weeks! - Bob O.",
    "I really feel 100% Secure!- Tim H.",
    "My computer hasn't caught a virus since installing! - Dr. Steve Brule",
    "Great for keeping the kids away from dangerous online websites! - Jan B.",
    "No more waiting for pages to load! - Tim H.",
    "I love browsing all 103 websites! - Merv P.", 
    "I like to check out sites, buy clothing, and surf music! Thanks Innernette™! - Eric W.",
    "Don't come home Casey- Deborah T.",
    "I threw my modem in the trash! Who needs it? - Terry C."
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

  // Time-limited offer countdown
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="p-8 relative" style = {{
      backgroundColor: "#b0d5f5",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' opacity='.5'%3E%3C/path%3E%3Cpath d='M15 15h50l-5 5H20v40l-5 5V15zm0 50h50V15L80 0v80H0l15-15zm32.07-32.07l3.54-3.54A15 15 0 0 1 29.4 50.6l3.53-3.53a10 10 0 1 0 14.14-14.14zM32.93 47.07a10 10 0 1 1 14.14-14.14L32.93 47.07z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
      backgroundPosition: 'center'
    }}>

      {/* Header Section */}
      <div className="text-center bg-white mb-6 border-2 border-blue-700 rounded-lg">
        <div className="relative inline-block">
          <h1 className="text-6xl italic font-light text-black mb-2">
            Welcome to the Innernette!
            <span className={blinkEffect ? 'opacity-100' : 'opacity-0'}>_</span>
          </h1>
          <GreatJobBadge />
        </div>
        <div className="text-center italic text-sm mb-2">
          Your offline solution to the information superhighway
          <br />
          brought to you by CINCO™
        </div>
        <div className="text-sm bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 p-2 mb-4 rounded inline-block">
          Version 2.5 - Now with 103 pre-installed websites!
        </div>
      </div>

      {/* Time-Limited Offer Counter */}
      <div className="bg-gradient-to-r border-t-2 border-l-2 border-r-2 border-pink-600 from-red-400 to-pink-500 p-3 rounded-t-lg text-white text-center">
        <div className="flex justify-center items-center gap-3">
          <Clock className="w-6 h-6 animate-pulse" />
          <div className="font-bold">SPECIAL OFFER EXPIRES IN: {formatTime(timeLeft)}</div>
          <Clock className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white border-b-2 border-l-2 border-r-2 border-green-400 p-4 rounded-b-lg mb-8 text-center">
        <p className="text-black italic font-mono">
          &gt; "{testimonials[testimonialIndex]}"
        </p>
      </div>

      {/* Featured Product Banner - Main Image: 400x300px */}
      <div 
        className="bg-gradient-to-r from-green-200 via-yellow-100 to-green-200 p-6 rounded-lg mb-8 border-2 border-green-200" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(167, 243, 208, 1), rgba(254, 249, 195, 1), rgba(167, 243, 208, 1)),
            url("data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18c0-1.105.887-2 1.998-2 1.104 0 2-.895 2.002-1.994V14v6h-4v-2zM0 13.998C0 12.895.888 12 2 12c1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2 .888 2 2v2H0v-6.002zm16 4.004A1.994 1.994 0 0 1 14 20c-1.105 0-2-.887-2-1.998v-4.004A1.994 1.994 0 0 0 10 12c-1.105 0-2-.888-2-2 0-1.105-.888-2-2-2-1.105 0-2-.887-2-1.998V1.998A1.994 1.994 0 0 0 2 0a2 2 0 0 0-2 2V0h8v2c0 1.105.888 2 2 2 1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2-.888 2-2 0-1.105.888-2 2-2 1.105 0 2-.888 2-2V0h4v6.002A1.994 1.994 0 0 1 22 8c-1.105 0-2 .888-2 2 0 1.105-.888 2-2 2-1.105 0-2 .887-2 1.998v4.004z' fill='%23717073' fill-opacity='0.35' fill-rule='evenodd'/%3E%3C/svg%3E")
          `,
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
      }}>
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
              <li className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                Build your identity in CINCO™ Identity Generator 2.5
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4 bg-yellow-200 border-2 border-yellow-400 p-2 rounded text-center -mt-3">
          Choose What You Would Like to Offline Browse:
        </h2>
        <div className="grid mx-auto max-w-5xl grid-cols-5 gap-1 justify-items-center">
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              to={category.path}
              color={category.color}
              border={category.border}
              className="transform transition-transform hover:scale-105"
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
          <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 animate-pulse" />
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
        <h2 className="text-lg font-bold mb-4 bg-white p-2 rounded text-center border-2 border-blue-300">
          New From CINCO™:
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg border-2 border-blue-300 p-4 relative hover:shadow-lg transition-shadow">
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

      {/* Newsletter Signup */}
      <div className="bg-purple-100 border-2 border-purple-300 p-4 rounded-lg mb-8" style = {{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23d791ea' fill-opacity='0.10' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      backgroundPosition: 'center'
    }}>
        <div className="flex items-center gap-4">
          <Mail className="w-12 h-12 text-purple-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg mb-2">JOIN THE INNERNETTE™ MAILING LIST!</h3>
            <p className="text-sm mb-2">
              Get updates about new CINCO™ products via regular mail! We'll send you a physical letter every month!
            </p>
            <div className="flex gap-2 mt-2">
              <input 
                type="text" 
                placeholder="Your Mailing Address" 
                className="p-2 border-2 border-gray-300 rounded flex-grow" 
              />
              <button className="bg-purple-500 text-white px-4 py-2 rounded font-bold hover:bg-purple-600">
                SUBMIT
              </button>
            </div>
          </div>
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
      <div className="bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 border-2 border-yellow-400 p-4 rounded-lg text-center relative" style = {{
            backgroundImage: `
              linear-gradient(to right, rgb(234, 195, 106), rgba(254, 249, 195, 1), rgb(231, 205, 75)),
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Cpath fill='%238f6a12' fill-opacity='0.2' d='M0 17.83V0h17.83a3 3 0 0 1-5.66 2H5.9A5 5 0 0 1 2 5.9v6.27a3 3 0 0 1-2 5.66zm0 18.34a3 3 0 0 1 2 5.66v6.27A5 5 0 0 1 5.9 52h6.27a3 3 0 0 1 5.66 0H0V36.17zM36.17 52a3 3 0 0 1 5.66 0h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 0 1 0-5.66V52H36.17zM0 31.93v-9.78a5 5 0 0 1 3.8.72l4.43-4.43a3 3 0 1 1 1.42 1.41L5.2 24.28a5 5 0 0 1 0 5.52l4.44 4.43a3 3 0 1 1-1.42 1.42L3.8 31.2a5 5 0 0 1-3.8.72zm52-14.1a3 3 0 0 1 0-5.66V5.9A5 5 0 0 1 48.1 2h-6.27a3 3 0 0 1-5.66-2H52v17.83zm0 14.1a4.97 4.97 0 0 1-1.72-.72l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1 0-5.52l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43c.53-.35 1.12-.6 1.72-.72v9.78zM22.15 0h9.78a5 5 0 0 1-.72 3.8l4.44 4.43a3 3 0 1 1-1.42 1.42L29.8 5.2a5 5 0 0 1-5.52 0l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1-.72-3.8zm0 52c.13-.6.37-1.19.72-1.72l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43a5 5 0 0 1 5.52 0l4.43-4.43a3 3 0 1 1 1.42 1.41l-4.44 4.43c.36.53.6 1.12.72 1.72h-9.78zm9.75-24a5 5 0 0 1-3.9 3.9v6.27a3 3 0 1 1-2 0V31.9a5 5 0 0 1-3.9-3.9h-6.27a3 3 0 1 1 0-2h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 1 1 2 0v6.27a5 5 0 0 1 3.9 3.9h6.27a3 3 0 1 1 0 2H31.9z'%3E%3C/path%3E%3C/svg%3E")
            `,
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
        }}>
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded-full text-xs animate-bounce">
          ORDER NOW!
        </div>
        <p className="text-sm mb-2">
          Call Our Special Innernette™ hotline now to order your Innernette™ CD-ROM Expansion 2 through 31! Only 5 easy payments of $19.99 per Minidisc!
        </p>
        <div className="bg-white inline-block px-6 py-2 rounded-lg border-2 border-red-400 my-3">
          <span className="text-2xl font-bold">1-800-CINCO™-55</span>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          <span className="italic">
            (We may ignore your call based on past CINCO™ purchases)
          </span>
        </p>
        
        <div className="grid grid-cols-3 gap-4 mt-4">
        </div>
        {/* Footer bar */}
      <div className="text-black p-2 mt-2 border-t-2 border-black mx-auto max-w-6xl">
        <div className="flex justify-between">
          <div className="text-xs">Memory: 61.3K (1 Gorb)</div>
          <div className="text-xs">© CINCO™ Enterprises 2008</div>
          <div className="text-xs">Battery: Endless</div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default InnernetteHome;