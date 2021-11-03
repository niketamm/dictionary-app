import MeaningLoop from "./MeaningLoop";
import Synonyms from "./Synonyms";

export default function Meaning(props){
   

    function playSound(event){
    event.preventDefault();
    let audio = new Audio(props.data.phonetics[0].audio);
    audio.play();
    }

    if (props.data) {
        return  ( 
    <div>
         <h2 className="word">{props.data.word}</h2>
        <div className="Meanings">
    
                <strong >
                    Phonetics: {" "}
                    <span className="phonetic">
                        {props.data.phonetic}
                        <button className="sound" onClick={playSound}> 
                        🔊 
                        </button>
                    </span> 
                </strong> 
                <small className="origin">
                    <br />
                    {props.data.meanings[0].definitions[0].synonyms.map(function
                    (synonym, index){return (
                    <span key={index}>
                    <Synonyms synonym={synonym}/>
                    </span>
                  );})}
                    <br />
                    {props.data.origin}
                </small>
                
        </div>

        <div className="Meanings">
                {props.data.meanings.map (function 
                
                (meaning, index){
                return (
                <div key={index}>
                <MeaningLoop loop={meaning}/>
                </div>
                );})}
        </div>
    
    </div>

     );

     } else {
    return null;
    }
    }