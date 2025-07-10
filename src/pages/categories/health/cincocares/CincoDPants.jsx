import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoDPants = () => {
  const productImages = [
    "images/pages/categories/health/DPants/DPantsLogo.PNG",
    "images/pages/categories/health/DPants/NoLoafs.PNG",
    "images/pages/categories/health/DPants/Squirt.PNG",
    "images/pages/categories/health/DPants/uncontrollablediarrhea.PNG",
    "images/pages/categories/health/DPants/backyard.PNG"
  ];

  const processSteps = [
    {
      title: "Layering Process",
      description: "Wear D-Pants under regular trousers for complete discretion",
      warning: "Regular trousers still required by law",
      image: "images/pages/categories/health/DPants/layering.PNG"
    },
    {
      title: "Ankle Seal Check",
      description: "Ensure elastic bands are properly secured for minimal leakage",
      warning: "Almost never runs down ankles",
      image: "images/pages/categories/health/DPants/Ankle.PNG"
    },
    {
      title: "Liquid Management",
      description: "Allow uncontrollable liquids to collect in protective plastic lining",
      warning: "LIQUIDS ONLY - Solid loaves will breach containment",
      image: "images/pages/categories/health/DPants/Bust.PNG"
    },
    {
      title: "Maintenance",
      description: "Simply hose off in backyard when filled to maximum capacity",
      warning: "Check local ordinances regarding backyard hosing",
      image: "images/pages/categories/health/DPants/HoseOff.PNG"
    }
  ];

  const features = [
    {
      title: "Discreet Design",
      description: "Fill while maintaining conversations - no one will know",
      icon: "🤫"
    },
    {
      title: "Ankle Protection",
      description: "Advanced elastic technology prevents most downward leakage",
      icon: "🧦"
    },
    {
      title: "Plastic Construction",
      description: "Premium liquid-holding capability (not rated for solids)",
      icon: "🏺"
    }
  ];

  const customerReviews = [
    {
      text: "I've been filling them right in front of you!",
      author: "Diah Rhea-Jones",
      image: "images/pages/categories/health/DPants/layering.PNG",
      verified: true
    },
    {
      text: "My backyard has never been more... active",
      author: "Patrick Duffy",
      image: "images/pages/categories/health/DPants/Duffy.PNG",
      verified: true
    }
  ];

  const warnings = [
    "NOT FOR SOLID WASTE - LIQUIDS ONLY",
    "Ankle leakage still possible in extreme cases",
    "Neighbors may object to backyard cleaning method",
    "Must maintain liquid consistency",
    "Do not attempt to reuse without hosing",
    "Keep away from solid food consumers",
    "Maximum capacity varies by user",
    "Some social situations may not be appropriate",
    "Plastic integrity depends on waste consistency"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ D-Pants"
      tagline="Squirt On The Go With Confidence"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ D-Pants"
        offerTitle="Liquid Management Special!"
        offerText="Buy now and receive a complimentary garden hose attachment!"
        offerDisclaimer="CINCO™ not responsible for solid waste incidents or neighbor complaints"
        buttonText="Embrace Liquid Freedom"
        certificationBody="Department of Mobile Waste Management"
      />
    </CincoProductLayout>
  );
};

export default CincoDPants;