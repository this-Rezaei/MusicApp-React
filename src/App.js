import React, { useState, useRef } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
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
    const [ToggelLibrary, setToggelLibrary] = useState(false);

    const [songInfo, setsongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });

    const TimeUpdatHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;

        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        //Calc Percentage
        const animation = Math.round((roundedCurrent / roundedDuration) * 100);
        // console.log(duration);
        setsongInfo({
            ...songInfo,
            currentTime: current,
            duration: duration,
            animationPercentage: animation,
        });
    };
    const songEndHandler = async () => {
        let currentIndex = data.findIndex((data) => data.id === currentSong.id);
        await setcurrentSong(data[currentIndex + 1]);
        if (play) audioRef.current.play();
    };
    return (
        <div className="app">
            <Nav
                ToggelLibrary={ToggelLibrary}
                setToggelLibrary={setToggelLibrary}
            />
            <Song currentSong={currentSong} />
            <Player
                play={play}
                setplay={setplay}
                songInfo={songInfo}
                setsongInfo={setsongInfo}
                audioRef={audioRef}
                currentSong={currentSong}
                setcurrentSong={setcurrentSong}
                datas={data}
                setData={setData}
            />
            <Library
                datas={data}
                setData={setData}
                play={play}
                audioRef={audioRef}
                setcurrentSong={setcurrentSong}
                ToggelLibrary={ToggelLibrary}
            />
            <audio
                onTimeUpdate={TimeUpdatHandler}
                ref={audioRef}
                src={currentSong.audio}
                onLoadedMetadata={TimeUpdatHandler}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
};

export default App;
