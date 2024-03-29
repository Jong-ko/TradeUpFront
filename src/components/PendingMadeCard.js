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
        offerorID: props.offerInfo.offereeID,
        itemID: props.offerInfo.itemID,
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
        className="flex flex-col items-center py-10"
        key={props.offerInfo.id}
      >
        {fetchedOfferinfo[0].image && (
          <img
            src={"http://3.138.123.221:3001/images/" + fetchedOfferinfo[0].image}
            alt="not found"
            className="object-center p-5 m-5"
          />
        )}
        <p>{fetchedOfferinfo[1].firstName}</p>
        <p>{fetchedOfferinfo[0].name}</p>
        <p>{fetchedOfferinfo[0].category}</p>
        {props.offerInfo.offerorAccepted ? (
          <p>Accepted!</p>
        ) : (
          <>
            <OfferorApproveButton
              offerorID={props.offerInfo.offerorID}
              offereeID={props.offerInfo.offereeID}
              itemID={props.offerInfo.itemID}
              offerorItemID={props.offerInfo.offerorItemID}
            />
            <br></br>
            <CancelTradeButton tradeID={props.offerInfo.id} />
          </>
        )}
      </div>
    </>
  );
}

export default PendingMadeCard;
