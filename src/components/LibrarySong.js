import React from "react";

const LibrarySong = ({ data, setcurrentSong, datas, id, audioRef, play }) => {
    const songSelectHandler = () => {
        const selectedSong = datas.filter((state) => state.id === id);
        setcurrentSong(selectedSong[0]);
        //check if the song is playing
        if (play) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                });
            }
        }
    };
    return (
        <div onClick={songSelectHandler} className="library-song">
            <img alt={data.name} src={data.cover}></img>
            <div className="song-description">
                <h5> {data.name}</h5>
                <p>{data.artist}</p>
            </div>
        </div>
    );
};

export default LibrarySong;
