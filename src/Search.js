import React, { useState } from 'react';
import './App.css'

const nameList = ["krishna", "pratik", "bhadkoliya", "varsha"];

const Search = () => {
  const [list, setlist] = useState(nameList);

  const OnChangeEvent = (e) => {
    // Access input value
  const query = e.target.value;
  // Create copy of item list
  var updatedList = [...nameList];
  // Include all elements which includes the search query
  updatedList = updatedList.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });
  // Trigger render with updated values
  setlist(updatedList);
  }

  return ( 
  <div className='seach-div'>
    <input type="text" placeholder='enter the name' onChange={(e)=>{OnChangeEvent(e)}} ></input>
    <div className='list-items'>
        {list?.map((item, index) => {
           return <div key={index} >{item}</div>
        })}
    </div>
   
  </div>);
};

export default Search;