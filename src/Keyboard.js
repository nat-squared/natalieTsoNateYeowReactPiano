import React, { useState, useEffect } from "react";

// based on https://www.codegrepper.com/code-examples/javascript/react+play+audio+from+url
const useAudio = url => {
    

    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    

    const playMusic = () => {
        setPlaying(true);
    };
    const stopAndReset = () => {
        setPlaying(false);
    };

    useEffect(() => {
        // playing ? 
        //     audio.play() 
        //     :
        //     audio.pause()
        //     setAudio(audio.currentTime = 0) 
        if (playing) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;

        }
    }, [playing, audio] );


    return [playMusic, stopAndReset];
};

function Keyboard(props) {
    const {note, className, keybinding} = props

    const [playMusic, stopAndReset] = useAudio(note.url);

    function onMouseDown(e) {
        playMusic();
    };

    function onMouseUp(e) {
        stopAndReset();
    }

    function onKeyDown(e) {
        console.log(e);
    }

    function onKeyUp(e) {
        console.log(e);
    }

    return (
        <li
            className={ className }
            id={ note.key }
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
        >
            {keybinding.toUpperCase()}
        </li>
    )
}

function BlackKey(props) {
    return <Keyboard 
                keybinding={props.keybinding}
                className="blackKey"
                note={props.note} />;
}

function WhiteKey(props) {
    return <Keyboard 
                keybinding={props.keybinding}
                className="whiteKey"
                note={props.note} />;
}

export {
    Keyboard,
    WhiteKey,
    BlackKey
};
