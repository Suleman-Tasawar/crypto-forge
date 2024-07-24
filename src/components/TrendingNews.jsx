import React from 'react'

/* 
This component will be used in displaying the news in the Home page
Pass the follwing props below to make the News Component work
Everything has been setuped
Also wrap this component is the <link></Link> tag by importing it from react-router-dom
Once you created the routes otherwise it throws an error
*/
const TrendingNews = ({newsLink,newsImg,newsTitle,newsText,newsCoinName,newsName,newsDate}) => {
  return (
    <div className='flex lg:flex-row md:flex-col sm:flex-col justify-center items-center w-[100%] mt-2 border-b-2'>
      <div >
        <img className='w-[200px] h-[200px] object-contain ' src={newsImg} alt="news image" />
      </div>
      <div className='w-[70%] p-5'>
        <h2 className='text-xl font-bold'>{newsTitle}</h2>
        <p className='text-lg'>{newsText}</p>
        <div><span className='w-5 h-3 bg-gray-800 rounded-sm text-white p-1'>{newsCoinName}</span>|<span className='ml-2 font-semibold'>{newsName}</span>|<span className='ml-2 font-medium'>{newsDate}</span></div>
      </div>
    </div>

  )
}

export default TrendingNews
