import React from 'react';
import Channel5MoviesLayout from '../../../components/layout/Channel5MoviesLayout';

const PillgrumsMovie = () => {
  const cast = [
    {
      name: "Grum",
      role: "Lead Pillgrum",
      image: "images/pages/categories/entertainment/EntertainmentMovies/Grum.PNG",
      note: "First time historical actor"
    },
    {
      name: "Glen Tennis",
      role: "Director/Narrator",
      image: "images/pages/categories/entertainment/EntertainmentMovies/GlenTennis.PNG",
      note: "Historical accuracy consultant"
    },
    {
      name: "Chippy",
      role: "Native",
      image: "images/pages/categories/entertainment/EntertainmentMovies/Chippy.PNG",
      note: "Specializes in maize identification"
    }
  ];

  const showTimes = {
    primetime: "7:05 PM",
    latenight: "1:15 AM",
    weekend: "Saturday & Sunday 4:05 PM",
    timezone: "EST",
    note: "Special Thanksgiving Day Marathon!"
  };

  const synopsis = `From the visionary director of Crystal Shyps comes an unconventional historical epic produced by Grimworks Studios. When Grum discovers Plymouth Rock, a series of misunderstandings leads to the most unusual Thanksgiving dinner ever recorded. Features authentic historical details including crescent rolls, ambrosia, and Glen Tennis's personal interpretation of early American cuisine.`;

  const movieTrivia = [
    "Filmed entirely at the real Plymouth Rock*",
    "Features historically accurate maize identification",
    "All dinner scenes use genuine food products",
    "Director Glen Tennis provided historical narration",
    "Chippy served as technical advisor"
  ];

  const rating = {
    score: "5/5 Maizes",
    warning: "Contains mild historical inaccuracies and intense dinner scenes",
    certification: "Rated HE-5 (Historical Entertainment by Channel 5)"
  };

  const specialFeature = "Exclusive behind-the-scenes footage of Glen Tennis explaining historical facts to Grum. Plus: Extended dinner sequences and a special documentary on the difference between various colonial-era foods!";

  const critics = [
    {
      text: "The most important historical film ever made by Glen Tennis",
      critic: "Channel 5 Historical Review",
      publication: "Fall Edition"
    },
    {
      text: "I learned more about dinner than history",
      critic: "Dr. Steve Brule",
      publication: "For Your Health"
    },
    {
      text: "Finally, someone tells the real story of crescent rolls in early America",
      critic: "Jan Skylar",
      publication: "Channel 5 News"
    }
  ];

  return (
    <Channel5MoviesLayout
      movieTitle="The Pillgrums"
      moviePoster="images/pages/categories/entertainment/EntertainmentMovies/Pillgrums.PNG"
      synopsis={synopsis}
      rating={rating}
      runtime="Runtime: 2hr 0mins (feels like a full feast)"
      cast={cast}
      showTimes={showTimes}
      movieTrivia={movieTrivia}
      specialFeature={specialFeature}
      critics={critics}
    />
  );
};

export default PillgrumsMovie;