import React from 'react';
import CincoToysLayout from '../../../../components/layout/CincoToysLayout';

const MyNewPepPep = () => {
  const productImages = [
    "images/pages/categories/cinco/cincotoys/MyNewPepPep/PepPep.PNG",
    "images/pages/categories/cinco/cincotoys/MyNewPepPep/scent.PNG",
    "images/pages/categories/cinco/cincotoys/MyNewPepPep/food.PNG",
    "images/pages/categories/cinco/cincotoys/MyNewPepPep/candy.PNG",
    "images/pages/categories/cinco/cincotoys/MyNewPepPep/storage.PNG"
  ];

  const processSteps = [
    {
      title: "Step 1: Chair Setup",
      description: "Position My New Pep-Pep in his favorite chair (all chairs are his favorite)",
      icon: "🪑"
    },
    {
      title: "Step 2: Scent Loading",
      description: "Insert CINCO™ Old Man Flavor Packs into the rear loading port. Wait for authentic grandpa smell",
      icon: "👃"
    },
    {
      title: "Step 3: Candy Installation",
      description: "Fill hard candy dispenser with officially licensed CINCO™ Grandpa Treats",
      icon: "🍬"
    },
    {
      title: "Step 4: Sock Sitting",
      description: "Take your position on the regulation grandkid sock (included)",
      icon: "🧦"
    },
    {
      title: "Step 5: Storage",
      description: "Easily fold and store My New Pep-Pep when real relatives visit",
      icon: "📦"
    }
  ];

  const features = [
    {
      title: "Authentic Aromas",
      description: "Choose from Classic Old Spice, Mothball Medley, or Forgotten Dreams scent packs",
      icon: "💨"
    },
    {
      title: "Candy Dispensing Action",
      description: "Automatically dispenses hard candies that have been in the pocket since 1962",
      icon: "🍭"
    },
    {
      title: "Power Napping",
      description: "Enters sleep mode during TV programs and family discussions",
      icon: "😴"
    },
    {
      title: "Compact Storage",
      description: "Folds down to the size of a regular grandpa for easy concealment",
      icon: "📏"
    },
    {
      title: "War Story Generator",
      description: "Randomly combines historical events with personal anecdotes that definitely never happened",
      icon: "🎖️"
    },
    {
      title: "Weather Complaints",
      description: "Advanced arthritis simulation triggers realistic weather-based grumbling",
      icon: "🌧️"
    }
  ];

  const customerReviews = [
    {
      text: "He's better than my real Pep-Pep! This one remembers my name sometimes!",
      author: "Eric Wareheim",
      verified: true
    },
    {
      text: "The candy tastes like memories and regret. Just like real Pep-Pep's!",
      author: "Pierre",
      verified: true
    },
    {
      text: "Don't forget to empty the scent trap weekly or the child clowns will rebel.",
      author: "Mike Mahanahan",
      verified: true
    }
  ];

  const warnings = [
    "Do not attempt to update My New Pep-Pep's stories - they are factory set",
    "Some models may develop strong opinions about the government",
    "Candy dispenser may contain actual vintage candies",
    "Scent packs are non-refundable and legally binding",
    "My New Pep-Pep may occasionally mistake your friends for war buddies",
    "Keep away from real grandparents to prevent territory disputes",
    "Storage process may trigger existential questions",
    "May spontaneously offer life advice from the wrong century"
  ];

  return (
    <CincoToysLayout
      productName="CINCO™ My New Pep-Pep"
      tagline="He's Better Than Your Real Pep-Pep!"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    />
  );
};

export default MyNewPepPep;