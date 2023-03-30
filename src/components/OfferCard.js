import React, { useState, useEffect } from "react";
import axios from "axios";
import AcceptTradeButton from "./AcceptTradeButton";

function OfferCard(props) {
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
        itemID: props.offerInfo.itemID,
      })
      .then((response) => {
        setFetchedOfferInfo(response.data);
        // console.log(fetchedOfferinfo[0].image);
        // console.log(fetchedOfferinfo[1]);
      })
      .catch((error) => console.error(error));
  };

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
      </div>
    </>
  );
}

export default OfferCard;
