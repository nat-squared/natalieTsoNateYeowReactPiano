import './App.css';
import firebase from "./firebase.js";
import { useState, useEffect } from "react";
import Keyboard from "./Keyboard.js"
// import Instrument from "./Instrument.js"

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

      console.log(filesUrls);
      setOne(filesUrls);
    };
    fetchMyFirebase();
  }, []);


  return (
    <div className="App">
      <h1>hello</h1>

      <ul>
        {one.map( (note, i) => {
          return i===1 || i===3 || i===6 || i===8 || i===10 ? <Keyboard class="blackKey" key={i} note={note} /> : <Keyboard class="whiteKey" key={i} note={note} />

    
        })}
        {/* {one.map( (note, i) => {
          return <Keyboard key={i} note={note} />
        })} */}
      </ul>
    </div>
  );
}

export default App;
