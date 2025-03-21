import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoDPants = () => {
  const productImages = [
    "images/pages/categories/cinco/cincoproducts/CincoDPants/pants.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoDPants/elastic.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoDPants/filling.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoDPants/hosing.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoDPants/backyard.PNG"
  ];

  const processSteps = [
    {
      title: "Layering Process",
      description: "Wear D-Pants under regular trousers for complete discretion",
      warning: "Regular trousers still required by law",
      image: "images/pages/categories/cinco/cincoproducts/CincoDPants/layering.PNG"
    },
    {
      title: "Ankle Seal Check",
      description: "Ensure elastic bands are properly secured for minimal leakage",
      warning: "Almost never runs down ankles",
      image: "images/pages/categories/cinco/cincoproducts/CincoDPants/sealing.PNG"
    },
    {
      title: "Liquid Management",
      description: "Allow uncontrollable liquids to collect in protective plastic lining",
      warning: "LIQUIDS ONLY - Solid loaves will breach containment",
      image: "images/pages/categories/cinco/cincoproducts/CincoDPants/collecting.PNG"
    },
    {
      title: "Maintenance",
      description: "Simply hose off in backyard when filled to maximum capacity",
      warning: "Check local ordinances regarding backyard hosing",
      image: "images/pages/categories/cinco/cincoproducts/CincoDPants/cleaning.PNG"
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
    },
    {
      title: "Easy Cleaning",
      description: "Garden hose compatible for quick refreshing",
      icon: "🦠"
    },
    {
      title: "Maximum Mobility",
      description: "Squirt on the go without breaking stride",
      icon: "🏃"
    }
  ];

  const customerReviews = [
    {
      text: "I've been filling them right in front of you!",
      author: "Diah Rhea-Jones",
      image: "images/pages/categories/cinco/cincoproducts/CincoDPants/diah.PNG",
      verified: true
    },
    {
      text: "My backyard has never been more... active",
      author: "Jenny",
      image: "images/pages/categories/cinco/cincoproducts/CincoDPants/jenny.PNG",
      verified: true
    },
    {
      text: "Should have read the solid loaf warning...",
      author: "Regretful User",
      image: "images/pages/categories/cinco/cincoproducts/CincoDPants/regret.PNG",
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