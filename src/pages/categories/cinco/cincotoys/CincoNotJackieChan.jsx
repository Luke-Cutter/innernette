import React from 'react';
import CincoToysLayout from '../../../../components/layout/CincoToysLayout';

const CincoNotJackieChan = () => {
  const productImages = [
    "images/pages/categories/cinco/cincotoys/NotJackieChan/Chan1.PNG",
    "images/pages/categories/cinco/cincotoys/NotJackieChan/Chan2.PNG",
    "images/pages/categories/cinco/cincotoys/NotJackieChan/Chan3.PNG",
    "images/pages/categories/cinco/cincotoys/NotJackieChan/Chan4.PNG",
  ];

  const processSteps = [
    {
      title: "🔊 Step 1: Setup",
      description: "Place the Punishment Buzzer within reach of all players. Volume cannot be adjusted.",
    },
    {
      title: "📋 Step 2: Category Selection",
      description: "Choose from categories like 'Arts & Entertainment', 'Things That Exist', and 'Anything At All'",
    },
    {
      title: "⏱️ Step 3: Speed Round",
      description: "Players must quickly name 10 things that aren't Jackie Chan while staring directly at their opponents",
    },
    {
      title: "😰 Step 4: Panic Phase",
      description: "Watch as players struggle to think of literally anything else in existence",
    },
    {
      title: "🚨 Step 5: Buzzer Time",
      description: "Hold down buzzer for maximum discomfort when someone inevitably says the forbidden name",
    }
  ];

  const features = [
    {
      title: "Industrial Grade Buzzer",
      description: "Scientifically calibrated to the most uncomfortable frequency possible",
      icon: "📢"
    },
    {
      title: "Tension Timer",
      description: "Watch the panic set in as players realize how many things actually aren't Jackie Chan",
      icon: "⌛"
    },
    {
      title: "Punishment Mode",
      description: "Special round where players must name things while looking at photos of things that aren't Jackie Chan",
      icon: "😱"
    }
  ];

  const customerReviews = [
    {
      text: "I haven't slept in days. Everything reminds me of things that aren't Jackie Chan.",
      author: "Dr. Steve Brule",
      verified: true
    },
    {
      text: "TOOTHPASTE! PIZZA! LAMPS! ...oh no.",
      author: "Casey Tatum",
      verified: true
    },
    {
      text: "Great for creative meetings! Everyone's too traumatized to talk afterward!",
      author: "Tim Heidecker",
      verified: true
    },
    {
      text: "Happy 100 years Chan!",
      author: "Billy Crystals",
      verified: true
    },
  ];

  const warnings = [
    "Buzzer volume cannot be lowered - this is intentional",
    "CINCO™ not responsible for inability to think of things that aren't Jackie Chan",
    "Players may experience temporary inability to name any objects",
    "Extended play may cause players to question existence itself",
    "Some players may develop fear of categorical thinking",
    "Winners must still live with their memories",
    "Game pieces may appear in stress dreams",
    "May cause spontaneous list-making of non-Jackie Chan items",
    "No refunds if you say the forbidden name"
  ];

  return (
    <CincoToysLayout
      productName="It's Not Jackie Chan"
      tagline="Name Literally Anything Else"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    />
  );
};

export default CincoNotJackieChan;