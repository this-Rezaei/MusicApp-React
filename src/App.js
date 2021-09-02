import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./style/App.scss";

const App = () => {
    
    return (
        <div className="App">
            <Song  />
            <Player />
        </div>
    );