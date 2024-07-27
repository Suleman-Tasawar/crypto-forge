import React from 'react'
import { useContext } from "react";
import TrendingNews from '../components/TrendingNews'
import { CryptoContext } from "../context/CryptoContext";
import GeneralPagination from './GeneralPagination';
import { CircularProgress } from '@mui/material';

function News() {

    const {news} = useContext(CryptoContext)
    const NewsData = news.map((element) => {
        return <TrendingNews 
        key={element.url}
        newsLink={element.url}
        newsImg={element.thumb_2x}
        newsTitle={element.title}
        newsText={element.description}
        newsAuthorName={element.author}
        newsDate={element.updated_at}
        /> })

    return (
      <div className="p-16 bg-gray-800 text-clight-grey flex flex-col items-center gap-24">
            <h2 className='mt-5 text-5xl'>News</h2>
            {
              news.length == 0 ?
              <CircularProgress/> :
              <GeneralPagination data={NewsData} />
            }
          </div>
    )
}

export default News