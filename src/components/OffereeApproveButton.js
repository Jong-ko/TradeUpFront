import axios from "axios";
import { useEffect, useState } from "react";
function OffereeApproveButton(props) {
  function OffereeApprove() {
    const url = `/offeree-approve`;
    axios
      .post(url, {
        offerorID: props.offerorID,
        offereeID: props.offereeID,
        itemID: props.itemID,
        offerorItemID: props.offerorItemID,
      })
      .then((response) => {
        console.log(response);
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
        <button onClick={OffereeApprove}>Approve</button>
      </>
    );
  }
}
export default OffereeApproveButton;