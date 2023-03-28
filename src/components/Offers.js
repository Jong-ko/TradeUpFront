import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import OfferCard from "./OfferCard";
import OfferRecdCard from "./OfferRecdCard";

const url = "/fetchoffersmade/";
const urlRecd = "/fetchoffersrecd/";

let userAccount = window.localStorage.getItem('localUserAccount');

function Offers() {
  const [offersMadeList, setOffersMadeList] = useState([]);
  const [offersRecdList, setOffersRecdList] = useState([]);

  const offerArray = offersMadeList.map((list) => {
    console.log(list);
    return (
      <React.Fragment>
        <OfferCard offerInfo={list} key={list.id} />
      </React.Fragment>
    );
  });

  const offerRecdArray = offersRecdList.map((list) => {
    console.log(list);
    return (
      <React.Fragment>
        <OfferRecdCard offerInfo={list} key={list.id} />
      </React.Fragment>
    );
  });

  useEffect(() => {
    userAccount = window.localStorage.getItem('localUserAccount');
    fetchOffersMade();
    fetchOffersRecd();
  }, []);

  const fetchOffersMade = () => {
    axios
      .post(url, {
        offerorID: userAccount,
      })
      .then((response) => {
        const fetchedOffers = response.data;
        setOffersMadeList(fetchedOffers);
      })
      .catch((error) => console.error(error));
  };

  const fetchOffersRecd = () => {
    axios
      .post(urlRecd, {
        offereeID: userAccount,
      })
      .then((response) => {
        const fetchedOffers = response.data;
        setOffersRecdList(fetchedOffers);
      })
      .catch((error) => console.error(error));
  };  

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-10 text-4xl font-semibold text-white-900 dark:bg-gray-800  dark:text-white">
        Offers Made
      </div>
      <>{offerArray}</>
      <div className="pt-32 pb-10 text-4xl font-semibold text-white-900 dark:bg-gray-800  dark:text-white">
        Offers Received
      </div>
      <>{offerRecdArray}</>
    </>
  );
}
export default Offers;
