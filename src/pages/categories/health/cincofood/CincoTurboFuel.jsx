import React from 'react';
import CincoFoodLayout from '../../../../components/layout/CincoFoodLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoTurboFuel = () => {
  const productImages = [
    "images/pages/categories/health/catpage/TurboFuel.PNG",
    "images/pages/categories/health/cincofood/CincoTurboFuel/turbo1.PNG",
    "images/pages/categories/health/cincofood/CincoTurboFuel/turbo2.PNG",
    "images/pages/categories/health/cincofood/CincoTurboFuel/turbo3.PNG"
  ];

  const processSteps = [
    {
      title: "Step 1: Suck",
      description: "Place mouth over the Turbo Nozzle and initiate maximum suction",
      warning: "Do not make eye contact with the can during suction",
      image: "images/pages/categories/health/cincofood/CincoTurboFuel/suck.PNG"
    },
    {
      title: "Step 2: Swallow",
      description: "Allow the Turbo Fuel to enter your system. Ignore any burning sensations",
      warning: "Burning means it's working",
      image: "images/pages/categories/health/cincofood/CincoTurboFuel/swallow.PNG"
    },
    {
      title: "Step 3: Release",
      description: "Experience immediate and unstoppable energy release",
      warning: "Energy release cannot be controlled or stopped",
      image: "images/pages/categories/health/cincofood/CincoTurboFuel/release.PNG"
    }
  ];

  const features = [
    {
      title: "Maximum Energy",
      description: "Contains enough stimulants to power a small industrial turbine",
      icon: "⚡"
    },
    {
      title: "Kid-Sized Portions",
      description: "Now available in smaller cans for developing nervous systems",
      icon: "👶"
    },
    {
      title: "Turbo Nozzle",
      description: "Patented delivery system ensures maximum fuel transfer to face",
      icon: "🚰"
    }
  ];

  const customerReviews = [
    {
      text: "I haven't blinked in 3 weeks!",
      author: "Doug P.",
      verified: true
    },
    {
      text: "The lead adds a nice weight to it. For your health!",
      author: "Dr. Steve Brule",
      verified: true
    }
  ];

  const warnings = [
    "May contain unsafe levels of lead and other heavy metals",
    "Do not consume if you wish to sleep ever again",
    "May cause spontaneous time travel",
    "Keep away from magnets, as contents are highly metallic",
    "Children's version is exactly the same as adult version",
    "Some customers may develop the ability to see through time",
    "Lead content exceeds federal guidelines by several thousand percent"
  ];

  const nutritionFacts = (
    <div className="space-y-2">
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Caffeine per serving</span>
        <span>∞ mg</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Lead content</span>
        <span>Yes</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Maximum recommended age</span>
        <span>None</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Minimum recommended age</span>
        <span>Also None</span>
      </div>
      <div className="text-xs text-green-700 mt-4">
        *Nutritional information may vibrate off can at high speeds
      </div>
    </div>
  );

  return (
    <CincoFoodLayout
      productName="CINCO™ Turbo Fuel Maximum Energy Soda"
      tagline="Suck. Swallow. Release."
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
      nutritionFacts={nutritionFacts}
    >
      <BookAnAppointment 
        productName="CINCO™ Turbo Fuel"
        offerTitle="Special Energy Pack!"
        offerText="Buy 10 cans, get a free lead testing kit!"
        offerDisclaimer="CINCO™ is not responsible for any temporal displacement or spontaneous evolution"
        buttonText="FUEL UP NOW!"
        certificationBody="Department of Questionable Beverages"
      />
    </CincoFoodLayout>
  );
};

export default CincoTurboFuel;