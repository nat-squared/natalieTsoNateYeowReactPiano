import React, { useState, useEffect } from "react";
// import UseAudio from "./UseAudio.js"

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

    return [playMusic, stopAndReset];
};


function Keyboard(props) {
    // destructuring props to be more easily used
    const {note, className, keybinding} = props
    
    // calling useAudio function to make audio url for each note
    const [playMusic, stopAndReset] = useAudio(note.url);

    // used to change state true/false to toggle css playing class 
    const [playing, setPlaying] = useState(false);

    useEffect( () => {
        // adding event listeners for playing piano with keyboard
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
    }, [onKeyDown, onKeyUp] )

    function onMouseDown(e) {
        playMusic();
        setPlaying(true);
    };

    function onMouseUp(e) {
        stopAndReset();
        setPlaying(false);
    }

    function onKeyDown(e) {
        // if statement to target the audio of key pressed down
        if(e.key === keybinding){
            playMusic();
            setPlaying(true);
        }
    }

    function onKeyUp(e) {
        if(e.key === keybinding){
            stopAndReset();
            setPlaying(false);
        }
    }

    // event listener functions for touch screens
    function onTouchStart(e) {
        playMusic();
    }

    function onTouchEnd(e) {
        stopAndReset();
    }

    return (
        <li
            // ternary operator checking playing state to toggle css playing class
            className={ `${className} ${playing ? "playing" : ""}`}
            id={ note.key }
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {keybinding.toUpperCase()}
        </li>
    )
}

// functions called in App.js to render black/white keys that call Keyboard to return information needed
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
