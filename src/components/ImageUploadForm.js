import React, {useState} from "react";

function ImageUploadForm() {
  const [selectedImage, setSelectedImage] = useState('');
  const [ description, setDescription] = useState('')

  return (
    <div>
      <h1>Swap your way up!</h1>

      <input type="text" name="swapDescription" placeholder="Description of Item" 
  onChange={(event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  }}/>
      <div>
       <form>
        
             <input
        type="file"
        name="swapImage"
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
          <p>{description}</p>
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />


    
    </div>
  );
}

export default ImageUploadForm;
