import './App.css';
import firebase from "./firebase.js";

import { keybindings, files } from "./constants.js"
import { useState, useEffect } from "react";
import { BlackKey, WhiteKey } from "./Keyboard.js";

function App() {
  const [pianoKey, setPianoKey] = useState([]);

  useEffect( () => {
    async function fetchMyFirebase() {
      const storage = firebase.storage();

      const filesUrls = [];

      // For loop to get download URL from firebase storage for each note
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = await storage
        .ref(`/${file}`)
        .getDownloadURL();
        // Push data from firebase to an array to be used in setPianoKey
        filesUrls.push({
          key: file.slice(0, -4),
          url: url
        });
      }
      setPianoKey(filesUrls);
    };
    fetchMyFirebase();
  }, []);

  // RETURN ==========================================
  return (
    <div className="App">
      <header>
        <h1>Pia<span>n</span>&sup2;o</h1>
      </header>

      <main>
        <div className="wrapper">
          <p className="computerInstructions"> Please use your mouse to click on the keys or 
            use your keyboard with the letters shown to play the pian&sup2;o </p>

            <p className="mobileInstructions"> For best experience, please rotate mobile device into landscape mode </p>
        </div>
        <ul>
          <div></div>
          {/* map through array to display keys on dom */}
          {pianoKey.map( (note, i) => {
            // ternary operator to display white or black keys
            return i===1 || i===3 || i===6 || i===8 || i===10 ?
              <BlackKey keybinding={keybindings[i]}
                        key={i}
                        note={note} />
            :
              <WhiteKey keybinding={keybindings[i]}
                        key={i} 
                        note={note} />
          })}
        </ul>
      </main>

      <footer>
        <h3>Created by <a href="https://github.com/midnightorca" target="_blank" rel="noreferrer">Natalie Tso</a> and <a href="https://github.com/NateY98" target="_blank" rel="noreferrer">Nate Yeow</a> at <a href="https://junocollege.com/" target="_blank" rel="noreferrer">Juno College</a></h3>
      </footer>
    </div>
  );
}

export default App;