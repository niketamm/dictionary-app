import MeaningLoop from "./MeaningLoop";
import Synonyms from "./Synonyms"

export default function Meaning(props){
    console.log(props.data)

    return  ( 
        <div>
        <div className="Meanings">
    
            <strong >
           Phonetics: {" "}
           <span className="phonetic">{props.data.phonetic}</span> </strong> 
            <small className="origin">
            <br />
         {props.data.meanings[0].definitions[0].synonyms.map(function
        (synonym, index){return (<span key={index}>
                <Synonyms synonym={synonym}/>
            </span>
                  );
        })}
        <br />
         {props.data.origin}
            </small>

        </div>
        
    {props.data.meanings.map (function 
        (meaning, index){
        return (
            <div key={index}>
            <MeaningLoop loop={meaning}/>
            </div>
        );
    })}
      </div>

     );

     }