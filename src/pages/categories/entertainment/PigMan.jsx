import React from 'react';
import Channel5MoviesLayout from '../../../components/layout/Channel5MoviesLayout';

const PigMan = () => {
  const cast = [
    {
      name: "Tommy Wiseau",
      role: "Pig Man",
      image: "images/pages/categories/entertainment/EntertainmentMovies/TommyWiseau.PNG",
      note: "I am Pig Man!"
    },
    {
      name: "Tim Heidecker",
      role: "Story Writer",
      image: "images/pages/categories/entertainment/EntertainmentMovies/TimWiseau.PNG",
      note: "Just moved here from Hollywood"
    },
    {
      name: "Jessica Alba",
      role: "Lover",
      image: "images/pages/categories/entertainment/EntertainmentMovies/JessicaAlba.PNG",
      note: "Loves eating pretzels"
    }
  ];

  const showTimes = {
    primetime: "10:05 PM",
    latenight: "3:15 AM",
    weekend: "Saturday & Sunday 12:05 AM",
    timezone: "EST",
    note: "Will return in 2 minutes for next showing!"
  };

  const synopsis = `Channel 5 presents an avant-garde masterpiece where Tommy Wiseau stars as the mysterious Pig Man, a method actor who becomes too deeply immersed in his porcine character. When a simple hospital scene spirals into chaos, Pig Man must navigate the thin line between man and swine while attempting to woo Jessica Alba (who never shows up).`;

  const movieTrivia = [
    "Tommy Wiseau insisted on doing all his own oinks",
    "Shot entirely in 2-minute segments due to the director's unique vision",
    "Features over 147 authentic pig noises",
    "Originally conceived as a hospital drama",
    "Jessica Alba was in the final cut"
  ];

  const rating = {
    score: "5/5 Oinks",
    warning: "Contains intense method acting, excessive pig noises, and Jessica Alba",
    certification: "Rated PG-5 (Pig Generated for Channel 5)"
  };

  const specialFeature = "Exclusive behind-the-scenes footage of Tommy Wiseau's transformation into Pig Man, including his revolutionary '2-minute method' acting technique and 45-minute compilation of unused oinks.";

  const critics = [
    {
      text: "The most powerful portrayal of a pig-human hybrid since Orwell's Animal Farm",
      critic: "Channel 5 Movie Minute",
      publication: "Summer Edition"
    },
    {
      text: "I didn't know if I was watching a man become a pig or a pig become a man",
      critic: "Dr. Steve Brule",
      publication: "For Your Health Magazine"
    },
    {
      text: "Oink oink... I mean, brilliant!",
      critic: "Jan Skylar",
      publication: "Channel 5 News"
    }
  ];

  return (
    <Channel5MoviesLayout
      movieTitle="The Pig Man"
      moviePoster="images/pages/categories/entertainment/CatPage/PigMan.PNG"
      synopsis={synopsis}
      rating={rating}
      runtime="Runtime: 1 hr 50mins (feels like 2hrs)"
      cast={cast}
      showTimes={showTimes}
      movieTrivia={movieTrivia}
      specialFeature={specialFeature}
      critics={critics}
    />
  );
};

export default PigMan;