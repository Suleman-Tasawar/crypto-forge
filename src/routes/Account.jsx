import React from "react";
const Account = () => {
  const logout = () => {
    try{
        localStorage.clear();
    }
    catch(error){
        console.log("logout errror",error)
    }
  };
  return (
    <div>
      <div className="mt-5 flex  justify-evenly items-center">
        <div>
          <h1 className="text-3xl text-blue-950 font-bold">Welcome </h1>
        </div>
        <div>
          <button
            className="w-[100px] h-6 bg-gray-900
         text-white hover:bg-gray-800 rounded-md"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="p-5 mt-5">
        <h1 className="text-red-700 text-4xl font-bold text-left">Your Wishlist</h1>
      </div>
    </div>
  );
};

export default Account;
