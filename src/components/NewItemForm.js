import React, { useState, useEffect } from "react";
import { setSwaps, selectUserAccount, selectAllItems } from "../features/swapSlice";
import { useDispatch, useSelector } from "react-redux";

function NewItemForm() {
  const dispatch = useDispatch();
  const myUser = useSelector(selectUserAccount);
  const myItem = useSelector(selectAllItems);

  const [imageName, setImageName] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const newImage = async() => {
    console.log(myItem);
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("userAccount", myUser);
    if(myItem.length !== 0) {
      await fetch("/update-item", {
        method: "POST",
        body: formData
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
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          dispatch(setSwaps(data));
          setSelectedImage("");
        })
        .catch((error) => console.log("Unable to add post", error));
    }
  }

  const fetchListItems = async () => {
    await fetch("/list-items")
      .then((response) => response.json())
      .then((json) => dispatch(setSwaps(json)));
  }

  useEffect(() => {
    fetchListItems();
  }, []);
  
  return (
    <div>
      <h1>Swap your way up!</h1>

      <form
        onChange={(event) => {
          event.preventDefault();

          console.log(event.target.value);
          setCategory(event.target.value);
        }}
      >
        <label for="cars">Choose a Category:</label>
        <select id="browsers">
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
      </form>
      <textarea
        maxlength="50"
        type="text"
        name="swapDescription"
        placeholder="Description of Item"
        onChange={(event) => {
          event.preventDefault();
          console.log(event.target.value);
          setDescription(event.target.value);
        }}
      />

      <div>
        <form>
          <input
            type="file"
            name="image"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </form>
      </div>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={newImage}>Create Swap</button>
        </div>
      )}

      <br />
      <br />
      <div>
      <div className="container">
        {myItem[0] && <img alt="not found" width={"250px"} src={myItem[0] && "http://localhost:3001/images/"+myItem[0].image} />}
        <p>{myItem[0] && myItem[0].description}</p>
        <p>{myItem[0] && myItem[0].category}</p>
      </div>
    </div>
    </div>
  );
}

export default NewItemForm;
