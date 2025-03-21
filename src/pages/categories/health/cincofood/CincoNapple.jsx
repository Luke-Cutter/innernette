import React from 'react';
import CincoFoodLayout from '../../../../components/layout/CincoFoodLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoNapple = () => {
  const productImages = [
    "images/pages/categories/health/cincofood/CincoNapple/Thickes.PNG",
    "images/pages/categories/health/cincofood/CincoNapple/ThreeThicke.PNG",
    "images/pages/categories/health/cincofood/CincoNapple/ThickeOfIt.PNG",
    "images/pages/categories/health/cincofood/CincoNapple/Bowels.PNG"
  ];

  const processSteps = [
    {
      title: "Apple Selection",
      description: "Our finest apples are carefully selected for maximum juice retention and bowel compatibility",
      warning: "Non-CINCO™ apples may cause irregular sleep patterns",
      image: "images/pages/categories/health/cincofood/CincoNapple/ThreeThicke.PNG"
    },
    {
      title: "Irritant Injection",
      description: "Each apple is precision-injected with our patented bowel irritant formula",
      warning: "Injection process is irreversible",
      image: "images/pages/categories/health/cincofood/CincoNapple/injection.PNG"
    },
    {
      title: "Sleep Gel Application",
      description: "Apples are thoroughly coated in CINCO™ Sleep Gel for maximum nap induction",
      warning: "Sleep gel may cause permanent drowsiness",
      image: "images/pages/categories/health/cincofood/CincoNapple/dipping.PNG"
    },
    {
      title: "Sun Drying",
      description: "Each Napple is lovingly dried in direct sunlight to activate the sleep compounds",
      warning: "Do not look directly at drying Napples",
      image: "images/pages/categories/health/cincofood/CincoNapple/sun.PNG"
    },
    {
      title: "D-Pants Preparation",
      description: "Put on your CINCO™ D-Pants before consumption. This step cannot be skipped",
      warning: "Regular pants will not survive the Napple experience",
      image: "images/pages/categories/health/cincofood/CincoNapple/ThickeOfIt.PNG"
    }
  ];

  const features = [
    {
      title: "Precision Sleep Control",
      description: "Guaranteed exactly 15 minutes of sleep - no more, no less",
      icon: "😴"
    },
    {
      title: "Natural Wake-Up System",
      description: "Proprietary bowel irritant ensures punctual awakening",
      icon: "⏰"
    },
    {
      title: "Sun-Dried Technology",
      description: "Solar-activated sleep compounds for maximum efficiency",
      icon: "☀️"
    }
  ];

  const customerReviews = [
    {
      text: "Me so sleepy... MY BOWELS!",
      author: "Dr. Alan Thicke",
      image: "images/pages/categories/health/cincofood/CincoNapple/Bowels.PNG",
      verified: true
    },
    {
      text: "Finally, I can take naps at work! They can't fire me if I'm in the bathroom!",
      author: "The Mayor",
      verified: true
    }
  ];

  const warnings = [
    "Napple must be consumed while wearing D-Pants™",
    "Do not operate heavy machinery during or immediately after Napple-induced sleep",
    "Side effects may include sudden unconsciousness and explosive awakening",
    "Keep multiple pairs of D-Pants within reach at all times",
    "If sleep exceeds 15 minutes, prepare for proportionally increased bowel irritation",
    "Dr. Alan Thicke's endorsement may be a sleep-induced hallucination"
  ];

  const nutritionFacts = (
    <div className="space-y-2">
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Sleep Gel per serving</span>
        <span>150mg</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Bowel Irritant</span>
        <span>Maximum Legal Amount</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Nap Duration</span>
        <span>15 minutes ± 0 seconds</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>D-Pants Required</span>
        <span>Yes (Minimum 2 Pairs)</span>
      </div>
      <div className="text-xs text-green-700 mt-4">
        *Nutritional information may become illegible during sleep
      </div>
    </div>
  );

  return (
    <CincoFoodLayout
      productName="CINCO™ Napple"
      tagline="The World's First Self-Waking Fruit"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
      nutritionFacts={nutritionFacts}
    >
      <BookAnAppointment 
        productName="CINCO™ Napple"
        offerTitle="Special Nap Package!"
        offerText="Buy a case of Napples, get a free pair of D-Pants!"
        offerDisclaimer="CINCO™ is not responsible for any sudden sleep episodes or related D-Pants emergencies"
        buttonText="Start Napping Today"
        certificationBody="Department of Experimental Fruit and Bowel Management"
      />
    </CincoFoodLayout>
  );
};

export default CincoNapple;