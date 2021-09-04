import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({ data }) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {data.map((data) => (
                    <LibrarySong data={data} key={data.id} />
                ))}
            </div>
        </div>
    );
};

export default Library;
