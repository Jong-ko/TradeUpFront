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
        window.location.reload(false);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2' onClick={cancelTrade}>Cancel</button>
    </>
  );
}

export default CancelTradeButton;
