import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const WhoopsieDaisy = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "The Cheeseburger Incident",
            description: "Whoopsie has a dramatic confrontation over an unwanted cheese addition to her hamburger. Features classic Whoopsie rage at 'nerdy looking fool' server.",
            note: "Cheese plogs her up"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "Falling Sky",
            description: "Whoopsie deals with various objects falling from above, including a mysterious ball that threatens her safety. Multiple 'Watch that ball, Whoopsie!' moments.",
            note: "Where did that come from?"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Step by Step",
            description: "A series of misadventures involving stairs, steps, and general walking mishaps. Whoopsie encounters numerous obstacles in her path.",
            note: "Watch that step!"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "That's Gotta Hurt",
            description: "A compilation of Whoopsie's most painful-looking accidents and mishaps, featuring her signature exclamations and reactions.",
            note: "Oopsie daisy!"
        }
    ];

    const cast = [
        {
            name: "Whoopsie Goldberg",
            role: "Accident-Prone Protagonist",
            image: "images/pages/categories/channel5andfriends/WhoopsieDaisy/whoopsie.png",
            note: "That's a Whoopsie Gold thing!"
        }
    ];

    const airTime = {
        day: "Tuesday",
        time: "11:00 PM",
        timezone: "EST",
        note: "Show may be interrupted by unexpected Whoopsie moments"
    };

    const description = `Join Whoopsie Goldberg in this slapstick comedy series as she navigates through a world seemingly designed to cause her mishaps. From unwanted cheese on burgers to mysterious falling objects, watch as Whoopsie encounters one accident after another, each punctuated by her signature catchphrases and explosive reactions. Every episode features new ways for things to go wrong, accompanied by Whoopsie's unique blend of confusion, anger, and bewilderment.`;

    const specialAnnouncement = "Warning: Do not attempt any Whoopsies at home. Professional Whoopsier on a closed set.";

    return (
        <Channel5Layout
            showTitle="Whoopsie Daisy Starring Whoopsie Goldberg"
            showImage="images/pages/categories/channel5andfriends/WhoopsieDaisy/WhoopsieDaisy.png"
            description={description}
            episodes={episodes}
            cast={cast}
            airTime={airTime}
            specialAnnouncement={specialAnnouncement}
        >
        </Channel5Layout>
    );
};

export default WhoopsieDaisy;