import React from "react"


function ItemCard(props) {

    return (

        <>
        <div className="container" key={props.itemInfo.id}>
          <img
            alt="not found"
            width={"250px"}
            src={"http://localhost:3001/images/"+props.itemInfo.image}
          />
          <p>{props.itemInfo.description}</p>
          <p>{props.itemInfo.category}</p>
          <button
            id={"NOT SET"}
            // onClick={() => removeItemById("NOT SET")}
          >
            Trade
          </button>
        </div>
      </>


        // <>
        // <div>Imageplaceholder</div>
        // <div>{props.itemInfo.name}</div>
        // <button>Trade</button>
        // </>
    )
}
export default ItemCard