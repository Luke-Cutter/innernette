import React from 'react';
import CincoToysLayout from '../../../../components/layout/CincoToysLayout';

const Tird = () => {
    const productImages = [
        "images/pages/categories/cinco/cincotoys/CincoTird/Tird2.PNG",
        "images/pages/categories/cinco/cincotoys/CincoTird/Tird.PNG", 
        "images/pages/categories/cinco/cincotoys/CincoTird/HalfMile.PNG", 
        "images/pages/categories/cinco/cincotoys/CincoTird/TirdLogo.PNG",
        "images/pages/categories/cinco/cincotoys/CincoTird/Bird.PNG", 
        "images/pages/categories/cinco/cincotoys/CincoTird/Crawling.PNG"
      ];

  const processSteps = [
    {
      title: "Step 1: Initial Launch",
      description: "Throw your T'ird and watch it soar up to a half mile away!",
      icon: "🦅"
    },
    {
      title: "Step 2: Crawlback Mode",
      description: "Witness the miracle of mechanical turtle legs extending for the journey home",
      icon: "🐢"
    },
    {
      title: "Step 3: Productivity Time",
      description: "Complete essential tasks while waiting: planning, coining, moistenry, hole work, beveraging",
      icon: "📝"
    },
    {
      title: "Step 4: Repeat Launch",
      description: "When T'ird returns, throw again for maximum productivity!",
      icon: "🔄"
    }
  ];

  const features = [
    {
      title: "Auto-Return",
      description: "Patented Crawlback Technology™",
      icon: "↩️"
    },
    {
      title: "Work Enablement",
      description: "Scientifically proven to increase productivity by up to 3000%",
      icon: "📈"
    },
    {
      title: "Flight Wheel Replacement",
      description: "Superior to traditional Flight Wheel in every way",
      icon: "🎮"
    }
  ];

  const customerReviews = [
    {
      text: "Since throwing my T'ird, I've beveraged 47 times on Turbo Fuel Maximum Energy Soda™",
      author: "Jim Heckler",
      verified: true
    },
    {
      text: "Great for productivity! Already buried 15 boxes and moistened twice today.",
      author: "Palmer Scott",
      verified: true
    },
    {
      text: "Threw my T'ird three days ago. Still waiting for it to crawl back. So much work done!",
      author: "Jackie Chan",
      verified: true
    },
    {
      text: "I appreciate getting the time back to sort my coins. Thanks CINCO™.",
      author: "Derrick Whipple",
      verified: true
    }
];
  const warnings = [
    "Do not attempt to calculate T'ird's return speed",
    "Keep away from B'owl's approved locations",
    "Avoid using near D'ump's wildlife zones",
    "T'ird is not responsible for any holes that appear during productivity time",
    "If T'ird fails to return, do not attempt to trace crawlback path",
    "Repositioning must be performed in accordance with local laws"
  ];

  return (
    <CincoToysLayout
      productName="CINCO™ T'ird"
      tagline="The Only Flight Wheel That Slowly Comes Back!"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    />
  );
};

export default Tird;