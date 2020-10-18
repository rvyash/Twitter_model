/* Right sidebar JS component file for other feed on right */
import React from 'react';
import "./Widzard.css";
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";

function Widzard() {
    return ( <
        div className = "widzard" >
        <
        div className = "widzard_input" >
        <
        SearchIcon className = "widzard_search_icon" / >
        <
        input placeholder = "Search Twitter"
        type = "text" / >
        <
        /div> <
        div className = "widzard_container" >
        <
        h2 > What 's  happening</h2> <
        TwitterTweetEmbed tweetId = { 1299283603436851201 }
        /> <
        TwitterTimelineEmbed sourceType = "profile"
        screenName = "PUBGMOBILE"
        option = {
            { height: 400 } }
        /> <
        /div> <
        /div>
    )
}

export default Widzard
