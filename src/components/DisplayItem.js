import React from "react";

function DisplayItem({ swap, removeItemById }) {
  //   console.log(swap.image);
  //     const url = URL.createObjectURL(swap.image)

  //   const item = new Image()
  //    item.src = url;
  //    console.log(item)

  return (
    <div className="pt-20">
      <div className="rounded-lg pt-4 m-auto max-w-xs shadow-2xl  bg-indigo-100">
        <image src={swap.image} alt="not found" width={"250px"} />
        <p>{swap ? swap.description : "NOT SET"}</p>
        <p>{swap ? swap.category : "NOT SET"}</p>
      </div>
    </div>
  );
}

export default DisplayItem;
