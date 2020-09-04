import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widzard from "./Widzard";

function App() {
    return ( <
        div className = "app" >

        { /* Sidebar */ } <
        Sidebar / >

        { /* Feed */ } <
        Feed / > { /* Secondary right side */ } <
        Widzard / >
        <
        /div>
    );
}

export default App;