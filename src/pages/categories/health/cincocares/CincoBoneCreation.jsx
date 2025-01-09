import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoBoneCreation = () => {
  const productImages = [
    "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/bones.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/powder.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/mold.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/oven.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/squirrel.PNG"
  ];

  const processSteps = [
    {
      title: "Bone Collection",
      description: "Gather discarded chicken and pig rib bones from local waste",
      warning: "ABSOLUTELY NO SQUIRREL BONES",
      image: "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/collection.PNG"
    },
    {
      title: "Powder Creation",
      description: "Crush bones into fine white powder using institute-approved methods",
      warning: "Powder must achieve specific whiteness",
      image: "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/crushing.PNG"
    },
    {
      title: "Liquid Integration",
      description: "Add water or fruit juice of choice, let mixture settle for several days",
      warning: "Mixture may develop consciousness",
      image: "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/mixing.PNG"
    },
    {
      title: "Pizza Oven Baking",
      description: "Pour into plaster mold and bake in standard pizza oven",
      warning: "Pizza taste may be affected permanently",
      image: "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/baking.PNG"
    }
  ];

  const features = [
    {
      title: "Animal Bone Recycling",
      description: "Transform waste bones into useful human bones",
      icon: "🦴"
    },
    {
      title: "Fruit Juice Option",
      description: "Add flavor variety to your bone creation process",
      icon: "🧃"
    },
    {
      title: "Pizza Oven Integration",
      description: "Uses existing restaurant equipment for cost efficiency",
      icon: "🍕"
    },
    {
      title: "Plaster Mold System",
      description: "Create any bone shape needed (for demonstration only)",
      icon: "🦿"
    },
    {
      title: "Squirrel Detection",
      description: "Advanced screening for prohibited squirrel bones",
      icon: "🐿️"
    }
  ];

  const customerReviews = [
    {
      text: "I used to throw away my animal bones, but now...",
      author: "Bone Recycler",
      image: "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/recycler.PNG",
      verified: true
    },
    {
      text: "The grape juice really adds something special to my femurs",
      author: "Juice Enthusiast",
      image: "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/juice.PNG",
      verified: true
    },
    {
      text: "I am DEADLY serious about the squirrel bones",
      author: "Dr. Reid Tamaranda",
      image: "images/pages/categories/cinco/cincoproducts/CincoReidTamaranda/reid.PNG",
      verified: true
    }
  ];

  const warnings = [
    "DO NOT USE SQUIRREL BONES (It's complicated)",
    "Demonstration bones must be destroyed",
    "Pizza ovens may retain bone essence",
    "Some bones may retain original animal memories",
    "Fruit juice selection affects bone personality",
    "Results may not match original human bones",
    "American Bone Institute not responsible for bone sentience",
    "Plaster molds are single-use only",
    "Squirrel bone prohibition is non-negotiable"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Reid Tamaranda's Bone Creation System"
      tagline="Turn Waste Bones Into Human Bones (NO SQUIRRELS)"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Bone Creation"
        offerTitle="Bone Transformation Package!"
        offerText="Order now and receive a complimentary fruit juice selection guide!"
        offerDisclaimer="CINCO™ strictly prohibits squirrel bones under all circumstances"
        buttonText="Start Creating Bones"
        certificationBody="American Bone Institute & Department of Squirrel Prevention"
      />
    </CincoProductLayout>
  );
};

export default CincoBoneCreation;