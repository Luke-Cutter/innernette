import React from 'react';
import { Heart, AlertTriangle, UtensilsCrossed } from 'lucide-react';
import CategoryLayout from '../../../components/layout/CategoryLayout';

const HealthPage = () => {
  const sections = [
    {
      title: "CINCO™ Food",
      type: "Food",
      icon: <UtensilsCrossed className="w-5 h-5" />,
      items: [
        {
          title: "CINCO™ Food Tube",
          link: "/CincoFoodTube",
          image: "images/pages/categories/health/CatPage/FoodTube.PNG",
          time: "Nutrition",
          tags: ["CINCO™", "Feeding"]
        },
        {
          title: "CINCO™ Griddleman",
          link: "/CincoGriddleman",
          image: "images/pages/categories/health/CatPage/Griddleman.PNG",
          time: "Kitchen",
          tags: ["CINCO™", "Cooking"]
        },
        {
          title: "CINCO™ Cigarette Juice",
          link: "/CincoCigaretteJuice",
          image: "images/pages/categories/health/CatPage/CigaretteJuice.PNG",
          time: "Beverage",
          tags: ["CINCO™", "Drinks"]
        },
        {
          title: "Turbo Fuel Maximum Energy Soda",
          link: "/CincoTurboFuel",
          image: "images/pages/categories/health/CatPage/TurboFuel.PNG",
          time: "Energy Drink",
          tags: ["CINCO™", "Drinks"]
        },
        {
          title: "CINCO™ Pasta Bear",
          link: "/CincoPastaBear",
          image: "images/pages/categories/health/CatPage/PastaBear.PNG",
          time: "Food",
          tags: ["CINCO™", "Pasta"]
        },
        {
          title: "CINCO™ MyEggs",
          link: "/CincoMyEggs",
          image: "images/pages/categories/health/CatPage/MyEggs.PNG",
          time: "Food",
          tags: ["CINCO™", "Breakfast"]
        },
        {
          title: "CINCO™ H'amb",
          link: "/CincoHamb",
          image: "images/pages/categories/health/CatPage/Hamb.PNG",
          time: "Food",
          tags: ["CINCO™", "Meat"]
        },
        {
          title: "CINCO™ Candy Tails",
          link: "/CincoCandyTails",
          image: "images/pages/categories/health/CatPage/CandyTails.PNG",
          time: "Snacks",
          tags: ["CINCO™", "Candy"]
        },
        {
          title: "CINCO™ Napple",
          link: "/CincoNapple",
          image: "images/pages/categories/health/CatPage/CincoNapple.PNG",
          time: "Me Sleepy",
          tags: ["CINCO™", "Fruit"]
        }
      ]
    },
    {
      title: "Health Tips, Shows, and Resources",
      type: "tips",
      icon: <Heart className="w-5 h-5" />,
      items: [
        {
          title: "Tragg's Trough",
          link: "/TraggsTrough",
          image: "images/pages/categories/health/CatPage/TraggsTrough.PNG",
          time: "Wellness Special",
          tags: ["Diet", "Lifestyle"]
        },
        {
          title: "CINCO™ Sales: Business Hugs with Grill Vogel",
          link: "/CincoBusinessHugs",
          image: "images/pages/categories/health/CatPage/GrillVogel.PNG",
          time: "Wellness Guide",
          tags: ["Business", "Mental Health"]
        },
        {
          title: "Channel 5 Presents: Cleaning Up After Your Cat with Maria Bamford",
          link: "/CleaningAfterCat",
          image: "images/pages/categories/health/CatPage/Cats.PNG",
          time: "Pet Health",
          tags: ["Pets", "Hygiene"]
        }
      ]
    },
    {
      title: "CINCO™ Cares",
      type: "Care",
      icon: <AlertTriangle className="w-5 h-5" />,
      items: [
        {
          title: "CINCO™ Balls Insurance",
          link: "/CincoBallsInsurance",
          image: "images/pages/categories/health/CatPage/Insurance.PNG",
          time: "Insurance Plan",
          tags: ["CINCO™", "Protection"]
        },
        {
          title: "CINCO™ Eye Tanning System",
          link: "/CincoEyeTanningSystem",
          image: "images/pages/categories/health/CatPage/eyetanning.jpg",
          time: "Vision Care",
          tags: ["CINCO™", "Eyes"]
        },
        {
          title: "CINCO™ Face Time Party Snoozer",
          link: "/CincoFaceTimePartySnoozer",
          image: "images/pages/categories/health/CatPage/partysnoozer.jpg",
          time: "Sleep Aid",
          tags: ["CINCO™", "Rest"]
        },
        {
          title: "CINCO™ Fahrtz Poop Tube",
          link: "/CincoPoopTube",
          image: "images/pages/categories/health/CatPage/PoopTube.PNG",
          time: "Medical Device",
          tags: ["CINCO™", "Digestive"]
        },
        {
          title: "CINCO™ Sleep Watching Chair",
          link: "/CincoSleepChair",
          image: "images/pages/categories/health/CatPage/sleepwatching.jpg",
          time: "Sleep Aid",
          tags: ["CINCO™", "Furniture"]
        },
        {
          title: "CINCO™ Urinal Shower",
          link: "/CincoUrinalShower",
          image: "images/pages/categories/health/CatPage/urinalshower.jpg",
          time: "Hygiene",
          tags: ["CINCO™", "Bathroom"]
        },
        {
          title: "CINCO™ D-Pants",
          link: "/CincoDPants",
          image: "images/pages/categories/health/CatPage/DPants.PNG",
          time: "Protection Wear",
          tags: ["CINCO™", "Clothing"]
        },
        {
          title: "CINCO™ Dream Cream",
          link: "/CincoDreamCream",
          image: "images/pages/categories/health/CatPage/DreamCream.PNG",
          time: "Sleep Aid",
          tags: ["CINCO™", "Cream"]
        },
        {
          title: "CINCO™ E-Z Kreme",
          link: "/CincoEZKreme",
          image: "images/pages/categories/health/CatPage/EZKreme.PNG",
          time: "Topical",
          tags: ["CINCO™", "Cream"]
        },
        {
          title: "CINCO™ Patrick Duffy's Man-Nip",
          link: "/CincoManNip",
          image: "images/pages/categories/health/CatPage/ManNip.jpg",
          time: "Supplement",
          tags: ["CINCO™", "Celebrity"]
        },
        {
          title: "CINCO™ WaitMate",
          link: "/CincoWaitmate",
          image: "images/pages/categories/health/CatPage/Waitmate.PNG",
          time: "Time Management",
          tags: ["CINCO™", "Productivity"]
        },
        {
          title: "Dr. Reid Tamaranda's Bone Press",
          link: "/CincoBoneCreation",
          image: "images/pages/categories/health/CatPage/DrTamaranda.PNG",
          time: "Medical Advice",
          tags: ["Bones", "Therapy"]
        }
      ]
    }
  ];

  return (
    <div className="bg-green-100">
      <CategoryLayout 
        logoSrc="images/pages/categories/health/CatPage/healthlogo.png"
        bannerSrc="/images/banners/healthbanner.png"
        pageTitle="For Your Health! Sponsored by CINCO Dairy™"
        sections={sections}
      />
    </div>
  );
};

export default HealthPage;