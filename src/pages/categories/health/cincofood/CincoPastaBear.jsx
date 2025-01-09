import React from 'react';
import CincoFoodLayout from '../../../../components/layout/CincoFoodLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoPastaBear = () => {
  const productImages = [
    "images/pages/categories/health/cincofood/CincoPastaBear/PastaBearLogo.PNG",
    "images/pages/categories/health/cincofood/CincoPastaBear/Stuffed.PNG",
    "images/pages/categories/health/cincofood/CincoPastaBear/Chrimbus.PNG",
    "images/pages/categories/health/cincofood/CincoPastaBear/Larvae.PNG",
    "images/pages/categories/health/cincofood/CincoPastaBear/Disease.PNG"
  ];

  const processSteps = [
    {
      title: "Overnight Boiling",
      description: "Submerge entire bear in boiling water for 8-12 hours to eliminate parasites",
      warning: "Some parasites may survive initial boiling",
      image: "images/pages/categories/health/cincofood/CincoPastaBear/boil.PNG"
    },
    {
      title: "Germ Removal",
      description: "Thoroughly dry bear with CINCO™ certified germ-resistant rag",
      warning: "Regular rags may introduce new germs",
      image: "images/pages/categories/health/cincofood/CincoPastaBear/dry.PNG"
    },
    {
      title: "Microwave Treatment",
      description: "Place entire bear in microwave for exactly 45 minutes on high",
      warning: "Skip this step and risk bacterial survival",
      image: "images/pages/categories/health/cincofood/CincoPastaBear/nuke.PNG"
    },
    {
      title: "Bear Surgery",
      description: "Using hunting knife, carefully dissect bear to access pasta",
      warning: "Smaller knives may result in stuffing contamination",
      image: "images/pages/categories/health/cincofood/CincoPastaBear/cut.PNG"
    },
    {
      title: "Larvae Inspection",
      description: "Carefully examine pasta for surviving insects or larvae",
      warning: "Some movement is normal",
      image: "images/pages/categories/health/cincofood/CincoPastaBear/check.PNG"
    }
  ];

  const features = [
    {
      title: "Italian-Style Pasta",
      description: "Authentic pasta stuffed inside genuine teddy bear cavity",
      icon: "🍝"
    },
    {
      title: "Bear Disposal",
      description: "One-time use bear carcass prevents disease spread",
      icon: "🧸"
    },
    {
      title: "Holiday Spirit",
      description: "Perfect for Chrimbus celebrations",
      icon: "🎄"
    }
  ];

  const customerReviews = [
    {
      text: "Finally, a stuffed animal with food inside!",
      author: "Wife",
      image: "images/pages/categories/health/cincofood/CincoPastaBear/wife.PNG",
      verified: true
    },
    {
      text: "Only had to check for larvae twice!",
      author: "Husband",
      image: "images/pages/categories/health/cincofood/CincoPastaBear/husband.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Bear must be boiled for minimum 8 hours",
    "Only use certified germ-resistant rags",
    "Some parasites may develop immunity to boiling",
    "Bear disposal sites must be properly licensed",
    "Larvae inspection cannot be delegated",
    "Do not skip microwave step under any circumstances",
    "Bear may contain trace amounts of previous bears",
    "Not all movement indicates insect survival"
  ];

  const nutritionFacts = (
    <div className="space-y-2">
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Pasta Content</span>
        <span>Variable %</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Bear Stuffing</span>
        <span>Inedible</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Parasite Survival Rate</span>
        <span>Acceptable</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Holiday Spirit</span>
        <span>100%</span>
      </div>
      <div className="text-xs text-green-700 mt-4">
        *Nutritional value may vary based on larvae presence
      </div>
    </div>
  );

  return (
    <CincoFoodLayout
      productName="CINCO™ Pasta Bear"
      tagline="The Perfect Chrimbus Gift"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
      nutritionFacts={nutritionFacts}
    >
      <BookAnAppointment 
        productName="CINCO™ Pasta Bear"
        offerTitle="Holiday Special!"
        offerText="Order now and receive a complimentary germ-resistant rag! (One-time use only)"
        offerDisclaimer="CINCO™ not responsible for surviving parasites or improper bear disposal"
        buttonText="Celebrate Chrimbus Right"
        certificationBody="Department of Stuffed Animal Cuisine"
      />
    </CincoFoodLayout>
  );
};

export default CincoPastaBear;