import React, { useState, useEffect } from "react";
import axios from "axios";
import OffereeApproveButton from "./OffereeApproveButton";
import CancelTradeButton from "./CancelTradeButton";

function PendingRecdCard(props) {
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

  console.log(`offeree ${props.offerInfo.offereeAccepted}`);

  return (
    <div>
      {/* <div>{offer}</div> */}
      <div className="pt-10">
        <div
          className="rounded-lg pt-4 m-auto max-w-xs shadow-2xl  bg-indigo-100"
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

          <div
            className="rounded-lg pt-4 m-auto shadow-2xl px-3 bg-indigo-100"
            key={props.offerInfo.id}
          >
            {fetchedOfferinfo[0].image && (
              <img
                src={
                  "http://3.144.92.63:3001/images/" + fetchedOfferinfo[0].image
                }
                alt="not found"
                width={"250px"}
              />
            )}
            <p>{fetchedOfferinfo[1].firstName}</p>
            <p>{fetchedOfferinfo[0].name}</p>
            <p>{fetchedOfferinfo[0].category}</p>
            <p></p>

            {props.offerInfo.offereeAccepted ? (
              <p>Accepted!</p>
            ) : (
              <>
                <OffereeApproveButton
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
        </div>
      </div>
    </div>
  );
}

export default PendingRecdCard;
