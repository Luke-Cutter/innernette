import React from 'react';
import CincoFoodLayout from '../../../../components/layout/CincoFoodLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoGriddleman = () => {
  const productImages = [
    "images/pages/categories/health/cincofood/CincoGriddleman/Griddleman.PNG",
    "images/pages/categories/health/cincofood/CincoGriddleman/InAction.PNG",
    "images/pages/categories/health/cincofood/CincoGriddleman/PaidAd.PNG",
    "images/pages/categories/health/cincofood/CincoGriddleman/TooHot.PNG",
    "images/pages/categories/health/cincofood/CincoGriddleman/SmellsLikeHorse.PNG"
  ];

  const processSteps = [
    {
      title: "Spatula Selection",
      description: "Choose from our selection of yellow spatulas (which may appear purple)",
      warning: "Color perception may vary by user",
      image: "images/pages/categories/health/cincofood/CincoGriddleman/selection.PNG"
    },
    {
      title: "Ingredient Assembly",
      description: "Layer sandwich with turkey (not a personal insult) and pickles (actually olives)",
      warning: "Ingredient identification not guaranteed",
      image: "images/pages/categories/health/cincofood/CincoGriddleman/assembly.PNG"
    },
    {
      title: "Horse Grease Application",
      description: "Liberally brush premium horse grease onto sandwich",
      warning: "Yes, it's expensive",
      image: "images/pages/categories/health/cincofood/CincoGriddleman/greasing.PNG"
    },
    {
      title: "Griddling Process",
      description: "Close lid and wait exactly 5 seconds",
      warning: "Tongue burning highly likely",
      image: "images/pages/categories/health/cincofood/CincoGriddleman/griddling.PNG"
    }
  ];

  const features = [
    {
      title: "Boot-Shaped Technology",
      description: "Inspired by Italy (a country in Europe that looks like a cowboy boot)",
      icon: "👢"
    },
    {
      title: "Premium Horse Grease",
      description: "Authentic equine-based lubricant for optimal griddling",
      icon: "🐎"
    },
    {
      title: "5-Second Cooking",
      description: "Revolutionary quick-burn technology",
      icon: "⚡"
    }
  ];

  const customerReviews = [
    {
      text: "Who you calling turkey Cathy Mitchell? When I upgrade to Innernette 3.0, I will hack your Nettesite.",
      author: "Dr. Steve Brule",
      verified: true
    },
    {
      text: "It definitely smelled like horse",
      author: "Dr. Steve Brule",
      verified: true
    }
  ];

  const warnings = [
    "Not responsible for misidentified ingredients",
    "Horse grease price subject to market fluctuations",
    "May cause confusion about basic geography",
    "Spatula colors are objective reality",
    "Immediate tongue burning expected",
    "Some knowledge of Italy recommended",
    "Not all sandwiches are paninis",
    "Horse smell is feature, not bug"
  ];

  const nutritionFacts = (
    <div className="space-y-2">
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Horse Grease Content</span>
        <span>Premium %</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Pickle-to-Olive Ratio</span>
        <span>0:100</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Tongue Burn Factor</span>
        <span>High</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Italian Boot Shape</span>
        <span>Cowboy</span>
      </div>
      <div className="text-xs text-green-700 mt-4">
        *Nutritional value may vary based on understanding of geography
      </div>
    </div>
  );

  return (
    <CincoFoodLayout
      productName="CINCO™ Griddleman"
      tagline="For Making Sandwiches (Or Paninis If You're Italian)"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
      nutritionFacts={nutritionFacts}
    >
      <BookAnAppointment 
        productName="CINCO™ Griddleman"
        offerTitle="Channel 5 News Special!"
        offerText="Order now and receive a free geography lesson with Dr. Steve Brule!"
        offerDisclaimer="CINCO™ not responsible for culinary or geographical confusion"
        buttonText="Make Your Own Cowboy Boot Sandwich"
        certificationBody="Department of Sandwich Etymology"
      />
    </CincoFoodLayout>
  );
};

export default CincoGriddleman;