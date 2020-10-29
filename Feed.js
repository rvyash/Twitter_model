/* Central feed for the twitter posts*/

import React, { useState, useEffect } from 'react';
import './Feed.css';
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return ( 
        <div className = "feed" >
        { /* Header*/ } 
        <div className = "feed_header" >
        <h2 > Home < /h2> 
        </div>

        <Tweetbox / >

        { /* Posts*/ }

        {
            posts.map(post => ( <
                Post key = { post.text }
                displayName = { post.displayName }
                userName = { post.userName }
                verified = { post.verified }
                text = { post.text }
                avatar = { post.avatar }
                image = { post.image }
                />
            ))
        } <
        /div>
    );
}

export default Feed
