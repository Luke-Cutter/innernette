import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const AfternoonReview = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Today's Topics: Women's Issues",
            description: "A man in a suit silently demonstrates proper umbrella operation for 22 minutes. No context provided.",
            note: "Umbrellas provided by Channel 5 Props Department"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "Beauty Tips & More",
            description: "Three men in turtlenecks perform an interpretive dance about filing cabinets. No discussion follows.",
            note: "Filing cabinets remain on set for next 4 episodes"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Special Women's Health Episode",
            description: "A man in business casual attire alphabetizes a bookshelf while humming show tunes. Camera occasionally cuts to empty chair.",
            note: "Books provided by local library"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "Fashion Week Special",
            description: "Two men in matching sweater vests practice their tax returns in complete silence. Occasional meaningful glances at camera.",
            note: "Tax forms from 1987"
        },
        {
            season: 1,
            episodeNumber: 5,
            title: "Cooking for the Family",
            description: "A man in a three-piece suit demonstrates various sitting positions in different chairs. No food appears.",
            note: "Chairs never seen again"
        }
    ];

    const cast = [
        {
            name: "Various Men",
            role: "Performers",
            image: "images/pages/categories/channel5andfriends/AfternoonReview/performers.png",
            note: "No introductions provided"
        },
        {
            name: "Blue Stage",
            role: "Recurring Set Piece",
            image: "images/pages/categories/channel5andfriends/AfternoonReview/BlueStage.png",
            note: "Featured in 60% of episodes"
        }
    ];

    const airTime = {
        day: "Weekday",
        time: "3:00 PM",
        timezone: "EST",
        note: "Check local listings for unexplained schedule changes"
    };

    const description = `Afternoon Review presents itself as a typical daytime television show for women, complete with traditionally feminine-focused episode titles. However, each episode instead features unexplained performances by various men engaging in mundane activities with no context or follow-up discussion. The show maintains its daytime talk show aesthetic while completely subverting content expectations.`;

    const specialAnnouncement = "Upcoming episodes may or may not feature planned content. Women's issues may or may not be discussed. Men in business attire will definitely appear.";

    return (
        <Channel5Layout
            showTitle="Afternoon Review: The Daytime Show for Women"
            showImage="images/pages/categories/channel5andfriends/CatPage/AfternoonReview.png"
            description={description}
            episodes={episodes}
            cast={cast}
            airTime={airTime}
            specialAnnouncement={specialAnnouncement}
        >
        </Channel5Layout>
    );
};

export default AfternoonReview;