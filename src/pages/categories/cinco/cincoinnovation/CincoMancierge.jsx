import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoMancierge = () => {

  const productImages = [
    "images/pages/categories/cinco/CincoMancierge/manciergedevice.PNG", // Device
    "images/pages/categories/cinco/CincoMancierge/manciergeinuse.PNG", // Mancierge in Use
    "images/pages/categories/cinco/CincoMancierge/operator.PNG", // Fred Willard at his Desk
  ];

  const processSteps = [
    {
      title: "Power On",
      description: "Press and hold the large CINCO™ button for 3-5 business days to initialize your Mancierge™",
      warning: "Do not attempt to use device while Fred is on lunch break",
      image: "images/pages/categories/cinco/CincoMancierge/poweron.PNG"
    },
    {
      title: "Ask Question",
      description: "Clearly state your request into the Mancierge™ For best results, ask about steak locations in Denver.",
      image: "images/pages/categories/cinco/CincoMancierge/askquestion.PNG"
    },
    {
      title: "Receive Answer",
      description: "Fred will personally answer your question while simultaneously handling hundreds of other inquiries from Mancierge™ users worldwide flawlessly.",
      image: "images/pages/categories/cinco/CincoMancierge/receiveanswer.PNG"
    },
    {
      title: "Try Again",
      description: "If you receive incorrect directions or hear screaming, simply ask your question again. Fred is doing his best.",
      warning: "Success rate quintuples if you're actually looking for steak in Denver",
      image: "images/pages/categories/cinco/CincoMancierge/tryagain.PNG"
    }
  ];

  const features = [
    {
      title: "Personal Touch",
      description: "Every single Mancierge™ query is handled personally by Fred or Josh, our lone operators",
      icon: "👨‍💼"
    },
    {
      title: "Global Coverage",
      description: "Fred knows (approximately) where things are in most major cities, but not Denver",
      icon: "🌎"
    },
    {
      title: "Multi-tasking Excellence",
      description: "Watch in amazement as Fred handles your request while simultaneously helping someone else find a dry cleaner",
      icon: "📞"
    },
  ];

  const customerReviews = [
    {
        text: "I could hear the sound of dozens of phones ringing in the background. Very authentic experience. Almost missed my flight.",
        image: 'images/pages/categories/cinco/CincoMancierge/paulscolleague.PNG',
        author: "Paul's Colleague",
        verified: true
    },
    {
        text: "I was at the CINCO™ Regional Sales Associates convention in Denver and I asked the Mancierge™ for pizza, I got directions for steak.",
        image: 'images/pages/categories/cinco/CincoMancierge/paul.PNG',
        author: "Paul",
        verified: true
    },
    {
      text: "Asked for directions to the nearest hospital, got the address to a Pizza Hut in Denver. I live in Florida. 5 stars!",
      author: "Dave Johnson",
      verified: true
    },
    {
      text: "Fred somehow helped me find my missing dog while giving someone else directions to Milwaukee. Amazing multitasking!",
      author: "Sarah Miller",
      verified: true
    },
  ];

  const warnings = [
    "CINCO™ is not responsible for any misdirections, pizza-related mishaps, or emotional distress caused by Fred's multitasking",
    "Service may be interrupted during Fred's designated lunch break or when he needs to use the bathroom",
    "Device may occasionally pick up cross-talk from other Mancierge™ users' emergencies",
    "Accuracy of directions decreases exponentially with each additional active user",
    "If you hear crying, please be patient - Fred is only human"
  ];


  return (
    <CincoProductLayout
      productName="CINCO™ Mancierge™"
      tagline="Your Personal Assistant (It's Just Fred)"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Mancierge™"
        offerTitle="Special Limited Time Offer!"
        offerText="Order now and receive a complimentary map of all Boston Market locations in Tulsa!"
        offerDisclaimer="Map accuracy not guaranteed. Fred drew it from memory"
        buttonText="Connect with Fred"
        certificationBody="Bureau of Personal Navigation Solutions"
      />
    </CincoProductLayout>
  );
};

export default CincoMancierge;