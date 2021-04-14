import { useState, useEffect } from "react";

const UseAudio = note => {
    // const { note } = props
    // based on https://www.codegrepper.com/code-examples/javascript/react+play+audio+from+url
    const [audio] = useState(new Audio(note.url));
    const [playing, setPlaying] = useState(false);

    const playMusic = () => {
        setPlaying(true);
    };

    const stopAndReset = () => {
        setPlaying(false);
    };

    useEffect(() => {
        if (playing) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }

    }, [playing, audio] );

    return [playMusic, stopAndReset];
    
}

export default UseAudio;