import React, { useState, useEffect } from "react";
import axios from "axios";
import OfferorApproveButton from "./OfferorApproveButton";
import CancelTradeButton from "./CancelTradeButton";

function PendingMadeCard(props) {
  const [fetchedOfferinfo, setFetchedOfferInfo] = useState([{}, {}]);

  useEffect(() => {
    fetchOfferInfo();
  }, []);

  //fetch to grab user information via offerorID
  const fetchOfferInfo = () => {
    const url = "/offerinfo";
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

  return (
    <>
      {/* <div>{offer}</div> */}
      <div
        className="flex justify-items-center px-3 m-auto"
        key={props.offerInfo.id}
      >
        {fetchedOfferinfo[0].image && (
          <img
            src={"http://localhost:3001/images/" + fetchedOfferinfo[0].image}
            alt="not found"
            width={"250px"}
          />
        )}
        <p>{fetchedOfferinfo[1].firstName}</p>
        <p>{fetchedOfferinfo[0].name}</p>
        <p>{fetchedOfferinfo[0].category}</p>
        <p></p>
        <OfferorApproveButton
          offerorID={props.offerInfo.offerorID}
          offereeID={props.offerInfo.offereeID}
          itemID={props.offerInfo.itemID}
          offerorItemID={props.offerInfo.offerorItemID}
          offerorAccepted={props.offerInfo.offerorAccepted}
        />
        <br></br>
        <CancelTradeButton tradeID={props.offerInfo.Id} />
      </div>
    </>
  );
}

export default PendingMadeCard;
