import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({
    datas,
    setcurrentSong,
    ToggelLibrary,
    audioRef,
    play,
    setData,
}) => {
    return (
        <div className={`library ${ToggelLibrary ? "active-library" : " "}`}>
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
                        setData={setData}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
