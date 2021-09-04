import React, { useState, useRef } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./style/App.scss";
import Data from "./util";
const App = () => {
    //Ref
    const audioRef = useRef(null);

    const [data, setData] = useState(Data());
    const [currentSong, setcurrentSong] = useState(data[0]);
    const [play, setplay] = useState(false);

    const [songInfo, setsongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    const TimeUpdatHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        // console.log(duration);
        setsongInfo({ ...songInfo, currentTime: current, duration: duration });
    };
    return (
        <div className="app">
            <Song currentSong={currentSong} />
            <Player
                play={play}
                setplay={setplay}
                songInfo={songInfo}
                setsongInfo={setsongInfo}
                audioRef={audioRef}
                currentSong={currentSong}
            />
            <Library datas={data} play={play} audioRef={audioRef} setcurrentSong={setcurrentSong} />
            <audio
                onTimeUpdate={TimeUpdatHandler}
                ref={audioRef}
                src={currentSong.audio}
                onLoadedMetadata={TimeUpdatHandler}
            ></audio>
        </div>
    );
};

export default App;
