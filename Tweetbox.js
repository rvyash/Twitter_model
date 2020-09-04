import React, { useState } from 'react'
import "./Tweetbox.css";
import { Button, Avatar } from "@material-ui/core";
import db from './firebase';

function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "GitHub education",
            userName: "gitty",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "data:image/png;base64,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",
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return ( <
        div className = "tweetbox" >
        <
        form >
        <
        div className = "tweetbox_input" >
        <
        Avatar src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF80JZsLBnB6vf8FEcA-rLw03ABiFFo329uw&usqp=CAU" / >
        <
        input onChange = { e => setTweetMessage(e.target.value) }
        value = { tweetMessage }
        placeholder = "whats happening?"
        type = "text" / >
        <
        /div>  <
        input value = { tweetImage }
        onChange = {
            (e) => setTweetImage(e.target.value) }
        className = "input_image"
        placeholder = "Image URL"
        type = "text" / >
        <
        Button onClick = { sendTweet }
        type = "submit"
        className = "tweetBox__tweetButton" >
        Tweet <
        /Button> <
        /form> <
        /div>
    )
}

export default Tweetbox