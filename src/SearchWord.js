import "./SearchStyle.css";
import { useState } from "react";

export default function SearchWord(){
let [word, setWord]= useState("");

function search(event){
    event.preventDefault();
alert (`${word}`)
;}

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
</form>
</div>)

     ;}