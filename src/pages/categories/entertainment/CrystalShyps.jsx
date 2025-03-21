import React from 'react';
import Channel5MoviesLayout from '../../../components/layout/Channel5MoviesLayout';

const CrystalShyps = () => {
  const cast = [
    {
      name: "Glen Tennis",
      role: "Director/Croc Monster",
      image: "images/pages/categories/entertainment/EntertainmentMovies/MonsterGlen.PNG",
      note: "Knows about the Krogan experiment"
    },
    {
      name: "Ron Stark",
      role: "Lead Investigator",
      image: "images/pages/categories/entertainment/EntertainmentMovies/RonStark.PNG",
      note: "This is his first film"
    },
    {
      name: "Kathy Lewis",
      role: "Scientist",
      image: "images/pages/categories/entertainment/EntertainmentMovies/KathyLewis.PNG",
      note: "Expert in croc monsters"
    }
  ];

  const showTimes = {
    primetime: "9:05 PM",
    latenight: "3:15 AM",
    weekend: "Saturday & Sunday 10:05 PM",
    timezone: "EST",
    note: "Director's Cut includes additional footage not meant for your eyes"
  };

  const synopsis = `A Glenn Tennis Production presents this groundbreaking Channel 5 sci-fi thriller. When a mysterious meteor crashes near Vector City, a team of investigators must confront their greatest fears: outer space croc monsters, the infamous Krogan experiment, and their own emotional outbursts that may or may not be part of the actual film. Will they discover the truth about Crystal Shyps, or will the cutting room floor claim another victim?`;

  const movieTrivia = [
    "Filmed entirely using genuine meteor fragments",
    "Features real scientific terminology about Vector City",
    "The director insists certain scenes are not part of the movie",
    "Second film in Glenn Tennis's illustrious career",
    "Contains exactly zero French cinema influences"
  ];

  const rating = {
    score: "5/5 Meteors",
    warning: "Contains intense sci-fi elements, Vector City references, and disputed footage",
    certification: "Rated GT-5 (Glenn Tennis Approved for Channel 5)"
  };

  const specialFeature = "Exclusive behind-the-scenes footage of Glenn Tennis explaining which scenes are and aren't part of the movie. Plus: Extended interviews about the Krogan experiment and a detailed exploration of why French movies are called 'cinema.'";

  const critics = [
    {
      text: "The most important film about meteors ever made, unless those scenes weren't meant to be in it",
      critic: "Channel 5 Movie Minute",
      publication: "Summer Edition"
    },
    {
      text: "I watched it twice and still don't know what was meant for my eyes",
      critic: "Dr. Steve Brule",
      publication: "For Your Health"
    },
    {
      text: "A masterclass in experimental filmmaking, possibly by accident",
      critic: "Jan Skylar",
      publication: "Channel 5 News"
    }
  ];

  return (
    <Channel5MoviesLayout
      movieTitle="Crystal Shyps"
      moviePoster="images/pages/categories/entertainment/CatPage/CrystalShyps.PNG"
      synopsis={synopsis}
      rating={rating}
      runtime="Runtime: 1hr 35mins (not including disputed footage)"
      cast={cast}
      showTimes={showTimes}
      movieTrivia={movieTrivia}
      specialFeature={specialFeature}
      critics={critics}
    />
  );
};

export default CrystalShyps;