import React from 'react';
import CincoFoodLayout from '../../../../components/layout/CincoFoodLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoCigaretteJuice = () => {
  const productImages = [
    "images/pages/categories/health/cincofood/CincoCigaretteJuice/CigaretteJuice.PNG",
    "images/pages/categories/health/cincofood/CincoCigaretteJuice/GoodNews.PNG",
    "images/pages/categories/health/cincofood/CincoCigaretteJuice/Vomit.PNG",
    "images/pages/categories/health/cincofood/CincoCigaretteJuice/enjoy.PNG",
    "images/pages/categories/health/cincofood/CincoCigaretteJuice/Spagett.PNG"
  ];

  const processSteps = [
    {
      title: "Tobacco Extraction",
      description: "Our drinkspurts extract pure tobacco essence from genuine cigarettes",
      warning: "Extraction process cannot be reversed",
      image: "images/pages/categories/health/cincofood/CincoCigaretteJuice/extract.PNG"
    },
    {
      title: "CINCO™ Water Brewing",
      description: "Tobacco is brewed in proprietary CINCO™ water for maximum thickness",
      warning: "Water may contain traces of previous brews",
      image: "images/pages/categories/health/cincofood/CincoCigaretteJuice/brew.PNG"
    },
    {
      title: "Hand Squeezing",
      description: "Each batch lovingly squeezed by hand for authentic brown cigarette taste",
      warning: "Brown color is natural and permanent",
      image: "images/pages/categories/health/cincofood/CincoCigaretteJuice/squeeze.PNG"
    },
    {
      title: "Movie Theater Enjoyment",
      description: "Perfect for smoke-free environments like theaters and hospitals",
      warning: "May cause hatred of movies",
      image: "images/pages/categories/health/cincofood/CincoCigaretteJuice/CigJuice.PNG"
    }
  ];

  const features = [
    {
      title: "Real Cigarette Taste",
      description: "Authentic thick brown cigarette flavor in every sip",
      icon: "🚬"
    },
    {
      title: "All-Natural Tar",
      description: "Contains the tar your body craves",
      icon: "🖤"
    },
    {
      title: "Spooking Compatible",
      description: "Perfect for spooking breaks, endorsed by Spagett",
      icon: "👻"
    }
  ];

  const customerReviews = [
    {
      text: "When I'm not spooking, I like to smoke... or drink!",
      author: "Spagett",
      image: "images/pages/categories/health/cincofood/CincoCigaretteJuice/spagett.PNG",
      verified: true
    },
    {
      text: "I hate movies less now thanks to Cigarette Juice!",
      author: "Movie Hater",
      image: "images/pages/categories/health/cincofood/CincoCigaretteJuice/hater.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Cigarette extraction process is irreversible",
    "Brown color may stain internal organs",
    "Spooking effectiveness may increase",
    "Not a substitute for actual cigarettes (but also is)",
    "May cause spontaneous Spaghette impressions",
    "Some theater employees may not understand"
  ];

  const nutritionFacts = (
    <div className="space-y-2">
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Cigarette Content</span>
        <span>100%</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Tar Delivery</span>
        <span>Maximum</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Movie Enjoyment</span>
        <span>0%</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Spooking Power</span>
        <span>Enhanced</span>
      </div>
      <div className="text-xs text-green-700 mt-4">
        *It's natural
      </div>
    </div>
  );

  return (
    <CincoFoodLayout
      productName="CINCO™ Cigarette Juice"
      tagline="When You're Dying For A Cigarette But Can't Smoke"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
      nutritionFacts={nutritionFacts}
    >
      <BookAnAppointment 
        productName="CINCO™ Cigarette Juice"
        offerTitle="Smoker's Special!"
        offerText="Buy one can and receive a free case of Cigarette Juice!"
        offerDisclaimer="CINCO™ not responsible for spooking incidents or permanent organ discoloration"
        buttonText="Start Drinking Your Cigarettes"
        certificationBody="Department of Liquid Tobacco and Spooking Affairs"
      />
    </CincoFoodLayout>
  );
};

export default CincoCigaretteJuice;