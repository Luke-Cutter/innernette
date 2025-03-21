import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const WithWill = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Quilting with Will: The Black Square",
            description: "Will and Lynette explore quilting while Will processes childhood trauma through fabric. Features his signature black square representing his father.",
            note: "TMI/TLI/JEI discussion included"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "Quilting with Will: The Studded Belt",
            description: "Will incorporates a recreation of his father's belt into a quilt while discussing bed-wetting incidents and economic struggles.",
            note: "Multiple pants changes required"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Forting with Will: Couch Forts",
            description: "Will builds forts with borrowed children while sharing disturbing stories about toilet inspections and ice cream-related trauma.",
            note: "No children were harmed in filming"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "Quilting with Will: Coffin Comfort",
            description: "Will designs a quilt for his eventual burial while processing memories of forced dog cooking and carrot consumption.",
            note: "Dogs should be raw and living"
        },
        {
            season: 1,
            episodeNumber: 5,
            title: "Forting with Will: Belt Holes",
            description: "Fort building session derails into extensive monologue about belt hole origins and involuntary urination incidents.",
            note: "Extra pants on standby"
        }
    ];

    const cast = [
        {
            name: "Will Grello",
            role: "Host/Trauma Survivor",
            image: "images/pages/categories/channel5andfriends/WithWill/willgrello.png",
            note: "Requires frequent pants changes"
        },
        {
            name: "Lynette",
            role: "Quilting Instructor",
            image: "images/pages/categories/channel5andfriends/WithWill/lynette.png",
            note: "Doesn't realize how much Will thanks her"
        },
        {
            name: "Various Children",
            role: "Fort Building Participants",
            image: "images/pages/categories/channel5andfriends/WithWill/children.png",
            note: "None are his own"
        }
    ];

    const airTime = {
        day: "Thursday",
        time: "12:00 AM",
        timezone: "EST",
        note: "Schedule may vary based on Will's emotional state and pants inventory"
    };

    const description = `"...With Will" encompasses two distinct yet thematically linked craft shows: "Quilting with Will" and "Forting with Will." Watch as host Will Grello attempts to teach crafting skills while processing deep-seated childhood trauma. Each episode features either quilting projects or fort construction, inevitably leading to disturbing revelations about Will's relationship with his father, involuntary bodily functions, and various childhood incidents involving belts, dogs, and toilet inspections.`;

    const specialAnnouncement = "Viewer discretion strongly advised. Extra pants and towels available for host at all times. All crafting segments may be interrupted by trauma processing.";

    return (
        <Channel5Layout
            showTitle="...With Will"
            showImage="images/pages/categories/channel5andfriends/CatPage/QuiltingWithWill.png"
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

export default WithWill;