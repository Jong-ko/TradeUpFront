import axios from "axios";
function CancelTradeButton(props) {
  function cancelTrade() {
    const url = `/cancel-trade`;
    axios
      .post(url, {
        tradeID: props.tradeID,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <button onClick={cancelTrade}>Cancel</button>
    </>
  );
}

export default CancelTradeButton;
