import React, { useState, useEffect } from "react";
import useAudio from "./useAudio.js"

function Keyboard(props) {
    // destructuring props to be more easily used
    const {note, className, keybinding} = props;
    
    // calling useAudio function to make audio url for each note
    const [playMusic, stopAndReset] = useAudio(note.url);

    // used to change state true/false to toggle css playing class 
    const [playing, setPlaying] = useState(false);

    useEffect( () => {
        // adding event listeners for playing piano with keyboard
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
    })

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
        // specific keybinding event or tab selected enter
        if(e instanceof KeyboardEvent && (e.key === keybinding || (e.key === "Enter" && e.target.dataset.note === note.key))){
            playMusic();
            setPlaying(true);
        }
    }

    function onKeyUp(e) {
        if(e instanceof KeyboardEvent && (e.key === keybinding || (e.key === "Enter" && e.target.dataset.note === note.key))){
            stopAndReset();
            setPlaying(false);
        }
    }

    // event listener functions for touch screens
    function onTouchStart(e) {
        playMusic();
        setPlaying(true);
    }

    function onTouchEnd(e) {
        stopAndReset();
        setPlaying(false);
    }

    return (
        <button
            // ternary operator checking playing state to toggle css playing class
            className={ `${className} ${note.key} ${playing ? "playing" : ""}`}
            id={ note.key }
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onKeyDown={() => onKeyDown()}
            onKeyUp={() => onKeyUp()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            data-note={note.key}
        >
            {keybinding.toUpperCase()}
        </button>
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
    