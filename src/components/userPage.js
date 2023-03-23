import React from "react";
import NewItemForm from "./NewItemForm";
import Navbar from "./Navbar";
import Footer from "./Footer";

function UserPage() {
  return (
    <div className="UserPage">
      <Navbar />
      <NewItemForm />
      <Footer />
    </div>
  );
}

export default UserPage;
