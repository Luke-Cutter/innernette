import React from 'react';
import Channel5MoviesLayout from '../../../components/layout/Channel5MoviesLayout';

const TheJamesQuallStory = () => {
  const cast = [
    {
      name: "Bill Hader",
      role: "James Quall",
      image: "images/pages/categories/channel5andfriends/Channel5Movies/BillHader.PNG",
      note: " Master of Impersonation"
    },
    {
      name: "David Leibe Hart",
      role: "David Leibe Hart",
      image: "images/pages/categories/channel5andfriends/Channel5Movies/DavidLeibeHart.png",
      note: " Amazing as Himself"
    }
  ];

  const showTimes = {
    primetime: "10:15 PM",
    latenight: "4:25 AM",
    weekend: "Saturday & Sunday 1:00 AM",
    timezone: "EST",
    note: "Our most watched movie, make sure to catch this amazing story!"
  };

  const synopsis = `In this tantalizing true story, we follow James Quall through the good times and the bad. We see his early years and his meteroric rise to international fame and fortune. Watch his impressions shine through Bill Hader and experience his budding friendship with David Leibe Hart`;

  const movieTrivia = [
    "Filmed shot for shot with the original James Quall but the movie was scrapped due to poor ratings",
    "The infamous explosion scene was so powerful that it blew off Bill Haders foot",
    "Features a cameo from Pierre of Channel 5 childrens programming fame",
    "The movie started as a biographical picture following the comedian Bob Hope, but Channel 5 could not get the rights",
    "Over 93 Spaghetti and Meatball songs in this film, with a special rendition of Beach Blast"
  ];

  const rating = {
    score: "4.3/5 Chonus",
    warning: "A deep dive into the dark times in Quall's life, extremely depressing,  only mildly funny",
    certification: "Rated M-5 (Mostly Okay for Channel 5)"
  };

  const specialFeature = "Bill Hader hardly holds it together in special never-before-seen behind the scenes footage as Quall. Using Quall's signature routine, Hader almost had to drop out of the movie becuase he couldn't stop himself from laughing.";

  const critics = [
    {
      text: "Hader's impersonator impression impressive.",
      critic: "Women's Weekly Online"
    },
    {
      text: "David Leibe Hart shines as himself.",
      critic: "Women's Weekly"
    },
    {
      text: "David was in this, why wasn't I allowed to be?",
      critic: "James Quall",
      publication: "Quall About Quall"
    }
  ];

  return (
    <Channel5MoviesLayout
      movieTitle="Quall, The James Quall Story"
      moviePoster="images/pages/categories/channel5andfriends/Channel5Movies/TheJamesQuallStory.png"
      synopsis={synopsis}
      rating={rating}
      runtime="Runtime: 2hr 30mins (Worth Every Last Second)"
      cast={cast}
      showTimes={showTimes}
      movieTrivia={movieTrivia}
      specialFeature={specialFeature}
      critics={critics}
    />
  );
};

export default TheJamesQuallStory;