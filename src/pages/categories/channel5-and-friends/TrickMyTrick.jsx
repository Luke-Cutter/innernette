import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const TrickMyTrick = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Classic Magic Reimagined",
            description: "The great Gregory, with assistance from Gwyneth, helps Stan from Massachusetts revitalize his rabbit in the hat routine with a 2004 twist.",
            note: "Featuring viewer mail segment"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "Gregory's Greatest Hits",
            description: "Gregory attempts to remember his most requested tricks while Gwyneth manages the props and correspondence.",
            note: "Card tricks and memory tricks combined"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "The Lost Deck",
            description: "Gregory spends an entire episode looking for his special deck of cards, only to find Gwyneth had them all along. Features impromptu coin magic while searching.",
            note: "Three new card tricks discovered during the search"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "Dove Dilemma",
            description: "Gregory helps a viewer improve their dove act, but can't quite remember where he put his own dove. Gwyneth saves the day with a paper origami dove demonstration.",
            note: "No doves were misplaced during filming"
        },
        {
            season: 1,
            episodeNumber: 5,
            title: "Memory Magic",
            description: "Gregory teaches viewers how to enhance their memory tricks, while consistently forgetting what trick he's supposed to be teaching. Gwyneth provides helpful cue cards.",
            note: "Includes special segment on remembering where you put your props"
        },
        {
            season: 1,
            episodeNumber: 6,
            title: "Levitation Liberation",
            description: "A viewer asks how to improve their levitation act. Gregory demonstrates while getting stuck mid-air, requiring Gwyneth's intervention with a stepladder.",
            note: "New safety guidelines implemented after this episode"
        },
        {
            season: 2,
            episodeNumber: 1,
            title: "The Great Mail Mix-Up",
            description: "Gregory accidentally combines multiple viewers' letters, resulting in an unexpectedly innovative combination of rope tricks and mind reading.",
            note: "Gwyneth now handles all mail sorting"
        },
        {
            season: 2,
            episodeNumber: 2,
            title: "Prop Potpourri",
            description: "While trying to organize his magic cabinet, Gregory discovers forgotten props and creates entirely new tricks by mistake. Features surprise appearances from items from 1987.",
            note: "Several 'lost' tricks rediscovered"
        }
    ];

    const cast = [
        {
            name: "Gregory",
            role: "Master Magician",
            image: "images/pages/categories/channel5andfriends/TrickMyTrick/gregory.png",
            note: "Self-proclaimed magic enhancer"
        },
        {
            name: "Gwyneth",
            role: "Assistant & Wife",
            image: "images/pages/categories/channel5andfriends/TrickMyTrick/gwyneth.png",
            note: "Keeper of the cards and questions"
        }
    ];

    const airTime = {
        day: "Friday",
        time: "10:00 PM",
        timezone: "EST",
        note: "Time may vary depending on Gregory's memory"
    };

    const description = `Join the great Gregory and his devoted assistant Gwyneth as they help magicians enhance their existing tricks. Each episode features viewer mail from struggling performers seeking to improve their magical repertoire. Watch as Gregory attempts to remember and demonstrate various classic tricks with his own unique improvements, all while Gwyneth keeps the show on track.`;

    const specialAnnouncement = "Send your magic questions to Gregory care of Channel 5. Please be patient as Gwyneth organizes the correspondence.";

    return (
        <Channel5Layout
            showTitle="Trick My Trick with Gregory"
            showImage="images/pages/categories/channel5andfriends/TrickMyTrick/TrickMyTrick.png"
            description={description}
            episodes={episodes}
            cast={cast}
            airTime={airTime}
            specialAnnouncement={specialAnnouncement}
        >
            {/* Additional show-specific content could go here */}
        </Channel5Layout>
    );
};

export default TrickMyTrick;