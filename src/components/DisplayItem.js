import React from "react";

function DisplayItem({ swap, removeItemById }) {
//   console.log(swap.image);
//     const url = URL.createObjectURL(swap.image)

//   const item = new Image()
//    item.src = url;
//    console.log(item)


  return (
    <div>
      <div className="container">
        <image
          alt="not found"
          width={"250px"}
      
        />
        <p>{swap ? swap.description : "NOT SET"}</p>
        <p>{swap ? swap.category : "NOT SET"}</p>
        <button
          id={swap ? swap.id : "NOT SET"}
          onClick={() => removeItemById(swap ? swap.id : "NOT SET")}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default DisplayItem;
