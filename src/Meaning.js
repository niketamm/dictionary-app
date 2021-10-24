export default function Meaning(props){
    return   <div className="Meanings">
        <div>{props.data.phonetic}</div>
     <div>{props.data.meanings[0].definitions[0].definition}</div>
     </div>;}