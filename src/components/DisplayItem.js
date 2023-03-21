import React from "react";

function DisplayItem({ swap }) {

  return (
    <div>
      <div className="container">
        <img
          alt="not found"
          width={"250px"}
          src={swap && "http://localhost:3001/images/"+swap.image}
        />
        <p>{swap ? swap.description : "NOT SET"}</p>
        <p>{swap ? swap.category : "NOT SET"}</p>
        <p>{swap ? 'http://localhost:3001/images/'+swap.image : "NOT SET"}</p>
      </div>
    </div>
  );
}

export default DisplayItem;
