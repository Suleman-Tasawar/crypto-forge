import React from 'react'

const TrendingNews = ({newsLink,newsImg,newsTitle,newsText,newsAuthorName,newsName,newsDate}) => {

  const date = new Date(newsDate * 1000).toDateString()

  return (
    <div className='flex lg:flex-row md:flex-col sm:flex-col justify-center items-center w-[100%] mt-2 border-b-2'>
      <div >
        <img className='w-[200px] h-[200px] object-contain ' src={newsImg} alt="news image" />
      </div>
      <div className='w-[70%] p-5'>
        <h2 className='text-xl font-bold'>{newsTitle}</h2>
        <p className='text-lg'>{newsText}</p>
        <a className='' href={newsLink}>Visit Site</a>
        <div>
          <span className='w-5 h-3 bg-gray-800 rounded-sm text-white p-1'>{newsAuthorName}</span>
          <span className='ml-2 font-semibold'>{newsName}</span>
          <span className='ml-2 font-medium'>{date}</span>
        </div>
      </div>
    </div>
  )
}

export default TrendingNews
