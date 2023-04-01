import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useFirebaseAuth } from "./AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const currentUser = useFirebaseAuth();
  console.log(currentUser);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("firstName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size === 0) {
        setErr(true);
      } else {
        setErr(false);
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      }
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            firstName: user.firstName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            firstName: currentUser.firstName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };
  return (
    <div className="border-y-2 border-y-slate-500 ">
      <div className="p-2 rounded-md">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="p-1 rounded-md border-none w-96 border-y-2 placeholder-blue-500"
        />
      </div>
      {err && username && (
        <span className=" text-red-300">User not found!</span>
      )}
      {user && (
        <div className="rounded-md " onClick={handleSelect}>
          <div className=" items-center flex justify-center">
            <div className=" w-32 rounded-md m-5 text-zinc-800 bg-sky-100 text-center ">
              <span>{user.firstName}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
