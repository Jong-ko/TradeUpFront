import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import LoginNav from "./LoginNav";
import axios from "axios";
import { json } from "react-router-dom";
import Navbar from "./Navbar";
import ReactPaginate from "react-paginate";
import Footer from "./Footer";

const url = "/fetchCatagory/";

// const itemList = [
//   "item one",
//   "item two",
//   "item three",
//   "item four",
//   "item five",
// ];

function ItemBrowsePage(props) {
  const [itemList, setItemList] = useState([]);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = itemList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(itemList.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );

    setItemOffset(newOffset);
  };

  const itemArray = currentItems.map((list) => {
    // console.log(list.id)
    return (
      <React.Fragment key={list.id}>
        <ItemCard itemInfo={list} key={list.id} />
      </React.Fragment>
    );
  });

  //trigger fetch items when page catagory(store in props) change
  useEffect(() => {
    fetchItems();
  }, [props, itemsPerPage, pageCount]);

  //fetch items with catagory parameter
  const fetchItems = () => {
    axios
      .get(url + props.catagory)
      .then((response) => {
        const fetchedItems = response.data;
        setItemList(fetchedItems);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-10 text-4xl font-semibold text-white-900 dark:bg-gray-800  dark:text-white">
        {props.catagory}
      </div>
      <div className=" dark:bg-gray-800 dark:border-gray-700 dark:text-teal-50">
        <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 ">
          <>{itemArray}</>
        </div>

        <div className=" static bottom-0 mt-10 pb-5 pt-10">
          <ReactPaginate
            pageLinkClassName="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={20}
            onPageChange={handlePageClick}
            className="inline-flex -space-x-px"
            containerClassName={"pagination"}
            renderOnZeroPageCount={null}
            breakLabel="..."
            previousLinkClassName="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            nextLinkClassName="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          />
        </div>
        <button className="py-5">
          <a href="#" className="scroll-smooth ">
            &#8593;
          </a>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ItemBrowsePage;
