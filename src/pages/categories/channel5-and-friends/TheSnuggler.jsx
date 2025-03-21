import React from 'react';
import Channel5MoviesLayout from '../../../components/layout/Channel5MoviesLayout';

const TheSnuggler = () => {
  const cast = [
    {
      name: "Tairy Greene",
      role: "The Snuggler",
      image: "images/pages/categories/channel5andfriends/Channel5Movies/TairyGreene.PNG",
      note: " Hey I'm the snuggler, I'll snuggle you"
    },
    {
      name: "Tim Heidecker",
      role: "Man in Forest",
      image: "images/pages/categories/channel5andfriends/Channel5Movies/TimHeidecker.png",
      note: " Too tight!"
    },
    {
      name: "Michael J.",
      role: "Fox",
      image: "images/pages/categories/channel5andfriends/Channel5Movies/MichaelJ.png",
      note: " No relation to Michael J. Fox"
    }
  ];

  const showTimes = {
    primetime: "11:30 PM",
    latenight: "2:15 AM",
    weekend: "Saturday & Sunday 1:00 AM",
    timezone: "EST",
    note: "Check your local listings, ya dingus!"
  };

  const synopsis = `In this thrilling Channel 5 original movie, Tairy Greene becomes "The Snuggler" - a mysterious figure who roams the forest with his fox, "Michael J". The Snuggler searches for those in need of a snuggle and snuggles them back to health!`;

  const movieTrivia = [
    "Shot entirely on VHS cameras found in Doris Pringle Brules's attic",
    "The famous 'snuggle chase' scene was filmed in one take due to budget constraints",
    "Features a cameo appearance by Eric Wareheim as 'Mysterious Stranger with Gun'",
    "The original working title was 'Hunks Need Hugs Too'",
    "Contains over 3 instances of the word 'snuggle'"
  ];

  const rating = {
    score: "5/5 Fibbus",
    warning: "Contains mild peril, brief scenes of food consumption, and extreme snuggling",
    certification: "Rated TG-5 (Too Gory for Channel 5)"
  };

  const specialFeature = "Exclusive behind-the-scenes footage of Tairy Greene learning to snuggle from real professional snugglers. Plus: deleted scenes featuring Michael J's side adventures! Watch Michael J. the Fox hunt the forest to help The Snuggler find his next patient. Will Michael J. be eaten? Find out.";

  const critics = [
    {
      text: "The Snuggler is the most important film about professional snuggling ever made on Channel 5",
      critic: "Channel 5 Movie Review Weekly",
      publication: "Winter Edition"
    },
    {
      text: "Tairy Greene delivers a powerhouse performance that will make you forget he's not a snuggler",
      critic: "Steve Mahanahan",
      publication: "Child Clown Donator"
    },
    {
      text: "I laughed, I cried, I checked it out!",
      critic: "Steve Brule",
      publication: "Channel 5 News"
    }
  ];

  return (
    <Channel5MoviesLayout
      movieTitle="The Snuggler"
      moviePoster="images/pages/categories/channel5andfriends/Channel5Movies/TheSnuggler.jpg"
      synopsis={synopsis}
      rating={rating}
      runtime="Runtime: 1hr 35mins (feels like 6 1/2 hours)"
      cast={cast}
      showTimes={showTimes}
      movieTrivia={movieTrivia}
      specialFeature={specialFeature}
      critics={critics}
    />
  );
};

export default TheSnuggler;