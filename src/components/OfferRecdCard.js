import React, { useState, useEffect } from "react";
import axios from "axios";
import AcceptTradeButton from "./AcceptTradeButton";

function OfferRecdCard(props) {
  const [fetchedOfferinfo, setFetchedOfferInfo] = useState([{},{}]);

  useEffect(() => {
    fetchOfferInfo();
  },[]);

//fetch to grab user information via offerorID
  const fetchOfferInfo = () => {
    const url = '/offerinfo';
    axios
      .post(url, {
        offerorID: props.offerInfo.offerorID,
        itemID: props.offerInfo.offerorItemID,
      })
      .then((response) => {
        setFetchedOfferInfo(response.data);
      })
      .catch((error) => console.error(error));
  };

  console.log(props)

  return (
    <>
      {/* <div>{offer}</div> */}
      <div className="flex flex-col items-center" key={props.offerInfo.id}>
      {fetchedOfferinfo[0].image && <img
          src={"http://localhost:3001/images/" + fetchedOfferinfo[0].image}
          alt="not found"
          width={"250px"}
        />}
        <p>{fetchedOfferinfo[1].firstName}</p>
        <p>{fetchedOfferinfo[0].name}</p>
        <p>{fetchedOfferinfo[0].category}</p>
        <p></p>
        <AcceptTradeButton offerorID={props.offerInfo.offerorID} offereeID={props.offerInfo.offereeID}/>
      </div>
    </>
  );
}

export default OfferRecdCard;
