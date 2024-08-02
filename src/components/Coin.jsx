import React, { useEffect } from 'react'
import { ID } from "appwrite";
import { databases } from "../lib/database";

function Coin({ id,image, name, price, totalVolume, change }) {
  const addToWishList = ()=>{
    const promise = databases.createDocument(
      import.meta.env.VITE_APP_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID,
      ID.unique(),
      { "coinId": id}
  );
  promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
  }
  return (
    <div className='m-10 flex flex-col text-white justify-center items-center text-center'>
        <div className='mt-2'><img src={image}></img></div>
        <div className='mt-2'>
        <h2 className='text-xl font-bold inline'>Coin Name: </h2>
          <p className='text-lg font-medium'>{name}</p>
        </div>
        <div className='mt-2'>
        <h2 className='text-xl font-bold inline'>Coin Price: </h2>
          <p className='text-lg font-medium'>{price}$</p>
        </div>
        <div className='mt-2'>
        <h2 className='text-xl font-bold inline'>Coin Last Performance: </h2>
          <p className={`text-lg font-medium ${change>0?'text-green-500':'text-red-500'}`}>{change}</p>
        </div>
        <div className='mt-2'>
        <h2 className='text-xl font-bold inline'>Total Volumes Available: </h2>
          <p className='text-lg font-medium'>{totalVolume}</p>
        </div>
        <div className='mt-2'>
          <button onClick={addToWishList} className='w-[120px] h-11 bg-pink-950 text-white hover:bg-pink-900 rounded-sm'>Wish List</button>
        </div>
    </div>
  )
}

export default Coin