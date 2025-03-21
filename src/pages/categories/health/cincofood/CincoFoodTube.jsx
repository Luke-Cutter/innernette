import React from 'react';
import CincoFoodLayout from '../../../../components/layout/CincoFoodLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoFoodTube = () => {

  const productImages = [
    "images/pages/categories/cinco/cincofood/CincoFoodTube/FoodTubeLogo.PNG",
    "images/pages/categories/cinco/cincofood/CincoFoodTube/NoFoodTube.PNG",
    "images/pages/categories/cinco/cincofood/CincoFoodTube/FoodTube.PNG"
  ];

  const processSteps = [
    {
      title: "Remove for Tube",
      description: "Your teeth are removed to make way for the form-fitting tube because you don't want your pearly whites getting in the way of the tube!",
      warning: "Teeth cannot be reattached while tube is installed",
      image: "images/pages/categories/cinco/cincofood/CincoFoodTube/NoTeeth.PNG"
    },
    {
      title: "Tube Insertion",
      description: "Then the tube is fitted into your mouth and throat. They have to cut it to size to make sure it reaches right into your stomach.",
      warning: "Tube length is permanent once cut",
      image: "images/pages/categories/cinco/cincofood/CincoFoodTube/RemoveForTube.PNG"
    },
    {
      title: "Holeing",
      description: "Now your table is holed to make way for the tube and food processing chamber. Make sure the holes are lined up!",
      warning: "Table modifications are permanent",
      image: "images/pages/categories/cinco/cincofood/CincoFoodTube/Holeing.PNG"
    },
    {
      title: "Softening",
      description: "Food is placed in the processing chamber where it's mixed with softening cream.",
      warning: "Only use CINCO™ certified softening cream",
      image: "images/pages/categories/cinco/cincofood/CincoFoodTube/Softening.PNG"
    },
    {
      title: "Numb for Tube",
      description: "You have to numb them gumbs with Novacaine! Or else you're gonna feel that harsh tube against your gums.",
      warning: "Numbness may be permanent",
      image: "images/pages/categories/cinco/cincofood/CincoFoodTube/NumbForTube.PNG"
    },
    {
      title: "Insert Tube",
      description: "Slink that food tube into your mouth! ",
      warning: "Slurp Away! DO NOT CHOKE",
      image: "images/pages/categories/cinco/cincofood/CincoFoodTube/PutInMouth.PNG"
    }
  ];

  const features = [
    {
      title: "Softening Cream",
      description: "Our patented softening cream makes everything slinkable",
      icon: "🧴"
    },
    {
      title: "Fork-Free Living",
      description: "Never worry about poking yourself with dangerous utensils again",
      icon: "🚫"
    },
    {
      title: "Table Integration",
      description: "Custom-holed table for seamless dining experience",
      icon: "🪑"
    }
  ];

  const customerReviews = [
    {
      text: "Me, me, I'm a tube man",
      author: "Kent",
      image: "images/pages/categories/cinco/cincofood/CincoFoodTube/Kent.PNG",
      verified: true
    },
    {
      text: "Me so hungry!",
      author: "David L.",
      verified: true
    },
    {
      text: "I wanna be a food tuber too",
      author: "Eric W.",
      verified: true
    },
    {
      text: "Sounds like the softening cream has a partner in crime",
      author: "Rudy",
      image: "images/pages/categories/cinco/cincofood/CincoFoodTube/Rudy.PNG",
      verified: true
    }
  ];

  const warnings = [
    "CINCO™ is not responsible for permanent tooth loss or gum damage",
    "Do not attempt to eat solid food while Food Tube is installed",
    "Only use CINCO™ approved softening cream in processing chamber",
    "Table modifications cannot be reversed",
    "If tube begins making whistling sounds during sleep, contact CINCO™ immediately",
    "Not compatible with CINCO™ Milk Machine or other oral devices"
  ];

  const nutritionFacts = (
    <div className="space-y-2">
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Softening Cream per serving</span>
        <span>500ml</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Maximum food chunk size</span>
        <span>2cm³</span>
      </div>
      <div className="flex justify-between border-b border-green-800 pb-1">
        <span>Tube diameter</span>
        <span>4cm</span>
      </div>
      <div className="text-xs text-green-700 mt-4">
        *All measurements are CINCO™ standard
      </div>
    </div>
  );


  return (
    <CincoFoodLayout
      productName="CINCO™ Food Tube"
      tagline="Skip The Fork, Use The Tube!"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
      nutritionFacts={nutritionFacts}
    >
      <BookAnAppointment 
        productName="CINCO™ Food Tube"
        offerTitle="Special Installation Offer!"
        offerText="Order now and receive a complimentary tooth removal kit and table drilling service!"
        offerDisclaimer="Softening cream and Novacaine sold separately"
        buttonText="Start Tubing Today"
        certificationBody="Department of Alternative Nutrition"
      />
    </CincoFoodLayout>
  );
};

export default CincoFoodTube;