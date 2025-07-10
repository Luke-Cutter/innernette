import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoSleepChair = () => {
  const productImages = [
    "images/pages/categories/health/CincoSleepChair/SWCLogo.PNG",
    "images/pages/categories/health/CincoSleepChair/sleepwatching.PNG",
    "images/pages/categories/health/CincoSleepChair/DreamersBook.PNG",
    "images/pages/categories/health/CincoSleepChair/ToiletHole.PNG",
    "images/pages/categories/health/CincoSleepChair/CincoHelpsYouWatch.PNG"
  ];

  const processSteps = [
    {
      title: "Watcher Setup",
      description: "Position chair at optimal friend-watching distance (3-5 feet recommended)",
      warning: "Maintain eye contact even when friend is unconscious",
      image: "images/pages/categories/health/CincoSleepChair/CincOM.PNG"
    },
    {
      title: "Zoom Enhancement",
      description: "Adjust sleep watcher zoom lens for maximum dream detail observation",
      warning: "Some dreams may be too private for zoom levels",
      image: "images/pages/categories/health/CincoSleepChair/2xzoom.PNG"
    },
    {
      title: "Dream Documentation",
      description: "Record detailed hypotheses about friend's dreams in provided Dreamer's Book",
      warning: "Dream interpretations may not reflect actual friend thoughts",
      image: "images/pages/categories/health/CincoSleepChair/Bear.PNG"
    },
    {
      title: "Bear Prevention",
      description: "Activate nightmare prevention tone at first sign of bear-related dreams",
      warning: "Other animal nightmares not covered",
      image: "images/pages/categories/health/CincoSleepChair/FliptheSwitch.PNG"
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
    }
  ];

  const customerReviews = [
    {
      text: "Thanks for the great show last night buddy!",
      author: "Professional Watcher",
      image: "images/pages/categories/health/CincoSleepChair/Watcher.PNG",
      verified: true
    },
    {
      text: "The bear's gonna take a bite out of me! ...oh, thanks for the wake-up",
      author: "Protected Sleeper",
      image: "images/pages/categories/health/CincoSleepChair/prish.jpg",
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
    "Brown Town residents not eligible"
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