import axios from "axios";

function AcceptTradeButton(props) {
  function acceptTrade() {
    const url = `/accept-trade`;
    axios
      .post(url, {
        offerorID: props.offerorID,
        offereeID: props.offereeID,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <button
        onClick={acceptTrade}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
      >
        Accept Trade
      </button>
    </>
  );
}

export default AcceptTradeButton;
