import React, { useState } from "react";
import { addSwaps } from "../features/swapSlice";
import { useDispatch } from "react-redux";

function NewItemForm() {
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const newImage = async (e) => {
    e.preventDefault();
    await fetch("/new-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: selectedImage,
        description: description,
        category: category,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        dispatch(addSwaps(data));
        setSelectedImage("");
        setDescription("");
        setCategory("");
      })
      .catch((error) => console.log("Unable to add post", error));
  };

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
    </div>
  );
}

export default NewItemForm;
