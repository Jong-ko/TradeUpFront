import React from "react";
import NewItemForm from "./NewItemForm";
import Navbar from "./Navbar";
import Footer from "./Footer";

function UserPage() {
  return (
    <div className="UserPage  dark:bg-gray-800 dark:text-gray-900">
      <Navbar />
      <NewItemForm />
      <Footer />
    </div>
  );
}

export default UserPage;
