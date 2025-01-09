import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const FocusOnComedy = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Tim & Eric's DVR Dilemma",
            description: "Michael Ian Black struggles to understand Tim and Eric's show scheduling while they discuss marijuana cigarettes and bug-eyed weekend writing sessions.",
            note: "Microscope. Microscope."
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "The Quarter Hour Mystery",
            description: "An increasingly confused Michael Ian Black attempts to comprehend how a live action show airs on Cartoon Network at 'quarter hour on 15.'",
            note: "Wait, wait, wait, wait. Go back."
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Writing Process Revealed",
            description: "Tim and Eric explain their creative process, leading to detailed discussions about 'partaking' and weekend writing sessions.",
            note: "That's awesome."
        }
    ];

    const cast = [
        {
            name: "Michael Ian Black",
            role: "Bob Ross But Funny",
            image: "images/pages/categories/entertainment/FocusOnComedy/michaelianblack.png",
            note: "HE HE HEE"
        },
        {
            name: "Tim Heidecker",
            role: "Guest/Marijuana Cigarette Enthusiast",
            image: "images/pages/categories/entertainment/FocusOnComedy/timheidecker.png",
            note: "Rolls it up"
        },
        {
            name: "Eric Wareheim",
            role: "Guest/Weekend Writer",
            image: "images/pages/categories/entertainment/FocusOnComedy/ericwareheim.png",
            note: "Eyes get bugged"
        }
    ];

    const airTime = {
        day: "Monday",
        time: "5:12 PM",
        timezone: "EST",
        note: "Check your DVR settings carefully"
    };

    const description = `Join Michael Ian Black as he attempts to understand modern comedy through increasingly bewildering interviews. Watch as he valiantly tries to maintain the format of a traditional talk show while his guests, like Tim and Eric, challenge every conventional aspect of television. Each episode features Michael's signature mix of he he he-ing, genuine interest, and a Bob-Ross esque act to keep the conversation on track. Inspirational stuff!`;

    const specialAnnouncement = "Show may be difficult to locate on your DVR. Good luck.";

    return (
        <Channel5Layout
            showTitle="Michael Ian Black Focus on Comedy"
            showImage="images/pages/categories/entertainment/CatPage/FocusOnComedy.jpg"
            description={description}
            episodes={episodes}
            cast={cast}
            airTime={airTime}
            specialAnnouncement={specialAnnouncement}
        >
        </Channel5Layout>
    );
};

export default FocusOnComedy;