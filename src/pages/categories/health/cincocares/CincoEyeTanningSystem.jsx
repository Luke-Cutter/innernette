import React, { useState } from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoEyeTanningSystem = () => {
  const [comments, setComments] = useState([]);

  // Product images
  const productImages = [
    "images/pages/categories/health/CincoEyeTanning/musttan.PNG",
    "images/pages/categories/health/CincoEyeTanning/screaming.PNG",
    "images/pages/categories/health/CincoEyeTanning/naturaltan.PNG"
  ];

  const processSteps = [
    {
      title: "Goggling",
      description: "Our CINCO™ Technicians put on your protective goggles",
      warning: "Only CINCO™ certified goggles may be used in this process",
      image: "images/pages/categories/health/CincoEyeTanning/goggling.PNG"
    },
    {
      title: "Lubing",
      description: "Every inch of your body (except the eye area) is lubed and coated in a tan-resistant gel",
      warning: "ALWAYS USE A CINCO™ LICENSED LUBE MAN",
      image: "images/pages/categories/health/CincoEyeTanning/lubing.PNG"
    },
    {
      title: "Teeth Removal",
      description: "Your teeth are removed. No one likes brown teeth and it's a lot easier than trying to keep your mouth closed in that tanning machine",
      warning: "Tooth reattachment sold separately",
      image: "images/pages/categories/health/CincoEyeTanning/teethremoval.PNG"
    },
    {
      title: "Gyro-Tanning",
      description: "They remove your goggles and place you in the tanning chamber. Hold on tight it's going to be the ride of your life",
      warning: "May cause severe dizziness and permanent retinal damage",
      image: "images/pages/categories/health/CincoEyeTanning/gyrotanning.PNG"
    }
  ];

  const features = [
    {
      title: "No More Raccoon Eyes",
      description: "Finally achieve that perfect all-over tan, including your sensitive eye area",
      icon: "👁️"
    },
    {
      title: "7-Day Fade",
      description: "The CINCO™ Eye Tanning System coats your entire eye area with the perfect coat of tanning that fades to a natural tan in just 7 days",
      icon: "📅"
    },
    {
      title: "Revolutionary Technology",
      description: "Patented Gyro-Tanning™ technology ensures even coverage",
      icon: "🔄"
    }
  ];

  const customerReviews = [
    {
      text: "Me, me, I'm a tan man!",
      author: "Kent",
      image: "images/pages/categories/health/CincoEyeTanning/kent.PNG",
      verified: true
    },
    {
      text: "My raccoon eyes are gone! Though I can't see through them anymore.",
      author: "Grill Vogel",
      image: "images/pages/categories/health/CincoEyeTanning/grillvogel.PNG",
      verified: true
    },
    {
      text: "Great service! Perfect if you have a child on the way!",
      author: "Jackie",
      image: "images/pages/categories/health/CincoEyeTanning/jackie.PNG",
      verified: true
    },
    {
      text: "It was the plan for me!",
      author: "Rudy",
      image: "images/pages/categories/health/CincoEyeTanning/rudy.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Make sure you request a CINCO™ licensed Lube Man for your best results",
    "CINCO™ is not responsible for permanent eye damage, vision loss, or tooth-related complications",
    "Do not attempt to reinsert teeth without CINCO™ certified dental technician",
    "Gyro-Tanning™ may cause severe vertigo, nausea, and temporary loss of spatial awareness",
    "Not recommended for pregnant women, children, or anyone who needs to see clearly"
  ];

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleScheduleAppointment = () => {
    // Handle scheduling logic
    console.log('Scheduling appointment...');
  };

  return (
    <CincoProductLayout
      productName="CINCO™ Eye Tanning System"
      tagline="A Must Tan For All Tanning Friends"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
      onAddComment={handleAddComment}
    >
      <BookAnAppointment 
        productName="CINCO™ Eye Tanning System"
        offerText="Book your Eye Tanning session today and receive a FREE tooth removal kit!"
        offerDisclaimer="Tooth reattachment services available for additional fee"
        certificationBody="Digital Department of Cosmetic Safety"
        onSchedule={handleScheduleAppointment}
      />
    </CincoProductLayout>
  );
};

export default CincoEyeTanningSystem;