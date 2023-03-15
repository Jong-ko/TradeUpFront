import React, {useState} from "react";
import { addSwaps } from "../features/swapSlice";
import { useDispatch } from 'react-redux';





function ImageUploadForm() {
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState('');
  const [ description, setDescription] = useState('')
  const [ category, setCategory] = useState('');


   const newImage = async () => {
        await fetch('/new-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               image: selectedImage.name, 
               description: description,
               category: category
            }),
        })
        .then((response) => response.json()) 
        .then((data) => {
            console.log('Success:', data);
            dispatch(addSwaps(data));
            setSelectedImage('');
            setDescription('');
            setCategory('');
        })
        .catch((error) =>
        console.log("Unable to add post", error)
        )
    }

  return (
    <div>
      <h1>Swap your way up!</h1>

      <input type="text" name="swapDescription" placeholder="Description of Item" 
  onChange={(event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  }}/>


  <input list="browsers" name="browser" placeholder="Choose Category"
   onChange={(event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  }}
  />
  <datalist id="browsers">
    <option value="Internet Explorer"/>
    <option value="Firefox"/>
    <option value="Chrome"/>
    <option value="Opera"/>
    <option value="Safari"/>
  </datalist>


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

export default ImageUploadForm;
