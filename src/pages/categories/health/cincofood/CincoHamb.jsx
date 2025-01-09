import React from 'react';
import CincoFoodLayout from '../../../../components/layout/CincoFoodLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoHamb = () => {
  const productImages = [
    "images/pages/categories/health/cincofood/CincoHamb/HambLogo.PNG",
    "images/pages/categories/health/cincofood/CincoHamb/Essence.PNG",
    "images/pages/categories/health/cincofood/CincoHamb/Hamb.PNG",
    "images/pages/categories/health/cincofood/CincoHamb/Dead.PNG",
    "images/pages/categories/health/cincofood/CincoHamb/Hambster.PNG"
  ];

  const processSteps = [
    {
      title: "Financial Crisis",
      description: "Lose all your money and face imminent house foreclosure",
      warning: "Job acquisition strongly discouraged",
      image: "images/pages/categories/health/cincofood/CincoHamb/crisis.PNG"
    },
    {
      title: "H'amb Selection",
      description: "Choose from our variety of H'amb loaves, each containing genuine lamb essence",
      warning: "Essence source unverified",
      image: "images/pages/categories/health/cincofood/CincoHamb/selection.PNG"
    },
    {
      title: "Aroma Application",
      description: "Spray included lamb essence aerosol throughout your soon-to-be-foreclosed home",
      warning: "Scent may become permanent part of identity",
      image: "images/pages/categories/health/cincofood/CincoHamb/aroma.PNG"
    },
    {
      title: "H'amb Chanting",
      description: "Repeat 'H'amb' until family accepts their new dietary reality",
      warning: "Minimum 18 repetitions required",
      image: "images/pages/categories/health/cincofood/CincoHamb/chanting.PNG"
    }
  ];

  const features = [
    {
      title: "Real Lamb Essence",
      description: "Carefully extracted from genuine lamb-related products",
      icon: "🐑"
    },
    {
      title: "H'ambster Option",
      description: "Seafood variant for the discerning bankrupt family",
      icon: "🐟"
    },
    {
      title: "Financial Relief",
      description: "Costs significantly less than actual food",
      icon: "💰"
    }
  ];

  const customerReviews = [
    {
      text: "I smell like lamb now... forever...",
      author: "Jennifer",
      image: "images/pages/categories/health/cincofood/CincoHamb/jennifer.PNG",
      verified: true
    },
    {
      text: "At least it's not a job!",
      author: "Unemployed Dad",
      image: "images/pages/categories/health/cincofood/CincoHamb/dad.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Not technically lamb or any known meat",
    "Essence spray may permanently alter body odor",
    "H'amb chanting may become primary form of communication",
    "H'ambster not actually related to ham, hamsters, or lobsters",
    "May not prevent home foreclosure",
    "Essence sources cannot be disclosed for legal reasons",
    "Employment still not recommended",
    "Lamb-related hallucinations common"
  ];

  const nutritionFacts = (
    <div className="space-y-2">
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Real Lamb Content</span>
        <span>0%</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Lamb Essence</span>
        <span>Unknown %</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>H'amb Content</span>
        <span>100%</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Money Saved</span>
        <span>Not Enough</span>
      </div>
      <div className="text-xs text-green-700 mt-4">
        *Nutritional information may vary based on desperation level
      </div>
    </div>
  );

  return (
    <CincoFoodLayout
      productName="CINCO™ H'amb"
      tagline="When You Can't Afford Real Food"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
      nutritionFacts={nutritionFacts}
    >
      <BookAnAppointment 
        productName="CINCO™ H'amb"
        offerTitle="Financial Crisis Special!"
        offerText="Buy H'amb now, receive free H'ambster sample! (No returns after opening)"
        offerDisclaimer="CINCO™ not responsible for foreclosures or essence-related transformations"
        buttonText="Accept Your New Reality"
        certificationBody="Department of Alternative Meats and Financial Denial"
      />
    </CincoFoodLayout>
  );
};

export default CincoHamb;