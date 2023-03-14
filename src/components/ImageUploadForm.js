import React, {useState} from "react";

function ImageUploadForm() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>Input Information for Item</h1>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <p>Here is the banana</p>
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

 <input type="text" placeholder="Description of Item"/>
      <div>
       
          <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      </div>
    
    </div>
  );
}

export default ImageUploadForm;
