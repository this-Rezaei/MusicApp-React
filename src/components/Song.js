import React from "react";

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img alt={currentSong.name} src={currentSong.cover}></img>

            <h2> {currentSong.name}</h2>
            <p>{currentSong.artist}</p>
        </div>
    );
};

export default Song;
