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
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%233e84db' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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