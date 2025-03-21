import React from 'react';
import CincoToysLayout from '../../../../components/layout/CincoToysLayout';

const CincoBoy = () => {
  const productImages = [
    "images/pages/categories/cinco/cincotoys/CincoBoy/Dead.PNG",
    "images/pages/categories/cinco/cincotoys/CincoBoy/Child.PNG",
    "images/pages/categories/cinco/cincotoys/CincoBoy/Gorb.PNG",
    "images/pages/categories/cinco/cincotoys/CincoBoy/CincoBoy.PNG"
  ];

  const processSteps = [
    {
      title: "😢 Step 1: Acceptance",
      description: "Accept that Greg Pitterman is still alive while your child isn't",
    },
    {
      title: "👶 Step 2: Selection",
      description: "Choose your CINCO™ Boy's starting age (ages 4-12 available)",
    },
    {
      title: "🔌 Step 3: Activation",
      description: "Simply plug in your CINCO™ Boy and wait for the bonding process to begin",
    },
    {
      title: "📦 Step 4: Aging Program",
      description: "Set up automatic delivery of Older CINCO™ Boys (monthly or quarterly plans available)",
    },
    {
      title: "💾 Step 5: Memory Transfer",
      description: "Upload your original son's memories (sold separately)",
    }
  ];

  const features = [
    {
      title: "Synthetic Emotions",
      description: "Includes basic love protocols and pre-programmed childhood trauma",
      icon: "❤️"
    },
    {
      title: "Voice Matching",
      description: "Can be programmed to match your original son's voice (recordings required)",
      icon: "🎤"
    },
    {
      title: "Memory Bank",
      description: "Store up to 12 years of artificial memories (expandable with CINCO™ Memory Plus)",
      icon: "🧠"
    }
  ];

  const customerReviews = [
    {
      text: "He's better than my original son! This one actually responds to my Business Hugs!",
      author: "Grill Vogel",
      verified: true
    },
    {
      text: "Great product! Wayne won't give me a child so this is my next best bet.",
      author: "Jan Skylar",
      verified: true
    },
    {
      text: "For your health: Make sure to oil your CINCO™ Boy's joints daily!",
      author: "Dr. Steven Brule",
      verified: true
    },
    {
      text: "Ya blew it. Should've made CINCO™ Girl model.",
      author: "Carol Krabit",
      verified: true
    }
  ];

  const warnings = [
    "Memory transfer process is irreversible and may cause original memories to fade",
    "Do not attempt to keep multiple age versions of CINCO™ Boy simultaneously",
    "CINCO™ Boy may develop unexpected hobbies like taxidermy or ventriloquism",
    "Some CINCO™ Boys may become self-aware of their replacement status",
    "Keep away from original son's belongings to prevent identity crisis",
    "Synthetic love protocols may malfunction during teenage years"
  ];

  return (
    <CincoToysLayout
      productName="CINCO™ Boy Synthetic Child"
      tagline="Because Greg Pitterman Still Lives"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    />
  );
};

export default CincoBoy;