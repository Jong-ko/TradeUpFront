import React, { useState, useEffect } from "react";
import axios from "axios";
import AcceptTradeButton from "./AcceptTradeButton";

function OfferCard(props) {
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

      <div className="flex pt-10 justify-items-center px-3 m-auto">
        <div
          className="rounded-lg pt-4 py-4 pb-4 m-auto max-w-xs shadow-2xl  bg-indigo-100"
          key={props.offerInfo.id}
        >
          {fetchedOfferinfo[0].image && (
            <img
              src={
                "http://3.144.92.63:3001/images/" + fetchedOfferinfo[0].image
              }
              alt="not found"
              className="h-auto px-5"
            />
          )}
          <p>{fetchedOfferinfo[1].firstName}</p>
          <p>{fetchedOfferinfo[0].name}</p>
          <p>{fetchedOfferinfo[0].category}</p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default OfferCard;
