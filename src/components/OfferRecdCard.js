import React, { useState, useEffect } from "react";
import axios from "axios";
import AcceptTradeButton from "./AcceptTradeButton";

function OfferRecdCard(props) {
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

  console.log(props);

  return (
    <div className="h-auto">
      {/* <div>{offer}</div> */}

      <div className="flex justify-items-center px-3 py-10 m-auto pb-40">
        <div
          className="rounded-lg pt-4 px-4 m-auto max-w-xs shadow-2xl  bg-indigo-100"
          key={props.offerInfo.id}
        >
          {fetchedOfferinfo[0].image && (
            <img
              src={
                "http://3.144.92.63:3001/images/" + fetchedOfferinfo[0].image
              }
              alt="not found"
            />
          )}
          <p>{fetchedOfferinfo[1].firstName}</p>
          <p>{fetchedOfferinfo[0].name}</p>
          <p>{fetchedOfferinfo[0].category}</p>
          <p></p>
          <AcceptTradeButton
            offerorID={props.offerInfo.offerorID}
            offereeID={props.offerInfo.offereeID}
          />
        </div>
      </div>
    </div>
  );
}

export default OfferRecdCard;
