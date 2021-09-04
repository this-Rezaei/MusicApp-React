import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({ currentSong, play, setplay }) => {
    const audioRef = useRef(null);
    const playSongHandler = () => {
        setplay(!play ? audioRef.current.play() : audioRef.current.pause());
    };
    const TimeUpdatHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        // console.log(duration);
        setsongInfo({ ...songInfo, currentTime: current, duration: duration });
    };
    const getTime = (time) => {
        const minutes = Math.floor(time / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(time % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    };
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;

        setsongInfo({ ...songInfo, currentTime: e.target.value });
    };
    const [songInfo, setsongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>

                <input
                    type="range"
                    min="0"
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />

                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    className="skip-back"
                    size="2x"
                    icon={faAngleDoubleLeft}
                />

                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    size="2x"
                    icon={play ? faPause : faPlay}
                />

                <FontAwesomeIcon
                    className="skip-forward"
                    size="2x"
                    icon={faAngleDoubleRight}
                />
            </div>
            <audio
                onTimeUpdate={TimeUpdatHandler}
                ref={audioRef}
                src={currentSong.audio}
                onLoadedMetadata={TimeUpdatHandler}
            ></audio>
        </div>
    );
};

export default Player;
