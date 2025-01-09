import React from 'react';
import CincoFoodLayout from '../../../../components/layout/CincoFoodLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoCandyTails = () => {
  const productImages = [
    "images/pages/categories/cinco/cincofood/CincoCandyTails/tails.PNG",
    "images/pages/categories/cinco/cincofood/CincoCandyTails/dreads.PNG",
    "images/pages/categories/cinco/cincofood/CincoCandyTails/bangs.PNG",
    "images/pages/categories/cinco/cincofood/CincoCandyTails/trough.PNG",
    "images/pages/categories/cinco/cincofood/CincoCandyTails/cheese.PNG"
  ];

  const processSteps = [
    {
      title: "Flavor Selection",
      description: "Choose your preferred coating: chocolate, strawberry, or caramel",
      warning: "Horsehair taste varies by flavor",
      image: "images/pages/categories/cinco/cincofood/CincoCandyTails/selection.PNG"
    },
    {
      title: "Trough Dipping",
      description: "Submerge genuine horsehair in candy coating trough",
      warning: "Some mane content may exceed FDA guidelines",
      image: "images/pages/categories/cinco/cincofood/CincoCandyTails/dipping.PNG"
    },
    {
      title: "Sprinkle Enhancement",
      description: "Apply generous layer of sprinkles and candy bits",
      warning: "Sprinkles may attract other hair-suckers",
      image: "images/pages/categories/cinco/cincofood/CincoCandyTails/sprinkling.PNG"
    },
    {
      title: "Style Application",
      description: "Choose between classic tails, candy dreads, or athletic bangs",
      warning: "Jamaican accent may develop with dreads",
      image: "images/pages/categories/cinco/cincofood/CincoCandyTails/styling.PNG"
    }
  ];

  const features = [
    {
      title: "Genuine Horsehair",
      description: "Premium mane sourcing for authentic hair-sucking experience",
      icon: "🐎"
    },
    {
      title: "Sweat Activation",
      description: "Athletic model features caramel core for exercise enhancement",
      icon: "💦"
    },
    {
      title: "Mobile Cheese Station",
      description: "Clip-on cheese dipping functionality for on-the-go snacking",
      icon: "🧀"
    },
    {
      title: "Style Options",
      description: "Available in tails, dreads, or performance bangs",
      icon: "💇"
    },
    {
      title: "Coating Variety",
      description: "Multiple flavors mask up to 95% of horsehair taste",
      icon: "🍫"
    }
  ];

  const customerReviews = [
    {
      text: "I be Jammin' with me candy tails you hear me mon!",
      author: "Dread Enthusiast",
      image: "images/pages/categories/cinco/cincofood/CincoCandyTails/jammin.PNG",
      verified: true
    },
    {
      text: "The cheese station changed my life!",
      author: "Mobile Snacker",
      image: "images/pages/categories/cinco/cincofood/CincoCandyTails/snacker.PNG",
      verified: true
    },
    {
      text: "My sweat has never tasted better!",
      author: "Athletic Youth",
      image: "images/pages/categories/cinco/cincofood/CincoCandyTails/athlete.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Some horsehair taste unavoidable",
    "Sweat activation may occur at inconvenient times",
    "Cheese station requires weekly cleaning",
    "Dreads may cause spontaneous accent development",
    "Not responsible for attracted hair-suckers",
    "Athletic performance may be compromised by sugar rush",
    "Excessive mane content possible",
    "Side cheese compatibility varies by hairstyle"
  ];

  const nutritionFacts = (
    <div className="space-y-2">
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Horsehair Content</span>
        <span>Maximum Legal Amount</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Candy Coating</span>
        <span>Thick</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Cheese Station Capacity</span>
        <span>2oz</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Sweat Activation Point</span>
        <span>87°F</span>
      </div>
      <div className="text-xs text-green-700 mt-4">
        *Mane source available upon request
      </div>
    </div>
  );

  return (
    <CincoFoodLayout
      productName="CINCO™ Candy Tails"
      tagline="Make Hair Sucking Sweeter Than Ever"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
      nutritionFacts={nutritionFacts}
    >
      <BookAnAppointment 
        productName="CINCO™ Candy Tails"
        offerTitle="Sweet Style Package!"
        offerText="Order now and receive a complimentary side cheese dipping station!"
        offerDisclaimer="CINCO™ not responsible for accent development or excessive hair consumption"
        buttonText="Start Your Sweet Hair Journey"
        certificationBody="Department of Equine Confectionery"
      />
    </CincoFoodLayout>
  );
};

export default CincoCandyTails;