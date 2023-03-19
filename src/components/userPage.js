import React from "react";
import NewItemForm from "./NewItemForm";
import Navbar from "./Navbar";

function UserPage() {
  return (
    <div className="UserPage">
      <Navbar />
      <NewItemForm />
    </div>
  );
}

export default UserPage;
