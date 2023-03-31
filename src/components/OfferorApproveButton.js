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
        //this.forceUpdate();
        window.location.reload(false);
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

        <button
          onClick={OfferorApprove}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        >
          Approve
        </button>

      </>
    );
  }
}

export default OfferorApproveButton;
