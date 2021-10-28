import "./SearchStyle.css";
import { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function SearchWord(){
let [word, setWord]= useState("");
let [wordData, setWordData]=useState(null);

function showResult(response){
  setWordData(response.data[0]);
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
  <div className="AppBody">
   <h1 className="title">📔English Dictionary</h1>
<div className="searchEngine">
<form onSubmit={search}>         
         <div className="input-group mb-3">
  <input type="search" className="form-control" placeholder="Search" onChange={searchInput}/>
  <div className="input-group-append">
    <button className="btn btn-info" type="submit">Search</button>
  </div>
</div>
<Result result={wordData}/>
</form>
<div className="Meanings">
  
   <small>
     This page was coded by <a href="https://www.linkedin.com/in/nike-reintamm-1b61b7146/">Nike</a> 
     {" "} and is open sourced at <a href="https://github.com/niketamm/dictionary-app">Github</a>
     {" "} and hosted on <a href="https://wizardly-hoover-dfd383.netlify.app/">Netlify</a>
   </small>
   
   </div>
</div>
</div>)

     ;}