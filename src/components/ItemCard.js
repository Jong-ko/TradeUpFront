import React, { useEffect } from "react";
import TradeButton from "./TradeButton";
import { useSelector } from "react-redux";
import { selectAllItems } from "../features/swapSlice";

function ItemCard(props) {
  let myItem = [];
  let isPending = "";

  if (window.localStorage.getItem("localMyItems") !== null) {
    myItem = window.localStorage.getItem("localMyItems");
  }
  if (window.localStorage.getItem("localIsPending") !== null) {
    isPending = window.localStorage.getItem("localIsPending") === "true";
  }

  return (
    <>
      <div>
        <div
          className="m-auto text-center object-center max-w-xs no-underline hover:underline "
          key={props.itemInfo.id}
        >
          <div className="bg-fixed transition duration-300 ease-in-out hover:opacity-50">
            <div className="rounded shadow-none transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-black/80">
              <img
                src={"http://3.144.92.63:3001/images/" + props.itemInfo.image}
                alt="not found"
                className="cursor-pointer rounded-lg bg-white p-1 dark:border-neutral-700 w-full gap-1  object-cover"
              />
            </div>
          </div>
          <p>{props.itemInfo.description}</p>
          <p>{props.itemInfo.category}</p>

          {myItem[2] && !isPending ? (
            <TradeButton itemInfo={props.itemInfo} />
          ) : (
            ""
          )}
          {/* <TradeButton itemInfo={props.itemInfo} /> */}
        </div>
      </div>
    </>
  );
}
export default ItemCard;
