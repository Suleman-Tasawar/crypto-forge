import React, { useEffect, useState } from 'react'
import Coin from '../components/Coin'
import { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'
import Pagination from '../components/GeneralPagination'

function Coins() {

  const {data} = useContext(CryptoContext)
  const CoinData = data.map(element => {
    return <Coin 
    key={element.id}
    name={element.name}
    image={element.image}
    price={element.current_price}
    totalVolume={element.total_volume}
    change={element.price_change_percentage_24h}
    />
  })

  return (
    <Pagination data={CoinData}/>
  )
}

export default Coins