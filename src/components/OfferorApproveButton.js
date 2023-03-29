import axios from "axios";
import { useEffect, useState } from "react";
function OfferorApproveButton(props) {
  function OfferorApprove() {
    const url = `/offeror-approve`;
    axios
      .post(url, {
        offerorID: props.offerorID,
        offereeID: props.offereeID,
        itemID: props.itemID,
        offerorItemID: props.offerorItemID,
      })
      .then((response) => {
        console.log(response);
        this.forceUpdate();

      })
      .catch((error) => console.error(error));
  }


  if (props.offerorAccepted == true) {
    return (
      <>
        <div>Accepted!</div>
      </>
    );
  } else {
    return (
      <>
        <button onClick={OfferorApprove}>Approve</button>
      </>
    );
  }
}
export default OfferorApproveButton;
