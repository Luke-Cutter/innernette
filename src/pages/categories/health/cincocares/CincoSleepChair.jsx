import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoSleepChair = () => {
  const productImages = [
    "images/pages/categories/cinco/cincoproducts/CincoSleepChair/chair.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoSleepChair/lens.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoSleepChair/electrodes.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoSleepChair/toilet.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoSleepChair/watching.PNG"
  ];

  const processSteps = [
    {
      title: "Watcher Setup",
      description: "Position chair at optimal friend-watching distance (3-5 feet recommended)",
      warning: "Maintain eye contact even when friend is unconscious",
      image: "images/pages/categories/cinco/cincoproducts/CincoSleepChair/setup.PNG"
    },
    {
      title: "Zoom Enhancement",
      description: "Adjust sleep watcher zoom lens for maximum dream detail observation",
      warning: "Some dreams may be too private for zoom levels",
      image: "images/pages/categories/cinco/cincoproducts/CincoSleepChair/zoom.PNG"
    },
    {
      title: "Dream Documentation",
      description: "Record detailed hypotheses about friend's dreams in provided Dreamer's Book",
      warning: "Dream interpretations may not reflect actual friend thoughts",
      image: "images/pages/categories/cinco/cincoproducts/CincoSleepChair/documentation.PNG"
    },
    {
      title: "Bear Prevention",
      description: "Activate nightmare prevention tone at first sign of bear-related dreams",
      warning: "Other animal nightmares not covered",
      image: "images/pages/categories/cinco/cincoproducts/CincoSleepChair/prevention.PNG"
    }
  ];

  const features = [
    {
      title: "Sleep Watcher Zoom Lens",
      description: "Military-grade optics for enhanced sleep observation",
      icon: "🔍"
    },
    {
      title: "Dreamer's Book",
      description: "Premium dream speculation journal with water-resistant pages",
      icon: "📖"
    },
    {
      title: "Electroshock System",
      description: "Self-administered consciousness maintenance system",
      icon: "⚡"
    },
    {
      title: "Integrated Toilet Hole",
      description: "Never miss a moment of friend sleep with convenient waste management",
      icon: "🚽"
    },
    {
      title: "Bear Protection",
      description: "Specialized tone system prevents ursine dream encounters",
      icon: "🐻"
    }
  ];

  const customerReviews = [
    {
      text: "Thanks for the great show last night buddy!",
      author: "Professional Watcher",
      image: "images/pages/categories/cinco/cincoproducts/CincoSleepChair/watcher.PNG",
      verified: true
    },
    {
      text: "The bear's gonna take a bite out of me! ...oh, thanks for the wake-up",
      author: "Protected Sleeper",
      image: "images/pages/categories/cinco/cincoproducts/CincoSleepChair/sleeper.PNG",
      verified: true
    },
    {
      text: "Electroshock keeps me alert for all 8 hours!",
      author: "Dedicated Observer",
      image: "images/pages/categories/cinco/cincoproducts/CincoSleepChair/observer.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Friend consent recommended but optional",
    "Electric shock intensity increases with use",
    "Dream book entries may be used as legal evidence",
    "Bear protection limited to dream realm only",
    "Toilet hole requires weekly maintenance",
    "Zoom lens may reveal more than intended",
    "Some friendships may not survive observation",
    "Hot friends may be distracting",
    "Troubles City residents not eligible"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Sleep Watching Chair"
      tagline="Finally Watch Your Friends Sleep In Comfort"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Sleep Watching Chair"
        offerTitle="Friendship Enhancement Package!"
        offerText="Order now and receive a complimentary night vision upgrade!"
        offerDisclaimer="CINCO™ not responsible for lost friendships or dream-related revelations"
        buttonText="Start Your Sleep Watching Journey"
        certificationBody="Department of Nocturnal Observation"
      />
    </CincoProductLayout>
  );
};

export default CincoSleepChair;