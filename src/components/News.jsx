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
      <div className="mt-5">
            {
              news.length == 0 ?
              <CircularProgress/> :
              <GeneralPagination data={NewsData} />
            }
          </div>
    )
}

export default News