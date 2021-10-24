import Meaning from "./Meaning";

export default function  Result(props){
    console.log(props.result)
    if (props.result){
        return (
    <div className="results">
        <h2>{props.result[0].word}</h2>
    
        <Meaning data={props.result[0]}/>
        </div>
        );
} else {
    return null;
    }
    }