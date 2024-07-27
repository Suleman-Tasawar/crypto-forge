import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import CoinsCarousal from "../components/CoinsCarousal";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import heroImg from "/assets/3d-casual-life-iphone-bitcoin.png";
import News from "../components/News";
import { CircularProgress } from "@mui/material";
import { getGeneralData, getNewsData } from "../utils/api"

const Home = () => {

  const {data, setData, setNews} = useContext(CryptoContext)

  useEffect(() => {
    getGeneralData(setData)
    getNewsData(setNews)
  }, [])

  return (
    <div className="h-dvh">
      <div className="w-full h-[70dvh] flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-center items-center">
        <div className="lg:w-[40%] md:w-[50%] sm:w-[80%] p-5">
          <h1 className="text-6xl text-red-500 font-bold">
            Searching for a place to get all your querries about Crypto Coins, look no further.
          </h1>
          <button className="mt-[5rem] w-[150px] h-10 bg-red-700 text-white hover:bg-red-600 rounded-md ">
            View Coins
          </button>
        </div>
        <div className="lg:w-[60%] md:w-[50%] sm:w-[80%]">
          <img
            className="w-[40vw] ml-auto h-[300px] object-contain"
            src={heroImg}
            alt="hero image"
          />
        </div>
      </div>
      <div className="carousal-container relative  h-[70dvh] bg-gray-800 text-clight-grey p-10">
        <h1 className="text-5xl mb-28 text-center">Trending Coins</h1>
        {
          data.length == 0 ?
          <CircularProgress/> :
          <Carousel
          showStatus={false}
          showThumbs={false}
          indicators={false}
          navButtonsAlwaysVisible
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          sx={{
            maxWidth: "600px",
            flexGrow: 1,
            margin: "auto",
            mt: 5,
          }}
        >
        {
          data.slice(0, 10).map((element) => {
            return <CoinsCarousal 
            key={element.id}
            coinImage = {element.image}
            coinName = {element.name}
            coinCurrentValue = {element.current_price}
            coinCurrentPrice = {element.price_change_percentage_24h}
          />
          })
        }
        </Carousel>
        }
      </div>
        <News></News>
    </div>
  );
};

export default Home;
