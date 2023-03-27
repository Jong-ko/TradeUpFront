// import React{ useEffect } from "react";
import axios from "axios";

function TradeButton(props) {
  // useEffect(() => {initiateTrade});

  const url = "/trade";

  const userAccount = window.localStorage.getItem('localUserAccount');
  const userItem = JSON.parse(window.localStorage.getItem('localMyItems'));

  const initiateTrade = () => {
    axios
      .post(url, {
        offerorID: userAccount,
        offereeID: props.itemInfo.userAccount,
        itemID: props.itemInfo.id,
        offerorItemID: userItem[0].id,
      })
      .then((response) => {
        console.log(response);
        console.log(userItem[0]);
        window.location.reload(false);
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
