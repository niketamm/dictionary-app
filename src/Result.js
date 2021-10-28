import Meaning from "./Meaning";

export default function  Result(props){
    if (props.result){
        return (
    <div>
    <div>
        <h2 className="word">{props.result.word}</h2>
    </div>
    <div>
        <Meaning data={props.result}/>
    </div>
    </div>
        );
} else {
    return null;
    }
    }