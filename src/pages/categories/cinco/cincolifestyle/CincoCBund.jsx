import React from 'react';
import CincoFashionLayout from '../../../../components/layout/CincoFashionLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoCBund = () => {
  const productImages = [
    "images/pages/categories/cinco/cincolifestyle/CincoCBund/CBundLogo.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoCBund/NoPants.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoCBund/MobileOffice.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoCBund/UrbanSafari.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoCBund/SeamansFormal.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoCBund/GlitterBug.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoCBund/NaughtyTeenager.PNG"
  ];

  const styleGuide = [
    {
      title: "Pants Removal",
      description: "Remove all pants. This is mandatory. The C-Bund requires direct skin contact for proper adhesion.",
      image: "images/pages/categories/cinco/cincolifestyle/CincoCBund/nopants.PNG"
    },
    {
      title: "Waist Preparation",
      description: "Apply the proprietary CINCO™ Waist Butter liberally around the torso. This may cause temporary numbness and euphoria.",
      warning: "Use only genuine CINCO™ Waist Butter"
    },
    {
      title: "Installation",
      description: "The C-Bund must be heat-sealed to your body at exactly 425°F. This process is irreversible.",
    }
  ];

  const features = [
    {
      title: "Built-in Climate Control",
      description: "The C-Bund maintains a constant 98.6°F, regardless of external temperature or laws of thermodynamics",
      icon: "🌡️"
    },
    {
      title: "Storage Solutions",
      description: "Each C-Bund comes with 17 hidden pockets. We don't know where they all are, but they're in there somewhere",
      icon: "👝"
    },
    {
      title: "Modesty Shield",
      description: "Advanced holographic technology creates the illusion of pants for concerned onlookers",
      icon: "👖"
    }
  ];

  const customerReviews = [
    {
      text: "Haven't worn pants in 3 years. My legs are free and my meetings are productive!",
      author: "Palmer Scott",
      image: "images/pages/categories/cinco/cincolifestyle/CincoCBund/PalmerScott.PNG",
      verified: true
    },
    {
      text: "The teen edition got me suspended from school, but I've never felt more fashionable!",
      author: "Billy Crystals",
      image: "images/pages/categories/cinco/cincolifestyle/CincoCBund/BillyCrystals.PNG",
      verified: true
    },
    {
      text: "My legs turned purple for a week, but the glitter edition really makes me sparkle!",
      author: "Pablo Myers",
      image: "images/pages/categories/cinco/cincolifestyle/CincoCBund/PabloMyers.PNG",
      verified: true
    },
    {
      text: "Catch of the day, I love this product. Helps me get in tune with the island vibrations man.",
      author: "Raz",
      image: "images/pages/categories/cinco/cincolifestyle/CincoCBund/Raz.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Pants are strictly prohibited and will spontaneously combust if worn with C-Bund",
    "Side effects may include permanent leg glitter, and business hallucinations",
    "C-Bund removal requires specialized CINCO™ tools and a valid maritime license",
    "The teen edition may cause unexpected parent disappointment",
    "Urban Safari edition may attract local wildlife",
    "Do not operate heavy machinery while wearing Glitter Bug edition",
    "Seaman's Formal has not been tested at depths below 20,000 leagues"
  ];

  return (
    <CincoFashionLayout
      productName="CINCO™ C-Bund System"
      tagline="Because Pants Are So Last Century"
      productImages={productImages}
      styleGuide={styleGuide}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ C-Bund"
        offerTitle="Special No-Pants Promotion!"
        offerText="Trade in your old pants for a discount on your C-Bund installation!"
        offerDisclaimer="CINCO™ is not responsible for post-installation pants withdrawal symptoms"
        buttonText="Liberate Your Legs"
        certificationBody="International Bureau of Pantless Affairs"
      />
    </CincoFashionLayout>
  );
};

export default CincoCBund;