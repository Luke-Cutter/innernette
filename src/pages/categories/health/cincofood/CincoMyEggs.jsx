import React from 'react';
import CincoFoodLayout from '../../../../components/layout/CincoFoodLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoMyEggs = () => {
  const productImages = [
    "images/pages/categories/health/cincofood/CincoMyEggs/Logo.PNG",
    "images/pages/categories/health/cincofood/CincoMyEggs/MyEggs.PNG",
    "images/pages/categories/health/cincofood/CincoMyEggs/FecesActivated.PNG",
    "images/pages/categories/health/cincofood/CincoMyEggs/GreenEgg.PNG",
    "images/pages/categories/health/cincofood/CincoMyEggs/joe.PNG"
  ];

  const processSteps = [
    {
      title: "Embryo Ingestion",
      description: "Take one MyEggs pill containing real chicken embryos",
      warning: "Embryos begin incubation immediately",
      image: "images/pages/categories/health/cincofood/CincoMyEggs/ingestion.PNG"
    },
    {
      title: "Nest Preparation",
      description: "Shred product box into toilet-compatible nesting material",
      warning: "Only use official MyEggs box for nesting",
      image: "images/pages/categories/health/cincofood/CincoMyEggs/preparation.PNG"
    },
    {
      title: "Incubation Period",
      description: "Allow 3 days for intestinal egg development",
      warning: "Movement should be minimized during incubation",
      image: "images/pages/categories/health/cincofood/CincoMyEggs/incubation.PNG"
    },
    {
      title: "Egg Passage",
      description: "Commence dozen-egg delivery through designated exit point",
      warning: "Slight discomfort is normal and expected",
      image: "images/pages/categories/health/cincofood/CincoMyEggs/delivery.PNG"
    }
  ];

  const features = [
    {
      title: "Eco-Friendly Nesting",
      description: "Packaging converts into environmentally conscious toilet nest",
      icon: "♻️"
    },
    {
      title: "Bulk Production",
      description: "Full dozen eggs per cycle guaranteed",
      icon: "📦"
    },
    {
      title: "Cost Efficiency",
      description: "Eliminate expensive grocery store egg purchases",
      icon: "💰"
    }
  ];

  const customerReviews = [
    {
      text: "My egg bills have disappeared... along with my comfort.",
      author: "Joe",
      image: "images/pages/categories/health/cincofood/CincoMyEggs/joe.PNG",
      verified: true
    },
    {
      text: "1...2...3...4...5...6...halfway there!",
      author: "Steven Speilberg",
      image: "images/pages/categories/health/cincofood/CincoMyEggs/stevenspeilberg.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Do not attempt to incubate more than one dozen at a time",
    "Nesting material must come from original box",
    "Bathroom required for 3-6 hours during delivery",
    "Some clucking may occur during incubation",
    "Egg counting mandatory during passage",
    "May affect bathroom scheduling",
    "Roosters not included",
    "Exit point expansion permanent"
  ];

  const nutritionFacts = (
    <div className="space-y-2">
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Embryo Content</span>
        <span>12 per pill</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Incubation Time</span>
        <span>72 hours</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Discomfort Level</span>
        <span>Moderate to High</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Cost Savings</span>
        <span>Substantial</span>
      </div>
      <div className="text-xs text-green-700 mt-4">
        *Results may vary based on intestinal capacity
      </div>
    </div>
  );

  return (
    <CincoFoodLayout
      productName="CINCO™ MyEggs"
      tagline="Become Your Own Egg Factory"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
      nutritionFacts={nutritionFacts}
    >
      <BookAnAppointment 
        productName="CINCO™ MyEggs"
        offerTitle="Egg Production Package!"
        offerText="Order now and receive a premium toilet nest starter kit!"
        offerDisclaimer="CINCO™ not responsible for clucking sounds or bathroom scheduling conflicts"
        buttonText="Start Your Egg Journey"
        certificationBody="Department of Internal Poultry Production"
      />
    </CincoFoodLayout>
  );
};

export default CincoMyEggs;