import "./SearchStyle.css";
import { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function SearchWord(){
let [word, setWord]= useState("");
let [wordData, setWordData]=useState(null);

function showResult(response){
  setWordData(response.data);
}

function search(event){
    event.preventDefault();

let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
axios.get(apiUrl).then(showResult);
}

function searchInput(event) {
    setWord(event.target.value)
    ;}



return (
<div className="searchEngine">
<form onSubmit={search}>         
         <div className="input-group mb-3">
  <input type="search" className="form-control" placeholder="Search" onChange={searchInput}/>
  <div className="input-group-append">
    <button className="btn btn-info" type="submit">Button</button>
  </div>
</div>
<Result result={wordData}/>
</form>
</div>)

     ;}