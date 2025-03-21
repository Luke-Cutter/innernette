import React, { useState, useEffect } from 'react';

const TinyHats = () => {
  // Product data with names and prices matching the image
  const products = [
    { id: 1, name: "Captain's Hat", price: "$19.95", image: "/api/placeholder/180/160", description: "Perfect for tiny boat captains and maritime enthusiasts!" },
    { id: 2, name: "Cowboy Hat with Rope", price: "$29.95", image: "/api/placeholder/180/160", featured: true, description: "Our best-seller! Includes authentic miniature lasso rope." },
    { id: 3, name: "Party Hat", price: "$14.95", image: "/api/placeholder/180/160", description: "Celebrate in style with our colorful cone-shaped tiny party hat!" },
    { id: 4, name: "Tiny Top Hat", price: "$24.95", image: "/api/placeholder/180/160", description: "Elegant and sophisticated. Perfect for formal tiny occasions." },
    { id: 5, name: "XL Tiny Hat", price: "$34.95", image: "/api/placeholder/180/160", new: true, description: "Our new XL line - for when you need a slightly larger tiny hat!" },
    { id: 6, name: "Baby Hat", price: "$12.95", image: "/api/placeholder/180/160", description: "Adorable mini-hats for the littlest heads!" },
    { id: 7, name: "Cake Topper Hat", price: "$9.95", image: "/api/placeholder/180/160", description: "Make your desserts fancy with edible-compatible tiny hats!" },
    { id: 8, name: "Secret Hat", price: "$17.95", image: "/api/placeholder/180/160", description: "Ultra thin design fits under regular hats. Nobody will know!" },
  ];

  // Testimonials
  const testimonials = [
    { name: "Tiny Tim", text: "I never leave home without my Tiny Hat collection!" },
    { name: "Mini Martha", text: "The cake toppers were a hit at my daughter's wedding!" },
    { name: "Lil' Larry", text: "I wear my Secret Hat everywhere. It's my little secret!" },
  ];

  // Special promotions
  const promotions = [
    "Buy 3 Tiny Hats, get a 4th Tiny Hat 50% off!",
    "Free shipping on orders over $50",
    "Join our Tiny Hat Club for exclusive monthly hat drops!",
    "Students get 10% off with valid ID",
  ];

  // State for current product view
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("products");
  const [marqueePosition, setMarqueePosition] = useState(0);
  
  // Navigation functions
  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Marquee animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setMarqueePosition((prev) => (prev - 1) % 500);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Categories from the sidebar in the image
  const categories = [
    "about", "locations", "tiny hats", "small hats", "business", "casual", 
    "for laughs", "special occasion", "adult", "babies", "cakes and pies", 
    "extra large tiny hats", "sales", "special events", "contact us"
  ];

  // Random rotating colors for fun effects
  const funColors = ['#FF8AD8', '#FFDA56', '#56FFAC', '#56C5FF', '#FF5656'];
  const getRandomColor = () => funColors[Math.floor(Math.random() * funColors.length)];

  const renderSection = () => {
    switch(activeSection) {
      case "products":
        return (
          <div className="bg-white border-2 border-blue-200 p-4 rounded relative overflow-hidden">
            {/* Spinning hat animation */}
            <div className="absolute -right-8 -top-8 w-24 h-24 animate-spin opacity-30">
              <div className="w-full h-full bg-blue-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-red-400 rounded-full"></div>
            </div>
            
            {/* Navigation bar */}
            <div className="absolute top-2 right-2 flex space-x-1 z-10">
              <button 
                onClick={prevProduct}
                className="w-6 h-6 bg-blue-200 text-blue-800 flex items-center justify-center rounded hover:bg-blue-300"
              >
                ▲
              </button>
              <button 
                onClick={nextProduct}
                className="w-6 h-6 bg-blue-200 text-blue-800 flex items-center justify-center rounded hover:bg-blue-300"
              >
                ▼
              </button>
            </div>
            
            {/* Rotating promotional banner */}
            <div className="relative h-8 mb-4 overflow-hidden bg-gradient-to-r from-yellow-100 to-pink-100 border border-yellow-400 rounded">
              <div 
                className="absolute whitespace-nowrap"
                style={{ transform: `translateX(${marqueePosition}px)` }}
              >
                {promotions.map((promo, index) => (
                  <span key={index} className="inline-block mx-4 font-bold" style={{ color: getRandomColor() }}>
                    {promo} ★ 
                  </span>
                ))}
              </div>
            </div>
            
            {/* Special announcement */}
            <div className="bg-yellow-100 border-2 border-yellow-400 p-2 mb-4 text-sm rounded shadow-inner">
              <span className="font-extrabold text-red-500">Now Open Saturdays and Sundays</span> so you don't have to worry about those Tiny Hat emergencies!
              <span className="block mt-1 text-blue-600 animate-pulse font-bold">Special this weekend: Free hat sizing with purchase!</span>
            </div>
            
            {/* Featured product - Cowboy Hat with Rope */}
            <div className="mb-6 p-3 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="w-1/3">
                  <div className="relative">
                    <img 
                      src="/api/placeholder/180/160" 
                      alt="Cowboy Hat with Rope"
                      className="w-full object-contain border-4 border-white rounded shadow-lg transform hover:rotate-6 transition-transform"
                    />
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                      HOT!
                    </div>
                  </div>
                </div>
                <div className="w-2/3 pl-4">
                  <h2 className="text-xl font-bold text-blue-800">Cowboy Hat with Rope</h2>
                  <div className="text-lg font-bold text-green-600 mb-2">$29.95</div>
                  <p className="text-sm mb-2">Our signature tiny cowboy hat complete with miniature lasso rope. Made with authentic tiny materials!</p>
                  <div className="text-xs text-gray-600">Available in: Brown, Black, Red, Tiny Blue</div>
                  <button className="mt-2 bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-sm font-bold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product grid */}
            <h2 className="text-lg font-bold text-blue-700 mb-2 border-b-2 border-blue-200 pb-1">More Tiny Hats You'll Love</h2>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2, 3, 4, 5].map((offset) => {
                const index = (currentProductIndex + offset) % products.length;
                const product = products[index];
                
                // Skip cowboy hat as it's already featured
                if (product.name === "Cowboy Hat with Rope") {
                  return null;
                }
                
                return (
                  <div 
                    key={product.id} 
                    className="flex flex-col items-center p-2 border border-blue-200 rounded hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    {product.new && (
                      <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-1 self-end">
                        New!
                      </div>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-20 object-contain mb-2"
                    />
                    <div className="text-center">
                      <div className="font-semibold text-sm">{product.name}</div>
                      <div className="text-blue-600 font-bold">{product.price}</div>
                      <div className="text-xs text-gray-600 mt-1">{product.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Additional info box */}
            <div className="mt-4 border-t-2 border-dotted border-pink-300 pt-3">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg border border-indigo-200">
                <h3 className="text-md font-bold text-indigo-800 mb-2">Did You Know?</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-1">★</span> 
                    <span>Wear a tiny hat under your normal sized hat <em>(it's your secret!)</em></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-1">★</span> 
                    <span>Our tiny hats are perfect for small men, babies, and pets too!</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-1">★</span> 
                    <span>Tiny Hats look amazing as cake and pie decorations!</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-1">★</span> 
                    <span><strong>NEW!</strong> Now available in XL sizes for slightly larger tiny needs!</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-indigo-200">
                  <span className="text-sm font-bold text-indigo-600">Handcrafted since 1997</span>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">TH Quality Guarantee</span>
                </div>
              </div>
            </div>
            
            {/* Customer testimonials */}
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
              <h3 className="text-md font-bold text-green-800 mb-2">Happy Tiny Hat Customers:</h3>
              <div className="space-y-2">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="text-sm border-l-4 border-green-300 pl-2">
                    <p className="italic">"{testimonial.text}"</p>
                    <p className="text-right text-xs font-bold text-green-600">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Partnership banner */}
            <div className="mt-4 bg-blue-600 text-white p-2 rounded text-center animate-pulse">
              <p className="font-bold">Tiny Hats is a proud partner with Dingle's Hat Experience!</p>
              <p className="text-xs">Show your Dingle's receipt for 10% off your next Tiny Hat purchase</p>
            </div>
          </div>
        );
      
      case "about":
        return (
          <div className="bg-white border-2 border-blue-200 p-4 rounded">
            <h2 className="text-xl font-bold text-blue-800 mb-3">About Tiny Hats</h2>
            <div className="flex">
              <div className="w-1/4 pr-4">
                <img src="/api/placeholder/200/300" alt="Tiny Hats Store" className="border-4 border-white shadow-lg" />
                <div className="mt-2 text-center text-sm font-bold text-blue-600">Our flagship store</div>
              </div>
              <div className="w-3/4">
                <p className="mb-3">Welcome to Tiny Hats, your premier destination for miniature headwear since 1997! We specialize in the finest tiny hats for all occasions, crafted with love and attention to the smallest details.</p>
                <p className="mb-3">Our founder, Timothy "Tiny Tim" Timmins, started making tiny hats as a hobby while recovering from a regular-sized hat accident. What began as a therapeutic activity soon blossomed into a thriving business when Tim realized the untapped market for quality miniature headwear.</p>
                <p className="mb-3">Today, we're proud to offer over 200 varieties of tiny hats, with new designs added every month. Our hats are handcrafted by a team of dedicated tiny hat artisans using only the finest tiny materials.</p>
                <h3 className="text-lg font-bold text-blue-600 mt-4 mb-2">Our Tiny Mission</h3>
                <p>To bring joy and whimsy to the world, one tiny hat at a time! We believe that everyone deserves to experience the unique happiness that comes from owning a perfectly crafted tiny hat.</p>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-2">Tiny Hats Gives Back</h3>
              <p>For every 10 tiny hats sold, we donate one tiny hat to children in need of tiny joy. Our Tiny Hats, Big Smiles program has donated over 15,000 tiny hats to date.</p>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="bg-white border-2 border-blue-200 p-4 rounded text-center">
            <h2 className="text-xl font-bold text-blue-800 mb-3">Under Construction</h2>
            <div className="animate-bounce">
              <img src="/api/placeholder/200/200" alt="Construction" className="mx-auto" />
            </div>
            <p className="mt-3">This section is being fitted for a new tiny hat! Please check back soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="p-4 bg-gradient-to-br from-blue-200 via-pink-100 to-green-200 h-full overflow-auto">
      {/* Header with colorful background */}
      <div className="relative w-full h-28 bg-gradient-to-r from-cyan-300 via-pink-200 to-lime-300 rounded-t-lg overflow-hidden mb-2">
        <div className="absolute inset-0">
          {/* Colorful gelatin-like shapes */}
          <div className="absolute top-2 left-12 w-14 h-14 bg-red-400 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute top-5 left-32 w-16 h-16 bg-green-400 rounded-full opacity-70"></div>
          <div className="absolute top-10 left-5 w-12 h-12 bg-blue-400 rounded-full opacity-70"></div>
          <div className="absolute top-3 right-20 w-20 h-20 bg-yellow-400 rounded-full opacity-70"></div>
          <div className="absolute top-6 right-40 w-10 h-10 bg-purple-400 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute bottom-2 left-40 w-16 h-8 bg-pink-400 rounded-full opacity-70"></div>
        </div>
        
        {/* Tiny hat icon */}
        <div className="absolute top-3 left-6 w-16 h-16">
          <div className="w-10 h-5 bg-black rounded-t-full mx-auto"></div>
          <div className="w-16 h-3 bg-black rounded-full"></div>
          <div className="w-4 h-1 bg-red-500 rounded absolute top-3 left-6"></div>
        </div>
        
        {/* Title overlay */}
        <div className="absolute top-6 left-28 text-4xl font-bold text-blue-900 drop-shadow-lg">
          TINY HATS
        </div>
        
        {/* Tagline - styled to match the cursive blue text in the original */}
        <div className="absolute bottom-2 right-16 text-xl italic text-blue-500 font-cursive transform -rotate-2">
          for all your tiny hat needs
        </div>
        
        {/* Now Open banner */}
        <div className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold py-1 px-4 rounded-bl-lg transform rotate-6 shadow-md">
          Now Open on Sundays!
        </div>
        
        {/* Sparkling effect */}
        <div className="absolute top-3 left-26 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-14 right-20 w-3 h-3 bg-white rounded-full animate-ping delay-300"></div>
        <div className="absolute top-20 left-48 w-2 h-2 bg-white rounded-full animate-ping delay-700"></div>
      </div>
      
      {/* Top navigation menu */}
      <div className="bg-blue-600 text-white px-2 py-1 flex space-x-1 text-sm font-bold">
        <button 
          onClick={() => setActiveSection("products")}
          className={`px-3 py-1 rounded-t ${activeSection === "products" ? "bg-white text-blue-600" : "hover:bg-blue-500"}`}
        >
          Products
        </button>
        <button 
          onClick={() => setActiveSection("about")}
          className={`px-3 py-1 rounded-t ${activeSection === "about" ? "bg-white text-blue-600" : "hover:bg-blue-500"}`}
        >
          About Us
        </button>
        <button 
          onClick={() => setActiveSection("locations")}
          className={`px-3 py-1 rounded-t ${activeSection === "locations" ? "bg-white text-blue-600" : "hover:bg-blue-500"}`}
        >
          Locations
        </button>
        <button 
          className="px-3 py-1 rounded-t hover:bg-blue-500 ml-auto"
        >
          Cart (0)
        </button>
      </div>
      
      {/* Main content area */}
      <div className="flex bg-white rounded-b-lg shadow-md">
        {/* Left sidebar with categories */}
        <div className="w-40 bg-gradient-to-b from-blue-200 to-blue-300 p-2 rounded-bl-lg">
          <div className="bg-blue-800 text-white py-1 px-2 rounded mb-2 text-center font-bold">
            TINY HATS CATALOG
          </div>
          <div className="bg-yellow-100 border border-yellow-400 p-1 mb-2 text-xs text-center">
            <div className="font-bold text-red-500">FLASH SALE!</div>
            <div>50% off all clearance hats</div>
          </div>
          <ul className="text-blue-900 text-sm">
            {categories.map((category, index) => (
              <li 
                key={index} 
                className="py-1 px-2 hover:bg-blue-400 hover:text-white cursor-pointer border-b border-blue-400 last:border-b-0 transition-colors"
              >
                {index === 2 ? <span className="font-bold">{category} ★</span> : category}
              </li>
            ))}
          </ul>
          
          <div className="mt-4 bg-white p-2 rounded border border-blue-400">
            <div className="text-center text-sm font-bold text-blue-800 mb-1">JOIN OUR MAILING LIST!</div>
            <input type="text" placeholder="Email Address" className="w-full text-xs p-1 border border-blue-300 rounded mb-1" />
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xs py-1 rounded">
              Get Tiny Updates!
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <div className="text-xs text-blue-800 font-bold mb-1">VISIT US</div>
            <img src="/api/placeholder/120/80" alt="Map" className="border-2 border-white mx-auto" />
            <div className="text-xs mt-1">
              <div>123 Tiny Street</div>
              <div>Smallville, USA</div>
            </div>
          </div>
        </div>
        
        {/* Main content display area */}
        <div className="flex-1 p-4 bg-gradient-to-br from-blue-50 to-pink-50">
          {renderSection()}
          
          {/* Footer */}
          <div className="mt-4 text-center border-t border-blue-200 pt-2">
            <div className="text-xs text-gray-500">
              <div className="font-bold text-blue-700">Tiny Hats Website Design by Snurby</div>
              <div className="mt-1">Copyright © 1997-2025 Tiny Hats Inc. All tiny rights reserved.</div>
              <div className="flex justify-center space-x-3 mt-1">
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
                <a href="#" className="text-blue-600 hover:underline">Tiny Hat Care Instructions</a>
              </div>
            </div>
            <div className="mt-2 text-xs">
              <div className="animate-pulse text-blue-800 font-bold">
                This site best viewed with Microsoft Internet Explorer 6.0 or Netscape Navigator
              </div>
              <div className="flex justify-center space-x-2 mt-1">
                <img src="/api/placeholder/88/31" alt="Best Viewed Badge" className="h-6" />
                <img src="/api/placeholder/88/31" alt="WebRings" className="h-6" />
                <img src="/api/placeholder/88/31" alt="Valid HTML" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visitor counter */}
      <div className="mt-2 text-center text-xs bg-black text-green-400 p-1 rounded mx-auto w-40">
        Visitors: 000127598
      </div>
    </div>
  );
};

export default TinyHats;