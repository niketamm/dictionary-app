import { useState } from "react";
import axios from "axios";
import SlideShow from "./SlideShow";
import Meaning from "./Meaning";


export default function Dictionary(props){
let [word, setWord]= useState(props.defaultWord);
let [wordData, setWordData]=useState(null);
let [imageData, setImageData]=useState(null);
let [loaded, setLoaded]= useState(false);


function showResult(response){
  setWordData(response.data[0]);
}

function submit(event) {
  event.preventDefault();
    search();}

function searchInput(event) {
  event.preventDefault();
    setWord(event.target.value);}

function showImage(response){
   setImageData(response.data);
}

function load(){
  setLoaded(true);
  search();
}

function search(){
let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
axios.get(apiUrl).then(showResult);


let pexelAPIkey='563492ad6f917000010000019643a4cab4c04bd78d87c8a75314fb56';
  let headers= {Authorization: `Bearer ${pexelAPIkey}`}
let imageApiURL=`https://api.pexels.com/v1/search?query=${word}&per_page=3`;
axios.get(imageApiURL, {headers: headers }).then(showImage);
}


if (loaded) {
  return (    
    <div className="searchEngine">
      <h1 className="title">English Dictionary</h1>
    <form onSubmit={submit}>         
      <div className="input-group mb-3">
        <input 
        type="search" 
        className="form-control" 
        placeholder="Type here to search for a word" 
        onChange={searchInput}
        defaultValue={props.defaultWord}/>

        <div className="input-group-append">
        <button className="btn btn-info" 
        type="submit">Search
        </button>
        </div>
      </div>
    </form>
    <Meaning data={wordData}/>

    <SlideShow imageData={imageData}/>
    

  <div className="Meanings">
  
   <small>
     This page was coded by 
     {" "} 
     <a href="https://www.linkedin.com/in/nike-reintamm-1b61b7146/">
      Nike</a> 
     {" "} 
     and is open sourced at
     {" "}  
     <a href="https://github.com/niketamm/dictionary-app">
       Github</a>
     {" "} 
     and hosted on 
     {" "} 
     <a href="https://wizardly-hoover-dfd383.netlify.app/">
       Netlify</a>
     ,{" "} 
    <a href="https://www.pexels.com">
      Photos provided by Pexels</a>
   </small>
   
  </div>

</div>
);
} else {
       load();
       return "loading";
     }
}
