import React from 'react';
import { Star, Film, Clock } from 'lucide-react';
import CategoryLayout from '../../../components/layout/CategoryLayout';

const Channel5NewsPage = () => {
  const sections = [
    {
      title: "Channel 5 Daytime Originals",
      type: "Daytime",
      icon: <Clock className="w-5 h-5" />,
      items: [
        {
          title: "Jan and Wayne's Married News",
          link: "/Channel5News",
          image: "images/pages/categories/channel5andfriends/CatPage/JanandWayne.PNG",
          time: "9:00 AM",
          tags: ["News", "Comedy"]
        },
        {
          title: "Check It Out! With Dr. Steve Brule",
          link: "/CheckItOut",
          image: "images/pages/categories/channel5andfriends/CatPage/CheckItOut.PNG",
          time: "10:00 AM",
          tags: ["Comedy", "Educational"]
        },
        {
          title: "Kid Break",
          link: "/KidBreak",
          image: "images/pages/categories/channel5andfriends/CatPage/KidBreak.jpg",
          time: "11:00 AM",
          tags: ["Children", "Educational"]
        },
        {
          title: "Channel 5 Child Showcase",
          link: "/ChildShowcase",
          image: "images/pages/categories/channel5andfriends/CatPage/ChildShowcase.PNG",
          time: "12:00 PM",
          tags: ["Children", "Variety"]
        },
        {
          title: "Feminine Perspectives",
          link: "/FemininePerspectives",
          image: "images/pages/categories/channel5andfriends/CatPage/FemininePerspectives.PNG",
          time: "1:00 PM",
          tags: ["Talk Show", "Lifestyle"]
        },
        {
          title: "Nights with Tim Heidecker",
          link: "/NightsWithTim",
          image: "images/pages/categories/channel5andfriends/CatPage/NightsWithTim.PNG",
          time: "12:00 AM",
          tags: ["Comedy"]
        },
        {
          title: "Afternoon Review: For Women!",
          link: "/AfternoonReview",
          image: "images/pages/categories/channel5andfriends/CatPage/AfternoonReview.PNG",
          time: "3:00 PM",
          tags: ["Talk Show", "Lifestyle"]
        },
        {
          title: "Quall Of Duty: San Diego Streets",
          link: "/QuallOfDuty",
          image: "images/pages/categories/channel5andfriends/CatPage/QuallofDuty.png",
          time: "6:00 PM",
          tags: ["Police"]
        },
        {
          title: "Uncle Muscles Variety Hour",
          link: "/UncleMusclesHour",
          image: "images/pages/categories/channel5andfriends/CatPage/UncleMuscles.PNG",
          time: "5:00 PM",
          tags: ["Variety", "Comedy"]
        },
        {
          title: "The New You",
          link: "/TheNewYou",
          image: "images/pages/categories/channel5andfriends/CatPage/TheNewYou.PNG",
          time: "6:30 PM",
          tags: ["Lifestyle"]
        },
        {
          title: "Quallstions With Quall",
          link: "/Quallstions",
          image: "images/pages/categories/channel5andfriends/CatPage/Quallstions.PNG",
          time: "7:00 PM",
          tags: ["Talk Show"]
        }
      ]
    },
    {
      title: "Late Night & Special Reports",
      type: "Late Night",
      icon: <Star className="w-5 h-5" />,
      items: [
        {
          title: "Hobby Holes with K.J. Nutt",
          link: "/HobbyHoles",
          image: "images/pages/categories/channel5andfriends/CatPage/HobbyHoles.PNG",
          time: "8:00 PM",
          tags: ["Hobby", "Educational"]
        },
        {
          title: "C.O.R.B.S",
          link: "/CORBS",
          image: "images/pages/categories/channel5andfriends/CatPage/CORBS.PNG",
          time: "9:00 PM",
          tags: ["Variety"]
        },
        {
          title: "Trick My Trick",
          link: "/TrickMyTrick",
          image: "images/pages/categories/channel5andfriends/CatPage/TrickMyTrick.PNG",
          time: "10:00 PM",
          tags: ["Reality"]
        },
        {
          title: "Whoopsie Daisy",
          link: "/WhoopsieDaisy",
          image: "images/pages/categories/channel5andfriends/CatPage/WhoopsieDaisy.PNG",
          time: "11:00 PM",
          tags: ["Comedy"]
        },
        {
          title: "Quilting & Fortin' With Will",
          link: "/WithWill",
          image: "images/pages/categories/channel5andfriends/CatPage/QuiltingWithWill.PNG",
          time: "12:00 AM",
          tags: ["Hobby", "Lifestyle"]
        },
        {
          title: "The Zone With Jim and Derrick",
          link: "/JimandDerrick",
          image: "images/pages/categories/channel5andfriends/CatPage/JimandDerrick.PNG",
          time: "1:00 AM",
          tags: ["Variety", "Comedy"]
        },
        {
          title: "Spooked By Spagett",
          link: "/SpookedBySpagett",
          image: "images/pages/categories/channel5andfriends/CatPage/Spagett.PNG",
          time: "2:00 AM",
          tags: ["Reality", "Comedy"]
        },
        {
          title: "Coming Soon: Amateur Pipes",
          link: "/AmateurPipes",
          image: "images/pages/categories/channel5andfriends/CatPage/AmateurPipes.PNG",
          time: "3:00 AM",
          tags: ["Coming Soon", "Special"]
        },
        {
          title: "Channel 5 Jazz Sessions",
          link: "/JazzSessions",
          image: "images/pages/categories/channel5andfriends/CatPage/JazzSessions.PNG",
          time: "4:00 AM",
          tags: ["Music", "Live"]
        },
        {
          title: "Stark on Stark",
          link: "/StarkonStark",
          image: "images/pages/categories/channel5andfriends/CatPage/StarkOnStark.PNG",
          time: "5:00 AM",
          tags: ["Talk Show", "Interview"]
        },
        {
          title: "Celebrity Zillions",
          link: "/CelebrityZillions",
          image: "images/pages/categories/channel5andfriends/CatPage/CelebrityZillions.PNG",
          time: "6:00 AM",
          tags: ["Game Show", "Celebrity"]
        }
      ]
    },
    {
      title: "Channel 5 Movies and More!",
      type: "Movies",
      icon: <Film className="w-5 h-5" />,
      items: [
        {
          title: "Quall, The James Quall Story",
          link: "/TheJamesQuallStory",
          image: "images/pages/categories/channel5andfriends/CatPage/Quall.PNG",
          duration: "150 min",
          tags: ["Biography", "Drama"]
        },
        {
          title: "The Snuggler",
          link: "/TheSnuggler",
          image: "images/pages/categories/channel5andfriends/CatPage/Snuggler.PNG",
          duration: "95 min",
          tags: ["Action", "Comedy"]
        },
        {
          title: "Muscles For Bones Live Telethon",
          link: "/MusclesForBones",
          image: "images/pages/categories/channel5andfriends/CatPage/MusclesForBones.PNG",
          duration: "180 min",
          tags: ["Special", "Variety"]
        }
      ]
    }
  ];

  return (
    <div className = "bg-red-200">
    <CategoryLayout 
      logoSrc="images/pages/categories/channel5andfriends/Channel5News/channel5logo.png"
      bannerSrc="/images/banners/channel5banner.png"
      pageTitle="Channel 5 & Friends"
      sections={sections}
    />
    </div>
  );
};

export default Channel5NewsPage;