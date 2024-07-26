import React from 'react'

function Coin({ image, name, price, totalVolume, change }) {
  
  return (
    <div className='m-10 flex flex-col text-white justify-center items-center text-center'>
        <div className='mt-2'><img src={image}></img></div>
        <div className='mt-2'>
          <p className='text-lg font-medium'><h2 className='text-xl font-bold inline'>Coin Name: </h2>{name}</p>
        </div>
        <div className='mt-2'>
          <p className='text-lg font-medium'><h2 className='text-xl font-bold inline'>Coin Price: </h2>{price}$</p>
        </div>
        <div className='mt-2'>
          <p className={`text-lg font-medium ${change>0?'text-green-500':'text-red-500'}`}><h2 className='text-xl font-bold inline'>Coin Last Performance: </h2>{change}</p>
        </div>
        <div className='mt-2'>
          <p className='text-lg font-medium'><h2 className='text-xl font-bold inline'>Total Volumes Available: </h2>{totalVolume}</p>
        </div>
        <div className='mt-2'>
          <button className='w-[120px] h-11 bg-pink-950 text-white hover:bg-pink-900 rounded-sm'>Wish List</button>
        </div>
    </div>
  )
}

export default Coin