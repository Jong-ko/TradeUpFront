import React from 'react';


function DisplayItem({swap, removeItemById}) {

  return (
    <div>
      <img alt="Avatar"/>
    <div className="container">
    <p>{swap ? swap.description : "NOT SET"}</p>
    <p>{swap ? swap.category : "NOT SET"}</p>
    <button 
       id={swap ? swap.id : "NOT SET"}
       onClick={() => removeItemById(swap ? swap.id : "NOT SET")} >Remove</button>
  </div>
    </div>
  )
}

export default DisplayItem
