import React, { useState, useEffect } from "react";
import {
  setSwaps,
  selectUserAccount,
  selectAllItems,
} from "../features/swapSlice";
import { useDispatch, useSelector } from "react-redux";

function NewItemForm() {
  const dispatch = useDispatch();
  const myUser = useSelector(selectUserAccount);
  const myItem = useSelector(selectAllItems);

  const dateString = myItem[0]; //this is where myItem[0].createdAt is supposed to go to be assigned to dateString

  const [selectedImage, setSelectedImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const newImage = async () => {
    console.log(myItem);
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("userAccount", myUser);
    if (myItem.length !== 0) {
      await fetch("/update-item", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          dispatch(setSwaps(data));
          setSelectedImage("");
        })
        .catch((error) => console.log("Unable to add post", error));
    } else {
      await fetch("/new-item", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(setSwaps(data));
          setSelectedImage("");
        })
        .catch((error) => console.log("Unable to add post", error));
    }
  };

  const fetchListItems = async () => {
    await fetch("/list-items")
      .then((response) => response.json())
      .then((json) => dispatch(setSwaps(json)));
  };

  const removeItem = async () => {
    await fetch("/delete-item/"+myItem[0].id.toString(),{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: myItem[0].image,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch(setSwaps([]));
    })
    .catch((error) => console.log("Unable to add post", error));
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    fetchListItems();
  }, []);

  return (
    <div className="gridContainer pt-32 h-screen dark:bg-gray-800 dark:text-gray-900 md:flex md:justify-between ">
      <div className="relative rounded-lg pb-5 m-auto max-w-md shadow-2xl  bg-gray-50 dark:bg-slate-700 dark:text-sky-50 ">
        <div className=" absolute right-1 top-1">
          <button
            onClick={refreshPage}
            className="bg-blue-500 hover:bg-blue-400 text-white  font-bold px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            X
          </button>
        </div>

        <h1 className="mt-0 text-2xl pt-5 font-medium leading-tight text-primary pb-9">
          Start your Barter!
        </h1>

        <form
          onChange={(event) => {
            event.preventDefault();

            console.log(event.target.value);
            setCategory(event.target.value);
          }}
        >
          <div className="mx-10 py-5 ">
            <label for="cars">Choose a Category:</label>
            <select
              id="browsers"
              className=" border-solid dark:bg-slate-700 dark:text-sky-50"
            >
              <option value="Clothing and Accessories">
                Clothing and Accessories
              </option>
              <option value="Electronics and Gadgets">
                Electronics and Gadgets
              </option>
              <option value="Home and Furniture">Home and Furniture</option>
              <option value="Health and Beauty">Health and Beauty</option>
              <option value="Sports and Outdoors">Sports and Outdoors</option>
              <option value="Toys and Games">Toys and Games</option>
            </select>
          </div>
        </form>

        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <div className="mx-10 py-5">
            <textarea
              maxLength="500"
              type="text"
              name="swapDescription"
              placeholder="Description of Item"
              className="block p-2.5 w-full mx-1 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              onChange={(event) => {
                event.preventDefault();
                console.log(event.target.value);
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <form>
            <div className="mx-5 rounded">
              <label
                className="block rounded mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="default_size"
              >
                <input
                  type="file"
                  name="image"
                  className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50"
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </label>
            </div>
          </form>
        </div>
        {selectedImage && (
          <div className="px-20">
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
              className=" inline-block py-5"
            />
            <br />
            <div className="cursor-point">
              <button
                onClick={newImage}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
              >
                Create Swap
              </button>
            </div>
          </div>
        )}
      </div>

      <br />
      <br />
      <div className="relative pb-5 m-auto max-w-md ">
        <div className="myItem-container px-10 py-5 rounded-lg pt-4 m-auto max-w-xl shadow-2xl  bg-indigo-100">
          <h1>{myItem[0] && myItem[0].name}</h1>
          {myItem[0] && (
            <img
              className="h-auto w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              alt="not found"
              width={"250px"}
              src={
                myItem[0] && "http://localhost:3001/images/" + myItem[0].image
              }
            />
          )}
          <div className="pt-5">
            <div className="flex justify-items-center">
              <label>Description:</label>
              <p>{myItem[0] && myItem[0].description}</p>
            </div>
            <div className="flex justify-items-center">
              <label>Category:</label>
              <p>{myItem[0] && myItem[0].category}</p>
            </div>
            <div className="flex justify-items-center">
            <p>{myItem[0] && <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2" onClick={removeItem}>Remove Item</button>}</p>
            </div>
          </div>

          <br></br>
          <p>{myItem[0] && formatDate(dateString)}</p>
        </div>
      </div>
    </div>
  );
}

export default NewItemForm;
