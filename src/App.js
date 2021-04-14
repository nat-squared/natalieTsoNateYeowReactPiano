import './App.css';
import firebase from "./firebase.js";
import { useState, useEffect } from "react";
import { BlackKey, WhiteKey } from "./Keyboard.js"

const keybindings = [
  "a",
  "w",
  "s",
  "e",
  "d",
  "f",
  "t",
  "g",
  "y",
  "h",
  "u",
  "j",
  "k",
];

function App() {
  const [one, setOne] = useState([]);

  useEffect( () => {
    async function fetchMyFirebase() {
      const storage = firebase.storage();

      const files = [
        "C4.mp3",
        "Csharp4.mp3",
        "D4.mp3",
        "Dsharp4.mp3",
        "E4.mp3",
        "F4.mp3",
        "Fsharp4.mp3",
        "G4.mp3",
        "Gsharp4.mp3",
        "A4.mp3",
        "Asharp4.mp3",
        "B4.mp3",
        "C5.mp3"
      ];

      const filesUrls = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = await storage
        .ref(`/${file}`)
        .getDownloadURL();
        filesUrls.push({
          key: file.slice(0, -4),
          url: url
        });
      }
      setOne(filesUrls);
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
          <p> Please use your mouse to click on the keys or use your keyboard with the letters shown to play the pian&sup2;o </p>
        </div>
        <ul>
          <div></div>
          {one.map( (note, i) => {
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