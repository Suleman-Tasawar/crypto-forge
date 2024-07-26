import React from 'react'

/*
This should recieve data from the coins api then be mapped to this components
I hav'nt saw the api data for the coin so when copying the styles from your example 
the coinCurrentValue is either green or red so i think that if the coinCurrentValue can be convnerted to a number
and if it is >0 then green otherwise red
*/
const CoinsCarousal = ({coinImage,coinName,coinCurrentValue,coinCurrentPrice}) => {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center'>
      <div className=''>
        <img className='w-full h-full' src={coinImage} alt="carousal image" />
      </div>
      <div className='p-5 flex flex-col items-center'>
        <span>{coinName}</span>
        <span>Current Price: {coinCurrentValue}</span>
        <span>Current Price: {coinCurrentPrice}</span>
      </div>
    </div>
  )
}

export default CoinsCarousal
