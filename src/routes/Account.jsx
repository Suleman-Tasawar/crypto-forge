import React, { useEffect, useState } from "react";
import { databases } from "../lib/database";

const Account = () => {
  const [wishlistData, setWishlistData] = useState([]);
  const [errorMessage,setErrorMessage] = useState(null)

  const logout = () => {
    try {
      localStorage.clear();
    } catch (error) {
      setErrorMessage(error || "Things have taken an unexpected turn here")
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
        setErrorMessage(error)
      }
    );
  }, []);
  const wishData = wishlistData.map((data) => (
    <div key={data.id}>
      <p className="mt-5 text-white text-sm">{data.coinId}</p>
    </div>
  ));
  return (
    <div>
      {/* {errorMessage?(<p className="text-sm italic text-red-500">{errorMessage}</p>):null} */}
      <div className="mt-5 flex  justify-evenly items-center">
        <div>
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
            <div>{wishData}</div>
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
