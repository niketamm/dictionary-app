import Definition from "./Definition";

export default function MeaningLoop(props) {
    console.log (props.loop)
    return (
    
    <div className="Meanings">

        <h3> {props.loop.partOfSpeech} </h3>
        <div className="results">
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

           

    
    

</div>);
}