import React from "react"
import TradeButton from "./TradeButton"


function ItemCard(props) {

    return (

        <>
        <div className="container" key={props.itemInfo.id}>
          <img
            alt="not found"
            width={"250px"}
        
          />
          <p>{props.itemInfo.description}</p>
          <p>{props.itemInfo.category}</p>
          <TradeButton itemInfo={props.itemInfo}/>
        </div>
      </>
    )
}
export default ItemCard