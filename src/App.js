import './App.css';
import firebase from "./firebase.js";
import { useState, useEffect } from "react";

function App() {

  const [one, setOne] = useState("");

  // console.log(storage);
  // storage.getDownloadURL()
  const note = document.getElementById('key');

  const playMusic = () => {
    note.play();
  }

  const pauseMusic = () => {
    note.pause();
  }

  useEffect( () => {
    // const stRef = firebase.storage().ref()
    const storage = firebase.storage();
    // const img = storage.root;
  
    const files = [ 'rex.mp3'];
    files.map( filename => {
      storage
        .ref(`/${filename}`)
        .getDownloadURL()
        .then( url => {
          console.log(url);
          setOne(url);
        })
      
    })
  }, [])


  return (
    <div className="App">
      <h1>hello</h1>
      
      {
        
        <>
          <audio controls src={one} id="key">
          
          </audio>

          <button onClick={() => playMusic()}>button</button>
          <button onClick={() => pauseMusic()}>button</button>
        </>
        }
    </div>
  );
}

export default App;
