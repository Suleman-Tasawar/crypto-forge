import React from 'react'

const TrendingNews = ({newsLink,newsImg,newsTitle,newsText,newsAuthorName,newsName,newsDate}) => {

  const date = new Date(newsDate * 1000).toDateString()

  return (
    <div className='flex lg:flex-row md:flex-col sm:flex-col justify-center items-center w-[100%] mt-2'>
      <div >
        <img className='w-[200px] h-[200px] object-fill ' src={newsImg} alt="news image" />
      </div>
      <div className='w-[70%] p-5'>
        <h2 className='mt-5 text-xl font-bold'>{newsTitle}</h2>
        <p className='mt-5 text-base'>{newsText}</p>
        <a className='mt-5 hover:text-gray-800 hover:underline hover:font-bold hover:transition-all' href={newsLink}>Visit Site</a>
        <div className='mt-5'>
          <span className='mt-5 w-5 h-3 bg-gray-800 rounded-sm text-white p-1'>{newsAuthorName == null ? "Unknown" : newsAuthorName}</span>
          <span className='mt-5 ml-2 font-semibold'>{newsName}</span>
          <span className='mt-5 ml-2 font-medium'>{date}</span>
        </div>
      </div>
    </div>
  )
}

export default TrendingNews
