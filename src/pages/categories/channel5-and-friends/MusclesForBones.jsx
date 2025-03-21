import React from 'react';
import Channel5MoviesLayout from '../../../components/layout/Channel5MoviesLayout';

const TheSnuggler = () => {
  const cast = [
    {
      name: "Uncle Muscles",
      image: "images/pages/categories/channel5andfriends/Channel5Movies/Muscles.PNG",
      note: " Give Richard Your Bones"
    },
    {
      name: "Richard Dunn",
      image: "images/pages/categories/channel5andfriends/Channel5Movies/RichardDunn.PNG",
      note: " Children Please Give Me Your Bones"
    },
    {
      name: "Tim Heidecker",
      role: "Host",
      image: "images/pages/categories/channel5andfriends/Channel5Movies/MusclesTimHeidecker.png",
      note: " Damnit Greg"
    },
    {
      name: "Eric Wareheim",
      role: "Co-Host",
      image: "images/pages/categories/channel5andfriends/Channel5Movies/MusclesEricWareheim.png",
      note: " Friends with Tim Heidecker"
    }
  ];

  const showTimes = {
    primetime: "Rerun @ 11:30 PM Tuesdays",
    latenight: "Rerun @ 5:21 AM Fridays",
    weekend: "Saturday & Sunday 1:52 AM",
    timezone: "EST",
    note: "Check your local listings, ya dingus!"
  };

  const synopsis = `Organized by Uncle Muscles and Channel 5 in conjunction with Club 5 Studio B, Muscles for Bones- An UNCLE MUSCLES benefit for Richard Dunn was a live telethon in support of bringing Richard Dunn back to full health. With performances by Casey and his brother, David Leibe Hart, James Quall, and the Married News Team!`;

  const movieTrivia = [
    "Mr. Brendan O'Flan from Scroatch, NM donated 1,000 bones. Thank you Brendan!",
    "Twins Sam & Brandon from Maws, IA donated 1,000 ribs. So Generous!",
    "Mrs. Cattse D'ourse from Ronald, WI doanted 30 Kneebones. From the bottom of our hearts, thank you!",
    "Mr. Bread Harrity donated 100,000 bones, we appreciate it!",
    "Mrs. Samanda Lurch of Reticence Cliff, CA donated 1 child skeleton! Wow!"
  ];

  const rating = {
    score: "5/5 Taargus",
    warning: "A beautiful live telethon, if you do not donate, you are a bad person- Channel 5 Legal Team",
    certification: "Rated MFB-5 (Muscles For Bones on Channel 5)"
  };

  const specialFeature = "A Special word from Dr. Reid Tamaranda of the American Bone Institute. See more about the Bone Pressing procedure on his Nettepage 'Dr. Reid Tamaranda's Bone Press'! If you can not send in human bones, think about the animals around you! Do not send in squirrel bones, it causes us serious problems.";

  const critics = [
    {
      text: "We were blessed with the bones our fathers gave us when we were young!",
      critic: "Jan Skyler",
      publication: "Channel 5 News"
    },
    {
      text: "So many bones, I have too many bones, we all have so many bones to spare!",
      critic: "Wayne Skyler",
      publication: "Channel 5 News"
    },
    {
      text: "Sorry about the squirrel bones Richard!",
      critic: "Various",
      publication: "Lovers of Richard"
    }
  ];

  return (
    <Channel5MoviesLayout
      movieTitle="Muscles For Bones"
      moviePoster="images/pages/categories/channel5andfriends/CatPage/MusclesForBones.PNG"
      synopsis={synopsis}
      rating={rating}
      runtime="Runtime: 3hr 0mins (A Worthwhile Watch)"
      cast={cast}
      showTimes={showTimes}
      movieTrivia={movieTrivia}
      specialFeature={specialFeature}
      critics={critics}
    />
  );
};

export default TheSnuggler;