import React, { useEffect } from "react";
import ItemThumb from "./Itemthumb";

// const url = getItemRoute.com

const itemList = [
  "item one",
  "item two",
  "item three",
  "item four",
  "item five",
];

function ItemBrowsePage() {
  const itemArray = itemList.map((list) => {
    return (
      <>
        <ItemThumb itemInfo={list} />
      </>
    );
  });

//   useEffect(() => {
//     fetchItems();
//   });

//   const fetchItems = () => {
//     axios
//       .get(url)
//       .then((response) => {
//         const itemList = response.data;
//         setDestinationList(allPosts);
//       })
//       .catch((error) => console.error(error));
//   };

  return <>{itemArray}</>;
}

export default ItemBrowsePage;
