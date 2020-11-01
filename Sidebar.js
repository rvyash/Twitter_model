/* Sidebar.js:- Sidebar component for the twitter model  
    */
import React from 'react';
import './Sidebar.css'
import SidebarOption from "./SidebarOption";

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderTwoToneIcon from '@material-ui/icons/BookmarkBorderTwoTone';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import { Button } from "@material-ui/core";


function Sidebar() {
    return ( 
        <div className = "sidebar" > { /*  Twitter Icon*/ } 
        <TwitterIcon className = "sidebar_twitterIcon" / >

        <SidebarOption active Icon = { HomeIcon }
        text = "Home" />
        <SidebarOption Icon = { ExploreOutlinedIcon }
        text = "Explore" />
        <SidebarOption Icon = { NotificationsIcon }
        text = "Notifications" />
        <SidebarOption Icon = { MailOutlineIcon }
        text = "Messages" />
        <SidebarOption Icon = { BookmarkBorderTwoToneIcon }
        text = "Bookmark" />
        <SidebarOption Icon = { ListAltOutlinedIcon }
        text = "List" />
        <SidebarOption Icon = { PersonIcon }
        text = "Profile" />
        <SidebarOption Icon = { MoreHorizIcon }
        text = "More" />

        <Button variant = "outlined"
        className = "sidebar_tweet"
        fullWidth > Tweet < /Button> { /* Option 1 */ } { /* Option 2 */ } { /* Option 3 */ } { /* Option 3 */ } { /* Option 4 */ } 
       
        </div>
    )
}

export default Sidebar
