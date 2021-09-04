import React from "react";

const LibrarySong = ({ data }) => {
    return (
        <div className="library-song">
            <img alt={data.name} src={data.cover}></img>
            <div className="song-description">
                <h5> {data.name}</h5>
                <p>{data.artist}</p>
            </div>
        </div>
    );
};

export default LibrarySong;
