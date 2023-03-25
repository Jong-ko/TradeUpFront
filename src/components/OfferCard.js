import React, { useState, useEffect } from "react";
import axios from "axios";
import AcceptTradeButton from "./AcceptTradeButton";

function OfferCard(props) {
  const [fetchedOfferinfo, setFetchedOfferInfo] = useState([{},{}]);

  useEffect(() => {
    fetchOfferInfo();
  },);

//fetch to grab user information via offerorID
  const fetchOfferInfo = () => {
    const url = `/offerinfo/${props.offerInfo.offerorID}/${props.offerInfo.itemID}`;
    axios
      .get(url)
      .then((response) => {
        const fetchedOffers = response.data;
        setFetchedOfferInfo(fetchedOffers);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {/* <div>{offer}</div> */}
      <div className="container" key={props.offerInfo.id}>
        <img
          // src={"http://localhost:3001/images/" + fetchedOfferinfo[0].image}
          alt="not found"
          width={"250px"}
        />
        <p>{fetchedOfferinfo[1].firstName}</p>
        <p>{fetchedOfferinfo[0].name}</p>
        <p>{fetchedOfferinfo[0].category}</p>
        <p></p>
        {/* Place holder Need to make an accept offer component button  */}
        <AcceptTradeButton OfferorId={props.offerInfo.offerorID} OfferorItem={'kek'} Offereeid={props.offerInfo.offereeID} OffereeItem={props.offerInfo.itemID}/>
        {/* <button>Accept Offer</button> */}
      </div>
    </>
  );
}

export default OfferCard;
