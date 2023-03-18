import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import LoginNav from "./LoginNav";
import axios from "axios"
import { json } from "react-router-dom";
import Navbar from "./Navbar";

const url = "/fetchCatagory/"

// const itemList = [
//   "item one",
//   "item two",
//   "item three",
//   "item four",
//   "item five",
// ];

function ItemBrowsePage(props) {
  const [itemList, setItemList] = useState([])
  const itemArray = itemList.map((list) => {
    // console.log(list.id)
    return (
      <React.Fragment key={list.id}>
        <ItemCard itemInfo={list} key={list.id} />
      </React.Fragment >
    );
  });

  useEffect(() => {
    fetchItems();
  },[props]);

  const fetchItems = () => {
    axios
      .get(url+props.catagory)
      .then((response) => {
        const fetchedItems = response.data;
        setItemList(fetchedItems);
      })
      .catch((error) => console.error(error));
  };

  return <>
  <Navbar />
  <div>{props.catagory}</div>
  <>{itemArray}</>
  </>;
}

export default ItemBrowsePage;
