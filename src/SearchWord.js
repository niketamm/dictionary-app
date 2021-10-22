import React from "react";
import "./SearchStyle.css";

export default function SearchWord(){
     return <form>
         <div className="searchEngine">
         <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Search"/>
  <div className="input-group-append">
    <button className="btn btn-info" type="button">Button</button>
  </div>
</div>
</div>

     </form>;}