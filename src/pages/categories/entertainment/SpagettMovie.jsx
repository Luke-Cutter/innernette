import React from 'react';
import Channel5MoviesLayout from '../../../components/layout/Channel5MoviesLayout';

const SpagettMovie = () => {
  const cast = [
    {
      name: "Tim Heidecker",
      role: "Spagett",
      image: "images/pages/categories/entertainment/EntertainmentMovies/tim.PNG",
      note: "Featuring revolutionary CGI marinara technology"
    },
    {
      name: "Brian Posehn",
      role: "Eric",
      image: "images/pages/categories/entertainment/EntertainmentMovies/Brian.PNG",
      note: "Alternative comedy legend"
    },
    {
      name: "Stephen Spielberg",
      role: "Director",
      image: "images/pages/categories/entertainment/EntertainmentMovies/stephen.PNG",
      note: "Totally Stephen"
    }
  ];

  const showTimes = {
    primetime: "8:05 PM",
    latenight: "2:15 AM",
    weekend: "Saturday & Sunday 11:05 PM",
    timezone: "EST",
    note: "Spooked ya! Check local listings for surprise showings!"
  };

  const synopsis = `In this groundbreaking Channel 5 adventure film, renowned prankster Spagett trades his office surprises for the quest of a lifetime. Armed with revolutionary CGI marinara technology and his signature spooking skills, Spagett must navigate ancient temples, spook hostile natives, and leap across treacherous ravines in search of the legendary Golden Treasure. But with mysterious temple guides and a skeptical professor on his trail, will Spagett's spooked ya skills be enough to claim the prize?`;

  const movieTrivia = [
    "Features revolutionary permanent marinara special effects",
    "All temple scenes were filmed in a real office building",
    "The famous ravine jump was performed by a stunt double wearing a green screen suit",
    "Includes a cameo from every person Spagett has ever spooked",
    "The treasure prop was made entirely of recycled office supplies"
  ];

  const rating = {
    score: "5/5 Spooked Yas",
    warning: "Contains mild spooking, excessive marinara, and intense temple situations",
    certification: "Rated SP-5 (Spagett Approved by Channel 5)"
  };

  const specialFeature = "Exclusive behind-the-scenes look at the revolutionary CGI marinara technology. Plus: Extended cut of deleted spooks! Watch Spagett attempt to spook the entire film crew during production. Includes director's commentary on proper spooking technique.";

  const critics = [
    {
      text: "The most important archaeological spooking film ever made",
      critic: "Channel 5 Movie Minute",
      publication: "Fall Edition"
    },
    {
      text: "I thought it was just another office training video, but I got spooked!",
      critic: "Dr. Steve Brule",
      publication: "For Your Health"
    },
    {
      text: "A masterclass in both treasure hunting and workplace pranks",
      critic: "Andrew Onorato",
      publication: "Artist of the Cover Art and Creator of the Game 'Spagett and the Quest For the Golden Treasure'"
    }
  ];

  return (
    <Channel5MoviesLayout
      movieTitle="Spagett and the Quest for the Golden Treasure"
      moviePoster="images/pages/categories/entertainment/EntertainmentMovies/spagett.PNG"
      synopsis={synopsis}
      rating={rating}
      runtime="Runtime: 1hr 55mins (feels like a full day at the office)"
      cast={cast}
      showTimes={showTimes}
      movieTrivia={movieTrivia}
      specialFeature={specialFeature}
      critics={critics}
    />
  );
};

export default SpagettMovie;