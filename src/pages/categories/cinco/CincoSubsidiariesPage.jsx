import React from 'react';
import { Shirt, Factory, ToyBrick } from 'lucide-react';
import CategoryLayout from '../../../components/layout/CategoryLayout';

const CincoSubsidiariesPage = () => {
  const sections = [
    {
      title: "CINCO™ Fun",
      type: "Fun",
      icon: <ToyBrick className="w-5 h-5" />,
      items: [
        {
          title: "CINCO Toys™: B'ougar",
          link: "/CincoBougar",
          image: "images/pages/categories/cinco/CatPage/Bougar.PNG",
          time: "In Stock",
          tags: ["Toys", "Kids"]
        },
        {
          title: "CINCO Toys™: B'owl",
          link: "/CincoBowl",
          image: "images/pages/categories/core/InnernetteHome/bowl.png",
          time: "In Stock",
          tags: ["Toys", "Kids"]
        },
        {
          title: "CINCO™ Boy",
          link: "/CincoBoy",
          image: "images/pages/categories/cinco/CatPage/CincoBoy.PNG",
          time: "In Stock",
          tags: ["Toys", "Kids"]
        },
        {
          title: "CINCO Toys™: D'ump",
          link: "/CincoDump",
          image: "images/pages/categories/cinco/CatPage/Dump.PNG",
          time: "In Stock",
          tags: ["Toys", "Kids"]
        },
        {
          title: "CINCO Toys™: H'oar",
          link: "/CincoHoar",
          image: "images/pages/categories/cinco/cincotoys/CincoHoar/hoar3.PNG",
          time: "In Stock",
          tags: ["Toys", "Kids"]
        },
        {
          title: "It's Not Jackie Chan",
          link: "/CincoNotJackieChan",
          image: "images/pages/categories/cinco/CatPage/JackieChan.PNG",
          time: "In Stock",
          tags: ["Games", "Entertainment"]
        },
        {
          title: "CINCO Toys™: My New Pep-Pep",
          link: "/MyNewPepPep",
          image: "images/pages/categories/cinco/CatPage/PepPep.PNG",
          time: "In Stock",
          tags: ["Toys", "Family"]
        },
        {
          title: "CINCO Toys™: T'ird",
          link: "/CincoTird",
          image: "images/pages/categories/cinco/CatPage/Tird.PNG",
          time: "In Stock",
          tags: ["Toys", "Kids"]
        },
        {
          title: "CINCO™ I-Jammer With E-Bumper",
          link: "/CincoIJammer",
          image: "images/pages/categories/cinco/CatPage/I-Jammer.PNG",
          time: "In Stock",
          tags: ["Toys", "Music"]
        }
      ]
    },
    {
      title: "CINCO™ Style",
      type: "Style",
      icon: <Shirt className="w-5 h-5" />,
      items: [
        {
          title: "CINCO™: Bro-Oche",
          link: "/CincoBroche",
          image: "images/pages/categories/cinco/CatPage/Broche.PNG",
          time: "Available Now",
          tags: ["Fashion", "Teeth"]
        },
        {
          title: "CINCO™ C-Bund",
          link: "/CincoCBund",
          image: "images/pages/categories/cinco/CatPage/CBund.PNG",
          time: "Available Now",
          tags: ["Fashion", "Style"]
        },
        {
          title: "CINCO™ Thocks",
          link: "/CincoThocks",
          image: "images/pages/categories/cinco/CatPage/Thocks.PNG",
          time: "Available Now",
          tags: ["Fashion", "Style"]
        },
        {
          title: "CINCO™ Mouth Decorator",
          link: "/CincoMouthDecorator",
          image: "images/pages/categories/cinco/CatPage/MouthDecorator.PNG",
          time: "Available Now",
          tags: ["Fashion", "Style"]
        }
      ]
    },
    {
      title: "CINCO™ Technology",
      type: "Technology",
      icon: <Factory className="w-5 h-5" />,
      items: [
        {
          title: "CINCO™ Identity Generator 2.5",
          link: "/CincoIdentityGenerator",
          image: "images/pages/categories/cinco/CatPage/IdentityGenerator.PNG",
          time: "Now Available",
          tags: ["Software", "Identity"]
        },
        {
          title: "CINCO™ Credit Union",
          link: "/CincoCreditUnion",
          image: "images/pages/categories/cinco/CatPage/CincoCreditUnion.PNG",
          time: "Open 24/7",
          tags: ["Finance", "Banking"]
        },
        {
          title: "CINCO™ MIDI Organizer",
          link: "/CincoMIDIOrganizer",
          image: "images/pages/categories/cinco/CatPage/MIDIOrganizer.PNG",
          time: "Now Available",
          tags: ["Software", "Music"]
        },
        {
          title: "CINCO™ Facts Machine",
          link: "/CincoFactsMachine",
          image: "images/pages/categories/cinco/CatPage/FactsMachine.PNG",
          time: "Now Available",
          tags: ["Software", "Education"]
        },
        {
          title: "CINCO™ E-Trial",
          link: "/CincoETrial",
          image: "images/pages/categories/cinco/CatPage/etrial.PNG",
          time: "Now Available",
          tags: ["Software", "Legal"]
        },
        {
          title: "CINCO™ Foto Fiddler",
          link: "/CincoFotoFiddler",
          image: "images/pages/categories/cinco/CatPage/FotoFiddler.PNG",
          time: "Now Available",
          tags: ["Software", "Drawing", "Publishing"]
        },
        {
          title: "CINCO™ Muzik Mayker",
          link: "/CincoMuzikMayker",
          image: "images/pages/categories/cinco/CatPage/MuzikMayker.PNG",
          time: "Now Available",
          tags: ["Software", "Music"]
        },
        {
          title: "CINCO™ Mancierge",
          link: "/CincoMancierge",
          image: "images/pages/categories/cinco/CatPage/Mancierge.PNG",
          time: "Now Available",
          tags: ["Software", "Lifestyle"]
        },
        {
          title: "CINCO™ Privacy Helmet",
          link: "/CincoPrivacyHelmet",
          image: "images/pages/categories/cinco/CatPage/PrivacyHelmet.PNG",
          time: "Now Available",
          tags: ["Hardware", "Privacy"]
        },
        {
          title: "CINCO™ Video Cube",
          link: "/CincoVideoCube",
          image: "images/pages/categories/cinco/CatPage/VideoCube.PNG",
          time: "Now Available",
          tags: ["Hardware", "Entertainment"]
        },
        {
          title: "CINCO™ C-Fone",
          link: "/CincoCFone",
          image: "images/pages/categories/cinco/CatPage/CFone.PNG",
          time: "Now Available",
          tags: ["Hardware", "Calls ONLY"]
        },
        {
          title: "CINCO™ Encyclopedia of Numbers",
          link: "/CincoNumberEncyclopedia",
          image: "images/pages/categories/cinco/CatPage/CincoNumberEncyclopedia.PNG",
          time: "Now Available",
          tags: ["Books", "Education"]
        },
      ]
    }
  ];

  return (
    <div className="bg-blue-100" style = {{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='107' viewBox='0 0 77 107'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='stamp-collection' fill='%235a8fdd' fill-opacity='0.4'%3E%3Cpath d='M46 101a5 5 0 0 1 5 5h5a5 5 0 0 1 10 0h5a5 5 0 0 1 5-5v-5a5 5 0 0 1 0-10v-5a5 5 0 0 1 0-10v-5a5 5 0 0 1 0-10v-5a5 5 0 0 1 0-10v-5a5 5 0 0 1 0-10v-5a5 5 0 0 1 0-10V6a5 5 0 0 1-5-5h-5a5 5 0 0 1-10 0h-5a5 5 0 0 1-10 0h-5a5 5 0 0 1-10 0h-5a5 5 0 0 1-10 0H6a5 5 0 0 1-5 5v5a5 5 0 0 1 0 10v5a5 5 0 0 1 0 10v5a5 5 0 0 1 0 10v5a5 5 0 0 1 0 10v5a5 5 0 0 1 0 10v5a5 5 0 0 1 0 10v5a5 5 0 0 1 5 5h5a5 5 0 0 1 10 0h5a5 5 0 0 1 10 0h5a5 5 0 0 1 5-5zm15-2a7 7 0 0 0-6.71 5h-1.58a7 7 0 0 0-13.42 0h-1.58a7 7 0 0 0-13.42 0h-1.58a7 7 0 0 0-13.42 0H7.71A7.01 7.01 0 0 0 3 99.29v-1.58a7 7 0 0 0 0-13.42v-1.58a7 7 0 0 0 0-13.42v-1.58a7 7 0 0 0 0-13.42v-1.58a7 7 0 0 0 0-13.42v-1.58a7 7 0 0 0 0-13.42v-1.58A7 7 0 0 0 3 9.29V7.71A7.02 7.02 0 0 0 7.71 3h1.58a7 7 0 0 0 13.42 0h1.58a7 7 0 0 0 13.42 0h1.58a7 7 0 0 0 13.42 0h1.58a7 7 0 0 0 13.42 0h1.58A7.02 7.02 0 0 0 74 7.71v1.58a7 7 0 0 0 0 13.42v1.58a7 7 0 0 0 0 13.42v1.58a7 7 0 0 0 0 13.42v1.58a7 7 0 0 0 0 13.42v1.58a7 7 0 0 0 0 13.42v1.58a7 7 0 0 0 0 13.42v1.58a7.01 7.01 0 0 0-4.71 4.71h-1.58A7 7 0 0 0 61 99zM12 12h53v83H12V12zm51 81H14V14h49v79z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}>
      <CategoryLayout 
        logoSrc="images/layouts/CincoProductLayoutImages/cincologo.png"
        bannerSrc="/images/banners/cincobanner.png"
        pageTitle="CINCO™ & Subsidiaries"
        sections={sections}
      />
    </div>
  );
};

export default CincoSubsidiariesPage;