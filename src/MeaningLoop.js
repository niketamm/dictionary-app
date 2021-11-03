import Definition from "./Definition";

export default function MeaningLoop(props) {
    return (
         
        <div className="results">
        <h3> {props.loop.partOfSpeech} </h3>
            {props.loop.definitions.map(function
            (definition, index){
            return (
            <div key={index}>
            <ul>
            <ol>
            <Definition definition={definition}/>
            </ol>
            </ul>
            </div>

            );
            })}
        </div>
);
}