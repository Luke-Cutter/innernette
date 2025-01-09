import React from 'react';
import CincoToysLayout from '../../../../components/layout/CincoToysLayout';

const CincoBowl = () => {
    const productImages = [
        "images/pages/categories/cinco/cincotoys/CincoBowl/Bowllogo.PNG", 
        "images/pages/categories/cinco/cincotoys/CincoBowl/Boys.PNG", 
        "images/pages/categories/cinco/cincotoys/CincoBowl/Girls.PNG", 
      ];

  const processSteps = [
    {
      title: "Step 1: Acquire B'owl",
      description: "Purchase your B'owl from authorized CINCO™ retailers or find one in unexpected locations",
      icon: "🦉"
    },
    {
      title: "Step 2: Choose Location",
      description: "Place B'owl in special room, basement, boat, catamaran, cove, or auto trunk",
      icon: "🏠"
    },
    {
      title: "Step 3: Customize",
      description: "Paint lips, add jean jacket, or accessorize with sunglasses (sold separately)",
      icon: "🎨"
    },
    {
      title: "Step 4: Observe",
      description: "Watch as B'owl potentially relocates itself to new approved locations",
      icon: "👀"
    },
    {
      title: "Step 5: Share Joy",
      description: "Perfect gift for Pep-Pep, Nanna, or almost anyone!",
      icon: "🎁"
    }
  ];

  const features = [
    {
      title: "Self-Relocating",
      description: "May appear in pre-approved locations",
      icon: "🚶"
    },
    {
      title: "Customizable",
      description: "Paint, dress, and style as desired",
      icon: "✨"
    },
    {
      title: "Multi-Purpose",
      description: "Perfect for everything, including throwing away!",
      icon: "🎯"
    }
  ];

  const customerReviews = [
    {
      text: "[Unintelligible Screaming]",
      image: "/images/pages/categories/cinco/cincotoys/cincobowl/chippy.png",
      author: "Chippy",
      verified: true
    },
    {
      text: "Found my B'owl in my basement trying to do a Dudley Dip. I distinctly remember throwing it into the ocean last week.",
      author: "Pat Dudley",
      verified: true
    },
    {
      text: "Perfect gift for anyone who overdosed on Waitmate. Great prank to see them remember they forgot where they put the dang thing.",
      author: "Zan",
      verified: true
    },
    {
      text: "I put my B'owl in a hole and when I turned around it was gone. Not quite sure who to tell this to.",
      author: "K.J. Nutt",
      verified: true
    }
];

  const warnings = [
    "B'owl may relocate without notice",
    "Do not question B'owl's movements",
    "Keep B'owl away from unauthorized locations",
    "B'owl staring contests may result in existential dread",
    "Sunglasses must be purchased separately",
    "Not responsible for pet behavior changes",
    "If B'owl appears in non-approved location, contact CINCO™ immediately",
    "Do not attempt to prevent B'owl relocation",
    "Perfect for throwing away (recovery rate: 100%)",
    "May cause disapproving stares through sick sunglasses"
  ];

  return (
    <CincoToysLayout
      productName="CINCO™ B'owl"
      tagline="They Got A Bat, Got An Owl And It Turned Into A B'owl!"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    />
  );
};

export default CincoBowl;