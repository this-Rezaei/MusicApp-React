import React, { useState } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./style/App.scss";
import Data from "./util";
const App = () => {
    const [data, setData] = useState(Data());
    const [currentSong, setcurrentSong] = useState(data[0]);
    const [play, setplay] = useState(false);
    return (
        <div className="app">
            <Song currentSong={currentSong} />
            <Player play={play} setplay={setplay} currentSong={currentSong} />
            <Library data={data} />
        </div>
    );
};

export default App;
