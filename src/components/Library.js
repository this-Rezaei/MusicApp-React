import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({ datas, setcurrentSong, audioRef,play }) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {datas.map((data) => (
                    <LibrarySong
                        datas={datas}
                        data={data}
                        id={data.id}
                        key={data.id}
                        setcurrentSong={setcurrentSong}
                        audioRef={audioRef}
                        play={play}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
