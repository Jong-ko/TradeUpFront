import { useEffect } from "react";
// import React{ useEffect } from "react";
import axios from "axios";

function TradeButton(props) {
  // useEffect(() => {initiateTrade});
console.log(props)
  const url = "/trade";

  const initiateTrade = () => {
      console.log("Trade!")
    axios
      .post(url, { offerorID: "1", offereeID: props.itemInfo.userID, itemID: props.itemInfo.id })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));

  };

  return (
    <>
      <button onClick={initiateTrade}>Trade!</button>
    </>
  );
}
export default TradeButton;
