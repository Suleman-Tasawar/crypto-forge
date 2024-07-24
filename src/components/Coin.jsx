import React from 'react'

function Coin({ image, name, price, totalVolume, change }) {
  return (
    <div className='m-10'>
        <img src={image}></img>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{change}</p>
        <p>{totalVolume}</p>
    </div>
  )
}

export default Coin