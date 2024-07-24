import React from 'react'

/*
This should recieve data from the coins api then be mapped to this components
I hav'nt saw the api data for the coin so when copying the styles from your example 
the coinCurrentValue is either green or red so i think that if the coinCurrentValue can be convnerted to a number
and if it is >0 then green otherwise red
*/
const CoinsCarousal = ({coinImage,coinName,coinCurrentValue,coinCurrentPrice}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-20 h-20'>
        <img className='w-full h-full ' src={coinImage} alt="carousal image" />
      </div>
      <div>
        <span>{coinName}</span>
        <span>{coinCurrentValue}</span>
      </div>
      <div>
        {coinCurrentPrice}
      </div>
    </div>
  )
}

export default CoinsCarousal
