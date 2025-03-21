import React from 'react';
import CincoFashionLayout from '../../../../components/layout/CincoFashionLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoThocks = () => {
  const productImages = [
    "images/pages/categories/cinco/cincolifestyle/CincoThocks/ThocksLogo.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoThocks/Golfing.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoThocks/ClassicWhite.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoThocks/KneeJeweled.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoThocks/Survival.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoThocks/TuxedoFormal.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoThocks/WorkoutThockettes.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoThocks/Fisherman.PNG"
  ];

  const styleGuide = [
    {
      title: "Foot Preparation",
      description: "Soak feet in CINCO™ Thock-Ready™ solution for 48 hours to achieve maximum sensuality",
      warning: "May cause temporary foot enlightenment",
      image: "images/pages/categories/cinco/cincolifestyle/CincoThocks/ClassicWhite.PNG"
    },
    {
      title: "Thock Application",
      description: "Apply Thocks using the patented CINCO™ Sock Wedgie System™ for optimal riding height",
      warning: "If Thocks don't ride high enough, consult your Thock technician",
      image: "images/pages/categories/cinco/cincolifestyle/CincoThocks/Survival.PNG"
    },
    {
      title: "Confidence Building",
      description: "Practice your Thock strut in front of a mirror for at least 3 hours before intimate encounters",
      warning: "Over-confidence may result in horrendous golf course performance",
      image: "images/pages/categories/cinco/cincolifestyle/CincoThocks/TuxedoFormal.PNG"
    }
  ];

  const features = [
    {
      title: "Classic White",
      description: "The gateway Thock. Perfect for business meetings and awkward family dinners",
      icon: "🧦"
    },
    {
      title: "Knee Jeweled",
      description: "Because nothing says 'I mean business' like rhinestones on your calves",
      icon: "💎"
    },
    {
      title: "Survival Thock",
      description: "With lace-up heel and emergency coin pouch. Be prepared for anything, seductively",
      icon: "🏕️"
    },
    {
      title: "Workout Cutoff Thocketts",
      description: "Show off those ankles at the gym. Warning: May cause excessive spotting requests",
      icon: "💪"
    },
    {
      title: "Tuxedo Formal",
      description: "Cummerbund-inspired elegance for your feet. Black tie optional, Thocks mandatory",
      icon: "🎩"
    },
    {
      title: "Fisherman's Net",
      description: "The ultimate in nautical seduction. Includes authentic sea salt residue",
      icon: "🎣"
    }
  ];

  const customerReviews = [
    {
      text: "My wife used to reject me because of my boring socks. Now she rejects me because of my Thocks!",
      author: "Michael",
      image: "images/pages/categories/cinco/cincolifestyle/CincoThocks/Michael.PNG",
      verified: true
    },
    {
      text: "Oh god. What have I done?",
      author: "Michael's Wife",
      image: "images/pages/categories/cinco/cincolifestyle/CincoThocks/MichaelsWife.PNG",
      verified: true
    }
  ];

  const warnings = [
    "May cause excessive confidence in golf-related situations",
    "Fisherman's Neck Thocks not responsible for actual fish attraction",
    "Thocks must be worn at maximum ride height for optimal results",
    "Side effects may include spontaneous leg modeling and sock-based marriage counseling",
    "Coin pouch capacity limited to 73 cents exactly",
    "Rhinestones may detach during intense business meetings",
    "Not compatible with regular human dignity"
  ];

  return (
    <CincoFashionLayout
      productName="CINCO™ Thocks System"
      tagline="Because Your Feet Deserve To Be Sexy Too"
      productImages={productImages}
      styleGuide={styleGuide}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Thocks"
        offerTitle="Special Sensual Sock Offer!"
        offerText="Buy five pairs of Thocks, get one free marriage counseling session!"
        offerDisclaimer="CINCO™ is not responsible for any changes in marital status post-Thock adoption"
        buttonText="Unleash Your Inner Sock Appeal"
        certificationBody="Bureau of Intimate Hosiery Affairs"
      />
    </CincoFashionLayout>
  );
};

export default CincoThocks;