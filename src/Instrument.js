import {useEffect, useState} from "react";

export default Instrument;

function Instrument(props) {

    const [key, setKey] = useState({ notePlaying: [] })

    useEffect( () => {
        document.querySelectorAll("li").forEach(key => {
            key.addEventListener("keydown", handleKeyDown);
            key.addEventListener("keyup", handleKeyUp);
        })
    }, [])


    const Instrument = ({
        
    })

    const isRegularKey = (e) => {
        return !e.ctrlKey && !e.metaKey && !e.shiftKey;
    }


    const getNote = keyboardKey => {
        const { keyboardMap } = props;
        return keyboardMap[keyboardKey];
    }

    const handleKeyDown = (e) => {
        if (isRegularKey(e)) {
            const note = getNote(e.key);
            
            
            
        }
    }

    const handleKeyUp = (e) => {
        if (isRegularKey(e)) {
            const note = getNote(e.key);
            
            
        }
    }

    // const startPlayingNote = note => {
    //     setKey({ ...key, notePlaying: [...notePlaying, note]});
        
        
    // }

    // const stopPlayingNote = note => {
    //     setKey(({ 
    //         ...notePlaying,
    //         notePlaying: key.notePlaying.filter( notePlaying => {
    //             return notePlaying !== note
    //         })
    //     }))
    // }

    const getKeyboardShortcut = (keyboardMap, note) => {
        const keyboardShortcuts = Object.keys(keyboardMap);
        return keyboardShortcuts.filter(shortcut => {
            return keyboardMap[shortcut] === note;
        })
    }


    // return(

    // )

}