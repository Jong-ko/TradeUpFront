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
      <button onClick={acceptTrade}>Accept Trade</button>
    </>
  );
}

export default AcceptTradeButton;
