export default function Synonyms(props){
    if(props.synonym) {return (
    <span className="synonyms">{props.synonym}{" "}</span>
    );
} else {return (
<span>There are no synonyms</span>)
;}
;}