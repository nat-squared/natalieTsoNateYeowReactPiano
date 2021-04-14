import { useState, useEffect } from "react";

// based on https://www.codegrepper.com/code-examples/javascript/react+play+audio+from+url
const useAudio = url => {
    // no setAudio needed because audio doesn't need to be changed
    // since function runs for each note, only one url is assigned per note
    const [audio] = useState(new Audio(url));
    // used to change state true/false to play audio
    const [playing, setPlaying] = useState(false);

    const playMusic = () => {
        setPlaying(true);
    };

    const stopAndReset = () => {
        setPlaying(false);
    };

    useEffect(() => {
        // if statement to play or pause and reset
        if (playing) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [playing, audio] );

    return [playMusic, stopAndReset]
}

export default useAudio;