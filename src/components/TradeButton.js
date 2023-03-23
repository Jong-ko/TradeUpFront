import { useEffect } from "react";
// import React{ useEffect } from "react";
import axios from "axios";

function TradeButton(props) {
  // useEffect(() => {initiateTrade});
  console.log(props);
  const url = "/trade";

  const initiateTrade = () => {
    console.log("Trade!");
    axios
      .post(url, {
        offerorID: "1",
        offereeID: props.itemInfo.userID,
        itemID: props.itemInfo.id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <button
        onClick={initiateTrade}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
      >
        Trade!
      </button>
    </>
  );
}
export default TradeButton;
