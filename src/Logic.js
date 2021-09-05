export const playAudio = (play, audioRef) => {
    if (play) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then((audio) => {
                audioRef.current.play();
            });
        }
    }
};
export const NewSong = (datas, id) =>
    datas.map((data) => {
        if (data.id === id) {
            return { ...data, active: true };
        } else {
            return { ...data, active: false };
        }
    });
