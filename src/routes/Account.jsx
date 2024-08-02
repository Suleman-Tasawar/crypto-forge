import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { databases } from "../lib/database";

const Account = () => {
  const [wishlistData, setWishlistData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const { setAuthStatus } = useContext(AuthContext);
  const logout = () => {
    try {
      setAuthStatus(false);
    } catch (error) {
      setErrorMessage(error || "Things have taken an unexpected turn here");
    }
  };

  useEffect(() => {
    let promise = databases.listDocuments(
      import.meta.env.VITE_APP_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID
    );
    promise.then(
      function (response) {
        setWishlistData(response.documents);
      },
      function (error) {
        setErrorMessage(error);
      }
    );
  }, []);
  const wishDataID = wishlistData.map(id=>(
    <div className="text-white" key={id.coinId}>
      <p>{id.coinId}</p>
    </div>
  ))
  return (
    <div>
      <div className="mt-5 flex  justify-evenly items-center">
        <div>
          {errorMessage && <p className="text-sm italic text-red-500">{errorMessage}</p>}
          <h1 className="text-4xl text-blue-500 font-bold">Welcome </h1>
        </div>
        <div>
          <button
            className="w-[100px] h-10 bg-blue-600
         text-white hover:bg-blue-500 rounded-md"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="p-5 mt-5 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-blue-600 text-4xl font-bold text-left">
            Your Wishlist
          </h1>
        </div>
        <div className="mt-5">
          {wishlistData.length > 0 ? (
            <div>{wishDataID}</div>
          ) : (
            <p className="text-white">
              Nothing here try adding some to Wishlist
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
