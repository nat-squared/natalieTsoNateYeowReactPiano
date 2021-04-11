function Keyboard(props) {
    return (
        <>
            <li className={props.class} id={ props.note.key }>
                
                <audio controls src={ props.note.url }></audio>
            </li>
            
            
        </>
      )
}

export default Keyboard;
