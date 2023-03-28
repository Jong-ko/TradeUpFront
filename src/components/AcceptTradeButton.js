

function AcceptTradeButton(props) {
  const acceptTrade = () => {
    console.log("Accepted Trade");
  }

  return (
    <>
      <button onClick={acceptTrade}>Accept Trade</button>
    </>
  );
}

export default AcceptTradeButton;
