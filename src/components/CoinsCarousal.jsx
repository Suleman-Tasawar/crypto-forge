import React from 'react'

const CoinsCarousal = ({coinImage,coinName,coinCurrentValue,coinCurrentPrice}) => {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center'>
      <div>
        <img className='w-full h-full' src={coinImage} alt="carousal image" />
      </div>
      <div className='p-5 flex flex-col items-center'>
        <span>{coinName}</span>
        <span>Current Value: {coinCurrentValue}</span>
        <span>Current Price: {coinCurrentPrice}</span>
      </div>
    </div>
  )
}

export default CoinsCarousal
