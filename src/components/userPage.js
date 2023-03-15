import React, { useEffect }from "react";
import DisplayItem from "./DisplayItem";
import { useSelector, useDispatch } from 'react-redux'
import ImageUploadForm from "./ImageUploadForm";
import { selectAllItems, setSwaps, deleteSwapById } from "../features/swapSlice";




function UserPage() {

    const myItems = useSelector(selectAllItems)
    const dispatch = useDispatch(); 



    const removeItemById = async (id, e) => {
        await fetch(`/delete-item/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            window.location.reload();
            dispatch(deleteSwapById(id));
            
        })
    }

 const fetchListItems = async () => {
        await fetch("/list-items")
            .then(response => response.json())
            .then(json => dispatch(setSwaps(json)));
    }    

    useEffect(() => {
        fetchListItems();
    }, [])

  return (
    <div className="UserPage">   

    <ImageUploadForm/>
    <div>
       {myItems.map(swap =>
    <DisplayItem removeItemById={removeItemById} swap={swap} fetchListItems={fetchListItems} />
       )}  
    </div>
   
    </div>
  );
}

export default UserPage;
