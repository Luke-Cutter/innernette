import React from 'react';
import Channel5MoviesLayout from '../../../components/layout/Channel5MoviesLayout';

const BackToSquall = () => {
  const cast = [
    {
      name: "James Quall",
      role: "James Quall",
      image: "images/pages/categories/entertainment/EntertainmentMovies/Quall.PNG",
      note: "Your new roommate at Sailing Quallage"
    },
    {
      name: "John A. Hill",
      role: "Jeffrey Simmons",
      image: "images/pages/categories/entertainment/EntertainmentMovies/JonAHill.PNG",
      note: "Never wanted a roommate"
    },
    {
      name: "David Liebe Hart",
      role: "Admiral Hart",
      image: "images/pages/categories/entertainment/EntertainmentMovies/AdmiralHart.PNG",
      note: "The hot-tempered Admiral"
    }
  ];

  const showTimes = {
    primetime: "5:00 PM",
    latenight: "1:15 AM",
    weekend: "Saturday & Sunday 3:05 AM",
    timezone: "EST",
    note: "Don't be a latecomer!"
  };

  const synopsis = `In this heartwarming Channel 5 original film, young Jeffrey Simmons arrives at Sailing Quallage expecting a typical college experience, only to find himself rooming with the significantly older James Quall. What starts as an odd-couple situation evolves into an unlikely friendship as they navigate the challenges of maritime education, roommate dynamics, and Admiral Hart's unique teaching methods.`;

  const movieTrivia = [
    "Features authentic sailing terminology written by real sailors",
    "The dormitory scenes were filmed in a real maritime academy",
    "Contains over 47 unique greetings",
    "Admiral Hart's scenes were shot during actual sailing lessons",
    "The friendship montage contains real sailing footage"
  ];

  const rating = {
    score: "5/5 Boats",
    warning: "Contains nautical terminology, intense friendship, and maritime situations",
    certification: "Rated SQ (Sailing Quallified)"
  };

  const specialFeature = "Behind-the-scenes look at life at Sailing Quallage, including exclusive interviews with the cast about their maritime experiences. Plus: Extended cut of Admiral Hart's sailing lessons!";

  const critics = [
    {
      text: "The most important film about maritime education ever made on Channel 5",
      critic: "Channel 5 Nautical Review",
      publication: "Spring Edition"
    },
    {
      text: "A touching exploration of intergenerational friendship at sea",
      critic: "Dr. Steve Brule",
      publication: "For Your Health"
    },
    {
      text: "Sets sail for the heart and never looks back",
      critic: "Jan Skylar",
      publication: "Channel 5 News"
    }
  ];

  return (
    <Channel5MoviesLayout
      movieTitle="Back to Squall"
      moviePoster="images/pages/categories/entertainment/CatPage/BackToSquall.PNG"
      synopsis={synopsis}
      rating={rating}
      runtime="Runtime: 1hr 45mins (feels like a semester at sea)"
      cast={cast}
      showTimes={showTimes}
      movieTrivia={movieTrivia}
      specialFeature={specialFeature}
      critics={critics}
    />
  );
};

export default BackToSquall;