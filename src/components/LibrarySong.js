import React from "react";
import { playAudio, NewSong } from "../Logic";
const LibrarySong = ({
    data,
    setcurrentSong,
    datas,
    id,
    audioRef,
    play,
    setData,
}) => {
    const songSelectHandler = async () => {
        const selectedSong = datas.filter((state) => state.id === id);
        await setcurrentSong(selectedSong[0]);
        //check if the song is playing
        // const NewSong = datas.map((data) => {
        //     if (data.id === id) {
        //         return { ...data, active: true };
        //     } else {
        //         return { ...data, active: false };
        //     }
        // });

        await NewSong(datas, id);
        await playAudio(play, audioRef);
    };
    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${data.active ? "selected" : ""}`}
        >
            <img alt={data.name} src={data.cover}></img>
            <div className="song-description">
                <h5> {data.name}</h5>
                <p>{data.artist}</p>
            </div>
        </div>
    );
};

export default LibrarySong;
