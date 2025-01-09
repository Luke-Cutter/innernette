import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const CheckItOut = () => {
    const episodes = [
        {
          season: 1,
          episodeNumber: 1,
          title: "Food",
          description: "Dr. Steve checks out one of life's most essential means of survival: food. Features a special connection with waitress Sunshine.",
          note: "For your health!"
        },
        {
          season: 1,
          episodeNumber: 2,
          title: "Relationships",
          description: "Dr. Steve explores relationships and sex with special guest Dr. Dan Dungus. Plus Yesterday's Weather!",
          note: "Special appearance by Channel 5's Jan and Wayne Skylar"
        },
        {
          season: 1,
          episodeNumber: 3,
          title: "Family",
          description: "Dr. Steve discusses the importance of family. Meet MotherDorris Pringle-Brule, Uncle-Magician Gary, and his fake brother Stan. Plus sports.",
          note: "No appearance from Dr. Steve's Pep-Pep"
        },
        {
          season: 1,
          episodeNumber: 4,
          title: "Health",
          description: "Dr. Steve discusses the topic of being ugly or pretty. A look at a high school quarterback. Also, spiritual health.",
          note: "Starring Ms. Deja for your aerobics!"
        },
        {
          season: 1,
          episodeNumber: 5,
          title: "Fear",
          description: "Dr. Steve addresses his fear of puppets. A visit to a puppet theater leads to a bad dream. An injury occurs during jack-o-lantern carving.",
          note: "With the puppeteering of David Leibe Hart"
        },
        {
          season: 1,
          episodeNumber: 6,
          title: "Friendship",
          description: "Dr. Steve Brule visits a local male strip club in an effort to seek out new friends. He invites neighbor Steve help him find friends.",
          note: "Dr. Brule is deeply depressed"
        },
        {
          season: 2,
          episodeNumber: 1,
          title: "Boats",
          description: "Dr. Steve visits Captain Gary at the marina, scores big with dumpster seafood, and takes a kayak trip.",
          note: "Carol Krabit discusses the best bait and location for crabbing"
        },
        {
          season: 2,
          episodeNumber: 2,
          title: "Pleasure",
          description: "Dr. Steve encounters injury and an old clown at a county fair. A spa and candy store are also explored, with haphazard results.",
          note: "Singer Ron Don Volante plugs new music"
        },
        {
          season: 2,
          episodeNumber: 3,
          title: "Money",
          description: "After a failed attempt to visit the US Mint, Dr. Steve braves a job interview, discovers card counting, and angers security guards at a casino.",
          note: "Doug Prishpreed reports on an upcoming decathlon and a failed cannon firing"
        },
        {
          season: 2,
          episodeNumber: 4,
          title: "Space",
          description: "Dr. Steve meets with aspiring actor and alien abductee David Liebe Hart to talk extraterrestrial technology.",
          note: "David Leibe Hart is related to Orville and Wilbur Wright"
        },
        {
          season: 2,
          episodeNumber: 5,
          title: "Animals",
          description: "Dr. Brule finally goes furry, all while promoting Toad's new Creamed Chip Beef, Corned Beef Hash combo can.",
          note: "Dr. Brule finds out he has arachnophobia during his Doctor to Doctor with Sean Roach"
        },
        {
          season: 2,
          episodeNumber: 6,
          title: "Life and Death",
          description: "Dr. Steve Brule goes on a journey through the physical as he meditates on life and then death.",
          note: "Dr. Steve is infertile"
        },
        {
          season: 3,
          episodeNumber: 1,
          title: "Planes",
          description: "Dr. Brule witnesses a traumatizing airplane accident involving a new co-host.",
          note: "Linda is an AIR HOG! AND DEAD!"
        },
        {
          season: 3,
          episodeNumber: 2,
          title: "Church",
          description: "Dr. Brule goes to church and sets out to become a priest; however, he is soon tempted by darker and more sinister activities.",
          note: "\"It's lonely at the top. I don't need to be a priest, I'm a doctor.\""
        },
        {
          season: 3,
          episodeNumber: 3,
          title: "Home",
          description: "Dr. Brule learns about home by visiting the home of Jan and Wayne Skylar, but Wayne dies on-air due to many cancers.",
          note: "Hippy Joel hunts down Brule with a crossbow"
        },
        {
          season: 3,
          episodeNumber: 4,
          title: "Horse",
          description: "Dr. Brule learns all about horses. He interviews a child clown who rides horses for a living.",
          note: "Only real cowboys get farm fresh eggs"
        },
        {
          season: 3,
          episodeNumber: 5,
          title: "Children",
          description: "Dr. Brule visits a day care facility for boys, and learns that if they misbehave you just need to spray them with poison.",
          note: "Dr. Brule helps his mother deliver her baby"
        },
        {
          season: 3,
          episodeNumber: 6,
          title: "Skateboards",
          description: "Dr. Brule tries to show off skateboard tricks, but ends up suffering from amnesia after injuring his head.",
          note: "Starring David Leibe Hart, Gary Bule, Linda, Doris Pringle-Brule, and Sunshine"
        },
        {
          season: 4,
          episodeNumber: 1,
          title: "Cars",
          description: "Dr. Brule goes shopping for a new car and learns how to fix cars.",
          note: "Scott Clam reports on a clam contamination at a local river"
        },
        {
          season: 4,
          episodeNumber: 2,
          title: "Eggs",
          description: "Dr. Brule learns about eggs by eating some at various diners, where he meets a man who may be his estranged father.",
          note: "Doug Prishpreed reports on his upcoming dental work"
        },
        {
          season: 4,
          episodeNumber: 3,
          title: "Words",
          description: "Dr. Brule visits a library, meets some foreign language speakers, and competes in a spelling bee.",
          note: "Terry Bruge-Hiplo hosts a free medical examination"
        },
        {
          season: 4,
          episodeNumber: 4,
          title: "Music",
          description: "Dr. Brule goes to a music store and interviews some musicians, even working as a roadie for a rock band.",
          note: "Scott Clam reports on avian life and Doug Prishpreed advertises a barbecue"
        },
        {
          season: 4,
          episodeNumber: 5,
          title: "Stevie!",
          description: "Dr. Brule launches a live talk show, featuring co-host Carol Krabit and special guests Doug Prishpreed and Pablo Myers.",
          note: "Myers warns of an astronomical phenomenon"
        },
        {
          season: 4,
          episodeNumber: 6,
          title: "Crime",
          description: "Dr. Brule and Scott Clam visit a jail (where Dr. Brule sees an old friend) and help some police officers catch criminals.",
          note: "Brule is arrested and Scott Clam takes over as the new host of \"Check It Out\""
        },
        {
          season: 5,
          episodeNumber: 1,
          title: "Check It Out! with Scott Clam",
          description: "Scott Clam, new host of 'Check It Out!', discusses trains with David Liebe Hart.",
          note: "This special was aired as part of Infomercials."
        },
  ];

  const cast = [
    {
      name: "Dr. Steve Brule",
      role: "Doctor, Srushi lover",
      image: "images/pages/categories/channel5andfriends/CheckItOut/stevebrule.PNG",
      note: "For your Health!"
    },
    {
      name: "Scott Clam",
      role: "Co-Host",
      image: "images/pages/categories/channel5andfriends/CheckItOut/scottclam.jpg",
      note: "Bird Enthusiast"
    },
    {
      name: "Doug Prishpreed",
      role: "Sports Announcer",
      image: "images/pages/categories/channel5andfriends/CheckItOut/doug.jpg",
      note: "Butterboy"
    }
  ];

  const airTime = {
    day: "Sunday",
    time: "12:15 AM",
    timezone: "EST",
    note: "Check your local listings, ya dingus!"
  };

  const description = `Join Dr. Steve Brule as he examines different facets of living in this surreal parody of public-access television programs. Watch as his extreme naivete and social awkwardness lead to increasingly bizarre situations, all while maintaining his signature charm. Each episode features real interviews, special guests, and insights from Channel 5's top professionals.`;

  const specialAnnouncement = "Due to recent budget cuts, all future episodes will be filmed using Dr. Steve's cousin Terry's camcorder. For your health!";

  return (
    <Channel5Layout
      showTitle="Check It Out! with Dr. Steve Brule"
      showImage="images/pages/categories/channel5andfriends/CheckItOut/checkitout.jpg"
      description={description}
      episodes={episodes}
      cast={cast}
      airTime={airTime}
      specialAnnouncement={specialAnnouncement}
    >
    </Channel5Layout>
  );
};

export default CheckItOut;