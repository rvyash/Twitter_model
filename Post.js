/*Post.js: post page  */
import React, { forwardRef } from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";


const Post = forwardRef(({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}, ref) => {
    return ( <div className = "post"
        ref = { ref } >
        <div className = "post_avatar" >
        <Avatar src = { avatar }/> 
        </div>
        <div className = "post_body" >
        <div className = "post_header" >
        <div className = "post_header_text" >
        <h3> { displayName } 
            <span className = "post_header_special" > { verified && < VerifiedUserIcon className = "post_badge" / > }
        @ { userName } 
            </span>
            </h3>
            </div> 
            <div className = "post_header_description" >
        <p> { text } < /p> 
            </div> 
            </div> 
            <img src = { image }
        alt = "" / >
        <div className = "post_footer" >
        <ChatBubbleOutlineIcon fontSize = "small" / >
        <RepeatIcon fontSize = "small" / >
        <FavouriteBorderIcon fontSize = "small" / >
        <PublishIcon fontSize = "small" / >
        </div> 
            </div>
            </div>
    )
});

export default Post
