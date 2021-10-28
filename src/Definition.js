
import Example from "./Example"

export default function Definition(props){
    return (
        <div className="results">
            {props.definition.definition}
            <br />
            <Example example={props.definition.example}/>
            
        </div>
    )
}