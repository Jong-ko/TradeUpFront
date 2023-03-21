import React, { useState, useEffect} from "react";

function OfferCard(props) {

    return (
        <>
        <div className="container" key={props.offerInfo.id}>
        <img
          src={"http://localhost:3001/images/" + props.offerInfo.image}
          alt="not found"
          width={"250px"}
        />
        <p>{props.offerInfo.description}</p>
        <p>{props.offerInfo.category}</p>
        {/* Place holder Need to make an accept offer component button  */}
        <button>Accept Offer</button>
        </div>
        </>
    )
}

export default OfferCard