import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const CORBS = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Sugar Factory Standoff",
            description: "The C.O.R.B.S. team responds to a 1017 at the local sugar factory while training friend Vanessa to roller skate  while they recumbent bicycle.",
            note: "First and last appearance of Bush Printzle"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "C.O.R.B.S. New Recruits",
            description: "Following the death of Donegan and his partner at the sugar factory we meet a new set of CORBS recruits that save the day and rescue Vanessa from danger!",
            note: "The show was cancelled following this episode due to the lack of Bush and Ted"
        }
    ];

    const cast = [
        {
            name: "Bush Printzle",
            role: "Chief Officer",
            image: "images/pages/categories/channel5andfriends/CORBS/bushprintzle.png",
            note: "Lead investigator"
        },
        {
            name: "Ted Didlio",
            role: "Donegan",
            image: "images/pages/categories/channel5andfriends/CORBS/teddidlio.png",
            note: "Recumbent bike specialist"
        },
        {
            name: "Vanessa",
            role: "Local Rollerskater",
            image: "images/pages/categories/channel5andfriends/CORBS/vanessa.png",
            note: "Would never join C.O.R.B.S."
        }
    ];

    const airTime = {
        day: "Thursday",
        time: "9:00 PM",
        timezone: "EST",
        note: "Weather permitting - recumbent bikes don't do well in rain"
    };

    const description = `Follow the elite C.O.R.B.S. (Cops On Recumbent Bicycles) unit as they patrol the streets and respond to crimes while maintaining perfect posture on their recumbent bicycles. Watch as they tackle everything from sugar factory standoffs to high-speed (well, medium-speed) chases, all while training the next generation of recumbent officers.`;

    return (
        <Channel5Layout
            showTitle="C.O.R.B.S."
            showImage="images/pages/categories/channel5andfriends/CORBS/CORBS.png"
            description={description}
            episodes={episodes}
            cast={cast}
            airTime={airTime}
        >
        </Channel5Layout>
    );
};

export default CORBS;