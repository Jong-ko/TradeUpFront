import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import OfferCard from "./OfferCard";

const url = "/fetchoffers/";

const userId = window.localStorage.getItem('localUserID');


function Offers() {
  const [offerList, setOfferList] = useState([]);
  const offerArray = offerList.map((list) => {
    return (
      <React.Fragment key={list.id}>
        <OfferCard offerInfo={list} key={list.id} />
      </React.Fragment>
    );
  });

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = () => {
    axios
      .get(url + userId)
      .then((response) => {
        const fetchedOffers = response.data;
        setOfferList(fetchedOffers);
      })
      .catch((error) => console.error(error));
  };

  

  return (
    <>
      <Navbar />
      <div>Offers</div>
      <>{offerArray}</>
    </>
  );
}
export default Offers;
