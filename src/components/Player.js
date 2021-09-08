import React, { useEffect } from "react";
import { playAudio, NewSong } from "../Logic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
    currentSong,
    play,
    setplay,
    audioRef,
    setsongInfo,
    songInfo,
    setcurrentSong,
    datas,
    setData,
}) => {
    //UseEffect
    useEffect(() => {
        NewSong(datas, currentSong.id);
    }, [currentSong]);

    //EventHandler

    const playSongHandler = () => {
        setplay(!play ? audioRef.current.play() : audioRef.current.pause());
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
    //next track
    const skipTrackHandler = (direction) => {
        let currentIndex = datas.findIndex(
            (data) => data.id === currentSong.id
        );
        if (direction === "skip-forward") {
            setcurrentSong(datas[currentIndex + 1]);
        } else if (direction === "skip-back") {
            setcurrentSong(datas[currentIndex - 1]);
            playAudio(play, audioRef);
        } else {
            setcurrentSong(datas);
        }
        playAudio(play, audioRef);
    };
    const trackanim = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
    };
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div className="track">
                    <input
                        type="range"
                        min="0"
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        onChange={dragHandler}
                    />
                    <div style={trackanim} className="animate-track"></div>
                </div>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-back")}
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
                    onClick={() => skipTrackHandler("skip-forward")}
                    className="skip-forward"
                    size="2x"
                    icon={faAngleDoubleRight}
                />
            </div>
        </div>
    );
};

export default Player;
