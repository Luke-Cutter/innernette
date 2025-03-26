import React from 'react';
import { Headphones, Star, Film } from 'lucide-react';
import CategoryLayout from '../../../components/layout/CategoryLayout';

const EntertainmentPage = () => {
  const sections = [
    {
      title: "Music, Shows, and Shopping",
      type: "Shows",
      icon: <Headphones className="w-5 h-5" />,
      items: [
        {
          title: "Tim's Discount Prices VERSUS Eric's Premium Prices",
          link: "/TimsDiscountPricesVersusEricsPremiumPrices",
          image: "images/pages/categories/entertainment/CatPage/Prices.PNG",
          time: "Special Event",
          tags: ["Music", "Special", "CINCO™"]
        },
        {
          title: "CINCO™ Presents: Groban Sings Casey",
          link: "/GrobanSingsCasey",
          image: "images/pages/categories/entertainment/CatPage/Groban.jpg",
          time: "Special Event",
          tags: ["Music", "Special", "CINCO™"]
        },
        {
          title: "CINCO™ Presents: The Best Of James Quall",
          link: "/BestOfQuall",
          image: "images/pages/categories/entertainment/CatPage/BestOfQuall.PNG",
          time: "Over 25 Hours of Comedy!",
          tags: ["Quallity CINCO™ Product", "Comedy"]
        },
        {
          title: "Fitness Can Be E-Z with Tom Fredrickson",
          link: "/CincoFitnessEZ",
          image: "images/pages/categories/entertainment/CatPage/EZ.PNG",
          time: "Now Streaming",
          tags: ["Fitness", "Entertainment"]
        },
        {
          title: "CINCO™ Presents: The Tairy Greene Machine",
          link: "/TairyGreeneMachine",
          image: "images/pages/categories/entertainment/CatPage/TairyGreeneMachine.jpg",
          time: "Premium Content",
          tags: ["Variety", "CINCO™"]
        },
        {
          title: "Michael Ian Black: Focus on Comedy",
          link: "/FocusOnComedy",
          image: "images/pages/categories/entertainment/CatPage/FocusOnComedy.jpg",
          time: "Special Feature",
          tags: ["Comedy", "Standup"]
        },
        {
          title: "J.J. Pepper's Videography",
          link: "/JJPepper",
          image: "images/pages/categories/entertainment/JJPepper/JJ1.PNG",
          time: "PLEASE USE US!",
          tags: ["Videography", "Photographs"]
        },
        {
          title: "Beaver Boys Beaver Bounce",
          link: "/BeaverBoys",
          image: "images/pages/categories/entertainment/CatPage/BeaverBoys.PNG",
          time: "Special Event",
          tags: ["Variety", "Music"]
        },
        {
          title: "Tiny Dance Off",
          link: "/TinyDanceOff",
          image: "images/pages/categories/entertainment/CatPage/DanceOff.PNG",
          time: "Competition",
          tags: ["Dance", "Competition"]
        },
        {
          title: "Where's My Chippy?",
          link: "/WheresMyChippy",
          image: "images/pages/categories/entertainment/CatPage/Chippy.PNG",
          time: "Now Playing",
          tags: ["Variety", "Comedy"]
        },
        {
          title: "The Universe",
          link: "/TheUniverse",
          image: "images/pages/categories/entertainment/CatPage/TheUniverse.PNG",
          time: "Educational",
          tags: ["Science", "Documentary"]
        },
        {
          title: "Tiny Hats",
          link: "/TinyHats",
          image: "images/pages/categories/entertainment/CatPage/TinyHats.PNG",
          time: "Now Open Sundays!",
          tags: ["Fashion", "Style"]
        }
      ]
    },
    {
      title: "Our Top Innernette Celebrities",
      type: "celebrities",
      icon: <Star className="w-5 h-5" />,
      items: [
        {
          title: "The Awesome Life of Richard Dunn (1935-2010). Great Job!",
          link: "/DunnWithIt",
          image: "images/pages/categories/entertainment/CatPage/RichardDunn.PNG",
          time: "Tribute Special",
          tags: ["Biography", "Memorial"]
        },
        {
          title: "The Puppeting Style of David Nkrumah Liebe Unger Hart",
          link: "/DavidLiebeHart",
          image: "images/pages/categories/entertainment/CatPage/DavidLeibeHart.jpg",
          time: "Artist Profile",
          tags: ["Art", "Puppetry"]
        },
        {
          title: "Jim Boonie's Free Real Estate- JIM GET YOUR LAND",
          link: "/ItsFreeRealEstate",
          image: "images/pages/categories/entertainment/ItsFreeRealEstate/freerealestate.PNG",
          time: "Special Offer",
          tags: ["Reality", "Property"]
        }
      ]
    },
    {
      title: "The Movies of the Month (March 2008)",
      type: "Movies",
      icon: <Film className="w-5 h-5" />,
      items: [
        {
          title: "The Pillgrums: A Glenn Tennis Production",
          link: "/PillgrumsMovie",
          image: "images/pages/categories/entertainment/CatPage/PillGrum.PNG",
          duration: "120 min",
          tags: ["Drama", "History"]
        },
        {
          title: "Crystal Shyps: A Glenn Tennis Production",
          link: "/CrystalShyps",
          image: "images/pages/categories/entertainment/CatPage/CrystalShyps.PNG",
          duration: "95 min",
          tags: ["Adventure", "Fantasy"]
        },
        {
          title: "Spagett and the Quest for the Golden Treasure",
          link: "/SpagettMovie",
          image: "images/pages/categories/entertainment/CatPage/Spagett.PNG",
          duration: "115 min",
          tags: ["Adventure", "Comedy"]
        },
        {
          title: "Back to Squall Starring Jon A. Hill",
          link: "/BackToSquall",
          image: "images/pages/categories/entertainment/CatPage/BackToSquall.PNG",
          duration: "105 min",
          tags: ["Sci-fi", "Comedy"]
        },
        {
          title: "Tommy Wiseau's Pig Man",
          link: "/PigMan",
          image: "images/pages/categories/entertainment/CatPage/PigMan.PNG",
          duration: "110 min",
          tags: ["Horror", "Drama"]
        }
      ]
    }
  ];

  return (
    <div className="bg-yellow-100"style = {{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z' fill='%23ffba00' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}>
      <CategoryLayout 
        logoSrc="images/pages/categories/entertainment/CatPage/EntertaimentLogo.PNG"
        bannerSrc="/images/banners/entertainmentbanner.png"
        pageTitle="Entertainment Zone!"
        sections={sections}
      />
    </div>
  );
};

export default EntertainmentPage;